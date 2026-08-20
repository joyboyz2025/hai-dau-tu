#!/usr/bin/env node
/**
 * detect_zones.js — Công cụ số 3 của "bộ não": MÁY NHẬN DIỆN VÙNG GIÁ trên OHLC
 * Hiện thực hóa mô hình G2 (vùng giá + mẫu hình, không indicator) và E3 (spring, cụm đỉnh ra hàng)
 * trong brain/thai-pham-mental-models.md — những thứ Thái Phạm nhìn trên chart:
 *   - vùng hỗ trợ / kháng cự (cụm swing high/low chạm ≥2 lần)
 *   - đỉnh/đáy 52 tuần làm mốc
 *   - MA50/MA200 ngày + MA40 tuần (~MA200 ngày trên khung tuần) → trạng thái trend
 *   - GAP chưa lấp (mô hình "lấp gap" — Intel gap 70, AMD gap 350)
 *   - SPRING/fake-out gần đây (thủng đáy cũ rồi đóng cửa ngược lên — tín hiệu TỐT cho người cầm)
 *   - cụm 2-3 đỉnh cùng vùng gần đỉnh 52w (mô hình "ba đỉnh = ra hàng")
 *
 * Cách dùng (cần network — ngoài sandbox):
 *   node detect_zones.js HPG GAS FPT        # mã VN (dchart VNDirect)
 *   node detect_zones.js --yahoo GC=F CL=F  # quốc tế/hàng hóa qua Yahoo (GC=F vàng, CL=F WTI, BTC-USD…)
 *   node detect_zones.js --watch            # quét toàn bộ mã VN trong Sổ mã, in bảng 1 dòng/mã
 */
const fs = require('fs');
const path = require('path');

const UA = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' };
const SPECIAL = { BVBank: 'BVB' };
const DAYS = 900;               // ~600 phiên → đủ MA40 tuần + cấu trúc 2 năm
const CLUSTER_PCT = 0.015;      // gom swing point trong ±1,5%
const SWING_K = 3;              // swing = cực trị trong cửa sổ ±3 phiên
const GAP_PCT = 0.015;          // gap đáng kể nếu hở ≥1,5%

async function getJson(url) {
  const r = await fetch(url, { headers: UA });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
}

async function ohlcVN(sym) {
  const to = Math.floor(Date.now() / 1000), from = to - DAYS * 86400;
  const j = await getJson(`https://dchart-api.vndirect.com.vn/dchart/history?symbol=${sym}&resolution=D&from=${from}&to=${to}`);
  if (!j || !j.t || !j.t.length) throw new Error('không có dữ liệu dchart');
  return j.t.map((t, i) => ({ d: new Date(t * 1000).toISOString().slice(0, 10), o: j.o[i], h: j.h[i], l: j.l[i], c: j.c[i] }));
}

async function ohlcYahoo(sym) {
  const j = await getJson(`https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(sym)}?interval=1d&range=3y`);
  const r = j.chart && j.chart.result && j.chart.result[0];
  if (!r || !r.timestamp) throw new Error('không có dữ liệu Yahoo');
  const q = r.indicators.quote[0];
  const bars = [];
  for (let i = 0; i < r.timestamp.length; i++) {
    if (q.close[i] == null) continue;
    bars.push({ d: new Date(r.timestamp[i] * 1000).toISOString().slice(0, 10), o: q.open[i], h: q.high[i], l: q.low[i], c: q.close[i] });
  }
  return bars;
}

const ma = (arr, n) => arr.length < n ? null : arr.slice(-n).reduce((a, b) => a + b, 0) / n;
const rnd = x => x >= 1000 ? Math.round(x) : Math.round(x * 100) / 100;
const pctTo = (from, to) => Math.round((to / from - 1) * 1000) / 10;

function weeklyCloses(bars) {
  const w = new Map(); // key = năm-tuầnISO, giữ close cuối tuần
  for (const b of bars) {
    const dt = new Date(b.d);
    const th = new Date(dt); th.setDate(dt.getDate() + 3 - ((dt.getDay() + 6) % 7)); // thứ 5 của tuần ISO
    w.set(th.toISOString().slice(0, 10), b.c);
  }
  return [...w.values()];
}

function swings(bars, k) {
  const highs = [], lows = [];
  for (let i = k; i < bars.length - k; i++) {
    const win = bars.slice(i - k, i + k + 1);
    if (bars[i].h === Math.max(...win.map(b => b.h))) highs.push({ i, p: bars[i].h, d: bars[i].d });
    if (bars[i].l === Math.min(...win.map(b => b.l))) lows.push({ i, p: bars[i].l, d: bars[i].d });
  }
  return { highs, lows };
}

const MAX_SPAN = 0.035;         // một vùng không được rộng quá 3,5% (chống nối chuỗi thành band vô nghĩa)
function cluster(points) {
  const sorted = [...points].sort((a, b) => a.p - b.p);
  const out = [];
  for (const pt of sorted) {
    const last = out[out.length - 1];
    if (last && pt.p <= last.hi * (1 + CLUSTER_PCT) && pt.p <= last.lo * (1 + MAX_SPAN)) {
      last.hi = Math.max(last.hi, pt.p); last.n++; last.lastDate = pt.d > last.lastDate ? pt.d : last.lastDate;
    } else out.push({ lo: pt.p, hi: pt.p, n: 1, lastDate: pt.d });
  }
  return out.filter(c => c.n >= 2);
}

function unfilledGaps(bars) {
  const gaps = [];
  for (let i = 1; i < bars.length; i++) {
    const prev = bars[i - 1], cur = bars[i];
    if (cur.l > prev.h * (1 + GAP_PCT)) gaps.push({ type: 'up', top: cur.l, bot: prev.h, d: cur.d, filled: false });
    if (cur.h < prev.l * (1 - GAP_PCT)) gaps.push({ type: 'down', top: prev.l, bot: cur.h, d: cur.d, filled: false });
  }
  for (const g of gaps) {
    const after = bars.filter(b => b.d > g.d);
    if (g.type === 'up' && after.some(b => b.l <= g.bot)) g.filled = true;
    if (g.type === 'down' && after.some(b => b.h >= g.top)) g.filled = true;
  }
  return gaps.filter(g => !g.filled);
}

function findSpring(bars, lookback = 30, base = 60) {
  for (let i = bars.length - 1; i >= Math.max(base, bars.length - lookback); i--) {
    const floor = Math.min(...bars.slice(i - base, i).map(b => b.l));
    if (bars[i].l < floor * 0.995 && bars[i].c > floor) return { d: bars[i].d, floor: rnd(floor), low: rnd(bars[i].l), close: rnd(bars[i].c) };
  }
  return null;
}

function analyze(sym, bars) {
  if (bars.length < 120) throw new Error(`chỉ có ${bars.length} phiên — không đủ`);
  const closes = bars.map(b => b.c);
  const last = bars[bars.length - 1];
  const m50 = ma(closes, 50), m200 = ma(closes, 200);
  const wk = weeklyCloses(bars);
  const m40w = ma(wk, 40);
  const y = bars.slice(-252);
  const hi52 = Math.max(...y.map(b => b.h)), lo52 = Math.min(...y.map(b => b.l));

  const { highs, lows } = swings(bars.slice(-500), SWING_K);
  const res = cluster(highs).filter(c => c.lo > last.c).sort((a, b) => a.lo - b.lo);
  const sup = cluster(lows).filter(c => c.hi < last.c).sort((a, b) => b.hi - a.hi);
  const gaps = unfilledGaps(bars.slice(-500));
  const spring = findSpring(bars);
  // "2-3 đỉnh = ra hàng" chỉ có nghĩa khi GIÁ ĐANG Ở GẦN cụm đỉnh đó (trong 10% của đỉnh 52w)
  const topCluster = last.c >= hi52 * 0.9 ? cluster(highs).filter(c => c.hi >= hi52 * 0.94 && c.n >= 2) : [];

  const trend = m50 && m200
    ? (last.c > m50 && m50 > m200 ? 'UPTREND' : last.c < m50 && m50 < m200 ? 'DOWNTREND' : 'TRUNG TÍNH/PHÂN HÓA')
    : 'n/a';

  return { sym, last, m50, m200, m40w, hi52, lo52, res, sup, gaps, spring, topCluster, trend, n: bars.length };
}

const zoneStr = c => (c.lo === c.hi ? rnd(c.lo) : `${rnd(c.lo)}–${rnd(c.hi)}`) + ` (chạm ${c.n} lần, gần nhất ${c.lastDate})`;

function report(a) {
  console.log(`\n=== ${a.sym} · ${rnd(a.last.c)} (${a.last.d}) · ${a.n} phiên ===`);
  console.log(`Trend: ${a.trend}` + (a.m50 ? ` (giá ${rnd(a.last.c)} | MA50 ${rnd(a.m50)} | MA200 ${a.m200 ? rnd(a.m200) : 'n/a'}${a.m40w ? ` | MA40 tuần ${rnd(a.m40w)}` : ''})` : ''));
  console.log(`52 tuần: đỉnh ${rnd(a.hi52)} (${pctTo(a.last.c, a.hi52)}%) · đáy ${rnd(a.lo52)} (${pctTo(a.last.c, a.lo52)}%)`);
  console.log('Kháng cự trên giá: ' + (a.res.slice(0, 3).map(zoneStr).join(' | ') || '—'));
  console.log('Hỗ trợ dưới giá:  ' + (a.sup.slice(0, 3).map(zoneStr).join(' | ') || '—'));
  if (a.gaps.length) {
    for (const g of a.gaps.slice(-3)) {
      const rel = g.type === 'up' ? (g.top < a.last.c ? 'DƯỚI giá — nam châm lấp gap (mô hình Intel-70)' : 'trên giá') : (g.bot > a.last.c ? 'TRÊN giá — kháng cự gap' : 'dưới giá');
      console.log(`Gap ${g.type} chưa lấp: ${rnd(g.bot)}→${rnd(g.top)} (${g.d}) — ${rel}`);
    }
  } else console.log('Gap chưa lấp: không');
  if (a.spring) console.log(`★ SPRING ${a.spring.d}: thủng nền ${a.spring.floor} (low ${a.spring.low}) rồi đóng ${a.spring.close} — fake-out, tín hiệu TỐT cho người cầm (E3)`);
  if (a.topCluster.length) console.log(`⚠ CỤM ĐỈNH: ${a.topCluster.map(zoneStr).join(' | ')} — sát đỉnh 52w, cảnh giác mẫu "2-3 đỉnh = ra hàng" (E3)`);
}

function watchedVN() {
  const src = fs.readFileSync(path.join(__dirname, 'design_handoff_hai_dau_tu', 'data.js'), 'utf8');
  const window = {}; eval(src);
  const set = new Set();
  for (const t of window.HDT_DATA.tickers || []) {
    if (t.region !== 'vn') continue;
    for (const raw of String(t.symbol).split(/[^A-Za-z0-9]+/)) {
      const code = SPECIAL[raw] || raw;
      if (/^[A-Z]{3}$/.test(code) || code === 'VN30') set.add(code);
    }
  }
  return [...set].sort();
}

async function main() {
  const argv = process.argv.slice(2);
  const yahoo = argv.includes('--yahoo');
  const watch = argv.includes('--watch');
  const syms = argv.filter(a => !a.startsWith('--'));

  if (watch) {
    const codes = watchedVN();
    console.log(`Quét ${codes.length} mã VN trong Sổ mã…\n`);
    const pad = (x, n) => String(x).padEnd(n);
    console.log(pad('MÃ', 6) + pad('GIÁ', 9) + pad('TREND', 20) + pad('HỖ TRỢ GẦN', 16) + pad('KHÁNG CỰ GẦN', 16) + 'CỜ');
    for (const c of codes) {
      try {
        const a = analyze(c, await ohlcVN(c));
        const flags = [a.spring ? 'SPRING' : '', a.topCluster.length ? 'CỤM ĐỈNH' : '',
          a.gaps.some(g => g.type === 'up' && g.top < a.last.c) ? 'GAP DƯỚI' : ''].filter(Boolean).join('+');
        console.log(pad(c, 6) + pad(rnd(a.last.c), 9) + pad(a.trend, 20) +
          pad(a.sup[0] ? rnd(a.sup[0].hi) + ` (${pctTo(a.last.c, a.sup[0].hi)}%)` : '—', 16) +
          pad(a.res[0] ? rnd(a.res[0].lo) + ` (+${pctTo(a.last.c, a.res[0].lo)}%)` : '—', 16) + flags);
      } catch (e) { console.log(pad(c, 6) + '✗ ' + e.message); }
      await new Promise(r => setTimeout(r, 120));
    }
    return;
  }

  if (!syms.length) { console.error('Cách dùng: node detect_zones.js HPG | --yahoo GC=F | --watch'); process.exit(1); }
  for (const s of syms) {
    try { report(analyze(s, yahoo ? await ohlcYahoo(s) : await ohlcVN(s))); }
    catch (e) { console.error(`✗ ${s}: ${e.message}`); }
  }
}

main().catch(e => { console.error('LỖI:', e.message); process.exit(1); });
