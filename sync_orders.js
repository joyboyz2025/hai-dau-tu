#!/usr/bin/env node
/**
 * sync_orders.js — Đồng bộ sổ lệnh: tradeLevels trong bài  →  orders trong Sổ mã
 *
 * Vấn đề nó giải: mỗi bài có `tradeLevels` (sổ lệnh của video đó), còn Sổ mã có
 * `tickers[].orders`. Trước 03/08/2026 hai chỗ này không được đồng bộ, dẫn tới
 * 82 mốc lệnh nêu trong bài mà Sổ mã không hề có (vd Thái Phạm bảo short Google
 * ngày 01/08 nhưng mã GOOGL không có phiếu lệnh nào).
 *
 *   node sync_orders.js            # kiểm tra, chỉ báo cáo, KHÔNG sửa
 *   node sync_orders.js --write    # ghi các phiếu lệnh còn thiếu vào data.js
 */
const fs = require('fs');
const path = require('path');

const P = path.join(__dirname, 'design_handoff_hai_dau_tu', 'data.js');
const WRITE = process.argv.includes('--write');

const raw = fs.readFileSync(P, 'utf8');
const header = raw.slice(0, raw.indexOf('window.HDT_DATA'));
const window = {}; eval(raw);
const D = window.HDT_DATA;

// chú ý: đ/Đ KHÔNG bị NFD tách ra, phải đổi thủ công trước khi bỏ dấu
const strip = s => String(s || '').toLowerCase().replace(/đ/g, 'd').normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();

// ── Những nhãn KHÔNG phải một mã cụ thể: chỉ số, nhóm ngành, lớp tài sản, mã chưa xác định ──
// LƯU Ý: danh sách này được kiểm TRƯỚC findTk (xem dưới). Lý do: findTk có bước dò
// theo từng TỪ, nên "ETF công ty khai khoáng vàng" của LCG Huy khớp nhầm vào mã Vàng
// chỉ vì có chữ "vàng" — trong khi anh ấy nói rõ là KHÔNG mua vàng, chỉ mua cổ phiếu
// công ty đào vàng. Nhãn lớp tài sản luôn phải thắng phép dò mờ.
const NOT_A_TICKER = /^(vn[- ]?index|nhom |chung khoan (han|nhat)|ngan hang|chung khoan|dau tu cong|bds|ban le|ma chua xac dinh|danh muc|etf (cong ty|thi truong|khai khoang))/;

const idx = {};
D.tickers.forEach(t => [t.symbol, ...(t.aliases || [])].forEach(a => {
  const k = strip(a); if (k && !idx[k]) idx[k] = t;
}));
const findTk = name => {
  const k = strip(name);
  if (idx[k]) return idx[k];
  for (const w of k.split(' ')) if (idx[w]) return idx[w];
  return null;
};

const statusOf = dir => {
  const d = strip(dir);
  if (/^(cho|doi)/.test(d) || /cho (mua|short|kich hoat|hoi|bat day|gia)/.test(d)) return 'waiting';
  if (/(da chot|chot loi|chot 1|da dong|hoan von)/.test(d)) return 'done';
  return 'active';
};

const rows = [];        // phiếu lệnh còn thiếu, gắn được vào mã có sẵn
const orphans = {};     // công cụ có kèo nhưng chưa có mã trong sổ

Object.entries(D.experts).forEach(([eid, ex]) => {
  (ex.updates || []).forEach(u => {
    (u.tradeLevels || []).forEach(g => {
      (g.items || []).forEach(it => {
        String(it.asset).split(/\s*[·+]\s*/).forEach(part => {
          const nm = part.trim(); if (!nm) return;
          if (NOT_A_TICKER.test(strip(nm))) return;   // loại trừ thắng phép dò mờ
          const t = findTk(nm);
          if (!t) {
            (orphans[nm] = orphans[nm] || []).push(`${u.dateShort} ${eid} — ${it.dir}`);
            return;
          }
          // trùng với lệnh đã có trong sổ…
          if ((t.orders || []).some(o => o.expertId === eid && o.date === u.dateShort)) return;
          // …hoặc trùng với lệnh vừa gom trong chính lượt này. Cần cả hai: nhãn kiểu
          // "WTI · Brent" tách thành hai phần cùng trỏ về một mã, trước đây sinh ra
          // hai phiếu lệnh y hệt nhau.
          if (rows.some(r => r.ticker === t && r.expertId === eid && r.date === u.dateShort)) return;
          rows.push({
            ticker: t, expertId: eid, date: u.dateShort, srcTab: u.tab,
            order: {
              expertId: eid, dir: it.dir, sig: it.sig,
              entry: it.entry || '—', target: it.target || '—', stop: it.stop || '—',
              status: statusOf(it.dir), date: u.dateShort,
              note: `Từ ${u.tab} (${u.dateShort}).`
            }
          });
        });
      });
    });
  });
});

console.log(`\n═══ ${rows.length} phiếu lệnh còn thiếu trong Sổ mã ═══`);
const byTk = {};
rows.forEach(r => (byTk[r.ticker.symbol] = byTk[r.ticker.symbol] || []).push(r));
Object.entries(byTk).sort((a, b) => b[1].length - a[1].length).forEach(([sym, rs]) => {
  console.log(`  ${sym.padEnd(14)} +${rs.length}  ${rs.map(r => r.date).join(' ')}`);
});

const orphanKeys = Object.keys(orphans);
if (orphanKeys.length) {
  console.log(`\n═══ ${orphanKeys.length} công cụ có kèo nhưng CHƯA CÓ MÃ trong Sổ mã ═══`);
  orphanKeys.sort().forEach(k => console.log(`  ${k.padEnd(20)} ${orphans[k].length} lần — ${orphans[k][0]}`));
}

if (!WRITE) {
  console.log(`\n(chỉ kiểm tra — chạy lại với --write để ghi ${rows.length} phiếu lệnh)`);
  process.exit(rows.length || orphanKeys.length ? 1 : 0);
}

// ghi: phiếu lệnh mới lên đầu, giữ thứ tự mới nhất trước
rows.forEach(r => { r.ticker.orders = r.ticker.orders || []; r.ticker.orders.push(r.order); });
D.tickers.forEach(t => {
  const key = d => { const [dd, mm] = String(d || '').split('/'); return (mm || '') + (dd || ''); };
  (t.orders || []).sort((a, b) => key(b.date).localeCompare(key(a.date)));
  // views sinh lại từ orders (xem CLAUDE.md mục 7h)
  const seen = {};
  (t.orders || []).forEach(o => { if (o.expertId && !seen[o.expertId]) seen[o.expertId] = o; });
  const ids = Object.keys(seen);
  if (ids.length < 2) { delete t.views; return; }
  t.views = ids.map(id => {
    const o = seen[id], bits = [];
    if (o.note) bits.push(o.note);
    if (o.entry && o.entry !== '—') bits.push('Điểm vào: ' + o.entry + '.');
    if (o.target && o.target !== '—') bits.push('Mục tiêu: ' + o.target + '.');
    return { expertId: id, stance: o.dir, sig: o.sig, date: o.date || '', line: bits.join(' ') };
  });
});

fs.writeFileSync(P, header + 'window.HDT_DATA = ' + JSON.stringify(D, null, 2) + ';\n');
console.log(`\n✓ đã ghi ${rows.length} phiếu lệnh vào ${Object.keys(byTk).length} mã`);
console.log(`  mã có đa quan điểm: ${D.tickers.filter(t => t.views).length}`);
