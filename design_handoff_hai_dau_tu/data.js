// ─────────────────────────────────────────────────────────────────────────────
// HDT DATA — Hải Đầu Tư cùng các Chuyên Gia
// QUY TẮC: giữ 7 bài GẦN NHẤT mỗi kênh. Thêm bài mới = prepend vào experts[id].updates
//          rồi cắt còn 7. Riêng THÁI PHẠM ưu tiên bài HỘI VIÊN (member-video/member-post)
//          — giữ bài mới nhất + các bài hội viên gần nhất.
// ─────────────────────────────────────────────────────────────────────────────
window.HDT_DATA = {
  "lastUpdated": "09/07/2026 · Mới nhất",
  "pulse": [
    {
      "name": "CK Việt",
      "mark": "↑ Tăng 70%",
      "sig": "up"
    },
    {
      "name": "CK Mỹ",
      "mark": "↓ Chỉnh T7",
      "sig": "down"
    },
    {
      "name": "Vàng",
      "mark": "✓ Mua được",
      "sig": "up"
    },
    {
      "name": "Dầu",
      "mark": "↓ Về 70–80",
      "sig": "down"
    },
    {
      "name": "Bitcoin",
      "mark": "↓ Short 68–70k",
      "sig": "down"
    },
    {
      "name": "Tỷ giá",
      "mark": "⚠ Dễ thở hơn",
      "sig": "warn"
    },
    {
      "name": "BĐS",
      "mark": "— Đứng ngoài",
      "sig": "wait"
    }
  ],
  "assetCards": [
    {
      "name": "Chứng khoán Mỹ",
      "sig": "down",
      "sigLabel": "Giảm",
      "date": "17/06",
      "expertId": "thai-pham",
      "summary": "SpaceX IPO chỉ bán 4,2% float để thổi định giá ~2.660 tỷ USD (Morningstar ~780 tỷ). P/S >100x, lỗ nặng — định giá ảo. Rủi ro lớn 15/7 khi ~911 triệu cp insider được bán; tài sản Elon ~100% trên giấy.",
      "levels": "Nasdaq short 29.600 · thêm 31.000 · cắt lỗ 32.500",
      "altViews": [
        {
          "expertId": "azfin",
          "sig": "down",
          "sigLabel": "Gần bong bóng 2000",
          "note": "CAPE gần mức dotcom. Buffett indicator ~300% GDP. Buffett giữ ~$400 tỷ tiền lỏng — kỷ lục."
        }
      ]
    },
    {
      "name": "Chứng khoán Việt Nam",
      "sig": "wait",
      "sigLabel": "Tích cực",
      "date": "16/06",
      "expertId": "thai-pham",
      "summary": "Nâng tỷ trọng cổ phiếu từ 50% lên 70%. Bank tích nền ổn, TCX/CK có tín hiệu sức sống đầu tiên. Đạm/phân sắp về vùng mua. CK quốc tế chỉnh không ảnh hưởng chợ huyện.",
      "levels": "Tiền/Hàng: 30/70 · Mua: bank + TCX · Chờ: DCM/DPM · Giữ: SCS",
      "altViews": [
        {
          "expertId": "azfin",
          "sig": "up",
          "sigLabel": "3 ngành 5 năm",
          "note": "Giữ 5 năm: ngân hàng (tăng 15–20%/năm, định giá rẻ), vật liệu xây dựng (đầu tư công), bán lẻ (bùng nổ tiêu dùng). Mua khi định giá rất rẻ."
        },
        {
          "expertId": "ck-5-phut",
          "sig": "up",
          "sigLabel": "Tuần tích cực",
          "note": "NHNN dự thảo nới trần vốn 40% → ngân hàng thêm dư địa cho vay. Tuần tích cực nhưng chưa có xu hướng mới — giữ tỷ trọng, hạn chế đảo hàng."
        }
      ]
    },
    {
      "name": "Vàng",
      "sig": "wait",
      "sigLabel": "Mua được",
      "date": "13/06",
      "expertId": "thai-pham",
      "summary": "Vùng $4.200 mua được nếu đã bán cao trước. Iran ký 19/6 → vàng tăng ngắn hạn. Dài hạn còn 1 chân rủi ro về ~$3.300. Chênh trong nước 13–14tr/lượng.",
      "levels": "Mua lại phần đã bán · chênh mục tiêu ≤ 7tr · rủi ro: ~$3.300",
      "altViews": []
    },
    {
      "name": "Dầu",
      "sig": "down",
      "sigLabel": "Giảm",
      "date": "15/06",
      "expertId": "thai-pham",
      "summary": "Iran–Mỹ ký hòa bình 19/6 tại Thụy Sĩ — đúng kỳ vọng dầu giảm. Dù có hay không có thỏa thuận thì dầu cũng về vùng 77–80 do giảm tổng cầu toàn cầu. Tích cực cho tỷ giá VND.",
      "levels": "Dầu Brent mục tiêu: 77–80 USD · xác nhận thesis",
      "altViews": []
    },
    {
      "name": "Bitcoin & Crypto",
      "sig": "down",
      "sigLabel": "Giảm",
      "date": "13/06",
      "expertId": "thai-pham",
      "summary": "Vẫn downtrend từ đỉnh 125k. Hòa bình Iran không thay đổi cấu trúc kỹ thuật. Chờ hồi kỹ thuật lên 68–70k để short lại, mục tiêu về ~42k (chân 5 Elliott). Clarity Act 4/7 — BTC thành mã CK thường.",
      "levels": "Short: 68.000–70.000 · mục tiêu: ~42.000 · Clarity Act: 4/7",
      "altViews": []
    },
    {
      "name": "Tỷ giá & Vĩ mô VN",
      "sig": "warn",
      "sigLabel": "Dễ thở hơn",
      "date": "15/06",
      "expertId": "thai-pham",
      "summary": "Dầu giảm → lạm phát nhập khẩu giảm → áp lực tỷ giá VND bớt dần. Section 301 vẫn hiệu lực T7 nhưng môi trường vĩ mô bắt đầu cải thiện. Fed 67% khả năng tăng lãi T7/T9.",
      "levels": "USD/VND theo dõi · Fed 67% tăng lãi · dầu 70–80 tích cực cho VN",
      "altViews": []
    },
    {
      "name": "Bất động sản",
      "sig": "warn",
      "sigLabel": "Thận trọng",
      "date": "14/06",
      "expertId": "azfin",
      "summary": "Cổ phiếu BĐS đang rất rẻ — cơ hội >> rủi ro theo góc nhìn giá trị. HDG định giá rất rẻ dù vướng pháp lý HDG-EVN. Tránh nhóm có rủi ro pháp lý phức tạp.",
      "levels": "HDG: rất rẻ (chờ pháp lý) · NVL: chờ 11–12 · tránh: BĐS pháp lý xấu",
      "altViews": [
        {
          "expertId": "thai-pham",
          "sig": "wait",
          "sigLabel": "Đứng ngoài",
          "note": "Đã thoát toàn bộ vị thế cổ phiếu BĐS. NVL chờ về 11–12 mới tính mua lại."
        }
      ]
    }
  ],
  "news": [
    {
      "date": "2026-06-17",
      "dateShort": "17/06",
      "source": "Tài chính & Kinh doanh",
      "sourceType": "Video tin tức",
      "title": "Thị trường thứ cấp đồng loạt cắt lỗ — chung cư Hà Nội đảo chiều",
      "impact": "warn",
      "impactLabel": "Tiêu cực ngắn hạn — lợi cho người mua ở thực",
      "summary": "Chung cư Hà Nội phân hóa: giá sơ cấp tiếp tục leo thang nhưng nhiều căn thứ cấp phải cắt lỗ để tìm thanh khoản. Đầu tư lướt sóng nhường chỗ cho nhu cầu ở thực và tích sản dài hạn. Thị trường đảo chiều cả giá lẫn thanh khoản — \"buyer market\".",
      "points": [
        "Áp lực chính: lãi vay duy trì cao từ Q4/2025 + thanh khoản yếu + sức ép giá dầu/Trung Đông (dầu ~80 USD vẫn cao hơn 63–65 USD năm ngoái).",
        "Tín dụng năm nay bị khống chế; bất động sản, đặc biệt BĐS thương mại, bị siết mạnh.",
        "Tác động thị trường: tiêu cực ngắn hạn cho nhóm đầu cơ & cổ phiếu BĐS; cơ hội cho người mua ở thực được quyền mặc cả."
      ]
    },
    {
      "date": "2026-06-17",
      "dateShort": "17/06",
      "source": "VTV Index",
      "sourceType": "Video tin tức",
      "title": "Hành trình trao vàng — lộ diện chủ nhân giải tiết kiệm dự thưởng",
      "impact": "wait",
      "impactLabel": "Ít tác động thị trường — tin chương trình tiết kiệm",
      "summary": "Bản tin về một chương trình tiết kiệm dự thưởng trao hàng trăm giải vàng (giải đặc biệt 10 lượng vàng SJC). Nội dung mang tính PR sản phẩm tiết kiệm, định vị gửi tiết kiệm như giải pháp tài chính an toàn.",
      "points": [
        "Chủ yếu là tin truyền thông/PR chương trình, không phải nhận định đầu tư.",
        "Phản ánh xu hướng kênh tiết kiệm & vàng vẫn hấp dẫn trong môi trường lãi suất cao và bất ổn.",
        "Tác động trực tiếp tới thị trường chứng khoán: không đáng kể."
      ]
    }
  ],
  "experts": {
    "thai-pham": {
      "initials": "TP",
      "name": "Thái Phạm",
      "avatarSrc": "/avatars/thai-pham.jpg",
      "bio": "Nhận định vĩ mô – địa chính trị và hành động danh mục theo tuần: chứng khoán Mỹ, chứng khoán Việt Nam, vàng bạc, dầu và crypto.",
      "sourceLabel": "YouTube hội viên · Post cộng đồng",
      "sourceChips": [
        "▶ YouTube hội viên",
        "✎ Post cộng đồng",
        "Tần suất: hàng tuần"
      ],
      "gauge": {
        "title": "Tỷ lệ tiền – hàng khuyến nghị (VN)",
        "badge": "Tích cực",
        "badgeBg": "oklch(0.95 0.04 150)",
        "badgeColor": "oklch(0.42 0.1 150)",
        "bar1": 30,
        "bar2": 70,
        "label1": "Tiền mặt 30%",
        "label2": "Cổ phiếu 70%"
      },
      "updates": [
        {
          "date": "2026-07-09",
          "dateShort": "09/07",
          "timeAgo": "Hôm nay",
          "tab": "Video · 09/07",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Ông Trump Tuyên Bố Đánh Iran Tiếp Tục — Cú Sốc Địa Chính Trị & Ảnh Hưởng Thị Trường",
          "summary": "Thỏa thuận hòa bình Iran đổ vỡ: Iran vi phạm ngừng bắn (tấn công 3 tàu ở eo biển Hormuz), Mỹ dội bom 2 đợt (80+ mục tiêu). Giá dầu WTI tăng ~8% lên 80,59, có thể lên 87–90 nếu leo thang. \"Buy the dip\" của trader Mỹ thất bại; lạm phát dai dẳng (dầu + hạ tầng AI + Apple tăng giá 20–60%) → Fed khả năng tăng lãi 1 lần hoặc giữ lãi cao đến giữa 2027. AI/semiconductor Mỹ, Hàn, Nhật sẽ điều chỉnh suốt Q3. Vàng 60% về ~3.000. VN đi ngang nhưng nhiều cổ phiếu đã tạo đáy — cơ hội ngắn hạn cho nhóm giảm sâu 50–60%.",
          "feedChips": [
            {
              "label": "Dầu ↑ tăng 8% → 87–90",
              "sig": "up"
            },
            {
              "label": "CK Mỹ/AI ↓ chỉnh Q3",
              "sig": "down"
            },
            {
              "label": "Fed ⚠ lãi cao lâu hơn",
              "sig": "warn"
            },
            {
              "label": "CK Việt ◷ đã tạo đáy",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "Địa chính trị",
              "value": "Iran tái chiến",
              "signal": "down",
              "note": "Iran vi phạm ngừng bắn (tấn công 3 tàu ở Hormuz), Mỹ dội bom 2 đợt 80+ mục tiêu. Thỏa thuận 60 ngày đổ vỡ — sẽ đánh nhau lắt nhắt kéo dài như Nga–Ukraine."
            },
            {
              "tag": "Giá dầu",
              "value": "Tăng 8% → 87–90",
              "signal": "up",
              "note": "WTI tăng ~8% lên 80,59. Vùng tái cân bằng 70–87; nếu leo thang có thể lên ~90. Giới tài phiệt dầu + Petrodollar không để giá xuống thấp."
            },
            {
              "tag": "Fed / Lạm phát",
              "value": "Lãi cao lâu hơn",
              "signal": "warn",
              "note": "Lạm phát dai dẳng (dầu + điện/hạ tầng AI + Apple tăng giá iPhone 18/MacBook 20–60%). BofA dự lợi suất TP 10 năm chạm 4,82%. Nghiêng: tăng lãi 1 lần (~40%) hoặc giữ lãi cao đến giữa 2027."
            },
            {
              "tag": "CK Việt",
              "value": "Nhiều cổ phiếu đã tạo đáy",
              "signal": "wait",
              "note": "Index đi ngang, đa phần cổ phiếu đã giảm 50–60% từ đỉnh và tạo đáy. Cơ hội ngắn hạn cho nhóm nằm đáy sâu; thanh khoản thấp (mùa đông). Không cầm cổ trụ đã kéo cao thì không cần lo."
            }
          ],
          "sections": [
            {
              "title": "Cú sốc địa chính trị & Giá dầu",
              "signal": "up",
              "sigLabel": "Dầu tăng mạnh — rủi ro tái chiến",
              "para": "Sau thượng đỉnh NATO, Trump tuyên bố thỏa thuận ngừng bắn với Iran đã chấm dứt. Nguồn cơn: Iran vi phạm ngừng bắn, dùng tên lửa/drone tấn công 3 tàu thương mại (Qatar, Ả Rập Saudi, Liberia) ở eo biển Hormuz; Mỹ đáp trả bằng 2 đợt không kích hơn 80 mục tiêu. Đây là cú sốc thật, không phải đòn gió — thỏa thuận 60 ngày sẽ đổ vỡ, đánh nhau lắt nhắt kéo dài.",
              "bullets": [
                "Giá dầu WTI tăng ~8% lên 80,59; hôm nay giảm nhẹ 1% — vùng tái cân bằng.",
                "Nếu leo thang, dầu có thể hồi lên ~87–90; dao động dài hạn 70–87.",
                "Mấu chốt là lợi ích: Petrodollar mạnh thì USD mạnh — thế lực đứng sau không để dầu rẻ."
              ]
            },
            {
              "title": "Fed, Lạm phát & Chứng khoán Mỹ",
              "signal": "down",
              "sigLabel": "Điều chỉnh — lạm phát dai dẳng",
              "para": "\"Buy the dip\" của trader Mỹ đã thất bại — tin xấu không còn là tin tốt. Dầu tăng xóa sạch thành quả giảm 2 tuần, đồng thời khẳng định lạm phát dai dẳng: ngoài năng lượng còn nhu cầu điện/hạ tầng AI (Apple tăng giá iPhone 18/MacBook/iPad 20–60%). FOMC chia rẽ về lãi suất dưới thời Kevin Warsh.",
              "bullets": [
                "Bank of America: lợi suất TP Mỹ 10 năm có thể chạm 4,82% — hàm ý 2 đợt tăng lãi.",
                "Thái Phạm nghiêng: tăng lãi 1 lần 2026 (~40%) hoặc giữ lãi cao đến giữa 2027 / hết nhiệm kỳ Trump.",
                "AI/semiconductor (Intel, SanDisk, MU, chỉ số SOX) điều chỉnh xuyên suốt Q3; Nvidia/Apple kéo trụ nhưng cũng phải chỉnh.",
                "Hàn Quốc (Kospi), Nhật (Nikkei) margin cao kỷ lục — hồi kỹ thuật vài ngày rồi giảm; BOJ phải tăng lãi (PPI >6%)."
              ]
            },
            {
              "title": "Vàng, Bitcoin & Chứng khoán Việt Nam",
              "signal": "wait",
              "sigLabel": "VN đã tạo đáy — cơ hội ngắn hạn",
              "para": "Vàng tích lũy, xác suất hồi lên 4.300 còn ~40%, 60% về lại ~3.000. Bitcoin hình thành \"banana\" lần ba, chịu áp lực Strategy (Michael Saylor) bán BTC trả cổ tức — chỉ còn là một mã CK. VN chịu ảnh hưởng tâm lý nhưng đa phần cổ phiếu đã tạo đáy sau khi giảm rất sâu, đã quen \"mùa lãi suất cao\" — có thể là cơ hội ngắn hạn ngược dòng.",
              "levels": "Vàng: 40% hồi 4.300 / 60% về ~3.000 · BTC: banana lần 3, áp lực bán · VN: cổ phiếu đáy sâu −50–60%, thanh khoản thấp"
            }
          ]
        },
        {
          "date": "2026-07-04",
          "dateShort": "04/07",
          "timeAgo": "5 ngày trước",
          "tab": "Tập 36 · Tuần 27",
          "sourceType": "member-video",
          "typeLabel": "Video hội viên · Tập 36",
          "title": "Tập 36 (Hội Viên): Vàng, Bitcoin, Chứng Khoán Tuần 27 — Tỉ Lệ Tiền Và Hàng?",
          "summary": "Tuần đầu H2/2026. SpaceX vào rổ Nasdaq 100 ngày 7/7 → về vùng 100 (giữ short). Sóng bán dẫn tạm dừng, AI biến động mạnh do đòn bẩy lớn — Nvidia có thể về 163–172 (Meta bán bớt compute, data center dư công suất). Vàng hồi kỹ thuật, canh long khi test 4.000; Bitcoin banana lần 3, short limit 68–70k, dài hạn về 47–50k. CK Việt \"mùa đông\": giữ 80% cổ phiếu / 20% tiền, tập trung ngân hàng + chứng khoán, phân bón (DCM). Tránh PNJ (rủi ro pháp lý kim cương).",
          "tradeLevels": [
            {
              "group": "Vàng & Bạc",
              "items": [
                {
                  "asset": "Vàng",
                  "dir": "Long",
                  "entry": "Canh long khi test 4.000–4.085",
                  "target": "4.350",
                  "stop": "Rủi ro về ~3.000",
                  "sig": "up"
                },
                {
                  "asset": "Bạc",
                  "dir": "Chờ mua",
                  "entry": "Đợi về ~60",
                  "target": "",
                  "stop": "Nếu Fed tăng lãi về 48–50",
                  "sig": "wait"
                }
              ]
            },
            {
              "group": "Bitcoin & Crypto",
              "items": [
                {
                  "asset": "Bitcoin",
                  "dir": "Short",
                  "entry": "Limit 68–71k",
                  "target": "Dài hạn 47–50k (cực đoan 28–32k)",
                  "stop": "",
                  "sig": "down"
                }
              ]
            },
            {
              "group": "Chứng khoán Mỹ",
              "items": [
                {
                  "asset": "Nasdaq",
                  "dir": "Short",
                  "entry": "Giữ short",
                  "target": "",
                  "stop": "Cắt lỗ 31.300–32.000",
                  "sig": "down"
                },
                {
                  "asset": "S&P 500",
                  "dir": "Short",
                  "entry": "Giữ short",
                  "target": "",
                  "stop": "Cắt lỗ nếu vượt 7.000–7.007",
                  "sig": "down"
                },
                {
                  "asset": "Dow (US30)",
                  "dir": "Short",
                  "entry": "Mua short vùng này",
                  "target": "Về 24.000–24.500",
                  "stop": "",
                  "sig": "down"
                },
                {
                  "asset": "VIX",
                  "dir": "Long",
                  "entry": "15–16",
                  "target": "",
                  "stop": "",
                  "sig": "up"
                },
                {
                  "asset": "SpaceX",
                  "dir": "Short",
                  "entry": "Giữ (đã vào ~200)",
                  "target": "Về 100–110",
                  "stop": "",
                  "sig": "down"
                },
                {
                  "asset": "Apple",
                  "dir": "Short",
                  "entry": "325–330",
                  "target": "",
                  "stop": "Cắt lỗ 360",
                  "sig": "down"
                },
                {
                  "asset": "Nvidia",
                  "dir": "Tránh",
                  "entry": "Chờ về 163",
                  "target": "",
                  "stop": "",
                  "sig": "down"
                },
                {
                  "asset": "Netflix",
                  "dir": "Mua",
                  "entry": "74–75",
                  "target": "",
                  "stop": "",
                  "sig": "up"
                },
                {
                  "asset": "Google",
                  "dir": "Mua DH",
                  "entry": "300–314",
                  "target": "",
                  "stop": "",
                  "sig": "up"
                }
              ]
            },
            {
              "group": "Nhật & Hàn",
              "items": [
                {
                  "asset": "Nikkei",
                  "dir": "Short",
                  "entry": "Giữ short",
                  "target": "",
                  "stop": "Cắt lỗ 74.000",
                  "sig": "down"
                },
                {
                  "asset": "Kospi",
                  "dir": "Short",
                  "entry": "Từ ~800",
                  "target": "Test 4.600",
                  "stop": "",
                  "sig": "down"
                },
                {
                  "asset": "Samsung",
                  "dir": "Tránh",
                  "entry": "Đừng mua vùng này",
                  "target": "",
                  "stop": "",
                  "sig": "down"
                }
              ]
            },
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "VCB",
                  "dir": "Giữ",
                  "entry": "Cầm chặt",
                  "target": "",
                  "stop": "",
                  "sig": "wait"
                },
                {
                  "asset": "BID",
                  "dir": "Giữ",
                  "entry": "Cầm chặt",
                  "target": "",
                  "stop": "",
                  "sig": "wait"
                },
                {
                  "asset": "CTG",
                  "dir": "Giữ",
                  "entry": "Cầm",
                  "target": "",
                  "stop": "",
                  "sig": "wait"
                },
                {
                  "asset": "HDB",
                  "dir": "Giữ",
                  "entry": "Cầm — HD Sec sắp lên sàn",
                  "target": "",
                  "stop": "",
                  "sig": "wait"
                },
                {
                  "asset": "BVB",
                  "dir": "Giữ",
                  "entry": "Cầm — sắp limit HOSE",
                  "target": "",
                  "stop": "",
                  "sig": "wait"
                },
                {
                  "asset": "TCX",
                  "dir": "Mua",
                  "entry": "40–41",
                  "target": "VN30 T3/2027",
                  "stop": "",
                  "sig": "up"
                },
                {
                  "asset": "VCI",
                  "dir": "Mua",
                  "entry": "Lướt sóng 8–10%",
                  "target": "",
                  "stop": "",
                  "sig": "up"
                },
                {
                  "asset": "VNM",
                  "dir": "Mua",
                  "entry": "~60",
                  "target": "",
                  "stop": "Cắt lỗ nếu về 50",
                  "sig": "up"
                },
                {
                  "asset": "DCM",
                  "dir": "Mua",
                  "entry": "Vùng giá trị",
                  "target": "Cầm 8 tháng",
                  "stop": "",
                  "sig": "up"
                },
                {
                  "asset": "HPG",
                  "dir": "Mua",
                  "entry": "Giải ngân 1/3",
                  "target": "",
                  "stop": "",
                  "sig": "up"
                },
                {
                  "asset": "SCS",
                  "dir": "Giữ",
                  "entry": "Nắm dài hạn",
                  "target": "",
                  "stop": "",
                  "sig": "wait"
                },
                {
                  "asset": "HVN",
                  "dir": "Chỉ lướt",
                  "entry": "~27–28",
                  "target": "",
                  "stop": "Không đầu tư dài hạn",
                  "sig": "wait"
                },
                {
                  "asset": "SSI",
                  "dir": "Chờ",
                  "entry": "Vùng 27 vẫn đắt",
                  "target": "",
                  "stop": "",
                  "sig": "wait"
                },
                {
                  "asset": "PNJ",
                  "dir": "Tránh",
                  "entry": "Rủi ro pháp lý",
                  "target": "Có thể về 44",
                  "stop": "",
                  "sig": "down"
                }
              ]
            }
          ],
          "feedChips": [
            {
              "label": "SpaceX ↓ về vùng 100",
              "sig": "down"
            },
            {
              "label": "AI ↓ bán dẫn tạm dừng",
              "sig": "down"
            },
            {
              "label": "Vàng ◷ hồi về 4.000",
              "sig": "wait"
            },
            {
              "label": "CK Việt ↑ giữ 80% cổ phiếu",
              "sig": "up"
            }
          ],
          "keyCalls": [
            {
              "tag": "SpaceX",
              "value": "Về vùng 100 · giữ short",
              "signal": "down",
              "note": "Vào rổ Nasdaq 100 ngày 7/7 với định giá vô lý → quỹ kẹp hàng. Giữ short (đã ăn từ 200), về 100–110 và neo ở đó ~6 tháng."
            },
            {
              "tag": "Nvidia",
              "value": "Đừng đụng · về 163–172",
              "signal": "down",
              "note": "Meta bán bớt compute (hạ tầng AI cloud) → data center dư công suất → nhu cầu chip GPU/RAM chậm lại. TQ/Hồng Kông xuất chip thay thế. Muốn mua đợi vùng 163."
            },
            {
              "tag": "Vàng",
              "value": "Canh long khi test 4.000",
              "signal": "wait",
              "note": "Hồi phục kỹ thuật về vùng bình quân 4.000; Fed khó tăng lãi (nonfarm kém). Long khi test 4.000–4.085, mục tiêu ~4.350. Không long vùng hiện tại. Dài hạn vẫn cửa về ~3.000."
            },
            {
              "tag": "CK Việt",
              "value": "Giữ 80% cổ phiếu",
              "signal": "up",
              "note": "Tỉ lệ hội viên 80/20, tập trung ngân hàng (45–50% danh mục) và chứng khoán (20–25%). Mùa đông — đánh chắc, cơ hội 8–10% ăn nhanh, nắm dài chờ \"gió đông\" giữa 2027."
            }
          ],
          "sections": [
            {
              "title": "Chứng khoán Mỹ — Bán dẫn tạm dừng, AI rung lắc",
              "signal": "down",
              "sigLabel": "Giảm/rung lắc — chờ vùng thấp",
              "para": "Dow vẫn lập đỉnh nhưng chỉ nhờ kéo Apple, thiếu thuyết phục; Nasdaq và S&P giảm mạnh phiên cuối tuần khi dòng tiền chốt lời nhóm bán dẫn. Đòn bẩy toàn thị trường quá lớn nên AI biến động cực mạnh — Trump hò hét mua Micron ở vùng cao (giống lùa Bitcoin 10/2025). Nghiêng kịch bản Dow về 24.000–24.500 và S&P về ~7.050 để tích lũy, mở cơ hội mua giai đoạn sau.",
              "bullets": [
                "Micron (MU): nghiêng điều chỉnh giảm ~46% bất chấp tin hô hào.",
                "SpaceX vào Nasdaq 100 ngày 7/7 → về vùng 100–110, neo ~6 tháng (giữ short).",
                "Nvidia: đừng đụng, về 163–172 — data center dư công suất, TQ/HK xuất chip thay thế.",
                "Apple: điều chỉnh tuần tới; iPhone gập >2.000 USD khó kích cầu. Short 325–330, cắt lỗ 360; không mua dài hạn.",
                "Google: EU phạt 4,1 tỷ EUR vụ Android — muốn mua dài hạn đợi 300–314. Netflix mua vùng 74–75. Adidas sắp chốt lời 190–200.",
                "Bài học short: vị thế vừa phải, không margin lớn; không short đuổi theo cú kéo hồi."
              ]
            },
            {
              "title": "Vàng, Bạc & Bitcoin",
              "signal": "wait",
              "sigLabel": "Hồi kỹ thuật — kiên nhẫn chờ vùng",
              "para": "Vàng giảm sâu nên có hồi phục kỹ thuật; theo đồ thị tuần về vùng bình quân ~4.000. Fed khó tăng lãi năm nay (nonfarm payroll kém) nên thị trường kỳ vọng vàng hồi. Bitcoin đang ở \"banana chuối\" lần ba — chỉ còn là một mã ăn theo USD.",
              "levels": "Vàng: long khi test 4.000–4.085 → mục tiêu ~4.350 (dài hạn vẫn cửa ~3.000) · Bạc: mua khi về ~60 · BTC: short limit 68–70k, dài hạn 47–50k (chu kỳ 4 năm có thể 28–32k)"
            },
            {
              "title": "Chứng khoán Việt Nam — Mùa đông, giữ 80% cổ phiếu",
              "signal": "up",
              "sigLabel": "Cầm chắc — ngân hàng + chứng khoán",
              "para": "Áp lực tỷ giá và nước ngoài bán ròng, kiều hối bù đắp phần nào. Lãi suất VND cao → không có dòng tiền đầu cơ, phải đánh chắc: cơ hội 8–10% ăn nhanh, còn lại nắm dài chờ \"gió đông\" (giữa 2027, dẫn dắt bởi ngân hàng và chứng khoán). Chỉ số tháng 7 có thể bị VIC/VHM đè về 1.750–1.763, thậm chí 1.573 — nhưng đừng để chỉ số ép bán hàng của mình."
            }
          ]
        },
        {
          "date": "2026-06-20",
          "dateShort": "20/06",
          "timeAgo": "2 ngày trước",
          "tab": "Tập 33 · Tuần 25",
          "sourceType": "member-video",
          "typeLabel": "Video hội viên · Tập 33",
          "title": "Tập 33 (Hội Viên): Vàng, Bitcoin, Chứng Khoán Tuần 25 — Các Vấn Đề Cần Lưu Ý",
          "summary": "Danh mục hội viên giữ 70% cổ phiếu / 30% tiền. Dầu neo cao đến hết T10 (thiên long nhẹ, không short). Fed có thể tăng lãi T9 (67%) do lạm phát chip → AI/SpaceX/Intel sẽ chỉnh. Vàng gãy nặng, nếu Fed tăng lãi về ~3.000; Bitcoin chờ short 69–71k, dài hạn về 47–50k. CK Việt: kẹt thanh khoản (LDR 115%) — giữ bank trụ, TCX, phân bón (DCM/DPM), SCS, VNM.",
          "tradeLevels": [
            {
              "group": "Dầu",
              "items": [
                {
                  "asset": "Dầu",
                  "dir": "Long nhẹ",
                  "entry": "Vùng này (không short)",
                  "target": "Có thể test 90",
                  "stop": "",
                  "sig": "up"
                }
              ]
            },
            {
              "group": "Vàng & Bạc",
              "items": [
                {
                  "asset": "Vàng",
                  "dir": "Chờ",
                  "entry": "Tích lũy lại",
                  "target": "",
                  "stop": "Nếu Fed tăng lãi về ~3.000",
                  "sig": "wait"
                },
                {
                  "asset": "Bạc",
                  "dir": "Chờ",
                  "entry": "",
                  "target": "",
                  "stop": "Nếu tăng lãi về 48–50 (−20%)",
                  "sig": "wait"
                }
              ]
            },
            {
              "group": "Bitcoin & Crypto",
              "items": [
                {
                  "asset": "Bitcoin",
                  "dir": "Short",
                  "entry": "69–71k (đỉnh đám mây)",
                  "target": "Dài hạn 47–50k (cực đoan 30k)",
                  "stop": "",
                  "sig": "down"
                }
              ]
            },
            {
              "group": "Chứng khoán Mỹ",
              "items": [
                {
                  "asset": "SpaceX",
                  "dir": "Short",
                  "entry": "Giữ short",
                  "target": "Về ~100",
                  "stop": "",
                  "sig": "down"
                },
                {
                  "asset": "Apple",
                  "dir": "Tránh",
                  "entry": "Có thể test 250",
                  "target": "",
                  "stop": "",
                  "sig": "down"
                },
                {
                  "asset": "Google",
                  "dir": "Mua",
                  "entry": "Test lại 335–340",
                  "target": "",
                  "stop": "",
                  "sig": "up"
                },
                {
                  "asset": "Intel",
                  "dir": "Tránh",
                  "entry": "Up & ra hàng",
                  "target": "",
                  "stop": "",
                  "sig": "down"
                },
                {
                  "asset": "Nvidia",
                  "dir": "Giữ",
                  "entry": "Giữ là hay",
                  "target": "",
                  "stop": "",
                  "sig": "wait"
                }
              ]
            },
            {
              "group": "Nhật & Hàn",
              "items": [
                {
                  "asset": "Samsung",
                  "dir": "Tránh",
                  "entry": "Đừng mua — hận ngàn thu",
                  "target": "",
                  "stop": "",
                  "sig": "down"
                }
              ]
            },
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "TCX",
                  "dir": "Mua",
                  "entry": "40–41",
                  "target": "VN30 T1/2027",
                  "stop": "",
                  "sig": "up"
                },
                {
                  "asset": "DCM",
                  "dir": "Mua",
                  "entry": "Giữ 3/4 vị thế, tăng 1/4",
                  "target": "Cuối năm",
                  "stop": "",
                  "sig": "up"
                },
                {
                  "asset": "VNM",
                  "dir": "Mua",
                  "entry": "~60",
                  "target": "",
                  "stop": "Cắt lỗ nếu về 50",
                  "sig": "up"
                },
                {
                  "asset": "VCB",
                  "dir": "Giữ",
                  "entry": "Nắm 57–61 dài hạn",
                  "target": "",
                  "stop": "",
                  "sig": "wait"
                },
                {
                  "asset": "SCS",
                  "dir": "Giữ",
                  "entry": "Cầm 2–3 năm",
                  "target": "",
                  "stop": "",
                  "sig": "wait"
                },
                {
                  "asset": "SSI",
                  "dir": "Chờ",
                  "entry": "Vùng 27 vẫn đắt",
                  "target": "",
                  "stop": "",
                  "sig": "wait"
                }
              ]
            }
          ],
          "feedChips": [
            {
              "label": "Danh mục ↑ 70% cổ phiếu",
              "sig": "up"
            },
            {
              "label": "Vàng ↓ về ~3.000 nếu tăng lãi",
              "sig": "down"
            },
            {
              "label": "BTC ↓ short 69–71k",
              "sig": "down"
            },
            {
              "label": "AI ↓ SpaceX/Intel chỉnh",
              "sig": "down"
            }
          ],
          "keyCalls": [
            {
              "tag": "Danh mục VN",
              "value": "70% cổ phiếu / 30% tiền",
              "signal": "up",
              "note": "Giữ tỷ trọng 70/30. Tuần này tăng thêm 1/4 vị thế phân bón (đang giữ 3/4 DCM/DPM), mua mới VNM."
            },
            {
              "tag": "Vàng",
              "value": "Về ~3.000 nếu Fed tăng lãi",
              "signal": "down",
              "note": "Vàng gãy chen nặng, tích lũy lại. Chênh trong nước cao ~11 triệu/lượng — mua dần hàng uy tín được, vùng 180–190 nên chốt."
            },
            {
              "tag": "Bitcoin",
              "value": "Short 69–71k · DH về 47–50k",
              "signal": "down",
              "note": "Chưa phải năm của BTC. Đặt mốc short 69–71k (đỉnh đám mây), không short lưng chừng. Dài hạn về 50k, kịch bản cực đoan 30k."
            },
            {
              "tag": "CK Mỹ",
              "value": "AI/SpaceX/Intel chỉnh",
              "signal": "down",
              "note": "S&P +20%/Nasdaq +34% từ đáy, margin kỷ lục. SpaceX về ~100, Intel là cú \"mua tay trái bán tay phải\". Apple có thể test 250."
            }
          ],
          "sections": [
            {
              "title": "Địa chính trị & Giá dầu",
              "signal": "wait",
              "sigLabel": "Neo cao đến hết T10 — long nhẹ, không short",
              "para": "Trump ký MU đình chiến 60 ngày với Iran tại G7 → dầu điều chỉnh về 76–80. Nhưng 20/6 IRGC lại đóng eo biển Hormuz (Israel tiếp tục tấn công Nam Liban); đàm phán chuyển sang Ai Cập 21/6 (trung gian Pakistan/Saudi/Turkey). Dự trữ chiến lược thiếu → khó để dầu giảm sâu về 65; kịch bản có thể test 90.",
              "bullets": [
                "Israel mới là bên chi phối — chính phủ Mỹ nhiệm kỳ này khá yếu thế.",
                "Thiên về mua/long nhẹ vùng này, short dầu rất nguy hiểm.",
                "Vùng giá trị neo đến khoảng hết tháng 10."
              ]
            },
            {
              "title": "Vĩ mô Fed & Chứng khoán Mỹ",
              "signal": "down",
              "sigLabel": "Diều hâu — tăng lãi T9 ~67%",
              "para": "Kevin Warsh nhấn mạnh ổn định giá cả 12 lần, bỏ forward guidance — \"găng tay nhung bọc nắm đấm thép\". Lợi suất TP Mỹ 2 năm tăng vọt, 10 năm 4,45%. Lạm phát chip/bộ nhớ (Apple tăng giá iPhone) giữ PCE cao → xác suất tăng lãi T9 ~67%. Nếu tăng lãi, S&P test lại đỉnh cũ tháng 1, AI phải trả giá.",
              "bullets": [
                "SpaceX 218→170, đáng giá <135, nhiều người cược về 100 — hình 3 đỉnh ra hàng.",
                "Intel: cớ \"cung chip Apple\" là linh tinh (MacBook dùng chip M) — up & ra hàng, tăng 3 lần từ đầu năm.",
                "Apple có thể test 250 (Tim Cook rời 10/2026); Nvidia giống FPT khó lên, giữ là hay; Google test 335–340 mua được.",
                "Hàn (Kospi)/Nhật (Nikkei) 2–3 đỉnh sẽ chỉnh mạnh; Samsung đừng mua vùng này."
              ]
            },
            {
              "title": "Vàng, Bạc & Bitcoin",
              "signal": "down",
              "sigLabel": "Chờ — nhạy với quyết định Fed",
              "para": "Vàng gãy chen nặng, tích lũy lại; nếu Fed tăng lãi hoàn toàn có thể về ~3.000 (Thái Phạm là người dự báo vàng về 3.900–4.000 từ sớm). Bạc tệ hơn, nếu tăng lãi về 48–50 (mất thêm ~20%). Bitcoin chưa phải năm của nó — \"banana\" lần ba chưa hình thành xong.",
              "levels": "Vàng: tích lũy, rủi ro về ~3.000 nếu tăng lãi · Bạc: 48–50 · BTC short: 69–71k, DH về 47–50k (cực đoan 30k)"
            },
            {
              "title": "Danh mục Chứng khoán Việt Nam",
              "signal": "up",
              "sigLabel": "Giữ 70% cổ phiếu — bank trụ + TCX + phân bón",
              "para": "Vấn đề chính là siết thanh khoản nhà nước (LDR 115%, huy động chậm hơn tín dụng). Chỉ ~28–29% mã uptrend, từ 15/6 một số mã mới nhích lên. Giữ kỷ luật, \"tà tà kiếm cơm\", chờ tín dụng nở lại."
            }
          ]
        },
        {
          "date": "2026-06-17",
          "dateShort": "17/06",
          "timeAgo": "Hôm qua",
          "tab": "Post · 17/06",
          "sourceType": "member-post",
          "typeLabel": "Post hội viên",
          "title": "Kịch Bản FED Tối Nay — Chia Sẻ Qua Video Phỏng Vấn",
          "summary": "Thái Phạm chia sẻ kịch bản cuộc họp FED kèm một video phỏng vấn (đăng kèm link Facebook). Phần quan điểm chi tiết nằm trong video liên kết — post trên YouTube chỉ là phần dẫn.",
          "feedChips": [
            {
              "label": "FED ◷ chờ kết quả họp",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "FED",
              "value": "Chờ kết quả họp",
              "signal": "wait",
              "note": "Chia sẻ kịch bản FED qua video phỏng vấn liên kết; nội dung chi tiết nằm trong video, không có trong post công khai."
            }
          ],
          "sections": [
            {
              "title": "Bối cảnh",
              "signal": "wait",
              "sigLabel": "Chờ kết quả cuộc họp FED",
              "para": "Bài post dẫn sang một video phỏng vấn về kịch bản FED trong cuộc họp lần này. Phần phân tích chi tiết nằm trong video liên kết (Facebook), không có trong nội dung post công khai trên YouTube."
            }
          ]
        },
        {
          "date": "2026-06-16",
          "dateShort": "16/06",
          "timeAgo": "Hôm nay",
          "tab": "Post · 16/06",
          "sourceType": "member-post",
          "typeLabel": "Post hội viên",
          "title": "TĂNG CỔ PHIẾU LÊN 70% — Chợ Huyện Sắp Có Sức Sống",
          "summary": "Tăng cổ phiếu VN lên 70% (tiền còn 30%). Bank tích nền ổn, TCX/CK có sức sống đầu tiên. Đạm/phân sắp về vùng ngon. Dầu 70–80 → tỷ giá dễ thở hơn. CK Mỹ/Hàn/Nhật chỉnh nhưng không ảnh hưởng chợ huyện.",
          "feedChips": [
            {
              "label": "CK Việt ↑ 70% cổ phiếu",
              "sig": "up"
            },
            {
              "label": "TCX ↑ tín hiệu sức sống",
              "sig": "up"
            },
            {
              "label": "Đạm/Phân ◷ sắp vùng ngon",
              "sig": "wait"
            },
            {
              "label": "BTC ↓ short 68–70k → 42k",
              "sig": "down"
            }
          ],
          "keyCalls": [
            {
              "tag": "VN Portfolio",
              "value": "70% cổ phiếu ↑",
              "signal": "up",
              "note": "Từ 50/50 → 70% cổ phiếu / 30% tiền. Bank ổn, Trung Đông ổn — đủ tín hiệu tăng tỷ trọng."
            },
            {
              "tag": "Bank",
              "value": "Giữ chặt / Mua đủ",
              "signal": "up",
              "note": "Đã có đủ hàng → cầm chặt. Chưa có → mua đủ vào."
            },
            {
              "tag": "TCX / CK",
              "value": "Còn sớm, có sức sống",
              "signal": "up",
              "note": "TCX và nhóm CK hôm qua thể hiện. Có hàng giữ, chưa có mua."
            },
            {
              "tag": "Đạm / Phân",
              "value": "Sắp về vùng ngon",
              "signal": "wait",
              "note": "Đang giảm thêm — tốt, sắp về vùng mua hấp dẫn. SCS cầm chặt."
            }
          ],
          "sections": [
            {
              "title": "Hành động danh mục",
              "signal": "up",
              "sigLabel": "Tích cực — tăng lên 70% cổ phiếu",
              "para": "Bank tích nền ổn định, Trung Đông có thỏa thuận, dầu về 70–80 đúng dự báo → đủ tín hiệu nâng tỷ trọng. Cổ phiếu tăng từ 50% lên 70%, tiền mặt còn 30%. VN-Index nếu giảm chủ yếu từ VIC/VHM/VRE — không phản ánh thực tế thị trường.",
              "bullets": [
                "Đã có đủ hàng hội viên → không làm gì, cầm chặt.",
                "Chưa có bank hội viên → mua đủ vào.",
                "VN-Index giảm từ VIC/VHM/VRE — bỏ qua, không quan trọng."
              ]
            },
            {
              "title": "Ngành Chứng khoán",
              "signal": "up",
              "sigLabel": "Tín hiệu sớm — có sức sống",
              "para": "TCX và nhóm chứng khoán hôm qua thể hiện tốt. Còn sớm nhưng đây là tín hiệu đầu tiên đáng chú ý. Có hàng giữ chặt, chưa có thì mua vào.",
              "bullets": [
                "TCX: giữ chặt hoặc mua nếu chưa có.",
                "Nhóm CK (VCI, MBS…): theo dõi xác nhận thêm."
              ]
            },
            {
              "title": "Ngành Sản xuất & Phân bón",
              "signal": "wait",
              "sigLabel": "Chờ vùng ngon — đang về",
              "para": "Đạm và phân bón tiếp tục giảm — đây là điều tốt, sắp về vùng mua hấp dẫn. SCS cầm chặt. HPG ai kẹt thì cầm — lù lù như xe lu.",
              "bullets": [
                "DCM / DPM: đang giảm → sắp về vùng ngon, chuẩn bị mua thêm.",
                "SCS: cầm chặt, không bán.",
                "HPG: cầm nếu kẹt — chưa có catalyst rõ."
              ]
            },
            {
              "title": "Vĩ mô & CK Quốc tế",
              "signal": "wait",
              "sigLabel": "Mỹ/Hàn/Nhật chỉnh — không ảnh hưởng VN",
              "para": "CK Mỹ/Hàn/Nhật sẽ chỉnh mạnh nhưng chợ huyện VN đã chỉnh rất sâu từ trước, chán lắm rồi — họ chỉnh thì mình có khi còn tăng. Dầu 70–80 → lạm phát nhập khẩu giảm → tỷ giá VND ổn định hơn → tốt dần lên.",
              "bullets": [
                "Dầu 70–80 USD → áp lực tỷ giá và lạm phát VN giảm dần.",
                "CK quốc tế chỉnh không kéo chợ huyện — VN đã discount sâu rồi.",
                "Trung Đông ổn → rủi ro địa chính trị hạ nhiệt toàn cầu."
              ]
            }
          ]
        },
        {
          "date": "2026-06-15",
          "dateShort": "15/06",
          "timeAgo": "Hôm qua",
          "tab": "Post · 5:15 sáng",
          "sourceType": "member-post",
          "typeLabel": "Post hội viên · 5:15 sáng",
          "title": "Iran–Mỹ Thỏa Thuận Hòa Bình Ký 19/6 — Thị Trường Phản Ứng",
          "summary": "Iran–Mỹ ký hòa bình 19/6 — đúng kỳ vọng: vàng tăng, dầu giảm. BTC vẫn downtrend. CK Mỹ hồi nhưng đã phản ánh vào giá. VN dễ thở hơn khi dầu giảm.",
          "feedChips": [
            {
              "label": "Vàng ↑ tăng ngắn hạn",
              "sig": "up"
            },
            {
              "label": "Dầu ↓ đúng dự báo",
              "sig": "down"
            },
            {
              "label": "BTC ↓ vẫn downtrend",
              "sig": "down"
            },
            {
              "label": "CK Việt ⚠ dễ thở hơn",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "Iran–Mỹ",
              "value": "Ký 19/6 Thụy Sĩ",
              "signal": "wait",
              "note": "Trump + Thủ tướng Pakistan xác nhận. 7.749 ngày \"sắp có\" — lần này có vẻ thật. Nhưng đã phản ánh vào giá từ lâu."
            },
            {
              "tag": "Vàng / Dầu",
              "value": "Vàng ↑ · Dầu ↓",
              "signal": "wait",
              "note": "Đúng kỳ vọng: hòa bình → dầu giảm, USD yếu → vàng tăng. Không thay đổi thesis dài hạn."
            },
            {
              "tag": "Bitcoin",
              "value": "Vẫn downtrend",
              "signal": "down",
              "note": "Hòa bình Iran không cứu BTC. Chờ hồi 68–70k để short lại."
            },
            {
              "tag": "CK Việt",
              "value": "Dễ thở hơn",
              "signal": "wait",
              "note": "Dầu giảm → lạm phát nhập khẩu giảm → áp lực tỷ giá VND bớt. Giữ bank, chờ tín hiệu tốt mua thêm."
            }
          ],
          "sections": [
            {
              "title": "Địa chính trị — Iran–Mỹ ký 19/6",
              "signal": "wait",
              "sigLabel": "Sự kiện lớn — đã phản ánh vào giá",
              "para": "Sau 7.749 ngày liên tục \"sắp có thỏa thuận\", Trump và Thủ tướng Pakistan xác nhận Iran–Mỹ ký hòa bình ngày 19/6 tại Thụy Sĩ. Từ tháng 4 đến nay, mỗi khi CK đỏ ông Trump đều tung tin \"sắp ký\" — thị trường đã hấp thụ tin này nhiều lần. Kỳ vọng đã ăn vào giá phần lớn rồi.",
              "bullets": [
                "Dầu giảm đúng kỳ vọng — xác nhận thesis dầu về 77–80 USD.",
                "Vàng tăng do USD yếu — không phải tín hiệu mới về cung cầu.",
                "Futures CK Mỹ xanh điểm — không chase; khả năng đã phản ánh vào giá.",
                "Theo dõi 19/6: ký thật → dầu tiếp tục giảm; đổ vỡ → dầu bật lại."
              ]
            },
            {
              "title": "Bitcoin",
              "signal": "down",
              "sigLabel": "Downtrend — chờ 68–70k short lại",
              "para": "Hòa bình Iran không thay đổi cấu trúc kỹ thuật BTC. Vẫn downtrend từ đỉnh 125k. Chờ hồi kỹ thuật lên 68.000–70.000 rồi short lại, mục tiêu ~42k.",
              "levels": "Vùng short: 68.000–70.000 · mục tiêu: ~42.000"
            },
            {
              "title": "Chứng khoán Việt Nam",
              "signal": "wait",
              "sigLabel": "Áp lực dễ thở hơn — giữ nguyên",
              "para": "Hòa bình Iran + dầu giảm → lạm phát nhập khẩu giảm → áp lực tỷ giá VND bớt dần → tích cực cho CK VN dài hạn. Không action vội — tiếp tục nắm chặt bank chiến lược, chờ tín hiệu tỷ giá và lãi suất khả quan hơn mới mua thêm.",
              "bullets": [
                "Giữ nguyên 50/50 — không thay đổi.",
                "Nắm chặt: VCB, BID, TCB, HDB, EB, BVB.",
                "Tín hiệu mua thêm: tỷ giá ổn định + lãi suất có dấu hiệu giảm."
              ]
            }
          ]
        },
        {
          "date": "2026-06-13",
          "dateShort": "13/06",
          "timeAgo": "3 ngày trước",
          "tab": "Tập 32 · Tuần 24",
          "sourceType": "member-video",
          "typeLabel": "Video hội viên · Tập 32",
          "title": "Mua Vàng Được Chưa? CK Mỹ/Hàn/Nhật/Việt Tuần 24",
          "summary": "Vàng vùng $4.200 mua được. Limit short BTC 68.570 → kịch bản về 42k. SpaceX IPO P/S 96x — CK Mỹ chỉnh đến giữa T7. VN 50/50 giữ nguyên — chờ mùa xuân 2027.",
          "feedChips": [
            {
              "label": "Vàng ◷ $4.200 mua được",
              "sig": "wait"
            },
            {
              "label": "BTC ↓ short 68.5k→42k",
              "sig": "down"
            },
            {
              "label": "CK Mỹ ↓ chỉnh đến T7",
              "sig": "down"
            },
            {
              "label": "CK Việt ◷ 50/50 giữ",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "Vàng",
              "value": "Mua được rồi",
              "signal": "wait",
              "note": "Vùng $4.200 mua được nếu đã bán cao. Chênh 13–14tr/lượng nhưng cứ mua lại phần đã bán. Dài hạn còn 1 chân về ~$3.300."
            },
            {
              "tag": "Bitcoin",
              "value": "Short 68,5–70k",
              "signal": "down",
              "note": "Limit short 68.570. Elliott chân 5 → ~42k. Clarity Act 4/7 — BTC thành mã CK Mỹ chính thức."
            },
            {
              "tag": "CK Mỹ",
              "value": "Chỉnh T7",
              "signal": "down",
              "note": "SpaceX P/S 96x — ảo. Nasdaq chỉnh đến giữa T7; short Intel, AMD, Tesla 440."
            },
            {
              "tag": "CK Việt",
              "value": "50/50 giữ",
              "signal": "wait",
              "note": "Không action. Chờ mùa xuân 2027. TCX + VPX + bank + phân bón."
            }
          ],
          "sections": [
            {
              "title": "Vàng & Dầu",
              "signal": "wait",
              "sigLabel": "Mua được — còn 1 chân rủi ro",
              "para": "Vàng ~$4.230, chênh trong nước 13–14 triệu/lượng (phi lý). Đây là chân 2; có thể còn chân 3 về ~$3.300 (125 triệu/lượng VN). Nhưng nếu đã bán vùng cao trước → mua lại phần đã bán ở đây được. Vàng tài khoản: mua, đợi hồi về $4.000+ rồi chốt. Dầu về 79–80 không cần quan tâm lý do.",
              "bullets": [
                "Chênh mục tiêu tối ưu ≤ 7 triệu/lượng, hiện 14 triệu là chưa ngon — nhưng dài hạn vẫn mua được.",
                "Bạc về ~55 USD/oz theo vàng.",
                "Dầu Brent test 79–80 — thỏa thuận Iran có hay không cũng vậy."
              ]
            },
            {
              "title": "Bitcoin & Crypto",
              "signal": "down",
              "sigLabel": "Short 68,5–70k — kịch bản 42k",
              "para": "BTC đang ở chân 3 Elliott từ đỉnh 125k. Chờ hồi kỹ thuật lên 68.500–70.000 rồi short. Clarity Act dự kiến thông qua 4/7 — crypto chính thức hóa vào hệ thống Petrodollar. BTC, ETH, XRP chỉ là mã giao dịch như CK, không còn là tiền tệ thay thế.",
              "levels": "Limit short: 68.570 · kịch bản về: ~42.000 · mua dài hạn: vùng 42k"
            },
            {
              "title": "Chứng khoán Mỹ",
              "signal": "down",
              "sigLabel": "Chỉnh đến giữa tháng 7",
              "para": "SpaceX IPO mở 150→đỉnh 176→đóng 160 USD. P/S 94–96x (Nvidia chỉ 19x, AVGO 24x) — hoàn toàn ảo. Quỹ thụ động phải mua ~$38 tỷ khi SpaceX vào Nasdaq 100 đầu T7; lockup unlock T7 → nguồn cung tăng đột biến. Nasdaq chỉnh đến giữa T7.",
              "bullets": [
                "Nasdaq short vào 29.600, thêm ở 31.000, cắt lỗ 32.500.",
                "Intel: sort + thêm ở 140, cắt lỗ 155 — phân phối Wyckoff.",
                "AMD: sort — FA yếu, chỉnh mạnh.",
                "Tesla: đợi lên 440 rồi sort.",
                "Adidas: giữ, mục tiêu 167–170 → 200 rồi chốt.",
                "Apple, Nvidia, Google: không đụng — biến động lớn, khó cầm."
              ]
            },
            {
              "title": "Chứng khoán Việt Nam",
              "signal": "wait",
              "sigLabel": "Mùa đông — 50/50, không action",
              "para": "20–23% cổ phiếu VN đang uptrend, thanh khoản yếu. VN-Index \"áo vest bên ngoài áo ba lỗ bên trong\" — chỉ VIC/VHM kéo chỉ số. Không action — cầm nguyên bank + phân bón + TCX + VPX. Chờ 2027 khi Fed hạ lãi, vĩ mô dịu.",
              "bullets": [
                "TCX: mua dần, mục tiêu VN30 T1/2027. Bị dìm 35–36 → mua thêm.",
                "VPX (VCK): theo dõi cùng TCX, cùng kỳ vọng VN30.",
                "BVBank: niêm yết chính thức T7/2026 — giữ.",
                "Bank (VCB, BID, TCB, HDB, EB, BVB): không bán vùng thấp.",
                "Phân bón (DPM/DCM): giữ ½ vị thế ~25 — không bán.",
                "Novaland: chờ về 11–12 mới mua."
              ]
            }
          ]
        }
      ],
      "sources": [
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "09/07/2026",
          "title": "Ông Trump tuyên bố đánh Iran tiếp tục — cú sốc hay trò đùa? Ảnh hưởng thị trường",
          "meta": "Video công khai · transcript tự động"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "04/07/2026",
          "title": "Tập 36 — Vàng, Bitcoin, Chứng khoán tuần 27 · Tỉ lệ tiền và hàng?",
          "meta": "Video hội viên · transcript tự động"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "21/06/2026",
          "title": "Siêu chu kỳ chip đối đầu vĩ mô xấu, ETF Funds cơ cấu mạnh cuối tháng 6",
          "meta": "Video công khai · transcript tự động"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "20/06/2026",
          "title": "Tập 33 — Vàng, Bitcoin, Chứng khoán tuần 25",
          "meta": "Video hội viên · transcript tự động"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "18/06/2026",
          "title": "Chủ tịch Fed lật kèo từ bỏ định hướng lãi suất — vàng, BTC, chứng khoán, tỷ giá",
          "meta": "Video công khai · transcript tự động"
        },
        {
          "icon": "✎",
          "iconBg": "oklch(0.95 0.02 235)",
          "iconColor": "oklch(0.42 0.08 235)",
          "date": "16/06/2026",
          "title": "16/6 — TĂNG CỔ PHIẾU LÊN 70% — Chợ Huyện Sắp Có Sức Sống",
          "meta": "Post cộng đồng · chỉ dành cho hội viên"
        },
        {
          "icon": "✎",
          "iconBg": "oklch(0.95 0.02 235)",
          "iconColor": "oklch(0.42 0.08 235)",
          "date": "15/06/2026",
          "title": "15/6 · 5:15 sáng — Iran–Mỹ Ký 19/6 · Vàng Tăng · Dầu Giảm",
          "meta": "Post cộng đồng · chỉ dành cho hội viên"
        }
      ]
    },
    "azfin": {
      "initials": "AZ",
      "name": "AzFin",
      "avatarSrc": "/avatars/azfin.png",
      "bio": "Đầu tư giá trị dài hạn — tích sản cổ phiếu VN. Phân tích cơ bản, quản lý danh mục kỷ luật, không dùng margin. Cộng đồng 4.000+ nhà đầu tư.",
      "sourceLabel": "YouTube · Video công khai",
      "sourceChips": [
        "▶ Video công khai",
        "Tần suất: hàng tuần"
      ],
      "gauge": {
        "title": "Quan điểm thị trường VN",
        "badge": "Cơ hội tốt",
        "badgeBg": "oklch(0.95 0.04 150)",
        "badgeColor": "oklch(0.42 0.1 150)",
        "bar1": 35,
        "bar2": 65,
        "label1": "Phòng thủ 35%",
        "label2": "Tấn công 65%"
      },
      "updates": [
        {
          "date": "2026-07-08",
          "dateShort": "08/07",
          "timeAgo": "Hôm qua",
          "tab": "Số 18 · Tích sản T43",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Số 18: Tích Sản Tháng 43 — Định Giá VN Rẻ, Giữ Kỷ Luật",
          "summary": "Định giá TTCK Việt Nam rẻ: PE ~13 lần (loại VIC < 10,5 — ngang đáy Covid 2020 / khủng hoảng TP 2022), PB 2,11. Vĩ mô đan xen: lãi suất cao nhưng tỷ giá ổn, GDP & lợi nhuận DN tăng >20% → mặt tích cực lớn hơn tiêu cực. Tỷ trọng phù hợp: 70–80% cổ phiếu, 20–30% tiền. Tích sản tháng 43: danh mục 4,2 tỷ, cổ tức 4,6%, tiến độ triệu đô 16%, lợi suất kép 17,8%/năm.",
          "feedChips": [
            {
              "label": "CK Việt ↑ định giá rẻ",
              "sig": "up"
            },
            {
              "label": "PE ↑ ~13 (loại VIC <10,5)",
              "sig": "up"
            },
            {
              "label": "Tỷ trọng ◷ 70–80% cổ phiếu",
              "sig": "wait"
            },
            {
              "label": "Lãi suất ⚠ vẫn cao",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "Định giá VN",
              "value": "PE ~13 — rẻ",
              "signal": "up",
              "note": "PE thị trường 13,69 lần; điều chỉnh KQKD Q2 (tăng >20%) còn ~13 lần, thấp hơn trung vị >8%. Loại nhóm VIC thì PE dưới 10,5 — ngang đáy Covid 2020 và khủng hoảng TP cuối 2022."
            },
            {
              "tag": "PB",
              "value": "2,11 — hợp lý",
              "signal": "wait",
              "note": "PB 2,11 lần; sau KQKD Q2 còn ~1,95 lần, đúng bằng trung vị. Loại VIC thì PB ~1,6 lần (thấp hơn 1 độ lệch chuẩn)."
            },
            {
              "tag": "Tỷ trọng",
              "value": "70–80% cổ phiếu",
              "signal": "wait",
              "note": "Giai đoạn định giá rẻ → tỷ trọng cổ phiếu 70–80%, tiền mặt 20–30% (tùy khẩu vị rủi ro mỗi người)."
            },
            {
              "tag": "Tích sản",
              "value": "Tháng 43 · danh mục 4,2 tỷ",
              "signal": "up",
              "note": "Đã tích sản 43 tháng, bỏ vào 3,16 tỷ → danh mục 4,2 tỷ. Cổ tức 4,6%, tiến độ triệu đô 16%, lợi suất kép 17,8%/năm. Kỷ luật đầu tư giá trị."
            }
          ],
          "sections": [
            {
              "title": "Định giá TTCK Việt Nam — Rẻ",
              "signal": "up",
              "sigLabel": "Tích cực — dưới trung vị",
              "para": "Tính đến đầu tháng 7, PE thị trường là 13,69 lần (thấp hơn trung vị 3%). KQKD Q2/2026 hầu như chưa ra (mới MBS), ước tăng >20% — điều chỉnh vào thì PE thực còn ~13 lần, thấp hơn trung vị hơn 8% và trung bình hơn 10%. Loại nhóm VIC, PE chỉ dưới 10,5 lần — tương đương đáy Covid tháng 3/2020 và khủng hoảng trái phiếu cuối 2022.",
              "bullets": [
                "PB hiện 2,11 lần; sau KQKD Q2 còn ~1,95 — đúng bằng trung vị (hợp lý). Loại VIC còn ~1,6 lần.",
                "PE rẻ hơn PB vì hiệu quả sinh lời trên vốn chủ (ROE ~14,5%) cao.",
                "Kết luận: xét riêng PE thì rất rẻ; xét cả PB thì ở mức rẻ."
              ]
            },
            {
              "title": "Vĩ mô & Chiến lược tỷ trọng",
              "signal": "wait",
              "sigLabel": "Cân bằng — tích cực lớn hơn tiêu cực",
              "para": "Bối cảnh vĩ mô đan xen: lãi suất vẫn tương đối cao (yếu tố ngược), nhưng tỷ giá ổn định, GDP tăng mạnh và quan trọng nhất là KQKD doanh nghiệp niêm yết tăng trưởng cao. Mặt tích cực lớn hơn tiêu cực trong khi định giá thấp hơn trung vị/trung bình → tỷ trọng cổ phiếu phù hợp 70–80%.",
              "bullets": [
                "Tiền mặt giữ 20–30% tùy khẩu vị rủi ro.",
                "Danh mục đang nâng tỷ trọng tăng trưởng (nên cổ tức 4,6% thấp hơn kỳ trước); khi cần thận trọng sẽ nâng phòng thủ.",
                "Tích sản tháng 43: kiên trì kỷ luật, mục tiêu triệu đô trong 8–9 năm (đã đạt 16%)."
              ]
            }
          ]
        },
        {
          "date": "2026-06-17",
          "dateShort": "17/06",
          "timeAgo": "3 tuần trước",
          "tab": "Video · 17/06",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Ba Nhóm Ngành Triển Vọng Để Giữ 5 Năm",
          "summary": "Ba nhóm ngành ưu tiên giữ 5 năm: Ngân hàng (tăng trưởng 15–20%/năm, định giá rẻ, lợi thế cạnh tranh mạnh), Vật liệu xây dựng (hưởng lợi đầu tư công) và Bán lẻ (bùng nổ tiêu dùng theo GDP). Rủi ro chính từ vĩ mô thế giới & giá cổ phiếu — khắc phục bằng mua khi định giá rất rẻ và bảo vệ thành quả khi đạt mục tiêu.",
          "feedChips": [
            {
              "label": "Ngân hàng ↑ ưu tiên",
              "sig": "up"
            },
            {
              "label": "VLXD ↑ đầu tư công",
              "sig": "up"
            },
            {
              "label": "Bán lẻ ↑ tiêu dùng",
              "sig": "up"
            },
            {
              "label": "Vĩ mô TG ⚠ rủi ro",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "Ngân hàng",
              "value": "Ưu tiên số 1",
              "signal": "up",
              "note": "Tăng trưởng tự nhiên 15–20%/năm theo tín dụng; PE/PB thấp hơn trung bình thị trường trong khi hiệu quả cao hơn; lợi thế cạnh tranh mạnh."
            },
            {
              "tag": "Vật liệu xây dựng",
              "value": "Hưởng lợi đầu tư công",
              "signal": "up",
              "note": "Đầu vào ít biến động, đầu ra hưởng nhu cầu cao từ đầu tư công. Nhà thầu thi công trực tiếp kém hấp dẫn hơn do biến động NVL & cạnh tranh."
            },
            {
              "tag": "Bán lẻ",
              "value": "Bùng nổ tiêu dùng",
              "signal": "up",
              "note": "Tăng theo tốc độ tăng GDP; VN đang bước vào giai đoạn bùng nổ tiêu dùng → ngành bán lẻ hưởng lợi lớn."
            },
            {
              "tag": "Chiến lược",
              "value": "Mua rẻ · chốt mục tiêu",
              "signal": "wait",
              "note": "Rủi ro lớn nhất nằm ở giá cổ phiếu/thị trường. Mua khi định giá rất thấp và bảo vệ thành quả khi đạt mục tiêu — không nhất thiết nắm đủ 5 năm."
            }
          ],
          "sections": [
            {
              "title": "Ba nhóm ngành triển vọng 5 năm",
              "signal": "up",
              "sigLabel": "Tích cực — ưu tiên tích lũy",
              "para": "Nếu chọn ba nhóm ngành để giữ 5 năm: ngân hàng, vật liệu xây dựng và bán lẻ. Đây là các ngành có động lực tăng trưởng nội tại rõ ràng và hưởng lợi từ xu hướng vĩ mô dài hạn của Việt Nam.",
              "bullets": [
                "Ngân hàng: tăng 15–20%/năm, định giá rẻ (PE/PB thấp), lợi thế cạnh tranh mạnh.",
                "Vật liệu xây dựng: hưởng lợi đầu tư công nhờ đầu vào ổn, đầu ra nhu cầu cao.",
                "Bán lẻ: tăng theo GDP, đón giai đoạn bùng nổ tiêu dùng."
              ]
            },
            {
              "title": "Rủi ro & chiến lược",
              "signal": "warn",
              "sigLabel": "Thận trọng — rủi ro vĩ mô & thị trường",
              "para": "Vĩ mô thế giới biến động (xung đột, mâu thuẫn chính trị, lạm phát cao) có thể làm kinh tế tăng trưởng chậm và gây áp lực tỷ giá, khiến KQKD các ngành biến động. Nhưng rủi ro lớn nhất với 3 nhóm này nằm ở giá cổ phiếu/thị trường hơn là nền tảng doanh nghiệp.",
              "bullets": [
                "Mua khi định giá rất rẻ để hạ rủi ro.",
                "Bảo vệ thành quả khi đạt mục tiêu — không cứng nhắc nắm đủ 5 năm."
              ]
            }
          ]
        },
        {
          "date": "2026-06-14",
          "dateShort": "14/06",
          "timeAgo": "2 ngày trước",
          "tab": "Video · 14/06",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Nhà Đầu Tư Nước Ngoài Bán Ròng Mạnh: Rủi Ro Hay Cơ Hội?",
          "summary": "Khối ngoại bán ròng kỷ lục 26 năm → cơ hội tích lũy, không phải rủi ro. Định giá VN percentile 10–15% thấp nhất lịch sử. Bank tư nhân lớn rất rẻ, cơ hội >> rủi ro. Không dùng margin.",
          "feedChips": [
            {
              "label": "CK Việt ↑ cơ hội tốt",
              "sig": "up"
            },
            {
              "label": "Bank ↑ rất rẻ",
              "sig": "up"
            },
            {
              "label": "Tích lũy ◷ dần dần",
              "sig": "wait"
            },
            {
              "label": "CK Mỹ ↓ bong bóng 2000",
              "sig": "down"
            }
          ],
          "keyCalls": [
            {
              "tag": "Khối Ngoại",
              "value": "Cơ hội, không rủi ro",
              "signal": "up",
              "note": "Bán ròng kỷ lục 26 năm → giá rẻ. Lý do: lãi TP Mỹ/Anh hấp dẫn, VN sắp lên EM, chủ nghĩa dân tộc KT toàn cầu."
            },
            {
              "tag": "Định giá VN",
              "value": "Percentile 10–15%",
              "signal": "up",
              "note": "Chỉ ~10/100 phiên lịch sử có giá thấp hơn hiện tại (trừ nhóm Vin). Cơ hội tích lũy tốt rõ rệt."
            },
            {
              "tag": "Bank tư nhân lớn",
              "value": "Rất rẻ — ưu tiên",
              "signal": "up",
              "note": "ACB, MB, VP, HD: vững mạnh, định giá rất rẻ. Cơ hội >> rủi ro."
            },
            {
              "tag": "Thị trường Mỹ",
              "value": "Gần bong bóng 2000",
              "signal": "down",
              "note": "CAPE gần dotcom. Buffett indicator ~300%. Buffett giữ ~$400 tỷ tiền lỏng — kỷ lục."
            }
          ],
          "sections": [
            {
              "title": "Vì sao khối ngoại bán ròng kỷ lục?",
              "signal": "wait",
              "sigLabel": "Cơ hội — không phải dấu hiệu xấu cơ bản",
              "para": "Khối ngoại bán ròng mạnh nhất 26 năm lịch sử TTCK VN. Tuy nhiên nguyên nhân hoàn toàn khác đại khủng hoảng 2007. Không phải vì kinh tế VN xấu — đây là cơ hội tích lũy cho nhà đầu tư giá trị.",
              "bullets": [
                "TP Chính phủ Mỹ 4,49%, Anh 4,83% — tài sản cực an toàn lại lợi suất cao hơn CK VN (sau tỷ giá và chi phí quỹ).",
                "VN sắp lên Emerging Market tháng 9/2026 — frontier market funds phải bán VN (~40% danh mục họ). Bán kỹ thuật, không phải bán vì VN xấu.",
                "Chủ nghĩa dân tộc kinh tế toàn cầu tăng → quỹ nước ngoài co về sân nhà.",
                "Nhà đầu tư chiến lược dài hạn vẫn vào — mua khối lớn theo kiểu đầu tư chiến lược."
              ]
            },
            {
              "title": "Định giá thị trường VN — Cơ hội tốt",
              "signal": "up",
              "sigLabel": "Tích cực — percentile 10–15% thấp nhất lịch sử",
              "para": "Loại trừ nhóm Vin, định giá đa số cổ phiếu VN đang ở vùng 10–15% thấp nhất lịch sử. Chưa phải \"rất lớn\" nhưng là cơ hội tốt rõ rệt.",
              "bullets": [
                "Bank tư nhân lớn: định giá rất rẻ, kết quả kinh doanh vững chắc. Cơ hội >> rủi ro nhiều.",
                "BĐS doanh nghiệp: cơ hội >> rủi ro (tránh nhóm pháp lý phức tạp).",
                "Ngành CK: một số rẻ, một số trung bình — kén chọn. Có thể đảo chiều bất kỳ lúc sau 8 tháng điều chỉnh.",
                "Không dùng margin trong bất kỳ trường hợp nào — nguyên tắc cốt lõi đầu tư giá trị."
              ]
            },
            {
              "title": "Thị trường Mỹ — Cảnh báo bong bóng",
              "signal": "down",
              "sigLabel": "Rủi ro — gần mức bong bóng dotcom 2000",
              "para": "Trong khi VN rẻ, thị trường Mỹ có dấu hiệu quá nóng. Buffett giữ ~$400 tỷ tiền lỏng kỷ lục — ông không tìm được nơi đầu tư hấp dẫn ở Mỹ.",
              "bullets": [
                "CAPE (Shiller P/E) gần mức bong bóng dotcom.com năm 2000.",
                "Buffett Indicator (vốn hóa/GDP) ~300% — >100% đã là rủi ro.",
                "Không có nghĩa crash ngay — nhưng kỳ vọng lợi nhuận dài hạn từ CK Mỹ sẽ thấp."
              ]
            },
            {
              "title": "Hành động — Tích lũy dần, nghiêng tấn công",
              "signal": "up",
              "sigLabel": "Tích lũy — lúc này tấn công nhiều hơn thủ",
              "para": "Lúc này phù hợp nghiêng danh mục về phía tấn công (cổ phiếu tăng trưởng) nhiều hơn phòng thủ — vì giá đã giảm sâu. Phải có cả công lẫn thủ, tỷ lệ phụ thuộc cái nào rẻ hơn. Lúc này nhóm tăng trưởng đang rẻ hơn.",
              "bullets": [
                "Tích lũy dần — không all-in một lần. Tỷ lệ cổ phiếu/tổng tài sản phụ thuộc cơ cấu và dòng tiền hàng tháng.",
                "HDG: định giá rất rẻ (dù vướng pháp lý HDG-EVN chưa xong trong nhiệm kỳ mới).",
                "ACV: tài sản rất giá trị, lợi nhuận chưa tương xứng — có giá trị đấy."
              ]
            }
          ]
        },
        {
          "date": "2026-06-11",
          "dateShort": "11/06",
          "timeAgo": "5 ngày trước",
          "tab": "Podcast · 11/06",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Hành Động Gì Khi Thị Trường Chán Nản? — Tích Sản Cổ Phiếu #12",
          "summary": "Thị trường 20% thời gian tăng, 50% sideway, 30% giảm — đây là giai đoạn bình thường. Tích lũy cổ phiếu tốt, giá rẻ, ăn cổ tức và tái đầu tư. Không bao giờ all-in, duy trì kỷ luật % tỷ trọng.",
          "feedChips": [
            {
              "label": "CK Việt ↑ tích lũy dần",
              "sig": "up"
            },
            {
              "label": "Phân bổ ◷ không all-in",
              "sig": "wait"
            },
            {
              "label": "Margin ✗ không bao giờ",
              "sig": "down"
            }
          ],
          "keyCalls": [
            {
              "tag": "Thị trường",
              "value": "20/50/30 — bình thường",
              "signal": "wait",
              "note": "20% uptrend, 50% sideway, 30% downtrend. 21/26 năm VN khó. Đây là giai đoạn bình thường."
            },
            {
              "tag": "Hành động",
              "value": "Tích lũy, ăn cổ tức",
              "signal": "up",
              "note": "Mua cổ phiếu tốt khi rẻ, thu cổ tức, tái đầu tư liên tục. Không bán khi chán — chỉ lỗ khi bán."
            },
            {
              "tag": "Nguyên tắc",
              "value": "Không bao giờ all-in",
              "signal": "up",
              "note": "Duy trì kỷ luật % tỷ trọng. Khi giá cao chuyển sang TP/tiết kiệm. Không dùng margin."
            },
            {
              "tag": "Cộng đồng",
              "value": "4.000+ thành viên",
              "signal": "up",
              "note": "Thực hành đầu tư giá trị hàng ngày. Kết quả từ kỷ luật lặp lại."
            }
          ],
          "sections": [
            {
              "title": "Thị trường chán nản là bình thường",
              "signal": "wait",
              "sigLabel": "Bình thường — không phải tín hiệu đặc biệt",
              "para": "21/26 năm lịch sử TTCK VN là năm khó khăn. Phân bổ thời gian: ~20% uptrend, ~50% sideway, ~30% downtrend. Giai đoạn 2026 là rủi ro + cơ hội.",
              "bullets": [
                "Khách mời bắt đầu 2007 — tài khoản bị đốt 2014 do dùng margin 3:7 với PVD trong sự kiện DK981.",
                "Bài học: không dùng margin. Luôn có thesis đầu tư rõ ràng → chiến lược → chiến thuật.",
                "Tiếp tục học liên tục — thị trường thay đổi, nhà đầu tư cũng cần cập nhật."
              ]
            },
            {
              "title": "Nguyên tắc tích sản cổ phiếu",
              "signal": "up",
              "sigLabel": "Tích cực — tích lũy trong downtrend",
              "para": "Mua cổ phiếu chất lượng khi rẻ → thu cổ tức → tái đầu tư → chờ uptrend bảo vệ lợi nhuận. Không cần dự đoán đáy chính xác.",
              "bullets": [
                "Giữ tỷ lệ % cổ phiếu/tổng tài sản kỷ luật — không bao giờ all-in 100%.",
                "Khi giá cổ phiếu cao: chuyển bớt sang TP hoặc gửi tiết kiệm. Khi rẻ như hiện tại: dùng tiền đó mua thêm.",
                "Ăn cổ tức, tái đầu tư liên tục — nguồn sinh lời bền vững nhất dài hạn."
              ]
            },
            {
              "title": "Giai đoạn 2026 — Tích lũy dần",
              "signal": "up",
              "sigLabel": "Tích cực — nhiều cổ phiếu tốt đang rẻ",
              "para": "Nhiều cổ phiếu tốt đang rất rẻ dù nền tảng doanh nghiệp vẫn vững. Cơ hội tốt rõ rệt để tích lũy. Chờ uptrend để bảo vệ lợi nhuận — không vội bán trong downtrend.",
              "bullets": [
                "Cộng đồng 4.000+ thành viên thực hành kỷ luật đầu tư giá trị hàng ngày.",
                "Nguồn thu nhập đều đặn hàng tháng → dòng tiền liên tục mua thêm → tâm lý thoải mái.",
                "Không cần biết đáy ở đâu — cứ mua dần khi rẻ, tỷ lệ tốt dần theo thời gian."
              ]
            }
          ]
        }
      ],
      "sources": [
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "08/07/2026",
          "title": "Số 18: Tích sản tháng 43 — TTCK biến động nhưng vẫn kỷ luật | Hành trình triệu đô",
          "meta": "Video công khai · AzFin Vietnam"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "17/06/2026",
          "title": "03 Ngành triển vọng trong tương lai?",
          "meta": "Video công khai · AzFin Vietnam"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "14/06/2026",
          "title": "Nhà đầu tư nước ngoài bán ròng mạnh: Rủi ro hay cơ hội | Lăng kính đầu tư giá trị",
          "meta": "Video công khai · AzFin Vietnam"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "11/06/2026",
          "title": "#12: Hành động gì khi thị trường chán nản?",
          "meta": "Video công khai · Tích sản cổ phiếu AzFin"
        }
      ]
    },
    "ck-5-phut": {
      "initials": "C5",
      "name": "Chứng khoán 5 phút",
      "avatarSrc": "",
      "bio": "Bản tin nhanh về thị trường chứng khoán Việt Nam và vĩ mô: điểm tin, đánh giá tác động và chiến lược giao dịch ngắn hạn.",
      "sourceLabel": "YouTube · Video công khai",
      "sourceChips": [
        "▶ Video công khai",
        "Tần suất: hàng ngày"
      ],
      "gauge": {
        "title": "Trạng thái thị trường tuần",
        "badge": "Tích cực",
        "badgeBg": "oklch(0.95 0.04 150)",
        "badgeColor": "oklch(0.42 0.1 150)",
        "bar1": 60,
        "bar2": 40,
        "label1": "Giữ tỷ trọng 60%",
        "label2": "Chờ/ngắn hạn 40%"
      },
      "updates": [
        {
          "date": "2026-07-08",
          "dateShort": "08/07",
          "timeAgo": "Hôm qua",
          "tab": "Video · 08/07",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Lúc Này Có Nên Chốt Lãi 5–7%? 3 Cách Chốt Lãi Ngắn Hạn Ở Thị Trường Đi Ngang",
          "summary": "Thị trường đi ngang → chỉ chốt lãi ngắn hạn (người cầm dài hạn không bán ở đáy, thậm chí cân nhắc mua thêm). 3 cách: (1) theo tín hiệu kỹ thuật — mẫu hình nến/2 đỉnh (VD MSB); (2) theo xu hướng + nhật ký giao dịch, target 15–20%/năm; (3) cảm tính/bắt đáy bừa — KHÔNG khuyến nghị (bẫy \"thiên kiến kẻ sống sót\", dễ kẹp hàng như PNJ, GEX). Thị trường gần đáy hơn đỉnh nhưng chưa xác nhận tăng (hôm nay chỉ +5 điểm, thanh khoản 17.000 tỷ).",
          "feedChips": [
            {
              "label": "Chốt lãi ◷ chỉ ngắn hạn",
              "sig": "wait"
            },
            {
              "label": "Tín hiệu ↑ nên tôn trọng",
              "sig": "up"
            },
            {
              "label": "Bắt đáy bừa ✗ tránh",
              "sig": "down"
            },
            {
              "label": "Thị trường ◷ gần đáy",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "Bối cảnh",
              "value": "Chỉ chốt lãi ngắn hạn",
              "signal": "wait",
              "note": "Thị trường đi ngang, sóng cổ phiếu không bền, áp lực bán xuất hiện bất ngờ. Lãi trung/dài hạn không có; người cầm dài hạn không bán ở đây."
            },
            {
              "tag": "Cách 1",
              "value": "Chốt theo tín hiệu",
              "signal": "up",
              "note": "Tôn trọng tín hiệu đỉnh: mẫu hình nến nhấn chìm/sao hôm/mây đen, hoặc 2 đỉnh (đỉnh sau thấp hơn, thủng MA20). VD MSB chốt ở nến đỏ 08/6. Giai đoạn này ít đất diễn — thu hẹp lệnh khi tỷ lệ sai tăng."
            },
            {
              "tag": "Cách 2",
              "value": "Theo xu hướng + nhật ký",
              "signal": "up",
              "note": "Giao dịch linh hoạt, có sổ nhật ký, target theo tháng/năm (15–20%/năm). Bán khi chững đà tăng ở kháng cự, mua lại khi test nền thành công."
            },
            {
              "tag": "Cách 3",
              "value": "Cảm tính/bắt đáy — tránh",
              "signal": "down",
              "note": "Bắt đáy bừa trên đà giảm (PNJ, GEX): rủi ro kẹp hàng lớn, chỉ chốt lãi ngắn 5–10%. \"Thiên kiến kẻ sống sót\" — chỉ nghe người trúng đáy khoe. Không có cách gỡ ngắn hạn."
            }
          ],
          "sections": [
            {
              "title": "3 cách chốt lãi ngắn hạn",
              "signal": "up",
              "sigLabel": "Ưu tiên cách 1 & 2 — kỷ luật tín hiệu",
              "para": "Ở thị trường đi ngang, chỉ nên chốt lãi ngắn hạn. Cách 1 (theo tín hiệu): mua vì tín hiệu, bán vì tín hiệu — không tiếc; ví dụ MSB (hiếm hoi thắng thị trường) chốt tại mẫu 2 đỉnh thủng MA20. Cách 2 (theo xu hướng + nhật ký giao dịch): không cần đợi tín hiệu đỉnh rõ ràng, chốt khi chững đà ở kháng cự, quản trị theo target tháng/năm.",
              "bullets": [
                "Cách 1 giai đoạn này ít cơ hội, nhưng rèn kỷ luật — khi thị trường tốt lại sẽ hiệu quả.",
                "Cách 2 cần sổ nhật ký để không lẫn giá vốn giữa các lệnh; target thực tế 15–20%/năm, đừng kỳ vọng x3.",
                "Cách 3 (cảm tính/bắt đáy bừa) KHÔNG khuyến nghị — bỏ nhiều rủi ro kẹp hàng nhưng chỉ chốt lãi ngắn."
              ]
            },
            {
              "title": "Đánh giá thị trường",
              "signal": "wait",
              "sigLabel": "Gần đáy hơn đỉnh — chưa xác nhận tăng",
              "para": "Thị trường đang trong giai đoạn chán nhưng gần đáy hơn gần đỉnh; không cần quá lo downtrend dài hạn như nhiều người dọa. Tuy nhiên có thể đi ngang thêm một thời gian — cần phương pháp thích nghi, hoặc \"án binh bất động\" chờ đáy thực sự và xác nhận tăng.",
              "bullets": [
                "Hôm nay chỉ tăng 5 điểm, thanh khoản ~17.000 tỷ — chưa xác nhận sóng tăng trở lại.",
                "Với người mua bán cảm tính bị kẹp: xử lý margin, cơ cấu lại tài khoản, không mua thêm.",
                "Tránh cổ phiếu giảm sâu vì tin xấu chưa có đáy (PNJ, GEX vùng 8x từ đỉnh 130)."
              ]
            }
          ]
        },
        {
          "date": "2026-06-17",
          "dateShort": "17/06",
          "timeAgo": "3 tuần trước",
          "tab": "Video · 17/06",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Fed Họp & NHNN Dự Thảo Nới Trần Vốn — Tác Động Thị Trường?",
          "summary": "Dự báo Fed giữ nguyên lãi suất (chú ý phát biểu thống đốc mới). NHNN dự thảo nới trần vốn ngắn hạn cho vay trung–dài hạn lên 40% — ngân hàng có thêm dư địa cho vay, tích cực. Cả hai tin khó tạo cú hích mạnh ngắn hạn. Tuần tích cực nhưng chưa có xu hướng mới — giữ tỷ trọng, hạn chế đảo hàng.",
          "feedChips": [
            {
              "label": "Fed ◷ giữ nguyên LS",
              "sig": "wait"
            },
            {
              "label": "NHNN ↑ nới trần 40%",
              "sig": "up"
            },
            {
              "label": "Thị trường ↑ tuần tích cực",
              "sig": "up"
            },
            {
              "label": "Đảo hàng ⚠ hạn chế",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "Fed",
              "value": "Giữ nguyên lãi suất",
              "signal": "wait",
              "note": "Dự báo gần như chắc chắn Fed giữ nguyên. Chú ý phát biểu lần đầu của thống đốc mới — có thể mở đường điều chỉnh lãi suất cuối năm/sang năm. Thị trường khó phản ứng dữ dội."
            },
            {
              "tag": "NHNN",
              "value": "Dự thảo nới trần 40%",
              "signal": "up",
              "note": "Nới trần vốn ngắn hạn cho vay trung–dài hạn lên 40% (tiếp nối thông tư 08). Ngân hàng có thêm tiền cho vay; ngắn hạn chưa đua tăng lãi suất huy động → tích cực."
            },
            {
              "tag": "Thị trường",
              "value": "Tuần tích cực",
              "signal": "up",
              "note": "Tuần \"vãn hồi KPI\" — nhưng chưa sinh xu hướng mới. Mỗi phiên chỉ 1–2 mã tăng, không tăng cả ngành."
            },
            {
              "tag": "Chiến lược",
              "value": "Giữ tỷ trọng",
              "signal": "wait",
              "note": "Giữ như tháng 5. Cổ phiếu cơ bản dài hạn: giữ, không bán (áp lực bán không nhiều). Thanh khoản yếu → hạn chế đảo hàng."
            }
          ],
          "sections": [
            {
              "title": "Vĩ mô — Fed & NHNN",
              "signal": "wait",
              "sigLabel": "Chưa tác động mạnh ngắn hạn",
              "para": "Hai tin được quan tâm: cuộc họp Fed (dự báo giữ nguyên lãi suất, đáng chú ý là phát biểu của thống đốc mới) và dự thảo NHNN nới trần vốn ngắn hạn cho vay trung–dài hạn lên 40%. Dự thảo thể hiện ưu tiên mục tiêu tăng trưởng hai con số, chấp nhận thêm chút rủi ro hệ thống. Tuy vậy cả hai khó tạo cú hích mạnh ngắn hạn — đừng kỳ vọng nhóm ngân hàng bật tăng ngay.",
              "bullets": [
                "Fed: gần như chắc giữ nguyên; phát biểu thống đốc mới có thể \"mở đường\" điều chỉnh chính sách.",
                "NHNN: nới trần 40% → ngân hàng nhiều dư địa cho vay, chưa đua tăng lãi suất huy động.",
                "Tác động ngắn hạn được đánh giá là không lớn."
              ]
            },
            {
              "title": "Chiến lược giao dịch",
              "signal": "wait",
              "sigLabel": "Giữ tỷ trọng — hạn chế đảo hàng",
              "para": "Tuần này tích cực nhưng thị trường chưa củng cố xu hướng. Giữ tỷ trọng như tháng 5; cổ phiếu cơ bản dài hạn mới mua một phần thì giữ nguyên. Vị thế ngắn hạn chỉ mua vừa phải. Thanh khoản yếu khiến đảo hàng kém hiệu quả và tốn phí — nên quản trị theo setup ban đầu thay vì bán con này mua con kia.",
              "tickers": [
                {
                  "ticker": "MSB",
                  "action": "Giữ",
                  "aBg": "oklch(0.95 0.02 235)",
                  "aColor": "oklch(0.4 0.08 235)",
                  "zone": "—",
                  "note": "Càng giữ càng tăng, suýt vượt đỉnh — ví dụ cho việc kiên nhẫn theo setup."
                },
                {
                  "ticker": "FRT",
                  "action": "Theo dõi",
                  "aBg": "#EFEEE9",
                  "aColor": "#5F5E57",
                  "zone": "—",
                  "note": "Nằm trong số ít mã tăng theo phiên."
                },
                {
                  "ticker": "VSC",
                  "action": "Theo dõi",
                  "aBg": "#EFEEE9",
                  "aColor": "#5F5E57",
                  "zone": "—",
                  "note": "Mã tăng phiên gần nhất — không tăng cả ngành."
                }
              ]
            }
          ]
        }
      ],
      "sources": [
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "08/07/2026",
          "title": "Lúc này có nên chốt lãi 5–7%? 3 cách chốt lãi ngắn hạn ở thị trường đi ngang",
          "meta": "Video công khai · Chứng khoán 5 phút"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "17/06/2026",
          "title": "2 tin Fed họp và NHNN ra dự thảo nới trần vốn cho vay tác động đến thị trường như thế nào?",
          "meta": "Video công khai · Chứng khoán 5 phút"
        }
      ]
    }
  }
};
