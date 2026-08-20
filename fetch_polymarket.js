#!/usr/bin/env node
/**
 * fetch_polymarket.js — Công cụ số 4 của "bộ não": XÁC SUẤT PREDICTION MARKET (Polymarket)
 * Mô hình A8 (brain/thai-pham-mental-models.md): "đọc kỳ vọng qua Kalshi/Polymarket —
 * dân cá cược thường đúng, đặc biệt về chính sách Fed."
 *
 * Kéo các market về Fed/lãi suất (mặc định) từ gamma-api.polymarket.com (public, không cần key),
 * lưu lịch sử xác suất theo ngày vào data/macro/polymarket.json để thấy KỲ VỌNG DỊCH CHUYỂN.
 *
 * Cách dùng (cần network — ngoài sandbox):
 *   node fetch_polymarket.js                # market Fed/lãi suất + dashboard
 *   node fetch_polymarket.js --q "gold"     # tra ad-hoc theo từ khóa (không lưu)
 *   node fetch_polymarket.js --offline      # dashboard từ dữ liệu đã lưu
 */
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, 'data', 'macro');
const FILE = 'polymarket.json';
const UA = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' };
const KEYWORDS = ['fed decision', 'fed rate', 'rate cut', 'rate hike', 'interest rate'];

async function getJson(url) {
  const r = await fetch(url, { headers: UA });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
}

async function fetchEvents(pages = 5) {
  const all = [];
  for (let i = 0; i < pages; i++) {
    const evs = await getJson(`https://gamma-api.polymarket.com/events?closed=false&limit=100&offset=${i * 100}&order=volume24hr&ascending=false`);
    if (!evs.length) break;
    all.push(...evs);
    await new Promise(r => setTimeout(r, 120));
  }
  return all;
}

function matchEvents(events, keywords) {
  return events.filter(e => {
    const t = ((e.title || '') + ' ' + (e.slug || '')).toLowerCase();
    return keywords.some(k => t.includes(k));
  });
}

function extract(events) {
  const rows = [];
  for (const e of events) {
    for (const m of e.markets || []) {
      try {
        const outcomes = JSON.parse(m.outcomes || '[]');
        const prices = JSON.parse(m.outcomePrices || '[]');
        const yesIdx = outcomes.findIndex(o => /^yes$/i.test(o));
        if (yesIdx < 0 || prices[yesIdx] == null) continue;
        rows.push({
          event: e.title, q: m.question,
          yes: Math.round(parseFloat(prices[yesIdx]) * 1000) / 10,   // %
          end: (m.endDate || '').slice(0, 10)
        });
      } catch { /* market lỗi format thì bỏ */ }
    }
  }
  return rows;
}

function loadStore() { try { return JSON.parse(fs.readFileSync(path.join(DIR, FILE), 'utf8')); } catch { return {}; } }

function dashboard(store) {
  const today = new Date().toISOString().slice(0, 10);
  console.log(`\n=== POLYMARKET · FED & LÃI SUẤT · ${today} ===`);
  console.log('(mô hình A8 — kèo pending cần chấm: "Fed không đổi lãi suất cả năm 2026" · Thái Phạm 06-08/08)\n');
  const groups = {};
  for (const [q, h] of Object.entries(store)) (groups[h.event] = groups[h.event] || []).push([q, h]);
  for (const [event, qs] of Object.entries(groups)) {
    console.log(`▸ ${event}`);
    qs.sort((a, b) => (b[1].dates[b[1].last] || 0) - (a[1].dates[a[1].last] || 0));
    for (const [q, h] of qs) {
      const cur = h.dates[h.last];
      const dates = Object.keys(h.dates).sort();
      const prev = dates.length > 1 ? h.dates[dates[dates.length - 2]] : null;
      const w1 = dates.filter(d => d <= new Date(Date.now() - 7 * 864e5).toISOString().slice(0, 10)).pop();
      const chg = prev != null && prev !== cur ? ` (${cur > prev ? '+' : ''}${Math.round((cur - prev) * 10) / 10} so với lần trước)` : '';
      const chgW = w1 && h.dates[w1] !== cur ? ` [1 tuần: ${h.dates[w1]}%]` : '';
      const short = q.replace(/^Will (there be |the Fed |)/i, '').replace(/ after the .* meeting\?$/i, '?').replace(/ happen in 2026\?$/i, ' trong 2026?');
      console.log(`   ${String(cur).padStart(5)}%  ${short}${chg}${chgW}` + (h.end ? `  · đáo hạn ${h.end}` : ''));
    }
  }
}

async function main() {
  const argv = process.argv.slice(2);
  const offline = argv.includes('--offline');
  const qi = argv.indexOf('--q');

  if (qi >= 0) { // tra ad-hoc, không lưu
    const kw = argv[qi + 1].toLowerCase();
    const rows = extract(matchEvents(await fetchEvents(5), [kw]));
    if (!rows.length) return console.log(`Không thấy market nào khớp "${kw}" trong top 500 event.`);
    for (const r of rows.sort((a, b) => b.yes - a.yes)) console.log(`${String(r.yes).padStart(5)}%  ${r.q}  · ${r.event}`);
    return;
  }

  fs.mkdirSync(DIR, { recursive: true });
  const store = loadStore();
  if (!offline) {
    const rows = extract(matchEvents(await fetchEvents(5), KEYWORDS));
    const today = new Date().toISOString().slice(0, 10);
    for (const r of rows) {
      const h = store[r.q] = store[r.q] || { event: r.event, end: r.end, dates: {} };
      h.dates[today] = r.yes; h.last = today; h.end = r.end || h.end;
    }
    fs.writeFileSync(path.join(DIR, FILE), JSON.stringify(store));
    console.log(`Cập nhật ${rows.length} market.`);
  }
  if (!Object.keys(store).length) return console.log('Chưa có dữ liệu — chạy không --offline trước.');
  dashboard(store);
}

main().catch(e => { console.error('LỖI:', e.message); process.exit(1); });
