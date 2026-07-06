// ─────────────────────────────────────────────────────────────────────────────
// HDT DATA — Hải Đầu Tư cùng các Chuyên Gia
// Chỉnh sửa file này để thêm bài mới. Không cần đụng HTML.
//
// THÊM BÀI MỚI: prepend vào mảng updates của chuyên gia tương ứng.
// Format một update:
//   date:       'YYYY-MM-DD'  (dùng để sort recentFeed)
//   dateShort:  'DD/MM'
//   timeAgo:    'Hôm nay' | 'Hôm qua' | 'N ngày trước' | ...
//   tab:        label hiển thị trên tab (ngắn gọn)
//   sourceType: 'member-post' | 'public-video' | 'member-video'
//   typeLabel:  nhãn hiển thị dạng pill
//   title:      tiêu đề bài
//   summary:    tóm tắt ngắn (2–3 câu, dùng cho dashExperts & expertsList)
//   feedChips:  [ { label, sig: 'up'|'down'|'warn'|'wait' } ]  → tối đa 4
//   keyCalls:   [ { tag, value, note, signal: 'up'|'down'|'warn'|'wait' } ]
//   sections:   [ { title, signal, sigLabel, para?, bullets?, levels?, tickers? } ]
// ─────────────────────────────────────────────────────────────────────────────

window.HDT_DATA = {

  lastUpdated: '04/07/2026 · Mới nhất',

  // ── Pulse strip ─────────────────────────────────────────────────────────────
  pulse: [
    { name: 'CK Việt',  mark: '↑ Tăng 70%',    sig: 'up'   },
    { name: 'CK Mỹ',    mark: '↓ Chỉnh T7',    sig: 'down' },
    { name: 'Vàng',     mark: '✓ Mua được',     sig: 'up'   },
    { name: 'Dầu',      mark: '↓ Về 70–80',     sig: 'down' },
    { name: 'Bitcoin',  mark: '↓ Short 68–70k', sig: 'down' },
    { name: 'Tỷ giá',   mark: '⚠ Dễ thở hơn',  sig: 'warn' },
    { name: 'BĐS',      mark: '— Đứng ngoài',  sig: 'wait' }
  ],

  // ── Asset cards ─────────────────────────────────────────────────────────────
  // expertId chỉ expert chính; altViews là góc nhìn khác từ expert khác
  assetCards: [
    {
      name: 'Chứng khoán Mỹ', sig: 'down', sigLabel: 'Giảm',
      date: '17/06', expertId: 'thai-pham',
      summary: 'SpaceX IPO chỉ bán 4,2% float để thổi định giá ~2.660 tỷ USD (Morningstar ~780 tỷ). P/S >100x, lỗ nặng — định giá ảo. Rủi ro lớn 15/7 khi ~911 triệu cp insider được bán; tài sản Elon ~100% trên giấy.',
      levels: 'Nasdaq short 29.600 · thêm 31.000 · cắt lỗ 32.500',
      altViews: [
        { expertId: 'azfin', sig: 'down', sigLabel: 'Gần bong bóng 2000',
          note: 'CAPE gần mức dotcom. Buffett indicator ~300% GDP. Buffett giữ ~$400 tỷ tiền lỏng — kỷ lục.' }
      ]
    },
    {
      name: 'Chứng khoán Việt Nam', sig: 'wait', sigLabel: 'Tích cực',
      date: '16/06', expertId: 'thai-pham',
      summary: 'Nâng tỷ trọng cổ phiếu từ 50% lên 70%. Bank tích nền ổn, TCX/CK có tín hiệu sức sống đầu tiên. Đạm/phân sắp về vùng mua. CK quốc tế chỉnh không ảnh hưởng chợ huyện.',
      levels: 'Tiền/Hàng: 30/70 · Mua: bank + TCX · Chờ: DCM/DPM · Giữ: SCS',
      altViews: [
        { expertId: 'azfin', sig: 'up', sigLabel: '3 ngành 5 năm',
          note: 'Giữ 5 năm: ngân hàng (tăng 15–20%/năm, định giá rẻ), vật liệu xây dựng (đầu tư công), bán lẻ (bùng nổ tiêu dùng). Mua khi định giá rất rẻ.' },
        { expertId: 'ck-5-phut', sig: 'up', sigLabel: 'Tuần tích cực',
          note: 'NHNN dự thảo nới trần vốn 40% → ngân hàng thêm dư địa cho vay. Tuần tích cực nhưng chưa có xu hướng mới — giữ tỷ trọng, hạn chế đảo hàng.' }
      ]
    },
    {
      name: 'Vàng', sig: 'wait', sigLabel: 'Mua được',
      date: '13/06', expertId: 'thai-pham',
      summary: 'Vùng $4.200 mua được nếu đã bán cao trước. Iran ký 19/6 → vàng tăng ngắn hạn. Dài hạn còn 1 chân rủi ro về ~$3.300. Chênh trong nước 13–14tr/lượng.',
      levels: 'Mua lại phần đã bán · chênh mục tiêu ≤ 7tr · rủi ro: ~$3.300',
      altViews: []
    },
    {
      name: 'Dầu', sig: 'down', sigLabel: 'Giảm',
      date: '15/06', expertId: 'thai-pham',
      summary: 'Iran–Mỹ ký hòa bình 19/6 tại Thụy Sĩ — đúng kỳ vọng dầu giảm. Dù có hay không có thỏa thuận thì dầu cũng về vùng 77–80 do giảm tổng cầu toàn cầu. Tích cực cho tỷ giá VND.',
      levels: 'Dầu Brent mục tiêu: 77–80 USD · xác nhận thesis',
      altViews: []
    },
    {
      name: 'Bitcoin & Crypto', sig: 'down', sigLabel: 'Giảm',
      date: '13/06', expertId: 'thai-pham',
      summary: 'Vẫn downtrend từ đỉnh 125k. Hòa bình Iran không thay đổi cấu trúc kỹ thuật. Chờ hồi kỹ thuật lên 68–70k để short lại, mục tiêu về ~42k (chân 5 Elliott). Clarity Act 4/7 — BTC thành mã CK thường.',
      levels: 'Short: 68.000–70.000 · mục tiêu: ~42.000 · Clarity Act: 4/7',
      altViews: [
        { expertId: 'thuan-capital', sig: 'wait', sigLabel: 'DCA tích lũy',
          note: 'Mua dưới $60k bằng chiến lược DCA. Chu kỳ 4 năm — phục hồi dự kiến T11/2026. Không cố bắt đáy.' }
      ]
    },
    {
      name: 'Tỷ giá & Vĩ mô VN', sig: 'warn', sigLabel: 'Dễ thở hơn',
      date: '15/06', expertId: 'thai-pham',
      summary: 'Dầu giảm → lạm phát nhập khẩu giảm → áp lực tỷ giá VND bớt dần. Section 301 vẫn hiệu lực T7 nhưng môi trường vĩ mô bắt đầu cải thiện. Fed 67% khả năng tăng lãi T7/T9.',
      levels: 'USD/VND theo dõi · Fed 67% tăng lãi · dầu 70–80 tích cực cho VN',
      altViews: []
    },
    {
      name: 'Bất động sản', sig: 'warn', sigLabel: 'Thận trọng',
      date: '14/06', expertId: 'azfin',
      summary: 'Cổ phiếu BĐS đang rất rẻ — cơ hội >> rủi ro theo góc nhìn giá trị. HDG định giá rất rẻ dù vướng pháp lý HDG-EVN. Tránh nhóm có rủi ro pháp lý phức tạp.',
      levels: 'HDG: rất rẻ (chờ pháp lý) · NVL: chờ 11–12 · tránh: BĐS pháp lý xấu',
      altViews: [
        { expertId: 'thai-pham', sig: 'wait', sigLabel: 'Đứng ngoài',
          note: 'Đã thoát toàn bộ vị thế cổ phiếu BĐS. NVL chờ về 11–12 mới tính mua lại.' }
      ]
    }
  ],

  // ── Tin tức (kênh tin tức · AI đánh giá tác động thị trường) ──────────────────
  news: [
    {
      date: '2026-06-17', dateShort: '17/06',
      source: 'Tài chính & Kinh doanh', sourceType: 'Video tin tức',
      title: 'Thị trường thứ cấp đồng loạt cắt lỗ — chung cư Hà Nội đảo chiều',
      impact: 'warn',
      impactLabel: 'Tiêu cực ngắn hạn — lợi cho người mua ở thực',
      summary: 'Chung cư Hà Nội phân hóa: giá sơ cấp tiếp tục leo thang nhưng nhiều căn thứ cấp phải cắt lỗ để tìm thanh khoản. Đầu tư lướt sóng nhường chỗ cho nhu cầu ở thực và tích sản dài hạn. Thị trường đảo chiều cả giá lẫn thanh khoản — "buyer market".',
      points: [
        'Áp lực chính: lãi vay duy trì cao từ Q4/2025 + thanh khoản yếu + sức ép giá dầu/Trung Đông (dầu ~80 USD vẫn cao hơn 63–65 USD năm ngoái).',
        'Tín dụng năm nay bị khống chế; bất động sản, đặc biệt BĐS thương mại, bị siết mạnh.',
        'Tác động thị trường: tiêu cực ngắn hạn cho nhóm đầu cơ & cổ phiếu BĐS; cơ hội cho người mua ở thực được quyền mặc cả.'
      ]
    },
    {
      date: '2026-06-17', dateShort: '17/06',
      source: 'VTV Index', sourceType: 'Video tin tức',
      title: 'Hành trình trao vàng — lộ diện chủ nhân giải tiết kiệm dự thưởng',
      impact: 'wait',
      impactLabel: 'Ít tác động thị trường — tin chương trình tiết kiệm',
      summary: 'Bản tin về một chương trình tiết kiệm dự thưởng trao hàng trăm giải vàng (giải đặc biệt 10 lượng vàng SJC). Nội dung mang tính PR sản phẩm tiết kiệm, định vị gửi tiết kiệm như giải pháp tài chính an toàn.',
      points: [
        'Chủ yếu là tin truyền thông/PR chương trình, không phải nhận định đầu tư.',
        'Phản ánh xu hướng kênh tiết kiệm & vàng vẫn hấp dẫn trong môi trường lãi suất cao và bất ổn.',
        'Tác động trực tiếp tới thị trường chứng khoán: không đáng kể.'
      ]
    }
  ],

  // ── Experts ──────────────────────────────────────────────────────────────────
  experts: {

    'thai-pham': {
      initials: 'TP',
      name: 'Thái Phạm',
      avatarSrc: '/avatars/thai-pham.jpg',
      bio: 'Nhận định vĩ mô – địa chính trị và hành động danh mục theo tuần: chứng khoán Mỹ, chứng khoán Việt Nam, vàng bạc, dầu và crypto.',
      sourceLabel: 'YouTube hội viên · Post cộng đồng',
      sourceChips: ['▶ YouTube hội viên', '✎ Post cộng đồng', 'Tần suất: hàng tuần'],
      gauge: {
        title: 'Tỷ lệ tiền – hàng khuyến nghị (VN)',
        badge: 'Tích cực', badgeBg: 'oklch(0.95 0.04 150)', badgeColor: 'oklch(0.42 0.1 150)',
        bar1: 30, bar2: 70, label1: 'Tiền mặt 30%', label2: 'Cổ phiếu 70%'
      },
      updates: [
        {
          date: '2026-07-04', dateShort: '04/07', timeAgo: '2 ngày trước',
          tab: 'Tập 36 · Tuần 27', sourceType: 'member-video', typeLabel: 'Video hội viên · Tập 36',
          title: 'Tập 36 (Hội Viên): Vàng, Bitcoin, Chứng Khoán Tuần 27 — Tỉ Lệ Tiền Và Hàng?',
          summary: 'Tuần đầu H2/2026. SpaceX vào rổ Nasdaq 100 ngày 7/7 → về vùng 100 (giữ short). Sóng bán dẫn tạm dừng, AI biến động mạnh do đòn bẩy lớn — Nvidia có thể về 163–172 (Meta bán bớt compute, data center dư công suất). Vàng hồi kỹ thuật, canh long khi test 4.000; Bitcoin banana lần 3, short limit 68–70k, dài hạn về 47–50k. CK Việt "mùa đông": giữ 80% cổ phiếu / 20% tiền, tập trung ngân hàng + chứng khoán, phân bón (DCM). Tránh PNJ (rủi ro pháp lý kim cương).',
          feedChips: [
            { label: 'SpaceX ↓ về vùng 100',   sig: 'down' },
            { label: 'AI ↓ bán dẫn tạm dừng',   sig: 'down' },
            { label: 'Vàng ◷ hồi về 4.000',      sig: 'wait' },
            { label: 'CK Việt ↑ giữ 80% cổ phiếu', sig: 'up' }
          ],
          keyCalls: [
            { tag: 'SpaceX',   value: 'Về vùng 100 · giữ short', signal: 'down', note: 'Vào rổ Nasdaq 100 ngày 7/7 với định giá vô lý → quỹ kẹp hàng. Giữ short (đã ăn từ 200), về 100–110 và neo ở đó ~6 tháng.' },
            { tag: 'Nvidia',   value: 'Đừng đụng · về 163–172',  signal: 'down', note: 'Meta bán bớt compute (hạ tầng AI cloud) → data center dư công suất → nhu cầu chip GPU/RAM chậm lại. TQ/Hồng Kông xuất chip thay thế. Muốn mua đợi vùng 163.' },
            { tag: 'Vàng',     value: 'Canh long khi test 4.000', signal: 'wait', note: 'Hồi phục kỹ thuật về vùng bình quân 4.000; Fed khó tăng lãi (nonfarm kém). Long khi test 4.000–4.085, mục tiêu ~4.350. Không long vùng hiện tại. Dài hạn vẫn cửa về ~3.000.' },
            { tag: 'CK Việt',  value: 'Giữ 80% cổ phiếu',        signal: 'up',   note: 'Tỉ lệ hội viên 80/20, tập trung ngân hàng (45–50% danh mục) và chứng khoán (20–25%). Mùa đông — đánh chắc, cơ hội 8–10% ăn nhanh, nắm dài chờ "gió đông" giữa 2027.' }
          ],
          sections: [
            { title: 'Chứng khoán Mỹ — Bán dẫn tạm dừng, AI rung lắc', signal: 'down', sigLabel: 'Giảm/rung lắc — chờ vùng thấp',
              para: 'Dow vẫn lập đỉnh nhưng chỉ nhờ kéo Apple, thiếu thuyết phục; Nasdaq và S&P giảm mạnh phiên cuối tuần khi dòng tiền chốt lời nhóm bán dẫn. Đòn bẩy toàn thị trường quá lớn nên AI biến động cực mạnh — Trump hò hét mua Micron ở vùng cao (giống lùa Bitcoin 10/2025). Nghiêng kịch bản Dow về 24.000–24.500 và S&P về ~7.050 để tích lũy, mở cơ hội mua giai đoạn sau.',
              bullets: ['Micron (MU): nghiêng điều chỉnh giảm ~46% bất chấp tin hô hào.', 'SpaceX vào Nasdaq 100 ngày 7/7 → về vùng 100–110, neo ~6 tháng (giữ short).', 'Nvidia: đừng đụng, về 163–172 — data center dư công suất, TQ/HK xuất chip thay thế.', 'Apple: điều chỉnh tuần tới; iPhone gập >2.000 USD khó kích cầu. Short 325–330, cắt lỗ 360; không mua dài hạn.', 'Google: EU phạt 4,1 tỷ EUR vụ Android — muốn mua dài hạn đợi 300–314. Netflix mua vùng 74–75. Adidas sắp chốt lời 190–200.', 'Bài học short: vị thế vừa phải, không margin lớn; không short đuổi theo cú kéo hồi.'] },
            { title: 'Vàng, Bạc & Bitcoin', signal: 'wait', sigLabel: 'Hồi kỹ thuật — kiên nhẫn chờ vùng',
              para: 'Vàng giảm sâu nên có hồi phục kỹ thuật; theo đồ thị tuần về vùng bình quân ~4.000. Fed khó tăng lãi năm nay (nonfarm payroll kém) nên thị trường kỳ vọng vàng hồi. Bitcoin đang ở "banana chuối" lần ba — chỉ còn là một mã ăn theo USD.',
              levels: 'Vàng: long khi test 4.000–4.085 → mục tiêu ~4.350 (dài hạn vẫn cửa ~3.000) · Bạc: mua khi về ~60 · BTC: short limit 68–70k, dài hạn 47–50k (chu kỳ 4 năm có thể 28–32k)' },
            { title: 'Chứng khoán Việt Nam — Mùa đông, giữ 80% cổ phiếu', signal: 'up', sigLabel: 'Cầm chắc — ngân hàng + chứng khoán',
              para: 'Áp lực tỷ giá và nước ngoài bán ròng, kiều hối bù đắp phần nào. Lãi suất VND cao → không có dòng tiền đầu cơ, phải đánh chắc: cơ hội 8–10% ăn nhanh, còn lại nắm dài chờ "gió đông" (giữa 2027, dẫn dắt bởi ngân hàng và chứng khoán). Chỉ số tháng 7 có thể bị VIC/VHM đè về 1.750–1.763, thậm chí 1.573 — nhưng đừng để chỉ số ép bán hàng của mình.',
              tickers: [
                { ticker: 'VCB',  zone: 'Cầm', note: 'Cầm chặt, không thay đổi — tích lũy là bình thường.',                          action: 'Giữ', aBg: 'oklch(0.95 0.02 235)', aColor: 'oklch(0.4 0.08 235)' },
                { ticker: 'BID',  zone: 'Cầm', note: 'Cầm chặt, không thay đổi.',                                                     action: 'Giữ', aBg: 'oklch(0.95 0.02 235)', aColor: 'oklch(0.4 0.08 235)' },
                { ticker: 'CTG',  zone: 'Cầm', note: 'Đang cầm cứ cầm.',                                                              action: 'Giữ', aBg: 'oklch(0.95 0.02 235)', aColor: 'oklch(0.4 0.08 235)' },
                { ticker: 'HDB',  zone: 'Cầm', note: 'HD Securities sắp lên sàn → có cớ để kéo.',                                     action: 'Giữ', aBg: 'oklch(0.95 0.02 235)', aColor: 'oklch(0.4 0.08 235)' },
                { ticker: 'BVB',  zone: 'Cầm', note: 'Sắp limit lên sàn HOSE — chưa cần chốt lời, kỳ vọng rõ.',                       action: 'Giữ', aBg: 'oklch(0.95 0.02 235)', aColor: 'oklch(0.4 0.08 235)' },
                { ticker: 'TCX',  zone: 'Giữ · chủ lực', note: 'Chưa vi phạm gì để phải bán — giữ, lướt sóng nhóm chứng khoán.',      action: 'Giữ', aBg: 'oklch(0.95 0.02 235)', aColor: 'oklch(0.4 0.08 235)' },
                { ticker: 'VCI',  zone: 'Lướt 8–10%', note: 'Lướt sóng cùng SSI/VND/VIX; nhóm CK hồi từ đáy 18–33%.',                 action: 'Mua', aBg: 'oklch(0.95 0.04 150)', aColor: 'oklch(0.42 0.1 150)' },
                { ticker: 'DCM',  zone: 'Vùng giá trị · cầm 8 tháng', note: 'Đạm Cà Mau tốt nhất nhóm phân bón; vùng lái dìm ăn hàng, giá dầu giảm còn tốt cho đầu vào khí.', action: 'Mua', aBg: 'oklch(0.95 0.04 150)', aColor: 'oklch(0.42 0.1 150)' },
                { ticker: 'HPG',  zone: 'Giải ngân 1/3', note: 'Vùng này giải ngân dần 1/3 được, đừng để chỉ số ép bán.',            action: 'Mua', aBg: 'oklch(0.95 0.04 150)', aColor: 'oklch(0.42 0.1 150)' },
                { ticker: 'SCS',  zone: 'Nắm giữ', note: 'Lỗ 6–7% không sao nếu cầm dài hạn; đánh spring kệ, cứ cầm.',                action: 'Giữ', aBg: 'oklch(0.95 0.02 235)', aColor: 'oklch(0.4 0.08 235)' },
                { ticker: 'HVN',  zone: 'Chỉ lướt ~27–28', note: 'Hàng không VN chỉ lướt sóng 10–12%, không đầu tư dài hạn (giá vé đắt, thu hồi vốn chậm).', action: 'Theo dõi', aBg: '#EFEEE9', aColor: '#5F5E57' },
                { ticker: 'PNJ',  zone: 'Tránh · có thể về 44', note: 'Rủi ro pháp lý: giám định làm giả mã 28.000 viên kim cương → mất niềm tin, áp lực dòng tiền hoàn hàng.', action: 'Bán', aBg: 'oklch(0.95 0.04 27)', aColor: 'oklch(0.46 0.15 27)' }
              ] }
          ]
        },
        {
          date: '2026-06-21', dateShort: '21/06', timeAgo: '15 ngày trước',
          tab: 'Video · Tuần 25', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'Siêu Chu Kỳ Chip Đối Đầu Vĩ Mô Xấu — ETF Funds Cơ Cấu Mạnh Cuối Tháng 6',
          summary: 'Nhịp đập thị trường tuần 25: giá dầu neo cao 75–85 USD dài hạn (dự trữ G7/Mỹ thiếu, eo biển Hormuz căng lại). Lạm phát không hạ vì giá chip/bộ nhớ tăng (Apple sắp tăng giá iPhone 17 & 18) → xác suất Fed tăng lãi T9 ~70%. Nasdaq +34% từ đáy, ETF cơ cấu ~160 tỷ USD cuối T6 → AI/semiconductor phải chỉnh. VN-Index thiếu thanh khoản (LDR 115%), nước ngoài bán ròng ~20.000 tỷ/tháng — chọn cổ phiếu nội lực mạnh, tích lũy kiểu "mùa đông".',
          feedChips: [
            { label: 'Dầu ◷ neo 75–85 dài hạn',  sig: 'wait' },
            { label: 'Fed ↓ tăng lãi T9 ~70%',    sig: 'down' },
            { label: 'AI/Nasdaq ↓ phải chỉnh',    sig: 'down' },
            { label: 'CK Việt ⚠ kẹt thanh khoản', sig: 'warn' }
          ],
          keyCalls: [
            { tag: 'Giá dầu',   value: 'Neo 75–85 USD',          signal: 'wait', note: 'Đàm phán Mỹ–Iran 60 ngày nhiều biến động. Dự trữ chiến lược G7/Nhật/Mỹ thiếu (cần 3–6 tháng bù), OPEC+ giữ giá → khó giảm sâu, kịch bản có thể test 90.' },
            { tag: 'Fed',       value: 'Tăng lãi T9 ~70%',        signal: 'down', note: 'Lạm phát lõi không chỉ do dầu: giá chip/bộ nhớ AI tăng điên cuồng, Apple sắp tăng giá iPhone 17 & 18 → PCE còn cao. Kevin Warsh diều hâu, bỏ forward guidance.' },
            { tag: 'CK Mỹ',    value: 'Nasdaq +34% → chỉnh',     signal: 'down', note: 'S&P +20% / Nasdaq +34% từ đáy, margin kỷ lục. SpaceX IPO P/S ~90x vô lý, vào rổ Nasdaq 100 trong 15 ngày + BCTC giữa T7 → rủi ro. Không chase, chờ thị trường bớt điên.' },
            { tag: 'CK Việt',   value: 'Kẹt thanh khoản',         signal: 'warn', note: 'LDR toàn hệ thống 115% (tín dụng +5,71% / huy động +2,98%). Nước ngoài bán ròng ~20.000 tỷ/tháng. VN-Index phụ thuộc nhóm Vin — đừng nhìn index.' }
          ],
          sections: [
            { title: 'Địa chính trị & Giá dầu', signal: 'wait', sigLabel: 'Neo cao — khó giảm sâu',
              para: 'IRGC tuyên bố đóng eo biển Hormuz lần hai (cáo buộc Israel tiếp tục tấn công Nam Liban, vi phạm thỏa thuận). Mỹ–Iran đàm phán tại Thụy Sĩ trong 60 ngày — sẽ nhiều tin nhiễu. Trump thừa nhận tại G7: nếu không có thỏa thuận, dự trữ dầu Mỹ cạn trong 4 tuần. Giá dầu neo 75–85 USD: không quá cao (triệt tiêu nhu cầu) cũng không quá thấp (Petrodollar), OPEC+ và nhu cầu tích trữ giữ giá.',
              bullets: ['Đàm phán 60 ngày: nhiều biến động tin tức, có thể test lại vùng 90.', 'Thiên về mua/long nhẹ vùng này — KHÔNG short dầu (rất nguy hiểm).', 'Dự trữ chiến lược G7/Nhật/Mỹ cần 3–6 tháng để bù đắp thiếu hụt.'] },
            { title: 'Vĩ mô Fed — Lạm phát chip đẩy lãi suất', signal: 'down', sigLabel: 'Diều hâu — tăng lãi T9 ~70%',
              para: 'Lạm phát lõi (PCE) không hạ được vì ngoài năng lượng còn có giá nhà, y tế, thiết bị điện tử. Nhu cầu AI data center đẩy giá chip/RAM/bộ nhớ tăng mạnh nhất một thập kỷ — CEO Apple xác nhận sẽ tăng giá cả iPhone 17 lẫn iPhone 18; Goldman dự báo nhu cầu sản phẩm Apple giảm ~10%. Kevin Warsh diều hâu, bỏ forward guidance → thị trường biến động cực mạnh hai chiều.',
              bullets: ['Giá DDR/bộ nhớ tăng vọt do capex data center AI → đội giá thiết bị điện tử.', 'PCE còn cao → Fed không có cửa hạ lãi 2026, xác suất tăng T9 ~70%.', 'Cổ phiếu high-duration growth (Nvidia, Meta, Microsoft, ARM) chịu áp lực mạnh.'] },
            { title: 'Chứng khoán Mỹ — Cao thì phải chỉnh', signal: 'down', sigLabel: 'Quá nóng — chờ bớt điên rồi mua',
              para: 'S&P 500 +20%, Nasdaq 100 +34% từ đáy, margin nhà đầu tư kỷ lục → hết dư địa kéo lên. ETF thụ động cơ cấu ~160 tỷ USD cuối tháng 6 (JP Morgan) tạo biến động lớn. SpaceX IPO P/S ~90x là định giá ảo, sẽ vào rổ Nasdaq 100 trong ~15 ngày rồi gặp BCTC quý đầu giữa tháng 7 — rủi ro lớn. Không chống lại thị trường bằng short (vô lý lâu hơn sức chịu của tài khoản).',
              bullets: ['Intel, Micron, Sandisk, SpaceX, Accenture sẽ phải điều chỉnh.', 'Hàn Quốc (Kospi), Nhật (Nikkei) cũng quá cao — sẽ chỉnh mạnh.', 'Không phải điểm mua: chốt lời ngắn hạn, chờ thị trường bớt điên rồi tham gia.'] },
            { title: 'Chứng khoán Việt Nam — Mùa đông thanh khoản', signal: 'warn', sigLabel: 'Kẹt vốn — tích lũy cổ phiếu nội lực mạnh',
              para: 'VN-Index ~1.824 điểm nhưng thiếu sinh khí: LDR toàn hệ thống 115% (tín dụng +5,71% nhưng huy động chỉ +2,98%) → tín dụng không chảy. NHNN chủ yếu bơm/hút ngắn hạn qua OMO lãi cao. Nước ngoài bán ròng ~20.000 tỷ (~700–800 triệu USD)/tháng. Bốn động lực thanh khoản (tiền mặt lưu thông, thu xuất khẩu Q3, FDI sang VND lãi 8–9%, đầu tư công) chưa rõ ràng.',
              bullets: ['VN-Index phụ thuộc VIC/VHM/VRE/VPL — nhìn cổ phiếu cụ thể, đừng nhìn index.', 'Cổ phiếu nền đẹp/rẻ: VCB, BID, VNM, MSN. FPT bị bán mạnh (room ngoại 49% 2021 → 29% nay) do lợi thế AI lung lay.', 'Triết lý "mùa đông": tích lũy cổ phiếu nội lực mạnh (dòng tiền, biên LN, MOAT), chờ tín dụng nở lại.'] }
          ]
        },
        {
          date: '2026-06-20', dateShort: '20/06', timeAgo: '2 ngày trước',
          tab: 'Tập 33 · Tuần 25', sourceType: 'member-video', typeLabel: 'Video hội viên · Tập 33',
          title: 'Tập 33 (Hội Viên): Vàng, Bitcoin, Chứng Khoán Tuần 25 — Các Vấn Đề Cần Lưu Ý',
          summary: 'Danh mục hội viên giữ 70% cổ phiếu / 30% tiền. Dầu neo cao đến hết T10 (thiên long nhẹ, không short). Fed có thể tăng lãi T9 (67%) do lạm phát chip → AI/SpaceX/Intel sẽ chỉnh. Vàng gãy nặng, nếu Fed tăng lãi về ~3.000; Bitcoin chờ short 69–71k, dài hạn về 47–50k. CK Việt: kẹt thanh khoản (LDR 115%) — giữ bank trụ, TCX, phân bón (DCM/DPM), SCS, VNM.',
          feedChips: [
            { label: 'Danh mục ↑ 70% cổ phiếu',  sig: 'up'   },
            { label: 'Vàng ↓ về ~3.000 nếu tăng lãi', sig: 'down' },
            { label: 'BTC ↓ short 69–71k',        sig: 'down' },
            { label: 'AI ↓ SpaceX/Intel chỉnh',   sig: 'down' }
          ],
          keyCalls: [
            { tag: 'Danh mục VN', value: '70% cổ phiếu / 30% tiền', signal: 'up',   note: 'Giữ tỷ trọng 70/30. Tuần này tăng thêm 1/4 vị thế phân bón (đang giữ 3/4 DCM/DPM), mua mới VNM.' },
            { tag: 'Vàng',       value: 'Về ~3.000 nếu Fed tăng lãi', signal: 'down', note: 'Vàng gãy chen nặng, tích lũy lại. Chênh trong nước cao ~11 triệu/lượng — mua dần hàng uy tín được, vùng 180–190 nên chốt.' },
            { tag: 'Bitcoin',    value: 'Short 69–71k · DH về 47–50k', signal: 'down', note: 'Chưa phải năm của BTC. Đặt mốc short 69–71k (đỉnh đám mây), không short lưng chừng. Dài hạn về 50k, kịch bản cực đoan 30k.' },
            { tag: 'CK Mỹ',     value: 'AI/SpaceX/Intel chỉnh',   signal: 'down', note: 'S&P +20%/Nasdaq +34% từ đáy, margin kỷ lục. SpaceX về ~100, Intel là cú "mua tay trái bán tay phải". Apple có thể test 250.' }
          ],
          sections: [
            { title: 'Địa chính trị & Giá dầu', signal: 'wait', sigLabel: 'Neo cao đến hết T10 — long nhẹ, không short',
              para: 'Trump ký MU đình chiến 60 ngày với Iran tại G7 → dầu điều chỉnh về 76–80. Nhưng 20/6 IRGC lại đóng eo biển Hormuz (Israel tiếp tục tấn công Nam Liban); đàm phán chuyển sang Ai Cập 21/6 (trung gian Pakistan/Saudi/Turkey). Dự trữ chiến lược thiếu → khó để dầu giảm sâu về 65; kịch bản có thể test 90.',
              bullets: ['Israel mới là bên chi phối — chính phủ Mỹ nhiệm kỳ này khá yếu thế.', 'Thiên về mua/long nhẹ vùng này, short dầu rất nguy hiểm.', 'Vùng giá trị neo đến khoảng hết tháng 10.'] },
            { title: 'Vĩ mô Fed & Chứng khoán Mỹ', signal: 'down', sigLabel: 'Diều hâu — tăng lãi T9 ~67%',
              para: 'Kevin Warsh nhấn mạnh ổn định giá cả 12 lần, bỏ forward guidance — "găng tay nhung bọc nắm đấm thép". Lợi suất TP Mỹ 2 năm tăng vọt, 10 năm 4,45%. Lạm phát chip/bộ nhớ (Apple tăng giá iPhone) giữ PCE cao → xác suất tăng lãi T9 ~67%. Nếu tăng lãi, S&P test lại đỉnh cũ tháng 1, AI phải trả giá.',
              bullets: ['SpaceX 218→170, đáng giá <135, nhiều người cược về 100 — hình 3 đỉnh ra hàng.', 'Intel: cớ "cung chip Apple" là linh tinh (MacBook dùng chip M) — up & ra hàng, tăng 3 lần từ đầu năm.', 'Apple có thể test 250 (Tim Cook rời 10/2026); Nvidia giống FPT khó lên, giữ là hay; Google test 335–340 mua được.', 'Hàn (Kospi)/Nhật (Nikkei) 2–3 đỉnh sẽ chỉnh mạnh; Samsung đừng mua vùng này.'] },
            { title: 'Vàng, Bạc & Bitcoin', signal: 'down', sigLabel: 'Chờ — nhạy với quyết định Fed',
              para: 'Vàng gãy chen nặng, tích lũy lại; nếu Fed tăng lãi hoàn toàn có thể về ~3.000 (Thái Phạm là người dự báo vàng về 3.900–4.000 từ sớm). Bạc tệ hơn, nếu tăng lãi về 48–50 (mất thêm ~20%). Bitcoin chưa phải năm của nó — "banana" lần ba chưa hình thành xong.',
              levels: 'Vàng: tích lũy, rủi ro về ~3.000 nếu tăng lãi · Bạc: 48–50 · BTC short: 69–71k, DH về 47–50k (cực đoan 30k)' },
            { title: 'Danh mục Chứng khoán Việt Nam', signal: 'up', sigLabel: 'Giữ 70% cổ phiếu — bank trụ + TCX + phân bón',
              para: 'Vấn đề chính là siết thanh khoản nhà nước (LDR 115%, huy động chậm hơn tín dụng). Chỉ ~28–29% mã uptrend, từ 15/6 một số mã mới nhích lên. Giữ kỷ luật, "tà tà kiếm cơm", chờ tín dụng nở lại.',
              tickers: [
                { ticker: 'VCB',  zone: 'Nắm 57–61',  note: 'Nắm dài hạn, không lo lắng.',                                 action: 'Giữ',  aBg: 'oklch(0.95 0.02 235)', aColor: 'oklch(0.4 0.08 235)' },
                { ticker: 'BID',  zone: 'Nắm',        note: 'Ngân hàng nhà nước đang trở mình tốt, ban lãnh đạo mới.',     action: 'Giữ',  aBg: 'oklch(0.95 0.02 235)', aColor: 'oklch(0.4 0.08 235)' },
                { ticker: 'TCB',  zone: 'Nắm',        note: 'Fake out một lần rồi tích lũy lại.',                          action: 'Giữ',  aBg: 'oklch(0.95 0.02 235)', aColor: 'oklch(0.4 0.08 235)' },
                { ticker: 'EIB',  zone: 'Nắm chặt',   note: 'Nén càng chặt bung càng mạnh; fake out/spring càng tốt.',     action: 'Giữ',  aBg: 'oklch(0.95 0.02 235)', aColor: 'oklch(0.4 0.08 235)' },
                { ticker: 'TCX',  zone: 'Mua ~40–41', note: 'Mã dẫn vốn cho Vin/VHM/Masan/Techcombank — vùng giá trị, mục tiêu 3/2027.', action: 'Mua', aBg: 'oklch(0.95 0.04 150)', aColor: 'oklch(0.42 0.1 150)' },
                { ticker: 'DCM',  zone: 'Giữ 3/4 vị thế', note: 'Đạm Cà Mau — tăng thêm 1/4 tuần này, target cuối năm.',  action: 'Mua',  aBg: 'oklch(0.95 0.04 150)', aColor: 'oklch(0.42 0.1 150)' },
                { ticker: 'VNM',  zone: 'Mua ~60',    note: 'Mua mới vì rẻ (không vì tăng trưởng), trong VN30, SCIC mua. Cắt lỗ nếu về 50.', action: 'Mua', aBg: 'oklch(0.95 0.04 150)', aColor: 'oklch(0.42 0.1 150)' },
                { ticker: 'SCS',  zone: 'Cầm 2–3 năm', note: 'Cầm dài hạn; hưởng lợi Long Thành, ACV có chủ tịch mới.',     action: 'Giữ',  aBg: 'oklch(0.95 0.02 235)', aColor: 'oklch(0.4 0.08 235)' },
                { ticker: 'SSI',  zone: 'Đắt — đợi',  note: 'Vùng 27 vẫn đắt (đắt hơn ~30%) — không mua, chờ.',           action: 'Theo dõi', aBg: '#EFEEE9',          aColor: '#5F5E57'             }
              ] }
          ]
        },
        {
          date: '2026-06-18', dateShort: '18/06', timeAgo: '4 ngày trước',
          tab: 'Video · 18/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'Chủ Tịch Fed Lật Kèo — Từ Bỏ Định Hướng Lãi Suất, Lưu Ý Gì Cho Vàng, BTC, Chứng Khoán, Tỷ Giá',
          summary: 'Fed giữ nguyên lãi suất 3,5–3,75% (lần thứ 4 liên tiếp 2026). Tân chủ tịch Kevin Warsh thay đổi căn bản: từ chối nộp dot plot, BỎ forward guidance — để thị trường tự phản ứng với dữ liệu; lập 5 tổ công tác cải tổ Fed; diều hâu về thu hẹp bảng cân đối kế toán. Dot plot: 9/18 dự tăng lãi 1 lần, PCE cuối 2026 dự 3,6%. Hệ quả: thị trường biến động cực mạnh (choppy); vàng tích lũy dưới MA200 (rủi ro về 3.000), BTC chỉ còn là một mã giao dịch, AI/semiconductor cao sẽ hạ, EM tiếp tục áp lực tỷ giá/lãi suất.',
          feedChips: [
            { label: 'Fed ◷ giữ nguyên lãi suất', sig: 'wait' },
            { label: 'Warsh ↓ bỏ forward guidance', sig: 'down' },
            { label: 'Vàng ↓ rủi ro về 3.000',     sig: 'down' },
            { label: 'EM ⚠ áp lực tỷ giá',         sig: 'warn' }
          ],
          keyCalls: [
            { tag: 'Fed',        value: 'Giữ 3,5–3,75% (lần 4)',   signal: 'wait', note: 'FOMC đồng thuận giữ lãi suất lần thứ 4 liên tiếp 2026, trong khi ECB tăng 1 lần và Nhật nâng lên 1% (cao nhất nhiều thập kỷ).' },
            { tag: 'Kevin Warsh', value: 'Bỏ forward guidance',    signal: 'down', note: 'Từ chối nộp dot plot, không định hướng lãi suất — để thị trường tự phản ứng với dữ liệu. Lập 5 tổ công tác cải tổ Fed, nhấn mạnh ổn định giá cả.' },
            { tag: 'Dot plot',   value: '9/18 dự tăng 1 lần',      signal: 'down', note: '6 thành viên dự tăng 2 lần (diều hâu). PCE cuối 2026 dự 3,6% (cao hơn 2,7% hồi T3); lãi suất trung vị 3,8%.' },
            { tag: 'Thị trường mới nổi', value: 'Áp lực tỷ giá/lãi', signal: 'warn', note: 'Fed giữ lãi cao + USD mạnh → EM phải duy trì lãi cao bảo vệ đồng tiền. Tiền chỉ chảy vào EM khi Fed nới lỏng. Yên Nhật, Won Hàn mất giá kỷ lục.' }
          ],
          sections: [
            { title: 'Fed dưới thời Kevin Warsh — Bỏ forward guidance', signal: 'down', sigLabel: 'Diều hâu — thị trường tự phản ứng dữ liệu',
              para: 'Fed giữ nguyên lãi suất như dự báo, nhưng thay đổi lớn nằm ở phong cách điều hành. Kevin Warsh từ chối nộp dot plot ("không hữu ích cho điều hành"), bỏ forward guidance — không hứa hẹn lộ trình lãi suất, để thị trường phản ứng trực tiếp với dữ liệu lạm phát/việc làm. Ông lập 5 tổ công tác cải tổ Fed (truyền thông, bảng cân đối kế toán, nguồn dữ liệu, năng suất, thị trường lao động) và nhấn mạnh ổn định giá cả là nhiệm vụ trọng tâm.',
              bullets: ['Dot plot: 9/18 thành viên dự tăng lãi 1 lần năm 2026, 6 người dự tăng 2 lần.', 'PCE cuối 2026 dự 3,6% (cao hơn nhiều mức 2,7% hồi tháng 3); lãi suất trung vị 3,8%.', 'Warsh diều hâu về thu hẹp bảng cân đối kế toán; nhìn lực cầu (GDP) chứ không tin hứa hẹn nguồn cung AI.', 'Chuyên gia (Goldman, JP Morgan, Citi, BlackRock) đều đọc là chuyển hướng diều hâu.'] },
            { title: 'Tác động tới tài sản', signal: 'down', sigLabel: 'Biến động cực mạnh — chọn đúng thời điểm',
              para: 'Không còn forward guidance nghĩa là không ai "dẫn đường" — thị trường sẽ biến động cực mạnh (choppy) cả hai chiều theo từng số liệu. Trong môi trường lãi cao kéo dài, vàng cần tích lũy dưới MA200; nếu có đợt thu hẹp bảng cân đối kế toán, vàng hoàn toàn có thể về vùng 3.000.',
              bullets: ['Vàng: choppy, tích lũy dưới MA200, rủi ro về ~3.000 nếu siết tiền.', 'Bitcoin: chỉ còn là một mã giao dịch sau 3 đạo luật crypto của Mỹ.', 'CK Mỹ: AI/semiconductor (Nvidia, Meta, Microsoft, ARM) lên cao sẽ phải hạ.', 'Thị trường mới nổi: tỷ giá và lãi suất tiếp tục chịu áp lực; EM (Đài Loan, Hàn) tốt nhưng cao sẽ chỉnh.'] }
          ]
        },
        {
          date: '2026-06-17', dateShort: '17/06', timeAgo: 'Hôm qua',
          tab: 'Video · 17/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'Sự Thật Về "Nghìn Tỷ Phú" Elon Musk — Cú Bơm Thổi IPO SpaceX',
          summary: 'IPO SpaceX chỉ bán 4,2% cổ phần (float hẹp) để thổi giá phần còn lại — định giá ~2.660 tỷ USD là ảo; Morningstar ước ~780 tỷ. Tài sản Elon ~100% trên giấy (ông tự nhận chỉ ~0,1% tiền mặt). Công ty lỗ nặng, P/S >100x. Rủi ro lớn 15/7 khi ~911 triệu cp insider được bán. Không khuyến nghị mua ở giá này.',
          feedChips: [
            { label: 'SpaceX ↓ định giá ảo',        sig: 'down' },
            { label: 'P/S >100x ↓ cực đắt',          sig: 'down' },
            { label: 'Insider xả 15/7 ↓',            sig: 'down' },
            { label: 'Starlink ↑ mảng duy nhất lãi', sig: 'up'   }
          ],
          keyCalls: [
            { tag: 'IPO SpaceX', value: 'Định giá ảo', signal: 'down', note: 'Chỉ bán 4,2% công ty ra công chúng để định giá 95,8% còn lại. Morningstar ước ~780 tỷ USD (~30% mức ~2.660 tỷ hiện tại).' },
            { tag: 'Tài sản Elon', value: '~100% trên giấy', signal: 'down', note: 'Elon tự nhận chỉ ~0,1% là tiền mặt, phần lớn từ cổ phần Tesla & SpaceX. Bán 5–10% là thị trường sụp trước khi khớp hết.' },
            { tag: 'Định giá', value: 'P/S >100x · lỗ nặng', signal: 'down', note: 'P/S >100x doanh thu 2025; ROE −14,7%, ROIC −9,41%, biên ròng −26,4%. Lỗ 2025 ~4,94 tỷ USD, Q1/2026 lỗ thêm ~4,28 tỷ USD.' },
            { tag: 'Rủi ro 15/7', value: 'Insider xả ~911tr cp', signal: 'down', note: 'BCTC quý đầu 15/7 mở khóa ~911 triệu cp insider — gấp ~3 lần float 500 triệu. 15–25/7 là phép thử giá thực.' }
          ],
          sections: [
            { title: 'Chứng khoán Mỹ', signal: 'down', sigLabel: 'Cảnh báo — định giá SpaceX ảo',
              para: 'SpaceX IPO chỉ niêm yết ~4,2% công ty (float công khai ~500 triệu cp) — ví như chỉ bán "một góc vườn đẹp nhất" rồi nhân đơn giá ra cả ngôi nhà. Nguồn cung hẹp + cầu lớn đẩy giá lên mức không thật. Morningstar định giá chỉ ~780 tỷ USD so với ~2.660 tỷ hiện tại. So sánh với VinFast (VFS) 2023 từng vọt ~90 USD rồi sụp.',
              bullets: ['Tài sản Elon gần như toàn bộ trên giấy — chỉ ~0,1% tiền mặt.', 'Công ty lỗ lớn; chỉ Starlink có lãi, mảng hàng không vũ trụ/AI/data center lỗ.', 'P/S >100x — IPO có P/S >20x thường mất ~10 năm hoàn vốn.'] },
            { title: 'Cơ chế thổi giá & rủi ro cung cổ phiếu', signal: 'down', sigLabel: 'Áp lực bán lớn từ 15/7',
              para: 'Quỹ thụ động buộc phải mua khi SpaceX vào index: S&P 500 hấp thụ ~19% float, sau 1 năm Russell 1000 + Nasdaq 100 thêm ~24% — tổng hơn nửa float bị mua máy móc theo quy tắc index chứ không vì giá trị. Nhưng BCTC quý đầu 15/7 mở khóa ~911 triệu cp insider (gấp ~3 lần float hiện tại); làn sóng bán của insider/Friends&Family 15–25/7 mới là phép thử giá thực.',
              levels: 'Float công khai ~4% (~500tr cp) · Insider mở khóa 15/7: ~911tr cp · Phép thử giá: 15–25/7' }
          ]
        },
        {
          date: '2026-06-17', dateShort: '17/06', timeAgo: 'Hôm qua',
          tab: 'Post · 17/06', sourceType: 'member-post', typeLabel: 'Post hội viên',
          title: 'Kịch Bản FED Tối Nay — Chia Sẻ Qua Video Phỏng Vấn',
          summary: 'Thái Phạm chia sẻ kịch bản cuộc họp FED kèm một video phỏng vấn (đăng kèm link Facebook). Phần quan điểm chi tiết nằm trong video liên kết — post trên YouTube chỉ là phần dẫn.',
          feedChips: [
            { label: 'FED ◷ chờ kết quả họp', sig: 'wait' }
          ],
          keyCalls: [
            { tag: 'FED', value: 'Chờ kết quả họp', signal: 'wait', note: 'Chia sẻ kịch bản FED qua video phỏng vấn liên kết; nội dung chi tiết nằm trong video, không có trong post công khai.' }
          ],
          sections: [
            { title: 'Bối cảnh', signal: 'wait', sigLabel: 'Chờ kết quả cuộc họp FED',
              para: 'Bài post dẫn sang một video phỏng vấn về kịch bản FED trong cuộc họp lần này. Phần phân tích chi tiết nằm trong video liên kết (Facebook), không có trong nội dung post công khai trên YouTube.' }
          ]
        },
        {
          date: '2026-06-16', dateShort: '16/06', timeAgo: 'Hôm nay',
          tab: 'Post · 16/06', sourceType: 'member-post', typeLabel: 'Post hội viên',
          title: 'TĂNG CỔ PHIẾU LÊN 70% — Chợ Huyện Sắp Có Sức Sống',
          summary: 'Tăng cổ phiếu VN lên 70% (tiền còn 30%). Bank tích nền ổn, TCX/CK có sức sống đầu tiên. Đạm/phân sắp về vùng ngon. Dầu 70–80 → tỷ giá dễ thở hơn. CK Mỹ/Hàn/Nhật chỉnh nhưng không ảnh hưởng chợ huyện.',
          feedChips: [
            { label: 'CK Việt ↑ 70% cổ phiếu',  sig: 'up'   },
            { label: 'TCX ↑ tín hiệu sức sống',   sig: 'up'   },
            { label: 'Đạm/Phân ◷ sắp vùng ngon',  sig: 'wait' },
            { label: 'BTC ↓ short 68–70k → 42k',  sig: 'down' }
          ],
          keyCalls: [
            { tag: 'VN Portfolio', value: '70% cổ phiếu ↑', signal: 'up',   note: 'Từ 50/50 → 70% cổ phiếu / 30% tiền. Bank ổn, Trung Đông ổn — đủ tín hiệu tăng tỷ trọng.' },
            { tag: 'Bank',         value: 'Giữ chặt / Mua đủ', signal: 'up', note: 'Đã có đủ hàng → cầm chặt. Chưa có → mua đủ vào.' },
            { tag: 'TCX / CK',     value: 'Còn sớm, có sức sống', signal: 'up', note: 'TCX và nhóm CK hôm qua thể hiện. Có hàng giữ, chưa có mua.' },
            { tag: 'Đạm / Phân',   value: 'Sắp về vùng ngon', signal: 'wait', note: 'Đang giảm thêm — tốt, sắp về vùng mua hấp dẫn. SCS cầm chặt.' }
          ],
          sections: [
            { title: 'Hành động danh mục', signal: 'up', sigLabel: 'Tích cực — tăng lên 70% cổ phiếu',
              para: 'Bank tích nền ổn định, Trung Đông có thỏa thuận, dầu về 70–80 đúng dự báo → đủ tín hiệu nâng tỷ trọng. Cổ phiếu tăng từ 50% lên 70%, tiền mặt còn 30%. VN-Index nếu giảm chủ yếu từ VIC/VHM/VRE — không phản ánh thực tế thị trường.',
              bullets: ['Đã có đủ hàng hội viên → không làm gì, cầm chặt.', 'Chưa có bank hội viên → mua đủ vào.', 'VN-Index giảm từ VIC/VHM/VRE — bỏ qua, không quan trọng.'] },
            { title: 'Ngành Chứng khoán', signal: 'up', sigLabel: 'Tín hiệu sớm — có sức sống',
              para: 'TCX và nhóm chứng khoán hôm qua thể hiện tốt. Còn sớm nhưng đây là tín hiệu đầu tiên đáng chú ý. Có hàng giữ chặt, chưa có thì mua vào.',
              bullets: ['TCX: giữ chặt hoặc mua nếu chưa có.', 'Nhóm CK (VCI, MBS…): theo dõi xác nhận thêm.'] },
            { title: 'Ngành Sản xuất & Phân bón', signal: 'wait', sigLabel: 'Chờ vùng ngon — đang về',
              para: 'Đạm và phân bón tiếp tục giảm — đây là điều tốt, sắp về vùng mua hấp dẫn. SCS cầm chặt. HPG ai kẹt thì cầm — lù lù như xe lu.',
              bullets: ['DCM / DPM: đang giảm → sắp về vùng ngon, chuẩn bị mua thêm.', 'SCS: cầm chặt, không bán.', 'HPG: cầm nếu kẹt — chưa có catalyst rõ.'] },
            { title: 'Vĩ mô & CK Quốc tế', signal: 'wait', sigLabel: 'Mỹ/Hàn/Nhật chỉnh — không ảnh hưởng VN',
              para: 'CK Mỹ/Hàn/Nhật sẽ chỉnh mạnh nhưng chợ huyện VN đã chỉnh rất sâu từ trước, chán lắm rồi — họ chỉnh thì mình có khi còn tăng. Dầu 70–80 → lạm phát nhập khẩu giảm → tỷ giá VND ổn định hơn → tốt dần lên.',
              bullets: ['Dầu 70–80 USD → áp lực tỷ giá và lạm phát VN giảm dần.', 'CK quốc tế chỉnh không kéo chợ huyện — VN đã discount sâu rồi.', 'Trung Đông ổn → rủi ro địa chính trị hạ nhiệt toàn cầu.'] }
          ]
        },
        {
          date: '2026-06-15', dateShort: '15/06', timeAgo: 'Hôm qua',
          tab: 'Post · 5:15 sáng', sourceType: 'member-post', typeLabel: 'Post hội viên · 5:15 sáng',
          title: 'Iran–Mỹ Thỏa Thuận Hòa Bình Ký 19/6 — Thị Trường Phản Ứng',
          summary: 'Iran–Mỹ ký hòa bình 19/6 — đúng kỳ vọng: vàng tăng, dầu giảm. BTC vẫn downtrend. CK Mỹ hồi nhưng đã phản ánh vào giá. VN dễ thở hơn khi dầu giảm.',
          feedChips: [
            { label: 'Vàng ↑ tăng ngắn hạn',  sig: 'up'   },
            { label: 'Dầu ↓ đúng dự báo',      sig: 'down' },
            { label: 'BTC ↓ vẫn downtrend',    sig: 'down' },
            { label: 'CK Việt ⚠ dễ thở hơn',  sig: 'warn' }
          ],
          keyCalls: [
            { tag: 'Iran–Mỹ',   value: 'Ký 19/6 Thụy Sĩ',  signal: 'wait', note: 'Trump + Thủ tướng Pakistan xác nhận. 7.749 ngày "sắp có" — lần này có vẻ thật. Nhưng đã phản ánh vào giá từ lâu.' },
            { tag: 'Vàng / Dầu', value: 'Vàng ↑ · Dầu ↓',  signal: 'wait', note: 'Đúng kỳ vọng: hòa bình → dầu giảm, USD yếu → vàng tăng. Không thay đổi thesis dài hạn.' },
            { tag: 'Bitcoin',   value: 'Vẫn downtrend',      signal: 'down', note: 'Hòa bình Iran không cứu BTC. Chờ hồi 68–70k để short lại.' },
            { tag: 'CK Việt',   value: 'Dễ thở hơn',         signal: 'wait', note: 'Dầu giảm → lạm phát nhập khẩu giảm → áp lực tỷ giá VND bớt. Giữ bank, chờ tín hiệu tốt mua thêm.' }
          ],
          sections: [
            { title: 'Địa chính trị — Iran–Mỹ ký 19/6', signal: 'wait', sigLabel: 'Sự kiện lớn — đã phản ánh vào giá',
              para: 'Sau 7.749 ngày liên tục "sắp có thỏa thuận", Trump và Thủ tướng Pakistan xác nhận Iran–Mỹ ký hòa bình ngày 19/6 tại Thụy Sĩ. Từ tháng 4 đến nay, mỗi khi CK đỏ ông Trump đều tung tin "sắp ký" — thị trường đã hấp thụ tin này nhiều lần. Kỳ vọng đã ăn vào giá phần lớn rồi.',
              bullets: ['Dầu giảm đúng kỳ vọng — xác nhận thesis dầu về 77–80 USD.', 'Vàng tăng do USD yếu — không phải tín hiệu mới về cung cầu.', 'Futures CK Mỹ xanh điểm — không chase; khả năng đã phản ánh vào giá.', 'Theo dõi 19/6: ký thật → dầu tiếp tục giảm; đổ vỡ → dầu bật lại.'] },
            { title: 'Bitcoin', signal: 'down', sigLabel: 'Downtrend — chờ 68–70k short lại',
              para: 'Hòa bình Iran không thay đổi cấu trúc kỹ thuật BTC. Vẫn downtrend từ đỉnh 125k. Chờ hồi kỹ thuật lên 68.000–70.000 rồi short lại, mục tiêu ~42k.',
              levels: 'Vùng short: 68.000–70.000 · mục tiêu: ~42.000' },
            { title: 'Chứng khoán Việt Nam', signal: 'wait', sigLabel: 'Áp lực dễ thở hơn — giữ nguyên',
              para: 'Hòa bình Iran + dầu giảm → lạm phát nhập khẩu giảm → áp lực tỷ giá VND bớt dần → tích cực cho CK VN dài hạn. Không action vội — tiếp tục nắm chặt bank chiến lược, chờ tín hiệu tỷ giá và lãi suất khả quan hơn mới mua thêm.',
              bullets: ['Giữ nguyên 50/50 — không thay đổi.', 'Nắm chặt: VCB, BID, TCB, HDB, EB, BVB.', 'Tín hiệu mua thêm: tỷ giá ổn định + lãi suất có dấu hiệu giảm.'] }
          ]
        },
        {
          date: '2026-06-13', dateShort: '13/06', timeAgo: '3 ngày trước',
          tab: 'Tập 32 · Tuần 24', sourceType: 'member-video', typeLabel: 'Video hội viên · Tập 32',
          title: 'Mua Vàng Được Chưa? CK Mỹ/Hàn/Nhật/Việt Tuần 24',
          summary: 'Vàng vùng $4.200 mua được. Limit short BTC 68.570 → kịch bản về 42k. SpaceX IPO P/S 96x — CK Mỹ chỉnh đến giữa T7. VN 50/50 giữ nguyên — chờ mùa xuân 2027.',
          feedChips: [
            { label: 'Vàng ◷ $4.200 mua được', sig: 'wait' },
            { label: 'BTC ↓ short 68.5k→42k',  sig: 'down' },
            { label: 'CK Mỹ ↓ chỉnh đến T7',   sig: 'down' },
            { label: 'CK Việt ◷ 50/50 giữ',    sig: 'wait' }
          ],
          keyCalls: [
            { tag: 'Vàng',   value: 'Mua được rồi',   signal: 'wait', note: 'Vùng $4.200 mua được nếu đã bán cao. Chênh 13–14tr/lượng nhưng cứ mua lại phần đã bán. Dài hạn còn 1 chân về ~$3.300.' },
            { tag: 'Bitcoin', value: 'Short 68,5–70k', signal: 'down', note: 'Limit short 68.570. Elliott chân 5 → ~42k. Clarity Act 4/7 — BTC thành mã CK Mỹ chính thức.' },
            { tag: 'CK Mỹ',  value: 'Chỉnh T7',       signal: 'down', note: 'SpaceX P/S 96x — ảo. Nasdaq chỉnh đến giữa T7; short Intel, AMD, Tesla 440.' },
            { tag: 'CK Việt', value: '50/50 giữ',      signal: 'wait', note: 'Không action. Chờ mùa xuân 2027. TCX + VPX + bank + phân bón.' }
          ],
          sections: [
            { title: 'Vàng & Dầu', signal: 'wait', sigLabel: 'Mua được — còn 1 chân rủi ro',
              para: 'Vàng ~$4.230, chênh trong nước 13–14 triệu/lượng (phi lý). Đây là chân 2; có thể còn chân 3 về ~$3.300 (125 triệu/lượng VN). Nhưng nếu đã bán vùng cao trước → mua lại phần đã bán ở đây được. Vàng tài khoản: mua, đợi hồi về $4.000+ rồi chốt. Dầu về 79–80 không cần quan tâm lý do.',
              bullets: ['Chênh mục tiêu tối ưu ≤ 7 triệu/lượng, hiện 14 triệu là chưa ngon — nhưng dài hạn vẫn mua được.', 'Bạc về ~55 USD/oz theo vàng.', 'Dầu Brent test 79–80 — thỏa thuận Iran có hay không cũng vậy.'] },
            { title: 'Bitcoin & Crypto', signal: 'down', sigLabel: 'Short 68,5–70k — kịch bản 42k',
              para: 'BTC đang ở chân 3 Elliott từ đỉnh 125k. Chờ hồi kỹ thuật lên 68.500–70.000 rồi short. Clarity Act dự kiến thông qua 4/7 — crypto chính thức hóa vào hệ thống Petrodollar. BTC, ETH, XRP chỉ là mã giao dịch như CK, không còn là tiền tệ thay thế.',
              levels: 'Limit short: 68.570 · kịch bản về: ~42.000 · mua dài hạn: vùng 42k' },
            { title: 'Chứng khoán Mỹ', signal: 'down', sigLabel: 'Chỉnh đến giữa tháng 7',
              para: 'SpaceX IPO mở 150→đỉnh 176→đóng 160 USD. P/S 94–96x (Nvidia chỉ 19x, AVGO 24x) — hoàn toàn ảo. Quỹ thụ động phải mua ~$38 tỷ khi SpaceX vào Nasdaq 100 đầu T7; lockup unlock T7 → nguồn cung tăng đột biến. Nasdaq chỉnh đến giữa T7.',
              bullets: ['Nasdaq short vào 29.600, thêm ở 31.000, cắt lỗ 32.500.', 'Intel: sort + thêm ở 140, cắt lỗ 155 — phân phối Wyckoff.', 'AMD: sort — FA yếu, chỉnh mạnh.', 'Tesla: đợi lên 440 rồi sort.', 'Adidas: giữ, mục tiêu 167–170 → 200 rồi chốt.', 'Apple, Nvidia, Google: không đụng — biến động lớn, khó cầm.'] },
            { title: 'Chứng khoán Việt Nam', signal: 'wait', sigLabel: 'Mùa đông — 50/50, không action',
              para: '20–23% cổ phiếu VN đang uptrend, thanh khoản yếu. VN-Index "áo vest bên ngoài áo ba lỗ bên trong" — chỉ VIC/VHM kéo chỉ số. Không action — cầm nguyên bank + phân bón + TCX + VPX. Chờ 2027 khi Fed hạ lãi, vĩ mô dịu.',
              bullets: ['TCX: mua dần, mục tiêu VN30 T1/2027. Bị dìm 35–36 → mua thêm.', 'VPX (VCK): theo dõi cùng TCX, cùng kỳ vọng VN30.', 'BVBank: niêm yết chính thức T7/2026 — giữ.', 'Bank (VCB, BID, TCB, HDB, EB, BVB): không bán vùng thấp.', 'Phân bón (DPM/DCM): giữ ½ vị thế ~25 — không bán.', 'Novaland: chờ về 11–12 mới mua.'] }
          ]
        },
        {
          date: '2026-06-12', dateShort: '12/06', timeAgo: '4 ngày trước',
          tab: 'Post hội viên', sourceType: 'member-post', typeLabel: 'Post hội viên',
          title: 'Chuyện chứng thế giới hôm qua — Vàng, BTC',
          summary: 'Cảnh báo thao túng tin tức (Iran) trước IPO SpaceX. Semiconductor sắp chỉnh mạnh. Vàng hồi quanh MA200 nghiêng về 3.900. BTC chờ chỉnh về 42–45k. Quan điểm chứng Việt không đổi.',
          feedChips: [
            { label: 'CK Mỹ ↓ semis sắp chỉnh', sig: 'down' },
            { label: 'Vàng ◷ chờ 3.900',         sig: 'wait' },
            { label: 'BTC ↓ về 42–45k',           sig: 'down' },
            { label: 'CK Việt ◷ không đổi',       sig: 'wait' }
          ],
          keyCalls: [
            { tag: 'CK Mỹ',   value: 'Semis ↓',       signal: 'down', note: 'MU, SNDK, INTC kéo rướn — sớm chỉnh mạnh theo NVDA, AAPL, GOOG.' },
            { tag: 'Vàng',    value: '4.050 → 3.900',  signal: 'wait', note: 'Hồi quanh MA200; vẫn nghiêng kịch bản về ~3.900.' },
            { tag: 'Bitcoin', value: '42–45k',          signal: 'down', note: 'Hồi kỹ thuật tạo nền rồi sẽ có cú chỉnh tiếp theo.' },
            { tag: 'CK Việt', value: 'Không đổi',      signal: 'wait', note: 'Giữ nguyên quan điểm và cơ cấu danh mục.' }
          ],
          sections: [
            { title: 'Chứng khoán Mỹ', signal: 'down', sigLabel: 'Giảm — cảnh giác thao túng tin tức',
              para: 'Đêm qua có màn thao túng trắng trợn: tin "thả bom Iran" khiến thị trường bán tháo, 3 tiếng sau lại tin "đàm phán tốt đẹp, đã gửi MOU". Mục đích: giữ nhà đầu tư cá nhân hưng phấn cho IPO SpaceX hôm nay — giá 135 USD/cp, định giá ~1.800 tỷ USD, bán ra thu về 75–80 tỷ.',
              bullets: ['Nhóm semiconductor (Micron, Sandisk, Intel…) đang kéo rướn — sẽ sớm chỉnh mạnh theo Nvidia, Apple, Google.', 'Chart Nasdaq 100 và S&P 500 đều không bền vững.'] },
            { title: 'Vàng', signal: 'wait', sigLabel: 'Chờ mua',
              para: 'Hồi phục ở vùng 4.050, khả năng dao động quanh MA200 một thời gian rồi mới chọn hướng tiếp theo. Vẫn nghiêng về kịch bản về ~3.900; nếu tạo nền thành công ở đây sau 3 tháng thì có thể đi lên.',
              levels: 'Hồi quanh MA200 ~4.050 · kịch bản chính ~3.900' },
            { title: 'Bitcoin', signal: 'down', sigLabel: 'Giảm',
              para: 'Đi đúng kỹ thuật: phục hồi kỹ thuật, tạo nền "banana" số 3 rồi sẽ có cú chỉnh tiếp theo. Không short trừ khi kéo tới 68–69k.',
              levels: 'Vùng tiếp theo: 42–45k · không short dưới 68–69k' },
            { title: 'Chứng khoán Việt Nam', signal: 'wait', sigLabel: 'Không thay đổi',
              para: 'Quan điểm với chứng Việt không thay đổi — giữ nguyên cơ cấu như tuần trước: 50% tiền mặt; danh mục bank – SCS – phân bón – TCX.' }
          ]
        },
        {
          date: '2026-06-08', dateShort: '08/06', timeAgo: '8 ngày trước',
          tab: 'Tập 31 · Tuần 23', sourceType: 'member-video', typeLabel: 'Video hội viên · Tập 31',
          title: 'Chứng khoán, Dầu, Vàng, Bitcoin — Tuần 23 — QUAN TRỌNG!',
          summary: 'Rủi ro Black Monday từ Hàn–Nhật. Nasdaq chân 1 ~27.000, hồi rồi có chân sâu hơn. Vàng đợi 3.900–4.000. Ai cầm hàng nên chốt. Tỷ giá VN áp lực từ Section 301.',
          feedChips: [
            { label: 'CK Mỹ ↓ Black Monday?',    sig: 'down' },
            { label: 'Hàn/Nhật ↓ −30/−17%',      sig: 'down' },
            { label: 'Vàng ◷ 3.900–4.000',        sig: 'wait' },
            { label: 'BTC ↓ test ~50k',            sig: 'down' }
          ],
          keyCalls: [
            { tag: 'CK Mỹ',    value: 'Black Monday?',  signal: 'down', note: 'Rủi ro phiên đầu tuần lan từ Hàn – Nhật; ai cầm hàng nên chốt.' },
            { tag: 'Hàn / Nhật', value: '−30% / −17%', signal: 'down', note: 'Chính phủ Hàn sẵn sàng đánh sập TTCK để bảo vệ đồng won.' },
            { tag: 'Vàng',     value: '3.900–4.000',    signal: 'wait', note: 'Vùng mua tích lũy; trong nước đợi chênh về ~7 triệu.' },
            { tag: 'Bitcoin',  value: 'test ~50k',       signal: 'down', note: 'Nếu Black Monday sẽ rút chân nhanh; short 1/3, cắt lỗ 69k.' }
          ],
          sections: [
            { title: 'Bối cảnh vĩ mô & địa chính trị', signal: 'down', sigLabel: 'Rủi ro cao',
              bullets: [
                'Margin nhà đầu tư cá nhân tại Mỹ cao kỷ lục; dòng tiền đòn bẩy Hàn Quốc – Nhật Bản đổ vào cổ phiếu công nghệ Mỹ (hiệu ứng "bà ngoại Hàn Quốc" — rút tiết kiệm, đổi won sang USD mua TQQQ).',
                'IPO SpaceX ngày 12/06 (135 USD/cp, định giá ~1.800 tỷ USD) cần hút ~100 tỷ USD thanh khoản — động lực để "đánh xuống rồi kéo lên" toàn thị trường; cảnh giác thao túng bằng tin tức Iran.',
                'Hàn – Nhật rủi ro điều chỉnh mạnh: chính phủ Hàn sẵn sàng can thiệp bảo vệ đồng won; Nhật dự kiến chỉnh 15–17%. Nếu Hàn hoảng loạn phiên thứ Hai → Mỹ hoảng theo.',
                'Việt Nam: thặng dư 178 tỷ USD với Mỹ (kỷ lục 2025) → bị ép minh bạch tỷ giá, điều tra Section 301; khả năng phá giá VND 4–5%, lãi suất cao kéo dài — bối cảnh vĩ mô mới buộc phòng thủ.'
              ] },
            { title: 'Chứng khoán Mỹ', signal: 'down', sigLabel: 'Giảm — chu kỳ chỉnh mới bắt đầu',
              para: 'Kịch bản "Black Monday" nếu Hàn Quốc hoảng loạn phiên đầu tuần. Nasdaq dự kiến tạo chân đầu tiên quanh 27.000, hồi về 28.600 rồi có chân sâu hơn test 25.000; S&P 500 trường hợp xấu test 7.000. VIX tạo đáy — dễ bật mạnh. Ai đang cầm hàng nên chốt, chưa vội bắt đáy.',
              tickers: [
                { ticker: 'NVDA',  zone: 'Hỗ trợ ~189',    note: 'Hoảng loạn về 189 sẽ có lực bắt đáy, hồi kỹ thuật rồi mới tính tiếp.',          action: 'Theo dõi', aBg: '#EFEEE9',              aColor: '#5F5E57'              },
                { ticker: 'INTC',  zone: 'Hồi → về ~50',   note: 'Black Monday về vùng 81 sẽ hồi, nhưng đích quay về vùng 50.',                     action: 'Bán',       aBg: 'oklch(0.95 0.04 27)',  aColor: 'oklch(0.46 0.15 27)' },
                { ticker: 'AMD',   zone: 'Hồi → về ~100',  note: 'FA yếu, sẽ chỉnh mạnh theo semis.',                                               action: 'Bán',       aBg: 'oklch(0.95 0.04 27)',  aColor: 'oklch(0.46 0.15 27)' },
                { ticker: 'TSLA',  zone: 'Đợi 440 để sort',note: 'Hồi về 440 → short. Musk distraction factor.',                                     action: 'Theo dõi', aBg: '#EFEEE9',              aColor: '#5F5E57'              },
                { ticker: 'ADS.DE',zone: 'Mua 155',        note: 'Adidas: kết quả tốt, thương hiệu ổn định, mục tiêu 167–170 rồi 200.',              action: 'Mua',       aBg: 'oklch(0.95 0.04 150)', aColor: 'oklch(0.42 0.1 150)' }
              ] },
            { title: 'Vàng & Bạc', signal: 'wait', sigLabel: 'Chờ mua',
              para: 'Vàng sớm muộn quay về vùng 3.900–4.000 — mức tích lũy hợp lý sau đà tăng từ 2023. Trong nước chênh ~20 triệu/lượng, chiều mua–bán chênh 4 triệu: chưa mua; đợi chênh về ~7 triệu. Nếu Black Monday, vàng và mọi tài sản đều bị bán để gom thanh khoản cho IPO SpaceX. Bạc về vùng 55 thì tính.',
              levels: 'Vàng: mua 3.900–4.000 · Bạc: ~55 · chênh mục tiêu ≤ 7tr' },
            { title: 'Tỷ giá & Vĩ mô Việt Nam', signal: 'warn', sigLabel: 'Áp lực',
              para: 'Mỹ ép cam kết minh bạch tỷ giá, điều tra Section 301 (thuế ~12%, hiệu lực tháng 7). Muốn hỗ trợ xuất khẩu phải phá giá VND ~4–5% — kéo theo lạm phát hàng nhập khẩu; lãi suất buộc duy trì cao. Fed ~67% khả năng tăng lãi tháng 7/9.',
              levels: 'USD/VND 26.100–26.400 · phá giá dự kiến 4–5% · Fed: 67% tăng lãi' }
          ]
        },
        {
          date: '2026-06-01', dateShort: '01/06', timeAgo: '2 tuần trước',
          tab: 'Tập 30 · Tuần 22', sourceType: 'member-video', typeLabel: 'Video hội viên · Tập 30',
          title: 'Chứng khoán, Dầu, Vàng, Bitcoin — Tuần 22 — PHẢI THEO DÕI',
          summary: 'Vĩ mô VN đổi chiều (minh bạch tỷ giá, Section 301) → nâng tiền mặt lên 50%. Giữ bank, SCS, phân bón, TCX. Bán nhóm rủi ro. BTC cắt lỗ 74.5k.',
          feedChips: [
            { label: 'Danh mục VN ⚠ 50% tiền', sig: 'warn' },
            { label: 'CK Việt ↓ 70% downtrend', sig: 'down' },
            { label: 'Vàng ◷ 3.900–4.000',      sig: 'wait' },
            { label: 'BTC ↓ 71.8k then chốt',   sig: 'down' }
          ],
          keyCalls: [
            { tag: 'Danh mục VN', value: '50% tiền mặt', signal: 'warn', note: 'Quyết đoán bán bớt — kể cả lỗ 5–7% — để chờ mua giá thấp.' },
            { tag: 'CK Việt',     value: '70% downtrend', signal: 'down', note: 'VN-Index không phản ánh thị trường (phụ thuộc nhóm Vin).' },
            { tag: 'Vàng',        value: '3.900–4.000',   signal: 'wait', note: 'Kiên trì đợi vùng tích lũy; bạc đợi 59–60.' },
            { tag: 'Bitcoin',     value: '71.8k then chốt', signal: 'down', note: 'Đã cắt lỗ ở 74.5k; gãy 71.8k là gãy nền "banana".' }
          ],
          sections: [
            { title: 'Chứng khoán Việt Nam', signal: 'warn', sigLabel: 'Thận trọng — nâng tiền mặt lên 50%',
              para: 'VN-Index không phản ánh thị trường (phụ thuộc nhóm Vin); ~70% cổ phiếu đang downtrend, khối ngoại bán ròng ~700 tỷ/phiên. Vĩ mô đổi chiều nên phòng thủ: giữ trụ bank, SCS, phân bón, TCX — bán nhóm còn lại để huy động tiền chờ giá thấp.',
              tickers: [
                { ticker: 'VCB',  zone: 'Giữ',          note: 'Bank nhà nước lớn nhất — an toàn, cầm dài hạn.',                                    action: 'Giữ',       aBg: 'oklch(0.95 0.02 235)', aColor: 'oklch(0.4 0.08 235)' },
                { ticker: 'BID',  zone: 'Giữ',          note: 'Bank nhà nước — cơ cấu danh mục cốt lõi.',                                           action: 'Giữ',       aBg: 'oklch(0.95 0.02 235)', aColor: 'oklch(0.4 0.08 235)' },
                { ticker: 'TCB',  zone: 'Giữ',          note: 'Bank tư nhân lớn — nền tảng tốt.',                                                    action: 'Giữ',       aBg: 'oklch(0.95 0.02 235)', aColor: 'oklch(0.4 0.08 235)' },
                { ticker: 'SCS',  zone: 'Giữ chặt',     note: 'Cầm chặt — logistics hàng không, cổ tức tốt.',                                        action: 'Giữ',       aBg: 'oklch(0.95 0.02 235)', aColor: 'oklch(0.4 0.08 235)' },
                { ticker: 'TCX',  zone: 'Mua dần',      note: 'Mua dần, mục tiêu vào VN30 T1/2027.',                                                 action: 'Mua',       aBg: 'oklch(0.95 0.04 150)', aColor: 'oklch(0.42 0.1 150)' },
                { ticker: 'NLG',  zone: 'Bán',          note: 'BĐS — bán trước khi thị trường xuống thêm.',                                          action: 'Bán',       aBg: 'oklch(0.95 0.04 27)',  aColor: 'oklch(0.46 0.15 27)' },
                { ticker: 'SSI',  zone: 'Bán',          note: 'CK — không cần giữ trong môi trường này.',                                             action: 'Bán',       aBg: 'oklch(0.95 0.04 27)',  aColor: 'oklch(0.46 0.15 27)' }
              ] },
            { title: 'Vĩ mô Việt Nam', signal: 'warn', sigLabel: 'Đổi chiều',
              bullets: [
                'Thỏa hiệp minh bạch tỷ giá NHNN – Bộ Tài chính Mỹ: công khai dữ liệu mua ngoại tệ theo chuẩn quốc tế từ 2027 — ít không gian can thiệp tỷ giá hơn.',
                'Thặng dư thương mại với Mỹ 178,2 tỷ USD (kỷ lục 2025) → bị điều tra Section 301, đưa vào danh sách theo dõi thao túng tiền tệ.',
                'Tiết kiệm dân Mỹ tụt còn 2,6%, Canada rơi vào suy thoái kỹ thuật, BoK diều hâu — hiệu ứng domino vĩ mô dội ngược về Việt Nam.'
              ] },
            { title: 'Vàng & Bạc', signal: 'wait', sigLabel: 'Chờ mua',
              para: 'Các ngân hàng trung ương phi-đô-la-hóa sẽ tranh thủ mua khi giá thấp nên vàng khá resilient, nhưng vẫn đợi vùng 3.900–4.000 xây nền mới mua tích lũy. Bạc: nhu cầu bị phá hủy, đợi 59–60.',
              levels: 'Vàng: 3.900–4.000 · Bạc: 59–60' },
            { title: 'Bitcoin & Crypto', signal: 'down', sigLabel: 'Giảm',
              para: 'Bị cắt lỗ ở 74.5k (mua 76k kỳ vọng 84k). Vùng 71.8k là then chốt — gãy là gãy nền "banana". Đạo luật Genius/Clarity đã trói crypto vào USD: chỉ còn là một mã trading như 500 mã trên S&P 500, ETF cũng đang rút. Mỗi lần Fed chair thay đổi đều chỉnh mạnh.',
              levels: 'Then chốt: 71.8k · ETH: chỉ để lướt sóng' }
          ]
        }
      ],
      sources: [
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '04/07/2026',
          title: 'Tập 36 — Vàng, Bitcoin, Chứng khoán tuần 27 · Tỉ lệ tiền và hàng?', meta: 'Video hội viên · transcript tự động' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '21/06/2026',
          title: 'Siêu chu kỳ chip đối đầu vĩ mô xấu, ETF Funds cơ cấu mạnh cuối tháng 6', meta: 'Video công khai · transcript tự động' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '20/06/2026',
          title: 'Tập 33 — Vàng, Bitcoin, Chứng khoán tuần 25', meta: 'Video hội viên · transcript tự động' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '18/06/2026',
          title: 'Chủ tịch Fed lật kèo từ bỏ định hướng lãi suất — vàng, BTC, chứng khoán, tỷ giá', meta: 'Video công khai · transcript tự động' },
        { icon: '✎', iconBg: 'oklch(0.95 0.02 235)', iconColor: 'oklch(0.42 0.08 235)', date: '16/06/2026',
          title: '16/6 — TĂNG CỔ PHIẾU LÊN 70% — Chợ Huyện Sắp Có Sức Sống', meta: 'Post cộng đồng · chỉ dành cho hội viên' },
        { icon: '✎', iconBg: 'oklch(0.95 0.02 235)', iconColor: 'oklch(0.42 0.08 235)', date: '15/06/2026',
          title: '15/6 · 5:15 sáng — Iran–Mỹ Ký 19/6 · Vàng Tăng · Dầu Giảm', meta: 'Post cộng đồng · chỉ dành cho hội viên' },
        { icon: '✎', iconBg: 'oklch(0.95 0.02 235)', iconColor: 'oklch(0.42 0.08 235)', date: '12/06/2026',
          title: '12/6 — Chuyện chứng thế giới hôm qua, Vàng, BTC', meta: 'Post cộng đồng · chỉ dành cho hội viên' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '08/06/2026',
          title: 'Tập 31 — Chứng khoán, Dầu, Vàng, Bitcoin · Tuần 23 — QUAN TRỌNG!', meta: 'Video hội viên · transcript tự động' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '01/06/2026',
          title: 'Tập 30 — Chứng khoán, Dầu, Vàng, Bitcoin · Tuần 22 — PHẢI THEO DÕI', meta: 'Video hội viên · transcript tự động' }
      ]
    },

    'thuan-capital': {
      initials: 'TC',
      name: 'Thuận Capital',
      avatarSrc: '/avatars/thuan-capital.png',
      bio: 'Tâm lý đầu tư và quản lý rủi ro trong thị trường crypto; hơn 10 năm kinh nghiệm. Focus: Bitcoin & Crypto.',
      sourceLabel: 'YouTube · Video công khai',
      sourceChips: ['▶ Video công khai', 'Tần suất: hàng ngày'],
      gauge: {
        title: 'Phạm vi nhận định',
        badge: 'Crypto', badgeBg: 'oklch(0.95 0.02 235)', badgeColor: 'oklch(0.42 0.08 235)',
        bar1: 100, bar2: 0, label1: 'Bitcoin & Crypto 100%', label2: ''
      },
      updates: [
        {
          date: '2026-06-12', dateShort: '12/06', timeAgo: '4 ngày trước',
          tab: 'Shorts · 12/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'FOMO Không Chỉ Xuất Hiện Trong Bull Market',
          summary: 'Thuận mua thêm BTC khi giá test dưới 60.000 đô; chiến lược DCA tiếp tục — không cố bắt đáy. FOMO xuất hiện cả khi thị trường giảm.',
          feedChips: [
            { label: 'BTC ◷ DCA dưới $60k',    sig: 'wait' },
            { label: 'Chu kỳ ◷ T11/2026',       sig: 'wait' },
            { label: 'FOMO ⚠ cẩn thận tâm lý', sig: 'warn' }
          ],
          keyCalls: [
            { tag: 'Bitcoin',  value: 'Mua dưới $60k', signal: 'wait', note: 'Thuận mua thêm số lượng lớn hơn bình thường khi BTC test dưới 60.000 đô; DCA tiếp tục.' },
            { tag: 'Tâm lý',   value: 'FOMO ≠ bull',   signal: 'warn', note: 'FOMO xuất hiện cả khi thị trường giảm — sợ bỏ lỡ đáy. Phân biệt cảm xúc và kỷ luật DCA.' }
          ],
          sections: [
            { title: 'Bitcoin & Crypto', signal: 'wait', sigLabel: 'Tích lũy — DCA tiếp tục',
              para: 'Thuận đã chốt lời năm ngoái (khi BTC quanh 99.000–100.000 đô), rồi bắt đầu trung bình giá trở lại từ tháng 2. Khi giá test dưới 60.000 đô cuối tuần qua, Thuận mua thêm với số lượng lớn hơn bình thường, sử dụng tiền mặt dự trữ. Quan điểm: không thể biết chắc đỉnh hay đáy — chỉ có thể bán gần đỉnh và mua gần đáy bằng chiến lược trung bình giá.',
              bullets: [
                'Không cố bắt đáy chính xác — phân bổ mua tại nhiều mức giá khác nhau để hạ dần giá trung bình.',
                'Nếu giá tiếp tục giảm, tiếp tục DCA ở mức thấp hơn.',
                'Đầu tư dài hạn: lòng tin vào đỉnh mới trong tương lai vẫn không thay đổi, dù tâm lý thị trường hiện rất bi quan.',
                'FOMO trong bear market: cẩn thận tâm lý mua vì sợ bỏ lỡ đáy — cần quản lý kỷ luật.'
              ],
              tickers: [
                { ticker: 'BTC', zone: 'Dưới 60.000', note: 'Vùng hấp dẫn để tích lũy; mua thêm nhiều hơn bình thường khi giá test vùng này.', action: 'Chờ mua', aBg: 'oklch(0.95 0.02 235)', aColor: 'oklch(0.4 0.08 235)' }
              ] }
          ]
        },
        {
          date: '2026-06-11', dateShort: '11/06', timeAgo: '5 ngày trước',
          tab: 'Shorts · 11/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: '15 Năm Bitcoin Và Chu Kỳ Chưa Từng Biến Mất',
          summary: 'BTC −50% từ đỉnh 126.000 đô. Lần này nguyên nhân vĩ mô, không có chuỗi phá sản. Chu kỳ 4 năm vẫn còn khả năng lặp lại — phục hồi dự kiến T11/2026.',
          feedChips: [
            { label: 'BTC ↓ −50% từ $126k',    sig: 'down' },
            { label: 'Chu kỳ ◷ T11/2026',       sig: 'wait' },
            { label: 'CK Mỹ ↑ lập đỉnh mới',   sig: 'up'   }
          ],
          keyCalls: [
            { tag: 'Bitcoin',     value: '−50% từ $126k',   signal: 'down', note: 'Giảm từ đỉnh 126.000 về ~63.000; lần này nguyên nhân vĩ mô, không có chuỗi phá sản.' },
            { tag: 'Chu kỳ 4 năm', value: 'Chờ T11/2026', signal: 'wait', note: 'Khả năng chu kỳ 4 năm lặp lại — phục hồi có thể bắt đầu từ tháng 11/2026.' },
            { tag: 'CK Mỹ',       value: 'Lập đỉnh mới',   signal: 'up',   note: 'Chứng khoán Mỹ tiếp tục lập đỉnh trong tuần — divergence rõ rệt với crypto.' }
          ],
          sections: [
            { title: 'Bitcoin & Crypto', signal: 'warn', sigLabel: 'Thận trọng — chờ chu kỳ',
              para: 'Đợt giảm lần này khác 2018/2022: không có chuỗi phá sản sàn (FTX, Luna…), thợ đào chuyển sang AI thay vì phá sản, không có công ty lớn nào sụp đổ. Nguyên nhân xuất phát từ vĩ mô và địa chính trị.',
              bullets: [
                'BTC đã giảm ~50% từ đỉnh 126.000 đô — tương đương các đợt điều chỉnh lớn trước (2018: −84%, 2022: −77%).',
                'Chu kỳ 4 năm: đây là lần thứ ba Thuận Capital nói về chu kỳ này (2018, 2022, và nay). Lần nào nghe cũng "ảo" nhưng đã lặp lại.',
                'Kịch bản chu kỳ 4 năm: kết thúc đáy quanh T11/2026, rồi bắt đầu chu kỳ tăng mới.',
                'Thợ đào chuyển sang hỗ trợ AI — thu nhập thêm, không phá sản như 2022.'
              ],
              levels: 'BTC: đỉnh 126.000 · hiện tại ~63.000 (−50%) · phục hồi dự kiến: T11/2026' },
            { title: 'Chứng khoán Mỹ', signal: 'up', sigLabel: 'Tăng — divergence với crypto',
              para: 'Chứng khoán Mỹ tiếp tục lập đỉnh mới trong tuần, dù có điều chỉnh nhẹ — divergence rõ rệt so với crypto. Đây là yếu tố khiến tâm lý nhà đầu tư crypto tệ hơn bình thường.' }
          ]
        },
        {
          date: '2026-06-06', dateShort: '06/06', timeAgo: '10 ngày trước',
          tab: 'Shorts · 06/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'Mỗi Khi Ta Có Suy Nghĩ Chắc Chắn Đây Là "Đáy" Rồi',
          summary: 'Tín hiệu giống 2018/2022; đáy có thể sâu hơn kỳ vọng. ETF, Saylor, công ty lưu trữ BTC đang bán. Bài học: mọi người nghĩ 20k là đáy nhưng BTC còn về 15k.',
          feedChips: [
            { label: 'BTC ⚠ đáy chưa chắc',    sig: 'warn' },
            { label: 'ETF/Tổ chức ↓ đang bán', sig: 'down' },
            { label: 'Tâm lý ⚠ bài học 2022',  sig: 'warn' }
          ],
          keyCalls: [
            { tag: 'Bitcoin',       value: 'Đáy chưa chắc', signal: 'warn', note: 'Tín hiệu giống 2018/2022; đáy có thể sâu hơn kỳ vọng — cần chuẩn bị tâm lý.' },
            { tag: 'ETF / Tổ chức', value: 'Đang bán',      signal: 'down', note: 'ETF, Michael Saylor, công ty lưu trữ Bitcoin đồng loạt bán — áp lực nguồn cung cao.' },
            { tag: 'Bài học 2022',  value: '$20k → $15k',   signal: 'warn', note: 'Mọi người nghĩ 20.000 là đáy, nhưng BTC giảm thêm 25% về 15.000 đô.' }
          ],
          sections: [
            { title: 'Bitcoin & Crypto', signal: 'warn', sigLabel: 'Thận trọng — chưa xác định đáy',
              para: 'Nhìn đâu cũng thấy tín hiệu tiêu cực: công ty crypto bán ra, IPO hoãn vì tình hình quá xấu, ETF bán mạnh, ngay cả Michael Saylor ("never sell") cũng bán. Các công ty đào Bitcoin không chuyển sang AI được thì buộc phải bán để trả chi phí vận hành.',
              bullets: [
                'Cẩn thận tâm lý "chắc là đáy rồi": năm 2022, BTC từ 20.000 giảm thêm 25% về 15.000 đô — ai mua 20.000 tưởng đáy lỗ thêm 25.000 trên mỗi 100.000 đầu tư.',
                'Tín hiệu tiêu cực hiện tại giống hệt 2018 và 2022 về mặt tâm lý — không có gì bất thường nếu nhìn dài hạn.',
                'Điểm khác biệt tích cực so với 2022: không có chuỗi phá sản, thợ đào chuyển hướng thay vì sụp đổ.',
                'Đầu tư dài hạn: nếu tin tưởng giá sẽ tăng dài hạn, giảm thêm không sao — chỉ lỗ khi bán.'
              ] }
          ]
        }
      ],
      sources: [
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '12/06/2026',
          title: 'FOMO Không Chỉ Xuất Hiện Trong Bull Market', meta: 'Video công khai · ThuanCapital Shorts' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '11/06/2026',
          title: '15 Năm Bitcoin Và Chu Kỳ Chưa Từng Biến Mất', meta: 'Video công khai · ThuanCapital Shorts' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '06/06/2026',
          title: 'Mỗi Khi Ta Có Suy Nghĩ Chắc Chắn Đây Là "Đáy" Rồi', meta: 'Video công khai · ThuanCapital Shorts' }
      ]
    },

    'azfin': {
      initials: 'AZ',
      name: 'AzFin',
      avatarSrc: '/avatars/azfin.png',
      bio: 'Đầu tư giá trị dài hạn — tích sản cổ phiếu VN. Phân tích cơ bản, quản lý danh mục kỷ luật, không dùng margin. Cộng đồng 4.000+ nhà đầu tư.',
      sourceLabel: 'YouTube · Video công khai',
      sourceChips: ['▶ Video công khai', 'Tần suất: hàng tuần'],
      gauge: {
        title: 'Quan điểm thị trường VN',
        badge: 'Cơ hội tốt', badgeBg: 'oklch(0.95 0.04 150)', badgeColor: 'oklch(0.42 0.1 150)',
        bar1: 35, bar2: 65, label1: 'Phòng thủ 35%', label2: 'Tấn công 65%'
      },
      updates: [
        {
          date: '2026-06-17', dateShort: '17/06', timeAgo: 'Hôm qua',
          tab: 'Video · 17/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'Ba Nhóm Ngành Triển Vọng Để Giữ 5 Năm',
          summary: 'Ba nhóm ngành ưu tiên giữ 5 năm: Ngân hàng (tăng trưởng 15–20%/năm, định giá rẻ, lợi thế cạnh tranh mạnh), Vật liệu xây dựng (hưởng lợi đầu tư công) và Bán lẻ (bùng nổ tiêu dùng theo GDP). Rủi ro chính từ vĩ mô thế giới & giá cổ phiếu — khắc phục bằng mua khi định giá rất rẻ và bảo vệ thành quả khi đạt mục tiêu.',
          feedChips: [
            { label: 'Ngân hàng ↑ ưu tiên', sig: 'up'   },
            { label: 'VLXD ↑ đầu tư công',   sig: 'up'   },
            { label: 'Bán lẻ ↑ tiêu dùng',   sig: 'up'   },
            { label: 'Vĩ mô TG ⚠ rủi ro',   sig: 'warn' }
          ],
          keyCalls: [
            { tag: 'Ngân hàng', value: 'Ưu tiên số 1', signal: 'up', note: 'Tăng trưởng tự nhiên 15–20%/năm theo tín dụng; PE/PB thấp hơn trung bình thị trường trong khi hiệu quả cao hơn; lợi thế cạnh tranh mạnh.' },
            { tag: 'Vật liệu xây dựng', value: 'Hưởng lợi đầu tư công', signal: 'up', note: 'Đầu vào ít biến động, đầu ra hưởng nhu cầu cao từ đầu tư công. Nhà thầu thi công trực tiếp kém hấp dẫn hơn do biến động NVL & cạnh tranh.' },
            { tag: 'Bán lẻ', value: 'Bùng nổ tiêu dùng', signal: 'up', note: 'Tăng theo tốc độ tăng GDP; VN đang bước vào giai đoạn bùng nổ tiêu dùng → ngành bán lẻ hưởng lợi lớn.' },
            { tag: 'Chiến lược', value: 'Mua rẻ · chốt mục tiêu', signal: 'wait', note: 'Rủi ro lớn nhất nằm ở giá cổ phiếu/thị trường. Mua khi định giá rất thấp và bảo vệ thành quả khi đạt mục tiêu — không nhất thiết nắm đủ 5 năm.' }
          ],
          sections: [
            { title: 'Ba nhóm ngành triển vọng 5 năm', signal: 'up', sigLabel: 'Tích cực — ưu tiên tích lũy',
              para: 'Nếu chọn ba nhóm ngành để giữ 5 năm: ngân hàng, vật liệu xây dựng và bán lẻ. Đây là các ngành có động lực tăng trưởng nội tại rõ ràng và hưởng lợi từ xu hướng vĩ mô dài hạn của Việt Nam.',
              bullets: ['Ngân hàng: tăng 15–20%/năm, định giá rẻ (PE/PB thấp), lợi thế cạnh tranh mạnh.', 'Vật liệu xây dựng: hưởng lợi đầu tư công nhờ đầu vào ổn, đầu ra nhu cầu cao.', 'Bán lẻ: tăng theo GDP, đón giai đoạn bùng nổ tiêu dùng.'] },
            { title: 'Rủi ro & chiến lược', signal: 'warn', sigLabel: 'Thận trọng — rủi ro vĩ mô & thị trường',
              para: 'Vĩ mô thế giới biến động (xung đột, mâu thuẫn chính trị, lạm phát cao) có thể làm kinh tế tăng trưởng chậm và gây áp lực tỷ giá, khiến KQKD các ngành biến động. Nhưng rủi ro lớn nhất với 3 nhóm này nằm ở giá cổ phiếu/thị trường hơn là nền tảng doanh nghiệp.',
              bullets: ['Mua khi định giá rất rẻ để hạ rủi ro.', 'Bảo vệ thành quả khi đạt mục tiêu — không cứng nhắc nắm đủ 5 năm.'] }
          ]
        },
        {
          date: '2026-06-14', dateShort: '14/06', timeAgo: '2 ngày trước',
          tab: 'Video · 14/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'Nhà Đầu Tư Nước Ngoài Bán Ròng Mạnh: Rủi Ro Hay Cơ Hội?',
          summary: 'Khối ngoại bán ròng kỷ lục 26 năm → cơ hội tích lũy, không phải rủi ro. Định giá VN percentile 10–15% thấp nhất lịch sử. Bank tư nhân lớn rất rẻ, cơ hội >> rủi ro. Không dùng margin.',
          feedChips: [
            { label: 'CK Việt ↑ cơ hội tốt',   sig: 'up'   },
            { label: 'Bank ↑ rất rẻ',            sig: 'up'   },
            { label: 'Tích lũy ◷ dần dần',       sig: 'wait' },
            { label: 'CK Mỹ ↓ bong bóng 2000',   sig: 'down' }
          ],
          keyCalls: [
            { tag: 'Khối Ngoại',       value: 'Cơ hội, không rủi ro', signal: 'up',   note: 'Bán ròng kỷ lục 26 năm → giá rẻ. Lý do: lãi TP Mỹ/Anh hấp dẫn, VN sắp lên EM, chủ nghĩa dân tộc KT toàn cầu.' },
            { tag: 'Định giá VN',      value: 'Percentile 10–15%',    signal: 'up',   note: 'Chỉ ~10/100 phiên lịch sử có giá thấp hơn hiện tại (trừ nhóm Vin). Cơ hội tích lũy tốt rõ rệt.' },
            { tag: 'Bank tư nhân lớn', value: 'Rất rẻ — ưu tiên',    signal: 'up',   note: 'ACB, MB, VP, HD: vững mạnh, định giá rất rẻ. Cơ hội >> rủi ro.' },
            { tag: 'Thị trường Mỹ',    value: 'Gần bong bóng 2000',   signal: 'down', note: 'CAPE gần dotcom. Buffett indicator ~300%. Buffett giữ ~$400 tỷ tiền lỏng — kỷ lục.' }
          ],
          sections: [
            { title: 'Vì sao khối ngoại bán ròng kỷ lục?', signal: 'wait', sigLabel: 'Cơ hội — không phải dấu hiệu xấu cơ bản',
              para: 'Khối ngoại bán ròng mạnh nhất 26 năm lịch sử TTCK VN. Tuy nhiên nguyên nhân hoàn toàn khác đại khủng hoảng 2007. Không phải vì kinh tế VN xấu — đây là cơ hội tích lũy cho nhà đầu tư giá trị.',
              bullets: [
                'TP Chính phủ Mỹ 4,49%, Anh 4,83% — tài sản cực an toàn lại lợi suất cao hơn CK VN (sau tỷ giá và chi phí quỹ).',
                'VN sắp lên Emerging Market tháng 9/2026 — frontier market funds phải bán VN (~40% danh mục họ). Bán kỹ thuật, không phải bán vì VN xấu.',
                'Chủ nghĩa dân tộc kinh tế toàn cầu tăng → quỹ nước ngoài co về sân nhà.',
                'Nhà đầu tư chiến lược dài hạn vẫn vào — mua khối lớn theo kiểu đầu tư chiến lược.'
              ] },
            { title: 'Định giá thị trường VN — Cơ hội tốt', signal: 'up', sigLabel: 'Tích cực — percentile 10–15% thấp nhất lịch sử',
              para: 'Loại trừ nhóm Vin, định giá đa số cổ phiếu VN đang ở vùng 10–15% thấp nhất lịch sử. Chưa phải "rất lớn" nhưng là cơ hội tốt rõ rệt.',
              bullets: [
                'Bank tư nhân lớn: định giá rất rẻ, kết quả kinh doanh vững chắc. Cơ hội >> rủi ro nhiều.',
                'BĐS doanh nghiệp: cơ hội >> rủi ro (tránh nhóm pháp lý phức tạp).',
                'Ngành CK: một số rẻ, một số trung bình — kén chọn. Có thể đảo chiều bất kỳ lúc sau 8 tháng điều chỉnh.',
                'Không dùng margin trong bất kỳ trường hợp nào — nguyên tắc cốt lõi đầu tư giá trị.'
              ] },
            { title: 'Thị trường Mỹ — Cảnh báo bong bóng', signal: 'down', sigLabel: 'Rủi ro — gần mức bong bóng dotcom 2000',
              para: 'Trong khi VN rẻ, thị trường Mỹ có dấu hiệu quá nóng. Buffett giữ ~$400 tỷ tiền lỏng kỷ lục — ông không tìm được nơi đầu tư hấp dẫn ở Mỹ.',
              bullets: [
                'CAPE (Shiller P/E) gần mức bong bóng dotcom.com năm 2000.',
                'Buffett Indicator (vốn hóa/GDP) ~300% — >100% đã là rủi ro.',
                'Không có nghĩa crash ngay — nhưng kỳ vọng lợi nhuận dài hạn từ CK Mỹ sẽ thấp.'
              ] },
            { title: 'Hành động — Tích lũy dần, nghiêng tấn công', signal: 'up', sigLabel: 'Tích lũy — lúc này tấn công nhiều hơn thủ',
              para: 'Lúc này phù hợp nghiêng danh mục về phía tấn công (cổ phiếu tăng trưởng) nhiều hơn phòng thủ — vì giá đã giảm sâu. Phải có cả công lẫn thủ, tỷ lệ phụ thuộc cái nào rẻ hơn. Lúc này nhóm tăng trưởng đang rẻ hơn.',
              bullets: [
                'Tích lũy dần — không all-in một lần. Tỷ lệ cổ phiếu/tổng tài sản phụ thuộc cơ cấu và dòng tiền hàng tháng.',
                'HDG: định giá rất rẻ (dù vướng pháp lý HDG-EVN chưa xong trong nhiệm kỳ mới).',
                'ACV: tài sản rất giá trị, lợi nhuận chưa tương xứng — có giá trị đấy.'
              ] }
          ]
        },
        {
          date: '2026-06-11', dateShort: '11/06', timeAgo: '5 ngày trước',
          tab: 'Podcast · 11/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'Hành Động Gì Khi Thị Trường Chán Nản? — Tích Sản Cổ Phiếu #12',
          summary: 'Thị trường 20% thời gian tăng, 50% sideway, 30% giảm — đây là giai đoạn bình thường. Tích lũy cổ phiếu tốt, giá rẻ, ăn cổ tức và tái đầu tư. Không bao giờ all-in, duy trì kỷ luật % tỷ trọng.',
          feedChips: [
            { label: 'CK Việt ↑ tích lũy dần', sig: 'up'   },
            { label: 'Phân bổ ◷ không all-in',  sig: 'wait' },
            { label: 'Margin ✗ không bao giờ',  sig: 'down' }
          ],
          keyCalls: [
            { tag: 'Thị trường',    value: '20/50/30 — bình thường',  signal: 'wait', note: '20% uptrend, 50% sideway, 30% downtrend. 21/26 năm VN khó. Đây là giai đoạn bình thường.' },
            { tag: 'Hành động',     value: 'Tích lũy, ăn cổ tức',     signal: 'up',   note: 'Mua cổ phiếu tốt khi rẻ, thu cổ tức, tái đầu tư liên tục. Không bán khi chán — chỉ lỗ khi bán.' },
            { tag: 'Nguyên tắc',    value: 'Không bao giờ all-in',    signal: 'up',   note: 'Duy trì kỷ luật % tỷ trọng. Khi giá cao chuyển sang TP/tiết kiệm. Không dùng margin.' },
            { tag: 'Cộng đồng',     value: '4.000+ thành viên',       signal: 'up',   note: 'Thực hành đầu tư giá trị hàng ngày. Kết quả từ kỷ luật lặp lại.' }
          ],
          sections: [
            { title: 'Thị trường chán nản là bình thường', signal: 'wait', sigLabel: 'Bình thường — không phải tín hiệu đặc biệt',
              para: '21/26 năm lịch sử TTCK VN là năm khó khăn. Phân bổ thời gian: ~20% uptrend, ~50% sideway, ~30% downtrend. Giai đoạn 2026 là rủi ro + cơ hội.',
              bullets: [
                'Khách mời bắt đầu 2007 — tài khoản bị đốt 2014 do dùng margin 3:7 với PVD trong sự kiện DK981.',
                'Bài học: không dùng margin. Luôn có thesis đầu tư rõ ràng → chiến lược → chiến thuật.',
                'Tiếp tục học liên tục — thị trường thay đổi, nhà đầu tư cũng cần cập nhật.'
              ] },
            { title: 'Nguyên tắc tích sản cổ phiếu', signal: 'up', sigLabel: 'Tích cực — tích lũy trong downtrend',
              para: 'Mua cổ phiếu chất lượng khi rẻ → thu cổ tức → tái đầu tư → chờ uptrend bảo vệ lợi nhuận. Không cần dự đoán đáy chính xác.',
              bullets: [
                'Giữ tỷ lệ % cổ phiếu/tổng tài sản kỷ luật — không bao giờ all-in 100%.',
                'Khi giá cổ phiếu cao: chuyển bớt sang TP hoặc gửi tiết kiệm. Khi rẻ như hiện tại: dùng tiền đó mua thêm.',
                'Ăn cổ tức, tái đầu tư liên tục — nguồn sinh lời bền vững nhất dài hạn.'
              ] },
            { title: 'Giai đoạn 2026 — Tích lũy dần', signal: 'up', sigLabel: 'Tích cực — nhiều cổ phiếu tốt đang rẻ',
              para: 'Nhiều cổ phiếu tốt đang rất rẻ dù nền tảng doanh nghiệp vẫn vững. Cơ hội tốt rõ rệt để tích lũy. Chờ uptrend để bảo vệ lợi nhuận — không vội bán trong downtrend.',
              bullets: [
                'Cộng đồng 4.000+ thành viên thực hành kỷ luật đầu tư giá trị hàng ngày.',
                'Nguồn thu nhập đều đặn hàng tháng → dòng tiền liên tục mua thêm → tâm lý thoải mái.',
                'Không cần biết đáy ở đâu — cứ mua dần khi rẻ, tỷ lệ tốt dần theo thời gian.'
              ] }
          ]
        }
      ],
      sources: [
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '17/06/2026',
          title: '03 Ngành triển vọng trong tương lai?', meta: 'Video công khai · AzFin Vietnam' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '14/06/2026',
          title: 'Nhà đầu tư nước ngoài bán ròng mạnh: Rủi ro hay cơ hội | Lăng kính đầu tư giá trị', meta: 'Video công khai · AzFin Vietnam' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '11/06/2026',
          title: '#12: Hành động gì khi thị trường chán nản?', meta: 'Video công khai · Tích sản cổ phiếu AzFin' }
      ]
    },

    'ck-5-phut': {
      initials: 'C5',
      name: 'Chứng khoán 5 phút',
      avatarSrc: '',
      bio: 'Bản tin nhanh về thị trường chứng khoán Việt Nam và vĩ mô: điểm tin, đánh giá tác động và chiến lược giao dịch ngắn hạn.',
      sourceLabel: 'YouTube · Video công khai',
      sourceChips: ['▶ Video công khai', 'Tần suất: hàng ngày'],
      gauge: {
        title: 'Trạng thái thị trường tuần',
        badge: 'Tích cực', badgeBg: 'oklch(0.95 0.04 150)', badgeColor: 'oklch(0.42 0.1 150)',
        bar1: 60, bar2: 40, label1: 'Giữ tỷ trọng 60%', label2: 'Chờ/ngắn hạn 40%'
      },
      updates: [
        {
          date: '2026-06-17', dateShort: '17/06', timeAgo: 'Hôm qua',
          tab: 'Video · 17/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'Fed Họp & NHNN Dự Thảo Nới Trần Vốn — Tác Động Thị Trường?',
          summary: 'Dự báo Fed giữ nguyên lãi suất (chú ý phát biểu thống đốc mới). NHNN dự thảo nới trần vốn ngắn hạn cho vay trung–dài hạn lên 40% — ngân hàng có thêm dư địa cho vay, tích cực. Cả hai tin khó tạo cú hích mạnh ngắn hạn. Tuần tích cực nhưng chưa có xu hướng mới — giữ tỷ trọng, hạn chế đảo hàng.',
          feedChips: [
            { label: 'Fed ◷ giữ nguyên LS',       sig: 'wait' },
            { label: 'NHNN ↑ nới trần 40%',        sig: 'up'   },
            { label: 'Thị trường ↑ tuần tích cực', sig: 'up'   },
            { label: 'Đảo hàng ⚠ hạn chế',        sig: 'warn' }
          ],
          keyCalls: [
            { tag: 'Fed', value: 'Giữ nguyên lãi suất', signal: 'wait', note: 'Dự báo gần như chắc chắn Fed giữ nguyên. Chú ý phát biểu lần đầu của thống đốc mới — có thể mở đường điều chỉnh lãi suất cuối năm/sang năm. Thị trường khó phản ứng dữ dội.' },
            { tag: 'NHNN', value: 'Dự thảo nới trần 40%', signal: 'up', note: 'Nới trần vốn ngắn hạn cho vay trung–dài hạn lên 40% (tiếp nối thông tư 08). Ngân hàng có thêm tiền cho vay; ngắn hạn chưa đua tăng lãi suất huy động → tích cực.' },
            { tag: 'Thị trường', value: 'Tuần tích cực', signal: 'up', note: 'Tuần "vãn hồi KPI" — nhưng chưa sinh xu hướng mới. Mỗi phiên chỉ 1–2 mã tăng, không tăng cả ngành.' },
            { tag: 'Chiến lược', value: 'Giữ tỷ trọng', signal: 'wait', note: 'Giữ như tháng 5. Cổ phiếu cơ bản dài hạn: giữ, không bán (áp lực bán không nhiều). Thanh khoản yếu → hạn chế đảo hàng.' }
          ],
          sections: [
            { title: 'Vĩ mô — Fed & NHNN', signal: 'wait', sigLabel: 'Chưa tác động mạnh ngắn hạn',
              para: 'Hai tin được quan tâm: cuộc họp Fed (dự báo giữ nguyên lãi suất, đáng chú ý là phát biểu của thống đốc mới) và dự thảo NHNN nới trần vốn ngắn hạn cho vay trung–dài hạn lên 40%. Dự thảo thể hiện ưu tiên mục tiêu tăng trưởng hai con số, chấp nhận thêm chút rủi ro hệ thống. Tuy vậy cả hai khó tạo cú hích mạnh ngắn hạn — đừng kỳ vọng nhóm ngân hàng bật tăng ngay.',
              bullets: ['Fed: gần như chắc giữ nguyên; phát biểu thống đốc mới có thể "mở đường" điều chỉnh chính sách.', 'NHNN: nới trần 40% → ngân hàng nhiều dư địa cho vay, chưa đua tăng lãi suất huy động.', 'Tác động ngắn hạn được đánh giá là không lớn.'] },
            { title: 'Chiến lược giao dịch', signal: 'wait', sigLabel: 'Giữ tỷ trọng — hạn chế đảo hàng',
              para: 'Tuần này tích cực nhưng thị trường chưa củng cố xu hướng. Giữ tỷ trọng như tháng 5; cổ phiếu cơ bản dài hạn mới mua một phần thì giữ nguyên. Vị thế ngắn hạn chỉ mua vừa phải. Thanh khoản yếu khiến đảo hàng kém hiệu quả và tốn phí — nên quản trị theo setup ban đầu thay vì bán con này mua con kia.',
              tickers: [
                { ticker: 'MSB', action: 'Giữ', aBg: 'oklch(0.95 0.02 235)', aColor: 'oklch(0.4 0.08 235)', zone: '—', note: 'Càng giữ càng tăng, suýt vượt đỉnh — ví dụ cho việc kiên nhẫn theo setup.' },
                { ticker: 'FRT', action: 'Theo dõi', aBg: '#EFEEE9', aColor: '#5F5E57', zone: '—', note: 'Nằm trong số ít mã tăng theo phiên.' },
                { ticker: 'VSC', action: 'Theo dõi', aBg: '#EFEEE9', aColor: '#5F5E57', zone: '—', note: 'Mã tăng phiên gần nhất — không tăng cả ngành.' }
              ] }
          ]
        }
      ],
      sources: [
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '17/06/2026',
          title: '2 tin Fed họp và NHNN ra dự thảo nới trần vốn cho vay tác động đến thị trường như thế nào?', meta: 'Video công khai · Chứng khoán 5 phút' }
      ]
    }

  } // end experts
}; // end HDT_DATA
