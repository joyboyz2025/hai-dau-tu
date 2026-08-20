#!/usr/bin/env node
/**
 * fetch_macro.js — Công cụ dữ liệu vĩ mô cho "bộ não" (brain/thai-pham-mental-models.md)
 *
 * Kéo các chuỗi dữ liệu Thái Phạm dùng nhiều nhất (mô hình A3, B2, B3, F6...):
 *   - Lợi suất trái phiếu Mỹ 10Y / 30Y  (FRED, không cần API key)
 *   - DXY, Vàng, Dầu WTI, Dầu Brent, USD/VND  (Yahoo Finance chart API)
 * Lưu lịch sử vào data/macro/<series>.json (merge theo ngày, chạy lại bao nhiêu lần cũng được).
 *
 * Cách dùng:
 *   node fetch_macro.js            # kéo dữ liệu mới + in dashboard
 *   node fetch_macro.js --offline  # chỉ in dashboard từ dữ liệu đã lưu, không gọi mạng
 *
 * LƯU Ý: cần network — chạy ngoài sandbox (giống scan_channels.py).
 * Ngưỡng cảnh báo trong dashboard bám theo thư viện mô hình, sửa ở CONFIG bên dưới.
 */
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, 'data', 'macro');
const UA = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' };

const SERIES = [
  { id: 'us10y',  name: 'Lợi suất Mỹ 10Y',  unit: '%',      src: 'fred',  code: 'DGS10' },
  { id: 'us30y',  name: 'Lợi suất Mỹ 30Y',  unit: '%',      src: 'fred',  code: 'DGS30' },
  { id: 'dxy',    name: 'DXY (chỉ số đô)',  unit: '',       src: 'yahoo', code: 'DX-Y.NYB' },
  { id: 'gold',   name: 'Vàng (GC=F)',      unit: 'USD/oz', src: 'yahoo', code: 'GC=F' },
  { id: 'wti',    name: 'Dầu WTI',          unit: 'USD',    src: 'yahoo', code: 'CL=F' },
  { id: 'brent',  name: 'Dầu Brent',        unit: 'USD',    src: 'yahoo', code: 'BZ=F' },
  { id: 'usdvnd', name: 'USD/VND',          unit: 'VND',    src: 'yahoo', code: 'VND=X' },
];

// Ngưỡng bám mô hình trong brain/thai-pham-mental-models.md — cập nhật khi kèo đổi.
const CONFIG = {
  us30y:  { flag: v => v >= 5.2 ? '⚠ TRÊN 5,2% — vùng "định giá lại CK Mỹ" (A3, video 19/08)' : 'dưới mốc 5,2%' },
  us10y:  { flag: v => v >= 4.82 ? '⚠ chạm mốc BofA 4,82% (dự 2 lần tăng lãi)' : v >= 4.7 ? 'sát đỉnh 4,7% (mốc T11/2023)' : '' },
  gold:   { flag: v => v >= 5300 ? '★ VÀO VÙNG CHỐT LỜI XA 5.300–5.600 (kèo 19/08)' :
                     v <= 4170 ? '★ vùng mua 1/3 thứ ba (4.170)' :
                     v <= 4260 ? '★ vùng mua 1/3 thứ hai (4.260)' :
                     v <= 4340 ? '★ vùng mua 1/3 thứ nhất (4.340)' : 'giữa các mốc kèo 19/08' },
  wti:    { flag: v => v > 90 ? '⚠ vượt band 85–90 — kịch bản leo thang (B3)' :
                     v < 78  ? '⚠ thủng 78 — mốc cắt lỗ long dầu (kèo 18/07)' : 'trong band 78–90' },
  brent:  { flag: v => v > 96 ? '⚠ vượt 95–96 — kịch bản đánh lớn (B3)' : v < 85 ? 'dưới band 85–90' : 'trong band 85–96' },
  usdvnd: { flag: () => '' },
  dxy:    { flag: () => '' },
};

async function fetchFred(code) {
  const url = `https://fred.stlouisfed.org/graph/fredgraph.csv?id=${code}`;
  const txt = await (await fetch(url, { headers: UA })).text();
  const pts = [];
  for (const line of txt.trim().split('\n').slice(1)) {
    const [d, v] = line.split(',');
    const num = parseFloat(v);
    if (d && !isNaN(num)) pts.push([d, num]);
  }
  if (!pts.length) throw new Error('FRED trả về rỗng');
  return pts;
}

async function fetchYahoo(code, range) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(code)}?interval=1d&range=${range}`;
  const j = await (await fetch(url, { headers: UA })).json();
  const r = j.chart && j.chart.result && j.chart.result[0];
  if (!r) throw new Error('Yahoo trả về rỗng: ' + JSON.stringify(j.chart && j.chart.error));
  const ts = r.timestamp || [];
  const cl = r.indicators.quote[0].close || [];
  const pts = [];
  for (let i = 0; i < ts.length; i++) {
    if (cl[i] == null) continue;
    const d = new Date(ts[i] * 1000).toISOString().slice(0, 10);
    pts.push([d, Math.round(cl[i] * 100) / 100]);
  }
  if (!pts.length) throw new Error('Yahoo không có điểm dữ liệu nào');
  return pts;
}

function load(id) {
  const f = path.join(DIR, id + '.json');
  if (!fs.existsSync(f)) return null;
  return JSON.parse(fs.readFileSync(f, 'utf8'));
}

function save(s, points) {
  const f = path.join(DIR, s.id + '.json');
  fs.writeFileSync(f, JSON.stringify({
    series: s.id, name: s.name, unit: s.unit, source: s.src + ':' + s.code,
    updated: new Date().toISOString(), points
  }));
}

function merge(oldPts, newPts) {
  const m = new Map(oldPts);
  let added = 0;
  for (const [d, v] of newPts) { if (!m.has(d)) added++; m.set(d, v); }
  return { points: [...m.entries()].sort((a, b) => a[0] < b[0] ? -1 : 1), added };
}

function valueAgo(points, days) {
  // giá trị gần nhất tại-hoặc-trước mốc (hôm nay - days)
  const cutoff = new Date(Date.now() - days * 864e5).toISOString().slice(0, 10);
  for (let i = points.length - 1; i >= 0; i--) if (points[i][0] <= cutoff) return points[i][1];
  return null;
}

function fmtChg(cur, past, unit) {
  if (past == null) return '   —   ';
  const d = cur - past;
  const pct = past ? (d / past) * 100 : 0;
  const sign = d > 0 ? '+' : '';
  return unit === '%' ? `${sign}${d.toFixed(2)}đ` : `${sign}${pct.toFixed(1)}%`;
}

async function main() {
  const offline = process.argv.includes('--offline');
  fs.mkdirSync(DIR, { recursive: true });
  const rows = [];

  for (const s of SERIES) {
    const existing = load(s.id);
    let points = existing ? existing.points : [];
    let added = 0;
    if (!offline) {
      try {
        const fresh = s.src === 'fred'
          ? await fetchFred(s.code)
          : await fetchYahoo(s.code, existing ? '1mo' : '5y');
        ({ points, added } = merge(points, fresh));
        save(s, points);
      } catch (e) {
        console.error(`✗ ${s.id}: lỗi fetch (${e.message}) — dùng dữ liệu đã lưu (${points.length} điểm)`);
      }
    }
    if (!points.length) { console.error(`✗ ${s.id}: chưa có dữ liệu`); continue; }
    const [date, cur] = points[points.length - 1];
    rows.push({
      s, date, cur, added, n: points.length,
      w1: fmtChg(cur, valueAgo(points, 7), s.unit),
      m1: fmtChg(cur, valueAgo(points, 30), s.unit),
      flag: (CONFIG[s.id] && CONFIG[s.id].flag(cur)) || ''
    });
  }

  console.log('\n=== DASHBOARD VĨ MÔ · ' + new Date().toISOString().slice(0, 10) + (offline ? ' (offline)' : '') + ' ===\n');
  const pad = (x, n) => String(x).padEnd(n);
  console.log(pad('CHUỖI', 20) + pad('MỚI NHẤT', 14) + pad('NGÀY', 12) + pad('1 TUẦN', 9) + pad('1 THÁNG', 9) + 'GHI CHÚ THEO MÔ HÌNH');
  for (const r of rows) {
    const val = r.s.unit === '%' ? r.cur.toFixed(2) + '%' : r.cur.toLocaleString('en-US');
    console.log(pad(r.s.name, 20) + pad(val, 14) + pad(r.date, 12) + pad(r.w1, 9) + pad(r.m1, 9) + r.flag);
  }
  const totalNew = rows.reduce((a, r) => a + r.added, 0);
  console.log(`\n${rows.length}/${SERIES.length} chuỗi OK · +${totalNew} điểm mới · lưu tại data/macro/`);

  // Chỉ báo dẫn xuất: chênh 30Y-10Y (độ dốc đuôi dài — thị trường đòi premium kỳ hạn)
  const y30 = load('us30y'), y10 = load('us10y');
  if (y30 && y10 && y30.points.length && y10.points.length) {
    const spread = y30.points[y30.points.length - 1][1] - y10.points[y10.points.length - 1][1];
    console.log(`Chênh 30Y−10Y: ${spread.toFixed(2)}đ ${spread > 0.5 ? '(dốc — trái chủ đòi premium kỳ hạn dài, hợp mô hình A3)' : ''}`);
  }
}

main().catch(e => { console.error('LỖI:', e.message); process.exit(1); });
