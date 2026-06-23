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

  lastUpdated: '22/06/2026 · Hôm nay',

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
      date: '2026-06-21', dateShort: '21/06',
      source: 'VTV Index', sourceType: 'Video tin tức',
      title: 'Chuẩn bị kịch bản gì nếu diễn biến thị trường không như kỳ vọng?',
      impact: 'warn',
      impactLabel: 'Thận trọng — nhắc quản trị rủi ro',
      summary: 'Bản tin VTV Index bàn về việc nhà đầu tư nên chuẩn bị kịch bản phòng thủ khi thị trường có thể không diễn biến như kỳ vọng. Thiên về nhắc nhở quản trị rủi ro hơn là tín hiệu xấu cụ thể.',
      points: [
        'Nhấn mạnh tâm thế phòng thủ, có kịch bản dự phòng cho vị thế.',
        'Không phải tin tiêu cực cụ thể — mang tính cảnh báo tâm lý/quản trị.',
        '(Đánh giá theo tiêu đề bản tin; chưa có transcript chi tiết.)'
      ]
    },
    {
      date: '2026-06-19', dateShort: '19/06',
      source: 'Tài chính & Kinh doanh', sourceType: 'Video tin tức',
      title: 'SBV nới trần vốn ngắn hạn cho vay trung–dài hạn từ 30% lên 40%',
      impact: 'up',
      impactLabel: 'Tích cực — nới điều kiện cho vay (lưu ý rủi ro hệ thống)',
      summary: 'NHNN đề xuất nâng tỷ lệ tối đa nguồn vốn ngắn hạn được dùng để cho vay trung–dài hạn từ 30% lên 40%, đảo chiều lộ trình siết kéo dài nhiều năm. Ngân hàng có thêm dư địa cho vay.',
      points: [
        'Đảo chiều xu hướng siết → tín hiệu nới lỏng, hỗ trợ tăng trưởng tín dụng.',
        'Tích cực cho nhóm ngân hàng và thanh khoản nền kinh tế ngắn–trung hạn.',
        'Đánh đổi: tăng rủi ro thanh khoản/kỳ hạn của hệ thống về dài hạn.'
      ]
    },
    {
      date: '2026-06-19', dateShort: '19/06',
      source: 'Tài chính & Kinh doanh', sourceType: 'Video tin tức',
      title: 'Dự thảo sửa đổi Luật Đất đai 2026 — phân tích tác động',
      impact: 'warn',
      impactLabel: 'Tác động lớn BĐS — vừa cơ hội vừa rủi ro',
      summary: 'Dự thảo sửa đổi Luật Đất đai 2026 đưa ra nhiều điều chỉnh mang tính hệ thống (thẩm quyền, bảng giá đất, quy trình thu hồi đất) nhằm tháo gỡ điểm nghẽn, nhưng sẽ tái định hình chi phí phát triển dự án và quyền lợi người mua nhà.',
      points: [
        'Thay đổi bảng giá đất & quy trình thu hồi → ảnh hưởng trực tiếp chi phí dự án BĐS.',
        'Vừa tạo cơ hội (gỡ điểm nghẽn) vừa tạo rủi ro chính sách cho doanh nghiệp BĐS.',
        'Cần theo dõi bản chính thức trước khi định lượng tác động.'
      ]
    },
    {
      date: '2026-06-19', dateShort: '19/06',
      source: 'VTV Index', sourceType: 'Video tin tức',
      title: 'Sức mạnh của dòng tiền trong nước',
      impact: 'up',
      impactLabel: 'Tích cực — dòng tiền nội hỗ trợ thị trường',
      summary: 'Bản tin VTV Index về vai trò của dòng tiền nội địa trong việc nâng đỡ thị trường chứng khoán Việt Nam.',
      points: [
        'Dòng tiền trong nước được xem là trụ đỡ khi khối ngoại bán ròng.',
        'Tín hiệu tích cực cho thanh khoản và sức bền của thị trường.',
        '(Đánh giá theo tiêu đề/chủ đề; chưa có transcript chi tiết.)'
      ]
    },
    {
      date: '2026-06-18', dateShort: '18/06',
      source: 'Tài chính & Kinh doanh', sourceType: 'Video tin tức',
      title: 'Fed giữ lãi suất, tín hiệu diều hâu dưới tân Chủ tịch Kevin Warsh',
      impact: 'down',
      impactLabel: 'Tiêu cực — tín hiệu Fed diều hâu, áp lực lãi suất',
      summary: 'Ngày 17/6 Fed giữ nguyên lãi suất 3,5–3,75% trong cuộc họp đầu tiên dưới thời tân Chủ tịch Kevin Warsh; giọng điệu được đánh giá nghiêng diều hâu, tạo áp lực lãi suất lên thị trường.',
      points: [
        'Giữ nguyên lãi suất nhưng định hướng cứng rắn hơn → giảm kỳ vọng nới lỏng.',
        'Áp lực lên tỷ giá, dòng vốn và định giá tài sản rủi ro.',
        'Liên quan trực tiếp tới tâm thế phòng thủ của nhà đầu tư VN.'
      ]
    },
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
          date: '2026-06-21', dateShort: '21/06', timeAgo: 'Hôm qua',
          tab: 'Video · 21/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'Siêu Chu Kỳ Chip Đối Đầu Vĩ Mô Xấu — ETF Funds Cơ Cấu Mạnh Cuối Tháng 6',
          summary: 'Siêu chu kỳ chip AI vẫn mạnh nhưng đang đối đầu với vĩ mô xấu toàn cầu. ETF funds cơ cấu lại mạnh cuối tháng 6 tạo biến động lớn. Nasdaq vẫn trong xu thế chỉnh — không chase. Quan điểm VN không đổi: giữ 70% cổ phiếu.',
          feedChips: [
            { label: 'Chip ↑ siêu chu kỳ AI',  sig: 'up'   },
            { label: 'ETF ↓ cơ cấu cuối T6',   sig: 'down' },
            { label: 'Nasdaq ↓ vĩ mô xấu',     sig: 'down' },
            { label: 'CK Việt ◷ giữ 70%',      sig: 'wait' }
          ],
          keyCalls: [
            { tag: 'Chip AI',        value: 'Siêu chu kỳ — cẩn thận giá',   signal: 'up',   note: 'Nhu cầu chip AI tiếp tục tăng mạnh từ data center và thiết bị biên. Nhưng định giá nhóm semis đã phản ánh rất nhiều kỳ vọng — không chase.' },
            { tag: 'ETF Rebalance',  value: 'Áp lực cuối T6',               signal: 'down', note: 'Cuối quý 2 (30/6) các ETF lớn cơ cấu lại danh mục — tạo dòng bán kỹ thuật lớn không phản ánh quan điểm đầu tư. Không bán theo.' },
            { tag: 'Nasdaq',         value: 'Vẫn chỉnh',                    signal: 'down', note: 'Vĩ mô xấu (Fed hawkish, lạm phát dai dẳng, Nhật–Hàn áp lực) vẫn đè lên chỉ số Mỹ. Không rush mua.' },
            { tag: 'CK Việt',        value: 'Giữ 70% cổ phiếu',            signal: 'wait', note: 'Không thay đổi tỷ trọng — 70% cổ phiếu VN, 30% tiền mặt. Giữ bank, TCX, phân bón.' }
          ],
          sections: [
            { title: 'Siêu chu kỳ chip AI', signal: 'up', sigLabel: 'Tăng trưởng — nhưng định giá đã cao',
              para: 'Chip AI đang trong siêu chu kỳ thực sự: nhu cầu từ data center bùng nổ, thiết bị biên (edge AI) mới bắt đầu. Nvidia, TSMC giao hàng không kịp cầu. Tuy nhiên giá cổ phiếu đã phản ánh phần lớn kỳ vọng — không chase ở vùng hiện tại.',
              bullets: ['Nvidia: giữ nếu có, không mua thêm ở vùng này.', 'TSMC: hưởng lợi gián tiếp nhưng rủi ro địa chính trị (Đài Loan).', 'AMD: đang yếu hơn NVDA, cẩn thận.'] },
            { title: 'ETF Rebalance cuối tháng 6', signal: 'down', sigLabel: 'Áp lực bán kỹ thuật — không bán theo',
              para: 'Cuối quý 2 (30/6) các ETF lớn và quỹ hưu bổng cơ cấu lại danh mục về tỷ trọng mục tiêu — tạo dòng bán kỹ thuật lớn, không phản ánh quan điểm đầu tư thực sự. Sau 1/7 áp lực này giải tỏa.',
              bullets: ['Không bán vì hoảng sợ trước áp lực rebalance cuối tháng.', 'Cơ hội: nếu có cp tốt bị kéo xuống vô lý, có thể mua thêm sau 1/7.'] },
            { title: 'Chứng khoán Việt Nam', signal: 'wait', sigLabel: 'Giữ nguyên — 70% cổ phiếu',
              para: 'Không có thay đổi. 70% cổ phiếu, 30% tiền vẫn phù hợp. Bank tích nền tốt. TCX tiếp tục theo dõi. Đạm/phân bón chờ về vùng ngon hơn.',
              bullets: ['Bank: giữ chặt, không bán vùng thấp.', 'TCX: theo dõi mục tiêu VN30.', 'DCM/DPM: chờ về sâu hơn rồi mua thêm.'] }
          ]
        },
        {
          date: '2026-06-21', dateShort: '21/06', timeAgo: 'Hôm qua',
          tab: 'Tập 33 · Tuần 25', sourceType: 'member-video', typeLabel: 'Video hội viên · Tập 33',
          title: 'Vàng, Bitcoin, Chứng Khoán Tuần 25 — Tập 33 Hội Viên 2026',
          summary: 'Tập 33 độc quyền hội viên: cập nhật vàng, Bitcoin và chứng khoán VN/Mỹ tuần 25. Vàng đã về vùng mua tốt sau tin Iran; BTC vẫn xu thế chỉnh. CK VN giữ 70% — chuẩn bị cho biến động cuối tháng.',
          feedChips: [
            { label: 'Vàng ◷ vùng mua tốt',  sig: 'wait' },
            { label: 'BTC ↓ vẫn chỉnh',       sig: 'down' },
            { label: 'CK Mỹ ↓ cẩn thận T7',   sig: 'down' },
            { label: 'CK Việt ↑ giữ 70%',     sig: 'up'   }
          ],
          keyCalls: [
            { tag: 'Vàng',    value: 'Vùng mua tốt',        signal: 'wait', note: 'Sau tin Iran–Mỹ ký 19/6, vàng tăng ngắn hạn rồi hồi về vùng hấp dẫn. Đây là vùng mua tốt cho ai chưa có vị thế.' },
            { tag: 'Bitcoin', value: 'Chờ short 68–70k',    signal: 'down', note: 'BTC vẫn trong xu thế chỉnh từ đỉnh 125k. Chờ hồi kỹ thuật lên 68–70k để short, mục tiêu 42k.' },
            { tag: 'CK Mỹ',  value: 'Cẩn thận tháng 7',    signal: 'down', note: 'T7 có nhiều sự kiện: SpaceX insider unlock 15/7, Fed meetings, BCTC Q2. Không mua thêm.' },
            { tag: 'CK Việt', value: '70% cổ phiếu',        signal: 'up',   note: 'Giữ nguyên 70/30. Bank + TCX + phân bón là core. Không thay đổi.' }
          ],
          sections: [
            { title: 'Vàng', signal: 'wait', sigLabel: 'Mua được — vùng hấp dẫn',
              para: 'Sau tin Iran–Mỹ ký 19/6 vàng tăng ngắn rồi điều chỉnh về vùng hấp dẫn hơn. Cơ hội tốt cho ai chưa có vị thế vàng.',
              levels: 'Vùng mua: $4.100–4.200 · Bạc theo vàng: ~55 USD · Chênh mục tiêu: ≤7 triệu/lượng' },
            { title: 'Bitcoin & Crypto', signal: 'down', sigLabel: 'Chỉnh — chờ 68–70k short',
              para: 'Không có thay đổi cấu trúc kỹ thuật. BTC vẫn downtrend từ đỉnh 125k. Clarity Act dự kiến 4/7 — crypto trở thành mã giao dịch chính thức trong hệ thống Mỹ.',
              levels: 'Short: 68.000–70.000 · Mục tiêu: ~42.000 · Mua DH: vùng 42k' },
            { title: 'Chứng khoán Việt Nam', signal: 'up', sigLabel: 'Tích cực — giữ 70% cổ phiếu',
              para: 'Không action. Cầm chặt bank, TCX, SCS, phân bón. Biến động cuối tháng từ ETF rebalance không phải tín hiệu bán.',
              bullets: ['Bank: giữ chặt toàn bộ. Không bán.', 'TCX: tiếp tục theo dõi VN30.', 'DCM/DPM: sắp về vùng ngon — chuẩn bị mua thêm.', 'SCS: cầm chặt.'] }
          ]
        },
        {
          date: '2026-06-20', dateShort: '20/06', timeAgo: '2 ngày trước',
          tab: 'Post · 20/06', sourceType: 'member-post', typeLabel: 'Post hội viên',
          title: 'Chưa Có Điểm Thêm Từ MSCI',
          summary: 'MSCI vẫn chưa có điểm thêm cho VN trong lần review này — chưa đáp ứng đủ tiêu chí. Không ảnh hưởng đến quan điểm đầu tư. CK Việt tiếp tục theo logic nội tại.',
          feedChips: [
            { label: 'MSCI ◷ chưa có điểm thêm', sig: 'wait' },
            { label: 'CK Việt ◷ không đổi',       sig: 'wait' }
          ],
          keyCalls: [
            { tag: 'MSCI',    value: 'Chưa đạt điểm thêm', signal: 'wait', note: 'Review MSCI lần này VN chưa được thêm điểm nâng hạng. Cần thêm cải tiến về market access, thanh khoản và NĐT nước ngoài.' },
            { tag: 'CK Việt', value: 'Không ảnh hưởng',    signal: 'wait', note: 'Quan điểm không thay đổi — VN tăng nhờ yếu tố nội tại (tín dụng, lợi nhuận DN, dòng tiền nội), không phụ thuộc MSCI.' }
          ],
          sections: [
            { title: 'MSCI — Chưa Có Điểm Thêm', signal: 'wait', sigLabel: 'Trung lập — không ảnh hưởng thesis',
              para: 'MSCI review lần này VN chưa được nâng thêm điểm trên lộ trình Emerging Market. Vẫn cần cải tiến thêm về market access, thanh khoản và các điều kiện cho NĐT nước ngoài. Đây không phải tin xấu — chỉ là chậm hơn kỳ vọng.',
              bullets: ['Quá trình nâng hạng EM vẫn tiếp tục, chỉ cần thêm thời gian.', 'CK VN vẫn tăng được nhờ yếu tố nội tại, không cần chờ MSCI.', 'Khi MSCI thực sự nâng hạng sẽ là catalyst lớn — nhưng đừng chờ trước khi đầu tư.'] }
          ]
        },
        {
          date: '2026-06-19', dateShort: '19/06', timeAgo: '3 ngày trước',
          tab: 'Post · 19/06', sourceType: 'member-post', typeLabel: 'Post hội viên',
          title: 'Tin Vui — Thông Tư 139: Cổ Phiếu HNX Chuyển Sang HOSE Chậm Nhất 31/12/2026',
          summary: 'Thông tư 139/2025/TT-BTC: cổ phiếu HNX đủ tiêu chuẩn phải chuyển sang HOSE chậm nhất 31/12/2026. Tích cực cho thanh khoản và định giá — đặc biệt TCX, BVB.',
          feedChips: [
            { label: 'TCX ↑ sắp lên HOSE',    sig: 'up' },
            { label: 'BVB ↑ chuyển HOSE T7',   sig: 'up' },
            { label: 'CK Việt ↑ thanh khoản',  sig: 'up' }
          ],
          keyCalls: [
            { tag: 'Thông tư 139', value: 'HNX → HOSE ≤ 31/12/2026', signal: 'up', note: 'Cổ phiếu đủ tiêu chuẩn trên HNX phải niêm yết HOSE trước 31/12/2026 — tăng thanh khoản và định giá cho nhóm này.' },
            { tag: 'TCX',          value: 'Sắp lên HOSE',             signal: 'up', note: 'TCX đủ tiêu chuẩn và đang trong lộ trình chuyển sang HOSE — catalyst lớn cho câu chuyện VN30.' },
            { tag: 'BVB',          value: 'Niêm yết HOSE T7/2026',    signal: 'up', note: 'BVBank chuyển chính thức sang HOSE tháng 7/2026 — tăng định giá và thanh khoản.' }
          ],
          sections: [
            { title: 'Thông tư 139 — Catalyst Quan Trọng', signal: 'up', sigLabel: 'Tích cực — tăng thanh khoản HNX',
              para: 'Thông tư 139/2025/TT-BTC quy định rõ: cổ phiếu HNX đáp ứng tiêu chuẩn niêm yết HOSE phải chuyển sàn chậm nhất 31/12/2026. Khi lên HOSE, cổ phiếu hưởng thanh khoản cao hơn, room ngoại rộng hơn, các quỹ index có thể mua vào.',
              bullets: ['TCX: đủ tiêu chuẩn, đang trong lộ trình. Lên HOSE + VN30 là catalyst đôi.', 'BVBank (BVB): niêm yết HOSE chính thức T7/2026 — đã cầm, không bán.', 'Theo dõi thêm các cổ phiếu HNX khác đủ tiêu chuẩn.'] }
          ]
        },
        {
          date: '2026-06-19', dateShort: '19/06', timeAgo: '3 ngày trước',
          tab: 'Post · 19/06', sourceType: 'member-post', typeLabel: 'Post hội viên',
          title: 'Môi Trường Lãi Suất Hiện Tại — DN Nhiều Tiền Mặt & MOAT Như VNM Là Ưu Thế',
          summary: 'Lãi suất cao kéo dài tạo bất lợi cho DN nợ nhiều, nhưng là ưu thế lớn cho DN nhiều tiền mặt + MOAT như VNM. VNM gửi tiền lãi cao, duy trì cổ tức đều đặn. Môi trường này favors quality over growth.',
          feedChips: [
            { label: 'VNM ↑ tiền mặt + MOAT',  sig: 'up'   },
            { label: 'DN nợ ↓ lãi suất cao',    sig: 'down' },
            { label: 'Quality ↑ over Growth',    sig: 'up'   }
          ],
          keyCalls: [
            { tag: 'VNM',      value: 'Ưu thế tiền mặt',           signal: 'up',   note: 'VNM có lượng tiền mặt lớn → gửi tiết kiệm lãi cao → tăng thu nhập tài chính → hỗ trợ lợi nhuận và cổ tức trong môi trường lãi cao.' },
            { tag: 'MOAT',     value: 'Lợi thế cạnh tranh bền',    signal: 'up',   note: 'DN có MOAT (thương hiệu, chi phí chuyển đổi, lợi thế mạng) giữ được biên lợi nhuận dù kinh tế chậm lại.' },
            { tag: 'DN nợ cao', value: 'Áp lực lãi vay',           signal: 'down', note: 'Lãi suất cao bào mòn lợi nhuận DN nợ nhiều — cẩn thận nhóm BĐS nợ cao, nhà thầu xây dựng.' }
          ],
          sections: [
            { title: 'Chiến lược trong môi trường lãi cao', signal: 'up', sigLabel: 'Ưu tiên DN tiền mặt + MOAT',
              para: 'Khi lãi suất cao kéo dài, DN nhiều tiền mặt không chỉ không bị bào mòn bởi lãi vay mà còn hưởng lợi từ thu nhập tài chính. MOAT đảm bảo giữ được khách hàng và biên lợi nhuận.',
              bullets: ['VNM: tiền mặt lớn + thương hiệu tiêu dùng → hưởng lợi kép từ lãi tiền gửi + biên vững.', 'Ngân hàng: hưởng lợi trực tiếp từ spread lãi suất cao.', 'Tránh: DN BĐS nợ nhiều, nhà thầu lệ thuộc vốn vay.'] }
          ]
        },
        {
          date: '2026-06-18', dateShort: '18/06', timeAgo: '4 ngày trước',
          tab: 'Video · 18/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'Chủ Tịch Fed Lật Kèo — Từ Bỏ Định Hướng Lãi Suất, Vàng & Bitcoin Cần Lưu Ý Gì?',
          summary: 'Fed Chair Powell bất ngờ từ bỏ forward guidance về lãi suất — không cam kết lộ trình cắt giảm. Vàng phản ứng tăng ngắn hạn nhưng thesis chính không đổi. BTC vẫn nhạy cảm với tin Fed. CK Mỹ thêm bất định.',
          feedChips: [
            { label: 'Fed ↓ hawkish — lật kèo',  sig: 'down' },
            { label: 'Vàng ↑ tăng ngắn hạn',      sig: 'up'   },
            { label: 'BTC ↓ nhạy cảm Fed',         sig: 'down' },
            { label: 'CK Mỹ ↓ thêm bất định',     sig: 'down' }
          ],
          keyCalls: [
            { tag: 'Fed',     value: 'Không còn forward guidance', signal: 'down', note: 'Powell chính thức từ bỏ cam kết lộ trình lãi suất — quyết định theo từng cuộc họp dựa trên dữ liệu. Hawkish hơn kỳ vọng thị trường.' },
            { tag: 'Vàng',    value: 'Tăng ngắn hạn — thesis không đổi', signal: 'up', note: 'Vàng hưởng lợi ngắn từ USD yếu sau tin Fed bất định. Vùng mua 4.100–4.200 vẫn hợp lý.' },
            { tag: 'Bitcoin', value: 'Vẫn nhạy cảm Fed',           signal: 'down', note: 'BTC đã thành tài sản tài chính chính thức, nhạy cảm với mọi tin Fed. Không thay đổi vị thế chờ short 68–70k.' },
            { tag: 'CK Mỹ',  value: 'Thêm bất định',               signal: 'down', note: 'Không có lộ trình lãi rõ ràng → EPS forward khó định giá → P/E sẽ được chiết khấu. Không mua thêm.' }
          ],
          sections: [
            { title: 'Fed — Không Còn Forward Guidance', signal: 'down', sigLabel: 'Hawkish hơn kỳ vọng',
              para: 'Powell từ bỏ thông lệ đưa ra định hướng lãi suất nhiều tháng trước — chuyển sang "data dependent" hoàn toàn. Thị trường không thể dựa vào Fed put truyền thống; bất định tăng lên.',
              bullets: ['Không cam kết cắt giảm lãi suất trong phần còn lại của 2026.', 'Mỗi cuộc họp là independent — biến động cao hơn xung quanh mỗi FOMC.', 'Dữ liệu việc làm và CPI trở nên quan trọng hơn bao giờ.'] },
            { title: 'Vàng & Bitcoin', signal: 'wait', sigLabel: 'Vàng: mua được · BTC: chờ',
              para: 'Vàng phản ứng tích cực ngắn hạn. Không thay đổi thesis: vùng 4.100–4.200 là mua tốt. Bitcoin vẫn trong xu thế chỉnh — không có tín hiệu đảo chiều dù tin Fed.',
              levels: 'Vàng mua: 4.100–4.200 · BTC short: 68.000–70.000 · Mục tiêu BTC: 42k' },
            { title: 'Chứng khoán Việt Nam', signal: 'wait', sigLabel: 'Không ảnh hưởng — giữ nguyên',
              para: 'Quyết định Fed ít ảnh hưởng trực tiếp đến chợ huyện VN. Giữ nguyên 70% cổ phiếu. Bank VN hưởng lợi từ NIM cao khi lãi suất toàn cầu duy trì cao.',
              bullets: ['Bank VN: NIM rộng trong môi trường lãi cao toàn cầu.', 'Không action — giữ nguyên cơ cấu.'] }
          ]
        },
        {
          date: '2026-06-18', dateShort: '18/06', timeAgo: '4 ngày trước',
          tab: 'Post · 18/06', sourceType: 'member-post', typeLabel: 'Post hội viên',
          title: 'Hội Viên Xem Video Cập Nhật Mới Nhất Về FED — Quan Điểm Cổ Phiếu Việt Nam',
          summary: 'Thái Phạm gửi hội viên xem video cập nhật FED hôm nay — Powell lật kèo về định hướng lãi. Quan điểm cổ phiếu Việt Nam không đổi: giữ 70% cổ phiếu, tập trung bank + TCX + phân bón.',
          feedChips: [
            { label: 'FED ↓ hawkish',         sig: 'down' },
            { label: 'CK Việt ◷ không đổi',  sig: 'wait' }
          ],
          keyCalls: [
            { tag: 'FED',     value: 'Hawkish — lật kèo',  signal: 'down', note: 'Powell từ bỏ forward guidance, không cam kết cắt lãi 2026. Xem chi tiết trong video công khai hôm nay.' },
            { tag: 'CK Việt', value: 'Không thay đổi',     signal: 'wait', note: 'Quan điểm không đổi: 70% cổ phiếu / 30% tiền mặt. Bank + TCX + phân bón là cốt lõi.' }
          ],
          sections: [
            { title: 'Cập nhật FED & CK Việt', signal: 'wait', sigLabel: 'Không thay đổi quan điểm',
              para: 'Post ngắn gửi hội viên: xem video công khai hôm nay về diễn biến Fed. Quan điểm cổ phiếu Việt Nam không thay đổi — 70% cổ phiếu, tập trung bank, TCX và phân bón.',
              bullets: ['Xem video công khai hôm nay để hiểu diễn biến Fed.', 'Không action với danh mục VN.', 'Giữ: bank (VCB, BID, TCB, HDB, EB, BVB), TCX, SCS, DCM/DPM.'] }
          ]
        },
        {
          date: '2026-06-17', dateShort: '17/06', timeAgo: '5 ngày trước',
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
          date: '2026-06-17', dateShort: '17/06', timeAgo: '5 ngày trước',
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
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '21/06/2026',
          title: 'Siêu chu kỳ chip đối đầu vĩ mô xấu — ETF Funds cơ cấu mạnh cuối tháng 6', meta: 'Video công khai · YouTube' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '21/06/2026',
          title: 'Tập 33 — Vàng, Bitcoin, Chứng khoán tuần 25', meta: 'Video hội viên · chỉ dành cho hội viên' },
        { icon: '✎', iconBg: 'oklch(0.95 0.02 235)', iconColor: 'oklch(0.42 0.08 235)', date: '20/06/2026',
          title: '20/6 — Chưa có điểm thêm từ MSCI', meta: 'Post cộng đồng · chỉ dành cho hội viên' },
        { icon: '✎', iconBg: 'oklch(0.95 0.02 235)', iconColor: 'oklch(0.42 0.08 235)', date: '19/06/2026',
          title: '19/6 — Tin vui: Thông tư 139 — HNX → HOSE ≤ 31/12/2026', meta: 'Post cộng đồng · chỉ dành cho hội viên' },
        { icon: '✎', iconBg: 'oklch(0.95 0.02 235)', iconColor: 'oklch(0.42 0.08 235)', date: '19/06/2026',
          title: '19/6 — Môi trường lãi suất — DN nhiều tiền mặt & MOAT như VNM', meta: 'Post cộng đồng · chỉ dành cho hội viên' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '18/06/2026',
          title: '18/6 — Chủ tịch Fed lật kèo, cần lưu ý gì cho vàng & Bitcoin', meta: 'Video công khai · YouTube' },
        { icon: '✎', iconBg: 'oklch(0.95 0.02 235)', iconColor: 'oklch(0.42 0.08 235)', date: '18/06/2026',
          title: '18/6 — Hội viên: cập nhật mới nhất về FED + CK Việt', meta: 'Post cộng đồng · chỉ dành cho hội viên' },
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
          date: '2026-06-21', dateShort: '21/06', timeAgo: 'Hôm qua',
          tab: 'Video · 21/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: '3 Tiêu Chí Lựa Chọn Cổ Phiếu Bất Bại — Lăng Kính Đầu Tư Giá Trị',
          summary: 'Ba tiêu chí cốt lõi để lựa chọn cổ phiếu theo phương pháp giá trị: (1) Chất lượng doanh nghiệp — ROE cao, biên ổn, MOAT rõ; (2) Định giá hấp dẫn — P/B, P/E thấp hơn trung bình ngành; (3) Quản trị tốt — ban lãnh đạo có track record, ưu tiên cổ đông.',
          feedChips: [
            { label: 'Chất lượng ↑ ROE cao',      sig: 'up' },
            { label: 'Định giá ↑ P/B thấp',        sig: 'up' },
            { label: 'Quản trị ↑ track record',    sig: 'up' }
          ],
          keyCalls: [
            { tag: 'Tiêu chí 1', value: 'Chất lượng doanh nghiệp', signal: 'up', note: 'ROE > 15% liên tục nhiều năm; biên lợi nhuận ổn định hoặc mở rộng; có lợi thế cạnh tranh (MOAT) khó bị sao chép.' },
            { tag: 'Tiêu chí 2', value: 'Định giá hấp dẫn',        signal: 'up', note: 'P/B dưới trung bình ngành (tốt nhất dưới 1,5x cho bank); P/E thấp hơn tốc độ tăng trưởng (PEG < 1).' },
            { tag: 'Tiêu chí 3', value: 'Quản trị tốt',             signal: 'up', note: 'Ban lãnh đạo có track record dài, chi cổ tức đều, không pha loãng cổ phần bừa bãi, minh bạch thông tin.' }
          ],
          sections: [
            { title: '3 tiêu chí lựa chọn cổ phiếu', signal: 'up', sigLabel: 'Tích cực — framework đầu tư giá trị',
              para: 'Đầu tư giá trị không phải là mua cổ phiếu rẻ bất kỳ — mà là mua doanh nghiệp tốt khi định giá hấp dẫn. Ba tiêu chí này là bộ lọc cơ bản để loại đi 80% cổ phiếu không đáng đầu tư.',
              bullets: ['Chất lượng: ROE > 15% bền vững, biên lợi nhuận ổn, MOAT.', 'Định giá: P/B dưới ngưỡng lịch sử, P/E hợp lý so với tăng trưởng.', 'Quản trị: lãnh đạo có skin in the game, cổ tức đều, thông tin minh bạch.'] },
            { title: 'Ứng dụng vào TTCK VN — Nhóm bank tư nhân lớn', signal: 'up', sigLabel: 'Đáp ứng cả 3 tiêu chí',
              para: 'Hiện tại nhóm ngân hàng thương mại cổ phần lớn (ACB, MB, VPBank, HDBank) đang đáp ứng cả 3 tiêu chí: ROE cao, định giá P/B thấp lịch sử, quản trị ngày càng cải thiện.',
              bullets: ['ACB, MB: ROE ổn định > 20%, P/B dưới 1,3x.', 'VPBank, HDBank: tăng trưởng tín dụng mạnh, định giá rẻ sau điều chỉnh.', 'Tránh: cổ phiếu rẻ nhưng ROE thấp, quản trị kém, không có MOAT.'] }
          ]
        },
        {
          date: '2026-06-20', dateShort: '20/06', timeAgo: '2 ngày trước',
          tab: 'Video · 20/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'Định Giá — Yếu Tố Quan Trọng Nhất Trong Đầu Tư Giá Trị | Trà Đá Brothers #02',
          summary: 'Tập 2 Trà Đá Brothers: định giá là yếu tố quyết định lợi nhuận đầu tư, không phải tăng trưởng. DN tốt mua giá đắt vẫn lỗ; DN xấu mua giá rất rẻ vẫn có lời. Phương pháp DCF, P/B, P/E kết hợp.',
          feedChips: [
            { label: 'Định giá ↑ then chốt',    sig: 'up' },
            { label: 'DCF ↑ phương pháp gốc',   sig: 'up' }
          ],
          keyCalls: [
            { tag: 'Nguyên tắc', value: 'Giá mua quyết định lợi nhuận', signal: 'up', note: 'DN tốt mua quá đắt (P/E 50x) vẫn cho lợi nhuận thấp hoặc âm. Mua DN vừa phải giá rất rẻ (P/E 5x) vẫn lời tốt.' },
            { tag: 'DCF',        value: 'Phương pháp gốc rễ',           signal: 'up', note: 'DCF (Discounted Cash Flow) là nền tảng — chiết khấu dòng tiền tương lai về hiện tại. Kết hợp P/B, P/E để cross-check.' }
          ],
          sections: [
            { title: 'Tại sao định giá quan trọng hơn tăng trưởng?', signal: 'up', sigLabel: 'Nền tảng — giá mua = lợi nhuận',
              para: 'Nhiều nhà đầu tư mắc bẫy mua doanh nghiệp "tốt" mà không quan tâm giá — kết quả là lỗ hoặc tỷ suất thấp. Buffett: "Price is what you pay, value is what you get." Định giá đúng là một nửa thành công.',
              bullets: ['DN tốt + giá rẻ = lý tưởng.', 'DN tốt + giá đắt = có thể vẫn lỗ dài hạn.', 'DN kém + giá cực rẻ = lợi nhuận ngắn hạn nhưng rủi ro bẫy giá trị.'] },
            { title: 'Các phương pháp định giá thực tế', signal: 'up', sigLabel: 'P/B + P/E + DCF kết hợp',
              para: 'Kết hợp nhiều phương pháp để cross-check. DCF cho giá trị nội tại; P/B so với lịch sử và ngành; P/E điều chỉnh theo chu kỳ.',
              bullets: ['DCF: tính dòng tiền tự do, chiết khấu về hiện tại. Nhạy cảm với giả định tăng trưởng.', 'P/B: tốt cho ngân hàng và DN nhiều tài sản. P/B < 1 thường hấp dẫn.', 'P/E: dễ dùng nhưng cẩn thận chu kỳ; dùng EPS trung bình 3–5 năm.'] }
          ]
        },
        {
          date: '2026-06-20', dateShort: '20/06', timeAgo: '2 ngày trước',
          tab: 'Video · 20/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'Góc Nhìn Cổ Phiếu BĐS Dưới Lăng Kính Giá Trị',
          summary: 'Phân tích nhóm cổ phiếu BĐS theo tiêu chuẩn đầu tư giá trị: chỉ một số ít đáp ứng. Tập trung BĐS công nghiệp và khu đô thị pháp lý sạch. Tránh nhóm BĐS nợ cao, pháp lý phức tạp. Hiện cơ hội nhiều hơn rủi ro với nhóm chất lượng.',
          feedChips: [
            { label: 'BĐS CN ↑ cơ hội',      sig: 'up'   },
            { label: 'BĐS nợ cao ↓ tránh',   sig: 'down' },
            { label: 'Pháp lý ⚠ chọn lọc',  sig: 'warn' }
          ],
          keyCalls: [
            { tag: 'BĐS công nghiệp',             value: 'Cơ hội nhiều',                 signal: 'up',   note: 'BĐS KCN hưởng lợi từ FDI, dịch chuyển sản xuất. Định giá hiện tại rẻ tương đối so với triển vọng tăng trưởng.' },
            { tag: 'BĐS nhà ở pháp lý sạch',     value: 'Chọn lọc — cơ hội tốt',       signal: 'up',   note: 'DN BĐS có quỹ đất pháp lý rõ ràng, nợ thấp, sẵn sàng mở bán trong 1–2 năm tới.' },
            { tag: 'BĐS nợ cao / pháp lý phức',  value: 'Tránh',                        signal: 'down', note: 'Nhóm này có rủi ro pháp lý, tái cơ cấu nợ dài hạn. Không mua dù giá rẻ — bẫy giá trị.' }
          ],
          sections: [
            { title: 'BĐS công nghiệp — Cơ hội thực sự', signal: 'up', sigLabel: 'Tích cực — hưởng lợi FDI',
              para: 'BĐS KCN là nhóm đáp ứng tốt nhất tiêu chí giá trị trong ngành BĐS: dòng tiền từ thuê đất ổn định, nhu cầu tăng từ dịch chuyển sản xuất, định giá hiện tại hấp dẫn.',
              bullets: ['Kinh Bắc (KBC): quỹ đất lớn, đang mở rộng. Pháp lý ổn.', 'Sonadezi, Viglacera: BĐS KCN kết hợp dịch vụ.', 'Chọn DN có KCN đã cho thuê ổn định, tiền mặt dương.'] },
            { title: 'BĐS nhà ở — Chọn lọc kỹ', signal: 'warn', sigLabel: 'Thận trọng — pháp lý là then chốt',
              para: 'Nhóm nhà ở phân hóa rõ: DN pháp lý sạch, nợ thấp đang phục hồi. DN pháp lý phức tạp, nợ tái cơ cấu nhiều năm nên tránh dù giá trông rẻ.',
              bullets: ['NLG, DXG: pháp lý dần cải thiện, nợ kiểm soát được — theo dõi.', 'Novaland (NVL): pháp lý phức tạp — chỉ mua vùng 11–12k nếu có.', 'Tránh: PDR, DIG và các DN nợ trái phiếu lớn chưa giải quyết.'] }
          ]
        },
        {
          date: '2026-06-20', dateShort: '20/06', timeAgo: '2 ngày trước',
          tab: 'Video · 20/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'Ngân Hàng Nào Đang Có P/B Dưới 1?',
          summary: 'Danh sách ngân hàng VN có P/B dưới 1 — định giá thấp hơn giá trị sổ sách. Nhóm này gồm một số bank tư nhân lớn sau đợt điều chỉnh. P/B < 1 không phải lúc nào cũng là cơ hội — cần xem chất lượng tài sản và ROE.',
          feedChips: [
            { label: 'Bank P/B<1 ↑ rẻ lịch sử',    sig: 'up'   },
            { label: 'ROE ↑ chọn bank chất lượng', sig: 'up'   },
            { label: 'Nợ xấu ⚠ cần kiểm tra',      sig: 'warn' }
          ],
          keyCalls: [
            { tag: 'P/B < 1',          value: 'Hấp dẫn — nhưng không phải tất cả', signal: 'up',   note: 'P/B dưới 1 có nghĩa thị trường định giá bank thấp hơn tài sản ròng. Cơ hội thực sự khi bank có ROE cao và chất lượng tài sản tốt.' },
            { tag: 'Bank tư nhân lớn', value: 'ACB, MB, VPB, HDB',               signal: 'up',   note: 'Nhóm này đang giao dịch P/B hấp dẫn — ROE tốt, tín dụng tăng trưởng, nợ xấu kiểm soát.' },
            { tag: 'Nợ xấu',           value: 'Check kỹ NPL',                    signal: 'warn', note: 'P/B thấp đôi khi phản ánh rủi ro nợ xấu tiềm ẩn. Cần xem tỷ lệ NPL và tỷ lệ bao phủ nợ xấu trước khi mua.' }
          ],
          sections: [
            { title: 'Ngân hàng VN có P/B dưới 1', signal: 'up', sigLabel: 'Cơ hội — percentile thấp nhất lịch sử',
              para: 'Nhiều ngân hàng tư nhân lớn VN đang giao dịch ở P/B dưới 1 — mức hiếm gặp. Không phải vì chất lượng kém mà do áp lực chung từ khối ngoại bán ròng và tâm lý thị trường.',
              bullets: ['ACB: P/B ~0,8–1,0x — ROE >20%, chất lượng tài sản tốt nhất nhóm.', 'MB Bank: P/B ~0,9–1,1x — tăng trưởng bán lẻ mạnh, bancassurance tốt.', 'VPBank: P/B ~0,7–0,9x — tăng trưởng CASA, FE Credit đang phục hồi.', 'HDBank: P/B ~0,8x — định giá rẻ nhất nhóm big 5 tư nhân.'] },
            { title: 'Tiêu chí chọn bank theo giá trị', signal: 'up', sigLabel: 'P/B thấp + ROE cao + NPL thấp',
              para: 'Bộ ba tiêu chí: (1) P/B thấp hơn 1,5x; (2) ROE > 15% liên tục; (3) NPL < 2% và LLR > 100%. Tránh bank P/B thấp vì NPL cao.',
              bullets: ['Không mua bank chỉ vì P/B < 1 — phải check ROE và NPL.', 'Bank nhà nước (VCB, BID, CTG): ROE thấp hơn nhưng rủi ro thấp nhất.', 'Cơ hội tốt nhất: bank tư nhân lớn P/B thấp lịch sử + NPL đang được kiểm soát.'] }
          ]
        },
        {
          date: '2026-06-19', dateShort: '19/06', timeAgo: '3 ngày trước',
          tab: 'Video · 19/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'Triển Vọng Nhóm Tài Chính Ngân Hàng',
          summary: 'Phân tích toàn diện nhóm tài chính ngân hàng VN: tín dụng đang tăng tốc trở lại, NIM cải thiện, nợ xấu đỉnh đã qua. Dự phóng KQKD H2/2026 tích cực. Bank tư nhân lớn là nhóm hấp dẫn nhất hiện tại.',
          feedChips: [
            { label: 'Tín dụng ↑ tăng tốc',      sig: 'up'  },
            { label: 'NIM ↑ cải thiện',            sig: 'up'  },
            { label: 'Nợ xấu ◷ đỉnh đã qua',     sig: 'wait' },
            { label: 'H2/2026 ↑ KQKD tích cực',   sig: 'up'  }
          ],
          keyCalls: [
            { tag: 'Tín dụng', value: 'Tăng tốc H2/2026',      signal: 'up',   note: 'Tín dụng toàn hệ thống đang tăng tốc trở lại sau giai đoạn chậm. Mục tiêu NHNN 16% cả năm — H2 cần bù đắp tốc độ.' },
            { tag: 'NIM',      value: 'Đáy đã qua',             signal: 'up',   note: 'NIM ngân hàng đã chạm đáy và đang phục hồi. Chi phí vốn ổn định + lãi cho vay tăng dần = NIM mở rộng.' },
            { tag: 'Nợ xấu',  value: 'Đỉnh đã qua — đang giảm', signal: 'wait', note: 'NPL hệ thống đã đạt đỉnh và bắt đầu giảm nhờ kinh tế phục hồi, xử lý VAMC tích cực.' }
          ],
          sections: [
            { title: 'Tín dụng và NIM', signal: 'up', sigLabel: 'Tích cực — tăng tốc H2',
              para: 'Tín dụng H1/2026 tăng khoảng 8%, còn lại 8% cần đạt trong H2 để hoàn thành mục tiêu 16%. Điều này tạo động lực lớn cho doanh thu lãi thuần Q3–Q4/2026. NIM cải thiện dần khi chi phí huy động ổn và lãi cho vay tăng nhẹ.',
              bullets: ['H2 cần tăng tốc tín dụng — tạo áp lực tích cực lên doanh thu.', 'NIM đáy Q4/2025–Q1/2026; H2/2026 dự kiến mở rộng.', 'CASA cải thiện → chi phí vốn giảm → hỗ trợ NIM.'] },
            { title: 'Chất lượng tài sản', signal: 'wait', sigLabel: 'Cải thiện — NPL đang giảm',
              para: 'Đỉnh nợ xấu hệ thống đã qua. Các ngân hàng lớn đang tích cực trích lập dự phòng và xử lý VAMC. Kinh tế phục hồi → DN trả được nợ → NPL giảm dần. H2/2026 KQKD dự kiến khởi sắc.',
              bullets: ['VCB, BID: đã trích lập đầy đủ, sẵn sàng hoàn nhập dự phòng.', 'TCB, MB, ACB: nợ xấu kiểm soát tốt.', 'Tránh: bank NPL > 3% và chưa bao phủ đủ.'] }
          ]
        },
        {
          date: '2026-06-19', dateShort: '19/06', timeAgo: '3 ngày trước',
          tab: 'Video · 19/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'HPG Có Bị Ảnh Hưởng Bởi Chu Kỳ Ngành Thép?',
          summary: 'HPG (Hòa Phát) là DN thép tốt nhất VN nhưng ngành thép có chu kỳ mạnh — giá thép và nguyên liệu (quặng, than cốc) biến động lớn ảnh hưởng lợi nhuận. HPG hiện ở pha phục hồi chu kỳ; Dung Quất 2 là catalyst dài hạn.',
          feedChips: [
            { label: 'HPG ◷ chu kỳ phục hồi',   sig: 'wait' },
            { label: 'Thép TG ↑ phục hồi giá',  sig: 'up'   },
            { label: 'Dung Quất ↑ catalyst mới', sig: 'up'   },
            { label: 'Quặng/than ⚠ biến động',  sig: 'warn' }
          ],
          keyCalls: [
            { tag: 'HPG',        value: 'DN tốt — chờ giá rẻ hơn',  signal: 'wait', note: 'HPG là DN thép tốt nhất VN với lợi thế Dung Quất. Cần mua khi P/B < 1, P/E < 10 để margin of safety đủ lớn.' },
            { tag: 'Chu kỳ thép', value: 'Phục hồi từ đáy',         signal: 'wait', note: 'Giá thép thế giới đang phục hồi từ đáy chu kỳ. TQ giảm xuất khẩu thép phế → hỗ trợ giá thép dài hạn.' },
            { tag: 'Dung Quất 2', value: 'Catalyst lớn',             signal: 'up',   note: 'Nhà máy Dung Quất giai đoạn 2 đi vào hoạt động sẽ tăng gấp đôi công suất HPG — catalyst dài hạn quan trọng.' }
          ],
          sections: [
            { title: 'HPG và chu kỳ ngành thép', signal: 'wait', sigLabel: 'Phục hồi chu kỳ — chờ vùng giá tốt',
              para: 'HPG là DN thép tốt nhất VN nhờ quy mô lớn, tự chủ nguyên liệu một phần, và lợi thế Dung Quất. Nhưng lợi nhuận biến động mạnh theo chu kỳ giá thép và nguyên liệu đầu vào. Hiện chu kỳ đang phục hồi từ đáy.',
              bullets: ['Chu kỳ thép đáy 2024–Q1/2026; đang phục hồi dần.', 'TQ kiểm soát xuất khẩu thép phế → hỗ trợ giá thép.', 'Dung Quất 2 tăng công suất 100% — catalyst lớn khi đi vào vận hành.'] },
            { title: 'Định giá và thời điểm mua', signal: 'wait', sigLabel: 'Chờ P/B dưới 1 để mua',
              para: 'HPG là DN đầu tư được nhưng cần mua đúng chu kỳ và đúng giá. Tốt nhất mua ở vùng P/B < 1 khi tâm lý thị trường bi quan nhất về thép.',
              bullets: ['P/B mục tiêu mua: dưới 1,0x.', 'Không dùng margin — ngành thép có thể chỉnh sâu bất ngờ.', 'Nắm giữ dài hạn (3–5 năm) để capture toàn chu kỳ.'] }
          ]
        },
        {
          date: '2026-06-18', dateShort: '18/06', timeAgo: '4 ngày trước',
          tab: 'Video · 18/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'Cổ Phiếu Ngành Thép Nào Đáng Chú Ý?',
          summary: 'Phân tích nhóm cổ phiếu thép VN: HPG là lựa chọn số 1 nhờ lợi thế quy mô và Dung Quất. Các DN nhỏ hơn (NKG, TLH, HSG) phụ thuộc nhiều vào giá thép nhập khẩu và margin mỏng hơn. Chiến lược: mua HPG khi P/B dưới 1.',
          feedChips: [
            { label: 'HPG ↑ lựa chọn số 1',  sig: 'up'   },
            { label: 'NKG/TLH ◷ theo dõi',  sig: 'wait' },
            { label: 'Chu kỳ ↑ phục hồi',    sig: 'up'   }
          ],
          keyCalls: [
            { tag: 'HPG',         value: 'Lựa chọn số 1',          signal: 'up',   note: 'Quy mô lớn nhất, lợi thế chi phí thấp, Dung Quất 2 là catalyst. P/B tiếp cận vùng hấp dẫn.' },
            { tag: 'NKG, TLH, HSG', value: 'Rủi ro hơn HPG',      signal: 'wait', note: 'Không có lợi thế quy mô như HPG; phụ thuộc thép nhập khẩu và giá NL nhiều hơn. Biến động LN lớn hơn.' },
            { tag: 'Chiến lược',  value: 'Mua HPG vùng P/B<1',     signal: 'up',   note: 'Tập trung vào HPG. Mua khi P/B dưới 1, không dùng margin.' }
          ],
          sections: [
            { title: 'Phân loại cổ phiếu thép VN', signal: 'up', sigLabel: 'HPG dẫn đầu rõ ràng',
              para: 'Ngành thép VN phân hóa rõ: HPG là DN lớn nhất, lợi thế cạnh tranh rõ ràng. Các DN còn lại (NKG, TLH, HSG, VIS) nhỏ hơn nhiều và phụ thuộc nhiều vào giá thép thế giới.',
              bullets: ['HPG: thép dẹt (HRC, tôn) + thép dài (cốt thép). Dung Quất cho lợi thế chi phí lớn.', 'NKG, TLH: tôn mạ và thép dài. Phụ thuộc NL nhập. Biên mỏng hơn HPG.', 'HSG: tôn mạ. Biên mỏng, nhạy cảm giá thép nhập khẩu.'] },
            { title: 'Thời điểm và chiến lược', signal: 'up', sigLabel: 'Mua HPG vùng P/B thấp',
              para: 'Ngành thép là ngành chu kỳ điển hình — mua vùng P/B thấp lịch sử, bán khi chu kỳ đỉnh. Không nắm giữ mãi không chốt lời khi đạt mục tiêu.',
              bullets: ['HPG P/B mục tiêu mua: dưới 1,0–1,1x.', 'Đặt mục tiêu lợi nhuận rõ ràng (30–50%) trước khi mua.', 'Không dùng margin — thép có thể chỉnh −30% bất ngờ.'] }
          ]
        },
        {
          date: '2026-06-17', dateShort: '17/06', timeAgo: '5 ngày trước',
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
          date: '2026-06-14', dateShort: '14/06', timeAgo: '8 ngày trước',
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
          date: '2026-06-11', dateShort: '11/06', timeAgo: '11 ngày trước',
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
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '21/06/2026',
          title: '3 tiêu chí lựa chọn cổ phiếu bất bại | LĂNG KÍNH ĐẦU TƯ GIÁ TRỊ', meta: 'Video công khai · AzFin YouTube' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '20/06/2026',
          title: 'Định giá — Yếu tố quan trọng trong đầu tư giá trị | Trà Đá Brothers #02', meta: 'Video công khai · AzFin YouTube' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '20/06/2026',
          title: 'Góc nhìn cổ phiếu BĐS dưới lăng kính giá trị', meta: 'Video công khai · AzFin YouTube' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '20/06/2026',
          title: 'Ngân hàng nào đang có P/B dưới 1?', meta: 'Video công khai · AzFin YouTube' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '19/06/2026',
          title: 'Triển vọng nhóm tài chính ngân hàng', meta: 'Video công khai · AzFin YouTube' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '19/06/2026',
          title: 'HPG có bị ảnh hưởng bởi chu kỳ ngành thép?', meta: 'Video công khai · AzFin YouTube' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '18/06/2026',
          title: 'Cổ phiếu ngành thép nào đáng chú ý?', meta: 'Video công khai · AzFin YouTube' },
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
          date: '2026-06-21', dateShort: '21/06', timeAgo: 'Hôm qua',
          tab: 'Video · 21/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'VN-Index 21/06: Tuần Cuối Tháng 6 Kỳ Vọng Gì?',
          summary: 'Tuần cuối tháng 6 nhiều áp lực từ ETF rebalance nhưng xu hướng tích cực được duy trì. VN-Index cần vượt và giữ vùng kháng cự. Kỳ vọng tuần này sideway — tích lũy chờ tháng 7.',
          feedChips: [
            { label: 'VNI ◷ sideway cuối T6',  sig: 'wait' },
            { label: 'ETF ↓ áp lực rebalance', sig: 'down' },
            { label: 'T7 ↑ kỳ vọng phục hồi',  sig: 'up'   }
          ],
          keyCalls: [
            { tag: 'VN-Index', value: 'Sideway — chờ tháng 7', signal: 'wait', note: 'Tuần cuối tháng 6 thường có áp lực từ ETF rebalance. Không nên giao dịch mạnh trong giai đoạn này.' },
            { tag: 'Kháng cự', value: 'Vùng cần vượt', signal: 'wait', note: 'VN-Index cần vượt và giữ vùng kháng cự hiện tại để xác nhận xu hướng tăng. Tháng 7 mới rõ ràng hơn.' }
          ],
          sections: [
            { title: 'Tuần cuối tháng 6 — Áp lực kỹ thuật', signal: 'wait', sigLabel: 'Sideway — không giao dịch mạnh',
              para: 'Tuần cuối tháng 6 thường ít biến động định hướng — ETF rebalance tạo dòng chảy ngược chiều, tâm lý nhà đầu tư chờ đợi. Tháng 7 mới có độ rõ hơn về xu hướng.',
              bullets: ['Không nên giao dịch mạnh cuối tháng 6.', 'Giữ nguyên danh mục, quan sát.', 'Tháng 7: theo dõi thanh khoản và mức vượt kháng cự để xác nhận xu hướng.'] }
          ]
        },
        {
          date: '2026-06-19', dateShort: '19/06', timeAgo: '3 ngày trước',
          tab: 'Video · 19/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'Nhận Định Tuần: Suýt Kết Thúc Chiến Tranh & Fed Họp — Đánh Giá Sóng CK Nhỏ Trong Tuần',
          summary: 'Tuần Iran–Mỹ suýt ký hòa bình và cuộc họp Fed: hai sự kiện lớn tạo biến động nhưng thị trường VN vẫn theo logic riêng. Nhóm sóng nhỏ (CK, phân bón, BĐS) đang có dấu hiệu tích cực. Giữ vị thế cẩn thận.',
          feedChips: [
            { label: 'Iran ◷ gần ký hòa bình', sig: 'wait' },
            { label: 'Fed ◷ giữ nguyên LS',     sig: 'wait' },
            { label: 'Sóng nhỏ ↑ tín hiệu',     sig: 'up'   }
          ],
          keyCalls: [
            { tag: 'Iran–Mỹ', value: 'Suýt ký — theo dõi', signal: 'wait', note: 'Iran–Mỹ tiến rất gần ký kết. Nếu ký thật → dầu giảm → CK quốc tế hồi → tích cực gián tiếp cho VN.' },
            { tag: 'Fed',     value: 'Giữ nguyên LS',       signal: 'wait', note: 'Fed giữ nguyên như dự báo. Phát biểu hawkish hơn gây biến động ngắn nhưng không đổi xu hướng.' },
            { tag: 'Sóng nhỏ', value: 'CK, phân bón, BĐS', signal: 'up',   note: 'Nhóm sóng nhỏ (ngành chứng khoán, phân bón, BĐS) đang có tín hiệu phục hồi. Theo dõi xác nhận thêm.' }
          ],
          sections: [
            { title: 'Sự kiện tuần — Iran & Fed', signal: 'wait', sigLabel: 'Biến động nhưng VN theo logic riêng',
              para: 'Hai sự kiện lớn tuần qua: Iran–Mỹ gần ký hòa bình (cuối cùng ký 19/6) và cuộc họp Fed giữ nguyên lãi suất. Cả hai tạo biến động ngắn hạn nhưng TTCK VN vẫn theo logic nội tại của mình.',
              bullets: ['Iran–Mỹ ký 19/6 → dầu giảm → áp lực tỷ giá VN giảm → tích cực.', 'Fed giữ nguyên — đúng dự báo. Phát biểu hawkish là biến số cần theo dõi.', 'VN-Index tách biệt với CK quốc tế trong tuần — tín hiệu tốt về nội lực.'] },
            { title: 'Sóng nhỏ trong tuần', signal: 'up', sigLabel: 'Tín hiệu phục hồi nhóm nhỏ',
              para: 'Nhóm "sóng nhỏ" (cổ phiếu ngành chứng khoán, phân bón, BĐS nhà ở) đang xuất hiện tín hiệu phục hồi sau thời gian dài chán. Cần xác nhận thêm 1–2 tuần.',
              bullets: ['Ngành CK (VCI, MBS, SSI): tín hiệu khởi động sớm.', 'Phân bón (DCM, DPM): đang về vùng tích lũy.', 'BĐS nhà ở (NLG, DXG): tín hiệu mua ngắn hạn nhưng cần cẩn thận.'] }
          ]
        },
        {
          date: '2026-06-18', dateShort: '18/06', timeAgo: '4 ngày trước',
          tab: 'Video · 18/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'Lời Khuyên Cho Nhà Đầu Tư Rời Bỏ Phương Pháp Giữa Chừng',
          summary: 'Phân tích tâm lý nhà đầu tư hay thay đổi phương pháp giữa chừng khi gặp khó khăn. Không có phương pháp nào hoạt động 100% thời gian — bỏ đúng lúc khó nhất là sai lầm phổ biến nhất.',
          feedChips: [
            { label: 'Tâm lý ⚠ kiên định PP',   sig: 'warn' },
            { label: 'Kỷ luật ↑ then chốt',       sig: 'up'   }
          ],
          keyCalls: [
            { tag: 'Sai lầm phổ biến', value: 'Bỏ PP đúng lúc khó nhất', signal: 'warn', note: 'Nhà đầu tư thường bỏ phương pháp đúng vào lúc nó sắp bắt đầu hoạt động — vì khó khăn ngắn hạn che khuất triển vọng dài hạn.' },
            { tag: 'Kỷ luật', value: 'Yếu tố then chốt', signal: 'up', note: 'Không có phương pháp nào hoạt động 100% thời gian. Kỷ luật là thứ phân biệt nhà đầu tư thành công với không thành công.' }
          ],
          sections: [
            { title: 'Tại sao nhà đầu tư hay bỏ phương pháp?', signal: 'warn', sigLabel: 'Tâm lý — sai lầm cốt lõi',
              para: 'Phần lớn nhà đầu tư không thất bại vì phương pháp sai — mà vì không kiên trì đủ lâu để phương pháp phát huy tác dụng. Giai đoạn khó khăn là phép thử thực sự của hệ thống.',
              bullets: ['Mọi phương pháp đều có giai đoạn drawdown — không phải tín hiệu phải bỏ.', 'Bỏ phương pháp A để chạy sang B khi A khó là mất tiền hai lần.', 'Kỷ luật + thời gian là lợi thế cạnh tranh thực sự của nhà đầu tư cá nhân.'] }
          ]
        },
        {
          date: '2026-06-18', dateShort: '18/06', timeAgo: '4 ngày trước',
          tab: 'Video · 18/06', sourceType: 'public-video', typeLabel: 'Video công khai',
          title: 'VN-Index 18/06: Giai Đoạn Lan Truyền Sự Tiêu Cực',
          summary: 'VN-Index đang ở giai đoạn lan truyền sự tiêu cực — tâm lý xấu từ CK quốc tế (Fed hawkish, thị trường Mỹ chỉnh) lan sang nhà đầu tư VN dù cơ bản VN không đổi. Đây thường là giai đoạn tốt nhất để tích lũy.',
          feedChips: [
            { label: 'Tâm lý ↓ lan truyền',       sig: 'down' },
            { label: 'Cơ bản VN ◷ không đổi',    sig: 'wait' },
            { label: 'Tích lũy ↑ giai đoạn tốt',  sig: 'up'   }
          ],
          keyCalls: [
            { tag: 'Tâm lý', value: 'Lan truyền tiêu cực', signal: 'down', note: 'Fed hawkish + CK Mỹ chỉnh → tâm lý xấu lan sang VN. Nhưng cơ bản VN không thay đổi — đây là cơ hội, không phải rủi ro mới.' },
            { tag: 'Cơ bản VN', value: 'Không đổi', signal: 'wait', note: 'Tín dụng tăng tốc, lợi nhuận doanh nghiệp cải thiện, VN sắp lên EM. Cơ bản không đổi dù tâm lý xấu.' },
            { tag: 'Hành động', value: 'Tích lũy giai đoạn này', signal: 'up', note: 'Giai đoạn lan truyền tiêu cực thường là thời điểm tốt nhất để tích lũy cổ phiếu chất lượng.' }
          ],
          sections: [
            { title: 'Giai đoạn lan truyền tiêu cực', signal: 'down', sigLabel: 'Tâm lý xấu — cơ bản không đổi',
              para: 'Sau cuộc họp Fed hawkish và CK Mỹ chỉnh, tâm lý tiêu cực lan truyền sang thị trường VN. Đây là hiện tượng tâm lý điển hình — không phản ánh thay đổi cơ bản của thị trường VN.',
              bullets: ['Cơ bản VN vẫn tốt: tín dụng tăng, lợi nhuận DN H2 dự kiến tích cực.', 'Khối ngoại bán là kỹ thuật (EM rebalancing), không phải vì VN xấu.', 'Giai đoạn tâm lý xấu lan truyền thường kéo dài 1–2 tuần rồi qua.'] },
            { title: 'Cơ hội trong sự tiêu cực', signal: 'up', sigLabel: 'Tích lũy — cổ phiếu chất lượng giá tốt',
              para: 'Lịch sử cho thấy: giai đoạn lan truyền tiêu cực (khi mọi người sợ) là thời điểm tốt nhất để mua cổ phiếu chất lượng. Kiên trì theo phương pháp và tích lũy dần.',
              bullets: ['Bank tư nhân lớn: giá càng rẻ, tích lũy càng nhiều.', 'Không bán theo hoảng loạn.', 'Giai đoạn này sẽ qua — ai kiên nhẫn sẽ thắng.'] }
          ]
        },
        {
          date: '2026-06-17', dateShort: '17/06', timeAgo: '5 ngày trước',
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
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '21/06/2026',
          title: 'Vnindex 21/06: Tuần cuối tháng 6 kỳ vọng gì?', meta: 'Video công khai · Chứng khoán 5 phút' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '19/06/2026',
          title: 'Nhận định tuần: Suýt kết thúc chiến tranh và Fed họp — Đánh giá sóng CK nhỏ trong tuần', meta: 'Video công khai · Chứng khoán 5 phút' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '18/06/2026',
          title: 'Lời khuyên dành cho nhóm nhà đầu tư rời bỏ phương pháp giữa chừng', meta: 'Video công khai · Chứng khoán 5 phút' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '18/06/2026',
          title: 'Vnindex 18/06: Giai đoạn lan truyền sự tiêu cực', meta: 'Video công khai · Chứng khoán 5 phút' },
        { icon: '▶', iconBg: 'oklch(0.95 0.04 27)', iconColor: 'oklch(0.46 0.15 27)', date: '17/06/2026',
          title: '2 tin Fed họp và NHNN ra dự thảo nới trần vốn cho vay tác động đến thị trường như thế nào?', meta: 'Video công khai · Chứng khoán 5 phút' }
      ]
    }

  } // end experts
}; // end HDT_DATA
