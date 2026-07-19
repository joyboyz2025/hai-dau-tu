// ─────────────────────────────────────────────────────────────────────────────
// HDT DATA — Hải Đầu Tư cùng các Chuyên Gia
// QUY TẮC: giữ 7 bài GẦN NHẤT mỗi kênh. Thêm bài mới = prepend vào experts[id].updates
//          rồi cắt còn 7. Riêng THÁI PHẠM ưu tiên bài HỘI VIÊN (member-video/member-post)
//          — giữ bài mới nhất + các bài hội viên gần nhất.
// ─────────────────────────────────────────────────────────────────────────────
window.HDT_DATA = {
  "lastUpdated": "19/07/2026 · Mới nhất",
  "pulse": [
    {
      "name": "CK Việt",
      "mark": "⚠ Phòng thủ 60/40",
      "sig": "warn"
    },
    {
      "name": "CK Mỹ",
      "mark": "↓ Vào vùng short",
      "sig": "down"
    },
    {
      "name": "Vàng",
      "mark": "◷ Chờ đáy 3.600–3.700",
      "sig": "wait"
    },
    {
      "name": "Dầu",
      "mark": "↑ Long, đích 88–90",
      "sig": "up"
    },
    {
      "name": "Bitcoin",
      "mark": "↓ Short 69–70k",
      "sig": "down"
    },
    {
      "name": "Tỷ giá",
      "mark": "⚠ Áp lực",
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
      "sigLabel": "Short",
      "date": "18/07",
      "expertId": "thai-pham",
      "summary": "Vết nứt lớn: IPO/phát hành (SpaceX 110 tỷ, Google 85 tỷ, SK2X 26,5 tỷ) rút tiền thật khỏi thị trường; margin cá nhân +494 tỷ đô/12 tháng = 1,4% vốn hóa — ngang đỉnh 2018, vượt dotcom. AI capex dư thừa (XAI/Meta cho thuê lại), Kimi K3 Trung Quốc ngang Fable 5 giá 60%. US30/S&P vào vùng short; Apple short 320–330 chờ BCTC 30/07; SpaceX đích 80–87.",
      "levels": "Short S&P/US30 ngay · Nasdaq sau hồi 1–2 phiên · Apple 320–330 giữ qua 30/07",
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
      "sig": "warn",
      "sigLabel": "Phòng thủ",
      "date": "18/07",
      "expertId": "thai-pham",
      "summary": "Tiền 60/cổ 40. Quỹ ngoại bán đồng loạt (lãi Mỹ thực dương, VIC/VHM chi phối index, nâng hạng \"mua trước kéo xả\") → VN-Index về ~1.600 \"rất khả thi\". Danh mục: BID, BVBank, SCS, VNM, ít TCX; tích DCM/DPM dài hạn ~30% danh mục. Bỏ hẳn lướt sóng. Tránh FPT, PNJ, PC1, DGC.",
      "levels": "Tiền/Hàng 60/40 · tích DCM+DPM ≤30% danh mục · giải ngân mạnh nếu về ~1.600",
      "altViews": [
        {
          "expertId": "ck-5-phut",
          "sig": "wait",
          "sigLabel": "Đừng bán đáy",
          "note": "Chưa vào downtrend về tín hiệu; midcap về ngang đáy chiến tranh thương mại — bán lúc này rủi ro hơn giữ. Dài hạn: chia 3–4 lệnh mua từng phần."
        },
        {
          "expertId": "azfin",
          "sig": "up",
          "sigLabel": "Tích sản kỷ luật",
          "note": "Danh mục 5–10 mã đầu ngành: P/E <10, P/B <2, ROE >15%, cổ tức x2–3 thị trường; lãnh đạo bị khởi tố là loại ngay."
        }
      ]
    },
    {
      "name": "Vàng",
      "sig": "wait",
      "sigLabel": "Chờ đáy",
      "date": "18/07",
      "expertId": "thai-pham",
      "summary": "Fed hết cửa hạ lãi (thậm chí tăng) → vàng yếu trên đồ thị tuần; hồi kỹ thuật khó về 4.100. Kịch bản quét xuống 3.700, cực đoan 3.600 — là vùng bắt đáy sẽ mua. Trong nước chênh 19–20tr/lượng: KHÔNG mua, đợi chênh 10–12tr; chỉ mua thương hiệu uy tín 15–20 năm, mua đâu bán đấy.",
      "levels": "Bắt đáy 3.600–3.700 · long cũ: chốt ~4.040, stop 3.930 · trong nước đợi chênh ≤10–12tr",
      "altViews": []
    },
    {
      "name": "Dầu",
      "sig": "up",
      "sigLabel": "Long",
      "date": "18/07",
      "expertId": "thai-pham",
      "summary": "Ngừng bắn 17/06 sụp đổ: Mỹ đánh Iran 7 đêm, Houthi dọa đóng Biển Đỏ; Trump cần dầu cao giữ petrodollar. Dầu hồi 70 → 84 đúng call Tập 36–37 (\"hơn dự kiến\"). Không short 2–3 tuần tới; kịch bản leo thang US 88–90, UK 95–96.",
      "levels": "Long — cắt lỗ 78 · mục tiêu US 88–90 · UK 95–96 nếu đánh lớn",
      "altViews": []
    },
    {
      "name": "Bitcoin & Crypto",
      "sig": "down",
      "sigLabel": "Short",
      "date": "18/07",
      "expertId": "thai-pham",
      "summary": "\"Banana\" gãy đang hình thành, cấu trúc yếu; BTC chỉ là một ticker — Mỹ đã kiểm soát thị trường crypto công khai. Fed không hạ lãi → áp lực. Căng thẳng Iran đẩy fake pump lên 69–70k là điểm short; chỉ mua khi test đỉnh 2021 ~50k.",
      "levels": "Short 69–70k (fake pump) · chỉ mua lại ở ~50k",
      "altViews": []
    },
    {
      "name": "Tỷ giá & Vĩ mô VN",
      "sig": "warn",
      "sigLabel": "Áp lực",
      "date": "18/07",
      "expertId": "thai-pham",
      "summary": "Lãi suất Mỹ thực dương hút vốn — khối ngoại bán ròng, tỷ giá còn áp lực; lãi suất trong nước cao. Lạm phát toàn cầu quay lại: dầu +20% từ đáy, cước vận tải x3, Mỹ áp thuế điều tra mới từ 24/07 → Fed giữ/tăng lãi \"for longer\", đè định giá thị trường mới nổi.",
      "levels": "Fed: giữ hoặc tăng (BofA: +75bps) · mốc thuế Mỹ 24/07 · BCTC Apple 30/07",
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
        "badge": "Phòng thủ",
        "badgeBg": "oklch(0.95 0.05 85)",
        "badgeColor": "oklch(0.5 0.12 85)",
        "bar1": 60,
        "bar2": 40,
        "label1": "Tiền mặt 60%",
        "label2": "Cổ phiếu 40%"
      },
      "updates": [
        {
          "date": "2026-07-18",
          "dateShort": "18/07",
          "timeAgo": "Hôm qua",
          "tab": "Tập 38 · Tuần 29",
          "sourceType": "member-video",
          "typeLabel": "Video hội viên · Tập 38",
          "title": "Tập 38 (Hội Viên): Trung Đông Nóng Lại — Long Dầu, Chờ Vàng 3.600–3.700, Short CK Mỹ",
          "summary": "Ngừng bắn Iran–Mỹ (ký 17/06) sụp đổ: Mỹ công kích Iran 7 đêm liên tiếp, Houthi dọa đóng Biển Đỏ — dầu hồi về 84 \"hơn dự kiến\", kịch bản US 88–90, UK 95–96; không short dầu 2–3 tuần tới. Lạm phát quay lại (cước Thượng Hải–LA 6.482 đô/container, x3 từ T2; thuế điều tra Mỹ từ 24/07) → Fed chỉ có giữ hoặc TĂNG lãi (BofA: +75bps), không có cửa hạ. Vàng đồ thị tuần yếu: hồi kỹ thuật khó về 4.100, chờ quét 3.700 rồi 3.600 là vùng bắt đáy. Bitcoin \"banana\" yếu — short nếu fake pump 69–70k, chỉ mua ~50k. CK Mỹ vết nứt lớn: IPO/phát hành hút ~220 tỷ đô, margin cá nhân 1,4% vốn hóa (ngang đỉnh 2018, vượt dotcom) — US30/S&P vào vùng short, Apple short 320–330 chờ BCTC 30/07, giữ SpaceX short đích 80–87. Samsung về 214.000 KRW, sâu hơn 170.000. VN: quỹ ngoại rút đồng loạt — giữ tiền 60/cổ 40, VN-Index về ~1.600 \"rất khả thi\"; danh mục chỉ còn BID, BVBank, SCS, VNM, ít TCX; tích DCM/DPM dài hạn; tránh FPT, PNJ, PC1, Đức Giang.",
          "feedChips": [
            {
              "label": "Dầu ↑ long, kịch bản 88–90",
              "sig": "up"
            },
            {
              "label": "Vàng ◷ chờ đáy 3.600–3.700",
              "sig": "wait"
            },
            {
              "label": "CK Mỹ ↓ vào vùng short",
              "sig": "down"
            },
            {
              "label": "Fed ⚠ chỉ giữ hoặc tăng lãi",
              "sig": "warn"
            },
            {
              "label": "VN ⚠ tiền 60/40, đích ~1.600",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "Dầu",
              "value": "Long — mục tiêu 88–90 (US), cắt lỗ 78",
              "signal": "up",
              "note": "Đã côn hồi phục về 80 từ Tập 36–37 (giờ 84, \"hơn dự kiến\"). Ngừng bắn sụp đổ, Mỹ đánh Iran 7 đêm, Houthi dọa đóng Biển Đỏ; Trump cần dầu cao giữ petrodollar. Không short 2–3 tuần; UK có thể 95–96 nếu đánh lớn. Lót vừa phải."
            },
            {
              "tag": "Vàng",
              "value": "Chờ bắt đáy 3.600–3.700",
              "signal": "wait",
              "note": "Đồ thị tuần yếu; hồi kỹ thuật khó về 4.100 (còn cửa ~4.069). Kịch bản quét xuống 3.700, cực đoan 3.600 — sẽ mua bắt đáy tại đó. Long cũ: chốt ~4.040, stop 3.930. Trong nước chênh 19–20tr — KHÔNG mua, đợi chênh 10–12tr; mua thương hiệu 15–20 năm, mua đâu bán đấy."
            },
            {
              "tag": "Bitcoin",
              "value": "Short nếu fake pump 69–70k",
              "signal": "down",
              "note": "\"Banana\" gãy đang hình thành, yếu. Fed không hạ lãi → crypto áp lực. Chỉ mua khi test đỉnh 2021 ~50k. BTC chỉ là 1 ticker — Mỹ đã kiểm soát thị trường crypto công khai."
            },
            {
              "tag": "CK Mỹ",
              "value": "US30/S&P vào vùng short",
              "signal": "down",
              "note": "SpaceX IPO rút 110 tỷ, SK2X 26,5 tỷ, Google 85 tỷ khỏi thị trường; margin cá nhân +494 tỷ đô/12 tháng = 1,4% vốn hóa (ngang 2018, vượt dotcom 1,1%). Nasdaq đợi hồi 1–2 phiên rồi short. Apple short 320–330 (1/2 vị thế), giữ chờ BCTC 30/07. SpaceX giữ short từ 155, đích 80–87 (T1/2027). Intel đích ~77; MU/Marvell chốt 1/2; canh short cyber: Palo Alto, Fortinet, CrowdStrike. AI capex dư thừa (XAI/Meta cho thuê lại), Kimi K3 Trung Quốc giá 60% — Big Tech khó chịu nổi."
            },
            {
              "tag": "Nhật & Hàn",
              "value": "Samsung về 214.000, sâu hơn 170.000 KRW",
              "signal": "down",
              "note": "Đã côn short Samsung đúng đỉnh. Kospi margin kỷ lục, NĐT cháy tài khoản; đầu tuần Samsung có thể gãy về 214.000 KRW, cực đoan 170.000 mới hồi. Nikkei hồi kỹ thuật 1–2 hôm rồi test lại 58.700 — canh cao đập xuống."
            },
            {
              "tag": "CK Việt",
              "value": "Tiền 60/40 — VN-Index về ~1.600 \"rất khả thi\"",
              "signal": "warn",
              "note": "Quỹ ngoại bán đồng loạt: lãi Mỹ thực dương hút vốn, VIC/VHM định giá cao chi phối index, nâng hạng bị \"mua trước kéo xả\". Danh mục: BID, BVBank (chào sàn 13.1), SCS (ăn cổ tức), VNM (túc tắc vùng 56), ít TCX; tích DCM/DPM dài hạn ~30% danh mục (đã mua 70% vị thế). Không lướt nữa. Tránh FPT (hở room, Mỹ bán), PNJ, PC1, Đức Giang."
            }
          ],
          "sections": [
            {
              "title": "Trung Đông nóng lại — dầu và lạm phát",
              "signal": "up",
              "sigLabel": "Dầu long — Fed hết cửa hạ lãi",
              "para": "Lệnh ngừng bắn ký 17/06 đã kết thúc: Mỹ công kích Iran 7 đêm liên tiếp (phá tháp giám sát cảng, cầu qua Bandar Abbas), Iran phóng tên lửa vào tàu Mỹ ở Ấn Độ Dương và căn cứ tại Jordan, Houthi dọa đóng Biển Đỏ. Trump cần giá dầu cao để giữ petrodollar — \"một mũi tên trúng ba đích\".",
              "bullets": [
                "Dầu hồi từ 70 lên 84 — đúng call Tập 36–37, \"hơn dự kiến\". Kịch bản leo thang: US 88–90, UK 95–96. Long cắt lỗ 78, không short 2–3 tuần tới.",
                "Cước vận tải Thượng Hải–LA 6.482 đô/container — gấp 3 từ tháng 2, tăng 10 tuần liên tiếp; từ 24/07 Mỹ áp loạt thuế điều tra mới (sở hữu trí tuệ, lao động) thay thuế đối ứng bị tuyên vi hiến.",
                "Lạm phát Mỹ tháng 7–8 sẽ phản ánh giá dầu tăng 20% từ đáy → Fed chỉ có 2 kịch bản: giữ lãi cao hoặc TĂNG (BofA: +75bps). Không có cửa hạ.",
                "Vàng: đồ thị tuần yếu, hồi kỹ thuật khó về 4.100; chờ quét 3.700–3.600 bắt đáy. Trong nước chênh 19–20tr/lượng — không mua, đợi 10–12tr."
              ]
            },
            {
              "title": "CK Mỹ: vết nứt lớn — chuyển hẳn sang short",
              "signal": "down",
              "sigLabel": "Short — margin ngang đỉnh 2018",
              "para": "Thị trường Mỹ bị rút tiền thật quy mô lớn qua IPO/phát hành (SpaceX 110 tỷ, Google 85 tỷ, SK2X 26,5 tỷ; OpenAI/Anthropic xếp hàng) trong khi margin nhà đầu tư cá nhân lập kỷ lục: +86,5 tỷ đô riêng tháng 6, +494 tỷ đô 12 tháng (+50% yoy), đạt 1,4% vốn hóa S&P 500 — ngang đỉnh 2018, vượt đỉnh dotcom 1,1%. \"Hết tiền thì phải sập.\"",
              "bullets": [
                "US30, S&P 500: bắt đầu short được, \"thậm chí short tốt\". Nasdaq đợi hồi kỹ thuật 1–2 phiên rồi short — nhiều khi phiên châu Á không kịp cho hồi.",
                "Apple: kéo giữ chỉ số kiểu \"FOMO trap\"; iPhone 18 tăng giá → sức mua giảm, sale-in chỉ đỡ được quý này. Short 320–330 với 1/2 vị thế, để dành 1/2 cho sau BCTC 30/07 — guidance Q3 yếu là \"gãy sâu về chen line\".",
                "SpaceX: giữ short từ ~155, đích 80–87, giữ đến T1/2027; còn 4 đợt unlock đến 12/2026 làm cung tăng gấp 8 lần, giá trị thật ~40–50 đô/cp.",
                "Intel đích ~77; MU short từ 1.100 đã +20%, chốt 1/2; Marvell chốt 1/2; cyber security là nhóm gãy tiếp theo — Palo Alto, Fortinet, CrowdStrike.",
                "AI capex dư thừa: XAI và Meta phải cho thuê lại công suất; mô hình Kimi K3 (Alibaba/Tencent hậu thuẫn) ngang Fable 5/GPT-5.6 với giá 60% → đe dọa toàn bộ bài toán đầu tư chip đắt tiền.",
                "Kỷ luật vị thế: có 10.000 đánh 10.000 (đòn bẩy ≤1,2x); \"rượu, margin và phụ nữ\" — ba thứ khiến đàn ông gục ngã. MU từng dí -15% trước khi có quả ngọt — không margin mới giữ được lệnh."
              ]
            },
            {
              "title": "CK Việt: vì sao thoát về 40% cổ phiếu",
              "signal": "warn",
              "sigLabel": "Phòng thủ — quỹ ngoại rút đồng loạt",
              "para": "Đã đổi thesis từ tuần trước (cổ 40/tiền 60) vì áp lực bán của các quỹ: lãi suất Mỹ thực dương hút tiền về Mỹ; quỹ tại VN underperform so với Mỹ/Hàn/Nhật/Đài bị rút vốn; index bị chi phối bởi VIC/VHM/VRE định giá đã rất cao; dòng \"mua trước nâng hạng\" giờ kéo xả. Kịch bản VN-Index về vùng 1.600 là \"rất khả thi\" — MA200 không có ý nghĩa.",
              "bullets": [
                "Danh mục 40% còn: BIDV (chọn thay VCB), BVBank (chào sàn 13.1 ngày 21/07), SCS (lỗ ~7–8%, ăn cổ tức, tin lợi thế cạnh tranh), VNM (túc tắc mua vùng 56, bán khi +5–7%), một phần TCX.",
                "Mua gì dài hạn: chỉ Đạm Cà Mau + Đạm Phú Mỹ — tích đến ~30% danh mục, đã mua 70% vị thế, \"bất chấp qua sóng gió\"; cầm ăn cổ tức.",
                "Đã bỏ hẳn lướt sóng chứng khoán (\"vào đụng -6% cắt chạy, khó đánh lắm\") — giữ tiền đợi thời, như mùa đông đừng cố bón phân.",
                "Tránh: FPT (hở room ngoại, Mỹ bán mạnh), PNJ (\"thông tin lằng nhằng\"), PC1 (kẹt thì tranh thủ thoát khi có tin kéo), Đức Giang.",
                "Chia sẻ riêng hội viên: video công khai sẽ không nói mức độ tiêu cực cụ thể này — \"nói public thì không thể nói cặn kẽ như vậy\"."
              ]
            }
          ],
          "tradeLevels": [
            {
              "group": "Vàng & Bạc",
              "items": [
                {
                  "asset": "Vàng",
                  "dir": "Chờ mua",
                  "entry": "Bắt đáy 3.600–3.700",
                  "target": "Hồi kỹ thuật ~4.069 (khó về 4.100)",
                  "stop": "Long cũ: chốt ~4.040, stop 3.930",
                  "sig": "wait",
                  "tv": "OANDA:XAUUSD"
                }
              ]
            },
            {
              "group": "Bitcoin & Crypto",
              "items": [
                {
                  "asset": "Bitcoin",
                  "dir": "Short",
                  "entry": "Fake pump 69–70k",
                  "target": "Chỉ mua lại ở ~50k (đỉnh 2021)",
                  "stop": "",
                  "sig": "down",
                  "tv": "BINANCE:BTCUSDT"
                }
              ]
            },
            {
              "group": "Dầu",
              "items": [
                {
                  "asset": "Dầu WTI (US)",
                  "dir": "Long",
                  "entry": "Đang 84 — không short 2–3 tuần",
                  "target": "88–90",
                  "stop": "Cắt lỗ 78",
                  "sig": "up",
                  "tv": "TVC:USOIL"
                },
                {
                  "asset": "Dầu Brent (UK)",
                  "dir": "Long",
                  "entry": "Theo WTI",
                  "target": "95–96 nếu leo thang",
                  "stop": "",
                  "sig": "up",
                  "tv": "TVC:UKOIL"
                }
              ]
            },
            {
              "group": "Chứng khoán Mỹ",
              "items": [
                {
                  "asset": "US30 / S&P 500",
                  "dir": "Short",
                  "entry": "Vào vùng short ngay",
                  "target": "Take profit vùng thấp",
                  "stop": "",
                  "sig": "down",
                  "tv": "TVC:SPX"
                },
                {
                  "asset": "Nasdaq",
                  "dir": "Short",
                  "entry": "Đợi hồi 1–2 phiên",
                  "target": "",
                  "stop": "",
                  "sig": "down",
                  "tv": "TVC:NDQ"
                },
                {
                  "asset": "Apple",
                  "dir": "Short",
                  "entry": "320–330 (1/2 vị thế, 1/2 chờ BCTC 30/07)",
                  "target": "Về chen line nếu guidance Q3 xấu",
                  "stop": "",
                  "sig": "down",
                  "tv": "NASDAQ:AAPL"
                },
                {
                  "asset": "SpaceX",
                  "dir": "Short",
                  "entry": "Giữ từ ~155",
                  "target": "80–87 (đến T1/2027)",
                  "stop": "",
                  "sig": "down"
                },
                {
                  "asset": "Intel",
                  "dir": "Short",
                  "entry": "Giữ — đã chốt 1/2",
                  "target": "~77",
                  "stop": "",
                  "sig": "down",
                  "tv": "NASDAQ:INTC"
                },
                {
                  "asset": "Cyber (PANW/FTNT/CRWD)",
                  "dir": "Short",
                  "entry": "Vị thế nhỏ, không đòn bẩy",
                  "target": "Nhóm gãy sau AI chip",
                  "stop": "",
                  "sig": "down",
                  "tv": "NASDAQ:PANW"
                }
              ]
            },
            {
              "group": "Nhật & Hàn",
              "items": [
                {
                  "asset": "Samsung",
                  "dir": "Short (giữ)",
                  "entry": "Đã short đúng đỉnh",
                  "target": "214.000 → cực đoan 170.000 KRW",
                  "stop": "",
                  "sig": "down",
                  "tv": "KRX:005930"
                },
                {
                  "asset": "Nikkei",
                  "dir": "Canh short",
                  "entry": "Hồi kỹ thuật 1–2 hôm",
                  "target": "Test 58.700",
                  "stop": "",
                  "sig": "down",
                  "tv": "TVC:NI225"
                }
              ]
            },
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "VN-Index",
                  "dir": "Phòng thủ",
                  "entry": "Tiền 60 / cổ 40",
                  "target": "Kịch bản về ~1.600 — giải ngân mạnh",
                  "stop": "",
                  "sig": "warn",
                  "tv": "HOSE:VNINDEX"
                },
                {
                  "asset": "DCM + DPM",
                  "dir": "Tích lũy",
                  "entry": "Vùng đáy, đã mua 70% vị thế",
                  "target": "Dài hạn, ≤30% danh mục",
                  "stop": "",
                  "sig": "up",
                  "tv": "HOSE:DPM"
                },
                {
                  "asset": "BID / SCS / VNM",
                  "dir": "Giữ",
                  "entry": "VNM túc tắc vùng 56",
                  "target": "VNM bán khi +5–7%; SCS ăn cổ tức",
                  "stop": "",
                  "sig": "wait",
                  "tv": "HOSE:BID"
                },
                {
                  "asset": "FPT / PNJ / PC1 / DGC",
                  "dir": "Tránh",
                  "entry": "Không đụng",
                  "target": "PC1 kẹt: thoát khi có tin kéo",
                  "stop": "",
                  "sig": "down",
                  "tv": "HOSE:FPT"
                }
              ]
            }
          ]
        },
        {
          "date": "2026-07-11",
          "dateShort": "11/07",
          "timeAgo": "Tuần trước",
          "tab": "Tập 37 · Tuần 28",
          "sourceType": "member-video",
          "typeLabel": "Video hội viên · Tập 37",
          "title": "Tập 37 (Hội Viên): ĐỔI QUAN ĐIỂM — Tăng Tiền Mặt Lên 60%, Phòng Thủ Mùa Đông",
          "summary": "Thái Phạm thừa nhận “định đề” cũ (index chỉnh không ảnh hưởng mã của mình) đã SAI — khi chỉ số giảm, cổ phiếu bank/chứng khoán cũng giảm theo do quỹ ngoại thoái vốn. Vì vậy NÂNG TIỀN MẶT lên 60% / cổ phiếu 40% (từ 65/35), cắt lỗ toàn bộ lướt sóng (VIC/SSI/VCI), cắt bớt ngân hàng (VCB/TCB/HDB/CTG/MB), chỉ giữ BID + BVBank + DCM + SCS + VNM + TCX. Chờ VN-Index về ~1.600 (xác suất 78%) trong 6 tháng để giải ngân mạnh. Quốc tế: Fed giữ lãi cao “for longer”, CK Mỹ răng cưa/chỉnh Q3, SpaceX về ~100, vàng long nhẹ 4.001.",
          "tradeLevels": [
            {
              "group": "Vàng & Bạc",
              "items": [
                {
                  "asset": "Vàng",
                  "dir": "Long nhẹ",
                  "entry": "~4.001 (đánh nhỏ)",
                  "target": "Hồi kỹ thuật 4.300",
                  "stop": "Cửa dài hạn về ~3.000",
                  "sig": "up",
                  "tv": "OANDA:XAUUSD"
                },
                {
                  "asset": "Bạc",
                  "dir": "Chờ",
                  "entry": "Ăn theo vàng",
                  "target": "Nếu vàng 4.300 → ~68",
                  "stop": "Fair value ~50",
                  "sig": "wait",
                  "tv": "OANDA:XAGUSD"
                }
              ]
            },
            {
              "group": "Bitcoin & Crypto",
              "items": [
                {
                  "asset": "Bitcoin",
                  "dir": "Short",
                  "entry": "Canh 70–71k",
                  "target": "Chốt 62–64k",
                  "stop": "Nguyên thủy về 48–49k",
                  "sig": "down",
                  "tv": "BINANCE:BTCUSDT"
                }
              ]
            },
            {
              "group": "Dầu",
              "items": [
                {
                  "asset": "Dầu WTI",
                  "dir": "Long nhẹ",
                  "entry": "70 (không short)",
                  "target": "Chốt 76–77",
                  "stop": "",
                  "sig": "up",
                  "tv": "TVC:USOIL"
                },
                {
                  "asset": "Dầu UK/Brent",
                  "dir": "Long nhẹ",
                  "entry": "70",
                  "target": "Chốt 79–80",
                  "stop": "",
                  "sig": "up",
                  "tv": "TVC:UKOIL"
                }
              ]
            },
            {
              "group": "Chứng khoán Mỹ",
              "items": [
                {
                  "asset": "SpaceX",
                  "dir": "Short",
                  "entry": "Giữ từ 158",
                  "target": "Về ~100 (6 tháng)",
                  "stop": "",
                  "sig": "down"
                },
                {
                  "asset": "Nasdaq/S&P/Dow",
                  "dir": "Short",
                  "entry": "Ở kháng cự (răng cưa Q3)",
                  "target": "Take profit vùng thấp",
                  "stop": "",
                  "sig": "down"
                },
                {
                  "asset": "Apple",
                  "dir": "Short",
                  "entry": "~325",
                  "target": "",
                  "stop": "",
                  "sig": "down",
                  "tv": "NASDAQ:AAPL"
                },
                {
                  "asset": "Nvidia",
                  "dir": "Tránh",
                  "entry": "Đụng MA200 bật — khó ăn",
                  "target": "",
                  "stop": "",
                  "sig": "down",
                  "tv": "NASDAQ:NVDA"
                },
                {
                  "asset": "Google",
                  "dir": "Mua",
                  "entry": "Đợi ~320",
                  "target": "",
                  "stop": "",
                  "sig": "up",
                  "tv": "NASDAQ:GOOGL"
                },
                {
                  "asset": "Intel",
                  "dir": "Giữ",
                  "entry": "Cầm từ 130",
                  "target": "",
                  "stop": "Sẽ lấp gap 60–70",
                  "sig": "wait",
                  "tv": "NASDAQ:INTC"
                },
                {
                  "asset": "Meta",
                  "dir": "Short",
                  "entry": "~72 (cắt lỗ nếu vọt)",
                  "target": "",
                  "stop": "",
                  "sig": "down",
                  "tv": "NASDAQ:META"
                },
                {
                  "asset": "Adidas",
                  "dir": "Chốt lời",
                  "entry": "Hết World Cup",
                  "target": "~193",
                  "stop": "",
                  "sig": "up",
                  "tv": "XETR:ADS"
                }
              ]
            },
            {
              "group": "Nhật & Hàn",
              "items": [
                {
                  "asset": "Kospi",
                  "dir": "Short",
                  "entry": "Điều chỉnh về ~6.000",
                  "target": "",
                  "stop": "",
                  "sig": "down",
                  "tv": "TVC:KOSPI"
                },
                {
                  "asset": "Samsung",
                  "dir": "Tránh",
                  "entry": "Pump & dump — về đáy cũ",
                  "target": "",
                  "stop": "",
                  "sig": "down",
                  "tv": "KRX:005930"
                },
                {
                  "asset": "SoftBank",
                  "dir": "Giữ",
                  "entry": "Đánh theo FOMO",
                  "target": "",
                  "stop": "Cắt lỗ 700",
                  "sig": "wait"
                }
              ]
            },
            {
              "group": "Chứng khoán Việt Nam — TĂNG TIỀN LÊN 60%",
              "items": [
                {
                  "asset": "VIC/SSI/VCI",
                  "dir": "Cắt",
                  "entry": "Cắt lỗ lướt sóng (không đợi)",
                  "target": "",
                  "stop": "",
                  "sig": "down"
                },
                {
                  "asset": "TCX",
                  "dir": "Mua dần",
                  "entry": "Đợi 40–41 hoặc 38",
                  "target": "VN30",
                  "stop": "",
                  "sig": "up",
                  "tv": "HOSE:TCX"
                },
                {
                  "asset": "VCB",
                  "dir": "Cắt",
                  "entry": "Giữ ~5% thôi",
                  "target": "",
                  "stop": "Có thể về 57",
                  "sig": "down",
                  "tv": "HOSE:VCB"
                },
                {
                  "asset": "BID",
                  "dir": "Giữ",
                  "entry": "Có vốn “đại ca”",
                  "target": "",
                  "stop": "",
                  "sig": "wait",
                  "tv": "HOSE:BID"
                },
                {
                  "asset": "TCB / HDB / CTG / MB",
                  "dir": "Cắt",
                  "entry": "Cắt để tăng tiền",
                  "target": "",
                  "stop": "",
                  "sig": "down"
                },
                {
                  "asset": "EIB",
                  "dir": "Cắt",
                  "entry": "Ăn hàng 7 tháng chưa đột phá",
                  "target": "",
                  "stop": "",
                  "sig": "down"
                },
                {
                  "asset": "BVBank",
                  "dir": "Giữ",
                  "entry": "Lên HOSE 21/7",
                  "target": "",
                  "stop": "",
                  "sig": "wait",
                  "tv": "HOSE:BVB"
                },
                {
                  "asset": "DCM",
                  "dir": "Giữ · mua thêm",
                  "entry": "Về ~30 mua (tích 2 năm)",
                  "target": "",
                  "stop": "",
                  "sig": "up",
                  "tv": "HOSE:DCM"
                },
                {
                  "asset": "SCS",
                  "dir": "Giữ",
                  "entry": "Ăn cổ tức 200 (lỗ ~6%)",
                  "target": "",
                  "stop": "",
                  "sig": "wait",
                  "tv": "HOSE:SCS"
                },
                {
                  "asset": "VNM",
                  "dir": "Giữ",
                  "entry": "Hòa vốn (mua vùng 56)",
                  "target": "",
                  "stop": "",
                  "sig": "wait",
                  "tv": "HOSE:VNM"
                },
                {
                  "asset": "FPT / PNJ / PC1 / Đức Giang",
                  "dir": "Tránh",
                  "entry": "AI / pháp lý / kim cương",
                  "target": "",
                  "stop": "",
                  "sig": "down"
                }
              ]
            }
          ],
          "feedChips": [
            {
              "label": "Danh mục ⚠ tăng tiền lên 60%",
              "sig": "warn"
            },
            {
              "label": "Lướt sóng ✗ cắt hết",
              "sig": "down"
            },
            {
              "label": "VN-Index ↓ về ~1.600 (78%)",
              "sig": "down"
            },
            {
              "label": "DCM/SCS/VNM ◷ giữ",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "Đổi quan điểm",
              "value": "Tiền mặt 60% / cổ phiếu 40%",
              "signal": "warn",
              "note": "Định đề “index chỉnh không ảnh hưởng mã của mình” đã sai — quỹ ngoại thoái vốn kéo cả bank/chứng khoán giảm. Nâng tiền để phòng thủ và đón cơ hội cuối năm."
            },
            {
              "tag": "Lướt sóng",
              "value": "Cắt lỗ toàn bộ",
              "signal": "down",
              "note": "VIC, SSI, VCI — cắt ngay, không đợi. Lướt sóng thần xác suất thấp, lỗ 6–10% thì cắt."
            },
            {
              "tag": "VN-Index",
              "value": "Về ~1.600 trong 6 tháng",
              "signal": "down",
              "note": "Vùng 1.750 gần như chắc; vùng 1.600 xác suất 78% do áp lực tỷ giá + Fed lãi cao + quỹ thoái vốn. Đó mới là vùng giải ngân mạnh."
            },
            {
              "tag": "Giữ lại",
              "value": "BID, BVBank, DCM, SCS, VNM, TCX",
              "signal": "wait",
              "note": "Cắt gần hết bank (VCB/TCB/HDB/CTG/MB) để tăng tiền; giữ BID (vốn đại ca), BVBank (lên HOSE 21/7). DCM/SCS/VNM cầm chặt ăn cổ tức; TCX mua dần vùng 38–41."
            }
          ],
          "sections": [
            {
              "title": "Vĩ mô: Fed kẹt, lãi cao “for longer”",
              "signal": "down",
              "sigLabel": "Áp lực — kỷ nguyên tiền rẻ còn xa",
              "para": "Fed tiến thoái lưỡng nan: tăng lãi thì việc làm yếu (AI thay thế), hạ lãi thì thổi bong bóng tài sản + lạm phát chip/dầu. Buộc giữ 3,5–3,75% một thời gian dài (ít nhất 1 năm). Lãi thực dương Mỹ hút vốn về → ép nội tệ EM, các quỹ rút vốn khỏi VN đổ vào AI Mỹ/Hàn/Đài.",
              "bullets": [
                "Trung Đông nóng lại (Iran 9/7 đánh nhau, tân giáo chủ 11/7 thề trả thù) — dầu neo cao.",
                "SpaceX vào Nasdaq 100 (7/7), hút 110 tỷ đô — “roost” của CK Mỹ, 6 tháng nữa về đáy ~100.",
                "CK Mỹ răng cưa/tích lũy Wyckoff suốt Q3; AI chỉnh lấp gap chờ Open AI lên sàn 2027."
              ]
            },
            {
              "title": "Chứng khoán Việt Nam: phòng thủ cấp độ cao",
              "signal": "warn",
              "sigLabel": "Tăng tiền 60% — chờ index ~1.600",
              "para": "Tuần qua bank/chứng khoán không cứu được điểm số; lướt sóng thất bại. 71,75% cổ phiếu đang downtrend. Định đề cũ sai → phải tăng tiền phòng thủ, cắt lỗ dứt khoát (đừng tiếc 5–7%), chờ 6 tháng vùng 1.600 để vớt hàng giá rẻ hơn.",
              "bullets": [
                "Cắt: lướt sóng VIC/SSI/VCI; bank VCB/TCB/HDB/CTG/MB/EIB.",
                "Giữ: BID, BVBank (lên HOSE 21/7), DCM (mua thêm vùng 30), SCS (cổ tức 200), VNM (hòa vốn).",
                "TCX là mã chứng khoán duy nhất quan tâm — mua dần vùng 38–41.",
                "Tránh FPT (AI), PNJ (kim cương), PC1 & Đức Giang (pháp lý) — đừng bắt đáy, không dùng margin."
              ]
            }
          ]
        },
        {
          "date": "2026-07-04",
          "dateShort": "04/07",
          "timeAgo": "2 tuần trước",
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
                  "sig": "up",
                  "tv": "OANDA:XAUUSD"
                },
                {
                  "asset": "Bạc",
                  "dir": "Chờ mua",
                  "entry": "Đợi về ~60",
                  "target": "",
                  "stop": "Nếu Fed tăng lãi về 48–50",
                  "sig": "wait",
                  "tv": "OANDA:XAGUSD"
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
                  "sig": "down",
                  "tv": "BINANCE:BTCUSDT"
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
                  "sig": "down",
                  "tv": "NASDAQ:IXIC"
                },
                {
                  "asset": "S&P 500",
                  "dir": "Short",
                  "entry": "Giữ short",
                  "target": "",
                  "stop": "Cắt lỗ nếu vượt 7.000–7.007",
                  "sig": "down",
                  "tv": "SP:SPX"
                },
                {
                  "asset": "Dow (US30)",
                  "dir": "Short",
                  "entry": "Mua short vùng này",
                  "target": "Về 24.000–24.500",
                  "stop": "",
                  "sig": "down",
                  "tv": "DJ:DJI"
                },
                {
                  "asset": "VIX",
                  "dir": "Long",
                  "entry": "15–16",
                  "target": "",
                  "stop": "",
                  "sig": "up",
                  "tv": "CBOE:VIX"
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
                  "sig": "down",
                  "tv": "NASDAQ:AAPL"
                },
                {
                  "asset": "Nvidia",
                  "dir": "Tránh",
                  "entry": "Chờ về 163",
                  "target": "",
                  "stop": "",
                  "sig": "down",
                  "tv": "NASDAQ:NVDA"
                },
                {
                  "asset": "Netflix",
                  "dir": "Mua",
                  "entry": "74–75",
                  "target": "",
                  "stop": "",
                  "sig": "up",
                  "tv": "NASDAQ:NFLX"
                },
                {
                  "asset": "Google",
                  "dir": "Mua DH",
                  "entry": "300–314",
                  "target": "",
                  "stop": "",
                  "sig": "up",
                  "tv": "NASDAQ:GOOGL"
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
                  "sig": "down",
                  "tv": "TVC:NI225"
                },
                {
                  "asset": "Kospi",
                  "dir": "Short",
                  "entry": "Từ ~800",
                  "target": "Test 4.600",
                  "stop": "",
                  "sig": "down",
                  "tv": "TVC:KOSPI"
                },
                {
                  "asset": "Samsung",
                  "dir": "Tránh",
                  "entry": "Đừng mua vùng này",
                  "target": "",
                  "stop": "",
                  "sig": "down",
                  "tv": "KRX:005930"
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
                  "sig": "wait",
                  "tv": "HOSE:VCB"
                },
                {
                  "asset": "BID",
                  "dir": "Giữ",
                  "entry": "Cầm chặt",
                  "target": "",
                  "stop": "",
                  "sig": "wait",
                  "tv": "HOSE:BID"
                },
                {
                  "asset": "CTG",
                  "dir": "Giữ",
                  "entry": "Cầm",
                  "target": "",
                  "stop": "",
                  "sig": "wait",
                  "tv": "HOSE:CTG"
                },
                {
                  "asset": "HDB",
                  "dir": "Giữ",
                  "entry": "Cầm — HD Sec sắp lên sàn",
                  "target": "",
                  "stop": "",
                  "sig": "wait",
                  "tv": "HOSE:HDB"
                },
                {
                  "asset": "BVB",
                  "dir": "Giữ",
                  "entry": "Cầm — sắp limit HOSE",
                  "target": "",
                  "stop": "",
                  "sig": "wait",
                  "tv": "HOSE:BVB"
                },
                {
                  "asset": "TCX",
                  "dir": "Mua",
                  "entry": "40–41",
                  "target": "VN30 T3/2027",
                  "stop": "",
                  "sig": "up",
                  "tv": "HOSE:TCX"
                },
                {
                  "asset": "VCI",
                  "dir": "Mua",
                  "entry": "Lướt sóng 8–10%",
                  "target": "",
                  "stop": "",
                  "sig": "up",
                  "tv": "HOSE:VCI"
                },
                {
                  "asset": "VNM",
                  "dir": "Mua",
                  "entry": "~60",
                  "target": "",
                  "stop": "Cắt lỗ nếu về 50",
                  "sig": "up",
                  "tv": "HOSE:VNM"
                },
                {
                  "asset": "DCM",
                  "dir": "Mua",
                  "entry": "Vùng giá trị",
                  "target": "Cầm 8 tháng",
                  "stop": "",
                  "sig": "up",
                  "tv": "HOSE:DCM"
                },
                {
                  "asset": "HPG",
                  "dir": "Mua",
                  "entry": "Giải ngân 1/3",
                  "target": "",
                  "stop": "",
                  "sig": "up",
                  "tv": "HOSE:HPG"
                },
                {
                  "asset": "SCS",
                  "dir": "Giữ",
                  "entry": "Nắm dài hạn",
                  "target": "",
                  "stop": "",
                  "sig": "wait",
                  "tv": "HOSE:SCS"
                },
                {
                  "asset": "HVN",
                  "dir": "Chỉ lướt",
                  "entry": "~27–28",
                  "target": "",
                  "stop": "Không đầu tư dài hạn",
                  "sig": "wait",
                  "tv": "HOSE:HVN"
                },
                {
                  "asset": "SSI",
                  "dir": "Chờ",
                  "entry": "Vùng 27 vẫn đắt",
                  "target": "",
                  "stop": "",
                  "sig": "wait",
                  "tv": "HOSE:SSI"
                },
                {
                  "asset": "PNJ",
                  "dir": "Tránh",
                  "entry": "Rủi ro pháp lý",
                  "target": "Có thể về 44",
                  "stop": "",
                  "sig": "down",
                  "tv": "HOSE:PNJ"
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
          "timeAgo": "Tháng trước",
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
                  "sig": "up",
                  "tv": "TVC:USOIL"
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
                  "sig": "wait",
                  "tv": "OANDA:XAUUSD"
                },
                {
                  "asset": "Bạc",
                  "dir": "Chờ",
                  "entry": "",
                  "target": "",
                  "stop": "Nếu tăng lãi về 48–50 (−20%)",
                  "sig": "wait",
                  "tv": "OANDA:XAGUSD"
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
                  "sig": "down",
                  "tv": "BINANCE:BTCUSDT"
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
                  "sig": "down",
                  "tv": "NASDAQ:AAPL"
                },
                {
                  "asset": "Google",
                  "dir": "Mua",
                  "entry": "Test lại 335–340",
                  "target": "",
                  "stop": "",
                  "sig": "up",
                  "tv": "NASDAQ:GOOGL"
                },
                {
                  "asset": "Intel",
                  "dir": "Tránh",
                  "entry": "Up & ra hàng",
                  "target": "",
                  "stop": "",
                  "sig": "down",
                  "tv": "NASDAQ:INTC"
                },
                {
                  "asset": "Nvidia",
                  "dir": "Giữ",
                  "entry": "Giữ là hay",
                  "target": "",
                  "stop": "",
                  "sig": "wait",
                  "tv": "NASDAQ:NVDA"
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
                  "sig": "down",
                  "tv": "KRX:005930"
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
                  "sig": "up",
                  "tv": "HOSE:TCX"
                },
                {
                  "asset": "DCM",
                  "dir": "Mua",
                  "entry": "Giữ 3/4 vị thế, tăng 1/4",
                  "target": "Cuối năm",
                  "stop": "",
                  "sig": "up",
                  "tv": "HOSE:DCM"
                },
                {
                  "asset": "VNM",
                  "dir": "Mua",
                  "entry": "~60",
                  "target": "",
                  "stop": "Cắt lỗ nếu về 50",
                  "sig": "up",
                  "tv": "HOSE:VNM"
                },
                {
                  "asset": "VCB",
                  "dir": "Giữ",
                  "entry": "Nắm 57–61 dài hạn",
                  "target": "",
                  "stop": "",
                  "sig": "wait",
                  "tv": "HOSE:VCB"
                },
                {
                  "asset": "SCS",
                  "dir": "Giữ",
                  "entry": "Cầm 2–3 năm",
                  "target": "",
                  "stop": "",
                  "sig": "wait",
                  "tv": "HOSE:SCS"
                },
                {
                  "asset": "SSI",
                  "dir": "Chờ",
                  "entry": "Vùng 27 vẫn đắt",
                  "target": "",
                  "stop": "",
                  "sig": "wait",
                  "tv": "HOSE:SSI"
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
          "timeAgo": "Tháng trước",
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
          "timeAgo": "Tháng trước",
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
          "timeAgo": "Tháng trước",
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
        }
      ],
      "sources": [
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "18/07/2026",
          "title": "TẬP 38 (ĐỘC QUYỀN HỘI VIÊN 2026): QUAN TRỌNG PHẢI XEM TUẦN 29 — VÀNG, CHỨNG KHOÁN, BITCOIN",
          "meta": "Video hội viên · transcript tự động"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "12/07/2026",
          "title": "Nghịch lý vĩ mô: FDI Việt Nam lập kỷ lục 5 năm, tại sao VN-Index vẫn giảm?",
          "meta": "Video công khai · transcript tự động"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "11/07/2026",
          "title": "Tập 37 — Đổi quan điểm: tăng tiền mặt lên 60%, phòng thủ mùa đông",
          "meta": "Video hội viên · transcript tự động"
        },
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
          "date": "2026-07-16",
          "dateShort": "16/07",
          "timeAgo": "3 ngày trước",
          "tab": "Podcast · 16/07",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "#13: Đã Đến Lúc Đánh Giá Lại Khẩu Vị Rủi Ro — Quản Trị Rủi Ro Trong Tích Sản",
          "summary": "Podcast tích sản với founder Đặng Trần Phục giữa mùa \"thiên nga đen\" (PNJ, DGC). Hai sai lầm lớn nhất: all-in một cổ phiếu (Buffett cũng chỉ đúng 66%) và bỏ qua định giá — mua chiết khấu 20–40% chính là tấm đệm khi biến cố xảy ra. Thực chứng: PNJ chỉ chiếm 2% danh mục của anh, giảm 15% chỉ làm mất 0,3% NAV. Tiêu chí xử lý cổ phiếu dính biến cố: nhìn quản trị công ty — lãnh đạo/linh hồn doanh nghiệp bị khởi tố (như DGC) là LOẠI NGAY; biến cố chỉ ảnh hưởng một phần hoạt động thì giữ và quan sát, so giá thị trường với giá trị sau điều chỉnh. Danh mục chuẩn: 3–5 mã (vốn nhỏ) đến 5–10 mã, đa dạng cả ngành; P/E < 10 (thị trường ~13,3), P/B < 2, ROE > 15%, cổ tức tiền mặt gấp 2–3 lần thị trường (1,4%). Tích sản = đầu tư giá trị mua đều hàng tháng theo MMA — không phải \"ôm lì không bao giờ bán\": vượt giá trị là chốt.",
          "feedChips": [
            {
              "label": "Kỷ luật ⚠ đánh giá lại khẩu vị rủi ro",
              "sig": "warn"
            },
            {
              "label": "DGC ↓ lãnh đạo khởi tố = loại ngay",
              "sig": "down"
            },
            {
              "label": "PNJ ◷ 2% danh mục, thiệt 0,3% NAV",
              "sig": "wait"
            },
            {
              "label": "Danh mục ↑ P/E<10, cổ tức x2–3",
              "sig": "up"
            }
          ],
          "keyCalls": [
            {
              "tag": "Nguyên tắc biến cố",
              "value": "Lãnh đạo bị khởi tố → loại ngay lập tức",
              "signal": "down",
              "note": "DGC: chủ tịch/TGĐ bị khởi tố = \"linh hồn doanh nghiệp\" dính pháp lý, ảnh hưởng chiến lược & vận hành — loại ngay. Biến cố chỉ ảnh hưởng một phần, ban lãnh đạo không dính, kinh doanh chính không đình chỉ → giữ và quan sát; giá thị trường thấp hơn nhiều so với giá trị sau điều chỉnh thì người có kinh nghiệm mới gia tăng."
            },
            {
              "tag": "Phân bổ",
              "value": "Đa dạng 5–10 mã, không all-in",
              "signal": "warn",
              "note": "Buffett chỉ đúng 66% — all-in một mã có thể mất trắng. PNJ minh chứng: 2% danh mục giảm 15% chỉ mất 0,3% NAV. Vốn nhỏ 3–5 mã (tốt nhất 5), vốn lớn 5–10; đa dạng cả số mã lẫn ngành nghề."
            },
            {
              "tag": "Chuẩn danh mục",
              "value": "P/E <10 · P/B <2 · ROE >15% · cổ tức x2–3",
              "signal": "up",
              "note": "So chuẩn thị trường T7/2026: P/E VN-Index ~13,3, P/B ~2, ROE 14–14,5%, cổ tức tiền mặt ~1,4%. Danh mục tích sản phải tốt hơn mọi cột — đầu ngành, định giá thấp hơn, sinh lời cao hơn, cổ tức cao hơn."
            }
          ],
          "sections": [
            {
              "title": "Xử lý cổ phiếu gặp \"thiên nga đen\"",
              "signal": "warn",
              "sigLabel": "Khung quyết định — quản trị công ty là gốc",
              "para": "Biến cố bất ngờ thi thoảng xảy ra cả với cổ phiếu xuất sắc. Khung đánh giá: (1) quản trị công ty có lỗ hổng lớn không, liên quan đến ai; (2) tác động đến hoạt động kinh doanh chính ở mức nào; (3) so giá thị trường với giá trị sau khi trừ thiệt hại.",
              "bullets": [
                "Lãnh đạo cốt lõi bị khởi tố (DGC) → loại ngay lập tức, không bàn.",
                "Biến cố một phần, khôi phục được, kinh doanh chính không đình chỉ → nắm giữ, bám sát quan sát.",
                "Giá trị 100 giảm còn 80 mà giá thị trường đã về 40–50 → thấp hơn nhiều so với giá trị: người có kinh nghiệm có thể gia tăng nhẹ; không kinh nghiệm thì đứng yên.",
                "Một mã chiếm tỷ trọng quá lớn mà gặp biến cố (kể cả không sâu sắc) → bắt buộc bán hạ tỷ trọng về mức bình thường trước, tính tiếp sau."
              ]
            },
            {
              "title": "Tích sản đúng nghĩa — không phải ôm lì",
              "signal": "up",
              "sigLabel": "Kỷ luật — MMA + mua đều hàng tháng",
              "para": "Tích sản là đầu tư giá trị: mua cổ phiếu tốt (MMA: quản trị tốt, biên an toàn cao, lợi thế cạnh tranh mạnh) ở giá chiết khấu, mua đều đặn hàng tháng — và bán chốt lời khi giá vượt giá trị (FPT, REE đã chốt nhiều lần từ giá cao, không phải \"tích sản trên đỉnh\" như lời chế giễu).",
              "bullets": [
                "Mua chiết khấu 20–40% so với giá trị thực là tấm đệm giảm rủi ro khi biến cố xảy ra.",
                "Khẩu vị rủi ro quyết định cơ cấu: rủi ro thấp → nặng phòng thủ (cổ tức cao, ngành ổn định) + cân bằng; chịu rủi ro cao → nặng tăng trưởng + cân bằng.",
                "Tiền sắp cần dùng (xây nhà 3–4 tháng tới) = khẩu vị rủi ro cực thấp — không đem \"kiếm dăm 10%\".",
                "Tư duy dòng cổ tức tăng đều theo năm (1 tỷ → 50 rồi 55, 60 triệu/năm...) giúp bất chấp giá thị trường xuống sâu; giá tăng cao vượt giá trị thì bán bảo vệ thành quả."
              ]
            }
          ]
        },
        {
          "date": "2026-07-10",
          "dateShort": "10/07",
          "timeAgo": "Tuần trước",
          "tab": "Trà Đá Brothers #05",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "#05: Kết Quả Kinh Doanh Quý 2 Và Hành Động Của Nhà Đầu Tư Giá Trị",
          "summary": "KQKD Q2/2026 đa phần tích cực (kinh tế tăng mạnh, kinh tế chữ K — DN lớn hưởng lợi). 3 nhóm nổi bật: Bán lẻ (thị phần dồn về chuỗi lớn), Vật liệu xây dựng (đầu tư công + tăng giá), Ngân hàng (trung bình 15–20%, bank lớn tín dụng cao 30–50%). Vì sao giá chưa tăng: lãi suất cao (huy động 7–9%, cho vay 13–15%) làm định giá rẻ hơn; khối ngoại bán ròng >80.000 tỷ; cung cổ phiếu (IPO) > tiền vào. Hành động NĐT giá trị: đa dạng hóa, mua có biên an toàn ≥30%, chia nhiều lần; cổ phiếu tốt phải đi kèm giá rẻ.",
          "feedChips": [
            {
              "label": "KQKD Q2 ↑ đa phần tích cực",
              "sig": "up"
            },
            {
              "label": "Bán lẻ/VLXD/Bank ↑ nổi bật",
              "sig": "up"
            },
            {
              "label": "Lãi suất ⚠ cao → định giá rẻ",
              "sig": "warn"
            },
            {
              "label": "Biên an toàn ◷ ≥30%",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "KQKD Q2",
              "value": "3 nhóm nổi bật",
              "signal": "up",
              "note": "Bán lẻ (thị phần dồn về chuỗi lớn), Vật liệu xây dựng (đầu tư công Q2 mạnh + giá bán tăng), Ngân hàng (bank lớn tín dụng cao tăng 30–50%). VLXD & bán lẻ mạnh nhất."
            },
            {
              "tag": "Vì sao giá chưa tăng",
              "value": "Lãi cao + cung > cầu",
              "signal": "warn",
              "note": "Lãi huy động 7–9% → định giá rẻ hơn nhiều; khối ngoại bán ròng >80.000 tỷ 6 tháng; DN phát hành cổ phiếu (Điện máy xanh IPO thu 13.000 tỷ) → cung hàng > tiền vào."
            },
            {
              "tag": "Biên an toàn",
              "value": "Mua chiết khấu ≥30%",
              "signal": "wait",
              "note": "Chọn DN tốt + định giá hợp lý (chiết khấu so với giá trị). Ví dụ DGC chốt vùng >100 trước biến cố. Đa dạng hóa danh mục, mua chia nhiều lần."
            },
            {
              "tag": "Cổ phiếu tốt ≠ tăng",
              "value": "Phải đi kèm giá rẻ",
              "signal": "wait",
              "note": "VNM 8 năm chưa về bờ dù cổ tức cao. Nghiên cứu >100 blue chip: chưa mã nào định giá rẻ quá 3 năm (REE 3 năm rồi +35–40%/năm; VPBank 28 tháng rồi +160%)."
            }
          ],
          "sections": [
            {
              "title": "Kết quả kinh doanh Q2 — đa phần tích cực",
              "signal": "up",
              "sigLabel": "Kinh tế chữ K — DN lớn hưởng lợi",
              "para": "Tăng trưởng kinh tế mạnh nên KQKD Q2 đa phần tốt, đặc biệt DN quy mô lớn (chiếm phần lớn sàn niêm yết). Kinh tế chữ K: DN lớn hưởng lợi, hộ cá thể/DN nhỏ khó khăn.",
              "bullets": [
                "Bán lẻ: tăng mười mấy %, thị phần dồn từ chợ truyền thống về chuỗi lớn.",
                "Vật liệu xây dựng: đầu tư công Q2 mạnh + giá đá/cát/sỏi/thép tăng → hưởng lợi kép.",
                "Ngân hàng: trung bình 15–20%; bank lớn tín dụng cao có thể 30–50%."
              ]
            },
            {
              "title": "Hành động của nhà đầu tư giá trị",
              "signal": "wait",
              "sigLabel": "Biên an toàn + kiên nhẫn",
              "para": "Giá cổ phiếu chưa phản ánh KQKD tốt vì lãi suất cao và cung > cầu — nhưng đây là cơ hội tích lũy giá rẻ. Nguyên tắc: chọn DN tốt, mua có biên an toàn, chia nhiều lần, nhận cổ tức trong lúc chờ.",
              "bullets": [
                "Đa dạng hóa danh mục để giảm rủi ro bất ngờ (DGC, PC1, VCG, PNJ).",
                "Mua có biên an toàn ≥30% so với giá trị; cắt lỗ nhẹ nếu biến cố.",
                "Cổ phiếu tốt định giá rẻ kéo dài = cơ hội tích thêm giá rẻ, không phải để chán nản.",
                "Yêu cổ phiếu đến mấy cũng chỉ phân bổ tỷ trọng nhất định, không all-in."
              ]
            }
          ]
        },
        {
          "date": "2026-07-08",
          "dateShort": "08/07",
          "timeAgo": "Tuần trước",
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
          "timeAgo": "Tháng trước",
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
          "timeAgo": "Tháng trước",
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
          "timeAgo": "Tháng trước",
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
          "date": "16/07/2026",
          "title": "#13: Đã đến lúc nhà đầu tư cần đánh giá lại khẩu vị rủi ro mình? | Tích sản cổ phiếu",
          "meta": "Video công khai · AzFin Vietnam"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "10/07/2026",
          "title": "#05: Kết quả kinh doanh quý 2 và hành động của nhà đầu tư giá trị | Trà Đá Brothers",
          "meta": "Video công khai · AzFin Vietnam"
        },
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
        "badge": "Thận trọng",
        "badgeBg": "oklch(0.95 0.05 85)",
        "badgeColor": "oklch(0.5 0.12 85)",
        "bar1": 60,
        "bar2": 40,
        "label1": "Giữ tỷ trọng dài hạn 60%",
        "label2": "Ngắn hạn đứng ngoài 40%"
      },
      "updates": [
        {
          "date": "2026-07-17",
          "dateShort": "17/07",
          "timeAgo": "2 ngày trước",
          "tab": "Video · 17/07",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Thị Trường Đã Vào Downtrend Chưa? Tại Sao Lúc Này Bán Cũng Rủi Ro",
          "summary": "Thanh khoản 17/07 chỉ ~11.000 tỷ — bằng nửa ngưỡng \"20.000 tỷ mới nói chuyện\"; tín hiệu nến ngày vô nghĩa. Đồ thị tuần: phân kỳ âm 3 đỉnh (thấy từ tháng 5), đóng cửa dưới MA20 tuần — nhưng CHƯA kích hoạt đà bán nên gọi \"downtrend\" chưa chính xác; đà tăng của nhóm Vin (>20% vốn hóa) làm chậm tín hiệu. Midcap đã giảm từ đỉnh tháng 9–10 năm ngoái, nhiều mã về ngang đáy chiến tranh thương mại — BÁN lúc này rủi ro hơn NẮM GIỮ (trừ khi còn margin: luôn xử lý margin trước; muốn bán cũng chỉ bán một phần). Cổ phiếu cơ bản yếu không phải do doanh nghiệp — BCTC Q1/Q2 bình thường, vấn đề là cả nền kinh tế + thanh khoản. Chiến lược: nằm yên chịu đựng, đợi tín hiệu mới; 99/100 chuyên gia: ngắn hạn không có view, dài hạn cơ hội rất lớn.",
          "feedChips": [
            {
              "label": "Thanh khoản ↓ 11.000 tỷ — kiệt",
              "sig": "down"
            },
            {
              "label": "Downtrend ◷ chưa xác nhận (nhờ Vin)",
              "sig": "wait"
            },
            {
              "label": "Bán ⚠ rủi ro hơn nắm giữ",
              "sig": "warn"
            },
            {
              "label": "Dài hạn ↑ cơ hội rất lớn",
              "sig": "up"
            }
          ],
          "keyCalls": [
            {
              "tag": "Downtrend?",
              "value": "Chưa — về tín hiệu",
              "signal": "wait",
              "note": "Phân kỳ âm 3 đỉnh trên chart tuần (quan sát từ tháng 5), đóng dưới MA20 tuần nhưng chưa kích hoạt đà bán. Nhóm Vin (3–4 mã >20% vốn hóa, tăng 5–6 lần 2 năm) giữ điểm số làm chậm tín hiệu — chưa tệ như Hàn Quốc nơi Samsung+SK Hynix chiếm >50%."
            },
            {
              "tag": "Hành động",
              "value": "Bán lúc này rủi ro hơn giữ",
              "signal": "warn",
              "note": "Nhiều midcap về ngang đáy chiến tranh thương mại — bán rất dễ đụng đáy; thu tiền về cũng chẳng có gì mua hay hơn. Ưu tiên duy nhất: xử lý margin. Không margin mà muốn bán thì chỉ bán một phần."
            },
            {
              "tag": "Chiến lược",
              "value": "Nằm yên chịu đựng, đợi tín hiệu mới",
              "signal": "wait",
              "note": "Hai ba tuần thị trường yếu hơn nhưng không có câu chuyện mới. Cổ phiếu cơ bản yếu là do nền kinh tế + thanh khoản, không phải doanh nghiệp — BCTC Q1/Q2 hoạt động bình thường. Không cần \"bơm oxy động viên\"."
            }
          ],
          "sections": [
            {
              "title": "Vì sao chưa gọi được là downtrend",
              "signal": "wait",
              "sigLabel": "Tín hiệu — nhiễu vì nhóm Vin",
              "para": "Về tín hiệu: có phân kỳ âm 3 đỉnh trên đồ thị tuần và hôm nay đóng dưới MA20 tuần, nhưng chưa kích hoạt đà bán — chưa vẽ ra hướng giảm giá rõ. Điểm số bị nhóm Vin nâng đỡ trong khi midcap đã giảm sâu từ đỉnh tháng 9–10/2025.",
              "bullets": [
                "Thanh khoản 11.000 tỷ (trước ATC mới 10.000) — bằng nửa ngưỡng tối thiểu 20.000 tỷ; nến xanh 22 điểm hôm qua thanh khoản gấp rưỡi trung bình mà vẫn vô nghĩa.",
                "Nhóm Vin: 3–4 cổ phiếu chiếm >20% vốn hóa, hút tiền \"độc nhất vô nhị\" 2 năm — làm mọi đánh giá downtrend theo index bị chậm/nhiễu.",
                "Hàn Quốc là phiên bản cực đoan: Samsung + SK Hynix >50% vốn hóa, 6 tháng ngắt mạch 7 lần — VN chưa đến mức đó.",
                "Kể cả kết luận được downtrend thì cũng không có ý nghĩa hành động: bán midcap ở nền giá này là rất dễ đụng đáy."
              ]
            },
            {
              "title": "BCTC quý 2 và các câu hỏi mùa báo cáo",
              "signal": "warn",
              "sigLabel": "Quan điểm — Q2 ít quan trọng nhất năm",
              "para": "Quan điểm rõ ràng: BCTC quý 2 là báo cáo ÍT QUAN TRỌNG NHẤT trong năm, sẽ không tác động nhiều lên giá — đặc biệt trong môi trường thanh khoản kém. Mua theo BCTC trong ngắn hạn chưa bao giờ là chiến lược hay.",
              "bullets": [
                "Ngoại lệ duy nhất: hàng \"cô đặc\"/bo cung — biến động đặc biệt mùa BCTC nhưng cũng không kéo dài với thanh khoản này.",
                "Doanh nghiệp tốt ra BCTC ổn mà giá không tăng, thậm chí giảm → vẫn nắm giữ được; thị trường giảm chung, không con nào đặc biệt xấu hơn.",
                "Nghi ngờ \"có tin xấu ẩn giấu, thị trường sụp đổ?\" — câu hỏi này luôn xuất hiện khi thị trường yếu và chưa bao giờ là lý do rời bỏ; chỉ cần tăng lại 5–7% là mọi người quên ngay."
              ]
            }
          ]
        },
        {
          "date": "2026-07-16",
          "dateShort": "16/07",
          "timeAgo": "3 ngày trước",
          "tab": "Video · 16/07",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Đã Có Đáy Chưa? Thị Trường Hồi Lên Thì Nên Mua Hay Nên Bán?",
          "summary": "VN-Index hôm nay tạo nến xuyên thấu (gần thành nhấn chìm tăng, khối lượng đạt) — về lý thuyết là tín hiệu đảo chiều, nhưng KHÔNG đánh giá cao: điểm số bị nhóm Vin chi phối, midcap mới chỉ \"rút chân\". SSI rút chân ấn tượng nhưng cần đóng trên 26 (ít nhất 25.5) mới xác nhận; cả nhóm cap chỉ ~10 mã có tín hiệu mua, phần lớn cuối ATC. Quan trọng nhất: các lý do khiến thị trường giảm (vĩ mô, chính sách, thanh khoản) còn nguyên. Trả lời \"hồi lên nên mua hay bán\": phải RẠCH RÒI mình đang làm gì — lướt T+ thì kỷ luật như thị trường bình thường, thủng stop loss là cắt, đánh lệnh nhỏ kỳ vọng ngắn; đầu tư dài hạn thì đoạn này là lúc MUA — chia 3–4 lần ở các nền giá, giá vốn không phải đáy nhưng đủ thấp; ai sợ sụp đổ không dám mua là chưa có tư duy dài hạn. Cổ phiếu cơ bản đang là \"món hời\" — 10 chuyên gia không ai dám nói định giá đang cao.",
          "feedChips": [
            {
              "label": "VN-Index ◷ nến đảo chiều, tin cậy thấp",
              "sig": "wait"
            },
            {
              "label": "SSI ◷ cần đóng >26 mới xác nhận",
              "sig": "wait"
            },
            {
              "label": "Lướt T+ ⚠ thủng stop là cắt",
              "sig": "warn"
            },
            {
              "label": "Dài hạn ↑ đây là lúc mua từng phần",
              "sig": "up"
            }
          ],
          "keyCalls": [
            {
              "tag": "Tín hiệu đáy",
              "value": "Có nến đảo chiều — độ tin cậy thấp",
              "signal": "wait",
              "note": "Nến xuyên thấu trên VN-Index (thêm ~5 điểm thành nhấn chìm tăng, khối lượng đạt) nhưng điểm số bị nhóm Vin chi phối; midcap chỉ mới rút chân. Lý do giảm (vĩ mô, chính sách, thanh khoản) còn nguyên — \"hôm nay chả khác gì hôm qua\"."
            },
            {
              "tag": "SSI",
              "value": "Cần đóng trên 26 mới xác nhận đảo chiều",
              "signal": "wait",
              "note": "Rút chân \"chân siêu mẫu\" thắp hy vọng nhưng phải đóng trên 25.5, chắc chắn hơn là 26; không được thì đợi sang tuần — không vội. Cả nhóm cap chỉ ~10 mã có tín hiệu mua, 9/10 kiểu \"hôm nay khỏe mai tham chiếu\"."
            },
            {
              "tag": "Mua hay bán khi hồi",
              "value": "Rạch ròi: lướt thì cắt đúng stop, dài hạn thì mua",
              "signal": "up",
              "note": "Lướt T+: coi như thị trường bình thường, lệnh nhỏ hơn, kỳ vọng gần, thủng stop loss PHẢI cắt. Dài hạn: đây là vùng mua — chia 3–4 lệnh ở các nền giá khác nhau; sợ sụp đổ không dám mua tức là đang cược ngắn hạn, không phải đầu tư dài hạn."
            }
          ],
          "sections": [
            {
              "title": "Đọc tín hiệu hôm nay cho đúng",
              "signal": "wait",
              "sigLabel": "Thận trọng — điểm số ≠ cổ phiếu",
              "para": "VN-Index có nến xuyên thấu đủ tiêu chuẩn kỹ thuật, nhưng thị trường điểm số đang bị nhóm Vin tác động rất nhiều — nhìn midcap (thứ chúng ta thực sự cầm) thì hôm nay mới chỉ là phiên rút chân, vài mã tạo nến búa.",
              "bullets": [
                "SSI: đóng trên 26 (tối thiểu 25.5) mới có tín hiệu đảo chiều; chưa được thì đợi sang tuần.",
                "Dưới 10 mã nhóm cap có tín hiệu mua, phần lớn xuất hiện cuối ATC — không mua được; kịch bản quen thuộc \"hôm nay khỏe, mai tham chiếu/đỏ nhẹ\".",
                "Muốn mua theo tín hiệu đáy: tỷ trọng thấp + tuân thủ stop loss, tránh vòng xoáy \"mua hào hứng, hàng về chán, muốn cắt không dám cắt\"."
              ]
            },
            {
              "title": "Rạch ròi lướt sóng vs dài hạn",
              "signal": "up",
              "sigLabel": "Kỷ luật — hai cuộc chơi khác nhau",
              "para": "Mất phương hướng đến từ việc trộn lẫn hai cuộc chơi: sợ bán xong tăng, sợ giữ thì giảm, tiếc chi phí cơ hội vì thanh khoản thị trường quá cao. Tách bạch ngay từ đầu thì câu \"hồi lên mua hay bán\" tự có đáp án.",
              "bullets": [
                "Lướt T+: thị trường yếu → cơ hội ít → lệnh nhỏ, kỳ vọng gần; có tín hiệu thì mua, thủng stop là cắt — không cắt thì hết vốn để lướt.",
                "Dài hạn: chọn doanh nghiệp hiểu được mô hình, dòng tiền dương, khó khăn chỉ cục bộ — và phải mua được ở VÙNG GIÁ THẤP: chính là chỗ này; lỗ 5–10% mà đòi bán thì xem lại phương pháp.",
                "Chia 3–4 lệnh ở các nền giá — giá vốn trung bình không phải đáy nhưng đủ thấp để có lợi thế khi thị trường tăng lại.",
                "Không ai trong giới phân tích dám nói cổ phiếu cơ bản đang định giá cao — \"con nào cũng rẻ\"; nhưng phải giữ được đến lúc nó tăng trở lại.",
                "\"Đôi khi các bạn không dài hạn được như các bạn nghĩ đâu\" — giai đoạn này bộc lộ hết; vượt qua được cái chán này mới đầu tư hiệu quả."
              ]
            }
          ]
        },
        {
          "date": "2026-07-15",
          "dateShort": "15/07",
          "timeAgo": "4 ngày trước",
          "tab": "Video · 15/07",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Vấn Đề Của PNJ Không Phải Là Cổ Phiếu Tăng Hay Giảm",
          "summary": "Khuyên KHÔNG đầu tư PNJ lúc này, kể cả phiên trần — giống DGC nhịp trước. Vấn đề không phải trần/sàn hay \"chiết khấu đủ chưa\", mà là: rủi ro PNJ Lào có liên đới công ty mẹ không, vụ án đang mở rộng điều tra (bắt thêm người, cả các chủ tiệm vàng lớn), hoạt động kinh doanh có dính yếu tố làm giả giấy tờ không. Mua PNJ bây giờ là chơi trò \"đoán xem nó có sập không\" bằng tiền thật. Nguyên tắc: cổ phiếu có rủi ro vận hành/niêm yết — không mua; đọc báo cáo không ăn thua vì loại rủi ro này không nằm trên giấy tờ.",
          "feedChips": [
            {
              "label": "PNJ ↓ không mua, kể cả trần",
              "sig": "down"
            },
            {
              "label": "Pháp lý ⚠ điều tra đang mở rộng",
              "sig": "warn"
            },
            {
              "label": "Nguyên tắc ⚠ rủi ro vận hành = đứng ngoài",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "PNJ",
              "value": "Không mua — kể cả phiên trần",
              "signal": "down",
              "note": "Giống DGC nhịp trước. Câu hỏi thật: PNJ Lào có liên đới công ty mẹ? Điều tra mở rộng tới cổ đông khác/ban giám đốc? Mua lúc này là trò \"đoán xem nó có sập không\" đặt cược bằng tiền thật — \"thà làm con lô\"."
            },
            {
              "tag": "Nguyên tắc rủi ro",
              "value": "Rủi ro vận hành/niêm yết → quay đi",
              "signal": "warn",
              "note": "Không quy chụp doanh nghiệp đúng sai — chỉ cần nhìn thấy rủi ro là không mua, không quan tâm trần hay sàn. Báo cáo tài chính không phản ánh được loại rủi ro này."
            }
          ],
          "sections": [
            {
              "title": "Vì sao không bắt đáy PNJ",
              "signal": "down",
              "sigLabel": "Rủi ro — chưa thể định lượng",
              "para": "Thị trường đang vội: lập luận \"giảm nhiều rồi, chiết khấu đủ rồi, ai bán đã bán\" chỉ là cách né vấn đề thật. Vấn đề thật là chuỗi câu hỏi chưa ai trả lời được: rủi ro PNJ Lào có liên đới doanh nghiệp mẹ, điều tra mở rộng đến đâu, kinh doanh có bị ảnh hưởng bởi yếu tố làm giả giấy tờ.",
              "bullets": [
                "Cơ quan điều tra đang mở rộng vụ án, tiếp tục bắt thêm người — hôm nay (15/07) bắt thêm các chủ tiệm vàng lớn.",
                "Những người khen \"phần này nhỏ, không ảnh hưởng\" là đoán mò từ bên ngoài — không ai biết điều gì đang diễn ra trong doanh nghiệp.",
                "Đồ thị xanh hay đỏ, tín hiệu kỹ thuật ở PNJ lúc này đều vô nghĩa.",
                "Ai mua lúc này là đang đánh cược \"đoán xem nó có sập không\" — xong lại khoe bắt đáy lãi 7–10% rồi chốt; \"đánh thế thà làm con lô\"."
              ]
            },
            {
              "title": "Nguyên tắc với cổ phiếu dính pháp lý",
              "signal": "warn",
              "sigLabel": "Kỷ luật — rủi ro là rủi ro",
              "para": "Quan điểm rất rõ ràng: con nào có vấn đề rủi ro vận hành hay rủi ro niêm yết thì không mua, bất kể giá. Không cần đánh giá doanh nghiệp đúng hay sai — nhà đầu tư cá nhân không biết gì về vụ án bên trong.",
              "bullets": [
                "Những mã như PNJ lúc này đọc báo cáo tài chính không ăn thua — rủi ro không thể hiện trên giấy tờ.",
                "Nhìn thấy rủi ro → quay đi; nhìn thấy rủi ro mà vẫn nhảy vào là \"dở hơi\".",
                "Đây là chia sẻ quan điểm cá nhân về rủi ro, không phải nhận định doanh nghiệp đúng/sai."
              ]
            }
          ]
        },
        {
          "date": "2026-07-14",
          "dateShort": "14/07",
          "timeAgo": "5 ngày trước",
          "tab": "Video · 14/07",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Cổ Phiếu Đang Rẻ Hay Đắt? Tư Duy Để Vững Tin Nắm Giữ Dài Hạn",
          "summary": "Ngắn hạn giá phản ánh tâm lý thị trường, dài hạn mới kéo về giá trị doanh nghiệp — đừng đi tìm lý do \"tại sao con này yếu\" từng mã (cả nhóm phân bón −30% từ đỉnh tháng 3, kể cả hàng cơ bản DPM/DCM). Định giá thị trường không cao: P/E VN-Index ~13.x (trung bình 15.x), loại Vin còn ~11.x — \"siêu đáy\", tương đương mua tài sản bằng 10 năm thu nhập. Cổ phiếu là tài sản \"nở ra được\" (doanh nghiệp sống, tăng trưởng) so với vàng/BĐS chỉ ghim giá trị. Chiến lược: chọn cổ phiếu cơ bản chiết khấu ~30% từ vùng giá cao, mua TỪNG PHẦN (đừng all-in), đi kèm niềm tin có cơ sở vào mô hình kinh doanh/ban lãnh đạo/ngành. Thời điểm này tốt nhất KHÔNG VAY — cả chứng khoán lẫn kinh doanh.",
          "feedChips": [
            {
              "label": "VN P/E ↑ ~13.x, loại Vin ~11.x",
              "sig": "up"
            },
            {
              "label": "Chiến lược ↑ mua từng phần hàng cơ bản chiết khấu",
              "sig": "up"
            },
            {
              "label": "Đòn bẩy ⚠ không vay",
              "sig": "warn"
            },
            {
              "label": "Phân bón ◷ −30% từ đỉnh T3",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "Định giá VN",
              "value": "P/E ~13.x — vùng siêu đáy",
              "signal": "up",
              "note": "Trung bình hàng năm 15.x; có bên tính loại Vin ra chỉ còn ~11.x. P/E 10–11 tương đương mua tài sản bằng 10 năm thu nhập. Chỉ là chỉ số tham khảo, không phải lý do mua chính."
            },
            {
              "tag": "Chiến lược mua",
              "value": "Cổ phiếu cơ bản chiết khấu ~30%, mua từng phần",
              "signal": "up",
              "note": "VD DPM giảm ~30% từ đỉnh (30 → 24) có thể vào từng phần; lệnh 1–2 điều chỉnh vẫn an tâm đợi lệnh 3–4. Đừng mua hết một lần — all-in khiến khó nắm giữ dài hạn."
            },
            {
              "tag": "Đòn bẩy",
              "value": "Không vay — cả chứng khoán lẫn kinh doanh",
              "signal": "warn",
              "note": "Chi phí vay cao, thu nhập bất định → dòng tiền trả lãi là rủi ro. Ngược lại, ai có tài sản không vay đang nắm nguồn lực rất tốt để mua tài sản giá rẻ."
            }
          ],
          "sections": [
            {
              "title": "Rẻ hay đắt — nhìn bằng khung nào",
              "signal": "up",
              "sigLabel": "Định giá — vùng giá không cao",
              "para": "Trong ngắn hạn giá cổ phiếu phản ánh tâm lý và kỳ vọng, chỉ trong dài hạn mới kéo về giá trị doanh nghiệp — nên đừng lấy chuyện \"con này yếu\" ngắn hạn để nghi ngờ doanh nghiệp. Ở thời điểm này, dùng từ \"rẻ\" cho một số cổ phiếu midcap là không quá đáng, ít nhất là \"vùng giá không cao\".",
              "bullets": [
                "P/E VN-Index quanh 13.x vs trung bình hàng năm 15.x; loại Vin ra chỉ ~11.x — có thể gọi là siêu đáy.",
                "Nhóm phân bón giảm ~30% từ đỉnh tháng 3, kể cả hàng cơ bản DPM/DCM — là hiện tượng thị trường chung, không phải từng doanh nghiệp có vấn đề.",
                "Cổ phiếu = quyền sở hữu doanh nghiệp — \"vật sống\" vẫn hoạt động, tăng trưởng, nở ra được; vàng/BĐS chỉ ghim giữ giá trị.",
                "Rủi ro pháp lý/chính sách tồn tại ở mọi kênh tài sản (vàng, BĐS cũng vậy) — đánh giá là tương đương."
              ]
            },
            {
              "title": "Cách nắm giữ dài hạn không gãy",
              "signal": "wait",
              "sigLabel": "Kỷ luật — mua từng phần + không vay",
              "para": "Nắm giữ dài hạn cần niềm tin có cơ sở (vào mô hình kinh doanh, ban lãnh đạo, tăng trưởng ngành — phải tự tìm hiểu sâu để tin) kết hợp phương pháp mua hợp lý. \"Vững tay chèo\" không có nghĩa là mua trên đỉnh rồi gồng — như mua DPM giá 30 gồng về 24.",
              "bullets": [
                "Mua cổ phiếu cơ bản ở mức giá chiết khấu so với vùng giá cao (~30%) — cách an toàn nhất để giữ được dài hạn.",
                "Mua từng phần (lệnh 1 → 4), không all-in; giá điều chỉnh sau lệnh đầu vẫn an tâm đợi mua tiếp.",
                "Kiểm soát vốn vay tốt nhất lúc này là KHÔNG vay — kể cả làm kinh doanh.",
                "Xác định mình đang ở giai đoạn nào (tấn công/phòng thủ): lúc này \"chết đinh ngắn hạn hay đấm nhau với tín hiệu là khó\" — lợi thế nằm ở vị thế dài hạn."
              ]
            }
          ]
        },
        {
          "date": "2026-07-13",
          "dateShort": "13/07",
          "timeAgo": "6 ngày trước",
          "tab": "Video · 13/07",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Điều Quan Trọng Nhất Nhà Đầu Tư Cần Nhìn Thấy Lúc Này Ở Thị Trường",
          "summary": "Thị trường không hoảng sợ mà NẢN — \"cái gì biết thì không sợ\": xấu xa (thanh khoản thấp, thế giới biến động, chính sách vĩ mô là đường dài) đều đã nhìn thấy. Thứ Sáu tuần trước là phiên tâm trạng xuống thấp nhất từ đầu năm; hai nhịp bán thứ Hai liên tiếp do mất phương hướng. Vấn đề lúc này KHÔNG phải tranh luận downtrend/uptrend hay vẽ vùng phân phối — mà là thanh khoản thấp bóp nghẹt mọi thị trường (cả BĐS, kinh doanh). Không có đáy ngắn hạn; kể cả tạo đáy đẹp cũng không đi xa. TCB, SSI đang cố tạo đáy nhưng HPG thủng đáy. Việc cần làm: xử lý margin NGAY (đã rất muộn — bản thân và khách hàng không margin từ T10 năm ngoái), đừng cược ngắn hạn gỡ lỗ, sống sót đến khi thị trường tích lũy xong nền. Vẫn cầm nhiều cổ phiếu — không khuyên bán hết chờ giảm.",
          "feedChips": [
            {
              "label": "Ngắn hạn ↓ không có đáy, view xấu",
              "sig": "down"
            },
            {
              "label": "Thanh khoản ⚠ nghẽn mọi thị trường",
              "sig": "warn"
            },
            {
              "label": "Margin ⚠ xử lý ngay — đã muộn",
              "sig": "warn"
            },
            {
              "label": "Dài hạn ◷ sống sót chờ tích lũy",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "Thị trường ngắn hạn",
              "value": "Không có đáy ngắn hạn",
              "signal": "down",
              "note": "Kể cả tạo đáy đẹp cũng không đi xa vì thanh khoản không cho phép. Kịch bản khả thi nhất: yếu/đi ngang thêm một thời gian. TCB, SSI cố tạo đáy nhưng HPG thủng đáy — tư duy \"đáy thì thanh khoản bé\" không áp dụng được lúc này."
            },
            {
              "tag": "Margin",
              "value": "Xử lý ngay — đã rất muộn",
              "signal": "warn",
              "note": "Chi phí vay và rủi ro vay đều rất cao. Bản thân và nhóm khách hàng không dùng margin từ tháng 10 năm ngoái. Xử lý xong margin mới an toàn ngồi đợi thị trường tạo đáy."
            },
            {
              "tag": "Chiến lược",
              "value": "Sống sót dài hạn — đừng đoán đáy",
              "signal": "wait",
              "note": "Không bán hết chờ giảm (tư duy ngắn hạn tự mâu thuẫn — người tư duy ngắn hạn không cầm được cổ phiếu lâu), không gồng bằng mọi giá, không tất tay gỡ lỗ. Giữ tài khoản đến khi thị trường tích lũy xong và tăng trở lại."
            }
          ],
          "sections": [
            {
              "title": "Thị trường nản, không hoảng sợ",
              "signal": "down",
              "sigLabel": "Tâm lý — mất phương hướng",
              "para": "\"Cái gì biết thì không sợ, cái gì sợ thì không biết\" — mọi cái xấu (thanh khoản thấp, thế giới biến động, chính sách vĩ mô chỉ tác động đường dài) thị trường đều đã nhìn thấy, nên không hoảng sợ mà bị NẢN: nghi ngờ lý do đầu tư, mất phương hướng, phản ánh ở hai nhịp bán thứ Hai liên tiếp.",
              "bullets": [
                "Phiên thứ Sáu tuần trước: tâm trạng thị trường xuống thấp nhất kể từ đầu năm.",
                "Tranh luận downtrend/uptrend, vùng phân phối hay tái tích lũy lúc này không có ý nghĩa — vấn đề là thanh khoản.",
                "Thanh khoản thấp diễn ra ở mọi thị trường từ đầu năm: chứng khoán, bất động sản, cả làm ăn kinh doanh — giai đoạn nhiều yếu tố kinh tế xoay chiều, tương lai ngắn hạn bất định.",
                "Đừng kỳ vọng \"một sáng ATO tăng mạnh, tạo đáy, tin tốt ngập tràn, vượt đỉnh\" — điều đó không diễn ra."
              ]
            },
            {
              "title": "Việc cần làm: margin và sinh tồn",
              "signal": "warn",
              "sigLabel": "Hành động — xử lý margin, đợi tích lũy",
              "para": "Kịch bản đẹp nhất: thị trường về vùng cân bằng định giá, nhỏ lẻ rụng hết hàng, tạo đáy dần và thanh khoản + niềm tin hồi phục từ từ — mất rất nhiều thời gian. Nhiệm vụ nhà đầu tư nhỏ lẻ không phải đoán đáy hay tất tay về bờ, mà là sống sót trong dài hạn.",
              "bullets": [
                "Xử lý phần margin ngay — chỗ này xử lý là đã \"rất muộn rồi\"; sau đó ngồi đợi, đừng cược ngắn hạn.",
                "Ai cố so độ lì với thị trường bằng kèo gỡ lỗ đều bị đánh bại ở gần đáy — mọi giai đoạn giảm đều diễn biến như vậy.",
                "Vẫn cầm khá nhiều cổ phiếu, chưa bao giờ rời bỏ thị trường — không khuyên bán hết đợi sập để mua lại.",
                "Cuối phiên có vài mã \"rút chân\" (TCB khá ổn) nhưng chưa tạo ra tín hiệu nào cho phép kỳ vọng tăng lại trong tuần."
              ]
            }
          ]
        },
        {
          "date": "2026-07-09",
          "dateShort": "09/07",
          "timeAgo": "Tuần trước",
          "tab": "Video · 09/07",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Lý Do Nắm Giữ Cổ Phiếu Chứng Khoán — Vì Sao Dòng Tiền Ngoại Không Phải Kỳ Vọng?",
          "summary": "Bác bỏ kỳ vọng “nâng hạng → 2 tỷ đô ngoại tràn vào” (đếm cua trong lỗ). Dòng tiền index (passive) sẽ auto vào theo tiêu chuẩn, nhưng dòng chủ động thì không — VN >50% là tài chính (26% bank, 24% Vin), thiếu DN công nghệ/AI và công cụ phòng vệ (bán khống, quyền chọn). Vẫn nắm giữ nhóm chứng khoán dài hạn vì 3 lý do: mô hình ổn định, TTCK là kênh huy động vốn cốt lõi tương lai, thanh khoản đáy sẽ hồi. Ngắn hạn yếu — SSI chưa vượt kháng cự.",
          "feedChips": [
            {
              "label": "Ngoại ↓ vẫn bán ròng",
              "sig": "down"
            },
            {
              "label": "Nâng hạng ⚠ đừng kỳ vọng 2 tỷ đô",
              "sig": "warn"
            },
            {
              "label": "Nhóm CK ↑ giữ dài hạn",
              "sig": "up"
            },
            {
              "label": "SSI ◷ chưa vượt kháng cự",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "Dòng tiền ngoại",
              "value": "Đừng kỳ vọng 2 tỷ đô",
              "signal": "down",
              "note": "Luận điểm nâng hạng → ngoại tràn vào là “đếm cua trong lỗ”, khẩu hiệu của Bộ Tài chính/UBCK. Dòng index auto vào theo tiêu chuẩn, nhưng dòng chủ động thì không — vài năm nay khối ngoại không mua ròng nổi quá 1 tuần."
            },
            {
              "tag": "Cơ cấu thị trường",
              "value": ">50% là tài chính",
              "signal": "wait",
              "note": "26% bank, 24% Vin, BĐS + bảo hiểm mười mấy %. VN thiếu DN công nghệ/AI/chăm sóc sức khỏe và thiếu công cụ phòng vệ rủi ro (bán khống, quyền chọn) — ngoài game tài chính, quỹ ngoại không có gì để chơi."
            },
            {
              "tag": "Nhóm chứng khoán",
              "value": "Giữ dài hạn",
              "signal": "up",
              "note": "Đầu tư thật nhưng không kỳ vọng dòng tiền đếm cua. Nắm giữ vì: mô hình kinh doanh ổn định, TTCK là kênh huy động vốn cốt lõi khi bank/trái phiếu hết dư địa, và thanh khoản đang đáy sẽ hồi."
            },
            {
              "tag": "SSI",
              "value": "Chờ vượt kháng cự",
              "signal": "wait",
              "note": "Chưa đóng trên “chen line” (kháng cự) thì chưa có điểm mua ngắn hạn; kể cả vượt cũng chưa đẹp vì tích lũy khối lượng kém. Nắm một phần, kiên nhẫn."
            }
          ],
          "sections": [
            {
              "title": "Vì sao dòng tiền ngoại không phải kỳ vọng",
              "signal": "down",
              "sigLabel": "Thực tế — đừng đếm cua trong lỗ",
              "para": "Nâng hạng từ cận biên lên mới nổi thứ cấp thì dòng tiền index (thụ động) sẽ tự động vào theo tiêu chuẩn đầu tư — điều này có quyền kỳ vọng. Nhưng dòng tiền CHỦ ĐỘNG thì không: quỹ ngoại ưu tiên DN có lợi thế cạnh tranh quốc tế (công nghệ, AI, chăm sóc sức khỏe) — thứ VN gần như không có.",
              "bullets": [
                "Quy mô thị trường VN: 26% ngân hàng, 24% Vin Group, BĐS + bảo hiểm thêm mười mấy % → hơn 50% là tài chính.",
                "Thiếu công cụ phòng vệ rủi ro (bán khống, quyền chọn, hedging) — ví dụ PNJ “oẳng”, quỹ cầm không có cách thoát.",
                "Game tài chính VN là game tăng vốn / chia cổ tức / tin đồn — cần tin nội bộ ban lãnh đạo mới đánh được.",
                "Sau KRX chưa có thêm sản phẩm tài chính nào (trừ VN100 gần như vô nghĩa) → khối ngoại vẫn bán ròng."
              ]
            },
            {
              "title": "Lý do vẫn nắm giữ nhóm chứng khoán dài hạn",
              "signal": "up",
              "sigLabel": "Tích cực — 3 yếu tố cốt lõi",
              "para": "Đầu tư nhóm chứng khoán là thật, nhưng dựa trên nội lực chứ không dựa vào kỳ vọng dòng tiền ngoại. Ngắn hạn nhóm CK có thể yếu, dài hạn không lo thiếu đất diễn nếu tin vào 3 yếu tố.",
              "bullets": [
                "Mô hình kinh doanh của công ty chứng khoán ổn định.",
                "TTCK sẽ là kênh huy động vốn cốt lõi của nền kinh tế khi ngân hàng và trái phiếu đã hết dư địa tăng trưởng.",
                "Thanh khoản đang ở đáy — trước sau gì cũng tăng trở lại khi cơ hội giảm giá thu hút dòng tiền.",
                "SSI và nhóm midcap: nắm giữ một phần, kiên nhẫn — chưa vượt kháng cự thì chưa vào thêm ngắn hạn."
              ]
            }
          ]
        },
        {
          "date": "2026-07-08",
          "dateShort": "08/07",
          "timeAgo": "Tuần trước",
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
        }
      ],
      "sources": [
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "17/07/2026",
          "title": "Thị trường đã vào downtrend chưa? Tại sao lúc này bán cổ phiếu cũng là rủi ro",
          "meta": "Video công khai · Chứng khoán 5 phút"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "16/07/2026",
          "title": "Đã có đáy chưa? Bây giờ hồi lên thì nên xử lý cổ phiếu lỗ thế nào?",
          "meta": "Video công khai · Chứng khoán 5 phút"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "15/07/2026",
          "title": "Vấn đề của PNJ không phải là cổ phiếu tăng hay giảm.",
          "meta": "Video công khai · Chứng khoán 5 phút"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "14/07/2026",
          "title": "Cổ phiếu đang rẻ hay đắt? - Những tư duy để vững tin đầu tư dài hạn trong thị trường hiện tại",
          "meta": "Video công khai · Chứng khoán 5 phút"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "13/07/2026",
          "title": "Điều quan trọng nhất nhà đầu tư cần nhìn thấy lúc này ở thị trường",
          "meta": "Video công khai · Chứng khoán 5 phút"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "09/07/2026",
          "title": "Lý do nắm giữ cổ phiếu chứng khoán - Tại sao dòng tiền nước ngoài không phải là kỳ vọng?",
          "meta": "Video công khai · Chứng khoán 5 phút"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "08/07/2026",
          "title": "Lúc này có nên chốt lãi 5–7%? 3 cách chốt lãi ngắn hạn ở thị trường đi ngang",
          "meta": "Video công khai · Chứng khoán 5 phút"
        }
      ]
    }
  },
  "weekly": {
    "dateRange": "13–18/07/2026",
    "action": "Phòng thủ tiếp — thanh khoản kiệt (17/07 chỉ ~11.000 tỷ, bằng nửa ngưỡng tối thiểu). Thái Phạm (Tập 38): giữ tiền 60/cổ 40, quỹ ngoại rút đồng loạt, VN-Index về ~1.600 \"rất khả thi\"; quốc tế chuyển hẳn sang SHORT (S&P/US30, Apple 320–330, Samsung), LONG dầu (đích 88–90), chờ vàng đáy 3.600–3.700. CK 5 phút: chưa gọi được downtrend nhưng BÁN midcap lúc này rủi ro hơn GIỮ. AzFin: soát lại khẩu vị rủi ro — đa dạng 5–10 mã, P/E danh mục <10, lãnh đạo bị khởi tố là loại ngay. Cả 3: KHÔNG margin, tránh cổ phiếu dính pháp lý.",
    "consensus": [
      {
        "label": "Cổ phiếu dính pháp lý: loại, không bàn",
        "detail": "Thái Phạm (Tập 38): \"đừng đụng\" FPT, PNJ, PC1, Đức Giang. AzFin (#13): lãnh đạo/linh hồn doanh nghiệp bị khởi tố (DGC) → loại ngay lập tức; PNJ nhờ chỉ 2% danh mục nên giảm 15% chỉ mất 0,3% NAV. CK 5 phút đã cảnh báo PNJ từ 15/07."
      },
      {
        "label": "Chưa có đáy — nhưng bán tháo lúc này là sai",
        "detail": "CK 5 phút (16–17/07): nến đảo chiều/rút chân có nhưng độ tin cậy thấp, thanh khoản 11.000 tỷ; midcap về ngang đáy chiến tranh thương mại — bán rủi ro hơn giữ, chỉ ưu tiên xử lý margin. Thái Phạm: điểm số được VIC/VHM giữ, cổ phiếu giảm sâu hơn index thể hiện."
      },
      {
        "label": "Định giá rẻ — mua bằng kỷ luật, không all-in",
        "detail": "CK 5 phút: \"99/100 chuyên gia nói dài hạn là cơ hội rất lớn\" — chia 3–4 lệnh theo nền giá. AzFin: chuẩn danh mục P/E <10, P/B <2, ROE >15%, cổ tức x2–3 thị trường. Thái Phạm: tích DCM/DPM dài hạn đến ~30% danh mục."
      },
      {
        "label": "Fed hết cửa hạ lãi — lạm phát quay lại vì dầu + cước vận tải",
        "detail": "Thái Phạm: cước Thượng Hải–LA 6.482 đô/container (x3 từ T2, tăng 10 tuần liên tiếp), thuế điều tra Mỹ từ 24/07, dầu +20% từ đáy → CPI Mỹ T7–T8 tăng lại; BofA thậm chí tính kịch bản +75bps. Chỉ có giữ hoặc tăng lãi."
      }
    ],
    "divergence": [
      {
        "label": "Tiền mặt hay cổ phiếu",
        "detail": "Thái Phạm phòng thủ nhất: 60% tiền + chuyển short quốc tế. AzFin vẫn theo tích sản đều hàng tháng (cổ phiếu 70–80% từ tuần trước). CK 5 phút đứng giữa: không bán midcap nhưng cũng không vội mua theo tín hiệu — \"nằm yên chịu đựng\"."
      },
      {
        "label": "VN-Index về 1.600?",
        "detail": "Thái Phạm coi về ~1.600 là kịch bản chính để giải ngân mạnh (quỹ ngoại rút đồng loạt). CK 5 phút: chưa vào downtrend về tín hiệu, midcap đã chiết khấu rất sâu — không đoán đáy, dài hạn thì mua từng phần ngay từ vùng này."
      }
    ]
  },
  "scorecard": [
    {
      "expert": "thai-pham",
      "date": "01/06",
      "asset": "CK Việt",
      "call": "Vĩ mô đổi chiều — nâng tiền mặt lên 50%",
      "result": "hit",
      "note": "Thị trường vào “mùa đông” đúng như cảnh báo: 71,75% cổ phiếu downtrend (video 12/07)."
    },
    {
      "expert": "thai-pham",
      "date": "01/06",
      "asset": "Bitcoin",
      "call": "BTC gãy 71,8k là gãy nền “banana”",
      "result": "hit",
      "note": "BTC sập từ vùng 71–74k về ~63k, đúng cấu trúc kỹ thuật đã vẽ."
    },
    {
      "expert": "thai-pham",
      "date": "08/06",
      "asset": "Nhật & Hàn",
      "call": "Hàn/Nhật sẽ điều chỉnh mạnh — margin kỷ lục",
      "result": "hit",
      "note": "Kospi rớt ~25% từ đỉnh, NĐT margin cháy tài khoản (Tập 37: “em ra đảo hết rồi”)."
    },
    {
      "expert": "thai-pham",
      "date": "12/06",
      "asset": "CK Mỹ",
      "call": "Semiconductor kéo rướn sẽ chỉnh mạnh",
      "result": "hit",
      "note": "Sóng bán dẫn tạm dừng; SanDisk/Micron rơi 10–14%/phiên cuối T6 (Tập 36)."
    },
    {
      "expert": "thai-pham",
      "date": "12/06",
      "asset": "Dầu",
      "call": "Dầu về vùng 77–80",
      "result": "hit",
      "note": "Dầu giảm từ 120 về 70–80 rồi neo ~80 (12/07) — đúng thesis từ 21/04."
    },
    {
      "expert": "thai-pham",
      "date": "15/06",
      "asset": "Dầu",
      "call": "Iran–Mỹ ký 19/6 → dầu giảm, vàng tăng ngắn hạn",
      "result": "hit",
      "note": "Đúng kịch bản: MU ký 17–19/6, dầu về 76–80, vàng bật ngắn hạn."
    },
    {
      "expert": "thai-pham",
      "date": "12/06",
      "asset": "Vàng",
      "call": "Vàng về 3.900–4.000",
      "result": "hit",
      "note": "Vàng rơi từ đỉnh ~5.500 về vùng ~4.100 — đúng hướng, sát vùng dự báo."
    },
    {
      "expert": "thai-pham",
      "date": "17/06",
      "asset": "CK Mỹ",
      "call": "SpaceX định giá ảo (thực ~780 tỷ vs 2.660 tỷ)",
      "result": "hit",
      "note": "SpaceX rơi từ ~218–225 về ~157 và tiếp tục yếu sau khi vào Nasdaq 100."
    },
    {
      "expert": "thai-pham",
      "date": "18/06",
      "asset": "Vĩ mô",
      "call": "EM tiếp tục chịu áp lực tỷ giá/lãi suất do Fed",
      "result": "hit",
      "note": "Quỹ ngoại rút vốn, VN-Index sập dù FDI kỷ lục (video 12/07)."
    },
    {
      "expert": "thai-pham",
      "date": "20/06",
      "asset": "Nhật & Hàn",
      "call": "Samsung đừng mua — hồi lên là để bán",
      "result": "hit",
      "note": "Samsung pump & dump, rơi thẳng về đáy cũ (Tập 37)."
    },
    {
      "expert": "thai-pham",
      "date": "21/06",
      "asset": "Dầu",
      "call": "Dầu neo cao 75–85, khó giảm sâu",
      "result": "hit",
      "note": "Iran tái chiến 09/07, dầu bật +8% lên 80,59 — đúng vùng neo."
    },
    {
      "expert": "thai-pham",
      "date": "21/06",
      "asset": "CK Việt",
      "call": "VN kẹt thanh khoản (LDR 115%) — đừng nhìn index",
      "result": "hit",
      "note": "Index ~1.828 “đẹp” nhưng 71,75% cổ phiếu downtrend (12/07)."
    },
    {
      "expert": "thai-pham",
      "date": "16/06",
      "asset": "CK Việt",
      "call": "Tăng cổ phiếu lên 70% — chợ huyện sắp có sức sống",
      "result": "miss",
      "note": "Tự thừa nhận ở Tập 37 (11/07): “định đề sai” — index chỉnh kéo cả bank/CK giảm; phải hạ về 40% cổ phiếu."
    },
    {
      "expert": "thai-pham",
      "date": "16/06",
      "asset": "CK Việt",
      "call": "Lướt sóng nhóm chứng khoán (SSI/VCI/VIX)",
      "result": "miss",
      "note": "Tập 37: lướt sóng “bị phèo”, cắt lỗ toàn bộ vị thế lướt sóng (-6–10%)."
    },
    {
      "expert": "thai-pham",
      "date": "20/06",
      "asset": "Vàng",
      "call": "Vàng về ~3.000 nếu Fed tăng lãi",
      "result": "pending",
      "note": "Tập 38: hạ vùng đáy dự kiến còn 3.600–3.700 (sẽ bắt đáy tại đó); Fed nghiêng về giữ/tăng lãi — chưa chốt."
    },
    {
      "expert": "thai-pham",
      "date": "04/07",
      "asset": "CK Mỹ",
      "call": "SpaceX về 100–110 trong ~6 tháng",
      "result": "pending",
      "note": "Tập 38: giữ short từ ~155, hạ mục tiêu về 80–87, giữ đến T1/2027; còn 4 đợt unlock cổ phiếu tới 12/2026."
    },
    {
      "expert": "thai-pham",
      "date": "04/07",
      "asset": "CK Mỹ",
      "call": "Apple điều chỉnh — short 325–330",
      "result": "pending",
      "note": "Tập 38: đã short 320–330 (1/2 vị thế), 1/2 để dành sau BCTC 30/07 — kỳ vọng guidance Q3 xấu."
    },
    {
      "expert": "thai-pham",
      "date": "09/07",
      "asset": "Dầu",
      "call": "Dầu có thể lên 87–90 nếu leo thang",
      "result": "pending",
      "note": "Tập 38 (18/07): dầu đã hồi về ~84 (\"hơn dự kiến\") — đúng hướng nhưng chưa chạm 87; nâng kịch bản US 88–90, UK 95–96."
    },
    {
      "expert": "thai-pham",
      "date": "11/07",
      "asset": "CK Việt",
      "call": "VN-Index về ~1.600 trong 6 tháng (xác suất 78%)",
      "result": "pending",
      "note": "Tập 38 tự xác nhận lại: về ~1.600 \"rất khả thi\" — quỹ ngoại rút đồng loạt, index chỉ được VIC/VHM giữ."
    },
    {
      "expert": "thai-pham",
      "date": "18/07",
      "asset": "Dầu",
      "call": "Long dầu — mục tiêu US 88–90 (UK 95–96 nếu leo thang), cắt lỗ 78",
      "result": "pending",
      "note": "Không short 2–3 tuần tới; căn cứ leo thang Iran + Houthi dọa đóng Biển Đỏ."
    },
    {
      "expert": "thai-pham",
      "date": "18/07",
      "asset": "Vàng",
      "call": "Vàng quét xuống 3.600–3.700 là vùng bắt đáy; hồi kỹ thuật khó về 4.100",
      "result": "pending",
      "note": "Tuyên bố sẽ mua bắt đáy tại vùng đó; long cũ chốt ~4.040, stop 3.930."
    },
    {
      "expert": "thai-pham",
      "date": "18/07",
      "asset": "Bitcoin",
      "call": "Short BTC nếu fake pump 69–70k; chỉ mua lại ở ~50k",
      "result": "pending",
      "note": "\"Banana\" gãy đang hình thành; Fed không hạ lãi → crypto áp lực."
    },
    {
      "expert": "thai-pham",
      "date": "18/07",
      "asset": "CK Mỹ",
      "call": "US30/S&P 500 vào vùng short — Mỹ chỉ hồi vài ngày rồi giảm tiếp",
      "result": "pending",
      "note": "Margin cá nhân 1,4% vốn hóa (ngang đỉnh 2018, vượt dotcom); Nasdaq short sau hồi 1–2 phiên."
    },
    {
      "expert": "thai-pham",
      "date": "18/07",
      "asset": "Nhật & Hàn",
      "call": "Samsung gãy về 214.000 KRW đầu tuần, cực đoan 170.000 mới hồi",
      "result": "pending",
      "note": "Kospi margin call diện rộng; Nikkei test lại 58.700."
    },
    {
      "expert": "azfin",
      "date": "2014–17",
      "asset": "CK Việt",
      "call": "REE: mua 20–22 khi định giá rẻ, cổ tức 7–8%",
      "result": "hit",
      "note": "Tự thuật (#05): 3 năm sau tăng 45–47, chốt ~40 — lợi nhuận kép 35–40%/năm."
    },
    {
      "expert": "azfin",
      "date": "2023–25",
      "asset": "CK Việt",
      "call": "VPBank: tích sản 17–20, kiên nhẫn 28 tháng",
      "result": "hit",
      "note": "Tự thuật (#05): sập 14 (thuế 4/25) rồi tăng 38 trong 3–4 tháng; chốt 33–36 (+160%)."
    },
    {
      "expert": "azfin",
      "date": "2025",
      "asset": "CK Việt",
      "call": "DGC: chốt lời vùng >100 vì không còn rẻ",
      "result": "hit",
      "note": "Tự thuật (#05): thoát trước biến cố pháp lý nhờ kỷ luật định giá — tránh cú sập."
    },
    {
      "expert": "azfin",
      "date": "14/06",
      "asset": "CK Việt",
      "call": "Định giá VN percentile 10–15% — cơ hội tích lũy",
      "result": "pending",
      "note": "Chính AzFin xác nhận (#05): giá vẫn đi ngang/giảm dù KQKD tốt — chưa được trả giá."
    },
    {
      "expert": "azfin",
      "date": "10/07",
      "asset": "CK Việt",
      "call": "KQKD Q2 tăng >20%; bank lớn +30–50%",
      "result": "pending",
      "note": "Chờ mùa BCTC Q2 công bố để đối chiếu."
    },
    {
      "expert": "ck-5-phut",
      "date": "17/06",
      "asset": "Vĩ mô",
      "call": "Fed giữ nguyên; 2 tin khó tạo cú hích ngắn hạn",
      "result": "hit",
      "note": "Fed giữ 3,5–3,75%; thị trường không sinh xu hướng mới, sau đó đi ngang/giảm."
    },
    {
      "expert": "ck-5-phut",
      "date": "09/07",
      "asset": "CK Việt",
      "call": "Đừng kỳ vọng 2 tỷ đô ngoại sau nâng hạng",
      "result": "hit",
      "note": "Ngoại tiếp tục bán ròng (>80.000 tỷ 6T); VN-Index sập dù FDI kỷ lục (12/07)."
    },
    {
      "expert": "ck-5-phut",
      "date": "08/07",
      "asset": "CK Việt",
      "call": "Thị trường gần đáy hơn đỉnh, chưa xác nhận tăng",
      "result": "pending",
      "note": "Video 16–17/07: có nến xuyên thấu/rút chân nhưng độ tin cậy thấp; thanh khoản kiệt (11.000 tỷ ngày 17/07) — chưa chốt."
    },
    {
      "expert": "ck-5-phut",
      "date": "13/07",
      "asset": "CK Việt",
      "call": "Không có đáy ngắn hạn — thị trường yếu/đi ngang thêm một thời gian",
      "result": "pending",
      "note": "Video 16–17/07: có nến xuyên thấu/rút chân nhưng độ tin cậy thấp; thanh khoản kiệt (11.000 tỷ ngày 17/07) — chưa chốt."
    },
    {
      "expert": "ck-5-phut",
      "date": "14/07",
      "asset": "CK Việt",
      "call": "P/E ~13.x (loại Vin ~11.x) là vùng siêu đáy — mua từng phần cổ phiếu cơ bản chiết khấu ~30%",
      "result": "pending",
      "note": "Kiểm chứng khi thị trường xác nhận đáy/hồi phục; DPM ~24 là ví dụ điểm vào từng phần."
    },
    {
      "expert": "ck-5-phut",
      "date": "15/07",
      "asset": "PNJ",
      "call": "Không mua PNJ — rủi ro pháp lý liên đới, kể cả phiên trần",
      "result": "pending",
      "note": "Chờ kết quả điều tra và diễn biến giá PNJ để đối chiếu."
    },
    {
      "expert": "ck-5-phut",
      "date": "16/07",
      "asset": "SSI",
      "call": "SSI cần đóng trên 26 mới xác nhận đảo chiều",
      "result": "pending",
      "note": "Rút chân ấn tượng ngày 16/07 nhưng chưa xác nhận; không được thì đợi sang tuần."
    },
    {
      "expert": "ck-5-phut",
      "date": "17/07",
      "asset": "CK Việt",
      "call": "Chưa vào downtrend (về tín hiệu) — bán midcap lúc này rủi ro hơn nắm giữ",
      "result": "pending",
      "note": "Midcap về ngang đáy chiến tranh thương mại; BCTC Q2 sẽ không tác động nhiều lên giá."
    }
  ],
  "actions": {
    "updated": "19/07/2026",
    "now": [
      {
        "asset": "Dầu WTI",
        "dir": "LONG",
        "sig": "up",
        "expertId": "thai-pham",
        "detail": "Giữ long — Trung Đông leo thang, không short 2–3 tuần tới.",
        "level": "Đích 88–90 · cắt lỗ 78"
      },
      {
        "asset": "DCM + DPM",
        "dir": "TÍCH LŨY",
        "sig": "up",
        "expertId": "thai-pham",
        "detail": "Mua dài hạn vùng đáy — đã vào 70% vị thế, cầm ăn cổ tức \"bất chấp qua sóng gió\".",
        "level": "Trần ~30% danh mục"
      },
      {
        "asset": "Tích sản hàng tháng",
        "dir": "MUA ĐỀU",
        "sig": "up",
        "expertId": "azfin",
        "detail": "Danh mục 5–10 mã đầu ngành: P/E <10, P/B <2, ROE >15%, cổ tức x2–3 thị trường.",
        "level": "Loại ngay mã có lãnh đạo bị khởi tố"
      },
      {
        "asset": "S&P 500 / US30",
        "dir": "SHORT",
        "sig": "down",
        "expertId": "thai-pham",
        "detail": "Vào vùng short — margin cá nhân Mỹ 1,4% vốn hóa, ngang đỉnh 2018, vượt dotcom.",
        "level": "Mỹ chỉ hồi vài ngày rồi giảm tiếp"
      },
      {
        "asset": "Apple",
        "dir": "SHORT 1/2",
        "sig": "down",
        "expertId": "thai-pham",
        "detail": "Đã short nửa vị thế 320–330; nửa còn lại để dành sau BCTC 30/07.",
        "level": "Vào 320–330 · giữ qua 30/07"
      },
      {
        "asset": "SpaceX",
        "dir": "SHORT",
        "sig": "down",
        "expertId": "thai-pham",
        "detail": "Giữ short từ ~155 — còn 4 đợt unlock cổ phiếu tới 12/2026, cung tăng gấp 8 lần.",
        "level": "Đích 80–87 · giữ đến T1/2027"
      },
      {
        "asset": "Intel · MU · Cyber",
        "dir": "SHORT",
        "sig": "down",
        "expertId": "thai-pham",
        "detail": "Intel đích ~77; MU/Marvell đã chốt 1/2 lời; canh short Palo Alto, Fortinet, CrowdStrike.",
        "level": "Vị thế nhỏ · không đòn bẩy"
      },
      {
        "asset": "Samsung / Kospi",
        "dir": "SHORT",
        "sig": "down",
        "expertId": "thai-pham",
        "detail": "Giữ short — Kospi margin call diện rộng, \"bạo phát bạo tàn\".",
        "level": "214.000 → cực đoan 170.000 KRW"
      },
      {
        "asset": "BID · SCS · VNM · TCX",
        "dir": "GIỮ",
        "sig": "wait",
        "expertId": "thai-pham",
        "detail": "Danh mục cổ phiếu 40%: VNM túc tắc vùng 56, bán khi +5–7%; SCS ăn cổ tức; bỏ hẳn lướt sóng.",
        "level": "Tiền 60% · cổ 40%"
      },
      {
        "asset": "Midcap VN",
        "dir": "KHÔNG BÁN",
        "sig": "warn",
        "expertId": "ck-5-phut",
        "detail": "Bán lúc này rủi ro hơn nắm giữ — nhiều mã về ngang đáy chiến tranh thương mại. Ưu tiên duy nhất: xử lý margin.",
        "level": "Nằm yên chịu đựng · đợi tín hiệu mới"
      }
    ],
    "waiting": [
      {
        "asset": "Vàng",
        "trigger": "3.600–3.700",
        "action": "MUA BẮT ĐÁY",
        "sig": "up",
        "expertId": "thai-pham",
        "note": "Kịch bản quét xuống — \"sẽ mua bắt đáy tại đó\"; hồi kỹ thuật khó về 4.100."
      },
      {
        "asset": "VN-Index",
        "trigger": "~1.600",
        "action": "GIẢI NGÂN MẠNH",
        "sig": "up",
        "expertId": "thai-pham",
        "note": "Kịch bản \"rất khả thi\" — quỹ ngoại rút đồng loạt; là điểm mua lớn nhất đang chờ."
      },
      {
        "asset": "Bitcoin",
        "trigger": "~50.000",
        "action": "MUA LẠI",
        "sig": "up",
        "expertId": "thai-pham",
        "note": "Chỉ giải ngân khi test đỉnh 2021; trên đó chỉ lướt."
      },
      {
        "asset": "Dầu WTI",
        "trigger": "88–90",
        "action": "CHỐT LONG",
        "sig": "up",
        "expertId": "thai-pham",
        "note": "UK/Brent 95–96 nếu đánh lớn."
      },
      {
        "asset": "SSI",
        "trigger": "Đóng > 26",
        "action": "MUA THEO TÍN HIỆU",
        "sig": "wait",
        "expertId": "ck-5-phut",
        "note": "Rút chân đẹp nhưng chưa xác nhận; không được thì đợi sang tuần — không vội."
      },
      {
        "asset": "Vàng (long cũ)",
        "trigger": "~4.040",
        "action": "CHỐT LỜI",
        "sig": "wait",
        "expertId": "thai-pham",
        "note": "Stop loss 3.930 cho vị thế long đang giữ."
      },
      {
        "asset": "Vàng trong nước",
        "trigger": "Chênh ≤ 10–12tr",
        "action": "MUA VẬT CHẤT",
        "sig": "wait",
        "expertId": "thai-pham",
        "note": "Hiện chênh 19–20tr/lượng — không mua; chỉ mua thương hiệu uy tín 15–20 năm, mua đâu bán đấy."
      },
      {
        "asset": "Bitcoin",
        "trigger": "69–70k (fake pump)",
        "action": "SHORT",
        "sig": "down",
        "expertId": "thai-pham",
        "note": "Chỉ short nếu căng thẳng Iran đẩy giá bơm ảo lên vùng này."
      },
      {
        "asset": "Nasdaq",
        "trigger": "Hồi 1–2 phiên",
        "action": "SHORT",
        "sig": "down",
        "expertId": "thai-pham",
        "note": "Nhiều khi phiên châu Á không kịp cho hồi — canh sát."
      }
    ],
    "events": [
      {
        "date": "2026-07-20",
        "label": "Phiên đầu tuần châu Á",
        "note": "Xem phản ứng Samsung/Kospi — Samsung có thể gãy về 214.000 KRW.",
        "sig": "down",
        "expertId": "thai-pham"
      },
      {
        "date": "2026-07-21",
        "label": "BVBank chào sàn (13.1)",
        "note": "Thái Phạm giữ trong danh mục cổ phiếu 40%.",
        "sig": "wait",
        "expertId": "thai-pham"
      },
      {
        "date": "2026-07-24",
        "label": "Mỹ áp thuế điều tra mới",
        "note": "Hết miễn thuế — chi phí chuyển sang người tiêu dùng, lạm phát T7–T8 tăng lại.",
        "sig": "warn",
        "expertId": "thai-pham"
      },
      {
        "date": "2026-07-30",
        "label": "BCTC Apple + guidance Q3",
        "note": "Vào nốt 1/2 vị thế short nếu guidance xấu — kỳ vọng \"gãy sâu về chen line\".",
        "sig": "down",
        "expertId": "thai-pham"
      },
      {
        "dateLabel": "T7–T8",
        "label": "CPI Mỹ phản ánh dầu tăng",
        "note": "Fed chỉ có giữ hoặc tăng lãi (BofA: +75bps) — không có cửa hạ.",
        "sig": "warn",
        "expertId": "thai-pham"
      },
      {
        "dateLabel": "Cuối T7–T8",
        "label": "Mùa BCTC Q2 Việt Nam",
        "note": "\"Báo cáo ít quan trọng nhất năm\" — không mua theo BCTC; DN tốt ra báo cáo ổn mà giá giảm thì vẫn giữ.",
        "sig": "wait",
        "expertId": "ck-5-phut"
      }
    ]
  },
  "tickers": [
    {
      "key": "dcm",
      "symbol": "DCM",
      "name": "Đạm Cà Mau",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:DCM",
      "sig": "up",
      "stance": "TÍCH LŨY DÀI HẠN",
      "aliases": [
        "dcm",
        "dam ca mau"
      ],
      "oneLiner": "Một trong hai mã duy nhất Thái Phạm mua dài hạn lúc này — đã vào 70% vị thế.",
      "thesis": [
        {
          "title": "Vì sao là mã mua dài hạn số 1",
          "body": "Trong Tập 38 (18/07), khi được hỏi \"mua gì cho dài hạn\", Thái Phạm chỉ nêu đúng hai cái tên: Đạm Cà Mau và Đạm Phú Mỹ. Chiến lược: túc tắc mua ở vùng đáy, đã vào được 70% vị thế mục tiêu và \"cứ nằm im, bất chấp qua sóng gió\" — cầm ăn cổ tức trong lúc chờ chu kỳ mới. Kỷ luật phân bổ: nhóm đạm/phân tối đa ~30% danh mục, có tiền lại mua thêm nhưng không bao giờ mua hết một lần, vì \"mùa đông có ra sức bón phân cây cũng chẳng nảy mầm\"."
        },
        {
          "title": "Bối cảnh nhóm phân bón",
          "body": "Chứng khoán 5 phút (14/07) xác nhận cùng bức tranh từ góc nhìn khác: cả nhóm phân bón đã giảm ~30% từ đỉnh tháng 3, kể cả hàng cơ bản như DCM/DPM — không phải vì doanh nghiệp có vấn đề mà vì thị trường chung yếu và thanh khoản kiệt. Với người theo trường phái nắm giữ, đây chính là dạng \"cổ phiếu cơ bản ở mức giá chiết khấu\" đáng mua từng phần."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "MUA TÍCH LŨY",
          "sig": "up",
          "entry": "Vùng đáy hiện tại (túc tắc)",
          "target": "Dài hạn — cầm ăn cổ tức",
          "stop": "Không dùng (không margin)",
          "status": "active",
          "date": "18/07",
          "note": "Đã vào 70% vị thế; trần ~30% danh mục cho cả nhóm đạm."
        }
      ]
    },
    {
      "key": "dpm",
      "symbol": "DPM",
      "name": "Đạm Phú Mỹ",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:DPM",
      "sig": "up",
      "stance": "TÍCH LŨY DÀI HẠN",
      "aliases": [
        "dpm",
        "dam phu my"
      ],
      "oneLiner": "Cặp đôi với DCM trong danh mục dài hạn của Thái Phạm; CK 5 phút lấy làm ví dụ mẫu về mua từng phần.",
      "thesis": [
        {
          "title": "Hai chuyên gia, một hướng nhìn",
          "body": "Thái Phạm (Tập 38): DPM cùng DCM là hai mã duy nhất ông tích lũy dài hạn lúc này — đã mua 70% vị thế, giữ ăn cổ tức, tối đa ~30% danh mục. Có lịch trả cổ tức thì \"cứ cầm, vùng này bán làm gì — cầm dài nhiều khi lời cả tiền cổ tức\"."
        },
        {
          "title": "Bài học mua từng phần (CK 5 phút, 14/07)",
          "body": "DPM được lấy làm ví dụ mẫu cho phương pháp: cổ phiếu cơ bản giảm ~30% từ đỉnh (từ vùng 30 về ~24) là có thể bắt đầu vào lệnh TỪNG PHẦN — lệnh 1, lệnh 2, nếu giá điều chỉnh tiếp vẫn an tâm đợi mua lệnh 3, lệnh 4. Điều tối kỵ là mua hết một lần rồi \"vững tay chèo\" từ đỉnh: mua DPM trên đỉnh 30 rồi gồng về 24 không phải là nắm giữ dài hạn đúng nghĩa — phải mua được ở giá chiết khấu thì mới giữ được lâu."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "MUA TÍCH LŨY",
          "sig": "up",
          "entry": "Vùng đáy hiện tại (túc tắc)",
          "target": "Dài hạn — cầm ăn cổ tức",
          "stop": "Không dùng (không margin)",
          "status": "active",
          "date": "18/07",
          "note": "Cặp với DCM; đã vào 70% vị thế mục tiêu."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "MUA TỪNG PHẦN",
          "sig": "up",
          "entry": "~24 (chiết khấu ~30% từ đỉnh 30)",
          "target": "Nắm giữ dài hạn",
          "stop": "Chia 3–4 lệnh thay cho stop",
          "status": "active",
          "date": "14/07",
          "note": "Ví dụ mẫu về mua cổ phiếu cơ bản giá chiết khấu — không all-in."
        }
      ]
    },
    {
      "key": "bid",
      "symbol": "BID",
      "name": "BIDV",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:BID",
      "sig": "wait",
      "stance": "GIỮ",
      "aliases": [
        "bid",
        "bidv",
        "bdv"
      ],
      "oneLiner": "Mã ngân hàng duy nhất Thái Phạm giữ lại — chọn thay Vietcombank.",
      "thesis": [
        {
          "title": "Vì sao chọn BID thay VCB",
          "body": "Tập 38 (18/07): sau khi rút danh mục về 40% cổ phiếu, nhóm ngân hàng chỉ còn lại BIDV. Thái Phạm thừa nhận \"về chỉ số thì Vietcombank đẹp hơn\" nhưng ông kỳ vọng BIDV sẽ có những quyết sách mới — một lựa chọn thiên về câu chuyện chính sách hơn là kỹ thuật. BID nằm trong nhóm giữ cùng BVBank, SCS, VNM và một phần TCX, trong bối cảnh chung là phòng thủ tiền 60/cổ 40."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "GIỮ",
          "sig": "wait",
          "entry": "Trong danh mục cổ phiếu 40%",
          "target": "Chờ quyết sách + thị trường tạo đáy",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "Ngân hàng duy nhất còn giữ; đã bỏ hẳn lướt sóng."
        }
      ]
    },
    {
      "key": "bvb",
      "symbol": "BVBank",
      "name": "BVBank (chào sàn 21/07)",
      "group": "Chứng khoán Việt Nam",
      "tv": "",
      "sig": "wait",
      "stance": "GIỮ — THEO DÕI CHÀO SÀN",
      "aliases": [
        "bvbank",
        "bvb"
      ],
      "oneLiner": "Chào sàn 21/07 giá tham chiếu 13.1 — Thái Phạm giữ trong danh mục 40%.",
      "thesis": [
        {
          "title": "Sự kiện chào sàn",
          "body": "Theo Tập 38, BVBank chào sàn ngày thứ Hai 21/07 với giá 13.1. Đây là một trong số ít mã còn lại trong danh mục cổ phiếu 40% của Thái Phạm (cùng BID, SCS, VNM, một phần TCX). Ông kỳ vọng phiên mở cửa thuận lợi (\"hy vọng là tốt\") — cần theo dõi diễn biến giá những phiên đầu để đánh giá lại."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "GIỮ",
          "sig": "wait",
          "entry": "Giá chào sàn 13.1",
          "target": "Theo dõi các phiên đầu niêm yết",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "Sự kiện 21/07 — xem trang Hành động."
        }
      ]
    },
    {
      "key": "vnm",
      "symbol": "VNM",
      "name": "Vinamilk",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:VNM",
      "sig": "wait",
      "stance": "GIỮ — BÁN KHI +5–7%",
      "aliases": [
        "vnm",
        "vinamilk",
        "vamil"
      ],
      "oneLiner": "Túc tắc mua vùng 56, mục tiêu khiêm tốn: lãi bằng gửi tiết kiệm một năm là chốt.",
      "thesis": [
        {
          "title": "Vị thế và kế hoạch chốt",
          "body": "Thái Phạm túc tắc mua VNM quanh vùng 56 và hiện đã có lời nhẹ. Tỷ trọng nhỏ (~3%) nên \"bán cũng chẳng biết bán để làm gì\" — kế hoạch là đợi lãi khoảng 5–7%, tức bằng lãi suất tiết kiệm một năm, thì chốt. Một vị thế mang tính phòng thủ đúng chất mùa đông: mục tiêu thấp, rủi ro thấp."
        },
        {
          "title": "Vai trò trong chỉ số",
          "body": "Đáng chú ý: theo Tập 38, VNM cuối tuần trước \"được dùng để điều khiển chỉ số\" — nhắc lại đặc thù giai đoạn này là điểm số VN-Index bị chi phối bởi vài mã lớn, nên diễn biến giá VNM ngắn hạn không hẳn phản ánh cung cầu thật."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "MUA / GIỮ",
          "sig": "wait",
          "entry": "~56 (túc tắc)",
          "target": "Chốt khi +5–7%",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "Tỷ trọng ~3%; mục tiêu bằng lãi tiết kiệm 1 năm."
        }
      ]
    },
    {
      "key": "scs",
      "symbol": "SCS",
      "name": "Saigon Cargo Service",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:SCS",
      "sig": "wait",
      "stance": "GIỮ — ĂN CỔ TỨC",
      "aliases": [
        "scs",
        "saigon cargo"
      ],
      "oneLiner": "Đang lỗ ~7–8% nhưng không margin nên \"thoải mái\" — giữ vì lợi thế cạnh tranh và cổ tức.",
      "thesis": [
        {
          "title": "Giữ qua vùng lỗ bằng cổ tức",
          "body": "Thái Phạm đang lỗ khoảng 7–8% ở SCS nhưng hoàn toàn thoải mái vì không dùng margin: \"vùng này thì tôi ăn cổ tức và tôi vẫn tin vào lợi thế cạnh tranh của mã này\". Giới hạn tỷ trọng khi được hỏi có nên cầm lâu dài: có thể cầm dài nhưng chỉ nên chiếm tối đa 20–25% tài khoản."
        },
        {
          "title": "Rủi ro cần theo dõi",
          "body": "Bối cảnh Trung Đông leo thang không thuận lợi cho mảng hàng không/cargo (ông nhắc đến ảnh hưởng ở cảng hàng không Qatar) — \"thời của cho, mệt mỏi\". Đây là biến số chính cần quan sát trong các tuần tới cùng diễn biến giá cước."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "GIỮ",
          "sig": "wait",
          "entry": "Đang lỗ ~7–8%, không margin",
          "target": "Ăn cổ tức, chờ hồi",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "Trần 20–25% tài khoản nếu muốn cầm dài."
        }
      ]
    },
    {
      "key": "tcx",
      "symbol": "TCX",
      "name": "TCBS (Chứng khoán Kỹ Thương)",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:TCX",
      "sig": "wait",
      "stance": "GIỮ MỘT PHẦN — ĐÃ CHỐT BỚT",
      "aliases": [
        "tcx",
        "tcbs"
      ],
      "oneLiner": "Đã chốt bớt tuần 28; phần còn lại nằm trong danh mục 40% phòng thủ.",
      "thesis": [
        {
          "title": "Từ \"tín hiệu sức sống\" đến chốt bớt",
          "body": "Giữa tháng 6, TCX từng được Thái Phạm nhắc đến như nhóm có \"tín hiệu sức sống đầu tiên\" của thị trường. Nhưng khi đổi thesis sang phòng thủ (Tập 37–38), ông đã chốt bớt một phần TCX, chỉ giữ lại tỷ trọng nhỏ trong danh mục cổ phiếu 40%. Nhóm chứng khoán nói chung ông đã ngừng lướt: \"vào đụng -6% cắt chạy — thị trường này khó đánh lắm\"."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "GIỮ MỘT PHẦN",
          "sig": "wait",
          "entry": "Đã chốt bớt tuần 28",
          "target": "Chờ thị trường tạo đáy",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "Không lướt thêm nhóm chứng khoán."
        }
      ]
    },
    {
      "key": "tcb",
      "symbol": "TCB",
      "name": "Techcombank",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:TCB",
      "sig": "wait",
      "stance": "THEO DÕI — ĐANG CỐ TẠO ĐÁY",
      "aliases": [
        "tcb",
        "techcombank",
        "tcombank"
      ],
      "oneLiner": "CK 5 phút: một trong số ít mã cơ bản đang cố tạo đáy; rút chân đẹp nhưng chưa có tín hiệu tăng.",
      "thesis": [
        {
          "title": "Tín hiệu kỹ thuật",
          "body": "Chứng khoán 5 phút (13/07) xếp TCB cùng SSI vào nhóm hiếm hoi các cổ phiếu cơ bản \"đang cố gắng tạo đáy\" trong khi mã khác như HPG còn thủng đáy. Phiên 13/07 TCB có cây nến rút chân \"khá ok\" — nhưng anh nói thẳng: chưa thấy tín hiệu nào cho phép kỳ vọng tăng trở lại trong tuần. Trạng thái: theo dõi, chưa hành động."
        },
        {
          "title": "Góc nhìn Thái Phạm",
          "body": "Khi hội viên hỏi về room ngoại: \"Techcombank full room ngoại — lúc nào cũng full\", tức không còn dư địa hút thêm dòng vốn ngoại như câu chuyện của FPT (hở room bị bán)."
        }
      ],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "THEO DÕI",
          "sig": "wait",
          "entry": "Chưa có điểm vào",
          "target": "Chờ tín hiệu xác nhận đáy",
          "stop": "—",
          "status": "waiting",
          "date": "13/07",
          "note": "Rút chân ok nhưng chưa đủ tín hiệu tăng trong tuần."
        }
      ]
    },
    {
      "key": "ssi",
      "symbol": "SSI",
      "name": "Chứng khoán SSI",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:SSI",
      "sig": "wait",
      "stance": "CHỜ ĐÓNG TRÊN 26",
      "aliases": [
        "ssi"
      ],
      "oneLiner": "Nến rút chân \"chân siêu mẫu\" — nhưng phải đóng trên 26 mới xác nhận đảo chiều.",
      "thesis": [
        {
          "title": "Điều kiện kích hoạt cụ thể",
          "body": "Chứng khoán 5 phút theo dõi SSI sát nhất trong nhóm chứng khoán. Phiên 16/07 SSI tạo nến rút chân rất dài (\"chân siêu mẫu, thắp ra rất nhiều hy vọng\") — nhưng điều kiện xác nhận đảo chiều rất rõ ràng: phải đóng cửa trên 25.5, chắc chắn hơn là trên 26. Không đạt thì \"đợi sang tuần, không vội\"."
        },
        {
          "title": "Bối cảnh nắm giữ",
          "body": "Từ 09/07 anh đã nói: SSI chưa vượt kháng cự (\"chen line\") thì chưa có điểm mua ngắn hạn — kể cả vượt cũng chưa đẹp vì tích lũy khối lượng kém. Chiến lược nhất quán: nắm một phần, kiên nhẫn; nhóm chứng khoán giữ dài hạn vì nội lực (TTCK sẽ là kênh huy động vốn cốt lõi), không phải vì kỳ vọng dòng tiền ngoại."
        }
      ],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "MUA THEO TÍN HIỆU",
          "sig": "wait",
          "entry": "Chỉ khi đóng > 26 (tối thiểu 25.5)",
          "target": "Xác nhận đảo chiều mới vào thêm",
          "stop": "Không đạt → đợi sang tuần",
          "status": "waiting",
          "date": "16/07",
          "note": "Đang nắm một phần từ trước, kiên nhẫn."
        }
      ]
    },
    {
      "key": "hpg",
      "symbol": "HPG",
      "name": "Hòa Phát",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:HPG",
      "sig": "down",
      "stance": "THỦNG ĐÁY — ĐỨNG NGOÀI",
      "aliases": [
        "hpg",
        "hoa phat",
        "hoang phat"
      ],
      "oneLiner": "Ví dụ điển hình CK 5 phút dẫn ra: hàng cơ bản đầu ngành vẫn thủng đáy — tư duy \"ở đáy thanh khoản bé\" không áp dụng được.",
      "thesis": [
        {
          "title": "Cảnh báo từ phiên 13/07",
          "body": "Trong khi TCB, SSI cố tạo đáy thì HPG — cổ phiếu cơ bản đầu ngành — lại THỦNG ĐÁY ngay phiên 13/07. Chứng khoán 5 phút dùng HPG làm bằng chứng rằng giai đoạn này không thể suy luận kiểu \"ở đáy thì thanh khoản bé\": có mã tạo đáy, có mã vẫn rơi. Chưa có khuyến nghị mua bán cụ thể — bài học ở đây là về đọc thị trường: thị trường giảm chung do nền kinh tế và thanh khoản, không phải do từng doanh nghiệp."
        }
      ],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "ĐỨNG NGOÀI",
          "sig": "down",
          "entry": "—",
          "target": "Chờ hết thủng đáy",
          "stop": "—",
          "status": "waiting",
          "date": "13/07",
          "note": "Dẫn chứng cho trạng thái thị trường, chưa phải khuyến nghị."
        }
      ]
    },
    {
      "key": "pnj",
      "symbol": "PNJ",
      "name": "Vàng bạc Đá quý Phú Nhuận",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:PNJ",
      "sig": "down",
      "stance": "TRÁNH TUYỆT ĐỐI",
      "aliases": [
        "pnj",
        "phu nhuan"
      ],
      "oneLiner": "Cả 3 chuyên gia cùng cảnh báo: rủi ro pháp lý chưa định lượng được — mua lúc này là đánh cược.",
      "thesis": [
        {
          "title": "CK 5 phút: trò chơi \"đoán xem nó có sập không\"",
          "body": "Video 15/07 dành riêng cho PNJ: vấn đề không phải trần hay sàn, không phải \"chiết khấu đủ chưa\" — mà là chuỗi câu hỏi chưa ai trả lời được: rủi ro PNJ Lào có liên đới công ty mẹ không, vụ án đang mở rộng đến đâu (bắt thêm người, cả các chủ tiệm vàng lớn), kinh doanh có dính yếu tố làm giả giấy tờ không. Nguyên tắc bất di bất dịch: mã có rủi ro vận hành/niêm yết là KHÔNG MUA, \"kể cả phiên trần\" — giống DGC nhịp trước. Đọc báo cáo tài chính không ăn thua vì loại rủi ro này không nằm trên giấy tờ."
        },
        {
          "title": "AzFin: bài học phân bổ thực chứng",
          "body": "Founder AzFin nắm PNJ đúng 2% danh mục — khi cổ phiếu giảm 15% vì biến cố, tổng thiệt hại chỉ 0,3% NAV, \"không ảnh hưởng gì cả\". Đây là minh chứng sống cho nguyên tắc đa dạng hóa: không all-in dù yêu thích đến đâu. Với PNJ hiện tại: biến cố chưa rõ có chạm \"linh hồn doanh nghiệp\" hay không → thuộc nhóm nắm giữ-quan sát đối với ai đã có sẵn ở tỷ trọng nhỏ, không phải nhóm mua thêm."
        },
        {
          "title": "Thái Phạm: đừng đụng",
          "body": "Tập 38 xếp PNJ vào danh sách cấm cùng FPT, PC1, Đức Giang: \"có rất nhiều thông tin lằng nhằng, đừng đụng vào\". Tuần trước đó ông từng ước tính kịch bản xấu có thể về vùng 44."
        }
      ],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "KHÔNG MUA",
          "sig": "down",
          "entry": "—",
          "target": "Chờ kết quả điều tra rõ ràng",
          "stop": "—",
          "status": "active",
          "date": "15/07",
          "note": "Kể cả phiên trần; rủi ro chưa định lượng được."
        },
        {
          "expertId": "thai-pham",
          "dir": "TRÁNH",
          "sig": "down",
          "entry": "—",
          "target": "Kịch bản xấu từng nêu: ~44",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "Danh sách \"đừng đụng\" trong Tập 38."
        },
        {
          "expertId": "azfin",
          "dir": "GIỮ NHỎ / QUAN SÁT",
          "sig": "wait",
          "entry": "Chỉ với ai đã có sẵn ≤2% danh mục",
          "target": "Theo dõi quản trị công ty",
          "stop": "Tỷ trọng cao → bắt buộc hạ",
          "status": "active",
          "date": "16/07",
          "note": "Không mua thêm; bài học đa dạng hóa."
        }
      ]
    },
    {
      "key": "fpt",
      "symbol": "FPT",
      "name": "FPT Corp",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:FPT",
      "sig": "down",
      "stance": "TRÁNH — HỞ ROOM, NGOẠI BÁN",
      "aliases": [
        "fpt"
      ],
      "oneLiner": "Thái Phạm: hở room ngoại, \"Mỹ bán quá trời — đừng đụng\"; AzFin đã chốt lời từ giá cao.",
      "thesis": [
        {
          "title": "Áp lực bán của khối ngoại",
          "body": "Tập 38: FPT là mã duy nhất trong nhóm lớn \"không full room\" — hở room ngoại và đang bị khối ngoại (ông gọi là \"Mỹ\") bán rất mạnh. Kết luận ngắn gọn: đừng đụng vào FPT trong giai đoạn quỹ ngoại rút vốn đồng loạt. Trước đó FPT cũng từng bị nhắc kèm rủi ro AI trong weekly 07–12/07."
        },
        {
          "title": "AzFin: đã chốt lời từ lâu — đừng nhầm \"tích sản trên đỉnh\"",
          "body": "Trong podcast #13, anh Phục phản bác kiểu chế giễu \"tích sản FPT giá 130 thì khóc ròng\": phương pháp tích sản đúng nghĩa đã CHỐT LỜI FPT nhiều lần từ giá rất cao (tương tự REE), vì đầu tư giá trị là bán khi giá vượt giá trị — không phải ôm lì mọi giá. Hàm ý: FPT hiện không nằm trong vùng mua của phương pháp này."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "TRÁNH",
          "sig": "down",
          "entry": "—",
          "target": "Chờ khối ngoại ngừng bán",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "Hở room; ngoại bán mạnh."
        },
        {
          "expertId": "azfin",
          "dir": "ĐÃ CHỐT LỜI",
          "sig": "wait",
          "entry": "Đã bán từ giá cao (nhiều lần)",
          "target": "Quay lại khi giá về dưới giá trị",
          "stop": "—",
          "status": "done",
          "date": "16/07",
          "note": "Ví dụ về kỷ luật chốt lời của tích sản."
        }
      ]
    },
    {
      "key": "pc1",
      "symbol": "PC1",
      "name": "PC1 Group",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:PC1",
      "sig": "down",
      "stance": "KẸT THÌ THOÁT KHI CÓ TIN KÉO",
      "aliases": [
        "pc1"
      ],
      "oneLiner": "Thái Phạm: ai đang kẹt PC1 — có tin kéo lên thì \"tranh thủ ra\", chưa rõ chuyện đổi chủ.",
      "thesis": [
        {
          "title": "Lời khuyên cho người kẹt hàng",
          "body": "Tập 38: với những ai còn kẹt PC1, chiến lược là chờ những nhịp có tin tức kéo giá lên để \"tranh thủ mình ra\" — vì câu chuyện đổi chủ/xử lý ở doanh nghiệp này chưa rõ ràng. PC1 nằm cùng nhóm \"lằng nhằng, đừng đụng\" với PNJ và Đức Giang cho đến khi cấu trúc uptrend quay lại."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "THOÁT KHI CÓ TIN",
          "sig": "down",
          "entry": "Đang kẹt từ trước",
          "target": "Nhịp kéo theo tin → giảm tỷ trọng",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "Không mua mới; chưa rõ chuyện đổi chủ."
        }
      ]
    },
    {
      "key": "dgc",
      "symbol": "DGC",
      "name": "Hóa chất Đức Giang",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:DGC",
      "sig": "down",
      "stance": "LOẠI KHỎI DANH MỤC",
      "aliases": [
        "dgc",
        "duc giang"
      ],
      "oneLiner": "AzFin dùng làm ví dụ chuẩn: lãnh đạo bị khởi tố = \"linh hồn doanh nghiệp\" dính pháp lý → loại ngay lập tức.",
      "thesis": [
        {
          "title": "Ca kinh điển về rủi ro quản trị",
          "body": "Podcast #13 của AzFin lấy DGC làm ví dụ cho tiêu chí xử lý biến cố: khi chủ tịch/tổng giám đốc — \"linh hồn của doanh nghiệp\" — bị khởi tố với nhiều tội danh, tác động lên định hướng chiến lược và vận hành là cực kỳ lớn → \"phải loại ngay lập tức\" khỏi danh mục, không cần bàn thêm. Khác với biến cố chỉ ảnh hưởng một phần hoạt động (có thể giữ và quan sát), đây là loại rủi ro chạm gốc."
        },
        {
          "title": "Thái Phạm đồng quan điểm",
          "body": "\"Đức Giang lằng nhằng lắm — đừng đụng vào những mã kiểu như thế cho đến khi nó vào lại uptrend.\" CK 5 phút từ 15/07 cũng đã so sánh PNJ hiện tại với \"con DGC của nhịp trước\" — cùng một khuôn mẫu rủi ro pháp lý."
        }
      ],
      "orders": [
        {
          "expertId": "azfin",
          "dir": "LOẠI NGAY",
          "sig": "down",
          "entry": "—",
          "target": "—",
          "stop": "Bán bất kể giá nếu còn giữ",
          "status": "active",
          "date": "16/07",
          "note": "Tiêu chí: lãnh đạo cốt lõi bị khởi tố."
        },
        {
          "expertId": "thai-pham",
          "dir": "TRÁNH",
          "sig": "down",
          "entry": "—",
          "target": "Chờ vào lại uptrend",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "\"Lằng nhằng lắm.\""
        }
      ]
    },
    {
      "key": "aapl",
      "symbol": "AAPL",
      "name": "Apple",
      "group": "Quốc tế",
      "tv": "NASDAQ:AAPL",
      "sig": "down",
      "stance": "SHORT 320–330",
      "aliases": [
        "apple",
        "aapl"
      ],
      "oneLiner": "Short nửa vị thế 320–330; nửa còn lại để dành cho BCTC 30/07 — kỳ vọng guidance Q3 xấu.",
      "thesis": [
        {
          "title": "Kéo trụ kiểu \"FOMO trap\"",
          "body": "Theo Thái Phạm, Apple đang được dùng để giữ chỉ số S&P 500 với kiểu kéo \"bập bập rồi gap up\" — cùng khuôn mẫu với Broadcom và Oracle trước khi gãy. Về cơ bản: Siri gây thất vọng, và quan trọng nhất là iPhone 18/iPad/Mac tăng giá mạnh → sức mua giảm ngay từ lúc tăng giá. Phần doanh số đẹp hiện tại chỉ là \"sale-in\" (đẩy hàng xuống nhà phân phối trước khi tăng giá) — ăn được thêm một quý, nhưng guidance quý 3 sẽ khó khăn. Ông nói với kinh nghiệm 13 năm kinh doanh ngành hàng tiêu dùng: \"phần sale-in bán được xuống nhà phân phối, nhưng phần bán ra tiêu dùng nó khó\"."
        },
        {
          "title": "Kịch bản 30/07",
          "body": "BCTC công bố 30/07 là điểm quyết định. Hai kịch bản: hoặc gap-up đánh lừa rồi \"đỏ ngòm\" (kiểu Broadcom/Oracle), hoặc gãy thẳng. Nếu guidance Q3 yếu → \"gãy đau, gãy sâu luôn, về lại chen line\" — lúc đó mới là vùng cho ai muốn mua. Chiến lược vị thế: chỉ short 1/2 ở 320–330, giữ 1/2 sức mua để vào sau tin; giữ vị thế đến tháng 8–9 mới có ăn. Tuyệt đối không nhảy vào mua trước báo cáo."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "SHORT 1/2",
          "sig": "down",
          "entry": "320–330",
          "target": "Về \"chen line\" nếu guidance xấu",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "Giữ đến tháng 8–9; không đòn bẩy lớn."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT 1/2 CÒN LẠI",
          "sig": "down",
          "entry": "Sau BCTC 30/07",
          "target": "Theo phản ứng guidance Q3",
          "stop": "—",
          "status": "waiting",
          "date": "18/07",
          "note": "Để dành sức mua cho sau tin."
        }
      ]
    },
    {
      "key": "spacex",
      "symbol": "SpaceX",
      "name": "SpaceX (CBX)",
      "group": "Quốc tế",
      "tv": "",
      "sig": "down",
      "stance": "SHORT — ĐÍCH 80–87",
      "aliases": [
        "spacex",
        "cbx",
        "spx "
      ],
      "oneLiner": "Thương vụ short tâm đắc nhất: IPO \"thịt\" 110 tỷ đô tiền thật, còn 4 đợt unlock — giá trị thật 40–50 đô/cp.",
      "thesis": [
        {
          "title": "Bản chất thương vụ IPO",
          "body": "Luận điểm xuyên suốt từ 17/06: SpaceX IPO chỉ bán 4,2% float để \"thổi\" định giá ~2.660 tỷ đô (Morningstar định giá ~780 tỷ) — mục tiêu thật của thương vụ là rút 110 tỷ đô tiền thật khỏi thị trường, không phải giá cổ phiếu. Retail mua đúng đỉnh vùng 200+; sau IPO không còn nhu cầu đỡ giá."
        },
        {
          "title": "Cung sẽ tăng gấp 8 lần",
          "body": "Từ nay đến tháng 12/2026 còn 4 đợt giải phóng lock-up, nâng lượng cung lên gấp 8 lần hiện tại. Nhân viên gắn bó lâu năm được phát cổ phiếu ở giá vốn gần 0 — \"giá 180 hay 150 thì vẫn là triệu phú, tội gì không bán\" khi giá trị thật chỉ 40–50 đô/cp. Kịch bản kỹ thuật: parabol gãy, nằm chết ~6 tháng; ai muốn mua thật sự phải đợi tháng 3/2027 hoặc khi tích lũy xong nền đáy."
        },
        {
          "title": "Vị thế và kỷ luật",
          "body": "Short từ vùng 155 (đã show trong nhóm Telegram hội viên), cầm đúng 76.000 đô — không bồi thêm dù đang lãi, vì \"phải luôn tính đường lui, nhỡ nó điên kéo lên 300 thì cháy nhà\". Mục tiêu 80–87, giữ đến hết tháng 1/2027. Scorecard đã ghi nhận call \"định giá ảo\" ban đầu là ĐÚNG khi giá rơi từ 218–225 về ~157."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "SHORT",
          "sig": "down",
          "entry": "Giữ từ ~155 (vị thế 76.000 đô, không bồi)",
          "target": "80–87",
          "stop": "Kỷ luật vị thế thay stop — không margin",
          "status": "active",
          "date": "18/07",
          "note": "Giữ đến T1/2027; 4 đợt unlock tới 12/2026 là catalyst."
        }
      ]
    },
    {
      "key": "intc",
      "symbol": "INTC",
      "name": "Intel",
      "group": "Quốc tế",
      "tv": "NASDAQ:INTC",
      "sig": "down",
      "stance": "SHORT — ĐÍCH ~77",
      "aliases": [
        "intel",
        "intc"
      ],
      "oneLiner": "Thương vụ \"chịu đau có quả ngọt\": short từ 130–134, từng bị dí ngược 11%, đã chốt 1/2 với ~30% lợi nhuận.",
      "thesis": [
        {
          "title": "Hành trình vị thế",
          "body": "Short Intel là ví dụ Thái Phạm hay dùng để dạy về kiên nhẫn: vào lệnh vùng 130 (giá bình quân 132–134), bị thị trường kéo ngược lên mất 11–15% \"rất khó chịu\" — nhưng nhờ đánh vị thế vừa phải, không margin, ông giữ được lệnh và hiện lãi ~30%. Thứ Sáu tuần 29 đã chốt lời 1/2; kế hoạch đợi giá hồi lên vùng ~115 để short tiếp."
        },
        {
          "title": "Mục tiêu cuối",
          "body": "\"Đích đến của tôi vẫn luôn là vùng 77.\" Intel nằm trong bức tranh lớn: chu kỳ bán dẫn đã qua đỉnh kéo rướn, sẽ có những nhịp hồi \"loáng ngoáng\" rồi gãy tiếp. Nhóm gãy tiếp theo sau AI chip/bộ nhớ theo ông là cyber security (Palo Alto, Fortinet, CrowdStrike)."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "SHORT (giữ 1/2)",
          "sig": "down",
          "entry": "Bình quân 132–134",
          "target": "~77",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "Đã chốt 1/2 (+~30%)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT THÊM",
          "sig": "down",
          "entry": "Hồi lên ~115",
          "target": "~77",
          "stop": "—",
          "status": "waiting",
          "date": "18/07",
          "note": "Đợi nhịp hồi kỹ thuật."
        }
      ]
    },
    {
      "key": "mu",
      "symbol": "MU",
      "name": "Micron Technology",
      "group": "Quốc tế",
      "tv": "NASDAQ:MU",
      "sig": "down",
      "stance": "SHORT — ĐÃ CHỐT 1/2",
      "aliases": [
        "micron",
        "mu "
      ],
      "oneLiner": "Short từ 1.100–1.120, từng bị dí -15–16% — giờ lãi hơn 20%, đã chốt một nửa.",
      "thesis": [
        {
          "title": "Thương vụ \"dã man\" nhất",
          "body": "MU là lệnh Thái Phạm mô tả là \"dã man\": short vùng 1.100–1.120, bị kéo ngược -15–16%, có hôm gần về hòa lại bị giật mất hết lời — \"có những nỗi đau không thể nói được cùng ai\". Không margin + không tham mới giữ được lệnh; đến giữa tháng 7 lãi hơn 20% và đã chốt 1/2 vào thứ Sáu (dự phòng hồi kỹ thuật 1–2 phiên)."
        },
        {
          "title": "Luận điểm bộ nhớ/AI",
          "body": "Nằm trong thesis lớn: dư thừa công suất AI bắt đầu (XAI, Meta phải cho thuê lại), người mua sẽ tính lại việc trả giá đắt cho RAM/chip nhớ của Nvidia, SK Hynix, Micron khi có lựa chọn Trung Quốc rẻ hơn (mô hình Kimi K3 ngang Fable 5/GPT-5.6 với 60% giá). Chu kỳ bán dẫn: \"mỗi cổ phiếu có mùa nở hoa và mùa lụi tàn\"."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "SHORT (giữ 1/2)",
          "sig": "down",
          "entry": "1.100–1.120",
          "target": "Theo đà gãy nhóm chip nhớ",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "Đã chốt 1/2 (+20%+) thứ Sáu tuần 29."
        }
      ]
    },
    {
      "key": "samsung",
      "symbol": "005930",
      "name": "Samsung Electronics",
      "group": "Quốc tế",
      "tv": "KRX:005930",
      "sig": "down",
      "stance": "SHORT — VỀ 214.000 KRW",
      "aliases": [
        "samsung",
        "kospi",
        "han quoc"
      ],
      "oneLiner": "Short đúng đỉnh; Kospi margin call diện rộng — kịch bản 214.000, cực đoan 170.000 KRW mới hồi.",
      "thesis": [
        {
          "title": "Bạo phát bạo tàn",
          "body": "Thái Phạm short Samsung \"đúng đỉnh\" khi cảnh báo margin Hàn Quốc lập kỷ lục. Kospi hiện rơi trong trạng thái margin call dây chuyền — nhà đầu tư cá nhân \"cháy tài khoản\", giảm 8%/ngày là chuyện thường; ông kể hội viên tâm sự \"không dám nói với chồng\". Đầu tuần 20–21/07 là điểm nóng: Samsung nhiều khả năng gãy về 214.000 KRW."
        },
        {
          "title": "Kịch bản sâu hơn",
          "body": "Nếu là \"cô zin\" (không đòn bẩy) thì vùng hồi thật sự theo ông phải về ~170.000 KRW: \"thị trường tài chính không có sự nhân từ — đặc biệt đám Hàn, Nhật đánh khùng điên đòn bẩy\". Cơn sốt margin Hàn có thể lan và cộng hưởng với nhịp đánh Iran của Mỹ — đè cả Nikkei (test 58.700) lẫn chứng khoán Mỹ trong tuần tới."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "SHORT (giữ)",
          "sig": "down",
          "entry": "Đã vào từ đỉnh",
          "target": "214.000 → cực đoan 170.000 KRW",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "Xem phản ứng phiên đầu tuần 20/07."
        }
      ]
    },
    {
      "key": "spx",
      "symbol": "S&P 500",
      "name": "S&P 500 / US30 / Nasdaq",
      "group": "Quốc tế",
      "tv": "TVC:SPX",
      "sig": "down",
      "stance": "VÀO VÙNG SHORT",
      "aliases": [
        "s&p",
        "sp500",
        "us30",
        "nasdaq",
        "dow"
      ],
      "oneLiner": "Margin cá nhân Mỹ 1,4% vốn hóa — ngang đỉnh 2018, vượt dotcom: \"hết tiền thì phải sập\".",
      "thesis": [
        {
          "title": "Vết nứt thanh khoản",
          "body": "Thị trường Mỹ đang bị rút tiền thật quy mô lớn: SpaceX IPO hút 110 tỷ, Google phát hành 85 tỷ, SK Hynix-liên quan 26,5 tỷ; OpenAI và Anthropic xếp hàng IPO tiếp. \"Không thị trường nào chịu được lượng bán giấy này.\" Trong khi đó margin nhà đầu tư cá nhân: +86,5 tỷ đô riêng tháng 6, +281 tỷ trong 3 tháng, +494 tỷ trong 12 tháng (+50% so cùng kỳ) — đạt 1,4% vốn hóa S&P 500, ngang đỉnh 2018 và vượt đỉnh dotcom (1,1%). \"Cứ khi nào tham thì chết — hết tiền thì phải sập, chẳng quan trọng P/E rẻ hay đắt.\""
        },
        {
          "title": "Chiến thuật theo chỉ số",
          "body": "US30 và S&P 500: đã bắt đầu short được, \"thậm chí short tốt\". Nasdaq: đợi hồi kỹ thuật 1–2 phiên rồi vào — nhưng cẩn thận \"nhiều khi phiên châu Á không kịp cho hồi\". Lưu ý thực chiến từ chính lệnh US30 của ông: trong ngày giá giật hai đầu rất mạnh (đầu phiên -0,8% rồi kéo ngược +0,3% mới gãy) — ai short cường độ cao kèm margin lớn sẽ bị quét mất vị thế trước khi đúng hướng. Đánh nhỏ, không margin."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "SHORT",
          "sig": "down",
          "entry": "S&P/US30: vào vùng short ngay",
          "target": "Take profit vùng thấp; Mỹ chỉ hồi vài ngày",
          "stop": "Vị thế nhỏ thay stop",
          "status": "active",
          "date": "18/07",
          "note": "Margin 1,4% vốn hóa là căn cứ chính."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT NASDAQ",
          "sig": "down",
          "entry": "Sau nhịp hồi 1–2 phiên",
          "target": "Theo đà gãy chung",
          "stop": "—",
          "status": "waiting",
          "date": "18/07",
          "note": "Phiên châu Á có thể không cho cơ hội hồi."
        }
      ]
    },
    {
      "key": "gold",
      "symbol": "XAU/USD",
      "name": "Vàng",
      "group": "Hàng hóa & Crypto",
      "tv": "OANDA:XAUUSD",
      "sig": "wait",
      "stance": "CHỜ ĐÁY 3.600–3.700",
      "aliases": [
        "vang",
        "gold",
        "xau"
      ],
      "oneLiner": "Đồ thị tuần yếu, Fed hết cửa hạ lãi — kịch bản quét xuống 3.600–3.700 là vùng Thái Phạm sẽ bắt đáy.",
      "thesis": [
        {
          "title": "Vì sao vàng còn yếu",
          "body": "Logic của Thái Phạm: giá dầu tăng trở lại → lạm phát Mỹ tháng 7–8 tăng → Fed không thể hạ lãi suất, thậm chí Bank of America tính kịch bản tăng 75 điểm cơ bản. Lãi suất thực dương duy trì là lực đè trực tiếp lên vàng. Đồ thị tuần \"vẫn rất yếu\"; nhịp hồi kỹ thuật hiện tại khó về lại 4.100 (còn cửa ~4.069)."
        },
        {
          "title": "Kế hoạch giao dịch từng bước",
          "body": "Với ai đang long từ trước: chốt lời nếu giá lên vùng ~4.040, đặt stop loss ~3.930. Kịch bản chính là một cú quét xuống 3.700 — \"chân có thể mua bắt đáy được\"; kịch bản cực đoan test 3.600 (đỉnh cũ trước cú chạy parabol) là \"vùng mua rất đẹp\" — ông tuyên bố sẽ mua bắt đáy tại đó. Ai muốn short thì đợi giá lên vùng chốt lời rồi mới short, không đuổi lệnh giữa khoảng."
        },
        {
          "title": "Vàng trong nước: chưa mua",
          "body": "Chênh lệch trong nước đang 19–20 triệu/lượng — mua là lỗ ngay phần chênh, \"nhà nước không khuyến khích dân mua vàng\". Chỉ mua khi chênh về 10–12 triệu, và tuyệt đối chỉ mua ở thương hiệu uy tín hoạt động 15–20 năm, mua đâu bán đấy — tránh cửa hàng mới mở, rủi ro vàng 3 số 9 trộn 4 số 9 hoặc tệ hơn là vàng giả kim cương."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "MUA BẮT ĐÁY",
          "sig": "up",
          "entry": "3.700, cực đoan 3.600",
          "target": "Sóng hồi sau khi tạo đáy",
          "stop": "—",
          "status": "waiting",
          "date": "18/07",
          "note": "\"Sẽ mua bắt đáy tại vùng đó.\""
        },
        {
          "expertId": "thai-pham",
          "dir": "CHỐT LONG CŨ",
          "sig": "wait",
          "entry": "Long từ ~4.001 (Tập 37)",
          "target": "Chốt ~4.040",
          "stop": "3.930",
          "status": "active",
          "date": "18/07",
          "note": "Hồi kỹ thuật khó về 4.100."
        },
        {
          "expertId": "thai-pham",
          "dir": "MUA VẬT CHẤT (VN)",
          "sig": "wait",
          "entry": "Khi chênh ≤ 10–12tr/lượng",
          "target": "Tích sản dài hạn (~2% tài sản)",
          "stop": "—",
          "status": "waiting",
          "date": "18/07",
          "note": "Hiện chênh 19–20tr — đứng ngoài; chỉ thương hiệu 15–20 năm."
        }
      ]
    },
    {
      "key": "oil",
      "symbol": "WTI",
      "name": "Dầu WTI / Brent",
      "group": "Hàng hóa & Crypto",
      "tv": "TVC:USOIL",
      "sig": "up",
      "stance": "LONG — ĐÍCH 88–90",
      "aliases": [
        "dau",
        "wti",
        "brent",
        "oil"
      ],
      "oneLiner": "Call thắng lớn đang chạy tiếp: côn hồi phục từ 70 khi cả thị trường bi quan — giờ 84, đích 88–90.",
      "thesis": [
        {
          "title": "Thesis địa chính trị",
          "body": "Thái Phạm là người \"côn\" sớm nhất việc dầu hồi phục (Tập 36–37, khi giá ~70): theo ông Trump và đồng minh Trung Đông không thể để giá dầu thấp — dầu phải được trao đổi bằng đô la để giữ vị thế đồng tiền (\"một mũi tên trúng ba đích\"). Diễn biến xác nhận: ngừng bắn ký 17/06 sụp đổ, Mỹ công kích Iran 7 đêm liên tiếp, Iran phóng tên lửa trả đũa tàu Mỹ ở Ấn Độ Dương, Houthi dọa đóng Biển Đỏ. Giá đã chạy 70 → 84, \"hồi phục hơn dự kiến\" — phần thịt ngon nhất (+12%) đã ăn được ở vùng thấp."
        },
        {
          "title": "Kế hoạch từ đây",
          "body": "KHÔNG short trong 2–3 tuần tới dù ai đó nói \"dư cung\": kịch bản leo thang đưa WTI lên 88–90, Brent/UK lên 95–96 nếu \"đánh lớn\". Ai còn giữ long: cắt lỗ đặt ở 78, \"đánh lót vừa phải\" — biến động ngày rất mạnh. Dầu tăng cũng là mắt xích kéo theo cả thesis Fed (không hạ được lãi) và lạm phát (cước vận tải đã x3)."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "LONG (giữ)",
          "sig": "up",
          "entry": "Từ vùng 70–80, hiện 84",
          "target": "WTI 88–90 · Brent 95–96",
          "stop": "78",
          "status": "active",
          "date": "18/07",
          "note": "Không short 2–3 tuần tới."
        },
        {
          "expertId": "thai-pham",
          "dir": "ĐÃ CHỐT NHỊP 1",
          "sig": "up",
          "entry": "Long từ ~70",
          "target": "Đã ăn ~12% vùng 80",
          "stop": "—",
          "status": "done",
          "date": "11/07",
          "note": "Call hồi phục Tập 36–37 — scorecard ghi nhận đúng."
        }
      ]
    },
    {
      "key": "btc",
      "symbol": "BTC",
      "name": "Bitcoin",
      "group": "Hàng hóa & Crypto",
      "tv": "BINANCE:BTCUSDT",
      "sig": "down",
      "stance": "SHORT FAKE PUMP 69–70K",
      "aliases": [
        "bitcoin",
        "btc",
        "crypto"
      ],
      "oneLiner": "\"Banana\" gãy đang hình thành — short nếu bơm ảo lên 69–70k, chỉ mua thật ở ~50k.",
      "thesis": [
        {
          "title": "Cấu trúc kỹ thuật và vị thế trong hệ thống",
          "body": "Thái Phạm duy trì quan điểm từ Tập 37: BTC đã gãy nền 71,8k đúng cấu trúc \"banana\" (scorecard ghi nhận call này ĐÚNG khi giá sập về ~63k). Cấu trúc gãy tiếp theo đang hình thành nhưng \"yếu lắm\". Về bản chất: BTC giờ \"chỉ là một ticker trong vô vàn ticker\" — Mỹ đã kiểm soát thị trường crypto công khai qua stablecoin (USDT/USDC là cánh tay nối dài của đô la), không còn câu chuyện thay thế tiền pháp định."
        },
        {
          "title": "Hai lệnh chờ rõ ràng",
          "body": "Một: nếu căng thẳng Iran tạo cú bơm ảo (fake pump) lên 69–70k → VÀO LỆNH SHORT tại đó. Hai: chỉ giải ngân mua thật khi giá test lại đỉnh chu kỳ 2021 quanh 50k — \"ít nhất tối thiểu phải đợi vùng đó\". Giữa hai mốc này chỉ lướt, không giữ vị thế lớn. Fed không hạ lãi càng làm crypto thiếu nhiên liệu tăng."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "SHORT",
          "sig": "down",
          "entry": "Fake pump 69–70k",
          "target": "Theo cấu trúc banana gãy",
          "stop": "—",
          "status": "waiting",
          "date": "18/07",
          "note": "Chỉ vào nếu có cú bơm ảo theo tin Iran."
        },
        {
          "expertId": "thai-pham",
          "dir": "MUA DÀI HẠN",
          "sig": "up",
          "entry": "~50.000 (test đỉnh 2021)",
          "target": "Chu kỳ mới",
          "stop": "—",
          "status": "waiting",
          "date": "18/07",
          "note": "Dưới mốc này mới giải ngân thật."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT NHỊP TRƯỚC",
          "sig": "down",
          "entry": "70–71k (Tập 37)",
          "target": "Chốt 62–64k",
          "stop": "—",
          "status": "done",
          "date": "11/07",
          "note": "Đã diễn ra — BTC sập về ~63k, scorecard: ĐÚNG."
        }
      ]
    }
  ]
};
