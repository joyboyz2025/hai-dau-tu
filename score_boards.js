#!/usr/bin/env node
/**
 * score_boards.js — CHẤM TỰ ĐỘNG các bảng hướng mù của Claude (brain/boards.json)
 *
 *   node score_boards.js            chấm tất cả bảng, in bảng kết quả
 *   node score_boards.js --write    như trên + ghi brain/scoreboard.md và cập nhật
 *                                   khối "Sổ điểm hướng (cộng dồn)" trong brain/claude-calls.md
 *   node score_boards.js --offline  không gọi mạng (chỉ dùng data/macro + cache)
 *
 * Mỗi dòng được chấm HAI lần:
 *   1. Claude  — theo đúng hướng đã ghi, có xét mốc hỏng (break) nếu có.
 *   2. Mốc so sánh "đà" — hướng của 20 phiên TRƯỚC ngày viết (lên / xuống / ngang),
 *      chấm bằng cùng luật nhưng KHÔNG có mốc hỏng. Claude chỉ có giá trị khi đúng hơn mốc này.
 *
 * Ngưỡng "đi ngang" (band) tính theo biến động riêng từng tài sản:
 *   band = 0,5 × độ lệch chuẩn của lợi suất 20 phiên, đo trên 250 phiên trước ngày viết.
 *   Lợi suất trái phiếu và đường cong dùng thay đổi tuyệt đối (điểm %), không dùng %.
 *
 * Luật chấm (ret = thay đổi từ ngày viết tới ngày chấm):
 *   up        ret ≥ +band → ĐÚNG · ret ≤ −band → SAI · còn lại NỬA
 *   down      đối xứng
 *   side      |ret| ≤ band → ĐÚNG · ≤ 2·band → NỬA · còn lại SAI
 *   side_down ret ≤ −0,25·band → ĐÚNG · ret ≤ +band → NỬA · còn lại SAI
 *   range     giá chấm trong [lo,hi] → ĐÚNG · lệch khỏi biên ≤ 3% → NỬA · còn lại SAI
 *   hold_above  giá chấm ≥ level và không có tuần nào đóng dưới level − 0,05 → ĐÚNG ·
 *               giá chấm ≥ level nhưng có tuần thủng → NỬA · còn lại SAI
 *   curve_flat / curve_steep  chênh 30Y−10Y giảm / tăng quá 0,02 điểm → ĐÚNG · ngược lại quá 0,02 → SAI · còn lại NỬA
 *   none      không gọi → không tính điểm
 * Mốc hỏng kích hoạt (close = bất kỳ giá đóng ngày nào, week = giá đóng tuần) trước ngày chấm → SAI, bất kể ret.
 * Bảng chưa tới hạn → chấm TẠM tại giá mới nhất.
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const ARGS = process.argv.slice(2);
const WRITE = ARGS.includes('--write');
const OFFLINE = ARGS.includes('--offline');
const CACHE = path.join(ROOT, 'data', 'macro', 'score_cache.json');
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36';

const toMap = pts => new Map(pts.map(([d, v]) => [d, v]));
const dates = m => [...m.keys()].sort();
let cache = {};
try { cache = JSON.parse(fs.readFileSync(CACHE, 'utf8')); } catch (e) {}

async function vnd(sym) {
  const from = Math.floor(new Date('2024-06-01') / 1000), to = Math.floor(Date.now() / 1000);
  const r = await fetch(`https://dchart-api.vndirect.com.vn/dchart/history?symbol=${sym}&resolution=D&from=${from}&to=${to}`, { headers: { 'User-Agent': UA } });
  const j = await r.json();
  return j.t.map((t, i) => [new Date(t * 1000).toISOString().slice(0, 10), j.c[i]]);
}
async function yahoo(sym) {
  let j;
  for (const host of ['query1', 'query2', 'query1']) {           // Yahoo hay trả 429 — đổi host, chờ rồi thử lại
    const r = await fetch(`https://${host}.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(sym)}?range=3y&interval=1d`, { headers: { 'User-Agent': UA } });
    if (r.ok) { j = await r.json(); break; }
    await new Promise(s => setTimeout(s, 4000));
  }
  if (!j) throw new Error('Yahoo từ chối (429)');
  const res = j.chart.result[0]; const c = res.indicators.quote[0].close;
  return res.timestamp.map((t, i) => [new Date(t * 1000).toISOString().slice(0, 10), c[i]]).filter(p => p[1] != null);
}
async function remote(key, fn) {
  if (!OFFLINE) { try { cache[key] = await fn(); } catch (e) { console.error('  ! không tải được', key, e.message); } }
  if (!cache[key]) throw new Error('Không có dữ liệu cho ' + key);
  return toMap(cache[key]);
}
function macro(id) { return toMap(JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'macro', id + '.json'), 'utf8')).points); }

const seriesMemo = {};
async function series(spec) {
  if (seriesMemo[spec]) return seriesMemo[spec];
  let m;
  if (spec === 'curve') {
    const a = await series('us30y'), b = await series('us10y');
    m = new Map(dates(a).filter(d => b.has(d)).map(d => [d, +(a.get(d) - b.get(d)).toFixed(3)]));
  } else if (spec.startsWith('vn:')) m = await remote(spec, () => vnd(spec.slice(3)));
  else if (spec.startsWith('yahoo:')) m = await remote(spec, () => yahoo(spec.slice(6)));
  else if (spec.startsWith('basket:')) {
    // rổ đồng trọng số: chỉ số hóa từng mã về 100 tại ngày đầu chung, rồi lấy trung bình
    const legs = [];
    for (const s of spec.slice(7).split(',')) legs.push(await series('vn:' + s));
    const common = dates(legs[0]).filter(d => legs.every(l => l.has(d)));
    const base = legs.map(l => l.get(common[0]));
    m = new Map(common.map(d => [d, +(legs.reduce((s, l, i) => s + 100 * l.get(d) / base[i], 0) / legs.length).toFixed(3)]));
  } else m = macro(spec);
  return (seriesMemo[spec] = m);
}

const ABS = spec => spec === 'us30y' || spec === 'us10y' || spec === 'curve';
function onOrBefore(m, d) { const ds = dates(m).filter(x => x <= d); return ds.length ? ds[ds.length - 1] : null; }
function change(m, spec, d0, d1) { const a = m.get(d0), b = m.get(d1); return ABS(spec) ? b - a : (b / a - 1) * 100; }
function band(m, spec, d0) {
  const ds = dates(m).filter(x => x <= d0).slice(-270);
  const r = [];
  for (let i = 20; i < ds.length; i++) r.push(change(m, spec, ds[i - 20], ds[i]));
  const w = r.slice(-250); const mu = w.reduce((s, x) => s + x, 0) / w.length;
  const sd = Math.sqrt(w.reduce((s, x) => s + (x - mu) ** 2, 0) / w.length);
  return 0.5 * sd;
}
function weekCloses(m, from, to) {
  const out = new Map();
  for (const d of dates(m)) if (d > from && d <= to) {
    const t = new Date(d + 'T00:00:00Z'); const monday = new Date(t); monday.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 6) % 7));
    out.set(monday.toISOString().slice(0, 10), d);             // giữ ngày giao dịch cuối cùng của tuần
  }
  return [...out.values()];
}
function breakHit(m, br, from, to) {
  if (!br) return null;
  const pts = br.basis === 'week' ? weekCloses(m, from, to) : dates(m).filter(d => d > from && d <= to);
  // tuần đang dở thì chưa phải giá đóng tuần
  const last = dates(m).slice(-1)[0];
  const today = new Date().toISOString().slice(0, 10);
  const usable = br.basis === 'week' ? pts.filter(d => !(d === last && weekKey(d) === weekKey(today))) : pts;
  for (const d of usable) {
    const v = m.get(d);
    if ((br.dir === 'below' && v < br.level) || (br.dir === 'above' && v > br.level)) return d;
  }
  return null;
}
function weekKey(d) { const t = new Date(d + 'T00:00:00Z'); t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 6) % 7)); return t.toISOString().slice(0, 10); }

function judge(call, ret, b, line, m, d0, d1) {
  switch (call) {
    case 'up':   return ret >= b ? 'ĐÚNG' : ret <= -b ? 'SAI' : 'NỬA';
    case 'down': return ret <= -b ? 'ĐÚNG' : ret >= b ? 'SAI' : 'NỬA';
    case 'side': { const a = Math.abs(ret); return a <= b ? 'ĐÚNG' : a <= 2 * b ? 'NỬA' : 'SAI'; }
    case 'side_down': return ret <= -0.25 * b ? 'ĐÚNG' : ret <= b ? 'NỬA' : 'SAI';
    case 'range': { const v = m.get(d1); if (v >= line.lo && v <= line.hi) return 'ĐÚNG';
      const off = v < line.lo ? (line.lo - v) / line.lo : (v - line.hi) / line.hi; return off <= 0.03 ? 'NỬA' : 'SAI'; }
    case 'hold_above': { const v = m.get(d1); if (v < line.level) return 'SAI';
      const dip = weekCloses(m, d0, d1).some(d => m.get(d) < line.level - 0.05); return dip ? 'NỬA' : 'ĐÚNG'; }
    case 'curve_flat':  return ret <= -0.02 ? 'ĐÚNG' : ret >= 0.02 ? 'SAI' : 'NỬA';
    case 'curve_steep': return ret >= 0.02 ? 'ĐÚNG' : ret <= -0.02 ? 'SAI' : 'NỬA';
  }
  return null;
}
// Mốc so sánh "đà": hướng 20 phiên trước ngày viết. Với loại mức/đường cong: giữ trạng thái hiện tại.
function baselineCall(line, m, spec, d0, b) {
  const ds = dates(m).filter(x => x <= d0); const prev = ds[ds.length - 21];
  const mom = change(m, spec, prev, d0);
  if (line.call === 'hold_above') return { call: m.get(d0) >= line.level ? 'hold_above' : 'down', label: m.get(d0) >= line.level ? 'giữ trên mốc' : 'dưới mốc' };
  if (line.call === 'curve_flat' || line.call === 'curve_steep') return mom < 0 ? { call: 'curve_flat', label: 'phẳng (theo đà)' } : { call: 'curve_steep', label: 'dốc (theo đà)' };
  const c = mom >= b ? 'up' : mom <= -b ? 'down' : 'side';
  return { call: c, label: { up: '↑', down: '↓', side: '→' }[c] + ' (đà ' + (ABS(spec) ? mom.toFixed(2) + 'đ' : mom.toFixed(1) + '%') + ')' };
}

const PTS = { 'ĐÚNG': 1, 'NỬA': 0.5, 'SAI': 0 };
const ARROW = { up: '↑', down: '↓', side: '→', side_down: '→↓', range: '↔', hold_above: '≥', curve_flat: 'phẳng', curve_steep: 'dốc', none: '—' };

(async () => {
  const L = JSON.parse(fs.readFileSync(path.join(ROOT, 'brain', 'boards.json'), 'utf8'));
  const today = new Date().toISOString().slice(0, 10);
  const rows = [];
  for (const bd of L.boards) {
    for (const line of bd.lines) {
      if (line.call === 'none') { rows.push({ bd, line, skip: true }); continue; }
      let m;
      try { m = await series(line.series); } catch (e) { rows.push({ bd, line, skip: true, nodata: true }); continue; }
      const d0 = onOrBefore(m, bd.written);
      const final = today > bd.due;
      const d1 = onOrBefore(m, final ? bd.due : today);
      const b = band(m, line.series, d0);
      const ret = change(m, line.series, d0, d1);
      const hit = breakHit(m, line.break, d0, d1);
      let v = judge(line.call, ret, b, line, m, d0, d1);
      if (hit) v = 'SAI';
      const bc = baselineCall(line, m, line.series, d0, b);
      const bv = judge(bc.call, ret, b, { ...line, call: bc.call }, m, d0, d1);
      rows.push({ bd, line, d0, d1, final, b, ret, hit, v, bc, bv, p0: m.get(d0), p1: m.get(d1) });
    }
  }

  const fmt = (x, abs) => abs ? (x >= 0 ? '+' : '') + x.toFixed(2) + 'đ' : (x >= 0 ? '+' : '') + x.toFixed(1) + '%';
  const num = x => x >= 1000 ? Math.round(x).toLocaleString('vi-VN') : (+x.toFixed(3)).toLocaleString('vi-VN');
  const scored = rows.filter(r => !r.skip);
  const tally = (arr, k) => { const t = { 'ĐÚNG': 0, 'NỬA': 0, 'SAI': 0 }; arr.forEach(r => t[r[k]]++); const pts = arr.reduce((s, r) => s + PTS[r[k]], 0); return { ...t, n: arr.length, pct: arr.length ? Math.round(100 * pts / arr.length) : 0 }; };

  let md = `# Bảng điểm tự động — bảng hướng mù của Claude\n\n_Sinh bởi \`node score_boards.js --write\` ngày ${today}. Sổ cái: \`brain/boards.json\`. Luật chấm: đầu file \`score_boards.js\`._\n\n`;
  md += `**Mốc so sánh "đà"** = đoán rằng tài sản đi tiếp theo hướng 20 phiên trước ngày viết. Claude chỉ có giá trị khi điểm cao hơn mốc này.\n\n`;
  const T = tally(scored, 'v'), B = tally(scored, 'bv');
  const fin = scored.filter(r => r.final);
  md += `## Tổng\n\n| | Số dòng | Đúng | Nửa | Sai | Điểm (đúng=1, nửa=0,5) |\n|---|---|---|---|---|---|\n`;
  md += `| **Claude** | ${T.n} | ${T['ĐÚNG']} | ${T['NỬA']} | ${T['SAI']} | **${T.pct}%** |\n| Mốc so sánh "đà" | ${B.n} | ${B['ĐÚNG']} | ${B['NỬA']} | ${B['SAI']} | **${B.pct}%** |\n\n`;
  md += `Trong đó đã tới hạn chính thức: ${fin.length} dòng${fin.length ? ` — Claude ${tally(fin, 'v').pct}% · đà ${tally(fin, 'bv').pct}%` : ' (các dòng còn lại là chấm TẠM tại giá mới nhất)'}.\n\n`;

  const GROUP = { gold: 'Vàng', btc: 'Bitcoin', wti: 'Dầu WTI', dxy: 'DXY', spx: 'CK Mỹ (S&P)', us30y: 'Lợi suất 30Y', curve: 'Đường cong 30Y−10Y', 'vn:VNINDEX': 'VN-Index', 'yahoo:^NDX': 'Công nghệ Mỹ' };
  const groups = {};
  for (const r of scored) (groups[GROUP[r.line.series] || r.line.asset.replace(/\s*\(.*\)/, '')] ||= []).push(r);
  md += `## Theo tài sản\n\n| Tài sản | Dòng | Claude | Đà | Chênh |\n|---|---|---|---|---|\n`;
  for (const [g, arr] of Object.entries(groups).sort((a, b) => tally(b[1], 'v').pct - tally(b[1], 'bv').pct - (tally(a[1], 'v').pct - tally(a[1], 'bv').pct))) {
    const c = tally(arr, 'v'), d = tally(arr, 'bv');
    md += `| ${g} | ${arr.length} | ${c.pct}% | ${d.pct}% | ${c.pct - d.pct >= 0 ? '+' : ''}${c.pct - d.pct} |\n`;
  }

  for (const bd of L.boards) {
    const rs = rows.filter(r => r.bd === bd);
    const status = today > bd.due ? 'ĐÃ TỚI HẠN' : `chấm TẠM · hạn ${bd.due}`;
    md += `\n## Bảng ${bd.id} — viết ${bd.written} · ${status}\n\n| # | Tài sản | Gọi | Giá viết → giá chấm | Thay đổi | Ngưỡng | Mốc hỏng | Claude | Đà | Chấm tay |\n|---|---|---|---|---|---|---|---|---|---|\n`;
    for (const r of rs) {
      const L2 = r.line;
      if (r.skip) { md += `| ${L2.n} | ${L2.asset} | ${r.nodata ? 'THIẾU DỮ LIỆU (chạy lại sau)' : 'không gọi'} | — | — | — | — | không tính | — | ${L2.manual || ''} |\n`; continue; }
      const abs = ABS(L2.series);
      const callTxt = L2.call === 'range' ? `↔ ${L2.lo}–${L2.hi}` : L2.call === 'hold_above' ? `≥ ${L2.level}` : ARROW[L2.call];
      const br = L2.break ? `${L2.break.dir === 'below' ? '<' : '>'} ${num(L2.break.level)} (${L2.break.basis === 'week' ? 'tuần' : 'ngày'})${r.hit ? ' **kích hoạt ' + r.hit.slice(5).split('-').reverse().join('/') + '**' : ''}` : '—';
      md += `| ${L2.n} | ${L2.asset} | ${callTxt} | ${num(r.p0)} → ${num(r.p1)} | ${fmt(r.ret, abs)} | ±${abs ? r.b.toFixed(2) + 'đ' : r.b.toFixed(1) + '%'} | ${br} | **${r.v}** | ${r.bv} · ${r.bc.label} | ${L2.manual || ''} |\n`;
    }
    for (const u of (bd.unscored || [])) md += `| — | ${u} | | | | | | không chấm | | |\n`;
  }
  md += `\n## Chấm máy khác chấm tay ở đâu\n\nMáy chấm HƯỚNG tại ngày chấm; sổ tay có lúc chấm NHỊP hoặc chấm sớm theo điều kiện viết bằng lời. Hai cách lệch nhau là bình thường — nhưng từ nay **điểm chính thức là điểm máy**, chấm tay chỉ để giải thích.\n`;

  console.log(md);
  if (WRITE) {
    fs.writeFileSync(path.join(ROOT, 'brain', 'scoreboard.md'), md);
    const CC = path.join(ROOT, 'brain', 'claude-calls.md');
    let cc = fs.readFileSync(CC, 'utf8');
    const block = `## Sổ điểm hướng (cộng dồn)\n\n<!-- score:start — khối này do score_boards.js --write ghi đè, đừng sửa tay -->\n` +
      `_Cập nhật ${today}. Chi tiết từng dòng: brain/scoreboard.md._\n\n| Bảng | Viết | Hạn | Trạng thái | Dòng | Claude | Mốc "đà" |\n|---|---|---|---|---|---|---|\n` +
      L.boards.map(bd => { const rs = scored.filter(r => r.bd === bd); const c = tally(rs, 'v'), d = tally(rs, 'bv');
        return `| ${bd.id} | ${bd.written.slice(5).split('-').reverse().join('/')} | ${bd.due.slice(5).split('-').reverse().join('/')} | ${today > bd.due ? 'đã tới hạn' : 'tạm'} | ${c.n} | ${c['ĐÚNG']}Đ ${c['NỬA']}N ${c['SAI']}S · **${c.pct}%** | ${d.pct}% |`; }).join('\n') +
      `\n| **Tổng** | | | | ${T.n} | **${T.pct}%** | ${B.pct}% |\n<!-- score:end -->\n`;
    cc = cc.replace(/## Sổ điểm hướng \(cộng dồn\)[\s\S]*?(?=\n---\n)/, block);
    fs.writeFileSync(CC, cc);
    fs.writeFileSync(CACHE, JSON.stringify(cache));
    console.error('✓ đã ghi brain/scoreboard.md và khối cộng dồn trong claude-calls.md');
  } else if (!OFFLINE) fs.writeFileSync(CACHE, JSON.stringify(cache));
})().catch(e => { console.error(e); process.exit(1); });
