// ─────────────────────────────────────────────────────────────────────────────
// HDT DATA — Hải Đầu Tư cùng các Chuyên Gia
// QUY TẮC: giữ 7 bài GẦN NHẤT mỗi kênh. Thêm bài mới = prepend vào experts[id].updates
//          rồi cắt còn 7. Riêng THÁI PHẠM ưu tiên bài HỘI VIÊN (member-video/member-post)
//          — giữ bài mới nhất + các bài hội viên gần nhất.
// ─────────────────────────────────────────────────────────────────────────────
window.HDT_DATA = {
  "lastUpdated": "30/07/2026 · Mới nhất",
  "pulse": [
    {
      "name": "CK Việt",
      "mark": "◷ Đáy T8–9 · đợi 1.600",
      "sig": "wait"
    },
    {
      "name": "CK Mỹ",
      "mark": "↓ Sập sau FOMC · 30Y 5,2%",
      "sig": "down"
    },
    {
      "name": "Vàng",
      "mark": "◷ Hồi KT 4.300 · cửa 3.000",
      "sig": "wait"
    },
    {
      "name": "Dầu",
      "mark": "↑ Brent 88 · WTI 84,5",
      "sig": "up"
    },
    {
      "name": "Bitcoin",
      "mark": "↓ Banana 3 · né năm 2026",
      "sig": "down"
    },
    {
      "name": "Tỷ giá",
      "mark": "⚠ USD hồi · JPY/KRW yếu",
      "sig": "warn"
    },
    {
      "name": "BĐS",
      "mark": "⚠ Chết thanh khoản",
      "sig": "warn"
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
          "date": "2026-07-30",
          "dateShort": "30/07",
          "timeAgo": "Hôm nay",
          "tab": "Video · 30/07",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Fed Không Tăng Lãi Suất, Chứng Khoán Vẫn Sập — Thị Trường Hết Tin Fed",
          "summary": "Bình luận nóng sáng 30/07 sau kỳ họp FOMC: Fed giữ nguyên lãi suất 3,5–3,75% (lần giữ nguyên thứ năm liên tiếp) nhưng chứng khoán Mỹ vẫn có phiên giảm mạnh nhất kể từ tháng 4/2025 — Dow −1.100 điểm (−2,2%), Nasdaq ~−2%, S&P 500 −1,5%. Điểm đáng chú ý không phải con số mà là tỉ lệ vote 9–3: cả ba phiếu chống (Hammack – Cleveland, Kashkari – Minneapolis, Logan – Dallas) đều đòi TĂNG ngay 0,25% — lần đầu từ 2016 có ba thành viên FOMC bất đồng theo cùng một hướng. Lý do thị trường sập: lợi suất trái phiếu Mỹ 30 năm vọt lên 5,2% (cao nhất từ 2007, +2,36% một phiên), 10 năm 4,687% — thị trường không còn tin Fed kiểm soát được lạm phát nên \"bán trước, hỏi sau\". Chủ tịch Kevin Warsh bị chê phát biểu \"nhạt như nước ốc\": nói cứng (\"không khoan nhượng với lạm phát\") nhưng không hành động, không đưa căn cứ dữ liệu, đã bỏ forward guidance — sự bất định khiến các chủ tịch Fed vùng tự lên tiếng, thị trường phải ghép thông tin rời rạc. Xác suất tăng lãi tháng 9 trên thị trường cá cược tăng từ 55% lên 72% sau họp. Hàm ý tài sản: USD tiếp tục hồi phục (yên Nhật, won Hàn, đô Đài mất giá thêm); dầu Brent +6,1% lên 88 (WTI 84,5); Nasdaq đã rơi từ đỉnh ~30.600 đầu tháng 6 về 27.000 — dòng tiền đang trú vào phòng thủ/y tế/tài chính/Apple nhưng \"sự lòng vòng này cuối cùng sẽ kết thúc bằng một đợt điều chỉnh\" cả các nhóm đó. Vàng: từ vùng 3.980–4.000 có quyền kỳ vọng hồi kỹ thuật lên ~4.300, nhưng \"vẫn còn nguyên cửa\" rơi về 3.000. Bitcoin: \"2026 không phải là năm của Bitcoin\" — đang hình thành banana lần ba. Tới kỳ họp tháng 9–10 thị trường sẽ còn phản ứng mạnh kiểu này.",
          "feedChips": [
            {
              "label": "Fed ⚠ giữ 3,5–3,75% · vote 9–3",
              "sig": "warn"
            },
            {
              "label": "CK Mỹ ↓ Dow −1.100đ — mạnh nhất từ T4/2025",
              "sig": "down"
            },
            {
              "label": "Lợi suất ⚠ 30 năm 5,2% — đỉnh từ 2007",
              "sig": "warn"
            },
            {
              "label": "Vàng ◷ hồi KT 4.300 · còn cửa về 3.000",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "Vì sao sập",
              "value": "Thị trường hết tin Fed kiểm soát lạm phát",
              "signal": "down",
              "note": "Fed không tăng lãi nhưng lợi suất trái phiếu 30 năm vọt 5,2% (cao nhất từ 2007), 10 năm 4,687% — thị trường tự dự phóng lợi suất còn tăng và \"bán trước, hỏi sau\"."
            },
            {
              "tag": "Fed tháng 9",
              "value": "Xác suất tăng lãi 55% → 72% sau họp",
              "signal": "warn",
              "note": "Thị trường không nhìn quyết định hôm nay mà nhìn kỳ họp tới; ba chủ tịch Fed vùng đòi tăng ngay 0,25%. Khớp dự báo Tập 40 (82% tăng tháng 9)."
            },
            {
              "tag": "Vàng",
              "value": "Hồi kỹ thuật lên ~4.300 · vẫn còn cửa về 3.000",
              "signal": "wait",
              "note": "Từ vùng 3.980–4.000 \"có quyền kỳ vọng\" hồi lên ~4.300; \"sau đó tôi vẫn cho rằng vẫn còn nguyên cái cửa mà giá vàng sẽ rơi về mức 3.000\". Trước mắt cứ để hồi kỹ thuật đã."
            },
            {
              "tag": "Bitcoin",
              "value": "\"2026 không phải là năm của Bitcoin\"",
              "signal": "down",
              "note": "Đang hình thành \"banana\" (chuối) lần ba — như đã chia sẻ trong các tập hội viên."
            },
            {
              "tag": "USD & tỷ giá",
              "value": "USD tiếp tục hồi — JPY/KRW/TWD mất giá thêm",
              "signal": "warn",
              "note": "Đi cùng đà tăng của lợi suất trái phiếu Mỹ 10 và 30 năm; USD/JPY còn đà tăng mạnh thời gian tới."
            }
          ],
          "sections": [
            {
              "title": "FOMC 29/07 — giữ nguyên nhưng chia rẽ thật",
              "signal": "warn",
              "sigLabel": "Cảnh giác",
              "para": "Fed giữ nguyên 3,5–3,75%, lần thứ năm liên tiếp. Cái đáng chú ý không nằm ở con số mà ở tỉ lệ vote 9 thuận – 3 chống: cả ba phiếu chống đều là chủ tịch Fed vùng (Beth Hammack – Cleveland, Neel Kashkari – Minneapolis, Lorie Logan – Dallas) và đều muốn tăng ngay 0,25%. Đây là lần đầu tiên kể từ 2016 một cuộc họp FOMC có tới ba thành viên bất đồng theo cùng một chiều. Warsh còn đùa trong họp báo rằng ông \"muốn một cuộc cãi vã gia đình tử tế và đã có nó\" — nghe hài nhưng là tín hiệu rõ: nội bộ Fed chia rẽ thật, không phải diễn.",
              "bullets": [
                "Giữ nguyên 3,5–3,75% — lần thứ năm liên tiếp",
                "Vote 9–3; cả ba phiếu chống đòi tăng ngay 0,25%",
                "Lần đầu từ 2016: ba thành viên bất đồng cùng một hướng"
              ]
            },
            {
              "title": "Vì sao không tăng lãi mà chứng khoán vẫn sập",
              "signal": "down",
              "sigLabel": "Tiêu cực",
              "para": "Dow giảm hơn 1.100 điểm (−2,2%), Nasdaq ~−2%, S&P 500 −1,5% — phiên giảm mạnh nhất kể từ tháng 4/2025. Nguyên nhân nằm ở thị trường trái phiếu: lợi suất kỳ hạn 30 năm vọt lên 5,2% (+2,36% chỉ một phiên) — cao nhất kể từ 2007; kỳ hạn 10 năm lên 4,687%. Thông điệp: thị trường đánh giá Fed đã mất tính đáng tin cậy trong kiểm soát lạm phát và tự dự phóng lợi suất còn tăng cao hơn. Dầu Brent cùng lúc tăng 6,1% lên 88 đô (WTI 84,5) càng nuôi nỗi lo lạm phát.",
              "bullets": [
                "Lợi suất 30 năm: 5,2% — cao nhất từ 2007, tăng 2,36% một phiên",
                "Lợi suất 10 năm: 4,687% — vùng trước khủng hoảng 2008",
                "Xác suất tăng lãi tháng 9 (thị trường cá cược): 55% → 72%",
                "Dầu Brent 88 (+6,1%) · WTI 84,5 — thêm áp lực lạm phát"
              ]
            },
            {
              "title": "Kevin Warsh — \"nhạt như nước ốc\", bất định là rủi ro thật",
              "signal": "warn",
              "sigLabel": "Cảnh giác",
              "para": "Sau 42 ngày nhiệm sở, Warsh đã bỏ forward guidance — thị trường không còn biết định hướng tiếp theo của Fed. Phát biểu và Q&A của ông bị Thái Phạm chê hai lần nghe đều \"nhạt như nước ốc\": nói cứng kiểu \"không có sự khoan nhượng nào với lạm phát cao\" nhưng khi phóng viên hỏi vì sao không tăng lãi suất thì trả lời vòng vo, không dựa vào dữ liệu. Sự mơ hồ giúp ông \"nay nói này mai nói kia\" nhưng cái giá là Fed phải nhường câu chuyện cho người khác kể — các chủ tịch Fed vùng tự lên tiếng trước cuộc họp, thị trường phải ghép thông tin từ nhiều nguồn rời rạc. Thị trường tài chính ghét sự bất định: không có định hướng thì nhà đầu tư tự dự đoán, và trong bối cảnh lợi suất tăng thì họ bán trước hỏi sau.",
              "bullets": [
                "Đã bỏ forward guidance — chiến lược mơ hồ gây phản tác dụng",
                "Nói \"không khoan nhượng với lạm phát\" nhưng không hành động, không căn cứ",
                "Các chủ tịch Fed vùng tự phát ngôn → nhiễu loạn thông tin",
                "Dự báo: kỳ họp tháng 9 và 10 thị trường còn phản ứng mạnh kiểu này"
              ]
            },
            {
              "title": "Hàm ý tài sản: USD, vàng, Bitcoin, chứng khoán Mỹ",
              "signal": "wait",
              "sigLabel": "Chờ & cẩn trọng",
              "para": "USD sẽ tiếp tục đà phục hồi dù có điều chỉnh sau họp; yên Nhật, won Hàn, đô Đài Loan sẽ mất giá thêm — USD/JPY còn đà tăng mạnh. Nasdaq đã giảm từ đỉnh ~30.600 điểm đầu tháng 6 về 27.000: cơn sốt AI đã điều chỉnh \"đúng như đã chia sẻ\", dòng tiền đang xoay vòng sang cổ phiếu phòng thủ, y tế, tài chính và Apple — nhưng sự lòng vòng này \"cuối cùng sẽ kết thúc bằng một đợt điều chỉnh\" ở chính các nhóm đó (kể cả cyber security). Vàng: vùng 3.980–4.000 có quyền kỳ vọng hồi kỹ thuật lên ~4.300, sau đó vẫn còn nguyên cửa rơi về 3.000. Bitcoin: 2026 không phải năm của Bitcoin — banana lần ba đang hình thành. Thông điệp chung: cẩn trọng trong giai đoạn hiện tại.",
              "bullets": [
                "USD hồi tiếp — JPY/KRW/TWD chịu áp lực mất giá",
                "Nasdaq: đỉnh ~30.600 (đầu T6) → 27.000; nhóm phòng thủ/Apple rồi cũng sẽ chỉnh",
                "Vàng: hồi kỹ thuật 3.980–4.000 → ~4.300, rồi vẫn còn cửa về 3.000",
                "Bitcoin: banana lần 3 — đứng ngoài cả năm 2026"
              ]
            }
          ]
        },
        {
          "date": "2026-07-26",
          "dateShort": "26/07",
          "timeAgo": "4 ngày trước",
          "tab": "Tập 40 · Tuần 30",
          "sourceType": "member-video",
          "typeLabel": "Video hội viên · Tập 40",
          "title": "Tập 40 (Hội Viên): \"Bộ Ba Siết\" — Dự Báo Đáy Tháng 8–9, Hồi Phục Cuối Năm",
          "summary": "Lần đầu đưa ra LỊCH TRÌNH cụ thể: tháng 7 là tháng khắc nghiệt, thị trường có thể TẠO ĐÁY trong tháng 8–9 (đúng lúc Fed tăng lãi — xác suất đã lên 82%), rồi hồi phục khá vào dịp CUỐI NĂM; sóng hồi 10–20% là bình thường. Giữ tiền nhiều nhất có thể là chiến lược để thu gom cho \"mùa xuân\" — tuần 30 vẫn tiền 60 / cổ 40 (không đổi từ tuần 28). Chẩn đoán \"triple squeeze\" (bộ ba siết): (1) Mỹ–Iran leo thang đẩy dầu lên ~100 — vượt cả dự báo 90 của chính ông; dự trữ toàn cầu giảm 1,3 tỷ thùng/5 tháng, SPR Mỹ còn ~4 tuần (60 triệu thùng), Trung Quốc còn 3–4 tháng; (2) AI xẹp — Google capex âm lần đầu từ khi niêm yết do guidance đầu tư AI 200 tỷ đô; (3) thuế quan: đạo luật 12,5% tariff thread hiệu lực với VN từ 24/07, VN cùng Trung Quốc/Philippines/Thái Lan chịu áp lực cao nhất trong 60 quốc gia — dệt may, da giày, gỗ, thủy sản trực diện. Dầu 2 kịch bản: Trump đánh lớn → vượt 120, tệ hơn có thể trên 150; không có tin → tích lũy quanh 92 — kể cả đàm phán được cũng chỉ về 85–90 chứ không về 65 \"vì thế giới thiếu dầu\". Vàng: vẫn LONG 4.030 cắt lỗ 3.930, chỉ short khi hồi về 4.400 kèm tin Fed tăng lãi; trong nước 140 triệu/lượng, chênh thế giới đã thu hẹp còn ~8–9 triệu sau khi đánh vàng lậu — SJC là doanh nghiệp nhà nước nên \"mua đâu bán đấy\", không phải lo như PNJ. VN: đợi VN-Index về 1.600 mới giải ngân. Bank rẻ hiếm có — VCB và BID về dưới mức tháng 4/2025; CTG chưa rẻ bằng; TCB đợi 22; VPBank/MB \"được ít chết nhiều\" không mua. Giữ: TCX (mã chứng khoán duy nhất), DCM/DPM tỉ trọng lớn, BID, BVBank, VNM (mã duy nhất có lời), SCS (lỗ 12%, đã ăn cổ tức). Tránh: FPT (ngoại còn 26,95%), HPG (Vin Steel), MWG, PNJ (giải cứu xong sẽ sàn thêm như Novaland), SSI (sườn phải, có thể về 20), MSB (chốt lời).",
          "feedChips": [
            {
              "label": "Đáy ◷ dự báo tháng 8–9",
              "sig": "wait"
            },
            {
              "label": "Fed ⚠ 82% tăng lãi kỳ tới",
              "sig": "warn"
            },
            {
              "label": "Dầu ↑ ~100, kịch bản 120–130",
              "sig": "up"
            },
            {
              "label": "Bank ↑ VCB/BID rẻ hiếm có",
              "sig": "up"
            },
            {
              "label": "VN-Index ◷ đợi 1.600 mới giải ngân",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "Lịch trình thị trường",
              "value": "Đáy tháng 8–9, hồi phục cuối năm",
              "signal": "wait",
              "note": "Lần đầu nêu mốc thời gian: tháng 7 khắc nghiệt, tạo đáy tháng 8–9 đúng lúc Fed tăng lãi (thị trường phòng ngừa trước), rồi hồi phục khá vào cuối năm — sóng hồi 10–20% là bình thường. Giữ tiền nhiều nhất có thể để thu gom cho \"mùa xuân\"."
            },
            {
              "tag": "Fed",
              "value": "Tháng 9: 82% tăng lãi (họp 29/07 chỉ 38%)",
              "signal": "warn",
              "note": "Theo Polymarket (video 24/07): cuộc họp 29/07 xác suất tăng 38% — không tăng nhưng sẽ diều hâu; tháng 9 lên 82%, thị trường còn cược thêm một đợt T11–T12 nếu dầu giữ cao. ECB và BoE cũng để ngỏ tăng T9. Nguyên nhân: dầu ~100 đẩy lạm phát (xăng Mỹ >4$/gallon, California 5,57$; American Airlines nhiên liệu +90% so cùng kỳ; da giày đã tăng 25%) + thuế quan mới. \"Hạ lãi suất là không thể và gần như bằng không.\""
            },
            {
              "tag": "Dầu",
              "value": "Đánh lớn → >120 (tệ hơn >150); hòa bình cũng chỉ về 85–90",
              "signal": "up",
              "note": "Đã vượt dự báo 90 của chính ông (\"lên hơn mức tưởng tượng\") — chạm 100,65–100,81, hồi 43% từ đáy 70,87. FA cạn kiệt: tồn kho toàn cầu −1,3 tỷ thùng/5 tháng; SPR Mỹ còn 60 triệu thùng = ~6 tuần tiêu thụ, thấp nhất kể từ T3/1983; TQ còn 3–4 tháng; Nhật báo động. Hormuz (7 triệu thùng/ngày = 20% dầu thế giới) về gần 0 tàu/ngày; Biển Đỏ 5 triệu thùng bị Houthi chặn. Nghiêng về kịch bản TÍCH LŨY vùng cao — \"không còn cú giảm sâu về 70 đâu\"."
            },
            {
              "tag": "Thuế quan VN",
              "value": "Đạo luật 301 — VN 12,5%, hiệu lực 24/07",
              "signal": "down",
              "note": "Mức thuế mới 10–12% với các nền kinh tế; VN chịu 12,5% thuộc nhóm cao nhất cùng Thái Lan và Trung Quốc. Dệt may, da giày, gỗ, thủy sản trực diện \"rất khó cạnh tranh\". USD/VND bán ra 26.490 — chênh mua/bán giãn rộng. Ông đánh giá \"chứng minh cỡ nào cũng bị đánh thuế\" vì Mỹ cần bù ngân sách sau khi thuế đối ứng bị tuyên vi hiến."
            },
            {
              "tag": "Ngân hàng VN",
              "value": "VCB & BID rẻ hơn cả đáy T4/2025",
              "signal": "up",
              "note": "Bank \"rẻ quá\" — VCB về vùng thấp hơn cả tháng 4/2025, BID tương tự; hai mã này chọn con nào cũng được, đang cầm BID thì cầm luôn. CTG rẻ nhưng chưa bằng. TCB (cấp vốn Vin/Masan) đợi về 22. VPBank/MB \"được thì ít mà chết thì lắm\" — không mua. LPBank/ACB giữ cao \"chẳng ai dám vào\"."
            },
            {
              "tag": "VN-Index",
              "value": "Đợi về 1.600 mới giải ngân",
              "signal": "wait",
              "note": "VIC/VHM còn treo cao thì rủi ro dài hạn còn cao hơn — buộc phải điều chỉnh; khi VIC giảm sàn một cây thì index giảm rất mạnh. Tốt nhất để khối ngoại bán ròng xong (mỗi tuần vài nghìn tỷ, cả tháng 9–10 nghìn tỷ) rồi vùng thấp mới kích hoạt lòng tham nhà đầu tư dài hạn."
            }
          ],
          "sections": [
            {
              "title": "Bộ ba siết (triple squeeze)",
              "signal": "down",
              "sigLabel": "Vĩ mô — ba mặt trận cùng lúc",
              "para": "Ba hiệu ứng cùng ép thị trường trong thời gian tới: Mỹ tấn công Iran đẩy giá dầu, báo cáo AI gây thất vọng vì capex quá lớn, và thuế quan Trump quay lại. \"Giai đoạn nguy hiểm nhất chưa qua.\"",
              "bullets": [
                "Dầu: Hormuz nghẽn 7 triệu thùng/ngày (~20% dầu thế giới) — số tàu qua eo biển từ bình quân ~100/ngày năm 2025 nay về gần 0; Houthi chặn 5 triệu thùng của Ả Rập Saudi ở Biển Đỏ (tấn công 2 tàu, 7 tàu đổi hướng, xuất khẩu Saudi dự kiến −36%); drone Ukraine đánh Biển Đen và tuyến CPC. Tồn kho toàn cầu −1,3 tỷ thùng trong 5 tháng.",
                "AI xẹp: Google capex ÂM lần đầu từ khi niêm yết do guidance đầu tư AI lên 200 tỷ đô năm nay và còn tăng 2027 → cạn dòng tiền, phải vay nợ/phát hành thêm; Wall Street không thích và chưa ai chắc Google thống trị được AI.",
                "Thuế quan: đạo luật 301 hiệu lực 24/07, mức 10–12% với các nền kinh tế — VN 12,5% thuộc nhóm cao nhất cùng Thái Lan, Trung Quốc. Ông đánh giá \"chứng minh cỡ nào cũng bị đánh thuế\" vì Mỹ cần bù ngân sách sau khi thuế đối ứng bị tuyên vi hiến.",
                "Iran: giáo chủ mới Mojtaba khao khát vũ khí hạt nhân hơn cả cha — mâu thuẫn sắc tộc/tôn giáo hàng ngàn năm với Israel và Ả Rập Saudi, \"một ông Trump hay mười ông Trump cũng chẳng giải quyết được\". Gốc rễ theo ông là PETRODOLLAR: Iran đòi thu phí 20% tàu qua Hormuz và đòi trả bằng nhân dân tệ → \"việc mà Mỹ không thể không đánh\". Trump tạm hoãn tấn công (Oman trung gian) chỉ là \"câu giờ\"."
              ]
            },
            {
              "title": "Chiến lược VN: giữ tiền, chờ đáy tháng 8–9",
              "signal": "wait",
              "sigLabel": "Kỷ luật — tuần 30 vẫn 60/40",
              "para": "Vẫn giữ nguyên chiến lược từ tuần 28 (tiền 60 / cổ 40) sang tuần 30. Cổ phiếu \"rẻ lắm luôn, một số rất rẻ\" nhưng chưa giải ngân vì thị trường cần thời gian tạo đáy quanh thời điểm Fed tăng lãi. Ai đã kẹp cổ phiếu căn bản thì cố gắng chịu đựng, đồng hành đến tháng 9.",
              "bullets": [
                "Đang giữ: TCX (mã chứng khoán duy nhất — sẽ huy động vốn cho VCB/Vin/Masan), DCM + DPM (tỉ trọng rất lớn, \"giữ rất chặt\" vì căn bản với nền nông nghiệp), BID, BVBank, VNM (mã duy nhất có lợi nhuận trong tuần), SCS (lỗ 12%, đã ăn cổ tức).",
                "Tránh: FPT (ngoại bán liên tục còn 26,95% — \"người ta không tin vào công nghệ Việt Nam\"), HPG (Vin Steel sẽ cương vũng toàn bộ dự án đường sắt/xây dựng của Vin), MWG (tin đồn có thể cùng nguồn cung với vụ PNJ), PNJ (giải cứu tóm sàn xong sẽ đánh sàn thêm vài phiên như Novaland), SSI (đang sườn phải, có thể về 20), MSB (chốt lời trước khi gãy).",
                "Bài học kiên nhẫn: chính ông từng kẹp bất động sản Aqua City mua đúng đỉnh 2022, có lúc lỗ 40%, nhưng vì là tài sản tốt và không áp lực nên cầm — nay chuẩn bị có sổ và giá đã vượt lại giá mua. \"Nếu lúc đấy hoảng loạn cắt lỗ thì mất.\"",
                "Vĩ mô VN: GDP tăng cao nhưng sức mua giảm, thị trường chứng khoán là hàn thử biểu chưa xác nhận; dầu tăng đẩy chi phí nhập khẩu năng lượng làm giảm dự trữ ngoại hối, bù lại có giải ngân FDI (Singapore, Trung Quốc)."
              ]
            },
            {
              "title": "Vàng, Bitcoin & cổ phiếu quốc tế",
              "signal": "wait",
              "sigLabel": "Chưa short vàng — chờ 4.400",
              "para": "Vàng vẫn còn năng lượng để về 3.700 nhưng trước tiên cần một cú hồi phục kỹ thuật; ai muốn short phải đợi về vùng 4.400 kèm tin Fed nâng lãi mới hiệu quả. Cá nhân ông vẫn nghiêng về LONG ở vùng này.",
              "bullets": [
                "Vàng: long 4.030, cắt lỗ 3.930; ngắn hạn có thể quét lại 3.890–3.900, dài hạn \"ngưỡng đẹp\" 3.600–3.700; hồi kỹ thuật có xác suất lên 4.300. Trong nước 140 triệu/lượng, chênh thế giới thu hẹp còn ~8–9 triệu — SJC là doanh nghiệp nhà nước, \"mua đâu bán đấy\", không phải lo như PNJ.",
                "Bitcoin 65.000 — \"banana chuối\" lần ba từ 57.800 nhiều khả năng kết thúc ở 71.000–72.000; lực mua hiện tại chỉ là đóng lệnh short chứ không phải tiền tổ chức (T6 rút ròng 4,5 tỷ đô, riêng BlackRock 3,56 tỷ = 75%); xác suất về 40.000–41.000 rất cao.",
                "Cổ phiếu quân sự (RTX, Lockheed): theo dõi tuần tới — kịch bản test đầu tuần rồi vọt về đỉnh cũ vì \"đánh phụ lắm\".",
                "Coca-Cola: chốt lời hết. Bán lẻ đau khổ toàn cầu: Walmart, Costco (Mỹ), Aeon Mall (Nhật) đang nằm đáy, Amazon cũng vậy vì bán lẻ không hoạt động được.",
                "Úc: RBA nâng lãi nên thị trường đi ngang — vùng thấp mua, vùng cao bán; BSP đừng đụng, CLS đã chốt lời, WDS vào bây giờ vẫn có lợi nhuận, WTC không đụng vào."
              ]
            }
          ],
          "tradeLevels": [
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "VN-Index",
                  "dir": "Chờ giải ngân",
                  "entry": "Về 1.600",
                  "target": "Đáy tháng 8–9 → hồi 10–20% cuối năm",
                  "stop": "Tuần 30 vẫn tiền 60/cổ 40",
                  "sig": "wait",
                  "tv": "HOSE:VNINDEX"
                },
                {
                  "asset": "VCB · BID",
                  "dir": "Rẻ — ưu tiên",
                  "entry": "Đã dưới mức đáy T4/2025",
                  "target": "Chọn con nào cũng được; đang cầm BID thì cầm luôn",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:VCB"
                },
                {
                  "asset": "TCB",
                  "dir": "Chờ mua",
                  "entry": "Đợi về 22 (mức T4/2025)",
                  "target": "Cấp vốn cho Vin/Masan",
                  "stop": "—",
                  "sig": "wait",
                  "tv": "HOSE:TCB"
                },
                {
                  "asset": "DCM · DPM",
                  "dir": "Giữ chặt",
                  "entry": "Tỉ trọng rất lớn, không bán",
                  "target": "Dài hạn — căn bản nền nông nghiệp",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:DCM"
                },
                {
                  "asset": "TCX · BVBank · VNM · SCS",
                  "dir": "Giữ",
                  "entry": "Không mua thêm",
                  "target": "VNM mã duy nhất có lời; SCS lỗ 12% đã ăn cổ tức",
                  "stop": "—",
                  "sig": "wait",
                  "tv": "HOSE:TCX"
                },
                {
                  "asset": "VPB · MB · LPB · ACB",
                  "dir": "Không mua",
                  "entry": "—",
                  "target": "\"Được thì ít mà chết thì lắm\"",
                  "stop": "—",
                  "sig": "down",
                  "tv": "HOSE:VPB"
                },
                {
                  "asset": "FPT · HPG · MWG · PNJ · SSI",
                  "dir": "Tránh",
                  "entry": "Không đụng",
                  "target": "PNJ sẽ sàn thêm như Novaland; SSI có thể về 20",
                  "stop": "MSB: chốt lời",
                  "sig": "down",
                  "tv": "HOSE:FPT"
                }
              ]
            },
            {
              "group": "Vàng & Bạc",
              "items": [
                {
                  "asset": "Vàng",
                  "dir": "Long",
                  "entry": "4.030",
                  "target": "Còn năng lượng về 3.700 sau khi hồi",
                  "stop": "3.930",
                  "sig": "wait",
                  "tv": "OANDA:XAUUSD"
                },
                {
                  "asset": "Vàng (short)",
                  "dir": "Chờ short",
                  "entry": "Đợi hồi về 4.400 + tin Fed tăng lãi",
                  "target": "—",
                  "stop": "Chưa short ở vùng này",
                  "sig": "wait",
                  "tv": "OANDA:XAUUSD"
                }
              ]
            },
            {
              "group": "Dầu",
              "items": [
                {
                  "asset": "Dầu (Brent/UK)",
                  "dir": "Long theo tin",
                  "entry": "Đang ~100 (đáy 70,87 → +43%)",
                  "target": "Đánh lớn → >120, tệ hơn >150",
                  "stop": "Hòa bình cũng chỉ về 85–90",
                  "sig": "up",
                  "tv": "TVC:UKOIL"
                }
              ]
            },
            {
              "group": "Chứng khoán Mỹ",
              "items": [
                {
                  "asset": "Google",
                  "dir": "Tránh / short",
                  "entry": "Đã giảm 20% từ vùng ~400",
                  "target": "Về 270 trong tháng 9",
                  "stop": "FCF âm 5,9 tỷ đô lần đầu lịch sử",
                  "sig": "down",
                  "tv": "NASDAQ:GOOGL"
                },
                {
                  "asset": "Intel",
                  "dir": "Short (giữ)",
                  "entry": "Đỉnh 130–141, đã −35–40%",
                  "target": "Lấp gap vùng 70 (−50% từ đỉnh)",
                  "stop": "Foundry lỗ lớn, \"tay trái bán tay phải\"",
                  "sig": "down",
                  "tv": "NASDAQ:INTC"
                },
                {
                  "asset": "SpaceX",
                  "dir": "Short (giữ)",
                  "entry": "Insider đã rút ~110 tỷ đô tiền thật",
                  "target": "60–70 từ giờ đến đầu năm sau",
                  "stop": "Lock-up tung cung gấp 8 lần cuối năm",
                  "sig": "down"
                },
                {
                  "asset": "S&P 500",
                  "dir": "Chờ",
                  "entry": "—",
                  "target": "Nghiêng kịch bản về ~7.000 để tích lũy",
                  "stop": "Năm bầu cử giữa nhiệm kỳ thường −17÷21% sau T7",
                  "sig": "down",
                  "tv": "TVC:SPX"
                },
                {
                  "asset": "Dell",
                  "dir": "Tránh",
                  "entry": "Phân phối rõ 467 → 370",
                  "target": "\"Sẽ tương tự Intel\"",
                  "stop": "Từng bị thổi 121 → 460",
                  "sig": "down",
                  "tv": "NYSE:DELL"
                },
                {
                  "asset": "RTX · Lockheed",
                  "dir": "Theo dõi mua",
                  "entry": "Test đầu tuần",
                  "target": "Về đỉnh cũ (\"đánh phụ lắm\")",
                  "stop": "",
                  "sig": "up",
                  "tv": "NYSE:RTX"
                },
                {
                  "asset": "Coca-Cola",
                  "dir": "Chốt lời",
                  "entry": "Chốt hết",
                  "target": "—",
                  "stop": "",
                  "sig": "wait",
                  "tv": "NYSE:KO"
                },
                {
                  "asset": "Walmart · Costco · Amazon",
                  "dir": "Đứng ngoài",
                  "entry": "Đang nằm đáy",
                  "target": "Bán lẻ toàn cầu đau khổ",
                  "stop": "",
                  "sig": "down",
                  "tv": "NASDAQ:AMZN"
                }
              ]
            },
            {
              "group": "Nhật & Hàn",
              "items": [
                {
                  "asset": "Samsung",
                  "dir": "Short (giữ)",
                  "entry": "Đã giảm 30–32% từ đỉnh",
                  "target": "Về 200.000, thậm chí 170.000 KRW",
                  "stop": "Kospi −31% từ đỉnh (từng +85% từ T3)",
                  "sig": "down",
                  "tv": "KRX:005930"
                },
                {
                  "asset": "Nikkei",
                  "dir": "Short",
                  "entry": "Giảm 2,8% phiên 24/07",
                  "target": "\"Còn giảm rất mạnh\"",
                  "stop": "",
                  "sig": "down",
                  "tv": "TVC:NI225"
                }
              ]
            },
            {
              "group": "Bitcoin & Crypto",
              "items": [
                {
                  "asset": "Bitcoin",
                  "dir": "Đứng ngoài / short nhịp hồi",
                  "entry": "Đang 65.000",
                  "target": "Banana 3 kết thúc 71.000–72.000",
                  "stop": "Xác suất cao về 40.000–41.000",
                  "sig": "down",
                  "tv": "BINANCE:BTCUSDT"
                }
              ]
            }
          ]
        },
        {
          "date": "2026-07-23",
          "dateShort": "23/07",
          "timeAgo": "Tuần trước",
          "tab": "Tập 39 · Tuần 29",
          "sourceType": "member-video",
          "typeLabel": "Video hội viên · Tập 39",
          "title": "Tập 39 (Hội Viên): Nên Buông Hay Bắt Đáy? — CHƯA Bắt Đáy, Chờ VN-Index Về 1.500",
          "summary": "Phiên 23/07 hồi phục kỹ thuật do QUÁ BÁN — nhưng dứt khoát CHƯA nên bắt đáy hay trung bình giá. Lý do: (1) muốn hồi mạnh VN-Index phải test lại vùng 1.500–1.600 (bụng đám mây); VIC/VHM chi phối index (mỗi mã ±30–40 điểm), VHM chỉ cần chỉnh ~20% là index về 1.500; (2) khối ngoại vẫn bán ròng vì thị trường khác hấp dẫn hơn + họ mua cả rổ (VN30) nên phải ôm cả VIC/VHM đắt đỏ; (3) \"chat treo lơ lửng\" — Mỹ điều tra áp thuế 3 hướng (thâm hụt TM, vi phạm bản quyền, hàng TQ đội lốt), có thể nặng hơn cả TQ/Đông Nam Á, ra tin sau 24/07. Hai mốc giải ngân: 1.580 (đáy cũ T3, hỗ trợ vừa), 1.500 (hỗ trợ cứng — sẽ cho mua); cực đoan 1.400 (không phải kịch bản chính). GIỮ không bán: BID, HDBank, BVBank, DCM/DPM, SCS (lỗ ~12%, đã nhận 2.500đ cổ tức), VNM — nhưng KHÔNG mua thêm. PNJ chuyển cực xấu: \"kim cương rởm vàng rởm\", niềm tin thương hiệu bị xóa sạch, có thể về dưới 9 như Novaland. HPG: không mua — Vin Group làm thép sẽ cạnh tranh mạnh, HPG khó thắng thầu (nguồn tin khả tín); đã thủng 23 về 21.85. Dầu lên 88–98, dự trữ Mỹ còn 6 tuần, xăng 4$/gallon — \"100 không thể là đáy\". SpaceX hạ đích về 50–60 (lãi 26%). US30 short tốt, cyber (Palo Alto/CrowdStrike/Fortinet) tăng short.",
          "feedChips": [
            {
              "label": "VN-Index ↓ chưa bắt đáy, chờ 1.500",
              "sig": "down"
            },
            {
              "label": "Thuế quan ⚠ chat treo lơ lửng 24/07",
              "sig": "warn"
            },
            {
              "label": "PNJ ↓ có thể về dưới 9 như Novaland",
              "sig": "down"
            },
            {
              "label": "Dầu ↑ 88–98, \"100 không là đáy\"",
              "sig": "up"
            },
            {
              "label": "Giữ ◷ BID/đạm/SCS/VNM — không mua thêm",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "VN-Index",
              "value": "Chưa bắt đáy — chờ về 1.500 mới giải ngân",
              "signal": "down",
              "note": "Phiên 23/07 chỉ là hồi kỹ thuật do quá bán. Hai mốc: 1.580 (đáy cũ T3, hỗ trợ vừa), 1.500 (hỗ trợ cứng — cho mua); cực đoan 1.400. VHM chỉnh ~20% là index về 1.500. Không trung bình giá vì phải tính \"nếu mình sai thì sao\"."
            },
            {
              "tag": "PNJ",
              "value": "Có thể về dưới 9 như Novaland",
              "signal": "down",
              "note": "\"Kim cương rởm vàng rởm\" — niềm tin thương hiệu với người tiêu dùng gần như bị xóa sạch, không còn lợi thế cạnh tranh (hệ thống phân phối không phải lợi thế). Nâng mức cảnh báo mạnh hơn nhiều so với vùng ~44 trước đó. Tuyệt đối không đụng."
            },
            {
              "tag": "HPG",
              "value": "Không mua — Vin Group làm thép sẽ cạnh tranh",
              "signal": "down",
              "note": "Về kỹ thuật nhìn \"phê\" nhưng nguồn tin khả tín: vài năm tới HPG khó cạnh tranh khi thép Vin Group rất mạnh, khó thắng thầu đối với Vin. Đã thủng nền 23, tìm về đáy mới 21.85 — đã bỏ khỏi danh mục mua."
            },
            {
              "tag": "Dầu",
              "value": "88–98 — \"100 không thể là đáy\"",
              "signal": "up",
              "note": "Đúng call hồi phục từ Tập 36. Dự trữ dầu Mỹ chỉ còn ~6 tuần, xăng Mỹ 4$/gallon cao nhất lịch sử; Houthi đánh mục tiêu Saudi, dọa đóng eo biển. Trong lúc quay video giá dầu +5%."
            },
            {
              "tag": "SpaceX",
              "value": "Hạ đích về 50–60 (đang lãi 26%)",
              "signal": "down",
              "note": "Giữ 76.000 đô từ ~155, không bổ sung. Người bán khống lớn nhất là nhân viên nội bộ + quỹ nắm SpaceX: khi được giải lock-up sẽ trả bằng hàng đó nên giá vốn thật ~40–60, mượn bán 115 vẫn lời — họ sẽ tiếp tục bán."
            }
          ],
          "sections": [
            {
              "title": "Vì sao chưa bắt đáy / trung bình giá",
              "signal": "down",
              "sigLabel": "Cảnh giác — 3 lý do",
              "para": "Bài đăng 23/07: thị trường hồi kỹ thuật cho phần cổ phiếu 40% hiện hữu \"dễ thở\" hơn, nhưng người ham bắt đáy/trung bình giá cần cẩn trọng — chưa nên. Đây là hồi phục do quá bán (chỉ báo tâm lý về vùng \"rất sợ hãi\", rủi ro về mức rất thấp — thường có xác suất hồi), nhưng hai nguy cơ lớn còn treo.",
              "bullets": [
                "VIC/VHM chi phối index: mỗi mã đóng góp ±30–40 điểm; hai mã vốn hóa lớn nhất không còn động lực tăng, chỉnh giảm là index rơi mạnh. Muốn hồi bền phải test 1.500–1.600.",
                "Khối ngoại bán ròng kéo dài: thị trường khác hấp dẫn hơn; họ mua cả rổ VN30/VN100 nên buộc ôm VIC/VHM đắt đỏ → cần chỉnh mạnh mới hút vốn ngoại. FPT ngoại bán từ 49% xuống 27%.",
                "Thuế quan — \"chat treo lơ lửng\": Mỹ điều tra 3 hướng (thâm hụt TM, vi phạm bản quyền, hàng TQ đội lốt), tin ra sau 24/07, có thể nặng hơn cả TQ và Đông Nam Á; \"chứng minh cỡ nào cũng bị đánh\".",
                "Giá dầu 88–98 + Fed hết cửa hạ lãi (BofA: có thể +75bps T9) → thế giới chuẩn bị điều chỉnh, cộng hưởng rủi ro trong nước."
              ]
            },
            {
              "title": "Danh mục: giữ gì, tránh gì",
              "signal": "wait",
              "sigLabel": "Kỷ luật — giữ nhưng không mua thêm",
              "para": "Vẫn tiền 60 / cổ 40. Cổ phiếu đang cầm đều ở vùng giá trị hoặc thấp hơn — \"cầm băng thoải mái\", nhưng chưa cho mua thêm vì index có thể về 1.500 và phải giữ được nếu sai. Ai đang cầm: một là đợi hồi kỹ thuật rồi cắt thu tiền; hai là nếu là tiền nhàn rỗi + cổ phiếu tốt thì chịu đựng thêm 15–24 tháng vẫn có lợi nhuận.",
              "bullets": [
                "Giữ (không bán, không mua thêm): BIDV, HDBank (giữ để niêm yết HDBank Securities), BVBank (mới lên sàn 21/07, FA/TA đều ổn), DCM/DPM (giá dầu cao → biên lợi nhuận đạm tăng), SCS (lỗ ~12%, đã nhận 2.500đ cổ tức), VNM (mẫu hình đẹp).",
                "Tránh tuyệt đối: PNJ (về <9), FPT (AI thay thế, ngoại bán), HPG (Vin thép cạnh tranh), Đức Giang (\"bắt dao rơi\"), PC1 (chưa rõ thỏa thuận ông Tuấn — kéo lên là ra hàng).",
                "Vàng: kỳ vọng hồi kỹ thuật về 4.000, nhưng \"cửa về 3.000 rất sáng\"; muốn long thì vào ~4.030, cắt lỗ ~3.930 (về 3.000).",
                "US: US30 short tốt (chốt vùng ~50.700 chỉ số hợp đồng), Apple short đã hoàn vốn, cyber tăng short (Fortinet đã có thành quả), Intel về 70, MU sót >1.080 \"lịm luôn\", Nhật/Hàn (đợi Kospi ~7.700) short, AMD sót 575, Google thủng hỗ trợ (dòng tiền âm), Tesla -7% báo cáo tệ."
              ]
            }
          ],
          "tradeLevels": [
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "VN-Index",
                  "dir": "Chờ giải ngân",
                  "entry": "Về 1.500 (hỗ trợ cứng)",
                  "target": "1.580 hỗ trợ vừa · cực đoan 1.400",
                  "stop": "Chưa bắt đáy lúc này",
                  "sig": "down",
                  "tv": "HOSE:VNINDEX"
                },
                {
                  "asset": "BID · HDBank · BVBank",
                  "dir": "Giữ",
                  "entry": "Không mua thêm",
                  "target": "Đợi index 1.500",
                  "stop": "—",
                  "sig": "wait",
                  "tv": "HOSE:BID"
                },
                {
                  "asset": "DCM · DPM",
                  "dir": "Giữ/tích lũy",
                  "entry": "Vùng đáy — giá dầu cao lợi biên",
                  "target": "Dài hạn, ăn cổ tức",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:DCM"
                },
                {
                  "asset": "PNJ · HPG · FPT · DGC · PC1",
                  "dir": "Tránh",
                  "entry": "Không đụng",
                  "target": "PNJ về <9; HPG về 21.85",
                  "stop": "—",
                  "sig": "down",
                  "tv": "HOSE:PNJ"
                }
              ]
            },
            {
              "group": "Vàng & Bạc",
              "items": [
                {
                  "asset": "Vàng",
                  "dir": "Long nhẹ / chờ đáy",
                  "entry": "~4.030 (hồi kỹ thuật)",
                  "target": "Về 4.000; cửa 3.000 \"rất sáng\"",
                  "stop": "~3.930",
                  "sig": "wait",
                  "tv": "OANDA:XAUUSD"
                }
              ]
            },
            {
              "group": "Dầu",
              "items": [
                {
                  "asset": "Dầu WTI/Brent",
                  "dir": "Long (đã chạm đích)",
                  "entry": "Đã lên 88–98",
                  "target": "Có thể 95+ nếu không kích",
                  "stop": "\"100 không là đáy\"",
                  "sig": "up",
                  "tv": "TVC:USOIL"
                }
              ]
            },
            {
              "group": "Chứng khoán Mỹ",
              "items": [
                {
                  "asset": "US30 / S&P",
                  "dir": "Short",
                  "entry": "Short tốt",
                  "target": "Chốt vùng thấp",
                  "stop": "",
                  "sig": "down",
                  "tv": "TVC:SPX"
                },
                {
                  "asset": "SpaceX",
                  "dir": "Short (giữ)",
                  "entry": "Giữ 76.000đ từ ~155",
                  "target": "Hạ đích về 50–60",
                  "stop": "",
                  "sig": "down"
                },
                {
                  "asset": "Apple · Intel · MU",
                  "dir": "Short",
                  "entry": "Apple hoàn vốn; MU >1.080",
                  "target": "Intel về 70",
                  "stop": "",
                  "sig": "down",
                  "tv": "NASDAQ:AAPL"
                },
                {
                  "asset": "Cyber (PANW/CRWD/FTNT)",
                  "dir": "Tăng short",
                  "entry": "Giữ + tăng lệnh",
                  "target": "Fortinet đã có thành quả",
                  "stop": "Vị thế nhỏ",
                  "sig": "down",
                  "tv": "NASDAQ:CRWD"
                },
                {
                  "asset": "AMD · Google · Tesla",
                  "dir": "Short",
                  "entry": "AMD 575; Google thủng hỗ trợ",
                  "target": "Google dòng tiền âm; Tesla -7%",
                  "stop": "",
                  "sig": "down",
                  "tv": "NASDAQ:AMD"
                }
              ]
            },
            {
              "group": "Nhật & Hàn",
              "items": [
                {
                  "asset": "Kospi / Samsung",
                  "dir": "Short",
                  "entry": "Đợi Kospi ~7.700",
                  "target": "Theo đà margin call",
                  "stop": "",
                  "sig": "down",
                  "tv": "KRX:005930"
                },
                {
                  "asset": "Nikkei",
                  "dir": "Short",
                  "entry": "Canh cao đập xuống",
                  "target": "Test 58.700",
                  "stop": "",
                  "sig": "down",
                  "tv": "TVC:NI225"
                }
              ]
            }
          ]
        },
        {
          "date": "2026-07-18",
          "dateShort": "18/07",
          "timeAgo": "Tuần trước",
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
          "timeAgo": "2 tuần trước",
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
          "timeAgo": "3 tuần trước",
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
        }
      ],
      "sources": [
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "30/07/2026",
          "title": "FED KHÔNG TĂNG LÃI SUẤT, CHỨNG KHOÁN VẪN SẬP: CHUYỆN GÌ ĐANG XẢY RA?",
          "meta": "Video công khai · transcript tự động"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "26/07/2026",
          "title": "TẬP 40 (ĐỘC QUYỀN HỘI VIÊN 2026): NÊN BUÔNG HAY NÊN BẮT ĐÁY — VĨ MÔ, VÀNG, DẦU, CHỨNG KHOÁN TUẦN 30",
          "meta": "Video hội viên · transcript tự động"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "26/07/2026",
          "title": "CÚ SỐC KÉP VĨ MÔ: TRUNG ĐÔNG BÊN BỜ VỰC CHIẾN TRANH & TRUMP DỰNG LẠI HÀNG RÀO THUẾ QUAN",
          "meta": "Video công khai · transcript tự động"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "23/07/2026",
          "title": "TẬP 39 (ĐỘC QUYỀN HỘI VIÊN 2026): NÊN BUÔNG HAY NÊN BẮT ĐÁY LÚC NÀY: CHỨNG, VÀNG NGÀY 24/7/2026?",
          "meta": "Video hội viên · transcript tự động"
        },
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
          "date": "2026-07-26",
          "dateShort": "26/07",
          "timeAgo": "4 ngày trước",
          "tab": "Lăng kính · 26/07",
          "sourceType": "public-video",
          "typeLabel": "Livestream công khai",
          "title": "Điều Mấu Chốt Sẽ Giúp TTCK Trở Lại",
          "summary": "Livestream tuần \"Lăng kính đầu tư giá trị\" (20:30 chủ nhật hàng tuần) với dữ liệu định giá 24/07: VN-Index PE 12,38 lần, PB 1,92 lần — nếu loại nhóm VIC thì PE về vùng 2 độ lệch chuẩn dưới trung bình lịch sử. Chẩn đoán căn nguyên đợt giảm: KHÔNG phải chất lượng hàng hóa hay định giá, mà là cung vượt cầu — khối ngoại bán ròng ~80 nghìn tỷ trong 7 tháng, cộng IPO + phát hành cổ phiếu mới kỷ lục lịch sử (gần 300 nghìn tỷ), trong khi cầu yếu vì lãi suất cao hút tiền vào kênh cố định, tâm lý bất ổn lan mọi kênh tài sản, và tiền ngân sách ứ đọng ở kho bạc (thu tăng nhanh hơn chi). Hai yếu tố mấu chốt để thị trường trở lại: (1) lãi suất ngừng tăng và có dấu hiệu giảm — nhận định lãi suất đang gần đỉnh, lạm phát năm nay dưới 5% dù giá dầu tăng; (2) khối ngoại giảm bán ròng — sở hữu nước ngoài chỉ còn 12,6% (thấp nhất hơn 10 năm), phần lớn còn lại là nhà đầu tư chiến lược (Sumitomo/VPBank, Mizuho/Vietcombank) không phải bên bán; áp lực bán từ quỹ cận biên tái cơ cấu sang mới nổi (tiêu chí FTSE) dự kiến giảm hoặc ngừng vào cuối quý 3 khi Việt Nam chính thức lên thị trường mới nổi tháng 9. Chỉ số bi quan nhà đầu tư hiện ~89 điểm — gần chạm đỉnh bi quan lịch sử 2022 và tháng 3/2020 (93–94 điểm); lượng xem livestream cũng giảm mạnh (80 so với bình thường 700–800) — \"lúc này mới là lúc chúng ta cần phải bám sát\". Nhắc lại nguyên tắc phân bổ theo định giá (không dự đoán chu kỳ): định giá rẻ → nâng tỉ trọng cổ phiếu lên 80–90%, đắt → hạ về mức phòng thủ; bản thân hiện đang gần full tiền vào cổ phiếu (~90%). Về cổ phiếu cụ thể: NT2 rẻ, thuận lợi ngắn hạn nhờ thiếu cung điện, EPS dự kiến 300–400 năm nay; PNJ chưa đủ dữ liệu kết luận pháp lý — tồn kho >10.000 tỷ chủ yếu là vàng (thanh khoản cao), dư nợ ngân hàng liên quan chỉ ~2.000 tỷ nên rủi ro hệ thống ngân hàng thấp, rủi ro chính là tâm lý đám đông; VPBank vs Techcombank đều rẻ, TCB bền vững hơn, VPB tăng trưởng nhanh hơn (cá nhân host thích VPB); ACB Q2 hơi thất vọng (mảng hộ kinh doanh cá thể yếu đi); Masan định giá rẻ, các mảng đều tốt lên; nhóm cổ phiếu chứng khoán được ưu tiên nhặt vì sẽ tăng mạnh nhất khi thị trường hồi phục (thứ tự: chứng khoán → ngân hàng → thép/BĐS).",
          "feedChips": [
            {
              "label": "CK Việt ⚠ nguyên nhân giảm: cung > cầu",
              "sig": "warn"
            },
            {
              "label": "Mấu chốt hồi phục ◷ lãi suất tạo đỉnh + ngoại giảm bán",
              "sig": "wait"
            },
            {
              "label": "Tâm lý ⚠ chỉ số bi quan ~89 — gần đỉnh 2022/2020",
              "sig": "warn"
            },
            {
              "label": "Ngành ↑ chứng khoán sẽ tăng mạnh nhất khi hồi phục",
              "sig": "up"
            }
          ],
          "keyCalls": [
            {
              "tag": "Định giá 24/07",
              "value": "VN-Index PE 12,38 lần · PB 1,92 lần",
              "signal": "up",
              "note": "Loại nhóm VIC thì PE về vùng 2 độ lệch chuẩn dưới trung bình lịch sử — rẻ nhưng chưa bằng đáy 2008–2009 (PE 7–8 lần)."
            },
            {
              "tag": "Vì sao giảm",
              "value": "Cung > cầu, không phải chất lượng hàng hóa hay định giá",
              "signal": "warn",
              "note": "Khối ngoại bán ròng ~80 nghìn tỷ/7 tháng + IPO + phát hành mới kỷ lục (~300 nghìn tỷ) — cầu yếu do lãi suất cao hút tiền vào kênh cố định."
            },
            {
              "tag": "2 yếu tố mấu chốt",
              "value": "Lãi suất tạo đỉnh + khối ngoại giảm bán ròng (từ Q3/T9)",
              "signal": "wait",
              "note": "Sở hữu ngoại còn 12,6% (thấp nhất 10+ năm), phần lớn là nhà đầu tư chiến lược không bán. Quỹ cận biên tái cơ cấu dự kiến xong cuối Q3 khi VN lên mới nổi tháng 9."
            },
            {
              "tag": "Tâm lý thị trường",
              "value": "Chỉ số bi quan ~89 điểm — gần đỉnh bi quan lịch sử",
              "signal": "warn",
              "note": "Gần bằng đỉnh bi quan 2022 và tháng 3/2020 (93–94 điểm). Lượng xem livestream giảm còn ~80 (bình thường 700–800) — dấu hiệu nhà đầu tư chán nản rời bỏ."
            },
            {
              "tag": "Ngành ưu tiên khi hồi phục",
              "value": "Chứng khoán trước, ngân hàng sau, rồi thép/BĐS",
              "signal": "up",
              "note": "\"Khi mà thị trường trở lại mấy cổ phiếu bank chứng là nó sẽ tăng điên đảo luôn\" — đang tăng tỉ trọng nhóm chứng khoán để đón đầu."
            }
          ],
          "sections": [
            {
              "title": "Vì sao chứng khoán giảm: cung nhiều hơn cầu",
              "signal": "warn",
              "sigLabel": "Cảnh giác",
              "para": "Chất lượng hàng hóa và định giá không phải vấn đề — vấn đề duy nhất là cung/cầu. Cung tăng vọt: khối ngoại bán ròng ~80 nghìn tỷ trong 7 tháng đầu năm, cộng IPO và phát hành cổ phiếu mới của doanh nghiệp — riêng huy động vốn bằng cổ phần thời gian qua là lớn nhất lịch sử, thêm gần 300 nghìn tỷ cung mới ra thị trường. Cầu yếu đi vì ba lý do: lãi suất cao khiến dòng tiền chuyển sang kênh lãi cố định (tăng chậm hơn mức bình thường ~18–20%/năm); tâm lý bất ổn lan sang mọi kênh tài sản (chứng khoán, BĐS, vàng); và tiền ngân sách bị ứ đọng ở kho bạc nhà nước — thu ngân sách tăng rất nhanh nhưng chi (lương, đầu tư công) tăng chậm hơn nhiều.",
              "bullets": [
                "Khối ngoại bán ròng ~80 nghìn tỷ trong 7 tháng đầu năm",
                "Phát hành cổ phiếu mới ~300 nghìn tỷ — lớn nhất lịch sử",
                "Lãi suất cao hút tiền vào kênh cố định, tăng chậm hơn bình thường",
                "Tiền ngân sách ứ đọng ở kho bạc do thu >> chi"
              ]
            },
            {
              "title": "Hai yếu tố mấu chốt để thị trường trở lại",
              "signal": "wait",
              "sigLabel": "Đang chờ",
              "para": "Yếu tố 1 — lãi suất: ngừng tăng và có dấu hiệu giảm sẽ là tín hiệu đảo chiều quan trọng nhất, vì lãi suất giảm khiến một phần dòng tiền chuyển từ kênh lãi cố định sang cổ phiếu. Nhận định lãi suất đang gần đỉnh (lạm phát năm nay dưới 5% dù giá dầu tăng theo căng thẳng Iran–Mỹ) nhưng khó giảm sâu vì phải giữ ổn định tỷ giá so với lãi suất Mỹ. Yếu tố 2 — khối ngoại giảm bán ròng: bán ròng chủ yếu do quỹ thị trường cận biên tái cơ cấu sang mới nổi (tiêu chí FTSE, không phải MSCI) trước khi Việt Nam chính thức nâng hạng tháng 9 — dự kiến giảm hoặc ngừng vào cuối quý 3. Sở hữu nước ngoài hiện chỉ còn 12,6% (thấp nhất hơn 10 năm), phần lớn là nhà đầu tư chiến lược dài hạn (Sumitomo tại VPBank, Mizuho tại Vietcombank) chứ không phải bên bán.",
              "bullets": [
                "Lãi suất ngừng tăng/giảm → tín hiệu đảo chiều quan trọng nhất",
                "Khối ngoại bán ròng do tái cơ cấu quỹ cận biên → mới nổi, dự kiến hết vào cuối Q3",
                "Sở hữu ngoại chỉ còn 12,6% — thấp nhất 10+ năm, phần lớn là nhà đầu tư chiến lược"
              ]
            },
            {
              "title": "Tâm lý cực đoan bi quan — lúc cần bám sát nhất",
              "signal": "warn",
              "sigLabel": "Cơ hội thận trọng",
              "para": "Chỉ số đo độ bi quan của nhà đầu tư hiện ở mức ~89 điểm, gần chạm đỉnh bi quan lịch sử của 2022 và tháng 3/2020 (93–94 điểm). Lượng người xem livestream cũng giảm mạnh xuống còn ~80 (bình thường 700–800) — dấu hiệu nhiều nhà đầu tư chán nản rời bỏ thị trường hoặc tắt thông báo theo dõi. Quan điểm: đây chính là lúc cần nghiên cứu kỹ và bám sát nhất, không phải lúc buông xuôi — nhiều cổ phiếu hiện rất rẻ, dự đoán 1–2 năm tới nhiều người sẽ tiếc vì sao lúc này không mua.",
              "bullets": [
                "Chỉ số bi quan ~89 điểm — gần đỉnh 2022 và T3/2020 (93–94 điểm)",
                "Lượng xem livestream giảm còn ~80 (bình thường 700–800)",
                "PNJ: tồn kho >10.000 tỷ chủ yếu là vàng, dư nợ ngân hàng chỉ ~2.000 tỷ — rủi ro hệ thống thấp, rủi ro chính là tâm lý đám đông chứ không phải pháp lý"
              ]
            }
          ]
        },
        {
          "date": "2026-07-24",
          "dateShort": "24/07",
          "timeAgo": "6 ngày trước",
          "tab": "Podcast · 24/07",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "#06: Vì Sao Cổ Phiếu Tốt Cũng Giảm — P/E Về 10x, Sáu Nhóm Ngành Nhặt Dần",
          "summary": "Giải phẫu nguyên nhân thị trường giảm bằng SỐ LIỆU: (1) Cung cổ phiếu dồi dào — khối ngoại bán ròng >80.000 tỷ từ đầu năm đến tháng 7, cộng IPO và phát hành thêm, tổng cung ra thị trường có thể tới 200.000 tỷ chỉ trong 7 tháng, trong khi cầu không đủ đáp ứng. (2) Lãi suất cao — gửi tiết kiệm tới 9% ở một số ngân hàng, an toàn hơn nên tiền chảy vào tiết kiệm; lãi margin cũng cao. (3) Margin kỷ lục 435.000 tỷ cuối Q2/2026 nhưng thanh khoản chỉ ~500 triệu đô/phiên (Q1 gần 1 tỷ) — chứng tỏ margin phần lớn là CHỦ DOANH NGHIỆP/cổ đông lớn cầm cố cổ phiếu để lấy vốn kinh doanh (khó phát hành trái phiếu, khó vay bank), minh chứng: có CTCK thị phần môi giới 2–3% mà cho vay margin bằng công ty thị phần 10%; khi các chủ tịch bị call margin thì lại bán tháo tiếp. Định giá sau khi có KQKD toàn bộ: P/E thị trường ~12x, loại nhóm VIC còn ~10x — mức mà chỉ 6% thời gian giao dịch trong lịch sử đạt được hoặc thấp hơn. Khối ngoại sở hữu chỉ còn 12,6% (đáy 10 năm, đỉnh từng 30%): thị trường phát triển hấp dẫn hơn, tỷ giá, và quỹ CẬN BIÊN thanh lý VN trước khi nâng hạng lên mới nổi tháng 9 — quỹ rổ mới nổi chỉ giải ngân từ tháng 9. Hành động: tỉ trọng cổ phiếu ~90% danh mục tài chính (danh mục tài chính chỉ nên 20–30% tổng tài sản với nhà đầu tư thường), nhặt dần 6 nhóm: vật liệu xây dựng, chứng khoán (P/B ~1, P/E <10, top 10–20), ngân hàng (có mã P/E <6x), bán lẻ (tăng trưởng mạnh nhưng bị bán quá sâu), điện (nhiệt điện + tái tạo, tránh thủy điện vì El Niño), BĐS khu công nghiệp (FDI mạnh, giá thuê tăng, có mã dưới nửa giá trị dòng tiền chiết khấu).",
          "feedChips": [
            {
              "label": "P/E ↑ 12x, loại Vin ~10x = percentile 6%",
              "sig": "up"
            },
            {
              "label": "Cung ⚠ 200.000 tỷ trong 7 tháng",
              "sig": "warn"
            },
            {
              "label": "Margin ⚠ 435.000 tỷ — chủ DN cầm cố",
              "sig": "warn"
            },
            {
              "label": "6 nhóm ngành ↑ nhặt dần",
              "sig": "up"
            }
          ],
          "keyCalls": [
            {
              "tag": "Định giá",
              "value": "P/E ~12x, loại Vin ~10x — percentile 6%",
              "signal": "up",
              "note": "Sau khi có KQKD toàn bộ doanh nghiệp hết tháng 7. Mức P/E dưới 10 chỉ xuất hiện ở ~6% thời gian giao dịch trong lịch sử (\"100 phiên thì chỉ 6 phiên\"); P/B cũng rất thấp. Rẻ hơn cả mức percentile 10–15% AzFin nêu hồi 14/06."
            },
            {
              "tag": "Nguyên nhân giảm",
              "value": "Cung 200.000 tỷ vs cầu yếu + lãi 9%",
              "signal": "warn",
              "note": "Khối ngoại bán ròng >80.000 tỷ 7 tháng + IPO + phát hành thêm = tổng cung tới 200.000 tỷ. Gửi tiết kiệm tới 9% hút tiền khỏi chứng khoán; lãi margin cao nên nhà đầu cơ hạn chế dùng — minh chứng: lãi từ margin của CTCK tăng cao hơn mức tăng số lượng cho vay."
            },
            {
              "tag": "Margin",
              "value": "435.000 tỷ — nhưng là chủ DN cầm cố",
              "signal": "warn",
              "note": "Kỷ lục cuối Q2/2026 trong khi thanh khoản chỉ ~500 triệu đô/phiên (Q1 gần 1 tỷ) → nhỏ lẻ không hoạt động mấy. Margin chủ yếu do chủ doanh nghiệp/cổ đông lớn vay mua cổ phiếu phát hành thêm hoặc cầm cố lấy vốn kinh doanh. Có CTCK thị phần 2–3% mà cho vay bằng công ty thị phần 10%."
            },
            {
              "tag": "Khối ngoại",
              "value": "Sở hữu 12,6% — đáy 10 năm; quỹ mới nổi vào từ T9",
              "signal": "wait",
              "note": "Từng đỉnh 30%. Ba nguyên nhân bán: thị trường phát triển hấp dẫn hơn (lợi suất TPCP Mỹ 4,5–5%), rủi ro tỷ giá, và quỹ rổ CẬN BIÊN phải thanh lý cổ phiếu VN trước khi VN được nâng hạng lên mới nổi tháng 9 — quỹ rổ mới nổi chỉ giải ngân từ tháng 9."
            },
            {
              "tag": "Sáu nhóm ngành",
              "value": "VLXD · chứng khoán · bank · bán lẻ · điện · BĐS KCN",
              "signal": "up",
              "note": "Chứng khoán: P/B ~1, P/E <10, top 10–20 thị phần. Bank: có mã P/E chưa đến 6x, ngân hàng quốc doanh nay cũng hấp dẫn. Bán lẻ: tăng trưởng 6–7 tháng rất mạnh (hồi phục hình chữ K) nhưng bị bán quá sâu. Điện: nhiệt điện + năng lượng tái tạo (tránh thủy điện vì El Niño) — định giá rẻ, cổ tức cao, vừa phòng thủ vừa tấn công. BĐS KCN: FDI mạnh, giá thuê tăng, dòng tiền rõ ràng hơn BĐS nhà ở, có mã dưới nửa giá trị DCF."
            }
          ],
          "sections": [
            {
              "title": "Ba nguyên nhân bằng số liệu",
              "signal": "warn",
              "sigLabel": "Giải phẫu — cung áp đảo cầu",
              "para": "Trong dài hạn giá cổ phiếu do giá trị quyết định, nhưng giai đoạn thị trường xấu giá có thể chiết khấu tới 50% so với giá trị thực. Hiện nay tốt xấu đều giảm vì ba nguyên nhân chính.",
              "bullets": [
                "Cung: khối ngoại bán ròng >80.000 tỷ (đầu năm→T7) + IPO + phát hành thêm → tổng cung có thể 200.000 tỷ trong 7 tháng; cầu mới không đủ vì thị trường không sôi động, không hút được nhà đầu tư mới.",
                "Lãi suất: gửi tiết kiệm tới 9% ở một số ngân hàng — cao và an toàn nên tiền đổ vào tiết kiệm; đồng thời lo ngại doanh nghiệp vay nợ cao có KQKD kém.",
                "Margin 435.000 tỷ kỷ lục nhưng thanh khoản chỉ ~500 triệu đô/phiên: dòng margin thực chất chảy vào tay chủ doanh nghiệp cầm cố cổ phiếu; khi họ bị call margin (đã có trường hợp chủ tịch bị bán giải chấp công bố đích danh) thì cung lại tăng thêm.",
                "Nguyên nhân cung tiền khó: 2025 đã tăng trưởng tín dụng và cung tiền quá lớn nên phần nào đã \"tiêu trước\" dư địa."
              ]
            },
            {
              "title": "Phân bổ theo định giá — và vì sao đa dạng hóa",
              "signal": "up",
              "sigLabel": "Hành động — nhặt dần, đủ đa dạng",
              "para": "Nguyên tắc gốc là quản lý gia sản: kênh đầu tư tài chính chỉ nên chiếm 20–30% tổng tài sản với nhà đầu tư thường (không quá 50% với nhà đầu tư chuyên nghiệp). Trong danh mục tài chính, phân bổ theo ĐỊNH GIÁ thị trường: định giá trung vị → ~60% cổ phiếu / 40% trái phiếu và công cụ lãi cố định; thị trường sập sâu → chuyển tiền từ lãi cố định sang mua cổ phiếu rẻ; cổ phiếu tăng cao → bán bớt chuyển về lãi cố định. Hiện tại (T7/2026) là lúc dùng tiền nhặt dần; tỉ trọng cổ phiếu của AzFin ~90% danh mục tài chính.",
              "bullets": [
                "Đa dạng hóa vì \"thiên nga đen\" bất ngờ như PNJ, PC1 — phân bổ đủ nhiều ngành thì biến cố không ảnh hưởng nhiều tổng danh mục; khi thị trường lên thì dòng tiền cũng xoay vòng hết ngành này sang ngành khác.",
                "Cần 2–3 nguồn thu nhập (tính cả lao động), trong đó ít nhất 2 nguồn từ tài sản — để khi cơ hội lớn xuất hiện vẫn có dòng tiền bổ sung.",
                "Kênh thanh khoản thấp chỉ nên phân bổ tỉ trọng vừa phải; nếu đã phân bổ nhiều thì đợi thời điểm thích hợp mới hạ.",
                "Kỳ vọng: nhặt cổ phiếu định giá rẻ + triển vọng tốt + cổ tức cao lúc này thì 6 tháng–2 năm sau mới có hiệu quả vượt trội so với thị trường và các kênh khác."
              ]
            }
          ]
        },
        {
          "date": "2026-07-19",
          "dateShort": "19/07",
          "timeAgo": "Tuần trước",
          "tab": "Lăng kính · 19/07",
          "sourceType": "public-video",
          "typeLabel": "Livestream công khai",
          "title": "Nên Phân Bổ Bao Nhiêu Tài Sản Vào Cổ Phiếu?",
          "summary": "Livestream \"Lăng kính đầu tư giá trị\" mở đầu bằng kết quả kinh doanh Q2 nhóm chứng khoán: VPBankS đạt lợi nhuận trước thuế 2.159 tỷ — kỷ lục quý, nhỉnh hơn TCBS (2.097 tỷ) — nhưng host đánh giá chất lượng lợi nhuận TCBS bền vững hơn; VPS hiện PB 1,39 lần, dự kiến cuối năm còn ~1,26–1,3 lần — rẻ so với nhóm CTCK top đầu (host có nắm giữ VPS). Chủ đề chính: không có công thức chung cho tỉ trọng tài sản vào cổ phiếu — phụ thuộc (1) triển vọng thị trường dài hạn (cần cả tăng trưởng kinh tế LẪN định giá hợp lý — dẫn chứng Trung Quốc định giá PE từng lên 50 lần khiến thị trường đi ngang 10–15 năm dù kinh tế vẫn tăng trưởng), (2) kinh nghiệm và sự yêu thích của nhà đầu tư, (3) vai trò trong tổng thể cơ cấu tài sản. Khung tham khảo chung: 10–50% tài sản vào kênh chứng khoán, mức 50% dành cho nhà đầu tư chuyên nghiệp nhất. Ví dụ thực tế 2 khách hàng quản lý gia sản: một anh phân bổ 30% (chuyển dần tiền mới từ BĐS, không bán BĐS), một anh khác ~20% — cả hai đều nhắm dòng tiền cổ tức tăng trưởng 6%/năm, số tuyệt đối tăng 10–20%/năm. Nguyên tắc cốt lõi: điều chỉnh tỉ trọng theo ĐỊNH GIÁ tại từng thời điểm (rẻ → tăng, đắt → giảm), tuyệt đối không cố dự đoán chu kỳ tăng/giảm — \"ngay cả Buffett cũng không dám dự báo thị trường\". Nhân đây host công khai minh chứng hiệu suất cá nhân (bác bỏ tin đồn lỗ 60%): tài khoản cá nhân âm 8% trong 6 tháng nhưng +64% trong 1 năm — \"làm tốt hơn 99,07% nhà đầu tư khác tại DNSE\". Về cổ phiếu cụ thể: FPT mới mua thêm rất ít (0,1–0,2% tài khoản) khi về vùng 6x, PE cuối 2026 ước 10,6 lần — nhấn mạnh AzFin không hề nhắc đến FPT lúc PE 26 lần (đỉnh 2024, mọi người hô hào 300–400) mà chỉ bắt đầu nói lại khi nó rẻ; CTG PE 6,52 lần — \"rẻ hiếm có\", vị thế ngang hoặc hơn BIDV; Hòa Phát: vốn hóa ~180 nghìn tỷ, lợi nhuận dự kiến ~27 nghìn tỷ (PE ~7 lần) — host đánh giá cao hơn cả FPT lúc này; NTC & VFG: cả hai giá trị tốt, NTC định giá rẻ so với chính công ty con NTC3; Hà Đô: giá trị tốt nhưng dự án Cham Vas bán chậm vì công ty không cần tiền gấp; nhóm cổ phiếu chứng khoán được dự báo tăng mạnh nhất khi thị trường hồi phục, kế đến là ngân hàng.",
          "feedChips": [
            {
              "label": "VPS ↑ LNTT Q2 kỷ lục 2.159 tỷ, PB 1,39 lần rẻ",
              "sig": "up"
            },
            {
              "label": "Phân bổ ◷ 10–50% tài sản vào cổ phiếu, theo định giá",
              "sig": "wait"
            },
            {
              "label": "CTG ↑ PE 6,52 lần — rẻ hiếm có",
              "sig": "up"
            },
            {
              "label": "FPT ↑ PE 10,6 lần — đã vào pha rẻ, chưa siêu rẻ",
              "sig": "up"
            }
          ],
          "keyCalls": [
            {
              "tag": "Tỉ trọng cổ phiếu",
              "value": "10–50% tài sản, điều chỉnh theo định giá — không đoán chu kỳ",
              "signal": "wait",
              "note": "50% dành cho nhà đầu tư chuyên nghiệp nhất. Rẻ → tăng tỉ trọng, đắt → giảm; tuyệt đối không cố dự đoán uptrend/downtrend vì \"ngay cả Buffett cũng không dám dự báo thị trường\"."
            },
            {
              "tag": "VPS vs TCBS",
              "value": "VPBankS lãi kỷ lục 2.159 tỷ (nhỉnh hơn TCBS) nhưng chất lượng kém bền vững hơn",
              "signal": "up",
              "note": "VPS PB 1,39 lần, dự kiến cuối năm ~1,26–1,3 lần — rẻ so với nhóm CTCK top đầu. Host có nắm giữ VPS."
            },
            {
              "tag": "CTG",
              "value": "PE 6,52 lần — rẻ hiếm có, vị thế ngang hoặc hơn BIDV",
              "signal": "up",
              "note": "PB chưa cập nhật KQKD Q2, nếu cập nhật sẽ còn thấp hơn."
            },
            {
              "tag": "FPT",
              "value": "PE cuối 2026 ước 10,6 lần — đã vào pha rẻ, chưa siêu rẻ",
              "signal": "up",
              "note": "Mới mua thêm 0,1–0,2% tài khoản khi về vùng 6x. Tăng trưởng lợi nhuận giảm còn ~14% (từ ~20%) do mảng công nghệ/Fox chậm lại + mất ~3% do yên Nhật giảm giá."
            },
            {
              "tag": "Hiệu suất cá nhân",
              "value": "Bác bỏ tin đồn lỗ 60% — thực tế âm 8% (6 tháng), +64% (1 năm)",
              "signal": "up",
              "note": "\"Làm tốt hơn 99,07% nhà đầu tư khác tại DNSE\" (dữ liệu tính đến 17/07/2026, tài khoản từ 18/07/2022)."
            }
          ],
          "sections": [
            {
              "title": "Nên phân bổ bao nhiêu vào cổ phiếu",
              "signal": "wait",
              "sigLabel": "Khung tham khảo",
              "para": "Không có công thức đúng cho tất cả — tỉ trọng phụ thuộc triển vọng thị trường dài hạn (cần cả tăng trưởng kinh tế lẫn định giá hợp lý; ví dụ Trung Quốc định giá PE từng lên 50 lần khiến 10–15 năm sau thị trường vẫn không tăng dù kinh tế tăng trưởng mạnh), kinh nghiệm/sự yêu thích cá nhân, và vai trò của cổ phiếu trong tổng thể cơ cấu tài sản. Khung chung: 10–50% tài sản, 50% dành cho nhà đầu tư chuyên nghiệp nhất. Ví dụ thực tế: một khách hàng quản lý gia sản phân bổ 30% (dùng tiền mới, không bán BĐS), khách khác ~20% — mục tiêu chung là dòng tiền cổ tức + trái tức tăng trưởng 6%/năm, số tuyệt đối tăng 10–20%/năm.",
              "bullets": [
                "Khung chung: 10–50% tài sản vào cổ phiếu; 50% cho chuyên nghiệp nhất",
                "Ví dụ thực tế: khách hàng phân bổ 30% và ~20%, dùng tiền mới chứ không bán BĐS",
                "Điều chỉnh theo định giá tại từng thời điểm, không dự đoán chu kỳ"
              ]
            },
            {
              "title": "Kết quả kinh doanh Q2 nhóm chứng khoán",
              "signal": "up",
              "sigLabel": "Tích cực",
              "para": "VPBankS đạt lợi nhuận trước thuế 2.159 tỷ quý 2 — kỷ lục, nhỉnh hơn TCBS (2.097 tỷ), cả hai đều là quý kỷ lục. Tuy nhiên đánh giá chủ quan: chất lượng lợi nhuận VPS chưa bền vững bằng TCBS. Định giá: VPS PB hiện 1,39 lần (đã giảm từ 1,46 lần), dự kiến cuối năm chỉ còn ~1,26–1,3 lần khi có đủ KQKD cả năm — rẻ so với các công ty chứng khoán top đầu. Host công khai có nắm giữ VPS.",
              "bullets": [
                "VPBankS: LNTT Q2 2.159 tỷ — kỷ lục, nhỉnh hơn TCBS (2.097 tỷ)",
                "Chất lượng lợi nhuận: TCBS được đánh giá bền vững hơn VPS",
                "VPS định giá PB 1,39 lần, dự kiến cuối năm ~1,26–1,3 lần"
              ]
            },
            {
              "title": "FPT, CTG, Hòa Phát — vùng định giá hiện tại",
              "signal": "up",
              "sigLabel": "Tích cực",
              "para": "FPT: mới mua thêm rất ít (0,1–0,2% tài khoản) khi về vùng 6x; PE cuối 2026 ước 10,6 lần — đánh giá là \"rẻ\" nhưng chưa \"siêu rẻ\". Tăng trưởng lợi nhuận chậm lại còn ~14% (từ ~20% các năm trước) do mảng công nghệ chậm, viễn thông/Fox chậm, và mất khoảng 3 điểm phần trăm tăng trưởng do đồng yên Nhật mất giá. Nhấn mạnh: AzFin hoàn toàn im lặng về FPT suốt giai đoạn 2022–2024 khi thị trường hô hào giá 300–400 và PE lên tới 26 lần — chỉ bắt đầu nhắc lại khi cổ phiếu rơi về vùng rẻ. CTG: PE 6,52 lần, được đánh giá là \"rẻ hiếm có\", vị thế ngang hoặc hơn BIDV. Hòa Phát: vốn hóa hiện ~180 nghìn tỷ trong khi lợi nhuận năm nay khả năng đạt ~27 nghìn tỷ (PE ~7 lần), PB cũng tương đối thấp — host đánh giá cao hơn cả FPT ở thời điểm này, có cổ tức tiền mặt.",
              "bullets": [
                "FPT: PE 10,6 lần (2026) — rẻ nhưng chưa siêu rẻ; tăng trưởng chậm còn ~14%",
                "CTG: PE 6,52 lần — rẻ hiếm có, ngang hoặc hơn BIDV",
                "Hòa Phát: PE ~7 lần (vốn hóa 180 nghìn tỷ / LN dự kiến 27 nghìn tỷ) — đánh giá cao hơn FPT lúc này"
              ]
            }
          ]
        },
        {
          "date": "2026-07-16",
          "dateShort": "16/07",
          "timeAgo": "2 tuần trước",
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
          "date": "2026-07-12",
          "dateShort": "12/07",
          "timeAgo": "2 tuần trước",
          "tab": "Lăng kính · 12/07",
          "sourceType": "public-video",
          "typeLabel": "Livestream công khai",
          "title": "Phân Bổ & Quản Trị Danh Mục Trong Đầu Tư Giá Trị",
          "summary": "Livestream trở lại sau 1 tuần nghỉ vì sức khỏe, chủ đề: làm sao xây dựng danh mục an toàn trước các \"thiên nga đen\" bất ngờ (PNJ, DGC, PC1, Vinaconex đều từng là cổ phiếu giá trị/cơ bản tốt nhưng dính biến cố pháp lý/quản trị). Quan điểm cốt lõi: không thể tránh hoàn toàn rủi ro bất ngờ — ngay cả Warren Buffett cũng từng gần như mất trắng trong thương vụ Salomon Brothers vì nhân sự vi phạm quy định, và có tới 33–34% số thương vụ của ông phải cắt lỗ. Bốn nguyên tắc xây dựng danh mục để giảm thiểu sát thương: (1) Tập trung vào doanh nghiệp đầu ngành — dữ liệu thực tế cho thấy doanh nghiệp lớn tăng trưởng mạnh hơn doanh nghiệp nhỏ (VN30 tăng ~1970 điểm so với VN-Index 1828; HNX dù có tuổi đời tương đương chỉ đạt 300 điểm dù ra đời sau; ở Mỹ, NVDA/Microsoft tăng 30–40%/năm trong khi doanh nghiệp nhỏ trì trệ); (2) Ưu tiên cổ tức cao hơn trung bình thị trường (thị trường hiện ~1,4%, danh mục nên đạt 3–5%) vì doanh nghiệp trả cổ tức tiền mặt đều đặn thường có \"tỉ lệ thật\" cao hơn; (3) QUAN TRỌNG NHẤT: chỉ mua khi định giá đủ rẻ, chiết khấu cao — phê phán trào lưu gọi cả việc mua ở đỉnh là \"tích sản\" (đúng nghĩa tích sản là mua đều đặn dưới giá trị, đã chốt lời DGC ~100, FPT ~200 cuối 2024, PNJ cũng đã chốt một phần trước khi giảm); (4) Đa dạng hóa danh mục nhiều mã, nhiều ngành (PNJ chỉ chiếm 2% danh mục cá nhân của host, giá vốn ~6x, nên dù giảm ~20% chỉ ảnh hưởng ~0,4% tổng danh mục). Minh họa lịch sử: danh mục báo cáo chiến lược 10 mã năm 2022 có cả Hòa Phát và Techcombank giảm sâu, nhưng tổng danh mục chỉ âm ~9-10% nhờ đa dạng hóa — và cả hai sau đó đều phục hồi có lãi (mất khoảng 1-2 năm). Ngoài chủ đề chính, host chia sẻ quan điểm bất động sản (ưu tiên Hà Nội/TP.HCM do tăng trưởng dân số cả nước dưới 1%/năm nhưng 2 đô thị này tiếp tục hút di cư) và vàng (chỉ nên mua sau giai đoạn đi ngang dài 3-4 năm). Công bố: AZ Gia sản sắp hợp tác với một công ty chứng khoán để triển khai dịch vụ quản lý gia sản cho khách hàng siêu lớn.",
          "feedChips": [
            {
              "label": "Danh mục ↑ 4 nguyên tắc: đầu ngành · cổ tức · rẻ · đa dạng",
              "sig": "up"
            },
            {
              "label": "Rủi ro ⚠ không thể tránh hoàn toàn — kể cả Buffett",
              "sig": "warn"
            },
            {
              "label": "PNJ ◷ chỉ 2% danh mục — thiệt hại tổng thể ~0,4%",
              "sig": "wait"
            },
            {
              "label": "Tích sản ⚠ đúng nghĩa là mua rẻ đều đặn, không phải mua đỉnh",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "4 nguyên tắc danh mục",
              "value": "Đầu ngành · cổ tức cao · định giá rẻ · đa dạng hóa",
              "signal": "up",
              "note": "Không có khái niệm an toàn tuyệt đối — mục tiêu là giảm thiểu sát thương khi rủi ro bất ngờ xảy ra, không phải tránh hoàn toàn."
            },
            {
              "tag": "Doanh nghiệp lớn thắng nhỏ",
              "value": "VN30 tăng mạnh hơn hẳn nhóm vốn hóa nhỏ (HNX)",
              "signal": "up",
              "note": "VN-Index 1828 điểm, VN30 1970 điểm; HNX-Index chỉ 300 điểm dù tuổi đời tương đương. Ở Mỹ, NVDA/Microsoft tăng 30-40%/năm trong khi doanh nghiệp nhỏ trì trệ."
            },
            {
              "tag": "Đa dạng hóa cứu danh mục",
              "value": "PNJ chỉ 2% danh mục cá nhân → thiệt hại tổng thể chỉ ~0,4%",
              "signal": "wait",
              "note": "Giá vốn PNJ ~6x. Danh mục 2022 (có cả Hòa Phát, Techcombank giảm sâu) tổng âm chỉ ~9-10% nhờ đa dạng hóa 10 mã, sau đó cả hai đều phục hồi có lãi."
            },
            {
              "tag": "Tích sản đúng nghĩa",
              "value": "Mua đều đặn dưới giá trị, KHÔNG phải mua ở một điểm bất kỳ",
              "signal": "warn",
              "note": "Đã chốt lời DGC ~100 (T4/2025), FPT ~200 (cuối 2024), PNJ cũng chốt một phần trước khi giảm sâu — phê phán trào lưu gọi mua ở đỉnh là \"tích sản\" để câu view."
            }
          ],
          "sections": [
            {
              "title": "Không thể tránh hoàn toàn rủi ro bất ngờ",
              "signal": "warn",
              "sigLabel": "Cảnh giác",
              "para": "Thời gian qua nhiều cổ phiếu giá trị/cơ bản tốt (PNJ, DGC, PC1, Vinaconex) đều dính biến cố pháp lý hoặc quản trị bất ngờ. Ngay cả Warren Buffett cũng từng gần mất trắng trong thương vụ Salomon Brothers khi nhân sự công ty vi phạm quy định nghiêm trọng, thậm chí đối mặt vấn đề pháp lý — và có tới 33-34% số thương vụ đầu tư của ông phải cắt lỗ. Kết luận: không có khái niệm an toàn tuyệt đối, chỉ có thể xây dựng danh mục để giảm thiểu sát thương khi rủi ro xảy ra.",
              "bullets": [
                "PNJ, DGC, PC1, Vinaconex: đều từng là cổ phiếu giá trị tốt nhưng dính biến cố bất ngờ",
                "Buffett/Salomon Brothers: gần mất trắng vì vi phạm của nhân sự, từng đối mặt pháp lý",
                "33-34% số thương vụ của Buffett phải cắt lỗ — rủi ro là một phần tất yếu của đầu tư"
              ]
            },
            {
              "title": "4 nguyên tắc xây dựng danh mục an toàn",
              "signal": "up",
              "sigLabel": "Chiến lược",
              "para": "(1) Tập trung doanh nghiệp đầu ngành — thực tế cho thấy doanh nghiệp lớn tăng trưởng mạnh hơn nhỏ, trái với suy nghĩ phổ biến rằng doanh nghiệp ngách/nhỏ mới có tiềm năng lớn. (2) Ưu tiên cổ tức tiền mặt cao hơn trung bình thị trường (thị trường ~1,4%, danh mục nên 3-5%) — cổ tức thật phản ánh chất lượng dòng tiền thật. (3) QUAN TRỌNG NHẤT: chỉ mua khi định giá đủ rẻ, chiết khấu cao — đây là yếu tố quyết định mức thiệt hại khi rủi ro xảy ra. (4) Đa dạng hóa nhiều mã, nhiều ngành trong tầm kiểm soát (không dưới 3 mã, danh mục mẫu 10 mã) để một mã gặp sự cố không ảnh hưởng nhiều đến tổng thể.",
              "bullets": [
                "Đầu ngành: doanh nghiệp lớn tăng trưởng mạnh hơn nhỏ (dẫn chứng VN30/HNX, NVDA/MSFT)",
                "Cổ tức cao hơn trung bình thị trường: mục tiêu danh mục 3-5% (thị trường ~1,4%)",
                "Định giá rẻ, chiết khấu cao — yếu tố quan trọng nhất quyết định mức thiệt hại",
                "Đa dạng hóa nhiều mã/ngành trong tầm kiểm soát — danh mục mẫu 10 mã"
              ]
            },
            {
              "title": "Minh chứng: PNJ 2% danh mục, danh mục 2022 vẫn có lãi",
              "signal": "wait",
              "sigLabel": "Bài học thực tế",
              "para": "Host công khai vị thế cá nhân: DGC không còn nắm (đã chốt lời T4/2025 ở ~100, chưa mua lại vì chưa đủ rẻ), PC1/VCG chưa bao giờ nắm giữ, FPT chỉ 0,1-0,2% (đã bán phần lớn cuối 2024), PNJ 2% danh mục với giá vốn ~6x — nên dù PNJ giảm ~20% chỉ ảnh hưởng ~0,4% tổng danh mục. Ví dụ lịch sử: danh mục báo cáo chiến lược 10 mã năm 2022 có cả Hòa Phát và Techcombank giảm rất sâu (Techcombank từ 58 về 19,x, PB có lúc chỉ 0,64 lần) nhưng tổng danh mục chỉ âm 9-10% nhờ đa dạng hóa — và cả hai cổ phiếu sau đó đều phục hồi có lãi (mất khoảng 1-2 năm để hồi phục).",
              "bullets": [
                "PNJ: 2% danh mục cá nhân, giá vốn ~6x → thiệt hại chỉ ~0,4% tổng danh mục",
                "Danh mục 10 mã năm 2022: dù có Hòa Phát + Techcombank giảm sâu, tổng chỉ âm 9-10%",
                "Techcombank 2022: giảm từ 58 về 19,x (PB chạm 0,64 lần) — sau đó phục hồi có lãi"
              ]
            }
          ]
        },
        {
          "date": "2026-07-10",
          "dateShort": "10/07",
          "timeAgo": "2 tuần trước",
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
          "timeAgo": "3 tuần trước",
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
        }
      ],
      "sources": [
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "26/07/2026",
          "title": "Điều mấu chốt sẽ giúp TTCK trở lại | Lăng kính đầu tư giá trị",
          "meta": "Livestream công khai · AzFin Vietnam"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "24/07/2026",
          "title": "#06: Nhà đầu tư giá trị nên hành động gì trong giai đoạn này? | Trà Đá Brothers",
          "meta": "Video công khai · AzFin Vietnam"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "19/07/2026",
          "title": "Nên phân bổ bao nhiêu tài sản vào cổ phiếu | Lăng kính đầu tư giá trị",
          "meta": "Livestream công khai · AzFin Vietnam"
        },
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
          "date": "12/07/2026",
          "title": "Phân bổ quản trị danh mục trong đầu tư giá trị | Lăng kính đầu tư giá trị",
          "meta": "Livestream công khai · AzFin Vietnam"
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
          "date": "2026-07-28",
          "dateShort": "28/07",
          "timeAgo": "2 ngày trước",
          "tab": "Video · 28/07",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Chủ Tịch Đồng Loạt Đăng Ký Mua Cổ Phiếu — Đọc Tin Này Thế Nào?",
          "summary": "Loạt lãnh đạo doanh nghiệp đăng ký mua cổ phiếu công ty mình vừa được tổng hợp: ông Tô Hải (VCI) đăng ký mua 31 triệu cổ phiếu, một Phó TGĐ Khang Điền (người nhà Phó chủ tịch HĐQT) 20 triệu, ông Đạt (PDR) 20 triệu, cùng rất nhiều lệnh đăng ký cỡ vài trăm nghìn tới hơn 1 triệu cổ. Cách đọc của kênh rất trực quan: chủ tịch/tổng giám đốc là những người hiểu doanh nghiệp mình nhất — họ đồng loạt đăng ký mua nghĩa là cổ phiếu ĐÃ VỀ GIÁ TRỊ HỢP LÝ và họ tin vào khả năng tăng trưởng; cộng hưởng với phát biểu tuần trước của chủ tịch SSI rằng định giá đang hấp dẫn dài hạn. Kênh bác thuyết âm mưu \"dụ mua để úp bô\": ở vùng giá đã thấp thế này \"khố rách áo ôm với nhau rồi\", có úp bô giá cũng chẳng giảm thêm bao nhiêu và không ai được lợi — điều đáng cảnh giác là chiều ngược lại, khi người nhà lãnh đạo đăng ký mua ở VÙNG GIÁ CAO. Lưu ý kỹ thuật: đây là ĐĂNG KÝ chứ không chắc chắn khớp — đăng ký giá thấp không khớp được lệnh thì chỉ cần báo cáo lại UBCK, không sai luật (ví dụ VCI đang 19.7, đăng ký mua giá 14 thì khó khớp). Kết luận quan trọng nhất: đây là DỮ LIỆU THAM CHIẾU cộng thêm, KHÔNG phải dữ liệu tạo đáy — \"Đáy thì còn lâu. Thế nhưng mà các chủ tịch đã thấy hấp dẫn rồi. Mình cũng thấy hấp dẫn rồi.\" Vẫn là xu hướng giảm: mua phải rất cẩn trọng, chiến lược là mua để NẮM GIỮ được đến lúc hiệu quả, không phải để có lãi T+ hay tuần sau.",
          "feedChips": [
            {
              "label": "Chủ tịch ↑ đồng loạt đăng ký mua — cổ phiếu rẻ",
              "sig": "up"
            },
            {
              "label": "Đáy ⚠ \"còn lâu\" — chỉ là dữ liệu tham chiếu",
              "sig": "warn"
            },
            {
              "label": "VCI · KDH · PDR ◷ đăng ký chưa chắc khớp",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "Ý nghĩa",
              "value": "Cổ phiếu đã rẻ — người hiểu doanh nghiệp nhất xuống tiền",
              "signal": "up",
              "note": "Tô Hải (VCI) 31 triệu cp, Phó TGĐ Khang Điền 20 triệu, ông Đạt (PDR) 20 triệu… \"Nó hấp dẫn đủ để người ta đăng ký mua và sẽ nắm giữ trong dài hạn.\""
            },
            {
              "tag": "Nhưng",
              "value": "KHÔNG phải dữ liệu tạo đáy — \"đáy thì còn lâu\"",
              "signal": "warn",
              "note": "Chỉ là dữ liệu cộng thêm để tham chiếu khi xây chiến lược mua. Vẫn xu hướng giảm — mua làm sao nắm giữ được đến lúc hiệu quả, không phải mua để lãi T+ hay tháng sau."
            },
            {
              "tag": "Thuyết âm mưu",
              "value": "\"Úp bô\" ở vùng này vô nghĩa — lo khi họ mua ở vùng giá CAO",
              "signal": "wait",
              "note": "Giá đã thấp, đạp thêm không được bao nhiêu và chẳng giải quyết gì. Ngược lại mới đáng ngại: như trường hợp người nhà chủ tịch đăng ký mua ở vùng giá cao trước đây. Thị trường công bằng: họ mua vùng thấp thì phải cho họ bán vùng cao."
            }
          ],
          "sections": [
            {
              "title": "Danh sách đăng ký và cách đọc",
              "signal": "up",
              "sigLabel": "Tích cực",
              "para": "Các lệnh đăng ký thực ra rải rác từ mấy tuần, hôm nay mới được tổng hợp lại. Ai hiểu công ty nhất? Chính là chủ tịch HĐQT, tổng giám đốc, phó tổng — khi họ đồng loạt đăng ký mua cổ phiếu công ty mình thì đánh giá đơn giản: định giá đã đủ hấp dẫn để người ta xuống tiền và nắm giữ dài hạn. Tuần trước có chủ tịch SSI nói thị trường ở vùng định giá hấp dẫn dài hạn, tuần này có loạt cổ đông lớn và lãnh đạo mua vào — hai dữ kiện cùng chiều.",
              "bullets": [
                "Tô Hải (VCI): đăng ký mua 31 triệu cổ phiếu",
                "Phó TGĐ Khang Điền (người nhà Phó chủ tịch HĐQT): 20 triệu",
                "Ông Đạt (PDR): 20 triệu — và rất nhiều lệnh vài trăm nghìn tới hơn 1 triệu cp",
                "Đăng ký ≠ chắc chắn khớp: không khớp chỉ cần báo cáo lại UBCK, không sai luật"
              ]
            },
            {
              "title": "Hấp dẫn rồi — nhưng chưa phải đáy",
              "signal": "warn",
              "sigLabel": "Cẩn trọng",
              "para": "\"Nhắc lại đây là dữ liệu cộng thêm để tham chiếu mọi người nhá, chứ không phải là dữ liệu tạo đáy. Đáy thì còn lâu. Thế nhưng mà các chủ tịch đã thấy hấp dẫn rồi. Mình cũng thấy hấp dẫn rồi.\" Vẫn là xu hướng giảm nên mua phải rất cẩn trọng: đưa ra chiến lược để có thể NẮM GIỮ được cho đến lúc hiệu quả, chứ không phải chiến lược mua có lãi trong T+, tuần sau hay tháng sau — điều đó khó. Và thị trường phải công bằng: các lãnh đạo mua ở vùng thấp thì đến lúc giá lên phải chấp nhận họ bán ở vùng cao (như chủ tịch Hòa Phát từng nói thẳng).",
              "bullets": [
                "Dữ liệu tham chiếu để kết hợp với đánh giá thị trường của chính mình",
                "Vẫn xu hướng giảm — chiến lược mua để nắm giữ, không phải lãi T+",
                "Kết hợp tín hiệu: chủ tịch SSI (tuần trước) + loạt đăng ký mua (tuần này)"
              ]
            }
          ]
        },
        {
          "date": "2026-07-27",
          "dateShort": "27/07",
          "timeAgo": "3 ngày trước",
          "tab": "Video · 27/07",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Đầu Tư Trung–Dài Hạn Đang Lỗ Có Nên Bán? — \"Bán Lúc Này Là Chậm Rồi\"",
          "summary": "Trả lời dứt khoát câu hỏi nhận được nhiều nhất phiên 27/07 (phiên rất xấu, index về mức thấp tuần trước, tâm lý tiêu cực từ sáng dù chỉ giảm 1–2%): CHƯA phải lúc bán cổ phiếu trung–dài hạn, \"bán lúc này rủi ro hơn nắm giữ\" — chúng ta vẫn đang trong GIAI ĐOẠN MUA. Anh nhắc lại cả hệ thống đã áp dụng suốt nhịp giảm từ T9–10/2025 (khi midcap tạo đỉnh): không mua trên đỉnh, không mua trên đà giảm, chờ cổ phiếu dừng giảm + có chiết khấu + có nền giá nhỏ mới cân nhắc, mua từ tốn chia lệnh — \"chưa bao giờ hô một lệnh all-in nào\", và không dùng margin từ T10/2025 (\"khuyên 100 người như một\"). Thừa nhận thẳng: dù tiếp cận cẩn trọng như vậy thị trường vẫn giảm — \"nó là vấn đề của thị trường chung\". Về kỳ vọng: cuối năm về bờ thì \"nói thật mình cũng không tin tưởng lắm\"; sang năm có thể, sang năm nữa càng chắc chắn hơn — \"chuẩn bị tinh thần đồng hành trong thời gian rất dài\". Mã đang yếu hơn hẳn thị trường: Dabaco và IGC (IGC thủng đáy phiên 27/07), BCM \"trông cũng chán\" — đều là những mã anh đã cản mua thêm, mới vào 1–2 lệnh; chưa đảo hàng vì \"chưa nghĩ ra phương án nào tốt hơn\".",
          "feedChips": [
            {
              "label": "Bán ⚠ chậm rồi — rủi ro hơn giữ",
              "sig": "warn"
            },
            {
              "label": "Giai đoạn ↑ vẫn đang là lúc MUA",
              "sig": "up"
            },
            {
              "label": "Về bờ ◷ cuối năm khó, sang năm mới có cửa",
              "sig": "wait"
            },
            {
              "label": "DBC · IGC ↓ yếu hơn hẳn thị trường",
              "sig": "down"
            }
          ],
          "keyCalls": [
            {
              "tag": "Có nên bán?",
              "value": "Bán lúc này là CHẬM RỒI",
              "signal": "warn",
              "note": "Bán ở đây rủi ro hơn nắm giữ. Ai bán tuần trước mua lại tuần này thì lãi 5–7% — nhưng \"mình chưa bao giờ nhắm đầu tư trung dài hạn như vậy\". Vẫn đang trong giai đoạn MUA, không phải giai đoạn bán."
            },
            {
              "tag": "Kỳ vọng về bờ",
              "value": "Cuối năm khó — sang năm mới có cửa",
              "signal": "wait",
              "note": "\"Nếu anh em hỏi đến cuối năm có về được bờ không thì nói thật mình cũng không tin tưởng lắm đâu. Sang năm có thể, sang năm nữa càng lúc càng chắc chắn hơn.\" Chuẩn bị tinh thần đồng hành thời gian rất dài."
            },
            {
              "tag": "DBC · IGC · BCM",
              "value": "Yếu hơn hẳn thị trường — đừng mua thêm",
              "signal": "down",
              "note": "IGC thủng đáy phiên 27/07, Dabaco xấu hơn thị trường rất nhiều, BCM \"trông cũng chán\". Đây là các mã anh đã cố cản mọi người mua thêm; mới vào 1–2 lệnh. Chưa đảo hàng vì chưa có phương án tốt hơn."
            },
            {
              "tag": "Tự đánh giá",
              "value": "Cẩn trọng mà thị trường vẫn giảm",
              "signal": "wait",
              "note": "Thừa nhận thẳng: chọn doanh nghiệp tốt, mua giá hợp lý, chia lệnh, không margin — \"đến thời điểm hiện tại nó vẫn giảm các bạn ạ. Nó là vấn đề của thị trường chung.\""
            }
          ],
          "sections": [
            {
              "title": "Vì sao không bán ở đây",
              "signal": "warn",
              "sigLabel": "Kỷ luật — bán là chậm",
              "para": "Phiên 27/07 index chỉ về mức thấp của tuần trước nhưng tâm lý tiêu cực ngay từ sáng dù mới giảm 1–2%. Rất nhiều người hỏi có nên bán hàng trung–dài hạn để chờ mua lại rẻ hơn. Quan điểm rõ ràng: không.",
              "bullets": [
                "Bán ở vùng này rủi ro hơn nắm giữ — dù đúng là ai bán tuần trước và mua lại tuần này thì lãi thêm 5–7%.",
                "Đầu tư trung–dài hạn không phải chuyện chọn mã hay chọn giá, mà là cả một hệ thống áp dụng xuyên suốt mọi giai đoạn thị trường.",
                "Công sức kiểm soát margin và giữ sức mua từ đỉnh đến giờ \"cần được thể hiện\" — hiện không margin và vẫn còn sức mua (dù không nhiều).",
                "\"Đây không phải lúc sợ hãi. Đây là lúc kiểm soát tốt tài khoản để chờ cơ hội giải ngân. Ai sợ hãi thì xin mời bán hết và rời bỏ thị trường.\""
              ]
            },
            {
              "title": "Hệ thống đã chạy từ T9–10/2025",
              "signal": "up",
              "sigLabel": "Nhất quán — có thể kiểm chứng",
              "para": "Anh nhắc lại toàn bộ chuỗi quyết định để chứng minh tính nhất quán: từ khi midcap tạo đỉnh T9–10/2025, trong các livestream anh luôn trả lời KHÔNG có điểm mua trung–dài hạn, đặc biệt sau nhịp tăng rất mạnh T6–7/2025.",
              "bullets": [
                "Không mua trên đỉnh → không mua trên đà giảm → chờ dừng giảm, có chiết khấu hấp dẫn từ đỉnh và có nền giá nhỏ mới cân nhắc mua.",
                "Mua từ tốn, chia lệnh — \"chưa bao giờ hô bất kỳ lệnh nào mua all-in\".",
                "Không vẽ kỳ vọng thời điểm: \"chưa bao giờ nói mua thế này thì tháng 9 hay cuối năm sẽ tăng lại — bản thân mình cũng không biết\".",
                "Không margin từ T10/2025, ai đang dùng thì khuyên hạ — \"đố ai bóc phốt được mình vấn đề này\".",
                "Kim chỉ nam: doanh nghiệp tốt + kinh doanh ổn định + giá hợp lý + không margin. Giá hiện tại là \"hợp lý\", chưa tính là rẻ lắm."
              ]
            }
          ]
        },
        {
          "date": "2026-07-24",
          "dateShort": "24/07",
          "timeAgo": "6 ngày trước",
          "tab": "Video · 24/07",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Tuần \"Chủ Tịch Call\": Định Giá Rẻ Là Thật — Nhưng Chưa Mã Nào Tạo Đáy",
          "summary": "Tuần xấu với mọi kênh: chứng khoán −101 điểm (đóng tuần 1.686), vàng bị rủi ro kim cương lan sang, bất động sản \"chết thanh khoản, chết hẳn chứ không phải chết dọa\". Cửa duy nhất là chiều 23/07 khi chủ tịch SSI đăng đàn nói thị trường đang ở vùng định giá rẻ cho đầu tư giá trị — CK 5 phút ĐỒNG Ý và nhấn mạnh đây là \"chia sẻ quan điểm\", không phải bẫy: hầu hết người phân tích dòng chính thống đều thấy midcap đang ở vùng định giá rất thấp. Nhưng ngắn hạn vẫn do tâm lý và dòng tiền quyết định: phiên 23/07 có nỗ lực tạo đáy KHÔNG thành công, hôm nay −13 điểm chỉ là nến Harami chững đà giảm, CHƯA có tín hiệu đảo chiều, \"hầu hết tất cả cổ phiếu đều chưa có dấu hiệu tạo đáy\". 80% câu hỏi tuần này là \"có mua không\" — trả lời: đừng mua, đợi thêm tín hiệu; chỉ vài mã có nến nhấn chìm tăng chiều 23/07 là mua bắt đáy được nhưng tỉ lệ thành công thấp, mua ít + tuân thủ stop loss. Ai có nhiều tiền chờ mua dài hạn thì có thể giải ngân DẦN vào cổ phiếu cơ bản. Bán lúc này rủi ro hơn giữ: bán ở 1.686 thì phải kỳ vọng về 1.400 mới mua lại được — \"không ai dám tự tin khẳng định thị trường về 1.400\". Margin: chưa dùng tiền vay được, chỉ cần giật 2–3 phiên là cháy.",
          "feedChips": [
            {
              "label": "VN-Index ↓ −101 điểm, đóng 1.686",
              "sig": "down"
            },
            {
              "label": "Định giá ↑ rẻ thật — đồng ý với chủ tịch SSI",
              "sig": "up"
            },
            {
              "label": "Tín hiệu ◷ Harami, chưa mã nào tạo đáy",
              "sig": "wait"
            },
            {
              "label": "Bán ⚠ rủi ro hơn giữ",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "Định giá",
              "value": "Rẻ thật — nhưng ngắn hạn do tâm lý",
              "signal": "up",
              "note": "Đồng ý với chủ tịch SSI: giá trị thị trường nói chung và midcap nói riêng đang ở vùng định giá RẤT THẤP; có chiến lược mua phù hợp + nắm giữ được thì có lợi nhuận dài hạn. Nhưng ngắn hạn do tâm lý, dòng tiền và các yếu tố phụ \"không ai đánh giá được\"."
            },
            {
              "tag": "Tín hiệu",
              "value": "Harami chững đà giảm — chưa đảo chiều",
              "signal": "wait",
              "note": "Phiên 23/07 có nỗ lực tạo đáy nhưng KHÔNG thành công (nhiều mã bị cột đầu, không mã mạnh nào trần được). Hôm nay −13 điểm, nến Harami chỉ chững lại đà giảm. \"Hầu hết tất cả các cổ phiếu đều chưa có dấu hiệu tạo đáy.\""
            },
            {
              "tag": "Mua hay bán",
              "value": "Bán ở 1.686 rủi ro hơn giữ",
              "signal": "warn",
              "note": "Bán lúc này thì phải kỳ vọng thị trường về ~1.400 mới mua lại được — \"không ai dám tự tin khẳng định về 1.400\". Nếu không vay và không bán kịp lúc thủng 1.800 thì không cần cố bán. Thị trường vẫn có thể giảm thêm."
            },
            {
              "tag": "Cổ phiếu cơ bản",
              "value": "6 tiêu chí — giải ngân dần được",
              "signal": "up",
              "note": "Thanh khoản lớn; mô hình kinh doanh hiểu và đánh giá được; ngành có thể tăng trưởng; ban lãnh đạo liêm chính; cơ cấu quản trị ĐƠN GIẢN (nhìn thấy ai là chủ, quyền lực nằm ở đâu); dòng tiền dương từ hoạt động cốt lõi. Cộng thêm yếu tố rất quan trọng: ĐANG GIẢM GIÁ."
            }
          ],
          "sections": [
            {
              "title": "Hiểu đúng phát biểu của chủ tịch SSI",
              "signal": "up",
              "sigLabel": "Đồng thuận — không phải bẫy",
              "para": "Nhiều người hiểu phát biểu của chủ tịch SSI rất tiêu cực, \"nhìn chỗ nào cũng chỉ có bẫy, lúc nào cũng nghĩ thị trường phải đâm chém úp sọt\". CK 5 phút nhấn mạnh đây là chia sẻ quan điểm cá nhân của một trong những người có nhiều kinh nghiệm và số liệu nhất thị trường Việt Nam — theo hoặc không theo là lựa chọn của mỗi người, và chính anh cũng đồng ý.",
              "bullets": [
                "Không chỉ riêng anh — hầu hết người phân tích dòng chính thống đều thấy định giá thị trường và midcap đang ở vùng rất thấp.",
                "Bản chất phát biểu: chỉ ra sự MÂU THUẪN — giá cổ phiếu rất rẻ và đang bị bán xuống rẻ hơn, nhưng đó lại là cơ hội rất lớn.",
                "\"Anh em cứ để những khoản lỗ hiện tại che mờ tâm trí thì khổ lắm.\"",
                "Xác nhận call đầu tháng: BCTC quý 2 không tác động nhiều đến thị trường — tuần này giảm 101 điểm bất chấp mùa báo cáo, \"mọi người cũng chẳng quan tâm đến lý do giảm nữa\"."
              ]
            },
            {
              "title": "Cảnh báo quản trị & margin",
              "signal": "warn",
              "sigLabel": "Sàng lọc — nhìn ai là chủ",
              "para": "Trong 6 tiêu chí cổ phiếu cơ bản, tiêu chí \"cơ cấu quản trị đơn giản\" được nhấn mạnh bằng ví dụ thời sự: một doanh nghiệp vừa thay chủ tịch dưới 30 tuổi — hiểu ngay là con gái chủ tịch cũ, chỉ đại diện phần vốn đủ quyền chi phối. Doanh nghiệp phải lập chủ tịch đại diện như vậy thì cơ cấu quản trị không rõ ràng → anh không chọn.",
              "bullets": [
                "Đừng nghi ngờ phương pháp đầu tư dài hạn ở thời điểm này — \"đây là giai đoạn để mua, không phải giai đoạn để nghi ngờ\"; muốn nghi ngờ thì nghi ngờ lúc trên đỉnh mới đúng tư duy.",
                "Đầu tư quỹ cũng vậy: quỹ đang lỗ lòi ra nhưng phải mua đúng giai đoạn này thì khi thị trường hồi mới có lợi nhuận — bỏ mua đúng giai đoạn quan trọng nhất là \"công cốc\".",
                "Margin: chưa dùng tiền vay được, \"chỉ cần giật xuống hai ba phiên là cháy hết\". Rủi ro không chỉ là lãi suất cao mà là KHẢ NĂNG TRẢ NỢ suy giảm — công việc/tài sản tạo dòng tiền có thể thay đổi bất cứ lúc nào.",
                "Bán cổ phiếu rồi cũng không có kênh nào dễ hơn: vàng không biết mua thương hiệu hay tư nhân, bán lại có dễ không; bất động sản thanh khoản rất thấp mà giá vẫn vùng cao."
              ]
            }
          ]
        },
        {
          "date": "2026-07-22",
          "dateShort": "22/07",
          "timeAgo": "Tuần trước",
          "tab": "Video · 22/07",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Nhóm Vin Bắt Đầu Giảm — Thị Trường Dễ Thở Hơn? MWG Thủng Đáy",
          "summary": "Thị trường -60 điểm hôm nay hoàn toàn do Vin giảm. 3 gạch đầu dòng: (1) Nhóm Vin giảm là điều ĐÁNG MỪNG — nếu Vin giảm ~1 tuần thì điểm số cân bằng trở lại, giải tỏa việc index \"lệch pha\" với midcap; không mua hàng Vin lúc này (không có tín hiệu); giá vốn 180–200 thì bán được, giá vốn 50–100 thì chưa cần. (2) MWG (Thế giới di động) THỦNG ĐÁY 75 bằng cây sàn — là hàng cơ bản cuối cùng còn trụ giá cao nay đã gãy (sau HPG tuần trước, GMD hôm nay); ai giá vốn quanh 75–77 bán luôn không cần nghĩ — \"tập thói quen bán khi nó dễ\". (3) Các midcap khác đang cố dừng giảm — SSI, TCB, Hoa Sen, DPM/DCM đã chiết khấu nhiều, áp lực bán còn ít; SHS khá nhất nhưng chưa tạo tín hiệu. Vẫn khuyên bảo vệ sức mua, không mua trên đà giảm. \"Nhìn index không đánh giá được thị trường — điểm số điêu quá; đợi đến Trung thu may ra.\"",
          "feedChips": [
            {
              "label": "Nhóm Vin ↓ giảm là đáng mừng",
              "sig": "up"
            },
            {
              "label": "MWG ↓ thủng đáy — hàng cơ bản cuối cùng gãy",
              "sig": "down"
            },
            {
              "label": "Midcap ◷ cố dừng giảm, chưa có tín hiệu",
              "sig": "wait"
            },
            {
              "label": "Sức mua ⚠ bảo vệ, không mua đà giảm",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "Nhóm Vin",
              "value": "Giảm là đáng mừng — không mua",
              "signal": "up",
              "note": "Vin giảm ~1 tuần thì index cân bằng lại, hết \"lệch pha\" với midcap. Không mua VIC/VHM/VRE/VPL (không tín hiệu). Giá vốn 180–200 bán được; 50–100 chưa cần bán."
            },
            {
              "tag": "MWG",
              "value": "Thủng đáy 75 — bán ngay",
              "signal": "down",
              "note": "Hàng cơ bản cuối cùng còn trụ giá cao nay gãy bằng cây sàn (sau HPG tuần trước, GMD hôm nay). Giá vốn quanh 75–77 bán luôn — \"tập thói quen bán khi nó dễ\". Chứng tỏ thị trường đã về vùng giá tương đối thấp."
            },
            {
              "tag": "Chiến lược",
              "value": "Bảo vệ sức mua — không mua đà giảm",
              "signal": "warn",
              "note": "Nguyên tắc: không mua trên đà giảm, đợi tín hiệu đảo chiều đánh giá nền giá. \"Nhìn index không đánh giá được — điểm số điêu\"; kịch bản đẹp là Vin giảm tiếp + midcap cầm máu để index cân bằng."
            }
          ],
          "sections": [
            {
              "title": "Vì sao Vin giảm lại là tin tốt",
              "signal": "up",
              "sigLabel": "Cấu trúc — index hết lệch pha",
              "para": "Suốt giai đoạn vừa rồi một lý do lớn khiến nhà đầu tư mất phương hướng là Vin chi phối điểm số: index không giảm nhưng midcap giảm rất nhiều. Nếu nhóm Vin giảm một thời gian (~1 tuần), điểm số sẽ cân bằng trở lại và phản ánh đúng giá trị thị trường.",
              "bullets": [
                "Đồ thị VIC đã tạo đỉnh, mở \"ben\" đi xuống là bình thường sau thời gian tích lũy đỉnh.",
                "Không mua hàng Vin (VIC/VHM/VRE/VPL) — không có tín hiệu; giá vốn 180–200 bán được, giá vốn thấp 50–100 chưa cần.",
                "\"Nhìn index không đánh giá được thị trường — điểm số điêu quá; đợi đến Trung thu ăn bánh ngắm trăng xong may ra nhìn index đánh giá được.\""
              ]
            },
            {
              "title": "MWG gãy & midcap cố cầm máu",
              "signal": "wait",
              "sigLabel": "Đọc bảng — cơ bản cuối cùng đã giảm",
              "para": "MWG thủng đáy 75 bằng cây sàn — con cơ bản cuối cùng còn trụ giá cao nay đã gãy, sau HPG (tuần trước) và GMD (hôm nay). Các con khác (BCM, GVR, SSI, TCB) đã giảm từ lâu. Điều này cho thấy thị trường đã ở vùng giá tương đối thấp.",
              "bullets": [
                "Giá vốn quanh 75–77 (mới bắt đáy MWG) → bán luôn không cần nghĩ; giá vốn cao thì cân nhắc niềm tin.",
                "Midcap cơ bản (SSI, TCB, Hoa Sen, DPM/DCM) đã chiết khấu nhiều — áp lực bán còn ít, dòng tiền dài hạn có thể vào; SHS khá nhất (đóng ~15.7–15.8 thì có nến thiếu V) nhưng chưa đủ tín hiệu.",
                "Không bắt đáy MWG (mới bắt đầu giảm); không mua trên đà giảm bất kỳ mã nào — đợi tín hiệu đảo chiều."
              ]
            }
          ]
        },
        {
          "date": "2026-07-21",
          "dateShort": "21/07",
          "timeAgo": "Tuần trước",
          "tab": "Video · 21/07",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Hôm Nay Thị Trường Có Call Margin Chưa? Margin Cao Nhưng Không Căng",
          "summary": "Hôm nay 21/07 ĐÃ có call margin (vài lệnh nhảy bước giá bị khớp) nhưng không mã nào sàn cứng nên tỉ lệ côn không cao. Kết luận về margin: CAO nhưng KHÔNG CĂNG — dư nợ margin toàn thị trường tăng theo thời gian, nhưng CTCK đã tăng vốn mạnh (khả năng cho vay lớn hơn nhiều so với 2021), và một phần margin là cho vay ngoài (chủ doanh nghiệp cầm cố cổ phiếu). Sẽ có nhà đầu tư nhỏ lẻ bị côn nhưng là thiểu số — thị trường yếu từ T9–T10 năm ngoái, làm gì có cơ hội mà dùng nhiều margin. Quan điểm về margin: không sai với người HIỂU RÕ rủi ro và chủ động đặt cược; nhưng ai không hình dung được rủi ro thì đừng vay — mua tiền thịt, cổ phiếu cơ bản giảm chán rồi cũng tăng lại. Năm ngoái nhiều người cháy margin vì FPT (khi đó còn cơ bản); nhịp này khách hàng cầm SSI + HPG cũng bị côn — chứng tỏ vay quá liều. Nguyên tắc margin \"đè lên mọi nguyên tắc khác\": nếu dùng mà không chủ tâm đặt cược tăng giá thì hạ tỉ lệ ngay lập tức.",
          "feedChips": [
            {
              "label": "Margin ⚠ đã có call nhưng không sàn cứng",
              "sig": "warn"
            },
            {
              "label": "Dư nợ ↑ cao nhưng KHÔNG căng (CTCK tăng vốn)",
              "sig": "wait"
            },
            {
              "label": "Nguyên tắc ⚠ không chủ tâm cược thì hạ ngay",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "Trạng thái margin",
              "value": "Cao nhưng không căng",
              "signal": "wait",
              "note": "Dư nợ margin tăng theo thời gian nhưng CTCK đã tăng vốn mạnh (cho vay lớn hơn nhiều 2021); một phần cho vay ngoài (chủ DN cầm cố). Có côn nhưng nhỏ lẻ là thiểu số — thị trường yếu từ T9–T10/2025, ít cơ hội dùng margin."
            },
            {
              "tag": "Quan điểm margin",
              "value": "Không sai nếu hiểu rõ rủi ro",
              "signal": "wait",
              "note": "Margin là đặt cược — biết rủi ro và chấp nhận thì không sai. Nhưng ai không hình dung được rủi ro thì đừng vay: mua tiền thịt, cổ phiếu cơ bản giảm chán rồi cũng tăng lại; vay thì không đợi được đến lúc tăng."
            },
            {
              "tag": "Cảnh báo",
              "value": "Không chủ tâm cược → hạ tỉ lệ ngay",
              "signal": "warn",
              "note": "Nguyên tắc margin đè lên mọi nguyên tắc khác — không quan trọng đáy/đỉnh. Nhịp này khách cầm SSI/HPG (hàng cơ bản) cũng bị côn = vay quá liều. Năm ngoái cháy vì FPT."
            }
          ],
          "sections": [
            {
              "title": "Margin cao nhưng chưa căng",
              "signal": "wait",
              "sigLabel": "Chẩn đoán — khác 2021",
              "para": "Hôm nay đã xuất hiện call margin (lệnh nhảy bước giá bị khớp) nhưng không mã nào sàn cứng nên tỉ lệ côn thấp. Dư nợ margin toàn thị trường tăng, nhưng thanh khoản lại giảm mạnh — nghịch lý này giải thích bằng việc CTCK đã tăng vốn lớn và cho vay ngoài.",
              "bullets": [
                "CTCK tăng vốn mạnh → khả năng cho vay lớn hơn nhiều 2021 → hệ thống không căng như chu kỳ trước.",
                "Một phần margin cho vay ngoài (chủ doanh nghiệp cầm cố cổ phiếu) — thường ít rủi ro hơn (họ nạp thêm gồng được).",
                "Nhỏ lẻ bị côn là thiểu số; đa phần thị trường yếu từ T9–T10/2025, ít cơ hội dùng nhiều margin."
              ]
            },
            {
              "title": "Margin không sai — nhưng phải hiểu rủi ro",
              "signal": "warn",
              "sigLabel": "Kỷ luật — đặt cược có ý thức",
              "para": "Không chê tư duy dùng margin nếu người vay hình dung được rủi ro và chủ động đặt cược (đúng thì đạt mục tiêu, sai thì mất tiền — không có chuyện \"đúng ăn nhiều, sai không mất\"). Chỉ chê người vay mà không thấy rủi ro.",
              "bullets": [
                "Ai mới đầu tư / không xác định \"tất tay\" vào kèo thì đừng vay — mua tiền thịt.",
                "Hàng game (dầu) tăng mạnh nhưng điều chỉnh rất kinh; hàng \"cơ bản\" như FPT (năm ngoái), SSI/HPG (nhịp này) vay quá liều vẫn cháy.",
                "Nguyên tắc bao trùm: nếu đang dùng margin mà không chủ tâm đặt cược tăng giá → hạ tỉ lệ xuống ngay lập tức, thời điểm nào cũng nên hạ."
              ]
            }
          ]
        },
        {
          "date": "2026-07-20",
          "dateShort": "20/07",
          "timeAgo": "Tuần trước",
          "tab": "Video · 20/07",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Chiến Lược Cho 2 Nhóm: \"Bị Call Margin\" & \"Không Vay\" Khi Thị Trường Sàn",
          "summary": "Phiên 20/07 giảm sàn la liệt — không cần tìm lý do: có người bán (bị côn margin, ngắn hạn chán, dài hạn \"quay xe\") mà không ai mua. Hỗ trợ quan trọng 1.800 đã thủng, đóng dưới 1.800 → có thể về bất cứ mức nào tùy áp lực bán nhóm Vin. Không đoán đáy. HAI chiến lược rạch ròi: (1) Nhóm BỊ CÔN MARGIN / tỉ lệ vay cao (dưới 0.5): phải BÁN — không còn cách khác, margin không tha; đừng để for-sale (cháy tài khoản). Ai vốn nhỏ mới đầu tư có thể bán hết; ai đã gồng lâu thì bán từng phần đưa tỉ lệ về ~0.4, giảm thêm nếu thị trường giảm tiếp — đây là \"thoi thóp chờ hồi\", không phải tìm lợi nhuận. (2) Nhóm KHÔNG VAY đang cầm hàng cơ bản lỗ 15–20%: KHÔNG bán bằng mọi giá — vùng giá đã hấp dẫn dài hạn, nếu mua dài hạn thì đây là lúc mua thêm NHƯNG đừng mua ngay/bắt giá sàn/săn hàng bị côn (đều rất tệ); giữ sức mua, đợi thị trường tạo đáy rõ ràng (tăng mạnh + thanh khoản vào) hoặc có nền giá đủ mạnh. \"Còn sức mua đến giờ là đang đúng — đừng biến cái đúng thành sai bằng phương pháp mua sai.\"",
          "feedChips": [
            {
              "label": "VN-Index ↓ thủng 1.800, giảm sàn la liệt",
              "sig": "down"
            },
            {
              "label": "Bị margin ⚠ phải bán về ~0.4, đừng để for-sale",
              "sig": "warn"
            },
            {
              "label": "Không vay ◷ giữ sức mua, đừng bắt đáy",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "Thị trường",
              "value": "Thủng 1.800 — không đoán đáy",
              "signal": "down",
              "note": "Giảm sàn do người bán (côn margin, chán) mà không ai mua; quỹ ưu tiên an toàn vốn, không bắt đáy bừa. Đóng dưới 1.800 có thể về bất cứ mức nào tùy áp lực bán Vin. Mốc 1.700 \"không nhiều ý nghĩa\"."
            },
            {
              "tag": "Nhóm bị margin",
              "value": "Bán chủ động về ~0.4 — đừng để for-sale",
              "signal": "warn",
              "note": "Margin không tha; for-sale bán giá sàn = cháy tài khoản. Vốn nhỏ mới đầu tư có thể bán hết; đã gồng lâu thì bán từng phần, giảm thêm nếu thị trường giảm tiếp. Đây là thoi thóp chờ hồi, không phải kiếm lời — \"bị côn thì không có quyền kỳ vọng đáy\"."
            },
            {
              "tag": "Nhóm không vay",
              "value": "Giữ sức mua — đừng bắt đáy bất chấp",
              "signal": "wait",
              "note": "Cầm cơ bản lỗ 15–20%: không bán bằng mọi giá (vùng hấp dẫn dài hạn) nhưng cũng đừng mua ngay/bắt giá sàn/săn hàng bị côn (đều tệ). Đợi đáy rõ ràng (tăng mạnh + thanh khoản) hoặc nền giá đủ mạnh. \"Còn sức mua là đang đúng.\""
            }
          ],
          "sections": [
            {
              "title": "Nhóm 1 — đang bị/sắp bị call margin",
              "signal": "warn",
              "sigLabel": "Bắt buộc — bán, đừng để cháy",
              "para": "Chỉ cần giảm thêm 1–2 phiên là nhóm tỉ lệ 0.5 bị côn; ai đang bị côn thì mai bị for-sale. Không có cách nào khác ngoài bán. Bán ở đây cũng rủi ro (nhiều midcap đã thủng đáy thuế quan) nhưng margin không tha.",
              "bullets": [
                "CTCK không muốn for-sale (khách hết sạch tiền) — nhưng để bị for thì bán giá sàn, trừ nợ vay xong tài khoản gần như không còn gì = cháy.",
                "Vốn nhỏ mới đầu tư: có thể bán hết. Đã gồng margin lâu: bán từng phần đưa tỉ lệ về ~0.4, giảm nữa nếu thị trường giảm tiếp.",
                "Cầm margin tốn 14–15%/năm lãi + mỗi lần biến động bị ép bán; về giá vốn cũ có thể mất 1–2 năm. Đây là phương án sống sót, không phải tìm lợi nhuận."
              ]
            },
            {
              "title": "Nhóm 2 — không vay, cầm cơ bản lỗ",
              "signal": "wait",
              "sigLabel": "Kiên nhẫn — sức mua là vũ khí",
              "para": "Không dùng margin và còn giữ sức mua đến giờ là đang ĐÚNG với thị trường. Cầm cơ bản lỗ 15–20% thì không bán bằng mọi giá vì vùng giá đã hấp dẫn dài hạn — nhưng đừng biến cái đúng thành sai bằng phương pháp mua sai.",
              "bullets": [
                "Nếu đầu tư dài hạn thì đây là lúc mua THÊM — nhưng đừng mua ngay bây giờ, đừng bắt giá sàn / nhồi cây sàn / săn hàng bị côn margin (tất cả đều rất tệ).",
                "Đợi thị trường tạo đáy RÕ RÀNG: tăng mạnh + thanh khoản vào mạnh; hoặc ít nhất có nền giá đủ mạnh. \"Cỏ lúa như nhau, đồng thau lẫn lộn\" — tốt xấu đang giảm giống nhau.",
                "Còn sức mua là rất quý — bảo vệ nó; kể cả bắt đáy đúng cũng không giữ được hàng nếu chưa có nền."
              ]
            }
          ]
        },
        {
          "date": "2026-07-17",
          "dateShort": "17/07",
          "timeAgo": "Tuần trước",
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
        }
      ],
      "sources": [
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "28/07/2026",
          "title": "Đánh giá tin tức các chủ tịch công ty đăng ký mua cổ phiếu của mình thế nào?",
          "meta": "Video công khai · Chứng khoán 5 phút"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "27/07/2026",
          "title": "Đầu tư Trung - Dài hạn đang lỗ lúc này thì có nên bán không?",
          "meta": "Video công khai · Chứng khoán 5 phút"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "24/07/2026",
          "title": "Nhận định tuần \"chủ tịch call\". Chọn cổ phiếu nào để hưởng ứng?",
          "meta": "Video công khai · Chứng khoán 5 phút"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "22/07/2026",
          "title": "Nhóm V bắt đầu giảm làm thị trường dễ thở? 3 đánh giá thị trường",
          "meta": "Video công khai · Chứng khoán 5 phút"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "21/07/2026",
          "title": "Hôm nay thị trường đang có call Margin chưa? Margin lúc nào dùng được?",
          "meta": "Video công khai · Chứng khoán 5 phút"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "20/07/2026",
          "title": "Chiến lược xử lý cho 2 nhóm nhà đầu tư \"Bị call Margin\" và \"Không vay\"",
          "meta": "Video công khai · Chứng khoán 5 phút"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "17/07/2026",
          "title": "Thị trường đã vào downtrend chưa? Tại sao lúc này bán cổ phiếu cũng là rủi ro",
          "meta": "Video công khai · Chứng khoán 5 phút"
        }
      ]
    }
  },
  "weekly": {
    "dateRange": "20–30/07/2026",
    "action": "Tuần −101 điểm, VN-Index đóng 1.686 — nhưng tuần đầu tiên cả 3 chuyên gia CÙNG nói định giá đã rẻ thật. Thái Phạm (Tập 40) lần đầu đưa lịch trình: đáy tháng 8–9 (khi Fed tăng lãi, xác suất 82%), hồi phục cuối năm, sóng 10–20%; tuần 30 vẫn tiền 60/cổ 40, đợi VN-Index 1.600 mới giải ngân; điểm mới: bank VCB/BID rẻ hơn cả đáy T4/2025. AzFin (#06) đo bằng số: P/E ~12x, loại Vin ~10x = chỉ 6% thời gian lịch sử — nhặt dần 6 nhóm ngành, tỉ trọng cổ phiếu 90% danh mục tài chính. CK 5 phút đồng ý với chủ tịch SSI rằng định giá rẻ, nhưng nến Harami chỉ chững đà giảm, chưa mã nào tạo đáy — bán ở 1.686 rủi ro hơn giữ. Cập nhật 27/07 (CK 5 phút, sau phiên rất xấu): \"bán lúc này là CHẬM RỒI, rủi ro hơn nắm giữ\" — vẫn đang trong giai đoạn MUA; nhưng hạ kỳ vọng thời gian: cuối năm khó về bờ, sang năm mới có cửa. Cả 3: TUYỆT ĐỐI không margin. Cập nhật 30/07 (sau FOMC 29/07): Fed giữ nguyên 3,5–3,75% đúng kịch bản Tập 40 (vote 9–3, ba phiếu đòi tăng ngay) — nhưng chứng khoán Mỹ vẫn có phiên giảm mạnh nhất từ T4/2025 (Dow −1.100 điểm) vì lợi suất trái phiếu 30 năm vọt 5,2%: thị trường hết tin Fed kiểm soát được lạm phát, xác suất tăng lãi T9 lên 72%. Thái Phạm: vàng chỉ hồi kỹ thuật (~4.300) rồi vẫn còn cửa về 3.000; \"2026 không phải năm của Bitcoin\". CK 5 phút (28/07): loạt chủ tịch VCI · KDH · PDR đăng ký mua cổ phiếu — định giá đã hấp dẫn, nhưng \"đáy thì còn lâu\".",
    "consensus": [
      {
        "label": "Định giá đã rẻ thật — lần đầu cả 3 đồng thuận bằng số",
        "detail": "AzFin: P/E ~12x, loại Vin ~10x = chỉ 6% thời gian giao dịch lịch sử ở mức này, P/B rất thấp. CK 5 phút: đồng ý với chủ tịch SSI, midcap ở vùng định giá rất thấp, \"đây là giai đoạn để mua, không phải giai đoạn để nghi ngờ\". Thái Phạm: \"cổ phiếu rẻ lắm luôn, một số rất rẻ\" — bank VCB/BID rẻ hơn cả đáy T4/2025."
      },
      {
        "label": "Nhưng CHƯA có tín hiệu đáy — kiên nhẫn thêm",
        "detail": "CK 5 phút: phiên 23/07 nỗ lực tạo đáy thất bại, nến Harami chỉ chững đà giảm, \"hầu hết tất cả cổ phiếu chưa có dấu hiệu tạo đáy\". Thái Phạm: đợi VN-Index về 1.600, dự báo đáy tháng 8–9 khi Fed tăng lãi. AzFin: nhặt DẦN, kỳ vọng hiệu quả sau 6 tháng–2 năm."
      },
      {
        "label": "Không margin — rủi ro nằm ở khả năng trả nợ",
        "detail": "CK 5 phút: \"chỉ cần giật xuống 2–3 phiên là cháy hết\"; rủi ro không chỉ lãi cao mà là dòng tiền/công việc có thể đứt gãy. AzFin: margin kỷ lục 435.000 tỷ chủ yếu là chủ doanh nghiệp cầm cố — khi họ bị call thì cung lại tăng. Thái Phạm: giữ tiền 60% là chiến lược."
      },
      {
        "label": "Khối ngoại bán ròng có hạn chót: tháng 9",
        "detail": "AzFin: sở hữu ngoại còn 12,6% (đáy 10 năm) — quỹ rổ CẬN BIÊN phải thanh lý VN trước khi nâng hạng lên mới nổi tháng 9, quỹ rổ mới nổi chỉ giải ngân TỪ tháng 9. Trùng khung thời gian \"đáy tháng 8–9\" của Thái Phạm."
      },
      {
        "label": "Tránh nhóm dính pháp lý/quản trị mờ",
        "detail": "Thái Phạm: PNJ (giải cứu xong sẽ sàn thêm như Novaland), FPT, HPG, MWG, MSB chốt lời. CK 5 phút thêm tiêu chí: cơ cấu quản trị phải ĐƠN GIẢN — doanh nghiệp lập chủ tịch đại diện dưới 30 tuổi là dấu hiệu quản trị không rõ ràng. AzFin: đa dạng hóa vì thiên nga đen PNJ, PC1."
      }
    ],
    "divergence": [
      {
        "label": "Tỉ trọng cổ phiếu: 40% hay 90%?",
        "detail": "Thái Phạm giữ tiền 60 / cổ 40, chỉ giải ngân khi VN-Index về 1.600 (đáy dự kiến T8–9). AzFin ngược lại: tỉ trọng cổ phiếu ~90% DANH MỤC TÀI CHÍNH và đang nhặt dần ngay — nhưng lưu ý danh mục tài chính chỉ nên là 20–30% tổng tài sản, nên quy ra tổng tài sản thì hai bên gần nhau hơn vẻ ngoài."
      },
      {
        "label": "Ngân hàng: mua hay chọn lọc?",
        "detail": "AzFin: bank là 1 trong 6 nhóm nhặt dần, có mã P/E chưa đến 6x, ngân hàng quốc doanh nay cũng hấp dẫn. Thái Phạm chọn lọc gắt hơn: chỉ VCB/BID (rẻ hơn đáy T4/2025), TCB đợi 22, còn VPB/MB \"được ít chết nhiều\", LPB/ACB giữ giá cao \"chẳng ai dám vào\"."
      },
      {
        "label": "Bao giờ về bờ?",
        "detail": "Thái Phạm (Tập 40): đáy T8–9 rồi hồi phục khá vào CUỐI NĂM, sóng 10–20%. CK 5 phút (27/07) thận trọng hơn hẳn: \"cuối năm về bờ thì nói thật mình cũng không tin tưởng lắm đâu — sang năm có thể, sang năm nữa càng chắc chắn hơn\"."
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
      "note": "Tập 40: Fed tăng lãi giờ xác suất 82% — điều kiện của call đang tiến gần; vàng trong nước đã về 140 triệu/lượng, chênh ~19 triệu."
    },
    {
      "expert": "thai-pham",
      "date": "04/07",
      "asset": "CK Mỹ",
      "call": "SpaceX về 100–110 trong ~6 tháng",
      "result": "pending",
      "note": "Tập 39: đang lãi 26%; hạ đích về 50–60 (nhân viên nội bộ + quỹ là người bán khống lớn nhất khi giải lock-up). Giữ 76.000đ, không bổ sung."
    },
    {
      "expert": "thai-pham",
      "date": "04/07",
      "asset": "CK Mỹ",
      "call": "Apple điều chỉnh — short 325–330",
      "result": "pending",
      "note": "Tập 39: short Apple đã hoàn vốn; giữ chờ BCTC 30/07."
    },
    {
      "expert": "thai-pham",
      "date": "09/07",
      "asset": "Dầu",
      "call": "Dầu có thể lên 87–90 nếu leo thang",
      "result": "hit",
      "note": "HIT: dầu đã leo lên 88–98 (Tập 39, 23/07) đúng kịch bản leo thang Iran — vượt mốc 87–90. Dự trữ Mỹ còn ~6 tuần, xăng 4$/gallon cao nhất lịch sử."
    },
    {
      "expert": "thai-pham",
      "date": "11/07",
      "asset": "CK Việt",
      "call": "VN-Index về ~1.600 trong 6 tháng (xác suất 78%)",
      "result": "pending",
      "note": "Tập 40 (26/07): VN-Index đóng tuần 1.686 — còn ~5% nữa tới vùng 1.600 ông đặt làm mốc giải ngân. Dự báo tạo đáy tháng 8–9 khi Fed tăng lãi."
    },
    {
      "expert": "thai-pham",
      "date": "18/07",
      "asset": "Dầu",
      "call": "Long dầu — mục tiêu US 88–90 (UK 95–96 nếu leo thang), cắt lỗ 78",
      "result": "hit",
      "note": "HIT: dầu chạm 88–98 (Tập 39). Long từ vùng thấp đã đạt mục tiêu US 88–90; giữ, \"100 không thể là đáy\"."
    },
    {
      "expert": "thai-pham",
      "date": "18/07",
      "asset": "Vàng",
      "call": "Vàng quét xuống 3.600–3.700 là vùng bắt đáy; hồi kỹ thuật khó về 4.100",
      "result": "pending",
      "note": "Phần \"bắt đáy 3.600–3.700\" còn theo dõi: Tập 40 giữ quan điểm vàng còn năng lượng về vùng đó, ngắn hạn có thể quét 3.890–3.900; cá nhân vẫn LONG 4.030 cắt lỗ 3.930. (Phần \"khó về 4.100\" đã sai — xem dòng riêng.)"
    },
    {
      "expert": "thai-pham",
      "date": "18/07",
      "asset": "Bitcoin",
      "call": "Short BTC nếu fake pump 69–70k; chỉ mua lại ở ~50k",
      "result": "pending",
      "note": "Cập nhật 24–26/07: BTC 65.000, \"banana\" lần ba từ 57.800 dự kiến kết thúc 71.000–72.000 (thay cho mốc 69–70k); nhịp tăng hiện tại chỉ do đóng lệnh short — T6 tổ chức rút ròng 4,5 tỷ đô (BlackRock 3,56 tỷ). Vùng mua lại hạ xuống 40.000–41.000."
    },
    {
      "expert": "thai-pham",
      "date": "18/07",
      "asset": "CK Mỹ",
      "call": "US30/S&P 500 vào vùng short — Mỹ chỉ hồi vài ngày rồi giảm tiếp",
      "result": "hit",
      "note": "Chốt 30/07: sau FOMC 29/07 chứng khoán Mỹ có phiên giảm mạnh nhất từ T4/2025 (Dow −1.100đ, Nasdaq ~−2%); Nasdaq rơi từ đỉnh ~30.600 đầu T6 về 27.000 — tự thuật: \"đúng như cái mà chúng ta đã chia sẻ\"."
    },
    {
      "expert": "thai-pham",
      "date": "18/07",
      "asset": "Nhật & Hàn",
      "call": "Samsung gãy về 214.000 KRW đầu tuần, cực đoan 170.000 mới hồi",
      "result": "pending",
      "note": "Đang đúng hướng: Samsung đã −30–32% từ đỉnh, Kospi −31% (từng +85% từ T3), phiên 24/07 Samsung −8% và Kospi −5,13%. Mục tiêu điều chỉnh còn 200.000 → 170.000 KRW; chưa chạm nên chưa chốt."
    },
    {
      "expert": "thai-pham",
      "date": "23/07",
      "asset": "CK Việt",
      "call": "Chưa bắt đáy — chờ VN-Index về 1.500 (test 1.500–1.600) mới giải ngân",
      "result": "pending",
      "note": "Tập 40 (26/07) điều chỉnh mốc: \"đợi về 1.600 hẵng giải ngân\" (test lại vùng ~1.500 là bụng đám mây). Tuần 30 vẫn giữ tiền 60/cổ 40."
    },
    {
      "expert": "thai-pham",
      "date": "23/07",
      "asset": "PNJ",
      "call": "PNJ có thể về dưới 9 như Novaland",
      "result": "pending",
      "note": "Tập 40: đã có \"cú giải cứu\" tóm giá sàn cuối tuần nhưng ông không đụng — kinh nghiệm tóm sàn: sau đó sẽ đánh sàn thêm vài phiên giống Novaland."
    },
    {
      "expert": "thai-pham",
      "date": "23/07",
      "asset": "CK Việt",
      "call": "Tránh HPG — Vin Group làm thép sẽ cạnh tranh, khó thắng thầu",
      "result": "pending",
      "note": "Tập 40 nhấn lại: Vin Steel sẽ \"cương vũng\" toàn bộ dự án đường sắt/xây dựng của Vin → HPG rất khó bán hàng những năm tới. \"Đừng có động vào.\""
    },
    {
      "expert": "thai-pham",
      "date": "26/07",
      "asset": "Dầu",
      "call": "Dầu WTI về 95 / UK về 100 (call từ tuần 28)",
      "result": "hit",
      "note": "HIT: dầu UK đã chạm ~100, WTI theo sát — chính ông thừa nhận \"lên hơn cả mức tưởng tượng\" (ông vẽ 90). Căn cứ: tồn kho toàn cầu −1,3 tỷ thùng/5 tháng, SPR Mỹ còn ~4 tuần."
    },
    {
      "expert": "thai-pham",
      "date": "26/07",
      "asset": "CK Việt",
      "call": "Thị trường tạo đáy tháng 8–9 (khi Fed tăng lãi), hồi phục cuối năm — sóng 10–20%",
      "result": "pending",
      "note": "CK 5 phút (27/07) thận trọng hơn về thời gian: cuối năm về bờ \"không tin tưởng lắm\", sang năm mới có cửa — lệch với kỳ vọng hồi phục cuối năm của Thái Phạm."
    },
    {
      "expert": "thai-pham",
      "date": "26/07",
      "asset": "Vĩ mô",
      "call": "Fed tăng lãi tháng 9 — xác suất 82% (họp 29/07 chỉ 38%, diều hâu nhưng chưa tăng)",
      "result": "pending",
      "note": "Theo Polymarket; thị trường còn cược thêm một đợt T11–T12 nếu dầu giữ cao. ECB và BoE cũng để ngỏ tăng T9. Cập nhật 30/07: vế 29/07 ĐÚNG — Fed giữ nguyên 3,5–3,75%, vote 9–3 (ba phiếu đòi tăng ngay 0,25%); xác suất T9 trên thị trường cá cược lên 72%. Chờ kỳ họp tháng 9 để chốt."
    },
    {
      "expert": "thai-pham",
      "date": "18/07",
      "asset": "Vàng",
      "call": "Hồi kỹ thuật khó vượt 4.100",
      "result": "miss",
      "note": "MISS: vàng đã hồi lên 4.166 (vượt 4.100). Chính ông xác nhận trong video 24/07: kịch bản review về 4.200 nhưng \"chỉ về được khoảng 4.166 đô thôi\" rồi quay đầu."
    },
    {
      "expert": "thai-pham",
      "date": "26/07",
      "asset": "CK Việt",
      "call": "FPT tạo đỉnh vùng 150 (sau chia tách 127) — không bắt đáy",
      "result": "hit",
      "note": "HIT: FPT đã chia hai từ đỉnh, chuỗi dò đáy thất bại 95 → 74 → 62; khối ngoại bán liên tục về 26,95%. \"Càng bắt đáy càng xuống sâu.\""
    },
    {
      "expert": "thai-pham",
      "date": "26/07",
      "asset": "CK Mỹ",
      "call": "Intel là \"juicing\" — doanh thu AI Foundry là tay trái bán tay phải, sẽ gãy từ đỉnh 130–141",
      "result": "hit",
      "note": "HIT: Intel đã −35–40% từ đỉnh; phiên thứ Sáu giảm gần 8% dù KQKD Q2 vượt kỳ vọng (mở tăng 11% after-hours rồi xìu). Mục tiêu tiếp theo: lấp gap vùng 70."
    },
    {
      "expert": "thai-pham",
      "date": "26/07",
      "asset": "CK Mỹ",
      "call": "Google về 270 trong tháng 9 — FCF âm 5,9 tỷ đô lần đầu lịch sử",
      "result": "pending",
      "note": "Capex AI 205 tỷ đô năm 2026 và còn tăng 2027; đã phát hành 84,75 tỷ cổ phiếu + 20,3 tỷ trái phiếu; lợi nhuận kỷ lục chủ yếu từ 77,1 tỷ lãi CHƯA thực hiện của khoản đầu tư SpaceX. Đã giảm 20% từ vùng ~400."
    },
    {
      "expert": "thai-pham",
      "date": "26/07",
      "asset": "CK Mỹ",
      "call": "SpaceX về 60–70 từ giờ đến đầu năm sau",
      "result": "pending",
      "note": "Insider đã rút ~110 tỷ đô tiền thật (85 tỷ cổ phiếu + 25 tỷ trái phiếu); lock-up cuối năm tung cung gấp 8 lần."
    },
    {
      "expert": "thai-pham",
      "date": "26/07",
      "asset": "Dầu",
      "call": "Trump đánh lớn Iran → dầu vọt 120–130; không có tin → tích lũy ~92",
      "result": "pending",
      "note": "Không đánh giá cao kịch bản đàm phán hòa bình: Iran gây sức ép tới bầu cử giữa nhiệm kỳ T11."
    },
    {
      "expert": "thai-pham",
      "date": "26/07",
      "asset": "CK Việt",
      "call": "VCB & BID rẻ hơn cả đáy tháng 4/2025 — bank là nhóm rẻ hiếm có",
      "result": "pending",
      "note": "CTG rẻ nhưng chưa bằng; TCB đợi về 22; VPB/MB \"được ít chết nhiều\" không mua."
    },
    {
      "expert": "thai-pham",
      "date": "30/07",
      "asset": "Vàng",
      "call": "Hồi kỹ thuật từ 3.980–4.000 lên ~4.300, sau đó vẫn còn cửa về ~3.000",
      "result": "pending",
      "note": "Video công khai sáng 30/07 sau FOMC — tái khẳng định kịch bản vàng giảm sâu nếu Fed tăng lãi."
    },
    {
      "expert": "thai-pham",
      "date": "30/07",
      "asset": "Tỷ giá",
      "call": "USD tiếp tục hồi phục — JPY, KRW, đô Đài Loan mất giá thêm",
      "result": "pending",
      "note": "Đi cùng lợi suất trái phiếu Mỹ: 30 năm 5,2% (đỉnh từ 2007), 10 năm 4,687%."
    },
    {
      "expert": "thai-pham",
      "date": "30/07",
      "asset": "CK Mỹ",
      "call": "Nhóm phòng thủ/y tế/Apple đang hút tiền rồi cũng sẽ điều chỉnh — biến động xấu kéo dài tới kỳ họp T9–T10",
      "result": "pending",
      "note": "Nasdaq đã về 27.000 từ đỉnh ~30.600; dòng tiền xoay vòng chỉ là \"sự lòng vòng\" trước đợt chỉnh sau."
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
      "note": "AzFin #06 (24/07): định giá đã xác nhận RẺ HƠN dự báo — P/E thị trường ~12x, loại Vin ~10x = chỉ 6% thời gian giao dịch trong lịch sử. NHƯNG giá vẫn giảm tiếp (tuần 20–24/07 −101 điểm) → luận điểm \"cơ hội tích lũy\" chưa được thị trường trả giá."
    },
    {
      "expert": "azfin",
      "date": "10/07",
      "asset": "CK Việt",
      "call": "KQKD Q2 tăng >20%; bank lớn +30–50%",
      "result": "pending",
      "note": "AzFin #06: KQKD toàn bộ doanh nghiệp đã ra, P/E thị trường giảm từ ~13,3 xuống ~12 lần; bán lẻ tăng trưởng mạnh 6–7 tháng. Chưa có số tổng hợp để chốt mức >20%."
    },
    {
      "expert": "azfin",
      "date": "24/07",
      "asset": "CK Việt",
      "call": "P/E thị trường ~12x, loại Vin ~10x — chỉ 6% thời gian giao dịch lịch sử ở mức này",
      "result": "pending",
      "note": "Đo sau khi có KQKD toàn bộ doanh nghiệp hết tháng 7; P/B cũng rất thấp."
    },
    {
      "expert": "azfin",
      "date": "24/07",
      "asset": "CK Việt",
      "call": "Sáu nhóm nhặt dần: VLXD, chứng khoán (P/B~1, P/E<10), bank (có mã P/E<6x), bán lẻ, điện (nhiệt+tái tạo), BĐS KCN",
      "result": "pending",
      "note": "Tỉ trọng cổ phiếu ~90% danh mục tài chính; tránh thủy điện vì El Niño."
    },
    {
      "expert": "azfin",
      "date": "24/07",
      "asset": "CK Việt",
      "call": "Khối ngoại bán do quỹ cận biên thanh lý trước nâng hạng — quỹ mới nổi chỉ giải ngân từ tháng 9",
      "result": "pending",
      "note": "Sở hữu nước ngoài còn 12,6% (đáy 10 năm, đỉnh từng 30%)."
    },
    {
      "expert": "azfin",
      "date": "12/07",
      "asset": "CK Việt",
      "call": "Doanh nghiệp đầu ngành tăng trưởng mạnh hơn doanh nghiệp nhỏ (VN30 > HNX)",
      "result": "pending",
      "note": "Livestream Lăng kính đầu tư giá trị — luận điểm nền tảng chiến lược phân bổ danh mục."
    },
    {
      "expert": "azfin",
      "date": "19/07",
      "asset": "CTG",
      "call": "CTG rẻ hiếm có — PE 6,52 lần, vị thế ngang hoặc hơn BIDV",
      "result": "pending",
      "note": "PB chưa cập nhật KQKD Q2, dự kiến còn thấp hơn khi cập nhật."
    },
    {
      "expert": "azfin",
      "date": "26/07",
      "asset": "CK Việt",
      "call": "Hai yếu tố mấu chốt để TT trở lại: lãi suất tạo đỉnh + khối ngoại giảm bán ròng (hết Q3, quỹ cận biên tái cơ cấu xong)",
      "result": "pending",
      "note": "Sở hữu ngoại còn 12,6% — thấp nhất 10+ năm, phần lớn là nhà đầu tư chiến lược không bán."
    },
    {
      "expert": "azfin",
      "date": "26/07",
      "asset": "CK Việt",
      "call": "Ngành mạnh nhất khi TT hồi phục: chứng khoán trước, ngân hàng sau",
      "result": "pending",
      "note": "\"Khi thị trường trở lại mấy cổ phiếu bank chứng sẽ tăng điên đảo luôn\" — đang tăng tỉ trọng nhóm chứng khoán đón đầu."
    },
    {
      "expert": "azfin",
      "date": "26/07",
      "asset": "NT2",
      "call": "NT2 EPS dự kiến 300–400 năm nay nhờ thiếu cung điện",
      "result": "pending",
      "note": "Ngắn hạn thuận lợi trong ~1 năm nhờ tiêu thụ điện lớn trong khi cung còn thiếu."
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
      "result": "hit",
      "note": "HIT: thị trường tiếp tục yếu — tuần 20–24/07 giảm 101 điểm, đóng tuần 1.686 (từ ~1.800). Chính CK 5 phút xác nhận 24/07: \"hầu hết tất cả cổ phiếu đều chưa có dấu hiệu tạo đáy\"."
    },
    {
      "expert": "ck-5-phut",
      "date": "14/07",
      "asset": "CK Việt",
      "call": "P/E ~13.x (loại Vin ~11.x) là vùng siêu đáy — mua từng phần cổ phiếu cơ bản chiết khấu ~30%",
      "result": "pending",
      "note": "AzFin #06 (24/07) đo lại: P/E ~12x, loại Vin ~10x — khớp hướng \"vùng siêu đáy\" của CK 5 phút. Giá vẫn chưa xác nhận hồi phục."
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
      "note": "Chưa đóng nổi trên 26 — thị trường giảm tiếp 101 điểm tuần 20–24/07. Thái Phạm (Tập 40): SSI đang \"sườn phải\", có thể về 20."
    },
    {
      "expert": "ck-5-phut",
      "date": "17/07",
      "asset": "CK Việt",
      "call": "Chưa vào downtrend (về tín hiệu) — bán midcap lúc này rủi ro hơn nắm giữ",
      "result": "pending",
      "note": "Midcap về ngang đáy chiến tranh thương mại; BCTC Q2 sẽ không tác động nhiều lên giá."
    },
    {
      "expert": "ck-5-phut",
      "date": "22/07",
      "asset": "CK Việt",
      "call": "MWG thủng đáy 75 — bán; hàng cơ bản cuối cùng đã gãy",
      "result": "pending",
      "note": "Thái Phạm (Tập 40) đồng quan điểm tránh MWG — thêm lý do: tin đồn có thể cùng nguồn cung với vụ PNJ. Chờ diễn biến giá để chốt."
    },
    {
      "expert": "ck-5-phut",
      "date": "20/07",
      "asset": "CK Việt",
      "call": "Thủng hỗ trợ 1.800 — bị margin phải bán về ~0.4, không vay thì giữ sức mua",
      "result": "hit",
      "note": "HIT: sau khi thủng 1.800 thị trường \"về bất cứ mức nào\" đúng như cảnh báo — đóng tuần 24/07 ở 1.686. Lời khuyên xử lý margin về ~0.4 đã tránh được nhịp giảm tiếp."
    },
    {
      "expert": "ck-5-phut",
      "date": "24/07",
      "asset": "CK Việt",
      "call": "Bán ở 1.686 rủi ro hơn giữ — bán giờ phải kỳ vọng về 1.400 mới mua lại",
      "result": "pending",
      "note": "Nhắc lại 27/07 sau phiên xấu: \"bán lúc này là chậm rồi, rủi ro hơn nắm giữ\" — vẫn đang trong giai đoạn MUA. Thị trường tiếp tục giảm về mức thấp tuần trước."
    },
    {
      "expert": "ck-5-phut",
      "date": "24/07",
      "asset": "CK Việt",
      "call": "BCTC quý 2 không tác động nhiều lên giá (call đầu tháng 7)",
      "result": "hit",
      "note": "HIT (tự thuật + kiểm chứng): tuần 20–24/07 giảm 101 điểm ngay giữa mùa BCTC; \"mọi người cũng chẳng quan tâm đến lý do giảm nữa\"."
    },
    {
      "expert": "ck-5-phut",
      "date": "27/07",
      "asset": "CK Việt",
      "call": "Chưa phải lúc bán hàng trung–dài hạn — vẫn đang trong giai đoạn MUA",
      "result": "pending",
      "note": "Phiên 27/07 rất xấu nhưng giữ nguyên quan điểm; giá hiện tại là \"hợp lý\", chưa phải rẻ lắm."
    },
    {
      "expert": "ck-5-phut",
      "date": "27/07",
      "asset": "CK Việt",
      "call": "Cuối năm khó về bờ — sang năm mới có cửa",
      "result": "pending",
      "note": "\"Nói thật mình cũng không tin tưởng lắm đâu\"; sang năm nữa càng chắc chắn hơn."
    },
    {
      "expert": "ck-5-phut",
      "date": "27/07",
      "asset": "CK Việt",
      "call": "DBC, IGC, BCM yếu hơn hẳn thị trường — đừng mua thêm",
      "result": "pending",
      "note": "IGC thủng đáy 27/07; đã cản mua thêm từ trước, mới vào 1–2 lệnh, chưa đảo hàng."
    },
    {
      "expert": "ck-5-phut",
      "date": "28/07",
      "asset": "CK Việt",
      "call": "Chủ tịch đồng loạt đăng ký mua (VCI · KDH · PDR) = định giá hấp dẫn, nhưng KHÔNG phải tín hiệu đáy — \"đáy thì còn lâu\"",
      "result": "pending",
      "note": "Tô Hải (VCI) 31tr cp · Phó TGĐ KDH 20tr · ông Đạt (PDR) 20tr. Dữ liệu tham chiếu, vẫn xu hướng giảm."
    }
  ],
  "actions": {
    "updated": "30/07/2026",
    "now": [
      {
        "asset": "Hàng trung–dài hạn đang lỗ",
        "dir": "KHÔNG BÁN",
        "sig": "warn",
        "expertId": "ck-5-phut",
        "detail": "Phiên 27/07 rất xấu nhưng \"bán lúc này là chậm rồi, rủi ro hơn nắm giữ\" — vẫn đang trong giai đoạn MUA, không phải giai đoạn bán.",
        "level": "Giữ · còn sức mua · không margin"
      },
      {
        "asset": "Giữ tiền mặt",
        "dir": "TIỀN 60 / CỔ 40",
        "sig": "wait",
        "expertId": "thai-pham",
        "detail": "Tuần 30 vẫn giữ nguyên từ tuần 28 — tích lũy tiền để gom hàng khi \"mùa xuân\" tới. Tuyệt đối không margin.",
        "level": "Chờ VN-Index 1.600 · đáy dự kiến T8–9"
      },
      {
        "asset": "VCB · BID",
        "dir": "GIỮ / ƯU TIÊN",
        "sig": "up",
        "expertId": "thai-pham",
        "detail": "Đã về vùng thấp hơn cả đáy T4/2025 — \"bank rẻ quá\"; nhóm quốc doanh \"không thể phá sản\".",
        "level": "Cầm 5 năm có lời ở vùng thấp"
      },
      {
        "asset": "VNM",
        "dir": "MUA",
        "sig": "up",
        "expertId": "thai-pham",
        "detail": "Nâng lên khuyến nghị MUA: \"vùng giá rất rẻ, mua vào sẽ mang lại lợi nhuận dài hạn\" — mã duy nhất có lời tuần qua.",
        "level": "Chỉ mua vùng rẻ, không mua vùng cao"
      },
      {
        "asset": "DCM + DPM",
        "dir": "GIỮ CHẶT",
        "sig": "up",
        "expertId": "thai-pham",
        "detail": "Tỉ trọng rất lớn, \"giữ rất chặt\" — căn bản với nền nông nghiệp; giá dầu cao cũng đẩy biên lợi nhuận đạm.",
        "level": "Không bán vùng này"
      },
      {
        "asset": "Nhặt dần 6 nhóm ngành",
        "dir": "MUA DẦN",
        "sig": "up",
        "expertId": "azfin",
        "detail": "VLXD · chứng khoán (P/B~1, P/E<10) · bank (P/E<6x) · bán lẻ · điện (nhiệt + tái tạo) · BĐS khu công nghiệp.",
        "level": "Cổ phiếu ~90% danh mục tài chính"
      },
      {
        "asset": "Cổ phiếu cơ bản giảm giá",
        "dir": "GIẢI NGÂN DẦN",
        "sig": "up",
        "expertId": "ck-5-phut",
        "detail": "Ai nhiều tiền chờ mua dài hạn có thể giải ngân dần; ưu tiên 6 tiêu chí cơ bản + đang giảm giá. 28/07: loạt chủ tịch (VCI · KDH · PDR) đăng ký mua — thêm dữ liệu tham chiếu rằng định giá đã hấp dẫn, nhưng \"đáy thì còn lâu\".",
        "level": "Lệnh nhỏ · tuân thủ stop loss"
      },
      {
        "asset": "Dầu",
        "dir": "GIỮ LONG",
        "sig": "up",
        "expertId": "thai-pham",
        "detail": "Điều chỉnh sau tin ngưng bắn rồi bật +6,1% phiên 29/07: Brent 88, WTI 84,5. Dự trữ cạn kiệt ba mặt trận — giữ kịch bản tích lũy vùng cao.",
        "level": "Đánh lớn → >120 · hòa bình → 85–90"
      },
      {
        "asset": "Vàng",
        "dir": "LONG",
        "sig": "wait",
        "expertId": "thai-pham",
        "detail": "Long 4.030 cắt lỗ 3.930; chênh trong nước đã về 8–9tr/lượng — điều kiện mua vật chất đã đạt. 30/07 tái khẳng định sau FOMC: hồi kỹ thuật lên ~4.300 rồi vẫn còn cửa về 3.000.",
        "level": "Hồi KT 4.300 · bắt đáy 3.600–3.700 · cửa 3.000"
      },
      {
        "asset": "Google · Intel · Dell · SpaceX",
        "dir": "SHORT / TRÁNH",
        "sig": "down",
        "expertId": "thai-pham",
        "detail": "Google đảo chiều sang tiêu cực (FCF âm 5,9 tỷ đô, đích 270 T9); Intel lấp gap 70; Dell \"sẽ tương tự Intel\"; SpaceX 60–70.",
        "level": "Vị thế nhỏ · không đòn bẩy"
      },
      {
        "asset": "Samsung / Kospi · Nikkei",
        "dir": "SHORT",
        "sig": "down",
        "expertId": "thai-pham",
        "detail": "Samsung −30–32% từ đỉnh, Kospi −31%; \"đòn bẩy quá lớn thì sẽ đến lúc sập\". Nhật \"còn giảm rất mạnh\".",
        "level": "Samsung 200.000 → 170.000 KRW"
      },
      {
        "asset": "PNJ · FPT · HPG · MWG · SSI · MSB",
        "dir": "TRÁNH",
        "sig": "avoid",
        "expertId": "thai-pham",
        "detail": "PNJ phá đáy 6 năm (giám đốc bị truy tố); FPT dò đáy 95→74→62; SSI sườn phải có thể về 20; MSB chốt lời.",
        "level": "Không bắt đáy nhóm này"
      },
      {
        "asset": "DBC · IGC · BCM",
        "dir": "KHÔNG MUA THÊM",
        "sig": "avoid",
        "expertId": "ck-5-phut",
        "detail": "Nhóm yếu hơn hẳn thị trường — IGC thủng đáy 27/07, BCM đục nhiều đáy. Đã vào 1–2 lệnh thì giữ, chưa đảo hàng.",
        "level": "\"Đừng mua bây giờ, trông nó xấu quá\""
      }
    ],
    "waiting": [
      {
        "asset": "VN-Index",
        "trigger": "Về 1.600",
        "action": "GIẢI NGÂN MẠNH",
        "sig": "up",
        "expertId": "thai-pham",
        "note": "Đóng tuần 1.686 — còn ~5%. Dự báo tạo đáy T8–9 khi Fed tăng lãi, hồi phục cuối năm, sóng 10–20%."
      },
      {
        "asset": "Vàng vật chất",
        "trigger": "Chênh ≤ 10–12tr — ĐÃ ĐẠT (8–9tr)",
        "action": "CÂN NHẮC MUA",
        "sig": "up",
        "expertId": "thai-pham",
        "note": "Chênh đã thu hẹp từ 19–20tr về 8–9tr sau khi đánh vàng lậu. Chỉ mua SJC/thương hiệu nhà nước, mua đâu bán đấy."
      },
      {
        "asset": "TCB",
        "trigger": "Về 22",
        "action": "MUA",
        "sig": "wait",
        "expertId": "thai-pham",
        "note": "Mức tháng 4/2025; TCB cấp vốn cho Vin Group và Masan nên chưa chiết khấu sâu như VCB/BID."
      },
      {
        "asset": "RTX · Lockheed",
        "trigger": "Test lại đầu tuần",
        "action": "MUA THEO CHIẾN SỰ",
        "sig": "up",
        "expertId": "thai-pham",
        "note": "Kỳ vọng quay về đỉnh cũ nếu Mỹ phát động tấn công lớn — \"sớm muộn sẽ đánh\"."
      },
      {
        "asset": "Vàng (short)",
        "trigger": "Hồi về 4.400 + tin Fed tăng lãi",
        "action": "SHORT",
        "sig": "down",
        "expertId": "thai-pham",
        "note": "Chưa short ở vùng 4.030; muốn short phải đợi hồi đủ cao mới hiệu quả."
      },
      {
        "asset": "Bitcoin",
        "trigger": "Nhịp hồi 71–72k",
        "action": "ĐỨNG NGOÀI / SHORT",
        "sig": "avoid",
        "expertId": "thai-pham",
        "note": "Banana 3 từ 57.800; mua thật chỉ khi về 40–41k. Tổ chức rút ròng 4,5 tỷ đô tháng 6."
      },
      {
        "asset": "S&P 500",
        "trigger": "Về ~7.000",
        "action": "CHỜ TÍCH LŨY",
        "sig": "down",
        "expertId": "thai-pham",
        "note": "Năm bầu cử giữa nhiệm kỳ thường −17÷21% sau tháng 7."
      }
    ],
    "events": [
      {
        "dateLabel": "Tháng 9",
        "label": "Fed tăng lãi — xác suất 82%",
        "note": "Theo Polymarket 82%; sau họp 29/07 (giữ nguyên, vote 9–3, ba phiếu đòi tăng ngay 0,25%) xác suất trên thị trường cá cược tăng 55% → 72%. Thái Phạm dự báo đây là thời điểm thị trường tạo đáy.",
        "sig": "warn",
        "expertId": "thai-pham"
      },
      {
        "dateLabel": "Tháng 9",
        "label": "VN nâng hạng lên thị trường mới nổi",
        "note": "AzFin: quỹ rổ CẬN BIÊN đang thanh lý cổ phiếu VN trước hạn; quỹ rổ MỚI NỔI chỉ giải ngân TỪ tháng 9 — trùng khung \"đáy T8–9\".",
        "sig": "up",
        "expertId": "azfin"
      },
      {
        "dateLabel": "T8–T9",
        "label": "Vùng đáy dự kiến của thị trường",
        "note": "Thái Phạm: thị trường phòng ngừa trước việc Fed tăng lãi nên có thể tạo đáy T8–9, hồi phục khá vào cuối năm với sóng 10–20%.",
        "sig": "wait",
        "expertId": "thai-pham"
      },
      {
        "dateLabel": "Tháng 11",
        "label": "Bầu cử giữa nhiệm kỳ Mỹ",
        "note": "Iran đặt cược kéo dài lạm phát + giá dầu cao tới mốc này để gây sức ép lên Trump. Thống kê: chứng khoán thường −17÷21% sau tháng 7 của năm bầu cử giữa nhiệm kỳ.",
        "sig": "down",
        "expertId": "thai-pham"
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
      ],
      "potential": 4,
      "caution": 2,
      "potentialNote": "Một trong 2 mã mua dài hạn duy nhất của Thái Phạm — đã vào 70% vị thế ở vùng đáy, có cổ tức đỡ giá.",
      "cautionNote": "Rủi ro chính là thời gian: thị trường \"mùa đông\", có thể đi ngang lâu; không dùng margin thì áp lực thấp."
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
      ],
      "potential": 4,
      "caution": 2,
      "potentialNote": "Cùng cặp dài hạn với DCM; đã chiết khấu ~30% từ đỉnh — vùng mua từng phần theo cả 2 chuyên gia.",
      "cautionNote": "Thị trường chung yếu, giá có thể lình xình thêm; kỷ luật chia 3–4 lệnh thay cho dừng lỗ."
    },
    {
      "key": "bid",
      "symbol": "BID",
      "name": "BIDV",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:BID",
      "sig": "up",
      "stance": "RẺ HƠN CẢ ĐÁY T4/2025 — GIỮ/MUA",
      "aliases": [
        "bid",
        "bidv",
        "bdv"
      ],
      "oneLiner": "BID (và VCB) đã về vùng thấp hơn cả đáy tháng 4/2025 — \"bank rẻ quá\", cầm 5 năm sẽ có lời ở vùng thấp.",
      "thesis": [
        {
          "title": "Vì sao chọn BID thay VCB",
          "body": "Tập 38 (18/07): sau khi rút danh mục về 40% cổ phiếu, nhóm ngân hàng chỉ còn lại BIDV. Thái Phạm thừa nhận \"về chỉ số thì Vietcombank đẹp hơn\" nhưng ông kỳ vọng BIDV sẽ có những quyết sách mới — một lựa chọn thiên về câu chuyện chính sách hơn là kỹ thuật. BID nằm trong nhóm giữ cùng BVBank, SCS, VNM và một phần TCX, trong bối cảnh chung là phòng thủ tiền 60/cổ 40."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "GIỮ / ƯU TIÊN MUA",
          "sig": "up",
          "entry": "Đã dưới đáy T4/2025",
          "target": "Cầm 5 năm có lời ở vùng thấp",
          "stop": "—",
          "status": "active",
          "date": "26/07",
          "note": "VCB và BID chọn con nào cũng được; đang cầm BID thì cầm luôn."
        },
        {
          "expertId": "thai-pham",
          "dir": "GIỮ",
          "sig": "wait",
          "entry": "Vùng giá trị — không mua thêm",
          "target": "Đợi index 1.500",
          "stop": "—",
          "status": "active",
          "date": "23/07",
          "note": "Tập 39: \"cầm băng thoải mái\"; chọn BID trong nhóm bank cùng HDBank."
        },
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
      ],
      "potential": 4,
      "caution": 2,
      "potentialNote": "Định giá về dưới đáy T4/2025 — rẻ hiếm có; ngân hàng quốc doanh \"không thể phá sản được\".",
      "cautionNote": "Vẫn chưa giải ngân mạnh vì đợi VN-Index về 1.600; cần kiên nhẫn tính bằng năm."
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
      ],
      "potential": 3,
      "caution": 3,
      "potentialNote": "Chào sàn 21/07 giá 13.1 — nằm trong danh mục nắm giữ của Thái Phạm.",
      "cautionNote": "Chưa có lịch sử giao dịch trên sàn; cần quan sát các phiên đầu, thanh khoản chưa rõ."
    },
    {
      "key": "vnm",
      "symbol": "VNM",
      "name": "Vinamilk",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:VNM",
      "sig": "up",
      "stance": "MUA — VÙNG GIÁ RẤT RẺ",
      "aliases": [
        "vnm",
        "vinamilk",
        "vamil"
      ],
      "oneLiner": "Nâng hạng: Thái Phạm nói thẳng \"vùng giá rất rẻ, mua vào sẽ mang lại lợi nhuận dài hạn\" — mã duy nhất trong danh mục có lời tuần qua.",
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
          "dir": "MUA",
          "sig": "up",
          "entry": "Vùng giá hiện tại (rất rẻ)",
          "target": "Lợi nhuận dài hạn",
          "stop": "—",
          "status": "active",
          "date": "26/07",
          "note": "Mẫu hình đẹp; mã duy nhất trong danh mục có lời tuần 20–26/07."
        },
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
      ],
      "potential": 4,
      "caution": 2,
      "potentialNote": "Được nâng từ \"giữ, bán khi +5–7%\" lên khuyến nghị MUA cho dài hạn; mẫu hình đẹp, là mã duy nhất có lợi nhuận trong tuần đỏ lửa.",
      "cautionNote": "Không còn tăng trưởng mạnh; ông cảnh báo mua ở vùng giá cao thì vẫn thua lỗ — chỉ mua ở vùng rẻ này."
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
      ],
      "potential": 3,
      "caution": 3,
      "potentialNote": "Lợi thế cạnh tranh + cổ tức đều — cầm qua vùng trũng có dòng tiền bù đắp.",
      "cautionNote": "Đang lỗ ~7–8%; Trung Đông leo thang bất lợi cho vận tải hàng không; trần 20–25% tài khoản."
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
      ],
      "potential": 3,
      "caution": 3,
      "potentialNote": "Nhóm chứng khoán giữ dài hạn nhờ nội lực (kênh huy động vốn cốt lõi, thanh khoản đáy sẽ hồi).",
      "cautionNote": "Chính chủ đã chốt bớt; ngắn hạn nhóm CK \"khó đánh\", không lướt thêm."
    },
    {
      "key": "tcb",
      "symbol": "TCB",
      "name": "Techcombank",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:TCB",
      "sig": "wait",
      "stance": "CHỜ VỀ 22",
      "aliases": [
        "tcb",
        "techcombank",
        "tcombank"
      ],
      "oneLiner": "Thái Phạm: đợi TCB về vùng 22 (mức tháng 4/2025) mới mua — ngân hàng cấp vốn cho Vin Group và Masan.",
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
          "expertId": "thai-pham",
          "dir": "CHỜ MUA",
          "sig": "wait",
          "entry": "Đợi về 22 (mức T4/2025)",
          "target": "—",
          "stop": "—",
          "status": "waiting",
          "date": "26/07",
          "note": "Cấp vốn cho Vin Group và Masan; chưa về mức T4/2025 như VCB/BID."
        },
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
      ],
      "potential": 3,
      "caution": 3,
      "potentialNote": "Một trong số ít mã cơ bản đang cố tạo đáy — rút chân khá ổn phiên 13/07.",
      "cautionNote": "Chưa có tín hiệu nào cho phép kỳ vọng tăng trong tuần; full room ngoại — thiếu lực mua mới."
    },
    {
      "key": "ssi",
      "symbol": "SSI",
      "name": "Chứng khoán SSI",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:SSI",
      "sig": "avoid",
      "stance": "SƯỜN PHẢI — CÓ THỂ VỀ 20",
      "aliases": [
        "ssi"
      ],
      "oneLiner": "Thái Phạm: SSI đang ở \"sườn phải\" của mẫu hình, gom lại hàng — có thể về 20; CK 5 phút vẫn chờ đóng trên 26.",
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
          "expertId": "thai-pham",
          "dir": "TRÁNH",
          "sig": "avoid",
          "entry": "Đang sườn phải",
          "target": "Có thể về 20",
          "stop": "—",
          "status": "active",
          "date": "26/07",
          "note": "\"Sườn trái ăn ngon gấp đôi, đến sườn phải là cứ mua là lỗ.\""
        },
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
      ],
      "potential": 2,
      "caution": 4,
      "potentialNote": "Chỉ còn kèo chờ tín hiệu của CK 5 phút (đóng >26) — chưa xảy ra suốt 10 ngày qua.",
      "cautionNote": "Thái Phạm cảnh báo \"sườn phải đánh vào cứ mua là lỗ\"; có thể về 20 — thấp hơn nhiều mốc 26."
    },
    {
      "key": "hpg",
      "symbol": "HPG",
      "name": "Hòa Phát",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:HPG",
      "sig": "avoid",
      "stance": "TRÁNH — VIN THÉP CẠNH TRANH",
      "aliases": [
        "hpg",
        "hoa phat",
        "hoang phat"
      ],
      "oneLiner": "Thủng nền 23 về đáy mới 21.85; Thái Phạm bỏ khỏi danh mục mua vì thép Vin Group sẽ cạnh tranh mạnh.",
      "thesis": [
        {
          "title": "Thái Phạm (Tập 39): thêm lý do cơ bản để tránh",
          "body": "Về kỹ thuật HPG nhìn \"phê\" (đã tích lũy) nhưng Thái Phạm dẫn nguồn tin khả tín: vài năm tới HPG sẽ khó khăn về cạnh tranh khi thép của Vin Group rất mạnh và HPG khó thắng được các thầu đối với Vin. Vì thế ông đã KHÔNG đưa HPG vào danh mục mua. Về kỹ thuật, HPG đã thủng nền 23 và tìm về đáy mới 21.85 — CK 5 phút cũng xếp HPG vào nhóm \"hàng cơ bản gãy\" (thủng đáy tuần trước)."
        },
        {
          "title": "Cảnh báo từ phiên 13/07",
          "body": "Trong khi TCB, SSI cố tạo đáy thì HPG — cổ phiếu cơ bản đầu ngành — lại THỦNG ĐÁY ngay phiên 13/07. Chứng khoán 5 phút dùng HPG làm bằng chứng rằng giai đoạn này không thể suy luận kiểu \"ở đáy thì thanh khoản bé\": có mã tạo đáy, có mã vẫn rơi. Chưa có khuyến nghị mua bán cụ thể — bài học ở đây là về đọc thị trường: thị trường giảm chung do nền kinh tế và thanh khoản, không phải do từng doanh nghiệp."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "KHÔNG MUA",
          "sig": "avoid",
          "entry": "—",
          "target": "Đã thủng 23 → đáy mới 21.85",
          "stop": "—",
          "status": "active",
          "date": "23/07",
          "note": "Thép Vin Group cạnh tranh; khó thắng thầu."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "ĐỨNG NGOÀI",
          "sig": "avoid",
          "entry": "—",
          "target": "Chờ hết thủng đáy",
          "stop": "—",
          "status": "waiting",
          "date": "13/07",
          "note": "Dẫn chứng cho trạng thái thị trường, chưa phải khuyến nghị."
        }
      ],
      "potential": 2,
      "caution": 4,
      "potentialNote": "Hàng cơ bản đầu ngành — sẽ hấp dẫn khi thị trường tạo đáy thật.",
      "cautionNote": "Vừa THỦNG ĐÁY phiên 13/07 trong khi mã khác cố tạo đáy — chưa có lý do bắt."
    },
    {
      "key": "pnj",
      "symbol": "PNJ",
      "name": "Vàng bạc Đá quý Phú Nhuận",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:PNJ",
      "sig": "avoid",
      "stance": "PHÁ ĐÁY 6 NĂM — TRÁNH TUYỆT ĐỐI",
      "aliases": [
        "pnj",
        "phu nhuan"
      ],
      "oneLiner": "Phá đáy 6 năm, giám đốc bị truy tố buôn lậu kim cương; cú \"giải cứu\" tóm sàn cuối tuần không đổi được luận điểm — Thái Phạm dự báo còn sàn thêm như Novaland.",
      "thesis": [
        {
          "title": "Cập nhật 26/07: \"một lần bất tín, vạn sự bất tin\"",
          "body": "PNJ đã phá đáy 6 năm, giảm sàn liên tục sau khi giám đốc bị truy tố buôn lậu kim cương. Thái Phạm và nhóm hội viên không tham gia bắt đáy, lập luận bằng nguyên tắc thành tín: \"Một lần bất tín, vạn sự bất tin\" — dẫn Warren Buffett \"bạn mất 20 năm xây dựng uy tín nhưng chỉ cần 5–15 phút để phá hủy thanh danh\". Hai câu hỏi kinh doanh chưa ai trả lời: hàng tồn kho kim cương giờ bán cho ai, và thanh khoản ra sao. Cuối tuần có \"cú giải cứu\" tóm được giá sàn, nhưng theo kinh nghiệm của ông, sau khi tóm sàn thường sẽ còn vài phiên sàn nữa giống Novaland."
        },
        {
          "title": "Thái Phạm (Tập 39): \"kim cương rởm vàng rởm\"",
          "body": "Ngày 23/07 Thái Phạm nâng mạnh mức cảnh báo: PNJ có thể về DƯỚI 9 như Novaland. Lý do: niềm tin thương hiệu với người tiêu dùng gần như bị xóa sạch sau vụ kim cương/vàng rởm — mà hệ thống phân phối không phải là lợi thế cạnh tranh thật, nên khi thương hiệu mất thì không còn gì đỡ giá. Ông từng can rất nhiều người không bắt ở vùng ~50; giờ so PNJ với Đức Giang — \"bắt mãi chỉ là bắt dao rơi, đừng gắn vào những con cổ phiếu có vấn đề\"."
        },
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
          "expertId": "thai-pham",
          "dir": "TRÁNH",
          "sig": "avoid",
          "entry": "—",
          "target": "Kịch bản xấu: về dưới 9 (như Novaland)",
          "stop": "—",
          "status": "active",
          "date": "23/07",
          "note": "Nâng từ mức ~44 trước; thương hiệu mất niềm tin."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "KHÔNG MUA",
          "sig": "avoid",
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
          "sig": "avoid",
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
      ],
      "potential": 1,
      "caution": 5,
      "potentialNote": "Chưa nhìn thấy tiềm năng nào định lượng được khi vụ án còn mở rộng.",
      "cautionNote": "Rủi ro pháp lý chưa định lượng: liên đới công ty mẹ, điều tra mở rộng — mua là \"đoán xem nó có sập không\"."
    },
    {
      "key": "fpt",
      "symbol": "FPT",
      "name": "FPT Corp",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:FPT",
      "sig": "avoid",
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
          "sig": "avoid",
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
      ],
      "potential": 2,
      "caution": 4,
      "potentialNote": "Doanh nghiệp tốt về dài hạn — nhưng phương pháp giá trị đã chốt lời từ giá cao, chưa tới vùng mua lại.",
      "cautionNote": "Hở room, khối ngoại bán mạnh liên tục; thêm rủi ro cạnh tranh AI."
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
      ],
      "potential": 1,
      "caution": 5,
      "potentialNote": "Không có luận điểm mua — chỉ còn câu chuyện thoát hàng cho người kẹt.",
      "cautionNote": "Chuyện đổi chủ chưa rõ ràng; nhóm \"lằng nhằng, đừng đụng\"."
    },
    {
      "key": "dgc",
      "symbol": "DGC",
      "name": "Hóa chất Đức Giang",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:DGC",
      "sig": "avoid",
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
          "sig": "avoid",
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
          "sig": "avoid",
          "entry": "—",
          "target": "Chờ vào lại uptrend",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "\"Lằng nhằng lắm.\""
        }
      ],
      "potential": 1,
      "caution": 5,
      "potentialNote": "Không xét tiềm năng khi \"linh hồn doanh nghiệp\" dính pháp lý.",
      "cautionNote": "Chủ tịch/TGĐ bị khởi tố — tiêu chí loại ngay lập tức của AzFin; chờ vào lại uptrend mới bàn tiếp."
    },
    {
      "key": "hdb",
      "symbol": "HDB",
      "name": "HDBank",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:HDB",
      "sig": "wait",
      "stance": "GIỮ — CHỜ NIÊM YẾT HDBS",
      "aliases": [
        "hdbank",
        "hdb"
      ],
      "potential": 3,
      "caution": 2,
      "potentialNote": "Trong nhóm bank Thái Phạm giữ; có động lực giữ giá để niêm yết HDBank Securities.",
      "cautionNote": "Không mua thêm lúc này — chờ index về 1.500; đi ngang cùng ACB trong nhóm bank.",
      "oneLiner": "Thái Phạm (Tập 39): giữ trong nhóm bank — có việc phải giữ giá để niêm yết HDBank Securities.",
      "thesis": [
        {
          "title": "Lý do nằm trong danh mục giữ",
          "body": "Tập 39: HDBank là một trong các mã ngân hàng Thái Phạm quan tâm giữ (cùng BID, và BVBank mới lên sàn). Điểm riêng: HDBank có động lực giữ giá ở vùng này vì phải niêm yết công ty con HDBank Securities. Trong nhóm bank, ACB và HDBank \"đi ngang\" — không bán nhưng cũng chưa mua thêm khi chờ VN-Index về vùng 1.500."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "GIỮ",
          "sig": "wait",
          "entry": "Không mua thêm",
          "target": "Đợi index 1.500 + niêm yết HDBS",
          "stop": "—",
          "status": "active",
          "date": "23/07",
          "note": "Giữ giá để niêm yết HDBank Securities."
        }
      ]
    },
    {
      "key": "mwg",
      "symbol": "MWG",
      "name": "Thế Giới Di Động",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:MWG",
      "sig": "down",
      "stance": "THỦNG ĐÁY 75 — BÁN",
      "aliases": [
        "mwg",
        "the gioi di dong",
        "thegioididong"
      ],
      "potential": 1,
      "caution": 4,
      "potentialNote": "Không có kèo mua — mới bắt đầu giảm, \"không còn nhiều đất diễn\".",
      "cautionNote": "Thủng đáy 75 bằng cây sàn; là hàng cơ bản CUỐI CÙNG còn trụ giá cao nay đã gãy.",
      "oneLiner": "Thủng đáy 75 (CK 5 phút); Thái Phạm thêm nghi vấn: liệu đồng hồ/hàng khác có cùng nguồn cung với vụ PNJ — \"đừng đụng vào\".",
      "thesis": [
        {
          "title": "Con cơ bản cuối cùng gãy",
          "body": "MWG xấu từ lâu — gãy \"chen\" tăng từ tận tháng 3, sau đó xây nền quanh 75–77 khoảng một tháng. Phiên 22/07 thủng 75 bằng một cây sàn rõ ràng. CK 5 phút coi đây là \"hàng cơ bản cuối cùng còn trụ giá cao nay đã gãy\", sau HPG (tuần trước) và GMD (cùng ngày) — chứng tỏ thị trường đã về vùng giá tương đối thấp."
        },
        {
          "title": "Bài học \"bán khi nó dễ\"",
          "body": "Ai có giá vốn quanh 75–77 (mới bắt đáy giai đoạn vừa rồi) thì bán luôn không cần nghĩ — MWG cho một cây giật xuống rõ ràng để cảnh báo, khác nhiều midcap \"giảm lay lắt không bán được\". Giá vốn cao thì cân nhắc niềm tin. Tuyệt đối không bắt đáy vì mã này mới bắt đầu giảm."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "TRÁNH",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "26/07",
          "note": "Suy đoán thị trường: có thể cùng nguồn cung với vụ nữ trang/kim cương của PNJ. \"Tôi không bao giờ đụng vào những thứ như thế.\""
        },
        {
          "expertId": "ck-5-phut",
          "dir": "BÁN",
          "sig": "down",
          "entry": "Giá vốn quanh 75–77",
          "target": "Không bắt đáy — mới bắt đầu giảm",
          "stop": "Thủng 75 = tín hiệu bán",
          "status": "active",
          "date": "22/07",
          "note": "Hàng cơ bản cuối cùng gãy; \"bán khi nó dễ\"."
        }
      ]
    },
    {
      "key": "vcb",
      "symbol": "VCB",
      "name": "Vietcombank",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:VCB",
      "sig": "up",
      "stance": "RẺ NHẤT NHÓM BANK — DƯỚI ĐÁY T4/2025",
      "aliases": [
        "vcb",
        "vietcombank"
      ],
      "potential": 4,
      "caution": 2,
      "potentialNote": "Thái Phạm: \"bank rẻ quá\" — VCB về vùng còn thấp hơn cả tháng 4/2025; AzFin: có mã bank P/E chưa đến 6 lần.",
      "cautionNote": "Chưa phải điểm giải ngân mạnh (đợi VN-Index 1.600); ngân hàng chịu áp lực nếu lãi suất giữ cao lâu.",
      "oneLiner": "Cùng BID là hai mã bank rẻ hiếm có — đã về vùng thấp hơn cả đáy tháng 4/2025.",
      "thesis": [
        {
          "title": "Vì sao được gọi tên đầu tiên",
          "body": "Tập 40 (26/07): \"bây giờ ngân hàng rẻ quá. Thậm chí là Vietcombank về cái vùng còn thấp hơn cả cái thời điểm tháng 4 năm 2025.\" Giữa VCB và BID, Thái Phạm nói chọn con nào cũng được — ai đang cầm BID thì cầm luôn. CTG cũng rẻ nhưng chưa về mức tháng 4/2025 như hai mã này. Trong video công khai cùng ngày, ông xếp VCB/BID/CTG/TCB/MBB/GAS vào nhóm \"không thể phá sản được\" — nền giá tốt bị phá vỡ không phải lý do để bán: \"cầm nắm nó 5 năm các anh chị sẽ có lời ở vùng thấp\"."
        },
        {
          "title": "Góc nhìn AzFin",
          "body": "AzFin #06 (24/07) xếp ngân hàng vào 1 trong 6 nhóm nhặt dần: sau thời gian nhóm quốc doanh định giá đắt hơn hẳn nhóm tư nhân, nay chính nhóm quốc doanh lại \"hấp dẫn phải nói là rất hấp dẫn\", có cổ phiếu P/E chưa đến 6 lần — \"hàng đầu Việt Nam, vừa an toàn vừa hấp dẫn\"."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "GIỮ / MUA",
          "sig": "up",
          "entry": "Đã dưới vùng đáy T4/2025",
          "target": "Cầm 5 năm có lời ở vùng thấp",
          "stop": "Ngân hàng quốc doanh \"không thể phá sản\"",
          "status": "active",
          "date": "26/07",
          "note": "Chọn VCB hay BID đều được."
        },
        {
          "expertId": "azfin",
          "dir": "NHẶT DẦN",
          "sig": "up",
          "entry": "Bank quốc doanh P/E <6x",
          "target": "Nắm giữ dài hạn",
          "stop": "Đa dạng 5–10 mã",
          "status": "active",
          "date": "24/07",
          "note": "1 trong 6 nhóm ngành ưu tiên."
        }
      ]
    },
    {
      "key": "ctg",
      "symbol": "CTG",
      "name": "VietinBank",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:CTG",
      "sig": "wait",
      "stance": "RẺ — NHƯNG CHƯA BẰNG VCB/BID",
      "aliases": [
        "ctg",
        "vietinbank",
        "cong thuong"
      ],
      "potential": 3,
      "caution": 2,
      "potentialNote": "Cũng thuộc nhóm quốc doanh \"không thể phá sản\", giữ được dài hạn.",
      "cautionNote": "Chưa chiết khấu về mức tháng 4/2025 như VCB và BID — ưu tiên thấp hơn trong cùng nhóm.",
      "oneLiner": "Rẻ nhưng chưa bằng VCB/BID: \"CTG nó chưa về\" mức tháng 4/2025.",
      "thesis": [
        {
          "title": "Xếp sau trong nhóm quốc doanh",
          "body": "Tập 40: \"Công thương cũng rất rẻ đúng không? Nhưng nếu nói về mức độ rẻ thì không thể rẻ bằng Vietcombank và BIDV được. Bởi vì BIDV và Vietcombank đã về mức của tháng 4 năm 2025 rồi, còn CTG nó chưa về.\" Trong video công khai, CTG vẫn nằm trong nhóm ngân hàng \"không thể phá sản được\" nên không có lý do gì phải bán khi nền giá tốt bị phá vỡ."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "GIỮ",
          "sig": "wait",
          "entry": "Chưa về mức T4/2025",
          "target": "Cầm dài hạn",
          "stop": "—",
          "status": "active",
          "date": "26/07",
          "note": "Ưu tiên VCB/BID trước."
        }
      ]
    },
    {
      "key": "gas",
      "symbol": "GAS",
      "name": "PV GAS",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:GAS",
      "sig": "wait",
      "stance": "GIỮ — \"KHÔNG THỂ PHÁ SẢN\"",
      "aliases": [
        "gas",
        "pv gas"
      ],
      "potential": 3,
      "caution": 2,
      "potentialNote": "Doanh nghiệp đầu ngành năng lượng, hưởng lợi gián tiếp khi giá dầu/khí neo cao.",
      "cautionNote": "Không phải mã được ưu tiên mua thêm — chỉ trong nhóm \"giữ được, không bán hoảng loạn\".",
      "oneLiner": "Nằm trong nhóm Thái Phạm nói \"không thể phá sản được\" — nền giá bị phá vỡ cũng không phải lý do bán.",
      "thesis": [
        {
          "title": "Nhóm không thể phá sản",
          "body": "Video công khai 26/07: khi được hỏi \"nền giá tốt đã bị phá vỡ thì có nên giữ không\", Thái Phạm trả lời với nhóm VCB, BID, CTG, TCB, MBB và GAS: \"Chẳng có lý do gì không giữ, bởi những doanh nghiệp này không thể phá sản được\" — cầm 5 năm sẽ có lời ở vùng thấp. Nguyên tắc chung ông nêu: chỉ buộc phải bán khi doanh nghiệp dính vấn đề pháp lý, bất ổn ban lãnh đạo, hoặc ngành nghề suy thoái/bị AI thay thế — GAS không thuộc các trường hợp đó."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "GIỮ",
          "sig": "wait",
          "entry": "Không bán hoảng loạn",
          "target": "Cầm 5 năm",
          "stop": "—",
          "status": "active",
          "date": "26/07",
          "note": "Nếu muốn bán thì đợi hồi phục rồi bán, không bán vùng này."
        }
      ]
    },
    {
      "key": "msb",
      "symbol": "MSB",
      "name": "Ngân hàng Hàng Hải",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:MSB",
      "sig": "down",
      "stance": "CHỐT LỜI — CHƯA PHÂN PHỐI XONG",
      "aliases": [
        "msb"
      ],
      "potential": 2,
      "caution": 4,
      "potentialNote": "Đang ở \"sườn trái\" nên còn nhịp — nhưng là nhịp để thoát chứ không phải để vào.",
      "cautionNote": "Thái Phạm khuyên chốt trước khi gãy: \"đừng để lúc nó gãy, nó chưa phân phối xong thôi\".",
      "oneLiner": "Thái Phạm: \"MSB chốt lời đi, đừng để lúc nó gãy — nó đang ở sườn trái, chưa phân phối xong thôi.\"",
      "thesis": [
        {
          "title": "Cảnh báo phân phối",
          "body": "Tập 40: MSB được nêu đích danh trong nhóm cần chốt lời — \"ông nào có hàng chốt đi, nó chưa phân phối xong thôi\". Ông dùng khung sườn trái/sườn phải: mã đang ở sườn trái (giai đoạn phân phối chưa kết thúc) thì còn nhịp để thoát, nhưng khi sang sườn phải thì \"cứ mua là lỗ\" như trường hợp SSI."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "CHỐT LỜI",
          "sig": "down",
          "entry": "Ai có hàng thì chốt",
          "target": "Thoát trước khi gãy",
          "stop": "Đang sườn trái, chưa phân phối xong",
          "status": "active",
          "date": "26/07",
          "note": "Không mua mới."
        }
      ]
    },
    {
      "key": "dbc",
      "symbol": "DBC",
      "name": "Dabaco",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:DBC",
      "sig": "avoid",
      "stance": "YẾU HƠN THỊ TRƯỜNG — ĐỪNG MUA THÊM",
      "aliases": [
        "dbc",
        "dabaco"
      ],
      "potential": 2,
      "caution": 4,
      "potentialNote": "Vẫn nằm trong danh mục theo dõi trung–dài hạn của CK 5 phút, mới vào 1–2 lệnh nên còn dư địa mua nếu tạo nền.",
      "cautionNote": "\"Xấu hơn thị trường rất nhiều\" — chính người khuyến nghị đang cản mua thêm; chưa có phương án đảo hàng.",
      "oneLiner": "CK 5 phút (27/07): Dabaco đang yếu hơn hẳn thị trường — đã cản mua thêm, chỉ giữ 1–2 lệnh đã vào.",
      "thesis": [
        {
          "title": "Mã trong danh mục nhưng đang yếu bất thường",
          "body": "Trong video 27/07 khi trả lời về cổ phiếu trung–dài hạn đang lỗ, CK 5 phút nêu đích danh Dabaco cùng IGC là những mã \"xấu hơn thị trường rất nhiều\" ở thời điểm này. Điểm đáng chú ý: đây là những mã chính anh đã \"cố gắng để cản mọi người mua thêm rất nhiều rồi\" — danh mục mới vào một hoặc hai lệnh, vẫn trong giai đoạn đợi mua tiếp nhưng \"đừng mua bây giờ, trông nó xấu quá\". Anh cũng chưa đảo hàng vì \"chưa nghĩ ra được phương án nào tốt hơn\"; nếu thị trường có nhịp chững và xuất hiện cơ hội tốt hơn thì sẽ cân nhắc sau."
        }
      ],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "GIỮ — KHÔNG MUA THÊM",
          "sig": "avoid",
          "entry": "Đã vào 1–2 lệnh",
          "target": "Đợi nền giá mới",
          "stop": "Không đảo hàng lúc này",
          "status": "active",
          "date": "27/07",
          "note": "\"Đừng mua bây giờ, trông nó xấu quá.\""
        }
      ]
    },
    {
      "key": "igc",
      "symbol": "IGC",
      "name": "Apax Holdings / IGC Group",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:IGC",
      "sig": "avoid",
      "stance": "THỦNG ĐÁY 27/07 — ĐỪNG MUA THÊM",
      "aliases": [
        "igc"
      ],
      "potential": 1,
      "caution": 5,
      "potentialNote": "Không có luận điểm mua mới — chỉ là mã đang kẹt trong danh mục, chờ nhịp chững để tính.",
      "cautionNote": "Vừa thủng đáy phiên 27/07 và được xếp vào nhóm \"yếu hơn hẳn thị trường\".",
      "oneLiner": "CK 5 phút (27/07): IGC thủng đáy ngay phiên hôm nay — nằm trong nhóm yếu hơn hẳn thị trường.",
      "thesis": [
        {
          "title": "Thủng đáy trong phiên xấu 27/07",
          "body": "CK 5 phút nêu IGC cùng Dabaco là hai mã \"xấu hơn thị trường rất nhiều\" và cho biết ngay phiên 27/07 IGC đã thủng đáy — \"hôm nay thực sự nhìn con IGC nó thủng đáy với cả con BCM trông nó cũng chán\". Cũng như Dabaco, đây là mã anh đã cản mua thêm từ trước; danh mục mới vào 1–2 lệnh và hiện chưa xử lý gì — \"thời điểm hiện tại chưa xử lý gì đâu, chúng ta cứ giữ tiếp đã\"."
        }
      ],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "GIỮ — KHÔNG MUA THÊM",
          "sig": "avoid",
          "entry": "Đã vào 1–2 lệnh",
          "target": "Chờ nhịp chững để cân nhắc đảo hàng",
          "stop": "Chưa xử lý gì lúc này",
          "status": "active",
          "date": "27/07",
          "note": "Thủng đáy phiên 27/07."
        }
      ]
    },
    {
      "key": "bcm",
      "symbol": "BCM",
      "name": "Becamex IDC",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:BCM",
      "sig": "avoid",
      "stance": "ĐỤC NHIỀU ĐÁY — CHƯA CÓ TÍN HIỆU",
      "aliases": [
        "bcm",
        "becamex"
      ],
      "potential": 2,
      "caution": 4,
      "potentialNote": "Thuộc nhóm BĐS khu công nghiệp mà AzFin xếp vào 6 nhóm nhặt dần (FDI mạnh, giá thuê tăng) — nhưng AzFin không nêu đích danh mã này.",
      "cautionNote": "CK 5 phút: \"BCM đục bao nhiêu đáy rồi\" (22/07) và \"trông cũng chán\" (27/07) — chưa có tín hiệu tạo đáy.",
      "oneLiner": "CK 5 phút nhắc hai lần trong tuần: BCM đã đục nhiều đáy, phiên 27/07 \"trông cũng chán\".",
      "thesis": [
        {
          "title": "Đục đáy nhiều lần, chưa tạo được nền",
          "body": "BCM được CK 5 phút nhắc hai lần: ngày 22/07 khi liệt kê các cổ phiếu cơ bản đã gãy (\"BCM đục bao nhiêu đáy rồi\"), và ngày 27/07 khi cùng IGC bị đánh giá \"trông nó cũng chán\". Đây không phải mã anh khuyến nghị mua, chỉ là ví dụ cho trạng thái chung của cổ phiếu cơ bản trong nhịp giảm. Ở góc nhìn khác, AzFin (#06, 24/07) xếp bất động sản khu công nghiệp — ngành chính của Becamex — vào 6 nhóm đáng nhặt dần nhờ FDI mạnh và giá thuê tăng, nhưng không nêu đích danh BCM."
        }
      ],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "ĐỨNG NGOÀI",
          "sig": "avoid",
          "entry": "—",
          "target": "Chờ tín hiệu tạo đáy",
          "stop": "—",
          "status": "active",
          "date": "27/07",
          "note": "Đục nhiều đáy, chưa có nền."
        }
      ]
    },
    {
      "key": "vin",
      "symbol": "VIC · VHM",
      "name": "Nhóm Vin (VIC/VHM/VRE)",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:VIC",
      "sig": "avoid",
      "stance": "CHI PHỐI CHỈ SỐ — GIẢM LÀ ĐÁNG MỪNG",
      "aliases": [
        "vic",
        "vhm",
        "vre",
        "nhom vin",
        "vin group",
        "vinhome"
      ],
      "potential": 1,
      "caution": 4,
      "potentialNote": "Không chuyên gia nào khuyến nghị mua — định giá đã rất cao sau 2 năm tăng 5–6 lần.",
      "cautionNote": "Chiếm >20% vốn hóa, là lý do chính index \"ảo\" so với danh mục thật — đọc sai chỉ số là hành động sai.",
      "oneLiner": "Không phải khuyến nghị mua — nhóm chi phối index; CK 5 phút (22/07): Vin giảm là ĐÁNG MỪNG vì sẽ cân bằng lại điểm số với midcap.",
      "thesis": [
        {
          "title": "Cập nhật 22/07: Vin bắt đầu giảm",
          "body": "Phiên 22/07 index −60 điểm hoàn toàn do Vin giảm. CK 5 phút coi đây là tin TỐT: nếu Vin giảm ~1 tuần thì điểm số sẽ cân bằng trở lại, chấm dứt tình trạng index \"lệch pha\" với midcap khiến nhà đầu tư mất phương hướng. Đồ thị VIC đã tạo đỉnh, mở \"ben\" đi xuống. Thái Phạm bổ sung từ phía dòng vốn: VHM chỉ cần chỉnh ~20% là VN-Index về 1.500. Cả hai đều KHÔNG mua hàng Vin (không tín hiệu). Với giá vốn 180–200 thì đã bán được; giá vốn thấp 50–100 chưa cần bán."
        },
        {
          "title": "Vì sao phải theo dõi dù không giao dịch",
          "body": "Chứng khoán 5 phút (16–17/07): một nhóm ngành chỉ 3–4 cổ phiếu nhưng chiếm hơn 20% vốn hóa, hút tiền \"độc nhất vô nhị\" 2 năm qua với mức tăng 5–6 lần — làm mọi tín hiệu trên VN-Index (nến đảo chiều, đánh giá downtrend) bị chậm và nhiễu; chưa cực đoan như Hàn Quốc (Samsung + SK Hynix >50% vốn hóa) nhưng cùng bản chất. Thái Phạm (Tập 38) nhìn từ phía dòng vốn: VIC/VHM/VRE định giá đã rất cao và \"không thể tăng được nữa\" — quỹ ngoại mua cả rổ VN30/ETF bị kẹt chính vì cấu trúc này, và đó là một phần lý do họ rút. Kết luận thực dụng cho gia đình: đừng đánh giá thị trường qua điểm số index, hãy nhìn midcap."
        }
      ],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "KHÔNG MUA",
          "sig": "avoid",
          "entry": "—",
          "target": "Vin giảm → index cân bằng lại",
          "stop": "Giá vốn 180–200: bán được",
          "status": "active",
          "date": "22/07",
          "note": "\"Nhìn index không đánh giá được — điểm số điêu.\""
        },
        {
          "expertId": "ck-5-phut",
          "dir": "ĐỨNG NGOÀI",
          "sig": "avoid",
          "entry": "—",
          "target": "Chỉ dùng làm bộ lọc đọc chỉ số",
          "stop": "—",
          "status": "active",
          "date": "17/07",
          "note": "Điểm số VN-Index bị nhóm này chi phối — nhìn midcap để đánh giá thật."
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
      "oneLiner": "Short nửa vị thế 320–330; nửa còn lại để dành cho BCTC 30/07 — kỳ vọng guidance Q3 xấu. 30/07: dòng tiền trú ẩn đang xoay vào Apple/phòng thủ — nhưng \"sự lòng vòng này cuối cùng sẽ kết thúc bằng một đợt điều chỉnh\".",
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
      ],
      "potential": 4,
      "caution": 3,
      "potentialNote": "Kèo short có catalyst rõ và gần (BCTC 30/07, guidance Q3 yếu vì tăng giá iPhone 18) — dư địa \"gãy về chen line\".",
      "cautionNote": "Đang bị kéo giữ chỉ số kiểu FOMO trap — có thể gap-up dọa trước khi gãy; chỉ đi 1/2 vị thế, không đòn bẩy."
    },
    {
      "key": "spacex",
      "symbol": "SpaceX",
      "name": "SpaceX (CBX)",
      "group": "Quốc tế",
      "tv": "",
      "sig": "down",
      "stance": "SHORT — ĐÍCH 60–70",
      "aliases": [
        "spacex",
        "cbx",
        "spx "
      ],
      "oneLiner": "Insider đã rút ~110 tỷ đô tiền thật khỏi thương vụ; lock-up cuối năm tung cung gấp 8 lần — đích 60–70 đến đầu năm sau.",
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
          "dir": "SHORT (giữ)",
          "sig": "down",
          "entry": "Giá từng lên 220",
          "target": "60–70 từ giờ đến đầu năm sau",
          "stop": "",
          "status": "active",
          "date": "26/07",
          "note": "Insider thu 85 tỷ cổ phiếu + 25 tỷ trái phiếu = ~110 tỷ đô tiền thật; \"biến động giá người ta quan tâm làm gì\"."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT (giữ)",
          "sig": "down",
          "entry": "Giữ 76.000đ từ ~155, không bổ sung",
          "target": "Hạ đích về 50–60 (đang lãi 26%)",
          "stop": "Kỷ luật vị thế — không margin",
          "status": "active",
          "date": "23/07",
          "note": "Người bán khống lớn nhất là nhân viên nội bộ + quỹ: khi giải lock-up trả bằng hàng giá vốn ~40–60, mượn bán 115 vẫn lời → còn bán tiếp."
        }
      ],
      "potential": 5,
      "caution": 3,
      "potentialNote": "Kèo tâm đắc nhất: 4 đợt unlock nâng cung gấp 8 lần, giá trị thật 40–50 đô vs thị giá ~157 — đích 80–87.",
      "cautionNote": "Biến động điên rồ, có thể kéo ngược mạnh — bắt buộc vị thế nhỏ, không bồi, không margin; giữ tới T1/2027."
    },
    {
      "key": "intc",
      "symbol": "INTC",
      "name": "Intel",
      "group": "Quốc tế",
      "tv": "NASDAQ:INTC",
      "sig": "down",
      "stance": "SHORT — ĐÍCH LẤP GAP 70",
      "aliases": [
        "intel",
        "intc"
      ],
      "oneLiner": "Đã giảm 35–40% từ đỉnh 130–141; KQKD Q2 vượt kỳ vọng nhưng vẫn rơi gần 8% — đích tiếp theo lấp gap vùng 70.",
      "thesis": [
        {
          "title": "Cập nhật 26/07: vượt kỳ vọng vẫn rơi 8%",
          "body": "Intel công bố Q2 vượt kỳ vọng, mở phiên after-hours tăng 11% rồi \"xìu xuống rất nhanh\", phiên thứ Sáu đóng giảm gần 8%. Lý do theo Thái Phạm: dòng tiền âm, mảng Foundry lỗ rất lớn, dự kiến đầu tư tiếp 20 tỷ đô vào AI năm 2026 và có mùi phát hành cổ phiếu/trái phiếu pha loãng. Luận điểm gốc ông giữ từ 6 tuần trước: doanh thu mảng AI Foundry chủ yếu là nội bộ tập đoàn \"tay trái bán tay phải\" — \"mang tính chất hơi lừa đảo một tí xíu\". Mục tiêu kỹ thuật: lấp lại gap vùng 70, tức −50% từ đỉnh theo \"quy tắc 50\"."
        },
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
          "dir": "SHORT (giữ)",
          "sig": "down",
          "entry": "Đỉnh 130–141, đã −35–40%",
          "target": "Lấp gap vùng 70 (−50% từ đỉnh)",
          "stop": "",
          "status": "active",
          "date": "26/07",
          "note": "Q2 vượt kỳ vọng vẫn giảm gần 8% — tín hiệu xác nhận."
        },
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
      ],
      "potential": 3,
      "caution": 3,
      "potentialNote": "Còn dư địa về đích ~77; đã chứng minh đúng hướng (+30%, chốt 1/2).",
      "cautionNote": "Phần dễ đã ăn xong; các nhịp hồi \"loáng ngoáng\" có thể dí ngược 10%+ như giai đoạn đầu."
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
      ],
      "potential": 3,
      "caution": 4,
      "potentialNote": "Thesis dư cung AI/chip nhớ còn nguyên — lãi 20%+ đang chạy.",
      "cautionNote": "Mã \"dã man\" nhất: từng dí ngược 15–16% trước khi có quả ngọt — không margin mới sống sót."
    },
    {
      "key": "samsung",
      "symbol": "005930",
      "name": "Samsung Electronics",
      "group": "Quốc tế",
      "tv": "KRX:005930",
      "sig": "down",
      "stance": "SHORT — VỀ 200.000 → 170.000 KRW",
      "aliases": [
        "samsung",
        "kospi",
        "han quoc"
      ],
      "oneLiner": "Đã giảm 30–32% từ đỉnh, Kospi −31% (từng +85% từ tháng 3) — \"đòn bẩy quá lớn thì sẽ đến lúc sập\".",
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
          "entry": "Đã −30–32% từ đỉnh",
          "target": "200.000, thậm chí 170.000 KRW",
          "stop": "",
          "status": "active",
          "date": "26/07",
          "note": "Phiên 24/07 Samsung −8%, Kospi −5,13%. SK Hynix \"thu hút xong vốn rồi\"."
        },
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
      ],
      "potential": 4,
      "caution": 4,
      "potentialNote": "Short đúng đỉnh đang thuận: margin call dây chuyền, kịch bản 214.000 rồi 170.000 KRW.",
      "cautionNote": "Hàn Quốc \"bạo phát bạo tàn\", giật ±8%/phiên — vị thế phải rất nhỏ, biến động cực lớn."
    },
    {
      "key": "spx",
      "symbol": "S&P 500 · US30",
      "name": "Chỉ số Mỹ — S&P 500 & Dow Jones",
      "group": "Quốc tế",
      "tv": "TVC:SPX",
      "sig": "down",
      "stance": "CHỜ VỀ ~7.000 TÍCH LŨY",
      "aliases": [
        "s&p",
        "sp500",
        "us30",
        "dow"
      ],
      "oneLiner": "Sau FOMC 29/07: Dow −1.100 điểm (−2,2%), S&P 500 −1,5% — phiên giảm mạnh nhất từ T4/2025 vì lợi suất 30 năm vọt 5,2%. Năm bầu cử giữa nhiệm kỳ thường điều chỉnh 17–21% sau tháng 7 — chờ về ~7.000 tích lũy.",
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
          "dir": "CHỜ",
          "sig": "down",
          "entry": "—",
          "target": "Về ~7.000 tích lũy rồi mới lên mốc mới",
          "stop": "Thống kê 7 kỳ bầu cử: −17÷21% sau T7",
          "status": "waiting",
          "date": "26/07",
          "note": "Nasdaq đã giảm mạnh đúng dự báo 3–4 tuần trước."
        },
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
        }
      ],
      "potential": 3,
      "caution": 4,
      "potentialNote": "Căn cứ vĩ mô dày: margin 1,4% vốn hóa ngang đỉnh 2018, IPO hút 220 tỷ đô — \"hết tiền thì phải sập\".",
      "cautionNote": "Chỉ số giật hai đầu trong phiên (-0,8% rồi +0,3%) quét vị thế — short cường độ cao kèm margin là chết trước khi đúng."
    },
    {
      "key": "ndq",
      "symbol": "NASDAQ",
      "name": "Nasdaq Composite",
      "group": "Quốc tế",
      "tv": "TVC:NDQ",
      "sig": "down",
      "stance": "SHORT SAU HỒI 1–2 PHIÊN",
      "aliases": [
        "nasdaq"
      ],
      "potential": 3,
      "caution": 4,
      "potentialNote": "Đã gãy; hồi kỹ thuật là điểm vào short theo đà giảm chung của công nghệ Mỹ.",
      "cautionNote": "Điểm vào phụ thuộc nhịp hồi có thể không đến — \"phiên châu Á nhiều khi cho đi luôn\"; biến động giật hai đầu.",
      "oneLiner": "Từ đỉnh ~30.600 (đầu T6) đã về 27.000 — phiên sau FOMC giảm ~2%. Cơn sốt AI điều chỉnh \"đúng như đã chia sẻ\"; dòng tiền trú phòng thủ/y tế/Apple nhưng các nhóm đó rồi cũng sẽ chỉnh.",
      "thesis": [
        {
          "title": "Kịch bản của Thái Phạm",
          "body": "Tập 38: \"Nasdaq gãy rồi — tuần tới sẽ hồi phục kỹ thuật một hai phiên, sau đó đà giảm tiếp tục.\" Lệnh short vì thế KHÔNG vào ngay như S&P/US30 mà đợi nhịp hồi; rủi ro duy nhất là nhịp hồi không kịp đến — cơn sốt margin Hàn Quốc lan sang và Mỹ đánh Iran có thể khiến \"phiên châu Á cho đi luôn\". Nằm trong bức tranh lớn: công nghệ Mỹ chịu 3 lực đè — IPO/phát hành hút tiền thật, AI capex dư thừa (XAI/Meta cho thuê lại công suất), và mô hình Trung Quốc giá rẻ (Kimi K3 ngang Fable 5/GPT-5.6 với 60% giá)."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "SHORT",
          "sig": "down",
          "entry": "Sau nhịp hồi kỹ thuật 1–2 phiên",
          "target": "Theo đà gãy chung",
          "stop": "Vị thế nhỏ, không margin",
          "status": "waiting",
          "date": "18/07",
          "note": "Canh sát — nhịp hồi có thể rất ngắn hoặc không đến."
        }
      ]
    },
    {
      "key": "nikkei",
      "symbol": "NI225",
      "name": "Nikkei 225 (Nhật)",
      "group": "Quốc tế",
      "tv": "TVC:NI225",
      "sig": "down",
      "stance": "CANH CAO ĐẬP XUỐNG",
      "aliases": [
        "nikkei",
        "nhat ban",
        "ni225"
      ],
      "potential": 3,
      "caution": 3,
      "potentialNote": "Cùng nhịp gãy với Mỹ/Hàn — mục tiêu test lại 58.700 khá rõ.",
      "cautionNote": "Cần kiên nhẫn đợi nhịp hồi để vào; đòn bẩy chỉ số Nhật biến động lớn.",
      "oneLiner": "Hồi kỹ thuật giống Mỹ 1–2 hôm rồi phải về test lại vùng 58.700.",
      "thesis": [
        {
          "title": "Kịch bản",
          "body": "Tập 38: \"Thằng Nhật thì cũng thế thôi — hồi phục kỹ thuật giống Mỹ được một hai hôm, sau đó lại phải về test lại vùng 58.700. Canh cao đập xuống, chẳng có vấn đề gì.\" Nhật nằm trong cụm Đông Á đang chịu margin call dây chuyền cùng Hàn Quốc; nếu cộng hưởng thêm nhịp Mỹ đánh Iran thì \"tuần tới nó đè nặng\"."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "SHORT",
          "sig": "down",
          "entry": "Canh nhịp hồi 1–2 hôm",
          "target": "Test 58.700",
          "stop": "—",
          "status": "waiting",
          "date": "18/07",
          "note": "Cùng cụm short Đông Á với Samsung/Kospi."
        }
      ]
    },
    {
      "key": "mrvl",
      "symbol": "MRVL",
      "name": "Marvell Technology",
      "group": "Quốc tế",
      "tv": "NASDAQ:MRVL",
      "sig": "down",
      "stance": "SHORT — ĐÃ CHỐT 1/2",
      "aliases": [
        "marvell",
        "mrvl"
      ],
      "potential": 3,
      "caution": 4,
      "potentialNote": "Đã có quả ngọt sau giai đoạn chịu đau — còn dư địa giảm cùng nhóm chip.",
      "cautionNote": "Từng kéo ngược gần 10% từ điểm vào — \"thịt lên thịt xuống\"; bắt buộc vị thế nhỏ.",
      "oneLiner": "Vào 299–300 bị kéo lên gần 10% trước khi có quả ngọt — thứ Sáu đã chốt 1/2.",
      "thesis": [
        {
          "title": "Hành trình lệnh",
          "body": "Tập 38: vào short vùng 299–300, bị thị trường \"thịt lên thịt xuống\" kéo ngược gần 10% trước khi giảm. Thứ Sáu tuần 29 đã đóng 1/2 vị thế vì dự phòng nhịp hồi kỹ thuật 1–2 ngày, \"sau đó nó mới giảm tiếp — vài ngày nó mới giảm tiếp\". Cùng thesis với MU/Intel: chu kỳ chip đã qua đỉnh, dư cung AI bắt đầu hiện hình."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "SHORT (giữ 1/2)",
          "sig": "down",
          "entry": "299–300",
          "target": "Giảm tiếp sau nhịp hồi 1–2 ngày",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "Đã chốt 1/2 thứ Sáu."
        }
      ]
    },
    {
      "key": "panw",
      "symbol": "PANW",
      "name": "Palo Alto Networks",
      "group": "Quốc tế",
      "tv": "NASDAQ:PANW",
      "sig": "down",
      "stance": "SHORT — VỊ THẾ NHỎ",
      "aliases": [
        "palo alto",
        "panw",
        "paulo"
      ],
      "potential": 3,
      "caution": 3,
      "potentialNote": "Nhóm cyber security được xác định là nhóm gãy TIẾP THEO sau AI chip/bộ nhớ.",
      "cautionNote": "\"Làm sao vào phát gãy ngay được\" — phải vào từ từ, chấp nhận đợi; đòn bẩy gần 0.",
      "oneLiner": "Đại diện nhóm cyber security — nhóm được gọi tên sẽ gãy sau AI chip.",
      "thesis": [
        {
          "title": "Thesis nhóm cyber",
          "body": "Tập 38: sau AI chip và bộ nhớ, nhóm gãy tiếp theo là cyber security — Palo Alto được nêu tên đầu tiên. Kỷ luật vị thế được nhấn rất kỹ ở kèo này: \"có 10.000 đô thì đánh đúng 10.000–15.000 đô\" (đòn bẩy ~0–1,5x), vào vừa phải vì không thể bắt đúng điểm gãy — \"mình đầu tư phải nhẹ nhàng, cứ hùng hổ all-in thì một nhịp tăng 20% là cháy tài khoản\"."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "SHORT",
          "sig": "down",
          "entry": "Vào từ từ, vị thế nhỏ",
          "target": "Theo nhịp gãy nhóm cyber",
          "stop": "Đòn bẩy ≤1,5x thay stop",
          "status": "active",
          "date": "18/07",
          "note": "Không kỳ vọng gãy ngay."
        }
      ]
    },
    {
      "key": "ftnt",
      "symbol": "FTNT",
      "name": "Fortinet",
      "group": "Quốc tế",
      "tv": "NASDAQ:FTNT",
      "sig": "down",
      "stance": "SHORT — VỊ THẾ NHỎ",
      "aliases": [
        "fortinet",
        "ftnt"
      ],
      "potential": 3,
      "caution": 3,
      "potentialNote": "Cùng rổ cyber security với PANW — \"có thể short được\".",
      "cautionNote": "Cùng kỷ luật với PANW: vào từ từ, không đòn bẩy, chấp nhận chờ.",
      "oneLiner": "Mã thứ hai trong rổ short cyber security của Thái Phạm.",
      "thesis": [
        {
          "title": "Vị trí trong rổ",
          "body": "Tập 38 nêu Fortinet ngay sau Palo Alto: \"thêm một mã nữa cũng bọn cyber security là Fortinet — các anh chị có thể short được.\" Luận điểm và kỷ luật vị thế giống hệt PANW: nhóm phòng thủ mạng là ứng viên gãy kế tiếp khi chu kỳ công nghệ Mỹ đảo chiều, nhưng phải vào nhỏ và kiên nhẫn."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "SHORT",
          "sig": "down",
          "entry": "Vào từ từ, vị thế nhỏ",
          "target": "Theo nhịp gãy nhóm cyber",
          "stop": "Không đòn bẩy",
          "status": "active",
          "date": "18/07",
          "note": "Cùng rổ với PANW, CRWD."
        }
      ]
    },
    {
      "key": "crwd",
      "symbol": "CRWD",
      "name": "CrowdStrike",
      "group": "Quốc tế",
      "tv": "NASDAQ:CRWD",
      "sig": "down",
      "stance": "SHORT — ĐANG BẮT ĐẦU GÃY",
      "aliases": [
        "crowdstrike",
        "crwd",
        "cloud strike"
      ],
      "potential": 3,
      "caution": 3,
      "potentialNote": "Đã bắt đầu cho giảm 3–4%/phiên — sớm nhất rổ cyber xác nhận hướng.",
      "cautionNote": "Mới chớm gãy, có thể còn giật; cùng kỷ luật vị thế nhỏ như cả rổ.",
      "oneLiner": "Mã cyber đầu tiên \"bắt đầu cho giảm 3–4%\" — xác nhận sớm cho cả rổ short.",
      "thesis": [
        {
          "title": "Tín hiệu sớm của rổ",
          "body": "Tập 38: \"ngày hôm nay nhìn CrowdStrike thì nó cũng bắt đầu cho giảm 4%, 3%\" — trong rổ cyber (PANW, FTNT, CRWD) đây là mã xác nhận hướng sớm nhất. Chiến lược chung của rổ không đổi: short với vị thế rất nhỏ, không đòn bẩy, xác định đây là nhóm gãy sau AI chip/bộ nhớ chứ không phải kèo ăn nhanh."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "SHORT",
          "sig": "down",
          "entry": "Đang giảm 3–4%/phiên",
          "target": "Theo nhịp gãy nhóm cyber",
          "stop": "Không đòn bẩy",
          "status": "active",
          "date": "18/07",
          "note": "Tín hiệu sớm nhất trong rổ."
        }
      ]
    },
    {
      "key": "amd",
      "symbol": "AMD",
      "name": "AMD",
      "group": "Quốc tế",
      "tv": "NASDAQ:AMD",
      "sig": "down",
      "stance": "HỒI LÀ GÃY TIẾP",
      "aliases": [
        "amd"
      ],
      "potential": 2,
      "caution": 3,
      "potentialNote": "Vẫn trong đà gãy nhưng đã giảm nhiều — phần dễ của kèo đã qua.",
      "cautionNote": "Các nhịp hồi \"loáng ngoáng\" dễ dí ngược người short mới; theo dõi hơn là mở lệnh mới.",
      "oneLiner": "\"AMD cũng vậy thôi — có thể hồi phục chút xíu rồi lại gãy.\"",
      "thesis": [
        {
          "title": "Trong bức tranh bán dẫn",
          "body": "Tập 38 nhắc AMD ngắn gọn nhưng rõ: \"AMD cũng có thể hồi phục chút xíu, lại gãy thôi\" — cùng khuôn với Intel (đích ~77) và cả nhóm semis đã qua đỉnh kéo rướn. Call gốc \"semiconductor kéo rướn sẽ chỉnh mạnh\" từ 12/06 đã được scorecard ghi nhận ĐÚNG. Với người ngoài cuộc, đây là mã theo dõi xác nhận xu hướng nhóm hơn là kèo vào mới."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "THEO DÕI / SHORT NHỊP HỒI",
          "sig": "down",
          "entry": "Nhịp hồi kỹ thuật",
          "target": "Gãy tiếp theo nhóm semis",
          "stop": "—",
          "status": "waiting",
          "date": "18/07",
          "note": "Không phải kèo chính — kèo chính là Intel/MU."
        }
      ]
    },
    {
      "key": "nvda",
      "symbol": "NVDA",
      "name": "Nvidia",
      "group": "Quốc tế",
      "tv": "NASDAQ:NVDA",
      "sig": "avoid",
      "stance": "TRÁNH — KHÔNG MUA KHÔNG SHORT",
      "aliases": [
        "nvidia",
        "nvda"
      ],
      "potential": 2,
      "caution": 4,
      "potentialNote": "Không có kèo cụ thể — \"ngày kéo ngày giảm\", hai chiều đều khó ăn.",
      "cautionNote": "Trung tâm của thesis dư cung AI: khách hàng lớn FOMO xong phải cho thuê lại công suất; mô hình TQ giá 60% đe dọa trực tiếp.",
      "oneLiner": "\"Ngày kéo ngày giảm\" — đứng ngoài; là tâm điểm của thesis dư cung AI.",
      "thesis": [
        {
          "title": "Vì sao đứng ngoài cả hai chiều",
          "body": "Từ Tập 37 Thái Phạm đã xếp Nvidia vào diện \"tránh — đụng MA200 bật, khó ăn\"; Tập 38 mô tả trạng thái \"ngày kéo ngày giảm\" và sẽ giảm chung với chỉ số. Nhưng luận điểm dài hạn mới là phần đáng đọc: nhu cầu RAM/chip đắt tiền của Nvidia đứng trước hai câu hỏi — dư thừa công suất AI (XAI, Meta đầu tư xong phải cho thuê lại) và lựa chọn Trung Quốc giá rẻ (Kimi K3 của Alibaba/Tencent ngang Fable 5/GPT-5.6 với 60% giá); \"Jensen Huang bán quốc xẻng thì phải ca ngợi câu chuyện thế kỷ, nhưng người mua phải đặt câu hỏi về tương lai.\""
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "ĐỨNG NGOÀI",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "Khó ăn cả hai chiều; theo dõi như chỉ báo tâm lý AI."
        }
      ]
    },
    {
      "key": "googl",
      "symbol": "GOOGL",
      "name": "Alphabet (Google)",
      "group": "Quốc tế",
      "tv": "NASDAQ:GOOGL",
      "sig": "down",
      "stance": "ĐẢO CHIỀU — ĐÍCH 270 THÁNG 9",
      "aliases": [
        "google",
        "googl",
        "alphabet"
      ],
      "potential": 3,
      "caution": 4,
      "potentialNote": "Là kèo short có luận điểm tài chính rõ nhất tuần — số liệu dòng tiền công bố, không phải suy đoán.",
      "cautionNote": "Đảo chiều quan điểm so với tuần trước (từng là mã Mỹ duy nhất có kèo MUA) — ai đã mua ~320 cần đọc lại luận điểm.",
      "oneLiner": "Từ \"chờ mua ~320\" nay chuyển hẳn sang tiêu cực: dòng tiền tự do ÂM 5,9 tỷ đô lần đầu lịch sử, đích 270 trong tháng 9.",
      "thesis": [
        {
          "title": "Vì sao đổi từ MUA sang TRÁNH (26/07)",
          "body": "Báo cáo quý ra ngày 23–24/07 làm thay đổi hoàn toàn bức tranh. Lợi nhuận kỷ lục nhưng bản chất đến từ 77,1 tỷ đô LÃI CHƯA THỰC HIỆN, chủ yếu nhờ khoản đầu tư vào SpaceX — không phải tiền thật từ kinh doanh cốt lõi. Trong khi đó dòng tiền tự do ÂM 5,9 tỷ đô, lần đầu tiên trong lịch sử niêm yết. Nguyên nhân: guidance capex AI lên 205 tỷ đô cho năm 2026 và 2027 còn tăng tiếp → phải huy động hơn 100 tỷ đô tiền thật (phát hành 84,75 tỷ cổ phiếu + 20,3 tỷ trái phiếu). Thái Phạm chỉ ra Google đã cố kéo giá lên vùng ~400 để phát hành, và từ đó đã giảm 20%. Dự báo: sau khi tích lũy, nhiều khả năng về mốc 270 trong tháng 9. Rủi ro thêm: án phạt từ Ủy ban châu Âu. Ông đặt trong bối cảnh \"vòng xoáy con rắn tự ăn đuôi\" — hyperscaler rót tiền vào AI labs rồi các hãng chip lại dùng tiền đó mua cloud của chính hyperscaler; Moody's đã cảnh báo."
        },
        {
          "title": "Kèo mua ngược dòng rổ short",
          "body": "Trong khi gần như toàn bộ danh sách Mỹ là short/tránh, Google từ Tập 37 được đặt kèo MUA với điều kiện giá đợi về ~320. Tập 38 bổ sung bối cảnh ngắn hạn: Google vừa phát hành hút 85 tỷ đô khỏi thị trường và \"sẽ giảm chung với US500\" — tức nhịp chỉnh chưa xong, kiên nhẫn đợi về vùng mục tiêu thay vì mua đuổi."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "TRÁNH / SHORT",
          "sig": "avoid",
          "entry": "Đã giảm 20% từ vùng ~400",
          "target": "Về 270 trong tháng 9",
          "stop": "FCF âm 5,9 tỷ đô — lần đầu lịch sử",
          "status": "active",
          "date": "26/07",
          "note": "Đảo chiều so với kèo \"chờ mua ~320\" tuần trước."
        }
      ]
    },
    {
      "key": "nflx",
      "symbol": "NFLX",
      "name": "Netflix",
      "group": "Quốc tế",
      "tv": "NASDAQ:NFLX",
      "sig": "avoid",
      "stance": "TRÁNH — YẾU TỐ CHÍNH TRỊ",
      "aliases": [
        "netflix",
        "nflx"
      ],
      "potential": 1,
      "caution": 4,
      "potentialNote": "Không có kèo — bị loại khỏi danh sách theo dõi từ trước.",
      "cautionNote": "Rủi ro phi tài chính: mâu thuẫn cá nhân giữa lãnh đạo Netflix và chính quyền đương nhiệm.",
      "oneLiner": "\"Thời của Trump — đừng đầu tư vào Netflix\": rủi ro chính trị phi tài chính.",
      "thesis": [
        {
          "title": "Một loại rủi ro khác",
          "body": "Tập 38: \"May, tôi không côn các anh chị mua Netflix. Thời Donald Trump ghét Netflix lắm — trong HĐQT Netflix có nhân vật mâu thuẫn thù hằn ghê gớm với đội này. Thời của ông Trump thì đừng đầu tư vào Netflix.\" Đây là ví dụ về rủi ro phi tài chính (chính trị – quan hệ cá nhân) mà báo cáo tài chính không thể hiện — cùng họ với bài học PNJ ở Việt Nam: rủi ro ngoài sổ sách thì tránh, không phân tích nội tại nữa."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "TRÁNH",
          "sig": "avoid",
          "entry": "—",
          "target": "Hết nhiệm kỳ rủi ro chính trị",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "Rủi ro phi tài chính — không định lượng được."
        }
      ]
    },
    {
      "key": "dell",
      "symbol": "DELL",
      "name": "Dell Technologies",
      "group": "Quốc tế",
      "tv": "NYSE:DELL",
      "sig": "avoid",
      "stance": "PHÂN PHỐI 467 → 370 — TRÁNH",
      "aliases": [
        "dell"
      ],
      "potential": 3,
      "caution": 3,
      "potentialNote": "Mẫu hình phân phối rất rõ; ông dự báo \"sẽ đến Dell, tương tự như Intel\".",
      "cautionNote": "Chưa có mục tiêu giá cụ thể như Intel; từng bị thổi gấp ~4 lần nên biến động mạnh.",
      "oneLiner": "Mẫu hình phân phối rõ ràng khung 467 → 370 sau khi bị thổi từ 121 lên ~460 — \"thời gian tới sẽ đến Dell, tương tự Intel\".",
      "thesis": [
        {
          "title": "Ứng viên gãy tiếp theo sau Intel",
          "body": "Video 24/07: Dell đang hình thành mẫu hình phân phối rất rõ ràng ở khung 467 xuống 370 USD. Trước đó cổ phiếu bị \"thổi\" từ vùng 121–126 lên khoảng 460 USD/cổ phần (gấp ~4 lần), một phần nhờ những phát biểu kiểu \"con tôi thích dùng máy Dell\" của Trump. Thái Phạm xếp Dell vào cùng nhóm với Intel — \"thời gian tới sẽ đến Dell... cũng tương tự như Intel\", tức chu kỳ thổi giá bằng câu chuyện AI rồi xẹp."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "TRÁNH / SHORT",
          "sig": "avoid",
          "entry": "Phân phối khung 467 → 370",
          "target": "\"Tương tự như Intel\"",
          "stop": "—",
          "status": "active",
          "date": "24/07",
          "note": "Từng bị thổi 121 → 460."
        }
      ]
    },
    {
      "key": "rtx",
      "symbol": "RTX · LMT",
      "name": "Quốc phòng Mỹ (RTX, Lockheed)",
      "group": "Quốc tế",
      "tv": "NYSE:RTX",
      "sig": "up",
      "stance": "THEO DÕI MUA — VỀ ĐỈNH CŨ",
      "aliases": [
        "rtx",
        "lockheed",
        "quoc phong"
      ],
      "potential": 3,
      "caution": 3,
      "potentialNote": "Nhóm hưởng lợi trực tiếp nếu Mỹ phát động tấn công lớn vào Iran — kịch bản ông cho là \"sớm muộn sẽ đánh\".",
      "cautionNote": "Kèo phụ thuộc tin chiến sự; nếu đàm phán thành thì mất động lực. Chưa nêu điểm vào/cắt lỗ cụ thể.",
      "oneLiner": "Nhóm duy nhất được nhắc theo hướng MUA tuần này: \"khả năng cao cái gì xảy ra với RTX sẽ xảy ra với Lockheed — quay về đỉnh cũ\".",
      "thesis": [
        {
          "title": "Kèo theo kịch bản chiến sự",
          "body": "Tập 40: \"Trong tuần tới tôi nghĩ rằng các cổ phiếu về mặt quân sự có thể theo dõi được — khả năng cao cái gì xảy ra với RTX thì nó sẽ xảy ra với Lockheed, nó sẽ quay trở về đỉnh cũ. Khả năng đầu tuần nó sẽ test lại và nó sẽ vọt lên bởi vì đánh phụ lắm.\" Luận điểm nền: ông không tin kịch bản đàm phán hòa bình vì phe chủ chiến Iran đang rất mạnh và giáo chủ mới theo đuổi hạt nhân đến cùng; \"đánh hay không thì sớm muộn sẽ đánh thôi\"."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "THEO DÕI MUA",
          "sig": "up",
          "entry": "Test lại đầu tuần",
          "target": "Quay về đỉnh cũ",
          "stop": "Phụ thuộc tin chiến sự",
          "status": "waiting",
          "date": "26/07",
          "note": "Nhóm hưởng lợi nếu Mỹ tấn công lớn."
        }
      ]
    },
    {
      "key": "ads",
      "symbol": "ADS",
      "name": "Adidas",
      "group": "Quốc tế",
      "tv": "XETR:ADS",
      "sig": "wait",
      "stance": "ĐÃ CHỐT LỜI — ĐÓNG KÈO",
      "aliases": [
        "adidas",
        "aidas"
      ],
      "potential": 1,
      "caution": 2,
      "potentialNote": "Kèo đã kết thúc — \"hết World Cup rồi\", không còn catalyst.",
      "cautionNote": "Không còn vị thế; chỉ lưu làm lịch sử minh bạch các kèo đã đóng.",
      "oneLiner": "Kèo mua từ trước đã chốt lời: \"đợi mãi không lên 190 thì thôi, chốt\".",
      "thesis": [
        {
          "title": "Kèo đã đóng",
          "body": "Tập 38 tổng kết ngắn: Adidas là kèo mua từ mùa World Cup, \"đợi mãi không lên được trăm chín mấy thì thôi chốt lời — hết World Cup rồi\". Được giữ lại trong Sổ mã làm ví dụ về kỷ luật đóng kèo khi catalyst kết thúc, thay vì gồng chờ mục tiêu cũ."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "ĐÃ CHỐT LỜI",
          "sig": "wait",
          "entry": "Mua từ mùa World Cup",
          "target": "Kỳ vọng cũ ~190 — không đạt, chốt sớm",
          "stop": "—",
          "status": "done",
          "date": "18/07",
          "note": "Catalyst hết → đóng kèo, không tiếc."
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
      "stance": "LONG 4.030 · CHÊNH TRONG NƯỚC ĐÃ VỀ 8–9TR",
      "aliases": [
        "vang",
        "gold",
        "xau"
      ],
      "oneLiner": "Long 4.030 cắt lỗ 3.930; chênh trong nước đã về 8–9tr — điều kiện mua vật chất đạt. 30/07 sau FOMC: hồi kỹ thuật từ 3.980–4.000 có thể lên ~4.300, nhưng \"vẫn còn nguyên cửa\" rơi về 3.000.",
      "thesis": [
        {
          "title": "Cập nhật 24–26/07: chênh trong nước sập về 8–9 triệu",
          "body": "Diễn biến đáng chú ý nhất: sau khi nhà nước đánh mạnh vàng lậu và kim cương lậu, chênh lệch giá vàng trong nước so với thế giới thu hẹp còn khoảng 8–9 triệu đồng/lượng (video 24/07) — trước đó vùng 19–20 triệu; giá trong nước về 140 triệu/lượng (Tập 40). Đây chính là điều kiện Thái Phạm từng đặt ra để mua vàng vật chất (chênh ≤10–12 triệu). Về thương hiệu, ông phân biệt rõ: SJC là doanh nghiệp nhà nước nên \"mua đâu bán đấy\", khác PNJ đang dính kim cương/vàng rởm — người giữ SJC không phải bán ra. Về giá thế giới: vàng 4.030, kịch bản hồi kỹ thuật lên 4.300 nếu tích lũy được vùng 4.000; nhưng nếu Fed tăng lãi tháng 9 thì \"khá hợp lý\" để có chân giảm tiếp; vùng đẹp dài hạn 3.600–3.700."
        },
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
        },
        {
          "title": "30/07 — Sau FOMC: hồi kỹ thuật rồi vẫn hướng xuống",
          "body": "Fed giữ nguyên lãi suất nhưng lợi suất trái phiếu Mỹ 30 năm vọt 5,2% khiến USD còn đà hồi. Vàng từ vùng 3.980–4.000 \"có quyền kỳ vọng\" hồi phục kỹ thuật lên ~4.300; sau đó Thái Phạm \"vẫn cho rằng còn nguyên cái cửa\" giá vàng rơi về mức 3.000 (kịch bản gắn với Fed tăng lãi tháng 9). Trước mắt: cứ để thị trường hồi kỹ thuật đã."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "LONG",
          "sig": "wait",
          "entry": "4.030",
          "target": "Hồi kỹ thuật 4.300; dài hạn chờ 3.600–3.700",
          "stop": "3.930",
          "status": "active",
          "date": "26/07",
          "note": "Chỉ short khi hồi về 4.400 kèm tin Fed tăng lãi."
        },
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
      ],
      "potential": 4,
      "caution": 3,
      "potentialNote": "Chênh trong nước đã về 8–9tr (từ 19–20tr) — điều kiện mua vật chất ông đặt ra đã đạt; hồi kỹ thuật có xác suất lên 4.300.",
      "cautionNote": "Nếu Fed tăng lãi T9 (82%) thì còn \"chân số 3\" về 3.600–3.700, thậm chí ~3.300; ngắn hạn có thể quét 3.890–3.900."
    },
    {
      "key": "oil",
      "symbol": "WTI",
      "name": "Dầu WTI / Brent",
      "group": "Hàng hóa & Crypto",
      "tv": "TVC:USOIL",
      "sig": "up",
      "stance": "TÍCH LŨY — ĐÃ CHỈNH VỀ 84–88",
      "aliases": [
        "dau",
        "wti",
        "brent",
        "oil"
      ],
      "oneLiner": "Điều chỉnh sau tin ngưng bắn rồi bật +6,1% phiên 29/07: Brent 88, WTI 84,5 (từng chạm ~100). Giữ kịch bản tích lũy vùng cao; đánh lớn Iran → 120–130, hòa bình → 85–90.",
      "thesis": [
        {
          "title": "Cập nhật 24–26/07: chạm 100,81 — nguồn cung tê liệt ba mặt",
          "body": "Dầu chạm 100,65–100,81 USD, hồi 43,28% từ đáy 70,87 chỉ trong ~3 tuần. Ba tuyến cung cùng nghẽn: Hormuz (7 triệu thùng/ngày ≈ 20% dầu thế giới) — số tàu qua từ bình quân ~100/ngày năm 2025 nay về gần 0; Biển Đỏ/Bab el-Mandeb (5 triệu thùng/ngày) — Houthi lần đầu tấn công 2 tàu chở dầu Ả Rập Saudi khiến 7 tàu đổi hướng, xuất khẩu Saudi dự kiến −36%; Biển Đen và tuyến CPC của Kazakhstan (~1% nguồn cung toàn cầu, 80% xuất khẩu Kazakhstan) bị drone Ukraine đánh, phải đóng cửa lần hai. Dự trữ: toàn cầu −1,3 tỷ thùng/5 tháng; SPR Mỹ còn 60 triệu thùng ≈ 6 tuần tiêu thụ, thấp nhất kể từ tháng 3/1983 (đỉnh 11–12 tuần); Trung Quốc còn 3–4 tháng; Nhật ở mức báo động. Ba kịch bản: đánh lớn → vượt 120, tệ hơn 150; đàm phán thành → 85–90 (không về 65 \"vì thế giới thiếu dầu\"); tích lũy vùng cao — ông nghiêng kịch bản này."
        },
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
          "dir": "GIỮ LONG",
          "sig": "up",
          "entry": "Đã lên >100 từ đáy 70,87",
          "target": "Đánh lớn → >120 (tệ hơn >150)",
          "stop": "Hòa bình → 85–90",
          "status": "active",
          "date": "26/07",
          "note": "Nghiêng kịch bản tích lũy vùng cao; giá giờ phụ thuộc tin tức."
        },
        {
          "expertId": "thai-pham",
          "dir": "LONG (giữ)",
          "sig": "up",
          "entry": "Từ vùng 70",
          "target": "Đã lên 88–98 · có thể 95+ nếu không kích",
          "stop": "Dự trữ Mỹ còn ~6 tuần",
          "status": "active",
          "date": "23/07",
          "note": "\"100 không thể là đáy\"; dầu tăng đẩy biên lợi nhuận đạm (DCM/DPM)."
        },
        {
          "expertId": "thai-pham",
          "dir": "ĐÃ CHỐT NHỊP 1",
          "sig": "up",
          "entry": "Long từ ~70",
          "target": "Ăn ~12% vùng 80 rồi lên 88–98",
          "stop": "—",
          "status": "done",
          "date": "18/07",
          "note": "Scorecard: call dầu 87–90 → ĐÚNG."
        }
      ],
      "potential": 3,
      "caution": 3,
      "potentialNote": "Còn dư địa nếu Trump đánh lớn (>120, tệ hơn >150); dự trữ cạn kiệt là nền FA vững.",
      "cautionNote": "Phần hồi 43% đã đi qua; giá giờ phụ thuộc TIN TỨC nên biến động mạnh hai chiều — ông nghiêng kịch bản tích lũy quanh 92–100."
    },
    {
      "key": "btc",
      "symbol": "BTC",
      "name": "Bitcoin",
      "group": "Hàng hóa & Crypto",
      "tv": "BINANCE:BTCUSDT",
      "sig": "avoid",
      "stance": "ĐỨNG NGOÀI — BANANA 3 ĐÍCH 71–72K",
      "aliases": [
        "bitcoin",
        "btc",
        "crypto"
      ],
      "oneLiner": "BTC 65.000; nhịp tăng chỉ do đóng lệnh short chứ không phải tiền tổ chức (T6 rút ròng 4,5 tỷ đô) — xác suất về 40–41k rất cao. 30/07: \"2026 không phải là năm của Bitcoin\" — banana lần ba đang hình thành.",
      "thesis": [
        {
          "title": "Cập nhật 24–26/07: banana lần ba + dòng tiền tổ chức rút",
          "body": "Mẫu hình \"banana chuối\" lần ba: banana 1 từ 81.000 lên 97.000, banana 2 từ 60.000 lên 82.000, banana 3 bắt đầu từ 57.800 và nhiều khả năng kết thúc ở 71.000–72.000. Quan trọng hơn giá: lực mua hiện tại KHÔNG phải dòng tiền tổ chức mới mà là thanh khoản yếu cộng đóng lệnh short — tháng 6 tổ chức rút ròng 4,5 tỷ đô, riêng BlackRock 3,56 tỷ (75%). Đồ thị tuần cho kịch bản retrace về 50.000 hoàn toàn khả thi, và theo chu kỳ 4 năm (thường giảm tới ~70%) thì xác suất về 40.000–41.000 là rất cao. Ông tự nhận \"không phải người đam mê bắt đáy Bitcoin\"."
        },
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
          "dir": "ĐỨNG NGOÀI",
          "sig": "avoid",
          "entry": "Đang 65.000",
          "target": "Nhịp hồi tối đa 71–72k",
          "stop": "Xác suất cao về 40–41k",
          "status": "active",
          "date": "26/07",
          "note": "Tổ chức rút ròng 4,5 tỷ đô tháng 6 (BlackRock 3,56 tỷ)."
        },
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
      ],
      "potential": 2,
      "caution": 4,
      "potentialNote": "Chỉ còn kèo short fake pump 69–70k; mua thật phải đợi ~50k — xa vùng hiện tại.",
      "cautionNote": "Cấu trúc \"banana\" gãy, không còn câu chuyện thay thế tiền pháp định; Fed không hạ lãi — thiếu nhiên liệu tăng."
    },
    {
      "key": "silver",
      "symbol": "XAG/USD",
      "name": "Bạc",
      "group": "Hàng hóa & Crypto",
      "tv": "OANDA:XAGUSD",
      "sig": "wait",
      "stance": "ĂN THEO VÀNG",
      "aliases": [
        "bac",
        "silver",
        "xag"
      ],
      "potential": 2,
      "caution": 3,
      "potentialNote": "Kèo phụ thuộc hoàn toàn kịch bản vàng — vàng hồi 4.300 thì bạc ~68 (theo Tập 37).",
      "cautionNote": "Fair value được ước ~50 — mua đuổi phần chênh trên đó là trả giá cho kỳ vọng; vàng chưa tạo đáy thì bạc chưa có kèo riêng.",
      "oneLiner": "Không có kèo độc lập — đi theo vàng; vàng chưa tạo đáy thì bạc đứng ngoài.",
      "thesis": [
        {
          "title": "Kèo vệ tinh của vàng",
          "body": "Từ Tập 37: bạc được xác định \"ăn theo vàng\" — kịch bản vàng hồi 4.300 thì bạc lên ~68, trong khi fair value ước ~50. Sang Tập 38, khi vàng chuyển sang kịch bản chờ quét đáy 3.600–3.700, bạc không có kèo riêng: đợi vàng tạo đáy xong mới tính, và cũng áp dụng nguyên tắc \"đợi giá chiết khấu\" thay vì mua đuổi phần kỳ vọng."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "CHỜ",
          "sig": "wait",
          "entry": "Đợi vàng tạo đáy 3.600–3.700",
          "target": "Vàng hồi 4.300 → bạc ~68",
          "stop": "Fair value ~50 làm mốc định giá",
          "status": "waiting",
          "date": "18/07",
          "note": "Kèo vệ tinh, không đi trước vàng."
        }
      ]
    }
  ],
  "briefing": {
    "updated": "30/07/2026",
    "expertId": "thai-pham",
    "episode": "Tập 40 · Tuần 30",
    "dateLabel": "26/07/2026",
    "kicker": "Bản tin hội viên",
    "title": "Bộ ba siết",
    "subtitle": "Dự báo đáy tháng 8–9, hồi phục cuối năm",
    "lead": "Lần đầu tiên Thái Phạm đưa ra một lịch trình có mốc thời gian: tháng 7 là tháng khắc nghiệt nhất, thị trường có thể tạo đáy trong tháng 8–9 đúng lúc Fed tăng lãi, rồi hồi phục khá vào cuối năm. Giữ tiền là để thu gom cho mùa xuân đó — tuần 30 vẫn nguyên tiền 60 / cổ 40.",
    "timeline": [
      {
        "phase": "Tháng 7",
        "label": "Khắc nghiệt",
        "note": "VN-Index −101 điểm chỉ trong tuần 20–24/07, đóng 1.686. Hàng cơ bản cuối cùng (MWG, GMD) gãy.",
        "state": "past",
        "sig": "down"
      },
      {
        "phase": "Hôm nay",
        "label": "Giữ tiền 60/40",
        "note": "Tuần 30 không đổi chiến lược từ tuần 28. Cổ phiếu \"rẻ lắm luôn\" nhưng chưa giải ngân.",
        "state": "now",
        "sig": "wait"
      },
      {
        "phase": "Tháng 8–9",
        "label": "Vùng tạo đáy",
        "note": "Thị trường phòng ngừa trước việc Fed tăng lãi (82%) → có thể tạo đáy. Trùng mốc quỹ mới nổi giải ngân sau nâng hạng.",
        "state": "next",
        "sig": "warn"
      },
      {
        "phase": "Cuối năm",
        "label": "Hồi phục",
        "note": "Nhịp hồi \"cũng khá\" — sóng 10–20% là bình thường. Đây là lý do phải giữ tiền và hàng tốt từ bây giờ.",
        "state": "later",
        "sig": "up"
      }
    ],
    "squeezes": [
      {
        "name": "Dầu & Iran",
        "status": "ĐÃ XẢY RA",
        "sig": "up",
        "headline": ">100 USD",
        "headlineNote": "hồi 43% từ đáy 70,87 chỉ trong 3 tuần",
        "body": "Ba tuyến cung cùng nghẽn trong khi kho dự trữ toàn cầu đã mỏng nhất kể từ 1983. Gốc rễ không phải hạt nhân mà là petrodollar: Iran đòi thu phí 20% tàu qua Hormuz và đòi trả bằng nhân dân tệ — \"việc mà Mỹ không thể không đánh\".",
        "stats": [
          {
            "v": "7 triệu thùng/ngày",
            "k": "Hormuz — 20% dầu thế giới, số tàu qua về gần 0"
          },
          {
            "v": "60 triệu thùng",
            "k": "SPR Mỹ còn ~6 tuần — thấp nhất từ T3/1983"
          },
          {
            "v": "−1,3 tỷ thùng",
            "k": "Tồn kho toàn cầu giảm trong 5 tháng"
          }
        ],
        "outcome": "Đánh lớn → vượt 120, tệ hơn 150. Đàm phán thành cũng chỉ về 85–90 \"vì thế giới thiếu dầu\"."
      },
      {
        "name": "AI xẹp",
        "status": "ĐANG DIỄN RA",
        "sig": "down",
        "headline": "−5,9 tỷ đô",
        "headlineNote": "dòng tiền tự do Google âm lần đầu trong lịch sử",
        "body": "Lợi nhuận kỷ lục của Google thực chất đến từ 77,1 tỷ đô lãi CHƯA thực hiện của khoản đầu tư SpaceX, trong khi capex AI ngốn hết tiền thật. Vòng xoáy \"con rắn tự ăn đuôi\" mà Moody's đã cảnh báo.",
        "stats": [
          {
            "v": "205 tỷ đô",
            "k": "Capex AI của Google năm 2026, 2027 còn tăng"
          },
          {
            "v": ">100 tỷ đô",
            "k": "Đã phát hành cổ phiếu + trái phiếu để nuôi capex"
          },
          {
            "v": "−20%",
            "k": "Google đã giảm từ vùng ~400 sau khi phát hành"
          }
        ],
        "outcome": "Đích 270 trong tháng 9. Lan sang chip nhớ (Intel về 70, MU, SanDisk −40%) và cyber security."
      },
      {
        "name": "Thuế quan",
        "status": "HIỆU LỰC 24/07",
        "sig": "warn",
        "headline": "12,5%",
        "headlineNote": "mức áp cho Việt Nam theo đạo luật 301",
        "body": "Trump mở mặt trận thương mại với 60 quốc gia, mức 10–12% — Việt Nam chịu 12,5%, thuộc nhóm cao nhất cùng Thái Lan và Trung Quốc. Ông đánh giá \"chứng minh cỡ nào cũng bị đánh thuế\" vì Mỹ cần bù ngân sách sau khi thuế đối ứng bị tuyên vi hiến.",
        "stats": [
          {
            "v": "4 ngành",
            "k": "Dệt may, da giày, gỗ, thủy sản trực diện"
          },
          {
            "v": "26.490",
            "k": "USD/VND bán ra — chênh mua/bán giãn rộng"
          },
          {
            "v": "82%",
            "k": "Xác suất Fed tăng lãi tháng 9 (Polymarket)"
          }
        ],
        "outcome": "Lạm phát Mỹ T7–T8 chắc chắn trên 3%; \"hạ lãi suất là không thể và gần như bằng không\"."
      }
    ],
    "stats": [
      {
        "value": "1.686",
        "label": "VN-Index đóng tuần",
        "delta": "−101 điểm tuần 20–24/07",
        "sig": "down"
      },
      {
        "value": "100,81",
        "label": "Dầu (USD/thùng)",
        "delta": "+43% từ đáy 70,87",
        "sig": "up"
      },
      {
        "value": "4.030",
        "label": "Vàng (USD/oz)",
        "delta": "Long, cắt lỗ 3.930",
        "sig": "wait"
      },
      {
        "value": "10x",
        "label": "P/E VN loại nhóm Vin",
        "delta": "Chỉ 6% thời gian lịch sử",
        "sig": "up"
      },
      {
        "value": "82%",
        "label": "Fed tăng lãi tháng 9",
        "delta": "29/07 đã giữ nguyên (9–3) · cá cược lên 72%",
        "sig": "warn"
      },
      {
        "value": "8–9tr",
        "label": "Chênh vàng trong nước",
        "delta": "Từ 19–20tr — điều kiện mua đã đạt",
        "sig": "up"
      }
    ],
    "quote": {
      "text": "Rẻ không phải là mua một lần và cho hết. Bởi vì rẻ nó có thể rẻ hơn — cái rẻ có thể rẻ hơn nữa và cái đắt nó có thể đắt hơn nữa.",
      "source": "Thái Phạm · video công khai 26/07"
    },
    "todo": [
      {
        "act": "GIỮ",
        "sig": "wait",
        "what": "Tiền 60 / cổ 40",
        "why": "Không đổi từ tuần 28 — tích lũy tiền để gom hàng khi mùa xuân tới."
      },
      {
        "act": "MUA",
        "sig": "up",
        "what": "VNM · VCB · BID",
        "why": "VNM \"vùng giá rất rẻ\"; VCB/BID đã dưới cả đáy tháng 4/2025."
      },
      {
        "act": "GIỮ CHẶT",
        "sig": "up",
        "what": "DCM · DPM · TCX · SCS · BVBank",
        "why": "Tỉ trọng lớn, căn bản với nền kinh tế — không bán vùng này."
      },
      {
        "act": "TRÁNH",
        "sig": "avoid",
        "what": "PNJ · FPT · HPG · MWG · SSI",
        "why": "PNJ phá đáy 6 năm; FPT dò đáy 95→74→62; SSI sườn phải có thể về 20."
      },
      {
        "act": "CHỐT",
        "sig": "down",
        "what": "MSB",
        "why": "\"Chốt lời đi, đừng để lúc nó gãy — nó chưa phân phối xong thôi.\""
      },
      {
        "act": "CHỜ",
        "sig": "wait",
        "what": "VN-Index 1.600 · TCB về 22",
        "why": "Mốc giải ngân mạnh; TCB chưa chiết khấu sâu như VCB/BID."
      }
    ],
    "stockView": {
      "title": "Tổng hợp ý kiến chứng khoán",
      "dateRange": "20–26/07/2026",
      "verdict": "Lần đầu tiên cả ba chuyên gia cùng nói định giá đã rẻ THẬT — nhưng cả ba cũng cùng nói chưa có tín hiệu đáy. Khác biệt duy nhất là tốc độ giải ngân: Thái Phạm chờ mốc 1.600, AzFin nhặt dần ngay, CK 5 phút đợi cổ phiếu \"dừng giảm\".",
      "experts": [
        {
          "expertId": "thai-pham",
          "stanceLabel": "Chờ mốc",
          "sig": "wait",
          "allocation": "Tiền 60 / cổ 40",
          "view": "Cổ phiếu \"rẻ lắm luôn\" nhưng chưa giải ngân vì VIC/VHM còn treo cao, khối ngoại còn bán ròng mỗi tuần vài nghìn tỷ. Đợi VN-Index về 1.600; dự báo đáy tháng 8–9, hồi phục cuối năm.",
          "buy": "VNM · VCB · BID (dưới đáy T4/2025) · giữ chặt DCM/DPM, TCX, SCS, BVBank",
          "avoid": "PNJ · FPT · HPG · MWG · SSI · MSB (chốt lời) · VPB/MB \"được ít chết nhiều\"",
          "quote": "Rẻ không phải là mua một lần và cho hết."
        },
        {
          "expertId": "azfin",
          "stanceLabel": "Nhặt dần ngay",
          "sig": "up",
          "allocation": "Cổ phiếu ~90% danh mục tài chính",
          "view": "Đo bằng số: P/E thị trường ~12x, loại nhóm Vin còn ~10x — mức chỉ xuất hiện ở 6% thời gian giao dịch lịch sử. Nguyên nhân giảm là cung 200.000 tỷ áp đảo cầu chứ không phải doanh nghiệp xấu.",
          "buy": "Sáu nhóm: VLXD · chứng khoán (P/B~1, P/E<10) · bank (có mã P/E<6x) · bán lẻ · điện (nhiệt + tái tạo) · BĐS khu công nghiệp",
          "avoid": "Thủy điện (El Niño) · dồn tiền một mã (bài học PNJ, PC1)",
          "quote": "Giá cổ phiếu có thể chiết khấu 50% so với giá trị thực trong giai đoạn xấu."
        },
        {
          "expertId": "ck-5-phut",
          "stanceLabel": "Đợi dừng giảm",
          "sig": "wait",
          "allocation": "Giữ hàng, bảo vệ sức mua",
          "view": "Đồng ý với chủ tịch SSI rằng định giá rẻ, nhưng phiên 23/07 nỗ lực tạo đáy thất bại, nến Harami chỉ chững đà giảm — \"hầu hết tất cả cổ phiếu đều chưa có dấu hiệu tạo đáy\".",
          "buy": "Cổ phiếu cơ bản ĐANG GIẢM GIÁ, giải ngân dần, lệnh nhỏ + tuân thủ stop loss",
          "avoid": "Bắt đáy bất chấp · bắt giá sàn · săn hàng bị call margin · dùng tiền vay",
          "quote": "Bán ở 1.686 thì phải kỳ vọng về 1.400 mới mua lại được."
        }
      ],
      "agree": [
        {
          "label": "Định giá đã rẻ thật",
          "detail": "AzFin đo P/E ex-Vin ~10x = percentile 6%; CK 5 phút đồng ý với chủ tịch SSI; Thái Phạm nói bank VCB/BID rẻ hơn cả đáy T4/2025."
        },
        {
          "label": "Chưa có tín hiệu đáy",
          "detail": "CK 5 phút: chưa mã nào tạo đáy. Thái Phạm: đợi 1.600, đáy dự kiến T8–9. AzFin: nhặt DẦN, kỳ vọng hiệu quả sau 6 tháng–2 năm."
        },
        {
          "label": "Tuyệt đối không margin",
          "detail": "CK 5 phút: \"giật 2–3 phiên là cháy hết\". AzFin: margin kỷ lục 435.000 tỷ chủ yếu do chủ doanh nghiệp cầm cố. Thái Phạm: giữ tiền 60%, khi nào vĩ mô ấm mới vay."
        },
        {
          "label": "Tránh nhóm dính pháp lý / quản trị mờ",
          "detail": "Cả ba đều loại PNJ. CK 5 phút thêm tiêu chí quản trị phải đơn giản; AzFin đa dạng hóa vì thiên nga đen PNJ, PC1."
        },
        {
          "label": "Mốc tháng 9 là bản lề",
          "detail": "Fed tăng lãi (82%) + VN nâng hạng lên thị trường mới nổi, quỹ rổ mới nổi bắt đầu giải ngân — Thái Phạm và AzFin trùng khung thời gian."
        }
      ],
      "differ": [
        {
          "label": "Tỉ trọng cổ phiếu: 40% hay 90%?",
          "detail": "Thái Phạm giữ tiền 60/cổ 40 và chờ mốc 1.600. AzFin để cổ phiếu ~90% DANH MỤC TÀI CHÍNH — nhưng danh mục tài chính chỉ nên là 20–30% tổng tài sản, nên quy ra tổng tài sản hai bên gần nhau hơn vẻ ngoài."
        },
        {
          "label": "Ngân hàng: mua cả nhóm hay chọn lọc?",
          "detail": "AzFin xem bank là 1 trong 6 nhóm nhặt dần (có mã P/E<6x). Thái Phạm chọn lọc gắt: chỉ VCB/BID, TCB đợi 22, còn VPB/MB \"được ít chết nhiều\", LPB/ACB giữ giá cao \"chẳng ai dám vào\"."
        },
        {
          "label": "Bán hay giữ khi lỡ kẹt?",
          "detail": "CK 5 phút: bán ở 1.686 rủi ro hơn giữ, trừ khi bị call margin. Thái Phạm: nếu muốn bán thì đợi hồi phục rồi bán, không bán hoảng loạn — nhưng BUỘC phải bán nếu doanh nghiệp dính pháp lý, bất ổn lãnh đạo, hoặc ngành bị AI thay thế."
        }
      ]
    },
    "community": {
      "title": "Cộng đồng hỏi gì dưới bài Thái Phạm",
      "source": "141 bình luận dưới 2 video công khai (26/07 và 24/07)",
      "disclaimer": "Đây là câu hỏi và ý kiến của NGƯỜI XEM — không phải nhận định của chuyên gia. Phần \"Thái Phạm đã nói\" là quan điểm ông nêu trong video, ghép lại để tiện đối chiếu, không phải câu trả lời trực tiếp cho người hỏi.",
      "items": [
        {
          "q": "Tình hình vàng đang hoang mang, mọi người có mang vàng tích trữ ra bán không ạ?",
          "who": "@congtony4438",
          "likes": 1,
          "status": "answered",
          "statusLabel": "Đã có quan điểm",
          "a": "Không phải bán. SJC là doanh nghiệp nhà nước nên \"mua đâu bán đấy\", khác PNJ đang dính kim cương/vàng rởm. Chênh trong nước đã thu hẹp còn 8–9 triệu/lượng (từ 19–20 triệu) — chính là điều kiện mua vật chất ông từng đặt ra.",
          "aSrc": "Tập 40 · 26/07"
        },
        {
          "q": "Có khi nào cổ phiếu bất động sản về mệnh giá 0 không ạ? Cứ 2–3 ngày giảm thêm 1k, sợ phá sản quá.",
          "who": "@AnhQuoc088",
          "likes": 0,
          "status": "answered",
          "statusLabel": "Đã có quan điểm",
          "a": "Ông không mua cổ phiếu bất động sản: \"cứ mua lao đầu vào cổ phiếu bất động sản, các bạn thấy giờ khủng khiếp không — rất là kinh, nên không chơi\". Ngược lại nhóm ngân hàng quốc doanh và GAS thì \"không thể phá sản được\", nền giá tốt bị phá vỡ cũng không phải lý do bán — cầm 5 năm sẽ có lời ở vùng thấp.",
          "aSrc": "Tập 40 + video công khai · 26/07"
        },
        {
          "q": "Anh nghĩ sao về vàng lên 6.000 vào cuối năm 2026?",
          "who": "@flockfiles",
          "likes": 0,
          "status": "answered",
          "statusLabel": "Ngược quan điểm",
          "a": "Ngược hẳn: ông thấy vàng còn \"chân\" giảm về vùng đẹp 3.600–3.700, thậm chí ~3.300 nếu Fed tăng lãi tháng 9; hồi kỹ thuật cao nhất cũng chỉ quanh 4.300. Hiện long 4.030 cắt lỗ 3.930 — tức đánh ngắn, không phải kỳ vọng tăng dài.",
          "aSrc": "Tập 40 · 26/07 + video 24/07"
        },
        {
          "q": "Fed tăng lãi suất bóp nghẹt nền kinh tế, nợ phình to — nếu nó vỡ thì vàng giảm sao được?",
          "who": "@thuynguyenvan5548",
          "likes": 0,
          "status": "partial",
          "statusLabel": "Mới trả lời một nửa",
          "a": "Ông mới nói phần lãi suất: xác suất Fed tăng tháng 9 là 82%, \"hạ lãi suất là không thể và gần như bằng không\" — lãi thực dương là lực đè lên vàng. Kịch bản \"nợ vỡ thì vàng tăng\" thì chưa thấy ông bàn tới trong hai video này.",
          "aSrc": "Video 24/07 · Tập 40"
        },
        {
          "q": "Cổ phiếu dầu khí đang giảm mà giá dầu thế giới lại tăng — em mua PVD giá 17–18 được không anh?",
          "who": "@thihaiyennguyen-s4t",
          "likes": 0,
          "status": "open",
          "statusLabel": "Chưa được trả lời",
          "a": "Chưa thấy ông nhắc PVD hay dầu khí Việt Nam trong hai video này. Nguyên tắc gần nhất có thể tham chiếu: CK 5 phút — \"không mua trên đà giảm\", đợi cổ phiếu dừng giảm và có nền giá mới cân nhắc.",
          "aSrc": "CK 5 phút · 27/07"
        },
        {
          "q": "Tuần qua trung bình mỗi ngày chỉ lọt ra khỏi Hormuz 2,4 triệu thùng, so với yêu cầu 6–7 triệu — hụt 4 triệu.",
          "who": "@ThinhBuiKhang",
          "likes": 0,
          "status": "data",
          "statusLabel": "Số liệu người xem đưa",
          "a": "Cùng hướng với Thái Phạm: Hormuz bình thường chở 7 triệu thùng/ngày (~20% dầu thế giới), số tàu qua eo biển đã từ ~100/ngày năm 2025 về gần 0. Con số 2,4 triệu là của người xem, chưa kiểm chứng độc lập.",
          "aSrc": "Đối chiếu Tập 40 · 26/07"
        }
      ]
    }
  },
  "binance": {
    "updated": "27/07/2026",
    "totalSpot": 46,
    "totalFut": 144,
    "map": {
      "aapl": {
        "spot": [],
        "fut": [
          "AAPLUSDT"
        ],
        "kind": "exact"
      },
      "intc": {
        "spot": [
          "INTCBUSDT"
        ],
        "fut": [
          "INTCUSDT"
        ],
        "kind": "exact"
      },
      "mu": {
        "spot": [
          "MUBUSDT"
        ],
        "fut": [
          "MUUSDT"
        ],
        "kind": "exact"
      },
      "mrvl": {
        "spot": [
          "MRVLBUSDT"
        ],
        "fut": [
          "MRVLUSDT"
        ],
        "kind": "exact"
      },
      "panw": {
        "spot": [],
        "fut": [
          "PANWUSDT"
        ],
        "kind": "exact"
      },
      "crwd": {
        "spot": [],
        "fut": [
          "CRWDUSDT"
        ],
        "kind": "exact"
      },
      "amd": {
        "spot": [
          "AMDBUSDT"
        ],
        "fut": [
          "AMDUSDT"
        ],
        "kind": "exact"
      },
      "nvda": {
        "spot": [
          "NVDABUSDT"
        ],
        "fut": [
          "NVDAUSDT"
        ],
        "kind": "exact"
      },
      "googl": {
        "spot": [
          "GOOGLBUSDT"
        ],
        "fut": [
          "GOOGLUSDT"
        ],
        "kind": "exact"
      },
      "nflx": {
        "spot": [],
        "fut": [
          "NFLXUSDT"
        ],
        "kind": "exact"
      },
      "dell": {
        "spot": [],
        "fut": [
          "DELLUSDT"
        ],
        "kind": "exact"
      },
      "spacex": {
        "spot": [
          "SPCXBUSDT"
        ],
        "fut": [
          "SPCXUSD1",
          "SPCXUSDT"
        ],
        "kind": "exact"
      },
      "samsung": {
        "spot": [],
        "fut": [
          "SAMSUNGUSDT"
        ],
        "kind": "exact"
      },
      "spx": {
        "spot": [
          "SPYBUSDT"
        ],
        "fut": [
          "SPYUSDT"
        ],
        "kind": "proxy",
        "note": "ETF SPY bám S&P 500 — không phải chỉ số gốc"
      },
      "ndq": {
        "spot": [
          "QQQBUSDT"
        ],
        "fut": [
          "QQQUSDT"
        ],
        "kind": "proxy",
        "note": "ETF QQQ bám Nasdaq-100 — không phải chỉ số gốc"
      },
      "nikkei": {
        "spot": [],
        "fut": [
          "EWJUSDT"
        ],
        "kind": "proxy",
        "note": "ETF EWJ (iShares MSCI Japan) — proxy cho CK Nhật"
      },
      "gold": {
        "spot": [
          "PAXGUSDT",
          "XAUTUSDT"
        ],
        "fut": [
          "XAUUSDT"
        ],
        "kind": "exact"
      },
      "silver": {
        "spot": [],
        "fut": [
          "XAGUSDT"
        ],
        "kind": "exact"
      },
      "oil": {
        "spot": [],
        "fut": [
          "BZUSDT",
          "CLUSDT"
        ],
        "kind": "exact",
        "note": "CL = WTI, BZ = Brent"
      },
      "btc": {
        "spot": [
          "BTCUSDT"
        ],
        "fut": [],
        "kind": "exact"
      }
    }
  }
};
