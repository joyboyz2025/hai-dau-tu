#!/usr/bin/env node
/**
 * update_weekbook.js — dựng lại HDT.weekBook (Sổ mã · tab "Theo tuần")
 *
 * TỰ SINH từ tickers[].orders — không viết tay. Mỗi kỳ update chỉ cần:
 *   1. thêm MỘT dòng vào WEEKS bên dưới (nhãn tuần theo cách đánh số của Thái Phạm + số tập)
 *   2. chạy `node update_weekbook.js`
 * Bảng luôn khớp Sổ mã vì cùng một nguồn dữ liệu.
 *
 * Cấu trúc ra: weekBook.markets[] = [Việt Nam, Mỹ & thế giới], mỗi market có groups[] theo NGÀNH.
 * Ngành lấy từ ticker.industry rồi gom lại bằng bảng MAP bên dưới (thêm ngành mới thì bổ sung ở đó).
 */
const fs = require('fs');
const path = require('path');

const PATH = path.join(__dirname, 'design_handoff_hai_dau_tu', 'data.js');
const EXPERT = 'thai-pham';        // bảng danh mục theo dõi của Thái Phạm
const MAX_TICKERS_PER_CELL = 4;    // quá số này thì gộp "+n mã"
const KEEP_WEEKS = 6;              // giữ tối đa 6 tuần gần nhất

// ── Tuần: thêm một dòng mỗi kỳ update ────────────────────────────────────────
const WEEKS = [
  { key: 'w31', label: 'Tuần 31', from: '2026-07-27', to: '2026-08-02', ep: 'Tập 42' },
  { key: 'w32', label: 'Tuần 32', from: '2026-08-03', to: '2026-08-09', ep: 'Tập 43 · 44' },
  { key: 'w33', label: 'Tuần 33', from: '2026-08-10', to: '2026-08-16', ep: 'Tập 45' },
  { key: 'w34', label: 'Tuần 34', from: '2026-08-17', to: '2026-08-23', ep: 'Tập 46' }
];

// ── Gom ngành thành nhóm hiển thị ────────────────────────────────────────────
// key ngành (industry trong Sổ mã) → { m: thị trường, g: tên nhóm, o: thứ tự }
const MAP = {
  // ===== VIỆT NAM =====
  'Ngân hàng':                      { m: 'vn', g: 'Ngân hàng',                o: 1 },
  'Chứng khoán (CTCK)':             { m: 'vn', g: 'Chứng khoán (CTCK)',       o: 2 },
  'Chứng khoán':                    { m: 'vn', g: 'Chứng khoán (CTCK)',       o: 2 },
  'Hóa chất & Phân bón':            { m: 'vn', g: 'Phân bón & Hóa chất',      o: 3 },
  'Thép':                           { m: 'vn', g: 'Thép',                     o: 4 },
  'Bất động sản':                   { m: 'vn', g: 'Bất động sản',             o: 5 },
  'KCN & BĐS công nghiệp':          { m: 'vn', g: 'Bất động sản',             o: 5 },
  'Cao su & Khu công nghiệp':       { m: 'vn', g: 'Cao su & KCN',             o: 6 },
  'Dầu khí':                        { m: 'vn', g: 'Dầu khí',                  o: 7 },
  'Điện & Năng lượng':              { m: 'vn', g: 'Điện & Hạ tầng',           o: 8 },
  'Xây dựng & Hạ tầng':             { m: 'vn', g: 'Điện & Hạ tầng',           o: 8 },
  'Xây lắp điện & EPC':             { m: 'vn', g: 'Điện & Hạ tầng',           o: 8 },
  'Công nghệ':                      { m: 'vn', g: 'Công nghệ VN',             o: 9 },
  'Bán lẻ':                         { m: 'vn', g: 'Bán lẻ & Tiêu dùng',       o: 10 },
  'Tiêu dùng & Sữa':                { m: 'vn', g: 'Bán lẻ & Tiêu dùng',       o: 10 },
  'Tiêu dùng & Bia':                { m: 'vn', g: 'Bán lẻ & Tiêu dùng',       o: 10 },
  'Trang sức & Bán lẻ cao cấp':     { m: 'vn', g: 'Bán lẻ & Tiêu dùng',       o: 10 },
  'Logistics & Cảng hàng không':    { m: 'vn', g: 'Logistics & Hàng không',   o: 11 },
  'Khai khoáng':                    { m: 'vn', g: 'Khai khoáng',              o: 12 },
  'Nông nghiệp & Chăn nuôi':        { m: 'vn', g: 'Nông nghiệp',              o: 13 },
  'Dệt may':                        { m: 'vn', g: 'Dệt may & Khác',           o: 14 },
  'Đa ngành & Thiết bị điện':       { m: 'vn', g: 'Dệt may & Khác',           o: 14 },
  'Giáo dục & Đa ngành':            { m: 'vn', g: 'Dệt may & Khác',           o: 14 },
  'Bảo hiểm':                       { m: 'vn', g: 'Dệt may & Khác',           o: 14 },
  'Chỉ số & ETF':                   { m: 'vn', g: 'Chỉ số VN30',              o: 15 },

  // ===== MỸ & THẾ GIỚI =====
  'Chỉ số':                         { m: 'us', g: 'Chỉ số Mỹ & thế giới',     o: 1 },
  'Công nghệ tiêu dùng':            { m: 'us', g: 'US Tech — tiêu dùng',      o: 2 },
  'Công nghệ & Internet':           { m: 'us', g: 'US Tech — internet',       o: 3 },
  'Bán dẫn':                        { m: 'us', g: 'Bán dẫn (chip)',           o: 4 },
  'Bán dẫn & Điện tử tiêu dùng':    { m: 'us', g: 'Bộ nhớ & Điện tử',         o: 5 },
  'An ninh mạng':                   { m: 'us', g: 'An ninh mạng',             o: 6 },
  'Phần cứng CNTT':                 { m: 'us', g: 'Phần cứng CNTT',           o: 7 },
  'Hàng không vũ trụ':              { m: 'us', g: 'Hàng không vũ trụ',        o: 8 },
  'Quốc phòng':                     { m: 'us', g: 'Quốc phòng',               o: 9 },
  'Quỹ đầu tư AI':                  { m: 'us', g: 'Quỹ AI',                   o: 10 },
  'Truyền thông & Giải trí':        { m: 'us', g: 'Truyền thông',             o: 11 },
  'Dược phẩm':                      { m: 'us', g: 'Dược phẩm',                o: 12 },
  'Dược phẩm & Vắc xin':            { m: 'us', g: 'Dược phẩm',                o: 12 },
  'Kim loại quý':                   { m: 'us', g: 'Kim loại quý',             o: 13 },
  'Năng lượng':                     { m: 'us', g: 'Dầu & Năng lượng thế giới', o: 14 },
  'Tiền điện tử':                   { m: 'us', g: 'Crypto',                   o: 15 },
  'Ngoại hối':                      { m: 'us', g: 'Ngoại hối',                o: 16 },
  'Tiêu dùng thiết yếu':            { m: 'us', g: 'Bán lẻ & Tiêu dùng (quốc tế)', o: 17 },
  'Tiêu dùng & Thời trang':         { m: 'us', g: 'Bán lẻ & Tiêu dùng (quốc tế)', o: 17 }
};

// Ngành DÙNG CHUNG hai thị trường (VN và quốc tế) → nhóm riêng cho phía quốc tế.
// Quy tắc: NGÀNH quyết định nhóm, KHU VỰC chỉ quyết định nằm ở tab nào
// (nên Samsung/SK = "Bộ nhớ" chứ không bị gom thành "Hàn Quốc").
const MAP_INTL = {
  'Bán lẻ':                { g: 'Bán lẻ & Tiêu dùng (quốc tế)', o: 17 },
  'Ngân hàng':             { g: 'Ngân hàng Mỹ & Úc',            o: 19 },
  'Dầu khí':               { g: 'Dầu & Năng lượng thế giới', o: 14 },
  'Khai khoáng':           { g: 'Khai khoáng quốc tế',          o: 20 },
  'Công nghệ':             { g: 'US Tech — phần mềm',           o: 3 },
  'Bảo hiểm':              { g: 'Khác (quốc tế)',               o: 99 }
};

// ── Suy tín hiệu màu từ câu lệnh ─────────────────────────────────────────────
function sigOf(dir) {
  const d = (dir || '').toUpperCase();
  if (/TRÁNH|ĐỪNG|KHÔNG ĐỤNG|KHÔNG THAM GIA|KHÔNG CẦM|KHÔNG MUA|BỎ QUA/.test(d)) return 'avoid';
  if (/SHORT|BÁN|CHỐT|THOÁT|CẮT/.test(d))                                        return 'down';
  if (/MUA|BỔ SUNG|GIẢI NGÂN|TÍCH LŨY|GIA TĂNG|TÍCH SẢN/.test(d))                return 'up';
  if (/CHỜ|ĐỢI|CANH|THEO DÕI/.test(d))                                           return 'wait';
  if (/CẦM|GIỮ|HOLD|NẮM|NẰM IM/.test(d))                                         return 'hold';
  if (/LƯỚT|CƠ CẤU|CẨN TRỌNG|RỦI RO/.test(d))                                    return 'warn';
  return 'hold';
}
const SIG_RANK = ['up', 'down', 'avoid', 'warn', 'wait', 'hold'];

// ── Dòng viết tay (không suy được từ phiếu lệnh) — cập nhật khi tỉ trọng đổi ──
const MANUAL = {
  vn: [{
    label: 'Tỉ trọng tiền / cổ phiếu', tickers: 'Toàn danh mục VN', isRatio: true,
    cells: {
      w31: { t: '60% tiền — 40% cổ phiếu (phòng thủ)', s: 'wait' },
      w32: { t: 'ĐẢO CHIỀU 05/08 → mua full cổ phiếu', s: 'up' },
      w33: { t: 'Full cổ phiếu — "kế hoạch vẫn vậy"', s: 'hold' },
      w34: { t: 'Full cổ phiếu, chốt lời 1/2 VNM — "không cần làm gì cả"', s: 'hold' }
    }
  }]
};

function main() {
  const src = fs.readFileSync(PATH, 'utf8');
  const header = src.slice(0, src.indexOf('window.HDT_DATA'));
  const window = {};
  eval(src);
  const D = window.HDT_DATA;

  const weeks = WEEKS.slice(-KEEP_WEEKS);
  const toIso = (dmy) => { const [dd, mm] = String(dmy || '').split('/'); return dd && mm ? `2026-${mm}-${dd}` : ''; };
  const weekOf = (dmy) => {                       // '23/08' -> key tuần
    const iso = toIso(dmy);
    return iso ? (weeks.find(w => iso >= w.from && iso <= w.to) || {}).key : undefined;
  };

  // gom: market -> group -> week -> { sym -> {dir, date, sig} }
  const bucket = {};
  const groupTickers = {};
  for (const t of D.tickers || []) {
    const ind = t.industry || t.group || '';
    const m = t.region === 'vn' ? 'vn' : 'us';     // khu vực quyết định TAB
    let mg = MAP[ind];                             // ngành quyết định NHÓM
    if (mg && mg.m !== m) mg = MAP_INTL[ind] || null;   // ngành dùng chung → bản quốc tế
    if (!mg) mg = { g: m === 'vn' ? 'Khác (VN)' : 'Khác (quốc tế)', o: 99 };
    const { g, o } = mg;
    for (const ord of t.orders || []) {
      if (ord.expertId !== EXPERT) continue;
      const wk = weekOf(ord.date);
      if (!wk) continue;
      const iso = toIso(ord.date);
      const B = (bucket[m] = bucket[m] || {});
      const G = (B[g] = B[g] || { order: o, weeks: {} });
      const W = (G.weeks[wk] = G.weeks[wk] || {});
      const prev = W[t.symbol];
      if (!prev || iso > prev.iso) W[t.symbol] = { dir: ord.dir, iso, sig: sigOf(ord.dir) };
      (groupTickers[m + '|' + g] = groupTickers[m + '|' + g] || new Set()).add(t.symbol);
    }
  }

  const shorten = s => {
    const txt = String(s || '').replace(/\s+/g, ' ').trim();
    return txt.length > 62 ? txt.slice(0, 60).replace(/[\s·—-]+$/, '') + '…' : txt;
  };

  const markets = [
    { key: 'vn', label: 'Việt Nam' },
    { key: 'us', label: 'Mỹ & thế giới' }
  ].map(mk => {
    const groups = Object.entries(bucket[mk.key] || {})
      .sort((a, b) => a[1].order - b[1].order || a[0].localeCompare(b[0]))
      .map(([gname, G]) => {
        const cells = {};
        for (const w of weeks) {
          const syms = G.weeks[w.key];
          if (!syms) { cells[w.key] = { t: '', s: 'hold' }; continue; }
          const list = Object.entries(syms).sort((a, b) => b[1].iso.localeCompare(a[1].iso));
          const shown = list.slice(0, MAX_TICKERS_PER_CELL);
          let t = shown.map(([sym, v]) => `${sym}: ${shorten(v.dir)}`).join(' · ');
          if (list.length > shown.length) t += ` · +${list.length - shown.length} mã`;
          const cnt = {};
          for (const [, v] of list) cnt[v.sig] = (cnt[v.sig] || 0) + 1;
          const s = SIG_RANK.filter(k => cnt[k]).sort((a, b) => cnt[b] - cnt[a])[0] || 'hold';
          cells[w.key] = { t, s, n: list.length };
        }
        const tk = [...(groupTickers[mk.key + '|' + gname] || [])];
        return {
          key: gname.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          label: gname,
          tickers: tk.slice(0, 7).join(', ') + (tk.length > 7 ? ` +${tk.length - 7}` : ''),
          cells
        };
      })
      .filter(g => weeks.some(w => g.cells[w.key].t));   // bỏ nhóm rỗng hoàn toàn
    // đánh số La Mã theo thứ tự hiển thị
    const R = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI','XXII','XXIII','XXIV','XXV'];
    groups.forEach((g, i) => { g.num = R[i] || String(i + 1); });
    for (const man of (MANUAL[mk.key] || [])) {
      const cells = {};
      for (const w of weeks) cells[w.key] = man.cells[w.key] || { t: '', s: 'hold' };
      groups.push({ key: 'manual-' + groups.length, num: '', label: man.label, tickers: man.tickers, isRatio: !!man.isRatio, cells });
    }
    return { ...mk, groups, count: groups.length };
  });

  D.weekBook = {
    updated: D.lastUpdated || '',
    expertId: EXPERT,
    note: 'Danh mục Thái Phạm theo tuần, chia theo ngành — TỰ SINH từ các phiếu lệnh trong Sổ mã nên luôn khớp với tab "Danh sách mã". Ô trống = tuần đó nhóm này không có lệnh mới (giữ nguyên tuần trước). Mỗi ô hiện lệnh MỚI NHẤT của từng mã trong tuần.',
    weeks: weeks.map((w, i) => ({ key: w.key, label: w.label, range: fmt(w.from) + '–' + fmt(w.to), ep: w.ep, now: i === weeks.length - 1 })),
    markets
  };

  fs.writeFileSync(PATH, header + 'window.HDT_DATA = ' + JSON.stringify(D, null, 2) + ';\n');
  for (const m of markets) {
    const cells = m.groups.reduce((n, g) => n + weeks.filter(w => g.cells[w.key].t).length, 0);
    console.log(`✓ ${m.label}: ${m.groups.length} nhóm ngành × ${weeks.length} tuần — ${cells} ô có lệnh`);
    console.log('   ' + m.groups.map(g => g.num + '. ' + g.label).join(' · '));
  }
}
const fmt = iso => iso.slice(8, 10) + '/' + iso.slice(5, 7);

main();
