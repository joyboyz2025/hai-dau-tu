// D.weekBook — ma trận danh mục theo tuần (mẫu bảng slide của Thái Phạm, mở rộng cho hàng hóa)
// Mỗi ô dựng từ orders thật trong data.js (đã lọc expertId thai-pham, gom theo tuần).
const fs = require('fs');
const PATH = require('path').join(__dirname, 'design_handoff_hai_dau_tu', 'data.js');
const src = fs.readFileSync(PATH, 'utf8');
const header = src.slice(0, src.indexOf('window.HDT_DATA'));
const window = {};
eval(src);
const D = window.HDT_DATA;

const C = (t, s) => ({ t, s });   // s: up | hold | down | warn | wait | avoid

D.weekBook = {
  updated: '24/08/2026',
  expertId: 'thai-pham',
  note: 'Danh mục Thái Phạm theo từng tuần — dựng từ các phiếu lệnh trong Sổ mã, gom lại thành bảng để theo dõi nhanh thay vì đọc từng kèo. Ô trống = tuần đó không có lệnh mới (giữ nguyên tuần trước).',
  weeks: [
    { key: 'w31', label: 'Tuần 31', range: '30/07–02/08', ep: 'Tập 42' },
    { key: 'w32', label: 'Tuần 32', range: '04–09/08',    ep: 'Tập 43 · 44' },
    { key: 'w33', label: 'Tuần 33', range: '13–16/08',    ep: 'Tập 45' },
    { key: 'w34', label: 'Tuần 34', range: '18–23/08',    ep: 'Tập 46', now: true }
  ],
  groups: [
    {
      key: 'bank', num: 'I', label: 'Ngân hàng',
      tickers: 'BID, VCB, CTG, HDB, TCB, BVB, EIB',
      cells: {
        w31: C('Chỉ giữ BID, VCB — TCB cẩn trọng. Bỏ hẳn VPB, MBB, LPB, STB', 'wait'),
        w32: C('MUA MẠNH: BID "giá này đẹp quá", CTG, VCB. HDB ưu tiên số 1, thêm BVB, EIB', 'up'),
        w33: C('Cầm — TCB bình thường, CTG chưa hấp dẫn bằng vùng 28, MBB P/B 1,1 vẫn ổn', 'hold'),
        w34: C('CẦM CHẶT BID · VCB · CTG · HDB (VCB, HDB trong rổ FTSE). TCB cân nhắc cơ cấu 1/3 sang HDB', 'hold')
      }
    },
    {
      key: 'phanbon', num: 'II', label: 'Phân bón',
      tickers: 'DCM, DPM',
      cells: {
        w31: C('Mua & nắm giữ — đã vào 70% vị thế', 'up'),
        w32: C('MUA MẠNH (05/08) → MUA VÀ HOLD (07/08) → mua thêm đánh spring (08/08)', 'up'),
        w33: C('CẦM DÀI HẠN — ưu tiên DCM (làm ăn tốt hơn), DPM mẫu hình đẹp hơn', 'hold'),
        w34: C('Điểm mua kỹ thuật vẫn đẹp → MUA NẰM IM, "tiền bắt đầu vào"', 'up')
      }
    },
    {
      key: 'ctck', num: 'III', label: 'Chứng khoán (CTCK)',
      tickers: 'TCX, SSI, VCI, VIX, MBS, HCM',
      cells: {
        w31: C('TRÁNH CẢ NHÓM — cắt sạch lệnh lướt sóng SSI, VCI, VIX', 'avoid'),
        w32: C('TCX giữ + bổ sung · SSI bổ sung · VIX đánh hồi phục · MBS cầm (vùng rẻ) · HCM đừng mua', 'up'),
        w33: C('', 'hold'),
        w34: C('SSI CẦM CHẶT (trong rổ FTSE) · VCI cứ cầm · HCM đừng đụng, vùng rất cao', 'hold')
      }
    },
    {
      key: 'sxkd', num: 'IV', label: 'Sản xuất & kinh doanh',
      tickers: 'VNM, SCS',
      cells: {
        w31: C('', 'hold'),
        w32: C('VNM CẦM (nhà nước còn 36%) · SCS CẦM, vừa đánh spring — "cực phẩm rồi"', 'hold'),
        w33: C('', 'hold'),
        w34: C('CHỐT LỜI 1/2 VNM (lãi ~13%) · SCS nằm im', 'down')
      }
    },
    {
      key: 'luot', num: 'V', label: 'Lướt sóng VN',
      tickers: 'FPT, PNJ, GVR, NVL, VIC/VHM',
      cells: {
        w31: C('FPT bán khi hồi · PNJ tránh · VIC/VHM tránh', 'avoid'),
        w32: C('FPT giải ngân rồi bán khi được kéo (85–90) · PNJ lướt 1/2 vị thế', 'warn'),
        w33: C('FPT, PNJ chỉ hồi kỹ thuật — không tích trữ · GVR lướt sóng thoái vốn · NVL lướt', 'warn'),
        w34: C('FPT + PNJ LƯỚT SÓNG (PNJ đã ăn cây trần) · VIC/VHM không khoái ở vùng cao', 'up')
      }
    },
    {
      key: 'kimloai', num: 'VI', label: 'Kim loại quý',
      tickers: 'Vàng (XAU), Bạc (XAG)',
      cells: {
        w31: C('Chờ mua vùng sâu — kịch bản quét 3.600–3.700', 'wait'),
        w32: C('ĐẢO CHIỀU 05/08: bỏ kịch bản chờ 3.000, MUA ngay — hội viên vào 4.078–4.080', 'up'),
        w33: C('ĐÃ CHỐT 1/2 — giữ phần còn lại dài hạn, chấp nhận rung lắc', 'hold'),
        w34: C('PHÒNG THỦ BẮT BUỘC ≥30% danh mục · mua thêm khi chênh trong nước còn 2–4tr · đích xa 5.300–5.600', 'up')
      }
    },
    {
      key: 'nangluong', num: 'VII', label: 'Năng lượng & Crypto',
      tickers: 'Dầu WTI, Bitcoin',
      cells: {
        w31: C('Dầu giữ vị thế mua · BTC tránh cả năm — "không phải năm của Bitcoin"', 'hold'),
        w32: C('Dầu mua nếu về vùng thấp · BTC MUA LƯỚT 65.200 (07/08)', 'up'),
        w33: C('Dầu vùng cao lâu, hết sóng · BTC giữ lệnh lướt, đang lỗ 2.000/coin', 'warn'),
        w34: C('BTC ĐẢO SANG SHORT: 1/2 (20/08) → 2/3 (23/08) — "banana lần 3, hồi quang phản chiếu"', 'down')
      }
    },
    {
      key: 'quocte', num: 'VIII', label: 'Chỉ số & cổ phiếu Mỹ',
      tickers: 'S&P 500/US30, NI225, AAPL, SpaceX, chip, cyber',
      cells: {
        w31: C('Giữ short S&P/US30 · short Apple, Intel, MU, Marvell, nhóm cyber', 'down'),
        w32: C('SHORT S&P 1/2 tại kháng cự · SpaceX short lại · thêm AMD, DELL, CRWD, GOOGL', 'down'),
        w33: C('SHORT 2/3 S&P — ưu tiên US500 hơn US30 · NI225 short 1/3 · chốt short GOOGL', 'down'),
        w34: C('GIỮ SHORT S&P — "dư địa còn giảm" · SpaceX short 2/3 · NVDA, CRWD, FTNT giữ short', 'down')
      }
    },
    {
      key: 'tien', num: '', label: 'Tỉ trọng tiền / cổ phiếu', isRatio: true,
      tickers: 'Toàn danh mục VN',
      cells: {
        w31: C('60% tiền — 40% cổ phiếu (phòng thủ)', 'wait'),
        w32: C('ĐẢO CHIỀU 05/08 → mua full cổ phiếu', 'up'),
        w33: C('Full cổ phiếu — "kế hoạch vẫn vậy"', 'hold'),
        w34: C('Full cổ phiếu, chốt lời 1/2 VNM — "không cần làm gì cả"', 'hold')
      }
    }
  ]
};

fs.writeFileSync(PATH, header + 'window.HDT_DATA = ' + JSON.stringify(D, null, 2) + ';\n');
const g = D.weekBook.groups, w = D.weekBook.weeks;
console.log('✓ weekBook:', g.length, 'nhóm ×', w.length, 'tuần =', g.length * w.length, 'ô');
console.log('  ô trống (giữ nguyên tuần trước):', g.reduce((n, x) => n + w.filter(k => !(x.cells[k.key] || {}).t).length, 0));
