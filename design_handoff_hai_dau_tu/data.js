// ─────────────────────────────────────────────────────────────────────────────
// HDT DATA — Hải Đầu Tư cùng các Chuyên Gia
// QUY TẮC: giữ 7 bài GẦN NHẤT mỗi kênh. Thêm bài mới = prepend vào experts[id].updates
//          rồi cắt còn 7. Riêng THÁI PHẠM ưu tiên bài HỘI VIÊN (member-video/member-post)
//          — giữ bài mới nhất + các bài hội viên gần nhất.
// ─────────────────────────────────────────────────────────────────────────────
window.HDT_DATA = {
  "lastUpdated": "28/08/2026 · Tuần 35",
  "pulse": [
    {
      "name": "VN-Index",
      "mark": "↑ 1.830 — thêm 62 điểm trong tuần",
      "sig": "up",
      "mkt": "vn"
    },
    {
      "name": "Độ rộng",
      "mark": "↑ Downtrend 60,7% → 50,0% qua ba tuần",
      "sig": "up",
      "mkt": "vn"
    },
    {
      "name": "Thanh khoản",
      "mark": "⚠ Giảm dần khi giá tăng: 669 → 484tr",
      "sig": "warn",
      "mkt": "vn"
    },
    {
      "name": "TCB",
      "mark": "⚠ Trần theo tin đồn — hai kênh đọc ngược nhau",
      "sig": "warn",
      "mkt": "vn"
    },
    {
      "name": "Danh mục VN",
      "mark": "↑ Nắm chặt bank, chứng, sản xuất, phân bón",
      "sig": "up",
      "mkt": "vn"
    },
    {
      "name": "SZC · PC1",
      "mark": "↑ Hai mã mới cho danh mục lướt",
      "sig": "up",
      "mkt": "vn"
    },
    {
      "name": "Vàng",
      "mark": "↑ Đạt 4.700 rồi lùi — đã thả hedge, \"sẽ tiếp tục lên\"",
      "sig": "up",
      "mkt": "us"
    },
    {
      "name": "Bitcoin",
      "mark": "◷ Khóa hedge trước bài phát biểu Warsh đêm 29/8",
      "sig": "wait",
      "mkt": "us"
    },
    {
      "name": "Nợ công Mỹ",
      "mark": "⚠ Khối ngoại giảm nắm trái phiếu 9.490 → 9.300 tỷ",
      "sig": "warn",
      "mkt": "us"
    },
    {
      "name": "Nhóm Cyber",
      "mark": "⚠ Nhóm duy nhất đang lõm — sẽ mua lại phần đã chốt",
      "sig": "warn",
      "mkt": "us"
    },
    {
      "name": "Dầu",
      "mark": "⚠ WTI −4,3% tuần, trôi về mép dưới band",
      "sig": "warn",
      "mkt": "us"
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
          "date": "2026-08-28",
          "dateShort": "28/08",
          "timeAgo": "hôm nay",
          "tab": "Tút hội viên · 28/08",
          "sourceType": "member-post",
          "typeLabel": "Bài đăng hội viên · notes thứ Sáu",
          "title": "Thả Hedge Vàng, Khóa Hedge Bitcoin — Và Hai Mã Mới Cho Danh Mục Lướt",
          "summary": "Notes cho thứ Sáu, và là tút cho thấy rõ nhất cách ông dùng hedge như một công tắc: vàng thì THẢ ra để vị thế mua chạy tiếp, Bitcoin thì KHÓA lại để phòng cú kéo giết short quanh bài phát biểu của chủ tịch Fed đêm 29/08. Kèm hai mã mới cho danh mục lướt: SZC và PC1.",
          "feedChips": [
            {
              "label": "Vàng ▲ THẢ hedge — \"vàng sẽ tiếp tục lên\"",
              "sig": "up"
            },
            {
              "label": "BTC ◷ KHÓA hedge trước bài phát biểu Warsh đêm 29/8",
              "sig": "wait"
            },
            {
              "label": "Cyber ⚠ nhóm duy nhất đang lõm — sẽ mua lại phần đã chốt",
              "sig": "warn"
            },
            {
              "label": "SZC · PC1 ▲ thêm vào danh mục lướt",
              "sig": "up"
            }
          ],
          "keyCalls": [
            {
              "tag": "Vàng",
              "value": "Thả hedge — chốt short, để vị thế buy chạy",
              "signal": "up",
              "note": "\"Các anh chị thả hedged short được rồi, nghĩa là chốt short và để vị thế buy chạy. Vàng sẽ tiếp tục lên.\" Chỉ hai ngày sau khi đặt hedge. Đây là chu trình đầy đủ: khóa ở đỉnh nhịp, thả khi nhịp qua."
            },
            {
              "tag": "BTC",
              "value": "Khóa hedge trước bài phát biểu Kevin Warsh đêm 29/08",
              "signal": "wait",
              "note": "\"Ngược lại với vàng, đề phòng cú kéo giết short lợi dụng Kevin Warsh vào đêm nay phát biểu (đêm 29/8), thì ta đang có vị thế Short hãy Buy 1 lượng lot tương ứng để Hedged lại vị thế. Khóa lại, khi nào Warsh phát biểu xong, giá phản ánh tin thì ta thả ra.\" Cùng một công cụ, dùng ngược chiều cho hai tài sản trong cùng một tút."
            },
            {
              "tag": "Nhóm Cyber",
              "value": "Nhóm DUY NHẤT đang lõm — sẽ mua lại phần đã chốt",
              "signal": "warn",
              "note": "\"Chứng khoán Mỹ: Mọi thứ đi đúng kế hoạch trừ Dell, và sự bật lại của nhóm Cyber. Cybers chốt 1 ít ở dưới thì vùng này tôi sẽ mua lại phần chốt đó. Net net đang bị lõm lại nhóm Cyber, các nhóm khác ổn.\" Nhóm Cyber gồm CRWD, PANW, FTNT."
            },
            {
              "tag": "SZC · PC1",
              "value": "Thêm vào danh mục lướt — BĐS khu công nghiệp",
              "signal": "up",
              "note": "\"Với các mã lướt sóng họ F, họ PNJ thì cứ cầm thôi, có thể bổ sung BĐS khu công nghiệp như SZC vào trong danh mục lướt cùng PC1 nếu mua. Ai đủ hàng rồi mà không muốn lướt thì thôi.\" Ông không đưa mốc giá cho hai mã này."
            },
            {
              "tag": "Danh mục VN",
              "value": "Nắm chặt bank, chứng, sản xuất, phân bón",
              "signal": "up",
              "note": "\"Nắm chặt bank, chứng, và các mã sản xuất, phân bón (trừ VNM đã chốt 1/2).\" Và: \"Điểm số vẫn do VIC/VHM chi phối là chủ đạo nên xấu tốt gì do 2 mã đó. Kiên định với cổ phiếu tạo nền giá nhé.\""
            }
          ],
          "sections": [
            {
              "title": "Hedge dùng như một công tắc hai chiều",
              "signal": "up",
              "sigLabel": "PHƯƠNG PHÁP",
              "para": "Trong cùng một tút, ông dùng đúng một công cụ theo hai chiều ngược nhau — và điều kiện bật/tắt đều gắn với một sự kiện cụ thể chứ không phải cảm tính.",
              "bullets": [
                "Vàng: đang giữ LONG, đã hedge bằng short từ 26/08 → nay THẢ short vì nhịp tích lũy đã qua.",
                "Bitcoin: đang giữ SHORT, nay KHÓA bằng cách mua một lượng tương ứng → phòng cú kéo giết short quanh tin.",
                "Điều kiện thả cho BTC ghi rõ: \"khi nào Warsh phát biểu xong, giá phản ánh tin thì ta thả ra\".",
                "Điểm cần nói thẳng: kỹ thuật này đòi hỏi tài khoản cho phép hai chiều và chịu được phí giữ hai vị thế — không áp dụng được với vàng vật chất hay cổ phiếu Việt Nam."
              ]
            }
          ],
          "tradeLevels": [
            {
              "group": "Vàng & Bạc",
              "items": [
                {
                  "asset": "XAU/USD",
                  "dir": "THẢ HEDGE — để vị thế buy chạy",
                  "entry": "—",
                  "target": "Vàng sẽ tiếp tục lên",
                  "stop": "—",
                  "sig": "up",
                  "tv": "OANDA:XAUUSD"
                }
              ]
            },
            {
              "group": "Bitcoin & Crypto",
              "items": [
                {
                  "asset": "BTC",
                  "dir": "KHÓA HEDGE — mua 1 lot tương ứng vị thế short",
                  "entry": "—",
                  "target": "—",
                  "stop": "Thả ra sau khi Warsh phát biểu đêm 29/08",
                  "sig": "wait",
                  "tv": "BINANCE:BTCUSDT"
                }
              ]
            },
            {
              "group": "Chứng khoán Mỹ",
              "items": [
                {
                  "asset": "CRWD",
                  "dir": "MUA LẠI PHẦN ĐÃ CHỐT",
                  "entry": "Vùng hiện tại",
                  "target": "—",
                  "stop": "Nhóm Cyber là nhóm duy nhất đang lõm",
                  "sig": "wait",
                  "tv": "NASDAQ:CRWD"
                }
              ]
            },
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "SZC",
                  "dir": "BỔ SUNG VÀO DANH MỤC LƯỚT",
                  "entry": "—",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:SZC"
                },
                {
                  "asset": "PC1",
                  "dir": "BỔ SUNG VÀO DANH MỤC LƯỚT — nếu mua",
                  "entry": "—",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:PC1"
                }
              ]
            }
          ]
        },
        {
          "date": "2026-08-28",
          "dateShort": "28/08",
          "timeAgo": "hôm nay",
          "tab": "Vì sao vàng lên ngôi · 28/08",
          "sourceType": "public-video",
          "typeLabel": "Video công khai · 45 phút",
          "title": "Vì Sao Vàng Lên Ngôi Vương: Cơ Chế Mỹ Xuất Khẩu Lạm Phát Đang Có Vết Nứt Đầu Tiên",
          "summary": "Video giải thích cơ chế chứ không đưa kèo. Ông bóc từng mắt xích của hệ thống petrodollar — vì sao cả thế giới buộc phải mua nợ Mỹ, và điều gì đang làm mắt xích đó nứt. Kèm số liệu TIC của Bộ Tài chính Mỹ về lượng trái phiếu khối ngoại nắm giữ.",
          "feedChips": [
            {
              "label": "Lạm phát Mỹ ⚠ cộng dồn 40% trong một thập kỷ",
              "sig": "warn"
            },
            {
              "label": "PCE lõi ⚠ 65 tháng liên tiếp trên mục tiêu 2%",
              "sig": "warn"
            },
            {
              "label": "Khối ngoại ⚠ nắm trái phiếu Mỹ giảm từ 9.490 xuống 9.300 tỷ",
              "sig": "warn"
            },
            {
              "label": "Kết luận ▲ vàng tỏa sáng trong 10–20 năm tới",
              "sig": "up"
            }
          ],
          "keyCalls": [
            {
              "tag": "Cơ chế xuất khẩu lạm phát",
              "value": "Mỹ in tiền, thế giới trả hóa đơn — qua petrodollar",
              "signal": "warn",
              "note": "Chuỗi ông dựng: Mỹ phát hành nợ qua trái phiếu → dùng tiền đó thanh toán nhập khẩu → các nước xuất khẩu nhận đô dư → quay lại mua trái phiếu Mỹ. Mắt xích khóa chặt là dầu: muốn mua dầu phải có đô. Kết quả là \"một nhu cầu nhân tạo cho nợ công Mỹ\" — Mỹ được vay rẻ hơn mức đáng ra phải trả. Thuật ngữ ông dẫn: \"đặc quyền phi thường\", do cựu Bộ trưởng Tài chính Pháp đặt ra từ những năm 1960."
            },
            {
              "tag": "Nghịch lý Triffin",
              "value": "Muốn cung đủ đô cho thế giới thì Mỹ buộc phải thâm hụt liên tục",
              "signal": "warn",
              "note": "Ông dẫn Robert Triffin, 1960: để cung cấp đủ đô la cho thế giới dùng làm công cụ dự trữ, Mỹ buộc phải thâm hụt thương mại liên tục. Từ đó ông đặt câu hỏi về chính sách thuế của Trump: \"quốc gia khác càng bán được nhiều hàng vào Mỹ, Mỹ càng thâm hụt thì họ càng in được nhiều đô la. Nhưng ông Trump lên thì lại mong muốn đánh thuế để giảm thâm hụt. Mỹ bây giờ đang bẻ ngang cái hệ thống này.\""
            },
            {
              "tag": "Số liệu TIC — vết nứt đầu tiên",
              "value": "Khối ngoại giảm nắm giữ từ đỉnh 9.490 tỷ xuống 9.300 tỷ đô",
              "signal": "down",
              "note": "Đỉnh kỷ lục vào tháng 5/2026, giảm liên tục 3–4 tháng sau khi chiến tranh Iran nổ ra. Ba nước bán mạnh nhất: Nhật Bản (bán để lấy đô can thiệp bảo vệ đồng yên khi thâm hụt vãng lai tăng), Trung Quốc (giảm trái phiếu để mua vàng, vì thấy Mỹ có thể đóng băng tài sản như đã làm với Nga), và Anh Quốc."
            },
            {
              "tag": "Lạm phát Mỹ",
              "value": "40% cộng dồn một thập kỷ · PCE lõi 65 tháng liên tiếp trên 2%",
              "signal": "warn",
              "note": "\"Đây không phải là số liệu của một quốc gia đang khủng hoảng kinh tế, không phải Đông Nam Á, không phải Châu Phi, cũng chẳng phải Nam Mỹ. Đó chính là con số của nước Mỹ — nền kinh tế lớn nhất thế giới và chủ sở hữu của đồng tiền dự trữ toàn cầu.\" Thâm hụt ngân sách hàng năm 1.800 tỷ, dự báo trên 2.000–2.500 tỷ trong 5 năm tới."
            },
            {
              "tag": "Vì sao đô vẫn chưa mất ngôi",
              "value": "Không có lựa chọn đủ tốt để thay thế",
              "signal": "wait",
              "note": "Ông nói thẳng phần phản biện chính mình: euro vẫn yếu về kỷ luật tài khóa và chính trị; nhân dân tệ đang mạnh lên nhưng chưa cho tự do chuyển đổi. \"Cho nên hiện nay Mỹ vẫn có thể in tiền, có thể thâm hụt, thế giới vẫn phải ôm trái phiếu Mỹ. Nhưng liệu điều này có bền nữa hay không trong 10–25 năm tới?\""
            }
          ],
          "sections": [
            {
              "title": "Điều gì xảy ra nếu cơ chế thật sự gãy",
              "signal": "warn",
              "sigLabel": "HỆ QUẢ",
              "para": "Đây là câu trả lời cho câu hỏi \"vì sao vàng\" — không phải vì vàng tốt lên, mà vì cái đối trọng của nó đang yếu đi.",
              "bullets": [
                "\"Nếu nó thực sự gãy thì người trả hóa đơn không còn là người Nhật, người Hàn Quốc, người Việt Nam, người Châu Á, người Nam Mỹ, người Châu Âu — mà đó chính là người Mỹ.\"",
                "Dấu hiệu đang xảy ra: term premium tăng — \"nhà đầu tư, những người cho Mỹ vay, họ đòi hỏi phải có lợi suất cao hơn, và niềm tin đang thấp đi\".",
                "Lợi suất 10 năm khoảng 4,68%, 30 năm gần 5,2% — trong một chu kỳ mà mọi người đang mong Fed hạ lãi suất.",
                "Lưu ý khi đọc: đây là luận điểm 10–25 năm, không phải kèo bốn tuần. Ông nói rõ mục đích video là \"phân lớp các tài sản đầu tư trong vòng 10–20 năm tới\"."
              ]
            }
          ]
        },
        {
          "date": "2026-08-27",
          "dateShort": "27/08",
          "timeAgo": "hôm qua",
          "tab": "Tút hội viên · 27/08",
          "sourceType": "member-post",
          "typeLabel": "Bài đăng hội viên",
          "title": "\"Vàng Hedged Thành Công, Chứng Mỹ Ngọt\" — Và Một Cây Trần TCB",
          "summary": "Tút ngắn nhất tuần, nhưng là tút xác nhận: kỹ thuật hedge vàng ông hướng dẫn hôm 26/08 đã đúng — vàng lùi từ 4.73 về vùng 4.63. Kèm một cây trần TCB và câu tổng kết ba dòng.",
          "feedChips": [
            {
              "label": "Vàng ▲ hedged thành công",
              "sig": "up"
            },
            {
              "label": "TCB ▲ một cây trần",
              "sig": "up"
            },
            {
              "label": "CK Mỹ ▲ \"ngọt\"",
              "sig": "up"
            },
            {
              "label": "Danh mục ▲ mọi mã diễn biến đúng kỳ vọng, kể cả lướt",
              "sig": "up"
            }
          ],
          "keyCalls": [
            {
              "tag": "Tổng kết ba dòng",
              "value": "Bịp ok · Vàng hedged thành công · Chứng Mỹ ngọt",
              "signal": "up",
              "note": "Nguyên văn: \"Mọi cổ phiếu khác diễn biến đúng kì vọng, kể cả lướt. Bịp ok. Vàng hedged thành công. Chứng Mỹ ngọt. Vui vui.\" Đây là xác nhận rằng lệnh hedge đặt hôm 26/08 đã ăn đúng nhịp lùi của vàng."
            },
            {
              "tag": "TCB",
              "value": "Một cây trần",
              "signal": "up",
              "note": "\"Nay tôi cũng có một cổ tím TCB vui quá.\" Ông không nêu lý do TCB tăng. Cùng ngày, Chứng khoán 5 phút dành cả buổi để CAN người xem mua TCB — xem phần đối chiếu."
            }
          ],
          "sections": [
            {
              "title": "Chỗ đáng đối chiếu nhất trong tuần",
              "signal": "warn",
              "sigLabel": "HAI KÊNH, MỘT MÃ",
              "para": "Ngày 26–27/08 TCB tăng trần theo một tin đồn hợp tác với tổ chức nước ngoài. Hai kênh phản ứng ngược nhau hoàn toàn.",
              "bullets": [
                "Thái Phạm: \"Nay tôi cũng có một cổ tím TCB vui quá\" — ăn mừng.",
                "Chứng khoán 5 phút: \"Cả ngày mình dành để cản mọi người mua Techcombank\" — và chụp lại ảnh tin nhắn tư vấn lúc 13:45 làm bằng chứng.",
                "Điểm khác nhau không phải ở mã mà ở PHƯƠNG PHÁP: ông đã cầm từ trước nên cây trần là phần thưởng; anh phản đối việc MUA MỚI theo tin.",
                "Cả hai đều nói TCB là cổ phiếu tốt — bất đồng chỉ nằm ở chỗ hôm nay có phải điểm vào hay không."
              ]
            }
          ],
          "tradeLevels": [
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "TCB",
                  "dir": "ĐANG CẦM — được một cây trần",
                  "entry": "—",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:TCB"
                }
              ]
            }
          ]
        },
        {
          "date": "2026-08-26",
          "dateShort": "26/08",
          "timeAgo": "2 ngày trước",
          "tab": "Tút hội viên · 26/08",
          "sourceType": "member-post",
          "typeLabel": "Bài đăng hội viên",
          "title": "Vàng Đạt 4.700 Đúng Kế Hoạch — Giờ Hedged Lại Thay Vì Bán",
          "summary": "Tút quan trọng nhất tuần về mặt kỹ thuật. Vàng chạm đúng mốc 4.700 ông đã hẹn từ 4.080, và thay vì chọn giữa giữ hay bán, ông đưa ra phương án thứ ba: hedge — mua short bằng đúng lượng đã mua ở đáy để khóa lãi trong lúc chờ tích lũy. Kèm mốc mua lại 4.488–4.500 cho ai lỡ nhịp.",
          "feedChips": [
            {
              "label": "Vàng ▲ đạt 4.700 đúng kế hoạch — hedged lại",
              "sig": "up"
            },
            {
              "label": "Mua lại ◷ 4.488–4.500 cho ai lỡ nhịp",
              "sig": "wait"
            },
            {
              "label": "BTC ⚠ \"yếu rồi\" — test lại 74k và 72k",
              "sig": "warn"
            },
            {
              "label": "CK Mỹ · Hàn · Nhật ▼ hold short không đổi",
              "sig": "down"
            }
          ],
          "keyCalls": [
            {
              "tag": "Vàng — kỹ thuật hedge",
              "value": "Cầm dài từ đáy thì hedge, đánh ngắn thì chốt lời",
              "signal": "up",
              "note": "\"Sau khi đạt 4.700 như kế hoạch (đi lên từ 4.080) thì chuyện tích lũy 2–3 tuần ở vùng 4.500–4.700 cũng là đúng như dự liệu. Anh chị em nào cầm dài từ đáy thì Hedged lại (mua short bằng đúng lượng đã mua ở đáy). Ai đánh ngắn thì chốt lời.\" Đây là phương án thứ ba giữa giữ và bán — khóa lãi mà không đóng vị thế gốc."
            },
            {
              "tag": "Vàng — mốc mua lại",
              "value": "4.488–4.500",
              "signal": "wait",
              "note": "\"Ai mua vàng vật chất hoặc lỡ nhịp vừa rồi thì đợi đúng 4.488–4.500 mua lại / mua thêm vàng vật chất hoặc tài khoản.\" Mốc rất cụ thể, chấm được."
            },
            {
              "tag": "BTC",
              "value": "\"Yếu rồi\" — test lại 74k và 72k rồi mới biết tiếp",
              "signal": "warn",
              "note": "\"Trước mắt test lại 74K và 72k rồi mới biết tiếp theo là gì. Nếu test 68–69k thì sẽ vững hơn để thành một sóng đi lên. Còn không thì vẫn là banana chuối số #3.\" Đây là lần đầu ông mở cửa cho kịch bản BTC tăng thật — với điều kiện phải test sâu về 68–69k trước."
            },
            {
              "tag": "Altcoin",
              "value": "Có ăn thì bỏ miệng ở lãi 30–40%",
              "signal": "warn",
              "note": "\"Cẩn thận Altcoins, nếu có ăn thì nên bỏ miệng ở lãi 30%–40%.\" Ông hiếm khi nhắc altcoin — lần này là cảnh báo chốt sớm."
            },
            {
              "tag": "VN-Index",
              "value": "Rung lắc sau khi lấy lại 1.800 là bình thường",
              "signal": "up",
              "note": "\"Điểm số chủ yếu do 2 mã VIC/VHM chiếm trọng số lớn quyết định, nên điểm số không phải là tiêu chuẩn vàng quá cần phải lưu tâm. Những mã khác trong video hôm chủ nhật bao gồm 2 mã lướt thì cũng bình thường, không có gì thay đổi cả. Biến động cho phép. Không cần phải rung động gì hết.\""
            },
            {
              "tag": "CK Mỹ · Hàn · Nhật",
              "value": "Hold short không đổi",
              "signal": "down",
              "note": "\"Tôi vẫn hold vị thế Short không đổi. Khi nào đổi tôi sẽ cập nhật. Cớ thì chẳng có cớ gì cả vì bản chất là nó yếu thì hold thôi.\""
            }
          ],
          "sections": [
            {
              "title": "Vì sao \"hedge\" đáng chú ý hơn cả mốc giá",
              "signal": "up",
              "sigLabel": "PHƯƠNG PHÁP",
              "para": "Đây là lần đầu ông dùng công cụ này công khai trong tút. Nó giải một bài toán mà cả giữ lẫn bán đều không giải được: khi biết hướng dài hạn còn lên nhưng không đoán được nhịp ngắn hạn.",
              "bullets": [
                "Giữ nguyên: ăn trọn sóng dài nhưng phải chịu toàn bộ nhịp điều chỉnh.",
                "Bán hết: tránh được nhịp nhưng mất vị thế và phải mua lại ở giá cao hơn nếu đoán sai.",
                "Hedge: mở vị thế short bằng đúng lượng đang giữ — lãi bị khóa lại, hai chiều triệt tiêu nhau, và khi nhịp qua thì \"thả\" phần short ra để vị thế mua chạy tiếp.",
                "Cái giá phải trả: phí giữ hai vị thế, và rủi ro thả sai thời điểm. Ông đặt điều kiện thả rất cụ thể — sau khi tin ra và giá đã phản ánh."
              ]
            }
          ],
          "tradeLevels": [
            {
              "group": "Vàng & Bạc",
              "items": [
                {
                  "asset": "XAU/USD",
                  "dir": "HEDGED — mua short bằng đúng lượng đã mua ở đáy",
                  "entry": "Giá vốn 4.080",
                  "target": "Tích lũy 2–3 tuần vùng 4.500–4.700",
                  "stop": "Mua lại / mua thêm ở 4.488–4.500",
                  "sig": "up",
                  "tv": "OANDA:XAUUSD"
                }
              ]
            },
            {
              "group": "Bitcoin & Crypto",
              "items": [
                {
                  "asset": "BTC",
                  "dir": "YẾU RỒI — chờ test lại",
                  "entry": "—",
                  "target": "Test 68–69k thì mới vững để thành sóng lên",
                  "stop": "Trước mắt test 74k và 72k",
                  "sig": "warn",
                  "tv": "BINANCE:BTCUSDT"
                }
              ]
            }
          ]
        },
        {
          "date": "2026-08-23",
          "dateShort": "23/08",
          "timeAgo": "5 ngày trước",
          "tab": "Tập 46 (Hội viên) · 23/08",
          "sourceType": "member-video",
          "typeLabel": "Video hội viên · Tuần 34",
          "title": "Tập 46 (Hội Viên): FTSE Đưa 27 Mã Việt Vào Rổ — \"Toàn Là Hàng Của Hội Viên Chúng Ta\"",
          "summary": "Tập đầu tiên ông ăn mừng. Sau ba tuần liên tiếp lặp một câu \"không bán gì hết\", FTSE công bố rổ nâng hạng và phần lớn 27 mã trùng đúng danh mục nhóm. Ông không đổi gì trừ hai việc: chốt lời 1/2 Vinamilk và thêm dòng \"hàng lướt sóng\". Mảng quốc tế thì ngược lại — ông giữ nguyên toàn bộ vị thế short và nói thẳng \"chứng Mỹ thì sẽ sập thôi\".",
          "feedChips": [
            {
              "label": "FTSE ▲ 27 mã Việt vào rổ · 1,3 tỷ đô giải ngân tới T9/2027",
              "sig": "up"
            },
            {
              "label": "Danh mục ▲ 100% cổ phiếu, ba tuần không bán gì",
              "sig": "up"
            },
            {
              "label": "Vàng ▲ vẫn cầm — chênh trong nước chỉ còn 1tr/lượng",
              "sig": "up"
            },
            {
              "label": "BTC ▼ short 2/3, lỗ ~2.000/coin — \"không có cửa đi tiếp\"",
              "sig": "down"
            },
            {
              "label": "Nợ công Mỹ ⚠ vượt 40.000 tỷ đô",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "FTSE — 27 mã vào rổ",
              "value": "1,3 tỷ đô giải ngân, hiệu lực tới tháng 9/2027",
              "signal": "up",
              "note": "\"Thực tế ra thì nó toàn là những hàng của hội viên chúng ta chọn đấy. Lần đầu tiên tôi thấy rằng là màu bảng điện nó đẹp thế này.\" Trong rổ có VCB, BID, VPB, VIC, VHM, và nhóm chứng khoán SSI, VCI, HCM, TCX, VND. Ông nói tiền sẽ dồn vào đúng những mã nhóm đang cầm."
            },
            {
              "tag": "Danh mục Việt Nam",
              "value": "Không thay đổi gì — trừ chốt 1/2 VNM",
              "signal": "up",
              "note": "\"Nhìn vào tuần này tôi thấy chẳng có lý do gì phải thay đổi danh mục cả. Ngoại trừ tôi yêu cầu các anh chị chốt lời 1/2 và yêu cầu có thể lướt sóng thêm với PNJ và FPT.\" Ông chốt VNM ở mức lãi khoảng 13%, mua từ cây thứ hai chứ không phải đáy."
            },
            {
              "tag": "HDB",
              "value": "Đánh giá cao hơn cả Techcombank — có thể vượt đỉnh 30 lên 36",
              "signal": "up",
              "note": "\"HDBank đội của anh Điền và chị Thảo đánh con này nét chưa? Những mẫu hình như này khi mà nó tích lũy đủ lâu thì nó có thể tăng được 35%... Nó tích nền giá phẳng như này nó lên kinh lắm. Là 36 luôn ấy.\" Ai đang cầm EIB/VBB ở vùng 21 mà sốt ruột thì có thể cơ cấu bớt sang HDB, VCB, BID, CTG."
            },
            {
              "tag": "Vàng",
              "value": "Vẫn cầm — lên 4.760, đánh nhau 2 tháng rồi vượt đỉnh về 6.000",
              "signal": "up",
              "note": "\"Mọi người hỏi tôi là anh đã bán chưa? Tôi vẫn cầm.\" Kịch bản: lên vùng 4.760 → tích lũy quanh đó khoảng hai tháng → tiếp tục vượt đỉnh. Nếu chính trường Mỹ náo động tới tháng 11 thì \"vàng sẽ vượt đỉnh lên 6.000 là bình thường, không dừng lại ở 5.000 đâu\"."
            },
            {
              "tag": "Vàng vật chất VN",
              "value": "Chênh chỉ còn 1 triệu/lượng — mua thoải mái",
              "signal": "up",
              "note": "\"Vàng Việt Nam hiện nay chênh so với thế giới có 1 triệu đồng một lượng... giá vàng bán ra có 147,6 triệu. Lúc mà chênh đến 20 triệu một lượng quý vị còn vẫn còn hỏi mua được không đúng không? Thì 1 triệu là quá hời.\" Thương hiệu nào cũng được: SJC, Bảo Tín Minh Châu, DOJI."
            },
            {
              "tag": "BTC",
              "value": "Short 2/3, đang lỗ ~2.000/coin — sẽ short thêm ở 82.000",
              "signal": "down",
              "note": "\"Tôi vẫn cho rằng tôi đang short và vẫn đang bị lỗ khoảng tầm 2.000... tôi short nhiều mức, 70.000, 72.000 và cái vùng này tôi cũng short thêm, mới được 2/3 thôi.\" Vùng tắc nghẽn nếu có là 88.000 nhưng ông cho là rất khó lên tới đó. \"Vùng này thì lại short được rồi. Tôi sẽ mua thêm vào cái vùng 82.000. Tôi cho rằng nó sẽ tiếp tục đi xuống thôi, không có cửa gì đi tiếp đâu.\""
            },
            {
              "tag": "Lập luận BTC — vì sao các nước không chơi",
              "value": "Mua crypto không khác gì mua đô Mỹ",
              "signal": "down",
              "note": "\"Với những đạo luật ông Trump đưa ra thì nó đồng hóa Bitcoin và thị trường crypto với đồng đô la, với petrodollar. Trung Quốc hay tất cả các quốc gia khác không tham gia cuộc chơi này bởi vì mua Bitcoin hay mua crypto thì không khác gì mua đô của Mỹ và là một cách thoát nợ cho nước Mỹ. Họ đâu có dốt.\" Các nước đang bán trái phiếu Mỹ và đa dạng hóa dự trữ bằng vàng."
            },
            {
              "tag": "Chứng khoán Mỹ",
              "value": "Cầm cự tới Anthropic niêm yết tháng 10 rồi điều chỉnh mạnh",
              "signal": "down",
              "note": "Nhật–Anh–Trung xả 140 tỷ đô trái phiếu Mỹ trong 4 tháng. \"Thị trường chứng khoán Mỹ tôi cho rằng nó sẽ cố gắng cầm cự nốt cho đến cái việc mà Anthropic niêm yết lên sàn vào tháng 10 này, và sau đó thì nó sẽ có một cú điều chỉnh rất mạnh để lại đón chờ cho OpenAI.\" Mốc chốt lời short: US500 ở 7.500, xa hơn 7.000; US30 ở 28.000."
            },
            {
              "tag": "Nợ công Mỹ",
              "value": "Vượt 40.000 tỷ đô — 2026 đáo hạn ~5.500 tỷ trái phiếu 30 năm",
              "signal": "warn",
              "note": "Ông nhắc lại cảnh báo từ 4–5 tháng trước: 2026 là năm đáo hạn trái phiếu chính phủ Mỹ 30 năm rất lớn, khoảng 5.500 tỷ; 2027 thêm hơn 4.000 tỷ. Người mua truyền thống (Nhật, Hàn, Trung, Châu Âu, Anh) đang bán tháo vì lỗ giá trái phiếu. Lãi vay mua nhà 30 năm ở Mỹ lên 6,72%."
            },
            {
              "tag": "Bầu cử giữa nhiệm kỳ",
              "value": "82% hạ viện và trên 51% thượng viện nghiêng về Dân chủ",
              "signal": "warn",
              "note": "Còn 80 ngày. Iran nắm được thông tin này nên sẽ chịu đòn kinh tế để ghìm giá dầu ở mức cao tới tháng 11. Dự trữ dầu chiến lược Mỹ xuống mức thấp nhất 50 năm; theo dữ liệu radar gần như không tàu nào qua được eo biển Hormuz."
            }
          ],
          "sections": [
            {
              "title": "Vì sao ông ăn mừng nhưng không mua thêm",
              "signal": "up",
              "sigLabel": "GIỮ NGUYÊN",
              "para": "Đây là điểm dễ hiểu nhầm nhất của tập này. Giọng rất phấn khởi, nhưng hành động vẫn là không làm gì — vì ông đã full hàng từ ba tuần trước.",
              "bullets": [
                "\"Ba tuần nay thông điệp của tôi rất rõ ràng, chẳng có bán gì hết đúng không ạ? Mà tình hình thế giới anh chị bảo Hàn nó thế, Nhật nó thế.\"",
                "Ông thừa nhận mức lãi khiêm tốn: \"cái lãi thì nó có lãi chút chút hoặc là không lỗ, nhưng về cơ bản thì tôi cảm thấy khá là tự tin\".",
                "Dự phóng tuần tới: \"Người ta đạp xuống người ta ăn hàng, ăn hàng xong người ta kéo lên.\""
              ]
            },
            {
              "title": "VIC · VHM và HPG — ba mã trong rổ FTSE mà ông vẫn không mua",
              "signal": "warn",
              "sigLabel": "TRÁNH",
              "para": "Nằm trong rổ không có nghĩa là đáng mua. Ông tách rõ chỗ này.",
              "bullets": [
                "VIC/VHM: \"tôi không khoái VIC VHM lắm ở trên vùng cao này. Nếu tây vào nó mua ở vùng giá này thì coi như bị úp bô. Chẳng có cổ phiếu nào quái đản mà nó lại nằm ngang làm xiên làm sẹo như thế này.\"",
                "HPG: không tham gia vì cuối 2026 Vingroup sẽ có thép và \"gần như Hòa Phát cũng mất rất nhiều khách hàng tại Việt Nam\".",
                "HCM: nằm trong rổ nhưng \"ở vùng rất cao, đừng có đụng vào, không còn dư địa tăng\"."
              ]
            },
            {
              "title": "Cổ phiếu Mỹ — mã nào mới, mã nào giữ",
              "signal": "down",
              "sigLabel": "SỔ LỆNH QUỐC TẾ",
              "para": "Ông giữ gần như toàn bộ lệnh short cũ và thêm hai cái tên mới.",
              "bullets": [
                "MỚI — Moderna: short ở vùng 150. Lý do: giá tăng gấp 2,5 lần chỉ vì công bố thử nghiệm giai đoạn ba thành công cho thuốc chống ung thư, trong khi còn tám thử nghiệm nữa. Ông ví với \"chạy được 5 cây ở tốc độ sub-3 không có nghĩa là chạy hết 42 km ở tốc độ đó\".",
                "MỚI — VCX (quỹ Fundrise Innovation Fund): mua ở vùng 40. Quỹ này nắm khoảng 75% tài sản là Anthropic, Claude và OpenAI. Kỳ vọng 160–200 nếu OpenAI niêm yết ở mức 2.000 tỷ đô. Ông nói mẫu hình VCX giống hệt SpaceX sau IPO.",
                "GIỮ SHORT: AAPL (về 290), NVDA (về 200), INTC (về 70), CRWD (chờ 160–170 mới chốt), FTNT (về 130), PANW, SNDK, MU, MRVL, AMZN, MSFT.",
                "SPCX: short thêm khi hồi lên 140–146. TSLA: không đụng. GOOGL: bỏ qua, khó short khó long. NFLX: lùi về 77 thì mua thêm."
              ]
            }
          ],
          "tradeLevels": [
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "VNM",
                  "dir": "ĐÃ CHỐT LỜI 1/2 — lãi ~13%",
                  "entry": "—",
                  "target": "—",
                  "stop": "Không nằm trong rổ FTSE",
                  "sig": "down",
                  "tv": "HOSE:VNM"
                },
                {
                  "asset": "HDB",
                  "dir": "CẦM CHẶT — đánh giá cao hơn TCB",
                  "entry": "—",
                  "target": "Vượt đỉnh 30 → 36",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:HDB"
                },
                {
                  "asset": "SSI",
                  "dir": "CẦM CHẶT — trong rổ FTSE",
                  "entry": "—",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:SSI"
                },
                {
                  "asset": "VCI",
                  "dir": "CỨ CẦM",
                  "entry": "—",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:VCI"
                },
                {
                  "asset": "HCM",
                  "dir": "ĐỪNG ĐỤNG — vùng rất cao",
                  "entry": "—",
                  "target": "—",
                  "stop": "Không còn dư địa tăng",
                  "sig": "avoid",
                  "tv": "HOSE:HCM"
                },
                {
                  "asset": "PNJ",
                  "dir": "LƯỚT SÓNG — đã được cây trần",
                  "entry": "35–36",
                  "target": "50",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:PNJ"
                },
                {
                  "asset": "FPT",
                  "dir": "CẦM NGUYÊN — lướt sóng được",
                  "entry": "Mua thêm 69–70 vẫn bình thường",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:FPT"
                },
                {
                  "asset": "DCM",
                  "dir": "MUA NẰM IM — tiền bắt đầu vào",
                  "entry": "Nền giá phẳng",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:DCM"
                },
                {
                  "asset": "DPM",
                  "dir": "MUA NẰM IM — tiền bắt đầu vào",
                  "entry": "Nền giá phẳng",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:DPM"
                },
                {
                  "asset": "VCB",
                  "dir": "CẦM CHẶT — trong rổ FTSE",
                  "entry": "—",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:VCB"
                },
                {
                  "asset": "BID",
                  "dir": "CẦM CHẶT",
                  "entry": "—",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:BID"
                },
                {
                  "asset": "CTG",
                  "dir": "CẦM CHẶT",
                  "entry": "—",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:CTG"
                },
                {
                  "asset": "TCB",
                  "dir": "CẦM — nhưng có thể cơ cấu 1/3 sang HDB",
                  "entry": "—",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:TCB"
                },
                {
                  "asset": "SCS",
                  "dir": "NẰM IM",
                  "entry": "—",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:SCS"
                },
                {
                  "asset": "VIC",
                  "dir": "KHÔNG KHOÁI Ở VÙNG CAO",
                  "entry": "—",
                  "target": "—",
                  "stop": "Tây mua vùng này là bị úp bô",
                  "sig": "warn",
                  "tv": "HOSE:VIC"
                },
                {
                  "asset": "HPG",
                  "dir": "KHÔNG THAM GIA",
                  "entry": "—",
                  "target": "—",
                  "stop": "Vingroup làm thép cuối 2026",
                  "sig": "avoid",
                  "tv": "HOSE:HPG"
                }
              ]
            },
            {
              "group": "Vàng & Bạc",
              "items": [
                {
                  "asset": "XAU/USD",
                  "dir": "VẪN CẦM — chưa bán",
                  "entry": "4.070–4.080 (giá vốn)",
                  "target": "4.760 → tích lũy 2 tháng → 6.000",
                  "stop": "—",
                  "sig": "up",
                  "tv": "OANDA:XAUUSD"
                },
                {
                  "asset": "Vàng vật chất (VN)",
                  "dir": "MUA BÌNH THƯỜNG — chênh chỉ 1tr/lượng",
                  "entry": "Bán ra 147,6 triệu",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": ""
                }
              ]
            },
            {
              "group": "Bitcoin & Crypto",
              "items": [
                {
                  "asset": "BTC",
                  "dir": "SHORT 2/3 — đang lỗ ~2.000/coin",
                  "entry": "70.000 · 72.000 · vùng hiện tại",
                  "target": "Tiếp tục đi xuống",
                  "stop": "Short thêm ở 82.000 · vùng tắc nghẽn 88.000",
                  "sig": "down",
                  "tv": "BINANCE:BTCUSDT"
                }
              ]
            },
            {
              "group": "Chứng khoán Mỹ",
              "items": [
                {
                  "asset": "S&P 500",
                  "dir": "GIỮ SHORT — điều chỉnh tiếp tuần tới",
                  "entry": "Hồi về ~7.750 thì short thêm",
                  "target": "Chốt 7.500 · xa hơn 7.000",
                  "stop": "—",
                  "sig": "down",
                  "tv": ""
                },
                {
                  "asset": "MRNA",
                  "dir": "SHORT — kỳ vọng ảo",
                  "entry": "150",
                  "target": "—",
                  "stop": "Còn 8 thử nghiệm nữa mới xong",
                  "sig": "down",
                  "tv": "NASDAQ:MRNA"
                },
                {
                  "asset": "VCX",
                  "dir": "MUA MẠNH",
                  "entry": "Vùng 40",
                  "target": "160–200 nếu OpenAI niêm yết 2.000 tỷ đô",
                  "stop": "—",
                  "sig": "up",
                  "tv": ""
                },
                {
                  "asset": "SPCX",
                  "dir": "SHORT THÊM khi hồi",
                  "entry": "140–146",
                  "target": "—",
                  "stop": "—",
                  "sig": "down",
                  "tv": ""
                },
                {
                  "asset": "AAPL",
                  "dir": "GIỮ LỆNH BÁN",
                  "entry": "—",
                  "target": "290",
                  "stop": "—",
                  "sig": "down",
                  "tv": "NASDAQ:AAPL"
                },
                {
                  "asset": "NVDA",
                  "dir": "GIỮ LỆNH BÁN",
                  "entry": "—",
                  "target": "200",
                  "stop": "—",
                  "sig": "down",
                  "tv": "NASDAQ:NVDA"
                },
                {
                  "asset": "INTC",
                  "dir": "GIỮ SHORT",
                  "entry": "—",
                  "target": "70",
                  "stop": "Phải lấp lại gap",
                  "sig": "down",
                  "tv": "NASDAQ:INTC"
                },
                {
                  "asset": "CRWD",
                  "dir": "GIỮ SHORT — chưa chốt",
                  "entry": "Đã bổ sung ở 224",
                  "target": "160–170 mới chốt lời",
                  "stop": "—",
                  "sig": "down",
                  "tv": "NASDAQ:CRWD"
                },
                {
                  "asset": "FTNT",
                  "dir": "GIỮ SHORT — đi cùng nhóm CRWD",
                  "entry": "—",
                  "target": "130",
                  "stop": "—",
                  "sig": "down",
                  "tv": "NASDAQ:FTNT"
                },
                {
                  "asset": "NFLX",
                  "dir": "MUA THÊM NẾU LÙI",
                  "entry": "77",
                  "target": "—",
                  "stop": "—",
                  "sig": "wait",
                  "tv": "NASDAQ:NFLX"
                },
                {
                  "asset": "DELL",
                  "dir": "SHORT NẾU KÉO LÊN",
                  "entry": "460",
                  "target": "—",
                  "stop": "—",
                  "sig": "down",
                  "tv": "NYSE:DELL"
                },
                {
                  "asset": "GOOGL",
                  "dir": "BỎ QUA — khó short khó long",
                  "entry": "—",
                  "target": "—",
                  "stop": "—",
                  "sig": "wait",
                  "tv": "NASDAQ:GOOGL"
                },
                {
                  "asset": "TSLA",
                  "dir": "KHÔNG ĐỤNG VÀO",
                  "entry": "—",
                  "target": "—",
                  "stop": "—",
                  "sig": "wait",
                  "tv": "NASDAQ:TSLA"
                }
              ]
            },
            {
              "group": "Nhật & Hàn",
              "items": [
                {
                  "asset": "NI225",
                  "dir": "ĐỢI HỒI RỒI SHORT",
                  "entry": "Vùng hồi phục",
                  "target": "Tiếp tục điều chỉnh",
                  "stop": "—",
                  "sig": "down",
                  "tv": ""
                },
                {
                  "asset": "005930",
                  "dir": "HỒI RỒI CHỊU TRẬN",
                  "entry": "—",
                  "target": "~297.500 KRW",
                  "stop": "—",
                  "sig": "down",
                  "tv": ""
                }
              ]
            }
          ]
        },
        {
          "date": "2026-08-21",
          "dateShort": "21/08",
          "timeAgo": "1 tuần trước",
          "tab": "Tút hội viên · 21/08 chiều",
          "sourceType": "member-post",
          "typeLabel": "Bài đăng hội viên · chiều",
          "title": "\"Không Cần Làm Gì Cả\" — Sau Phiên VN-Index +34 Điểm, Ông Nói Thẳng Về Sự Kiên Định",
          "summary": "Tút cuối tuần, viết đúng phiên VN-Index tăng 34 điểm lên 1.768. Ông nhắc lại việc suốt nhiều tuần chỉ nói một câu \"không cần làm gì cả\" và thừa nhận nghe vô lý — nhưng danh mục giờ đã ổn hơn rất nhiều. Kèm hai hành động mới: mua thêm SpaceX 1/3 và vào tiếp phần BTC còn lại.",
          "feedChips": [
            {
              "label": "Danh mục VN ▲ \"ổn hơn rất nhiều rồi\"",
              "sig": "up"
            },
            {
              "label": "SpaceX ▼ short thêm 1/3",
              "sig": "down"
            },
            {
              "label": "Vàng ▲ chênh chỉ 2–4tr/lượng — không mua thì đợi gì?",
              "sig": "up"
            },
            {
              "label": "BTC ◷ đang lõm nhưng vào tiếp đúng kế hoạch",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "Chứng khoán Việt Nam",
              "value": "Kiên định \"không cần làm gì cả\" đã có kết quả",
              "signal": "up",
              "note": "\"Việc suốt ngày nói 'Với chứng Việt chúng ta không cần làm gì cả' sau khi cầm cổ vùng thấp hoặc còn hàng lỗ nhẹ anh chị hội viên thấy ok không? Luôn kiên định vì thấy nó vô lý quá. Tạm thời thấy ổn hơn rất nhiều trong danh mục rồi.\" Viết đúng phiên VN-Index đóng cửa 1.768, tăng gần 34 điểm."
            },
            {
              "tag": "Vàng vật chất",
              "value": "Chênh 2–4 triệu/lượng mà không mua thì đợi gì",
              "signal": "up",
              "note": "\"Vàng thì...ôi thôi khỏi bàn. Khi chênh lệch chỉ 2-4 tr/lượng mà không dám mua thì chắc đợi 15-20tr chênh mới mua?\" Mức chênh này là thấp nhất trong nhiều tháng — hồi đầu tháng ông ghi nhận 4–5 triệu."
            },
            {
              "tag": "SpaceX",
              "value": "Short thêm 1/3",
              "signal": "down",
              "note": "\"Chứng Mỹ không đổi, tiếp tục hold. Nay thêm SpaceX 1/3.\" Cộng với 1/3 đã vào từ Tập 45, vị thế short SPCX nay là 2/3."
            },
            {
              "tag": "BTC",
              "value": "Đang lõm nhưng vào tiếp phần còn lại",
              "signal": "wait",
              "note": "\"Btc đang lõm ;). Nhưng vẫn vào tiếp phần còn lại đúng kế hoạch.\" Tức là phần short còn lại theo mốc 74,1 và 77 đã nêu buổi sáng, dù vị thế hiện tại đang âm."
            }
          ],
          "sections": [
            {
              "title": "Lịch: video cuối tuần 6h sáng Chủ nhật",
              "signal": "wait",
              "sigLabel": "SẮP TỚI",
              "para": "\"Happy weekend các anh chị. Video cuối tuần vẫn là 6h sáng Chủ nhật nhé anh chị.\" Tập hội viên tiếp theo sẽ ra ngày 23/08 — Bản tin sẽ được dựng lại toàn bộ khi đó.",
              "bullets": [
                "Tập 45 (15/08) vẫn là tập hội viên gần nhất tại thời điểm bản cập nhật này.",
                "Ba tút trong hai ngày 20–21/08 đã thay thế phần lớn vai trò của một tập hội viên: có đủ vị thế BTC, vàng, chứng Mỹ và danh mục Việt Nam."
              ]
            }
          ],
          "tradeLevels": [
            {
              "group": "Chứng khoán Mỹ",
              "items": [
                {
                  "asset": "SPCX",
                  "dir": "SHORT THÊM 1/3 — nay tổng 2/3",
                  "entry": "Vùng hiện tại",
                  "target": "Về 80–90",
                  "stop": "29/6/2027 Elon được bán toàn bộ",
                  "sig": "down",
                  "tv": ""
                }
              ]
            },
            {
              "group": "Vàng & Bạc",
              "items": [
                {
                  "asset": "Vàng vật chất (VN)",
                  "dir": "MUA — chênh chỉ còn 2–4 triệu/lượng",
                  "entry": "Vùng hiện tại",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": ""
                }
              ]
            }
          ]
        },
        {
          "date": "2026-08-21",
          "dateShort": "21/08",
          "timeAgo": "1 tuần trước",
          "tab": "Tút hội viên · 21/08 sáng",
          "sourceType": "member-post",
          "typeLabel": "Bài đăng hội viên · sáng",
          "title": "Chốt Lời 1/2 Vinamilk, Giữ Nguyên Phần Còn Lại — \"Chứng Mỹ Vẫn Hold, Dư Địa Còn Giảm\"",
          "summary": "Tút rà soát toàn danh mục sau phiên chứng Mỹ thắng lớn. Điểm đáng chú ý nhất là mã DUY NHẤT bị cắt tỉ trọng: Vinamilk chốt lời 1/2, với lý do rất cụ thể là doanh số quý 3 và quý 4 dự kiến kém sau chiến dịch kỷ niệm 50 năm. Còn lại giữ nguyên hết.",
          "feedChips": [
            {
              "label": "VNM ▼ CHỐT LỜI 1/2 — tiêu thụ yếu",
              "sig": "down"
            },
            {
              "label": "CK Mỹ ▲ \"quả siêu ngọt\" — vẫn hold, chưa chốt",
              "sig": "up"
            },
            {
              "label": "PNJ · FPT ◷ cân nhắc lướt sóng cú hồi",
              "sig": "wait"
            },
            {
              "label": "SCS · Phân bón · Bank ▲ giữ nguyên",
              "sig": "up"
            }
          ],
          "keyCalls": [
            {
              "tag": "VNM",
              "value": "Chốt lời 1/2",
              "signal": "down",
              "note": "\"VNM chốt lời 1/2 (sau chiến dịch 50 năm kỉ niệm công ty thì cũng tạm dừng khi tiêu thụ của người dân yếu, doanh số quý 3, và quý 4 dự kiến kém theo phỏng đoán của tôi).\" Ông ghi rõ đây là phỏng đoán của mình, không phải số liệu công bố."
            },
            {
              "tag": "Chứng khoán Mỹ",
              "value": "Vẫn hold short — chưa chốt",
              "signal": "down",
              "note": "\"Mọi người hỏi nên chốt lời chưa thì thưa rằng, tôi vẫn hold. Chưa chốt. Tôi thấy dư địa còn giảm nên không có lý do bỏ túi đoạn này.\" Vị thế short US500/US30 mở từ đầu tháng nay đã có lãi rõ."
            },
            {
              "tag": "Vàng",
              "value": "Chinh phục 4.600–4.700 rồi mới lắc",
              "signal": "up",
              "note": "Không đổi so với Tập 45. Vàng đã vượt 4.500 trong tuần theo ghi nhận độc lập của Chứng khoán 5 phút."
            },
            {
              "tag": "BTC — chi tiết vị thế",
              "value": "Short nhẹ 1/3 ở 72k, đang âm 1.700/coin",
              "signal": "down",
              "note": "\"BTC thì tôi vẫn trong trạng thái S nhẹ 1/3 ở 72k, và vùng tiếp theo nếu có sẽ S ở 74,1 và 1/3 tại 77 nếu có. Đang âm 1.7k/bit.\" Lưu ý tút 20/08 ghi là short 1/2 ở 71,9–72, tút này ghi 1/3 ở 72k — hai cách chia tỉ trọng khác nhau, trang này giữ nguyên cả hai chứ không chọn hộ."
            },
            {
              "tag": "Chứng khoán Việt Nam",
              "value": "Không thay đổi gì cả",
              "signal": "up",
              "note": "\"Với chứng Việt thì ta vẫn như vậy, không thay đổi gì cả.\" SCS giữ, phân bón giữ nguyên trạng, bank giữ."
            },
            {
              "tag": "PNJ · FPT",
              "value": "Cơ hội lướt sóng ăn cú hồi",
              "signal": "wait",
              "note": "\"Một số cơ hội lướt sóng ăn cú hồi có thể cân nhắc PNJ, FPT như đã nói cách đây 1 tuần.\" Đây là chỗ lệch thẳng với Chứng khoán 5 phút cùng tuần: anh gọi PNJ là \"hàng linh tinh, bỏ đi\" vì doanh nghiệp đang có vấn đề hoạt động."
            }
          ],
          "sections": [
            {
              "title": "Đọc kỹ chỗ ông đổi ý: Vinamilk",
              "signal": "warn",
              "sigLabel": "CẮT TỈ TRỌNG",
              "para": "VNM là mã ông nêu tên trong danh mục giữ suốt từ tút 14/08. Tuần này nó là mã duy nhất bị cắt, và lý do là chu kỳ tiêu thụ chứ không phải đồ thị.",
              "bullets": [
                "Chiến dịch kỷ niệm 50 năm đã đẩy doanh số giai đoạn vừa qua; ông cho rằng phần đó sắp hết hiệu lực.",
                "Ông dự phóng doanh số quý 3 và quý 4 kém — và nói rõ \"theo phỏng đoán của tôi\".",
                "Đối chiếu: Chứng khoán 5 phút cùng tuần cũng không có kỳ vọng gì với VNM, nhưng vì lý do khác — ngành sữa đã bão hòa, báo cáo phân tích chỉ đưa tăng trưởng 3–4%/năm, và cản 68–70 khiến biên lãi không đủ."
              ]
            }
          ],
          "tradeLevels": [
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "VNM",
                  "dir": "CHỐT LỜI 1/2 — giữ phần còn lại",
                  "entry": "—",
                  "target": "—",
                  "stop": "Doanh số Q3–Q4 dự kiến kém",
                  "sig": "down",
                  "tv": "HOSE:VNM"
                },
                {
                  "asset": "PNJ",
                  "dir": "CÂN NHẮC LƯỚT SÓNG CÚ HỒI",
                  "entry": "Vùng hiện tại",
                  "target": "—",
                  "stop": "—",
                  "sig": "wait",
                  "tv": "HOSE:PNJ"
                },
                {
                  "asset": "FPT",
                  "dir": "CÂN NHẮC LƯỚT SÓNG CÚ HỒI",
                  "entry": "Vùng hiện tại",
                  "target": "—",
                  "stop": "—",
                  "sig": "wait",
                  "tv": "HOSE:FPT"
                },
                {
                  "asset": "SCS",
                  "dir": "GIỮ",
                  "entry": "—",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:SCS"
                }
              ]
            },
            {
              "group": "Bitcoin & Crypto",
              "items": [
                {
                  "asset": "BTC",
                  "dir": "SHORT 1/3 — đang âm 1.700/coin",
                  "entry": "72.000",
                  "target": "—",
                  "stop": "Vào tiếp ở 74.100 và 77.000",
                  "sig": "down",
                  "tv": "BINANCE:BTCUSDT"
                }
              ]
            },
            {
              "group": "Chứng khoán Mỹ",
              "items": [
                {
                  "asset": "S&P 500",
                  "dir": "HOLD SHORT — chưa chốt, dư địa còn giảm",
                  "entry": "—",
                  "target": "—",
                  "stop": "—",
                  "sig": "down",
                  "tv": ""
                }
              ]
            },
            {
              "group": "Vàng & Bạc",
              "items": [
                {
                  "asset": "XAU/USD",
                  "dir": "GIỮ — chinh phục 4.600–4.700 rồi mới lắc",
                  "entry": "—",
                  "target": "4.600–4.700",
                  "stop": "—",
                  "sig": "up",
                  "tv": "OANDA:XAUUSD"
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
          "date": "28/08/2026",
          "title": "CHIA SẺ VÌ SAO VÀNG SẼ LÊN NGÔI VƯƠNG, ĐÔ LA LUNG LAY",
          "meta": "Video công khai · 45:10 · Thái Phạm Official"
        },
        {
          "icon": "✎",
          "iconBg": "oklch(0.95 0.04 250)",
          "iconColor": "oklch(0.46 0.15 250)",
          "date": "28/08/2026",
          "title": "Tút hội viên: thả hedge vàng, khóa hedge BTC, thêm SZC và PC1",
          "meta": "Bài đăng cộng đồng · notes thứ Sáu"
        },
        {
          "icon": "✎",
          "iconBg": "oklch(0.95 0.04 250)",
          "iconColor": "oklch(0.46 0.15 250)",
          "date": "27/08/2026",
          "title": "Tút hội viên: \"Vàng hedged thành công, chứng Mỹ ngọt\"",
          "meta": "Bài đăng cộng đồng"
        },
        {
          "icon": "✎",
          "iconBg": "oklch(0.95 0.04 250)",
          "iconColor": "oklch(0.46 0.15 250)",
          "date": "26/08/2026",
          "title": "Tút hội viên: vàng đạt 4.700, hedge lại; BTC yếu rồi",
          "meta": "Bài đăng cộng đồng"
        },
        {
          "icon": "★",
          "iconBg": "oklch(0.95 0.05 85)",
          "iconColor": "oklch(0.52 0.14 85)",
          "date": "23/08/2026",
          "title": "TẬP 46 (ĐỘC QUYỀN HỘI VIÊN 2026): 23/8/2026",
          "meta": "Video hội viên · 40:12 · gộp cả Tập 22 hội viên CK nước ngoài"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "23/08/2026",
          "title": "CHIA SẺ DỰ BÁO CHỨNG KHOÁN TUẦN: BÙNG NỔ SAU TIN FTSE NÂNG HẠNG",
          "meta": "Video công khai · 42:30 · Thái Phạm Official"
        },
        {
          "icon": "✎",
          "iconBg": "oklch(0.95 0.04 250)",
          "iconColor": "oklch(0.46 0.15 250)",
          "date": "21/08/2026",
          "title": "Tút hội viên chiều: \"Không cần làm gì cả\" — thêm SpaceX 1/3",
          "meta": "Bài đăng cộng đồng · 62 lượt thích"
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
          "date": "2026-08-27",
          "dateShort": "27/08",
          "timeAgo": "hôm qua",
          "tab": "P/E · 27/08",
          "sourceType": "public-video",
          "typeLabel": "Phân tích · 22 phút",
          "title": "Áp Dụng P/E Vào Đầu Tư Giá Trị — Sách Nói P/E Cao Là Tốt, Thực Tế Thì Ngược Lại",
          "summary": "AzFin bóc chỗ lệch giữa giáo trình và thực chiến: trường đại học dạy P/E cao phản ánh triển vọng tốt, nhưng với người đi đầu tư thì thứ cần tìm là doanh nghiệp tốt mà P/E THẤP. Và cái bẫy lớn nhất không phải P/E cao hay thấp mà là P/E có thật hay không.",
          "feedChips": [
            {
              "label": "Sách ◷ P/E cao phản ánh triển vọng tốt",
              "sig": "wait"
            },
            {
              "label": "Thực chiến ▲ doanh nghiệp tốt + P/E THẤP mới là cơ hội",
              "sig": "up"
            },
            {
              "label": "Bẫy ⚠ P/E thấp giả — FLC 2017, PLP khi mới lên sàn",
              "sig": "warn"
            },
            {
              "label": "Điều kiện ▲ phải là EPS THẬT",
              "sig": "up"
            }
          ],
          "keyCalls": [
            {
              "tag": "Chỗ lệch giữa sách và thực chiến",
              "value": "Doanh nghiệp tốt mà P/E cao thì đã hết cơ hội",
              "signal": "up",
              "note": "\"Ở trường đại học người ta nói cổ phiếu P/E cao phản ánh nhà đầu tư đánh giá cao triển vọng doanh nghiệp. Điều này về cơ bản cũng phù hợp — nhưng nó giả định thị trường gần như hoàn hảo. Thực tế khi đầu tư thì cái chúng ta cần là doanh nghiệp tốt, nhưng P/E phải THẤP cơ. Nếu doanh nghiệp tốt mà P/E cao thì về cơ bản định giá hợp lý rồi, không còn cơ hội mang lại lợi nhuận cao.\" Ông áp dụng chỉ số này từ 2007."
            },
            {
              "tag": "Bẫy P/E thấp giả",
              "value": "FLC 2017 và PLP — lợi nhuận bơm ảo khiến P/E trông rẻ",
              "signal": "warn",
              "note": "FLC năm 2017 \"bốc lợi nhuận trong năm đó lên 1.400 tỷ, tăng rất cao, P/E rất thấp — nhưng rồi sau đó giá cổ phiếu giảm rất sâu\". PLP (công ty pha lê ở Nghệ An) lúc mới lên sàn lợi nhuận rất cao, P/E rất thấp, sau đó giá giảm sâu. \"Họ cố tình bốc lợi nhuận ảo vào trong đấy.\""
            },
            {
              "tag": "Điều kiện để P/E dùng được",
              "value": "Phải là P/E THẬT — tức EPS thật",
              "signal": "up",
              "note": "\"P/E ở đây phải là P/E thật. P/E thật tức là cái EPS thật, hay nói khác là lợi nhuận sau thuế phải là thật.\" Đây là chỗ nối với chuỗi bài tích sản của ông: chọn đúng doanh nghiệp là điều kiện tiên quyết, mọi phép tính định giá đứng sau nó."
            }
          ],
          "sections": []
        },
        {
          "date": "2026-08-25",
          "dateShort": "25/08",
          "timeAgo": "3 ngày trước",
          "tab": "Vốn nhỏ · 25/08",
          "sourceType": "public-video",
          "typeLabel": "Phân tích · 20 phút",
          "title": "Vốn Nhỏ Thì Đầu Tư Thế Nào — \"Mục Tiêu Chính Không Phải Là Sinh Lời\"",
          "summary": "AzFin đưa một kết luận nghe ngược: với vốn nhỏ thì mục tiêu chính của việc đầu tư không phải là kiếm lời, mà là tích kiến thức và kinh nghiệm để rút ra triết lý đầu tư. Kèm danh sách rất cụ thể những thứ nên đọc thay vì nhìn bảng điện.",
          "feedChips": [
            {
              "label": "Luận điểm ▲ vốn nhỏ thì lãi không đáng kể — nhưng là khởi đầu tốt",
              "sig": "up"
            },
            {
              "label": "Mục tiêu ▲ kiến thức + kinh nghiệm, không phải sinh lời",
              "sig": "up"
            },
            {
              "label": "Hành động ▲ mua tích lũy + đọc, đừng nhìn bảng điện",
              "sig": "up"
            },
            {
              "label": "Đích ◷ 2–5 năm sau rút ra triết lý đầu tư",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "Phép tính mở đầu",
              "value": "Vốn 50 triệu, lãi 10–12%/năm chỉ được 5–6 triệu",
              "signal": "wait",
              "note": "\"Nó không hề đáng kể một chút nào. Còn tất nhiên nhiều người bảo là có thể đầu tư sinh lời 20, 30, 40% — thế thì đấy là những nhà đầu tư rất xuất sắc, kỳ cựu rồi, thì vốn của họ tất nhiên là không nhỏ đâu.\" Vốn nhỏ thường đi kèm kiến thức và kinh nghiệm chưa nhiều."
            },
            {
              "tag": "Mục tiêu thật của giai đoạn vốn nhỏ",
              "value": "Kiến thức + kinh nghiệm → triết lý đầu tư sau 2–5 năm",
              "signal": "up",
              "note": "\"Mục tiêu chính không phải là sinh lời, mà chính là kiến thức cộng kinh nghiệm... để mục đích khoảng 2, 3, 4, 5 năm sau rút ra được — nói nhỏ thì là bài học đầu tư, nhưng nói chuẩn nhất thì phải là rút ra được TRIẾT LÝ ĐẦU TƯ. Cái này mới là quan trọng nhất.\" Ông nhắc Warren Buffett cũng khởi đầu chỉ với vài cổ phiếu."
            },
            {
              "tag": "Cách làm cụ thể",
              "value": "Mua tích lũy vài mã rồi ĐỌC về nó hàng ngày, không nhìn bảng điện",
              "signal": "up",
              "note": "Ví dụ ông đưa: MBB, FPT, REE. \"Chúng ta hàng ngày không phải nhìn bảng điện tử mà là đọc về nó.\" Danh sách đọc: báo cáo thường niên (như tổng kết cuối năm của một gia đình — làm được gì, kết quả ra sao, kế hoạch 1–3 năm tới), báo cáo tài chính, và báo cáo phân tích."
            },
            {
              "tag": "Phân biệt sell-side và buy-side",
              "value": "Đọc cả báo cáo công ty chứng khoán lẫn công ty quản lý quỹ",
              "signal": "up",
              "note": "Báo cáo công ty chứng khoán là sell-side — viết để nhà đầu tư bên ngoài đọc và mua. Báo cáo công ty quản lý quỹ là buy-side — \"họ cũng không cần phải trang điểm một cách đẹp đẽ\". Đọc cả hai để thấy được khoảng cách giữa hai góc nhìn."
            }
          ],
          "sections": []
        },
        {
          "date": "2026-08-23",
          "dateShort": "23/08",
          "timeAgo": "5 ngày trước",
          "tab": "Lăng kính · 23/08",
          "sourceType": "public-video",
          "typeLabel": "Lăng kính · 40 phút",
          "title": "Xây Dựng Thu Nhập Thụ Động Từ Tích Sản — Và Lý Do Cấp Bách Đằng Sau Nó",
          "summary": "AzFin mở đầu không bằng cổ phiếu mà bằng một quan sát xã hội: khoảng cách giàu nghèo đang giãn ra rất nhanh, các chuỗi lớn nuốt dần hộ kinh doanh nhỏ, và lớp tuổi 35–45 mất việc gần như không xin lại được. Đó là lý do ông cho rằng nguồn thu nhập thứ hai không còn là lựa chọn.",
          "feedChips": [
            {
              "label": "Bối cảnh ⚠ 1% giàu nhất Mỹ nay giàu hơn cả tầng lớp trung lưu cộng lại",
              "sig": "warn"
            },
            {
              "label": "Lương ⚠ khởi điểm 15 năm chỉ tăng 80%, tiền mất giá gấp 3",
              "sig": "warn"
            },
            {
              "label": "Chuỗi lớn ⚠ nuốt dần tạp hóa, điện máy, nhà thuốc, BĐS nhỏ",
              "sig": "warn"
            },
            {
              "label": "Kết luận ▲ thu nhập thụ động không còn là lựa chọn",
              "sig": "up"
            }
          ],
          "keyCalls": [
            {
              "tag": "Con số mở đầu",
              "value": "1% giàu nhất Mỹ nay sở hữu nhiều tài sản hơn toàn bộ tầng lớp trung lưu",
              "signal": "warn",
              "note": "\"Cách đây khoảng hơn 30 năm thì 1% đó chỉ bằng 1/10 so với tầng lớp trung lưu thôi. Nhưng bây giờ 1% tinh hoa nhất thì họ đã sở hữu nhiều tài sản hơn toàn bộ tầng lớp trung lưu rồi.\""
            },
            {
              "tag": "Phép tính lương thực tế",
              "value": "Lương khởi điểm tăng 80% sau 15 năm, nhưng tiền mất giá hơn gấp 3",
              "signal": "warn",
              "note": "Năm 2011 lương khởi điểm khoảng 4 triệu; nay khoảng 7 triệu — tăng 80%. Nhưng ông tính mức mất giá chung của đồng tiền khoảng hơn 10%/năm, tức sau 15 năm đã gấp hơn ba lần. \"Nếu mà khởi điểm bây giờ nó phải 12 triệu thì nó mới tương đương với 2011.\""
            },
            {
              "tag": "Cơ chế nuốt của chuỗi lớn",
              "value": "Điện máy, tạp hóa, nhà thuốc, chợ cóc, BĐS nhỏ đều đã bị thay thế",
              "signal": "warn",
              "note": "Danh sách ông liệt kê: cửa hàng điện máy ở huyện thị bị chuỗi lớn ẩn hết; tạp hóa nhỏ bị WinMart và Bách Hóa Xanh chiếm; điện thoại điện máy bị Thế Giới Di Động; chợ cóc chợ tạm bị hệ thống chiếm; cửa hàng thuốc bị Long Châu thâu tóm; công ty BĐS nhỏ phân lô bán nền \"bây giờ cũng dẹp hết rồi\"."
            },
            {
              "tag": "Rủi ro tuổi 35–45",
              "value": "Mất việc ở tuổi này gần như không xin lại được",
              "signal": "warn",
              "note": "\"Trong hơn 10 tháng vừa qua tôi cũng trao đổi cùng vài người tuổi từ 35 đến 45 nhưng họ lại lâm vào cảnh thất nghiệp, vì những công ty họ làm là công ty vừa vừa nho nhỏ không có sức cạnh tranh, cuối cùng bị đào thải... Bây giờ tuổi đó thì con mới đang học cấp một cấp hai. Một người mất việc rồi thì coi như hỏng luôn.\" Ngoại lệ duy nhất: nhân sự cao cấp thì chuyển dịch dễ."
            }
          ],
          "sections": [
            {
              "title": "Vì sao ông đặt bài này ngay sau hai bài về tích sản",
              "signal": "up",
              "sigLabel": "MẠCH NỐI",
              "para": "Đây là bài thứ ba trong chuỗi. Hai bài trước trả lời \"tích sản có hiệu quả không\" và \"ở Việt Nam có tích sản được không\"; bài này trả lời \"vì sao phải làm ngay\".",
              "bullets": [
                "Lập luận cốt lõi: khi nền kinh tế chuyên nghiệp hóa, tập đoàn lớn càng phát triển còn công ty nhỏ và hộ kinh doanh càng bị đào thải — nên cách an toàn nhất là SỞ HỮU chính các tập đoàn đó thay vì cạnh tranh với chúng.",
                "Đây cũng là chỗ ăn khớp với luận điểm MSN của Chứng khoán 5 phút cùng tuần: chuỗi bán lẻ đang nuốt thị phần, và cách tham gia là mua cổ phiếu chuỗi.",
                "Lưu ý khi đọc: đây là bài khung tư duy, không có mã và không có mốc giá."
              ]
            }
          ]
        },
        {
          "date": "2026-08-21",
          "dateShort": "21/08",
          "timeAgo": "1 tuần trước",
          "tab": "Lăng kính · 21/08",
          "sourceType": "public-video",
          "typeLabel": "Phân tích · 15 phút",
          "title": "\"Ở Việt Nam Không Tích Sản Được Đâu\" — Bóc Ba Hiểu Sai, Và Bài Toán Thật Của VPBank",
          "summary": "AzFin phản biện câu nói phổ biến rằng thị trường Việt Nam quá cờ bạc để tích sản, bằng chính lập luận ngược: biên độ dao động lớn mới là lợi thế. Kèm hồ sơ VPBank có ngày tháng và giá cụ thể — tích 2 năm 7 tháng vẫn lỗ 20%, rồi chốt lời 82% chỉ sau đó vài tháng.",
          "feedChips": [
            {
              "label": "Luận điểm ▲ biên độ VN lớn hơn → tích được nhiều điểm rẻ hơn",
              "sig": "up"
            },
            {
              "label": "VPB ▲ tích từ 18 (01/2023) → chốt 32,8 (07/2025) = +82%",
              "sig": "up"
            },
            {
              "label": "Hiểu sai ⚠ tích sản KHÔNG phải DCA mua bất chấp giá",
              "sig": "warn"
            },
            {
              "label": "Hiện tại ◷ đang tích lại VPB, giá vốn 26.200, tạm lỗ 5,2%",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "Vì sao biên độ lớn là lợi thế",
              "value": "Tích được nhiều điểm rẻ hơn, bán được nhiều điểm cao hơn",
              "signal": "up",
              "note": "\"Ở Việt Nam thị trường chứng khoán lên thì cổ phiếu cơ bản cũng lên và lên thường rất quá đà so với cái giá trị của nó. Ngược lại khi xuống thì nó cũng xuống rất quá đà.\" Với thị trường phát triển, biên độ hẹp hơn nên độ rẻ khi mua và độ đắt khi bán đều ít hơn. Anh nói kết quả 10 năm áp dụng của AzFin là lợi suất trên 33%/năm."
            },
            {
              "tag": "Ba hiểu sai về tích sản",
              "value": "Không phải mua bất chấp giá · không phải mua đều mọi lúc · không phải không bán",
              "signal": "warn",
              "note": "Hiểu sai 1: \"tích sản cổ phiếu là mua hàng tháng với bất kỳ giá nào — cái này tôi xin khẳng định là hoàn toàn sai. Đây là phương pháp DCA tức là mua bình quân bất chấp.\" Hiểu sai 2: mua hàng tháng thì đúng, nhưng kèm điều kiện giá phải thấp hơn giá trị. Hiểu sai 3: \"mua bất kỳ giá nào và không bán — không bán lại là cái sai rồi.\" Đầu tư giá trị thì mua dưới giá trị và bán khi vượt giá trị."
            },
            {
              "tag": "VPB — hồ sơ thật, giai đoạn 1",
              "value": "Tích từ 01/2023 giá 18, tới 07/2025 vẫn 18 — có lúc âm 20%",
              "signal": "up",
              "note": "Giá điều chỉnh sau chia cổ tức. Suốt 2 năm 7 tháng giá dập dìu quanh 18; riêng thời điểm thuế quan tháng 5/2025 rơi về vùng 14x, tức âm khoảng 20% so với giá tích. Sau đó chốt lời ngày 15/07/2025 ở 32,8 — lãi khoảng 82%. Giá còn lên tới 38,5 sau đó, tức anh bán trước đỉnh."
            },
            {
              "tag": "VPB — hồ sơ thật, giai đoạn 2",
              "value": "Đang tích lại, giá vốn 26.200, đóng cửa 20/08 là 24.900 — tạm lỗ 5,2%",
              "signal": "wait",
              "note": "Bắt đầu tích lại khi giá dưới 30, tới nay được 8–9 tháng. \"Vẫn đang tiếp tục lỗ… điều này hoàn toàn bình thường, nó cũng giống như trước đây thôi.\" Anh nói tháng nào cũng đăng danh mục tích sản lên fanpage nên có thể đối chiếu được."
            },
            {
              "tag": "Giá trị hợp lý của VPB",
              "value": "~39–40",
              "signal": "up",
              "note": "Cách tính: từ lúc bán 32,8 (07/2025) tới nay hơn một năm, VPBank tạo thêm khoảng 34.000 tỷ giá trị sổ sách — lợi nhuận bốn quý (Q3/2025 đến Q2/2026) cộng khoảng 6.000 tỷ thặng dư cho cổ đông khi IPO VPX. Tương đương ROE 21–22%, cộng vào giá bán cũ ra khoảng 39,3–40. \"Bởi vậy cho nên ví dụ giá VPBank ở dưới 30 chẳng hạn là rất tốt để tích sản.\""
            }
          ],
          "sections": [
            {
              "title": "Điều nghịch lý nhất trong bài: đi ngang mới là điều kiện tốt nhất",
              "signal": "up",
              "sigLabel": "KHUNG TƯ DUY",
              "para": "Đây là chỗ lập luận đảo ngược trực giác thông thường, và anh chứng minh bằng phép tính đối chứng.",
              "bullets": [
                "Nếu VPB đứng ở 18 suốt 2 năm 7 tháng rồi bật lên 32,8: giá vốn 18, lãi 82%.",
                "Nếu cùng khoảng thời gian đó giá bò dần lên 30–31: giá vốn bình quân thành khoảng 25, bán 32,8 chỉ lãi 30–32%.",
                "\"Bởi vậy cho nên với thị trường chứng khoán tích sản cổ phiếu thích nhất là cái giai đoạn cổ phiếu nó đi ngang như thế này.\"",
                "Áp dụng thẳng vào hiện tại: \"cái việc giá cổ phiếu VPBank ở cái vùng thấp này càng dài càng lâu thì chúng tôi sẽ tích sản được càng rẻ.\""
              ]
            },
            {
              "title": "Điều kiện đi kèm — đừng bỏ qua",
              "signal": "warn",
              "sigLabel": "LƯU Ý",
              "para": "Toàn bộ bài toán chỉ đúng nếu doanh nghiệp vẫn tạo ra giá trị trong lúc giá không tăng. Anh nêu rõ ranh giới.",
              "bullets": [
                "Phải đa dạng hóa: AzFin dùng 10 mã. \"Ví dụ như PNJ chẳng hạn, cho dù chúng tôi không có, nhưng nếu nó xảy ra chăng đi chăng nữa thì cũng chỉ có một cổ phiếu ảnh hưởng xấu đến danh mục thôi.\"",
                "\"Trong đầu tư lưu ý đến quý vị là không ai có thể đúng 100% cả bởi vì tương lai chúng ta không dự báo được hết.\"",
                "Với VPB, giả định trung tâm là mỗi quý mang về 8.000–10.000 tỷ lợi nhuận cho cổ đông. Nếu giả định này hỏng thì cả bài toán hỏng theo — đây là điểm cần theo dõi ở báo cáo các quý tới."
              ]
            }
          ],
          "tradeLevels": [
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "VPB",
                  "dir": "TÍCH SẢN — dưới 30 là vùng tốt",
                  "entry": "Giá vốn hiện tại 26.200",
                  "target": "Giá trị hợp lý ~39–40",
                  "stop": "Không cắt lỗ: giá càng thấp càng tích được rẻ",
                  "sig": "up",
                  "tv": "HOSE:VPB"
                }
              ]
            }
          ]
        },
        {
          "date": "2026-08-19",
          "dateShort": "19/08",
          "timeAgo": "1 tuần trước",
          "tab": "Podcast · 19/08 (Phần 2)",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Cổ Phiếu Không Có Cổ Tức Tích Lũy Giá Trị Như Thế Nào? (Phần 2)",
          "summary": "Tiếp nối Phần 1 (17/08) — ca học kinh điển: tích lũy giá trị cổ phiếu KHÔNG trả cổ tức bằng case study Techcombank (TCB) 2020-2025. Mua từ vùng giá 1x năm 2020, tiếp tục mua đến 52, giá tăng lên 58 rồi sập về 19.500 tháng 11/2022 (PE <4 lần, PB 0,67 lần — lọt top 5 cổ phiếu PE dưới 4 lần mà AzFin từng làm clip công khai). Vẫn tiếp tục tích lũy trong suốt giai đoạn giảm, giá vốn bình quân ~30 (tương đương 60 trước chia). Luận điểm cốt lõi: dù không trả cổ tức, giá trị sổ sách (book value) TCB vẫn tăng đều mỗi năm nhờ ROE 15-20%/năm (2022: ~30.000đ → 2024: ~42.000đ → 2025 ước ~49.000đ) — nghĩa là mua ở bất kỳ giá nào trong giai đoạn khó khăn thì giá trị nội tại vẫn tăng lên hàng năm, PB càng giảm về sâu (0,4 lần) thì càng an toàn. Kết quả: bán năm 2025 ở giá 42.000 (đã chia 1:1 + nhận cổ tức, quy đổi tương đương 85.500), tổng lợi nhuận ~160% trong 5 năm — lợi suất kép bình quân ~35%/năm. Kết luận áp dụng cho hiện tại: giai đoạn thị trường giảm sâu T7-T8/2026 được đánh giá là cơ hội tích lũy giá trị tương tự, đang tiếp tục thực hiện.",
          "feedChips": [
            {
              "label": "TCB ↑ case study: 5 năm tích lũy, lãi kép ~35%/năm",
              "sig": "up"
            },
            {
              "label": "Nguyên tắc ↑ giá trị sổ sách tăng đều dù không cổ tức",
              "sig": "up"
            },
            {
              "label": "Hiện tại ◷ T7-T8/2026 là cơ hội tích lũy tương tự",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "Case study TCB",
              "value": "Tích lũy 2020–2025, lợi nhuận ~160% (~35%/năm lợi suất kép)",
              "signal": "up",
              "note": "Mua liên tục từ vùng 1x đến giá vốn bình quân ~30 (60 trước chia), kể cả khi giá giảm từ 58 xuống 19.500 (T11/2022, PE<4x, PB 0,67x). Bán 2025 ở giá 42.000 (quy đổi 85.500 sau chia + cổ tức)."
            },
            {
              "tag": "Nguyên tắc tích lũy giá trị",
              "value": "Book value tăng đều hàng năm dù cổ phiếu không trả cổ tức",
              "signal": "up",
              "note": "ROE 15-20%/năm khiến giá trị sổ sách TCB tăng từ ~30.000đ (2022) lên ~42.000đ (2024) rồi ~49.000đ (2025 ước) — mua càng rẻ (PB càng thấp) thì càng an toàn, chờ định giá trở lại bình thường (PB ~2x) để chốt lời."
            },
            {
              "tag": "Áp dụng hiện tại",
              "value": "T7–T8/2026 là cơ hội tích lũy giá trị lớn tương tự — đang thực hiện",
              "signal": "wait",
              "note": "Thị trường giảm sâu tạo khoảng cách giá trị/giá cả lớn dần — \"rẻ không mua thì đắt lấy đâu ra cơ hội bán\"."
            }
          ],
          "sections": [
            {
              "title": "Case study Techcombank: tích lũy xuyên suốt cú sập 2022",
              "signal": "up",
              "sigLabel": "Tích cực",
              "para": "Bắt đầu mua TCB từ vùng giá 1x năm 2020, tiếp tục mua đến 52 vào 2022. Giá tăng lên 58 rồi sập mạnh về 19.500 vào tháng 11/2022 (áp lực từ khủng hoảng thanh khoản trái phiếu ngắn hạn của ngành) — tại đáy PE chưa đến 4 lần, PB chỉ 0,67 lần, lọt top 5 cổ phiếu PE dưới 4 lần mà AzFin từng làm clip công khai cuối 2022. Không hoảng loạn bán ra mà tiếp tục mua thêm, đưa giá vốn bình quân về khoảng 30 (tương đương 60 trước chia cổ phiếu 1:1). Sau đó tiếp tục tích lũy đến 2025, bán ra ở giá 42.000 — quy đổi thực nhận tương đương 85.500đ sau khi tính cả chia cổ phiếu và cổ tức tiền mặt đã nhận.",
              "bullets": [
                "Mua liên tục 2020–2025, giá vốn bình quân ~30 (60 trước chia)",
                "Đáy T11/2022: 19.500đ, PE<4 lần, PB 0,67 lần",
                "Bán 2025 ở 42.000đ, quy đổi thực nhận 85.500đ (đã tính chia + cổ tức)",
                "Tổng lợi nhuận ~160% trong 5 năm — lợi suất kép ~35%/năm"
              ]
            },
            {
              "title": "Vì sao tích lũy được dù không có cổ tức: giá trị sổ sách tăng đều",
              "signal": "up",
              "sigLabel": "Nguyên tắc cốt lõi",
              "para": "Ngay cả khi lợi nhuận không tăng, ROE 15-20%/năm khiến giá trị sổ sách (book value) của TCB vẫn tăng đều hàng năm: từ ~30.000đ cuối 2022, lên ~35.000đ (2023 ước), ~42.000đ (2024), ~49.000đ (2025 ước). Điều này có nghĩa là dù mua ở giá nào trong giai đoạn khó khăn (19.000-40.000), PB thực tế của lệnh mua đó càng ngày càng giảm theo thời gian nhờ giá trị nội tại tăng — càng về sau càng an toàn hơn (PB giảm dần: 0,67 → 0,55 → 0,44 → 0,4 lần). Đến khi thị trường thuận lợi trở lại, định giá quay về mức bình thường (PB ~2 lần, từng đạt 4 lần trong quá khứ) thì đó là lúc chốt lời — trước khi có kết quả 2025, giá đã tương đương PB ~1,9 lần.",
              "bullets": [
                "Book value TCB: ~30.000đ (2022) → ~42.000đ (2024) → ~49.000đ (2025 ước)",
                "PB tại các mốc mua giảm dần theo thời gian: 0,67 → 0,55 → 0,44 → 0,4 lần",
                "Chốt lời khi định giá về bình thường: PB ~2 lần (quá khứ từng lên 4 lần)",
                "Nguyên tắc: \"rẻ không mua thì đắt lấy đâu ra cơ hội bán\""
              ]
            }
          ]
        },
        {
          "date": "2026-08-17",
          "dateShort": "17/08",
          "timeAgo": "1 tuần trước",
          "tab": "Lăng kính · 17/08",
          "sourceType": "public-video",
          "typeLabel": "Phân tích · 18 phút",
          "title": "Thị Trường Giảm Là Cơ Hội Tích Lũy Giá Trị (Phần 1) — Bài Toán NT2: Giá Về 15.000 Thì Tỉ Suất Cổ Tức Lên 16,5%",
          "summary": "AzFin làm một bài toán số cụ thể thay vì nói lý thuyết: lấy NT2 giá 21.000 làm ví dụ, tính cả kịch bản tốt lẫn kịch bản giá sập về 15.000 — và chỉ ra vì sao với nhà đầu tư tích sản thì kịch bản thứ hai lại cho tỉ suất cổ tức cao hơn hẳn. Đây là phần 1.",
          "feedChips": [
            {
              "label": "Luận điểm ▲ giá càng giảm, cơ bản giữ nguyên → giá trị nhận được càng nhiều",
              "sig": "up"
            },
            {
              "label": "NT2 ▲ EPS bình quân dài hạn ~2.600đ, cổ tức ~2.500đ",
              "sig": "up"
            },
            {
              "label": "Kịch bản xấu ⚠ giá về 15.000 → lỗ thị giá ~17%",
              "sig": "warn"
            },
            {
              "label": "Điều kiện ◷ phải đủ 3: cổ phiếu tốt · định giá hấp dẫn · danh mục đa dạng",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "Ba điều kiện bắt buộc",
              "value": "Cổ phiếu tốt · định giá hấp dẫn · danh mục đủ đa dạng",
              "signal": "wait",
              "note": "Anh nhấn mạnh điều kiện thứ ba vì nó xử lý rủi ro khách quan: \"Chúng ta làm 10 cổ, nếu một cổ có bị làm sao thì vẫn có chín cổ khác mang lại cái giá trị rất lớn, bù lại những cái cổ bị hỏng kia.\" Thiếu một trong ba thì cả lập luận sụp."
            },
            {
              "tag": "NT2 — vì sao anh xếp là cổ phiếu tốt",
              "value": "Tài chính mạnh, hết khấu hao, máy Đức đốt khí",
              "signal": "up",
              "note": "Lượng tiền dư rất lớn nếu trừ đi nợ. Không tăng trưởng nhưng hiệu quả cao. Máy Siemens của Đức, đốt khí, chạy 15 năm hiệu suất vẫn tốt, về cơ bản đã hết khấu hao nhưng vẫn hoạt động rất tốt. Năm bảo trì lớn EPS có thể chỉ nghìn mấy; năm chạy công suất cao EPS có thể 4.000 hoặc hơn."
            },
            {
              "tag": "Con số nền của bài toán",
              "value": "EPS 2026 ~3.800đ · EPS bình quân dài hạn ~2.600đ · cổ tức ~2.500đ",
              "signal": "up",
              "note": "Sáu tháng đầu năm EPS đã gần 2.000đ. Cổ tức năm nay có thể 2.000–3.700đ, nhưng anh lấy 2.500đ làm mức bình quân dài hạn để tính. Cơ sở: nhu cầu điện Việt Nam rất cao phục vụ mục tiêu tăng trưởng trên 10% trong khi nguồn cung chưa đáp ứng được."
            },
            {
              "tag": "Kịch bản thuận lợi",
              "value": "Giá lên 30.000 trong 1 năm → tổng lợi nhuận ~55%",
              "signal": "up",
              "note": "Lãi thị giá 9.000đ cộng cổ tức 2.500đ = 11.500đ trên vốn 21.000đ. Anh nói thẳng đây là kịch bản ai cũng vui, không có gì đáng bàn."
            },
            {
              "tag": "Kịch bản xấu — chỗ đáng bàn",
              "value": "Giá về 15.000 → lỗ thị giá ~17%, nhưng tỉ suất cổ tức tái đầu tư lên 16,5%",
              "signal": "warn",
              "note": "Mất 6.000đ thị giá, bù lại 2.500đ cổ tức → lỗ ~3.500đ trên 21.000đ, tức ~17%. Nhưng 2,5 triệu cổ tức mua lại được 167 cổ ở giá 15.000 → tổng 1.167 cổ; năm sau cổ tức 2,9 triệu, so với vốn gốc 21 triệu là 13,5%. Tỉ suất cổ tức của riêng phần tái đầu tư là 2.500/15.000 = 16,5% — so với 11,5% khi mua ở giá 21.000."
            },
            {
              "tag": "Đẩy tới cùng",
              "value": "Về 10.000 → tỉ suất 25%; về 5.000 → 50%",
              "signal": "up",
              "note": "\"Càng giảm mạnh thì càng là cơ hội tích lũy của giá trị rất lớn ở đây.\" Và với người bơm thêm tiền: 21 triệu trước đây mua được 1.000 cổ, ở giá 15.000 mua được 1.400 cổ."
            }
          ],
          "sections": [
            {
              "title": "Điểm phải nói rõ: đây là bài toán có điều kiện",
              "signal": "warn",
              "sigLabel": "LƯU Ý",
              "para": "Toàn bộ lập luận đứng trên một giả định duy nhất — doanh nghiệp vẫn tốt và vẫn trả cổ tức đều khi giá giảm. Chính anh cũng nêu ranh giới này.",
              "bullets": [
                "\"Trừ cái trường hợp mà chúng ta chọn không chuẩn cổ phiếu thì chúng ta mới lo sợ thôi\" — anh cho rằng khả năng chọn đúng kiểm soát được ở mức 70–90%.",
                "Với NT2, rủi ro thật nằm ở chỗ chính anh thừa nhận: kết quả kinh doanh nhóm điện \"cực kỳ biến động, phập phù\" — năm bảo trì lớn EPS có thể tụt về nghìn mấy, và khi đó cổ tức 2.500đ không còn là mặc định.",
                "Bài toán này KHÔNG áp dụng cho người đánh ngắn hạn: nếu buộc phải bán trong lúc giá 15.000 thì phần lỗ 17% là thật."
              ]
            },
            {
              "title": "Cách nhà đầu tư giá trị dùng cả hai chiều thị trường",
              "signal": "up",
              "sigLabel": "KHUNG TƯ DUY",
              "para": "Anh chốt bằng một khung đối xứng: lên thì chốt lời bảo vệ thành quả rồi chuyển sang mã định giá rẻ hơn hoặc gửi ngân hàng chờ; xuống thì tái đầu tư cổ tức và bơm thêm tiền để mua được nhiều giá trị hơn.",
              "bullets": [
                "Ví dụ song song anh hay dùng: căn nhà 10 tỷ cho thuê 1 tỷ/năm. Giá lên 15 tỷ thì bán lãi 5 tỷ; giá xuống 5 tỷ thì mua thêm, vì tiền thuê vẫn 1 tỷ.",
                "\"Ai là người tồn tại cuối cùng ở trên thị trường chứng khoán là những người chiến thắng.\"",
                "Đây là phần 1 — anh báo sẽ có phần tiếp theo."
              ]
            }
          ],
          "tradeLevels": [
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "NT2",
                  "dir": "TÍCH SẢN — càng giảm càng gom",
                  "entry": "21.000 (giá tại 14/08)",
                  "target": "30.000 nếu thuận lợi — tổng lợi nhuận ~55%",
                  "stop": "Không có cắt lỗ: về 15.000 thì tái đầu tư cổ tức ở tỉ suất 16,5%",
                  "sig": "up",
                  "tv": "HOSE:NT2"
                }
              ]
            }
          ]
        },
        {
          "date": "2026-08-16",
          "dateShort": "16/08",
          "timeAgo": "1 tuần trước",
          "tab": "Lăng kính · 16/08",
          "sourceType": "public-video",
          "typeLabel": "Livestream · 68 phút",
          "title": "Lăng Kính Quý 3: \"Giai Đoạn Này Không Có Nhiều Chuyện Để Trao Đổi\"",
          "summary": "Buổi hỏi đáp thuần, và họ mở đầu bằng một câu tự nhận đáng ghi: đầu tư giá trị vốn ít nội dung, thị trường lại không đổi gì nhiều, nên không có mấy chuyện mới. Phần đáng giá nhất là hai chỗ họ bác lại thông tin đang lan trên báo.",
          "feedChips": [
            {
              "label": "Chiến lược ◷ không đổi — \"nóng hổi quá cũng không tốt\"",
              "sig": "wait"
            },
            {
              "label": "Vinmetal ⚠ con số 16 triệu tấn/năm là không đúng",
              "sig": "warn"
            },
            {
              "label": "Ngân hàng ◷ không tăng trưởng thì định giá rất khó",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "Tự nhận về nội dung",
              "value": "\"Giai đoạn này không có nhiều câu chuyện gì để trao đổi\"",
              "signal": "wait",
              "note": "\"Bởi lẽ cái đầu tư giá trị vốn nó đã rất là ít nội dung rồi, thì nó lại thêm là cái thị trường của chúng ta nó vẫn cứ vậy… Đối với đầu tư giá trị thì nóng hổi quá nó cũng không tốt, nguội lạnh quá thì nó cũng không ổn.\" Chiến lược không đổi. Đây là sự tương phản đáng chú ý với ba kênh còn lại đang bàn rất nhiều về Fed, địa chính trị và điểm mua."
            },
            {
              "tag": "Bác lại con số Vinmetal",
              "value": "16 triệu tấn/năm là không đúng",
              "signal": "warn",
              "note": "\"Báo trí nói thì viết 16 triệu tấn trên năm, có báo viết thì 5 triệu tấn, chả biết như thế nào. Chắc chắn không phải 16 triệu rồi. 5 triệu tấn thì nó đầu tư cũng phải mất vốn 70–80.000 tỷ rồi. Giai đoạn đầu nó mở có khi chỉ 2–3 triệu tấn là nhiều thôi, đến 5 triệu tấn thì là quá to rồi.\""
            },
            {
              "tag": "Định giá ngân hàng phụ thuộc tăng trưởng",
              "value": "Không tăng trưởng thì rất khó định giá",
              "signal": "wait",
              "note": "Nguyên tắc họ nhắc lại: ngân hàng tăng trưởng cao thì định giá cổ phiếu cũng rất cao; còn nếu không tăng trưởng thì định giá sẽ rất khó. Cùng hướng với Quang Dũng cùng tuần nhưng diễn đạt ngược lại — Quang Dũng nhìn từ định giá đang rẻ, AzFin nhìn từ điều kiện để định giá đứng vững."
            },
            {
              "tag": "Sở hữu nước ngoài trong ngân hàng Việt",
              "value": "Không chỉ Nhật và Hàn",
              "signal": "up",
              "note": "Trả lời một người xem cho rằng chỉ nhà đầu tư Nhật thích ngân hàng Việt: \"Rất nhiều cổ đông lớn của các ngân hàng này cũng có ở phương Tây đấy. Còn tất nhiên Nhật với Hàn nó yêu thích hơn.\""
            },
            {
              "tag": "Doanh nghiệp nợ vay nhiều",
              "value": "Không đưa vào danh sách theo dõi",
              "signal": "avoid",
              "note": "Được hỏi về một doanh nghiệp hưởng lợi đầu tư công, họ trả lời: nợ vay hơi nhiều nên không quan tâm lắm, \"do nợ vay nhiều quá thành ra không cho vào danh sách theo dõi\". Đây là bộ lọc cứng của họ, độc lập với việc doanh nghiệp có câu chuyện tốt hay không."
            }
          ],
          "sections": [],
          "tradeLevels": []
        }
      ],
      "sources": [
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "27/08/2026",
          "title": "ÁP DỤNG P/E VÀO ĐẦU TƯ GIÁ TRỊ NHƯ THẾ NÀO?",
          "meta": "Phân tích · 22:14 · AzFin Việt Nam"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "25/08/2026",
          "title": "VỐN NHỎ THÌ ĐẦU TƯ CHỨNG KHOÁN NHƯ THẾ NÀO?",
          "meta": "Phân tích · 20:08 · AzFin Việt Nam"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "27/08/2026",
          "title": "PHẦN 94: Cập nhật đánh giá PSD và DRI",
          "meta": "KHÔNG dựng — video hội viên AzFin, cần gói riêng của AzFin"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "25/08/2026",
          "title": "SỐ 148: Định giá cổ phiếu DCM",
          "meta": "KHÔNG dựng — video hội viên AzFin, cần gói riêng của AzFin"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "23/08/2026",
          "title": "Xây dựng thu nhập thụ động từ tích sản cổ phiếu | Lăng kính",
          "meta": "Lăng kính · 40:26 · AzFin Việt Nam"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "21/08/2026",
          "title": "Ở VIỆT NAM KHÔNG TÍCH SẢN CỔ PHIẾU ĐƯỢC ĐÂU?",
          "meta": "Phân tích · 15:18 · AzFin Việt Nam"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "19/08/2026",
          "title": "SỐ 147: Top 5 cổ phiếu ngân hàng hấp dẫn 19/08/2026",
          "meta": "Video hội viên AzFin · KHÔNG lấy được transcript — cần gói hội viên riêng của AzFin"
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
          "date": "2026-08-27",
          "dateShort": "27/08",
          "timeAgo": "hôm qua",
          "tab": "Livestream · 27/08",
          "sourceType": "public-video",
          "typeLabel": "Livestream · 74 phút",
          "title": "VN-Index 27/08: Ai Lại Mua Bán Trước Nghỉ Lễ Dài? — Và Nghị Quyết 40 Mở Đường Cho GAS",
          "summary": "Phiên trước kỳ nghỉ lễ, gần như không ai hỏi điểm mua. Anh dùng buổi này để bóc hai thứ có giá trị dài hơn một phiên: cấu trúc hai đáy của TCB, và Nghị quyết 40 về cơ cấu vốn nhà nước — thứ quyết định câu chuyện thoái vốn của GAS, BSR, BCM, PLX.",
          "feedChips": [
            {
              "label": "TCB ▲ hai đáy trung hạn — 30 là \"giá ngủ ngon\"",
              "sig": "up"
            },
            {
              "label": "GAS ◷ Nghị quyết 40 — nhà nước giữ trên 90%",
              "sig": "wait"
            },
            {
              "label": "PLX ◷ thủng MA20 thì cắt điểm break",
              "sig": "wait"
            },
            {
              "label": "HPA · DBC ⚠ ngành lợn còn khó, cần thời gian",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "TCB",
              "value": "Hai đáy trung hạn mới là điều quan trọng, không phải tin",
              "signal": "up",
              "note": "\"Cái quan trọng nhất của Techcombank bây giờ không phải là tin, cũng không phải kỳ vọng tăng lên bao nhiêu, mà là hai cái đáy này nó đã có rồi. Hai đáy này mất bao thời gian mới hình thành, từ tháng 3 tháng 4 chúng ta đã nhắm cái đáy đầu tiên, sau đó giai đoạn vừa rồi có thêm đáy số hai. Nếu nó thủng thì chúng ta sẽ có thêm rủi ro mới, còn nếu không thủng thì cứ cầm giá 28, 29, 30 thoải mái — 30 là giá ngủ ngon rồi, 28, 29 nữa thì tuyệt vời.\""
            },
            {
              "tag": "TCB — dự phóng ngắn hạn",
              "value": "Chiều mai hàng về sẽ có áp lực bán",
              "signal": "warn",
              "note": "\"Em nghĩ là chiều mai hàng về sẽ có áp lực bán của con Techcombank. Nhưng áp lực bán đấy nó cũng không lấn át được việc đây vẫn là một cổ phiếu cơ bản đang ở vùng giá hấp dẫn.\" Vùng 34–35 là kháng cự tiềm tàng, không vượt được là chuyện bình thường."
            },
            {
              "tag": "GAS — Nghị quyết 40",
              "value": "Nhà nước sẽ giữ trên 90% — chỉ bán ra vài phần trăm",
              "signal": "wait",
              "note": "Nghị quyết 40/2026 của Quốc hội phân loại doanh nghiệp để cơ cấu vốn nhà nước, chia ba nhóm: giữ 100%, giữ từ 65% trở lên, và giữ 50–65%. GAS nằm ở nhóm nhà nước sở hữu trên 90% — hiện đang 95,8%, tức có dư địa điều chỉnh xuống nhưng vẫn phải trên 90%. \"Nghị quyết này mở ra một trường hợp đặc biệt cho mấy con như GAS, BSR, BCM để không vi phạm quy định về công ty đại chúng.\""
            },
            {
              "tag": "PLX",
              "value": "Xử lý dễ hơn GAS — thuộc nhóm 50–65%",
              "signal": "wait",
              "note": "PLX nhà nước đang nắm 75,9%, thuộc nhóm phải về 50–65%, nên chỉ cần bán ra một phần là xử lý được — đã có kế hoạch bán khoảng 23 triệu cổ phiếu quỹ. Về giá: \"nền giá không đẹp bằng con GAS, áp lực bán xuất hiện nhiều hơn. Nếu đánh theo ngắn hạn thì thủng MA20 là có thể cắt được — thực ra cũng không phải cắt lỗ, là hòa vốn thôi.\""
            },
            {
              "tag": "Nhóm dầu khí nhà nước",
              "value": "Nắm giữ dài hạn cũng mệt",
              "signal": "warn",
              "note": "\"Mấy cái nhóm cổ phiếu dầu khí này nắm giữ cũng mệt đấy. Nó chịu sự quản lý rất nhiều từ các quy định của nhà nước, và những quy định này có thể thay đổi dựa theo mục tiêu của nhà nước trong từng giai đoạn.\" Cộng thêm rủi ro ngoài: tỷ giá, giá dầu, chuỗi cung ứng. Anh cũng nhắc: PLX, GAS, OIL lịch sử là mấy con chạy rất lờ đờ, chỉ mới năng động từ đầu 2026."
            },
            {
              "tag": "HPA · DBC — ngành lợn",
              "value": "Cơ hội nhưng mất nhiều thời gian",
              "signal": "warn",
              "note": "HPA đã giảm khoảng 33% từ giá IPO (~41,9). \"Đối với em thì nó là cơ hội, nhưng sẽ mất nhiều thời gian, và đọc xong bài phân tích thì có vẻ thời gian nó cũng hơi lâu.\" DBC thì dễ xử lý hơn vì giá vốn trung bình của người mua thường ở giữa: \"chỉ cần có một nhịp thị trường hồi lại là về bờ, không thấy rủi ro lắm.\""
            },
            {
              "tag": "FRT",
              "value": "Chưa có lý do bán — mới tăng 37% từ đáy",
              "signal": "up",
              "note": "\"Áp lực bán chưa có nhiều và nó mới tăng được một chút thôi. FRT tăng từ đáy đi lên mới có tầm 37%, là mức độ tăng rất bình thường của FRT theo lịch sử của nó. Chưa có lý do gì để bán, MA20 chưa thủng.\""
            }
          ],
          "sections": [
            {
              "title": "Cách anh dùng tin tức từ người trong ngành",
              "signal": "up",
              "sigLabel": "PHƯƠNG PHÁP",
              "para": "Một điểm phương pháp đáng ghi: anh phân biệt giữa báo cáo phân tích và phát ngôn của người trực tiếp điều hành.",
              "bullets": [
                "\"Khi đọc tin tức thì những tin tức của những người trực tiếp làm trong ngành nó rất quan trọng. Bọn em làm broker, tuy đọc nhiều báo cáo, phân tích được các ngành, hiểu biết nhất định về công ty — nhưng chắc chắn không thể hiểu biết bằng ban lãnh đạo doanh nghiệp được.\"",
                "Ví dụ ông đưa: bài phỏng vấn Tổng giám đốc và Phó chủ tịch HĐQT của HPA về việc thị trường heo Việt Nam có lặp lại kịch bản Trung Quốc hay không — với các câu hỏi về giá heo cuối 2026–2027, đàn heo hộ nhỏ lẻ giảm tới mức nào, và rủi ro dư cung.",
                "Ứng dụng: ai quan tâm nhóm lợn, DBC hoặc HPA thì phải đọc phần hỏi đáp đó trước khi quyết định."
              ]
            }
          ],
          "tradeLevels": [
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "TCB",
                  "dir": "GIỮ — hai đáy trung hạn là chỗ dựa",
                  "entry": "28–30 là vùng ngủ ngon",
                  "target": "—",
                  "stop": "Thủng hai đáy trung hạn",
                  "sig": "up",
                  "tv": "HOSE:TCB"
                },
                {
                  "asset": "GAS",
                  "dir": "CHỜ SAU LỄ — đang đi nền tuần rưỡi",
                  "entry": "—",
                  "target": "—",
                  "stop": "—",
                  "sig": "wait",
                  "tv": "HOSE:GAS"
                },
                {
                  "asset": "PLX",
                  "dir": "THỦNG MA20 THÌ CẮT ĐIỂM BREAK",
                  "entry": "—",
                  "target": "—",
                  "stop": "MA20",
                  "sig": "wait",
                  "tv": "HOSE:PLX"
                },
                {
                  "asset": "FRT",
                  "dir": "CHƯA CÓ LÝ DO BÁN",
                  "entry": "—",
                  "target": "—",
                  "stop": "MA20 chưa thủng",
                  "sig": "up",
                  "tv": "HOSE:FRT"
                },
                {
                  "asset": "DBC",
                  "dir": "GIỮ — chỉ cần một nhịp hồi là về bờ",
                  "entry": "—",
                  "target": "—",
                  "stop": "—",
                  "sig": "wait",
                  "tv": "HOSE:DBC"
                },
                {
                  "asset": "DGW",
                  "dir": "KHÔNG ĐẠT — không vượt được điểm chờ",
                  "entry": "—",
                  "target": "—",
                  "stop": "—",
                  "sig": "wait",
                  "tv": "HOSE:DGW"
                }
              ]
            }
          ]
        },
        {
          "date": "2026-08-26",
          "dateShort": "26/08",
          "timeAgo": "2 ngày trước",
          "tab": "Phân tích · 26/08",
          "sourceType": "public-video",
          "typeLabel": "Phân tích · 8 phút",
          "title": "Tại Sao Tôi Không Mua Thêm TCB Ngày Hôm Nay — \"Cả Ngày Mình Dành Để Cản Mọi Người Mua\"",
          "summary": "Bài đáng chú ý nhất tuần của kênh. TCB tăng trần theo một tin đồn hợp tác với tổ chức nước ngoài; anh là người đang CẦM TCB dài hạn và vẫn dành cả ngày để can người xem mua thêm, kèm ảnh chụp tin nhắn tư vấn lúc 13:45 làm bằng chứng.",
          "feedChips": [
            {
              "label": "TCB ▲ tăng trần theo tin đồn hợp tác",
              "sig": "up"
            },
            {
              "label": "Nhưng ⚠ \"mua trung dài hạn hôm nay là FOMO\"",
              "sig": "warn"
            },
            {
              "label": "Trading ◷ có điểm break nhưng setup không đẹp",
              "sig": "wait"
            },
            {
              "label": "Điểm mua thật ▲ cây 10/08 khi vượt lại MA20",
              "sig": "up"
            }
          ],
          "keyCalls": [
            {
              "tag": "Tách hai loại quyết định",
              "value": "Trading thì được, mua trung dài hạn thì không",
              "signal": "wait",
              "note": "Anh tách rạch ròi. Về trading: hôm nay CÓ điểm break đỉnh ngắn hạn, vào được. Nhưng: \"các bạn không nên trading nhiều, vì setup này không hề đẹp — bên trên có nhiều cản quá.\" Về mua trung dài hạn: \"hôm nay ai hỏi mình cũng nói là không nên mua thêm.\""
            },
            {
              "tag": "Toán rủi ro của lệnh trading",
              "value": "Cắt 31 thì lỗ 3%, kỳ vọng 34,5; cắt 30 thì lỗ 6%, phải kỳ vọng 36",
              "signal": "wait",
              "note": "Anh trình bày cả hai cách đặt cắt lỗ. Lấy đáy gần nhất 31 → cắt lỗ 3% → chỉ cần kỳ vọng 8–9%, tức về 34,5 là đỉnh cũ tháng 7. Lấy 30 → cắt lỗ 6% → phải kỳ vọng 12%, tức lên 36. \"Nhưng cái đường lên 36 là hơi vất vả — có cản ở 33,5, có đỉnh cũ ở 34, 34,5 cũng có. Tóm lại là trông toàn cản thôi.\""
            },
            {
              "tag": "Điểm mua trung dài hạn THẬT của TCB",
              "value": "Cây ngày 10/08 khi vượt lại MA20 — hoặc mặc cả quanh 30–31",
              "signal": "up",
              "note": "Cấu trúc anh dựa vào: hai đáy trung hạn, đáy đầu tiên ở giai đoạn tháng 3–4 có phân kỳ dương và thanh khoản tăng, đáy thứ hai ở vùng 28–29 tích lũy chặt. Cây ngày 10/08 vượt qua đỉnh trung tâm là điểm mua. \"Nếu không bắt được điểm mua này thì có thể mặc cả quanh vùng giá 30–31, mình đánh giá cũng khả quan.\""
            },
            {
              "tag": "Vì sao không mua theo tin",
              "value": "Tin dễ làm giả và chưa bên nào ra bài chính thức",
              "signal": "warn",
              "note": "\"Chúng ta không mua trung dài hạn theo tin tức. Tin tức là cái rất dễ làm giả và chúng ta cũng chẳng có gì khẳng định cả. Bây giờ có một cái tin đăng bâng quơ như vậy trên Zalo nhưng chưa có bên liên quan nào ra bài chính thức. Các bạn mua như vậy là các bạn đoán tin đúng — nhỡ tin sai thì sao?\""
            }
          ],
          "sections": [
            {
              "title": "Câu chốt về phương pháp",
              "signal": "up",
              "sigLabel": "NGUYÊN TẮC",
              "para": "Phần cuối video không nói về TCB nữa mà nói về cách ra quyết định.",
              "bullets": [
                "\"Lãi nó luôn luôn là hệ quả của những quyết định mua bán đúng. Còn nếu các bạn chỉ nhắm lợi nhuận thì các bạn sẽ không đạt được lợi nhuận đâu.\"",
                "\"Tin tức nó kích hoạt đà tăng ở cổ phiếu, nó tạo ra điểm trading. Nhưng khi chúng ta quyết định vào lệnh trading thì chúng ta phải quản trị dựa theo đồ thị.\"",
                "\"Chúng ta không cần phải mua từ ngày hôm qua. Chúng ta nên mua đúng điểm của nó và nắm giữ cổ phiếu cơ bản ở giá vốn thấp.\"",
                "Anh cũng nói thẳng về hiện tượng khoe thành tích sau phiên tăng: \"mình không hiểu tại sao mọi người lại cứ phải cố chứng minh là mình đúng như vậy.\""
              ]
            }
          ],
          "tradeLevels": [
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "TCB",
                  "dir": "KHÔNG MUA THÊM TRUNG DÀI HẠN — trading thì được nhưng setup xấu",
                  "entry": "Điểm mua thật: cây 10/08 hoặc mặc cả 30–31",
                  "target": "34,5 (đỉnh cũ T7) · 36 thì vất vả",
                  "stop": "31 (lỗ 3%) hoặc 30 (lỗ 6%)",
                  "sig": "wait",
                  "tv": "HOSE:TCB"
                }
              ]
            }
          ]
        },
        {
          "date": "2026-08-25",
          "dateShort": "25/08",
          "timeAgo": "3 ngày trước",
          "tab": "Phương pháp · 25/08",
          "sourceType": "public-video",
          "typeLabel": "Phân tích · 10 phút",
          "title": "Bí Quyết Trading — Phương Pháp Mẫu Hình Biểu Đồ: Dễ Dùng, Dễ Sai",
          "summary": "Bài về phương pháp chứ không có mã. Anh nói về mẫu hình biểu đồ — công cụ dễ học nhất nhưng cũng dễ dùng sai nhất, vì người ta thường vẽ mẫu hình để hợp thức hóa quyết định đã có sẵn.",
          "feedChips": [
            {
              "label": "Công cụ ▲ mẫu hình biểu đồ dễ dùng",
              "sig": "up"
            },
            {
              "label": "Nhưng ⚠ cũng dễ sai nhất",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "Mẫu hình biểu đồ",
              "value": "Dễ dùng và dễ sai — thuộc series phương pháp của kênh",
              "signal": "wait",
              "note": "Bài nằm trong mạch các bài phương pháp anh đăng liên tục tuần này (quản trị rủi ro, ba câu hỏi trước khi bán, mẫu hình biểu đồ). Anh chủ động chuyển sang nội dung phương pháp trong giai đoạn thị trường ít tín hiệu: \"giai đoạn này là lúc cần chuẩn bị tâm lý, chuẩn bị phương pháp.\""
            }
          ],
          "sections": []
        },
        {
          "date": "2026-08-25",
          "dateShort": "25/08",
          "timeAgo": "3 ngày trước",
          "tab": "Livestream · 25/08",
          "sourceType": "public-video",
          "typeLabel": "Livestream · 68 phút",
          "title": "VN-Index 25/08: Điều Chỉnh Nhẹ?",
          "summary": "Phiên chững sau hai phiên bùng nổ. Anh giữ nguyên quan điểm điểm mua đang mở rộng nhưng thanh khoản chưa cải thiện, và tiếp tục nhắc mọi người không vội.",
          "feedChips": [
            {
              "label": "Thị trường ◷ chững sau hai phiên bùng nổ",
              "sig": "wait"
            },
            {
              "label": "Quan điểm ▲ điểm mua vẫn đang mở rộng",
              "sig": "up"
            },
            {
              "label": "Nhịp ⚠ vẫn giữ lời khuyên không vội vàng",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "View chung",
              "value": "Không đổi so với cuối tuần — tích cực nhưng không vội",
              "signal": "wait",
              "note": "Anh giữ nguyên khung đã nêu ngày 23/08: view cuối tháng 8 và sang tháng 9 là tích cực, nhưng \"chậm chân lại ở những bước đầu tiên\", và cái gì trung dài hạn thì cứ nắm giữ tiếp."
            }
          ],
          "sections": []
        },
        {
          "date": "2026-08-24",
          "dateShort": "24/08",
          "timeAgo": "4 ngày trước",
          "tab": "Phân tích · 24/08",
          "sourceType": "public-video",
          "typeLabel": "Phân tích · 6 phút",
          "title": "Ba Câu Hỏi Trước Khi Bán — \"Người Sợ Mất Lãi Thường Không Có Nhiều Lãi Để Mất\"",
          "summary": "Cả ngày có người hỏi có nên bán không. Anh không trả lời mà đưa ngược lại ba câu hỏi, và chỉ ra một nghịch lý tâm lý: người ta chỉ hỏi bán khi cổ phiếu xanh tím, còn lúc đỏ thì lại không muốn bán.",
          "feedChips": [
            {
              "label": "Nghịch lý ⚠ sợ mất lãi nhưng không sợ gồng lỗ",
              "sig": "warn"
            },
            {
              "label": "Vị thế ▲ \"chúng ta đang ở gần đáy hơn là gần đỉnh\"",
              "sig": "up"
            },
            {
              "label": "Phòng vệ ▲ phòng vệ rủi ro tốt nhất là giá vốn thấp",
              "sig": "up"
            },
            {
              "label": "Cảnh báo ⚠ đừng tin ai khẳng định 100%",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "Câu hỏi 1",
              "value": "Tại sao bạn muốn bán khi giá đang tăng?",
              "signal": "warn",
              "note": "\"Mọi người toàn hỏi lúc mà nó xanh tím thôi, lúc nó đỏ thì anh em lại chả muốn bán. Cái việc mua bán như vậy bị ảnh hưởng bởi tâm lý, 100% là vì tâm lý thôi chứ nó chả dựa theo tín hiệu gì cả.\" Và câu sắc nhất của video: \"những người sợ bị mất lãi thường không có nhiều lãi để mất, mà mọi người lại không sợ phải gồng lỗ.\""
            },
            {
              "tag": "Câu hỏi 2",
              "value": "Đã tìm ra cách mua để không phải gồng lỗ chưa?",
              "signal": "up",
              "note": "\"Phòng vệ rủi ro tốt nhất là giá vốn thấp. Mua ở giá vốn thấp thì ít khả năng bị gồng lỗ, mà kể cả có gồng lỗ thì cũng không phải gồng nhiều.\" Cảnh báo kèm theo: bắt đúng đáy rồi lãi 5–10% mà bán ra thì sau đó lại phải mua lại trên cao, và vòng quay gồng lỗ lặp lại."
            },
            {
              "tag": "Câu hỏi 3",
              "value": "Phương pháp mua tất tay có hợp lý không?",
              "signal": "warn",
              "note": "\"Có một lượng rất lớn anh em đồng nghiệp của mình hay hô hào với phương pháp nghe rất tự tin — mua tất tay, mua all in, mua full margin. Mình thì không bao giờ chắc chắn như vậy, mình sợ mất tiền. Mình chưa thấy cái gì 100% cả, trừ việc là vợ mình đúng.\" Về việc khoe số tiền lớn để chứng tỏ tự tin: \"cái lớn đấy thì chỉnh app với cả Photoshop là được.\""
            },
            {
              "tag": "Vị thế thị trường",
              "value": "Gần đáy hơn là gần đỉnh — bán ở đây cũng rủi ro",
              "signal": "up",
              "note": "\"Chúng ta đang ở gần đáy hơn là gần đỉnh. Chỗ này bán nó cũng rủi ro thôi.\" Về việc so sánh với nghỉ lễ 2/9 năm ngoái: \"vị thế thị trường nó khác nhau hẳn. Một chỗ thì ở vùng rõ là cao, chỗ này thì ở vùng rõ là thấp. So sánh như vậy nó khập khiễng.\""
            }
          ],
          "sections": []
        },
        {
          "date": "2026-08-23",
          "dateShort": "23/08",
          "timeAgo": "5 ngày trước",
          "tab": "Livestream · 23/08",
          "sourceType": "public-video",
          "typeLabel": "Livestream · 70 phút",
          "title": "VN-Index 23/08: \"View Rất Tích Cực Nhưng Chúng Ta Không Vội Vàng\"",
          "summary": "Buổi cuối tuần, không có view mới. Điểm đáng giá là lời cảnh báo ngược dòng: anh dự đoán tuần sau 70–80% đồng nghiệp trong ngành sẽ hô mua tất tay, và khuyên làm ngược lại — chậm chân ở những bước đầu tiên. Kèm quan điểm thẳng thắn về crypto Việt Nam mà chính anh đã ngừng nạp tiền từ cuối 2025.",
          "feedChips": [
            {
              "label": "View ▲ rất tích cực cho cuối T8 và sang T9",
              "sig": "up"
            },
            {
              "label": "Nhưng ⚠ \"không cần thử độ sâu nước bằng cả hai chân\"",
              "sig": "warn"
            },
            {
              "label": "FTSE ◷ 80.000 tỷ dự phóng — được bao nhiêu phiên?",
              "sig": "wait"
            },
            {
              "label": "Crypto VN ⚠ anh ngừng nạp tiền từ cuối 2025",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "Cảnh báo về đồng nghiệp trong ngành",
              "value": "Tuần sau 70–80% sẽ hô mua tất tay — đừng theo",
              "signal": "warn",
              "note": "\"Nếu mọi người mà hô hào chén ngay lập tức, em biết kiểu gì tuần sau 70–80% đồng nghiệp của em sẽ bắt đầu hô anh chị mua tất tay, mua theo kiểu như là đã vào uptrend rồi. Vậy thì mọi người không nên. Chúng ta là nhà đầu tư nhỏ lẻ, chúng ta phải biết quý trọng đồng vốn của mình. Giàu chậm chậm đấy mọi người ạ, giàu nhanh quá không quen đâu.\""
            },
            {
              "tag": "Dự phóng dòng vốn FTSE",
              "value": "80.000 tỷ đồng — anh quy ra số phiên để hạ nhiệt kỳ vọng",
              "signal": "wait",
              "note": "\"FTSE nâng dự phóng dòng vốn chảy vào Việt Nam lên gần 80.000 tỷ đồng. 80.000 tỷ đồng là được bao nhiêu phiên? Bây giờ thanh khoản của chúng ta được khoảng 15 đến 18.000 tỷ, làm thua gì.\" Về các phát biểu của Chủ tịch Ủy ban Chứng khoán và FTSE: \"mấy cái tin này chẳng có ý nghĩa gì đâu, nói cho vui ấy mà\"."
            },
            {
              "tag": "Nguyên tắc gia tăng vị thế",
              "value": "Gia tăng mà không hiệu quả thì hạ phần gia tăng, giữ hàng cũ",
              "signal": "wait",
              "note": "\"Cái gì trung dài hạn thì cứ nắm giữ tiếp. Việc gia tăng các cổ phiếu trung dài hạn cần phải rất cẩn trọng, cần có kế hoạch cụ thể. Và nếu trong trường hợp gia tăng xong mà nó không đi theo hiệu quả mong muốn thì hạ cái chỗ gia tăng đi, giữ cái hàng cũ.\""
            },
            {
              "tag": "Crypto",
              "value": "Đồ thị mua được, nhưng anh ngừng nạp tiền từ cuối 2025",
              "signal": "warn",
              "note": "\"Nếu nói về mặt đồ thị thì mua được, nhưng nếu gọi là đẹp thì qua mất rồi.\" Lý do ông dừng: siết P2P và siết dòng tiền rửa tiền. \"Nhiều anh em trong ngành thì rất lạc quan, bảo miễn là tiền thật của tôi thì không sao — mọi người có vẻ là không sợ súng.\" Về sàn Việt Nam: \"cơ sở hạ tầng chưa có, chưa thấy sàn nào chạy tử tế cả. Em nghĩ chắc phải 2028, 2027 có khi cũng chưa ăn thua.\""
            },
            {
              "tag": "Bài học khung thời gian",
              "value": "Khung nhỏ để vào lệnh, khung lớn để nhìn xu hướng",
              "signal": "wait",
              "note": "\"Anh em nhiều lúc đánh future để cái khung bé quá, thế là những khung lớn mọi người không thèm nhìn, rất dễ đến tình trạng đi ngược xu hướng. Đợt vừa rồi khá khá anh em là short chết hẳn.\" Áp cho cả vàng: \"rất nhiều anh em cứ thị trường giảm thì long bắt đáy, thị trường tăng thì lại short để đoán đỉnh. Chả giải quyết vấn đề gì cả.\""
            }
          ],
          "sections": [
            {
              "title": "Vì sao anh không đổi view dù phiên thứ sáu rất đẹp",
              "signal": "wait",
              "sigLabel": "THẬN TRỌNG",
              "para": "Anh tách rõ giữa \"tín hiệu tốt\" và \"nên hành động mạnh\".",
              "bullets": [
                "\"Trừ thanh khoản ra thì cái gì cũng tốt cả. View cũng tốt, tin tức cũng tốt nữa.\"",
                "Nhưng: \"giai đoạn này của thị trường đã trải qua một thời gian rồi và nó làm cho thanh khoản co hẹp lại. Cùng với cái giai đoạn mà vốn bây giờ rất có giá trị trên thị trường — lãi suất nó tăng cao mà.\"",
                "\"Cái gì đẹp thì vẫn có thể trading được, nhưng trading trong khuôn khổ thôi, trong khả năng cho phép.\""
              ]
            }
          ]
        },
        {
          "date": "2026-08-21",
          "dateShort": "21/08",
          "timeAgo": "1 tuần trước",
          "tab": "Phân tích · 21/08",
          "sourceType": "public-video",
          "typeLabel": "Phân tích · 9 phút",
          "title": "Tại Sao Hôm Nay Tím? — \"Mình Cũng Không Trả Lời Được\", Và Hai Cách Tận Dụng Một Đà Tăng",
          "summary": "Phiên tím nhiều nhất kể từ tháng 5. Anh mở đầu bằng việc thừa nhận thẳng là không biết vì sao, rồi lần lượt loại bỏ ba lời giải thích đang lan truyền. Phần đáng giá nằm ở nửa sau: hai cách để không bị mất hàng trong một đà tăng, và lời nhắc rằng \"điểm mua\" khác với \"dự đoán giá sẽ tăng\".",
          "feedChips": [
            {
              "label": "Phiên ▲ vui nhất kể từ tháng 5",
              "sig": "up"
            },
            {
              "label": "Lý do ◷ \"mình cũng không trả lời được\"",
              "sig": "wait"
            },
            {
              "label": "SSI ▲ xác nhận đỉnh sau cao hơn, đáy sau cao hơn",
              "sig": "up"
            },
            {
              "label": "FTSE ⚠ mua theo danh mục này \"dễ ngọng lắm\"",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "Ba lời giải thích bị loại",
              "value": "Không phải tin lãnh đạo mua, không phải nới biên độ, không phải FTSE",
              "signal": "wait",
              "note": "Người nhà lãnh đạo mua 5 triệu cổ SSI — \"cũng không đáng kể lắm, với cả chúng ta có chắc chắn được là người ta mua ngày hôm nay đâu\". Tin nới biên độ HOSE 7%→10% — \"cái tin đấy không mới, lộ trình ai mà chả biết, vấn đề là không biết lúc nào triển khai\". FTSE — \"hôm nay có con nằm trong này nó tím nhưng có những con nằm trong này nó có chạy đâu\"."
            },
            {
              "tag": "SSI",
              "value": "Xác nhận mô hình đỉnh sau cao hơn, đáy sau cao hơn",
              "signal": "up",
              "note": "\"SSI nó tăng đầu tiên và nó kéo theo những con cổ phiếu chứng khoán khác. Sau đó đến chiều dòng tiền bắt đầu lan tỏa sang các cổ phiếu midcap khác, ví dụ nhóm GEX. SSI là khởi nguồn của mọi sự tím tái hôm nay.\" Đây là mô hình anh gọi là rất quan trọng."
            },
            {
              "tag": "Phân biệt điểm mua và dự đoán",
              "value": "Anh chỉ trả lời được về tín hiệu, không trả lời được thị trường sẽ tăng tới đâu",
              "signal": "wait",
              "note": "Anh nhắc thẳng sau khi bị trách tuần trước: \"Nếu các bạn tìm kiếm câu trả lời là thị trường có tăng tiếp nữa hay không, sẽ tăng đến lúc nào, mua giờ xong chốt lãi ở đâu, thì mình không biết. Nhưng nếu hỏi có điểm mua hay không, tín hiệu hiện tại có tích cực hay không, đã có xu hướng tăng hay chưa thì mình trả lời được vì nó là yếu tố kỹ thuật.\""
            },
            {
              "tag": "Hai cách tận dụng một đà tăng",
              "value": "Hoặc thật năng động, hoặc luôn giữ một phần vị thế",
              "signal": "up",
              "note": "Cách 1: \"dám bán thì phải dám mua lại khi có tín hiệu đảo chiều\" — nếu bán SSI ở nhịp điều chỉnh thì phải mua lại đúng phiên nó vượt đỉnh. Cách 2: luôn duy trì hiện diện trên thị trường bằng cách nắm giữ một phần. \"Mình thì không bao giờ khuyên full tiền hay full hàng. Riêng cái việc full đấy nó đã thể hiện là các bạn có cái nhìn rất tất tay rồi.\""
            }
          ],
          "sections": [
            {
              "title": "Rào cản T+ và vì sao nó làm hỏng phương pháp",
              "signal": "wait",
              "sigLabel": "KỸ THUẬT",
              "para": "Anh chỉ ra một lỗi phương pháp mà nhiều người mắc mà không biết.",
              "bullets": [
                "Việt Nam vẫn áp dụng T+ ít nhất tới 2027 — nên phương pháp mua bán phải tính sẵn rủi ro đó.",
                "\"Các bạn bán ở chỗ này, sau đó đến lúc nó tăng vượt đỉnh trở lại các bạn không dám mua vì sợ T+. Có nghĩa là phương pháp của các bạn nó chưa hoàn thiện rồi.\"",
                "\"Hôm nay ai cũng đúng cả, trừ những người mà bán ngày hôm trước xong và không dám mua lại ngày hôm nay.\"",
                "Quan điểm giữ nguyên ba tuần: thị trường đang mở rộng điểm mua, nhưng thanh khoản sẽ không cải thiện nhiều — \"đừng chờ tín hiệu đáy rõ ràng rồi thanh khoản tăng mạnh, khó lắm\"."
              ]
            }
          ],
          "tradeLevels": [
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "SSI",
                  "dir": "XÁC NHẬN XU HƯỚNG TĂNG",
                  "entry": "Cây vượt đỉnh phiên 21/08",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:SSI"
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
          "date": "27/08/2026",
          "title": "Vnindex 27/08: Ai lại mua/bán trước nghỉ lễ dài?",
          "meta": "Livestream · 74:20 · Chứng khoán 5 phút"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "26/08/2026",
          "title": "Tại sao tôi không mua thêm TCB ngày hôm nay?",
          "meta": "Phân tích · 8:12 · Chứng khoán 5 phút"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "25/08/2026",
          "title": "Bí quyết Trading — Phương pháp Mẫu hình biểu đồ",
          "meta": "Phân tích · 10:04 · Chứng khoán 5 phút"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "25/08/2026",
          "title": "Vnindex 25/08: Điều chỉnh nhẹ?",
          "meta": "Livestream · 68:30 · Chứng khoán 5 phút"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "24/08/2026",
          "title": "3 câu hỏi sau khi trả lời, bạn sẽ biết có nên bán lúc này không",
          "meta": "Phân tích · 6:18 · Chứng khoán 5 phút"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "23/08/2026",
          "title": "Vnindex 23/08: Tích cực nhưng đừng vội vàng",
          "meta": "Livestream · 70:18 · Chứng khoán 5 phút"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "24/08/2026",
          "title": "Vnindex 24/08: Một số điều cần chú ý trước và sau nghỉ lễ",
          "meta": "CHƯA DỰNG — YouTube chưa sinh phụ đề. Sẽ dựng ở lần chạy sau."
        }
      ]
    },
    "quang-dung": {
      "initials": "QD",
      "name": "Quang Dũng",
      "avatarSrc": null,
      "bio": "Định giá doanh nghiệp theo ngành và đọc chính sách vĩ mô. Xuất phát từ báo cáo tài chính chứ không từ đồ thị — \"sau cổ phiếu là doanh nghiệp\". Có phòng phân tích (CKG) hậu thuẫn. Kênh 148K người đăng ký.",
      "sourceLabel": "YouTube · Video công khai",
      "sourceChips": [
        "▶ Video công khai",
        "Tần suất: 2–4 bài/tháng",
        "⌗ Phân tích báo cáo tài chính"
      ],
      "gauge": {
        "title": "Quan điểm thị trường VN",
        "badge": "Tích sản",
        "badgeBg": "oklch(0.95 0.04 150)",
        "badgeColor": "oklch(0.42 0.1 150)",
        "bar1": 20,
        "bar2": 80,
        "label1": "Chờ 20%",
        "label2": "Giải ngân dần 80%"
      },
      "updates": [
        {
          "date": "2026-08-26",
          "dateShort": "26/08",
          "timeAgo": "2 ngày trước",
          "tab": "Ngành chứng khoán · 26/08",
          "sourceType": "public-video",
          "typeLabel": "Phân tích · 45 phút",
          "title": "Cổ Phiếu Chứng Khoán: Nghịch Lý Quý 2 — Thanh Khoản Thấp Nhất 5 Năm Mà Lợi Nhuận Ngành Tăng 52%",
          "summary": "Quý 2/2026 là một trong những quý ảm đạm nhất năm năm, thanh khoản trung bình chỉ 21.000 tỷ/phiên. Nhưng doanh thu ngành chứng khoán tăng 36% và lợi nhuận sau thuế tăng 52%. Quang Dũng bóc mâu thuẫn đó bằng cách chia ngành làm hai loại mô hình — và câu trả lời làm đảo lộn cách chọn cổ phiếu chứng khoán truyền thống.",
          "feedChips": [
            {
              "label": "Ngành ▲ doanh thu +36% · LNST +52% so cùng kỳ",
              "sig": "up"
            },
            {
              "label": "Nghịch lý ⚠ thanh khoản chỉ 21.000 tỷ/phiên — thấp nhất 5 năm",
              "sig": "warn"
            },
            {
              "label": "Cho vay margin ▲ tăng trưởng cao và đồng đều",
              "sig": "up"
            },
            {
              "label": "Tự doanh ⚠ tăng trưởng lác đác — VND +10%, SHS −35%",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "Con số nền",
              "value": "Doanh thu ngành 35.274 tỷ · LNST 12.349 tỷ · +36% và +52%",
              "signal": "up",
              "note": "Trong khi thanh khoản trung bình một phiên quý 2 chỉ 21.000 tỷ — vùng rất thấp. \"Về bản chất, ở thời điểm hiện tại nó sẽ có rất nhiều mâu thuẫn trong báo cáo quý 2/2026 của các doanh nghiệp trong lĩnh vực ngành chứng khoán.\""
            },
            {
              "tag": "Cách bóc mâu thuẫn",
              "value": "Chia ngành làm hai: cho vay margin và tự doanh",
              "signal": "up",
              "note": "Anh gọi nhóm thứ hai là \"ngân hàng đầu tư\". Lý do phải chia: trên nền kinh tế đang có hai chiến lược khác nhau — công ty có ngân hàng đứng sau thì tăng quy mô vốn rất nhanh rồi tăng cung vốn cho thị trường; công ty không có lợi thế đó buộc phải chuyển sang tự doanh, bảo lãnh phát hành, tập trung tài sản vào cổ phiếu và trái phiếu."
            },
            {
              "tag": "Kết quả bóc tách",
              "value": "Nhóm margin tăng trưởng cao và ĐỒNG ĐỀU; nhóm tự doanh lác đác",
              "signal": "up",
              "note": "Nhóm cho vay margin ghi nhận tăng trưởng doanh thu cao hơn và đều hơn. Nhóm tự doanh chỉ có ORS và VDS tăng cao — mà đó là những mô hình có nền kinh doanh thấp; còn lại đa phần thấp: VND +10%, chứng khoán IP −31,7%, SHS −35,1%. HSC doanh thu 1.235 tỷ, tăng khoảng 15%."
            },
            {
              "tag": "Đảo lộn cách chọn truyền thống",
              "value": "Thị phần môi giới cao KHÔNG còn đồng nghĩa với tiềm năng",
              "signal": "warn",
              "note": "\"Ngày xưa đến giờ chúng ta hay phân tích doanh nghiệp nào có thị phần cao, doanh nghiệp có thị phần cao thì tiềm năng. Nhưng trên thực tế cái mảng lợi nhuận từ mảng môi giới nó lại cho mọi người thấy [điều khác].\" Ngành đã dịch chuyển, nên cách phân tích cũng phải khác — không còn là tự doanh, margin, môi giới như cũ."
            }
          ],
          "sections": [
            {
              "title": "Vì sao bài này nối tiếp bài 24/08",
              "signal": "wait",
              "sigLabel": "MẠCH NỐI",
              "para": "Đây là phần hai của câu hỏi \"chu kỳ mới có đang bắt đầu\". Bài 24/08 đưa ba điều kiện chung; bài này soi vào đúng nhóm ngành dẫn dắt để xem điều kiện thứ hai — doanh nghiệp có tăng trưởng thật không — có được đáp ứng ở nhóm chứng khoán hay không.",
              "bullets": [
                "Câu trả lời của anh là CÓ, nhưng chỉ ở nửa ngành: nhóm dựa vào cho vay margin.",
                "Điều kiện thứ ba — tiền có thực sự vào — vẫn là chỗ chưa xác nhận, và chính con số thanh khoản 21.000 tỷ/phiên là bằng chứng.",
                "Đối chiếu trong tuần: Thái Phạm cầm SSI, VCI, TCX vì chúng nằm trong rổ FTSE; Quang Dũng thì phân loại theo mô hình kinh doanh — hai cách chọn hoàn toàn khác nhau trên cùng một nhóm ngành."
              ]
            }
          ]
        },
        {
          "date": "2026-08-24",
          "dateShort": "24/08",
          "timeAgo": "4 ngày trước",
          "tab": "Chu kỳ mới · 24/08",
          "sourceType": "public-video",
          "typeLabel": "Phân tích · 52 phút",
          "title": "Chu Kỳ Mới Có Đang Bắt Đầu? — Ba Điều Kiện Hội Tụ, Và Điều Kiện Thứ Ba Vẫn Đang Thiếu",
          "summary": "Thanh khoản phục hồi 30% và ai cũng hỏi VN-Index có về 1.800 không. Quang Dũng gạt câu hỏi đó sang một bên để hỏi câu lớn hơn: đây có phải khởi đầu một chu kỳ mới không. Anh dựng lại ba chu kỳ 2020, 2023, 2025 và rút ra ba điều kiện bắt buộc — điều kiện thứ ba mới là chỗ quyết định.",
          "feedChips": [
            {
              "label": "Thanh khoản ▲ phục hồi 30%",
              "sig": "up"
            },
            {
              "label": "Điều kiện 1 ▲ định giá rẻ — đã có",
              "sig": "up"
            },
            {
              "label": "Điều kiện 2 ▲ doanh nghiệp tăng trưởng — đã có",
              "sig": "up"
            },
            {
              "label": "Điều kiện 3 ◷ tiền có thực sự vào không — chưa rõ",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "Ba điều kiện của một chu kỳ giá lên",
              "value": "Định giá rẻ · doanh nghiệp tăng trưởng · tiền thực sự vào",
              "signal": "wait",
              "note": "Anh nghiên cứu ba chu kỳ 2020, 2023, 2025 và thấy cả ba đều hội tụ đúng ba yếu tố này. Thiếu một thì không thành chu kỳ. \"Nếu chúng ta chọn một doanh nghiệp định giá đủ rẻ, chọn một doanh nghiệp có hoạt động kinh doanh đủ tốt, nhưng tiền không vào thị trường chứng khoán thì hiệu suất đầu tư của anh chị nó cũng không có.\""
            },
            {
              "tag": "Quy luật đảo ngược trực giác",
              "value": "Chu kỳ tăng LUÔN xuất phát sau một quá trình đổ vỡ",
              "signal": "up",
              "note": "\"Tất cả các chu kỳ đi lên của thị trường đầu tư nó đều xảy ra sau một quá trình đổ vỡ. Năm 2020 phải xảy ra quá trình đổ vỡ của 2019. Năm 2023 phải xảy ra đổ vỡ của 2022. Giai đoạn 2025 thì cũng phải xảy ra đổ vỡ của tháng tư.\" Lý do: đổ vỡ mới ép định giá xuống đủ thấp. Hệ quả: \"để hình thành một chu kỳ đi lên nó không bao giờ xảy ra khi mà thị trường đã tăng giá từ trước đó.\""
            },
            {
              "tag": "Thước đo định giá anh dùng",
              "value": "Số năm hoàn vốn theo dòng tiền hoạt động kinh doanh",
              "signal": "up",
              "note": "Anh không dùng P/E mà dùng số năm hoàn vốn dựa trên dòng tiền hoạt động kinh doanh. Đáy các chu kỳ trước: khoảng 10 năm hoàn vốn (2020), 9,8 năm (2022), 10,3 năm (2025). Cơ chế chung: margin call diện rộng ép bán trong thời gian rất ngắn, kéo định giá xuống vùng rất thấp."
            },
            {
              "tag": "Nhóm dẫn dắt",
              "value": "15 trong 28 mã vào rổ FTSE là tài chính — ngân hàng và chứng khoán",
              "signal": "up",
              "note": "\"Ngành ngân hàng và ngành chứng khoán luôn là những ngành nghề dẫn dắt và đi đầu trong giai đoạn vừa rồi để phát triển thị trường tài chính.\" Trong mọi chu kỳ giá lên, dòng tiền đều tập trung vào các mô hình có hoạt động kinh doanh tăng trưởng. Lưu ý: anh đếm 28 mã, Thái Phạm đếm 27 — trang này ghi cả hai con số như từng người nói."
            },
            {
              "tag": "Nghịch lý quý 2/2026",
              "value": "Nhiều doanh nghiệp tăng trưởng rất tốt mà giá cổ phiếu vẫn tệ",
              "signal": "warn",
              "note": "\"Chúng ta nhận được thông tin là hoạt động kinh doanh quý 2/2026 gặp rất nhiều doanh nghiệp có tốc độ tăng trưởng rất tốt, nhưng nó xảy ra tình trạng làm nhiều nhà đầu tư cảm thấy chán ngán và mất niềm tin: cổ phiếu của tôi có hoạt động kinh doanh rất tốt nhưng diễn biến giá lại rất tệ.\" Đó chính là bằng chứng cho thấy điều kiện thứ ba — tiền vào — mới là điều kiện thiếu."
            }
          ],
          "sections": [
            {
              "title": "Hai giai đoạn của dòng tiền trong một chu kỳ",
              "signal": "wait",
              "sigLabel": "KHUNG",
              "para": "Anh chia dòng tiền trong chu kỳ làm hai giai đoạn khác hẳn nhau về động cơ.",
              "bullets": [
                "Giai đoạn một: tiền vào VÌ ĐỊNH GIÁ THẤP — người ta tận dụng mức chiết khấu, chưa cần câu chuyện tăng trưởng.",
                "Giai đoạn hai: tiền vào vì kỳ vọng tăng trưởng — đây là giai đoạn giá chạy mạnh.",
                "Ứng dụng: xác định thị trường đang ở giai đoạn nào quyết định việc nên mua theo định giá hay mua theo đà.",
                "Đối chiếu trong tuần: Chứng khoán 5 phút nói thanh khoản sẽ không cải thiện nhiều dù thị trường tạo đáy — tức nghi ngờ đúng điều kiện thứ ba mà Quang Dũng nêu."
              ]
            }
          ]
        },
        {
          "date": "2026-08-19",
          "dateShort": "19/08",
          "timeAgo": "1 tuần trước",
          "tab": "Video · 19/08",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Định Giá Cổ Phiếu FPT: Báo Cáo \"Nhiễu\" Do Thoái FPT Telecom, Thực Chất Tăng Trưởng 18%",
          "summary": "Video định giá chuyên sâu FPT theo phương pháp dòng tiền hoạt động kinh doanh (năm hoàn vốn). Vấn đề then chốt: báo cáo Q2/2026 của FPT bị \"nhiễu\" do thoái vốn FPT Telecom (tập đoàn chỉ sở hữu 45%, nay chuyển giao lại 65% cho nhà nước) — khiến doanh thu công bố giảm ~17-20% (13.810 tỷ so với 16.658 tỷ cùng kỳ), lợi nhuận gộp giảm 30%, nhìn bề nổi tưởng doanh nghiệp có vấn đề. Sau khi bóc tách loại bỏ FPT Telecom ở CẢ hai kỳ để so sánh đồng nhất: Q2/2026 doanh thu thực tăng trưởng +16,7%, lũy kế 6 tháng tăng +12,6% (90% đến từ khối công nghệ, chuyển đổi số +23,8% nhờ thị trường Nhật +22%, EU +40%, Mỹ +5,8%), lợi nhuận trước thuế thực tăng +18,2% — khớp với \"bản sắc\" tăng trưởng 15-20%/năm xuyên suốt lịch sử tập đoàn. Doanh thu ký mới H1/2026 đạt 26.338 tỷ (+32,3%) — tín hiệu tích cực cho tương lai. Biên lợi nhuận 31% (cao thứ 2 sau Vinamilk 43% trong nhóm VN30) phản ánh mô hình kinh doanh khép kín \"tạo tiền\" (Đại học/Cao đẳng FPT đào tạo coder → công nghệ ký hợp đồng tạo doanh thu). Sức khỏe tài chính: tiền + tiền gửi ~30.000 tỷ, tổng nợ chỉ ~18.500 tỷ, tài sản dài hạn 28.000 tỷ — \"một trong những doanh nghiệp an toàn nhất trên sàn\". Định giá theo 3 mốc lịch sử: 2015 (tăng trưởng 10%) = 10 năm hoàn vốn; 2019-2023 (tăng trưởng 15-20%) = 15-20 năm hoàn vốn; sau tin hợp tác AI Việt Nam-NVIDIA cuối 2024 = đỉnh 30 năm hoàn vốn (giá 132.000). Hiện tại (giá 68.000 sau chia 1:1, EPS quý vẫn tăng từ 1.300-1.500đ lên 1.450-1.500đ): định giá rơi về gần 10-11 năm hoàn vốn — ngang bằng mức 2015 dù tăng trưởng hiện tại (18%) cao gần gấp đôi và lợi nhuận tuyệt đối gấp 5 lần (10.000 tỷ/năm so với 2.000 tỷ/năm). Kết luận: đây là mức định giá RẺ trong bối cảnh tăng trưởng ổn định — khuyến nghị chiến thuật tích sản, không đoán đáy, thị trường giảm nhẹ mua nhẹ, giảm mạnh mua mạnh.",
          "feedChips": [
            {
              "label": "FPT ↑ tăng trưởng thực 18,2% sau khi bóc tách FPT Telecom",
              "sig": "up"
            },
            {
              "label": "Định giá ↑ ~10-11 năm hoàn vốn — ngang 2015 dù tăng trưởng cao gấp đôi",
              "sig": "up"
            },
            {
              "label": "Tài chính ↑ tiền mặt 30.000 tỷ, nợ chỉ 18.500 tỷ — an toàn nhất sàn",
              "sig": "up"
            },
            {
              "label": "Chiến thuật ↑ tích sản — không đoán đáy, giảm mạnh mua mạnh",
              "sig": "up"
            }
          ],
          "keyCalls": [
            {
              "tag": "Tăng trưởng thực",
              "value": "H1/2026 doanh thu +12,6%, LNTT +18,2% — sau khi bóc tách FPT Telecom",
              "signal": "up",
              "note": "Báo cáo công bố có vẻ xấu (doanh thu giảm 20%) chỉ do thay đổi bút toán khi FPT Telecom chuyển từ công ty con sang liên doanh liên kết — không phản ánh hoạt động kinh doanh thực."
            },
            {
              "tag": "Định giá",
              "value": "~10-11 năm hoàn vốn — rẻ nhất trong 10 năm dù tăng trưởng cao gấp đôi 2015",
              "signal": "up",
              "note": "Từng lên đỉnh 30 năm hoàn vốn (giá 132.000, cuối 2024 nhờ tin AI Việt Nam-NVIDIA) rồi rơi về gần 10 năm hoàn vốn hiện tại (giá 68.000) — giá cổ phiếu giảm một nửa trong khi EPS vẫn tăng."
            },
            {
              "tag": "Sức khỏe tài chính",
              "value": "Tiền + tiền gửi ~30.000 tỷ, tổng nợ chỉ ~18.500 tỷ",
              "signal": "up",
              "note": "Tài sản dài hạn (capex) chỉ 28.000 tỷ — quy mô nợ và đầu tư đều nhỏ hơn nhiều lượng tiền mặt đang có. Biên lợi nhuận 31% (cao thứ 2 VN30 sau Vinamilk 43%)."
            },
            {
              "tag": "Chiến thuật",
              "value": "Tích sản — không đoán đáy, thị trường giảm nhẹ mua nhẹ, giảm mạnh mua mạnh",
              "signal": "up",
              "note": "Không cần chọn doanh nghiệp tăng trưởng mạnh nhất, chỉ cần chọn doanh nghiệp bền vững nhất với định giá hợp lý nhất."
            }
          ],
          "sections": [
            {
              "title": "Báo cáo Q2/2026 \"nhiễu\": thực chất tăng trưởng 18,2%, không phải giảm 20%",
              "signal": "up",
              "sigLabel": "Bóc tách kỹ thuật",
              "para": "FPT chỉ sở hữu 45% FPT Telecom (65% thuộc nhà nước) — khi tập đoàn chuyển giao lại quyền kiểm soát, doanh thu/lợi nhuận từ mảng viễn thông không còn được hợp nhất vào báo cáo, chỉ còn ghi nhận qua \"lợi nhuận công ty liên doanh liên kết\". Điều này khiến các con số công bố nhìn rất xấu: doanh thu Q2/2026 13.810 tỷ so với 16.658 tỷ cùng kỳ (-17%), lợi nhuận gộp giảm 30%. Sau khi bóc tách loại FPT Telecom ở CẢ hai kỳ để so sánh đồng nhất: Q2/2026 doanh thu thực 13.810 tỷ so với con số đúng của 2025 là 11.850 tỷ = tăng trưởng thực +16,7%; lũy kế 6 tháng +12,6% (90% đến từ khối công nghệ). Đây chính là hiện tượng tương tự từng xảy ra khi FPT thoái FPT Shop năm 2017-2018 (doanh thu giảm nhưng lợi nhuận không đổi nhiều).",
              "bullets": [
                "Doanh thu công bố giảm ~17-20% chỉ do thay đổi bút toán hợp nhất FPT Telecom",
                "Sau bóc tách: Q2/2026 doanh thu thực +16,7%, H1 +12,6%, LNTT thực +18,2%",
                "Chuyển đổi số H1/2026: 9.610 tỷ (+23,8%) — Nhật +22%, EU +40%, Mỹ +5,8%",
                "Doanh thu ký mới H1/2026: 26.338 tỷ (+32,3%) — tín hiệu tích cực cho tương lai"
              ]
            },
            {
              "title": "Mô hình \"tạo tiền\": biên lợi nhuận 31%, tài chính an toàn nhất sàn",
              "signal": "up",
              "sigLabel": "Sức khỏe doanh nghiệp",
              "para": "Biên lợi nhuận 31% là cao thứ hai trong nhóm VN30, chỉ sau Vinamilk (43%) — phản ánh mô hình kinh doanh khép kín: Đại học FPT và Cao đẳng FPT đào tạo ra coder (nguồn nhân lực đầu vào), khối công nghệ ký hợp đồng và tạo doanh thu (đầu ra) — một chuỗi giá trị tự cung tự cấp hiếm có trên thị trường. Tại 30/6/2026: tiền mặt + tiền gửi ngắn hạn ~30.000 tỷ, trong khi tổng tài sản dài hạn (máy móc, trung tâm dữ liệu, đầu tư) chỉ 28.000 tỷ và tổng nợ (ngắn + dài hạn) chỉ ~18.500 tỷ — tức lượng tiền mặt đang có còn lớn hơn cả tổng nợ lẫn tổng vốn đầu tư dài hạn cộng lại. Được đánh giá là \"một trong những doanh nghiệp an toàn nhất trên sàn chứng khoán\".",
              "bullets": [
                "Biên lợi nhuận 31% — cao thứ 2 VN30 sau Vinamilk (43%)",
                "Tiền + tiền gửi ~30.000 tỷ > tổng nợ ~18.500 tỷ + tài sản dài hạn 28.000 tỷ",
                "Mô hình khép kín: Đại học/Cao đẳng FPT đào tạo nhân lực → công nghệ tạo doanh thu"
              ]
            },
            {
              "title": "Định giá 3 mốc lịch sử: từ 10 năm hoàn vốn lên 30 rồi rơi về gần 10",
              "signal": "up",
              "sigLabel": "Rẻ trong bối cảnh tăng trưởng",
              "para": "Ba mốc định giá theo phương pháp dòng tiền hoạt động kinh doanh: (1) Trước 2019 (thời FPT Shop, tăng trưởng chỉ 10-12%) = 10 năm hoàn vốn; (2) 2019-2023 (tập trung công nghệ-viễn thông-giáo dục, tăng trưởng 15-20%) = 15-20 năm hoàn vốn hợp lý; (3) Cuối 2024, sau tin hợp tác trung tâm dữ liệu AI Việt Nam-NVIDIA, định giá bị đẩy vọt lên đỉnh 30 năm hoàn vốn (giá 132.000) — thuần túy kỳ vọng, giá trị thực chưa theo kịp. Hiện tại giá 68.000 (đã chia 1:1, tương đương ~136.000 nếu quy đổi trước chia) trong khi EPS quý vẫn tăng từ 1.300-1.500đ (2024) lên 1.450-1.500đ (2026) — nghĩa là định giá đã \"chia ba lần\" xuống còn gần 10-11 năm hoàn vốn, ngang bằng mức 2015. Điểm khác biệt quan trọng: năm 2015 tăng trưởng chỉ 10% và lợi nhuận ~2.000 tỷ/năm, còn hiện tại tăng trưởng 18% và lợi nhuận ~10.000 tỷ/năm — cùng một mức định giá nhưng chất lượng doanh nghiệp cao hơn hẳn, tức là \"rẻ\" theo đúng nghĩa so sánh.",
              "bullets": [
                "2015 (tăng trưởng 10%): 10 năm hoàn vốn. 2019-2023 (15-20%): 15-20 năm hoàn vốn",
                "Đỉnh cuối 2024 (tin AI VN-NVIDIA): 30 năm hoàn vốn, giá 132.000",
                "Hiện tại (giá 68.000, tăng trưởng 18%, LN ~10.000 tỷ/năm): ~10-11 năm hoàn vốn",
                "Kết luận: rẻ hơn hẳn 2015 dù chất lượng tăng trưởng cao gấp đôi — chiến thuật tích sản, không đoán đáy"
              ]
            }
          ],
          "tradeLevels": [
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "FPT",
                  "dir": "TÍCH SẢN — định giá ~10-11 năm hoàn vốn, rẻ so với tăng trưởng thực 18%",
                  "entry": "68.000 (hiện tại)",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:FPT"
                }
              ]
            }
          ]
        },
        {
          "date": "2026-08-15",
          "dateShort": "15/08",
          "timeAgo": "1 tuần trước",
          "tab": "Toàn ngành ngân hàng",
          "sourceType": "public-video",
          "typeLabel": "Phân tích ngành · 34 phút",
          "title": "Toàn Cảnh Ngành Ngân Hàng: Tín Dụng +18% Nhưng Trích Lập Chỉ +13,7% — Lợi Nhuận 89.296 Tỷ",
          "summary": "Bài tổng quan cả ngành thay vì từng mã. Câu hỏi anh đặt ra ngay đầu: vì sao trong nhịp hồi vừa rồi rất nhiều cổ phiếu chỉ lên 10–15% mà nhiều doanh nghiệp lại tăng 30–40%? Câu trả lời anh đưa nằm ở cấu trúc hoạt động kinh doanh, không nằm trên bảng giá.",
          "feedChips": [
            {
              "label": "Tín dụng ↑ +18% quý 2 so cùng kỳ",
              "sig": "up"
            },
            {
              "label": "LNST ngành ↑ 89.296 tỷ · +25,4%",
              "sig": "up"
            },
            {
              "label": "Trích lập ⚠ chỉ +13,7% dù tín dụng đẩy mạnh",
              "sig": "warn"
            },
            {
              "label": "Định giá ↑ rẻ hơn nhiều so với chính nó 6 năm qua",
              "sig": "up"
            },
            {
              "label": "NIM ⚠ lãi huy động cao đang bóp biên lợi nhuận",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "Bức tranh lợi nhuận ngành",
              "value": "LNST 89.296 tỷ · +25,4%",
              "signal": "up",
              "note": "Tăng trưởng tín dụng quý 2/2026 so với cùng kỳ đạt 18%. Điểm anh nhấn: có ngân hàng đẩy tín dụng tăng tới 37% mà tốc độ tăng trích lập dự phòng chỉ 13,7% — chính chênh lệch đó tạo ra con số lợi nhuận. Đây là biến số thứ ba cần soi: ngân hàng nào đang \"mượn\" phần trích lập để làm đẹp lợi nhuận."
            },
            {
              "tag": "Chất lượng trích lập — so sánh cụ thể",
              "value": "TCB 4,4% · VCB 1,9% · ACB ~11%",
              "signal": "up",
              "note": "Anh đặt cạnh nhau tỷ lệ tổng tiền thu về mà đem trích lập: có ngân hàng lên 27–28,2%, trong khi Techcombank chỉ 4,4%, Vietcombank chỉ 1,9%, ACB khoảng 11%. Nhóm sau thuộc dạng quản trị rủi ro tốt."
            },
            {
              "tag": "Vấn đề lớn nhất của ngành",
              "value": "Lãi huy động cao bóp biên lợi nhuận",
              "signal": "warn",
              "note": "\"Lãi suất huy động đầu vào tăng rất cao thì nó cũng là một trong những điều kiện khiến cho biên lợi nhuận của các ngân hàng trong giai đoạn hiện tại nó nhỏ hơn rất nhiều so với quá khứ.\" Kết luận thực dụng: để giải bài toán tăng trưởng thì ngân hàng phải chủ động được dòng vốn giá rẻ — đó mới là tiêu chí phân loại."
            },
            {
              "tag": "Vì sao ưu tiên ngành ngân hàng lúc bất định",
              "value": "Sống được lúc khó thì lúc dễ càng khỏe",
              "signal": "up",
              "note": "\"Mỗi khi bất định và trầm lắng thì ngân hàng là cái ngành ưu tiên. Những giai đoạn khó khăn nhất mà ngành nghề này còn giải quyết được bài toán tăng trưởng thì những giai đoạn tốt hơn, các doanh nghiệp này sẽ tiếp tục giải quyết được.\""
            },
            {
              "tag": "Định giá cả ngành",
              "value": "Rẻ hơn nhiều so với chính nó 6 năm qua",
              "signal": "up",
              "note": "Anh chiếu đường định giá trung bình 6 năm — tính từ giai đoạn môi trường lãi suất thấp — và cho thấy gần như tất cả ngân hàng hiện đều rẻ hơn mức đó. \"Lựa chọn thì nó sẽ rất nhiều, không thiếu đâu, chỉ là thiếu cái sự quyết đoán.\" Ngoài VCB anh nêu thêm VIB, ACB, BVB là nhóm có định giá hợp lý mà vẫn giải được bài toán tăng trưởng."
            },
            {
              "tag": "Câu hỏi mở đầu buổi",
              "value": "Vì sao có mã hồi 10–15%, có mã 30–40%",
              "signal": "wait",
              "note": "\"Mấu chốt nó nằm ở đâu? Nó nằm trong cấu trúc hoạt động kinh doanh, nơi mà cái nội tại của một doanh nghiệp nó không được thể hiện trên bảng giá xanh xanh đỏ đỏ.\" Anh đề nghị tách mình khỏi câu hỏi thị trường có vượt kháng cự hay không, để trả lời câu hỏi ngành nào và mã nào đáng quan tâm cho 6 tháng cuối năm."
            }
          ],
          "sections": [],
          "tradeLevels": [
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "VCB",
                  "dir": "Quản trị rủi ro tốt — trích lập chỉ 1,9%",
                  "entry": "Định giá thấp hơn nhiều so với chính nó 6 năm",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:VCB"
                },
                {
                  "asset": "TCB",
                  "dir": "Quản trị rủi ro tốt — trích lập 4,4%",
                  "entry": "—",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:TCB"
                },
                {
                  "asset": "ACB",
                  "dir": "Định giá hợp lý, giải được bài toán tăng trưởng",
                  "entry": "Trích lập ~11%",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:ACB"
                },
                {
                  "asset": "VIB",
                  "dir": "Định giá hợp lý, giải được bài toán tăng trưởng",
                  "entry": "—",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:VIB"
                }
              ]
            }
          ]
        },
        {
          "date": "2026-08-10",
          "dateShort": "10/08",
          "timeAgo": "2 tuần trước",
          "tab": "MBB · Quý 2/2026",
          "sourceType": "public-video",
          "typeLabel": "Phân tích doanh nghiệp · 45 phút",
          "title": "MBB: Tăng Trưởng 40% Với Nợ Xấu Top 5 Thấp Nhất — P/B 1,2 Là Vùng Thấp Nhất Ba Năm",
          "summary": "Bài phân tích đặt MBB vào giữa hai thái cực: VPBank tăng trưởng ~70% nhưng nợ xấu cao, và nhóm ngân hàng phòng thủ tăng ~20%. Luận điểm của anh là MB nằm ở giữa — tăng nhanh mà vẫn an toàn, và đang được định giá ở vùng thấp nhất nhiều năm.",
          "feedChips": [
            {
              "label": "LNST ↑ +40% — nằm giữa VPB (70%) và nhóm 20%",
              "sig": "up"
            },
            {
              "label": "NIM ↑ hơn 4%/năm — cao nhất ngành",
              "sig": "up"
            },
            {
              "label": "Nợ xấu ↑ 1,5% — top 5 thấp nhất",
              "sig": "up"
            },
            {
              "label": "P/B ↑ 1,2 lần — thấp nhất ~3 năm",
              "sig": "up"
            },
            {
              "label": "Tín dụng ⚠ áp lực 6 tháng cuối trong môi trường lãi cao",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "Vị trí của MBB",
              "value": "Tăng nhanh nhưng vẫn an toàn",
              "signal": "up",
              "note": "Con số tăng trưởng lợi nhuận sau thuế 40% nằm giữa VPBank (khoảng 70%, nhưng nợ xấu cao) và nhóm ngân hàng tăng khoảng 20%. Anh dẫn chính lời chủ tịch hội đồng quản trị MB: \"MB đang đi theo chiến lược tăng trưởng nhanh nhưng đảm bảo an toàn\". Tăng trưởng tín dụng thuộc top 3 ngành mà nợ xấu 1,5% lại thuộc nhóm 5 ngân hàng thấp nhất."
            },
            {
              "tag": "NIM",
              "value": "1,04%/quý — hơn 4%/năm",
              "signal": "up",
              "note": "Thuộc dạng cao nhất trong ngành ngân hàng. Anh giải thích bằng lợi thế hệ sinh thái và sân sau, cộng quản trị tốt."
            },
            {
              "tag": "Định giá",
              "value": "P/B 1,2 — vùng thấp nhất ba năm",
              "signal": "up",
              "note": "Cùng mức 1,2 lần giá trị sổ sách được ghi nhận ở 2021, 2022 và 2024. Anh đặt câu hỏi để làm nổi bật: \"tại sao định giá của một ngân hàng giá 22.000 lại bằng định giá của chính ngân hàng đó ở vùng giá 10.000 và ở vùng 5.000?\" — vì doanh nghiệp đã lớn lên trong khi bội số định giá không đổi."
            },
            {
              "tag": "Rủi ro",
              "value": "Áp lực tín dụng 6 tháng cuối năm",
              "signal": "warn",
              "note": "Phòng phân tích của anh đánh giá lại: để giải bài toán tăng trưởng tín dụng nửa cuối năm trong môi trường lãi suất cao thì MB chắc chắn gặp áp lực, ít nhất là nhiều hơn nửa đầu năm."
            },
            {
              "tag": "Hai nhóm ngành tăng trưởng đột biến",
              "value": "Bán lẻ và dầu khí",
              "signal": "up",
              "note": "Khi rà báo cáo lợi nhuận sau thuế toàn sàn, anh thấy hai nhóm có tốc độ tăng trưởng đột biến là bán lẻ và dầu khí."
            },
            {
              "tag": "Thông điệp xuyên suốt",
              "value": "Đừng nhìn biểu đồ, hãy tích sản",
              "signal": "wait",
              "note": "\"Lúc rẻ thì không dám vào, bây giờ vào thì chạm cản\" — anh mô tả đúng tâm lý phổ biến rồi kết: \"Đừng nhìn biểu đồ của cổ phiếu tại vì càng nhìn càng không có hướng ra. Lúc cổ phiếu giá rẻ thì nhìn nó rất xấu, lúc cổ phiếu tạm thời hết rẻ thì nhìn nó lưỡng lự. Đừng đoán đáy của cổ phiếu.\""
            }
          ],
          "sections": [],
          "tradeLevels": [
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "MBB",
                  "dir": "TÍCH SẢN — định giá thấp nhất ba năm",
                  "entry": "P/B 1,2 lần",
                  "target": "LNST +40%, NIM hơn 4%, nợ xấu 1,5%",
                  "stop": "Áp lực tăng trưởng tín dụng nửa cuối năm",
                  "sig": "up",
                  "tv": "HOSE:MBB"
                }
              ]
            }
          ]
        },
        {
          "date": "2026-08-08",
          "dateShort": "08/08",
          "timeAgo": "2 tuần trước",
          "tab": "TCB · Quý 2/2026",
          "sourceType": "public-video",
          "typeLabel": "Phân tích doanh nghiệp · 46 phút",
          "title": "TCB: Lợi Nhuận 9.600 Tỷ, Nợ Xấu 1% — Giá 28.000 So Với Sổ Sách 24.417",
          "summary": "Anh dùng TCB làm ví dụ cho câu hỏi mở đầu: nếu lợi nhuận doanh nghiệp tăng như vậy mà giá cổ phiếu lại giảm như vậy thì bạn làm gì? Trọng tâm là chất lượng lợi nhuận, không phải tốc độ.",
          "feedChips": [
            {
              "label": "LNST ↑ 9.600 tỷ",
              "sig": "up"
            },
            {
              "label": "Nợ xấu ↑ 1% — so với VPBank 3,3%",
              "sig": "up"
            },
            {
              "label": "Tín dụng ↑ 14,3% cuối tháng 7, từ 10,4% nửa đầu năm",
              "sig": "up"
            },
            {
              "label": "Định giá ↑ giá 28.000 vs sổ sách 24.417",
              "sig": "up"
            }
          ],
          "keyCalls": [
            {
              "tag": "Chất lượng lợi nhuận",
              "value": "Nợ xấu 1% so với VPBank 3,3%",
              "signal": "up",
              "note": "\"Ngân hàng nào chạy đua và chạy theo tăng trưởng tín dụng thì chắc chắn nợ xấu của họ sẽ cao.\" Hai góc nhìn anh đặt cạnh nhau: một bên phát triển theo chiều sâu, đa dạng sản phẩm, ít phụ thuộc tăng trưởng tín dụng; một bên phát triển theo chiều rộng."
            },
            {
              "tag": "Tăng trưởng tín dụng",
              "value": "14,3% cuối tháng 7, từ 10,4% nửa đầu năm",
              "signal": "up",
              "note": "Số liệu tới khoảng 28/7. \"Trong tháng 6 và tháng 7 thì hoạt động cho vay của Techcombank đang tăng trưởng rất tốt.\""
            },
            {
              "tag": "Định giá",
              "value": "Giá 28.000 so với sổ sách 24.417",
              "signal": "up",
              "note": "\"Nếu giả sử có một biến cố nào đó làm cho giá cổ phiếu giảm như thế này, có phải các anh chị đang mua được một doanh nghiệp phát triển ổn định, bền vững với một mức giá gần bằng giá trị sổ sách của nó không?\" Tức P/B khoảng 1,15."
            },
            {
              "tag": "Chi phí vốn đang đội lên",
              "value": "CASA phải trả nhiều hơn",
              "signal": "warn",
              "note": "Chi phí vốn không còn thấp nữa; các khoản liên quan tới CASA — tiền gửi không kỳ hạn — cũng phải dành nhiều hơn, vì khách để tiền không dùng vẫn được trả phí. Đây là điểm anh nêu như một áp lực thật của mô hình."
            },
            {
              "tag": "Anh đang chờ giá về",
              "value": "Kỳ vọng khối ngoại bán ròng tạo cơ hội",
              "signal": "wait",
              "note": "Anh nói đang còn chờ giá về mức thấp hơn: \"mấy bữa nay mình thấy nước ngoài bán ròng và mình kỳ vọng rằng là nó sẽ giảm\". Mức định giá thấp nhất anh tính chỉ cách giá hiện tại khoảng 7%."
            }
          ],
          "sections": [],
          "tradeLevels": [
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "TCB",
                  "dir": "TÍCH SẢN — chờ về vùng thấp hơn",
                  "entry": "Giá 28.000, sổ sách 24.417 (P/B ~1,15)",
                  "target": "LNST 9.600 tỷ, nợ xấu 1%, tín dụng 14,3%",
                  "stop": "Chi phí vốn và CASA đang đội lên",
                  "sig": "up",
                  "tv": "HOSE:TCB"
                }
              ]
            }
          ]
        },
        {
          "date": "2026-08-06",
          "dateShort": "06/08",
          "timeAgo": "3 tuần trước",
          "tab": "Vĩ mô · Tháng 8",
          "sourceType": "public-video",
          "typeLabel": "Livestream · 106 phút · ~70 slide",
          "title": "Vĩ Mô Tháng 8: Dầu Từ 116 Về 76 Đô — Lạm Phát Hạ Nhiệt Mở Đường Cho Bơm Tiền",
          "summary": "Buổi dài nhất của anh từ trước tới nay. Luận điểm trung tâm: giá dầu đã qua bên kia sườn dốc nên lạm phát sẽ hạ nhiệt từ đây tới cuối năm, và đó là điều kiện để Việt Nam hạ lãi suất hoặc tăng cung tiền trong nửa cuối 2026. Anh cũng trả lời trực diện câu hỏi vì sao thế giới tăng mạnh mà chứng khoán Việt Nam vẫn không theo.",
          "feedChips": [
            {
              "label": "Dầu ↓ từ 116 về 76 đô — lạm phát hạ nhiệt",
              "sig": "down"
            },
            {
              "label": "Cung tiền ↑ có cơ sở bơm nửa cuối 2026",
              "sig": "up"
            },
            {
              "label": "Tỷ giá ↑ gap ngược nên không còn là vấn đề",
              "sig": "up"
            },
            {
              "label": "Thép ⚠ cả ngành xấu, chỉ HPG tốt",
              "sig": "warn"
            },
            {
              "label": "Đầu tư công ↑ cuối năm thường mạnh",
              "sig": "up"
            }
          ],
          "keyCalls": [
            {
              "tag": "Trục của cả buổi",
              "value": "Dầu 116 → 76 đô",
              "signal": "down",
              "note": "\"Giá dầu đã ở bên kia của cái sườn rồi… từ 116 đô bây giờ là chỉ còn 76 đô. Thì về căn bản cái lạm phát này từ đây cho đến cuối năm là nó sẽ tiếp tục hạ nhiệt.\" Đây là mắt xích đầu tiên trong chuỗi dẫn tới kết luận về chính sách tiền tệ — cùng hướng với Thái Phạm nhưng đi từ số liệu hàng hóa thay vì từ chính trị Mỹ."
            },
            {
              "tag": "Tỷ giá không còn là rào cản",
              "value": "Gap ngược: VN nâng, Mỹ giảm",
              "signal": "up",
              "note": "\"Việt Nam thì nâng lãi suất, Mỹ thì giảm lãi suất, từ đó nó tạo ra một cái khoảng gap đủ lớn. Và ở cái khoảng gap đủ lớn đó thì tỷ giá không phải là vấn đề.\" Anh nói thẳng cách điều hành của Việt Nam \"chạy theo tỷ giá nhiều hơn là chạy theo lạm phát\" — tỷ giá căng là có hành động lãi suất ngay, còn lạm phát thì còn nhiều công cụ khác."
            },
            {
              "tag": "Dự báo chính sách",
              "value": "Hạ lãi suất / tăng cung tiền nửa cuối 2026",
              "signal": "up",
              "note": "\"Cái việc mà hạ lãi suất hoặc là cái việc tăng cung tiền, anh chị có rất nhiều cơ sở và hoàn toàn có thể diễn ra trong nửa cuối năm 2026 hoặc muộn hơn thì nó rơi vào khoảng năm 2027.\" Chốt chặn hiện tại là chính phủ chưa tự tin vì hai áp lực song song: tỷ giá và lạm phát."
            },
            {
              "tag": "BIDV là cánh tay nối dài của NHNN",
              "value": "Tín hiệu lãi suất đi từ đây",
              "signal": "up",
              "note": "Khi nhóm ngân hàng quốc doanh cho thấy tín hiệu không nâng lãi suất nữa và giảm nhẹ thì \"các ngân hàng thành viên từ từ cũng sẽ đi theo thôi\". Đây là cơ chế anh dùng để giải thích vì sao nhóm bank quốc doanh là chỗ đọc chính sách sớm nhất."
            },
            {
              "tag": "Trạng thái thị trường",
              "value": "Đa số tài sản đã hồi 20–30%, sắp chạm cản cũ",
              "signal": "warn",
              "note": "\"Đại đa phần các lớp tài sản nó đều đã có sự phục hồi từ 20 cho đến 30%. Và gần như tất cả các cổ phiếu trên sàn nó đều đang chuẩn bị chạm lại các vùng cản của quá khứ.\" Tức nhịp dễ đã qua, phần tiếp theo phải vượt kháng cự."
            },
            {
              "tag": "Thép",
              "value": "Cả ngành xấu — chỉ HPG tốt",
              "signal": "warn",
              "note": "\"Cả ngành thép thì nó đang không tốt, chỉ có Hòa Phát tốt thôi. Ngày xưa kỳ vọng lợi nhuận về ngành thép là 50% thì bây giờ phải chia đôi kỳ vọng đó ra — kỳ vọng lợi nhuận khoảng 20 đến 30% thôi. Và cái sự kỳ vọng đó hoàn toàn đến từ nội tại của một doanh nghiệp tốt chứ nó không đến từ một ngành nghề được hậu thuẫn.\""
            },
            {
              "tag": "Đầu tư công",
              "value": "Cuối năm thường mạnh — VCG có thể như FPT",
              "signal": "up",
              "note": "\"Thường thường là cuối năm thì đầu tư công nó sẽ mạnh. Chưa kể là trong giai đoạn vừa rồi thì các cơ chế và chính sách nó cũng đang hậu thuẫn cho dòng chảy ưu tiên vốn cho các dự án trọng điểm của chính phủ.\" Anh nêu VCG là mã có thể đi giống FPT về mặt đồ thị."
            },
            {
              "tag": "Nguyên tắc tích sản",
              "value": "Chọn danh mục trước, chọn giá sau",
              "signal": "wait",
              "note": "\"Bây giờ là các anh chị phải xây dựng danh mục đầu tư trước, xây dựng cổ phiếu trước rồi lúc đó mình mới chọn giá cổ phiếu. Tích sản cổ phiếu không phải là mua khi cổ phiếu đẹp — dân tích sản có ai đi mua cổ phiếu khi cổ phiếu nổ đâu, khi cổ phiếu vượt nền đâu.\" Đây là chỗ anh tách rõ mình khỏi trường phái đánh sóng."
            },
            {
              "tag": "Cảnh báo quý 4",
              "value": "Biến cố đầu tiên thường rơi vào cuối năm",
              "signal": "warn",
              "note": "Anh nhắc lại quy luật: trong một chu kỳ tăng, quý 4 (tháng 10–12) thường không tốt, và lý do gốc nằm ở dự trữ ngoại hối của một nền kinh tế nhỏ như Việt Nam. Tăng trưởng tín dụng năm 2025 gần 20% cũng là áp lực để lại."
            }
          ],
          "sections": [
            {
              "title": "Vì sao thế giới tăng mạnh mà chứng khoán Việt Nam không theo",
              "signal": "warn",
              "sigLabel": "Câu hỏi anh đặt ra ngay đầu buổi",
              "para": "Phiên 06/08 là kịch bản trong mơ — thị trường tài chính toàn cầu tăng 2–4%, giá dầu giảm khoảng 6% — mà chứng khoán Việt Nam vẫn giảm nhẹ. Anh dùng cả buổi để trả lời rằng câu trả lời nằm ở bối cảnh chứ không nằm ở phiên.",
              "bullets": [
                "Các nhóm giảm từ cuối 2025 đều liên quan tới chính sách tiền tệ: ngân hàng, chứng khoán, bất động sản.",
                "Các nhóm giảm sớm hơn thì liên quan tới sản xuất và xuất khẩu — hai nguyên nhân khác nhau, không thể gộp làm một.",
                "Vì vậy một phiên dầu giảm hay chỉ số Mỹ tăng không tự động chuyển thành lực mua ở Việt Nam; thứ cần thay đổi là mặt bằng lãi suất và cung tiền trong nước.",
                "Kết luận anh rút: phân tích vĩ mô cho biết ngành nào là đầu tàu kéo kinh tế đi lên — và khi đúng đầu tàu thì \"thị trường chứng khoán chỉ tăng được 58% mà cổ phiếu sẽ tăng được 700%\"."
              ]
            }
          ],
          "tradeLevels": [
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "HPG",
                  "dir": "GIỮ — điểm sáng duy nhất ngành thép",
                  "entry": "—",
                  "target": "Kỳ vọng lợi nhuận 20–30% (hạ từ 50%)",
                  "stop": "Cả ngành thép đang xấu",
                  "sig": "up",
                  "tv": "HOSE:HPG"
                },
                {
                  "asset": "VCG",
                  "dir": "Đầu tư công — theo dõi",
                  "entry": "—",
                  "target": "Cuối năm đầu tư công thường mạnh",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:VCG"
                },
                {
                  "asset": "Nhóm ngân hàng",
                  "dir": "Đọc chính sách sớm nhất",
                  "entry": "—",
                  "target": "BIDV là cánh tay nối dài của NHNN",
                  "stop": "—",
                  "sig": "up",
                  "tv": ""
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
          "date": "26/08/2026",
          "title": "CỔ PHIẾU CHỨNG KHOÁN: CHU KỲ MỚI ĐÃ BẮT ĐẦU??",
          "meta": "Phân tích · 45:30 · Quang Dũng"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "24/08/2026",
          "title": "CHU KỲ MỚI CÓ ĐANG BẮT ĐẦU?? | ĐẦU TƯ CHỨNG KHOÁN",
          "meta": "Phân tích · 52:14 · Quang Dũng"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "21/08/2026",
          "title": "HÃY TÍCH SẢN CỔ PHIẾU ĐÚNG CÁCH?? — livestream 113 phút",
          "meta": "CHƯA DỰNG — YouTube chưa sinh phụ đề tự động cho livestream vừa kết thúc. Sẽ dựng ở lần chạy sau."
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "19/08/2026",
          "title": "Định Giá Cổ Phiếu FPT: Báo Cáo \"Nhiễu\" Do Thoái FPT Telecom, Thực Chất Tăng Trưởng 18%",
          "meta": "Video công khai · Quang Dũng"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "15/08/2026",
          "title": "Toàn Cảnh Ngành Ngân Hàng: Tín Dụng +18% Nhưng Trích Lập Chỉ +13,7% — Lợi Nhuận 89.296 Tỷ",
          "meta": "Phân tích ngành · 34 phút · Quang Dũng"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "10/08/2026",
          "title": "MBB: Tăng Trưởng 40% Với Nợ Xấu Top 5 Thấp Nhất — P/B 1,2 Là Vùng Thấp Nhất Ba Năm",
          "meta": "Phân tích doanh nghiệp · 45 phút · Quang Dũng"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "08/08/2026",
          "title": "TCB: Lợi Nhuận 9.600 Tỷ, Nợ Xấu 1% — Giá 28.000 So Với Sổ Sách 24.417",
          "meta": "Phân tích doanh nghiệp · 46 phút · Quang Dũng"
        }
      ]
    },
    "lcg-huy": {
      "initials": "LH",
      "name": "LCG Huy",
      "avatarSrc": null,
      "bio": "Quỹ chỉ số và ETF. Thạc sĩ MBA Đại học Toronto, làm quản lý rủi ro cho một ngân hàng ở Canada. Nói về TỶ TRỌNG phân bổ danh mục và tiêu chí chọn quỹ — không đưa mã cổ phiếu riêng lẻ, không đọc đồ thị.",
      "sourceLabel": "YouTube · Video công khai",
      "sourceChips": [
        "▶ Video công khai",
        "Tần suất: thứ Tư & Chủ nhật",
        "⌗ ETF · quỹ chỉ số · quỹ mở"
      ],
      "gauge": {
        "title": "Danh mục chứng khoán của anh (tự công bố)",
        "badge": "Đa dạng hóa",
        "badgeBg": "oklch(0.95 0.04 250)",
        "badgeColor": "oklch(0.45 0.12 250)",
        "bar1": 50,
        "bar2": 50,
        "label1": "S&P 500 50%",
        "label2": "Ngoài S&P 500 50%"
      },
      "updates": [
        {
          "date": "2026-08-26",
          "dateShort": "26/08",
          "timeAgo": "2 ngày trước",
          "tab": "Giải đáp · 26/08",
          "sourceType": "public-video",
          "typeLabel": "Giải đáp tài chính · 32 phút",
          "title": "Thích An Toàn Thì Đầu Tư Vào Đâu — Bài Toán 800 Triệu Và Khung Phân Bổ 67/33",
          "summary": "Buổi giải đáp cho một người 33 tuổi có 800 triệu tiết kiệm, thêm 30 triệu mỗi tháng, và mắc đúng bệnh timing the market: biết ETF từ lâu nhưng chưa bao giờ xuống tiền. Anh làm hai việc — buộc người hỏi xác định khẩu vị rủi ro bằng một câu hỏi cụ thể, rồi mới đưa khung phân bổ.",
          "feedChips": [
            {
              "label": "Khẩu vị ◷ đo bằng câu hỏi \"mất 30% một năm bạn thấy sao?\"",
              "sig": "wait"
            },
            {
              "label": "Phân bổ ▲ 67% chứng khoán · 33% tài sản khác",
              "sig": "up"
            },
            {
              "label": "ETF Việt ▲ VN30 và VN Diamond",
              "sig": "up"
            },
            {
              "label": "Đất ⚠ anh không muốn nói tới — quá dao động",
              "sig": "warn"
            }
          ],
          "keyCalls": [
            {
              "tag": "Cách đo khẩu vị rủi ro",
              "value": "Một câu hỏi duy nhất: mất 30% danh mục sau một năm thì bạn thấy sao?",
              "signal": "wait",
              "note": "Người hỏi trả lời \"sẽ thấy rất khó chịu và hối hận\" → anh xếp ngay vào nhóm an toàn. Trước đó anh cũng bác cách đặt mục tiêu mơ hồ: \"một cái mục tiêu mà tối đa nhất là không phải là mục tiêu đâu nha. Nếu chúng ta không có một con số cụ thể thì mình đâu có đạt được đâu.\""
            },
            {
              "tag": "Khung phân bổ cho tuổi 33, khẩu vị an toàn",
              "value": "67% chứng khoán · 33% tài sản khác",
              "signal": "up",
              "note": "Mục tiêu của phần 33% là giảm độ dao động của tổng danh mục để người đầu tư cảm thấy an toàn hơn và không bỏ cuộc giữa chừng. Với phần này anh khuyên quỹ trái phiếu hoặc chứng chỉ quỹ mở trái phiếu thay vì gửi ngân hàng đơn thuần."
            },
            {
              "tag": "Hai hình thức cho người không chuyên ở Việt Nam",
              "value": "ETF (VN30, VN Diamond) hoặc chứng chỉ quỹ mở",
              "signal": "up",
              "note": "\"Đối với thị trường chứng khoán thì nó có hai hình thức đối với những người không chuyên để mà đầu tư. Thứ nhất là ETF — hiện tại Việt Nam có VN30 và VN Diamond là hai cái ETF mà em có thể mua rất là ok. Và hình thức khác gọi là chứng chỉ quỹ mở.\" Đây là lần đầu anh nêu tên ETF cụ thể ở thị trường Việt Nam."
            },
            {
              "tag": "Về đất",
              "value": "Anh từ chối bàn — quá dao động",
              "signal": "warn",
              "note": "\"Chúng ta sẽ không nói về đất ở Việt Nam và tốc độ tăng giá của đất ở Việt Nam, tại vì nó quá dao động đến mức mà hiện tại đang đứng cứng ngắc rồi, thì em đâu biết là năm sau nó giảm mất thêm 10, 20% nữa hay không. Cho nên cái đất đó nó cũng là một thứ mà nói thật là anh hoàn toàn không muốn nói về nó luôn.\" Lập luận nền: \"một cách chung nhất và trung bình thì thị trường chứng khoán vẫn mang lại tỷ suất tốt nhất so với tất cả các loại tài sản khác.\""
            }
          ],
          "sections": []
        },
        {
          "date": "2026-08-19",
          "dateShort": "19/08",
          "timeAgo": "1 tuần trước",
          "tab": "Video · 19/08",
          "sourceType": "public-video",
          "typeLabel": "Video công khai",
          "title": "Cách Dễ Nhất Và Lười Nhất Để Làm Giàu: DCA Vào Quỹ Chỉ Số",
          "summary": "Video hướng dẫn cơ bản dành cho người mới/người \"lười\" không muốn theo dõi thị trường: đầu tư định kỳ (DCA) vào quỹ chỉ số (index fund) thay vì chọn cổ phiếu lẻ hay gửi tiết kiệm. Lập luận: gửi tiết kiệm chỉ lãi thực (sau lạm phát) 1-2%/năm — có chi phí cơ hội lớn. Quỹ chỉ số (S&P 500 ở Mỹ qua mã VOO/VFV, VN30 ở Việt Nam qua mã E1VN30) tự động sở hữu top công ty lớn nhất thị trường, tự đào thải công ty yếu và thêm công ty mạnh — không cần phân tích báo cáo tài chính. Lịch sử: S&P 500 lợi suất trung bình ~10%/năm trong 80 năm; VN30 ~11-12%/năm trong hơn 10 năm. Minh họa lãi kép: đầu tư đều 3 triệu/tháng, lợi suất 10%/năm — bắt đầu từ 25 tuổi cho ra ~7,5 tỷ ở tuổi 55, bắt đầu từ 35 tuổi chỉ còn ~2,5 tỷ, bắt đầu từ 45 tuổi chỉ ~700 triệu — chênh lệch bắt đầu sớm 20 năm là gần 7 tỷ đồng. Dẫn nghiên cứu của Charon Swap (2003-2022): so sánh 3 nhà đầu tư với 2.000 đô/năm — người \"tiên tri hoàn hảo\" (luôn mua đúng đáy) có 186.000 đô, người DCA đều đặn hàng tháng không quan tâm giá có 166.000 đô (chênh lệch chỉ 20.000 đô, rất nhỏ so với công sức timing thị trường), người chỉ gửi tiết kiệm chỉ có 44.000 đô — kết luận: DCA gần bằng hiệu quả với timing hoàn hảo (điều không thể làm được trong thực tế), còn không đầu tư gì mới là thiệt hại lớn nhất. Khuyến nghị thực hành: chuẩn bị quỹ khẩn cấp 3-6 tháng chi tiêu + trả hết nợ lãi suất cao trước khi đầu tư; mở tài khoản qua app uy tín (ở Việt Nam gợi ý TCBS vì hỗ trợ cả quỹ mở lẫn ETF và có tính năng mua định kỳ tự động); đặt lệnh mua tự động định kỳ để loại bỏ hoàn toàn yếu tố cảm xúc; hạn chế mở app xem giá thường xuyên. Với S&P 500 đang ở đỉnh mọi thời đại và VN30 vẫn ở vùng cao, quan điểm: không ai biết trước đâu là đỉnh thật, chờ đợi timing thị trường có rủi ro mất cơ hội lớn hơn rủi ro mua ở giá cao.",
          "feedChips": [
            {
              "label": "DCA ↑ vào S&P 500 (VOO/VFV) hoặc VN30 (E1VN30) đều đặn hàng tháng",
              "sig": "up"
            },
            {
              "label": "Dữ liệu ↑ DCA gần bằng timing hoàn hảo (166k vs 186k đô, 20 năm)",
              "sig": "up"
            },
            {
              "label": "S&P 500 ◷ đang ATH nhưng không nên chờ timing — mất cơ hội",
              "sig": "wait"
            }
          ],
          "keyCalls": [
            {
              "tag": "Chiến lược",
              "value": "DCA định kỳ vào quỹ chỉ số — không cần timing, không cần phân tích báo cáo",
              "signal": "up",
              "note": "S&P 500 qua VOO (Mỹ)/VFV (Canada), VN30 qua E1VN30 (Việt Nam). Lợi suất lịch sử: S&P 500 ~10%/năm (80 năm), VN30 ~11-12%/năm (10+ năm)."
            },
            {
              "tag": "Nghiên cứu Charon Swap",
              "value": "DCA (166.000 đô) gần bằng timing hoàn hảo (186.000 đô), 2003-2022",
              "signal": "up",
              "note": "Người gửi tiết kiệm chỉ có 44.000 đô — chênh lệch giữa không đầu tư và có đầu tư lớn hơn nhiều so với việc có timing hoàn hảo hay không."
            },
            {
              "tag": "S&P 500 / VN30 hiện tại",
              "value": "Đang ở vùng cao (S&P 500 ATH) nhưng vẫn nên DCA đều, không chờ điều chỉnh",
              "signal": "wait",
              "note": "Không ai biết trước đỉnh thật — chờ đợi có rủi ro mất cơ hội lớn hơn rủi ro mua giá cao trong dài hạn."
            }
          ],
          "sections": [
            {
              "title": "Vì sao quỹ chỉ số phù hợp với người mới/người lười",
              "signal": "up",
              "sigLabel": "Chiến lược nền tảng",
              "para": "Gửi tiết kiệm có lãi suất thực (sau lạm phát) rất thấp, chỉ 1-2%/năm — chi phí cơ hội lớn khi so với kênh đầu tư khác. Quỹ chỉ số giải quyết vấn đề \"chọn sai tài sản\" của người không chuyên: mua một mã ETF là tự động sở hữu cổ phiếu của toàn bộ công ty top đầu thị trường, và chỉ số tự cơ chế đào thải công ty yếu, bổ sung công ty mạnh — nhà đầu tư không cần phân tích báo cáo tài chính hay theo dõi tin tức. Ví dụ cụ thể theo thị trường: S&P 500 (500 công ty lớn nhất Mỹ) qua mã VOO (Mỹ)/VFV (Canada); VN30 (30 công ty lớn nhất Việt Nam) qua mã E1VN30.",
              "bullets": [
                "S&P 500: lợi suất trung bình lịch sử ~10%/năm trong 80 năm — mã VOO (Mỹ), VFV (Canada)",
                "VN30: lợi suất trung bình ~11-12%/năm trong hơn 10 năm — mã E1VN30",
                "Cơ chế tự đào thải công ty yếu, thêm công ty mạnh — không cần phân tích"
              ]
            },
            {
              "title": "Dữ liệu Charon Swap: DCA gần bằng timing hoàn hảo",
              "signal": "up",
              "sigLabel": "Bằng chứng thống kê",
              "para": "Nghiên cứu của công ty Charon Swap (2003-2022) cho 3 người mỗi năm 2.000 đô để đầu tư: người có khả năng \"tiên tri\" mua đúng đáy mỗi năm kết thúc với 186.000 đô; người DCA đều đặn hàng tháng không quan tâm giá cao thấp kết thúc với 166.000 đô (chênh lệch chỉ 20.000 đô — rất nhỏ so với độ khó của việc timing hoàn hảo, một việc không thể làm được trong thực tế); người chỉ gửi tiết kiệm chỉ có 44.000 đô. Kết luận thực tế: khoảng cách giữa \"có đầu tư\" và \"không đầu tư\" (142.000 đô) lớn hơn RẤT NHIỀU so với khoảng cách giữa \"timing hoàn hảo\" và \"DCA đơn giản\" (20.000 đô) — nên ưu tiên bắt đầu đầu tư sớm và đều đặn hơn là cố tìm điểm vào hoàn hảo.",
              "bullets": [
                "Người timing hoàn hảo: 186.000 đô (không khả thi trong thực tế)",
                "Người DCA đều đặn: 166.000 đô (chênh chỉ 20.000 đô so với timing hoàn hảo)",
                "Người chỉ gửi tiết kiệm: 44.000 đô — thiệt hại lớn nhất là KHÔNG đầu tư"
              ]
            },
            {
              "title": "Thực hành: quỹ khẩn cấp trước, rồi DCA tự động, đừng xem giá",
              "signal": "wait",
              "sigLabel": "Các bước cụ thể",
              "para": "Trước khi đầu tư: (1) có quỹ khẩn cấp đủ 3-6 tháng chi tiêu để không phải bán tài sản đang lỗ khi cần tiền gấp; (2) trả hết các khoản nợ lãi suất cao (thẻ tín dụng >20%) trước — đầu tư bằng tiền vay tạo áp lực tâm lý lớn. Sau đó: mở tài khoản ở app uy tín (ở Việt Nam gợi ý TCBS vì hỗ trợ cả quỹ mở lẫn ETF và có tính năng đặt lệnh mua định kỳ tự động), thiết lập lệnh mua tự động hàng tháng để loại bỏ hoàn toàn cảm xúc khỏi quyết định đầu tư, và hạn chế mở app xem giá thường xuyên vì càng theo dõi sát càng dễ bị cảm xúc chi phối dẫn đến mua bán sai thời điểm.",
              "bullets": [
                "Bước 1: quỹ khẩn cấp 3-6 tháng chi tiêu + trả hết nợ lãi suất cao",
                "Bước 2: mở tài khoản (VN: gợi ý TCBS — hỗ trợ ETF + quỹ mở + mua định kỳ tự động)",
                "Bước 3: đặt lệnh mua tự động định kỳ, không xem bảng điện thường xuyên"
              ]
            }
          ],
          "tradeLevels": [
            {
              "group": "Chứng khoán Mỹ",
              "items": [
                {
                  "asset": "S&P 500",
                  "dir": "DCA ĐỀU ĐẶN — không chờ timing dù đang ở đỉnh mọi thời đại",
                  "entry": "Định kỳ hàng tháng",
                  "target": "—",
                  "stop": "—",
                  "sig": "wait",
                  "tv": "BINANCE:SPXUSDT.P"
                }
              ]
            },
            {
              "group": "Chứng khoán Việt Nam",
              "items": [
                {
                  "asset": "VN30",
                  "dir": "DCA ĐỀU ĐẶN qua E1VN30 — không cần chọn cổ phiếu lẻ",
                  "entry": "Định kỳ hàng tháng",
                  "target": "—",
                  "stop": "—",
                  "sig": "up",
                  "tv": "HOSE:VN30"
                }
              ]
            }
          ]
        },
        {
          "date": "2026-08-02",
          "dateShort": "02/08",
          "timeAgo": "3 tuần trước",
          "tab": "Đổi danh mục · 02/08",
          "sourceType": "public-video",
          "typeLabel": "Video công khai · 20 phút",
          "title": "Tại Sao Mình Thay Đổi Cách Đầu Tư? — Mua S&P 500 Bây Giờ Là Đặt Cược Vào AI",
          "summary": "Anh tự nhận đã khuyên mua S&P 500 và VN30 suốt thời gian dài, nay nói thẳng là \"không còn tốt trong thời đại AI nữa\" và công bố lại toàn bộ tỷ trọng danh mục chứng khoán. Lý do: 10 công ty đã chiếm 40% chỉ số S&P 500 và 8 trong số đó đặt cược lớn vào AI — mua chỉ số tưởng là đa dạng, thực tế là dồn vào một canh bạc.",
          "feedChips": [
            {
              "label": "S&P 500 ⚠ 10 công ty chiếm 40% chỉ số",
              "sig": "warn"
            },
            {
              "label": "Danh mục ↑ 50% S&P 500 · 20% vừa & nhỏ · 15% mới nổi",
              "sig": "up"
            },
            {
              "label": "S&P chia đều ✕ từ chối — \"thưởng phạt ngược\"",
              "sig": "avoid"
            },
            {
              "label": "Vàng ↑ mua ETF công ty khai khoáng, không mua vàng vật chất",
              "sig": "up"
            },
            {
              "label": "AI trading ✕ 7 tỷ đô kiện lừa đảo riêng năm 2025 ở Mỹ",
              "sig": "avoid"
            }
          ],
          "keyCalls": [
            {
              "tag": "Bẫy tập trung của S&P 500",
              "value": "10 công ty = 40% chỉ số",
              "signal": "warn",
              "note": "Google, Apple, Microsoft, Nvidia… — 8 trong 10 công ty đầu bảng đang đặt cược cực lớn vào AI. \"Khi bạn đầu tư vào chỉ số S&P 500 thì ở một mức độ rất lớn là bạn đang đặt cược vào AI.\" Nếu kết quả AI không xứng với khoản đầu tư hiện tại thì cả chỉ số rớt theo. Anh dẫn nghiên cứu: nhóm công ty top đầu cần tạo ra khoảng 2.000 tỷ đô doanh thu mới xứng với định giá đang có."
            },
            {
              "tag": "Danh mục mới — chỉ tính phần chứng khoán",
              "value": "50 / 20 / 15 / 10 / 5",
              "signal": "up",
              "note": "50% chỉ số S&P 500 · 20% ETF công ty vừa và nhỏ của Mỹ · 15% ETF thị trường mới nổi (Trung Quốc, Hàn Quốc — và Việt Nam khi FTSE đã xếp vào nhóm này) · 10% ETF thị trường phát triển ngoài Mỹ (Châu Âu, Đức, Pháp, Anh) · 5% ETF công ty khai khoáng vàng. Anh nói rõ đây KHÔNG gồm crypto và bất động sản anh đang có, và KHÔNG nêu mã ETF cụ thể trên YouTube — mã chỉ có trong cộng đồng trả phí của anh."
            },
            {
              "tag": "S&P 500 chia đều tỷ trọng",
              "value": "Từ chối — vẫn chọn bản thường",
              "signal": "avoid",
              "note": "Bảng so sánh anh đưa ra cho thấy bản chia đều có rủi ro thấp hơn và đa dạng hơn. Nhưng anh vẫn chọn bản thường: \"công ty lớn có lý do để nó lớn\", và thời đại AI không giống bong bóng dot-com 2000 vì các ông lớn có doanh thu thật, không chỉ sống bằng AI (Microsoft còn Office, game…). Bản chia đều dính hiệu ứng \"thưởng phạt ngược\" — bán công ty làm tốt để mua công ty làm kém ở đáy chỉ số."
            },
            {
              "tag": "Đa dạng theo địa lý",
              "value": "Không nước nào mạnh mãi",
              "signal": "warn",
              "note": "Năm 1900 nước Anh chiếm 24% tổng giá trị thị trường toàn cầu; thập niên 80–90 là Nhật Bản; nay là Mỹ; Trung Quốc đang trỗi dậy. Mua S&P 500 là phụ thuộc hoàn toàn vào một quốc gia. Đó là lý do anh bắt đầu mua thêm tài sản ngoài nước Mỹ."
            },
            {
              "tag": "Ai hưởng lợi thật từ AI",
              "value": "Công ty DÙNG AI, không phải công ty TẠO AI",
              "signal": "up",
              "note": "Hiệu suất các mô hình (Claude, ChatGPT, Gemini) đang tiệm cận nhau. Bên hưởng lợi nhiều nhất là công ty vừa và nhỏ biết áp dụng AI để tạo sản phẩm đột phá — nhóm này tăng trưởng nhanh hơn công ty quá lớn. Đó là lý do 20% danh mục vào ETF công ty vừa và nhỏ."
            },
            {
              "tag": "Vàng",
              "value": "Mua ETF công ty đào vàng, 5%",
              "signal": "up",
              "note": "Basel 3 xếp vàng vào tài sản tier 1 — ngang tiền mặt và trái phiếu chính phủ Mỹ; ngân hàng trung ương đang mua rất nhiều, Trung Quốc lập \"hành lang vàng\" với nhóm BRICS. Nhưng anh nói thẳng là không thích vàng vật chất: \"nó không tạo ra được dòng tiền\". Anh mua cổ phiếu công ty khai khoáng vì có đòn bẩy — vàng tăng thì cổ phiếu tăng nhanh hơn giá vàng, và ngược lại giảm cũng nhanh hơn. Chấp nhận rủi ro đó vì chỉ chiếm 5%."
            },
            {
              "tag": "Cảnh báo AI trading",
              "value": "7 tỷ đô kiện lừa đảo AI, riêng 2025 ở Mỹ",
              "signal": "avoid",
              "note": "Các hội nhóm quảng cáo \"AI cao cấp\" cho lợi nhuận vài chục phần trăm mỗi tháng: \"đa số những cái thứ đó là lừa đảo\". Cơ quan quản lý thương mại Mỹ đang chạy chiến dịch Operation AI Comply; ủy ban chứng khoán Mỹ điều tra các công ty nói khống là dùng AI. Lập luận của anh: ngân hàng và tổ chức tài chính lớn đã dùng machine learning 30–40 năm nay, mà hơn 90% quỹ đầu tư trên thế giới vẫn không thắng nổi S&P 500. Warren Buffett cũng chỉ đều đặn khoảng 20%/năm."
            },
            {
              "tag": "Người ở Việt Nam làm gì",
              "value": "ETF VN30 + 1–2 chứng chỉ quỹ mở",
              "signal": "wait",
              "note": "Anh không khuyến khích dùng tiền Việt mua tài sản nước ngoài — mua được nhưng không chính thống, không được luật pháp Việt Nam bảo vệ, thuế rắc rối. Thay vào đó: ETF VN30 có mức đa dạng tương đối tốt (dù đúng là nặng bất động sản và ngân hàng — \"điểm chung của cả thị trường Việt Nam rồi, làm gì thì cũng không tránh được\"), rồi mua thêm một hai chứng chỉ quỹ mở phủ các công ty ít nằm trong VN30 để cân bằng lại."
            }
          ],
          "sections": [
            {
              "title": "Vì sao chỉ số không còn là chỗ trú an toàn",
              "signal": "warn",
              "sigLabel": "Đa dạng trên giấy, tập trung trên thực tế",
              "para": "Lập luận cũ của anh là quỹ chỉ số trải đều nhiều ngành nên vừa đa dạng vừa an toàn. Anh nói lập luận đó đúng trong quá khứ và không còn đúng bây giờ, vì cơ cấu của chính chỉ số đã đổi: sức nặng dồn về một nhóm rất nhỏ, và nhóm đó lại cùng đặt cược vào một thứ.",
              "bullets": [
                "Mười công ty chiếm 40% chỉ số S&P 500; tám trong số đó đang đầu tư rất lớn vào AI.",
                "Nghiên cứu anh dẫn: nhóm công ty top đầu thế giới cần tạo ra khoảng 2.000 tỷ đô doanh thu mới xứng với định giá hiện tại.",
                "Rủi ro thứ hai là địa lý: 500 công ty đó đều là công ty Mỹ, nên mua chỉ số là đặt cược vào một quốc gia duy nhất.",
                "Lịch sử đổi ngôi: Anh (1900, 24% giá trị thị trường toàn cầu) → Nhật (thập niên 80–90) → Mỹ → Trung Quốc đang lên."
              ]
            },
            {
              "title": "Vì sao anh KHÔNG chọn S&P 500 chia đều tỷ trọng",
              "signal": "avoid",
              "sigLabel": "Rủi ro thấp hơn nhưng logic ngược",
              "para": "Đây là chỗ anh đi ngược lời khuyên phổ biến trong giới đầu tư cá nhân quốc tế. Bản chia đều cho mỗi công ty khoảng 0,2% danh mục, nên Microsoft nặng ngang một công ty nhỏ trong chỉ số. Anh thừa nhận bản này rủi ro thấp hơn và đa dạng hơn, nhưng vẫn từ chối.",
              "bullets": [
                "\"Những công ty lớn có lý do để nó lớn\" — doanh thu lớn và định giá lớn đều có căn cứ.",
                "Thời AI khác bong bóng dot-com 2000: các ông lớn có doanh thu thật và nhiều sản phẩm ngoài AI.",
                "Hiệu ứng \"thưởng phạt ngược\": chia đều buộc phải bán công ty đang làm tốt để mua công ty làm kém nằm đáy chỉ số.",
                "Với người không muốn nghĩ nhiều, anh nói mua đúng một ETF phủ toàn cầu (kiểu MSCI World / FTSE World) là đủ — anh tách ra 5 ETF chỉ vì muốn tự chỉnh tỷ trọng theo thời điểm."
              ]
            },
            {
              "title": "Cảnh báo: các hệ thống \"AI giao dịch\" hứa vài chục phần trăm mỗi tháng",
              "signal": "avoid",
              "sigLabel": "Operation AI Comply · 7 tỷ đô kiện tụng 2025",
              "para": "Anh dành hẳn một đoạn cho thứ đang được quảng cáo nhiều trên mạng xã hội, và nói dựa trên nghề của mình là quản lý rủi ro ngân hàng.",
              "bullets": [
                "Cơ quan quản lý thương mại Mỹ có chiến dịch Operation AI Comply; ủy ban chứng khoán Mỹ điều tra các công ty nói khống là dùng AI.",
                "Riêng năm 2025 các vụ kiện liên quan lừa đảo AI ở Mỹ đã lên khoảng 7 tỷ đô.",
                "Ngân hàng và tổ chức tài chính lớn đã dùng machine learning từ 30–40 năm trước, hơn 90% quỹ đầu tư vẫn không thắng nổi S&P 500.",
                "So chiếu: Warren Buffett cũng chỉ đạt khoảng 20% mỗi năm đều đặn qua nhiều năm."
              ]
            }
          ],
          "tradeLevels": [
            {
              "group": "Phân bổ danh mục chứng khoán (tự công bố)",
              "items": [
                {
                  "asset": "S&P 500",
                  "dir": "Giữ 50% danh mục",
                  "entry": "Không nêu mốc giá — mua theo tỷ trọng",
                  "target": "Nắm dài hạn",
                  "stop": "Không nêu",
                  "sig": "up",
                  "tv": "TVC:SPX"
                },
                {
                  "asset": "ETF công ty vừa và nhỏ Mỹ",
                  "dir": "Giữ 20% danh mục",
                  "entry": "Không nêu mã ETF trên YouTube",
                  "target": "Hưởng lợi từ nhóm biết ứng dụng AI",
                  "stop": "Không nêu",
                  "sig": "up",
                  "tv": ""
                },
                {
                  "asset": "ETF thị trường mới nổi",
                  "dir": "Giữ 15% danh mục",
                  "entry": "Không nêu mã ETF trên YouTube",
                  "target": "Trung Quốc, Hàn Quốc — và Việt Nam khi vào nhóm",
                  "stop": "Không nêu",
                  "sig": "up",
                  "tv": ""
                },
                {
                  "asset": "ETF thị trường phát triển ngoài Mỹ",
                  "dir": "Giữ 10% danh mục",
                  "entry": "Không nêu mã ETF trên YouTube",
                  "target": "Châu Âu, Đức, Pháp, Anh",
                  "stop": "Không nêu",
                  "sig": "up",
                  "tv": ""
                },
                {
                  "asset": "ETF công ty khai khoáng vàng",
                  "dir": "Giữ 5% danh mục",
                  "entry": "Không mua vàng vật chất",
                  "target": "Đòn bẩy theo giá vàng",
                  "stop": "Chấp nhận giảm nhanh hơn giá vàng",
                  "sig": "up",
                  "tv": ""
                },
                {
                  "asset": "ETF VN30",
                  "dir": "Dành cho người ở Việt Nam — nền của danh mục",
                  "entry": "Không nêu mốc giá",
                  "target": "Bổ sung 1–2 quỹ mở phủ ngoài VN30",
                  "stop": "Không nêu",
                  "sig": "wait",
                  "tv": "VN30"
                }
              ]
            }
          ]
        },
        {
          "date": "2026-07-12",
          "dateShort": "12/07",
          "timeAgo": "6 tuần trước",
          "tab": "7 tiêu chí quỹ mở · 12/07",
          "sourceType": "public-video",
          "typeLabel": "Video công khai · 20 phút",
          "title": "Nếu Đầu Tư Quỹ Mở Trong 2026, Mình Làm Thế Này — 7 Tiêu Chí Chọn Quỹ",
          "summary": "Bài giảng về cách đọc một quỹ mở cổ phiếu: bảy tiêu chí, kèm quan điểm gây tranh cãi là ĐỪNG lấy VN-Index làm thước đo mà phải lấy ETF VN30. Anh cũng nêu tên một số quỹ đang làm tốt trên thị trường Việt Nam.",
          "feedChips": [
            {
              "label": "Thước đo ↑ dùng ETF VN30, KHÔNG dùng VN-Index",
              "sig": "up"
            },
            {
              "label": "Lịch sử quỹ ⚠ dưới 5 năm là chưa đủ tin",
              "sig": "warn"
            },
            {
              "label": "Lợi nhuận ⚠ nhìn 3–5 năm, đừng nhìn 1 năm",
              "sig": "warn"
            },
            {
              "label": "Quỹ mở nước ngoài ✕ bỏ qua, mua thẳng S&P 500",
              "sig": "avoid"
            },
            {
              "label": "Max drawdown ↑ chỉ số ít người xem nhưng rất quan trọng",
              "sig": "up"
            }
          ],
          "keyCalls": [
            {
              "tag": "Tiêu chí 1 — Thước đo",
              "value": "ETF VN30, không phải VN-Index",
              "signal": "up",
              "note": "Nhiều quỹ ghi thẳng VN-Index làm benchmark trong bản cáo bạch. Anh phản đối: \"không có bất cứ tài sản nào theo dõi VN-Index cả, cho nên bạn so với nó cũng không để làm gì hết\" — nếu không mua quỹ mở thì bạn cũng không có cách nào mua VN-Index. Thước đo phải là thứ bạn thật sự mua được, tức ETF VN30. Quỹ phải thắng VN30 trước đã; lỗ thì cũng phải lỗ ít hơn VN30."
            },
            {
              "tag": "Tiêu chí 2 — Lịch sử",
              "value": "Trên 5 năm mới đáng tin",
              "signal": "warn",
              "note": "Dưới 3 năm là quá mới, chưa đi qua giai đoạn thị trường rơi (2022, Covid) nên không thể hiện được năng lực người quản lý quỹ. Anh dẫn: DCDS của Dragon Capital đã hoạt động 22 năm trên thị trường Việt Nam; VCBF, SSI, \"VSAP\" cũng đã khoảng 8 năm."
            },
            {
              "tag": "Tiêu chí 3 — Lợi nhuận",
              "value": "Xem 3–5 năm, đừng xem 1 năm",
              "signal": "warn",
              "note": "Cái bẫy của người mới: thấy quỹ nào 1 năm gần đây tăng cao thì nhảy sang. Ví dụ anh đưa ra: năm 2025 VN30 tăng gần 50% chủ yếu nhờ nhóm cổ phiếu họ Vin; quỹ mở nào cẩn thận loại nhóm Vin ra thì đương nhiên không theo kịp — nhưng điều đó không nói được gì về dài hạn. Theo bảng anh chiếu, nhóm dẫn đầu 5 năm gần nhất vượt ETF VN30 khá nhiều."
            },
            {
              "tag": "Tiêu chí 4 — Phí quản lý",
              "value": "Lệch 0,4% → 51 triệu sau 20 năm",
              "signal": "warn",
              "note": "Ví dụ 1,5% so với 1,9%. Anh thừa nhận 51 triệu sau 20 năm \"cũng không quá nhiều, nhưng đâu có lý do gì để chúng ta mất số tiền đó\". Đây cũng là lý do các nhà đầu tư kỳ cựu nước ngoài khuyên tránh quỹ mở: phí ETF chỉ bằng 1/3–1/4 quỹ mở."
            },
            {
              "tag": "Tiêu chí 5 — Quy mô (AUM)",
              "value": "Vài chục tỷ thì bỏ qua",
              "signal": "warn",
              "note": "Quỹ lớn nghĩa là nhiều người và cả tổ chức tin tưởng, và người quản lý xoay sở dễ hơn — mua được nhiều loại tài sản để đa dạng hóa, có thể phòng hộ. DCDS thuộc nhóm AUM lớn nhất thị trường (khoảng 6.000 tỷ theo bảng anh chiếu); \"VSAP\" và \"VOF\" cũng đã hàng nghìn tỷ, vẫn an toàn."
            },
            {
              "tag": "Tiêu chí 6 — Max drawdown",
              "value": "VN30 rớt 34% năm 2022",
              "signal": "up",
              "note": "Đoạn rớt sâu nhất từ đỉnh xuống đáy trong cả chu kỳ quỹ — cho thấy người quản lý có kiểm soát rủi ro hay chỉ chăm chăm kiếm lời. Quỹ tốt phải có max drawdown thấp hơn benchmark. Năm 2022 VN30 rớt 34%; VCBF và DCDS lỗ ít hơn (DCDS sát nút, 32% so với 34%). Lý do phải quan tâm: rớt từ 100 xuống 50 thì phải tăng 100% mới về lại 100."
            },
            {
              "tag": "Tiêu chí 7 — Triết lý đầu tư",
              "value": "Tiêu chí ít người để ý nhất",
              "signal": "up",
              "note": "Mỗi quỹ có phương châm khác nhau và phải hợp với bạn. DCDS đi kiểu linh hoạt — chuyển qua lại giữa cổ phiếu và tiền mặt tùy tình hình thị trường. \"VSAP\" đi kiểu đãi cát tìm vàng, nghiêng về cổ phiếu tầm trung (mid cap) thay vì blue chip nên tìm lợi nhuận cao hơn nhưng lúc thị trường tốt có thể không theo kịp DCDS. Khi hai quỹ cho lợi nhuận gần bằng nhau, đây là tiêu chí phân định."
            },
            {
              "tag": "Quỹ mở ở thị trường Mỹ",
              "value": "Đừng quan tâm — mua thẳng S&P 500",
              "signal": "avoid",
              "note": "\"Khả năng là 90% những quỹ mở đó nó thua chỉ số S&P 500 cho nên bạn chỉ cần đơn giản là mua S&P 500 mà thôi.\" Quỹ mở chỉ đáng cân nhắc ở thị trường Việt Nam, nơi nhóm dẫn đầu đang thật sự vượt ETF VN30."
            }
          ],
          "sections": [
            {
              "title": "Hiểu lầm về NAV — chọn quỹ vì \"giá rẻ hơn\"",
              "signal": "warn",
              "sigLabel": "Sai lầm phổ biến",
              "para": "NAV của một chứng chỉ quỹ = (tổng tài sản − tổng nợ) / tổng chứng chỉ đang lưu hành, do ngân hàng giám sát tính chứ không phải quỹ tự tính, và đã trừ phí quản lý theo từng ngày. Nhiều người thấy NAV quỹ này cao quá nên chọn quỹ có NAV rẻ hơn để \"mua được nhiều hơn\".",
              "bullets": [
                "Cái cần nhìn là TỶ LỆ TĂNG TRƯỞNG của NAV so với chính nó trong quá khứ, không phải NAV quỹ này so với NAV quỹ kia.",
                "Ví dụ anh đưa: quỹ A có NAV cao gấp gần ba lần quỹ B, nhưng cùng bỏ một số tiền và cùng tăng 15% thì lợi nhuận vẫn y hệt nhau — 11,5 triệu.",
                "NAV đã trừ phí quản lý rồi nên không cần trừ thêm khi so sánh."
              ]
            },
            {
              "title": "Ba chỉ số nâng cao — biết để hiểu người khác nói, không cần dùng",
              "signal": "wait",
              "sigLabel": "Phần thưởng cuối video",
              "para": "Anh nói thẳng là nhà đầu tư cá nhân ở thị trường Việt Nam có thể bỏ qua cả ba, vì số lượng quỹ mở không đủ nhiều để phải phân tích tới mức đó. Nêu ra chỉ để \"khi bạn nghe ai đó chém gió về mấy cái chỉ số này thì bạn cũng hiểu người ta đang chém về cái gì\".",
              "bullets": [
                "Sharpe: khoản lời có tương xứng với rủi ro bỏ ra hay không. Cao = lời tốt mà ít biến động.",
                "Alpha: so với benchmark. Dương là thắng thước đo, âm là thua thị trường.",
                "Beta: mức dao động so với thị trường. Bằng 1 là đi y hệt; DCDS khoảng 1,1 nên rung lắc mạnh hơn thị trường một chút cả hai chiều."
              ]
            },
            {
              "title": "Lưu ý khi đọc các tên quỹ trong bài này",
              "signal": "warn",
              "sigLabel": "Phụ đề tự động đọc sai tên viết tắt",
              "para": "Video không có phụ đề do tác giả tự làm, nên tên viết tắt của quỹ bị đọc sai nhiều chỗ. Những tên xuất hiện nhất quán và đọc được chắc chắn: DCDS (Dragon Capital), VCBF, SSI.",
              "bullets": [
                "\"VSAP\" xuất hiện bốn lần — nhiều khả năng là VESAF của VinaCapital, nhưng KHÔNG có gì trong transcript xác nhận, nên để nguyên như phụ đề ghi.",
                "\"VOF\" / \"VOOF\" xuất hiện hai lần với cách viết khác nhau — cùng lý do, để nguyên.",
                "Mọi con số trong bài đều lấy từ bảng anh chiếu trên màn hình và đọc thành lời; chỗ nào anh không đọc số thì bài này không ghi số."
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
          "date": "26/08/2026",
          "title": "\"Mình Thích AN TOÀN Thì Nên Đầu Tư Vô Chỗ Nào?\"",
          "meta": "Giải đáp tài chính · 32:16 · LCG Huy"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "23/08/2026",
          "title": "\"Mua Nhà Bây Giờ Hay Đầu Tư. Cái Nào Lợi Hơn?\"",
          "meta": "Đã đọc, BỎ QUA — tư vấn tài chính cá nhân (mua nhà ở Luxembourg), không có nội dung chứng khoán/quỹ"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "19/08/2026",
          "title": "Cách Dễ Nhất Và Lười Nhất Để Làm Giàu: DCA Vào Quỹ Chỉ Số",
          "meta": "Video công khai · LCG Huy"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "02/08/2026",
          "title": "Tại Sao Mình Thay Đổi Cách Đầu Tư? — Mua S&P 500 Bây Giờ Là Đặt Cược Vào AI",
          "meta": "Video công khai · 20 phút · LCG Huy"
        },
        {
          "icon": "▶",
          "iconBg": "oklch(0.95 0.04 27)",
          "iconColor": "oklch(0.46 0.15 27)",
          "date": "12/07/2026",
          "title": "Nếu Đầu Tư Quỹ Mở Trong 2026, Mình Làm Thế Này — 7 Tiêu Chí Chọn Quỹ",
          "meta": "Video công khai · 20 phút · LCG Huy"
        }
      ]
    }
  },
  "weekly": {
    "dateRange": "24–28/08/2026",
    "action": "Tuần 35 là tuần của một kỹ thuật hơn là của một mốc giá. Vàng chạm đúng 4.700 mà Thái Phạm đã hẹn từ 4.080, và thay vì chọn giữa giữ hay bán, ông đưa ra phương án thứ ba: hedge — mở vị thế short bằng đúng lượng đang giữ để khóa lãi trong lúc chờ nhịp tích lũy đi qua, rồi hai ngày sau thả ra khi giá đã lùi về vùng 4,63. Ngày 28/08 ông dùng đúng công cụ đó theo chiều ngược lại cho Bitcoin: đang giữ short thì mua một lượng tương ứng để khóa, phòng cú kéo giết short quanh bài phát biểu của chủ tịch Fed đêm 29/08. Ở thị trường Việt Nam, VN-Index thêm 62 điểm lên 1.830 và độ rộng cải thiện tuần thứ ba liên tiếp — tỷ lệ mã downtrend từ 60,7% xuống còn 50,0%. Nhưng có một cờ đỏ ít ai nói: khối lượng giảm dần trong khi giá tăng, từ 669 xuống 484 triệu cổ phiếu. Sự kiện đáng đối chiếu nhất tuần là TCB: mã này tăng trần theo một tin đồn hợp tác với tổ chức nước ngoài, Thái Phạm viết \"nay tôi cũng có một cổ tím TCB vui quá\", còn Chứng khoán 5 phút dành nguyên một ngày để can người xem mua thêm — và chụp lại ảnh tin nhắn tư vấn lúc 13:45 làm bằng chứng. Quang Dũng thì bóc một nghịch lý số: quý 2/2026 thanh khoản chỉ 21.000 tỷ mỗi phiên, thấp nhất năm năm, mà lợi nhuận ngành chứng khoán vẫn tăng 52%.",
    "consensus": [
      {
        "label": "Nhóm ngân hàng và chứng khoán vẫn là nền của mọi danh mục",
        "detail": "Thái Phạm: \"Nắm chặt bank, chứng, và các mã sản xuất, phân bón.\" Chứng khoán 5 phút coi TCB là hàng cơ bản ở vùng giá hấp dẫn, chỉ phản đối việc mua thêm theo tin. Quang Dũng bóc số cả ngành: doanh thu +36%, lợi nhuận sau thuế +52% so cùng kỳ — dù thanh khoản quý 2 thấp nhất năm năm."
      },
      {
        "label": "Cả ba kênh cùng nói: đừng để một phiên đẹp kéo mình vào trạng thái tất tay",
        "detail": "Chứng khoán 5 phút hỏi ngược ba câu trước khi bán, và cảnh báo về nhóm hô mua all-in: \"mình chưa thấy cái gì 100% cả, trừ việc là vợ mình đúng\". Thái Phạm nói với hội viên \"ai đủ hàng rồi mà không muốn lướt thì thôi\". AzFin thì đi xa hơn: với vốn nhỏ, mục tiêu chính không phải sinh lời mà là tích kiến thức để rút ra triết lý đầu tư sau 2–5 năm."
      },
      {
        "label": "Điểm mua đang mở rộng, nhưng thanh khoản chưa xác nhận",
        "detail": "Chứng khoán 5 phút giữ nguyên quan điểm ba tuần: điểm mua ngày càng nhiều, nhưng \"thanh khoản sẽ không cải thiện được quá nhiều trong giai đoạn hiện tại\". Số liệu độc lập ủng hộ cảnh báo này: khối lượng bốn phiên vừa rồi giảm dần từ 669 xuống 484 triệu cổ phiếu dù chỉ số vẫn lên."
      },
      {
        "label": "Vàng: hướng dài hạn không ai nghi ngờ",
        "detail": "Thái Phạm dành hẳn một video công khai để dựng cơ chế: hệ thống petrodollar đang nứt, khối ngoại giảm nắm trái phiếu Mỹ từ đỉnh 9.490 xuống 9.300 tỷ đô, ba nước bán mạnh nhất là Nhật, Trung Quốc và Anh. Kết luận của ông là luận điểm 10–25 năm chứ không phải kèo bốn tuần."
      }
    ],
    "divergence": [
      {
        "label": "TCB tăng trần: ăn mừng hay can người mua",
        "detail": "Đây là ca đối chiếu sạch nhất tuần, cùng một mã và cùng một ngày. Thái Phạm: \"Nay tôi cũng có một cổ tím TCB vui quá.\" Chứng khoán 5 phút: \"Cả ngày mình dành để cản mọi người mua Techcombank trung dài hạn\" — và anh cũng đang CẦM TCB dài hạn. Khác biệt không nằm ở đánh giá doanh nghiệp mà ở chỗ hôm nay có phải điểm vào hay không: anh chỉ ra điểm mua thật là cây ngày 10/08 khi vượt lại MA20, hoặc mặc cả quanh 30–31; còn mua ở đỉnh cây trần theo tin thì \"bên trên có nhiều cản quá, và với cổ phiếu mà nhỏ lẻ cầm nhiều lại tăng vì tin như hôm nay thì gặp cản là bị kẹp một đống\"."
      },
      {
        "label": "Cách chọn cổ phiếu chứng khoán: theo rổ FTSE hay theo mô hình kinh doanh",
        "detail": "Thái Phạm cầm SSI, VCI, TCX vì chúng nằm trong rổ nâng hạng và tiền sẽ dồn vào đó. Quang Dũng phân loại hoàn toàn khác: chia ngành làm hai — nhóm dựa vào cho vay margin và nhóm dựa vào tự doanh — rồi chỉ ra nhóm margin tăng trưởng cao và đồng đều, còn nhóm tự doanh lác đác (VND +10%, chứng khoán IP −31,7%, SHS −35,1%). Anh còn bác luôn tiêu chí truyền thống: thị phần môi giới cao không còn đồng nghĩa với tiềm năng."
      },
      {
        "label": "Bitcoin: khóa hedge hay chờ test sâu",
        "detail": "Trong cùng một tuần Thái Phạm đưa hai thông điệp khác nhau về BTC. Tút 26/08: \"yếu rồi, trước mắt test lại 74K và 72k rồi mới biết tiếp — nếu test 68–69k thì sẽ vững hơn để thành một sóng đi lên.\" Tút 28/08 thì không chờ nữa mà khóa hedge để phòng cú kéo lên. Đây là lần đầu ông mở cửa cho kịch bản BTC tăng thật, dù vẫn giữ vị thế short. Chứng khoán 5 phút thì giữ quan điểm cũ: về đồ thị mua được, nhưng chính anh không tham gia vì đã ngừng nạp tiền vào crypto từ cuối 2025."
      },
      {
        "label": "Nhóm dầu khí nhà nước: câu chuyện thoái vốn hay cái bẫy quy định",
        "detail": "Chứng khoán 5 phút bóc Nghị quyết 40/2026: GAS thuộc nhóm nhà nước phải giữ trên 90% (đang 95,8%) nên chưa xử lý ngay; PLX thuộc nhóm 50–65% (đang 75,9%) nên chỉ cần bán một phần. Nhưng anh kết luận ngược với kỳ vọng chung: \"mấy nhóm cổ phiếu dầu khí này nắm giữ cũng mệt đấy — nó chịu sự quản lý rất nhiều từ các quy định của nhà nước, và những quy định này có thể thay đổi theo mục tiêu từng giai đoạn.\" Thái Phạm không nhắc tới nhóm này tuần nay."
      },
      {
        "label": "P/E: sách nói cao là tốt, AzFin nói ngược",
        "detail": "AzFin bóc chỗ lệch giữa giáo trình và thực chiến: trường đại học dạy P/E cao phản ánh triển vọng tốt, nhưng người đi đầu tư cần doanh nghiệp tốt mà P/E THẤP — vì tốt mà P/E cao thì đã hết cơ hội. Và cái bẫy lớn nhất không phải cao hay thấp mà là P/E có thật hay không: FLC 2017 bốc lợi nhuận lên 1.400 tỷ khiến P/E trông rất rẻ, rồi giá giảm rất sâu."
      }
    ]
  },
  "scorecard": [
    {
      "expert": "thai-pham",
      "date": "26/08",
      "asset": "Vàng",
      "call": "Hedge thay vì bán: mua short bằng đúng lượng đã mua ở đáy, tích lũy 2–3 tuần vùng 4.500–4.700",
      "result": "hit",
      "note": "Chốt ngay trong tuần. Đặt hedge ngày 26/08 khi vàng ở vùng 4,7; giá lùi về 4,63 và ông xác nhận \"vàng hedged thành công\" ngày 27/08, rồi thả hedge ngày 28/08. Đây là call về KỸ THUẬT chứ không phải về hướng — và kỹ thuật đã ăn đúng nhịp."
    },
    {
      "expert": "thai-pham",
      "date": "26/08",
      "asset": "Vàng",
      "call": "Ai lỡ nhịp thì đợi 4.488–4.500 mua lại",
      "result": "pending",
      "note": "Vàng ngày 28/08 là 4.635, còn cách mốc này khoảng 3%. Mốc rất cụ thể nên chấm được."
    },
    {
      "expert": "thai-pham",
      "date": "26/08",
      "asset": "Bitcoin",
      "call": "BTC yếu rồi — test lại 74k và 72k; nếu test 68–69k thì mới vững để thành sóng lên",
      "result": "pending",
      "note": "Đáng chú ý vì đây là lần ĐẦU ông mở cửa cho kịch bản BTC tăng thật, dù vẫn giữ short. Giá 28/08 là 79.968 — chưa test mốc nào trong ba mốc."
    },
    {
      "expert": "thai-pham",
      "date": "28/08",
      "asset": "Bitcoin",
      "call": "Khóa hedge trước bài phát biểu Warsh đêm 29/08, thả sau khi giá phản ánh tin",
      "result": "pending",
      "note": "Cùng một công cụ dùng ngược chiều với vàng trong cùng một tút. Chấm được sau cuối tuần."
    },
    {
      "expert": "thai-pham",
      "date": "28/08",
      "asset": "CK Việt",
      "call": "Thêm SZC và PC1 vào danh mục lướt — BĐS khu công nghiệp",
      "result": "pending",
      "note": "Không kèm mốc giá nào, và kèm điều kiện \"ai đủ hàng rồi mà không muốn lướt thì thôi\"."
    },
    {
      "expert": "thai-pham",
      "date": "28/08",
      "asset": "Vĩ mô",
      "call": "Cơ chế Mỹ xuất khẩu lạm phát đang có vết nứt — khối ngoại giảm nắm trái phiếu từ 9.490 xuống 9.300 tỷ đô",
      "result": "pending",
      "note": "Số liệu TIC của Bộ Tài chính Mỹ, đỉnh vào tháng 5/2026. Đây là luận điểm 10–25 năm nên không chấm được trong 4 tuần; ghi lại để theo dõi số TIC các tháng tới."
    },
    {
      "expert": "ck-5-phut",
      "date": "26/08",
      "asset": "TCB",
      "call": "KHÔNG mua thêm TCB trung dài hạn ở cây trần — điểm mua thật là cây 10/08 hoặc mặc cả 30–31",
      "result": "pending",
      "note": "Đối lập trực tiếp với việc Thái Phạm ăn mừng cây trần cùng ngày. Anh chụp ảnh tin nhắn tư vấn lúc 13:45 làm bằng chứng thời điểm. Chấm bằng diễn biến TCB sau khi hàng T+ về."
    },
    {
      "expert": "ck-5-phut",
      "date": "27/08",
      "asset": "TCB",
      "call": "Hai đáy trung hạn là chỗ dựa — cầm 28–30 thoải mái, 30 là \"giá ngủ ngon\"",
      "result": "pending",
      "note": "Mốc hỏng rất rõ: thủng hai đáy trung hạn thì có rủi ro mới."
    },
    {
      "expert": "ck-5-phut",
      "date": "27/08",
      "asset": "GAS · PLX",
      "call": "Nghị quyết 40: GAS nhà nước giữ trên 90%, PLX về 50–65% — nhưng nhóm dầu khí nắm giữ dài hạn cũng mệt",
      "result": "pending",
      "note": "Phần Nghị quyết là dữ kiện, phần \"nắm giữ mệt\" là nhận định. Ba lớp rủi ro anh nêu: quy định nhà nước thay đổi theo giai đoạn, tỷ giá, giá dầu và chuỗi cung ứng."
    },
    {
      "expert": "ck-5-phut",
      "date": "24/08",
      "asset": "CK Việt",
      "call": "Chúng ta đang ở gần đáy hơn là gần đỉnh — bán ở đây cũng rủi ro",
      "result": "pending",
      "note": "Kiểm chứng được bằng diễn biến 4 tuần. Anh bác việc so sánh với nghỉ lễ 2/9 năm ngoái vì \"vị thế thị trường khác nhau hẳn\"."
    },
    {
      "expert": "quang-dung",
      "date": "26/08",
      "asset": "Chứng khoán",
      "call": "Nhóm cho vay margin tăng trưởng cao và đồng đều; nhóm tự doanh lác đác — thị phần môi giới cao không còn đồng nghĩa tiềm năng",
      "result": "pending",
      "note": "Số liệu quý 2/2026: ngành doanh thu 35.274 tỷ (+36%), LNST 12.349 tỷ (+52%), trong khi thanh khoản chỉ 21.000 tỷ/phiên — thấp nhất 5 năm. VND +10%, IP −31,7%, SHS −35,1%."
    },
    {
      "expert": "azfin",
      "date": "27/08",
      "asset": "Phương pháp",
      "call": "P/E thấp mới là cơ hội — nhưng phải là P/E THẬT, tức EPS thật",
      "result": "pending",
      "note": "Hai ca lịch sử ông đưa làm bằng chứng cho bẫy P/E thấp giả: FLC 2017 (bốc lợi nhuận lên 1.400 tỷ) và PLP khi mới lên sàn."
    },
    {
      "expert": "lcg-huy",
      "date": "26/08",
      "asset": "Phân bổ",
      "call": "Tuổi 33 khẩu vị an toàn: 67% chứng khoán, 33% tài sản khác; ETF Việt Nam dùng VN30 và VN Diamond",
      "result": "pending",
      "note": "Lần đầu anh nêu tên ETF cụ thể ở thị trường Việt Nam. Cách đo khẩu vị: hỏi thẳng \"mất 30% danh mục sau một năm bạn thấy sao\"."
    },
    {
      "expert": "thai-pham",
      "date": "23/08",
      "asset": "CK Việt",
      "call": "FTSE 27 mã, 1,3 tỷ đô — tiền sẽ dồn vào đúng nhóm cổ phiếu đang cầm",
      "result": "pending",
      "note": "Kiểm chứng bằng diễn biến 27 mã trong rổ so với phần còn lại của sàn trong vài tháng tới. Lưu ý ông đếm 27 mã, Quang Dũng đếm 28 — ghi cả hai con số như từng người nói."
    },
    {
      "expert": "thai-pham",
      "date": "23/08",
      "asset": "HDB",
      "call": "HDB đánh giá cao hơn cả TCB — vượt đỉnh 30 lên 36",
      "result": "pending",
      "note": "Mốc rất cụ thể nên chấm được. Cơ sở: nền giá phẳng tích lũy đủ lâu, mẫu hình có thể cho 35%."
    },
    {
      "expert": "thai-pham",
      "date": "23/08",
      "asset": "Vàng",
      "call": "Lên 4.760, tích lũy quanh đó 2 tháng, rồi vượt đỉnh về 6.000",
      "result": "hit",
      "note": "Chốt phần đầu ngày 28/08. Vàng đạt đúng vùng 4.700–4.73 rồi lùi về 4.63 — chính ông xác nhận trong tút 26/08: \"sau khi đạt 4.700 như kế hoạch (đi lên từ 4.080) thì chuyện tích lũy 2–3 tuần ở vùng 4.500–4.700 cũng là đúng như dự liệu\". Hai chặng sau (vượt đỉnh, về 6.000) vẫn để pending trong call riêng."
    },
    {
      "expert": "thai-pham",
      "date": "23/08",
      "asset": "Bitcoin",
      "call": "Banana lần 3 sắp kết thúc — short 2/3, short thêm ở 82.000, không có cửa đi tiếp",
      "result": "pending",
      "note": "Ông tự thuật đang lỗ khoảng 2.000/coin. Đây là lần thứ ba ông giữ nguyên hướng short BTC dù giá đi ngược — đáng theo dõi cho mô hình I2 (ông có tự chấm sai hay không)."
    },
    {
      "expert": "thai-pham",
      "date": "23/08",
      "asset": "CK Mỹ",
      "call": "Cầm cự tới Anthropic niêm yết tháng 10 rồi điều chỉnh mạnh; chốt short US500 ở 7.500",
      "result": "pending",
      "note": "Có mốc thời gian và mốc giá nên chấm được. S&P ngày 24/08 là 7.648."
    },
    {
      "expert": "thai-pham",
      "date": "23/08",
      "asset": "MRNA",
      "call": "Short Moderna ở 150 — giá tăng 2,5 lần chỉ vì 1 trong 9 thử nghiệm thành công",
      "result": "pending",
      "note": "Lập luận kiểm chứng được bằng tiến độ các thử nghiệm còn lại, không chỉ bằng giá."
    },
    {
      "expert": "thai-pham",
      "date": "23/08",
      "asset": "VCX",
      "call": "Mua quỹ nắm Anthropic/OpenAI ở vùng 40 — kỳ vọng 160–200",
      "result": "pending",
      "note": "Phụ thuộc mốc OpenAI niêm yết ở định giá 2.000 tỷ đô. Mã VCX chưa xác minh được ticker chính thức — phụ đề đọc là \"VCX\"/\"VX\"."
    },
    {
      "expert": "ck-5-phut",
      "date": "23/08",
      "asset": "CK Việt",
      "call": "Tuần tới 70–80% người trong ngành sẽ hô mua tất tay — đừng theo",
      "result": "hit",
      "note": "Chính anh xác nhận lại trong video 24/08 rằng hiện tượng đã xảy ra: \"có một lượng rất lớn anh em đồng nghiệp của mình hay hô hào với phương pháp nghe rất tự tin — mua tất tay, mua all in, mua full margin\". Đây là call về hành vi đám đông, kiểm chứng bằng quan sát chứ không bằng giá."
    },
    {
      "expert": "ck-5-phut",
      "date": "21/08",
      "asset": "SSI",
      "call": "SSI xác nhận đỉnh sau cao hơn, đáy sau cao hơn — khởi nguồn phiên tím",
      "result": "pending",
      "note": "Anh nói rõ đây là nhận định về TÍN HIỆU, không phải dự báo giá: \"nếu hỏi thị trường có tăng tiếp không thì mình không biết\"."
    },
    {
      "expert": "ck-5-phut",
      "date": "23/08",
      "asset": "Crypto VN",
      "call": "Sàn crypto Việt Nam chạy tử tế phải tới 2027–2028, không phải năm nay",
      "result": "pending",
      "note": "Đối lập với kỳ vọng chung quanh mốc 1/9. Anh nói đã ngừng nạp tiền vào crypto từ cuối 2025 vì siết P2P."
    },
    {
      "expert": "quang-dung",
      "date": "24/08",
      "asset": "CK Việt",
      "call": "Chưa đủ điều kiện gọi là chu kỳ mới — thiếu điều kiện thứ ba: tiền thực sự vào",
      "result": "pending",
      "note": "Khung ba điều kiện: định giá rẻ (đã có), doanh nghiệp tăng trưởng (đã có), tiền vào (chưa xác nhận). Bằng chứng anh đưa: quý 2/2026 nhiều doanh nghiệp tăng trưởng tốt mà giá cổ phiếu vẫn tệ."
    },
    {
      "expert": "quang-dung",
      "date": "24/08",
      "asset": "CK Việt",
      "call": "Mọi chu kỳ giá lên đều xuất phát SAU một quá trình đổ vỡ — đáy quanh 10 năm hoàn vốn",
      "result": "pending",
      "note": "Số liệu ba chu kỳ: ~10 năm hoàn vốn (2020), 9,8 năm (2022), 10,3 năm (2025), tính theo dòng tiền hoạt động kinh doanh chứ không phải P/E."
    },
    {
      "expert": "ck-5-phut",
      "date": "20/08",
      "asset": "CK Việt",
      "call": "Phiên 21/08 khả năng cao là một cây pin 3 nữa — tuần đóng cửa đi ngang",
      "result": "miss",
      "note": "SAI RÕ. VN-Index phiên 21/08 đóng cửa 1.768,12, tăng 33,88 điểm (+1,95%) so với 1.734,24 phiên trước — không phải cây pin 3 nào cả. Ghi lại đúng vì đây là dự phóng có mốc kiểm chứng trong một phiên, và anh đã đưa nó với mức tin cậy \"khả năng cao\"."
    },
    {
      "expert": "thai-pham",
      "date": "20/08",
      "asset": "Bitcoin",
      "call": "Short BTC 1/2 ở 71,9–72; 1/2 nữa nếu lên 77 — \"hồi quang phản chiếu cho Banana lần 3\"",
      "result": "pending",
      "note": "Đối lập thẳng với CK 5 phút cùng ngày (mẫu hình nêm đáy đã break). Tính tới tút 21/08 vị thế đang âm 1.700/coin."
    },
    {
      "expert": "thai-pham",
      "date": "21/08",
      "asset": "VNM",
      "call": "Chốt lời 1/2 Vinamilk — doanh số quý 3 và quý 4 dự kiến kém sau chiến dịch 50 năm",
      "result": "hit",
      "note": "Tập 46 xác nhận đã chốt và nêu thêm lý do thứ hai: VNM không nằm trong rổ FTSE. Mức lãi ông tự thuật khoảng 13%, mua từ cây thứ hai chứ không phải đáy. Phần dự phóng doanh số quý 3–4 kém thì vẫn chưa kiểm chứng được — chỉ chấm phần hành động chốt lời."
    },
    {
      "expert": "thai-pham",
      "date": "21/08",
      "asset": "CK Mỹ",
      "call": "Chưa chốt short US500/US30 — \"dư địa còn giảm\"",
      "result": "pending",
      "note": "Vị thế đang có lãi rõ sau phiên chứng Mỹ giảm. Đây là quyết định giữ chứ không phải mở mới."
    },
    {
      "expert": "ck-5-phut",
      "date": "20/08",
      "asset": "MSN",
      "call": "Masan mua dưới 70, chỉ 30% lệnh — tăng trưởng đến từ mở rộng chuỗi WinMart",
      "result": "pending",
      "note": "Anh tự nhận từng sai lầm mua MSN ở vùng đỉnh, và thừa nhận view này quá dễ đoán nên giá đi ngang quanh 70 suốt hai năm."
    },
    {
      "expert": "ck-5-phut",
      "date": "20/08",
      "asset": "Phân bón",
      "call": "DPM/DCM mua ở chu kỳ thấp — giá URE đã về 400 đô từ vùng 800–900",
      "result": "pending",
      "note": "Kiểm chứng được bằng chính giá URE thế giới và giá hai cổ phiếu. Anh cho biết đã vào 30% lệnh DPM, là lệnh mua thứ hai trong năm."
    },
    {
      "expert": "ck-5-phut",
      "date": "20/08",
      "asset": "Bitcoin",
      "call": "BTC lặp mẫu hình \"nêm ở đáy\" của vàng — mẫu hình có tỷ lệ thành công rất cao",
      "result": "pending",
      "note": "Ngược hẳn Thái Phạm cùng ngày. Cùng một cây nến, hai kết luận đối nghịch — đây là ca đối chiếu sạch nhất từ đầu năm."
    },
    {
      "expert": "ck-5-phut",
      "date": "20/08",
      "asset": "CK Việt",
      "call": "ĐỪNG mua theo danh mục FTSE công bố — rổ đã chốt từ lâu, tạo lập đã gom trước",
      "result": "hit",
      "note": "Phiên 21/08 xác nhận đúng cơ chế anh nêu: \"hôm nay có con nằm trong này nó tím nhưng có những con nằm trong này nó có chạy đâu\". Thái Phạm cũng loại thẳng bốn mã trong rổ (VIC, VHM, HPG, HCM) — hai kênh khác phương pháp cùng bác bỏ việc mua theo rổ."
    },
    {
      "expert": "azfin",
      "date": "21/08",
      "asset": "VPB",
      "call": "Giá trị hợp lý VPBank ~39–40 — dưới 30 là vùng tốt để tích sản",
      "result": "pending",
      "note": "Cách tính công khai: 34.000 tỷ giá trị sổ sách tạo thêm trong bốn quý cộng ~6.000 tỷ thặng dư IPO VPX, ROE 21–22%. Giá vốn tích hiện tại của AzFin là 26.200, tạm lỗ 5,2%. Rủi ro: giả định mỗi quý lãi 8.000–10.000 tỷ."
    },
    {
      "expert": "ck-5-phut",
      "date": "17/08",
      "asset": "CK Việt",
      "call": "Thanh khoản KHÔNG thể tăng lại trong ngắn hạn — ba nguyên nhân chính sách, có thể kéo hết quý 3 sang quý 4",
      "result": "pending",
      "note": "Kiểm chứng được: nếu thanh khoản trung bình quý 4/2026 vượt hẳn nền hiện tại thì call sai."
    },
    {
      "expert": "ck-5-phut",
      "date": "17/08",
      "asset": "NLG",
      "call": "Mua 23,5 — target 26,5, cắt lỗ 22,5 (đáy thứ sáu)",
      "result": "pending",
      "note": "Mã anh đánh giá đẹp nhất nhóm bất động sản, dù thừa nhận không giải thích được bằng cơ bản."
    },
    {
      "expert": "ck-5-phut",
      "date": "17/08",
      "asset": "MSR",
      "call": "Mua 40,5–41 theo cây break — thủng 40 thì cắt",
      "result": "pending",
      "note": "Anh nói rõ là lệnh nhỏ theo tín hiệu, nền giá yếu, nhóm Masan (MCH, MSN) không chạy theo."
    },
    {
      "expert": "ck-5-phut",
      "date": "17/08",
      "asset": "HPG",
      "call": "HPG +20% từ giờ tới cuối năm là khó — phải lên 25–25,5",
      "result": "pending",
      "note": "Đối lập trực tiếp với Quang Dũng (01/08) đang giữ kỳ vọng lợi nhuận HPG tăng 50% cả năm 2026."
    },
    {
      "expert": "azfin",
      "date": "17/08",
      "asset": "NT2",
      "call": "EPS bình quân dài hạn ~2.600đ, cổ tức ~2.500đ/cp — giá về 15.000 thì tỉ suất cổ tức tái đầu tư lên 16,5%",
      "result": "pending",
      "note": "Kiểm chứng được bằng mức cổ tức NT2 công bố các năm tới. Rủi ro chính anh tự nêu: nhóm điện có EPS \"phập phù\", năm bảo trì lớn có thể tụt về nghìn mấy."
    },
    {
      "expert": "thai-pham",
      "date": "18/08",
      "asset": "Vĩ mô VN",
      "call": "Tỉ giá ổn trở lại — có lẽ do chính sách crypto 1/9",
      "result": "pending",
      "note": "Ông viết \"có lẽ do\", tức là suy đoán chứ không phải số liệu. Kiểm chứng bằng diễn biến tỉ giá quanh mốc 1/9."
    },
    {
      "expert": "thai-pham",
      "date": "18/08",
      "asset": "Phân bón",
      "call": "Phân bón bắt đầu chạy — điểm mua kỹ thuật vẫn còn đẹp",
      "result": "pending",
      "note": "Nối tiếp call 05/08 (DCM/DPM chiếm ~25% tài khoản, giữ tới tháng 3/2027)."
    },
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
      "result": "miss",
      "note": "Bỏ trong Tập 43 (05/08) cùng cả cụm kịch bản vàng về 3.000. Điều kiện của call là \"nếu Fed tăng lãi\" — và lập luận mới của ông là Fed sẽ KHÔNG tăng, nên tiền đề không xảy ra."
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
      "result": "hit",
      "note": "Về đích 31/07: Apple -10% sau mở cửa. Ông tự đóng kèo trên bài đăng hội viên — \"Quả ngọt cuối cùng cũng tới.\" Trước đó ngày 29/07 còn gia tăng thêm 1/3 vị thế."
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
      "note": "Tập 41 (30/07): giữ nguyên kịch bản test vùng 1.600 \"chưa biết khi nào\"; Index đang 1.744 sau nhịp squeeze short. Mốc 1.800 là vùng CƠ CẤU chứ không phải vùng mua. CẬP NHẬT 05/08: khung 6 tháng vẫn còn hiệu lực nên giữ pending, nhưng lưu ý ông đã bỏ toàn bộ nhóm kịch bản chờ Index giảm trong Tập 43."
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
      "result": "miss",
      "note": "Nửa đầu đúng: BTC có nhịp pump và ông đã short lại ở 71,9–72 ngày 20/08. Nhưng nửa sau — \"chỉ mua lại ở ~50k\" — bị chính ông bác bỏ: ngày 07/08 ông call mua lướt ở 65.200 và chốt lời ở 69.700. Giá chưa lần nào về vùng 50k. Ghi là MISS vì mốc mua lại đã sai."
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
      "note": "Tập 41 tự chấm: Nhật/Hàn \"diễn ra đúng như kỳ vọng\", ai short Samsung/Kospi \"ăn rất nhiều\". Muốn bắt đáy Samsung thì đợi test lại vùng ~186."
    },
    {
      "expert": "thai-pham",
      "date": "23/07",
      "asset": "CK Việt",
      "call": "Chưa bắt đáy — chờ VN-Index về 1.500 (test 1.500–1.600) mới giải ngân",
      "result": "miss",
      "note": "Ông tự hạ mốc hai lần: bài đăng 28/07 xuống 1.400–1.500, rồi Tập 42 (01/08) chốt \"phải đợi về vùng 1.400 mới giải ngân\". Mốc 1.500–1.600 nêu ngày 23/07 không còn là mốc hành động — ghi MISS vì kèo bị chính tác giả thay thế trước khi thị trường kiểm chứng."
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
      "note": "Tập 41: đang lãi ~30% từ vùng short 152, đã chốt bớt; chờ hồi lên ~125 trước đợt giải lock-up để short tiếp."
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
      "result": "miss",
      "note": "Phần \"còn cửa về ~3.000\" đã bị chính ông bỏ trong Tập 43 (05/08)."
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
      "result": "hit",
      "note": "Đúng chỉ sau 1 phiên: Apple -10% ngày 31/07. Bài 28/07 ông đã đặt hạn \"cùng lắm tới 3/8 là cùng\" — thực tế đến sớm hơn hạn 3 ngày."
    },
    {
      "expert": "thai-pham",
      "date": "30/07",
      "asset": "CK Việt",
      "call": "Nhịp tăng 30/07 là squeeze short — Index sẽ về lại 1.800, cầm >50% thì cơ cấu",
      "result": "pending",
      "note": "\"Không phải bùng nổ theo đà đúng nghĩa vì thị trường không có dòng dẫn\"; các quỹ kéo vì đang lỗ nặng."
    },
    {
      "expert": "thai-pham",
      "date": "30/07",
      "asset": "CK Việt",
      "call": "FPT hồi kỹ thuật về 77–78 thì bán ra — dài hạn không tích trữ",
      "result": "pending",
      "note": "Ngoại đã giảm sở hữu 49% → 26,9%; quỹ kẹp hàng sẽ làm hội thảo PR để ra hàng. CẬP NHẬT 04/08: chưa chạm 77–78 (FPT đóng cửa 03/08 ở 71 sau khi bật từ đáy 62), và chính ông đã NÂNG mốc thoát lên 85–90 trong bài đăng 04/08. Giữ pending nhưng lưu ý mốc đã bị dời một lần."
    },
    {
      "expert": "thai-pham",
      "date": "30/07",
      "asset": "CK Việt",
      "call": "GAS về vùng khá rẻ — cân nhắc mua dài hạn quanh 60",
      "result": "pending",
      "note": "\"Rẻ thì có thể rẻ hơn\" — mua dài hạn, không phải lướt."
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
      "expert": "azfin",
      "date": "30/07",
      "asset": "Vĩ mô",
      "call": "Quy tắc 4%: cần vốn đầu tư = chi tiêu năm × 25 để nghỉ hưu sớm",
      "result": "pending",
      "note": "Cơ sở: thị trường VN sinh lời bình quân 11–12%/năm; danh mục cân bằng cho tổng dòng tiền 6–7%/năm."
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
      "result": "hit",
      "note": "HIT (tự chấm 31/07): \"quyết định đấy là chính xác, không có gì nghi ngờ cả\" — PNJ giảm liên tục từ 3/7, đến cuối tháng vẫn ở vùng thấp nhất dù đã trích lập dự phòng 800 tỷ và nhiều bên hô hào bắt đáy."
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
      "result": "hit",
      "note": "HIT: Index từ vùng ~1.686–1.688 đã hồi 49 điểm trong tuần 27–31/07 — bán ở vùng đó rồi chờ mua lại rẻ hơn là sai, đúng như cảnh báo."
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
      "result": "hit",
      "note": "HIT: tuần 27–31/07 Index tăng 49 điểm (từ ~1.688) — ai bán theo hoảng loạn đầu tuần đã bán đúng đáy ngắn hạn, đúng như cảnh báo \"bán lúc này là chậm rồi, rủi ro hơn nắm giữ\"."
    },
    {
      "expert": "ck-5-phut",
      "date": "27/07",
      "asset": "CK Việt",
      "call": "Cuối năm khó về bờ — sang năm mới có cửa",
      "result": "hit",
      "note": "HIT: tuần 27–31/07 Index tăng 49 điểm (từ ~1.688) — ai bán theo hoảng loạn đầu tuần đã bán đúng đáy ngắn hạn, đúng như cảnh báo \"bán lúc này là chậm rồi, rủi ro hơn nắm giữ\"."
    },
    {
      "expert": "ck-5-phut",
      "date": "27/07",
      "asset": "CK Việt",
      "call": "DBC, IGC, BCM yếu hơn hẳn thị trường — đừng mua thêm",
      "result": "hit",
      "note": "HIT: tuần 27–31/07 Index tăng 49 điểm (từ ~1.688) — ai bán theo hoảng loạn đầu tuần đã bán đúng đáy ngắn hạn, đúng như cảnh báo \"bán lúc này là chậm rồi, rủi ro hơn nắm giữ\"."
    },
    {
      "expert": "ck-5-phut",
      "date": "28/07",
      "asset": "CK Việt",
      "call": "Chủ tịch đồng loạt đăng ký mua (VCI · KDH · PDR) = định giá hấp dẫn, nhưng KHÔNG phải tín hiệu đáy — \"đáy thì còn lâu\"",
      "result": "pending",
      "note": "Tô Hải (VCI) 31tr cp · Phó TGĐ KDH 20tr · ông Đạt (PDR) 20tr. Dữ liệu tham chiếu, vẫn xu hướng giảm."
    },
    {
      "expert": "ck-5-phut",
      "date": "06/07",
      "asset": "CK Việt",
      "call": "\"Tư duy ngược\" mua nhóm đầu tư công (CTD, HHV, LCG, FCN) theo số liệu GDP",
      "result": "miss",
      "note": "MISS — chính anh tự nhận trong tổng kết 31/07: \"nếu chỉ dựa vào kỳ vọng đầu tư công, tư duy ngược thì nó KHÔNG hiệu quả\". HHV 11 → 10; CTD 70–71 → 61. Bài học: vẫn phải có điểm mua, tín hiệu và thanh khoản."
    },
    {
      "expert": "ck-5-phut",
      "date": "01/07",
      "asset": "VNM",
      "call": "Không bắt đáy Vinamilk cây bán mạnh 30/6–1/7",
      "result": "miss",
      "note": "MISS phần ngắn hạn (tự thuật 31/07): hoá ra đó là cú RŨ HÀNG — VNM sau đó tăng ~11%, khoẻ hơn thị trường, có điểm mua 17/7 vùng 56–57. Quan điểm dài hạn vẫn giữ: VNM là hàng bão hoà, tăng trưởng kỳ vọng chỉ 3–4%/năm, không phải \"hàng phòng thủ\"."
    },
    {
      "expert": "ck-5-phut",
      "date": "08/07",
      "asset": "DPM",
      "call": "DPM tạo đáy sớm, phủ định được đà giảm của thị trường",
      "result": "hit",
      "note": "HIT (tự chấm 31/07): \"khá thành công\" — cây trần 8/7 vượt M20 vùng 23–23,5, đến hết tháng 7 giá vẫn giữ quanh vùng đó trong khi thị trường giảm mạnh. Lưu ý 3/8 chia cổ tức, có thể chỉnh nhẹ."
    },
    {
      "expert": "ck-5-phut",
      "date": "31/07",
      "asset": "CK Việt",
      "call": "Tháng 8 hồi phục dần nhưng CHẮC CHẮN không phải hồi chữ V",
      "result": "pending",
      "note": "Tuần 27–31/07 +49 điểm nhưng thiếu volume, thanh khoản 19.000 tỷ vẫn dưới trung bình."
    },
    {
      "expert": "ck-5-phut",
      "date": "31/07",
      "asset": "CK Việt",
      "call": "3 cây nến tăng tuần cuối KHÔNG phải \"ba chàng lính trắng\"",
      "result": "hit",
      "note": "Đúng. Đến 03/08 Index đã tăng 108 điểm trong 5 phiên nhưng thanh khoản KHÔNG tăng — chỉ một phiên duy nhất vượt 20.000 tỷ, riêng phiên 03/08 HOSE vẫn chưa đạt 20.000 tỷ. Đà tăng của FPT chủ yếu do khối ngoại mua 500 tỷ trong một phiên chứ không phải dòng tiền nội lan tỏa."
    },
    {
      "expert": "ck-5-phut",
      "date": "31/07",
      "asset": "DBC",
      "call": "Dabaco sau khởi tố sẽ giảm nhưng KHÔNG sàn như PNJ",
      "result": "pending",
      "note": "Bản chất vụ việc khác (tai nạn lao động vs pháp lý doanh nghiệp); \"khởi tố đúng quy trình\". Kiểm chứng phiên 3/8."
    },
    {
      "expert": "thai-pham",
      "date": "29/07",
      "asset": "CK Mỹ",
      "call": "Short AI chips (Dell, Marvell, AMD, MU, SanDisk) — chốt lời 1/2",
      "result": "hit",
      "note": "Bài đăng 10h38 PM 29/07: nhóm này giảm 8–11% ngay phiên sáng, ông mô tả \"vượt mong đợi\" và ra lệnh chốt một nửa. Kèo short bán dẫn/AI mở từ tuần trước."
    },
    {
      "expert": "thai-pham",
      "date": "28/07",
      "asset": "CK Việt",
      "call": "Hạ vùng chờ giải ngân xuống 1.400–1.500 (từ 1.500–1.600)",
      "result": "miss",
      "note": "Ông TỰ BỎ trong Tập 43 (05/08). Đây là mốc chờ giải ngân đã bị hạ ba lần (1.600 → 1.500 → 1.400) rồi cuối cùng bỏ hẳn mà chưa lần nào chạm tới."
    },
    {
      "expert": "thai-pham",
      "date": "31/07",
      "asset": "CK Mỹ",
      "call": "AI stocks: đợi 2–4 tuần rồi short lại 1/2 đã chốt",
      "result": "pending",
      "note": "Sau khi chốt 1/2 nhóm chips ngày 29/07, ông giữ kịch bản giảm tiếp và chỉ chờ giá short tốt hơn. Riêng nhóm Cyber giữ nguyên: \"Cyber kiên trì nhé\". Hạn kiểm chứng: giữa đến cuối tháng 8/2026."
    },
    {
      "expert": "thai-pham",
      "date": "31/07",
      "asset": "CK Mỹ",
      "call": "FTNT, PANW rồi cũng giảm như Apple — short khi hồi",
      "result": "pending",
      "note": "Bình luận ông tự đăng dưới bài đăng 31/07 (5 like). Kèm chỉ dẫn vào lệnh: \"mở mới đợi hồi lại rồi đánh tiếp\". Cùng luận điểm với câu trả lời về chỉ số: \"Nó như Intel trước đây trước khi rụng. Amd hay dell cũng vậy\"."
    },
    {
      "expert": "quang-dung",
      "date": "01/08",
      "asset": "HPG",
      "result": "pending",
      "call": "HPG giữ tăng trưởng 50% cả năm 2026; Q3–Q4 đạt 40–60%",
      "note": "Dựa vào sản lượng tăng (Dung Quất 2 chạy ≥75% công suất) và nền giá thép thấp. Quý 2/2026 đã đạt LNST 6.400 tỷ, +50,6%. Kiểm chứng khi báo cáo quý 3 công bố (tháng 10/2026)."
    },
    {
      "expert": "quang-dung",
      "date": "01/08",
      "asset": "HPG",
      "result": "hit",
      "call": "Trong 2026 sẽ có một quý HPG lãi sau thuế trên 6.000 tỷ",
      "note": "Kèo ông tự nhắc lại: nêu từ cuối 2025 khi lợi nhuận HPG mới 3.800 tỷ/quý. Quý 2/2026 đạt 6.400 tỷ — đúng."
    },
    {
      "expert": "quang-dung",
      "date": "04/07",
      "asset": "CK Việt",
      "result": "pending",
      "call": "Tháng 7 là điểm chuyển từ \"kiểm soát\" sang \"nới lỏng\"; ngân hàng–chứng khoán dẫn sóng nửa cuối năm",
      "note": "Căn cứ: tháng 6 là tháng nhiều văn bản chính sách nhất nửa đầu năm, thực thi từ 1/7. Đối chiếu thực tế: VN-Index tháng 7 giảm mạnh (tháng xấu nhất năm theo CK 5 phút) rồi hồi 49 điểm tuần cuối — chưa đủ kết luận."
    },
    {
      "expert": "quang-dung",
      "date": "20/06",
      "asset": "Ngân hàng",
      "result": "pending",
      "call": "Thông tư 22 nâng trần 30%→40% — nhóm ngân hàng tỉ lệ trên 25% và Big 4 hưởng lợi",
      "note": "Khảo sát 27 ngân hàng; 5/8 ngân hàng lớn nằm trên 25%. Big 4 (Agribank, VCB, CTG, BID) hưởng lợi thêm từ cơ chế tính 20% tiền gửi KBNN. Kiểm chứng khi thông tư ban hành chính thức và qua kết quả quý 3."
    },
    {
      "expert": "quang-dung",
      "date": "10/06",
      "asset": "BĐS",
      "result": "pending",
      "call": "Định giá BĐS đã về mức 2024 — NLG, DXG, KDH có bảng cân đối cải thiện thật",
      "note": "NLG tiền mặt 3.800 → gần 8.000 tỷ, nợ 7.000 → 5.400 tỷ; DXG tiền 1.300 → 5.600 tỷ; KDH quy mô 22.000 → 29.000 tỷ. Đối chiếu: Thái Phạm ngược lại cảnh báo VIC/VHM \"neo cao đáng sợ\" và DIG rủi ro call margin."
    },
    {
      "expert": "quang-dung",
      "date": "06/06",
      "asset": "Vĩ mô",
      "result": "hit",
      "call": "CPI 5,6% chủ yếu do giá năng lượng — chưa phải rủi ro chính, tỷ giá trong biên 2–3%",
      "note": "Đúng hướng: lạm phát đã hạ từ đỉnh 5,6% về 4,7% (số công bố đầu tháng 7), tiệm cận mục tiêu 4,5% của chính phủ — như chính ông cập nhật lại trong bài 04/07."
    },
    {
      "expert": "thai-pham",
      "date": "01/08",
      "asset": "CK Việt",
      "result": "miss",
      "call": "VN-Index sẽ phá ngưỡng 1.585; chỉ giải ngân khi về 1.400",
      "note": "Ông TỰ BỎ kịch bản này trong Tập 43 (05/08): \"thay vì đợi cái câu chuyện là nó về lại vùng 1.500 và 1.400 thì tôi bỏ kịch bản đó\". Index không những không phá 1.585 mà còn hồi 108 điểm rồi tiếp tục tăng. Chấm miss vì kèo đã bị rút, không phải vì thị trường bác bỏ dứt điểm."
    },
    {
      "expert": "thai-pham",
      "date": "01/08",
      "asset": "Vĩ mô",
      "result": "pending",
      "call": "Fed 99% không hạ lãi suất năm 2026; thị trường ép tăng 1–2 lần đến T1/2027",
      "note": "Căn cứ: UST 30 năm đóng tháng 7 ở 5,267% — kỷ lục ngang 2008; 10 năm vượt 4,7%. Ba thành viên FOMC công khai đòi tăng ngay trong tháng 7. Kiểm chứng tại các kỳ họp FOMC còn lại của 2026."
    },
    {
      "expert": "thai-pham",
      "date": "01/08",
      "asset": "Dầu",
      "result": "pending",
      "call": "Dầu đi ngang vùng 85–90 cho đến hết tháng 10",
      "note": "Tháng 7 tăng 24%. Luận điểm: Tehran cố tình duy trì căng thẳng để đẩy lợi suất và lạm phát Mỹ, ép Fed tăng lãi suất trước bầu cử giữa nhiệm kỳ."
    },
    {
      "expert": "thai-pham",
      "date": "01/08",
      "asset": "Vàng",
      "result": "miss",
      "call": "Phá 3.880 thì vàng về vùng 3.000 và trụ luôn ở đó",
      "note": "Ông TỰ BỎ trong Tập 43 (05/08): \"Không đợi cái giá vàng về 3.000 nữa. Chúng ta bỏ cái kịch bản đấy đi.\" Nay ông mua vàng ngay ở vùng hiện tại với cắt lỗ 3.900 và kỳ vọng về 4.000 — tức đảo hẳn hướng."
    },
    {
      "expert": "thai-pham",
      "date": "01/08",
      "asset": "CK Mỹ",
      "result": "pending",
      "call": "SpaceX về vùng 60–70 trong 6 tháng tới",
      "note": "Mới niêm yết 5% cổ phiếu, còn 85–90% mở khoá đến hết tháng 5/2027. Ông vẫn giữ vị thế short từ vùng 152. Kèo cũ mở từ 17/06."
    },
    {
      "expert": "thai-pham",
      "date": "01/08",
      "asset": "Nhật & Hàn",
      "result": "pending",
      "call": "Can thiệp yên là nhân tạo — bán yên ở 150, long lại vùng 147–150",
      "note": "BOJ chi ~72 tỷ đô, Bộ Tài chính Mỹ bán euro; lần đầu phối hợp sau 28 năm. Luận điểm: chênh lệch lãi suất Nhật 1% với Mỹ 3,75–4% chưa được giải quyết nên dài hạn trader thắng."
    },
    {
      "expert": "thai-pham",
      "date": "01/08",
      "asset": "Dầu",
      "result": "hit",
      "call": "Bắt đáy dầu vùng 70 — tự chấm: đúng chiều nhưng chốt quá sớm ở 85",
      "note": "Tự thuật trong Tập 42: khuyên hội viên bắt đáy vùng 70 và chốt ở 85, nhưng dầu chạy tiếp lên hơn 100. Nguyên văn: \"chúng ta chốt ở vùng 85, chúng ta không ăn được cái sóng lên 101 này đâu\". Ghi HIT cho hướng nhưng phải ghi rõ phần bỏ lỡ."
    },
    {
      "expert": "lcg-huy",
      "date": "02/08",
      "asset": "S&P 500",
      "call": "Mua S&P 500 giờ là đặt cược vào AI — phải đa dạng hóa theo địa lý",
      "result": "pending",
      "note": "Luận điểm cấu trúc, không có mốc giá và không có hạn chót nên chưa chấm được. Mốc kiểm chứng: tỷ trọng 10 công ty lớn nhất trong S&P 500 (nay 40%) và hiệu suất tương đối của thị trường ngoài Mỹ."
    },
    {
      "expert": "lcg-huy",
      "date": "12/07",
      "asset": "Quỹ mở Việt Nam",
      "call": "Nhóm quỹ mở dẫn đầu (DCDS, SSI, VCBF…) vượt ETF VN30 trên khung 5 năm",
      "result": "pending",
      "note": "Anh chiếu bảng so sánh 5 năm nhưng không đọc thành lời từng con số, nên bài này không ghi số. Chấm được khi có bảng hiệu suất 5 năm công bố chính thức."
    },
    {
      "expert": "lcg-huy",
      "result": "pending",
      "date": "19/08",
      "asset": "S&P 500 · VN30",
      "call": "DCA đều vào quỹ chỉ số bất kể đỉnh/đáy — dữ liệu Charon Swap: DCA (166k đô) gần bằng timing hoàn hảo (186k đô), 2003-2022",
      "note": "Video 19/08 — khoảng cách lớn nhất là giữa có/không đầu tư (142k đô), không phải giữa timing tốt/xấu."
    },
    {
      "expert": "thai-pham",
      "date": "04/08",
      "asset": "CK Việt",
      "call": "Phiên hồi 03/08 là quỹ kéo net chứ không phải tiền mới — chờ 182x–183x hạ về 40% cổ phiếu",
      "result": "miss",
      "note": "Bị chính ông thay thế sau ĐÚNG MỘT NGÀY. Bài đăng 04/08 bảo chờ Index lên 182x–183x rồi hạ cổ phiếu về 40%; Tập 43 ngày 05/08 bảo mua full cổ phiếu. Thị trường chưa kịp chạm 182x."
    },
    {
      "expert": "thai-pham",
      "date": "04/08",
      "asset": "FPT",
      "call": "Cú hồi FPT là do công ty phối hợp CTCK + KOLs + lệnh mồi quỹ ngoại — kéo lên 85–90 thì thoát toàn bộ",
      "result": "pending",
      "note": "Đây là suy đoán của ông (\"tôi đoán\"), không phải sự việc đã kiểm chứng. Chấm được ở mốc giá 85–90. Lưu ý CK 5 phút cùng ngày đưa dữ kiện gần: đà tăng FPT chủ yếu đến từ khối ngoại mua 500 tỷ phiên 03/08."
    },
    {
      "expert": "thai-pham",
      "date": "04/08",
      "asset": "CK Mỹ",
      "call": "Mỹ đang tạo upthrust phân phối Wyckoff — mua lại 1/2 vị thế short, US30 SL 54.005",
      "result": "pending",
      "note": "Có mốc cắt lỗ rõ nên chấm được: chạm 54.005 (hoặc 54.055 theo con số ông đưa cho hội viên khác) là miss."
    },
    {
      "expert": "ck-5-phut",
      "date": "03/08",
      "asset": "CK Việt",
      "call": "70–80% cổ phiếu không có điểm mua vì đập mặt vào MA20 — chưa vào up-trend",
      "result": "hit",
      "note": "Đúng trong khung thời gian của nó. Ngày 03–04/08 anh nói 70–80% cổ phiếu đập mặt vào MA20 nên không có điểm mua; thị trường sau đó đi ngang rồi giảm nhẹ hai phiên 05–06/08 trước khi mới có điểm mua thật vào 07/08. Ai mua đuổi ngày 03–04/08 không có lợi thế gì so với người đợi."
    },
    {
      "expert": "ck-5-phut",
      "date": "03/08",
      "asset": "TCB",
      "call": "Techcombank P/B 1,12 rẻ hơn MBB 1,29 — ưu tiên TCB trong nhóm bank tư nhân",
      "result": "pending",
      "note": "So sánh định lượng, chấm được bằng hiệu suất tương đối TCB vs MBB. Anh tự công bố đang nắm giữ TCB dài hạn."
    },
    {
      "expert": "thai-pham",
      "date": "05/08",
      "asset": "CK Việt",
      "call": "ĐẢO CHIỀU: mua full cổ phiếu — không còn gió ngược lãi suất/tỷ giá đến tháng 11",
      "result": "hit",
      "note": "Chấm ngày 24/08. Ông gọi mua full ngày 05/08 khi VN-Index quanh 1.786 rồi giữ suốt ba tuần qua giai đoạn thanh khoản thấp nhất năm, không bán gì. Sau tin FTSE, index đóng 1.789 phiên 24/08 với khối lượng gấp đôi nền. Phần thắng không nằm ở mức lãi — chính ông nói \"lãi chút chút hoặc không lỗ\" — mà ở chỗ giữ được vị thế để hưởng trọn phiên bùng nổ."
    },
    {
      "expert": "thai-pham",
      "date": "05/08",
      "asset": "Vàng",
      "call": "ĐẢO CHIỀU: mua vàng ngay (vật chất chênh 9–10 triệu, tài khoản cắt lỗ 3.900) — kỳ vọng về 4.000",
      "result": "hit",
      "note": "ĐÚNG, và đúng nhanh. Ông đảo chiều sang mua vàng ngày 05/08, call cho hội viên vùng 4.078–4.080 sáng 06/08, đến tối 07/08 vàng đã lên 4.300 — chính ông tổng kết trong tút \"quả call ae hội viên mua vàng 4078-4080 khá ổn, 10 điểm\". Không chạm cắt lỗ 3.900. Chênh vàng vật chất trong nước cũng co từ 9–10 xuống 4–5 triệu/lượng. Đối chiếu độc lập: Chứng khoán 5 phút ngày 07/08 xác nhận giá 4.300 và cũng chuyển sang khuyên mua."
    },
    {
      "expert": "thai-pham",
      "date": "05/08",
      "asset": "Phân bón",
      "call": "DCM/DPM mua mạnh, hai con chiếm 25% tài khoản — giữ tới tháng 3/2027",
      "result": "pending",
      "note": "Kèo có tỉ trọng VÀ khung thời gian rõ ràng nhất từ trước tới nay của ông, lại được xác nhận bằng tút \"nói đi đôi với làm… đây là tài khoản tôi mua để dành\". Chấm ở tháng 3/2027."
    },
    {
      "expert": "thai-pham",
      "date": "05/08",
      "asset": "CK Mỹ",
      "call": "S&P 500 lình xình hình sin lên 7.800–8.000 cuối năm, không tăng nước rút rồi gãy",
      "result": "pending",
      "note": "Lý do ông đưa: gãy sớm thì hỏng bầu cử giữa nhiệm kỳ, nên nhà cái kéo trụ Magnificent 7 để giữ chỉ số. Chấm được cuối năm 2026."
    },
    {
      "expert": "ck-5-phut",
      "date": "04/08",
      "asset": "CK Việt",
      "call": "Không đổi chiến lược — vẫn giữ 20–30% sức mua dù thị trường hồi tiếp",
      "result": "miss",
      "note": "Chính anh đổi sau ba ngày. Ngày 07/08 anh phá lệ livestream tối thứ sáu và mở đầu bằng \"các điểm mua nó mở rộng\", gọi đây là giai đoạn thứ hai. Chấm miss vì lời khẳng định \"chưa thay đổi chiến lược này đâu\" đã bị chính người nói rút lại — dù cần ghi nhận là anh không đảo ngược nguyên tắc, chỉ xác nhận điều kiện mua đã xuất hiện, và vẫn nhắc thanh khoản chưa tăng."
    },
    {
      "expert": "ck-5-phut",
      "date": "04/08",
      "asset": "SSI",
      "call": "SSI mua mới vùng này không cao — rẻ hơn TCX xét biên độ an toàn",
      "result": "pending",
      "note": "So sánh định lượng với TCX (vốn hóa 112.000 tỷ). Trùng hướng với Thái Phạm cùng tuần (mua SSI vùng 23–24) — hiếm khi hai người khớp nhau về một mã cụ thể."
    },
    {
      "expert": "thai-pham",
      "date": "06/08",
      "asset": "Vàng",
      "call": "Vàng lên ~6.000 đô trong 6–12 tháng, vượt đỉnh cũ 5.589",
      "result": "pending",
      "note": "Dựa trên năm luận điểm dài hạn: Fed không tăng lãi 2026, petrodollar xói mòn, ngân hàng trung ương gom vàng, nợ công Mỹ 39.500 tỷ với chi phí lãi 1.000 tỷ/năm, trật tự đa cực. Ông đi NGƯỢC số đông — nhiều tổ chức vừa hạ dự báo cuối năm từ 5.400 xuống ~4.500. Chấm được trong 6–12 tháng. CẬP NHẬT 08/08 (Tập 44): ông chi tiết hóa lộ trình — trước mắt về 4.600–4.700, tích lũy ở đó rồi mới vượt đỉnh cũ, khung 8–12 tháng. Ông cũng thừa nhận đã đặt lệnh chờ mua thêm ở 4.125 và 4.220 mà giá không về."
    },
    {
      "expert": "thai-pham",
      "date": "07/08",
      "asset": "Bitcoin",
      "call": "Mua lướt BTC 65.200, chốt lời 70.000–71.000, cắt lỗ 61.000",
      "result": "hit",
      "note": "Tự xác nhận trong tút 20/08: \"sau khi call mua ở 65 và chốt ở 69.7\". Chốt ở 69.700, thấp hơn một chút so với vùng mục tiêu 70.000–71.000 đã nêu, nhưng vẫn là lệnh có lãi và cắt lỗ 61.000 chưa lần nào bị chạm. Ghi theo tự thuật của ông."
    },
    {
      "expert": "thai-pham",
      "date": "06/08",
      "asset": "Fed",
      "call": "Fed không tăng lãi suất cả năm 2026 (kể cả tháng 9 và tháng 12), sẽ nới lỏng 2027",
      "result": "pending",
      "note": "Lập luận: Warsh \"nói cứng hành động mềm\", và chốt chặn cấu trúc là chi phí trả lãi 1.000 tỷ đô/năm đã bằng 1/5 tổng thu thuế — tăng lãi nữa thì lên 1/4. Chấm được ở cuộc họp 15–16/9."
    },
    {
      "expert": "ck-5-phut",
      "date": "07/08",
      "asset": "CK Việt",
      "call": "Giai đoạn hai — điểm mua mở rộng, nhưng thanh khoản vẫn chưa tăng",
      "result": "hit",
      "note": "Đúng và giữ được. Anh tự đặt mức chịu sai \"khả năng tuần sau hàng về oẳng hết\" — nhưng đến 10/08 anh xác nhận ngược lại: \"khoảng hơn 2 tuần sau khi thị trường dừng giảm, các điểm mua vẫn tiếp tục mở rộng ra… thường là khoanh điểm mua xong hôm sau là đỏ, nhưng hôm nay mấy con này vẫn xanh\". BID và BVH nêu ngày 07/08 vẫn giữ được sắc xanh."
    },
    {
      "expert": "ck-5-phut",
      "date": "07/08",
      "asset": "Vàng",
      "call": "Vàng trong nước quanh 140 khó giảm thêm — có thể giải ngân tuần sau",
      "result": "hit",
      "note": "Vàng thế giới vượt 4.500 đô trong tuần 34 — chính anh xác nhận ngày 20/08: \"giá vàng hôm nay là vượt 4500 đô rồi này… hôm trước đánh giá hợp lý đúng không mọi người\". Mốc break anh chỉ ra là ngày 10/08, đúng như khuyến nghị giải ngân tuần sau đó."
    },
    {
      "expert": "quang-dung",
      "date": "06/08",
      "asset": "Vĩ mô VN",
      "call": "Dầu 116→76 đô kéo lạm phát hạ nhiệt — hạ lãi suất hoặc tăng cung tiền nửa cuối 2026",
      "result": "pending",
      "note": "Cùng kết luận với Thái Phạm nhưng đi từ số liệu hàng hóa thay vì từ chính trị Mỹ. Điểm khác: anh để ngỏ khả năng trượt sang 2027, và cảnh báo quý 4 thường là chỗ xuất hiện biến cố đầu tiên."
    },
    {
      "expert": "quang-dung",
      "date": "06/08",
      "asset": "Thép",
      "call": "Cả ngành thép xấu, chỉ HPG tốt — hạ kỳ vọng lợi nhuận ngành từ 50% xuống 20–30%",
      "result": "pending",
      "note": "Đây là lần anh tự hạ kỳ vọng của chính mình về ngành mình từng gọi là tích sản. Chấm được ở kết quả kinh doanh quý 3."
    },
    {
      "expert": "azfin",
      "date": "07/08",
      "asset": "CK Việt",
      "call": "P/E thị trường 11,98 — bóc nhóm Vin còn 9,6, rẻ hơn 90% lịch sử",
      "result": "pending",
      "note": "Số liệu định giá kiểm chứng được. Kèm dữ liệu FiinGroup: LNST toàn thị trường quý 2 tăng 41,2% trên 1.057 doanh nghiệp chiếm 98,8% vốn hóa."
    },
    {
      "expert": "thai-pham",
      "date": "08/08",
      "asset": "Fed",
      "call": "Fed tăng cũng không được, hạ cũng không xong — không đổi lãi suất cả năm 2026",
      "result": "pending",
      "note": "Củng cố bằng dữ liệu việc làm Mỹ tháng 7 âm 23.000 (dự báo +80–83.000), và số liệu tháng 5–6 bị điều chỉnh giảm hơn 100.000 việc làm. Ông dẫn Polymarket: 62,5% khả năng giữ nguyên tại họp 15–16/9, xác suất tăng đã hạ từ gần 62% xuống 36,5%. Chấm được ở cuộc họp tháng 9."
    },
    {
      "expert": "thai-pham",
      "date": "08/08",
      "asset": "CK Mỹ",
      "call": "Lợi nhuận S&P 500 là ảo — bỏ Alphabet và Amazon thì chỉ còn +10,9%",
      "result": "pending",
      "note": "Alphabet EPS 9,11 đô so với dự 2,88 nhờ hạch toán lãi đầu tư SpaceX; Amazon EPS 5,75 so với dự 1,82 nhờ hạch toán lãi Anthropic chưa bán. Đây là con số kiểm chứng được bằng báo cáo tài chính, không phải dự đoán."
    },
    {
      "expert": "thai-pham",
      "date": "08/08",
      "asset": "Vàng",
      "call": "Vàng về 4.600–4.700 trước, tích lũy rồi mới vượt đỉnh trong 8–12 tháng",
      "result": "hit",
      "note": "Đúng phần đầu lộ trình. Vàng đã đi đúng hướng từ vùng mua 4.078–4.080 và ông đã CHỐT 1/2 lệnh long trong Tập 45 (15/08), giữ phần còn lại dài hạn. Ông chi tiết hóa tiếp: tiến về 4.600, có thể gặp khó tại 4.700 và rung lắc trong 4.700–4.800 vì đó là vùng kháng cự cũ. Phần \"vượt đỉnh trong 8–12 tháng\" vẫn chưa tới hạn nên chưa chấm."
    },
    {
      "expert": "ck-5-phut",
      "date": "12/08",
      "asset": "CK Việt",
      "call": "Thanh khoản thấp là NỀN MỚI, không phải dấu hiệu xấu — đừng đợi 20.000 tỷ quay lại",
      "result": "hit",
      "note": "Phiên 17/08 thanh khoản thấp nhất kể từ đầu 2026 — đúng như \"nền mới\" chứ không phải nhịp trũng tạm thời. Anh dành hẳn một video 17/08 để chỉ ra ba nguyên nhân cấu trúc (luật thuế hộ kinh doanh, siết tín dụng, đại dự án hút vốn) và bỏ luôn kỳ vọng hồi phục ngắn hạn."
    },
    {
      "expert": "ck-5-phut",
      "result": "pending",
      "date": "18/08",
      "asset": "CK Việt",
      "call": "FTSE Russell công bố rổ ~27 mã VN thứ Sáu (21/08) — KHÔNG nên mua theo rổ",
      "note": "Livestream 18/08 — quỹ tạo lập thị trường đã gom hàng từ trước."
    },
    {
      "expert": "ck-5-phut",
      "result": "pending",
      "date": "18/08",
      "asset": "TCB",
      "call": "Kỳ vọng đáy vùng 28–29 (đáy kép, PB 1,16 lần) — nắm giữ",
      "note": "Livestream 18/08, chưa vi phạm đáy tại thời điểm ghi nhận."
    },
    {
      "expert": "ck-5-phut",
      "result": "pending",
      "date": "18/08",
      "asset": "GAS",
      "call": "Breakout lần 2 trong 2 tuần (07/08 và 18/08) — mua được cả ngày",
      "note": "Video 18/08; lần đầu 07/08 không khớp được lệnh vì trần cứng."
    },
    {
      "expert": "quang-dung",
      "date": "10/08",
      "asset": "MBB",
      "call": "MBB P/B 1,2 là vùng thấp nhất ba năm — tăng trưởng 40% với nợ xấu top 5 thấp nhất",
      "result": "pending",
      "note": "Số liệu kiểm chứng được: NIM 1,04%/quý, nợ xấu 1,5%, tăng trưởng tín dụng top 3 ngành. Lưu ý Thái Phạm cùng tuần nói MBB KHÔNG nằm trong diện thoái vốn nhà nước — hai người nhìn hai thứ khác nhau về cùng một mã."
    },
    {
      "expert": "quang-dung",
      "date": "08/08",
      "asset": "TCB",
      "call": "TCB giá 28.000 so với sổ sách 24.417, nợ xấu 1% so với VPBank 3,3%",
      "result": "pending",
      "note": "Anh nói đang CHỜ giá về thấp hơn khoảng 7% chứ chưa mua ngay — khác với Thái Phạm từng nói \"Techcombank thì tôi không mua\". Chấm được bằng hiệu suất từ vùng giá này."
    },
    {
      "expert": "azfin",
      "date": "09/08",
      "asset": "Fed",
      "call": "TỪ CHỐI dự báo Fed — \"nằm ngoài khả năng đánh giá của mình\"",
      "result": "pending",
      "note": "Không phải một call mà là một lập trường, nhưng đáng ghi vào bảng vì nó đối lập trực tiếp với ba kênh còn lại. Thái Phạm xây cả chiến lược full hàng trên dự báo Fed không tăng lãi; AzFin nói thẳng chỉ quan tâm thứ tác động trực diện tới cơ bản doanh nghiệp và thứ mình đánh giá được. Chấm được gián tiếp: nếu dự báo Fed sai thì ai chịu thiệt nhiều hơn."
    },
    {
      "expert": "thai-pham",
      "date": "15/08",
      "asset": "CK Mỹ",
      "call": "S&P 500 lập đỉnh 7.816 nhưng không có khối lượng — vẫn giữ short 2/3 vị thế US500",
      "result": "pending",
      "note": "Lập luận: thị trường Mỹ đã hồi 23% từ cuối tháng 7 nên khó lên tiếp tới 8.000 ngay; các chỉ số tiệm cận đỉnh, điều chỉnh 10–12% là bình thường; Citadel cho thấy nhu cầu quyền chọn mua sát đỉnh 2016. Ông ưu tiên US500 hơn US30 và nói rõ \"tôi không tin thằng nào nó vọt lên lại đỉnh cũ\"."
    },
    {
      "expert": "thai-pham",
      "date": "15/08",
      "asset": "CK Mỹ",
      "call": "Nvidia cắt cam kết tài trợ OpenAI từ 250 tỷ xuống hơn 100 tỷ — tín hiệu cẩn trọng vốn",
      "result": "pending",
      "note": "Đây là dữ kiện kiểm chứng được chứ không phải dự đoán, và là vết nứt đầu tiên trong chính chuỗi cung vốn AI mà ông từng dùng để giải thích vì sao chỉ số Mỹ còn đứng được. Đối chiếu: Capex AI 2026–2027 được Goldman Sachs và JP Morgan dự báo 1.000–1.200 tỷ đô."
    },
    {
      "expert": "thai-pham",
      "date": "15/08",
      "asset": "CK Việt",
      "call": "VN-Index thực chất là đồ thị VHM — điểm số up-trend nhưng 73% mã downtrend",
      "result": "pending",
      "note": "Phiên giảm 36,55 điểm thì VIC đóng góp 12,4 và VHM 3,17 — hai mã chiếm khoảng 50% số điểm. Bỏ hai mã ra thì P/E ở biên dưới 11,86 (ngưỡng 11,68 theo hai độ lệch chuẩn). Chấm được bằng việc chỉ số có tách khỏi VHM hay không. ĐỐI CHIẾU: CK 5 phút cùng ngày 14/08 bóc cùng một kết luận từ hướng khác — áp lực bán phiên đó chủ yếu đến từ nhóm Vin."
    },
    {
      "expert": "thai-pham",
      "date": "15/08",
      "asset": "Dầu",
      "call": "Giá dầu ở vùng cao lâu, khó về 60–65 — chỉ hạ khi Dân chủ nắm cả hai viện",
      "result": "pending",
      "note": "Ông chỉ lại tin ngày 3–4/8 về thỏa thuận hòa bình với Iran là fake news đẩy S&P lên, và nay Mỹ chuẩn bị gói cô lập kinh tế chưa từng có với Iran ngày 17/8. Chấm được qua diễn biến giá dầu và kết quả bầu cử tháng 11."
    },
    {
      "expert": "thai-pham",
      "result": "pending",
      "date": "19/08",
      "asset": "CK Mỹ",
      "call": "Chứng khoán Mỹ sẽ điều chỉnh mạnh — lợi suất trái phiếu 30 năm phá 5,2%, PE 25-30x không còn hợp lý",
      "note": "Video công khai 19/08 — luận điểm debt buyback + repricing theo lợi suất phi rủi ro."
    },
    {
      "expert": "thai-pham",
      "result": "pending",
      "date": "19/08",
      "asset": "Vàng",
      "call": "Vàng lên tối thiểu 30% danh mục toàn cầu — mục tiêu chốt lời xa 5.300–5.600",
      "note": "Video 19/08, phản ứng tin debt buyback Bộ Tài chính Mỹ; vàng đã vọt lên 4.513 trong phiên."
    },
    {
      "expert": "thai-pham",
      "result": "pending",
      "date": "19/08",
      "asset": "Vàng",
      "call": "Mua bổ sung 1/3 tại 4.340, 1/3 nếu về 4.260, 1/3 nếu về 4.170",
      "note": "Bài đăng 7h35 19/08, dành cho hội viên nhỡ vùng mua 4.080–4.100 trước đó."
    },
    {
      "expert": "quang-dung",
      "date": "15/08",
      "asset": "Ngân hàng",
      "call": "Tín dụng ngành +18% nhưng trích lập chỉ +13,7% — LNST 89.296 tỷ, +25,4%",
      "result": "pending",
      "note": "Anh cảnh báo ngay chính con số này: có ngân hàng đẩy tín dụng tăng 37% mà trích lập chỉ tăng 13,7%, tức lợi nhuận một phần đến từ chỗ chưa trích đủ. So sánh tỷ lệ trích lập trên tổng thu: có nơi 27–28,2%, còn TCB chỉ 4,4%, VCB 1,9%, ACB khoảng 11%. Chấm được ở kết quả quý 3 và diễn biến nợ xấu."
    },
    {
      "expert": "quang-dung",
      "result": "pending",
      "date": "19/08",
      "asset": "FPT",
      "call": "Định giá ~10-11 năm hoàn vốn — rẻ so với tăng trưởng thực 18,2% sau khi bóc tách FPT Telecom",
      "note": "Video định giá 19/08 — khuyến nghị tích sản, không đoán đáy."
    },
    {
      "expert": "azfin",
      "date": "16/08",
      "asset": "Vinmetal",
      "call": "Con số 16 triệu tấn/năm là không đúng — giai đoạn đầu chỉ 2–3 triệu tấn",
      "result": "pending",
      "note": "Bác lại thông tin đang lan trên báo. Lập luận: 5 triệu tấn đã cần vốn đầu tư 70–80.000 tỷ. Chấm được khi dự án công bố công suất thực tế."
    }
  ],
  "actions": {
    "updated": "28/08/2026",
    "now": [
      {
        "asset": "Vàng",
        "dir": "ĐÃ THẢ HEDGE — để vị thế buy chạy tiếp",
        "sig": "up",
        "expertId": "thai-pham",
        "mkt": "us",
        "detail": "Chu trình đầy đủ trong ba ngày: 26/08 khóa hedge khi vàng chạm 4.700, 27/08 xác nhận \"hedged thành công\" khi giá lùi, 28/08 thả ra. \"Chốt short và để vị thế buy chạy. Vàng sẽ tiếp tục lên.\"",
        "level": "Giá vốn gốc 4.080 · mua lại/mua thêm ở 4.488–4.500"
      },
      {
        "asset": "BTC",
        "dir": "ĐÃ KHÓA HEDGE — mua 1 lot đối ứng vị thế short",
        "sig": "wait",
        "expertId": "thai-pham",
        "mkt": "us",
        "detail": "Phòng cú kéo giết short lợi dụng bài phát biểu của chủ tịch Fed Kevin Warsh đêm 29/08. Điều kiện thả ghi rõ: \"khi nào Warsh phát biểu xong, giá phản ánh tin thì ta thả ra.\"",
        "level": "Nếu test 68–69k thì mới vững để thành sóng lên"
      },
      {
        "asset": "Danh mục VN",
        "dir": "NẮM CHẶT — bank, chứng, sản xuất, phân bón",
        "sig": "up",
        "expertId": "thai-pham",
        "mkt": "vn",
        "detail": "\"Điểm số vẫn do VIC/VHM chi phối là chủ đạo nên xấu tốt gì do 2 mã đó. Kiên định với cổ phiếu tạo nền giá nhé.\" Trừ VNM đã chốt 1/2.",
        "level": "Không đổi tuần thứ năm"
      },
      {
        "asset": "SZC · PC1",
        "dir": "BỔ SUNG VÀO DANH MỤC LƯỚT",
        "sig": "up",
        "expertId": "thai-pham",
        "mkt": "vn",
        "detail": "Bất động sản khu công nghiệp, thêm vào cùng nhóm lướt sóng họ F và PNJ. Ông không đưa mốc giá nào cho hai mã này, và kèm điều kiện: \"ai đủ hàng rồi mà không muốn lướt thì thôi.\"",
        "level": "Không có điểm vào — mã lướt, không phải hàng nắm giữ"
      },
      {
        "asset": "TCB",
        "dir": "GIỮ — nhưng KHÔNG mua thêm theo tin",
        "sig": "wait",
        "expertId": "ck-5-phut",
        "mkt": "vn",
        "detail": "Hai đáy trung hạn đã hình thành từ tháng 3–4 và giai đoạn vừa rồi. \"Nếu nó thủng thì có thêm rủi ro mới, còn nếu không thủng thì cứ cầm giá 28, 29, 30 thoải mái — 30 là giá ngủ ngon rồi.\" Anh dự phóng có áp lực bán khi hàng T+ về.",
        "level": "Điểm mua thật: cây 10/08 hoặc mặc cả 30–31"
      },
      {
        "asset": "Nhóm Cyber",
        "dir": "MUA LẠI PHẦN ĐÃ CHỐT",
        "sig": "wait",
        "expertId": "thai-pham",
        "mkt": "us",
        "detail": "\"Mọi thứ đi đúng kế hoạch trừ Dell, và sự bật lại của nhóm Cyber. Cybers chốt 1 ít ở dưới thì vùng này tôi sẽ mua lại phần chốt đó. Net net đang bị lõm lại nhóm Cyber, các nhóm khác ổn.\" Gồm CRWD, PANW, FTNT.",
        "level": "Nhóm duy nhất đang lỗ trong danh mục quốc tế"
      },
      {
        "asset": "S&P 500 · US30",
        "dir": "HOLD SHORT KHÔNG ĐỔI",
        "sig": "down",
        "expertId": "thai-pham",
        "mkt": "us",
        "detail": "\"Tôi vẫn hold vị thế Short không đổi. Khi nào đổi tôi sẽ cập nhật. Cớ thì chẳng có cớ gì cả vì bản chất là nó yếu thì hold thôi.\" Áp cho cả Hàn và Nhật.",
        "level": "Chốt US500 ở 7.500 · xa hơn 7.000"
      },
      {
        "asset": "SSI · VCI · TCX",
        "dir": "CẦM CHẶT — trong rổ FTSE",
        "sig": "up",
        "expertId": "thai-pham",
        "mkt": "vn",
        "detail": "Quang Dũng cùng tuần đưa cách chọn khác hẳn: chia ngành theo mô hình kinh doanh, nhóm cho vay margin tăng trưởng đồng đều còn nhóm tự doanh lác đác.",
        "level": "Ngành: doanh thu +36% · LNST +52%"
      },
      {
        "asset": "DCM · DPM",
        "dir": "GIỮ — phân bón nằm trong nhóm nắm chặt",
        "sig": "up",
        "expertId": "thai-pham",
        "mkt": "vn",
        "detail": "Không đổi so với Tập 46: nền giá phẳng, tiền bắt đầu vào. CK 5 phút cùng hướng bằng lý do chu kỳ giá URE.",
        "level": "Mua nằm im"
      },
      {
        "asset": "FRT",
        "dir": "GIỮ — chưa có lý do bán",
        "sig": "up",
        "expertId": "ck-5-phut",
        "mkt": "vn",
        "detail": "\"Áp lực bán chưa có nhiều và nó mới tăng được một chút thôi. FRT tăng từ đáy đi lên mới có tầm 37%, là mức độ tăng rất bình thường của FRT theo lịch sử của nó.\"",
        "level": "MA20 chưa thủng"
      },
      {
        "asset": "Chứng chỉ quỹ",
        "dir": "MUA ĐỀU — vẫn là lúc",
        "sig": "up",
        "expertId": "ck-5-phut",
        "mkt": "vn",
        "detail": "Quan điểm giữ từ tuần trước. LCG Huy cùng tuần đưa khung cụ thể cho người mới: tuổi 33 khẩu vị an toàn thì 67% chứng khoán, 33% tài sản khác; ETF Việt Nam có VN30 và VN Diamond.",
        "level": "Phòng vệ rủi ro tốt nhất là giá vốn thấp"
      }
    ],
    "waiting": [
      {
        "asset": "BTC",
        "trigger": "Sau khi Warsh phát biểu xong đêm 29/08",
        "action": "Thả hedge",
        "sig": "wait",
        "expertId": "thai-pham",
        "mkt": "us",
        "note": "Điều kiện thả: giá đã phản ánh tin. Nếu BTC test được về 68–69k thì theo ông sẽ vững hơn để thành một sóng đi lên thật."
      },
      {
        "asset": "Vàng",
        "trigger": "Về 4.488–4.500",
        "action": "Mua lại / mua thêm",
        "sig": "wait",
        "expertId": "thai-pham",
        "mkt": "us",
        "note": "Dành cho ai lỡ nhịp vừa rồi, mua vàng vật chất hoặc tài khoản. Mốc rất cụ thể nên chấm được."
      },
      {
        "asset": "TCB",
        "trigger": "Về 30–31",
        "action": "Mặc cả mua trung dài hạn",
        "sig": "wait",
        "expertId": "ck-5-phut",
        "mkt": "vn",
        "note": "Điểm mua chuẩn nhất đã qua là cây ngày 10/08 khi vượt lại MA20. Ai không bắt được thì mặc cả quanh 30–31, \"mình đánh giá cũng khả quan\"."
      },
      {
        "asset": "PLX",
        "trigger": "Thủng MA20",
        "action": "Cắt điểm break",
        "sig": "wait",
        "expertId": "ck-5-phut",
        "mkt": "vn",
        "note": "\"Thực ra cũng không phải cắt lỗ, là hòa vốn thôi.\" Ai mua từ cây break trước đó thì vẫn đang lãi."
      },
      {
        "asset": "GAS",
        "trigger": "Sau lễ",
        "action": "Xem có tiếp tục tăng không",
        "sig": "wait",
        "expertId": "ck-5-phut",
        "mkt": "vn",
        "note": "Đang đi nền khoảng tuần rưỡi sau mấy cây break. Nghị quyết 40 xếp GAS vào nhóm nhà nước giữ trên 90% — hiện 95,8%."
      },
      {
        "asset": "FRT",
        "trigger": "Thủng MA20",
        "action": "Mới cần xem lại",
        "sig": "wait",
        "expertId": "ck-5-phut",
        "mkt": "vn",
        "note": "Vùng 140 vẫn là nơi có nhiều lệnh chốt lãi."
      },
      {
        "asset": "S&P 500",
        "trigger": "Hồi về ~7.750",
        "action": "Short thêm",
        "sig": "wait",
        "expertId": "thai-pham",
        "mkt": "us",
        "note": "Mốc từ Tập 46, chưa đổi."
      },
      {
        "asset": "SPCX",
        "trigger": "Hồi lên 140–146",
        "action": "Short thêm",
        "sig": "wait",
        "expertId": "thai-pham",
        "mkt": "us",
        "note": "Đã vào 2/3 vị thế."
      },
      {
        "asset": "MRNA",
        "trigger": "Vùng 150",
        "action": "Đặt lệnh short",
        "sig": "wait",
        "expertId": "thai-pham",
        "mkt": "us",
        "note": "Tăng 2,5 lần vì một trong chín thử nghiệm thành công."
      },
      {
        "asset": "NFLX",
        "trigger": "Lùi về vùng 77",
        "action": "Mua thêm",
        "sig": "wait",
        "expertId": "thai-pham",
        "mkt": "us",
        "note": "—"
      },
      {
        "asset": "DELL",
        "trigger": "Kéo lên 460",
        "action": "Short",
        "sig": "wait",
        "expertId": "thai-pham",
        "mkt": "us",
        "note": "Tút 28/08 ghi Dell là mã DUY NHẤT không đi đúng kế hoạch."
      },
      {
        "asset": "DBC · HPA",
        "trigger": "Một nhịp thị trường hồi lại",
        "action": "DBC về bờ; HPA thì cần lâu hơn",
        "sig": "wait",
        "expertId": "ck-5-phut",
        "mkt": "vn",
        "note": "HPA đã giảm khoảng 33% từ giá IPO ~41,9. \"Đối với em thì nó là cơ hội, nhưng sẽ mất nhiều thời gian.\""
      }
    ],
    "events": [
      {
        "date": "2026-08-29",
        "label": "Kevin Warsh phát biểu (đêm)",
        "note": "Chủ tịch Fed. Thái Phạm khóa hedge Bitcoin để phòng cú kéo giết short quanh tin này; thả ra sau khi giá phản ánh xong.",
        "sig": "warn",
        "expertId": "thai-pham",
        "mkt": "us"
      },
      {
        "date": "2026-09-01",
        "label": "Chính sách crypto Việt Nam hiệu lực",
        "note": "CK 5 phút bi quan về tiến độ hạ tầng: \"chưa thấy sàn nào chạy tử tế cả, chắc phải 2027–2028.\"",
        "sig": "wait",
        "expertId": "ck-5-phut",
        "mkt": "vn"
      },
      {
        "date": "2026-09-02",
        "label": "Nghỉ lễ Quốc khánh",
        "note": "CK 5 phút bác việc so sánh với nghỉ lễ năm ngoái: \"vị thế thị trường khác nhau hẳn — một chỗ ở vùng rõ là cao, chỗ này ở vùng rõ là thấp.\"",
        "sig": "wait",
        "expertId": "ck-5-phut",
        "mkt": "vn"
      },
      {
        "date": "2026-09-15",
        "label": "Cuộc họp Fed 15–16/9",
        "note": "Thái Phạm dự phóng PCE hạ nhiệt vừa đủ để Fed không tăng cũng không hạ.",
        "sig": "wait",
        "expertId": "thai-pham",
        "mkt": "us"
      },
      {
        "dateLabel": "Tháng 10",
        "label": "Anthropic niêm yết",
        "note": "Mốc bản lề: chứng khoán Mỹ cầm cự tới đây rồi mới điều chỉnh mạnh. Cũng là chất xúc tác cho lệnh mua VCX.",
        "sig": "warn",
        "expertId": "thai-pham",
        "mkt": "us"
      },
      {
        "dateLabel": "T9/2026 → T9/2027",
        "label": "FTSE giải ngân 1,3 tỷ đô vào 27 mã Việt",
        "note": "Hiệu lực trong 12 tháng. CK 5 phút quy đổi để hạ nhiệt: 80.000 tỷ đồng dự phóng, trong khi thanh khoản một phiên đã 15–18.000 tỷ.",
        "sig": "up",
        "expertId": "thai-pham",
        "mkt": "vn"
      },
      {
        "dateLabel": "Tháng 11",
        "label": "Bầu cử giữa nhiệm kỳ Mỹ",
        "note": "82% hạ viện và trên 51% thượng viện nghiêng về Dân chủ. Iran ghìm giá dầu cao tới mốc này.",
        "sig": "warn",
        "expertId": "thai-pham",
        "mkt": "us"
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
      "stance": "MUA NẰM IM — nền giá phẳng",
      "aliases": [
        "dcm",
        "dam ca mau"
      ],
      "oneLiner": "Một trong hai mã duy nhất Thái Phạm mua dài hạn lúc này — đã vào 70% vị thế.",
      "thesis": [
        {
          "title": "Vì sao là mã mua dài hạn số 1",
          "body": "Trong Tập 38 (18/07), khi được hỏi \"mua gì cho dài hạn\", Thái Phạm chỉ nêu đúng hai cái tên: Đạm Cà Mau và Đạm Phú Mỹ. Chiến lược: túc tắc mua ở vùng đáy, đã vào được 70% vị thế mục tiêu và \"cứ nằm im, bất chấp qua sóng gió\" — cầm ăn cổ tức trong lúc chờ chu kỳ mới. Kỷ luật phân bổ: nhóm đạm/phân tối đa ~30% danh mục, có tiền lại mua thêm nhưng không bao giờ mua hết một lần, vì \"mùa đông có ra sức bón phân cây cũng chẳng nảy mầm\".",
          "expertId": "thai-pham"
        },
        {
          "title": "Bối cảnh nhóm phân bón",
          "body": "Chứng khoán 5 phút (14/07) xác nhận cùng bức tranh từ góc nhìn khác: cả nhóm phân bón đã giảm ~30% từ đỉnh tháng 3, kể cả hàng cơ bản như DCM/DPM — không phải vì doanh nghiệp có vấn đề mà vì thị trường chung yếu và thanh khoản kiệt. Với người theo trường phái nắm giữ, đây chính là dạng \"cổ phiếu cơ bản ở mức giá chiết khấu\" đáng mua từng phần.",
          "expertId": "ck-5-phut"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "MUA NẰM IM — tiền bắt đầu vào",
          "sig": "up",
          "entry": "Nền giá phẳng",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "MUA — vùng chu kỳ thấp",
          "sig": "up",
          "entry": "Vùng hiện tại",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "20/08",
          "note": "Từ Livestream · 20/08 (20/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "ĐIỂM MUA KỸ THUẬT VẪN ĐẸP",
          "sig": "up",
          "entry": "Vùng hiện tại",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "18/08",
          "note": "Từ Tút hội viên · 18/08 (18/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "CẦM DÀI HẠN — ưu tiên hơn",
          "sig": "up",
          "entry": "—",
          "target": "Làm ăn tốt hơn DPM",
          "stop": "—",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "MUA — đánh spring",
          "sig": "up",
          "entry": "Vùng hiện tại",
          "target": "Cầm dài hạn",
          "stop": "—",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "MUA VÀ HOLD",
          "sig": "up",
          "entry": "\"Giá siêu hạt dẻ\" — không cần căn ke",
          "target": "Nắm dài hạn",
          "stop": "—",
          "status": "active",
          "date": "07/08",
          "note": "Từ Bài đăng · 06–07/08 (07/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "MUA — mẫu hình cờ tăng giá",
          "sig": "up",
          "entry": "Điểm break hôm nay",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "07/08",
          "note": "Từ Livestream · 07/08 (07/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "MUA MẠNH",
          "sig": "up",
          "entry": "Vùng hiện tại",
          "target": "Hai con phân bón chiếm 25% tài khoản",
          "stop": "—",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Mua & nắm giữ",
          "sig": "up",
          "entry": "Vùng hiện tại",
          "target": "Sóng lên 30–35% là bình thường",
          "stop": "—",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Giữ chặt",
          "sig": "up",
          "entry": "Tỉ trọng rất lớn, không bán",
          "target": "Dài hạn — căn bản nền nông nghiệp",
          "stop": "—",
          "status": "active",
          "date": "26/07",
          "note": "Từ Tập 40 · Tuần 30 (26/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Giữ/tích lũy",
          "sig": "up",
          "entry": "Vùng đáy — giá dầu cao lợi biên",
          "target": "Dài hạn, ăn cổ tức",
          "stop": "—",
          "status": "active",
          "date": "23/07",
          "note": "Từ Tập 39 · Tuần 29 (23/07)."
        },
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
      "cautionNote": "Rủi ro chính là thời gian: thị trường \"mùa đông\", có thể đi ngang lâu; không dùng margin thì áp lực thấp.",
      "industry": "Hóa chất & Phân bón",
      "basket": "dai-han",
      "tradeMode": "spot",
      "region": "vn",
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "MUA NẰM IM — tiền bắt đầu vào",
          "sig": "up",
          "date": "23/08",
          "line": "Từ Tập 46 (Hội viên) · 23/08 (23/08). Điểm vào: Nền giá phẳng."
        },
        {
          "expertId": "ck-5-phut",
          "stance": "MUA — vùng chu kỳ thấp",
          "sig": "up",
          "date": "20/08",
          "line": "Từ Livestream · 20/08 (20/08). Điểm vào: Vùng hiện tại."
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
      "stance": "MUA NẰM IM — giá URE vùng đáy chu kỳ",
      "aliases": [
        "dpm",
        "dam phu my"
      ],
      "oneLiner": "Cặp đôi với DCM trong danh mục dài hạn của Thái Phạm; CK 5 phút lấy làm ví dụ mẫu về mua từng phần.",
      "thesis": [
        {
          "title": "Cập nhật 31/07: mã hiếm hoi tạo đáy sớm hơn thị trường",
          "body": "Trong buổi tổng kết tháng 7, CK 5 phút chấm DPM là một trong số ít nhận định ĐÚNG của tháng: cây trần ngày 8/7 vượt M20 sau giai đoạn dài với thanh khoản vào tốt (vùng 23–23,5), và đến hết tháng 7 giá vẫn giữ quanh vùng đó trong khi thị trường giảm mạnh — \"nó cố gắng phủ định lại áp lực bán của thị trường, và em thấy khá thành công\". Bài học rút ra: trong giai đoạn xấu vẫn tìm được cổ phiếu tạo nền tốt để cân nhắc, miễn là yếu tố cơ bản đủ hấp dẫn và mức chiết khấu từ đỉnh đủ sâu. Lưu ý ngắn hạn: 3/8 là ngày chia cổ tức, có thể chỉnh nhẹ sau chia giống DCM.",
          "expertId": "ck-5-phut"
        },
        {
          "title": "Hai chuyên gia, một hướng nhìn",
          "body": "Thái Phạm (Tập 38): DPM cùng DCM là hai mã duy nhất ông tích lũy dài hạn lúc này — đã mua 70% vị thế, giữ ăn cổ tức, tối đa ~30% danh mục. Có lịch trả cổ tức thì \"cứ cầm, vùng này bán làm gì — cầm dài nhiều khi lời cả tiền cổ tức\".",
          "expertId": "thai-pham"
        },
        {
          "title": "Bài học mua từng phần (CK 5 phút, 14/07)",
          "body": "DPM được lấy làm ví dụ mẫu cho phương pháp: cổ phiếu cơ bản giảm ~30% từ đỉnh (từ vùng 30 về ~24) là có thể bắt đầu vào lệnh TỪNG PHẦN — lệnh 1, lệnh 2, nếu giá điều chỉnh tiếp vẫn an tâm đợi mua lệnh 3, lệnh 4. Điều tối kỵ là mua hết một lần rồi \"vững tay chèo\" từ đỉnh: mua DPM trên đỉnh 30 rồi gồng về 24 không phải là nắm giữ dài hạn đúng nghĩa — phải mua được ở giá chiết khấu thì mới giữ được lâu.",
          "expertId": "ck-5-phut"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "MUA NẰM IM — tiền bắt đầu vào",
          "sig": "up",
          "entry": "Nền giá phẳng",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "MUA — đã vào 30% lệnh",
          "sig": "up",
          "entry": "Vùng hiện tại",
          "target": "Chờ giá URE quay lại chu kỳ cao",
          "stop": "—",
          "status": "active",
          "date": "20/08",
          "note": "Từ Livestream · 20/08 (20/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "ĐIỂM MUA KỸ THUẬT VẪN ĐẸP",
          "sig": "up",
          "entry": "Vùng hiện tại",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "18/08",
          "note": "Từ Tút hội viên · 18/08 (18/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "CẦM DÀI HẠN — mẫu hình đẹp hơn",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "MUA — mô hình hai đáy",
          "sig": "up",
          "entry": "Vùng hiện tại",
          "target": "\"Có khi sau tuần nó trần\"",
          "stop": "—",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "MUA VÀ HOLD",
          "sig": "up",
          "entry": "\"Giá siêu hạt dẻ\" — không cần căn ke",
          "target": "Nắm dài hạn",
          "stop": "—",
          "status": "active",
          "date": "07/08",
          "note": "Từ Bài đăng · 06–07/08 (07/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "MUA MẠNH",
          "sig": "up",
          "entry": "Vùng hiện tại — KQKD quý 2 rất tốt",
          "target": "Hai con phân bón chiếm 25% tài khoản",
          "stop": "—",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "GIỮ / CÂN NHẮC MUA",
          "sig": "up",
          "entry": "Nền 23–23,5 (cây trần 8/7 vượt M20)",
          "target": "Giữ được nền khi thị trường giảm",
          "stop": "3/8 chia cổ tức — có thể chỉnh nhẹ",
          "status": "active",
          "date": "31/07",
          "note": "Được chấm là call ĐÚNG của tháng 7."
        },
        {
          "expertId": "thai-pham",
          "dir": "Mua & nắm giữ",
          "sig": "up",
          "entry": "Vùng hiện tại",
          "target": "Sóng lên 30–35% là bình thường",
          "stop": "—",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Giữ chặt",
          "sig": "up",
          "entry": "Tỉ trọng rất lớn, không bán",
          "target": "Dài hạn — căn bản nền nông nghiệp",
          "stop": "—",
          "status": "active",
          "date": "26/07",
          "note": "Từ Tập 40 · Tuần 30 (26/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Giữ/tích lũy",
          "sig": "up",
          "entry": "Vùng đáy — giá dầu cao lợi biên",
          "target": "Dài hạn, ăn cổ tức",
          "stop": "—",
          "status": "active",
          "date": "23/07",
          "note": "Từ Tập 39 · Tuần 29 (23/07)."
        },
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
      "cautionNote": "Thị trường chung yếu, giá có thể lình xình thêm; kỷ luật chia 3–4 lệnh thay cho dừng lỗ.",
      "industry": "Hóa chất & Phân bón",
      "basket": "dai-han",
      "tradeMode": "spot",
      "region": "vn",
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "MUA NẰM IM — tiền bắt đầu vào",
          "sig": "up",
          "date": "23/08",
          "line": "Từ Tập 46 (Hội viên) · 23/08 (23/08). Điểm vào: Nền giá phẳng."
        },
        {
          "expertId": "ck-5-phut",
          "stance": "MUA — đã vào 30% lệnh",
          "sig": "up",
          "date": "20/08",
          "line": "Từ Livestream · 20/08 (20/08). Điểm vào: Vùng hiện tại. Mục tiêu: Chờ giá URE quay lại chu kỳ cao."
        }
      ]
    },
    {
      "key": "bid",
      "symbol": "BID",
      "name": "BIDV",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:BID",
      "sig": "up",
      "stance": "CẦM CHẶT — trong rổ FTSE",
      "aliases": [
        "bid",
        "bidv",
        "bdv"
      ],
      "oneLiner": "BID (và VCB) đã về vùng thấp hơn cả đáy tháng 4/2025 — \"bank rẻ quá\", cầm 5 năm sẽ có lời ở vùng thấp.",
      "thesis": [
        {
          "title": "Vì sao chọn BID thay VCB",
          "body": "Tập 38 (18/07): sau khi rút danh mục về 40% cổ phiếu, nhóm ngân hàng chỉ còn lại BIDV. Thái Phạm thừa nhận \"về chỉ số thì Vietcombank đẹp hơn\" nhưng ông kỳ vọng BIDV sẽ có những quyết sách mới — một lựa chọn thiên về câu chuyện chính sách hơn là kỹ thuật. BID nằm trong nhóm giữ cùng BVBank, SCS, VNM và một phần TCX, trong bối cảnh chung là phòng thủ tiền 60/cổ 40.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "CẦM CHẶT",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "CHỜ VƯỢT 37 VỚI THANH KHOẢN",
          "sig": "wait",
          "entry": "34–35 không rủi ro lắm",
          "target": "Vượt 37",
          "stop": "—",
          "status": "waiting",
          "date": "20/08",
          "note": "Từ Livestream · 20/08 (20/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "CHỜ XEM CÓ ĐÁY HAI",
          "sig": "wait",
          "entry": "35–36 sau chia",
          "target": "—",
          "stop": "Vùng 38 trước chia",
          "status": "waiting",
          "date": "17/08",
          "note": "Từ Livestream · 17/08 (17/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "Điểm mua vẫn giữ được",
          "sig": "up",
          "entry": "Từ phiên 07/08",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "10/08",
          "note": "Từ Livestream · 10/08 (10/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "MUA — \"giá này đẹp quá\"",
          "sig": "up",
          "entry": "Vốn hóa nhỏ hơn nửa VCB nên dễ chạy",
          "target": "Hưởng lợi chỉ thị sắp xếp vốn nhà nước",
          "stop": "—",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Khá lên nhờ thoái vốn nhà nước",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "07/08",
          "note": "Từ Bài đăng · 06–07/08 (07/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "MUA — mẫu hình cờ tăng giá",
          "sig": "up",
          "entry": "Điểm break hôm nay",
          "target": "—",
          "stop": "Game thoái vốn có thể ngắn",
          "status": "active",
          "date": "07/08",
          "note": "Từ Livestream · 07/08 (07/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Đợi điều chỉnh thì mua",
          "sig": "up",
          "entry": "Chờ nhịp chỉnh",
          "target": "—",
          "stop": "—",
          "status": "waiting",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Cầm luôn",
          "sig": "up",
          "entry": "Đã về hòa vốn",
          "target": "Nhóm mua thêm nhẹ nếu cầm trên 60% tiền",
          "stop": "—",
          "status": "active",
          "date": "04/08",
          "note": "Từ Bài đăng · 04/08 (04/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "Chưa vội mua",
          "sig": "wait",
          "entry": "Đợi đi ngang quanh 38 rồi bật",
          "target": "—",
          "stop": "38 nay là kháng cự",
          "status": "active",
          "date": "03/08",
          "note": "Từ Livestream · 03/08 (03/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "CHỜ ĐÁY 2",
          "sig": "wait",
          "entry": "Điểm mua hiện tại \"không đẹp\" (mua đuổi)",
          "target": "Hưởng lợi NHNN nới thêm",
          "stop": "CTG cụt đầu nhiều nhất, dưới M20",
          "status": "waiting",
          "date": "31/07",
          "note": "Cả 3 bank quốc doanh chạy giá 31/07 theo tin NHNN; nắm giữ dài hạn thì chờ hai đáy hoặc kiểm định lại đáy."
        },
        {
          "expertId": "thai-pham",
          "dir": "Giữ",
          "sig": "up",
          "entry": "Không mua mới",
          "target": "VCB vùng rất rẻ (mẫu Spring)",
          "stop": "BID cực kỳ thấp — không bán",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
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
        },
        {
          "expertId": "quang-dung",
          "dir": "HƯỞNG LỢI THÔNG TƯ 22",
          "sig": "up",
          "entry": "—",
          "target": "Big 4 hưởng lợi cơ chế 20% tiền gửi KBNN",
          "stop": "—",
          "status": "active",
          "date": "20/06",
          "note": "Cùng Agribank, VCB, CTG trong nhóm hưởng lợi khi nâng trần 30% → 40%."
        }
      ],
      "potential": 4,
      "caution": 2,
      "potentialNote": "Định giá về dưới đáy T4/2025 — rẻ hiếm có; ngân hàng quốc doanh \"không thể phá sản được\".",
      "cautionNote": "Vẫn chưa giải ngân mạnh vì đợi VN-Index về 1.600; cần kiên nhẫn tính bằng năm.",
      "industry": "Ngân hàng",
      "basket": "dai-han",
      "tradeMode": "spot",
      "region": "vn",
      "debate": "Điểm đồng thuận hiếm có: cả bốn kênh đều nghiêng về BID. Khác nhau ở cách vào — CK 5 phút chờ đáy 2, Thái Phạm ưu tiên mua ngay vì \"bank rẻ quá\", Quang Dũng thì đặt cược vào cơ chế Thông tư 22 chứ không vào mức giá.",
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "CẦM CHẶT",
          "sig": "up",
          "date": "23/08",
          "line": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "ck-5-phut",
          "stance": "CHỜ VƯỢT 37 VỚI THANH KHOẢN",
          "sig": "wait",
          "date": "20/08",
          "line": "Từ Livestream · 20/08 (20/08). Điểm vào: 34–35 không rủi ro lắm. Mục tiêu: Vượt 37."
        },
        {
          "expertId": "quang-dung",
          "stance": "HƯỞNG LỢI THÔNG TƯ 22",
          "sig": "up",
          "date": "20/06",
          "line": "Cùng Agribank, VCB, CTG trong nhóm hưởng lợi khi nâng trần 30% → 40%. Mục tiêu: Big 4 hưởng lợi cơ chế 20% tiền gửi KBNN."
        }
      ]
    },
    {
      "key": "bvb",
      "symbol": "BVBank",
      "name": "BVBank (chào sàn 21/07)",
      "group": "Chứng khoán Việt Nam",
      "tv": "",
      "sig": "up",
      "stance": "GIỮ — THEO DÕI CHÀO SÀN",
      "aliases": [
        "bvbank",
        "bvb"
      ],
      "oneLiner": "Chào sàn 21/07 giá tham chiếu 13.1 — Thái Phạm giữ trong danh mục 40%.",
      "thesis": [
        {
          "title": "Sự kiện chào sàn",
          "body": "Theo Tập 38, BVBank chào sàn ngày thứ Hai 21/07 với giá 13.1. Đây là một trong số ít mã còn lại trong danh mục cổ phiếu 40% của Thái Phạm (cùng BID, SCS, VNM, một phần TCX). Ông kỳ vọng phiên mở cửa thuận lợi (\"hy vọng là tốt\") — cần theo dõi diễn biến giá những phiên đầu để đánh giá lại.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "ƯU TIÊN nhóm bank",
          "sig": "up",
          "entry": "Vùng hiện tại",
          "target": "Tin đồn LPBank sáp nhập — nếu đúng là tin tốt",
          "stop": "Mới là tin đồn",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Cầm luôn",
          "sig": "up",
          "entry": "Đã về hòa vốn",
          "target": "Nhóm mua thêm nhẹ nếu cầm trên 60% tiền",
          "stop": "—",
          "status": "active",
          "date": "04/08",
          "note": "Từ Bài đăng · 04/08 (04/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Giữ",
          "sig": "wait",
          "entry": "Không mua thêm",
          "target": "VNM mã duy nhất có lời; SCS lỗ 12% đã ăn cổ tức",
          "stop": "—",
          "status": "active",
          "date": "26/07",
          "note": "Từ Tập 40 · Tuần 30 (26/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Giữ",
          "sig": "wait",
          "entry": "Không mua thêm",
          "target": "Đợi index 1.500",
          "stop": "—",
          "status": "active",
          "date": "23/07",
          "note": "Từ Tập 39 · Tuần 29 (23/07)."
        },
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
      "cautionNote": "Chưa có lịch sử giao dịch trên sàn; cần quan sát các phiên đầu, thanh khoản chưa rõ.",
      "industry": "Ngân hàng",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "region": "vn"
    },
    {
      "key": "vnm",
      "symbol": "VNM",
      "name": "Vinamilk",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:VNM",
      "sig": "down",
      "stance": "ĐÃ CHỐT 1/2 — lãi ~13%",
      "aliases": [
        "vnm",
        "vinamilk",
        "vamil"
      ],
      "oneLiner": "Nâng hạng: Thái Phạm nói thẳng \"vùng giá rất rẻ, mua vào sẽ mang lại lợi nhuận dài hạn\" — mã duy nhất trong danh mục có lời tuần qua.",
      "thesis": [
        {
          "title": "Góc nhìn ngược của CK 5 phút (31/07)",
          "body": "CK 5 phút tự nhận nhận định \"không bắt đáy VNM\" đầu tháng 7 là chưa chuẩn về ngắn hạn: cây bán mạnh 30/6–1/7 hoá ra là cú RŨ HÀNG, sau đó VNM tăng ~11% và khoẻ hơn thị trường, có điểm mua ngày 17/7 quanh vùng 56–57. Tuy nhiên quan điểm dài hạn của anh vẫn ngược với Thái Phạm: VNM KHÔNG phải \"hàng phòng thủ\" mà là hàng đã bão hoà, tăng trưởng kỳ vọng chỉ 3–4%/năm; lợi thế duy nhất là giá đã gần đáy nên khó giảm sâu thêm — ví von \"nhảy từ tầng 1 xuống thì cũng chỉ rơi xuống thềm nhà\".",
          "expertId": "ck-5-phut"
        },
        {
          "title": "Vị thế và kế hoạch chốt",
          "body": "Thái Phạm túc tắc mua VNM quanh vùng 56 và hiện đã có lời nhẹ. Tỷ trọng nhỏ (~3%) nên \"bán cũng chẳng biết bán để làm gì\" — kế hoạch là đợi lãi khoảng 5–7%, tức bằng lãi suất tiết kiệm một năm, thì chốt. Một vị thế mang tính phòng thủ đúng chất mùa đông: mục tiêu thấp, rủi ro thấp.",
          "expertId": "thai-pham"
        },
        {
          "title": "Vai trò trong chỉ số",
          "body": "Đáng chú ý: theo Tập 38, VNM cuối tuần trước \"được dùng để điều khiển chỉ số\" — nhắc lại đặc thù giai đoạn này là điểm số VN-Index bị chi phối bởi vài mã lớn, nên diễn biến giá VNM ngắn hạn không hẳn phản ánh cung cầu thật.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "ĐÃ CHỐT LỜI 1/2 — lãi ~13%",
          "sig": "down",
          "entry": "—",
          "target": "—",
          "stop": "Không nằm trong rổ FTSE",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "CHỐT LỜI 1/2 — giữ phần còn lại",
          "sig": "down",
          "entry": "—",
          "target": "—",
          "stop": "Doanh số Q3–Q4 dự kiến kém",
          "status": "waiting",
          "date": "21/08",
          "note": "Từ Tút hội viên · 21/08 sáng (21/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "KHÔNG MUA — target không đủ",
          "sig": "warn",
          "entry": "—",
          "target": "Cản 68–70",
          "stop": "—",
          "status": "active",
          "date": "20/08",
          "note": "Từ Livestream · 20/08 (20/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "CÓ HÀNG THÌ GIỮ — không phải điểm mua",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "Cụt đầu 6 phiên liên tiếp",
          "status": "active",
          "date": "17/08",
          "note": "Từ Livestream · 17/08 (17/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "CẦM — nhà nước còn 36%",
          "sig": "up",
          "entry": "Đã mua từ vùng thấp, lời ~5%",
          "target": "Thời điểm đẹp nhất để nhà nước thoái",
          "stop": "—",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Khá lên nhờ thoái vốn nhà nước",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "07/08",
          "note": "Từ Bài đăng · 06–07/08 (07/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "KHÔNG khuyến nghị",
          "sig": "warn",
          "entry": "Ichimoku đẹp nhưng đánh theo tin cổ tức",
          "target": "—",
          "stop": "\"Cũng không bền\"",
          "status": "active",
          "date": "07/08",
          "note": "Từ Livestream · 07/08 (07/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "KHÔNG KỲ VỌNG DÀI HẠN",
          "sig": "wait",
          "entry": "Có điểm mua 17/7 vùng 56–57",
          "target": "Đã tăng ~11% từ đáy đầu tháng",
          "stop": "Tăng trưởng chỉ 3–4%/năm",
          "status": "active",
          "date": "31/07",
          "note": "Ngược quan điểm MUA dài hạn của Thái Phạm."
        },
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
      "cautionNote": "Không còn tăng trưởng mạnh; ông cảnh báo mua ở vùng giá cao thì vẫn thua lỗ — chỉ mua ở vùng rẻ này.",
      "industry": "Tiêu dùng & Sữa",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "region": "vn",
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "ĐÃ CHỐT LỜI 1/2 — lãi ~13%",
          "sig": "down",
          "date": "23/08",
          "line": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "ck-5-phut",
          "stance": "KHÔNG MUA — target không đủ",
          "sig": "warn",
          "date": "20/08",
          "line": "Từ Livestream · 20/08 (20/08). Mục tiêu: Cản 68–70."
        }
      ]
    },
    {
      "key": "scs",
      "symbol": "SCS",
      "name": "Saigon Cargo Service",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:SCS",
      "sig": "up",
      "stance": "NẰM IM",
      "aliases": [
        "scs",
        "saigon cargo"
      ],
      "oneLiner": "Đang lỗ ~7–8% nhưng không margin nên \"thoải mái\" — giữ vì lợi thế cạnh tranh và cổ tức.",
      "thesis": [
        {
          "title": "Giữ qua vùng lỗ bằng cổ tức",
          "body": "Thái Phạm đang lỗ khoảng 7–8% ở SCS nhưng hoàn toàn thoải mái vì không dùng margin: \"vùng này thì tôi ăn cổ tức và tôi vẫn tin vào lợi thế cạnh tranh của mã này\". Giới hạn tỷ trọng khi được hỏi có nên cầm lâu dài: có thể cầm dài nhưng chỉ nên chiếm tối đa 20–25% tài khoản.",
          "expertId": "thai-pham"
        },
        {
          "title": "Rủi ro cần theo dõi",
          "body": "Bối cảnh Trung Đông leo thang không thuận lợi cho mảng hàng không/cargo (ông nhắc đến ảnh hưởng ở cảng hàng không Qatar) — \"thời của cho, mệt mỏi\". Đây là biến số chính cần quan sát trong các tuần tới cùng diễn biến giá cước.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "NẰM IM",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "GIỮ",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "21/08",
          "note": "Từ Tút hội viên · 21/08 sáng (21/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "CẦM — đánh spring",
          "sig": "up",
          "entry": "—",
          "target": "Trung Đông ổn định trở lại",
          "stop": "—",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "GIỮ — \"cực phẩm rồi\"",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "07/08",
          "note": "Từ Bài đăng · 06–07/08 (07/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Giữ",
          "sig": "wait",
          "entry": "Không mua thêm",
          "target": "VNM mã duy nhất có lời; SCS lỗ 12% đã ăn cổ tức",
          "stop": "—",
          "status": "active",
          "date": "26/07",
          "note": "Từ Tập 40 · Tuần 30 (26/07)."
        },
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
      "cautionNote": "Đang lỗ ~7–8%; Trung Đông leo thang bất lợi cho vận tải hàng không; trần 20–25% tài khoản.",
      "industry": "Logistics & Cảng hàng không",
      "basket": "dai-han",
      "tradeMode": "spot",
      "region": "vn"
    },
    {
      "key": "tcx",
      "symbol": "TCX",
      "name": "TCBS (Chứng khoán Kỹ Thương)",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:TCX",
      "sig": "up",
      "stance": "GIỮ MỘT PHẦN — ĐÃ CHỐT BỚT",
      "aliases": [
        "tcx",
        "tcbs"
      ],
      "oneLiner": "Đã chốt bớt tuần 28; phần còn lại nằm trong danh mục 40% phòng thủ.",
      "thesis": [
        {
          "title": "Từ \"tín hiệu sức sống\" đến chốt bớt",
          "body": "Giữa tháng 6, TCX từng được Thái Phạm nhắc đến như nhóm có \"tín hiệu sức sống đầu tiên\" của thị trường. Nhưng khi đổi thesis sang phòng thủ (Tập 37–38), ông đã chốt bớt một phần TCX, chỉ giữ lại tỷ trọng nhỏ trong danh mục cổ phiếu 40%. Nhóm chứng khoán nói chung ông đã ngừng lướt: \"vào đụng -6% cắt chạy — thị trường này khó đánh lắm\".",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "GIỮ và bổ sung thêm",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Cầm nguyên",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Giữ",
          "sig": "wait",
          "entry": "Không mua thêm",
          "target": "VNM mã duy nhất có lời; SCS lỗ 12% đã ăn cổ tức",
          "stop": "—",
          "status": "active",
          "date": "26/07",
          "note": "Từ Tập 40 · Tuần 30 (26/07)."
        },
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
      "cautionNote": "Chính chủ đã chốt bớt; ngắn hạn nhóm CK \"khó đánh\", không lướt thêm.",
      "industry": "Chứng khoán (CTCK)",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "region": "vn"
    },
    {
      "key": "tcb",
      "symbol": "TCB",
      "name": "Techcombank",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:TCB",
      "sig": "warn",
      "stance": "CHIA RẼ — cầm được cây trần (TP) vs ĐỪNG MUA THEO TIN (5P)",
      "aliases": [
        "tcb",
        "techcombank",
        "tcombank"
      ],
      "oneLiner": "Thái Phạm: đợi TCB về vùng 22 (mức tháng 4/2025) mới mua — ngân hàng cấp vốn cho Vin Group và Masan.",
      "thesis": [
        {
          "title": "Tín hiệu kỹ thuật",
          "body": "Chứng khoán 5 phút (13/07) xếp TCB cùng SSI vào nhóm hiếm hoi các cổ phiếu cơ bản \"đang cố gắng tạo đáy\" trong khi mã khác như HPG còn thủng đáy. Phiên 13/07 TCB có cây nến rút chân \"khá ok\" — nhưng anh nói thẳng: chưa thấy tín hiệu nào cho phép kỳ vọng tăng trở lại trong tuần. Trạng thái: theo dõi, chưa hành động.",
          "expertId": "ck-5-phut"
        },
        {
          "title": "Góc nhìn Thái Phạm",
          "body": "Khi hội viên hỏi về room ngoại: \"Techcombank full room ngoại — lúc nào cũng full\", tức không còn dư địa hút thêm dòng vốn ngoại như câu chuyện của FPT (hở room bị bán).",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "ĐANG CẦM — được một cây trần",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "27/08",
          "note": "Từ Tút hội viên · 27/08 (27/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "GIỮ — hai đáy trung hạn là chỗ dựa",
          "sig": "up",
          "entry": "28–30 là vùng ngủ ngon",
          "target": "—",
          "stop": "Thủng hai đáy trung hạn",
          "status": "active",
          "date": "27/08",
          "note": "Từ Livestream · 27/08 (27/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "KHÔNG MUA THÊM TRUNG DÀI HẠN — trading thì được nhưng setup xấu",
          "sig": "wait",
          "entry": "Điểm mua thật: cây 10/08 hoặc mặc cả 30–31",
          "target": "34,5 (đỉnh cũ T7) · 36 thì vất vả",
          "stop": "31 (lỗ 3%) hoặc 30 (lỗ 6%)",
          "status": "active",
          "date": "26/08",
          "note": "Từ Phân tích · 26/08 (26/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "CẦM — nhưng có thể cơ cấu 1/3 sang HDB",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "HẾT ĐIỂM MUA Ở 30–31 — dài hạn vẫn thích nhất",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "20/08",
          "note": "Từ Livestream · 20/08 (20/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "KỲ VỌNG ĐÁY VÙNG 28–29 — PB 1,16 lần, nắm giữ",
          "sig": "up",
          "entry": "28–29",
          "target": "—",
          "stop": "Vi phạm đáy kép",
          "status": "active",
          "date": "18/08",
          "note": "Từ Livestream · 18/08 (18/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "CẦM bình thường",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "quang-dung",
          "dir": "Quản trị rủi ro tốt — trích lập 4,4%",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "15/08",
          "note": "Từ Toàn ngành ngân hàng (15/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "MUA — vùng an toàn dài hạn",
          "sig": "up",
          "entry": "Quanh 34 trở xuống",
          "target": "Rủi ro dài hạn thấp",
          "stop": "Ngắn hạn không đoán được",
          "status": "active",
          "date": "13/08",
          "note": "Từ Livestream · 13/08 (13/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "Tăng lại theo BCM",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "10/08",
          "note": "Từ Livestream · 10/08 (10/08)."
        },
        {
          "expertId": "quang-dung",
          "dir": "TÍCH SẢN — chờ về vùng thấp hơn",
          "sig": "up",
          "entry": "Giá 28.000, sổ sách 24.417 (P/B ~1,15)",
          "target": "LNST 9.600 tỷ, nợ xấu 1%, tín dụng 14,3%",
          "stop": "Chi phí vốn và CASA đang đội lên",
          "status": "active",
          "date": "08/08",
          "note": "Từ TCB · Quý 2/2026 (08/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "Ưu tiên hơn MBB",
          "sig": "up",
          "entry": "P/B 1,12 — rẻ hơn MBB 1,29",
          "target": "Nắm giữ dài hạn, đang cầm",
          "stop": "Không mua ở kháng cự",
          "status": "active",
          "date": "03/08",
          "note": "Từ Livestream · 03/08 (03/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "CẨN TRỌNG",
          "sig": "warn",
          "entry": "—",
          "target": "—",
          "stop": "Vùng này có thể điều chỉnh thêm",
          "status": "active",
          "date": "01/08",
          "note": "Tập 42: \"các anh chị cầm Techcombank thì cũng hãy cẩn trọng một chút\"."
        },
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
          "status": "active",
          "date": "13/07",
          "note": "Rút chân ok nhưng chưa đủ tín hiệu tăng trong tuần."
        }
      ],
      "potential": 3,
      "caution": 3,
      "potentialNote": "Một trong số ít mã cơ bản đang cố tạo đáy — rút chân khá ổn phiên 13/07.",
      "cautionNote": "Chưa có tín hiệu nào cho phép kỳ vọng tăng trong tuần; full room ngoại — thiếu lực mua mới.",
      "industry": "Ngân hàng",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "region": "vn",
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "ĐANG CẦM — được một cây trần",
          "sig": "up",
          "date": "27/08",
          "line": "Từ Tút hội viên · 27/08 (27/08)."
        },
        {
          "expertId": "ck-5-phut",
          "stance": "GIỮ — hai đáy trung hạn là chỗ dựa",
          "sig": "up",
          "date": "27/08",
          "line": "Từ Livestream · 27/08 (27/08). Điểm vào: 28–30 là vùng ngủ ngon."
        },
        {
          "expertId": "quang-dung",
          "stance": "Quản trị rủi ro tốt — trích lập 4,4%",
          "sig": "up",
          "date": "15/08",
          "line": "Từ Toàn ngành ngân hàng (15/08)."
        }
      ]
    },
    {
      "key": "ssi",
      "symbol": "SSI",
      "name": "Chứng khoán SSI",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:SSI",
      "sig": "up",
      "stance": "CẦM CHẶT — trong rổ FTSE, đã xác nhận uptrend",
      "aliases": [
        "ssi"
      ],
      "oneLiner": "Thái Phạm: SSI đang ở \"sườn phải\" của mẫu hình, gom lại hàng — có thể về 20; CK 5 phút vẫn chờ đóng trên 26.",
      "thesis": [
        {
          "title": "Điều kiện kích hoạt cụ thể",
          "body": "Chứng khoán 5 phút theo dõi SSI sát nhất trong nhóm chứng khoán. Phiên 16/07 SSI tạo nến rút chân rất dài (\"chân siêu mẫu, thắp ra rất nhiều hy vọng\") — nhưng điều kiện xác nhận đảo chiều rất rõ ràng: phải đóng cửa trên 25.5, chắc chắn hơn là trên 26. Không đạt thì \"đợi sang tuần, không vội\".",
          "expertId": "ck-5-phut"
        },
        {
          "title": "Bối cảnh nắm giữ",
          "body": "Từ 09/07 anh đã nói: SSI chưa vượt kháng cự (\"chen line\") thì chưa có điểm mua ngắn hạn — kể cả vượt cũng chưa đẹp vì tích lũy khối lượng kém. Chiến lược nhất quán: nắm một phần, kiên nhẫn; nhóm chứng khoán giữ dài hạn vì nội lực (TTCK sẽ là kênh huy động vốn cốt lõi), không phải vì kỳ vọng dòng tiền ngoại.",
          "expertId": "ck-5-phut"
        },
        {
          "expertId": "quang-dung",
          "title": "Quang Dũng (04/07): nhóm chứng khoán là ưu tiên số 1 nửa cuối năm",
          "body": "Đây là quan điểm cấp ngành chứ không phải khuyến nghị riêng mã SSI. Lập luận: chính phủ dùng thị trường vốn làm đòn bẩy giải bài toán cung tiền, bằng chứng là loạt ngân hàng nhỏ (MSB, OCB, TPBank, ACB, An Bình) tăng vốn mạnh và nhóm công ty chứng khoán đều có kế hoạch tăng vốn cuối 2026. Thứ tự ưu tiên ông đưa ra: tài chính (ngân hàng, chứng khoán) trước, sau đó mới đến nhóm hưởng lợi gián tiếp là đầu tư công, bất động sản và bán lẻ."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "CẦM CHẶT — trong rổ FTSE",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "XÁC NHẬN XU HƯỚNG TĂNG",
          "sig": "up",
          "entry": "Cây vượt đỉnh phiên 21/08",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "21/08",
          "note": "Từ Phân tích · 21/08 (21/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "VỪA CHIA — không mua không bán",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "17/08",
          "note": "Từ Livestream · 17/08 (17/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Bổ sung",
          "sig": "up",
          "entry": "—",
          "target": "Nhóm chứng khoán chỉ ~15% danh mục",
          "stop": "—",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "MUA nếu đánh theo thị trường",
          "sig": "up",
          "entry": "Vùng 23, hoặc ngay 24",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "MUA MỚI ĐƯỢC",
          "sig": "up",
          "entry": "Vùng giá hiện tại — \"không cao\"",
          "target": "Nắm giữ; rẻ hơn TCX",
          "stop": "—",
          "status": "active",
          "date": "04/08",
          "note": "Từ Livestream · 04/08 (04/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "Đang cầm nhiều, chưa mua thêm",
          "sig": "up",
          "entry": "Chờ đáy đẹp / nền đẹp / volume tăng",
          "target": "Giữ dài hạn",
          "stop": "—",
          "status": "active",
          "date": "03/08",
          "note": "Từ Livestream · 03/08 (03/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "TRÁNH CẢ NHÓM",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "\"Hồi lên rồi nó sẽ tèo\"",
          "status": "active",
          "date": "01/08",
          "note": "Tập 42 — lần đầu ông gạt TOÀN BỘ nhóm cổ phiếu chứng khoán, không riêng mã nào."
        },
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
          "status": "active",
          "date": "16/07",
          "note": "Đang nắm một phần từ trước, kiên nhẫn."
        },
        {
          "expertId": "quang-dung",
          "dir": "NHÓM ƯU TIÊN NỬA CUỐI NĂM",
          "sig": "up",
          "entry": "Chu kỳ 6 tháng cuối 2026",
          "target": "Thị trường vốn là đòn bẩy giải bài toán cung tiền",
          "stop": "—",
          "status": "active",
          "date": "04/07",
          "note": "Quan điểm cấp NGÀNH, không phải riêng mã SSI: \"không nên bỏ qua thị trường tài chính và cổ phiếu tài chính trong chu kỳ 6 tháng cuối năm\"."
        }
      ],
      "potential": 2,
      "caution": 4,
      "potentialNote": "Chỉ còn kèo chờ tín hiệu của CK 5 phút (đóng >26) — chưa xảy ra suốt 10 ngày qua.",
      "cautionNote": "Thái Phạm cảnh báo \"sườn phải đánh vào cứ mua là lỗ\"; có thể về 20 — thấp hơn nhiều mốc 26.",
      "industry": "Chứng khoán (CTCK)",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "region": "vn",
      "debate": "Ba quan điểm lệch nhau rõ. Thái Phạm TRÁNH vì lý do sóng: \"sườn trái ăn ngon gấp đôi, đến sườn phải là cứ mua là lỗ\". CK 5 phút mua theo tín hiệu, đang nắm một phần và kiên nhẫn chờ. Quang Dũng thì nhìn ở tầng ngành và bảo đây là nhóm ưu tiên số một nửa cuối năm vì chính sách. Lưu ý: quan điểm của Quang Dũng là cho cả nhóm CTCK, ông không nêu riêng SSI hay mốc giá nào.",
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "CẦM CHẶT — trong rổ FTSE",
          "sig": "up",
          "date": "23/08",
          "line": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "ck-5-phut",
          "stance": "XÁC NHẬN XU HƯỚNG TĂNG",
          "sig": "up",
          "date": "21/08",
          "line": "Từ Phân tích · 21/08 (21/08). Điểm vào: Cây vượt đỉnh phiên 21/08."
        },
        {
          "expertId": "quang-dung",
          "stance": "NHÓM ƯU TIÊN NỬA CUỐI NĂM",
          "sig": "up",
          "date": "04/07",
          "line": "Quan điểm cấp NGÀNH, không phải riêng mã SSI: \"không nên bỏ qua thị trường tài chính và cổ phiếu tài chính trong chu kỳ 6 tháng cuối năm\". Điểm vào: Chu kỳ 6 tháng cuối 2026. Mục tiêu: Thị trường vốn là đòn bẩy giải bài toán cung tiền."
        }
      ]
    },
    {
      "key": "vci",
      "symbol": "VCI",
      "name": "Chứng khoán Vietcap",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Chứng khoán",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:VCI",
      "sig": "up",
      "stance": "CỨ CẦM — trong rổ FTSE",
      "aliases": [
        "vci",
        "vietcap",
        "to hai"
      ],
      "potential": 4,
      "caution": 3,
      "potentialNote": "Giảm mạnh nhất nhóm chứng khoán tháng 7 rồi hồi nhanh nhất sau khi chủ tịch đăng ký mua — tín hiệu người trong cuộc đáng tin theo đánh giá của CK 5 phút.",
      "cautionNote": "Nhóm chứng khoán vẫn phụ thuộc thanh khoản thị trường; thanh khoản chưa đạt thì đà hồi khó bền.",
      "oneLiner": "Ông Tô Hải đăng ký mua 31 triệu cổ phiếu — VCI từ mã giảm mạnh nhất nhóm chứng khoán thành mã hồi nhanh nhất.",
      "thesis": [
        {
          "title": "Tín hiệu người trong cuộc được đánh giá cao",
          "body": "Trong tổng kết tháng 7, CK 5 phút xếp VCI vào nhóm tín hiệu tích cực hiếm hoi: đây là một trong những cổ phiếu chứng khoán giảm mạnh nhất tháng 7, nhưng sau khi ông Tô Hải đăng ký mua 31 triệu cổ phiếu thì VCI lại là mã hồi phục nhanh nhất nhóm, được 2–3 cây tăng. Anh phân biệt rõ độ tin cậy giữa các lãnh đạo: \"ông Hải thì em thấy tin cậy\", còn một chủ tịch khác (ông Đạt) thì \"không tin cậy lắm — chuyên gia chốt cổ phiếu của mình, giá trên đỉnh thì bán, giá giảm thì lại mua vào\". Bối cảnh chung: từ tuần 3 tháng 7 chủ tịch SSI đã nói thị trường về vùng giá trị tốt cho đầu tư dài hạn, sang tuần 4 thì nhiều chủ tịch và người nhà đồng loạt đăng ký mua — \"tiền thì không thiếu đâu, chẳng qua người có tiền được phép chọn thời điểm xuất hiện\".",
          "expertId": "ck-5-phut"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "CỨ CẦM",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "TRÁNH CẢ NHÓM",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "\"Hồi lên rồi nó sẽ tèo\"",
          "status": "active",
          "date": "01/08",
          "note": "Tập 42 — lần đầu ông gạt TOÀN BỘ nhóm cổ phiếu chứng khoán, không riêng mã nào."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "THEO DÕI TÍCH CỰC",
          "sig": "up",
          "entry": "Sau tin chủ tịch mua 31 triệu cp",
          "target": "Hồi nhanh nhất nhóm chứng khoán",
          "stop": "Phụ thuộc thanh khoản chung",
          "status": "active",
          "date": "31/07",
          "note": "Tín hiệu người trong cuộc được đánh giá tin cậy."
        },
        {
          "expertId": "thai-pham",
          "dir": "Cơ cấu khi hồi",
          "sig": "wait",
          "entry": "Hồi về 23–24",
          "target": "Dài hạn phải đi lên từ nội lực",
          "stop": "Giảm sâu do tự doanh có FPT, PNJ",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        }
      ],
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "CỨ CẦM",
          "sig": "up",
          "date": "23/08",
          "line": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "ck-5-phut",
          "stance": "THEO DÕI TÍCH CỰC",
          "sig": "up",
          "date": "31/07",
          "line": "Tín hiệu người trong cuộc được đánh giá tin cậy. Điểm vào: Sau tin chủ tịch mua 31 triệu cp. Mục tiêu: Hồi nhanh nhất nhóm chứng khoán."
        }
      ]
    },
    {
      "key": "vix",
      "symbol": "VIX",
      "name": "Chứng khoán VIX",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Chứng khoán",
      "basket": "tranh",
      "tradeMode": "spot",
      "tv": "HOSE:VIX",
      "sig": "down",
      "stance": "BÁN — cây vượt 14 đã hết đà",
      "aliases": [
        "vix"
      ],
      "potential": 2,
      "caution": 5,
      "potentialNote": "Là cổ phiếu dòng tiền nên khả năng cao sẽ có sóng kéo trở lại — nhưng không biết khi nào và phải chịu đựng được.",
      "cautionNote": "Nửa sau tháng 7 rơi bằng cả nửa đầu năm cộng lại; báo cáo Q2 rất xấu; nhiều người đang gồng margin — CK 5 phút khuyên KHÔNG nên.",
      "oneLiner": "Nửa sau tháng 7 rơi từ 18–19 về 12–13; đến 31/07 vẫn chưa có tín hiệu đáy — cảnh báo đừng gồng margin.",
      "thesis": [
        {
          "title": "Bài học cổ phiếu dòng tiền",
          "body": "VIX được CK 5 phút dùng làm ví dụ điển hình cho rủi ro cổ phiếu dòng tiền trong tổng kết tháng 7: sau khi ra báo cáo Q2 rất xấu (cùng đợt với CTS), nửa sau tháng 7 VIX rơi bằng cả giai đoạn đầu năm cộng lại — từ vùng 18–19 hồi tháng 6 xuống còn 12–13. \"Nếu không ra nhanh là sẽ bị kẹt lại.\" Anh cho rằng khả năng cao mã này sẽ có sóng kéo trở lại vì đã như vậy nhiều lần, nhưng vấn đề là nhà đầu tư có chịu đựng được không và đã chuẩn bị tâm lý chưa. Cảnh báo mạnh nhất: rất nhiều người đang gồng margin với VIX, Gelex hay Eximbank — \"mọi người không nên làm như vậy; bọn này dám mua thì phải dám bán\". Về bắt đáy: suốt đà rơi tháng 7 không hề có tín hiệu đáy, ai bắt vào bất cứ cây nào cũng chỉ là đặt cược; đến 30/07 mới có phân kỳ dương trên đồ thị giờ nhưng anh đánh giá \"cũng không đẹp lắm\".",
          "expertId": "ck-5-phut"
        }
      ],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "BÁN — cây vượt 14 hôm thứ sáu đã hết đà",
          "sig": "down",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "17/08",
          "note": "Từ Livestream · 17/08 (17/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Đánh hồi phục",
          "sig": "wait",
          "entry": "—",
          "target": "Lên 15.8 thì bán",
          "stop": "—",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "GIỮ — chốt lãi ở mục tiêu",
          "sig": "up",
          "entry": "Giá vốn đúng quanh 13–13,2",
          "target": "16 (biên trên BB + vùng tích lũy cũ)",
          "stop": "Điểm mua hôm nay không đẹp",
          "status": "active",
          "date": "04/08",
          "note": "Từ Livestream · 04/08 (04/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "TRÁNH CẢ NHÓM",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "\"Hồi lên rồi nó sẽ tèo\"",
          "status": "active",
          "date": "01/08",
          "note": "Tập 42 — lần đầu ông gạt TOÀN BỘ nhóm cổ phiếu chứng khoán, không riêng mã nào."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "KHÔNG BẮT ĐÁY",
          "sig": "avoid",
          "entry": "—",
          "target": "Chờ tín hiệu đáy thật",
          "stop": "TUYỆT ĐỐI không gồng margin",
          "status": "active",
          "date": "31/07",
          "note": "Rơi 18–19 → 12–13 nửa sau tháng 7."
        }
      ],
      "views": [
        {
          "expertId": "ck-5-phut",
          "stance": "BÁN — cây vượt 14 hôm thứ sáu đã hết đà",
          "sig": "down",
          "date": "17/08",
          "line": "Từ Livestream · 17/08 (17/08)."
        },
        {
          "expertId": "thai-pham",
          "stance": "Đánh hồi phục",
          "sig": "wait",
          "date": "05/08",
          "line": "Từ Tập 43 · ĐẢO CHIỀU (05/08). Mục tiêu: Lên 15.8 thì bán."
        }
      ]
    },
    {
      "key": "hpg",
      "symbol": "HPG",
      "name": "Hòa Phát",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:HPG",
      "sig": "avoid",
      "stance": "KHÔNG THAM GIA — Vin làm thép cuối 2026",
      "aliases": [
        "hpg",
        "hoa phat",
        "hoang phat"
      ],
      "oneLiner": "Mã gây tranh cãi nhất: Thái Phạm và CK 5 phút bảo tránh vì thép Vin cạnh tranh, Quang Dũng bảo mua mạnh vì lợi nhuận quý 2 tăng 50,6% nhờ Dung Quất 2.",
      "thesis": [
        {
          "title": "Thái Phạm (Tập 39): thêm lý do cơ bản để tránh",
          "body": "Về kỹ thuật HPG nhìn \"phê\" (đã tích lũy) nhưng Thái Phạm dẫn nguồn tin khả tín: vài năm tới HPG sẽ khó khăn về cạnh tranh khi thép của Vin Group rất mạnh và HPG khó thắng được các thầu đối với Vin. Vì thế ông đã KHÔNG đưa HPG vào danh mục mua. Về kỹ thuật, HPG đã thủng nền 23 và tìm về đáy mới 21.85 — CK 5 phút cũng xếp HPG vào nhóm \"hàng cơ bản gãy\" (thủng đáy tuần trước).",
          "expertId": "thai-pham"
        },
        {
          "title": "Cảnh báo từ phiên 13/07",
          "body": "Trong khi TCB, SSI cố tạo đáy thì HPG — cổ phiếu cơ bản đầu ngành — lại THỦNG ĐÁY ngay phiên 13/07. Chứng khoán 5 phút dùng HPG làm bằng chứng rằng giai đoạn này không thể suy luận kiểu \"ở đáy thì thanh khoản bé\": có mã tạo đáy, có mã vẫn rơi. Chưa có khuyến nghị mua bán cụ thể — bài học ở đây là về đọc thị trường: thị trường giảm chung do nền kinh tế và thanh khoản, không phải do từng doanh nghiệp.",
          "expertId": "ck-5-phut"
        },
        {
          "expertId": "quang-dung",
          "title": "Quang Dũng (01/08): số liệu quý 2 nói ngược lại",
          "body": "LNST quý 2/2026 đạt 6.400 tỷ, cùng kỳ 4.200 tỷ, tăng 50,6%; doanh thu 55.570 tỷ (+55%). Động lực nằm ở bảng cân đối: tài sản dở dang tụt từ 72.821 xuống 14.620 tỷ trong khi tài sản cố định hữu hình nhảy từ 65.120 lên 132.000 tỷ — tức đưa vào vận hành 70.000 tỷ tài sản trong một năm, chính là Dung Quất giai đoạn 2. Sản lượng quý 2 đạt 3,65 triệu tấn (+28%), riêng HRC 1,92 triệu tấn (+76%) — nhân ba trong một năm rưỡi, cho thấy Dung Quất 2 đã chạy ít nhất 75% công suất. Ông dự báo cả năm 2026 giữ tăng trưởng 50%, quý 3 và 4 đạt 40–60%."
        },
        {
          "expertId": "quang-dung",
          "title": "Quang Dũng: nhưng đừng kỳ vọng lặp lại 2021",
          "body": "Ông tự chỉ ra điểm yếu. Biên lãi gộp mới 19%, cải thiện từ 13,9% của quý 4/2025 nhưng còn xa mức 30% thời hoàng kim, vì giá HRC — mặt hàng chủ lực — đi ngang. \"Nếu giá HRC tăng như giá thép xây dựng thì biên phải 25–30% và tăng trưởng lợi nhuận là 100% chứ không phải 50%.\" Chi phí lãi vay tăng gấp đôi từ 900 lên 1.900 tỷ nên lợi nhuận thuần chỉ +44%. Kết luận: chu kỳ này chỉ có \"địa lợi\" (nội lực) mà thiếu \"thiên thời\" (giá thép) — nên 2,5 năm qua HPG chỉ tăng 2 lần, so với 5 lần trong 2 năm của chu kỳ Dung Quất 1. Dù vậy vẫn hơn hẳn cùng ngành: Nam Kim 7%, Hoa Sen 26%, HPG 92%."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "KHÔNG THAM GIA",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "Vingroup làm thép cuối 2026",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "KHÔNG KỲ VỌNG +20% TỚI CUỐI NĂM",
          "sig": "warn",
          "entry": "—",
          "target": "25–25,5 (khó)",
          "stop": "—",
          "status": "active",
          "date": "17/08",
          "note": "Từ Livestream · 17/08 (17/08)."
        },
        {
          "expertId": "quang-dung",
          "dir": "GIỮ — điểm sáng duy nhất ngành thép",
          "sig": "up",
          "entry": "—",
          "target": "Kỳ vọng lợi nhuận 20–30% (hạ từ 50%)",
          "stop": "Cả ngành thép đang xấu",
          "status": "active",
          "date": "06/08",
          "note": "Từ Vĩ mô · Tháng 8 (06/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Đợi kéo lại 182x thì ra",
          "sig": "wait",
          "entry": "Đang hòa vốn",
          "target": "Ra khi Index về 182x",
          "stop": "—",
          "status": "waiting",
          "date": "04/08",
          "note": "Từ Bài đăng · 04/08 (04/08)."
        },
        {
          "expertId": "quang-dung",
          "dir": "TÍCH SẢN — MUA KHI GIẢM",
          "sig": "up",
          "entry": "Vùng 20 hiện tại, mua rải",
          "target": "Q3–Q4 tăng trưởng 40–60%",
          "stop": "Không margin, không đoán đáy",
          "status": "active",
          "date": "01/08",
          "note": "\"Giảm nhẹ thì tôi mua ít, giảm mạnh thì tôi mua nhiều, giảm càng mạnh thì tôi càng mua.\" Cùng giá 20.000 nhưng lợi nhuận nay 6.000 tỷ so với 2.800 tỷ năm 2024."
        },
        {
          "expertId": "thai-pham",
          "dir": "Không cầm",
          "sig": "avoid",
          "entry": "—",
          "target": "HPG bị Vin Steel cạnh tranh",
          "stop": "LPB là \"cổ phiếu joker\"",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Tránh",
          "sig": "down",
          "entry": "Không đụng",
          "target": "PNJ sẽ sàn thêm như Novaland; SSI có thể về 20",
          "stop": "MSB: chốt lời",
          "status": "active",
          "date": "26/07",
          "note": "Từ Tập 40 · Tuần 30 (26/07)."
        },
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
          "status": "active",
          "date": "13/07",
          "note": "Dẫn chứng cho trạng thái thị trường, chưa phải khuyến nghị."
        }
      ],
      "potential": 3,
      "caution": 4,
      "potentialNote": "Quang Dũng (01/08) đưa số cứng: LNST quý 2 đạt 6.400 tỷ (+50,6%), Dung Quất 2 đã chạy ≥75% công suất, dự báo Q3–Q4 tăng 40–60%.",
      "cautionNote": "Thái Phạm và CK 5 phút vẫn giữ quan điểm tránh: thép Vin Group sẽ cạnh tranh, giá đã thủng nền 23 về đáy mới. Biên gộp 19% còn xa mức 30% thời hoàng kim vì giá HRC đi ngang.",
      "industry": "Thép",
      "basket": "tranh",
      "tradeMode": "spot",
      "region": "vn",
      "debate": "Cùng một mã, hai cách nhìn không giao nhau. Thái Phạm và CK 5 phút nhìn GIÁ và CẠNH TRANH: thủng nền 23 về đáy mới 21,85, thép Vin Group sắp cạnh tranh trực tiếp → loại khỏi danh mục. Quang Dũng nhìn BÁO CÁO TÀI CHÍNH: Dung Quất 2 vừa vào vận hành, lợi nhuận đã tăng 50,6% và còn 2–4 quý tăng trưởng phía trước → mua rải khi giảm. Điểm mấu chốt chưa ai kiểm chứng được: thép Vin sẽ ăn vào thị phần HRC của Hòa Phát bao nhiêu và bao giờ. Cả ba đều đồng ý một điều — không dùng margin cho mã này.",
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "KHÔNG THAM GIA",
          "sig": "avoid",
          "date": "23/08",
          "line": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "ck-5-phut",
          "stance": "KHÔNG KỲ VỌNG +20% TỚI CUỐI NĂM",
          "sig": "warn",
          "date": "17/08",
          "line": "Từ Livestream · 17/08 (17/08). Mục tiêu: 25–25,5 (khó)."
        },
        {
          "expertId": "quang-dung",
          "stance": "GIỮ — điểm sáng duy nhất ngành thép",
          "sig": "up",
          "date": "06/08",
          "line": "Từ Vĩ mô · Tháng 8 (06/08). Mục tiêu: Kỳ vọng lợi nhuận 20–30% (hạ từ 50%)."
        }
      ]
    },
    {
      "key": "pnj",
      "symbol": "PNJ",
      "name": "Vàng bạc Đá quý Phú Nhuận",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:PNJ",
      "sig": "warn",
      "stance": "CHIA RẼ — lướt sóng được cây trần (TP) vs BỎ HẲN (5P)",
      "aliases": [
        "pnj",
        "phu nhuan"
      ],
      "oneLiner": "Phá đáy 6 năm, giám đốc bị truy tố buôn lậu kim cương; cú \"giải cứu\" tóm sàn cuối tuần không đổi được luận điểm — Thái Phạm dự báo còn sàn thêm như Novaland.",
      "thesis": [
        {
          "title": "Cập nhật 26/07: \"một lần bất tín, vạn sự bất tin\"",
          "body": "PNJ đã phá đáy 6 năm, giảm sàn liên tục sau khi giám đốc bị truy tố buôn lậu kim cương. Thái Phạm và nhóm hội viên không tham gia bắt đáy, lập luận bằng nguyên tắc thành tín: \"Một lần bất tín, vạn sự bất tin\" — dẫn Warren Buffett \"bạn mất 20 năm xây dựng uy tín nhưng chỉ cần 5–15 phút để phá hủy thanh danh\". Hai câu hỏi kinh doanh chưa ai trả lời: hàng tồn kho kim cương giờ bán cho ai, và thanh khoản ra sao. Cuối tuần có \"cú giải cứu\" tóm được giá sàn, nhưng theo kinh nghiệm của ông, sau khi tóm sàn thường sẽ còn vài phiên sàn nữa giống Novaland.",
          "expertId": "thai-pham"
        },
        {
          "title": "Thái Phạm (Tập 39): \"kim cương rởm vàng rởm\"",
          "body": "Ngày 23/07 Thái Phạm nâng mạnh mức cảnh báo: PNJ có thể về DƯỚI 9 như Novaland. Lý do: niềm tin thương hiệu với người tiêu dùng gần như bị xóa sạch sau vụ kim cương/vàng rởm — mà hệ thống phân phối không phải là lợi thế cạnh tranh thật, nên khi thương hiệu mất thì không còn gì đỡ giá. Ông từng can rất nhiều người không bắt ở vùng ~50; giờ so PNJ với Đức Giang — \"bắt mãi chỉ là bắt dao rơi, đừng gắn vào những con cổ phiếu có vấn đề\".",
          "expertId": "thai-pham"
        },
        {
          "title": "CK 5 phút: trò chơi \"đoán xem nó có sập không\"",
          "body": "Video 15/07 dành riêng cho PNJ: vấn đề không phải trần hay sàn, không phải \"chiết khấu đủ chưa\" — mà là chuỗi câu hỏi chưa ai trả lời được: rủi ro PNJ Lào có liên đới công ty mẹ không, vụ án đang mở rộng đến đâu (bắt thêm người, cả các chủ tiệm vàng lớn), kinh doanh có dính yếu tố làm giả giấy tờ không. Nguyên tắc bất di bất dịch: mã có rủi ro vận hành/niêm yết là KHÔNG MUA, \"kể cả phiên trần\" — giống DGC nhịp trước. Đọc báo cáo tài chính không ăn thua vì loại rủi ro này không nằm trên giấy tờ.",
          "expertId": "ck-5-phut"
        },
        {
          "title": "AzFin: bài học phân bổ thực chứng",
          "body": "Founder AzFin nắm PNJ đúng 2% danh mục — khi cổ phiếu giảm 15% vì biến cố, tổng thiệt hại chỉ 0,3% NAV, \"không ảnh hưởng gì cả\". Đây là minh chứng sống cho nguyên tắc đa dạng hóa: không all-in dù yêu thích đến đâu. Với PNJ hiện tại: biến cố chưa rõ có chạm \"linh hồn doanh nghiệp\" hay không → thuộc nhóm nắm giữ-quan sát đối với ai đã có sẵn ở tỷ trọng nhỏ, không phải nhóm mua thêm.",
          "expertId": "azfin"
        },
        {
          "title": "Thái Phạm: đừng đụng",
          "body": "Tập 38 xếp PNJ vào danh sách cấm cùng FPT, PC1, Đức Giang: \"có rất nhiều thông tin lằng nhằng, đừng đụng vào\". Tuần trước đó ông từng ước tính kịch bản xấu có thể về vùng 44.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "LƯỚT SÓNG — đã được cây trần",
          "sig": "up",
          "entry": "35–36",
          "target": "50",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "CÂN NHẮC LƯỚT SÓNG CÚ HỒI",
          "sig": "wait",
          "entry": "Vùng hiện tại",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "21/08",
          "note": "Từ Tút hội viên · 21/08 sáng (21/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "BỎ — doanh nghiệp đang có vấn đề",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "20/08",
          "note": "Từ Livestream · 20/08 (20/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Chỉ hồi kỹ thuật",
          "sig": "warn",
          "entry": "—",
          "target": "—",
          "stop": "Không có cơ sở tăng giá dài hạn",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Có thể bị đánh ngược lên",
          "sig": "warn",
          "entry": "—",
          "target": "Vùng 43 theo hình chữ V",
          "stop": "Quỹ kéo để bán nốt hàng",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Lướt 1/2 vị thế",
          "sig": "warn",
          "entry": "Vùng hiện tại, chỉ cho ai thích cảm giác mạnh",
          "target": "Lời 10–15% thì ra hàng",
          "stop": "Dính 2 cây sàn thì đi ra",
          "status": "active",
          "date": "04/08",
          "note": "Từ Bài đăng · 04/08 (04/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "KHÔNG MUA",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "Rủi ro điều tra mở rộng",
          "status": "active",
          "date": "04/08",
          "note": "Từ Livestream · 04/08 (04/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Tránh",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "Ví dụ điển hình rủi ro call margin của doanh chủ",
          "status": "active",
          "date": "31/07",
          "note": "Từ Bài đăng · 24–31/07 (31/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Tránh",
          "sig": "down",
          "entry": "Không đụng",
          "target": "PNJ sẽ sàn thêm như Novaland; SSI có thể về 20",
          "stop": "MSB: chốt lời",
          "status": "active",
          "date": "26/07",
          "note": "Từ Tập 40 · Tuần 30 (26/07)."
        },
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
        }
      ],
      "potential": 1,
      "caution": 5,
      "potentialNote": "Chưa nhìn thấy tiềm năng nào định lượng được khi vụ án còn mở rộng.",
      "cautionNote": "Rủi ro pháp lý chưa định lượng: liên đới công ty mẹ, điều tra mở rộng — mua là \"đoán xem nó có sập không\".",
      "industry": "Trang sức & Bán lẻ cao cấp",
      "basket": "tranh",
      "tradeMode": "spot",
      "region": "vn",
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "LƯỚT SÓNG — đã được cây trần",
          "sig": "up",
          "date": "23/08",
          "line": "Từ Tập 46 (Hội viên) · 23/08 (23/08). Điểm vào: 35–36. Mục tiêu: 50."
        },
        {
          "expertId": "ck-5-phut",
          "stance": "BỎ — doanh nghiệp đang có vấn đề",
          "sig": "avoid",
          "date": "20/08",
          "line": "Từ Livestream · 20/08 (20/08)."
        },
        {
          "expertId": "azfin",
          "stance": "GIỮ NHỎ / QUAN SÁT",
          "sig": "wait",
          "date": "16/07",
          "line": "Không mua thêm; bài học đa dạng hóa. Điểm vào: Chỉ với ai đã có sẵn ≤2% danh mục. Mục tiêu: Theo dõi quản trị công ty."
        }
      ]
    },
    {
      "key": "fpt",
      "symbol": "FPT",
      "name": "FPT Corp",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:FPT",
      "sig": "up",
      "stance": "CẦM NGUYÊN — mua thêm 69–70 vẫn bình thường",
      "aliases": [
        "fpt"
      ],
      "oneLiner": "Thái Phạm: hở room ngoại, \"Mỹ bán quá trời — đừng đụng\"; AzFin đã chốt lời từ giá cao.",
      "thesis": [
        {
          "title": "Áp lực bán của khối ngoại",
          "body": "Tập 38: FPT là mã duy nhất trong nhóm lớn \"không full room\" — hở room ngoại và đang bị khối ngoại (ông gọi là \"Mỹ\") bán rất mạnh. Kết luận ngắn gọn: đừng đụng vào FPT trong giai đoạn quỹ ngoại rút vốn đồng loạt. Trước đó FPT cũng từng bị nhắc kèm rủi ro AI trong weekly 07–12/07.",
          "expertId": "thai-pham"
        },
        {
          "title": "AzFin: đã chốt lời từ lâu — đừng nhầm \"tích sản trên đỉnh\"",
          "body": "Trong podcast #13, anh Phục phản bác kiểu chế giễu \"tích sản FPT giá 130 thì khóc ròng\": phương pháp tích sản đúng nghĩa đã CHỐT LỜI FPT nhiều lần từ giá rất cao (tương tự REE), vì đầu tư giá trị là bán khi giá vượt giá trị — không phải ôm lì mọi giá. Hàm ý: FPT hiện không nằm trong vùng mua của phương pháp này.",
          "expertId": "azfin"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "CẦM NGUYÊN — lướt sóng được",
          "sig": "up",
          "entry": "Mua thêm 69–70 vẫn bình thường",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "CÂN NHẮC LƯỚT SÓNG CÚ HỒI",
          "sig": "wait",
          "entry": "Vùng hiện tại",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "21/08",
          "note": "Từ Tút hội viên · 21/08 sáng (21/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "CÓ HÀNG THÌ GIỮ — bán là rủi ro bán gần đáy",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "Thủng 140 và giá vốn từ 135 trở lên thì chốt",
          "status": "active",
          "date": "20/08",
          "note": "Từ Livestream · 20/08 (20/08)."
        },
        {
          "expertId": "quang-dung",
          "dir": "TÍCH SẢN — định giá ~10-11 năm hoàn vốn, rẻ so với tăng trưởng thực 18%",
          "sig": "up",
          "entry": "68.000 (hiện tại)",
          "target": "—",
          "stop": "—",
          "status": "done",
          "date": "19/08",
          "note": "Từ Video · 19/08 (19/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Chỉ hồi kỹ thuật",
          "sig": "warn",
          "entry": "—",
          "target": "—",
          "stop": "Không có cơ sở tăng giá dài hạn",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Giải ngân rồi bán khi được kéo",
          "sig": "warn",
          "entry": "Quanh 69–70",
          "target": "Bán vùng 85–90",
          "stop": "PR \"AI không ảnh hưởng\" là không đúng",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "THOÁT TOÀN BỘ khi kéo lên",
          "sig": "avoid",
          "entry": "Đợi 1–2 phiên điều chỉnh mua thêm 1/2 vị thế hàng",
          "target": "Bán sạch vùng 85–90",
          "stop": "Cú hồi là dàn dựng, không phải triển vọng",
          "status": "active",
          "date": "04/08",
          "note": "Từ Bài đăng · 04/08 (04/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "Không đủ điểm mua",
          "sig": "warn",
          "entry": "Đà tăng do khối ngoại mua 500 tỷ",
          "target": "—",
          "stop": "Chạm chen line bên trên",
          "status": "active",
          "date": "03/08",
          "note": "Từ Livestream · 03/08 (03/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Tránh",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "Đừng đụng vào",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "KHÔNG MUA MỚI",
          "sig": "avoid",
          "entry": "—",
          "target": "Nhiều cổ phiếu cơ bản khác hồi nhanh hơn",
          "stop": "—",
          "status": "active",
          "date": "31/07",
          "note": "Q2 doanh thu giảm/lợi nhuận tăng — \"thiếu sự nhất quán\"; chưa có kỳ vọng mới sau ĐHCĐ tháng 4. Ai có hàng thì giữ, chưa thấy cơ hội đảo hàng đặc biệt."
        },
        {
          "expertId": "thai-pham",
          "dir": "Bán khi hồi",
          "sig": "down",
          "entry": "Hồi kỹ thuật 77–78",
          "target": "Không tích trữ dài hạn",
          "stop": "Ngoại còn 26,9% và sẽ bán tiếp",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Tránh",
          "sig": "down",
          "entry": "Không đụng",
          "target": "PNJ sẽ sàn thêm như Novaland; SSI có thể về 20",
          "stop": "MSB: chốt lời",
          "status": "active",
          "date": "26/07",
          "note": "Từ Tập 40 · Tuần 30 (26/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Tránh",
          "sig": "down",
          "entry": "Không đụng",
          "target": "PNJ về <9; HPG về 21.85",
          "stop": "—",
          "status": "active",
          "date": "23/07",
          "note": "Từ Tập 39 · Tuần 29 (23/07)."
        },
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
      "potential": 3,
      "caution": 3,
      "potentialNote": "Doanh nghiệp tốt về dài hạn — nhưng phương pháp giá trị đã chốt lời từ giá cao, chưa tới vùng mua lại.",
      "cautionNote": "Hở room, khối ngoại bán mạnh liên tục; thêm rủi ro cạnh tranh AI.",
      "industry": "Công nghệ",
      "basket": "tranh",
      "tradeMode": "spot",
      "region": "vn",
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "CẦM NGUYÊN — lướt sóng được",
          "sig": "up",
          "date": "23/08",
          "line": "Từ Tập 46 (Hội viên) · 23/08 (23/08). Điểm vào: Mua thêm 69–70 vẫn bình thường."
        },
        {
          "expertId": "ck-5-phut",
          "stance": "CÓ HÀNG THÌ GIỮ — bán là rủi ro bán gần đáy",
          "sig": "wait",
          "date": "20/08",
          "line": "Từ Livestream · 20/08 (20/08)."
        },
        {
          "expertId": "quang-dung",
          "stance": "TÍCH SẢN — định giá ~10-11 năm hoàn vốn, rẻ so với tăng trưởng thực 18%",
          "sig": "up",
          "date": "19/08",
          "line": "Từ Video · 19/08 (19/08). Điểm vào: 68.000 (hiện tại)."
        },
        {
          "expertId": "azfin",
          "stance": "ĐÃ CHỐT LỜI",
          "sig": "wait",
          "date": "16/07",
          "line": "Ví dụ về kỷ luật chốt lời của tích sản. Điểm vào: Đã bán từ giá cao (nhiều lần). Mục tiêu: Quay lại khi giá về dưới giá trị."
        }
      ],
      "debate": "Cùng một mã, hai cách nhìn không giao nhau. Thái Phạm nhìn DÒNG TIỀN VÀ CẤU TRÚC SỞ HỮU: cổ phiếu hở room ngoại, khối ngoại bán ròng, hồi giá gần đây chỉ là kỹ thuật (Tập 45) — tránh. CK 5 phút nhìn ĐỘ HOÀN THIỆN CỦA TÍN HIỆU: dù có dòng tiền ngoại mua 500 tỷ đẩy giá, đồ thị chưa đủ điều kiện xác nhận điểm mua — không đủ điểm mua, đứng ngoài. Quang Dũng nhìn BÁO CÁO TÀI CHÍNH BÓC TÁCH: sau khi loại ảnh hưởng bút toán thoái FPT Telecom, tăng trưởng doanh thu/lợi nhuận thực vẫn 12,6%/18,2%, định giá rơi về ~10-11 năm hoàn vốn — ngang 2015 dù chất lượng tăng trưởng cao gấp đôi — tích sản. Điểm mấu chốt chưa ai kiểm chứng được: khối ngoại có dừng bán trước khi định giá \"rẻ\" của Quang Dũng phát huy tác dụng hay không."
    },
    {
      "key": "pc1",
      "symbol": "PC1",
      "name": "PC1 Group",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:PC1",
      "sig": "up",
      "stance": "BỔ SUNG VÀO DANH MỤC LƯỚT",
      "aliases": [
        "pc1"
      ],
      "oneLiner": "Thái Phạm: ai đang kẹt PC1 — có tin kéo lên thì \"tranh thủ ra\", chưa rõ chuyện đổi chủ.",
      "thesis": [
        {
          "title": "Lời khuyên cho người kẹt hàng",
          "body": "Tập 38: với những ai còn kẹt PC1, chiến lược là chờ những nhịp có tin tức kéo giá lên để \"tranh thủ mình ra\" — vì câu chuyện đổi chủ/xử lý ở doanh nghiệp này chưa rõ ràng. PC1 nằm cùng nhóm \"lằng nhằng, đừng đụng\" với PNJ và Đức Giang cho đến khi cấu trúc uptrend quay lại.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "BỔ SUNG VÀO DANH MỤC LƯỚT — nếu mua",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "28/08",
          "note": "Từ Tút hội viên · 28/08 (28/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "CHỜ MUA 17–18",
          "sig": "wait",
          "entry": "Vùng 17–18",
          "target": "—",
          "stop": "Thanh khoản cạn kiệt",
          "status": "waiting",
          "date": "01/08",
          "note": "Có tín hiệu đổi chủ nhưng chưa rõ chủ mới. Tập 42."
        },
        {
          "expertId": "thai-pham",
          "dir": "Cơ cấu khi hồi",
          "sig": "down",
          "entry": "Hồi về đáy cũ 15",
          "target": "Đã đổi chủ — vùng này chưa mua",
          "stop": "—",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Tránh",
          "sig": "down",
          "entry": "Không đụng",
          "target": "PNJ về <9; HPG về 21.85",
          "stop": "—",
          "status": "active",
          "date": "23/07",
          "note": "Từ Tập 39 · Tuần 29 (23/07)."
        },
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
      "cautionNote": "Chuyện đổi chủ chưa rõ ràng; nhóm \"lằng nhằng, đừng đụng\".",
      "industry": "Xây lắp điện & EPC",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "region": "vn"
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
          "body": "Podcast #13 của AzFin lấy DGC làm ví dụ cho tiêu chí xử lý biến cố: khi chủ tịch/tổng giám đốc — \"linh hồn của doanh nghiệp\" — bị khởi tố với nhiều tội danh, tác động lên định hướng chiến lược và vận hành là cực kỳ lớn → \"phải loại ngay lập tức\" khỏi danh mục, không cần bàn thêm. Khác với biến cố chỉ ảnh hưởng một phần hoạt động (có thể giữ và quan sát), đây là loại rủi ro chạm gốc.",
          "expertId": "azfin"
        },
        {
          "title": "Thái Phạm đồng quan điểm",
          "body": "\"Đức Giang lằng nhằng lắm — đừng đụng vào những mã kiểu như thế cho đến khi nó vào lại uptrend.\" CK 5 phút từ 15/07 cũng đã so sánh PNJ hiện tại với \"con DGC của nhịp trước\" — cùng một khuôn mẫu rủi ro pháp lý.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Tránh",
          "sig": "down",
          "entry": "Không đụng",
          "target": "PNJ về <9; HPG về 21.85",
          "stop": "—",
          "status": "active",
          "date": "23/07",
          "note": "Từ Tập 39 · Tuần 29 (23/07)."
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
        },
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
        }
      ],
      "potential": 1,
      "caution": 5,
      "potentialNote": "Không xét tiềm năng khi \"linh hồn doanh nghiệp\" dính pháp lý.",
      "cautionNote": "Chủ tịch/TGĐ bị khởi tố — tiêu chí loại ngay lập tức của AzFin; chờ vào lại uptrend mới bàn tiếp.",
      "industry": "Hóa chất & Phân bón",
      "basket": "tranh",
      "tradeMode": "spot",
      "region": "vn",
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "Tránh",
          "sig": "down",
          "date": "23/07",
          "line": "Từ Tập 39 · Tuần 29 (23/07). Điểm vào: Không đụng. Mục tiêu: PNJ về <9; HPG về 21.85."
        },
        {
          "expertId": "azfin",
          "stance": "LOẠI NGAY",
          "sig": "avoid",
          "date": "16/07",
          "line": "Tiêu chí: lãnh đạo cốt lõi bị khởi tố."
        }
      ]
    },
    {
      "key": "hdb",
      "symbol": "HDB",
      "name": "HDBank",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:HDB",
      "sig": "up",
      "stance": "CẦM CHẶT — đích 36, cao hơn cả TCB",
      "aliases": [
        "hdbank",
        "hdb"
      ],
      "potential": 3,
      "caution": 2,
      "potentialNote": "Trong nhóm bank Thái Phạm giữ; có động lực giữ giá để niêm yết HDBank Securities.",
      "cautionNote": "Không mua thêm lúc này — chờ index về 1.500; đi ngang cùng ACB trong nhóm bank.",
      "oneLiner": "Thái Phạm (Tập 42) lần đầu đưa mốc: về 21–22 là \"vùng mua rất là đẹp\". Quang Dũng: nằm trong nhóm ba ngân hàng chỉ tiêu tín dụng 36%.",
      "thesis": [
        {
          "title": "Lý do nằm trong danh mục giữ",
          "body": "Tập 39: HDBank là một trong các mã ngân hàng Thái Phạm quan tâm giữ (cùng BID, và BVBank mới lên sàn). Điểm riêng: HDBank có động lực giữ giá ở vùng này vì phải niêm yết công ty con HDBank Securities. Trong nhóm bank, ACB và HDBank \"đi ngang\" — không bán nhưng cũng chưa mua thêm khi chờ VN-Index về vùng 1.500.",
          "expertId": "thai-pham"
        },
        {
          "expertId": "quang-dung",
          "title": "Quang Dũng (18/07): nằm trong nhóm được giao chỉ tiêu cao nhất",
          "body": "Khi phân tích VPBank, ông nêu VPB, MBB và HDBank có kế hoạch tăng trưởng tín dụng năm nay 36% — gấp đôi các ngân hàng còn lại. Đây là nhóm được chọn làm đầu kéo cho mục tiêu GDP 10% của năm 2026 và trên hai con số cho giai đoạn 2026–2030. Bối cảnh đối chiếu: 2025 là năm tăng trưởng GDP cao nhất từ trước tới nay (8%) và tăng trưởng tín dụng tốt nhất 5 năm (19,1%)."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "CẦM CHẶT — đánh giá cao hơn TCB",
          "sig": "up",
          "entry": "—",
          "target": "Vượt đỉnh 30 → 36",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "ƯU TIÊN SỐ 1 nhóm bank",
          "sig": "up",
          "entry": "Vùng hiện tại",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "CHỜ MUA 21–22",
          "sig": "up",
          "entry": "Vùng 21–22",
          "target": "\"Vùng mua rất là đẹp\"",
          "stop": "—",
          "status": "waiting",
          "date": "01/08",
          "note": "Tập 42 — lần đầu ông đưa mốc giá cụ thể cho HDB thay vì chỉ \"giữ\"."
        },
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
        },
        {
          "expertId": "quang-dung",
          "dir": "NHÓM TĂNG TÍN DỤNG MẠNH",
          "sig": "up",
          "entry": "—",
          "target": "Kế hoạch tăng trưởng tín dụng 36% — gấp đôi phần còn lại",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "Cùng nhóm VPB và MBB. Gắn với mục tiêu GDP 10% năm 2026."
        }
      ],
      "industry": "Ngân hàng",
      "basket": "dai-han",
      "tradeMode": "spot",
      "region": "vn",
      "debate": "Hai lý do hoàn toàn khác nhau cho cùng một kết luận giữ. Thái Phạm giữ vì lý do kỹ thuật – doanh nghiệp: có việc phải giữ giá để niêm yết HDBank Securities. Quang Dũng giữ vì lý do chính sách: HDB nằm trong nhóm ba ngân hàng được giao chỉ tiêu tín dụng 36%, gấp đôi phần còn lại.",
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "CẦM CHẶT — đánh giá cao hơn TCB",
          "sig": "up",
          "date": "23/08",
          "line": "Từ Tập 46 (Hội viên) · 23/08 (23/08). Mục tiêu: Vượt đỉnh 30 → 36."
        },
        {
          "expertId": "quang-dung",
          "stance": "NHÓM TĂNG TÍN DỤNG MẠNH",
          "sig": "up",
          "date": "18/07",
          "line": "Cùng nhóm VPB và MBB. Gắn với mục tiêu GDP 10% năm 2026. Mục tiêu: Kế hoạch tăng trưởng tín dụng 36% — gấp đôi phần còn lại."
        }
      ]
    },
    {
      "key": "mwg",
      "symbol": "MWG",
      "name": "Thế Giới Di Động",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:MWG",
      "sig": "avoid",
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
          "body": "MWG xấu từ lâu — gãy \"chen\" tăng từ tận tháng 3, sau đó xây nền quanh 75–77 khoảng một tháng. Phiên 22/07 thủng 75 bằng một cây sàn rõ ràng. CK 5 phút coi đây là \"hàng cơ bản cuối cùng còn trụ giá cao nay đã gãy\", sau HPG (tuần trước) và GMD (cùng ngày) — chứng tỏ thị trường đã về vùng giá tương đối thấp.",
          "expertId": "ck-5-phut"
        },
        {
          "title": "Bài học \"bán khi nó dễ\"",
          "body": "Ai có giá vốn quanh 75–77 (mới bắt đáy giai đoạn vừa rồi) thì bán luôn không cần nghĩ — MWG cho một cây giật xuống rõ ràng để cảnh báo, khác nhiều midcap \"giảm lay lắt không bán được\". Giá vốn cao thì cân nhắc niềm tin. Tuyệt đối không bắt đáy vì mã này mới bắt đầu giảm.",
          "expertId": "ck-5-phut"
        }
      ],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "Không đẹp",
          "sig": "avoid",
          "entry": "Đang 72–73, kẹp giữa MA20 và cản 75",
          "target": "Lên 75 chẳng đáng bao nhiêu",
          "stop": "—",
          "status": "active",
          "date": "03/08",
          "note": "Từ Livestream · 03/08 (03/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Tránh",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "Đừng đụng vào",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
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
      ],
      "industry": "Bán lẻ",
      "basket": "tranh",
      "tradeMode": "spot",
      "region": "vn",
      "views": [
        {
          "expertId": "ck-5-phut",
          "stance": "Không đẹp",
          "sig": "avoid",
          "date": "03/08",
          "line": "Từ Livestream · 03/08 (03/08). Điểm vào: Đang 72–73, kẹp giữa MA20 và cản 75. Mục tiêu: Lên 75 chẳng đáng bao nhiêu."
        },
        {
          "expertId": "thai-pham",
          "stance": "Tránh",
          "sig": "avoid",
          "date": "01/08",
          "line": "Từ Tập 42 · Tuần 31 (01/08)."
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
      "stance": "CẦM CHẶT — trong rổ FTSE",
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
          "body": "Tập 40 (26/07): \"bây giờ ngân hàng rẻ quá. Thậm chí là Vietcombank về cái vùng còn thấp hơn cả cái thời điểm tháng 4 năm 2025.\" Giữa VCB và BID, Thái Phạm nói chọn con nào cũng được — ai đang cầm BID thì cầm luôn. CTG cũng rẻ nhưng chưa về mức tháng 4/2025 như hai mã này. Trong video công khai cùng ngày, ông xếp VCB/BID/CTG/TCB/MBB/GAS vào nhóm \"không thể phá sản được\" — nền giá tốt bị phá vỡ không phải lý do để bán: \"cầm nắm nó 5 năm các anh chị sẽ có lời ở vùng thấp\".",
          "expertId": "thai-pham"
        },
        {
          "title": "Góc nhìn AzFin",
          "body": "AzFin #06 (24/07) xếp ngân hàng vào 1 trong 6 nhóm nhặt dần: sau thời gian nhóm quốc doanh định giá đắt hơn hẳn nhóm tư nhân, nay chính nhóm quốc doanh lại \"hấp dẫn phải nói là rất hấp dẫn\", có cổ phiếu P/E chưa đến 6 lần — \"hàng đầu Việt Nam, vừa an toàn vừa hấp dẫn\".",
          "expertId": "azfin"
        },
        {
          "expertId": "quang-dung",
          "title": "Quang Dũng (20/06): góc chính sách, không phải góc giá",
          "body": "Ông tiếp cận nhóm bank từ cơ chế chứ không từ định giá. Dự thảo Thông tư 22 nâng tỉ lệ vốn ngắn hạn cho vay trung và dài hạn từ 30% (áp dụng từ tháng 10/2023) lên 40% — đảo chiều lộ trình siết dần 50 → 40 → 37 → 34 → 30 nhiều năm qua. Phòng phân tích của ông khảo sát đủ 27 ngân hàng: nhóm có tỉ lệ trên 25% đang bị chặn trần nên hưởng lợi rõ, nhóm chỉ khoảng 15% thì \"xưa giờ không kẹt nên cũng không hưởng lợi\". Big 4 gồm Agribank, Vietcombank, CTG và BIDV nằm trong nhóm hưởng lợi thêm từ cơ chế tính 20% tiền gửi Kho bạc Nhà nước vào huy động."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "CẦM CHẶT — trong rổ FTSE",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "quang-dung",
          "dir": "Quản trị rủi ro tốt — trích lập chỉ 1,9%",
          "sig": "up",
          "entry": "Định giá thấp hơn nhiều so với chính nó 6 năm",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "15/08",
          "note": "Từ Toàn ngành ngân hàng (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "GIỮ",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "Vốn hóa 400–500 nghìn tỷ nên chạy chậm như Apple",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Khá lên nhờ thoái vốn nhà nước",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "07/08",
          "note": "Từ Bài đăng · 06–07/08 (07/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Đợi điều chỉnh thì mua",
          "sig": "up",
          "entry": "Chờ nhịp chỉnh",
          "target": "—",
          "stop": "—",
          "status": "waiting",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "CHỜ ĐÁY 2",
          "sig": "wait",
          "entry": "Điểm mua hiện tại \"không đẹp\" (mua đuổi)",
          "target": "Hưởng lợi NHNN nới thêm",
          "stop": "CTG cụt đầu nhiều nhất, dưới M20",
          "status": "waiting",
          "date": "31/07",
          "note": "Cả 3 bank quốc doanh chạy giá 31/07 theo tin NHNN; nắm giữ dài hạn thì chờ hai đáy hoặc kiểm định lại đáy."
        },
        {
          "expertId": "thai-pham",
          "dir": "Giữ",
          "sig": "up",
          "entry": "Không mua mới",
          "target": "VCB vùng rất rẻ (mẫu Spring)",
          "stop": "BID cực kỳ thấp — không bán",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
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
        },
        {
          "expertId": "quang-dung",
          "dir": "An toàn hơn",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "Nợ xấu chỉ ~1%, dùng làm mốc đối chiếu",
          "status": "active",
          "date": "18/07",
          "note": "Từ VPB · Quý 2/2026 (18/07)."
        },
        {
          "expertId": "quang-dung",
          "dir": "HƯỞNG LỢI THÔNG TƯ 22",
          "sig": "up",
          "entry": "—",
          "target": "Nhóm Big 4 hưởng lợi cơ chế 20% tiền gửi KBNN",
          "stop": "—",
          "status": "active",
          "date": "20/06",
          "note": "Dự thảo nâng trần vốn ngắn hạn cho vay trung–dài hạn từ 30% lên 40%; khảo sát 27 ngân hàng, nhóm tỉ lệ trên 25% hưởng lợi rõ hơn."
        }
      ],
      "industry": "Ngân hàng",
      "basket": "dai-han",
      "tradeMode": "spot",
      "region": "vn",
      "debate": "Ba kênh cùng nói MUA nhưng vì ba lý do khác nhau, và điều đó quyết định thời điểm vào lệnh. CK 5 phút chờ tín hiệu kỹ thuật (đáy 2). Thái Phạm mua vì định giá — đã về dưới cả đáy tháng 4/2025. AzFin nhặt dần theo kỷ luật tích sản. Quang Dũng thì không nhìn giá mà nhìn cơ chế: Thông tư 22 nới trần cho vay và cơ chế tiền gửi Kho bạc là thứ sẽ cải thiện lợi nhuận nhóm Big 4 trong các quý tới.",
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "CẦM CHẶT — trong rổ FTSE",
          "sig": "up",
          "date": "23/08",
          "line": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "quang-dung",
          "stance": "Quản trị rủi ro tốt — trích lập chỉ 1,9%",
          "sig": "up",
          "date": "15/08",
          "line": "Từ Toàn ngành ngân hàng (15/08). Điểm vào: Định giá thấp hơn nhiều so với chính nó 6 năm."
        },
        {
          "expertId": "ck-5-phut",
          "stance": "CHỜ ĐÁY 2",
          "sig": "wait",
          "date": "31/07",
          "line": "Cả 3 bank quốc doanh chạy giá 31/07 theo tin NHNN; nắm giữ dài hạn thì chờ hai đáy hoặc kiểm định lại đáy. Điểm vào: Điểm mua hiện tại \"không đẹp\" (mua đuổi). Mục tiêu: Hưởng lợi NHNN nới thêm."
        },
        {
          "expertId": "azfin",
          "stance": "NHẶT DẦN",
          "sig": "up",
          "date": "24/07",
          "line": "1 trong 6 nhóm ngành ưu tiên. Điểm vào: Bank quốc doanh P/E <6x. Mục tiêu: Nắm giữ dài hạn."
        }
      ]
    },
    {
      "key": "ctg",
      "symbol": "CTG",
      "name": "VietinBank",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:CTG",
      "sig": "up",
      "stance": "CẦM CHẶT — trong rổ FTSE",
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
          "body": "Tập 40: \"Công thương cũng rất rẻ đúng không? Nhưng nếu nói về mức độ rẻ thì không thể rẻ bằng Vietcombank và BIDV được. Bởi vì BIDV và Vietcombank đã về mức của tháng 4 năm 2025 rồi, còn CTG nó chưa về.\" Trong video công khai, CTG vẫn nằm trong nhóm ngân hàng \"không thể phá sản được\" nên không có lý do gì phải bán khi nền giá tốt bị phá vỡ.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "CẦM CHẶT",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "CẦM — không hấp dẫn bằng vùng 28",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "MUA",
          "sig": "up",
          "entry": "Vốn hóa ngang ngửa, thấp hơn BID một chút",
          "target": "Hưởng lợi chỉ thị sắp xếp vốn nhà nước",
          "stop": "—",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "MUA MỚI được",
          "sig": "up",
          "entry": "Điểm break nền-trên-nền hôm nay",
          "target": "Đã +9–10% từ vùng 29,5",
          "stop": "Đánh T+, hàng về có thể oẳng",
          "status": "active",
          "date": "07/08",
          "note": "Từ Livestream · 07/08 (07/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Đợi điều chỉnh thì mua",
          "sig": "up",
          "entry": "Chờ nhịp chỉnh",
          "target": "—",
          "stop": "—",
          "status": "waiting",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "CHỜ ĐÁY 2",
          "sig": "wait",
          "entry": "Điểm mua hiện tại \"không đẹp\" (mua đuổi)",
          "target": "Hưởng lợi NHNN nới thêm",
          "stop": "CTG cụt đầu nhiều nhất, dưới M20",
          "status": "waiting",
          "date": "31/07",
          "note": "Cả 3 bank quốc doanh chạy giá 31/07 theo tin NHNN; nắm giữ dài hạn thì chờ hai đáy hoặc kiểm định lại đáy."
        },
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
        },
        {
          "expertId": "quang-dung",
          "dir": "HƯỞNG LỢI THÔNG TƯ 22",
          "sig": "up",
          "entry": "—",
          "target": "Nằm trong Big 4 hưởng lợi cơ chế tiền gửi KBNN",
          "stop": "—",
          "status": "active",
          "date": "20/06",
          "note": "Cùng nhóm với Agribank, VCB, BIDV trong danh sách hưởng lợi ông nêu."
        }
      ],
      "industry": "Ngân hàng",
      "basket": "dai-han",
      "tradeMode": "spot",
      "region": "vn",
      "debate": "Thái Phạm và CK 5 phút xếp CTG SAU VCB và BID vì giá \"chưa về\" mức tháng 4/2025. Quang Dũng không phân biệt trong nhóm — với ông cả Big 4 đều nằm trong nhóm hưởng lợi cơ chế Thông tư 22 và tiền gửi Kho bạc như nhau.",
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "CẦM CHẶT",
          "sig": "up",
          "date": "23/08",
          "line": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "ck-5-phut",
          "stance": "MUA MỚI được",
          "sig": "up",
          "date": "07/08",
          "line": "Từ Livestream · 07/08 (07/08). Điểm vào: Điểm break nền-trên-nền hôm nay. Mục tiêu: Đã +9–10% từ vùng 29,5."
        },
        {
          "expertId": "quang-dung",
          "stance": "HƯỞNG LỢI THÔNG TƯ 22",
          "sig": "up",
          "date": "20/06",
          "line": "Cùng nhóm với Agribank, VCB, BIDV trong danh sách hưởng lợi ông nêu. Mục tiêu: Nằm trong Big 4 hưởng lợi cơ chế tiền gửi KBNN."
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
      "stance": "CHỜ SAU LỄ — Nghị quyết 40 giữ nhà nước trên 90%",
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
          "body": "Video công khai 26/07: khi được hỏi \"nền giá tốt đã bị phá vỡ thì có nên giữ không\", Thái Phạm trả lời với nhóm VCB, BID, CTG, TCB, MBB và GAS: \"Chẳng có lý do gì không giữ, bởi những doanh nghiệp này không thể phá sản được\" — cầm 5 năm sẽ có lời ở vùng thấp. Nguyên tắc chung ông nêu: chỉ buộc phải bán khi doanh nghiệp dính vấn đề pháp lý, bất ổn ban lãnh đạo, hoặc ngành nghề suy thoái/bị AI thay thế — GAS không thuộc các trường hợp đó.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "CHỜ SAU LỄ — đang đi nền tuần rưỡi",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "waiting",
          "date": "27/08",
          "note": "Từ Livestream · 27/08 (27/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "BREAKOUT LẦN 2 — mua được cả ngày (mẫu hình cờ tăng giá)",
          "sig": "up",
          "entry": "Điểm break 18/08",
          "target": "—",
          "stop": "Thủng cây break",
          "status": "active",
          "date": "18/08",
          "note": "Từ Livestream · 18/08 (18/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "GIỮ — chờ vượt 80 mới gia tăng",
          "sig": "wait",
          "entry": "Giá vốn quanh 72",
          "target": "Vượt 80 với thanh khoản lớn",
          "stop": "—",
          "status": "active",
          "date": "17/08",
          "note": "Từ Livestream · 17/08 (17/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "MUA TÍCH LŨY",
          "sig": "up",
          "entry": "Vùng 60–62",
          "target": "Tích lũy dài hạn",
          "stop": "—",
          "status": "active",
          "date": "01/08",
          "note": "Tập 42: trong nhóm cổ phiếu top đầu, GAS về 60–62 thì mua tích lũy."
        },
        {
          "expertId": "thai-pham",
          "dir": "Cân nhắc mua dài hạn",
          "sig": "up",
          "entry": "Vùng ~60",
          "target": "Đã về vùng khá rẻ",
          "stop": "Rẻ có thể rẻ hơn",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
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
      ],
      "industry": "Dầu khí",
      "basket": "dai-han",
      "tradeMode": "spot",
      "region": "vn",
      "views": [
        {
          "expertId": "ck-5-phut",
          "stance": "CHỜ SAU LỄ — đang đi nền tuần rưỡi",
          "sig": "wait",
          "date": "27/08",
          "line": "Từ Livestream · 27/08 (27/08)."
        },
        {
          "expertId": "thai-pham",
          "stance": "MUA TÍCH LŨY",
          "sig": "up",
          "date": "01/08",
          "line": "Tập 42: trong nhóm cổ phiếu top đầu, GAS về 60–62 thì mua tích lũy. Điểm vào: Vùng 60–62. Mục tiêu: Tích lũy dài hạn."
        }
      ]
    },
    {
      "key": "msb",
      "symbol": "MSB",
      "name": "Ngân hàng Hàng Hải",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:MSB",
      "sig": "up",
      "stance": "GIỮ — chưa thủng 15,5",
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
          "body": "Tập 40: MSB được nêu đích danh trong nhóm cần chốt lời — \"ông nào có hàng chốt đi, nó chưa phân phối xong thôi\". Ông dùng khung sườn trái/sườn phải: mã đang ở sườn trái (giai đoạn phân phối chưa kết thúc) thì còn nhịp để thoát, nhưng khi sang sườn phải thì \"cứ mua là lỗ\" như trường hợp SSI.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "GIỮ — chưa thủng 15,5",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "15,5",
          "status": "active",
          "date": "20/08",
          "note": "Từ Livestream · 20/08 (20/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "CHỐT LỜI",
          "sig": "down",
          "entry": "Ai có hàng thì chốt",
          "target": "Thoát trước khi gãy",
          "stop": "Đang sườn trái, chưa phân phối xong",
          "status": "waiting",
          "date": "26/07",
          "note": "Không mua mới."
        }
      ],
      "industry": "Ngân hàng",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "region": "vn",
      "views": [
        {
          "expertId": "ck-5-phut",
          "stance": "GIỮ — chưa thủng 15,5",
          "sig": "up",
          "date": "20/08",
          "line": "Từ Livestream · 20/08 (20/08)."
        },
        {
          "expertId": "thai-pham",
          "stance": "CHỐT LỜI",
          "sig": "down",
          "date": "26/07",
          "line": "Không mua mới. Điểm vào: Ai có hàng thì chốt. Mục tiêu: Thoát trước khi gãy."
        }
      ]
    },
    {
      "key": "dbc",
      "symbol": "DBC",
      "name": "Dabaco",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:DBC",
      "sig": "wait",
      "stance": "GIỮ — một nhịp hồi là về bờ",
      "aliases": [
        "dbc",
        "dabaco"
      ],
      "potential": 2,
      "caution": 4,
      "potentialNote": "Vẫn nằm trong danh mục theo dõi trung–dài hạn của CK 5 phút, mới vào 1–2 lệnh nên còn dư địa mua nếu tạo nền.",
      "cautionNote": "\"Xấu hơn thị trường rất nhiều\" — chính người khuyến nghị đang cản mua thêm; chưa có phương án đảo hàng.",
      "oneLiner": "Khởi tố tối 31/07 vụ tai nạn lao động (5 người chết, 8 bị thương); CK 5 phút: giảm nhưng sẽ không sàn như PNJ.",
      "thesis": [
        {
          "title": "Cập nhật 31/07: chính thức khởi tố",
          "body": "Tin điều tra ra ngày 25/07 liên quan tai nạn lao động khiến 5 người chết và 8 người bị thương; đến tối 31/07 có quyết định khởi tố. CK 5 phút đánh giá \"khởi tố cũng đúng quy trình thôi\" và dự báo phiên thứ Hai 3/8 Dabaco sẽ giảm, NHƯNG không giảm sàn hay giảm mạnh như PNJ vì bản chất vụ việc khác — PNJ là vấn đề pháp lý gắn với hoạt động kinh doanh cốt lõi và uy tín thương hiệu, còn đây là tai nạn lao động. Khuyến nghị: ai có hàng thì giữ đã, không mua thêm vì nguyên tắc không mua trên đà giảm.",
          "expertId": "ck-5-phut"
        },
        {
          "title": "Mã trong danh mục nhưng đang yếu bất thường",
          "body": "Trong video 27/07 khi trả lời về cổ phiếu trung–dài hạn đang lỗ, CK 5 phút nêu đích danh Dabaco cùng IGC là những mã \"xấu hơn thị trường rất nhiều\" ở thời điểm này. Điểm đáng chú ý: đây là những mã chính anh đã \"cố gắng để cản mọi người mua thêm rất nhiều rồi\" — danh mục mới vào một hoặc hai lệnh, vẫn trong giai đoạn đợi mua tiếp nhưng \"đừng mua bây giờ, trông nó xấu quá\". Anh cũng chưa đảo hàng vì \"chưa nghĩ ra được phương án nào tốt hơn\"; nếu thị trường có nhịp chững và xuất hiện cơ hội tốt hơn thì sẽ cân nhắc sau.",
          "expertId": "ck-5-phut"
        }
      ],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "GIỮ — chỉ cần một nhịp hồi là về bờ",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "27/08",
          "note": "Từ Livestream · 27/08 (27/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "GIỮ — chưa cắt",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "17/08",
          "note": "Từ Livestream · 17/08 (17/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "GIỮ — KHÔNG MUA THÊM",
          "sig": "avoid",
          "entry": "—",
          "target": "Giảm nhưng không sàn như PNJ",
          "stop": "Không mua trên đà giảm",
          "status": "active",
          "date": "31/07",
          "note": "Kiểm chứng phiên 3/8."
        },
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
      ],
      "industry": "Nông nghiệp & Chăn nuôi",
      "basket": "tranh",
      "tradeMode": "spot",
      "region": "vn"
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
          "body": "CK 5 phút nêu IGC cùng Dabaco là hai mã \"xấu hơn thị trường rất nhiều\" và cho biết ngay phiên 27/07 IGC đã thủng đáy — \"hôm nay thực sự nhìn con IGC nó thủng đáy với cả con BCM trông nó cũng chán\". Cũng như Dabaco, đây là mã anh đã cản mua thêm từ trước; danh mục mới vào 1–2 lệnh và hiện chưa xử lý gì — \"thời điểm hiện tại chưa xử lý gì đâu, chúng ta cứ giữ tiếp đã\".",
          "expertId": "ck-5-phut"
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
      ],
      "industry": "Giáo dục & Đa ngành",
      "basket": "tranh",
      "tradeMode": "spot",
      "region": "vn"
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
          "body": "BCM được CK 5 phút nhắc hai lần: ngày 22/07 khi liệt kê các cổ phiếu cơ bản đã gãy (\"BCM đục bao nhiêu đáy rồi\"), và ngày 27/07 khi cùng IGC bị đánh giá \"trông nó cũng chán\". Đây không phải mã anh khuyến nghị mua, chỉ là ví dụ cho trạng thái chung của cổ phiếu cơ bản trong nhịp giảm. Ở góc nhìn khác, AzFin (#06, 24/07) xếp bất động sản khu công nghiệp — ngành chính của Becamex — vào 6 nhóm đáng nhặt dần nhờ FDI mạnh và giá thuê tăng, nhưng không nêu đích danh BCM.",
          "expertId": "ck-5-phut"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Tránh",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "Đừng đụng vào",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
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
      ],
      "industry": "KCN & BĐS công nghiệp",
      "basket": "tranh",
      "tradeMode": "spot",
      "region": "vn",
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "Tránh",
          "sig": "avoid",
          "date": "01/08",
          "line": "Từ Tập 42 · Tuần 31 (01/08)."
        },
        {
          "expertId": "ck-5-phut",
          "stance": "ĐỨNG NGOÀI",
          "sig": "avoid",
          "date": "27/07",
          "line": "Đục nhiều đáy, chưa có nền. Mục tiêu: Chờ tín hiệu tạo đáy."
        }
      ]
    },
    {
      "key": "vin",
      "symbol": "VIC · VHM",
      "name": "Nhóm Vin (VIC/VHM/VRE)",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:VIC",
      "sig": "warn",
      "stance": "TRONG RỔ NHƯNG KHÔNG MUA — vùng cao",
      "aliases": [
        "vic",
        "vhm",
        "vre",
        "nhom vin",
        "vin group",
        "vinhome",
        "vinhomes",
        "vingroup"
      ],
      "potential": 1,
      "caution": 4,
      "potentialNote": "Không chuyên gia nào khuyến nghị mua — định giá đã rất cao sau 2 năm tăng 5–6 lần.",
      "cautionNote": "Chiếm >20% vốn hóa, là lý do chính index \"ảo\" so với danh mục thật — đọc sai chỉ số là hành động sai.",
      "oneLiner": "Không phải khuyến nghị mua — nhóm chi phối index; CK 5 phút (22/07): Vin giảm là ĐÁNG MỪNG vì sẽ cân bằng lại điểm số với midcap.",
      "thesis": [
        {
          "title": "Cập nhật 22/07: Vin bắt đầu giảm",
          "body": "Phiên 22/07 index −60 điểm hoàn toàn do Vin giảm. CK 5 phút coi đây là tin TỐT: nếu Vin giảm ~1 tuần thì điểm số sẽ cân bằng trở lại, chấm dứt tình trạng index \"lệch pha\" với midcap khiến nhà đầu tư mất phương hướng. Đồ thị VIC đã tạo đỉnh, mở \"ben\" đi xuống. Thái Phạm bổ sung từ phía dòng vốn: VHM chỉ cần chỉnh ~20% là VN-Index về 1.500. Cả hai đều KHÔNG mua hàng Vin (không tín hiệu). Với giá vốn 180–200 thì đã bán được; giá vốn thấp 50–100 chưa cần bán.",
          "expertId": "ck-5-phut"
        },
        {
          "title": "Vì sao phải theo dõi dù không giao dịch",
          "body": "Chứng khoán 5 phút (16–17/07): một nhóm ngành chỉ 3–4 cổ phiếu nhưng chiếm hơn 20% vốn hóa, hút tiền \"độc nhất vô nhị\" 2 năm qua với mức tăng 5–6 lần — làm mọi tín hiệu trên VN-Index (nến đảo chiều, đánh giá downtrend) bị chậm và nhiễu; chưa cực đoan như Hàn Quốc (Samsung + SK Hynix >50% vốn hóa) nhưng cùng bản chất. Thái Phạm (Tập 38) nhìn từ phía dòng vốn: VIC/VHM/VRE định giá đã rất cao và \"không thể tăng được nữa\" — quỹ ngoại mua cả rổ VN30/ETF bị kẹt chính vì cấu trúc này, và đó là một phần lý do họ rút. Kết luận thực dụng cho gia đình: đừng đánh giá thị trường qua điểm số index, hãy nhìn midcap.",
          "expertId": "ck-5-phut"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "KHÔNG KHOÁI Ở VÙNG CAO",
          "sig": "warn",
          "entry": "—",
          "target": "—",
          "stop": "Tây mua vùng này là bị úp bô",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "CHỜ ĐÓNG TRÊN 14 MỚI XÁC NHẬN ĐÁY",
          "sig": "wait",
          "entry": "—",
          "target": "Đóng trên 14",
          "stop": "—",
          "status": "waiting",
          "date": "20/08",
          "note": "Từ Livestream · 20/08 (20/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Mốc để canh lướt",
          "sig": "wait",
          "entry": "Chạm 56–57",
          "target": "Ngắn hạn có thể chỉnh về 60, thậm chí 56",
          "stop": "Là hàn thử biểu của cả index",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "Không cầm qua ngày chia",
          "sig": "avoid",
          "entry": "GDKHQ 06/8, chia 1:1",
          "target": "—",
          "stop": "Giá quá cao",
          "status": "active",
          "date": "03/08",
          "note": "Từ Livestream · 03/08 (03/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Tránh",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "\"Neo cao đáng sợ\" — rủi ro kéo cả thị trường",
          "status": "active",
          "date": "31/07",
          "note": "Từ Bài đăng · 24–31/07 (31/07)."
        },
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
      ],
      "industry": "Bất động sản",
      "basket": "tranh",
      "tradeMode": "spot",
      "region": "vn",
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "KHÔNG KHOÁI Ở VÙNG CAO",
          "sig": "warn",
          "date": "23/08",
          "line": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "ck-5-phut",
          "stance": "CHỜ ĐÓNG TRÊN 14 MỚI XÁC NHẬN ĐÁY",
          "sig": "wait",
          "date": "20/08",
          "line": "Từ Livestream · 20/08 (20/08). Mục tiêu: Đóng trên 14."
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
          "body": "Theo Thái Phạm, Apple đang được dùng để giữ chỉ số S&P 500 với kiểu kéo \"bập bập rồi gap up\" — cùng khuôn mẫu với Broadcom và Oracle trước khi gãy. Về cơ bản: Siri gây thất vọng, và quan trọng nhất là iPhone 18/iPad/Mac tăng giá mạnh → sức mua giảm ngay từ lúc tăng giá. Phần doanh số đẹp hiện tại chỉ là \"sale-in\" (đẩy hàng xuống nhà phân phối trước khi tăng giá) — ăn được thêm một quý, nhưng guidance quý 3 sẽ khó khăn. Ông nói với kinh nghiệm 13 năm kinh doanh ngành hàng tiêu dùng: \"phần sale-in bán được xuống nhà phân phối, nhưng phần bán ra tiêu dùng nó khó\".",
          "expertId": "thai-pham"
        },
        {
          "title": "Kịch bản 30/07",
          "body": "BCTC công bố 30/07 là điểm quyết định. Hai kịch bản: hoặc gap-up đánh lừa rồi \"đỏ ngòm\" (kiểu Broadcom/Oracle), hoặc gãy thẳng. Nếu guidance Q3 yếu → \"gãy đau, gãy sâu luôn, về lại chen line\" — lúc đó mới là vùng cho ai muốn mua. Chiến lược vị thế: chỉ short 1/2 ở 320–330, giữ 1/2 sức mua để vào sau tin; giữ vị thế đến tháng 8–9 mới có ăn. Tuyệt đối không nhảy vào mua trước báo cáo.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "GIỮ LỆNH BÁN",
          "sig": "down",
          "entry": "—",
          "target": "290",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "HOLD tới 290",
          "sig": "down",
          "entry": "Đã mua 330",
          "target": "290",
          "stop": "—",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT — còn rớt tiếp",
          "sig": "down",
          "entry": "Đã chốt 1/2 ở phiên gap giảm 10%",
          "target": "Về vùng 29x",
          "stop": "—",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Đứng ngoài phần short",
          "sig": "wait",
          "entry": "Đã chốt 1/2, chưa mua lại",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "04/08",
          "note": "Từ Bài đăng · 04/08 (04/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Chốt lời short",
          "sig": "down",
          "entry": "Đã gia tăng 1/3 ngày 29/07",
          "target": "ĐẠT: -10% ngày 31/07",
          "stop": "Hạn tự đặt: \"cùng lắm tới 3/8\"",
          "status": "waiting",
          "date": "31/07",
          "note": "Từ Bài đăng · 24–31/07 (31/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Short",
          "sig": "down",
          "entry": "Chờ giật lên ~350",
          "target": "Báo cáo xấu → đục về 310",
          "stop": "—",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Short",
          "sig": "down",
          "entry": "Apple hoàn vốn; MU >1.080",
          "target": "Intel về 70",
          "stop": "—",
          "status": "active",
          "date": "23/07",
          "note": "Từ Tập 39 · Tuần 29 (23/07)."
        },
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
          "status": "active",
          "date": "18/07",
          "note": "Để dành sức mua cho sau tin."
        }
      ],
      "potential": 4,
      "caution": 3,
      "potentialNote": "Kèo short có catalyst rõ và gần (BCTC 30/07, guidance Q3 yếu vì tăng giá iPhone 18) — dư địa \"gãy về chen line\".",
      "cautionNote": "Đang bị kéo giữ chỉ số kiểu FOMO trap — có thể gap-up dọa trước khi gãy; chỉ đi 1/2 vị thế, không đòn bẩy.",
      "industry": "Công nghệ tiêu dùng",
      "basket": "ngan-han",
      "tradeMode": "margin",
      "region": "foreign"
    },
    {
      "key": "spacex",
      "symbol": "SpaceX",
      "name": "SpaceX (CBX)",
      "group": "Quốc tế",
      "tv": "",
      "sig": "down",
      "stance": "SHORT 2/3 — vừa vào thêm 1/3",
      "aliases": [
        "spacex",
        "cbx",
        "spcx"
      ],
      "oneLiner": "Insider đã rút ~110 tỷ đô tiền thật khỏi thương vụ; lock-up cuối năm tung cung gấp 8 lần — đích 60–70 đến đầu năm sau.",
      "thesis": [
        {
          "title": "Bản chất thương vụ IPO",
          "body": "Luận điểm xuyên suốt từ 17/06: SpaceX IPO chỉ bán 4,2% float để \"thổi\" định giá ~2.660 tỷ đô (Morningstar định giá ~780 tỷ) — mục tiêu thật của thương vụ là rút 110 tỷ đô tiền thật khỏi thị trường, không phải giá cổ phiếu. Retail mua đúng đỉnh vùng 200+; sau IPO không còn nhu cầu đỡ giá.",
          "expertId": "thai-pham"
        },
        {
          "title": "Cung sẽ tăng gấp 8 lần",
          "body": "Từ nay đến tháng 12/2026 còn 4 đợt giải phóng lock-up, nâng lượng cung lên gấp 8 lần hiện tại. Nhân viên gắn bó lâu năm được phát cổ phiếu ở giá vốn gần 0 — \"giá 180 hay 150 thì vẫn là triệu phú, tội gì không bán\" khi giá trị thật chỉ 40–50 đô/cp. Kịch bản kỹ thuật: parabol gãy, nằm chết ~6 tháng; ai muốn mua thật sự phải đợi tháng 3/2027 hoặc khi tích lũy xong nền đáy.",
          "expertId": "thai-pham"
        },
        {
          "title": "Vị thế và kỷ luật",
          "body": "Short từ vùng 155 (đã show trong nhóm Telegram hội viên), cầm đúng 76.000 đô — không bồi thêm dù đang lãi, vì \"phải luôn tính đường lui, nhỡ nó điên kéo lên 300 thì cháy nhà\". Mục tiêu 80–87, giữ đến hết tháng 1/2027. Scorecard đã ghi nhận call \"định giá ảo\" ban đầu là ĐÚNG khi giá rơi từ 218–225 về ~157.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "SHORT THÊM khi hồi",
          "sig": "down",
          "entry": "140–146",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT THÊM 1/3 — nay tổng 2/3",
          "sig": "down",
          "entry": "Vùng hiện tại",
          "target": "Về 80–90",
          "stop": "29/6/2027 Elon được bán toàn bộ",
          "status": "active",
          "date": "21/08",
          "note": "Từ Tút hội viên · 21/08 chiều (21/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT 1/3",
          "sig": "down",
          "entry": "Vùng hiện tại; short thêm ở 165",
          "target": "Về 80–90 từ giờ tới 2027",
          "stop": "29/6/2027 Elon được bán toàn bộ",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT LẠI",
          "sig": "down",
          "entry": "Vùng 150 trở lại",
          "target": "Về 60–70 \"nằm trong tầm tay\"",
          "stop": "Sẽ có cây kéo để cover vị thế short",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT — mở khóa thêm 15% thứ năm",
          "sig": "down",
          "entry": "Đã thả một ít ở vùng 125",
          "target": "Tiếp tục giảm",
          "stop": "—",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Giữ short",
          "sig": "down",
          "entry": "Đang cầm từ 152",
          "target": "Về 60–70 trong 6 tháng",
          "stop": "Còn 85–90% cổ phiếu mở khoá tới T5/2027",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Short thêm",
          "sig": "down",
          "entry": "Chờ hồi ~125",
          "target": "Trước đợt giải lock-up",
          "stop": "Đang lãi ~30% từ 152",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
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
        },
        {
          "expertId": "thai-pham",
          "dir": "Short",
          "sig": "down",
          "entry": "Giữ từ ~155",
          "target": "80–87 (đến T1/2027)",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "Từ Tập 38 · Tuần 29 (18/07)."
        }
      ],
      "potential": 5,
      "caution": 3,
      "potentialNote": "Kèo tâm đắc nhất: 4 đợt unlock nâng cung gấp 8 lần, giá trị thật 40–50 đô vs thị giá ~157 — đích 80–87.",
      "cautionNote": "Biến động điên rồ, có thể kéo ngược mạnh — bắt buộc vị thế nhỏ, không bồi, không margin; giữ tới T1/2027.",
      "industry": "Hàng không vũ trụ",
      "basket": "ngan-han",
      "tradeMode": "margin",
      "region": "foreign"
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
          "body": "Intel công bố Q2 vượt kỳ vọng, mở phiên after-hours tăng 11% rồi \"xìu xuống rất nhanh\", phiên thứ Sáu đóng giảm gần 8%. Lý do theo Thái Phạm: dòng tiền âm, mảng Foundry lỗ rất lớn, dự kiến đầu tư tiếp 20 tỷ đô vào AI năm 2026 và có mùi phát hành cổ phiếu/trái phiếu pha loãng. Luận điểm gốc ông giữ từ 6 tuần trước: doanh thu mảng AI Foundry chủ yếu là nội bộ tập đoàn \"tay trái bán tay phải\" — \"mang tính chất hơi lừa đảo một tí xíu\". Mục tiêu kỹ thuật: lấp lại gap vùng 70, tức −50% từ đỉnh theo \"quy tắc 50\".",
          "expertId": "thai-pham"
        },
        {
          "title": "Hành trình vị thế",
          "body": "Short Intel là ví dụ Thái Phạm hay dùng để dạy về kiên nhẫn: vào lệnh vùng 130 (giá bình quân 132–134), bị thị trường kéo ngược lên mất 11–15% \"rất khó chịu\" — nhưng nhờ đánh vị thế vừa phải, không margin, ông giữ được lệnh và hiện lãi ~30%. Thứ Sáu tuần 29 đã chốt lời 1/2; kế hoạch đợi giá hồi lên vùng ~115 để short tiếp.",
          "expertId": "thai-pham"
        },
        {
          "title": "Mục tiêu cuối",
          "body": "\"Đích đến của tôi vẫn luôn là vùng 77.\" Intel nằm trong bức tranh lớn: chu kỳ bán dẫn đã qua đỉnh kéo rướn, sẽ có những nhịp hồi \"loáng ngoáng\" rồi gãy tiếp. Nhóm gãy tiếp theo sau AI chip/bộ nhớ theo ông là cyber security (Palo Alto, Fortinet, CrowdStrike).",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "GIỮ SHORT",
          "sig": "down",
          "entry": "—",
          "target": "70",
          "stop": "Phải lấp lại gap",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Giữ lệnh short",
          "sig": "down",
          "entry": "Đang có vị thế",
          "target": "Còn điều chỉnh tiếp",
          "stop": "—",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Short thêm",
          "sig": "down",
          "entry": "Chờ hồi ~92",
          "target": "Lấp gap vùng 70",
          "stop": "Đã chốt lời 1/2",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
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
          "dir": "Short",
          "sig": "down",
          "entry": "Apple hoàn vốn; MU >1.080",
          "target": "Intel về 70",
          "stop": "—",
          "status": "active",
          "date": "23/07",
          "note": "Từ Tập 39 · Tuần 29 (23/07)."
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
          "status": "active",
          "date": "18/07",
          "note": "Đợi nhịp hồi kỹ thuật."
        }
      ],
      "potential": 3,
      "caution": 3,
      "potentialNote": "Còn dư địa về đích ~77; đã chứng minh đúng hướng (+30%, chốt 1/2).",
      "cautionNote": "Phần dễ đã ăn xong; các nhịp hồi \"loáng ngoáng\" có thể dí ngược 10%+ như giai đoạn đầu.",
      "industry": "Bán dẫn",
      "basket": "ngan-han",
      "tradeMode": "margin",
      "region": "foreign"
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
          "body": "MU là lệnh Thái Phạm mô tả là \"dã man\": short vùng 1.100–1.120, bị kéo ngược -15–16%, có hôm gần về hòa lại bị giật mất hết lời — \"có những nỗi đau không thể nói được cùng ai\". Không margin + không tham mới giữ được lệnh; đến giữa tháng 7 lãi hơn 20% và đã chốt 1/2 vào thứ Sáu (dự phòng hồi kỹ thuật 1–2 phiên).",
          "expertId": "thai-pham"
        },
        {
          "title": "Luận điểm bộ nhớ/AI",
          "body": "Nằm trong thesis lớn: dư thừa công suất AI bắt đầu (XAI, Meta phải cho thuê lại), người mua sẽ tính lại việc trả giá đắt cho RAM/chip nhớ của Nvidia, SK Hynix, Micron khi có lựa chọn Trung Quốc rẻ hơn (mô hình Kimi K3 ngang Fable 5/GPT-5.6 với 60% giá). Chu kỳ bán dẫn: \"mỗi cổ phiếu có mùa nở hoa và mùa lụi tàn\".",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Giữ lệnh short",
          "sig": "down",
          "entry": "Đang có vị thế",
          "target": "Còn điều chỉnh tiếp",
          "stop": "—",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Chốt 1/2",
          "sig": "down",
          "entry": "Chốt đầu phiên 29/07",
          "target": "Short lại 1/2 sau 2–4 tuần",
          "stop": "Phiên sáng -8..-11% \"vượt mong đợi\"",
          "status": "waiting",
          "date": "31/07",
          "note": "Từ Bài đăng · 24–31/07 (31/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Short khi giật",
          "sig": "down",
          "entry": "PANW 172–178 · CRWD ~190 · MRVL ~192 · MU ~890",
          "target": "Nhóm chip nhớ & cyber còn giảm",
          "stop": "—",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Short",
          "sig": "down",
          "entry": "Apple hoàn vốn; MU >1.080",
          "target": "Intel về 70",
          "stop": "—",
          "status": "active",
          "date": "23/07",
          "note": "Từ Tập 39 · Tuần 29 (23/07)."
        },
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
      "cautionNote": "Mã \"dã man\" nhất: từng dí ngược 15–16% trước khi có quả ngọt — không margin mới sống sót.",
      "industry": "Bán dẫn",
      "basket": "ngan-han",
      "tradeMode": "margin",
      "region": "foreign"
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
          "body": "Thái Phạm short Samsung \"đúng đỉnh\" khi cảnh báo margin Hàn Quốc lập kỷ lục. Kospi hiện rơi trong trạng thái margin call dây chuyền — nhà đầu tư cá nhân \"cháy tài khoản\", giảm 8%/ngày là chuyện thường; ông kể hội viên tâm sự \"không dám nói với chồng\". Đầu tuần 20–21/07 là điểm nóng: Samsung nhiều khả năng gãy về 214.000 KRW.",
          "expertId": "thai-pham"
        },
        {
          "title": "Kịch bản sâu hơn",
          "body": "Nếu là \"cô zin\" (không đòn bẩy) thì vùng hồi thật sự theo ông phải về ~170.000 KRW: \"thị trường tài chính không có sự nhân từ — đặc biệt đám Hàn, Nhật đánh khùng điên đòn bẩy\". Cơn sốt margin Hàn có thể lan và cộng hưởng với nhịp đánh Iran của Mỹ — đè cả Nikkei (test 58.700) lẫn chứng khoán Mỹ trong tuần tới.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "HỒI RỒI CHỊU TRẬN",
          "sig": "down",
          "entry": "—",
          "target": "~297.500 KRW",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Hồi kỹ thuật rồi gãy tiếp",
          "sig": "down",
          "entry": "—",
          "target": "Kéo lên ~300.500 KRW",
          "stop": "—",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Còn điều chỉnh",
          "sig": "down",
          "entry": "—",
          "target": "Về vùng 200.000 KRW",
          "stop": "Dân bắt đầu thua lỗ nặng",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Hồi kỹ thuật",
          "sig": "wait",
          "entry": "—",
          "target": "~281.500 KRW",
          "stop": "Hàn đã hết tiền",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Đợi vùng 220.000 KRW",
          "sig": "wait",
          "entry": "220k",
          "target": "Lướt lại cùng nhóm bán dẫn",
          "stop": "—",
          "status": "waiting",
          "date": "04/08",
          "note": "Từ Bài đăng · 04/08 (04/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Chờ bắt đáy",
          "sig": "wait",
          "entry": "Test lại vùng ~186",
          "target": "Short đang ăn rất nhiều",
          "stop": "Giật lên giật xuống, không thẳng",
          "status": "waiting",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
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
          "dir": "Short",
          "sig": "down",
          "entry": "Đợi Kospi ~7.700",
          "target": "Theo đà margin call",
          "stop": "—",
          "status": "active",
          "date": "23/07",
          "note": "Từ Tập 39 · Tuần 29 (23/07)."
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
      "cautionNote": "Hàn Quốc \"bạo phát bạo tàn\", giật ±8%/phiên — vị thế phải rất nhỏ, biến động cực lớn.",
      "industry": "Bán dẫn & Điện tử tiêu dùng",
      "basket": "ngan-han",
      "tradeMode": "margin",
      "region": "kr"
    },
    {
      "key": "spx",
      "symbol": "S&P 500 · US30",
      "name": "Chỉ số Mỹ — S&P 500 & Dow Jones",
      "group": "Quốc tế",
      "tv": "TVC:SPX",
      "sig": "down",
      "stance": "HOLD SHORT — chưa chốt, dư địa còn giảm",
      "aliases": [
        "s&p",
        "sp500",
        "us30",
        "dow",
        "s&p 500"
      ],
      "oneLiner": "Sau FOMC 29/07: Dow −1.100 điểm (−2,2%), S&P 500 −1,5% — phiên giảm mạnh nhất từ T4/2025 vì lợi suất 30 năm vọt 5,2%. Năm bầu cử giữa nhiệm kỳ thường điều chỉnh 17–21% sau tháng 7 — chờ về ~7.000 tích lũy.",
      "thesis": [
        {
          "title": "Vết nứt thanh khoản",
          "body": "Thị trường Mỹ đang bị rút tiền thật quy mô lớn: SpaceX IPO hút 110 tỷ, Google phát hành 85 tỷ, SK Hynix-liên quan 26,5 tỷ; OpenAI và Anthropic xếp hàng IPO tiếp. \"Không thị trường nào chịu được lượng bán giấy này.\" Trong khi đó margin nhà đầu tư cá nhân: +86,5 tỷ đô riêng tháng 6, +281 tỷ trong 3 tháng, +494 tỷ trong 12 tháng (+50% so cùng kỳ) — đạt 1,4% vốn hóa S&P 500, ngang đỉnh 2018 và vượt đỉnh dotcom (1,1%). \"Cứ khi nào tham thì chết — hết tiền thì phải sập, chẳng quan trọng P/E rẻ hay đắt.\"",
          "expertId": "thai-pham"
        },
        {
          "title": "Chiến thuật theo chỉ số",
          "body": "US30 và S&P 500: đã bắt đầu short được, \"thậm chí short tốt\". Nasdaq: đợi hồi kỹ thuật 1–2 phiên rồi vào — nhưng cẩn thận \"nhiều khi phiên châu Á không kịp cho hồi\". Lưu ý thực chiến từ chính lệnh US30 của ông: trong ngày giá giật hai đầu rất mạnh (đầu phiên -0,8% rồi kéo ngược +0,3% mới gãy) — ai short cường độ cao kèm margin lớn sẽ bị quét mất vị thế trước khi đúng hướng. Đánh nhỏ, không margin.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "GIỮ SHORT — điều chỉnh tiếp tuần tới",
          "sig": "down",
          "entry": "Hồi về ~7.750 thì short thêm",
          "target": "Chốt 7.500 · xa hơn 7.000",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "HOLD SHORT — chưa chốt, dư địa còn giảm",
          "sig": "down",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "21/08",
          "note": "Từ Tút hội viên · 21/08 sáng (21/08)."
        },
        {
          "expertId": "lcg-huy",
          "dir": "DCA ĐỀU ĐẶN — không chờ timing dù đang ở đỉnh mọi thời đại",
          "sig": "wait",
          "entry": "Định kỳ hàng tháng",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "19/08",
          "note": "Từ Video · 19/08 (19/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT 2/3 vị thế — ưu tiên",
          "sig": "down",
          "entry": "Đỉnh 7.816, tăng không có volume",
          "target": "Điều chỉnh 10–12% là bình thường",
          "stop": "—",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "GIỮ SHORT",
          "sig": "down",
          "entry": "Vẫn hold được",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "13/08",
          "note": "Từ Bài đăng · 11–13/08 (13/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT",
          "sig": "down",
          "entry": "Nếu kéo upthrust thì short 3.160",
          "target": "Đợt tăng là để ra hàng",
          "stop": "3.250, hoặc đỉnh + 200 giá",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT 1/2 ở kháng cự",
          "sig": "down",
          "entry": "Chỉ short khi tăng quá đà vào kháng cự",
          "target": "Take profit ngay khi về hỗ trợ",
          "stop": "Vượt là dừng lỗ NGAY",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT — đã mua lại 1/2 vị thế",
          "sig": "down",
          "entry": "Vùng hiện tại, \"S dần đc\"",
          "target": "Upthrust phân phối Wyckoff gãy xuống",
          "stop": "54.005 (một chỗ khác ông ghi 54.055)",
          "status": "active",
          "date": "04/08",
          "note": "Từ Bài đăng · 04/08 (04/08)."
        },
        {
          "expertId": "lcg-huy",
          "dir": "Giữ 50% danh mục",
          "sig": "up",
          "entry": "Không nêu mốc giá — mua theo tỷ trọng",
          "target": "Nắm dài hạn",
          "stop": "Không nêu",
          "status": "active",
          "date": "02/08",
          "note": "Từ Đổi danh mục · 02/08 (02/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Giữ short",
          "sig": "down",
          "entry": "Short ở vùng cao đỉnh cũ",
          "target": "Uptrust ~7.700–7.800 rồi gãy về 7.000",
          "stop": "Đừng short ngang chừng",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Giữ short",
          "sig": "down",
          "entry": "Nhịp hồi hiện tại",
          "target": "\"Như Intel trước đây trước khi rụng\"",
          "stop": "—",
          "status": "active",
          "date": "31/07",
          "note": "Từ Bài đăng · 24–31/07 (31/07)."
        },
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
          "dir": "Short",
          "sig": "down",
          "entry": "Short tốt",
          "target": "Chốt vùng thấp",
          "stop": "—",
          "status": "active",
          "date": "23/07",
          "note": "Từ Tập 39 · Tuần 29 (23/07)."
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
      "cautionNote": "Chỉ số giật hai đầu trong phiên (-0,8% rồi +0,3%) quét vị thế — short cường độ cao kèm margin là chết trước khi đúng.",
      "industry": "Chỉ số",
      "basket": "ngan-han",
      "tradeMode": "margin",
      "region": "foreign",
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "GIỮ SHORT — điều chỉnh tiếp tuần tới",
          "sig": "down",
          "date": "23/08",
          "line": "Từ Tập 46 (Hội viên) · 23/08 (23/08). Điểm vào: Hồi về ~7.750 thì short thêm. Mục tiêu: Chốt 7.500 · xa hơn 7.000."
        },
        {
          "expertId": "lcg-huy",
          "stance": "DCA ĐỀU ĐẶN — không chờ timing dù đang ở đỉnh mọi thời đại",
          "sig": "wait",
          "date": "19/08",
          "line": "Từ Video · 19/08 (19/08). Điểm vào: Định kỳ hàng tháng."
        }
      ],
      "debate": "Hai người nhìn vào hai thứ khác nhau nên không thật sự mâu thuẫn về sự kiện. Thái Phạm nhìn GIÁ và DÒNG TIỀN trong vài tháng tới: lợi suất 30 năm vọt lên, IPO hút tiền thật ra khỏi thị trường, năm bầu cử giữa nhiệm kỳ thường điều chỉnh 17–21% — nên short và chờ về vùng 7.000. LCG Huy nhìn CƠ CẤU chỉ số trong nhiều năm: 10 công ty chiếm 40% chỉ số và cùng đặt cược vào AI, nên rủi ro không nằm ở nhịp giảm sắp tới mà ở chỗ \"đa dạng\" chỉ còn là danh nghĩa — cách xử lý của anh không phải bán ra mà là hạ tỷ trọng xuống 50% rồi rải phần còn lại sang công ty vừa nhỏ, thị trường mới nổi và ngoài Mỹ. Điểm mấu chốt chưa ai kiểm chứng được: nhóm công ty top đầu có tạo nổi khoảng 2.000 tỷ đô doanh thu để xứng với định giá hiện tại hay không. Lưu ý khi đọc: một bên là lệnh short có mốc giá, một bên là tỷ trọng nắm giữ dài hạn — không đặt chung một thước đo được."
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
          "body": "Tập 38: \"Nasdaq gãy rồi — tuần tới sẽ hồi phục kỹ thuật một hai phiên, sau đó đà giảm tiếp tục.\" Lệnh short vì thế KHÔNG vào ngay như S&P/US30 mà đợi nhịp hồi; rủi ro duy nhất là nhịp hồi không kịp đến — cơn sốt margin Hàn Quốc lan sang và Mỹ đánh Iran có thể khiến \"phiên châu Á cho đi luôn\". Nằm trong bức tranh lớn: công nghệ Mỹ chịu 3 lực đè — IPO/phát hành hút tiền thật, AI capex dư thừa (XAI/Meta cho thuê lại công suất), và mô hình Trung Quốc giá rẻ (Kimi K3 ngang Fable 5/GPT-5.6 với 60% giá).",
          "expertId": "thai-pham"
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
          "status": "active",
          "date": "18/07",
          "note": "Canh sát — nhịp hồi có thể rất ngắn hoặc không đến."
        }
      ],
      "industry": "Chỉ số",
      "basket": "ngan-han",
      "tradeMode": "margin",
      "region": "foreign"
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
          "body": "Tập 38: \"Thằng Nhật thì cũng thế thôi — hồi phục kỹ thuật giống Mỹ được một hai hôm, sau đó lại phải về test lại vùng 58.700. Canh cao đập xuống, chẳng có vấn đề gì.\" Nhật nằm trong cụm Đông Á đang chịu margin call dây chuyền cùng Hàn Quốc; nếu cộng hưởng thêm nhịp Mỹ đánh Iran thì \"tuần tới nó đè nặng\".",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "ĐỢI HỒI RỒI SHORT",
          "sig": "down",
          "entry": "Vùng hồi phục",
          "target": "Tiếp tục điều chỉnh",
          "stop": "—",
          "status": "waiting",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT NHẸ — vào 1/3",
          "sig": "down",
          "entry": "Vùng hiện tại, vùng đỉnh vào thêm 2/3",
          "target": "Sẽ đi tích lũy đi ngang",
          "stop": "—",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Đà hồi phục đã xong",
          "sig": "down",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "13/08",
          "note": "Từ Bài đăng · 11–13/08 (13/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT khi hồi",
          "sig": "down",
          "entry": "68.600",
          "target": "Mirror với chỉ số công nghệ Mỹ",
          "stop": "—",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Hồi kỹ thuật rồi chỉnh tiếp",
          "sig": "down",
          "entry": "—",
          "target": "Cùng lắm ~68.000 (vai đầu vai)",
          "stop": "—",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Chưa có đà lên",
          "sig": "down",
          "entry": "—",
          "target": "\"Hồi rồi lại chỉnh thôi\"",
          "stop": "—",
          "status": "active",
          "date": "04/08",
          "note": "Từ Bài đăng · 04/08 (04/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Short",
          "sig": "down",
          "entry": "Giảm 2,8% phiên 24/07",
          "target": "\"Còn giảm rất mạnh\"",
          "stop": "—",
          "status": "active",
          "date": "26/07",
          "note": "Từ Tập 40 · Tuần 30 (26/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Short",
          "sig": "down",
          "entry": "Canh cao đập xuống",
          "target": "Test 58.700",
          "stop": "—",
          "status": "active",
          "date": "23/07",
          "note": "Từ Tập 39 · Tuần 29 (23/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT",
          "sig": "down",
          "entry": "Canh nhịp hồi 1–2 hôm",
          "target": "Test 58.700",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "Cùng cụm short Đông Á với Samsung/Kospi."
        }
      ],
      "industry": "Chỉ số",
      "basket": "ngan-han",
      "tradeMode": "margin",
      "region": "jp"
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
          "body": "Tập 38: vào short vùng 299–300, bị thị trường \"thịt lên thịt xuống\" kéo ngược gần 10% trước khi giảm. Thứ Sáu tuần 29 đã đóng 1/2 vị thế vì dự phòng nhịp hồi kỹ thuật 1–2 ngày, \"sau đó nó mới giảm tiếp — vài ngày nó mới giảm tiếp\". Cùng thesis với MU/Intel: chu kỳ chip đã qua đỉnh, dư cung AI bắt đầu hiện hình.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Giữ lệnh short",
          "sig": "down",
          "entry": "Đang có vị thế",
          "target": "Còn điều chỉnh tiếp",
          "stop": "—",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Chốt 1/2",
          "sig": "down",
          "entry": "Chốt đầu phiên 29/07",
          "target": "Short lại 1/2 sau 2–4 tuần",
          "stop": "Phiên sáng -8..-11% \"vượt mong đợi\"",
          "status": "waiting",
          "date": "31/07",
          "note": "Từ Bài đăng · 24–31/07 (31/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Short khi giật",
          "sig": "down",
          "entry": "PANW 172–178 · CRWD ~190 · MRVL ~192 · MU ~890",
          "target": "Nhóm chip nhớ & cyber còn giảm",
          "stop": "—",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
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
      ],
      "industry": "Bán dẫn",
      "basket": "ngan-han",
      "tradeMode": "margin",
      "region": "foreign"
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
          "body": "Tập 38: sau AI chip và bộ nhớ, nhóm gãy tiếp theo là cyber security — Palo Alto được nêu tên đầu tiên. Kỷ luật vị thế được nhấn rất kỹ ở kèo này: \"có 10.000 đô thì đánh đúng 10.000–15.000 đô\" (đòn bẩy ~0–1,5x), vào vừa phải vì không thể bắt đúng điểm gãy — \"mình đầu tư phải nhẹ nhàng, cứ hùng hổ all-in thì một nhịp tăng 20% là cháy tài khoản\".",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "GIỮ SHORT — vào thêm ít",
          "sig": "down",
          "entry": "Vùng hiện tại",
          "target": "—",
          "stop": "Phần vào thêm cắt lỗ ở đỉnh cũ",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "GIỮ SHORT — đang kẹp 1/2",
          "sig": "down",
          "entry": "—",
          "target": "—",
          "stop": "412",
          "status": "active",
          "date": "13/08",
          "note": "Từ Bài đăng · 11–13/08 (13/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Chờ short",
          "sig": "down",
          "entry": "Vùng ~350",
          "target": "—",
          "stop": "—",
          "status": "waiting",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Short (chờ hồi)",
          "sig": "down",
          "entry": "Đợi hồi lại rồi đánh tiếp",
          "target": "\"Rồi cũng như apple thôi\"",
          "stop": "Không đuổi giá",
          "status": "waiting",
          "date": "31/07",
          "note": "Từ Bài đăng · 24–31/07 (31/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Short khi giật",
          "sig": "down",
          "entry": "PANW 172–178 · CRWD ~190 · MRVL ~192 · MU ~890",
          "target": "Nhóm chip nhớ & cyber còn giảm",
          "stop": "—",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Tăng short",
          "sig": "down",
          "entry": "Giữ + tăng lệnh",
          "target": "Fortinet đã có thành quả",
          "stop": "Vị thế nhỏ",
          "status": "active",
          "date": "23/07",
          "note": "Từ Tập 39 · Tuần 29 (23/07)."
        },
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
      ],
      "industry": "An ninh mạng",
      "basket": "ngan-han",
      "tradeMode": "margin",
      "region": "foreign"
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
          "body": "Tập 38 nêu Fortinet ngay sau Palo Alto: \"thêm một mã nữa cũng bọn cyber security là Fortinet — các anh chị có thể short được.\" Luận điểm và kỷ luật vị thế giống hệt PANW: nhóm phòng thủ mạng là ứng viên gãy kế tiếp khi chu kỳ công nghệ Mỹ đảo chiều, nhưng phải vào nhỏ và kiên nhẫn.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "GIỮ SHORT — đi cùng nhóm CRWD",
          "sig": "down",
          "entry": "—",
          "target": "130",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Chờ short",
          "sig": "down",
          "entry": "Đỉnh cũ",
          "target": "Đập về 169",
          "stop": "KQKD tốt nhưng không cứu được giá",
          "status": "waiting",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Short (chờ hồi)",
          "sig": "down",
          "entry": "Đợi hồi lại rồi đánh tiếp",
          "target": "\"Rồi cũng như apple thôi\"",
          "stop": "Không đuổi giá",
          "status": "waiting",
          "date": "31/07",
          "note": "Từ Bài đăng · 24–31/07 (31/07)."
        },
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
      ],
      "industry": "An ninh mạng",
      "basket": "ngan-han",
      "tradeMode": "margin",
      "region": "foreign"
    },
    {
      "key": "crwd",
      "symbol": "CRWD",
      "name": "CrowdStrike",
      "group": "Quốc tế",
      "tv": "NASDAQ:CRWD",
      "sig": "wait",
      "stance": "MUA LẠI PHẦN ĐÃ CHỐT — nhóm Cyber đang lõm",
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
          "body": "Tập 38: \"ngày hôm nay nhìn CrowdStrike thì nó cũng bắt đầu cho giảm 4%, 3%\" — trong rổ cyber (PANW, FTNT, CRWD) đây là mã xác nhận hướng sớm nhất. Chiến lược chung của rổ không đổi: short với vị thế rất nhỏ, không đòn bẩy, xác định đây là nhóm gãy sau AI chip/bộ nhớ chứ không phải kèo ăn nhanh.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "MUA LẠI PHẦN ĐÃ CHỐT",
          "sig": "wait",
          "entry": "Vùng hiện tại",
          "target": "—",
          "stop": "Nhóm Cyber là nhóm duy nhất đang lõm",
          "status": "done",
          "date": "28/08",
          "note": "Từ Tút hội viên · 28/08 (28/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "GIỮ SHORT — chưa chốt",
          "sig": "down",
          "entry": "Đã bổ sung ở 224",
          "target": "160–170 mới chốt lời",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "GIỮ SHORT — vào thêm ít",
          "sig": "down",
          "entry": "Vùng hiện tại",
          "target": "Bảo mật truyền thống thua AI",
          "stop": "Phần vào thêm cắt lỗ ở đỉnh cũ",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "GIỮ SHORT — đang kẹp 1/2",
          "sig": "down",
          "entry": "—",
          "target": "—",
          "stop": "238",
          "status": "active",
          "date": "13/08",
          "note": "Từ Bài đăng · 11–13/08 (13/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "BỔ SUNG phần đã chốt",
          "sig": "down",
          "entry": "Vùng 220",
          "target": "—",
          "stop": "—",
          "status": "done",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT khi kéo lên",
          "sig": "down",
          "entry": "Đợi kéo 1 turn lên 210",
          "target": "\"Lại tẩn xuống — đang phân phối\"",
          "stop": "—",
          "status": "active",
          "date": "04/08",
          "note": "Từ Bài đăng · 04/08 (04/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Chờ short",
          "sig": "down",
          "entry": "Vùng 200–202",
          "target": "—",
          "stop": "—",
          "status": "waiting",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Short khi giật",
          "sig": "down",
          "entry": "PANW 172–178 · CRWD ~190 · MRVL ~192 · MU ~890",
          "target": "Nhóm chip nhớ & cyber còn giảm",
          "stop": "—",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
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
      ],
      "industry": "An ninh mạng",
      "basket": "ngan-han",
      "tradeMode": "margin",
      "region": "foreign"
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
          "body": "Tập 38 nhắc AMD ngắn gọn nhưng rõ: \"AMD cũng có thể hồi phục chút xíu, lại gãy thôi\" — cùng khuôn với Intel (đích ~77) và cả nhóm semis đã qua đỉnh kéo rướn. Call gốc \"semiconductor kéo rướn sẽ chỉnh mạnh\" từ 12/06 đã được scorecard ghi nhận ĐÚNG. Với người ngoài cuộc, đây là mã theo dõi xác nhận xu hướng nhóm hơn là kèo vào mới.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "SHORT khi lên",
          "sig": "down",
          "entry": "Quanh 575; có hàng thì mua thêm 585",
          "target": "Vùng tắc nghẽn, khó long khó short",
          "stop": "—",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Tiếp tục giữ short",
          "sig": "down",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT sau tin",
          "sig": "down",
          "entry": "Đã nhốt một ít hàng sau KQKD",
          "target": "Sell the news — giảm 9,21% sau giờ",
          "stop": "—",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Giữ lệnh short",
          "sig": "down",
          "entry": "Đang có vị thế",
          "target": "Còn điều chỉnh tiếp",
          "stop": "—",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Chốt 1/2",
          "sig": "down",
          "entry": "Chốt đầu phiên 29/07",
          "target": "Short lại 1/2 sau 2–4 tuần",
          "stop": "Phiên sáng -8..-11% \"vượt mong đợi\"",
          "status": "waiting",
          "date": "31/07",
          "note": "Từ Bài đăng · 24–31/07 (31/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Short",
          "sig": "down",
          "entry": "AMD 575; Google thủng hỗ trợ",
          "target": "Google dòng tiền âm; Tesla -7%",
          "stop": "—",
          "status": "active",
          "date": "23/07",
          "note": "Từ Tập 39 · Tuần 29 (23/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "THEO DÕI / SHORT NHỊP HỒI",
          "sig": "down",
          "entry": "Nhịp hồi kỹ thuật",
          "target": "Gãy tiếp theo nhóm semis",
          "stop": "—",
          "status": "active",
          "date": "18/07",
          "note": "Không phải kèo chính — kèo chính là Intel/MU."
        }
      ],
      "industry": "Bán dẫn",
      "basket": "ngan-han",
      "tradeMode": "margin",
      "region": "foreign"
    },
    {
      "key": "nvda",
      "symbol": "NVDA",
      "name": "Nvidia",
      "group": "Quốc tế",
      "tv": "NASDAQ:NVDA",
      "sig": "down",
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
          "body": "Từ Tập 37 Thái Phạm đã xếp Nvidia vào diện \"tránh — đụng MA200 bật, khó ăn\"; Tập 38 mô tả trạng thái \"ngày kéo ngày giảm\" và sẽ giảm chung với chỉ số. Nhưng luận điểm dài hạn mới là phần đáng đọc: nhu cầu RAM/chip đắt tiền của Nvidia đứng trước hai câu hỏi — dư thừa công suất AI (XAI, Meta đầu tư xong phải cho thuê lại) và lựa chọn Trung Quốc giá rẻ (Kimi K3 của Alibaba/Tencent ngang Fable 5/GPT-5.6 với 60% giá); \"Jensen Huang bán quốc xẻng thì phải ca ngợi câu chuyện thế kỷ, nhưng người mua phải đặt câu hỏi về tương lai.\"",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "GIỮ LỆNH BÁN",
          "sig": "down",
          "entry": "—",
          "target": "200",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT — thêm ở 241",
          "sig": "down",
          "entry": "241",
          "target": "Khoảng 205",
          "stop": "—",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Không ưu tiên",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "\"Vốn hóa cao dùng điều tiết chỉ số, ăn không nhiều\"",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
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
      ],
      "industry": "Bán dẫn",
      "basket": "tranh",
      "tradeMode": "margin",
      "region": "foreign"
    },
    {
      "key": "googl",
      "symbol": "GOOGL",
      "name": "Alphabet (Google)",
      "group": "Quốc tế",
      "tv": "NASDAQ:GOOGL",
      "sig": "wait",
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
          "body": "Báo cáo quý ra ngày 23–24/07 làm thay đổi hoàn toàn bức tranh. Lợi nhuận kỷ lục nhưng bản chất đến từ 77,1 tỷ đô LÃI CHƯA THỰC HIỆN, chủ yếu nhờ khoản đầu tư vào SpaceX — không phải tiền thật từ kinh doanh cốt lõi. Trong khi đó dòng tiền tự do ÂM 5,9 tỷ đô, lần đầu tiên trong lịch sử niêm yết. Nguyên nhân: guidance capex AI lên 205 tỷ đô cho năm 2026 và 2027 còn tăng tiếp → phải huy động hơn 100 tỷ đô tiền thật (phát hành 84,75 tỷ cổ phiếu + 20,3 tỷ trái phiếu). Thái Phạm chỉ ra Google đã cố kéo giá lên vùng ~400 để phát hành, và từ đó đã giảm 20%. Dự báo: sau khi tích lũy, nhiều khả năng về mốc 270 trong tháng 9. Rủi ro thêm: án phạt từ Ủy ban châu Âu. Ông đặt trong bối cảnh \"vòng xoáy con rắn tự ăn đuôi\" — hyperscaler rót tiền vào AI labs rồi các hãng chip lại dùng tiền đó mua cloud của chính hyperscaler; Moody's đã cảnh báo.",
          "expertId": "thai-pham"
        },
        {
          "title": "Kèo mua ngược dòng rổ short",
          "body": "Trong khi gần như toàn bộ danh sách Mỹ là short/tránh, Google từ Tập 37 được đặt kèo MUA với điều kiện giá đợi về ~320. Tập 38 bổ sung bối cảnh ngắn hạn: Google vừa phát hành hút 85 tỷ đô khỏi thị trường và \"sẽ giảm chung với US500\" — tức nhịp chỉnh chưa xong, kiên nhẫn đợi về vùng mục tiêu thay vì mua đuổi.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "BỎ QUA — khó short khó long",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "CHỐT SHORT — ngưng short",
          "sig": "wait",
          "entry": "Short từ 377",
          "target": "Mua lại sau bầu cử nếu Cộng hòa thắng",
          "stop": "—",
          "status": "waiting",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT",
          "sig": "down",
          "entry": "Giữ vị thế",
          "target": "—",
          "stop": "410",
          "status": "active",
          "date": "04/08",
          "note": "Từ Bài đăng · 04/08 (04/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Short",
          "sig": "down",
          "entry": "Vùng hiện tại",
          "target": "Hồi 7% chỉ là kỹ thuật để đỡ Apple",
          "stop": "Alphabet âm dòng tiền lần đầu từ khi lên sàn",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
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
        },
        {
          "expertId": "thai-pham",
          "dir": "Short",
          "sig": "down",
          "entry": "AMD 575; Google thủng hỗ trợ",
          "target": "Google dòng tiền âm; Tesla -7%",
          "stop": "—",
          "status": "active",
          "date": "23/07",
          "note": "Từ Tập 39 · Tuần 29 (23/07)."
        }
      ],
      "industry": "Công nghệ & Internet",
      "basket": "ngan-han",
      "tradeMode": "margin",
      "region": "foreign"
    },
    {
      "key": "nflx",
      "symbol": "NFLX",
      "name": "Netflix",
      "group": "Quốc tế",
      "tv": "NASDAQ:NFLX",
      "sig": "wait",
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
          "body": "Tập 38: \"May, tôi không côn các anh chị mua Netflix. Thời Donald Trump ghét Netflix lắm — trong HĐQT Netflix có nhân vật mâu thuẫn thù hằn ghê gớm với đội này. Thời của ông Trump thì đừng đầu tư vào Netflix.\" Đây là ví dụ về rủi ro phi tài chính (chính trị – quan hệ cá nhân) mà báo cáo tài chính không thể hiện — cùng họ với bài học PNJ ở Việt Nam: rủi ro ngoài sổ sách thì tránh, không phân tích nội tại nữa.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "MUA THÊM NẾU LÙI",
          "sig": "wait",
          "entry": "77",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Đã chốt lời — mua lại nếu về 74",
          "sig": "wait",
          "entry": "Kẹp 77 lên 108 đã chốt",
          "target": "Vùng này có thể hai đáy",
          "stop": "—",
          "status": "done",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
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
      ],
      "industry": "Truyền thông & Giải trí",
      "basket": "tranh",
      "tradeMode": "margin",
      "region": "foreign"
    },
    {
      "key": "dell",
      "symbol": "DELL",
      "name": "Dell Technologies",
      "group": "Quốc tế",
      "tv": "NYSE:DELL",
      "sig": "down",
      "stance": "MÃ DUY NHẤT KHÔNG ĐI ĐÚNG KẾ HOẠCH — short ở 460",
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
          "body": "Video 24/07: Dell đang hình thành mẫu hình phân phối rất rõ ràng ở khung 467 xuống 370 USD. Trước đó cổ phiếu bị \"thổi\" từ vùng 121–126 lên khoảng 460 USD/cổ phần (gấp ~4 lần), một phần nhờ những phát biểu kiểu \"con tôi thích dùng máy Dell\" của Trump. Thái Phạm xếp Dell vào cùng nhóm với Intel — \"thời gian tới sẽ đến Dell... cũng tương tự như Intel\", tức chu kỳ thổi giá bằng câu chuyện AI rồi xẹp.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "SHORT NẾU KÉO LÊN",
          "sig": "down",
          "entry": "460",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "GIỮ SHORT — \"hơi bướng và liên tục ngáo ngáo\"",
          "sig": "down",
          "entry": "Đang kẹp phần 1/2 còn lại",
          "target": "Cách đánh giống Intel dạo nào",
          "stop": "538–540",
          "status": "active",
          "date": "13/08",
          "note": "Từ Bài đăng · 11–13/08 (13/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "GIỮ SHORT 1/2 · short thêm",
          "sig": "down",
          "entry": "Short thêm vùng 490–493",
          "target": "Rung lắc vùng cao để ra hàng",
          "stop": "550",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT — \"giá này thơm rồi\"",
          "sig": "down",
          "entry": "Vùng hiện tại",
          "target": "—",
          "stop": "500",
          "status": "active",
          "date": "04/08",
          "note": "Từ Bài đăng · 04/08 (04/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Short",
          "sig": "down",
          "entry": "Vùng hiện tại",
          "target": "Điều chỉnh đến 15/10",
          "stop": "Đừng short ngang chừng",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Chốt 1/2",
          "sig": "down",
          "entry": "Chốt đầu phiên 29/07",
          "target": "Short lại 1/2 sau 2–4 tuần",
          "stop": "—",
          "status": "waiting",
          "date": "31/07",
          "note": "Từ Bài đăng · 24–31/07 (31/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Tránh",
          "sig": "down",
          "entry": "Phân phối rõ 467 → 370",
          "target": "\"Sẽ tương tự Intel\"",
          "stop": "Từng bị thổi 121 → 460",
          "status": "active",
          "date": "26/07",
          "note": "Từ Tập 40 · Tuần 30 (26/07)."
        },
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
      ],
      "industry": "Phần cứng CNTT",
      "basket": "tranh",
      "tradeMode": "margin",
      "region": "foreign"
    },
    {
      "key": "rtx",
      "symbol": "RTX · LMT",
      "name": "Quốc phòng Mỹ (RTX, Lockheed)",
      "group": "Quốc tế",
      "tv": "NYSE:RTX",
      "sig": "down",
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
          "body": "Tập 40: \"Trong tuần tới tôi nghĩ rằng các cổ phiếu về mặt quân sự có thể theo dõi được — khả năng cao cái gì xảy ra với RTX thì nó sẽ xảy ra với Lockheed, nó sẽ quay trở về đỉnh cũ. Khả năng đầu tuần nó sẽ test lại và nó sẽ vọt lên bởi vì đánh phụ lắm.\" Luận điểm nền: ông không tin kịch bản đàm phán hòa bình vì phe chủ chiến Iran đang rất mạnh và giáo chủ mới theo đuổi hạt nhân đến cùng; \"đánh hay không thì sớm muộn sẽ đánh thôi\".",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Short",
          "sig": "down",
          "entry": "Vùng hiện tại",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "THEO DÕI MUA",
          "sig": "up",
          "entry": "Test lại đầu tuần",
          "target": "Quay về đỉnh cũ",
          "stop": "Phụ thuộc tin chiến sự",
          "status": "active",
          "date": "26/07",
          "note": "Nhóm hưởng lợi nếu Mỹ tấn công lớn."
        }
      ],
      "industry": "Quốc phòng",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "region": "foreign"
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
          "body": "Tập 38 tổng kết ngắn: Adidas là kèo mua từ mùa World Cup, \"đợi mãi không lên được trăm chín mấy thì thôi chốt lời — hết World Cup rồi\". Được giữ lại trong Sổ mã làm ví dụ về kỷ luật đóng kèo khi catalyst kết thúc, thay vì gồng chờ mục tiêu cũ.",
          "expertId": "thai-pham"
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
      ],
      "industry": "Tiêu dùng & Thời trang",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "region": "foreign"
    },
    {
      "key": "gold",
      "symbol": "XAU/USD",
      "name": "Vàng",
      "group": "Hàng hóa & Crypto",
      "tv": "OANDA:XAUUSD",
      "sig": "up",
      "stance": "ĐÃ THẢ HEDGE — mua lại ở 4.488–4.500",
      "aliases": [
        "vang",
        "gold",
        "xau"
      ],
      "oneLiner": "Long 4.030 cắt lỗ 3.930; chênh trong nước đã về 8–9tr — điều kiện mua vật chất đạt. 30/07 sau FOMC: hồi kỹ thuật từ 3.980–4.000 có thể lên ~4.300, nhưng \"vẫn còn nguyên cửa\" rơi về 3.000.",
      "thesis": [
        {
          "title": "Cập nhật 24–26/07: chênh trong nước sập về 8–9 triệu",
          "body": "Diễn biến đáng chú ý nhất: sau khi nhà nước đánh mạnh vàng lậu và kim cương lậu, chênh lệch giá vàng trong nước so với thế giới thu hẹp còn khoảng 8–9 triệu đồng/lượng (video 24/07) — trước đó vùng 19–20 triệu; giá trong nước về 140 triệu/lượng (Tập 40). Đây chính là điều kiện Thái Phạm từng đặt ra để mua vàng vật chất (chênh ≤10–12 triệu). Về thương hiệu, ông phân biệt rõ: SJC là doanh nghiệp nhà nước nên \"mua đâu bán đấy\", khác PNJ đang dính kim cương/vàng rởm — người giữ SJC không phải bán ra. Về giá thế giới: vàng 4.030, kịch bản hồi kỹ thuật lên 4.300 nếu tích lũy được vùng 4.000; nhưng nếu Fed tăng lãi tháng 9 thì \"khá hợp lý\" để có chân giảm tiếp; vùng đẹp dài hạn 3.600–3.700.",
          "expertId": "thai-pham"
        },
        {
          "title": "Vì sao vàng còn yếu",
          "body": "Logic của Thái Phạm: giá dầu tăng trở lại → lạm phát Mỹ tháng 7–8 tăng → Fed không thể hạ lãi suất, thậm chí Bank of America tính kịch bản tăng 75 điểm cơ bản. Lãi suất thực dương duy trì là lực đè trực tiếp lên vàng. Đồ thị tuần \"vẫn rất yếu\"; nhịp hồi kỹ thuật hiện tại khó về lại 4.100 (còn cửa ~4.069).",
          "expertId": "thai-pham"
        },
        {
          "title": "Kế hoạch giao dịch từng bước",
          "body": "Với ai đang long từ trước: chốt lời nếu giá lên vùng ~4.040, đặt stop loss ~3.930. Kịch bản chính là một cú quét xuống 3.700 — \"chân có thể mua bắt đáy được\"; kịch bản cực đoan test 3.600 (đỉnh cũ trước cú chạy parabol) là \"vùng mua rất đẹp\" — ông tuyên bố sẽ mua bắt đáy tại đó. Ai muốn short thì đợi giá lên vùng chốt lời rồi mới short, không đuổi lệnh giữa khoảng.",
          "expertId": "thai-pham"
        },
        {
          "title": "Vàng trong nước: chưa mua",
          "body": "Chênh lệch trong nước đang 19–20 triệu/lượng — mua là lỗ ngay phần chênh, \"nhà nước không khuyến khích dân mua vàng\". Chỉ mua khi chênh về 10–12 triệu, và tuyệt đối chỉ mua ở thương hiệu uy tín hoạt động 15–20 năm, mua đâu bán đấy — tránh cửa hàng mới mở, rủi ro vàng 3 số 9 trộn 4 số 9 hoặc tệ hơn là vàng giả kim cương.",
          "expertId": "thai-pham"
        },
        {
          "title": "30/07 — Sau FOMC: hồi kỹ thuật rồi vẫn hướng xuống",
          "body": "Fed giữ nguyên lãi suất nhưng lợi suất trái phiếu Mỹ 30 năm vọt 5,2% khiến USD còn đà hồi. Vàng từ vùng 3.980–4.000 \"có quyền kỳ vọng\" hồi phục kỹ thuật lên ~4.300; sau đó Thái Phạm \"vẫn cho rằng còn nguyên cái cửa\" giá vàng rơi về mức 3.000 (kịch bản gắn với Fed tăng lãi tháng 9). Trước mắt: cứ để thị trường hồi kỹ thuật đã.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "THẢ HEDGE — để vị thế buy chạy",
          "sig": "up",
          "entry": "—",
          "target": "Vàng sẽ tiếp tục lên",
          "stop": "—",
          "status": "active",
          "date": "28/08",
          "note": "Từ Tút hội viên · 28/08 (28/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "HEDGED — mua short bằng đúng lượng đã mua ở đáy",
          "sig": "up",
          "entry": "Giá vốn 4.080",
          "target": "Tích lũy 2–3 tuần vùng 4.500–4.700",
          "stop": "Mua lại / mua thêm ở 4.488–4.500",
          "status": "active",
          "date": "26/08",
          "note": "Từ Tút hội viên · 26/08 (26/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "VẪN CẦM — chưa bán",
          "sig": "up",
          "entry": "4.070–4.080 (giá vốn)",
          "target": "4.760 → tích lũy 2 tháng → 6.000",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "MUA — chênh chỉ còn 2–4 triệu/lượng",
          "sig": "up",
          "entry": "Vùng hiện tại",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "21/08",
          "note": "Từ Tút hội viên · 21/08 chiều (21/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "PHÒNG THỦ BẮT BUỘC — chốt lời xa 5.300–5.600",
          "sig": "up",
          "entry": "4.513 (hiện tại)",
          "target": "5.300–5.600",
          "stop": "—",
          "status": "done",
          "date": "19/08",
          "note": "Từ Video · 19/08 (19/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "ĐÃ CHỐT 1/2 — giữ phần còn lại dài hạn",
          "sig": "up",
          "entry": "Long từ 4.080",
          "target": "Tiến về 4.600, khó tại 4.700–4.800",
          "stop": "—",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "HOLD — chấp nhận rung lắc",
          "sig": "up",
          "entry": "Đã vào 4.078–4.080",
          "target": "4.600–4.700 rồi tích lũy, vượt đỉnh trong 8–12 tháng",
          "stop": "—",
          "status": "active",
          "date": "13/08",
          "note": "Từ Bài đăng · 11–13/08 (13/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "GIỮ — mục tiêu gần",
          "sig": "up",
          "entry": "Đã vào 4.070–4.080",
          "target": "4.600–4.700 rồi tích lũy, vượt đỉnh trong 8–12 tháng",
          "stop": "—",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "ĐANG LÃI — vẫn mua được",
          "sig": "up",
          "entry": "Đã vào 4.078–4.080",
          "target": "Không đợi chỉnh về 4.150/4.222 nữa",
          "stop": "3.900 (từ Tập 43)",
          "status": "active",
          "date": "07/08",
          "note": "Từ Bài đăng · 06–07/08 (07/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "MUA được rồi",
          "sig": "up",
          "entry": "Đang 4.300 — đã tạo đáy bật lên",
          "target": "Chắc ăn thì đợi Fed họp tháng 9",
          "stop": "—",
          "status": "active",
          "date": "07/08",
          "note": "Từ Livestream · 07/08 (07/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "MUA — mục tiêu dài hạn",
          "sig": "up",
          "entry": "Vùng 4.070–4.080 (call cho hội viên sáng 06/08)",
          "target": "~6.000 đô trong 6–12 tháng, vượt đỉnh cũ 5.589",
          "stop": "3.900",
          "status": "active",
          "date": "06/08",
          "note": "Từ Vàng cuối 2026 · 06/08 (06/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "MUA — bỏ kịch bản chờ 3.000",
          "sig": "up",
          "entry": "Vùng hiện tại, đánh nhỏ 0,03–0,1 lot",
          "target": "Hồi về vùng 4.000",
          "stop": "3.900",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Chờ mua vùng sâu",
          "sig": "down",
          "entry": "Nếu phá 3.880 → về 3.000",
          "target": "Trong nước về 100–110 triệu/lượng",
          "stop": "Mốc giữ 3.950",
          "status": "waiting",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Chờ",
          "sig": "wait",
          "entry": "Hồi kỹ thuật lên ~4.000",
          "target": "T9–10 có cú điều chỉnh sâu",
          "stop": "—",
          "status": "waiting",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
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
          "dir": "Long nhẹ / chờ đáy",
          "sig": "wait",
          "entry": "~4.030 (hồi kỹ thuật)",
          "target": "Về 4.000; cửa 3.000 \"rất sáng\"",
          "stop": "~3.930",
          "status": "active",
          "date": "23/07",
          "note": "Từ Tập 39 · Tuần 29 (23/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "MUA BẮT ĐÁY",
          "sig": "up",
          "entry": "3.700, cực đoan 3.600",
          "target": "Sóng hồi sau khi tạo đáy",
          "stop": "—",
          "status": "active",
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
          "status": "waiting",
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
          "status": "active",
          "date": "18/07",
          "note": "Hiện chênh 19–20tr — đứng ngoài; chỉ thương hiệu 15–20 năm."
        }
      ],
      "potential": 4,
      "caution": 3,
      "potentialNote": "Chênh trong nước đã về 8–9tr (từ 19–20tr) — điều kiện mua vật chất ông đặt ra đã đạt; hồi kỹ thuật có xác suất lên 4.300.",
      "cautionNote": "Nếu Fed tăng lãi T9 (82%) thì còn \"chân số 3\" về 3.600–3.700, thậm chí ~3.300; ngắn hạn có thể quét 3.890–3.900.",
      "industry": "Kim loại quý",
      "basket": "ngan-han",
      "tradeMode": "margin",
      "region": "commodity",
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "THẢ HEDGE — để vị thế buy chạy",
          "sig": "up",
          "date": "28/08",
          "line": "Từ Tút hội viên · 28/08 (28/08). Mục tiêu: Vàng sẽ tiếp tục lên."
        },
        {
          "expertId": "ck-5-phut",
          "stance": "MUA được rồi",
          "sig": "up",
          "date": "07/08",
          "line": "Từ Livestream · 07/08 (07/08). Điểm vào: Đang 4.300 — đã tạo đáy bật lên. Mục tiêu: Chắc ăn thì đợi Fed họp tháng 9."
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
          "body": "Dầu chạm 100,65–100,81 USD, hồi 43,28% từ đáy 70,87 chỉ trong ~3 tuần. Ba tuyến cung cùng nghẽn: Hormuz (7 triệu thùng/ngày ≈ 20% dầu thế giới) — số tàu qua từ bình quân ~100/ngày năm 2025 nay về gần 0; Biển Đỏ/Bab el-Mandeb (5 triệu thùng/ngày) — Houthi lần đầu tấn công 2 tàu chở dầu Ả Rập Saudi khiến 7 tàu đổi hướng, xuất khẩu Saudi dự kiến −36%; Biển Đen và tuyến CPC của Kazakhstan (~1% nguồn cung toàn cầu, 80% xuất khẩu Kazakhstan) bị drone Ukraine đánh, phải đóng cửa lần hai. Dự trữ: toàn cầu −1,3 tỷ thùng/5 tháng; SPR Mỹ còn 60 triệu thùng ≈ 6 tuần tiêu thụ, thấp nhất kể từ tháng 3/1983 (đỉnh 11–12 tuần); Trung Quốc còn 3–4 tháng; Nhật ở mức báo động. Ba kịch bản: đánh lớn → vượt 120, tệ hơn 150; đàm phán thành → 85–90 (không về 65 \"vì thế giới thiếu dầu\"); tích lũy vùng cao — ông nghiêng kịch bản này.",
          "expertId": "thai-pham"
        },
        {
          "title": "Thesis địa chính trị",
          "body": "Thái Phạm là người \"côn\" sớm nhất việc dầu hồi phục (Tập 36–37, khi giá ~70): theo ông Trump và đồng minh Trung Đông không thể để giá dầu thấp — dầu phải được trao đổi bằng đô la để giữ vị thế đồng tiền (\"một mũi tên trúng ba đích\"). Diễn biến xác nhận: ngừng bắn ký 17/06 sụp đổ, Mỹ công kích Iran 7 đêm liên tiếp, Iran phóng tên lửa trả đũa tàu Mỹ ở Ấn Độ Dương, Houthi dọa đóng Biển Đỏ. Giá đã chạy 70 → 84, \"hồi phục hơn dự kiến\" — phần thịt ngon nhất (+12%) đã ăn được ở vùng thấp.",
          "expertId": "thai-pham"
        },
        {
          "title": "Kế hoạch từ đây",
          "body": "KHÔNG short trong 2–3 tuần tới dù ai đó nói \"dư cung\": kịch bản leo thang đưa WTI lên 88–90, Brent/UK lên 95–96 nếu \"đánh lớn\". Ai còn giữ long: cắt lỗ đặt ở 78, \"đánh lót vừa phải\" — biến động ngày rất mạnh. Dầu tăng cũng là mắt xích kéo theo cả thesis Fed (không hạ được lãi) và lạm phát (cước vận tải đã x3).",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Vùng cao lâu — hết sóng",
          "sig": "up",
          "entry": "—",
          "target": "Khó về 60–65 đô",
          "stop": "Chỉ hạ khi Dân chủ nắm hai viện",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "MUA nếu về vùng thấp",
          "sig": "up",
          "entry": "72–73",
          "target": "Vẫn loanh quanh 85–90",
          "stop": "69",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Giữ vùng cao",
          "sig": "up",
          "entry": "Đang vùng cao",
          "target": "Quanh vùng cao tới tháng 10",
          "stop": "Lên 100 thì không ai muốn",
          "status": "active",
          "date": "04/08",
          "note": "Từ Bài đăng · 04/08 (04/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Giữ vị thế mua",
          "sig": "up",
          "entry": "Đã bắt đáy vùng 70",
          "target": "Đi ngang 85–90 đến hết tháng 10",
          "stop": "Đã chốt vùng 85 — bỏ lỡ sóng lên 101",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
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
      "cautionNote": "Phần hồi 43% đã đi qua; giá giờ phụ thuộc TIN TỨC nên biến động mạnh hai chiều — ông nghiêng kịch bản tích lũy quanh 92–100.",
      "industry": "Năng lượng",
      "basket": "ngan-han",
      "tradeMode": "margin",
      "region": "commodity"
    },
    {
      "key": "btc",
      "symbol": "BTC",
      "name": "Bitcoin",
      "group": "Hàng hóa & Crypto",
      "tv": "BINANCE:BTCUSDT",
      "sig": "wait",
      "stance": "ĐÃ KHÓA HEDGE — chờ Warsh phát biểu xong",
      "aliases": [
        "bitcoin",
        "btc",
        "crypto"
      ],
      "oneLiner": "BTC 65.000; nhịp tăng chỉ do đóng lệnh short chứ không phải tiền tổ chức (T6 rút ròng 4,5 tỷ đô) — xác suất về 40–41k rất cao. 30/07: \"2026 không phải là năm của Bitcoin\" — banana lần ba đang hình thành.",
      "thesis": [
        {
          "title": "Cập nhật 24–26/07: banana lần ba + dòng tiền tổ chức rút",
          "body": "Mẫu hình \"banana chuối\" lần ba: banana 1 từ 81.000 lên 97.000, banana 2 từ 60.000 lên 82.000, banana 3 bắt đầu từ 57.800 và nhiều khả năng kết thúc ở 71.000–72.000. Quan trọng hơn giá: lực mua hiện tại KHÔNG phải dòng tiền tổ chức mới mà là thanh khoản yếu cộng đóng lệnh short — tháng 6 tổ chức rút ròng 4,5 tỷ đô, riêng BlackRock 3,56 tỷ (75%). Đồ thị tuần cho kịch bản retrace về 50.000 hoàn toàn khả thi, và theo chu kỳ 4 năm (thường giảm tới ~70%) thì xác suất về 40.000–41.000 là rất cao. Ông tự nhận \"không phải người đam mê bắt đáy Bitcoin\".",
          "expertId": "thai-pham"
        },
        {
          "title": "Cấu trúc kỹ thuật và vị thế trong hệ thống",
          "body": "Thái Phạm duy trì quan điểm từ Tập 37: BTC đã gãy nền 71,8k đúng cấu trúc \"banana\" (scorecard ghi nhận call này ĐÚNG khi giá sập về ~63k). Cấu trúc gãy tiếp theo đang hình thành nhưng \"yếu lắm\". Về bản chất: BTC giờ \"chỉ là một ticker trong vô vàn ticker\" — Mỹ đã kiểm soát thị trường crypto công khai qua stablecoin (USDT/USDC là cánh tay nối dài của đô la), không còn câu chuyện thay thế tiền pháp định.",
          "expertId": "thai-pham"
        },
        {
          "title": "Hai lệnh chờ rõ ràng",
          "body": "Một: nếu căng thẳng Iran tạo cú bơm ảo (fake pump) lên 69–70k → VÀO LỆNH SHORT tại đó. Hai: chỉ giải ngân mua thật khi giá test lại đỉnh chu kỳ 2021 quanh 50k — \"ít nhất tối thiểu phải đợi vùng đó\". Giữa hai mốc này chỉ lướt, không giữ vị thế lớn. Fed không hạ lãi càng làm crypto thiếu nhiên liệu tăng.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "KHÓA HEDGE — mua 1 lot tương ứng vị thế short",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "Thả ra sau khi Warsh phát biểu đêm 29/08",
          "status": "active",
          "date": "28/08",
          "note": "Từ Tút hội viên · 28/08 (28/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "YẾU RỒI — chờ test lại",
          "sig": "warn",
          "entry": "—",
          "target": "Test 68–69k thì mới vững để thành sóng lên",
          "stop": "Trước mắt test 74k và 72k",
          "status": "active",
          "date": "26/08",
          "note": "Từ Tút hội viên · 26/08 (26/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT 2/3 — đang lỗ ~2.000/coin",
          "sig": "down",
          "entry": "70.000 · 72.000 · vùng hiện tại",
          "target": "Tiếp tục đi xuống",
          "stop": "Short thêm ở 82.000 · vùng tắc nghẽn 88.000",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT 1/3 — đang âm 1.700/coin",
          "sig": "down",
          "entry": "72.000",
          "target": "—",
          "stop": "Vào tiếp ở 74.100 và 77.000",
          "status": "active",
          "date": "21/08",
          "note": "Từ Tút hội viên · 21/08 sáng (21/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "SHORT 1/2",
          "sig": "down",
          "entry": "71,9–72",
          "target": "Sau khi hồi đủ là đứt",
          "stop": "1/2 còn lại vào nếu lên 77",
          "status": "active",
          "date": "20/08",
          "note": "Từ Tút hội viên · 20/08 (20/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "CHỈ LÀ HỒI NGẮN HẠN — banana lần 3, không mua đuổi",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "19/08",
          "note": "Từ Video · 19/08 (19/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "GIỮ — đang lỗ 2.000/coin",
          "sig": "warn",
          "entry": "Long từ 65.000",
          "target": "Hồi kỹ thuật quanh đầu tháng 9",
          "stop": "60.800 — chưa chạm",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "GIỮ LỆNH LƯỚT — siết cắt lỗ",
          "sig": "warn",
          "entry": "Đã vào 65.200",
          "target": "Hồi lên 69.000–71.000",
          "stop": "60.700 (dời từ 61.000), \"không nhân nhượng\"",
          "status": "active",
          "date": "13/08",
          "note": "Từ Bài đăng · 11–13/08 (13/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "GIỮ lệnh lướt",
          "sig": "wait",
          "entry": "Đã vào 65.000",
          "target": "Kéo lên vùng 72.000",
          "stop": "61.000",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "MUA LƯỚT",
          "sig": "up",
          "entry": "65.200",
          "target": "Chốt lời 70.000–71.000",
          "stop": "61.000",
          "status": "active",
          "date": "07/08",
          "note": "Từ Bài đăng · 06–07/08 (07/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Đợi hồi rồi tính",
          "sig": "wait",
          "entry": "—",
          "target": "74.000–78.000",
          "stop": "Ưu tiên cược vàng hơn",
          "status": "waiting",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Tránh cả năm",
          "sig": "avoid",
          "entry": "—",
          "target": "Banana lần ba — khả năng chết tiếp",
          "stop": "Còn cầm ít short, đợi 70–72",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Đứng ngoài",
          "sig": "down",
          "entry": "Chỉ short nếu lên lại ~74k",
          "target": "\"Năm nay không phải năm của Bitcoin\"",
          "stop": "Hiện không tham gia long/short",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
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
          "status": "active",
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
          "status": "active",
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
          "status": "active",
          "date": "11/07",
          "note": "Đã diễn ra — BTC sập về ~63k, scorecard: ĐÚNG."
        }
      ],
      "potential": 2,
      "caution": 4,
      "potentialNote": "Chỉ còn kèo short fake pump 69–70k; mua thật phải đợi ~50k — xa vùng hiện tại.",
      "cautionNote": "Cấu trúc \"banana\" gãy, không còn câu chuyện thay thế tiền pháp định; Fed không hạ lãi — thiếu nhiên liệu tăng.",
      "industry": "Tiền điện tử",
      "basket": "tranh",
      "tradeMode": "margin",
      "region": "commodity"
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
          "body": "Từ Tập 37: bạc được xác định \"ăn theo vàng\" — kịch bản vàng hồi 4.300 thì bạc lên ~68, trong khi fair value ước ~50. Sang Tập 38, khi vàng chuyển sang kịch bản chờ quét đáy 3.600–3.700, bạc không có kèo riêng: đợi vàng tạo đáy xong mới tính, và cũng áp dụng nguyên tắc \"đợi giá chiết khấu\" thay vì mua đuổi phần kỳ vọng.",
          "expertId": "thai-pham"
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Hồi theo vàng",
          "sig": "wait",
          "entry": "Đã sập 60% từ đỉnh 120",
          "target": "Vùng 70",
          "stop": "Beta cao hơn vàng 1,5–2 lần",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Được, nhưng không ưu tiên",
          "sig": "wait",
          "entry": "—",
          "target": "Beta cao hơn vàng",
          "stop": "Không mạnh bằng vàng",
          "status": "active",
          "date": "06/08",
          "note": "Từ Vàng cuối 2026 · 06/08 (06/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Chờ",
          "sig": "wait",
          "entry": "Hồi theo vàng lên ~64",
          "target": "—",
          "stop": "—",
          "status": "waiting",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
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
      ],
      "industry": "Kim loại quý",
      "basket": "ngan-han",
      "tradeMode": "margin",
      "region": "commodity"
    },
    {
      "group": "Chứng khoán Việt Nam",
      "tradeMode": "spot",
      "region": "vn",
      "key": "vpb",
      "symbol": "VPB",
      "name": "VPBank",
      "tv": "HOSE:VPB",
      "sig": "up",
      "stance": "TÍCH SẢN — giá vốn 26.200, hợp lý ~39–40",
      "aliases": [
        "vpb",
        "vpbank",
        "viban"
      ],
      "oneLiner": "Lợi nhuận trước thuế quý 2 đạt 10.959 tỷ, gần gấp đôi cùng kỳ — nhưng giá cổ phiếu từ 38 về 26.",
      "thesis": [
        {
          "expertId": "quang-dung",
          "title": "Kết quả quý 2/2026",
          "body": "Lợi nhuận trước thuế 10.959 tỷ so với 6.214 tỷ cùng kỳ; lợi nhuận sau thuế 8.775 tỷ so với 4.937 tỷ — gần gấp đôi, thuộc nhóm doanh nghiệp có lợi nhuận một quý lớn nhất thị trường. Riêng khối ngân hàng mẹ tăng 76% lợi nhuận trước thuế. Tổng thu nhập hoạt động 23.483 tỷ chia ba chân: lãi thuần 17.937 tỷ (76,5%), dịch vụ 3.490 tỷ (14,8%), khác 2.231 tỷ (9,5%). Nguyên tắc Quang Dũng nêu: khi một chân chiếm trên 70% thì đó là mô hình kinh doanh chính, các mảng nhỏ dù tăng gấp đôi cũng không đổi được bức tranh."
        },
        {
          "expertId": "quang-dung",
          "title": "Con số gây choáng: bơm 400.000 tỷ trong một năm",
          "body": "Dư nợ 1,14 triệu tỷ so với 811.000 tỷ cùng kỳ và 926.000 tỷ đầu năm — tăng 23% trong nửa đầu năm khi toàn ngành chỉ 7,73%, và khoảng 40% so với cùng kỳ. Quy ra: trong một năm ngân hàng này đưa ra nền kinh tế 400.000 tỷ, đúng bằng tổng dư nợ chính nó tích lũy suốt 30 năm trước đó. Kế hoạch tăng trưởng tín dụng cả năm 36%, gấp đôi các ngân hàng còn lại, cùng nhóm với MBB và HDBank."
        },
        {
          "expertId": "quang-dung",
          "title": "Rủi ro phải nhìn thẳng",
          "body": "Nợ xấu 3,17%, có cải thiện từ 3,6% cuối 2025 nhưng vẫn gấp 3–4 lần nhóm VCB và ACB (khoảng 1%). Chi phí dự phòng rủi ro tín dụng 7.900 tỷ, cùng kỳ 5.900 tỷ, tăng 33%. Huy động tiền gửi có kỳ hạn 639.000 tỷ (+19%) nhưng tiền gửi không kỳ hạn tăng trưởng âm so với đầu năm. Doanh thu từ cho vay tăng 55% mà lợi nhuận từ cho vay chỉ tăng 33% — chênh lệch nằm ở chi phí vốn và dự phòng."
        },
        {
          "expertId": "quang-dung",
          "title": "Vì sao ông gọi là hấp dẫn",
          "body": "Lợi nhuận một quý năm 2018 là 2.400 tỷ, nay 8.700 tỷ — nhân bốn. Chuỗi giá trị đi lên liên tục: 3.900 → 4.900 → 6.300 → gần 9.000 tỷ. Trong khi giá cổ phiếu đi từ 38 về 26. Ông dùng chính VPB làm ví dụ song song khi phân tích Hòa Phát: \"cùng một mức giá, cùng một thời điểm lợi nhuận là 4.900 tỷ trong khi giá cổ phiếu là 38.000; bây giờ lợi nhuận 8.700 tỷ mà giá từ 38 về 26 — có nghĩa là các anh chị mất niềm tin\". Chu kỳ trước cổ phiếu từng đi từ 18 lên 38, tức gần 100%."
        }
      ],
      "orders": [
        {
          "expertId": "azfin",
          "dir": "TÍCH SẢN — dưới 30 là vùng tốt",
          "sig": "up",
          "entry": "Giá vốn hiện tại 26.200",
          "target": "Giá trị hợp lý ~39–40",
          "stop": "Không cắt lỗ: giá càng thấp càng tích được rẻ",
          "status": "active",
          "date": "21/08",
          "note": "Từ Lăng kính · 21/08 (21/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Không cầm",
          "sig": "avoid",
          "entry": "—",
          "target": "HPG bị Vin Steel cạnh tranh",
          "stop": "LPB là \"cổ phiếu joker\"",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Không mua",
          "sig": "down",
          "entry": "—",
          "target": "\"Được thì ít mà chết thì lắm\"",
          "stop": "—",
          "status": "active",
          "date": "26/07",
          "note": "Từ Tập 40 · Tuần 30 (26/07)."
        },
        {
          "expertId": "quang-dung",
          "dir": "ĐỊNH GIÁ HẤP DẪN",
          "sig": "up",
          "entry": "Vùng 26",
          "target": "Lợi nhuận nhân 4 từ 2018 trong khi giá về vùng cũ",
          "stop": "Nợ xấu 3,17% — theo dõi từng quý",
          "status": "active",
          "date": "18/07",
          "note": "Tăng trưởng tín dụng 23% nửa đầu năm so với toàn ngành 7,73%. Kế hoạch cả năm 36%."
        }
      ],
      "potential": 4,
      "caution": 3,
      "potentialNote": "Lợi nhuận gần gấp đôi cùng kỳ, tín dụng chạy gấp ba lần tốc độ ngành, nằm trong nhóm ba ngân hàng được giao chỉ tiêu 36%.",
      "cautionNote": "Nợ xấu 3,17% — gấp 3–4 lần VCB/ACB. Dự phòng tăng 33%. CASA yếu: tiền gửi không kỳ hạn tăng trưởng âm. Tăng tín dụng nhanh trong môi trường lãi suất cao là con dao hai lưỡi.",
      "industry": "Ngân hàng",
      "basket": "dai-han",
      "views": [
        {
          "expertId": "azfin",
          "stance": "TÍCH SẢN — dưới 30 là vùng tốt",
          "sig": "up",
          "date": "21/08",
          "line": "Từ Lăng kính · 21/08 (21/08). Điểm vào: Giá vốn hiện tại 26.200. Mục tiêu: Giá trị hợp lý ~39–40."
        },
        {
          "expertId": "thai-pham",
          "stance": "Không cầm",
          "sig": "avoid",
          "date": "30/07",
          "line": "Từ Tập 41 · Giữa tuần (30/07). Mục tiêu: HPG bị Vin Steel cạnh tranh."
        },
        {
          "expertId": "quang-dung",
          "stance": "ĐỊNH GIÁ HẤP DẪN",
          "sig": "up",
          "date": "18/07",
          "line": "Tăng trưởng tín dụng 23% nửa đầu năm so với toàn ngành 7,73%. Kế hoạch cả năm 36%. Điểm vào: Vùng 26. Mục tiêu: Lợi nhuận nhân 4 từ 2018 trong khi giá về vùng cũ."
        }
      ]
    },
    {
      "group": "Chứng khoán Việt Nam",
      "tradeMode": "spot",
      "region": "vn",
      "key": "mbb",
      "symbol": "MBB",
      "name": "MB Bank",
      "tv": "HOSE:MBB",
      "sig": "up",
      "stance": "NHÓM CHỈ TIÊU TÍN DỤNG 36%",
      "aliases": [
        "mbb",
        "mb bank",
        "mbbank",
        "mb"
      ],
      "oneLiner": "Một trong ba ngân hàng có kế hoạch tăng trưởng tín dụng 36% năm 2026 — gấp đôi phần còn lại.",
      "thesis": [
        {
          "expertId": "quang-dung",
          "title": "Vì sao được gọi tên",
          "body": "Trong bài phân tích VPBank ngày 18/07, Quang Dũng nêu ba ngân hàng có kế hoạch tăng trưởng tín dụng năm nay 36%: VPBank, MBB và HDBank — gấp đôi các ngân hàng còn lại. Đây là nhóm được chọn làm đầu kéo cho mục tiêu GDP 10% năm 2026 và trên hai con số giai đoạn 2026–2030. Toàn ngành nửa đầu năm mới tăng 7,73%."
        },
        {
          "expertId": "quang-dung",
          "title": "Giới hạn của luận điểm này",
          "body": "Đây là chi tiết ông nêu trong lúc phân tích một mã khác, không phải bài phân tích riêng về MBB. Chưa có số liệu quý 2 hay định giá cụ thể cho mã này trong 7 bài gần nhất — nên xếp ở mức theo dõi, chờ ông ra bài chuyên sâu về ngành ngân hàng mà ông có nhắc là sẽ làm sau mùa báo cáo."
        }
      ],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "CẦM — P/B ~1,1 lần cũng hấp dẫn",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "quang-dung",
          "dir": "TÍCH SẢN — định giá thấp nhất ba năm",
          "sig": "up",
          "entry": "P/B 1,2 lần",
          "target": "LNST +40%, NIM hơn 4%, nợ xấu 1,5%",
          "stop": "Áp lực tăng trưởng tín dụng nửa cuối năm",
          "status": "active",
          "date": "10/08",
          "note": "Từ MBB · Quý 2/2026 (10/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "KHÔNG nằm trong diện thoái vốn",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Không còn đẹp",
          "sig": "wait",
          "entry": "Đã quay lại vùng giá cũ",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "Giữ đợi nhận quyền, KHÔNG mua thêm",
          "sig": "warn",
          "entry": "Đợi sau ngày chia 12/8",
          "target": "—",
          "stop": "Cây trần 03/08 là do chốt quyền",
          "status": "active",
          "date": "03/08",
          "note": "Từ Livestream · 03/08 (03/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Không cầm",
          "sig": "avoid",
          "entry": "—",
          "target": "HPG bị Vin Steel cạnh tranh",
          "stop": "LPB là \"cổ phiếu joker\"",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Không mua",
          "sig": "down",
          "entry": "—",
          "target": "\"Được thì ít mà chết thì lắm\"",
          "stop": "—",
          "status": "active",
          "date": "26/07",
          "note": "Từ Tập 40 · Tuần 30 (26/07)."
        },
        {
          "expertId": "quang-dung",
          "dir": "THEO DÕI — NHÓM TÍN DỤNG CAO",
          "sig": "up",
          "entry": "—",
          "target": "Kế hoạch tín dụng 36%, gấp đôi phần còn lại",
          "stop": "Chưa có số liệu quý 2 riêng",
          "status": "active",
          "date": "18/07",
          "note": "Nêu gián tiếp trong bài VPB; chưa có bài phân tích riêng."
        }
      ],
      "potential": 3,
      "caution": 2,
      "potentialNote": "Nằm trong nhóm ba ngân hàng được giao chỉ tiêu tín dụng cao nhất, gắn với mục tiêu GDP hai con số.",
      "cautionNote": "Luận điểm mỏng — mới là một chi tiết nêu trong bài về VPB, chưa có phân tích báo cáo riêng. Không nên coi là khuyến nghị đầy đủ.",
      "industry": "Ngân hàng",
      "basket": "dai-han",
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "CẦM — P/B ~1,1 lần cũng hấp dẫn",
          "sig": "up",
          "date": "15/08",
          "line": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "quang-dung",
          "stance": "TÍCH SẢN — định giá thấp nhất ba năm",
          "sig": "up",
          "date": "10/08",
          "line": "Từ MBB · Quý 2/2026 (10/08). Điểm vào: P/B 1,2 lần. Mục tiêu: LNST +40%, NIM hơn 4%, nợ xấu 1,5%."
        },
        {
          "expertId": "ck-5-phut",
          "stance": "Giữ đợi nhận quyền, KHÔNG mua thêm",
          "sig": "warn",
          "date": "03/08",
          "line": "Từ Livestream · 03/08 (03/08). Điểm vào: Đợi sau ngày chia 12/8."
        }
      ]
    },
    {
      "group": "Chứng khoán Việt Nam",
      "tradeMode": "spot",
      "region": "vn",
      "key": "nlg",
      "symbol": "NLG",
      "name": "Nam Long",
      "tv": "HOSE:NLG",
      "sig": "up",
      "stance": "MUA 23,5 → 26,5 · cắt 22,5",
      "aliases": [
        "nlg",
        "nam long"
      ],
      "oneLiner": "Tiền mặt từ 3.800 lên gần 8.000 tỷ trong khi tổng nợ giảm từ 7.000 xuống 5.400 tỷ — hiếm trong nhóm bất động sản.",
      "thesis": [
        {
          "expertId": "quang-dung",
          "title": "Tiền tăng, nợ giảm cùng lúc",
          "body": "Trong bài định giá ngành bất động sản ngày 10/06, Quang Dũng chỉ ra Nam Long là trường hợp cải thiện bảng cân đối rõ nhất: tiền mặt từ 3.800 tỷ lên gần 8.000 tỷ, đồng thời tổng nợ giảm từ 7.000 tỷ xuống khoảng 5.400 tỷ trên tổng quy mô vốn khoảng 15.000 tỷ. Đây là điểm ông nhấn mạnh — định giá rẻ không chỉ vì giá giảm mà vì chất lượng tài sản thực sự tốt lên."
        },
        {
          "expertId": "quang-dung",
          "title": "Bối cảnh định giá cả ngành",
          "body": "Sau tám tháng đổ vỡ của bộ ba ngân hàng – chứng khoán – bất động sản, đa phần cổ phiếu giảm ít nhất 30%, trung bình 40%, nhiều mã tới 50%. Kết quả là định giá ngành bất động sản 2026 đã gần bằng mức của năm 2024, so với trung bình 5 năm khoảng 1,7 lần. Luận điểm mở của ông: \"một thị trường định giá rẻ thường nằm ở một thị trường có biến cố\" — cú sốc chính là bài test để biết tài sản có thật sự hấp dẫn hay không."
        }
      ],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "MUA — đẹp nhất nhóm bất động sản",
          "sig": "up",
          "entry": "23,5",
          "target": "26,5",
          "stop": "22,5 (đáy thứ sáu)",
          "status": "active",
          "date": "17/08",
          "note": "Từ Livestream · 17/08 (17/08)."
        },
        {
          "expertId": "quang-dung",
          "dir": "ĐỊNH GIÁ VỀ MỨC 2024",
          "sig": "up",
          "entry": "—",
          "target": "Tiền mặt gần 8.000 tỷ, nợ giảm còn 5.400 tỷ",
          "stop": "Tổng dư nợ toàn ngành BĐS trên 500.000 tỷ",
          "status": "active",
          "date": "10/06",
          "note": "Bảng cân đối cải thiện thật chứ không chỉ giá giảm."
        }
      ],
      "potential": 4,
      "caution": 3,
      "potentialNote": "Bảng cân đối cải thiện hai chiều cùng lúc: tiền mặt gần gấp đôi, tổng nợ giảm. Định giá ngành đã về mức 2024.",
      "cautionNote": "Rủi ro ngành còn nguyên: tổng dư nợ bất động sản trên 500.000 tỷ, riêng ngành chiếm 37% trong 2025. Thái Phạm ngược lại cảnh báo cả nhóm bất động sản, dẫn DIG và PNJ làm ví dụ rủi ro call margin của doanh chủ.",
      "industry": "Bất động sản",
      "basket": "ngan-han",
      "views": [
        {
          "expertId": "ck-5-phut",
          "stance": "MUA — đẹp nhất nhóm bất động sản",
          "sig": "up",
          "date": "17/08",
          "line": "Từ Livestream · 17/08 (17/08). Điểm vào: 23,5. Mục tiêu: 26,5."
        },
        {
          "expertId": "quang-dung",
          "stance": "ĐỊNH GIÁ VỀ MỨC 2024",
          "sig": "up",
          "date": "10/06",
          "line": "Bảng cân đối cải thiện thật chứ không chỉ giá giảm. Mục tiêu: Tiền mặt gần 8.000 tỷ, nợ giảm còn 5.400 tỷ."
        }
      ]
    },
    {
      "group": "Chứng khoán Việt Nam",
      "tradeMode": "spot",
      "region": "vn",
      "key": "dxg",
      "symbol": "DXG",
      "name": "Đất Xanh",
      "tv": "HOSE:DXG",
      "sig": "warn",
      "stance": "CHIA RẼ — ĐIỂM MUA KHÔNG ĐẸP (5P) vs TIỀN MẶT CẢI THIỆN (QD)",
      "aliases": [
        "dxg",
        "dat xanh",
        "đất xanh"
      ],
      "oneLiner": "Tiền và tương đương tiền từ 1.300 tỷ cuối 2024 lên khoảng 5.600 tỷ tại quý 1/2026.",
      "thesis": [
        {
          "expertId": "quang-dung",
          "title": "Mức cải thiện tiền mặt lớn nhất nhóm",
          "body": "Quang Dũng (10/06) nêu Đất Xanh có tiền và tương đương tiền đi từ 1.300 tỷ cuối năm 2024 lên khoảng 5.600 tỷ tại quý 1/2026 — mức tăng theo tỉ lệ mạnh nhất trong các mã ông điểm qua. Đây là bằng chứng cho luận điểm chung của bài: định giá rẻ của ngành bất động sản đến từ sự thăng hoa năm 2025 dẫn tới tình trạng thiếu tiền năm 2026, chứ không phải từ việc doanh nghiệp xấu đi."
        },
        {
          "expertId": "quang-dung",
          "title": "Cần đọc kèm rủi ro ngành",
          "body": "Tỉ lệ nợ vay ròng của nhóm tại cuối 2025 khoảng 39% trên cấu trúc vốn. Tổng dư nợ bất động sản toàn thị trường trên 500.000 tỷ, riêng lĩnh vực này chiếm 37% trong năm 2025. Quang Dũng không đưa mốc giá mua cụ thể cho DXG — luận điểm dừng ở mức định giá và chất lượng bảng cân đối."
        }
      ],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "Điểm mua không đẹp",
          "sig": "avoid",
          "entry": "Gần trần nhưng vẫn dưới MA20",
          "target": "—",
          "stop": "Thanh khoản không tăng",
          "status": "active",
          "date": "03/08",
          "note": "Từ Livestream · 03/08 (03/08)."
        },
        {
          "expertId": "quang-dung",
          "dir": "ĐỊNH GIÁ VỀ MỨC 2024",
          "sig": "up",
          "entry": "—",
          "target": "Tiền mặt 1.300 → 5.600 tỷ",
          "stop": "Không có mốc giá cụ thể",
          "status": "active",
          "date": "10/06",
          "note": "Nằm trong nhóm bất động sản ông đánh giá bảng cân đối đã cải thiện thật."
        }
      ],
      "potential": 3,
      "caution": 3,
      "potentialNote": "Tiền và tương đương tiền tăng hơn bốn lần trong khoảng một năm rưỡi; định giá ngành về mức 2024.",
      "cautionNote": "Không có mốc giá mua cụ thể. Nợ vay ròng nhóm khoảng 39% cấu trúc vốn; rủi ro thanh khoản ngành bất động sản còn nguyên.",
      "industry": "Bất động sản",
      "basket": "dai-han",
      "views": [
        {
          "expertId": "ck-5-phut",
          "stance": "Điểm mua không đẹp",
          "sig": "avoid",
          "date": "03/08",
          "line": "Từ Livestream · 03/08 (03/08). Điểm vào: Gần trần nhưng vẫn dưới MA20."
        },
        {
          "expertId": "quang-dung",
          "stance": "ĐỊNH GIÁ VỀ MỨC 2024",
          "sig": "up",
          "date": "10/06",
          "line": "Nằm trong nhóm bất động sản ông đánh giá bảng cân đối đã cải thiện thật. Mục tiêu: Tiền mặt 1.300 → 5.600 tỷ."
        }
      ]
    },
    {
      "group": "Chứng khoán Việt Nam",
      "tradeMode": "spot",
      "region": "vn",
      "key": "kdh",
      "symbol": "KDH",
      "name": "Khang Điền",
      "tv": "HOSE:KDH",
      "sig": "wait",
      "stance": "QUY MÔ VÀ LỢI NHUẬN CÙNG TĂNG",
      "aliases": [
        "kdh",
        "khang dien",
        "khang điền"
      ],
      "oneLiner": "Quy mô từ 22.000 lên khoảng 29.000 tỷ trong 2025; lợi nhuận từ 384 tỷ lên gần 700 tỷ ở quý 1/2026.",
      "thesis": [
        {
          "expertId": "quang-dung",
          "title": "Tăng cả quy mô lẫn lợi nhuận",
          "body": "Quang Dũng (10/06) nêu Khang Điền đi từ quy mô 22.000 lên khoảng 29.000 tỷ trong năm 2025, và lợi nhuận nhích từ 384 tỷ lên gần 700 tỷ trong báo cáo quý 1/2026. Trong nhóm ba mã ông điểm qua (NLG, DXG, KDH), đây là mã có cả hai chỉ tiêu cùng đi lên."
        },
        {
          "expertId": "quang-dung",
          "title": "Đặt trong bối cảnh chung",
          "body": "Định giá ngành bất động sản 2026 đã gần bằng mức 2024, so với trung bình 5 năm khoảng 1,7 lần, sau khi cổ phiếu ngành giảm 30–50% qua tám tháng. Ông không đưa mốc giá mua cho từng mã mà dừng ở việc chứng minh chất lượng tài chính đã cải thiện thật."
        }
      ],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "KHÔNG PHẢI TÍN HIỆU ĐÁY",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "Chủ tịch đăng ký mua ≠ đáy",
          "status": "active",
          "date": "28/07",
          "note": "Nằm trong loạt lãnh đạo đăng ký mua (VCI, KDH, PDR) — định giá hấp dẫn nhưng \"đáy thì còn lâu\"."
        },
        {
          "expertId": "quang-dung",
          "dir": "ĐỊNH GIÁ VỀ MỨC 2024",
          "sig": "up",
          "entry": "—",
          "target": "Quy mô 22.000 → 29.000 tỷ; LN 384 → gần 700 tỷ",
          "stop": "Không có mốc giá cụ thể",
          "status": "active",
          "date": "10/06",
          "note": "Mã duy nhất trong ba mã có cả quy mô lẫn lợi nhuận cùng tăng."
        }
      ],
      "potential": 3,
      "caution": 3,
      "potentialNote": "Cả quy mô lẫn lợi nhuận cùng tăng; định giá ngành đã về mức 2024.",
      "cautionNote": "Không có mốc giá mua. CK 5 phút (28/07) có nhắc Khang Điền trong danh sách chủ tịch đăng ký mua nhưng nhấn mạnh đó KHÔNG phải tín hiệu đáy — \"đáy thì còn lâu\".",
      "industry": "Bất động sản",
      "basket": "dai-han",
      "debate": "Quang Dũng đọc bảng cân đối và thấy doanh nghiệp khỏe lên thật. CK 5 phút đọc cùng tin (phó tổng Khang Điền đăng ký mua 20 triệu cổ phiếu) nhưng cảnh báo đừng nhầm với tín hiệu đáy — người trong cuộc mua vì tin doanh nghiệp, không có nghĩa giá đã hết giảm. Hai bên không mâu thuẫn về chất lượng doanh nghiệp, chỉ khác về thời điểm.",
      "views": [
        {
          "expertId": "ck-5-phut",
          "stance": "KHÔNG PHẢI TÍN HIỆU ĐÁY",
          "sig": "wait",
          "date": "28/07",
          "line": "Nằm trong loạt lãnh đạo đăng ký mua (VCI, KDH, PDR) — định giá hấp dẫn nhưng \"đáy thì còn lâu\"."
        },
        {
          "expertId": "quang-dung",
          "stance": "ĐỊNH GIÁ VỀ MỨC 2024",
          "sig": "up",
          "date": "10/06",
          "line": "Mã duy nhất trong ba mã có cả quy mô lẫn lợi nhuận cùng tăng. Mục tiêu: Quy mô 22.000 → 29.000 tỷ; LN 384 → gần 700 tỷ."
        }
      ]
    },
    {
      "tradeMode": "spot",
      "potential": 3,
      "caution": 3,
      "key": "acb",
      "symbol": "ACB",
      "name": "Ngân hàng Á Châu",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:ACB",
      "region": "vn",
      "industry": "Ngân hàng",
      "basket": "tranh",
      "sig": "warn",
      "stance": "TÍN HIỆU ĐỈNH — không có điểm mua",
      "aliases": [
        "acb",
        "a chau"
      ],
      "oneLiner": "Thái Phạm xếp vào nhóm ngân hàng \"chưa tới lượt\" — không mua trong giai đoạn này.",
      "potentialNote": "Quang Dũng dùng ACB làm mốc đối chiếu nợ xấu ~1% cho nhóm bank khỏe.",
      "cautionNote": "Thái Phạm (26/07) liệt vào nhóm không mua cùng VPB, MB, LPB.",
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "KHÔNG CÓ ĐIỂM MUA — tín hiệu đỉnh",
          "sig": "warn",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "20/08",
          "note": "Từ Livestream · 20/08 (20/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "ĐANG TẠO ĐỈNH — chưa có điểm mua",
          "sig": "warn",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "18/08",
          "note": "Từ Livestream · 18/08 (18/08)."
        },
        {
          "expertId": "quang-dung",
          "dir": "Định giá hợp lý, giải được bài toán tăng trưởng",
          "sig": "up",
          "entry": "Trích lập ~11%",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "15/08",
          "note": "Từ Toàn ngành ngân hàng (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Không mua",
          "sig": "down",
          "entry": "—",
          "target": "\"Được thì ít mà chết thì lắm\"",
          "stop": "—",
          "status": "active",
          "date": "26/07",
          "note": "Từ Tập 40 · Tuần 30 (26/07)."
        },
        {
          "expertId": "quang-dung",
          "dir": "An toàn hơn",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "Nợ xấu chỉ ~1%, dùng làm mốc đối chiếu",
          "status": "active",
          "date": "18/07",
          "note": "Từ VPB · Quý 2/2026 (18/07)."
        }
      ],
      "views": [
        {
          "expertId": "ck-5-phut",
          "stance": "KHÔNG CÓ ĐIỂM MUA — tín hiệu đỉnh",
          "sig": "warn",
          "date": "20/08",
          "line": "Từ Livestream · 20/08 (20/08)."
        },
        {
          "expertId": "quang-dung",
          "stance": "Định giá hợp lý, giải được bài toán tăng trưởng",
          "sig": "up",
          "date": "15/08",
          "line": "Từ Toàn ngành ngân hàng (15/08). Điểm vào: Trích lập ~11%."
        },
        {
          "expertId": "thai-pham",
          "stance": "Không mua",
          "sig": "down",
          "date": "26/07",
          "line": "Từ Tập 40 · Tuần 30 (26/07). Mục tiêu: \"Được thì ít mà chết thì lắm\"."
        }
      ]
    },
    {
      "tradeMode": "spot",
      "potential": 3,
      "caution": 3,
      "key": "lpb",
      "symbol": "LPB",
      "name": "LPBank",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:LPB",
      "region": "vn",
      "industry": "Ngân hàng",
      "basket": "tranh",
      "sig": "avoid",
      "stance": "KHÔNG CẦM",
      "aliases": [
        "lpb",
        "lpbank"
      ],
      "oneLiner": "Nằm trong danh sách ngân hàng Thái Phạm nói không cầm (Tập 41, 30/07).",
      "potentialNote": "Chưa có luận điểm tích cực nào từ bốn kênh.",
      "cautionNote": "Bị nêu tên hai lần trong nhóm \"không cầm\" và \"không mua\".",
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "GÃY TÍN HIỆU — cân nhắc bán nếu giá vốn trên 50",
          "sig": "down",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "18/08",
          "note": "Từ Livestream · 18/08 (18/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "ĐỪNG MUA — cao giá",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "\"Dễ dính chưởng\"",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "KHÔNG ĐỤNG VÀO",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "Nêu đích danh trong danh sách tránh",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Không cầm",
          "sig": "avoid",
          "entry": "—",
          "target": "HPG bị Vin Steel cạnh tranh",
          "stop": "LPB là \"cổ phiếu joker\"",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Không mua",
          "sig": "down",
          "entry": "—",
          "target": "\"Được thì ít mà chết thì lắm\"",
          "stop": "—",
          "status": "active",
          "date": "26/07",
          "note": "Từ Tập 40 · Tuần 30 (26/07)."
        }
      ],
      "views": [
        {
          "expertId": "ck-5-phut",
          "stance": "GÃY TÍN HIỆU — cân nhắc bán nếu giá vốn trên 50",
          "sig": "down",
          "date": "18/08",
          "line": "Từ Livestream · 18/08 (18/08)."
        },
        {
          "expertId": "thai-pham",
          "stance": "ĐỪNG MUA — cao giá",
          "sig": "avoid",
          "date": "15/08",
          "line": "Từ Tập 45 · Tuần 33 (15/08)."
        }
      ]
    },
    {
      "tradeMode": "spot",
      "potential": 3,
      "caution": 3,
      "key": "stb",
      "symbol": "STB",
      "name": "Sacombank",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:STB",
      "region": "vn",
      "industry": "Ngân hàng",
      "basket": "tranh",
      "sig": "wait",
      "stance": "CHỜ VƯỢT 76 — vượt cũng chưa chắc chạy",
      "aliases": [
        "stb",
        "sacombank"
      ],
      "oneLiner": "Thái Phạm (Tập 41): nằm trong nhóm ngân hàng không cầm.",
      "potentialNote": "Chưa có luận điểm tích cực nào từ bốn kênh.",
      "cautionNote": "Cùng nhóm với HPG, VPB, MBB, LPB trong danh sách không cầm ngày 30/07.",
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "CHỜ VƯỢT 76",
          "sig": "wait",
          "entry": "—",
          "target": "Vượt 76",
          "stop": "—",
          "status": "waiting",
          "date": "18/08",
          "note": "Từ Livestream · 18/08 (18/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "CHỜ VƯỢT 76",
          "sig": "wait",
          "entry": "—",
          "target": "76",
          "stop": "—",
          "status": "waiting",
          "date": "17/08",
          "note": "Từ Livestream · 17/08 (17/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "ĐỪNG MUA — cao giá",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "\"Dễ dính chưởng\"",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Không cầm",
          "sig": "avoid",
          "entry": "—",
          "target": "HPG bị Vin Steel cạnh tranh",
          "stop": "LPB là \"cổ phiếu joker\"",
          "status": "active",
          "date": "30/07",
          "note": "Từ Tập 41 · Giữa tuần (30/07)."
        }
      ],
      "views": [
        {
          "expertId": "ck-5-phut",
          "stance": "CHỜ VƯỢT 76",
          "sig": "wait",
          "date": "18/08",
          "line": "Từ Livestream · 18/08 (18/08). Mục tiêu: Vượt 76."
        },
        {
          "expertId": "thai-pham",
          "stance": "ĐỪNG MUA — cao giá",
          "sig": "avoid",
          "date": "15/08",
          "line": "Từ Tập 45 · Tuần 33 (15/08)."
        }
      ]
    },
    {
      "tradeMode": "spot",
      "potential": 3,
      "caution": 3,
      "key": "dig",
      "symbol": "DIG",
      "name": "DIC Corp",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:DIG",
      "region": "vn",
      "industry": "Bất động sản",
      "basket": "tranh",
      "sig": "avoid",
      "stance": "TRÁNH — RỦI RO CALL MARGIN",
      "aliases": [
        "dig",
        "dic corp"
      ],
      "oneLiner": "Thái Phạm dẫn DIG làm ví dụ điển hình cho rủi ro call margin của doanh chủ.",
      "potentialNote": "Không có. Đây là mã cảnh báo, không phải mã theo dõi để mua.",
      "cautionNote": "Bài đăng 28/07: một trong bốn lý do \"rẻ có thể rẻ hơn\" là doanh chủ bị call margin — dẫn chính DIG và PNJ. VCI cũng đã thông báo bán ra DIG.",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Tránh",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "Ví dụ điển hình rủi ro call margin của doanh chủ",
          "status": "active",
          "date": "31/07",
          "note": "Từ Bài đăng · 24–31/07 (31/07)."
        }
      ]
    },
    {
      "tradeMode": "spot",
      "potential": 3,
      "caution": 3,
      "key": "bsr",
      "symbol": "BSR",
      "name": "Lọc hóa dầu Bình Sơn",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:BSR",
      "region": "vn",
      "industry": "Dầu khí",
      "basket": "tranh",
      "sig": "wait",
      "stance": "CHỜ VƯỢT 27,5–28",
      "aliases": [
        "bsr",
        "binh son"
      ],
      "oneLiner": "Thái Phạm (Tập 42): \"ăn xong rồi, đội tay to nó ăn xong, giờ toàn nhỏ lẻ chơi với nhau\".",
      "potentialNote": "Không có luận điểm mua từ kênh nào.",
      "cautionNote": "Thanh khoản còn lại chủ yếu là nhỏ lẻ giao dịch với nhau.",
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "CHỜ VƯỢT ĐỈNH NGẮN HẠN",
          "sig": "wait",
          "entry": "—",
          "target": "Vượt 27,5–28",
          "stop": "—",
          "status": "waiting",
          "date": "17/08",
          "note": "Từ Livestream · 17/08 (17/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Tránh",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "Đừng đụng vào",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        }
      ],
      "views": [
        {
          "expertId": "ck-5-phut",
          "stance": "CHỜ VƯỢT ĐỈNH NGẮN HẠN",
          "sig": "wait",
          "date": "17/08",
          "line": "Từ Livestream · 17/08 (17/08). Mục tiêu: Vượt 27,5–28."
        },
        {
          "expertId": "thai-pham",
          "stance": "Tránh",
          "sig": "avoid",
          "date": "01/08",
          "line": "Từ Tập 42 · Tuần 31 (01/08)."
        }
      ]
    },
    {
      "tradeMode": "spot",
      "potential": 3,
      "caution": 3,
      "key": "msr",
      "symbol": "MSR",
      "name": "Masan High-Tech Materials",
      "group": "Chứng khoán Việt Nam",
      "tv": "UPCOM:MSR",
      "region": "vn",
      "industry": "Khai khoáng",
      "basket": "ngan-han",
      "sig": "up",
      "stance": "MUA 40,5–41 · thủng 40 thì cắt",
      "aliases": [
        "msr",
        "masan resource",
        "masan high tech"
      ],
      "oneLiner": "Thái Phạm (Tập 42): vùng này không mua được, phải đợi về 24.",
      "potentialNote": "Có mốc chờ cụ thể — một trong số ít mã ông đưa mốc giá rõ tuần 31.",
      "cautionNote": "\"Mua vùng này thì nó lại dìu các anh chị\" — mua sớm là bị kẹp.",
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "MUA THEO CÂY BREAK",
          "sig": "up",
          "entry": "40,5–41",
          "target": "—",
          "stop": "Thủng 40 thì cắt (hàng chưa về: 7%)",
          "status": "active",
          "date": "17/08",
          "note": "Từ Livestream · 17/08 (17/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Chờ mua",
          "sig": "wait",
          "entry": "Phải về vùng 24",
          "target": "—",
          "stop": "Mua vùng này là bị dìu",
          "status": "waiting",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        }
      ],
      "views": [
        {
          "expertId": "ck-5-phut",
          "stance": "MUA THEO CÂY BREAK",
          "sig": "up",
          "date": "17/08",
          "line": "Từ Livestream · 17/08 (17/08). Điểm vào: 40,5–41."
        },
        {
          "expertId": "thai-pham",
          "stance": "Chờ mua",
          "sig": "wait",
          "date": "01/08",
          "line": "Từ Tập 42 · Tuần 31 (01/08). Điểm vào: Phải về vùng 24."
        }
      ]
    },
    {
      "tradeMode": "spot",
      "potential": 3,
      "caution": 3,
      "key": "nkg",
      "symbol": "NKG",
      "name": "Thép Nam Kim",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:NKG",
      "region": "vn",
      "industry": "Thép",
      "basket": "tranh",
      "sig": "warn",
      "stance": "KÉM HƠN HPG RÕ RỆT",
      "aliases": [
        "nkg",
        "nam kim"
      ],
      "oneLiner": "Quang Dũng: tỉ suất 2,5 năm chỉ 7%, so với HPG 92%.",
      "potentialNote": "Cùng ngành thép nên hưởng lợi chung nếu giá thép hồi.",
      "cautionNote": "Quang Dũng (01/08) dùng NKG và HSG để chứng minh nội lực doanh nghiệp mới là thứ quyết định, không phải ngành.",
      "orders": [
        {
          "expertId": "quang-dung",
          "dir": "Kém hơn HPG",
          "sig": "warn",
          "entry": "—",
          "target": "—",
          "stop": "Tỉ suất 2,5 năm chỉ 7% và 26% so với HPG 92%",
          "status": "active",
          "date": "01/08",
          "note": "Từ HPG · Quý 2/2026 (01/08)."
        }
      ]
    },
    {
      "tradeMode": "spot",
      "potential": 3,
      "caution": 3,
      "key": "hsg",
      "symbol": "HSG",
      "name": "Hoa Sen Group",
      "group": "Chứng khoán Việt Nam",
      "tv": "HOSE:HSG",
      "region": "vn",
      "industry": "Thép",
      "basket": "tranh",
      "sig": "warn",
      "stance": "KÉM HƠN HPG",
      "aliases": [
        "hsg",
        "hoa sen"
      ],
      "oneLiner": "Quang Dũng: tỉ suất 2,5 năm 26%, so với HPG 92%.",
      "potentialNote": "Cùng ngành thép nên hưởng lợi chung nếu giá thép hồi.",
      "cautionNote": "Không có động lực mở rộng công suất như Dung Quất 2 của HPG.",
      "orders": [
        {
          "expertId": "quang-dung",
          "dir": "Kém hơn HPG",
          "sig": "warn",
          "entry": "—",
          "target": "—",
          "stop": "Tỉ suất 2,5 năm chỉ 7% và 26% so với HPG 92%",
          "status": "active",
          "date": "01/08",
          "note": "Từ HPG · Quý 2/2026 (01/08)."
        }
      ]
    },
    {
      "tradeMode": "margin",
      "potential": 3,
      "caution": 3,
      "key": "amzn",
      "symbol": "AMZN",
      "name": "Amazon",
      "group": "Quốc tế",
      "tv": "NASDAQ:AMZN",
      "region": "foreign",
      "industry": "Công nghệ & Internet",
      "basket": "ngan-han",
      "sig": "down",
      "stance": "CHỜ SHORT 285–290",
      "aliases": [
        "amzn",
        "amazon"
      ],
      "oneLiner": "Thái Phạm (Tập 42): đợi kéo lên 285–290 rồi short — phiên tăng 15% là đánh đỡ chỉ số.",
      "potentialNote": "Không có luận điểm mua.",
      "cautionNote": "\"Một cổ phiếu trụ mà đánh tăng 15% trong một phiên là cách đánh ngáo và láo — để đỡ S&P 500 và US30 thôi.\"",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Chờ short",
          "sig": "down",
          "entry": "285–290",
          "target": "\"Kéo thêm khoảng 15 giá nữa\"",
          "stop": "Phiên tăng 15% là đánh đỡ chỉ số",
          "status": "waiting",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Đứng ngoài",
          "sig": "down",
          "entry": "Đang nằm đáy",
          "target": "Bán lẻ toàn cầu đau khổ",
          "stop": "—",
          "status": "active",
          "date": "26/07",
          "note": "Từ Tập 40 · Tuần 30 (26/07)."
        }
      ]
    },
    {
      "tradeMode": "margin",
      "potential": 3,
      "caution": 3,
      "key": "bac",
      "symbol": "BAC",
      "name": "Bank of America",
      "group": "Quốc tế",
      "tv": "NYSE:BAC",
      "region": "foreign",
      "industry": "Ngân hàng",
      "basket": "ngan-han",
      "sig": "down",
      "stance": "SHORT ĐƯỢC NGAY",
      "aliases": [
        "bac",
        "bank of america"
      ],
      "oneLiner": "Thái Phạm (Tập 42): short được ngay vùng hiện tại, cùng Dell và RTX.",
      "potentialNote": "Không có luận điểm mua.",
      "cautionNote": "Nguyên tắc chung: short ở vùng cao đỉnh cũ, chốt ở vùng đáy — đừng short ngang chừng.",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Short",
          "sig": "down",
          "entry": "Vùng hiện tại",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        }
      ]
    },
    {
      "tradeMode": "margin",
      "potential": 3,
      "caution": 3,
      "key": "anet",
      "symbol": "ANET",
      "name": "Arista Networks",
      "group": "Quốc tế",
      "tv": "NYSE:ANET",
      "region": "foreign",
      "industry": "Phần cứng CNTT",
      "basket": "tranh",
      "sig": "avoid",
      "stance": "KHÔNG ƯU TIÊN — \"RẤT ẢO\"",
      "aliases": [
        "anet",
        "arista"
      ],
      "oneLiner": "Thái Phạm (Tập 42): \"rất là ảo — có màn hôm nay tăng 8% xong lại bị đập xuống\".",
      "potentialNote": "Không có.",
      "cautionNote": "Biến động thất thường, ông xếp ra ngoài danh sách ưu tiên.",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Không ưu tiên",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "\"Rất ảo — tăng 8% xong bị đập xuống\"",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        }
      ]
    },
    {
      "tradeMode": "margin",
      "potential": 3,
      "caution": 3,
      "key": "sndk",
      "symbol": "SanDisk",
      "name": "SanDisk",
      "group": "Quốc tế",
      "tv": "",
      "region": "foreign",
      "industry": "Bán dẫn & Điện tử tiêu dùng",
      "basket": "ngan-han",
      "sig": "up",
      "stance": "ĐÃ CHỐT — LÃI ĐẬM NHẤT ĐỢT",
      "aliases": [
        "sandisk",
        "sndk"
      ],
      "oneLiner": "Mã lãi đậm nhất đợt short vừa rồi: có thời điểm ăn hơn 50% từ vùng đỉnh.",
      "potentialNote": "Đã chốt 1/2 ngày 29/07 cùng nhóm AI chips; phần còn lại đợi 2–4 tuần short lại.",
      "cautionNote": "Kèo đã đóng phần lớn — không còn là mã hành động ngay.",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Đã chốt",
          "sig": "up",
          "entry": "—",
          "target": "Ăn 5x% từ vùng đỉnh",
          "stop": "Mã lãi đậm nhất đợt vừa rồi",
          "status": "done",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Chốt 1/2",
          "sig": "down",
          "entry": "Chốt đầu phiên 29/07",
          "target": "Short lại 1/2 sau 2–4 tuần",
          "stop": "—",
          "status": "waiting",
          "date": "31/07",
          "note": "Từ Bài đăng · 24–31/07 (31/07)."
        }
      ]
    },
    {
      "tradeMode": "margin",
      "potential": 3,
      "caution": 3,
      "key": "tsla",
      "symbol": "TSLA",
      "name": "Tesla",
      "group": "Quốc tế",
      "tv": "NASDAQ:TSLA",
      "region": "foreign",
      "industry": "Công nghệ tiêu dùng",
      "basket": "ngan-han",
      "sig": "down",
      "stance": "SHORT",
      "aliases": [
        "tsla",
        "tesla"
      ],
      "oneLiner": "Thái Phạm (Tập 39, 23/07) nêu short. Bản tin 24/07: TSLA -14,5%, EPS 33 cent so với kỳ vọng 51 cent.",
      "potentialNote": "Không có luận điểm mua.",
      "cautionNote": "Biên lợi nhuận gộp tụt còn 16,8%, lần đầu âm dòng tiền tự do kể từ 2024.",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "KHÔNG ĐỤNG VÀO",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Short",
          "sig": "down",
          "entry": "AMD 575; Google thủng hỗ trợ",
          "target": "Google dòng tiền âm; Tesla -7%",
          "stop": "—",
          "status": "active",
          "date": "23/07",
          "note": "Từ Tập 39 · Tuần 29 (23/07)."
        }
      ]
    },
    {
      "tradeMode": "margin",
      "potential": 3,
      "caution": 3,
      "key": "ko",
      "symbol": "KO",
      "name": "Coca-Cola",
      "group": "Quốc tế",
      "tv": "NYSE:KO",
      "region": "foreign",
      "industry": "Tiêu dùng thiết yếu",
      "basket": "ngan-han",
      "sig": "wait",
      "stance": "ĐÃ CHỐT LỜI",
      "aliases": [
        "ko",
        "coca cola",
        "coca-cola"
      ],
      "oneLiner": "Thái Phạm (Tập 40, 26/07): đã chốt lời nhóm phòng thủ.",
      "potentialNote": "Nhóm phòng thủ hút tiền khi thị trường xấu.",
      "cautionNote": "Tập 41 cảnh báo chính nhóm phòng thủ này rồi cũng sẽ điều chỉnh.",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Chốt lời",
          "sig": "wait",
          "entry": "Chốt hết",
          "target": "—",
          "stop": "—",
          "status": "waiting",
          "date": "26/07",
          "note": "Từ Tập 40 · Tuần 30 (26/07)."
        }
      ]
    },
    {
      "tradeMode": "margin",
      "potential": 3,
      "caution": 3,
      "key": "wmt",
      "symbol": "WMT",
      "name": "Walmart",
      "group": "Quốc tế",
      "tv": "NYSE:WMT",
      "region": "foreign",
      "industry": "Bán lẻ",
      "basket": "tranh",
      "sig": "wait",
      "stance": "ĐỨNG NGOÀI",
      "aliases": [
        "wmt",
        "walmart"
      ],
      "oneLiner": "Thái Phạm (26/07): đứng ngoài nhóm bán lẻ Mỹ.",
      "potentialNote": "—",
      "cautionNote": "Cùng nhóm với Costco và Amazon trong danh sách đứng ngoài.",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Đứng ngoài",
          "sig": "down",
          "entry": "Đang nằm đáy",
          "target": "Bán lẻ toàn cầu đau khổ",
          "stop": "—",
          "status": "active",
          "date": "26/07",
          "note": "Từ Tập 40 · Tuần 30 (26/07)."
        }
      ]
    },
    {
      "tradeMode": "margin",
      "potential": 3,
      "caution": 3,
      "key": "cost",
      "symbol": "COST",
      "name": "Costco",
      "group": "Quốc tế",
      "tv": "NASDAQ:COST",
      "region": "foreign",
      "industry": "Bán lẻ",
      "basket": "tranh",
      "sig": "wait",
      "stance": "ĐỨNG NGOÀI",
      "aliases": [
        "cost",
        "costco"
      ],
      "oneLiner": "Thái Phạm (26/07): đứng ngoài nhóm bán lẻ Mỹ.",
      "potentialNote": "—",
      "cautionNote": "Cùng nhóm với Walmart và Amazon trong danh sách đứng ngoài.",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Đứng ngoài",
          "sig": "down",
          "entry": "Đang nằm đáy",
          "target": "Bán lẻ toàn cầu đau khổ",
          "stop": "—",
          "status": "active",
          "date": "26/07",
          "note": "Từ Tập 40 · Tuần 30 (26/07)."
        }
      ]
    },
    {
      "tradeMode": "margin",
      "potential": 3,
      "caution": 3,
      "key": "ftse",
      "symbol": "FTSE 100",
      "name": "Chỉ số FTSE 100 (Anh)",
      "group": "Quốc tế",
      "tv": "TVC:UKX",
      "region": "foreign",
      "industry": "Chỉ số",
      "basket": "ngan-han",
      "sig": "down",
      "stance": "BÁN / SHORT ĐẦU TUẦN",
      "aliases": [
        "ftse",
        "ftse 100",
        "ukx"
      ],
      "oneLiner": "Thái Phạm (Tập 42): \"đầu tuần thế nào cũng dính con FTSE 100 — các bạn có thể bán được\".",
      "potentialNote": "Không có luận điểm mua.",
      "cautionNote": "Kèo ngắn hạn theo nhịp chung của chứng khoán toàn cầu.",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Bán / short",
          "sig": "down",
          "entry": "Đầu tuần",
          "target": "\"Thế nào cũng dính\"",
          "stop": "—",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        }
      ]
    },
    {
      "tradeMode": "margin",
      "potential": 3,
      "caution": 3,
      "key": "usdjpy",
      "symbol": "USD/JPY",
      "name": "Đô la Mỹ / Yên Nhật",
      "group": "Quốc tế",
      "tv": "FX:USDJPY",
      "region": "foreign",
      "industry": "Ngoại hối",
      "basket": "ngan-han",
      "sig": "up",
      "stance": "LONG LẠI VÙNG 147–150",
      "aliases": [
        "usdjpy",
        "usd/jpy",
        "yen",
        "đồng yên",
        "yen nhat"
      ],
      "oneLiner": "Can thiệp của BOJ và Bộ Tài chính Mỹ là nhân tạo — long lại khi về 147–150.",
      "potentialNote": "Chênh lệch lãi suất Nhật 1% với Mỹ 3,75–4% chưa được giải quyết, nên dài hạn trader thắng.",
      "cautionNote": "Ngắn hạn trader thua các định chế. Lần đầu sau 28 năm hai bên phối hợp can thiệp, BOJ chi ~72 tỷ đô.",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Long khi về vùng thấp",
          "sig": "up",
          "entry": "147–150",
          "target": "Chênh lệch lãi suất Nhật 1% vs Mỹ 3,75–4%",
          "stop": "Ngắn hạn trader thua định chế",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        }
      ]
    },
    {
      "tradeMode": "spot",
      "potential": 3,
      "caution": 3,
      "key": "aeon",
      "symbol": "AEON",
      "name": "AEON (Nhật)",
      "group": "Quốc tế",
      "tv": "TSE:8267",
      "region": "jp",
      "industry": "Bán lẻ",
      "basket": "ngan-han",
      "sig": "up",
      "stance": "MUA NHỎ",
      "aliases": [
        "aeon",
        "8267"
      ],
      "oneLiner": "Thái Phạm (Tập 42): khi đồng yên được can thiệp thì tuần tới AEON chạy — mua một chút cũng ok.",
      "potentialNote": "Hưởng lợi trực tiếp khi yên mạnh lên.",
      "cautionNote": "Kèo nhỏ, phụ thuộc vào việc can thiệp tỷ giá kéo dài bao lâu.",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Mua nhỏ",
          "sig": "up",
          "entry": "Tuần tới khi yên được can thiệp",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        }
      ]
    },
    {
      "tradeMode": "spot",
      "potential": 3,
      "caution": 3,
      "key": "bhp",
      "symbol": "BHP",
      "name": "BHP Group (Úc)",
      "group": "Quốc tế",
      "tv": "ASX:BHP",
      "region": "foreign",
      "industry": "Khai khoáng",
      "basket": "tranh",
      "sig": "avoid",
      "stance": "KHÔNG MUA",
      "aliases": [
        "bhp"
      ],
      "oneLiner": "Thái Phạm (Tập 42): \"không mua BHP — nó gãy bất cứ lúc nào\".",
      "potentialNote": "—",
      "cautionNote": "Nguyên tắc chung với Úc: mua vùng đáy, bán vùng cao. BHP đang không ở vùng đáy.",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Không mua",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "\"Gãy bất cứ lúc nào\"",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        }
      ]
    },
    {
      "tradeMode": "spot",
      "potential": 3,
      "caution": 3,
      "key": "wds",
      "symbol": "WDS",
      "name": "Woodside Energy (Úc)",
      "group": "Quốc tế",
      "tv": "ASX:WDS",
      "region": "foreign",
      "industry": "Dầu khí",
      "basket": "ngan-han",
      "sig": "up",
      "stance": "ĐÃ CÓ LỜI — CHỐT",
      "aliases": [
        "wds",
        "woodside"
      ],
      "oneLiner": "Thái Phạm (Tập 42): \"lời rồi, chốt thôi\".",
      "potentialNote": "Hưởng lợi từ giá dầu cao.",
      "cautionNote": "Đã đạt mục tiêu — không còn là kèo mở.",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Chốt lời",
          "sig": "up",
          "entry": "—",
          "target": "\"Lời rồi, chốt thôi\"",
          "stop": "—",
          "status": "waiting",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        }
      ]
    },
    {
      "tradeMode": "spot",
      "potential": 3,
      "caution": 3,
      "key": "nab",
      "symbol": "NAB",
      "name": "National Australia Bank",
      "group": "Quốc tế",
      "tv": "ASX:NAB",
      "region": "foreign",
      "industry": "Ngân hàng",
      "basket": "ngan-han",
      "sig": "up",
      "stance": "ĐÃ CÓ LỜI — CHỐT",
      "aliases": [
        "nab"
      ],
      "oneLiner": "Thái Phạm (Tập 42): \"lời rồi, chốt thôi\".",
      "potentialNote": "—",
      "cautionNote": "Đã đạt mục tiêu — không còn là kèo mở.",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Chốt lời",
          "sig": "up",
          "entry": "—",
          "target": "\"Lời rồi, chốt thôi\"",
          "stop": "—",
          "status": "waiting",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        }
      ]
    },
    {
      "tradeMode": "spot",
      "potential": 3,
      "caution": 3,
      "key": "anz",
      "symbol": "ANZ",
      "name": "ANZ Group (Úc)",
      "group": "Quốc tế",
      "tv": "ASX:ANZ",
      "region": "foreign",
      "industry": "Ngân hàng",
      "basket": "ngan-han",
      "sig": "up",
      "stance": "ĐÃ CÓ LỜI — CHỐT",
      "aliases": [
        "anz"
      ],
      "oneLiner": "Thái Phạm (Tập 42): \"lời rồi, lời rồi chốt thôi\".",
      "potentialNote": "—",
      "cautionNote": "Đã đạt mục tiêu — không còn là kèo mở.",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Chốt lời",
          "sig": "up",
          "entry": "—",
          "target": "\"Lời rồi, chốt thôi\"",
          "stop": "—",
          "status": "waiting",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        }
      ]
    },
    {
      "tradeMode": "spot",
      "potential": 3,
      "caution": 3,
      "key": "wtc",
      "symbol": "WTC",
      "name": "WiseTech Global (Úc)",
      "group": "Quốc tế",
      "tv": "ASX:WTC",
      "region": "foreign",
      "industry": "Công nghệ",
      "basket": "tranh",
      "sig": "warn",
      "stance": "ĐỪNG MUA — CÒN CÓ THỂ GIẢM",
      "aliases": [
        "wtc",
        "wisetech"
      ],
      "oneLiner": "Thái Phạm (Tập 42): đừng mua; nếu thích thì mua một chút rồi chờ hồi lên 50 mà bán.",
      "potentialNote": "Có mốc thoát cụ thể: hồi lên 50.",
      "cautionNote": "\"Đừng mua, đừng mua vì nó có thể còn giảm.\"",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Đừng mua",
          "sig": "warn",
          "entry": "Nếu thích thì mua chút",
          "target": "Chờ hồi lên 50 thì bán",
          "stop": "Còn có thể giảm tiếp",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        }
      ]
    },
    {
      "tradeMode": "spot",
      "potential": 3,
      "caution": 3,
      "key": "csl",
      "symbol": "CSL",
      "name": "CSL Limited (Úc)",
      "group": "Quốc tế",
      "tv": "ASX:CSL",
      "region": "foreign",
      "industry": "Dược phẩm",
      "basket": "dai-han",
      "sig": "wait",
      "stance": "ĐỂ ĐẤY",
      "aliases": [
        "csl"
      ],
      "oneLiner": "Thái Phạm (Tập 42): \"cứ để đấy thôi\" — không hành động gì.",
      "potentialNote": "—",
      "cautionNote": "Không có mốc mua bán nào được đưa ra.",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Để đấy",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "01/08",
          "note": "Từ Tập 42 · Tuần 31 (01/08)."
        }
      ]
    },
    {
      "key": "vn30",
      "symbol": "VN30",
      "name": "Chỉ số VN30 · ETF VN30",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Chỉ số & ETF",
      "basket": "dai-han",
      "tradeMode": "spot",
      "tv": "HOSE:VN30",
      "sig": "wait",
      "stance": "NỀN CỦA DANH MỤC VN",
      "aliases": [
        "vn 30",
        "etf vn30",
        "etf vn 30",
        "vn30 etf"
      ],
      "oneLiner": "LCG Huy coi ETF VN30 là nền của danh mục cho người ở Việt Nam, và là thước đo để chấm mọi quỹ mở — không dùng VN-Index vì không mua được VN-Index.",
      "thesis": [
        {
          "expertId": "lcg-huy",
          "title": "Thước đo đúng của quỹ mở Việt Nam",
          "body": "Nhiều quỹ ghi VN-Index làm benchmark trong bản cáo bạch, nhưng \"không có bất cứ tài sản nào theo dõi VN-Index cả, cho nên bạn so với nó cũng không để làm gì hết\". Nếu không mua quỹ mở thì bạn cũng không có cách nào mua VN-Index — nên thước đo phải là thứ thật sự mua được: ETF VN30. Một quỹ mở chỉ đáng đưa vào danh mục khi thắng VN30, hoặc khi lỗ thì lỗ ít hơn VN30."
        },
        {
          "expertId": "lcg-huy",
          "title": "Đủ đa dạng cho người ở Việt Nam, dù nặng bank và bất động sản",
          "body": "Anh thừa nhận VN30 tập trung nhiều vào bất động sản và ngân hàng, nhưng \"đó là điểm chung của cả thị trường Việt Nam rồi, làm gì thì bạn cũng không tránh được hai ngành đó đâu\". Cách bù: mua thêm một đến hai chứng chỉ quỹ mở phủ những công ty ít nằm trong VN30. Số liệu anh dẫn: năm 2025 VN30 tăng gần 50% chủ yếu nhờ nhóm cổ phiếu họ Vin; năm 2022 VN30 rớt 34%."
        }
      ],
      "orders": [
        {
          "expertId": "lcg-huy",
          "dir": "DCA ĐỀU ĐẶN qua E1VN30 — không cần chọn cổ phiếu lẻ",
          "sig": "up",
          "entry": "Định kỳ hàng tháng",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "19/08",
          "note": "Từ Video · 19/08 (19/08)."
        },
        {
          "expertId": "lcg-huy",
          "dir": "Dành cho người ở Việt Nam — nền của danh mục",
          "sig": "wait",
          "entry": "Không nêu mốc giá",
          "target": "Bổ sung 1–2 quỹ mở phủ ngoài VN30",
          "stop": "Không nêu",
          "status": "active",
          "date": "02/08",
          "note": "Từ Đổi danh mục · 02/08 (02/08)."
        }
      ],
      "potential": 3,
      "potentialNote": "Là chỉ số nền — kỳ vọng đi cùng thị trường chứ không vượt trội.",
      "caution": 3,
      "cautionNote": "Nặng bất động sản và ngân hàng; 2025 tăng gần 50% chủ yếu nhờ nhóm Vin, 2022 rớt 34%."
    },
    {
      "key": "bvh",
      "symbol": "BVH",
      "name": "Tập đoàn Bảo Việt",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Bảo hiểm",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:BVH",
      "sig": "up",
      "stance": "GIỮ TIẾP — nhắm vượt 72",
      "aliases": [
        "bao viet"
      ],
      "oneLiner": "CK 5 phút nêu BVH là mã cùng dạng đồ thị với FRT nhưng mới nhú: khối lượng vào, biến động giá tăng và chưa chạy quá xa — đáng xem thay vì mua đuổi FRT đã ba cây trần.",
      "thesis": [],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "GIỮ TIẾP",
          "sig": "up",
          "entry": "63–65 (vào 07/08)",
          "target": "Vượt 72",
          "stop": "—",
          "status": "active",
          "date": "17/08",
          "note": "Từ Livestream · 17/08 (17/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "Điểm mua vẫn giữ được",
          "sig": "up",
          "entry": "Từ phiên 07/08",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "10/08",
          "note": "Từ Livestream · 10/08 (10/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "Mới nhú, đáng theo dõi",
          "sig": "up",
          "entry": "Volume vào, chưa chạy xa",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "03/08",
          "note": "Từ Livestream · 03/08 (03/08)."
        }
      ],
      "potential": 3,
      "potentialNote": "Mới có tín hiệu, chưa xác nhận xu hướng.",
      "caution": 3,
      "cautionNote": "Chỉ mới một phiên nhú — chưa đủ nền."
    },
    {
      "key": "cii",
      "symbol": "CII",
      "name": "Hạ tầng Kỹ thuật TP.HCM",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Xây dựng & Hạ tầng",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:CII",
      "sig": "wait",
      "stance": "CẦM, ĐỢI INDEX 182x RA",
      "aliases": [],
      "oneLiner": "Thái Phạm trả lời hội viên còn ít CII và đang có 60% danh mục là DPM với BVB: cầm cho nó hồi lên rồi vùng Index 182x ra luôn, nếu được — thay vì bán ngay để mua POW.",
      "thesis": [],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Cầm, đợi 182x ra",
          "sig": "wait",
          "entry": "Đang cầm ít",
          "target": "Ra vùng Index 182x",
          "stop": "—",
          "status": "active",
          "date": "04/08",
          "note": "Từ Bài đăng · 04/08 (04/08)."
        }
      ],
      "potential": 2,
      "potentialNote": "Không có luận điểm doanh nghiệp, chỉ là hàng chờ thoát theo nhịp Index.",
      "caution": 3,
      "cautionNote": "Được xếp vào nhóm thoát khi thị trường hồi, không phải nhóm giữ."
    },
    {
      "key": "frt",
      "symbol": "FRT",
      "name": "Bán lẻ Kỹ thuật số FPT",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Bán lẻ",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:FRT",
      "sig": "up",
      "stance": "GIỮ — mới tăng 37% từ đáy, chưa có lý do bán",
      "aliases": [
        "long chau"
      ],
      "oneLiner": "CK 5 phút: ba cây trần liên tiếp nên không có lý do gì mua đuổi — \"kể cả nó có kéo dựng ngược lên 10 cây trần này không quan tâm, điểm mua không an toàn là không vào\". Kỳ vọng IPO Long Châu là có thật nhưng còn phụ thuộc định giá và tỉ lệ chào bán.",
      "thesis": [],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "CHƯA CÓ LÝ DO BÁN",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "MA20 chưa thủng",
          "status": "active",
          "date": "27/08",
          "note": "Từ Livestream · 27/08 (27/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "ĐỢI VƯỢT ĐỈNH RỒI MUA",
          "sig": "wait",
          "entry": "Vượt đỉnh",
          "target": "—",
          "stop": "Vùng 140 có nhiều lệnh chốt",
          "status": "waiting",
          "date": "17/08",
          "note": "Từ Livestream · 17/08 (17/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "KHÔNG mua đuổi",
          "sig": "avoid",
          "entry": "Đã ba cây trần",
          "target": "—",
          "stop": "Điểm mua không an toàn là không vào",
          "status": "active",
          "date": "03/08",
          "note": "Từ Livestream · 03/08 (03/08)."
        }
      ],
      "potential": 4,
      "potentialNote": "Long Châu là mảng rất tốt nếu IPO với định giá hợp lý.",
      "caution": 4,
      "cautionNote": "Đã ba cây trần; rủi ro IPO định giá cao lặp lại chuyện Điện máy xanh."
    },
    {
      "key": "hag",
      "symbol": "HAG",
      "name": "Hoàng Anh Gia Lai",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Nông nghiệp & Chăn nuôi",
      "basket": "tranh",
      "tradeMode": "spot",
      "tv": "HOSE:HAG",
      "sig": "avoid",
      "stance": "KHÔNG QUAN TÂM — GIÁ 14 KHÔNG HẤP DẪN",
      "aliases": [
        "hoang anh gia lai"
      ],
      "oneLiner": "CK 5 phút: giảm nhiều từ đỉnh nhưng chất lượng doanh nghiệp không đổi nhiều. Tích cực duy nhất là xử lý được khá khá nợ, nhưng không đi kèm tích cực về giá; thanh khoản không có và tích lũy chưa đủ.",
      "thesis": [],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "Không quan tâm",
          "sig": "avoid",
          "entry": "Giá 14 không hấp dẫn",
          "target": "—",
          "stop": "Thanh khoản không có",
          "status": "active",
          "date": "03/08",
          "note": "Từ Livestream · 03/08 (03/08)."
        }
      ],
      "potential": 2,
      "potentialNote": "Xử lý nợ là điểm sáng duy nhất.",
      "caution": 4,
      "cautionNote": "Thanh khoản không có; kể cả giật ngược lên cũng không phải điểm mua."
    },
    {
      "key": "ocb",
      "symbol": "OCB",
      "name": "Ngân hàng Phương Đông",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Ngân hàng",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:OCB",
      "sig": "wait",
      "stance": "CHỈ HỢP ĐÁNH GAME",
      "aliases": [
        "phuong dong"
      ],
      "oneLiner": "CK 5 phút: P/B khoảng 0,8 và nhịp điều chỉnh mất tầm 1/2 sóng trông lành mạnh, nhưng chưa có điểm mua — cần vượt MA20. \"OCB mà kỳ vọng tăng trưởng gì thì khó\"; so với Techcombank P/B 1,1 thì không hấp dẫn bằng.",
      "thesis": [],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "Chỉ hợp đánh game",
          "sig": "wait",
          "entry": "Đợi vượt MA20",
          "target": "—",
          "stop": "P/B 0,8 nhưng kỳ vọng tăng trưởng khó",
          "status": "active",
          "date": "03/08",
          "note": "Từ Livestream · 03/08 (03/08)."
        }
      ],
      "potential": 2,
      "potentialNote": "P/B thấp nhất nhóm nhưng kỳ vọng tăng trưởng khó.",
      "caution": 3,
      "cautionNote": "Chỉ là hàng đánh game, không phải hàng nắm giữ."
    },
    {
      "key": "pow",
      "symbol": "POW",
      "name": "Điện lực Dầu khí Việt Nam",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Điện & Năng lượng",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:POW",
      "sig": "up",
      "stance": "MUA NHẸ NẾU NHIỀU TIỀN",
      "aliases": [
        "dien luc dau khi"
      ],
      "oneLiner": "Thái Phạm xếp POW vào danh sách mua thêm nhẹ nhàng dành cho nhóm đang cầm hơn 60% tiền mặt, cùng với phân bón và nhóm ngân hàng (BID/EIB, BVB, TPB, VCB hoặc HDB).",
      "thesis": [],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Mua nhẹ nếu cầm trên 60% tiền",
          "sig": "up",
          "entry": "Vùng hiện tại",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "04/08",
          "note": "Từ Bài đăng · 04/08 (04/08)."
        }
      ],
      "potential": 3,
      "potentialNote": "Nằm trong danh sách giải ngân nhẹ khi thị trường còn yếu.",
      "caution": 2,
      "cautionNote": "Không có mốc giá cụ thể kèm theo."
    },
    {
      "key": "shb",
      "symbol": "SHB",
      "name": "Ngân hàng Sài Gòn – Hà Nội",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Ngân hàng",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:SHB",
      "sig": "wait",
      "stance": "CHỜ CÂY TRẦN + VOLUME GẤP 3–4 LẦN",
      "aliases": [
        "sai gon ha noi"
      ],
      "oneLiner": "CK 5 phút: từ đỉnh tháng 8–9 năm ngoái đến nay chưa có nhịp đảo chiều nào, thanh khoản không vào. Cách đánh đúng là đợi một cây tăng trần kèm thanh khoản gấp 3–4 lần trung bình rồi mua gia tăng trên đà tăng — KHÔNG mua tích lũy để nắm giữ.",
      "thesis": [],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "Chỉ vào khi có cây trần + volume gấp 3–4 lần",
          "sig": "wait",
          "entry": "Chờ tín hiệu",
          "target": "—",
          "stop": "Không mua tích lũy để nắm giữ",
          "status": "active",
          "date": "03/08",
          "note": "Từ Livestream · 03/08 (03/08)."
        }
      ],
      "potential": 3,
      "potentialNote": "Là hàng có game, trước sau gì cũng có nhịp kéo.",
      "caution": 4,
      "cautionNote": "Giai đoạn 2023 đến đầu 2025 đi ngang trong một biên giá, đánh gãy kiên nhẫn của người nắm giữ."
    },
    {
      "key": "shs",
      "symbol": "SHS",
      "name": "Chứng khoán Sài Gòn – Hà Nội",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Chứng khoán",
      "basket": "dai-han",
      "tradeMode": "spot",
      "tv": "HNX:SHS",
      "sig": "up",
      "stance": "MUA 30% NẮM GIỮ ĐƯỢC",
      "aliases": [],
      "oneLiner": "CK 5 phút đánh giá SHS tích cực nhất trong nhóm chứng khoán tự doanh: \"ở mức giá 15 16 này thì nó không hề cao một chút nào cả, mua nắm giữ thì cũng ổn thôi\" — ai nhiều sức mua thì vào 30%.",
      "thesis": [],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "Mua 30% nắm giữ được",
          "sig": "up",
          "entry": "Vùng 15–16",
          "target": "Tích cực nhất nhóm chứng khoán tự doanh",
          "stop": "—",
          "status": "active",
          "date": "03/08",
          "note": "Từ Livestream · 03/08 (03/08)."
        }
      ],
      "potential": 4,
      "potentialNote": "Mã được đánh giá cao nhất nhóm chứng khoán tự doanh.",
      "caution": 3,
      "cautionNote": "Đồ thị vẫn thiếu đáy, tín hiệu tạo đáy từ tuần trước không mạnh."
    },
    {
      "key": "tng",
      "symbol": "TNG",
      "name": "Đầu tư và Thương mại TNG",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Dệt may",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HNX:TNG",
      "sig": "wait",
      "stance": "CHỜ VỀ ~17 TẠO HAI ĐÁY",
      "aliases": [],
      "oneLiner": "CK 5 phút: rủi ro về mặt doanh nghiệp không nhiều, còn tin tức thế giới thì luôn biến động và biến động tạo ra cơ hội chứ không phải rủi ro. Nếu nhúng xuống tạo hai đáy quanh vùng 17 thì cân nhắc được.",
      "thesis": [],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "Cân nhắc nếu tạo hai đáy",
          "sig": "wait",
          "entry": "Vùng 17",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "03/08",
          "note": "Từ Livestream · 03/08 (03/08)."
        }
      ],
      "potential": 3,
      "potentialNote": "Doanh nghiệp không có rủi ro lớn về hoạt động.",
      "caution": 3,
      "cautionNote": "Phụ thuộc biến động thương mại và đơn hàng xuất khẩu."
    },
    {
      "key": "gex",
      "symbol": "GEX",
      "name": "Tập đoàn GELEX",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Đa ngành & Thiết bị điện",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:GEX",
      "sig": "avoid",
      "stance": "CHƯA MUA — xu hướng giảm còn rõ",
      "aliases": [
        "gelex"
      ],
      "oneLiner": "CK 5 phút: mã đáng chú ý nhất phiên 04/08, kéo trần trong khoảng 10 phút cuối vì thanh khoản bé. Ai bắt được điểm phân kỳ dương đồ thị giờ tuần trước (vùng vượt 22) đang lãi ~12% — giữ tiếp, nhưng đã +26% từ đáy nên mua đuổi bây giờ là rủi ro ngắn hạn.",
      "thesis": [],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "CHƯA MUA — xu hướng giảm còn rõ",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "Vào nhanh ra nhanh nếu có mua",
          "status": "active",
          "date": "20/08",
          "note": "Từ Livestream · 20/08 (20/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "GIỮ — thủng 24 thì bán",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "24",
          "status": "active",
          "date": "17/08",
          "note": "Từ Livestream · 17/08 (17/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "GIỮ — không mua đuổi",
          "sig": "up",
          "entry": "Điểm mua đúng là vùng vượt 22 tuần trước",
          "target": "Đang lãi ~12%",
          "stop": "Đã +26% từ đáy, mua giờ là rủi ro ngắn hạn",
          "status": "active",
          "date": "04/08",
          "note": "Từ Livestream · 04/08 (04/08)."
        }
      ],
      "potential": 3,
      "potentialNote": "Nhóm cổ phiếu dòng tiền, giảm nhanh thì tăng cũng nhanh.",
      "caution": 4,
      "cautionNote": "Đừng phân tích doanh thu lợi nhuận với nhóm này — chỉ áp sát hành động giá."
    },
    {
      "key": "vsc",
      "symbol": "VSC",
      "name": "Container Việt Nam",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Logistics & Cảng hàng không",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:VSC",
      "sig": "wait",
      "stance": "GIỮ — CHỐT LÃI VÙNG 17",
      "aliases": [
        "container viet nam"
      ],
      "oneLiner": "CK 5 phút: vùng 14 là vùng tích lũy lớn nhất của năm 2025. Nếu tạo hai đáy hoặc tích lũy đi ngang thì ngon hơn; nếu tăng giật ngược lên thì ngắn hạn chỉ kích hoạt giá bán chốt lãi quanh 17. \"Tính chất VSC là tăng rất nhanh và giảm cũng nhiều.\"",
      "thesis": [],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "Giữ, chốt lãi nếu giật lên",
          "sig": "wait",
          "entry": "Vùng 14 là tích lũy lớn nhất 2025",
          "target": "17",
          "stop": "Ngon hơn nếu tạo hai đáy",
          "status": "active",
          "date": "04/08",
          "note": "Từ Livestream · 04/08 (04/08)."
        }
      ],
      "potential": 3,
      "potentialNote": "Biên độ dao động lớn, hợp đánh sóng.",
      "caution": 3,
      "cautionNote": "Giảm mạnh ngoài dự đoán của nhiều người cầm — cần chấp nhận biên độ."
    },
    {
      "key": "eib",
      "symbol": "EIB",
      "name": "Ngân hàng Eximbank",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Ngân hàng",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:EIB",
      "sig": "up",
      "stance": "CHIA RẼ — mua hay đợi hai đáy",
      "aliases": [
        "eximbank"
      ],
      "oneLiner": "Thái Phạm xếp EIB vào nhóm MUA vì đã giảm sâu và nhóm chủ sẽ kéo. CK 5 phút thận trọng hơn: vùng dưới 20 không xấu và nhắm vượt 20 thì bán, nhưng chưa vượt MA20 nên \"nếu là em thì em sẽ đợi hai đáy\".",
      "thesis": [],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "MUA — đã giảm sâu",
          "sig": "up",
          "entry": "Vùng hiện tại",
          "target": "Nhóm chủ sẽ kéo",
          "stop": "—",
          "status": "active",
          "date": "05/08",
          "note": "Từ Tập 43 · ĐẢO CHIỀU (05/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "Mua được nhưng đợi hai đáy thì hơn",
          "sig": "wait",
          "entry": "Dưới 20",
          "target": "Vượt 20 thì bán",
          "stop": "Chưa vượt MA20",
          "status": "active",
          "date": "04/08",
          "note": "Từ Livestream · 04/08 (04/08)."
        }
      ],
      "potential": 3,
      "potentialNote": "Câu chuyện thay đổi ban lãnh đạo và chủ sở hữu — hàng có game.",
      "caution": 3,
      "cautionNote": "Hai chuyên gia lệch nhau về thời điểm vào; chưa vượt MA20.",
      "views": [
        {
          "expertId": "thai-pham",
          "stance": "MUA — đã giảm sâu",
          "sig": "up",
          "date": "05/08",
          "line": "Từ Tập 43 · ĐẢO CHIỀU (05/08). Điểm vào: Vùng hiện tại. Mục tiêu: Nhóm chủ sẽ kéo."
        },
        {
          "expertId": "ck-5-phut",
          "stance": "Mua được nhưng đợi hai đáy thì hơn",
          "sig": "wait",
          "date": "04/08",
          "line": "Từ Livestream · 04/08 (04/08). Điểm vào: Dưới 20. Mục tiêu: Vượt 20 thì bán."
        }
      ]
    },
    {
      "key": "dgw",
      "symbol": "DGW",
      "name": "Digiworld",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Bán lẻ",
      "basket": "tranh",
      "tradeMode": "spot",
      "tv": "HOSE:DGW",
      "sig": "wait",
      "stance": "KHÔNG ĐẠT — chưa vượt được điểm chờ",
      "aliases": [
        "digiworld"
      ],
      "oneLiner": "CK 5 phút nhắm mã này từ lâu và từng đợi vùng 37 (đáy nền tích lũy vẽ từ giữa 2025), nhưng nó thủng luôn: cây rút chân ở 37 không tạo tín hiệu đảo chiều, phiên T+2 sau đó thủng tiếp cùng index. \"Chỗ này mà ai nhảy vào mua thì đương nhiên là mua bừa.\"",
      "thesis": [],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "KHÔNG ĐẠT — không vượt được điểm chờ",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "27/08",
          "note": "Từ Livestream · 27/08 (27/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "BỎ QUA — không có điểm vào",
          "sig": "warn",
          "entry": "Đã vượt hộp, hơi cao",
          "target": "—",
          "stop": "\"Kể cả nó có chạy mất thì cứ từ từ\"",
          "status": "active",
          "date": "13/08",
          "note": "Từ Livestream · 13/08 (13/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "KHÔNG MUA — đã thủng nền",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "Thủng 37, rút chân không tạo đảo chiều",
          "status": "active",
          "date": "04/08",
          "note": "Từ Livestream · 04/08 (04/08)."
        }
      ],
      "potential": 3,
      "potentialNote": "Ngành có câu chuyện, rủi ro tài chính doanh nghiệp thấp.",
      "caution": 4,
      "cautionNote": "Sức mua bán lẻ giảm; siết bản quyền phần mềm đẩy giá thiết bị văn phòng lên."
    },
    {
      "key": "acv",
      "symbol": "ACV",
      "name": "Tổng công ty Cảng hàng không Việt Nam",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Logistics & Cảng hàng không",
      "basket": "tranh",
      "tradeMode": "spot",
      "tv": "HOSE:ACV",
      "sig": "avoid",
      "stance": "HẾT NĂM NAY ĐỪNG MUA",
      "aliases": [
        "cang hang khong"
      ],
      "oneLiner": "CK 5 phút: \"ACV là con mà em đánh giá hết năm nay đừng mua. Nó đang bị ốp tiến độ.\"",
      "thesis": [],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "HẾT NĂM NAY ĐỪNG MUA",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "Đang bị ốp tiến độ",
          "status": "active",
          "date": "04/08",
          "note": "Từ Livestream · 04/08 (04/08)."
        }
      ],
      "potential": 2,
      "potentialNote": "Câu chuyện hạ tầng dài hạn nhưng chưa đến lúc.",
      "caution": 4,
      "cautionNote": "Bị ốp tiến độ dự án — chuyên gia loại khỏi danh mục cả năm."
    },
    {
      "key": "vcg",
      "symbol": "VCG",
      "name": "Tổng công ty Vinaconex",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Xây dựng & Hạ tầng",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:VCG",
      "sig": "up",
      "stance": "THEO DÕI SÓNG ĐẦU TƯ CÔNG",
      "aliases": [
        "vinaconex"
      ],
      "oneLiner": "Quang Dũng nêu VCG là mã đầu tư công có thể đi giống FPT về mặt đồ thị. Lý do: cuối năm đầu tư công thường mạnh, và cơ chế chính sách đang hậu thuẫn dòng vốn ưu tiên cho các dự án trọng điểm của chính phủ.",
      "thesis": [
        {
          "expertId": "quang-dung",
          "title": "Sóng đầu tư công cuối năm",
          "body": "\"Thường thường là cuối năm thì đầu tư công nó sẽ mạnh. Chưa kể là trong giai đoạn vừa rồi thì các cơ chế và chính sách nó cũng đang hậu thuẫn cho cái dòng chảy ưu tiên dòng vốn cho các dự án trọng điểm của chính phủ, nên Dũng nghĩ rằng là cái chu kỳ này hoàn toàn có thể xảy ra.\" Anh so sánh dạng đồ thị của nhóm đầu tư công, trong đó có VCG, với FPT."
        }
      ],
      "orders": [
        {
          "expertId": "quang-dung",
          "dir": "Đầu tư công — theo dõi",
          "sig": "up",
          "entry": "—",
          "target": "Cuối năm đầu tư công thường mạnh",
          "stop": "—",
          "status": "active",
          "date": "06/08",
          "note": "Từ Vĩ mô · Tháng 8 (06/08)."
        }
      ],
      "potential": 3,
      "potentialNote": "Hưởng lợi nếu sóng đầu tư công cuối năm diễn ra như chu kỳ cũ.",
      "caution": 3,
      "cautionNote": "Phụ thuộc tiến độ giải ngân của chính phủ; chưa có mốc giá cụ thể."
    },
    {
      "key": "gmd",
      "symbol": "GMD",
      "name": "Gemadept",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Logistics & Cảng hàng không",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:GMD",
      "sig": "warn",
      "stance": "ĐÃ YẾU — cắt nếu thủng 75",
      "aliases": [
        "gemadept"
      ],
      "oneLiner": "CK 5 phút phiên 10/08: \"Em cứ tưởng nó ngon rồi, vượt đỉnh ngon, ai ngờ nó lại cột đầu. Cột đầu này đúng là xấu.\" Ai đã mua thì đợi hàng về T+ xem sao; anh vẫn để ngỏ kỳ vọng vượt đỉnh trong giai đoạn hiện tại.",
      "thesis": [],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "CÂN NHẮC CẮT — đã yếu",
          "sig": "warn",
          "entry": "—",
          "target": "—",
          "stop": "75 (đóng cửa 77)",
          "status": "active",
          "date": "20/08",
          "note": "Từ Livestream · 20/08 (20/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "Cột đầu — đợi hàng về",
          "sig": "warn",
          "entry": "Đã vượt đỉnh rồi bị đẩy ngược",
          "target": "Vẫn còn kỳ vọng vượt đỉnh",
          "stop": "\"Cột đầu này đúng là xấu\"",
          "status": "active",
          "date": "10/08",
          "note": "Từ Livestream · 10/08 (10/08)."
        }
      ],
      "potential": 3,
      "potentialNote": "Vẫn còn kỳ vọng vượt đỉnh nếu thị trường giữ được nhịp.",
      "caution": 3,
      "cautionNote": "Đã cột đầu nhiều lần; lần này ngay sau khi vượt đỉnh."
    },
    {
      "key": "hcm",
      "symbol": "HCM",
      "name": "Chứng khoán TP.HCM (HSC)",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Chứng khoán",
      "basket": "tranh",
      "tradeMode": "spot",
      "tv": "HOSE:HCM",
      "sig": "avoid",
      "stance": "ĐỪNG ĐỤNG — vùng rất cao dù trong rổ",
      "aliases": [
        "hsc"
      ],
      "oneLiner": "Thái Phạm khi điểm qua nhóm chứng khoán trong Tập 44: \"HCM cao giá quá đừng có mua nữa\". Nhóm chứng khoán chỉ chiếm khoảng 15% danh mục của ông và ông ưu tiên bổ sung SSI.",
      "thesis": [],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "ĐỪNG ĐỤNG — vùng rất cao",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "Không còn dư địa tăng",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "ĐỪNG MUA — cao giá quá",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        }
      ],
      "potential": 2,
      "potentialNote": "Doanh nghiệp đầu ngành nhưng đã hết vùng giá hấp dẫn.",
      "caution": 4,
      "cautionNote": "Bị loại thẳng khỏi danh sách mua vì mặt bằng giá."
    },
    {
      "key": "mbs",
      "symbol": "MBS",
      "name": "Chứng khoán MB",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Chứng khoán",
      "basket": "dai-han",
      "tradeMode": "spot",
      "tv": "HOSE:MBS",
      "sig": "wait",
      "stance": "KHÔNG MUA MỚI — vừa chia",
      "aliases": [],
      "oneLiner": "Thái Phạm trong Tập 44: \"MBS đang cầm vùng giá rất rẻ là cứ cầm thôi.\" Nằm trong nhóm chứng khoán mà ông giữ khoảng 15% danh mục.",
      "thesis": [],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "KHÔNG MUA MỚI",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "17/08",
          "note": "Từ Livestream · 17/08 (17/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Cầm — đang ở vùng giá rất rẻ",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "08/08",
          "note": "Từ Tập 44 · Tuần 32 (08/08)."
        }
      ],
      "potential": 3,
      "potentialNote": "Vùng giá được đánh giá là rất rẻ so với nền cũ.",
      "caution": 3,
      "cautionNote": "Nhóm chứng khoán phụ thuộc lãi suất; ông vẫn đợi sóng.",
      "views": [
        {
          "expertId": "ck-5-phut",
          "stance": "KHÔNG MUA MỚI",
          "sig": "wait",
          "date": "17/08",
          "line": "Từ Livestream · 17/08 (17/08)."
        },
        {
          "expertId": "thai-pham",
          "stance": "Cầm — đang ở vùng giá rất rẻ",
          "sig": "up",
          "date": "08/08",
          "line": "Từ Tập 44 · Tuần 32 (08/08)."
        }
      ]
    },
    {
      "key": "ksb",
      "symbol": "KSB",
      "name": "Khoáng sản và Xây dựng Bình Dương",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Khai khoáng",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:KSB",
      "sig": "wait",
      "stance": "CÓ ĐIỂM MUA — NHƯNG MUA ÍT",
      "aliases": [],
      "oneLiner": "CK 5 phút phiên 12/08: KSB có điểm mua và có tiền vào, cùng dạng với PLC. Nhưng anh nói ngay \"trông em nghĩ chắc chả đi xa được với cái đồ thị đâu\" — nhóm cổ phiếu đá Việt Nam thanh khoản rất bé, đánh hàng cô đặc.",
      "thesis": [],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "Có điểm mua — mua ít thôi",
          "sig": "wait",
          "entry": "Phiên 12/08 có tiền vào",
          "target": "\"Chả đi xa được với cái đồ thị đâu\"",
          "stop": "Thanh khoản rất bé, hàng cô đặc",
          "status": "active",
          "date": "12/08",
          "note": "Từ Livestream · 12/08 (12/08)."
        }
      ],
      "potential": 2,
      "potentialNote": "Chỉ là nhịp có tiền vào, không phải xu hướng.",
      "caution": 4,
      "cautionNote": "Thanh khoản rất bé, hàng cô đặc; đầu tư công sóng đang yếu."
    },
    {
      "key": "plc",
      "symbol": "PLC",
      "name": "Hóa dầu Petrolimex",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Dầu khí",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:PLC",
      "sig": "wait",
      "stance": "CÙNG DẠNG VỚI KSB",
      "aliases": [],
      "oneLiner": "CK 5 phút: \"Ngày xưa hai con này suốt ngày chạy cùng với nhau nhưng mà giai đoạn gần đây KSB hơi yếu.\" Nếu có mua thì hôm 12/08 là mua được, nhưng cùng cảnh báo về thanh khoản như KSB.",
      "thesis": [],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "Cùng dạng với KSB",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "12/08",
          "note": "Từ Livestream · 12/08 (12/08)."
        }
      ],
      "potential": 2,
      "potentialNote": "Chạy theo cặp với KSB trong các nhịp đầu tư công.",
      "caution": 3,
      "cautionNote": "Thanh khoản mỏng, phụ thuộc nhịp đầu tư công vốn đang yếu."
    },
    {
      "key": "gvr",
      "symbol": "GVR",
      "name": "Tập đoàn Cao su Việt Nam",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Cao su & Khu công nghiệp",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:GVR",
      "sig": "up",
      "stance": "CON CHÍNH NHÓM CAO SU",
      "aliases": [
        "cao su viet nam"
      ],
      "oneLiner": "Thái Phạm xếp GVR vào trường phái thoái vốn nhà nước: \"sóng thoái vốn thì bao giờ nó cũng có sóng\", canh lấp lại gap ở vùng khoảng 29,65 dành cho ai thích lướt. CK 5 phút cũng ghi nhận GVR tăng khá nhiều trong chính phiên giảm 36 điểm ngày 14/08.",
      "thesis": [],
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "MUA — con chính của nhóm cao su",
          "sig": "up",
          "entry": "Vùng hiện tại",
          "target": "Hoàn thành 98% kế hoạch năm ở quý 2",
          "stop": "—",
          "status": "active",
          "date": "20/08",
          "note": "Từ Livestream · 20/08 (20/08)."
        },
        {
          "expertId": "thai-pham",
          "dir": "Lướt sóng thoái vốn",
          "sig": "up",
          "entry": "Lấp gap vùng ~29,65",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "Tăng khá — điều chỉnh bình thường",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "14/08",
          "note": "Từ Livestream · 14/08 (14/08)."
        }
      ],
      "potential": 3,
      "potentialNote": "Hưởng lợi nếu lộ trình thoái vốn nhà nước được đẩy nhanh.",
      "caution": 3,
      "cautionNote": "Là kèo lướt theo sóng tin, không phải hàng nắm giữ dài hạn.",
      "views": [
        {
          "expertId": "ck-5-phut",
          "stance": "MUA — con chính của nhóm cao su",
          "sig": "up",
          "date": "20/08",
          "line": "Từ Livestream · 20/08 (20/08). Điểm vào: Vùng hiện tại. Mục tiêu: Hoàn thành 98% kế hoạch năm ở quý 2."
        },
        {
          "expertId": "thai-pham",
          "stance": "Lướt sóng thoái vốn",
          "sig": "up",
          "date": "15/08",
          "line": "Từ Tập 45 · Tuần 33 (15/08). Điểm vào: Lấp gap vùng ~29,65."
        }
      ]
    },
    {
      "key": "nvl",
      "symbol": "NVL",
      "name": "Novaland",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Bất động sản",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:NVL",
      "sig": "wait",
      "stance": "LƯỚT — MUA THẤP BÁN CAO",
      "aliases": [
        "novaland"
      ],
      "oneLiner": "Thái Phạm: sóng giảm lãi suất của bất động sản chỉ là \"sự tưởng tượng thôi\" vì bản chất chưa hạ được lãi suất, nhưng vẫn có hồi kỹ thuật. Ai thích lướt thì đợi test lại vùng 12,5–12,8 rồi mua, lên cao thì bán — không mua ngang lưng chừng.",
      "thesis": [],
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "Lướt — mua thấp bán cao",
          "sig": "wait",
          "entry": "Test lại 12,5–12,8",
          "target": "Lên cao thì bán",
          "stop": "Không mua ngang lưng chừng",
          "status": "active",
          "date": "15/08",
          "note": "Từ Tập 45 · Tuần 33 (15/08)."
        }
      ],
      "potential": 2,
      "potentialNote": "Chỉ là biên độ hồi kỹ thuật, không có câu chuyện tăng giá dài hạn.",
      "caution": 4,
      "cautionNote": "Ngành bất động sản chưa có điều kiện thật để hồi phục; dễ kẹt nếu mua giữa biên."
    },
    {
      "key": "vib",
      "symbol": "VIB",
      "name": "Ngân hàng Quốc tế Việt Nam",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Ngân hàng",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:VIB",
      "sig": "up",
      "stance": "ĐỊNH GIÁ HỢP LÝ",
      "aliases": [],
      "oneLiner": "Quang Dũng nêu VIB trong nhóm ngân hàng có mức định giá hợp lý mà vẫn giải được bài toán tốc độ tăng trưởng, cùng với ACB và BVB. Bối cảnh: gần như cả ngành đang rẻ hơn nhiều so với chính nó trong 6 năm qua.",
      "thesis": [],
      "orders": [
        {
          "expertId": "quang-dung",
          "dir": "Định giá hợp lý, giải được bài toán tăng trưởng",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "15/08",
          "note": "Từ Toàn ngành ngân hàng (15/08)."
        }
      ],
      "potential": 3,
      "potentialNote": "Định giá thấp hơn trung bình 6 năm của chính nó.",
      "caution": 3,
      "cautionNote": "Lãi suất huy động cao đang bóp biên lợi nhuận toàn ngành."
    },
    {
      "key": "phr",
      "symbol": "PHR",
      "name": "Cao su Phước Hòa",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Cao su & Khu công nghiệp",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:PHR",
      "sig": "wait",
      "stance": "LỆNH TÍN HIỆU NGẮN — nhưng 5P chọn GVR",
      "oneLiner": "Đồ thị giống MSR — có tín hiệu thì vào, không ham.",
      "aliases": [
        "Phước Hòa",
        "Cao su Phước Hòa"
      ],
      "thesis": [
        {
          "expertId": "ck-5-phut",
          "title": "Tăng nhờ đền bù đất, không phải nhờ ngành",
          "body": "Anh nói rõ cơ chế: \"PHR mà tầm này tăng mà nó không kéo theo con GVR quá mạnh thì khả năng là do mấy cái đền bù đất thôi.\" Đồ thị tương tự MSR, thanh khoản được, đóng cửa hơi cụt đầu nhưng vẫn mua được. Đây là lệnh nhỏ đánh theo tín hiệu — ngành không chạy nên không kỳ vọng sóng lớn."
        }
      ],
      "potential": 3,
      "potentialNote": "Có điểm mua kỹ thuật rõ, nhưng động lực đến từ đền bù đất chứ không phải chu kỳ ngành.",
      "caution": 3,
      "cautionNote": "GVR — mã cùng ngành, cùng câu chuyện — không chạy theo. Một mình một đường thì dễ hụt.",
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "MUA ĐƯỢC",
          "sig": "up",
          "entry": "60,5–61",
          "target": "—",
          "stop": "MA20 (mất ~4%) hoặc 7% nếu hàng chưa về",
          "status": "active",
          "date": "17/08",
          "note": "Từ Livestream · 17/08 (17/08)."
        }
      ]
    },
    {
      "key": "nt2",
      "symbol": "NT2",
      "name": "Nhiệt điện Nhơn Trạch 2",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Điện",
      "basket": "dai-han",
      "tradeMode": "spot",
      "tv": "HOSE:NT2",
      "sig": "up",
      "stance": "TÍCH SẢN — càng giảm càng gom",
      "oneLiner": "Cổ phiếu cổ tức: hết khấu hao, máy Đức đốt khí, EPS phập phù nhưng tiền mặt dày.",
      "aliases": [
        "Nhơn Trạch 2",
        "Nhiệt điện Nhơn Trạch"
      ],
      "thesis": [
        {
          "expertId": "azfin",
          "title": "Bài toán tích sản: giá càng giảm, tỉ suất cổ tức càng cao",
          "body": "AzFin lấy NT2 giá 21.000 làm ví dụ mẫu cho luận điểm \"thị trường giảm là cơ hội tích lũy giá trị\". EPS 2026 khoảng 3.800đ (6 tháng đầu năm đã gần 2.000đ), EPS bình quân dài hạn ước 2.600đ, cổ tức bình quân 2.500đ/cp. Nếu giá về 15.000, lỗ thị giá ~17% nhưng tiền cổ tức tái đầu tư cho tỉ suất 16,5% thay vì 11,5%; về 10.000 thì 25%. Cơ sở cơ bản: tài chính mạnh (tiền dư lớn sau khi trừ nợ), máy Siemens của Đức đốt khí chạy 15 năm hiệu suất vẫn tốt và đã cơ bản hết khấu hao, trong khi nhu cầu điện phục vụ mục tiêu tăng trưởng trên 10% vượt nguồn cung."
        }
      ],
      "potential": 4,
      "potentialNote": "Tỉ suất cổ tức 11,5% ở giá 21.000 đã cao gấp đôi lãi ngân hàng; càng giảm càng tăng.",
      "caution": 3,
      "cautionNote": "Chính AzFin thừa nhận nhóm điện có kết quả kinh doanh \"cực kỳ biến động, phập phù\" — năm bảo trì lớn EPS có thể tụt về nghìn mấy, và khi đó mức cổ tức 2.500đ không còn là mặc định.",
      "orders": [
        {
          "expertId": "azfin",
          "dir": "TÍCH SẢN — càng giảm càng gom",
          "sig": "up",
          "entry": "21.000 (giá tại 14/08)",
          "target": "30.000 nếu thuận lợi — tổng lợi nhuận ~55%",
          "stop": "Không có cắt lỗ: về 15.000 thì tái đầu tư cổ tức ở tỉ suất 16,5%",
          "status": "active",
          "date": "17/08",
          "note": "Từ Lăng kính · 17/08 (17/08)."
        }
      ]
    },
    {
      "key": "sab",
      "symbol": "SAB",
      "name": "Sabeco",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Tiêu dùng & Bia",
      "basket": "tranh",
      "tradeMode": "spot",
      "tv": "HOSE:SAB",
      "sig": "wait",
      "stance": "MUA ĐƯỢC 46,4–46,5 — nhưng 5P không mua",
      "oneLiner": "Được xếp vào nhóm phòng thủ nhưng đồ thị không cho điểm mua.",
      "aliases": [
        "Sabeco",
        "Bia Sài Gòn"
      ],
      "thesis": [
        {
          "expertId": "ck-5-phut",
          "title": "Nằm trong dòng tiền phòng thủ nhưng không có điểm mua",
          "body": "Hai tuần gần đây có luồng tiền rút khỏi nhóm tài chính chuyển sang nhóm doanh thu ổn định, ít vay nợ, ít chịu ảnh hưởng chính sách tiền tệ — VNM, SAB nằm trong nhóm đó. Nhưng anh gạt đi bằng chính lý lẽ của nhóm: \"sữa thì chắc là không cắt giảm được nhưng mà bia thì làm gì mà không cắt giảm được đâu\". Kết luận đồ thị: \"Vinamilk cũng không ăn được mà Sabeco cũng không ăn được.\""
        }
      ],
      "potential": 2,
      "potentialNote": "Câu chuyện phòng thủ đúng với sữa hơn là với bia — nhu cầu bia cắt giảm được.",
      "caution": 4,
      "cautionNote": "Không có điểm mua trên đồ thị. Mua vì \"không biết mua gì\" là lý do tệ nhất.",
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "MUA ĐƯỢC — nhưng cá nhân anh không mua",
          "sig": "wait",
          "entry": "46,4–46,5",
          "target": "Đỉnh cũ, +10–12%",
          "stop": "44",
          "status": "active",
          "date": "20/08",
          "note": "Từ Livestream · 20/08 (20/08)."
        },
        {
          "expertId": "ck-5-phut",
          "dir": "KHÔNG ĂN ĐƯỢC",
          "sig": "avoid",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "17/08",
          "note": "Từ Livestream · 17/08 (17/08)."
        }
      ]
    },
    {
      "key": "msn",
      "symbol": "MSN",
      "name": "Tập đoàn Masan",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Tiêu dùng & Bán lẻ",
      "basket": "dai-han",
      "tradeMode": "spot",
      "tv": "HOSE:MSN",
      "sig": "up",
      "stance": "MUA DƯỚI 70 — 30% lệnh, giữ dài",
      "oneLiner": "Chuỗi WinMart là thứ khó sao chép nhất ở Việt Nam — nhưng ai cũng nhìn thấy điều đó.",
      "aliases": [
        "Masan",
        "Ma San",
        "WinMart",
        "Winmart"
      ],
      "thesis": [
        {
          "expertId": "ck-5-phut",
          "title": "Mua vì thói quen tiêu dùng, không phải vì báo cáo",
          "body": "Anh lập luận từ trải nghiệm chứ không bóc báo cáo: \"cái thói quen tiêu dùng của vợ chồng em bây giờ nó quay sang Masan rồi, đi chợ là phải đi WinMart\". Chuỗi bán lẻ mà mở cửa hàng ra là có lãi ngay thì ở Việt Nam chỉ có Masan và Bách hóa xanh — mà Bách hóa xanh không mua trực tiếp được, phải mua gián tiếp qua MWG. Nhưng chính vì view này quá dễ đoán và quá nhiều người cùng thấy, giá đã đi ngang quanh 70 suốt hai năm kể từ khi phá kênh giảm cuối tháng 2/2024. Vì vậy: chỉ mua một phần (khoảng 30% lệnh), và phải mua dưới 70. Anh thừa nhận đợt trước từng sai lầm mua ở vùng đỉnh."
        }
      ],
      "potential": 4,
      "potentialNote": "Doanh nghiệp còn dư địa chiếm lĩnh thị phần bán lẻ — thứ mà VNM và SAB đều không còn.",
      "caution": 3,
      "cautionNote": "Giá đã đi ngang quanh 70 suốt hai năm sau khi phá kênh giảm. \"Nó sẽ mất nhiều thời gian đấy\" — chính anh không dám hẹn thời điểm.",
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "MUA 30% LỆNH — nắm giữ dài",
          "sig": "up",
          "entry": "Dưới 70",
          "target": "Doanh thu tăng trưởng theo mở rộng WinMart",
          "stop": "—",
          "status": "active",
          "date": "20/08",
          "note": "Từ Livestream · 20/08 (20/08)."
        }
      ]
    },
    {
      "key": "dpr",
      "symbol": "DPR",
      "name": "Cao su Đồng Phú",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Cao su & Khu công nghiệp",
      "basket": "tranh",
      "tradeMode": "spot",
      "tv": "HOSE:DPR",
      "sig": "wait",
      "stance": "KHÔNG CHỌN — chọn GVR thay vì DPR/PHR",
      "oneLiner": "Cùng câu chuyện cao su nhưng không phải con chính.",
      "aliases": [
        "Đồng Phú",
        "Cao su Đồng Phú"
      ],
      "thesis": [
        {
          "expertId": "ck-5-phut",
          "title": "Dòng tiền yếu thì chỉ chọn con chính",
          "body": "Giá cao su đang trong xu hướng tăng ba tháng nhờ cả nhu cầu Trung Quốc, và cả nhóm được hưởng lợi. Nhưng anh chốt: \"Năm nay thì em nghĩ là dòng tiền nó không đủ mạnh nên nếu mà chọn thì chúng ta cũng chọn vào con chính thôi. Nếu mà chọn thì chúng ta đấm thẳng vào con GVR thôi. Còn PHR với cả DPR em thấy là nó hơi bên ngoài, hơi phiền.\" Lưu ý đây là sự tinh chỉnh so với chính anh ngày 17/08 — hôm đó anh đưa điểm mua PHR 60,5–61 như một lệnh nhỏ theo tín hiệu."
        }
      ],
      "potential": 2,
      "potentialNote": "Hưởng lợi thật từ giá cao su, nhưng không phải nơi dòng tiền chọn khi tiền yếu.",
      "caution": 3,
      "cautionNote": "Thanh khoản mỏng hơn GVR nhiều — trong thị trường thanh khoản đáy năm thì đây là rủi ro thật.",
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "KHÔNG CHỌN — \"hơi bên ngoài, hơi phiền\"",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "20/08",
          "note": "Từ Livestream · 20/08 (20/08)."
        }
      ]
    },
    {
      "key": "mrna",
      "symbol": "MRNA",
      "name": "Moderna",
      "group": "Quốc tế",
      "region": "foreign",
      "industry": "Dược phẩm & Vắc xin",
      "basket": "ngan-han",
      "tradeMode": "margin",
      "tv": "NASDAQ:MRNA",
      "sig": "down",
      "stance": "SHORT 150 — kỳ vọng ảo",
      "oneLiner": "Tăng 2,5 lần vì MỘT thử nghiệm thành công, còn tám thử nghiệm nữa.",
      "aliases": [
        "Moderna",
        "Modena"
      ],
      "thesis": [
        {
          "expertId": "thai-pham",
          "title": "Giá tăng như meme coin trên một mảnh bằng chứng",
          "body": "Ông giải thích cơ chế: cổ phiếu tăng gấp 2,5 lần trong một phiên vì công bố thử nghiệm giai đoạn ba thành công cho thuốc chống ung thư. Nhưng để vắc xin được phê duyệt còn rất nhiều công đoạn, và riêng thử nghiệm thì còn tám cái nữa — tổng cộng chín. \"Bây giờ anh mới thử nghiệm thành công có một thử nghiệm thôi. Vậy thì để tiếp tục tăng lên mấy trăm phần trăm như thế thì nó rất là vô lý, nó thuần dựa trên một cái kỳ vọng ảo.\" Ông ví: chạy được 5 km ở tốc độ sub-3 không có nghĩa là giữ được tốc độ đó suốt 42 km."
        }
      ],
      "potential": 2,
      "potentialNote": "Nếu tám thử nghiệm còn lại cùng thành công thì đây là thuốc đổi đời — nhưng xác suất tích lũy rất thấp.",
      "caution": 4,
      "cautionNote": "Giá đã phản ánh kỳ vọng của cả chín thử nghiệm trong khi mới có một. Rủi ro nằm ở chỗ giá không có nền để lùi về.",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "SHORT — kỳ vọng ảo",
          "sig": "down",
          "entry": "150",
          "target": "—",
          "stop": "Còn 8 thử nghiệm nữa mới xong",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        }
      ]
    },
    {
      "key": "vcx",
      "symbol": "VCX",
      "name": "Quỹ Fundrise Innovation Fund",
      "group": "Quốc tế",
      "region": "foreign",
      "industry": "Quỹ đầu tư AI",
      "basket": "dai-han",
      "tradeMode": "spot",
      "tv": "",
      "sig": "up",
      "stance": "MUA VÙNG 40 — cửa gián tiếp vào Anthropic/OpenAI",
      "oneLiner": "Cách duy nhất mua Anthropic và OpenAI khi chưa niêm yết.",
      "aliases": [
        "Fundrise",
        "Fundrise Innovation Fund"
      ],
      "thesis": [
        {
          "expertId": "thai-pham",
          "title": "Mẫu hình hậu IPO giống hệt SpaceX — và đó là lý do mua",
          "body": "Quỹ này nắm khoảng 75% tài sản là cổ phần Anthropic, Claude và OpenAI — Anthropic đang được định giá khoảng 1.900 tỷ đô và OpenAI khoảng 1.200 tỷ. Ông đã hẹn trước mốc mua: \"nếu mà cái con này về lại vùng 40 này thì tôi mua — đúng nó về 40.\" Kỳ vọng 160–200 nếu OpenAI niêm yết ở mức 2.000 tỷ đô. Điểm đáng chú ý về phương pháp: ông chỉ ra mẫu hình của VCX giống hệt SpaceX sau IPO — nằm liệt một thời gian dài — và dùng chính điều đó làm căn cứ mua, ngược với việc ông đang SHORT SpaceX."
        }
      ],
      "potential": 5,
      "potentialNote": "Cửa gián tiếp duy nhất vào hai công ty AI lớn nhất chưa niêm yết. Kỳ vọng 4–5 lần nếu OpenAI lên sàn.",
      "caution": 4,
      "cautionNote": "Định giá tài sản trong quỹ là định giá vòng gọi vốn tư nhân, chưa qua thị trường. Mã và cách giao dịch cần kiểm lại — phụ đề đọc là \"VCX\"/\"VX\", chưa xác minh được ticker chính thức.",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "MUA MẠNH",
          "sig": "up",
          "entry": "Vùng 40",
          "target": "160–200 nếu OpenAI niêm yết 2.000 tỷ đô",
          "stop": "—",
          "status": "active",
          "date": "23/08",
          "note": "Từ Tập 46 (Hội viên) · 23/08 (23/08)."
        }
      ]
    },
    {
      "key": "plx",
      "symbol": "PLX",
      "name": "Petrolimex",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Dầu khí",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:PLX",
      "sig": "wait",
      "stance": "THỦNG MA20 THÌ CẮT ĐIỂM BREAK",
      "oneLiner": "Xử lý thoái vốn dễ hơn GAS, nhưng nền giá xấu hơn.",
      "aliases": [
        "Petrolimex"
      ],
      "thesis": [
        {
          "expertId": "ck-5-phut",
          "title": "Nghị quyết 40 làm PLX dễ xử lý hơn GAS — nhưng đồ thị thì ngược lại",
          "body": "Theo Nghị quyết 40/2026 về cơ cấu vốn nhà nước, PLX thuộc nhóm nhà nước phải giữ 50–65%; hiện đang nắm 75,9% nên chỉ cần bán ra một phần là xử lý xong — đã có kế hoạch bán khoảng 23 triệu cổ phiếu quỹ. Khác với GAS thuộc nhóm phải giữ trên 90% nên chưa xử lý ngay. Nhưng về giá thì ngược: \"nền giá không đẹp bằng con GAS, áp lực bán xuất hiện nhiều hơn. Nếu đánh ngắn hạn thì thủng MA20 là có thể cắt được — thực ra cũng không phải cắt lỗ, là hòa vốn thôi.\" Anh cũng cảnh báo chung cả nhóm: \"mấy nhóm cổ phiếu dầu khí này nắm giữ cũng mệt đấy, nó chịu sự quản lý rất nhiều từ các quy định của nhà nước, và những quy định này có thể thay đổi theo mục tiêu từng giai đoạn.\""
        }
      ],
      "potential": 3,
      "potentialNote": "Câu chuyện thoái vốn có cơ sở pháp lý rõ ràng hơn GAS.",
      "caution": 4,
      "cautionNote": "Chịu ba lớp rủi ro không kiểm soát được: quy định nhà nước, tỷ giá, giá dầu và chuỗi cung ứng. Lịch sử PLX–GAS–OIL là nhóm chạy rất lờ đờ, chỉ mới năng động từ đầu 2026.",
      "orders": [
        {
          "expertId": "ck-5-phut",
          "dir": "THỦNG MA20 THÌ CẮT ĐIỂM BREAK",
          "sig": "wait",
          "entry": "—",
          "target": "—",
          "stop": "MA20",
          "status": "active",
          "date": "27/08",
          "note": "Từ Livestream · 27/08 (27/08)."
        }
      ]
    },
    {
      "key": "szc",
      "symbol": "SZC",
      "name": "Sonadezi Châu Đức",
      "group": "Chứng khoán Việt Nam",
      "region": "vn",
      "industry": "Bất động sản khu công nghiệp",
      "basket": "ngan-han",
      "tradeMode": "spot",
      "tv": "HOSE:SZC",
      "sig": "up",
      "stance": "BỔ SUNG VÀO DANH MỤC LƯỚT",
      "oneLiner": "Mã lướt mới Thái Phạm thêm cùng PC1, không kèm mốc giá.",
      "aliases": [
        "Sonadezi",
        "Sonadezi Châu Đức"
      ],
      "thesis": [
        {
          "expertId": "thai-pham",
          "title": "Thêm vào danh mục lướt, không phải danh mục đầu tư",
          "body": "Tút 28/08: \"Với các mã lướt sóng họ F, họ PNJ thì cứ cầm thôi, có thể bổ sung BĐS khu công nghiệp như SZC vào trong danh mục lướt cùng PC1 nếu mua. Ai đủ hàng rồi mà không muốn lướt thì thôi.\" Ông KHÔNG đưa điểm vào, mục tiêu hay cắt lỗ cho mã này — đây là gợi ý mở rộng danh mục lướt chứ không phải một kèo đầy đủ. Điều kiện đi kèm ông nêu rõ: ai đã đủ hàng thì không cần lướt thêm."
        }
      ],
      "potential": 3,
      "potentialNote": "Bất động sản khu công nghiệp là nhóm hưởng lợi từ dòng vốn FDI, và SZC là một trong các mã thanh khoản khá của nhóm.",
      "caution": 3,
      "cautionNote": "Không có mốc giá nào đi kèm nên không quản trị được bằng con số. Đây là mã LƯỚT theo lời ông, không phải hàng nắm giữ.",
      "orders": [
        {
          "expertId": "thai-pham",
          "dir": "BỔ SUNG VÀO DANH MỤC LƯỚT",
          "sig": "up",
          "entry": "—",
          "target": "—",
          "stop": "—",
          "status": "active",
          "date": "28/08",
          "note": "Từ Tút hội viên · 28/08 (28/08)."
        }
      ]
    }
  ],
  "briefing": {
    "updated": "28/08/2026",
    "expertId": "thai-pham",
    "episode": "Tập 46 · Tuần 34",
    "dateLabel": "23/08/2026",
    "kicker": " ",
    "title": "27",
    "subtitle": "Số mã Việt Nam lọt rổ nâng hạng FTSE — và phần lớn trùng đúng danh mục nhóm đang cầm",
    "lead": "Tập 46 là tập đầu tiên Thái Phạm ăn mừng. Ba tuần liên tiếp ông chỉ lặp một câu \"không bán gì hết\" trong lúc thị trường chán nản và thanh khoản chạm đáy năm; đến thứ Sáu 21/08 FTSE công bố rổ nâng hạng với 27 mã Việt Nam, và như ông nói, \"thực tế ra thì nó toàn là những hàng của hội viên chúng ta chọn đấy\". Nhưng ăn mừng không có nghĩa là mua thêm — ông đã full hàng từ trước, nên hành động tuần này vẫn là không làm gì, trừ đúng hai việc: chốt lời một nửa Vinamilk và mở thêm một dòng \"hàng lướt sóng\" cho PNJ và FPT. Mảng quốc tế thì đi ngược hoàn toàn: nợ công Mỹ vừa vượt 40.000 tỷ đô, lợi suất trái phiếu dài hạn vượt cả đỉnh trước khủng hoảng 2007, và ông giữ nguyên toàn bộ vị thế short với một câu gọn lỏn — \"chứng Mỹ thì sẽ sập thôi, nước Mỹ nói chung hết bài rồi\".",
    "gauge": {
      "title": "VN-Index đang ở đâu",
      "note": "Thêm 62 điểm trong tuần sau tin FTSE. Nhưng khối lượng giảm dần khi giá tăng: 669 → 643 → 587 → 484 triệu cổ phiếu.",
      "lo": 1651,
      "loLabel": "đáy 28/07",
      "mid": 1820,
      "midLabel": "vùng 182x",
      "now": 1830,
      "nowLabel": "đóng 28/08",
      "hi": 1933,
      "hiLabel": "đỉnh 90 phiên"
    },
    "timeline": [
      {
        "phase": "Đã qua",
        "label": "FTSE đưa 27 mã Việt vào rổ",
        "note": "1,3 tỷ đô giải ngân từ tháng 9/2026 tới tháng 9/2027. Phần lớn trùng danh mục nhóm đang cầm.",
        "state": "past",
        "sig": "up"
      },
      {
        "phase": "Đã qua",
        "label": "Vàng đạt 4.700 đúng kế hoạch từ 4.080",
        "note": "Ông không bán mà hedge lại — mở short bằng đúng lượng đang giữ, rồi thả ra hai ngày sau khi giá đã lùi.",
        "state": "past",
        "sig": "up"
      },
      {
        "phase": "Hôm nay",
        "label": "VN-Index 1.830, độ rộng cải thiện tuần thứ ba",
        "note": "Downtrend từ 60,7% xuống 50,0%. Nhưng khối lượng giảm dần khi giá tăng — cờ đỏ đáng theo dõi.",
        "state": "now",
        "sig": "up"
      },
      {
        "phase": "Sắp tới",
        "label": "Kevin Warsh phát biểu đêm 29/08",
        "note": "Ông khóa hedge Bitcoin để phòng cú kéo giết short quanh tin này.",
        "state": "next",
        "sig": "warn"
      },
      {
        "phase": "Sắp tới",
        "label": "Tập 47 — 6h sáng Chủ nhật 30/08",
        "note": "Bản tin sẽ được dựng lại toàn bộ khi tập mới ra.",
        "state": "next",
        "sig": "wait"
      },
      {
        "phase": "Xa hơn",
        "label": "Anthropic niêm yết tháng 10 · bầu cử tháng 11",
        "note": "Hai mốc bản lề trong kịch bản chứng khoán Mỹ và giá dầu.",
        "state": "later",
        "sig": "warn"
      }
    ],
    "squeezes": [
      {
        "name": "Nợ công Mỹ",
        "status": "VƯỢT MỐC",
        "headline": "40.000 tỷ đô",
        "headlineNote": "Riêng hai nhiệm kỳ Trump đóng góp 30% tổng nợ công lịch sử — chỉ trong 6 năm",
        "body": "Năm 2026 là năm đáo hạn trái phiếu chính phủ Mỹ kỳ hạn 30 năm rất lớn, khoảng 5.500 tỷ đô; năm 2027 thêm hơn 4.000 tỷ. Vấn đề không nằm ở con số mà ở chỗ không còn ai mua: Nhật, Hàn, Trung Quốc, Châu Âu và Anh đều đang bán ra vì lỗ giá trái phiếu. Riêng Nhật, Anh và Trung Quốc đã xả 140 tỷ đô trong bốn tháng.",
        "stats": [
          {
            "v": "5.500 tỷ",
            "k": "đáo hạn 30 năm trong 2026"
          },
          {
            "v": "140 tỷ",
            "k": "Nhật–Anh–Trung xả trong 4 tháng"
          },
          {
            "v": "6,72%",
            "k": "lãi vay mua nhà 30 năm ở Mỹ"
          }
        ],
        "outcome": "Lợi suất 10 năm và 30 năm đã vượt đỉnh tháng 7/2007 — mốc ngay trước khủng hoảng tài chính toàn cầu. Ông kết luận: muốn cứu được thị trường trái phiếu thì Mỹ phải để kinh tế nát một lần nữa, để trái phiếu trở lại làm nơi trú ẩn.",
        "sig": "down"
      },
      {
        "name": "Eo biển Hormuz",
        "status": "KHÔNG LỐI THOÁT",
        "headline": "Thấp nhất 50 năm",
        "headlineNote": "Dự trữ dầu chiến lược của Mỹ đang cạn với tốc độ kỷ lục",
        "body": "Theo dữ liệu radar vệ tinh mà ông dẫn, gần như không có tàu nào qua được lãnh hải Iran — trái ngược với tuyên bố của chính quyền Mỹ rằng eo biển mở cửa bình thường. Mỹ đang bán ra lượng dầu nhiều hơn lượng sản xuất được, hưởng lợi cùng Ả Rập Saudi và Nga, nhưng đổi lại là cạn kho dự trữ.",
        "stats": [
          {
            "v": "4,4 $",
            "k": "giá xăng regular mỗi galon ở Mỹ"
          },
          {
            "v": "80%",
            "k": "dầu Iran do Trung Quốc mua"
          },
          {
            "v": "80 ngày",
            "k": "tới bầu cử giữa nhiệm kỳ"
          }
        ],
        "outcome": "Nếu tiếp tục bán với tốc độ này mà không có thỏa thuận giải phóng 20% lượng dầu ở Hormuz, ông cảnh báo nguy cơ một cú sốc dầu lửa tương tự giai đoạn 1983–1987.",
        "sig": "warn"
      },
      {
        "name": "Uy tín phát ngôn",
        "status": "ĐẶC SẢN THỜI KỲ NÀY",
        "headline": "Gần như bằng 0",
        "headlineNote": "Hai ca cụ thể trong đúng một tuần",
        "body": "Trump nói eo biển Hormuz mở cửa bình thường — dữ liệu radar nói ngược lại. Bộ trưởng Tài chính Scott Bessent nói thỏa thuận với Iran sẽ ký \"hôm nay hoặc ngày mai\", thổi chứng khoán lên ba ngày liên tiếp — rồi không có thỏa thuận nào.",
        "stats": [
          {
            "v": "3 ngày",
            "k": "chứng khoán tăng nhờ tin không thành"
          },
          {
            "v": "1,5%",
            "k": "GDP Mỹ quý 1 — thấp nhất 5 năm"
          }
        ],
        "outcome": "Hệ quả về phương pháp, và đây là phần đáng học nhất của tập: \"Thành thử ra là gì? Chúng ta phải đọc bằng các nguồn thông tin khác và phải có những suy luận cụ thể dựa trên số liệu cụ thể và chính xác, dựa trên data.\"",
        "sig": "warn"
      }
    ],
    "stats": [
      {
        "value": "27",
        "label": "mã Việt vào rổ FTSE",
        "delta": "1,3 tỷ đô giải ngân",
        "sig": "up"
      },
      {
        "value": "100%",
        "label": "tỷ trọng cổ phiếu của nhóm",
        "delta": "giữ nguyên 3 tuần liền",
        "sig": "up"
      },
      {
        "value": "1 tr",
        "label": "chênh vàng trong nước mỗi lượng",
        "delta": "từ 20 triệu hồi đầu năm",
        "sig": "up"
      },
      {
        "value": "2/3",
        "label": "vị thế short BTC đã vào",
        "delta": "đang lỗ ~2.000/coin",
        "sig": "down"
      }
    ],
    "quote": {
      "text": "Ba tuần nay thông điệp của tôi rất rõ ràng, chẳng có bán gì hết đúng không ạ? Mà tình hình thế giới anh chị bảo Hàn nó thế, Nhật nó thế.",
      "source": "Thái Phạm · Tập 46, 23/08/2026"
    },
    "todo": [
      {
        "act": "GIỮ NGUYÊN",
        "what": "100% cổ phiếu — không đổi gì tuần thứ tư",
        "why": "Phần lớn 27 mã trong rổ FTSE trùng đúng danh mục đang cầm.",
        "sig": "up"
      },
      {
        "act": "ĐÃ CHỐT",
        "what": "Một nửa Vinamilk, lãi khoảng 13%",
        "why": "VNM không nằm trong rổ FTSE; ông mua từ cây thứ hai chứ không phải đáy.",
        "sig": "down"
      },
      {
        "act": "LƯỚT SÓNG",
        "what": "PNJ và FPT — dòng hàng mới thêm",
        "why": "PNJ đã được một cây trần từ vùng 35–36, kỳ vọng hồi lên 50. FPT mua thêm 69–70 vẫn bình thường.",
        "sig": "up"
      },
      {
        "act": "CƠ CẤU",
        "what": "Bớt EIB · VBB sang HDB, VCB, BID, CTG",
        "why": "HDB tích nền phẳng đủ lâu, ông đánh giá cao hơn cả Techcombank — có thể vượt đỉnh 30 lên 36.",
        "sig": "up"
      },
      {
        "act": "MUA",
        "what": "Vàng vật chất — chênh chỉ còn 1 triệu/lượng",
        "why": "\"Lúc mà chênh đến 20 triệu một lượng quý vị còn vẫn còn hỏi mua được không. Thì 1 triệu là quá hời.\"",
        "sig": "up"
      },
      {
        "act": "TRÁNH",
        "what": "VIC · VHM · HPG · HCM — dù ba mã đầu nằm trong rổ FTSE",
        "why": "Nằm trong rổ không có nghĩa là đáng mua ở vùng giá này. HPG còn thêm rủi ro Vingroup làm thép cuối 2026.",
        "sig": "avoid"
      },
      {
        "act": "GIỮ SHORT",
        "what": "US500 · US30 và nhóm bán dẫn, cyber",
        "why": "Chốt lời US500 ở 7.500, xa hơn 7.000; US30 ở 28.000. Cầm cự tới Anthropic niêm yết tháng 10.",
        "sig": "down"
      }
    ],
    "stockView": {
      "title": "Ba kênh nhìn phiên bùng nổ FTSE thế nào",
      "dateRange": "Tuần 34 · 21–24/08/2026",
      "verdict": "Cùng thấy tích cực, nhưng khác nhau ở chỗ NÊN LÀM GÌ VỚI SỰ TÍCH CỰC ĐÓ",
      "experts": [
        {
          "expertId": "thai-pham",
          "stanceLabel": "ĂN MỪNG — nhưng không mua thêm",
          "sig": "up",
          "allocation": "100% cổ phiếu",
          "view": "Rổ FTSE trùng đúng danh mục nhóm đang cầm. Không đổi gì, chỉ chốt 1/2 VNM và thêm dòng lướt sóng.",
          "buy": "HDB, SSI, VCI, phân bón, PNJ, FPT",
          "avoid": "VIC, VHM, HPG, HCM",
          "quote": "Nhìn vào tuần này tôi thấy chẳng có lý do gì phải thay đổi danh mục cả."
        },
        {
          "expertId": "ck-5-phut",
          "stanceLabel": "TÍCH CỰC — NHƯNG ĐỪNG VỘI",
          "sig": "wait",
          "allocation": "Không bao giờ full tiền hay full hàng",
          "view": "Tín hiệu và điểm mua đang mở rộng thật, nhưng thanh khoản không cải thiện được ngay. Cảnh báo tuần sau 70–80% người trong ngành sẽ hô mua tất tay.",
          "buy": "SSI (đã xác nhận đỉnh sau cao hơn), MSN, DPM, DCM",
          "avoid": "Mua theo danh mục FTSE",
          "quote": "Không cần gì phải thử độ sâu nước bằng cả hai chân."
        },
        {
          "expertId": "quang-dung",
          "stanceLabel": "CHƯA ĐỦ ĐỂ GỌI LÀ CHU KỲ MỚI",
          "sig": "wait",
          "allocation": "Không nêu",
          "view": "Ba điều kiện của một chu kỳ: định giá rẻ, doanh nghiệp tăng trưởng, tiền thực sự vào. Hai cái đầu đã có; cái thứ ba mới là chỗ quyết định và vẫn chưa rõ.",
          "buy": "Nhóm tài chính — 15/28 mã trong rổ là ngân hàng và chứng khoán",
          "avoid": "Kết luận sớm từ một tuần thanh khoản hồi",
          "quote": "Tất cả các chu kỳ đi lên đều xảy ra sau một quá trình đổ vỡ."
        }
      ],
      "agree": [
        "Nhóm tài chính là nhóm dẫn dắt: Thái Phạm cầm chặt SSI, VCI, TCX; Quang Dũng chỉ ra 15/28 mã trong rổ là ngân hàng và chứng khoán; CK 5 phút xác nhận SSI là mã khởi nguồn phiên tím 21/08.",
        "Phân bón được cả Thái Phạm lẫn CK 5 phút gọi mua, dù hai người dùng lý do khác nhau — ông nhìn nền giá phẳng và tiền bắt đầu vào, anh nhìn giá URE về vùng đáy chu kỳ 400 đô.",
        "Không ai coi việc nằm trong rổ FTSE là lý do đủ để mua: Thái Phạm loại VIC, VHM, HPG, HCM; CK 5 phút nói mua theo danh mục \"dễ ngọng lắm\"."
      ],
      "differ": [
        "Mức độ hành động: Thái Phạm đã full hàng từ ba tuần trước nên phiên bùng nổ là phần thưởng; CK 5 phút thì cảnh báo đừng để phiên đẹp kéo mình vào trạng thái tất tay.",
        "Bản chất của nhịp này: Quang Dũng đặt câu hỏi liệu đã đủ ba điều kiện để gọi là chu kỳ mới chưa và tự trả lời là chưa, vì tiền vào chưa được xác nhận. Thái Phạm không đặt câu hỏi đó — với ông, dòng 1,3 tỷ đô của FTSE chính là câu trả lời.",
        "PNJ: Thái Phạm lướt sóng và đã được một cây trần, kỳ vọng lên 50. CK 5 phút tuần trước gọi PNJ là \"hàng linh tinh, bỏ đi\" vì doanh nghiệp đang có vấn đề hoạt động."
      ]
    },
    "community": {
      "title": "Ba tút hội viên trong tuần — và một kỹ thuật mới",
      "source": "Ba bài đăng hội viên ngày 26, 27 và 28/08, đọc qua trang /posts bằng cookie hội viên. Khác với các tuần trước, tuần này nội dung tút quan trọng hơn phần bình luận: ông hướng dẫn một kỹ thuật chưa từng nêu công khai.",
      "disclaimer": "Đây là nội dung Thái Phạm TỰ VIẾT, không phải bình luận của người xem — nên được đưa vào sổ lệnh như nhận định chuyên gia. Kỹ thuật hedge đòi hỏi tài khoản cho phép giao dịch hai chiều; không áp dụng được với vàng vật chất hay cổ phiếu Việt Nam.",
      "items": [
        {
          "q": "Vàng đã đạt 4.700 như kế hoạch — giờ làm gì?",
          "who": "Tút 26/08",
          "likes": 0,
          "status": "answered",
          "statusLabel": "Phương án thứ ba: hedge",
          "a": "\"Anh chị em nào cầm dài từ đáy thì Hedged lại (mua short bằng đúng lượng đã mua ở đáy). Ai đánh ngắn thì chốt lời. Ai mua vàng vật chất hoặc lỡ nhịp vừa rồi thì đợi đúng 4.488–4.500 mua lại.\" Kèm dự liệu: tích lũy 2–3 tuần ở vùng 4.500–4.700.",
          "aSrc": "Tút hội viên 26/08"
        },
        {
          "q": "Hedge có ăn không?",
          "who": "Tút 27/08",
          "likes": 0,
          "status": "answered",
          "statusLabel": "Xác nhận trong hai ngày",
          "a": "\"Bịp ok. Vàng hedged thành công. Chứng Mỹ ngọt.\" Vàng lùi từ vùng 4,7 về 4,63 đúng như dự liệu — phần short trong lệnh hedge đã bù lại phần lùi của vị thế mua.",
          "aSrc": "Tút hội viên 27/08"
        },
        {
          "q": "Còn Bitcoin thì sao khi Warsh sắp phát biểu?",
          "who": "Tút 28/08",
          "likes": 0,
          "status": "answered",
          "statusLabel": "Cùng công cụ, ngược chiều",
          "a": "\"Đề phòng cú kéo giết short lợi dụng Kevin Warsh vào đêm nay phát biểu, thì ta đang có vị thế Short hãy Buy 1 lượng lot tương ứng để Hedged lại vị thế. Khóa lại, khi nào Warsh phát biểu xong, giá phản ánh tin thì ta thả ra.\" Cùng tút đó ông THẢ hedge vàng — một công tắc dùng hai chiều cho hai tài sản.",
          "aSrc": "Tút hội viên 28/08"
        },
        {
          "q": "Danh mục Việt Nam có đổi gì không?",
          "who": "Tút 28/08",
          "likes": 0,
          "status": "answered",
          "statusLabel": "Không đổi, thêm hai mã lướt",
          "a": "\"Nắm chặt bank, chứng, và các mã sản xuất, phân bón (trừ VNM đã chốt 1/2). Với các mã lướt sóng họ F, họ PNJ thì cứ cầm thôi, có thể bổ sung BĐS khu công nghiệp như SZC vào trong danh mục lướt cùng PC1 nếu mua. Ai đủ hàng rồi mà không muốn lướt thì thôi.\" Và: \"Điểm số vẫn do VIC/VHM chi phối là chủ đạo nên xấu tốt gì do 2 mã đó.\"",
          "aSrc": "Tút hội viên 28/08"
        }
      ]
    }
  },
  "binance": {
    "updated": "17/08/2026",
    "totalSpot": 14,
    "totalFut": 26,
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
          "CLUSDT",
          "BZUSDT"
        ],
        "kind": "exact",
        "note": "CLUSDT = WTI (khớp mã này) · BZUSDT = Brent"
      },
      "btc": {
        "spot": [
          "BTCUSDT"
        ],
        "fut": [
          "BTCUSDT"
        ],
        "kind": "exact",
        "note": "Hợp đồng vĩnh cửu gốc của Binance"
      },
      "sndk": {
        "spot": [
          "SNDKBUSDT"
        ],
        "fut": [
          "SNDKUSDT"
        ],
        "kind": "exact",
        "note": "Binance là nơi DUY NHẤT xem được chart SanDisk trong sổ này"
      },
      "amzn": {
        "spot": [
          "AMZNBUSDT"
        ],
        "fut": [
          "AMZNUSDT"
        ],
        "kind": "exact"
      },
      "tsla": {
        "spot": [
          "TSLABUSDT"
        ],
        "fut": [
          "TSLAUSDT"
        ],
        "kind": "exact"
      },
      "ko": {
        "spot": [],
        "fut": [
          "KOUSDT"
        ],
        "kind": "exact"
      },
      "wmt": {
        "spot": [],
        "fut": [
          "WMTUSDT"
        ],
        "kind": "exact"
      },
      "cost": {
        "spot": [],
        "fut": [
          "COSTUSDT"
        ],
        "kind": "exact"
      }
    }
  },
  "context": {
    "updated": "28/08/2026",
    "note": "Bối cảnh được rút từ chính transcript của các chuyên gia đang theo dõi. Đây là NỀN để đọc nhận định, không phải bản tin thời sự — mục nào chưa có chuyên gia nào bàn tới thì để trống thay vì lấp bằng nguồn ngoài.",
    "topics": [
      {
        "key": "the-gioi",
        "label": "Chính trị thế giới",
        "flag": "🌐",
        "headline": "Cơ chế Mỹ xuất khẩu lạm phát đang có vết nứt đầu tiên",
        "sub": "Khối ngoại giảm nắm giữ trái phiếu Mỹ từ đỉnh 9.490 tỷ đô xuống 9.300 tỷ. Ba nước bán mạnh nhất: Nhật Bản, Trung Quốc và Anh.",
        "sig": "warn",
        "stats": [
          {
            "v": "40.000 tỷ $",
            "k": "nợ công Mỹ",
            "sub": "Trump đóng góp 30% chỉ trong 6 năm",
            "sig": "down"
          },
          {
            "v": "40%",
            "k": "lạm phát Mỹ cộng dồn một thập kỷ",
            "sub": "của nền kinh tế lớn nhất thế giới",
            "sig": "down"
          },
          {
            "v": "65 tháng",
            "k": "PCE lõi liên tiếp trên mục tiêu 2%",
            "sub": "gần hơn 5 năm",
            "sig": "down"
          },
          {
            "v": "9.300 tỷ $",
            "k": "khối ngoại nắm trái phiếu Mỹ",
            "sub": "từ đỉnh 9.490 tỷ tháng 5/2026",
            "sig": "down"
          },
          {
            "v": "1.800 tỷ $",
            "k": "thâm hụt ngân sách hàng năm",
            "sub": "dự báo trên 2.000–2.500 tỷ trong 5 năm",
            "sig": "down"
          },
          {
            "v": "4,4 $",
            "k": "giá xăng regular mỗi galon ở Mỹ",
            "sub": "áp lực lên bầu cử tháng 11",
            "sig": "warn"
          }
        ],
        "items": [
          {
            "title": "Cơ chế xuất khẩu lạm phát — và mắt xích đang lỏng",
            "expertId": "thai-pham",
            "date": "28/08",
            "sig": "warn",
            "tag": "Petrodollar",
            "body": "Chuỗi ông dựng: Mỹ phát hành nợ qua trái phiếu → dùng tiền đó thanh toán nhập khẩu → các nước xuất khẩu nhận đô dư → quay lại mua chính trái phiếu Mỹ. Mắt xích khóa chặt vòng này là dầu — muốn mua dầu phải có đô, theo thỏa thuận Mỹ–Ả Rập Saudi từ giữa những năm 1970. Kết quả là \"một nhu cầu nhân tạo cho nợ công Mỹ\": Mỹ được vay rẻ hơn mức đáng ra phải trả, vì cả thế giới buộc phải mua nợ của họ để vận hành thương mại. Giới kinh tế gọi đây là \"đặc quyền phi thường\" — cụm từ do cựu Bộ trưởng Tài chính Pháp đặt ra từ những năm 1960.",
            "extra": "Nghịch lý Triffin (1960) ông dẫn thêm: để cung đủ đô cho thế giới dự trữ, Mỹ buộc phải thâm hụt thương mại liên tục. Từ đó ông đặt câu hỏi về chính sách thuế hiện tại: \"quốc gia khác càng bán được nhiều hàng vào Mỹ, Mỹ càng thâm hụt thì họ càng in được nhiều đô la. Nhưng ông Trump lên thì lại mong muốn đánh thuế để giảm thâm hụt. Mỹ bây giờ đang bẻ ngang cái hệ thống này.\""
          },
          {
            "title": "Số liệu TIC: ai đang bán trái phiếu Mỹ và vì sao",
            "expertId": "thai-pham",
            "date": "28/08",
            "sig": "down",
            "tag": "Dòng vốn",
            "body": "Theo dữ liệu TIC của Bộ Tài chính Mỹ, tổng lượng trái phiếu Mỹ do khối ngoại nắm giữ đạt đỉnh kỷ lục khoảng 9.490 tỷ đô vào tháng 5/2026, rồi giảm liên tục 3–4 tháng sau khi chiến tranh Iran nổ ra, nay còn khoảng 9.300 tỷ. Ba nước bán mạnh nhất, mỗi nước một lý do khác nhau: Nhật Bản bán để lấy đô can thiệp bảo vệ đồng yên khi thâm hụt vãng lai tăng vì lạm phát; Trung Quốc giảm trái phiếu để mua vàng, vì thấy Mỹ có thể trừng phạt thương mại và đóng băng tài sản như đã làm với Nga; Anh Quốc cũng giảm lượng nắm giữ.",
            "extra": "Ông tự nêu phần phản biện chính mình: đô vẫn chưa mất ngôi vì không có lựa chọn đủ tốt để thay thế — euro yếu về kỷ luật tài khóa và chính trị, nhân dân tệ chưa cho tự do chuyển đổi. \"Cho nên hiện nay Mỹ vẫn có thể in tiền, có thể thâm hụt, thế giới vẫn phải ôm trái phiếu Mỹ. Nhưng liệu điều này có bền nữa hay không trong 10–25 năm tới?\""
          },
          {
            "title": "Nợ công Mỹ vượt 40.000 tỷ — và không còn ai mua trái phiếu",
            "expertId": "thai-pham",
            "date": "23/08",
            "sig": "down",
            "tag": "Nợ công Mỹ",
            "body": "Riêng hai nhiệm kỳ của ông Trump đóng góp 30% tổng nợ công lịch sử nước Mỹ, chỉ trong 6 năm. Năm 2026 là năm đáo hạn trái phiếu 30 năm rất lớn — khoảng 5.500 tỷ đô; 2027 thêm hơn 4.000 tỷ. Vấn đề là người mua truyền thống đều đang bán ra vì lỗ giá: Nhật, Anh và Trung Quốc đã xả 140 tỷ đô trong bốn tháng. Lợi suất 10 năm và 30 năm nay vượt cả đỉnh tháng 7/2007 — mốc ngay trước khủng hoảng tài chính toàn cầu.",
            "extra": "Kết luận của ông về đường thoát: \"Nếu Mỹ muốn cứu được vụ trái phiếu này thì Mỹ phải giật sập thị trường và kinh tế phải nát một lần nữa, để trái phiếu lại tiếp tục là nơi trú ẩn.\" Lãi vay mua nhà 30 năm ở Mỹ đã lên 6,72%."
          },
          {
            "title": "Clarity Act: đọc ngược lại tin được cho là tốt cho crypto",
            "expertId": "thai-pham",
            "date": "20/08",
            "sig": "warn",
            "tag": "Chính sách Mỹ",
            "body": "Thị trường coi đạo luật Clarity Act là bước hợp thức hóa crypto. Thái Phạm đọc ngược: \"Bản chất đạo luật Clarity Act mà Trump vại họp là để 'giết chết' Bitcoin hoặc đồng hóa nó trở thành một mã chứng khoán ở Mỹ chứ chẳng có lợi lộc gì mà chờ đợi BTC hóa rồng hóa hổ.\" Ông cho rằng luật khó thông qua trong 2026, mà nếu thông qua thì cũng là \"nút thòng lọng thắt vào cổ của Cryptoers\", đặc biệt với trader nước ngoài vì giao dịch P2P sẽ cực kỳ khó khăn.",
            "extra": "Lập luận dòng tiền đi kèm: BTC muốn lên cao cần nguồn FOMO từ châu Á — Hàn, Nhật, Trung Quốc, Việt Nam, Thái Lan, Indonesia. Riêng Trung Quốc thì \"biết rõ game của Mỹ nên không chơi với BTC, ETH, họ chỉ quan tâm tới công nghệ Blockchain và có đồng stablecoin của riêng họ\". Khi các chính phủ chặn P2P và xác minh nguồn tiền, nguồn FOMO cạn."
          },
          {
            "title": "Vết nứt đầu tiên trong chuỗi vốn AI",
            "expertId": "thai-pham",
            "date": "15/08",
            "sig": "warn",
            "tag": "AI Capex",
            "body": "Nvidia đã thu hẹp quy mô cam kết tài trợ trung tâm dữ liệu cho OpenAI tại Ohio — ban đầu định đầu tư 250 tỷ đô, nay chỉ còn khoảng hơn 100 tỷ. Thái Phạm gọi đây là \"tín hiệu sớm về sự cẩn trọng về vốn của Nvidia\". Bối cảnh: Capex AI giai đoạn 2026–2027 được Goldman Sachs và JP Morgan dự báo khoảng 1.000–1.200 tỷ đô, và chính dòng vốn này là động cơ dẫn dắt thị trường Mỹ. Ông cũng nêu chuyện IPO của OpenAI và Anthropic: thị trường đồn thổi tháng 10 với định giá quanh 1.000 tỷ đô và hút khoảng 100 tỷ khỏi thị trường, nhưng đến giữa tháng 8 vẫn chưa thấy động thái quyết liệt nào.",
            "extra": "Theo Citadel, nhu cầu quyền chọn mua S&P 500 đã sát mức đỉnh năm 2016 — dấu hiệu FOMO rất mạnh ngay tại vùng đỉnh lịch sử 7.816 điểm."
          },
          {
            "title": "Lợi nhuận S&P 500 đẹp nhờ hai khoản lãi trên giấy",
            "expertId": "thai-pham",
            "date": "08/08",
            "sig": "down",
            "tag": "CK Mỹ",
            "body": "Bức tranh lợi nhuận quý của S&P 500 vượt mức bình quân, nhưng Thái Phạm bóc ra rằng phần vượt trội đến từ hai công ty. Alphabet đạt EPS 9,11 đô so với dự báo 2,88 — chủ yếu nhờ hạch toán lãi đầu tư vào SpaceX. Amazon đạt EPS 5,75 so với dự báo 1,82 — chủ yếu nhờ hạch toán lãi từ khoản đầu tư Anthropic mà chưa hề bán. \"Đấy là lãi trên giấy tờ thôi.\" Nếu loại hai công ty này, mức tăng lợi nhuận của thị trường Mỹ chỉ còn 10,9%.",
            "extra": "Ông cũng chỉ ra tháng 7 vừa rồi lượng nhập khẩu dầu thô của Mỹ từ Ả Rập Saudi về con số 0 — lần đầu trong suốt 50 năm. Mỹ nhập trực tiếp từ Venezuela giá khoảng 20 đô/thùng rồi bán ra thị trường thế giới 82 đô."
          },
          {
            "title": "Petrodollar đang bị bào mòn — nhưng chậm, không sụp",
            "expertId": "thai-pham",
            "date": "06/08",
            "sig": "warn",
            "tag": "Petrodollar",
            "body": "Cơ chế dầu định giá bằng đô la có từ 1974 giữa Mỹ và Ả Rập Saudi. Năm 2026 xuất hiện dấu mốc: giao dịch dầu Ả Rập Saudi – Trung Quốc thanh toán bằng nhân dân tệ lần đầu vượt đô la trong quan hệ song phương; Ấn Độ chuyển lượng lớn dầu Nga sang nhân dân tệ và dirham UAE. Khoảng 20% giao dịch dầu toàn cầu đã sang tiền phi đô la, dù đô la vẫn chiếm khoảng 80%. Gốc rễ từ 2022 khi Mỹ đóng băng khoảng 300 tỷ đô dự trữ của ngân hàng trung ương Nga — tín hiệu rằng tài sản dự trữ có thể bị đóng băng bất cứ lúc nào. Trung Quốc xây hạ tầng thay thế: CIPS, mBridge, hợp đồng tương lai dầu Thượng Hải.",
            "extra": "Chính ông nêu phản biện: nhiều chuyên gia cho rằng petrodollar mới mất vị thế độc quyền chứ chưa sụp, và đồng euro gần như không dịch chuyển thêm. Ông kết luận đây là chuyển đổi chậm rãi có tính cấu trúc — và chính vì chậm nên đáng tin cho luận điểm dài hạn hơn là một cú sốc."
          },
          {
            "title": "Tín hiệu Mỹ – Iran và cú rớt 5% của giá dầu",
            "expertId": "thai-pham",
            "date": "05/08",
            "sig": "warn",
            "tag": "Iran",
            "body": "Bộ trưởng Tài chính Mỹ Scott Bessent phát biểu đang đàm phán với Iran và có thể có thỏa thuận trong hôm nay hoặc ngày mai. Người phát ngôn Bộ Ngoại giao Qatar nói xung đột đang ở giai đoạn rất tiến triển, còn phía Iran vẫn coi đây là thỏa thuận giữa họ và Oman — Thái Phạm đoán Mỹ giải quyết vấn đề Iran thông qua proxy là Oman. Câu trả lời này khiến giá dầu rớt khoảng 5% trong một phiên. Đây là mắt xích đầu tiên trong chuỗi lập luận dẫn tới việc ông đảo chiều toàn bộ chiến thuật.",
            "extra": "Ông vẫn dè dặt về mức độ tin cậy: Trump nói về thỏa thuận hòa bình nhiều quá nên \"người ta không tin\", lần này mới phải để cấp dưới phát biểu."
          },
          {
            "title": "Mỹ kéo lên nhưng không có khối lượng",
            "expertId": "thai-pham",
            "date": "04/08",
            "sig": "down",
            "tag": "CK Mỹ",
            "body": "Thái Phạm mô tả nhịp tăng của chứng khoán Mỹ là upthrust phân phối chuẩn Wyckoff — \"lên kiểu VooDoo không vol, tăng điểm mà chẳng có khối lượng giao dịch, chủ yếu kill short thôi\", và chỉ số lên xuống theo tút của Trump. Ông hành động theo đúng cách đọc đó: mua lại 1/2 vị thế short đã chốt lời trước đây và gồng tiếp. Mốc cắt lỗ US30 ông đưa cho hội viên là 54.005 (một chỗ khác trong cùng bài ghi 54.055).",
            "extra": "Riêng Apple thì ông vẫn đứng ngoài: đã chốt 1/2 và chưa mua lại phần short."
          },
          {
            "title": "Chỉ số Mỹ đã hóa thành một cú đặt cược vào AI",
            "expertId": "lcg-huy",
            "date": "02/08",
            "sig": "warn",
            "tag": "S&P 500",
            "body": "Mười công ty chiếm 40% chỉ số S&P 500 và tám trong số đó đang đặt cược rất lớn vào AI — nên mua chỉ số không còn nghĩa là trải rủi ro. Nghiên cứu LCG Huy dẫn: nhóm top đầu cần tạo ra khoảng 2.000 tỷ đô doanh thu mới xứng với định giá hiện tại. Anh cũng nhắc lịch sử đổi ngôi giữa các cường quốc — Anh chiếm 24% giá trị thị trường toàn cầu năm 1900, Nhật thập niên 80–90, nay là Mỹ và Trung Quốc đang lên — nên phụ thuộc hoàn toàn vào 500 công ty Mỹ là một rủi ro riêng."
          },
          {
            "title": "Kịch bản Mỹ tấn công Iran",
            "expertId": "thai-pham",
            "date": "01–02/08",
            "sig": "down",
            "tag": "Trung Đông",
            "body": "Theo Wall Street Journal và CNN, Trump có thể ra lệnh cho CENTCOM tấn công hạ tầng quân sự và điện của Iran vào chủ nhật hoặc rạng sáng thứ hai để buộc Tehran đầu hàng. Đại sứ quán Mỹ đã khuyến cáo công dân rời Trung Đông. Iran thề tiếp tục tấn công các căn cứ Mỹ tại vùng Vịnh; ngày 01/08 đã tấn công hai tàu được Mỹ hộ tống. Israel tuyên bố có nhiều kế hoạch nhưng Mỹ chưa duyệt vì sợ khủng hoảng giá dầu. Thái Phạm lưu ý thói quen \"taco\" của Trump — nói mạnh rồi rút lui."
          },
          {
            "title": "Ai được lợi, ai thiệt hại",
            "expertId": "thai-pham",
            "date": "01/08",
            "sig": "warn",
            "tag": "Petrodollar",
            "body": "Ông gọi đây là \"cuộc chiến Ngô–Thục–Ngụy 4.0\". Hưởng lợi lớn nhất là UAE (4,1 triệu thùng/ngày, vượt đỉnh 2020) và Ả Rập Xê Út (8 triệu thùng/ngày qua tuyến ống Đông–Tây, bán giá cao). Thiệt hại nặng nhất là Iran và Iraq — Iraq nằm sâu trong vịnh nên phụ thuộc hoàn toàn vào Hormuz. Ông cho rằng khoản 2,5 tỷ đô các quốc gia vùng Vịnh rót vào công ty crypto của gia đình Trump là \"một hình thức hối lộ rất kín đáo\" để đổi lấy hậu thuẫn tấn công Iran."
          }
        ]
      },
      {
        "key": "vi-mo",
        "label": "Kinh tế vĩ mô",
        "flag": "📉",
        "headline": "Lợi suất Mỹ 30 năm 5,267% — cao nhất kể từ trước khủng hoảng 2008",
        "sub": "Thị trường không tin Fed. Đây là con số Thái Phạm coi là trục của cả tuần 31, và là thứ kéo theo mọi lớp tài sản khác.",
        "sig": "down",
        "stats": [
          {
            "v": "5,267%",
            "k": "lợi suất Mỹ 30 năm",
            "sub": "kỷ lục · vượt cả tháng 10/2023",
            "sig": "down"
          },
          {
            "v": "4,718%",
            "k": "lợi suất Mỹ 10 năm",
            "sub": "ngang T11/2023 và T5/2007",
            "sig": "down"
          },
          {
            "v": "39.200 tỷ $",
            "k": "nợ chính phủ Mỹ",
            "sub": "tiền lãi = 2/3 thu thuế cả năm",
            "sig": "down"
          },
          {
            "v": "1%",
            "k": "xác suất Fed hạ lãi suất 2026",
            "sub": "thị trường định giá TĂNG 1–2 lần",
            "sig": "down"
          },
          {
            "v": "4,7%",
            "k": "lạm phát Việt Nam",
            "sub": "từ đỉnh 5,6% · mục tiêu 4,5%",
            "sig": "up"
          },
          {
            "v": "1952",
            "k": "niềm tin tiêu dùng Mỹ thấp nhất từ năm",
            "sub": "—",
            "sig": "down"
          }
        ],
        "items": [
          {
            "title": "Lãi suất Việt Nam: không được tăng, mà giảm cũng khó",
            "expertId": "ck-5-phut",
            "date": "17/08",
            "sig": "wait",
            "tag": "Lãi suất",
            "body": "Về cuộc họp Fed tháng 9, anh tách hai chuyện. Một, kể cả Fed tăng thì \"nó cũng chỉ có đúng một lần để nó tăng thôi — trong năm nay liệu mà sử dụng, nếu mà tăng luôn thì cuối năm nó cũng chả tăng nữa\". Hai, dù Fed làm gì thì Việt Nam cũng không phản ứng: \"chắc chắn là mức lãi suất của chúng ta ở thời điểm hiện tại không được phép tăng nữa. Còn có giảm được hay không thì còn tùy thuộc nhưng mà em nghĩ khả năng cũng khó.\" Đây là lý do anh xếp lãi suất vào nhóm yếu tố không đổi trong ngắn hạn — và vì thế thanh khoản cũng không đổi."
          },
          {
            "title": "Lệnh hạ lãi suất và phản ứng thật của ngân hàng",
            "expertId": "thai-pham",
            "date": "15/08",
            "sig": "warn",
            "tag": "Lãi suất",
            "body": "Thủ tướng yêu cầu họp ngày 13/8 về giảm lãi suất để hỗ trợ doanh nghiệp, nhưng theo Thái Phạm chỉ có VietinBank và Nam Á Bank hưởng ứng, còn đa phần ngân hàng không phản ứng nhiều. VietinBank ra gói với lãi suất vay giảm tối thiểu 1% — ông đánh giá quy mô như \"muối bỏ bể\" so với tổng quy mô của ngân hàng, và đặt câu hỏi điều kiện để được hưởng mức giảm đó là gì. Lý do cấu trúc khiến chưa thể hạ: lãi suất huy động phải giữ cao để bảo vệ tỷ giá khi Mỹ chưa giảm lãi, và để đồng tiền thực dương thì người dân mới nắm tiền Việt thay vì đầu cơ vàng hay đô.",
            "extra": "Quang Dũng cùng tuần nêu đúng hệ quả của việc này ở tầng doanh nghiệp: lãi suất huy động đầu vào cao đang bóp biên lợi nhuận của toàn ngành ngân hàng so với quá khứ."
          },
          {
            "title": "Việc làm Mỹ âm 23.000 — và hai tháng trước bị sửa giảm hơn 100.000",
            "expertId": "thai-pham",
            "date": "08/08",
            "sig": "warn",
            "tag": "Việc làm Mỹ",
            "body": "Nonfarm payrolls tháng 7 âm 23.000 việc làm trong khi giới kinh tế dự báo nền kinh tế tạo ra 80–83.000. Tỷ lệ thất nghiệp vẫn giảm còn 4,1% từ 4,2%, nhưng Thái Phạm chỉ ra mẫu số đã nhỏ đi vì thế hệ baby boomers bắt đầu nghỉ hưu — thất nghiệp giảm không có nghĩa nền kinh tế tạo thêm việc làm. Nặng hơn là phần điều chỉnh lùi: tháng 5 từ 129.000 xuống 63.000, tháng 6 từ 57.000 xuống 20.000, tổng cộng mất hơn 100.000 việc làm so với con số từng công bố. Ông gọi thẳng đây là cách công bố dữ liệu có mẹo — số cao trước để thổi giá, rồi điều chỉnh xuống rất thấp sau.",
            "extra": "Hệ quả ông rút ra: việc làm yếu thì Fed không có lý do tăng lãi, còn lạm phát cao thì hạ cũng không được — tăng cũng không được, hạ cũng không xong."
          },
          {
            "title": "Nợ công Mỹ 39.500 tỷ đô — trả lãi đã bằng 1/5 thu thuế",
            "expertId": "thai-pham",
            "date": "06/08",
            "sig": "warn",
            "tag": "Nợ công Mỹ",
            "body": "Tính đến tháng 6/2026, nợ công Mỹ khoảng 39.500 tỷ đô và sẽ chạm 40.000 tỷ cuối năm — tăng từ 34.500 tỷ hồi tháng 5/2024, tức thêm hơn 5.000 tỷ trong hai năm mà không hề có suy thoái. Thâm hụt ngân sách liên bang dự kiến 1.900–2.000 tỷ, tương đương 5,8% GDP so với mức trung bình 3,8% suốt 50 năm. Nặng nhất là chi phí trả lãi năm tài khóa 2026: 1.000 tỷ đô, bằng 1/5 tổng thu thuế khoảng 5.000 tỷ, vượt cả chi tiêu quốc phòng 970 tỷ và vượt Medicare, chỉ đứng sau an sinh xã hội. Thái Phạm dùng đây làm lý do cấu trúc giải thích vì sao Fed không thể tăng lãi suất: tăng nữa thì tiền lãi chiếm tới 1/4 thu thuế.",
            "extra": "Ông so sánh cho dễ hình dung: như một gia đình kiếm 500 triệu một năm mà 100 triệu chỉ để trả lãi."
          },
          {
            "title": "Vì sao \"Fed không tăng lãi\" là bản lề của mọi thứ",
            "expertId": "thai-pham",
            "date": "05/08",
            "sig": "up",
            "tag": "Fed",
            "body": "Lập luận của Thái Phạm: Trump đánh giá dầu xuống để đẩy chỉ số chứng khoán Mỹ lên, nhằm giữ thượng viện ở bầu cử giữa nhiệm kỳ tháng 11. Dầu xuống thì Fed không có lý do tăng lãi suất. Thị trường nay không còn kỳ vọng tăng cũng không kỳ vọng giảm — lãi suất vay mua nhà 30 năm ở Mỹ vẫn 6,5–6,6%/năm. Hệ quả cho Việt Nam: từ giờ đến tháng 11 không có cơn gió ngược nào về lãi suất và tỷ giá, và đó là lý do trực tiếp khiến ông bỏ toàn bộ kịch bản phòng thủ.",
            "extra": "Ông lưu ý lợi suất trái phiếu chính phủ Mỹ đã vượt đỉnh và đang tiệm cận mức của tháng 4/2007 — thời điểm trước khủng hoảng."
          },
          {
            "title": "Vàng lên hạng tier 1 theo Basel 3",
            "expertId": "lcg-huy",
            "date": "02/08",
            "sig": "up",
            "tag": "Vàng",
            "body": "Bộ tiêu chuẩn quốc tế về quản lý rủi ro Basel 3 xếp vàng vào tài sản tier 1 — hạng cao nhất, ngang tiền mặt và trái phiếu chính phủ Mỹ. Các ngân hàng trung ương đang mua vào rất nhiều; Trung Quốc lập \"hành lang vàng\" với nhóm BRICS để có dự trữ an toàn. LCG Huy vẫn nói thẳng là không thích vàng vật chất vì \"nó không tạo ra được dòng tiền\", và chọn cách tiếp cận gián tiếp: mua ETF công ty khai khoáng vàng với tỷ trọng 5%."
          },
          {
            "title": "Fed rạn nứt nội bộ chưa từng thấy",
            "expertId": "thai-pham",
            "date": "01/08",
            "sig": "down",
            "tag": "Fed",
            "body": "Ba thành viên FOMC công khai chống đối quyết định giữ nguyên lãi suất và đòi tăng ngay trong tháng 7. Chủ tịch Kevin Warsh — người được Trump bổ nhiệm để cắt lãi suất — bỏ luôn forward guidance, chỉ tuyên bố giữ mục tiêu lạm phát 2% mà không kèm hành động. Nhận xét của Thái Phạm: \"you talk the talk nhưng you don't walk the talk\" — và thị trường phản ứng bằng cách đẩy lợi suất lên. Tám tháng trước thị trường còn kỳ vọng Fed cắt ba lần trong 2026."
          },
          {
            "title": "Phản biện đáng lưu từ người xem",
            "expertId": "thai-pham",
            "date": "02/08",
            "sig": "warn",
            "tag": "Góc nhìn khác",
            "body": "Hai bình luận dưới video đưa cách đọc ngược. Thứ nhất (5 like): \"không nghịch lý đâu — chính phủ Mỹ phải vay 2.000 tỷ đô mỗi năm, phải trả lãi cao thì mới có người cho vay đủ\" — tức đơn thuần cung cầu. Thứ hai: \"bond yield tăng mạnh càng thúc giục Fed phải HẠ lãi suất nhanh để bảo vệ túi tiền chính phủ\" — đảo ngược hẳn mũi tên nhân quả của Thái Phạm. Cả hai đều chưa được trả lời."
          },
          {
            "title": "Carry trade Nhật: mắt xích dễ đứt nhất",
            "expertId": "thai-pham",
            "date": "02/08",
            "sig": "warn",
            "tag": "Nhật Bản",
            "body": "Lãi suất Nhật 1%, lãi suất Mỹ 3,75–4% và sắp cao hơn. Vay yên rồi đổi sang đô đem gửi hoặc mua trái phiếu Mỹ đã ăn chênh 3%; làm nhà cái cho vay margin trên thị trường chứng khoán Mỹ được ~6%; cho vay bất động sản 30 năm 6,66%/năm. Nếu Nhật buộc phải tăng lãi suất đột ngột để cứu đồng yên, dòng vốn này đảo chiều và gây sập chứng khoán Mỹ — nên Mỹ phải giúp Nhật hạ nhiệt từ từ."
          },
          {
            "title": "Việt Nam: nửa đầu kiểm soát, nửa cuối nới lỏng",
            "expertId": "quang-dung",
            "date": "04/07",
            "sig": "up",
            "tag": "Chính sách VN",
            "body": "Khung phân tích trung tâm của Quang Dũng: chính phủ phải chọn giữa tăng trưởng và ổn định vĩ mô, không thể có cả hai cùng lúc. Nửa đầu 2026 ưu tiên KIỂM SOÁT vì môi trường bất ổn; nửa cuối buộc chuyển sang NỚI LỎNG để đạt mục tiêu tăng trưởng. Bằng chứng: tháng 6/2026 là tháng có nhiều thông tư, văn bản, nghị định nhất nửa đầu năm — mục đích để thực thi ngay từ ngày đầu quý 3."
          },
          {
            "title": "Bài toán GDP 11,9% nửa cuối năm",
            "expertId": "quang-dung",
            "date": "30/06",
            "sig": "warn",
            "tag": "Tăng trưởng VN",
            "body": "GDP 6 tháng đầu năm chỉ đạt hơn 8,7%, nên để cả năm chạm 10% thì nửa cuối phải tăng 11,9% — ông gọi thẳng là \"bài toán quá khó\". Ba nút thắt: giải ngân đầu tư công 5 tháng mới đạt 21,6% trên kế hoạch 50%; tăng trưởng tín dụng tháng 4–5 chỉ khoảng 4,1%; mặt bằng lãi suất tăng và phần lớn ngân hàng đã chạm trần tỉ lệ an toàn."
          },
          {
            "title": "Lạm phát Việt Nam: bóc rổ thay vì nhìn số tổng",
            "expertId": "quang-dung",
            "date": "06/06",
            "sig": "up",
            "tag": "Lạm phát",
            "body": "Khi CPI vọt lên 5,6% từ mức 2–3% nửa năm trước, ông phản biện nỗi sợ chung: năm nhóm chiếm hơn 70% rổ tính CPI, và cú nhảy chủ yếu do giá năng lượng đảo chiều — đầu 2026 nhóm này còn -3,19% trước khi chiến tranh Mỹ–Iran đẩy ngược lên. Giá nguyên liệu ngược lại đang giảm từ 6% xuống 4%. Ông cũng chỉ ra lạm phát Việt Nam trễ Mỹ 3–6, thậm chí 9 tháng. Thực tế sau đó: lạm phát đã hạ về 4,7%, tiệm cận mục tiêu 4,5%."
          }
        ]
      },
      {
        "key": "viet-nam",
        "label": "Chính sách & tin Việt Nam",
        "flag": "🇻🇳",
        "headline": "Chỉ số chạy tiếp, nhưng khối lượng đang rút lui",
        "sub": "VN-Index thêm 62 điểm lên 1.830 và độ rộng cải thiện tuần thứ ba. Cờ đỏ ít ai nói: khối lượng giảm dần từ 669 xuống 484 triệu cổ phiếu.",
        "sig": "up",
        "stats": [
          {
            "v": "1.830",
            "k": "VN-Index đóng 28/08",
            "sub": "+62 điểm trong tuần",
            "sig": "up"
          },
          {
            "v": "50,0%",
            "k": "cổ phiếu còn downtrend",
            "sub": "từ 60,7% cách đây ba tuần",
            "sig": "up"
          },
          {
            "v": "42,9%",
            "k": "cổ phiếu trên MA50",
            "sub": "từ 28,8% ngày 20/08",
            "sig": "up"
          },
          {
            "v": "484tr",
            "k": "khối lượng phiên gần nhất",
            "sub": "giảm dần từ 669tr — cờ đỏ",
            "sig": "warn"
          },
          {
            "v": "+52%",
            "k": "LNST ngành chứng khoán quý 2",
            "sub": "dù thanh khoản chỉ 21.000 tỷ/phiên",
            "sig": "up"
          },
          {
            "v": "3/5",
            "k": "phiên khối ngoại mua ròng tuần này",
            "sub": "lũy kế 20 phiên vẫn âm 2.078 tỷ",
            "sig": "up"
          }
        ],
        "items": [
          {
            "title": "Nghị quyết 40 và câu chuyện thoái vốn của nhóm dầu khí nhà nước",
            "expertId": "ck-5-phut",
            "date": "27/08",
            "sig": "wait",
            "tag": "Chính sách",
            "body": "Nghị quyết 40/2026 của Quốc hội phân loại doanh nghiệp để cơ cấu vốn nhà nước, chia ba nhóm: giữ 100% vốn điều lệ, giữ từ 65% trở lên, và giữ 50–65%. GAS nằm ở nhóm nhà nước sở hữu trên 90% — hiện đang 95,8%, tức có dư địa bán ra vài phần trăm nhưng vẫn phải trên 90%. PLX thuộc nhóm 50–65%, hiện nắm 75,9%, nên chỉ cần bán một phần là xử lý xong — đã có kế hoạch bán khoảng 23 triệu cổ phiếu quỹ. Anh cho rằng nghị quyết này mở ra một trường hợp đặc biệt cho GAS, BSR, BCM để không vi phạm quy định về công ty đại chúng.",
            "extra": "Nhưng kết luận đầu tư của anh đi ngược kỳ vọng chung: \"mấy nhóm cổ phiếu dầu khí này nắm giữ cũng mệt đấy. Nó chịu sự quản lý rất nhiều từ các quy định của nhà nước, và những quy định này có thể thay đổi dựa theo mục tiêu của nhà nước trong từng giai đoạn.\" Cộng thêm tỷ giá, giá dầu và chuỗi cung ứng — ba thứ không kiểm soát được."
          },
          {
            "title": "Nghịch lý ngành chứng khoán quý 2: thanh khoản đáy 5 năm mà lợi nhuận +52%",
            "expertId": "quang-dung",
            "date": "26/08",
            "sig": "up",
            "tag": "Ngành",
            "body": "Quý 2/2026 thanh khoản trung bình chỉ 21.000 tỷ đồng mỗi phiên — một trong những quý ảm đạm nhất năm năm. Nhưng doanh thu toàn ngành chứng khoán đạt 35.274 tỷ, tăng 36%, và lợi nhuận sau thuế 12.349 tỷ, tăng 52% so cùng kỳ. Quang Dũng bóc mâu thuẫn bằng cách chia ngành làm hai mô hình: nhóm dựa vào cho vay margin và nhóm dựa vào tự doanh. Kết quả: nhóm margin tăng trưởng cao và đồng đều; nhóm tự doanh lác đác — VND +10%, chứng khoán IP −31,7%, SHS −35,1%, chỉ ORS và VDS tăng cao mà đó lại là các mô hình có nền kinh doanh thấp.",
            "extra": "Hệ quả về cách chọn cổ phiếu: \"Ngày xưa đến giờ chúng ta hay phân tích doanh nghiệp nào có thị phần cao, doanh nghiệp có thị phần cao thì tiềm năng. Nhưng trên thực tế mảng lợi nhuận từ mảng môi giới nó lại cho thấy điều khác.\" Nguyên nhân sâu xa là hai chiến lược khác nhau: công ty có ngân hàng đứng sau thì tăng quy mô vốn nhanh rồi tăng cung vốn; công ty không có lợi thế đó buộc phải chuyển sang tự doanh và bảo lãnh phát hành."
          },
          {
            "title": "TCB tăng trần theo tin đồn — hai kênh phản ứng ngược nhau",
            "expertId": "ck-5-phut",
            "date": "26/08",
            "sig": "warn",
            "tag": "Tin đồn",
            "body": "Ngày 26/08 TCB tăng trần theo một tin đồn hợp tác với tổ chức nước ngoài, lan trên Zalo. Chứng khoán 5 phút — người đang CẦM TCB dài hạn — dành cả ngày để can người xem mua thêm, và chụp lại ảnh tin nhắn tư vấn lúc 13:45 làm bằng chứng thời điểm. Lập luận: \"Chúng ta không mua trung dài hạn theo tin tức. Tin tức là cái rất dễ làm giả và chúng ta cũng chẳng có gì khẳng định cả. Bây giờ có một cái tin đăng bâng quơ như vậy trên Zalo nhưng chưa có bên liên quan nào ra bài chính thức.\" Cùng ngày Thái Phạm viết trong tút hội viên: \"Nay tôi cũng có một cổ tím TCB vui quá.\"",
            "extra": "Điểm cần đọc kỹ: hai người không bất đồng về doanh nghiệp. Cả hai đều coi TCB là cổ phiếu cơ bản tốt ở vùng giá hấp dẫn. Bất đồng nằm ở chỗ hôm nay có phải điểm vào hay không — và anh chỉ ra điểm mua thật đã qua là cây ngày 10/08 khi giá vượt lại MA20, hoặc mặc cả quanh 30–31."
          },
          {
            "title": "FTSE đưa 27 mã vào rổ — 1,3 tỷ đô giải ngân tới T9/2027",
            "expertId": "thai-pham",
            "date": "23/08",
            "sig": "up",
            "tag": "Nâng hạng",
            "body": "Hiệu lực từ tháng 9/2026 tới tháng 9/2027. Thái Phạm: \"Thực tế ra thì nó toàn là những hàng của hội viên chúng ta chọn đấy. Lần đầu tiên tôi thấy rằng là màu bảng điện nó đẹp thế này.\" Trong rổ có VCB, BID, VPB, VIC, VHM cùng nhóm chứng khoán SSI, VCI, HCM, TCX, VND. Ông cho rằng tiền sẽ dồn vào đúng những mã nhóm đang cầm, và đó là lý do ba tuần qua ông kiên quyết không bán gì.",
            "extra": "Chứng khoán 5 phút hạ nhiệt bằng phép quy đổi: dự phóng dòng vốn nâng lên gần 80.000 tỷ đồng, nhưng \"80.000 tỷ đồng là được bao nhiêu phiên? Bây giờ thanh khoản của chúng ta được khoảng 15 đến 18.000 tỷ, làm thua gì.\""
          },
          {
            "title": "Ba điều kiện của một chu kỳ — và điều kiện thứ ba vẫn thiếu",
            "expertId": "quang-dung",
            "date": "24/08",
            "sig": "wait",
            "tag": "Chu kỳ",
            "body": "Quang Dũng dựng lại ba chu kỳ 2020, 2023, 2025 và rút ra ba điều kiện bắt buộc: định giá đủ rẻ, doanh nghiệp tăng trưởng, và tiền thực sự vào. Hai cái đầu hiện đã có. Cái thứ ba thì chưa: \"Nếu chúng ta chọn một doanh nghiệp định giá đủ rẻ, chọn một doanh nghiệp có hoạt động kinh doanh đủ tốt, nhưng tiền không vào thị trường chứng khoán thì hiệu suất đầu tư nó cũng không có.\" Bằng chứng anh đưa là nghịch lý quý 2/2026 — nhiều doanh nghiệp tăng trưởng rất tốt mà giá cổ phiếu vẫn tệ.",
            "extra": "Quy luật anh nhấn mạnh: mọi chu kỳ đi lên đều xuất phát SAU một quá trình đổ vỡ, vì đổ vỡ mới ép định giá xuống đủ thấp. Thước đo anh dùng là số năm hoàn vốn theo dòng tiền hoạt động kinh doanh — đáy các chu kỳ trước lần lượt khoảng 10 năm (2020), 9,8 năm (2022), 10,3 năm (2025)."
          },
          {
            "title": "Cảnh báo ngược dòng: tuần tới 70–80% người trong ngành sẽ hô mua tất tay",
            "expertId": "ck-5-phut",
            "date": "23/08",
            "sig": "warn",
            "tag": "Tâm lý đám đông",
            "body": "\"Nếu mọi người mà hô hào chén ngay lập tức, em biết kiểu gì tuần sau 70–80% đồng nghiệp của em sẽ bắt đầu hô anh chị mua tất tay, mua theo kiểu như là đã vào uptrend rồi. Vậy thì mọi người không nên. Chúng ta là nhà đầu tư nhỏ lẻ, chúng ta phải biết quý trọng đồng vốn của mình. Giàu chậm chậm đấy mọi người ạ, giàu nhanh quá không quen đâu.\" Đây là call về hành vi chứ không phải về giá, và có thể kiểm chứng bằng cách quan sát chính các kênh khác trong tuần.",
            "extra": "Nguyên tắc gia tăng ông kèm theo: \"nếu gia tăng xong mà nó không đi theo hiệu quả mong muốn thì hạ cái chỗ gia tăng đi, giữ cái hàng cũ.\""
          },
          {
            "title": "Phiên 21/08 bật 34 điểm — và một dự phóng sai được ghi lại",
            "expertId": "ck-5-phut",
            "date": "20/08",
            "sig": "warn",
            "tag": "Dự phóng",
            "body": "Tối 20/08 anh đưa kịch bản cho phiên cuối tuần: \"Mình nghĩ khả năng cao tuần này sẽ đóng cửa pin 3 thôi. Chúng ta có bốn cái pin 3 rồi thêm một cái cây nữa ngày mai.\" Thực tế VN-Index đóng cửa 1.768,12, tăng 33,88 điểm tương đương +1,95% so với 1.734,24 — hoàn toàn không phải một cây pin 3. Bảng điểm chuyên gia đã ghi đây là một call SAI.",
            "extra": "Phần còn lại của nhận định thì đúng hướng: anh khuyên việc tốt nhất trong phiên đó là ngồi xem và đánh giá cơ hội cho tuần sau, chứ không phải mua đuổi theo danh mục FTSE vừa công bố."
          },
          {
            "title": "Vì sao không nên mua theo rổ FTSE vừa công bố",
            "expertId": "ck-5-phut",
            "date": "20/08",
            "sig": "wait",
            "tag": "Nâng hạng",
            "body": "FTSE Russell công bố rổ chỉ số cho cổ phiếu Việt Nam, dự đoán khoảng 27 mã được vào. Anh tách bạch: việc công bố đúng tiến độ mới là tin tích cực, còn nội dung rổ thì không dùng để mua theo. Lý do là cơ chế: rổ đã chốt từ lâu, và nếu quỹ giải ngân theo bốn đợt thì cũng mua qua đơn vị tạo lập thị trường Việt Nam — mà những đơn vị đó đã gom hàng từ trước với giá vốn tốt nhất có thể. \"Chúng ta mua theo thì không khác gì là trẻ con chạy sau xe tăng để nhặt vỏ đạn cả. Nó nguy hiểm lắm.\"",
            "extra": "Cách dùng đúng, theo anh: quan sát để biết tổ chức đang thấy tiềm năng ở nhóm ngành nào và đang nhìn thị trường tích cực hay tiêu cực — chứ không sao chép danh mục. Anh gọi lỗi này là \"lẫn lộn cái vị thế của mình\": nhà đầu tư nhỏ lẻ có lợi thế là không bị ép giải ngân, còn quỹ lớn thì phải mua rải rác nhiều tuần nên không quan tâm đáy."
          },
          {
            "title": "Giá URE về 400 đô — chu kỳ phân bón chạm đáy",
            "expertId": "ck-5-phut",
            "date": "20/08",
            "sig": "up",
            "tag": "Chu kỳ hàng hóa",
            "body": "Giá URE thế giới đã giảm gần một nửa từ vùng 800–900 đô hồi tháng 3–4 xuống còn khoảng 400 đô, tức về đúng vùng của tháng 12/2025 khi DPM và DCM tích lũy. Anh chỉ ra cổ phiếu hàng sản xuất đồng pha với giá thành phẩm — thép Hòa Phát với giá HRC, phân bón với giá URE — nên mua ở chu kỳ thấp và chờ chu kỳ cao. \"Chỉ nhìn mỗi cái đồ thị giá URE này thôi là đã thấy mua xứng đáng rồi.\" Anh đã vào 30% lệnh DPM, lệnh mua thứ hai trong năm.",
            "extra": "Yếu tố ông không dám dự báo: khi nào chu kỳ quay lại. Nó phụ thuộc Trung Quốc có mở rộng nguồn cung không, Ấn Độ và các nước có cấm vận xuất nhập khẩu không, và diễn biến giá dầu. \"Những cái đấy làm sao mà chúng ta đánh giá được. Thôi chúng ta cứ bám một cái biểu đồ thôi.\""
          },
          {
            "title": "Ba nguồn hút tiền khỏi thị trường — đều là chính sách",
            "expertId": "ck-5-phut",
            "date": "17/08",
            "sig": "warn",
            "tag": "Thanh khoản",
            "body": "Thứ nhất, quy định thuế và hóa đơn được thực thi triệt để hơn buộc hộ kinh doanh và cửa hàng giữ tiền mặt để hợp thức hóa dòng tiền xuất nhập hàng — \"chỉ càng ngày càng siết chặt hơn thôi\". Thứ hai, siết tín dụng: khoản vay cũ đáo hạn không tái vay lại được, và anh đánh giá đây là nguồn rút ra khỏi thị trường nhiều nhất. Thứ ba, loạt đại dự án hạ tầng khởi công cùng lúc — riêng năm dự án Metro — khiến ngân hàng điều tiết vốn ra khỏi thị trường tài chính để phục vụ thi công đúng tiến độ. Anh gọi tổng thể là \"xì hơi chứ không vỡ… xì từ từ theo đúng sự cho phép của các cơ quan quản lý, và xì từ từ thì tốt hơn đã vỡ rồi\".",
            "extra": "Anh nói thẳng rằng đây là chỗ ông đổi quan điểm: \"Nếu mà cách đây vài tháng thì có thể là mình sẽ còn khuyến nghị mọi người là thôi cứ cố gắng để đợi thanh khoản nó tăng trở lại. Nhưng cho đến thời điểm hiện tại thì có vẻ là tất cả chúng ta đều đồng thuận là thanh khoản nó sẽ không thể nào tăng trở lại trong ngắn hạn được.\""
          },
          {
            "title": "Cách đọc ngược: không có người bán, chứ không phải hết người mua",
            "expertId": "ck-5-phut",
            "date": "17/08",
            "sig": "up",
            "tag": "Cách đọc",
            "body": "Đây là điểm tách hẳn khỏi cách hiểu phổ biến. \"Sẽ có nhiều người bảo là thanh khoản này là yếu lắm, sắp sập đến nơi rồi thì có thể anh em nhìn theo hướng là không có người mua, nhưng mà em thì lại nhìn thanh khoản này theo hướng là không có người bán. Ở thời điểm hiện tại giảm thế chứ giảm nữa cũng chả có ai bán.\" Bằng chứng anh dựa vào là chính cộng đồng của mình — \"thị trường như thế nào thì cộng đồng của em như vậy\" — và phiên 17/08 gần như không ai hỏi mã nào, kể cả những mã trước đó ngày nào cũng có người hỏi."
          },
          {
            "title": "Nâng hạng tháng 9: vì sao chưa phải chất xúc tác",
            "expertId": "ck-5-phut",
            "date": "17/08",
            "sig": "wait",
            "tag": "Nâng hạng",
            "body": "Tiền ngoại vào có thể 1–5 tỷ đô nhưng \"thời điểm hiện tại nó chỉ dừng lại ở cái mức kỳ vọng thôi\". Lý do sâu hơn không nằm ở chất lượng doanh nghiệp mà ở cơ cấu thị trường: Việt Nam thiếu sản phẩm, và khối ngoại không sang một nền kinh tế bị xếp là chưa phát triển chỉ để mua cổ phiếu tài chính — \"nó đầu tư vào nước nó còn hơn\". Kỳ vọng thật của anh đặt vào chỗ khác: sửa đổi luật chứng khoán."
          },
          {
            "title": "Tỉ giá hạ nhiệt — điểm cộng vĩ mô rõ nhất lúc này",
            "expertId": "thai-pham",
            "date": "18/08",
            "sig": "up",
            "tag": "Tỉ giá",
            "body": "\"Tỉ giá đang ổn trở lại. Có lẽ do chính sách 1/9 của Crypto. Tỉ giá ổn, mọi thứ hi vọng tốt hơn.\" Đây là lần thứ ba liên tiếp ông nêu tỉ giá hạ nhiệt như một điểm cộng (tút 11/08, 13/08, 18/08), và lần này ông gắn nó với mốc khung pháp lý crypto có hiệu lực. Lập luận đã nêu ở tút 11/08: dòng đô chảy ra ngoài qua sàn ngoại sẽ bị chặn lại, sau 1/9 sẽ có sàn Việt được cấp phép cùng 6 tháng chuyển đổi và \"chính sách hút khách về để mang đô cho nước nhà\".",
            "extra": "Ông viết \"có lẽ do\" — đây là suy đoán của ông, không phải số liệu. Hội viên dưới tút hỏi thẳng sàn ngoại (MEXC) sau 1/9 ra sao; tới lúc chốt bản tin ông chưa trả lời."
          },
          {
            "title": "VN-Index đã tách khỏi cổ phiếu",
            "expertId": "thai-pham",
            "date": "15/08",
            "sig": "warn",
            "tag": "VN-Index",
            "body": "Thái Phạm chồng đồ thị VN-Index lên VHM và thấy chúng gần như trùng khớp — ông gọi VHM là \"hàn thử biểu kinh tế Việt Nam\": khi nào Vinhomes ngừng chỉnh thì index ngừng chỉnh, hôm nào Vinhomes tăng thì index tăng. Phiên giảm 36,55 điểm thì riêng VIC đóng góp 12,4 điểm và VHM 3,17 điểm — khoảng một nửa. Bỏ hai mã ra, P/E thị trường ở biên dưới 11,86 so với ngưỡng 11,68 theo hai độ lệch chuẩn, P/B cũng ở biên dưới, tức định giá rất thấp. Nhưng 73% mã vẫn downtrend. Kết luận của ông: \"nhìn điểm số thì là up-trend nhưng mà cổ phiếu thì down-trend\".",
            "extra": "Chứng khoán 5 phút tới cùng kết luận từ hướng khác: phiên 14/08 có lúc giảm 50 điểm đúng lúc nhóm Vin suýt sàn, còn phần còn lại của thị trường thanh khoản quá thấp để ảnh hưởng tới điểm số."
          }
        ]
      },
      {
        "key": "bat-dong-san",
        "label": "Bất động sản VN",
        "flag": "🏙",
        "headline": "Định giá đã về mức 2024 — nhưng thanh khoản thì \"chết hẳn\"",
        "sub": "Hai chuyên gia nhìn cùng một ngành và ra hai kết luận ngược nhau: Quang Dũng thấy bảng cân đối khỏe lên thật, Thái Phạm thấy rủi ro call margin của doanh chủ.",
        "sig": "warn",
        "stats": [
          {
            "v": "30–50%",
            "k": "mức giảm cổ phiếu BĐS sau 8 tháng",
            "sub": "trung bình 40%",
            "sig": "down"
          },
          {
            "v": "1,7 lần",
            "k": "định giá trung bình 5 năm của ngành",
            "sub": "hiện đã về gần mức 2024",
            "sig": "up"
          },
          {
            "v": ">500.000 tỷ",
            "k": "tổng dư nợ bất động sản",
            "sub": "riêng ngành chiếm 37% năm 2025",
            "sig": "down"
          },
          {
            "v": "39%",
            "k": "nợ vay ròng / cấu trúc vốn nhóm",
            "sub": "tại cuối 2025",
            "sig": "warn"
          },
          {
            "v": "250% → 150%",
            "k": "trọng số rủi ro BĐS",
            "sub": "biện pháp bơm tiền trực tiếp",
            "sig": "up"
          }
        ],
        "items": [
          {
            "title": "Thời điểm mua đẹp nhất: cuối năm nay và tháng 3/2027",
            "expertId": "thai-pham",
            "date": "19/08",
            "sig": "wait",
            "tag": "Thời điểm mua",
            "body": "Trả lời câu hỏi hội viên về thời điểm mua bất động sản đẹp nhất: đợi cuối năm 2026 và đặc biệt tháng 3/2027 — thời điểm nhiều khoản vay mua nhà hết ân hạn lãi suất 2 năm, chuyển sang lãi suất thả nổi 14-16%. Áp lực trả nợ tăng mạnh dự kiến buộc một bộ phận người vay phải bán, tạo cơ hội mua với chiết khấu tốt hơn hiện tại."
          },
          {
            "title": "Vì sao định giá rẻ — và rẻ tới mức nào",
            "expertId": "quang-dung",
            "date": "10/06",
            "sig": "up",
            "tag": "Định giá",
            "body": "Luận điểm mở: \"một thị trường định giá rẻ thường nằm ở một thị trường có biến cố\" — cú sốc chính là bài test để biết tài sản có thật sự hấp dẫn hay chưa. Sau tám tháng đổ vỡ của bộ ba ngân hàng – chứng khoán – bất động sản, đa phần cổ phiếu giảm ít nhất 30%, trung bình 40%, nhiều mã tới 50%. Kết quả: định giá ngành 2026 đã gần bằng mức của năm 2024, so với trung bình 5 năm khoảng 1,7 lần. Nguyên nhân gốc theo ông là chính sự thăng hoa của ngành năm 2025 dẫn tới tình trạng thiếu tiền năm 2026."
          },
          {
            "title": "Bảng cân đối ba doanh nghiệp cải thiện thật",
            "expertId": "quang-dung",
            "date": "10/06",
            "sig": "up",
            "tag": "Doanh nghiệp",
            "body": "Điểm ông nhấn mạnh là chất lượng tài sản tốt lên chứ không chỉ giá giảm. Nam Long: tiền mặt từ 3.800 lên gần 8.000 tỷ trong khi tổng nợ giảm từ 7.000 xuống khoảng 5.400 tỷ trên quy mô vốn 15.000 tỷ. Đất Xanh: tiền và tương đương tiền từ 1.300 tỷ cuối 2024 lên khoảng 5.600 tỷ tại quý 1/2026. Khang Điền: quy mô từ 22.000 lên khoảng 29.000 tỷ trong 2025, lợi nhuận từ 384 tỷ lên gần 700 tỷ ở quý 1/2026."
          },
          {
            "title": "Góc ngược: rủi ro call margin của doanh chủ",
            "expertId": "thai-pham",
            "date": "28/07",
            "sig": "down",
            "tag": "Rủi ro",
            "body": "Cùng thời điểm, Thái Phạm đưa bốn lý do \"rẻ có thể rẻ hơn\" và hai trong số đó nằm ở bất động sản: nhiều doanh chủ có khả năng bị call margin trong thời gian tới — dẫn chính DIG và PNJ làm ví dụ — và VIC, VHM neo cao đáng sợ. Kết luận của ông: \"Đáy là một khái niệm khó dò dù nhiều cổ phiếu đã rất rẻ… nên ta cố thủ đợi 1.400–1.500.\""
          },
          {
            "title": "Thanh khoản thị trường nhà đất",
            "expertId": "thai-pham",
            "date": "24/07",
            "sig": "down",
            "tag": "Thị trường thật",
            "body": "Đánh giá thẳng của ông về bất động sản vật lý (không phải cổ phiếu): \"chết thanh khoản, chết hẳn chứ không phải chết dọa\". Đây là lý do dòng tiền đầu cơ rút khỏi kênh này — mà theo Quang Dũng thì gốc là lãi suất cao làm chi phí vốn đội lên, khiến dòng tiền đầu cơ ở mọi kênh (bất động sản, vàng, crypto) đều thu hẹp."
          },
          {
            "title": "Chính sách hỗ trợ trực tiếp",
            "expertId": "quang-dung",
            "date": "20/06",
            "sig": "up",
            "tag": "Chính sách",
            "body": "Trong các biện pháp nới lỏng, ông chỉ ra một cái nhắm thẳng vào bất động sản: giảm trọng số rủi ro của lĩnh vực này từ 250% xuống 150% — tức ngân hàng cho vay bất động sản sẽ tốn ít vốn tự có hơn, mở đường bơm tiền trực tiếp vào ngành. Kèm với Thông tư 22 nâng trần cho vay trung–dài hạn, đây là hai cơ chế có tác động nhanh nhất tới nhóm này."
          },
          {
            "title": "Tín hiệu từ thị trường trái phiếu",
            "expertId": "thai-pham",
            "date": "31/07",
            "sig": "warn",
            "tag": "Trái phiếu",
            "body": "Một hội viên đặt câu hỏi dưới bài đăng: trái phiếu VIC123029 đang chào bán ở giá 103,47 và đáo hạn 14/9, hàm ý lợi suất khoảng 3%/tháng. Con số này chưa được Thái Phạm trả lời, nhưng nó khớp với luận điểm \"VIC, VHM neo cao đáng sợ\" và rủi ro call margin của nhóm doanh chủ mà ông cảnh báo cùng tuần."
          }
        ]
      }
    ]
  },
  "ai": {
    "updated": "28/08/2026",
    "entryRef": "Nhận định mù #3 · brain/claude-calls.md · hạn chấm 25/09",
    "note": "Claude tự dựng từ dữ liệu thô qua thư viện mô hình học từ Thái Phạm. Bảng này viết ngày 28/08 TRƯỚC khi quét kênh và đọc transcript. Điểm mới của kỳ này: bảng #2 sai NHỊP vàng lần thứ hai liên tiếp — và sai theo hai chiều ngược nhau — nên từ nay với vàng chỉ gọi HƯỚNG, không gọi nhịp và không đặt điểm vào. Phần \"so với chuyên gia\" trong mỗi thẻ được thêm sau khi đọc. Chưa tính vào bảng điểm chung.",
    "board": [
      {
        "id": "vang",
        "group": "Thế giới",
        "asset": "Vàng",
        "arrow": "up",
        "arrowLabel": "TĂNG — KHÔNG gọi nhịp nữa",
        "confidence": "vừa",
        "horizon": "4 tuần",
        "headline": "4.635 sau khi bị đẩy khỏi vùng 4,73. Hai lần liên tiếp tôi gọi sai nhịp vàng, theo hai chiều ngược nhau — nên bỏ hẳn cột điểm vào",
        "reasoning": [
          {
            "k": "concl",
            "text": "TỰ CHẤM NỬA cho bảng #2. Tôi gọi \"tăng tiếp, target 4.765, mốc hỏng 4.655\" — giá lên tới ~4,73 rồi quay đầu và thủng luôn 4.655. Trước đó bảng #1 gọi ngược lại: \"chờ nhịp về 4.43–4.46\" — nhịp đó không bao giờ đến."
          },
          {
            "k": "model",
            "text": "BÀI HỌC GỘP: sửa từ chiều gấu sang chiều tăng vẫn sai, nghĩa là vấn đề không nằm ở chiều mà ở chỗ TÔI KHÔNG CÓ CÔNG CỤ NÀO ĐO ĐƯỢC NHỊP CỦA VÀNG. detect_zones cho vùng cản và hỗ trợ, không cho thời điểm. Quy ước mới: với vàng chỉ gọi hướng và mốc cấu trúc."
          },
          {
            "k": "data",
            "text": "Cấu trúc tăng chưa hỏng dù đã thủng 4.655: giá 4.635 vẫn trên MA200 (4.514) và MA40 tuần (4.535). Cản 4.765–4.880 (chạm 4 lần) vẫn nguyên."
          },
          {
            "k": "data",
            "text": "Nền vĩ mô không đổi: DXY 99,15 (−1,6%/tháng), chênh 30Y−10Y 0,52đ, khối ngoại giảm nắm trái phiếu Mỹ từ đỉnh 9.490 xuống 9.300 tỷ đô theo số liệu TIC."
          },
          {
            "k": "concl",
            "text": "Mốc hỏng cấu trúc THẬT: đóng tuần dưới 4.514. Không đưa điểm vào theo quy ước mới."
          }
        ],
        "experts": [
          {
            "eid": "thai-pham",
            "rel": "diff",
            "relLabel": "ÔNG CÓ NÚT BẤM THỨ BA",
            "note": "Ông gặp đúng bài toán tôi vừa bó tay — biết hướng còn lên, không đoán được nhịp — nhưng không chọn giữa giữ và bán mà HEDGE: 26/08 khóa hedge khi vàng chạm 4.700, 27/08 xác nhận \"hedged thành công\" khi giá lùi, 28/08 thả ra. Đây là thứ tôi THIẾU chứ không phải làm sai. Đã dựng thành mô hình H7 trong thư viện."
          }
        ]
      },
      {
        "id": "ck-my",
        "group": "Thế giới",
        "asset": "Chứng khoán Mỹ",
        "arrow": "side",
        "arrowLabel": "ĐI NGANG, NGHIÊNG NHẸ XUỐNG",
        "confidence": "thấp-vừa",
        "horizon": "đến 15/10",
        "headline": "S&P 7.648, giảm 1,3% tuần — nhưng A9 nói đô yếu cũng nâng cả cổ phiếu, hai lực đối nhau",
        "reasoning": [
          {
            "k": "data",
            "text": "S&P 500 ở 7.648, giảm 1,3% trong tuần nhưng vẫn +3,2% so với một tháng trước."
          },
          {
            "k": "model",
            "text": "HẠ TIN CẬY từ \"vừa (60%)\" xuống \"thấp-vừa\". Lý do: A9 — nếu đô yếu nâng tất cả tài sản định giá bằng đô thì nó cũng nâng cổ phiếu, ngược với luận điểm gãy ≥8%. Hai lực đối nhau thì không nên gọi mạnh."
          },
          {
            "k": "concl",
            "text": "Đây là chỗ tôi cố tình nhát hơn Thái Phạm và ghi rõ lý do, thay vì đi theo một luận điểm nghe thuyết phục."
          }
        ],
        "experts": [
          {
            "eid": "thai-pham",
            "rel": "diff",
            "relLabel": "ÔNG MẠNH HƠN NHIỀU",
            "note": "Tập 46: \"Chứng Mỹ thì sẽ sập thôi. Nước Mỹ nói chung hết bài rồi. Muốn giải quyết bài này chỉ có chiến tranh thôi, hoặc khủng hoảng kinh tế.\" Kịch bản cụ thể: cầm cự tới Anthropic niêm yết tháng 10 rồi điều chỉnh mạnh. Chốt short US500 ở 7.500, xa hơn 7.000."
          }
        ]
      },
      {
        "id": "cong-nghe-my",
        "group": "Thế giới",
        "asset": "Công nghệ / AI Mỹ",
        "arrow": "down",
        "arrowLabel": "YẾU NHẤT THỊ TRƯỜNG",
        "confidence": "cao",
        "horizon": "4–8 tuần",
        "headline": "Nhóm gãy trước và hồi yếu nhất — dư cung capex, AI Trung Quốc giá rẻ, lock-up xả dần",
        "reasoning": [
          {
            "k": "data",
            "text": "Meta/XAI phải cho thuê lại công suất tính toán; Kimi K3 ngang model Mỹ với giá 60%; SpaceX còn ~85% cổ phiếu chờ mở khóa đến T5/2027"
          },
          {
            "k": "model",
            "text": "D7 \"người XÂY bắt đầu BÁN\" = tín hiệu dư cung capex → đỉnh chu kỳ bán dẫn"
          },
          {
            "k": "model",
            "text": "D3 lock-up cascade: nguồn cung cổ phiếu tăng dần đè giá suốt nhiều tháng"
          },
          {
            "k": "concl",
            "text": "Tránh bắt đáy nhóm AI/chip; nhịp hồi là để thoát, không phải để vào"
          }
        ],
        "experts": [
          {
            "eid": "thai-pham",
            "rel": "agree",
            "relLabel": "ĐỒNG THUẬN",
            "note": "Ông đang short chuỗi chips + cyber security, đã chốt lời nhiều lần từ tháng 7."
          }
        ]
      },
      {
        "id": "loi-suat",
        "group": "Thế giới",
        "asset": "Lợi suất Mỹ dài hạn",
        "arrow": "side",
        "arrowLabel": "NEO QUANH 5,2% — bỏ phần \"dốc thêm\"",
        "confidence": "vừa",
        "horizon": "đến FOMC 16/09",
        "headline": "30Y 5,18%, chênh 30Y−10Y co ba tuần liên tiếp: 0,57 → 0,54 → 0,52. Phần \"đường cong dốc thêm\" nay tự chấm SAI",
        "reasoning": [
          {
            "k": "concl",
            "text": "TỰ CHẤM SAI phần \"dốc thêm\" đã gọi từ bảng #1. Chênh 30Y−10Y co lại ba tuần liên tục — đường cong PHẲNG dần chứ không dốc thêm. Giữ lại phần \"neo cao\", bỏ phần độ dốc."
          },
          {
            "k": "data",
            "text": "30Y 5,18% (26/08), dưới lại mốc 5,2%. 10Y 4,66%. Cả hai đều giảm khoảng 0,08–0,09đ trong tuần."
          },
          {
            "k": "model",
            "text": "A3 vẫn đứng: mốc cờ hiệu 5,4% cho việc CK Mỹ gãy mạnh chưa bị chạm. Nhưng biên độ dao động quanh 5,2% đang hẹp dần."
          }
        ],
        "experts": [
          {
            "eid": "thai-pham",
            "rel": "diff",
            "relLabel": "ÔNG MẠNH HƠN",
            "note": "Video 28/08: lợi suất 10 và 30 năm \"đang vượt đỉnh và sẽ tiếp tục vượt đỉnh\", đã vượt đỉnh tháng 7/2007. Ông giải thích bằng term premium — \"những người cho Mỹ vay đòi hỏi lợi suất cao hơn vì niềm tin đang thấp đi\". Số liệu tuần này thì đi ngang chứ chưa xác nhận chiều ông gọi."
          }
        ]
      },
      {
        "id": "dau",
        "group": "Thế giới",
        "asset": "Dầu",
        "arrow": "down",
        "arrowLabel": "TRÔI VỀ MÉP DƯỚI BAND",
        "confidence": "vừa",
        "horizon": "đến 31/10",
        "headline": "WTI 83,34 (−4,3% tuần) · Brent 88,39 (−6,4%) — tuần giảm mạnh nhất từ khi theo dõi",
        "reasoning": [
          {
            "k": "data",
            "text": "WTI 83,34, Brent 88,39. Band 78–90 vẫn giữ nhưng đang trôi rõ về mép dưới."
          },
          {
            "k": "concl",
            "text": "Nếu thủng 78 thì cả luận điểm \"giá dầu neo cao vì lợi ích chính trị\" (nhóm B) phải xem lại — đây là điều kiện tự sửa ghi trước."
          }
        ],
        "experts": [
          {
            "eid": "thai-pham",
            "rel": "diff",
            "relLabel": "ÔNG VẪN GIỮ HƯỚNG NGƯỢC",
            "note": "Video 28/08 nhắc lại: dự trữ dầu chiến lược Mỹ thấp nhất 50 năm, gần như không tàu nào qua eo biển Hormuz, và Iran ghìm giá cao tới bầu cử tháng 11. Ông cảnh báo nguy cơ cú sốc dầu lửa tương tự 1983–1987. Số liệu tuần này đi ngược hướng đó."
          }
        ]
      },
      {
        "id": "btc",
        "group": "Thế giới",
        "asset": "Bitcoin",
        "arrow": "up",
        "arrowLabel": "TĂNG — nâng nhẹ tin cậy",
        "confidence": "thấp-vừa",
        "horizon": "4 tuần",
        "headline": "79.960, đứng ngay dưới cản 82.430–82.792 — cụm này chỉ chạm 2 lần nên yếu hơn cụm 78–79,5k vừa bị xuyên",
        "reasoning": [
          {
            "k": "data",
            "text": "BTC 79.960 (+2,1% tuần). Dòng \"↑ tin cậy thấp\" của bảng #2 đang đúng; mốc hỏng 76.029 chưa bị chạm."
          },
          {
            "k": "data",
            "text": "Trên MA200 (69.223) và MA40 tuần (74.217). Cản tiếp theo 82.430–82.792 chỉ chạm 2 lần — yếu hơn hẳn cụm 77.991–79.488 (chạm 5 lần) vừa bị xuyên qua."
          },
          {
            "k": "model",
            "text": "J2 vẫn áp dụng: crypto không nằm trên thang nghe-tin-kinh-tế, nên chỉ dùng cấu trúc giá, không dùng chuỗi vĩ mô. Đây là chỗ tôi đã sai hai lần và nay giữ kỷ luật."
          },
          {
            "k": "concl",
            "text": "Nâng tin cậy từ \"thấp\" lên \"thấp-vừa\" vì đã đúng một nhịp. Mốc hỏng: thủng 76.029 — thủng thì tự cấm gọi hướng BTC trong 4 tuần."
          }
        ],
        "experts": [
          {
            "eid": "thai-pham",
            "rel": "diff",
            "relLabel": "ĐỐI LẬP — nhưng ông đã khóa hedge",
            "note": "Tút 26/08: \"yếu rồi, trước mắt test lại 74K và 72k rồi mới biết tiếp — nếu test 68–69k thì sẽ vững hơn để thành một sóng đi lên.\" Đây là lần ĐẦU ông mở cửa cho kịch bản BTC tăng thật. Tút 28/08 ông khóa hedge vị thế short để phòng cú kéo quanh bài phát biểu Warsh đêm 29/08 — tức không còn đặt cược một chiều nữa."
          }
        ]
      },
      {
        "id": "dxy",
        "group": "Thế giới",
        "asset": "Đô Mỹ (DXY)",
        "arrow": "side",
        "arrowLabel": "ĐẢO CHIỀU TẠM — chưa gọi hướng",
        "confidence": "thấp",
        "horizon": "4 tuần",
        "headline": "99,15 sau tuần đầu tiên TĂNG kể từ khi tôi dựng mô hình A9. Đây là biến gốc — ba dòng vàng, BTC, VN-Index đều treo vào nó",
        "reasoning": [
          {
            "k": "data",
            "text": "DXY 99,15, tăng 0,4% trong tuần — lần đầu tăng kể từ khi A9 được dựng. Tính theo tháng vẫn giảm 1,6%."
          },
          {
            "k": "model",
            "text": "A9 nói đô yếu nâng TẤT CẢ tài sản định giá bằng đô. Nếu DXY đảo lên thật thì cả ba dòng vàng, BTC và VN-Index phải viết lại cùng lúc — chúng không độc lập với nhau."
          },
          {
            "k": "concl",
            "text": "Điều kiện tắt A9 ghi trước: DXY đóng tuần trên 101. Nay mới 99,15 nên chưa tắt, nhưng đây là dấu hiệu sớm cần canh nhất trong bảng."
          }
        ],
        "experts": [
          {
            "eid": "thai-pham",
            "rel": "agree",
            "relLabel": "ĐỒNG THUẬN",
            "note": "Ông dẫn Jamie Dimon: đô sẽ mất vị thế dự trữ số 1 — đã mất ngôi vào tay vàng."
          }
        ]
      },
      {
        "id": "vn-index",
        "group": "Việt Nam",
        "asset": "VN-Index",
        "arrow": "up",
        "arrowLabel": "TĂNG TIẾP — nhưng có cờ đỏ khối lượng",
        "confidence": "vừa",
        "horizon": "4 tuần",
        "headline": "1.830 sau khi thêm 62 điểm trong tuần. Độ rộng cải thiện thật ba tuần liền — nhưng khối lượng giảm dần khi giá tăng",
        "reasoning": [
          {
            "k": "data",
            "text": "VN-Index 1.829,79 (28/08), đã chạy 62 điểm trong tuần từ 1.768. Dòng \"↑ đã đổi hướng\" của bảng #2 đang ĐÚNG rõ; mốc hỏng 1.788 chưa bị chạm."
          },
          {
            "k": "data",
            "text": "Độ rộng cải thiện ba tuần liên tiếp: trên MA50 28,8% → 38,7% → 42,9%; downtrend 60,7% → 52,9% → 50,0%; uptrend 13,9% → 15,7%."
          },
          {
            "k": "data",
            "text": "Khối ngoại mua ròng 3/5 phiên tuần này (+273, +230 là hai phiên mạnh nhất) — đúng điều kiện tự sửa tôi ghi trước ngày 21/08. Lũy kế 20 phiên vẫn âm 2.078 tỷ."
          },
          {
            "k": "data",
            "text": "CỜ ĐỎ: khối lượng giảm dần trong khi giá tăng — 669 → 643 → 587 → 484 triệu cổ phiếu qua bốn phiên. Giá lên trên khối lượng rút là dấu hiệu đà tăng thiếu người tham gia mới."
          },
          {
            "k": "concl",
            "text": "Giữ hướng TĂNG. Mốc hỏng: đóng dưới 1.788."
          }
        ],
        "experts": [
          {
            "eid": "thai-pham",
            "rel": "agree",
            "relLabel": "ĐỒNG THUẬN",
            "note": "\"Nắm chặt bank, chứng, và các mã sản xuất, phân bón.\" Ông nói thêm một điều tôi không đo được: \"điểm số vẫn do VIC/VHM chi phối là chủ đạo nên xấu tốt gì do 2 mã đó.\""
          },
          {
            "eid": "ck-5-phut",
            "rel": "part",
            "relLabel": "CÙNG HƯỚNG, KHÁC NHỊP",
            "note": "Anh xác nhận điểm mua đang mở rộng nhưng giữ nguyên cảnh báo thanh khoản — đúng chỗ cờ đỏ của tôi: \"thanh khoản sẽ không cải thiện được quá nhiều trong giai đoạn hiện tại\"."
          },
          {
            "eid": "quang-dung",
            "rel": "part",
            "relLabel": "CHƯA GỌI LÀ CHU KỲ",
            "note": "Anh vẫn đòi điều kiện thứ ba — tiền thực sự vào — và bằng chứng nghi ngờ chính là thanh khoản quý 2 chỉ 21.000 tỷ/phiên, thấp nhất năm năm."
          }
        ]
      },
      {
        "id": "ngan-hang",
        "group": "Việt Nam",
        "asset": "Ngân hàng",
        "arrow": "side",
        "arrowLabel": "PHÂN HÓA",
        "confidence": "vừa",
        "horizon": "4 tuần",
        "headline": "Không phải sóng ngành — HDB/OCB/STB đi lên trong khi VCB/BID/CTG/TCB còn downtrend",
        "reasoning": [
          {
            "k": "data",
            "text": "Máy quét 19 mã bank: uptrend HDB/OCB/STB; downtrend VCB/BID/CTG/TCB/VPB; STB sát kháng cự 76,1 kèm cờ CỤM ĐỈNH"
          },
          {
            "k": "model",
            "text": "Khi trend ngành chia đôi → chọn từng mã theo vùng giá, không đặt cược cả rổ"
          },
          {
            "k": "concl",
            "text": "Trung tính có chọn lọc; chờ nhóm quốc doanh (VCB/BID) xác nhận đáy mới nói chuyện sóng ngành"
          }
        ],
        "experts": [
          {
            "eid": "quang-dung",
            "rel": "part",
            "relLabel": "KHÁC KHUNG",
            "note": "Anh: định giá cả ngành rẻ hơn chính nó 6 năm (LNST +25,4%) — nhìn giá trị; Claude nhìn trend. Cả hai có thể cùng đúng ở hai khung thời gian."
          },
          {
            "eid": "thai-pham",
            "rel": "part",
            "relLabel": "LẠC QUAN HƠN",
            "note": "Ông giữ BID/CTG/VCB/TCB/MBB — \"vùng giá trị, cứ cầm\"."
          }
        ]
      },
      {
        "id": "thep",
        "group": "Việt Nam",
        "asset": "Thép",
        "arrow": "down",
        "arrowLabel": "GIẢM — nhưng có dữ kiện ngược",
        "confidence": "thấp",
        "horizon": "4 tuần",
        "headline": "HPG là mã ngoại mua ròng mạnh nhất sàn phiên 24/08 (+106 tỷ) — chưa đủ đảo dòng nhưng phải hạ tin cậy",
        "reasoning": [
          {
            "k": "data",
            "text": "HPG 21,3 (downtrend, MA50 22,4 < MA200 23,7) · NKG/HSG cùng downtrend · hỗ trợ kế 20,1"
          },
          {
            "k": "model",
            "text": "F5 \"cạnh tranh với Vin thì khó\" — thép Vin Steel sẽ giành thầu các đại dự án"
          },
          {
            "k": "concl",
            "text": "Chưa bắt đáy nhóm thép; HPG cần giữ 20,1 và xây lại nền nhiều tuần mới đáng nhìn"
          }
        ],
        "experts": [
          {
            "eid": "thai-pham",
            "rel": "agree",
            "relLabel": "ĐỒNG THUẬN",
            "note": "Tập 46, dù HPG nằm trong rổ FTSE: \"Hòa Phát thì tôi không tham gia, là bởi vì cuối 2026 Vingroup họ sẽ có thép và gần như Hòa Phát cũng mất rất nhiều khách hàng tại Việt Nam.\" Ông có lý do cơ bản; tôi mới chỉ có dòng tiền một phiên."
          }
        ]
      },
      {
        "id": "ck-nganh",
        "group": "Việt Nam",
        "asset": "CP chứng khoán",
        "arrow": "down",
        "arrowLabel": "GIẢM",
        "confidence": "vừa",
        "horizon": "4 tuần",
        "headline": "Thanh khoản đáy năm thì ngành môi giới không có cửa — SSI/VCI/VIX/MBS/SHS đồng loạt downtrend",
        "reasoning": [
          {
            "k": "data",
            "text": "Máy quét: cả 6 mã nhóm chứng khoán trong Sổ mã đều downtrend; VIX bán ròng ngoại mạnh nhất phiên 20/08 (−58 tỷ)"
          },
          {
            "k": "model",
            "text": "Doanh thu ngành = f(thanh khoản) — thanh khoản 18–19k tỷ/phiên so với bình thường 30k"
          },
          {
            "k": "concl",
            "text": "Tránh; chỉ xem lại khi thanh khoản HOSE vượt 25–30k tỷ vài phiên liên tiếp"
          }
        ],
        "experts": [
          {
            "eid": "thai-pham",
            "rel": "agree",
            "relLabel": "ĐỒNG THUẬN",
            "note": "Ông đã cắt toàn bộ vị thế lướt sóng nhóm này từ tháng 7 (\"lướt sóng bị phèo\")."
          }
        ]
      },
      {
        "id": "bds",
        "group": "Việt Nam",
        "asset": "Bất động sản",
        "arrow": "down",
        "arrowLabel": "GIẢM (trừ nhóm Vin neo)",
        "confidence": "vừa",
        "horizon": "4 tuần",
        "headline": "NVL/DIG/DXG/KDH downtrend; VIC/VHM neo cao \"phi thị trường\" — rủi ro rơi nhanh nếu buông trụ",
        "reasoning": [
          {
            "k": "data",
            "text": "Máy quét: nhóm BĐS ngoài Vin đều downtrend; VIC 203 — hỗ trợ gần nhất cách tận −30,6% (không có nền đỡ)"
          },
          {
            "k": "model",
            "text": "F3 \"phi thị trường = rủi ro hệ thống\": mã neo cao không nền là mã rơi nhanh nhất khi đổi gió"
          },
          {
            "k": "concl",
            "text": "Đứng ngoài BĐS niêm yết; riêng BĐS thật thì theo dõi mốc \"cuối 2026 – T3/2027 hết ân hạn lãi suất\" (TP)"
          }
        ],
        "experts": [
          {
            "eid": "azfin",
            "rel": "diff",
            "relLabel": "NGƯỢC (khung giá trị)",
            "note": "AzFin: cổ BĐS đang rất rẻ, cơ hội lớn hơn rủi ro với người kiên nhẫn — khung nhiều năm."
          },
          {
            "eid": "thai-pham",
            "rel": "agree",
            "relLabel": "ĐỒNG THUẬN",
            "note": "Ông đã thoát toàn bộ cổ BĐS; khuyên đợi cuối năm và T3/2027 cho BĐS thật."
          }
        ]
      },
      {
        "id": "dau-khi-vn",
        "group": "Việt Nam",
        "asset": "Dầu khí VN",
        "arrow": "up",
        "arrowLabel": "TĂNG NHẸ",
        "confidence": "vừa",
        "horizon": "4 tuần",
        "headline": "Nhóm hiếm hoi có gió xuôi: GAS đứng trên 80 với \"vùng chân không\" ít cản phía trên, BSR uptrend",
        "reasoning": [
          {
            "k": "data",
            "text": "GAS 82,9 — trên mốc 80; máy vùng giá: 83→110 gần như không có cụm kháng cự (vùng rơi nhanh đầu năm không tạo nền)"
          },
          {
            "k": "data",
            "text": "Dầu thế giới neo cao 80–92 (xem thẻ Dầu) → đầu ra thuận"
          },
          {
            "k": "model",
            "text": "Vùng chân không = ít cản → nếu giữ được 80, giá chạy nhanh hơn bình thường"
          },
          {
            "k": "concl",
            "text": "GAS chạm 90 trước khi thủng 78: 55%; BSR giữ uptrend theo dầu"
          }
        ],
        "experts": [
          {
            "eid": "ck-5-phut",
            "rel": "agree",
            "relLabel": "ĐỒNG THUẬN",
            "note": "Anh: GAS breakout lần 2 trong 2 tuần, mua được cả ngày — chờ đóng nến trên 80 để gia tăng."
          }
        ]
      },
      {
        "id": "phan-bon",
        "group": "Việt Nam",
        "asset": "Phân bón",
        "arrow": "side",
        "arrowLabel": "TÍCH LŨY VÙNG ĐÁY",
        "confidence": "vừa",
        "horizon": "4 tuần",
        "headline": "Giữ nguyên hướng tăng — không có dữ kiện mới ngược. Thái Phạm vẫn xếp phân bón vào nhóm \"nắm chặt\"",
        "reasoning": [
          {
            "k": "data",
            "text": "DCM 30,45 / DPM 21,6 — cả hai còn dưới MA50 nhưng máy phát hiện spring cuối tháng 7 + gap đỡ bên dưới"
          },
          {
            "k": "model",
            "text": "E3 spring = tạo lập đã thử cung và giữ được nền → tích lũy lành mạnh, không phải phân phối"
          },
          {
            "k": "concl",
            "text": "Đi ngang tích lũy; kèo lớn của nhóm này là khung THÁNG (mốc T3/2027), không phải khung tuần"
          }
        ],
        "experts": [
          {
            "eid": "thai-pham",
            "rel": "agree",
            "relLabel": "ĐỒNG THUẬN",
            "note": "Tập 46: \"Nhìn tiền bắt đầu vào đạm Cà Mau, tiền bắt đầu vào đạm Phú Mỹ. Nền giá phẳng này quá đẹp. Mua nằm im cho tôi.\""
          },
          {
            "eid": "ck-5-phut",
            "rel": "agree",
            "relLabel": "ĐỒNG THUẬN — lý do khác",
            "note": "Anh dùng chu kỳ hàng hóa: giá URE giảm gần một nửa từ 800–900 xuống 400 đô, về đúng vùng tích lũy tháng 12/2025. Đã vào 30% lệnh DPM."
          }
        ]
      }
    ]
  },
  "weekBook": {
    "updated": "24/08/2026 · Tuần 35",
    "expertId": "thai-pham",
    "note": "Danh mục Thái Phạm theo tuần, chia theo ngành — TỰ SINH từ các phiếu lệnh trong Sổ mã nên luôn khớp với tab \"Danh sách mã\". Ô trống = tuần đó nhóm này không có lệnh mới (giữ nguyên tuần trước). Mỗi ô hiện lệnh MỚI NHẤT của từng mã trong tuần.",
    "weeks": [
      {
        "key": "w31",
        "label": "Tuần 31",
        "range": "27/07–02/08",
        "ep": "Tập 42",
        "now": false
      },
      {
        "key": "w32",
        "label": "Tuần 32",
        "range": "03/08–09/08",
        "ep": "Tập 43 · 44",
        "now": false
      },
      {
        "key": "w33",
        "label": "Tuần 33",
        "range": "10/08–16/08",
        "ep": "Tập 45",
        "now": false
      },
      {
        "key": "w34",
        "label": "Tuần 34",
        "range": "17/08–23/08",
        "ep": "Tập 46",
        "now": true
      }
    ],
    "markets": [
      {
        "key": "vn",
        "label": "Việt Nam",
        "groups": [
          {
            "key": "ng-n-h-ng",
            "label": "Ngân hàng",
            "tickers": "BID, BVBank, TCB, HDB, VCB, CTG, VPB +4",
            "cells": {
              "w31": {
                "t": "TCB: CẨN TRỌNG · HDB: CHỜ MUA 21–22 · BID: Giữ · VCB: Giữ · +4 mã",
                "s": "avoid",
                "n": 8
              },
              "w32": {
                "t": "BID: MUA — \"giá này đẹp quá\" · VCB: GIỮ · CTG: MUA · MBB: KHÔNG nằm trong diện thoái vốn · +4 mã",
                "s": "hold",
                "n": 8
              },
              "w33": {
                "t": "TCB: CẦM bình thường · CTG: CẦM — không hấp dẫn bằng vùng 28 · MBB: CẦM — P/B ~1,1 lần cũng hấp dẫn · LPB: ĐỪNG MUA — cao giá · +1 mã",
                "s": "hold",
                "n": 5
              },
              "w34": {
                "t": "BID: CẦM CHẶT · TCB: CẦM — nhưng có thể cơ cấu 1/3 sang HDB · HDB: CẦM CHẶT — đánh giá cao hơn TCB · VCB: CẦM CHẶT — trong rổ FTSE · +1 mã",
                "s": "hold",
                "n": 5
              }
            },
            "num": "I"
          },
          {
            "key": "ch-ng-kho-n-ctck-",
            "label": "Chứng khoán (CTCK)",
            "tickers": "TCX, SSI, VCI, VIX, HCM, MBS",
            "cells": {
              "w31": {
                "t": "SSI: TRÁNH CẢ NHÓM · VCI: TRÁNH CẢ NHÓM · VIX: TRÁNH CẢ NHÓM",
                "s": "avoid",
                "n": 3
              },
              "w32": {
                "t": "TCX: GIỮ và bổ sung thêm · SSI: Bổ sung · HCM: ĐỪNG MUA — cao giá quá · MBS: Cầm — đang ở vùng giá rất rẻ · +1 mã",
                "s": "up",
                "n": 5
              },
              "w33": {
                "t": "",
                "s": "hold"
              },
              "w34": {
                "t": "SSI: CẦM CHẶT — trong rổ FTSE · VCI: CỨ CẦM · HCM: ĐỪNG ĐỤNG — vùng rất cao",
                "s": "hold",
                "n": 3
              }
            },
            "num": "II"
          },
          {
            "key": "ph-n-b-n-h-a-ch-t",
            "label": "Phân bón & Hóa chất",
            "tickers": "DCM, DPM",
            "cells": {
              "w31": {
                "t": "DCM: Mua & nắm giữ · DPM: Mua & nắm giữ",
                "s": "up",
                "n": 2
              },
              "w32": {
                "t": "DCM: MUA — đánh spring · DPM: MUA — mô hình hai đáy",
                "s": "up",
                "n": 2
              },
              "w33": {
                "t": "DCM: CẦM DÀI HẠN — ưu tiên hơn · DPM: CẦM DÀI HẠN — mẫu hình đẹp hơn",
                "s": "hold",
                "n": 2
              },
              "w34": {
                "t": "DCM: MUA NẰM IM — tiền bắt đầu vào · DPM: MUA NẰM IM — tiền bắt đầu vào",
                "s": "up",
                "n": 2
              }
            },
            "num": "III"
          },
          {
            "key": "th-p",
            "label": "Thép",
            "tickers": "HPG",
            "cells": {
              "w31": {
                "t": "HPG: Không cầm",
                "s": "avoid",
                "n": 1
              },
              "w32": {
                "t": "HPG: Đợi kéo lại 182x thì ra",
                "s": "wait",
                "n": 1
              },
              "w33": {
                "t": "",
                "s": "hold"
              },
              "w34": {
                "t": "HPG: KHÔNG THAM GIA",
                "s": "avoid",
                "n": 1
              }
            },
            "num": "IV"
          },
          {
            "key": "b-t-ng-s-n",
            "label": "Bất động sản",
            "tickers": "BCM, VIC · VHM, DIG, NVL",
            "cells": {
              "w31": {
                "t": "BCM: Tránh · VIC · VHM: Tránh · DIG: Tránh",
                "s": "avoid",
                "n": 3
              },
              "w32": {
                "t": "",
                "s": "hold"
              },
              "w33": {
                "t": "VIC · VHM: Mốc để canh lướt · NVL: Lướt — mua thấp bán cao",
                "s": "down",
                "n": 2
              },
              "w34": {
                "t": "VIC · VHM: KHÔNG KHOÁI Ở VÙNG CAO",
                "s": "hold",
                "n": 1
              }
            },
            "num": "V"
          },
          {
            "key": "cao-su-kcn",
            "label": "Cao su & KCN",
            "tickers": "GVR",
            "cells": {
              "w31": {
                "t": "",
                "s": "hold"
              },
              "w32": {
                "t": "",
                "s": "hold"
              },
              "w33": {
                "t": "GVR: Lướt sóng thoái vốn",
                "s": "warn",
                "n": 1
              },
              "w34": {
                "t": "",
                "s": "hold"
              }
            },
            "num": "VI"
          },
          {
            "key": "d-u-kh-",
            "label": "Dầu khí",
            "tickers": "GAS, BSR",
            "cells": {
              "w31": {
                "t": "GAS: MUA TÍCH LŨY · BSR: Tránh",
                "s": "up",
                "n": 2
              },
              "w32": {
                "t": "",
                "s": "hold"
              },
              "w33": {
                "t": "",
                "s": "hold"
              },
              "w34": {
                "t": "",
                "s": "hold"
              }
            },
            "num": "VII"
          },
          {
            "key": "-i-n-h-t-ng",
            "label": "Điện & Hạ tầng",
            "tickers": "PC1, CII, POW",
            "cells": {
              "w31": {
                "t": "PC1: CHỜ MUA 17–18",
                "s": "up",
                "n": 1
              },
              "w32": {
                "t": "CII: Cầm, đợi 182x ra · POW: Mua nhẹ nếu cầm trên 60% tiền",
                "s": "up",
                "n": 2
              },
              "w33": {
                "t": "",
                "s": "hold"
              },
              "w34": {
                "t": "",
                "s": "hold"
              }
            },
            "num": "VIII"
          },
          {
            "key": "c-ng-ngh-vn",
            "label": "Công nghệ VN",
            "tickers": "FPT",
            "cells": {
              "w31": {
                "t": "FPT: Tránh",
                "s": "avoid",
                "n": 1
              },
              "w32": {
                "t": "FPT: Giải ngân rồi bán khi được kéo",
                "s": "down",
                "n": 1
              },
              "w33": {
                "t": "FPT: Chỉ hồi kỹ thuật",
                "s": "hold",
                "n": 1
              },
              "w34": {
                "t": "FPT: CẦM NGUYÊN — lướt sóng được",
                "s": "hold",
                "n": 1
              }
            },
            "num": "IX"
          },
          {
            "key": "b-n-l-ti-u-d-ng",
            "label": "Bán lẻ & Tiêu dùng",
            "tickers": "VNM, PNJ, MWG",
            "cells": {
              "w31": {
                "t": "MWG: Tránh · PNJ: Tránh",
                "s": "avoid",
                "n": 2
              },
              "w32": {
                "t": "VNM: CẦM — nhà nước còn 36% · PNJ: Có thể bị đánh ngược lên",
                "s": "hold",
                "n": 2
              },
              "w33": {
                "t": "PNJ: Chỉ hồi kỹ thuật",
                "s": "hold",
                "n": 1
              },
              "w34": {
                "t": "VNM: ĐÃ CHỐT LỜI 1/2 — lãi ~13% · PNJ: LƯỚT SÓNG — đã được cây trần",
                "s": "down",
                "n": 2
              }
            },
            "num": "X"
          },
          {
            "key": "logistics-h-ng-kh-ng",
            "label": "Logistics & Hàng không",
            "tickers": "SCS",
            "cells": {
              "w31": {
                "t": "",
                "s": "hold"
              },
              "w32": {
                "t": "SCS: CẦM — đánh spring",
                "s": "hold",
                "n": 1
              },
              "w33": {
                "t": "",
                "s": "hold"
              },
              "w34": {
                "t": "SCS: NẰM IM",
                "s": "hold",
                "n": 1
              }
            },
            "num": "XI"
          },
          {
            "key": "khai-kho-ng",
            "label": "Khai khoáng",
            "tickers": "MSR",
            "cells": {
              "w31": {
                "t": "MSR: Chờ mua",
                "s": "up",
                "n": 1
              },
              "w32": {
                "t": "",
                "s": "hold"
              },
              "w33": {
                "t": "",
                "s": "hold"
              },
              "w34": {
                "t": "",
                "s": "hold"
              }
            },
            "num": "XII"
          },
          {
            "key": "manual-12",
            "num": "",
            "label": "Tỉ trọng tiền / cổ phiếu",
            "tickers": "Toàn danh mục VN",
            "isRatio": true,
            "cells": {
              "w31": {
                "t": "60% tiền — 40% cổ phiếu (phòng thủ)",
                "s": "wait"
              },
              "w32": {
                "t": "ĐẢO CHIỀU 05/08 → mua full cổ phiếu",
                "s": "up"
              },
              "w33": {
                "t": "Full cổ phiếu — \"kế hoạch vẫn vậy\"",
                "s": "hold"
              },
              "w34": {
                "t": "Full cổ phiếu, chốt lời 1/2 VNM — \"không cần làm gì cả\"",
                "s": "hold"
              }
            }
          }
        ],
        "count": 13
      },
      {
        "key": "us",
        "label": "Mỹ & thế giới",
        "groups": [
          {
            "key": "ch-s-m-th-gi-i",
            "label": "Chỉ số Mỹ & thế giới",
            "tickers": "S&P 500 · US30, NI225, FTSE 100",
            "cells": {
              "w31": {
                "t": "S&P 500 · US30: Giữ short · FTSE 100: Bán / short",
                "s": "down",
                "n": 2
              },
              "w32": {
                "t": "S&P 500 · US30: SHORT · NI225: SHORT khi hồi",
                "s": "down",
                "n": 2
              },
              "w33": {
                "t": "S&P 500 · US30: SHORT 2/3 vị thế — ưu tiên · NI225: SHORT NHẸ — vào 1/3",
                "s": "down",
                "n": 2
              },
              "w34": {
                "t": "S&P 500 · US30: GIỮ SHORT — điều chỉnh tiếp tuần tới · NI225: ĐỢI HỒI RỒI SHORT",
                "s": "down",
                "n": 2
              }
            },
            "num": "I"
          },
          {
            "key": "us-tech-ti-u-d-ng",
            "label": "US Tech — tiêu dùng",
            "tickers": "AAPL, TSLA",
            "cells": {
              "w31": {
                "t": "AAPL: Chốt lời short",
                "s": "down",
                "n": 1
              },
              "w32": {
                "t": "AAPL: SHORT — còn rớt tiếp",
                "s": "down",
                "n": 1
              },
              "w33": {
                "t": "AAPL: HOLD tới 290",
                "s": "hold",
                "n": 1
              },
              "w34": {
                "t": "AAPL: GIỮ LỆNH BÁN · TSLA: KHÔNG ĐỤNG VÀO",
                "s": "down",
                "n": 2
              }
            },
            "num": "II"
          },
          {
            "key": "us-tech-internet",
            "label": "US Tech — internet",
            "tickers": "GOOGL, AMZN",
            "cells": {
              "w31": {
                "t": "GOOGL: Short · AMZN: Chờ short",
                "s": "down",
                "n": 2
              },
              "w32": {
                "t": "GOOGL: SHORT",
                "s": "down",
                "n": 1
              },
              "w33": {
                "t": "GOOGL: CHỐT SHORT — ngưng short",
                "s": "down",
                "n": 1
              },
              "w34": {
                "t": "GOOGL: BỎ QUA — khó short khó long",
                "s": "avoid",
                "n": 1
              }
            },
            "num": "III"
          },
          {
            "key": "us-tech-ph-n-m-m",
            "label": "US Tech — phần mềm",
            "tickers": "WTC",
            "cells": {
              "w31": {
                "t": "WTC: Đừng mua",
                "s": "avoid",
                "n": 1
              },
              "w32": {
                "t": "",
                "s": "hold"
              },
              "w33": {
                "t": "",
                "s": "hold"
              },
              "w34": {
                "t": "",
                "s": "hold"
              }
            },
            "num": "IV"
          },
          {
            "key": "b-n-d-n-chip-",
            "label": "Bán dẫn (chip)",
            "tickers": "INTC, MU, MRVL, AMD, NVDA",
            "cells": {
              "w31": {
                "t": "INTC: Giữ lệnh short · MU: Giữ lệnh short · MRVL: Giữ lệnh short · AMD: Giữ lệnh short · +1 mã",
                "s": "down",
                "n": 5
              },
              "w32": {
                "t": "AMD: Tiếp tục giữ short",
                "s": "down",
                "n": 1
              },
              "w33": {
                "t": "AMD: SHORT khi lên · NVDA: SHORT — thêm ở 241",
                "s": "down",
                "n": 2
              },
              "w34": {
                "t": "INTC: GIỮ SHORT · NVDA: GIỮ LỆNH BÁN",
                "s": "down",
                "n": 2
              }
            },
            "num": "V"
          },
          {
            "key": "b-nh-i-n-t-",
            "label": "Bộ nhớ & Điện tử",
            "tickers": "005930, SanDisk",
            "cells": {
              "w31": {
                "t": "SanDisk: Đã chốt · 005930: Chờ bắt đáy",
                "s": "down",
                "n": 2
              },
              "w32": {
                "t": "005930: Còn điều chỉnh",
                "s": "hold",
                "n": 1
              },
              "w33": {
                "t": "005930: Hồi kỹ thuật rồi gãy tiếp",
                "s": "hold",
                "n": 1
              },
              "w34": {
                "t": "005930: HỒI RỒI CHỊU TRẬN",
                "s": "hold",
                "n": 1
              }
            },
            "num": "VI"
          },
          {
            "key": "an-ninh-m-ng",
            "label": "An ninh mạng",
            "tickers": "PANW, FTNT, CRWD",
            "cells": {
              "w31": {
                "t": "PANW: Chờ short · FTNT: Chờ short · CRWD: Chờ short",
                "s": "down",
                "n": 3
              },
              "w32": {
                "t": "CRWD: BỔ SUNG phần đã chốt",
                "s": "down",
                "n": 1
              },
              "w33": {
                "t": "PANW: GIỮ SHORT — vào thêm ít · CRWD: GIỮ SHORT — vào thêm ít",
                "s": "down",
                "n": 2
              },
              "w34": {
                "t": "FTNT: GIỮ SHORT — đi cùng nhóm CRWD · CRWD: GIỮ SHORT — chưa chốt",
                "s": "down",
                "n": 2
              }
            },
            "num": "VII"
          },
          {
            "key": "ph-n-c-ng-cntt",
            "label": "Phần cứng CNTT",
            "tickers": "DELL, ANET",
            "cells": {
              "w31": {
                "t": "DELL: Short · ANET: Không ưu tiên",
                "s": "down",
                "n": 2
              },
              "w32": {
                "t": "DELL: GIỮ SHORT 1/2 · short thêm",
                "s": "down",
                "n": 1
              },
              "w33": {
                "t": "DELL: GIỮ SHORT — \"hơi bướng và liên tục ngáo ngáo\"",
                "s": "down",
                "n": 1
              },
              "w34": {
                "t": "DELL: SHORT NẾU KÉO LÊN",
                "s": "down",
                "n": 1
              }
            },
            "num": "VIII"
          },
          {
            "key": "h-ng-kh-ng-v-tr-",
            "label": "Hàng không vũ trụ",
            "tickers": "SpaceX",
            "cells": {
              "w31": {
                "t": "SpaceX: Giữ short",
                "s": "down",
                "n": 1
              },
              "w32": {
                "t": "SpaceX: SHORT LẠI",
                "s": "down",
                "n": 1
              },
              "w33": {
                "t": "SpaceX: SHORT 1/3",
                "s": "down",
                "n": 1
              },
              "w34": {
                "t": "SpaceX: SHORT THÊM khi hồi",
                "s": "down",
                "n": 1
              }
            },
            "num": "IX"
          },
          {
            "key": "qu-c-ph-ng",
            "label": "Quốc phòng",
            "tickers": "RTX · LMT",
            "cells": {
              "w31": {
                "t": "RTX · LMT: Short",
                "s": "down",
                "n": 1
              },
              "w32": {
                "t": "",
                "s": "hold"
              },
              "w33": {
                "t": "",
                "s": "hold"
              },
              "w34": {
                "t": "",
                "s": "hold"
              }
            },
            "num": "X"
          },
          {
            "key": "qu-ai",
            "label": "Quỹ AI",
            "tickers": "VCX",
            "cells": {
              "w31": {
                "t": "",
                "s": "hold"
              },
              "w32": {
                "t": "",
                "s": "hold"
              },
              "w33": {
                "t": "",
                "s": "hold"
              },
              "w34": {
                "t": "VCX: MUA MẠNH",
                "s": "up",
                "n": 1
              }
            },
            "num": "XI"
          },
          {
            "key": "truy-n-th-ng",
            "label": "Truyền thông",
            "tickers": "NFLX",
            "cells": {
              "w31": {
                "t": "",
                "s": "hold"
              },
              "w32": {
                "t": "",
                "s": "hold"
              },
              "w33": {
                "t": "NFLX: Đã chốt lời — mua lại nếu về 74",
                "s": "down",
                "n": 1
              },
              "w34": {
                "t": "NFLX: MUA THÊM NẾU LÙI",
                "s": "up",
                "n": 1
              }
            },
            "num": "XII"
          },
          {
            "key": "d-c-ph-m",
            "label": "Dược phẩm",
            "tickers": "CSL, MRNA",
            "cells": {
              "w31": {
                "t": "CSL: Để đấy",
                "s": "hold",
                "n": 1
              },
              "w32": {
                "t": "",
                "s": "hold"
              },
              "w33": {
                "t": "",
                "s": "hold"
              },
              "w34": {
                "t": "MRNA: SHORT — kỳ vọng ảo",
                "s": "down",
                "n": 1
              }
            },
            "num": "XIII"
          },
          {
            "key": "kim-lo-i-qu-",
            "label": "Kim loại quý",
            "tickers": "XAU/USD, XAG/USD",
            "cells": {
              "w31": {
                "t": "XAU/USD: Chờ mua vùng sâu · XAG/USD: Chờ",
                "s": "up",
                "n": 2
              },
              "w32": {
                "t": "XAU/USD: GIỮ — mục tiêu gần · XAG/USD: Hồi theo vàng",
                "s": "hold",
                "n": 2
              },
              "w33": {
                "t": "XAU/USD: ĐÃ CHỐT 1/2 — giữ phần còn lại dài hạn",
                "s": "down",
                "n": 1
              },
              "w34": {
                "t": "XAU/USD: VẪN CẦM — chưa bán",
                "s": "down",
                "n": 1
              }
            },
            "num": "XIV"
          },
          {
            "key": "d-u-n-ng-l-ng-th-gi-i",
            "label": "Dầu & Năng lượng thế giới",
            "tickers": "WTI, WDS",
            "cells": {
              "w31": {
                "t": "WTI: Giữ vị thế mua · WDS: Chốt lời",
                "s": "up",
                "n": 2
              },
              "w32": {
                "t": "WTI: MUA nếu về vùng thấp",
                "s": "up",
                "n": 1
              },
              "w33": {
                "t": "WTI: Vùng cao lâu — hết sóng",
                "s": "hold",
                "n": 1
              },
              "w34": {
                "t": "",
                "s": "hold"
              }
            },
            "num": "XV"
          },
          {
            "key": "crypto",
            "label": "Crypto",
            "tickers": "BTC",
            "cells": {
              "w31": {
                "t": "BTC: Tránh cả năm",
                "s": "avoid",
                "n": 1
              },
              "w32": {
                "t": "BTC: GIỮ lệnh lướt",
                "s": "hold",
                "n": 1
              },
              "w33": {
                "t": "BTC: GIỮ — đang lỗ 2.000/coin",
                "s": "hold",
                "n": 1
              },
              "w34": {
                "t": "BTC: SHORT 2/3 — đang lỗ ~2.000/coin",
                "s": "down",
                "n": 1
              }
            },
            "num": "XVI"
          },
          {
            "key": "ngo-i-h-i",
            "label": "Ngoại hối",
            "tickers": "USD/JPY",
            "cells": {
              "w31": {
                "t": "USD/JPY: Long khi về vùng thấp",
                "s": "hold",
                "n": 1
              },
              "w32": {
                "t": "",
                "s": "hold"
              },
              "w33": {
                "t": "",
                "s": "hold"
              },
              "w34": {
                "t": "",
                "s": "hold"
              }
            },
            "num": "XVII"
          },
          {
            "key": "b-n-l-ti-u-d-ng-qu-c-t-",
            "label": "Bán lẻ & Tiêu dùng (quốc tế)",
            "tickers": "AEON",
            "cells": {
              "w31": {
                "t": "AEON: Mua nhỏ",
                "s": "up",
                "n": 1
              },
              "w32": {
                "t": "",
                "s": "hold"
              },
              "w33": {
                "t": "",
                "s": "hold"
              },
              "w34": {
                "t": "",
                "s": "hold"
              }
            },
            "num": "XVIII"
          },
          {
            "key": "ng-n-h-ng-m-c",
            "label": "Ngân hàng Mỹ & Úc",
            "tickers": "BAC, NAB, ANZ",
            "cells": {
              "w31": {
                "t": "BAC: Short · NAB: Chốt lời · ANZ: Chốt lời",
                "s": "down",
                "n": 3
              },
              "w32": {
                "t": "",
                "s": "hold"
              },
              "w33": {
                "t": "",
                "s": "hold"
              },
              "w34": {
                "t": "",
                "s": "hold"
              }
            },
            "num": "XIX"
          },
          {
            "key": "khai-kho-ng-qu-c-t-",
            "label": "Khai khoáng quốc tế",
            "tickers": "BHP",
            "cells": {
              "w31": {
                "t": "BHP: Không mua",
                "s": "avoid",
                "n": 1
              },
              "w32": {
                "t": "",
                "s": "hold"
              },
              "w33": {
                "t": "",
                "s": "hold"
              },
              "w34": {
                "t": "",
                "s": "hold"
              }
            },
            "num": "XX"
          }
        ],
        "count": 20
      }
    ]
  }
};
