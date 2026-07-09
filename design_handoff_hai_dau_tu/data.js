// ─────────────────────────────────────────────────────────────────────────────
// HDT DATA — Hải Đầu Tư cùng các Chuyên Gia
// QUY TẮC: giữ 3 bài GẦN NHẤT mỗi kênh. Thêm bài mới = prepend vào experts[id].updates
//          (và cắt bớt bài cũ nhất để luôn còn 3). Cập nhật lastUpdated.
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
              "para": "Áp lực tỷ giá và nước ngoài bán ròng, kiều hối bù đắp phần nào. Lãi suất VND cao → không có dòng tiền đầu cơ, phải đánh chắc: cơ hội 8–10% ăn nhanh, còn lại nắm dài chờ \"gió đông\" (giữa 2027, dẫn dắt bởi ngân hàng và chứng khoán). Chỉ số tháng 7 có thể bị VIC/VHM đè về 1.750–1.763, thậm chí 1.573 — nhưng đừng để chỉ số ép bán hàng của mình.",
              "tickers": [
                {
                  "ticker": "VCB",
                  "zone": "Cầm",
                  "note": "Cầm chặt, không thay đổi — tích lũy là bình thường.",
                  "action": "Giữ",
                  "aBg": "oklch(0.95 0.02 235)",
                  "aColor": "oklch(0.4 0.08 235)"
                },
                {
                  "ticker": "BID",
                  "zone": "Cầm",
                  "note": "Cầm chặt, không thay đổi.",
                  "action": "Giữ",
                  "aBg": "oklch(0.95 0.02 235)",
                  "aColor": "oklch(0.4 0.08 235)"
                },
                {
                  "ticker": "CTG",
                  "zone": "Cầm",
                  "note": "Đang cầm cứ cầm.",
                  "action": "Giữ",
                  "aBg": "oklch(0.95 0.02 235)",
                  "aColor": "oklch(0.4 0.08 235)"
                },
                {
                  "ticker": "HDB",
                  "zone": "Cầm",
                  "note": "HD Securities sắp lên sàn → có cớ để kéo.",
                  "action": "Giữ",
                  "aBg": "oklch(0.95 0.02 235)",
                  "aColor": "oklch(0.4 0.08 235)"
                },
                {
                  "ticker": "BVB",
                  "zone": "Cầm",
                  "note": "Sắp limit lên sàn HOSE — chưa cần chốt lời, kỳ vọng rõ.",
                  "action": "Giữ",
                  "aBg": "oklch(0.95 0.02 235)",
                  "aColor": "oklch(0.4 0.08 235)"
                },
                {
                  "ticker": "TCX",
                  "zone": "Giữ · chủ lực",
                  "note": "Chưa vi phạm gì để phải bán — giữ, lướt sóng nhóm chứng khoán.",
                  "action": "Giữ",
                  "aBg": "oklch(0.95 0.02 235)",
                  "aColor": "oklch(0.4 0.08 235)"
                },
                {
                  "ticker": "VCI",
                  "zone": "Lướt 8–10%",
                  "note": "Lướt sóng cùng SSI/VND/VIX; nhóm CK hồi từ đáy 18–33%.",
                  "action": "Mua",
                  "aBg": "oklch(0.95 0.04 150)",
                  "aColor": "oklch(0.42 0.1 150)"
                },
                {
                  "ticker": "DCM",
                  "zone": "Vùng giá trị · cầm 8 tháng",
                  "note": "Đạm Cà Mau tốt nhất nhóm phân bón; vùng lái dìm ăn hàng, giá dầu giảm còn tốt cho đầu vào khí.",
                  "action": "Mua",
                  "aBg": "oklch(0.95 0.04 150)",
                  "aColor": "oklch(0.42 0.1 150)"
                },
                {
                  "ticker": "HPG",
                  "zone": "Giải ngân 1/3",
                  "note": "Vùng này giải ngân dần 1/3 được, đừng để chỉ số ép bán.",
                  "action": "Mua",
                  "aBg": "oklch(0.95 0.04 150)",
                  "aColor": "oklch(0.42 0.1 150)"
                },
                {
                  "ticker": "SCS",
                  "zone": "Nắm giữ",
                  "note": "Lỗ 6–7% không sao nếu cầm dài hạn; đánh spring kệ, cứ cầm.",
                  "action": "Giữ",
                  "aBg": "oklch(0.95 0.02 235)",
                  "aColor": "oklch(0.4 0.08 235)"
                },
                {
                  "ticker": "HVN",
                  "zone": "Chỉ lướt ~27–28",
                  "note": "Hàng không VN chỉ lướt sóng 10–12%, không đầu tư dài hạn (giá vé đắt, thu hồi vốn chậm).",
                  "action": "Theo dõi",
                  "aBg": "#EFEEE9",
                  "aColor": "#5F5E57"
                },
                {
                  "ticker": "PNJ",
                  "zone": "Tránh · có thể về 44",
                  "note": "Rủi ro pháp lý: giám định làm giả mã 28.000 viên kim cương → mất niềm tin, áp lực dòng tiền hoàn hàng.",
                  "action": "Bán",
                  "aBg": "oklch(0.95 0.04 27)",
                  "aColor": "oklch(0.46 0.15 27)"
                }
              ]
            }
          ]
        },
        {
          "date": "2026-06-21",
          "dateShort": "21/06",
          "timeAgo": "15 ngày trước",
          "tab": "Video · Tuần 25",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Siêu Chu Kỳ Chip Đối Đầu Vĩ Mô Xấu — ETF Funds Cơ Cấu Mạnh Cuối Tháng 6",
          "summary": "Nhịp đập thị trường tuần 25: giá dầu neo cao 75–85 USD dài hạn (dự trữ G7/Mỹ thiếu, eo biển Hormuz căng lại). Lạm phát không hạ vì giá chip/bộ nhớ tăng (Apple sắp tăng giá iPhone 17 & 18) → xác suất Fed tăng lãi T9 ~70%. Nasdaq +34% từ đáy, ETF cơ cấu ~160 tỷ USD cuối T6 → AI/semiconductor phải chỉnh. VN-Index thiếu thanh khoản (LDR 115%), nước ngoài bán ròng ~20.000 tỷ/tháng — chọn cổ phiếu nội lực mạnh, tích lũy kiểu \"mùa đông\".",
          "feedChips": [
            {
              "label": "Dầu ◷ neo 75–85 dài hạn",
              "sig": "wait"
            },
            {
              "label": "Fed ↓ tăng lãi T9 ~70%",
              "sig": "down"
            },
            {
              "label": "AI/Nasdaq ↓ phải chỉnh",
              "sig": "down"
            },
            {
              "label": "CK Việt ⚠ kẹt thanh khoản",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "Giá dầu",
              "value": "Neo 75–85 USD",
              "signal": "wait",
              "note": "Đàm phán Mỹ–Iran 60 ngày nhiều biến động. Dự trữ chiến lược G7/Nhật/Mỹ thiếu (cần 3–6 tháng bù), OPEC+ giữ giá → khó giảm sâu, kịch bản có thể test 90."
            },
            {
              "tag": "Fed",
              "value": "Tăng lãi T9 ~70%",
              "signal": "down",
              "note": "Lạm phát lõi không chỉ do dầu: giá chip/bộ nhớ AI tăng điên cuồng, Apple sắp tăng giá iPhone 17 & 18 → PCE còn cao. Kevin Warsh diều hâu, bỏ forward guidance."
            },
            {
              "tag": "CK Mỹ",
              "value": "Nasdaq +34% → chỉnh",
              "signal": "down",
              "note": "S&P +20% / Nasdaq +34% từ đáy, margin kỷ lục. SpaceX IPO P/S ~90x vô lý, vào rổ Nasdaq 100 trong 15 ngày + BCTC giữa T7 → rủi ro. Không chase, chờ thị trường bớt điên."
            },
            {
              "tag": "CK Việt",
              "value": "Kẹt thanh khoản",
              "signal": "warn",
              "note": "LDR toàn hệ thống 115% (tín dụng +5,71% / huy động +2,98%). Nước ngoài bán ròng ~20.000 tỷ/tháng. VN-Index phụ thuộc nhóm Vin — đừng nhìn index."
            }
          ],
          "sections": [
            {
              "title": "Địa chính trị & Giá dầu",
              "signal": "wait",
              "sigLabel": "Neo cao — khó giảm sâu",
              "para": "IRGC tuyên bố đóng eo biển Hormuz lần hai (cáo buộc Israel tiếp tục tấn công Nam Liban, vi phạm thỏa thuận). Mỹ–Iran đàm phán tại Thụy Sĩ trong 60 ngày — sẽ nhiều tin nhiễu. Trump thừa nhận tại G7: nếu không có thỏa thuận, dự trữ dầu Mỹ cạn trong 4 tuần. Giá dầu neo 75–85 USD: không quá cao (triệt tiêu nhu cầu) cũng không quá thấp (Petrodollar), OPEC+ và nhu cầu tích trữ giữ giá.",
              "bullets": [
                "Đàm phán 60 ngày: nhiều biến động tin tức, có thể test lại vùng 90.",
                "Thiên về mua/long nhẹ vùng này — KHÔNG short dầu (rất nguy hiểm).",
                "Dự trữ chiến lược G7/Nhật/Mỹ cần 3–6 tháng để bù đắp thiếu hụt."
              ]
            },
            {
              "title": "Vĩ mô Fed — Lạm phát chip đẩy lãi suất",
              "signal": "down",
              "sigLabel": "Diều hâu — tăng lãi T9 ~70%",
              "para": "Lạm phát lõi (PCE) không hạ được vì ngoài năng lượng còn có giá nhà, y tế, thiết bị điện tử. Nhu cầu AI data center đẩy giá chip/RAM/bộ nhớ tăng mạnh nhất một thập kỷ — CEO Apple xác nhận sẽ tăng giá cả iPhone 17 lẫn iPhone 18; Goldman dự báo nhu cầu sản phẩm Apple giảm ~10%. Kevin Warsh diều hâu, bỏ forward guidance → thị trường biến động cực mạnh hai chiều.",
              "bullets": [
                "Giá DDR/bộ nhớ tăng vọt do capex data center AI → đội giá thiết bị điện tử.",
                "PCE còn cao → Fed không có cửa hạ lãi 2026, xác suất tăng T9 ~70%.",
                "Cổ phiếu high-duration growth (Nvidia, Meta, Microsoft, ARM) chịu áp lực mạnh."
              ]
            },
            {
              "title": "Chứng khoán Mỹ — Cao thì phải chỉnh",
              "signal": "down",
              "sigLabel": "Quá nóng — chờ bớt điên rồi mua",
              "para": "S&P 500 +20%, Nasdaq 100 +34% từ đáy, margin nhà đầu tư kỷ lục → hết dư địa kéo lên. ETF thụ động cơ cấu ~160 tỷ USD cuối tháng 6 (JP Morgan) tạo biến động lớn. SpaceX IPO P/S ~90x là định giá ảo, sẽ vào rổ Nasdaq 100 trong ~15 ngày rồi gặp BCTC quý đầu giữa tháng 7 — rủi ro lớn. Không chống lại thị trường bằng short (vô lý lâu hơn sức chịu của tài khoản).",
              "bullets": [
                "Intel, Micron, Sandisk, SpaceX, Accenture sẽ phải điều chỉnh.",
                "Hàn Quốc (Kospi), Nhật (Nikkei) cũng quá cao — sẽ chỉnh mạnh.",
                "Không phải điểm mua: chốt lời ngắn hạn, chờ thị trường bớt điên rồi tham gia."
              ]
            },
            {
              "title": "Chứng khoán Việt Nam — Mùa đông thanh khoản",
              "signal": "warn",
              "sigLabel": "Kẹt vốn — tích lũy cổ phiếu nội lực mạnh",
              "para": "VN-Index ~1.824 điểm nhưng thiếu sinh khí: LDR toàn hệ thống 115% (tín dụng +5,71% nhưng huy động chỉ +2,98%) → tín dụng không chảy. NHNN chủ yếu bơm/hút ngắn hạn qua OMO lãi cao. Nước ngoài bán ròng ~20.000 tỷ (~700–800 triệu USD)/tháng. Bốn động lực thanh khoản (tiền mặt lưu thông, thu xuất khẩu Q3, FDI sang VND lãi 8–9%, đầu tư công) chưa rõ ràng.",
              "bullets": [
                "VN-Index phụ thuộc VIC/VHM/VRE/VPL — nhìn cổ phiếu cụ thể, đừng nhìn index.",
                "Cổ phiếu nền đẹp/rẻ: VCB, BID, VNM, MSN. FPT bị bán mạnh (room ngoại 49% 2021 → 29% nay) do lợi thế AI lung lay.",
                "Triết lý \"mùa đông\": tích lũy cổ phiếu nội lực mạnh (dòng tiền, biên LN, MOAT), chờ tín dụng nở lại."
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
