#!/usr/bin/env node
/**
 * calendar.js — Công cụ số 5 của "bộ não": LỊCH SỰ KIỆN QUAN TRỌNG SẮP TỚI
 * Ghép 3 nguồn:
 *   1. brain/events.json — lịch cập nhật TAY (thêm mốc mới mỗi lần hd update gặp trong transcript)
 *   2. Mốc ĐỊNH KỲ tự tính: đáo hạn phái sinh VN30 (thứ Năm tuần 3 hàng tháng),
 *      cơ cấu ETF ngoại (thứ Sáu tuần 3 tháng cuối quý — mô hình E5), nonfarm Mỹ (~thứ Sáu đầu tháng)
 *   3. LỊCH KINH TẾ tự động (ForexFactory JSON, tuần hiện tại, impact High, USD/EUR/CNY/JPY) —
 *      thay cho Investing.com (bị chặn bot, HTTP 000). Cache data/macro/econ_calendar.json;
 *      sự kiện tay có approx=true sẽ bị ẨN nếu lịch tự động có bản chính xác cùng loại (±4 ngày).
 *
 * Cách dùng:
 *   node calendar.js            # 60 ngày tới (offline, dùng cache lịch kinh tế nếu có)
 *   node calendar.js --fetch    # cập nhật lịch kinh tế tuần này trước (cần network, ngoài sandbox)
 *   node calendar.js --days 120 # đổi cửa sổ nhìn
 *   node calendar.js --all      # toàn bộ lịch kể cả xa
 */
const fs = require('fs');
const path = require('path');

const argv = process.argv.slice(2);
const ALL = argv.includes('--all');
const FETCH = argv.includes('--fetch');
const DAYS = (() => { const i = argv.indexOf('--days'); return i >= 0 ? parseInt(argv[i + 1]) : 60; })();
const ECON_CACHE = path.join(__dirname, 'data', 'macro', 'econ_calendar.json');
const ECON_CUR = ['USD', 'EUR', 'CNY', 'JPY'];

const iso = d => d.toISOString().slice(0, 10);
const today = new Date(iso(new Date()) + 'T00:00:00Z');

function nthWeekday(year, month, weekday, nth) { // month 0-11, weekday 0=CN..6=T7
  const d = new Date(Date.UTC(year, month, 1));
  let count = 0;
  while (true) {
    if (d.getUTCDay() === weekday && ++count === nth) return new Date(d);
    d.setUTCDate(d.getUTCDate() + 1);
  }
}

function recurring(monthsAhead = 8) {
  const out = [];
  for (let k = 0; k < monthsAhead; k++) {
    const y = today.getUTCFullYear(), m0 = today.getUTCMonth() + k;
    const y2 = y + Math.floor(m0 / 12), m = m0 % 12;
    out.push({ date: iso(nthWeekday(y2, m, 4, 3)), title: 'Đáo hạn phái sinh VN30', mkt: 'vn', auto: true });
    if ([2, 5, 8, 11].includes(m))
      out.push({ date: iso(nthWeekday(y2, m, 5, 3)), title: 'Cơ cấu ETF ngoại (thứ Sáu tuần 3 cuối quý — mô hình E5: phiên kéo/đạp có chủ đích)', mkt: 'vn', auto: true });
    out.push({ date: iso(nthWeekday(y2, m, 5, 1)), title: 'Việc làm Mỹ (nonfarm)', mkt: 'us', auto: true, approx: true });
  }
  return out;
}

async function fetchEcon() {
  const r = await fetch('https://nfs.faireconomy.media/ff_calendar_thisweek.json', { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  const raw = await r.json();
  const fresh = raw
    .filter(e => e.impact === 'High' && ECON_CUR.includes(e.country))
    .map(e => {
      const vn = new Date(new Date(e.date).getTime() + 7 * 3600e3); // giờ VN
      return { date: iso(vn), time: vn.toISOString().slice(11, 16), cur: e.country, title: e.title };
    });
  let old = [];
  try { old = JSON.parse(fs.readFileSync(ECON_CACHE, 'utf8')).events; } catch { }
  const key = e => e.date + '|' + e.cur + '|' + e.title;
  const map = new Map(old.map(e => [key(e), e]));
  for (const e of fresh) map.set(key(e), e);
  const events = [...map.values()].filter(e => new Date(e.date) >= new Date(today.getTime() - 7 * 864e5));
  fs.mkdirSync(path.dirname(ECON_CACHE), { recursive: true });
  fs.writeFileSync(ECON_CACHE, JSON.stringify({ updated: new Date().toISOString(), events }));
  return fresh.length;
}

function loadEcon() {
  try { return JSON.parse(fs.readFileSync(ECON_CACHE, 'utf8')).events; } catch { return []; }
}

// sự kiện tay approx bị thay bằng bản chính xác từ lịch kinh tế nếu cùng loại trong ±4 ngày
const DEDUP = [
  [/cpi/i, /CPI/i], [/pce/i, /PCE/i], [/nonfarm|việc làm/i, /Non-Farm|Unemployment Rate/i],
  [/fomc|fed/i, /FOMC|Federal Funds Rate/i], [/ecb/i, /Main Refinancing Rate|ECB/i],
];
function hiddenByEcon(manualEvent, econ) {
  if (!manualEvent.approx) return false;
  for (const [mRe, eRe] of DEDUP) {
    if (!mRe.test(manualEvent.title)) continue;
    if (econ.some(e => eRe.test(e.title) && Math.abs(new Date(e.date) - new Date(manualEvent.date)) <= 4 * 864e5)) return true;
  }
  return false;
}

async function main() {
  if (FETCH) {
    try { console.log(`Lịch kinh tế: cập nhật ${await fetchEcon()} sự kiện High (USD/EUR/CNY/JPY) tuần này.`); }
    catch (e) { console.error('✗ fetch lịch kinh tế: ' + e.message + ' — dùng cache cũ.'); }
  }
  const manual = JSON.parse(fs.readFileSync(path.join(__dirname, 'brain', 'events.json'), 'utf8')).events;
  const seen = new Set(manual.map(e => e.date + '|' + (e.title.includes('nonfarm') || e.title.includes('Việc làm') ? 'nf' : e.title.slice(0, 10))));
  // mốc tự tính: bỏ nếu lịch tay đã có sự kiện tương tự cùng tuần (nonfarm)
  const auto = recurring().filter(a => {
    if (a.title.includes('nonfarm')) {
      return !manual.some(m => (m.title.includes('nonfarm') || m.title.includes('Việc làm')) && Math.abs(new Date(m.date) - new Date(a.date)) < 8 * 864e5);
    }
    return true;
  });
  const econ = loadEcon();
  const econEvents = econ.map(e => ({
    date: e.date, title: `${e.cur} · ${e.title}${e.time ? ' (' + e.time + ' VN)' : ''}`,
    mkt: 'us', econ: true
  }));
  const events = [...manual.filter(m => !hiddenByEcon(m, econ)), ...auto, ...econEvents]
    .map(e => ({ ...e, dt: new Date(e.date + 'T00:00:00Z') }))
    .filter(e => e.dt >= today && (ALL || (e.dt - today) / 864e5 <= DAYS))
    .sort((a, b) => a.dt - b.dt);

  console.log(`\n=== LỊCH SỰ KIỆN · từ ${iso(today)}${ALL ? ' (toàn bộ)' : ` · ${DAYS} ngày tới`} ===\n`);
  if (!events.length) return console.log('(trống — kiểm tra brain/events.json)');
  const thuVN = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  for (const e of events) {
    const dleft = Math.round((e.dt - today) / 864e5);
    const when = dleft === 0 ? '★ HÔM NAY' : dleft === 1 ? '★ NGÀY MAI' : dleft <= 7 ? `⚑ ${dleft} ngày` : `${dleft} ngày`;
    const dd = e.date.slice(8, 10) + '/' + e.date.slice(5, 7) + (e.date.slice(0, 4) !== String(today.getUTCFullYear()) ? '/' + e.date.slice(2, 4) : '');
    const tag = e.econ ? '[KT]' : e.mkt === 'vn' ? '[VN]' : '[US]';
    console.log(`${String(when).padEnd(10)} ${dd.padEnd(9)}${thuVN[e.dt.getUTCDay()].padEnd(4)}${tag} ${e.title}${e.approx ? ' (~dự kiến)' : ''}${e.keo ? `  → ${e.keo}` : ''}`);
    if (e.note) console.log(`${' '.repeat(10)} └ ${e.note}`);
  }
  console.log('\n(Lịch tay: brain/events.json — thêm mốc mới mỗi lần hd update. Mốc "Đáo hạn/Cơ cấu ETF/nonfarm" tự tính. [KT] = lịch kinh tế tự động, cập nhật bằng --fetch.)');
}

main().catch(e => { console.error('LỖI:', e.message); process.exit(1); });
