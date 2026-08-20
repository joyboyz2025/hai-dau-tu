#!/usr/bin/env node
/**
 * fetch_vn_market.js — Công cụ dữ liệu số 2 của "bộ não": KHỐI NGOẠI + ĐỘ RỘNG thị trường VN
 * (mô hình F2 "độ rộng là sự thật", F3/E7 "room ngoại & dòng bán cấu trúc" — brain/thai-pham-mental-models.md)
 *
 * Nguồn:
 *   - api-finfo.vndirect.com.vn/v4/foreigns  — mua/bán ròng khối ngoại + room ngoại TỪNG MÃ theo ngày
 *     (floor:HOSE~type:STOCK trả đủ 405 mã trong 1 trang → 1 call/ngày cho CẢ SÀN)
 *   - dchart-api.vndirect.com.vn/dchart/history — OHLC để tính độ rộng (% mã trên MA50/MA200, up/downtrend)
 *
 * Cách dùng (cần network — chạy ngoài sandbox):
 *   node fetch_vn_market.js                 # khối ngoại (nhanh, ~15 call) + dashboard
 *   node fetch_vn_market.js --breadth       # thêm độ rộng toàn sàn HOSE (~405 call OHLC, vài phút)
 *   node fetch_vn_market.js --breadth --limit 40   # smoke test độ rộng với 40 mã
 *   node fetch_vn_market.js --offline       # chỉ in dashboard từ dữ liệu đã lưu
 *
 * Lưu: data/macro/vn_foreign.json (tổng sàn + mã theo dõi), data/macro/vn_breadth.json (snapshot độ rộng).
 */
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, 'data', 'macro');
const UA = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' };
const DAYS_BACK = 21;          // số ngày lịch quét khối ngoại mỗi lần chạy
const SPECIAL = { BVBank: 'BVB' }; // symbol trong Sổ mã → mã sàn

const argv = process.argv.slice(2);
const OFFLINE = argv.includes('--offline');
const DO_BREADTH = argv.includes('--breadth');
const LIMIT = (() => { const i = argv.indexOf('--limit'); return i >= 0 ? parseInt(argv[i + 1]) : 0; })();

function loadJson(f, fallback) { try { return JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8')); } catch { return fallback; } }
function saveJson(f, obj) { fs.writeFileSync(path.join(DIR, f), JSON.stringify(obj)); }

async function getJson(url) {
  const r = await fetch(url, { headers: UA });
  if (!r.ok) throw new Error(`HTTP ${r.status} ${url.slice(0, 80)}`);
  return r.json();
}

// Mã VN đang theo dõi trong Sổ mã (region 'vn') — đọc từ data.js
function watchedCodes() {
  const src = fs.readFileSync(path.join(__dirname, 'design_handoff_hai_dau_tu', 'data.js'), 'utf8');
  const window = {};
  eval(src);
  const set = new Set();
  for (const t of window.HDT_DATA.tickers || []) {
    if (t.region !== 'vn') continue;
    for (const raw of String(t.symbol).split(/[^A-Za-z]+/)) {
      const code = SPECIAL[raw] || raw;
      if (/^[A-Z]{3}$/.test(code)) set.add(code);
    }
  }
  return set;
}

// ── PHẦN 1: KHỐI NGOẠI ─────────────────────────────────────────────────────────
async function fetchForeign() {
  const store = loadJson('vn_foreign.json', { market: {}, watch: {} });
  const watch = watchedCodes();
  const today = new Date();
  let fetched = 0;
  for (let i = 0; i < DAYS_BACK; i++) {
    const d = new Date(today.getTime() - i * 864e5);
    if (d.getDay() === 0 || d.getDay() === 6) continue;         // bỏ cuối tuần
    const ds = d.toISOString().slice(0, 10);
    if (store.market[ds] && i > 1) continue;                     // đã có (2 ngày gần nhất luôn refresh)
    let j;
    try {
      j = await getJson(`https://api-finfo.vndirect.com.vn/v4/foreigns?q=floor:HOSE~type:STOCK~tradingDate:${ds}&size=1000`);
    } catch (e) { console.error(`✗ foreigns ${ds}: ${e.message}`); continue; }
    const rows = j.data || [];
    if (!rows.length) continue;                                  // ngày nghỉ lễ
    fetched++;
    let buy = 0, sell = 0;
    for (const x of rows) { buy += x.buyVal || 0; sell += x.sellVal || 0; }
    store.market[ds] = { buy: Math.round(buy / 1e9), sell: Math.round(sell / 1e9), net: Math.round((buy - sell) / 1e9), n: rows.length };
    for (const x of rows) {
      if (!watch.has(x.code)) continue;
      (store.watch[x.code] = store.watch[x.code] || {})[ds] = {
        net: Math.round((x.netVal || 0) / 1e9 * 10) / 10,        // tỷ VND, 1 số lẻ
        owned: Math.round(((x.totalRoom || 0) - (x.currentRoom || 0)) / 1e6), // triệu cp ngoại đang giữ
        roomLeft: Math.round((x.currentRoom || 0) / 1e6)
      };
    }
    await new Promise(r => setTimeout(r, 150));
  }
  // cắt watch history về 120 ngày gần nhất cho gọn
  for (const c of Object.keys(store.watch)) {
    const dates = Object.keys(store.watch[c]).sort();
    for (const d of dates.slice(0, Math.max(0, dates.length - 120))) delete store.watch[c][d];
  }
  saveJson('vn_foreign.json', store);
  return { store, fetched };
}

// ── PHẦN 2: ĐỘ RỘNG ───────────────────────────────────────────────────────────
async function hoseList() {
  const j = await getJson('https://api-finfo.vndirect.com.vn/v4/stocks?q=type:STOCK~status:LISTED~floor:HOSE&fields=code&size=1000');
  return (j.data || []).map(x => x.code).filter(c => /^[A-Z]{3}$/.test(c)).sort();
}

async function ohlcCloses(sym, days) {
  const to = Math.floor(Date.now() / 1000);
  const from = to - days * 86400;
  const j = await getJson(`https://dchart-api.vndirect.com.vn/dchart/history?symbol=${sym}&resolution=D&from=${from}&to=${to}`);
  return (j && j.c) || [];
}

const ma = (a, n) => a.length < n ? null : a.slice(-n).reduce((x, y) => x + y, 0) / n;

async function fetchBreadth() {
  let codes = await hoseList();
  if (LIMIT) codes = codes.slice(0, LIMIT);
  const CONC = 6;
  let done = 0, ok = 0, above50 = 0, above200 = 0, up = 0, down = 0;
  const q = [...codes];
  async function worker() {
    while (q.length) {
      const c = q.shift();
      try {
        const closes = await ohlcCloses(c, 420);                 // ~290 phiên → đủ MA200
        const last = closes[closes.length - 1];
        const m50 = ma(closes, 50), m200 = ma(closes, 200);
        if (last && m50 && m200) {
          ok++;
          if (last > m50) above50++;
          if (last > m200) above200++;
          if (last > m50 && m50 > m200) up++;                    // proxy uptrend
          if (last < m50 && m50 < m200) down++;                  // proxy downtrend
        }
      } catch { /* mã lỗi thì bỏ */ }
      done++;
      if (done % 50 === 0) process.stderr.write(`  breadth: ${done}/${codes.length}\n`);
      await new Promise(r => setTimeout(r, 60));
    }
  }
  await Promise.all(Array.from({ length: CONC }, worker));
  const pct = x => Math.round(x / ok * 1000) / 10;
  const snap = {
    date: new Date().toISOString().slice(0, 10), universe: 'HOSE', n: ok,
    pctAboveMA50: pct(above50), pctAboveMA200: pct(above200),
    pctUptrend: pct(up), pctDowntrend: pct(down)
  };
  const hist = loadJson('vn_breadth.json', []);
  const i = hist.findIndex(h => h.date === snap.date && h.n === snap.n);
  if (i >= 0) hist[i] = snap; else hist.push(snap);
  saveJson('vn_breadth.json', hist);
  return snap;
}

// ── DASHBOARD ──────────────────────────────────────────────────────────────────
function dashboard(store) {
  const days = Object.keys(store.market).sort().slice(-10);
  console.log('\n=== KHỐI NGOẠI HOSE (tỷ VND, + là mua ròng) ===');
  for (const d of days) {
    const m = store.market[d];
    const bar = m.net >= 0 ? '+'.repeat(Math.min(20, Math.round(m.net / 100))) : '-'.repeat(Math.min(20, Math.round(-m.net / 100)));
    console.log(`${d}  net ${String(m.net).padStart(6)}  ${bar}`);
  }
  const cum20 = Object.keys(store.market).sort().slice(-20).reduce((a, d) => a + store.market[d].net, 0);
  console.log(`Lũy kế ${Math.min(20, Object.keys(store.market).length)} phiên gần nhất: ${cum20} tỷ`);

  const lastDay = days[days.length - 1];
  const rows = [];
  for (const [c, hist] of Object.entries(store.watch)) {
    const h = hist[lastDay];
    if (h) rows.push({ c, ...h });
  }
  if (rows.length) {
    rows.sort((a, b) => a.net - b.net);
    console.log(`\n=== SỔ MÃ · phiên ${lastDay} ===`);
    console.log('Bán ròng mạnh nhất: ' + rows.slice(0, 5).map(r => `${r.c} ${r.net}`).join(' · '));
    console.log('Mua ròng mạnh nhất: ' + rows.slice(-5).reverse().map(r => `${r.c} +${r.net}`).join(' · '));
    const fpt = store.watch.FPT && store.watch.FPT[lastDay];
    if (fpt) console.log(`FPT room ngoại: đang giữ ${fpt.owned}tr cp, trống ${fpt.roomLeft}tr (mô hình F3 — theo dõi hở room)`);
  }

  const breadth = loadJson('vn_breadth.json', []);
  if (breadth.length) {
    const b = breadth[breadth.length - 1];
    console.log(`\n=== ĐỘ RỘNG ${b.universe} · ${b.date} (${b.n} mã) ===`);
    console.log(`Trên MA50: ${b.pctAboveMA50}% · Trên MA200: ${b.pctAboveMA200}% · Uptrend: ${b.pctUptrend}% · Downtrend: ${b.pctDowntrend}%`);
    console.log(b.pctDowntrend >= 60 ? '⚠ Downtrend áp đảo — "điểm số là mặt nạ" (F2), đối chiếu câu 73% của FunStock'
      : b.pctUptrend >= 60 ? '✓ Lan tỏa thật — uptrend áp đảo' : 'Trạng thái trung tính/phân hóa');
  }
}

async function main() {
  fs.mkdirSync(DIR, { recursive: true });
  let store = loadJson('vn_foreign.json', { market: {}, watch: {} });
  if (!OFFLINE) {
    const r = await fetchForeign();
    store = r.store;
    console.log(`Khối ngoại: cập nhật ${r.fetched} phiên.`);
    if (DO_BREADTH) {
      console.log('Đang tính độ rộng' + (LIMIT ? ` (limit ${LIMIT})` : ' toàn sàn HOSE') + '…');
      await fetchBreadth();
    }
  }
  dashboard(store);
}

main().catch(e => { console.error('LỖI:', e.message); process.exit(1); });
