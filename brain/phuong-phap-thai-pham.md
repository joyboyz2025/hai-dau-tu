# Phương pháp phân tích Thái Phạm — bản đồ giải phẫu (v1)

> Nguồn: 22 transcript video (~700.000 ký tự, 06/2026–08/2026) + 145 dòng scorecard đối chiếu thực tế.
> Mục đích: nền tảng để train Claude tự tổng hợp thông tin và ra nhận định theo khung tư duy này,
> sau đó đối chiếu với video mới của Thái Phạm và học từ độ lệch.
> Ngày lập: 20/08/2026.

---

## I. TÁM TRỤ CỘT PHƯƠNG PHÁP (đã đo đạc trên corpus)

### 1. Vĩ mô trước, mã sau — chuỗi liên thị trường
Không bao giờ mở đầu bằng cổ phiếu. Trình tự cố định: Fed/lãi suất (528 lần · 18/22 video)
→ tài khóa/nợ công (119 · 15/22) → địa chính trị (316 · 18/22) → đô la/tỷ giá → vàng/dầu/BTC
→ chứng khoán Mỹ → cuối cùng mới tới VN. Mỗi tài sản là một mắt xích trong chuỗi nhân quả,
không phải nhận định rời.

**Chuỗi mẫu (19/08):** debt buyback = đảo nợ → lợi suất 30Y neo trên 5,2% → E/P cổ phiếu Mỹ
chỉ 3–4% → tiền thông minh rời chứng → vàng 30% danh mục, mục tiêu xa 5.300–5.600.

### 2. Dòng tiền & hành vi tay to (Wyckoff bản địa hóa)
"Kéo lên/kéo xả/đẩy giá" 69 lần · 15/22 — nhiều hơn cả "định giá". Câu hỏi trục: *tiền thật
đang chảy đi đâu, ai đang bán cho ai?* IPO khủng = rút tiền khỏi thị trường. Khối ngoại bán
ròng = tránh bất kể cơ bản. Cú hồi không volume = dàn dựng ra hàng. Từ vựng: gom hàng, spring,
rũ bỏ, phân phối (16–19 lần mỗi cụm).

### 3. Bóc tin tức về bản chất dòng tiền
"Bản chất" 31 lần · 16/22. Không đọc tin theo tiêu đề — dịch mọi tin thành dòng tiền:
debt buyback nghe như "trả nợ" → thực chất lấy ngắn nuôi dài; tin thử vắc-xin giai đoạn 1
thổi Moderna x3 → "kiểu meme coin". Đây là kỹ năng khó tự động hóa nhất và giá trị nhất.

### 4. Neo lịch sử
42 lần · 12/22: đỉnh lợi suất 2007, dotcom, LDI crisis Anh 2022, đỉnh margin 2018, 1929.
Không dự báo từ mô hình định lượng — dự báo từ mẫu hình lặp lại. "Lợi suất tiệm cận đỉnh 2007
ngay trước khủng hoảng" là dạng lập luận đặc trưng.

### 5. ★ Kịch bản hóa thay vì dự báo điểm (phát hiện bổ sung)
Cụm dấu hiệu dày đặc: "kịch bản" **97 lần · 16/22**, "nếu như/trường hợp" **81 · 19/22**,
"xác suất/khả năng" **69 · 18/22**. Ông gần như không bao giờ nói "giá sẽ là X" — ông dựng
**cây kịch bản kèm hành động cho từng nhánh**:
- Vàng: quét 3.700 → mua; cực đoan 3.600 → mua mạnh; không quét → đứng ngoài.
- Dầu: leo thang Trung Đông → US 88–90, UK 95–96; hạ nhiệt → cắt tại 78.
- Mua vàng bổ sung: 1/3 tại 4.340 · 1/3 nếu 4.260 · 1/3 nếu 4.170.
Trung bình **~14 câu nhân quả/video** — mỗi video là một cây quyết định nói thành lời.

### 6. ★ Kỹ thuật theo VÙNG GIÁ và MẪU HÌNH — không dùng chỉ báo (phát hiện bổ sung)
Con số nói rõ: hỗ trợ/kháng cự/vùng giá **46 lần · 15/22**, mẫu hình (spring, hai đáy, cờ
tăng, lấp gap, ba chàng lính trắng) **21 · 11/22**, khung tuần/ngày **15 · 11/22** — trong khi
RSI/MACD chỉ **6 lần · 3/22**, MA **7 · 4/22**. Kết luận cho việc train: dạy Claude nhận diện
VÙNG và MẪU HÌNH trên OHLC thô + volume, ưu tiên khung tuần; đừng phí công vào indicator.

### 7. Kèo cụ thể + quản trị vị thế
Mọi nhận định kết thúc bằng lệnh: vùng vào / mục tiêu / dừng lỗ / tỉ trọng / thời hạn.
Cấu trúc quản trị đo được:
- **Chia lệnh từng phần** (1/3, 1/2, "túc tắc"): 15 lần · 11/22. Không bao giờ all-in.
- **Chốt lời (70 lần) được nói nhiều GẤP ĐÔI cắt lỗ (38)** — bảo vệ thành quả là ưu tiên số 1.
- **Tiền mặt là một vị thế**: 22 lần · 14/22 ("tiền 60/cổ 40").
- **Trần tỉ trọng**: nhóm đạm ≤30% danh mục, vàng ≥30% danh mục toàn cầu.
- ★ **Khung thời gian NHỊ PHÂN** (phát hiện bổ sung): "dài hạn/tích sản" 107 lần · 19/22,
  "lướt/ngắn hạn" 55 · 13/22, còn "trung hạn" xuất hiện đúng **1 lần trong 22 video**.
  Ông chia tiền làm đúng 2 túi: túi tích sản nằm im nhiều năm, và túi lướt có kỷ luật thoát
  ngay. Không có khoảng giữa — "trung hạn" với ông là vùng chết dễ kẹt hàng.

### 8. ★ Meta-game uy tín & truyền đạt (phát hiện bổ sung)
- **Tự tham chiếu track record**: "như tôi đã nói / tập trước / tôi đã cảnh báo" **133 lần
  · 19/22** — mỗi video đều tự neo vào lịch sử call của chính mình để xây uy tín.
- **Thừa nhận suy đoán**: "tôi đoán / chưa chắc / tôi nghĩ là" 44 lần · 16/22 — phân biệt rõ
  suy đoán với dữ kiện NGAY TRONG LÚC NÓI.
- **Nhưng gần như không bao giờ nói thẳng "tôi sai"**: đúng 1 lần/22 video. Scorecard xác nhận
  hành vi thay thế: **dời mốc** (FPT thoát 77–78 → nâng lên 85–90) thay vì đóng call sai.
- **Ví von/ẩn dụ 179 lần · 22/22 video** — phủ sóng 100%: "mùa đông", "banana", "phân bốc mùi",
  "xì hơi chứ không vỡ". Văn phong là một phần của phương pháp, không phải trang trí: ẩn dụ
  giúp người nghe NHỚ khung kịch bản.
- **Q&A hội viên 56 lần · 18/22** — cộng đồng là radar sentiment ("gần như không ai hỏi mã nào"
  = phiên chán nhất năm = tín hiệu đáy).

---

## II. CHẾ ĐỘ ĂN THÔNG TIN (information diet)

**Dữ liệu tự đọc (primary):** giá + volume mọi thị trường, lợi suất trái phiếu Mỹ (10Y/30Y),
DXY, tỷ giá USD/VND, margin toàn thị trường/vốn hóa, Buffett indicator + CAPE (12 lần · 8/22),
chênh lệch vàng trong nước–thế giới, thanh khoản HOSE, sở hữu & giao dịch ròng khối ngoại,
lịch IPO/phát hành (SpaceX, Google, SK Hynix...), FDIC quarterly (lỗ trạng thái trái phiếu bank Mỹ).

**Trích dẫn tổ chức:** report các bank lớn — Goldman, JP Morgan, BofA (23 lần · 9/22).
Gần như KHÔNG dẫn báo chí tài chính (Bloomberg đúng 1 lần) → ưu tiên dữ liệu gốc + sell-side
research, không ăn lại tin đã qua chế biến.

**Nhân vật theo dõi:** ít nhắc đích danh; nổi bật là Elon Musk (18 lần · 3/22 — theo dấu các vụ
IPO/thoái vốn rút tiền thật), Jamie Dimon (dự báo đô la mất vị thế). *Caveat đo lường: auto-caption
tiếng Việt phiên âm tên nước ngoài ("Buffett" → "bấp phét"...) nên đếm tên bị sót — thực tế ông
nhắc Buffett indicator, CAPE thường xuyên.*

**Sự kiện lịch:** FOMC, đáo hạn phái sinh, công bố rổ chỉ số (FTSE 21/08), mốc chính sách
(crypto 1/9, thuế 24/07), mùa BCTC.

---

## III. BỘ KỸ NĂNG ĐẦY ĐỦ CẦN BUILD CHO CLAUDE (10 skill)

| # | Skill | Bản chất | Hạ tầng hiện có |
|---|-------|----------|-----------------|
| 1 | Thu thập đa nguồn | Giá/volume, lợi suất, DXY, tỷ giá, khối ngoại, margin, lịch sự kiện, IPO pipeline | VNDirect + Binance API; **thiếu lợi suất/DXY/khối ngoại/độ rộng** |
| 2 | Dịch tin → dòng tiền | Mỗi tin trả lời: tiền thật đi đâu, ai lợi ai thiệt | Chưa có — skill lõi số 1 |
| 3 | Chuỗi liên thị trường | Lợi suất→định giá; DXY→vàng; tỷ giá→khối ngoại→VN | Trang Bối cảnh là phôi thai |
| 4 | Kịch bản hóa | Output = cây kịch bản + xác suất + hành động mỗi nhánh, KHÔNG dự báo điểm | Chưa có — format hóa được ngay |
| 5 | Kỹ thuật vùng giá | Nhận vùng hỗ trợ/kháng cự + mẫu hình trên OHLC thô, khung tuần; bỏ qua indicator | Đã có OHLC VNDirect + Binance |
| 6 | Đọc hành vi giá/volume | Thanh khoản cạn nghĩa gì, breakout thật/giả, điểm số vs độ rộng (73% downtrend) | Thiếu dữ liệu độ rộng |
| 7 | Neo lịch sử | Kho tình huống 2000/2008/2018/2022 để so mẫu hình | Claude có sẵn, cần format |
| 8 | Ra kèo + quản trị vị thế | Entry/target/stop/tỉ trọng/thời hạn; chia 1/3; chốt lời trước tiên; 2 túi thời gian | Format phiếu lệnh Sổ mã đã chuẩn |
| 9 | Văn phong & truyền đạt | Ẩn dụ có chủ đích, tự tham chiếu track record CÓ KIỂM CHỨNG, thừa nhận "tôi đoán" | Corpus 22 transcript làm mẫu |
| 10 | Tự chấm điểm | Call của Claude vào scorecard, chấm hit/miss bình đẳng với 5 chuyên gia | Scorecard 145 dòng đang chạy |

---

## IV. BẪY CẦN TRÁNH KHI HỌC ÔNG (rút từ scorecard)

1. **Dời mốc thay vì nhận sai** — ông nâng mốc thoát FPT 77–78 → 85–90 thay vì đóng call.
   Claude phải chấm bản thân nghiêm hơn hình mẫu: mốc đã tuyên bố là mốc để chấm.
2. **Thuyết âm mưu khó kiểm chứng** — "cú hồi là dàn dựng, công ty phối hợp CTCK + KOLs".
   Dùng như GIẢ THUYẾT có gắn nhãn "đoán", không dùng như dữ kiện.
3. **Vĩ mô đúng, timing sai vẫn chết** — short S&P từ 18/07 trong khi index lập đỉnh suốt
   tháng 8. Tách bạch "luận điểm" (có thể đúng chậm) khỏi "kèo" (có stop, có hạn).
4. **Bias khung người nói** — ông nhìn mọi thứ qua dòng tiền nên hệ thống ăn khớp nội bộ
   rất cao; đối trọng bằng khung khác (Quang Dũng bóc BCTC, AzFin chiết khấu cổ tức) trước
   khi kết luận — đúng mô hình "debate" của Sổ mã.

---

## V. KIẾN TRÚC BỘ NÃO — 3 TẦNG

```
[Agent thu thập]              [Bộ não]                     [Phân tích]              [Vòng học]
 giá/volume VN+US        →    T1: khung lý thuyết      →   Nhận định mù:        →   Video TP mới ra
 lợi suất 10Y/30Y, DXY        (debt cycle, Wyckoff,        Claude viết trước,       ↓
 tỷ giá, khối ngoại ròng      liên thị trường, VN)         dạng CÂY KỊCH BẢN        đối chiếu từng điểm
 margin, độ rộng, lịch    →   T2: thư viện chuỗi       →   + kèo đủ 5 trường    →   trùng gì / lệch gì /
 sự kiện, IPO pipeline        nhân quả trích từ 22         (entry·target·stop·      ông thấy gì mình không
                              transcript (~30-50 mô        tỉ trọng·thời hạn)       ↓
                              hình, gắn kết quả         →  vào scorecard như        lệch vì thiếu DATA
                              scorecard)                   chuyên gia thứ 6         → biết agent cần xây
                          →   T3: dòng sự kiện sống                                 lệch vì thiếu MÔ HÌNH
                              (tin mới chạy qua T2)                                 → bổ sung T2
```

**Nguyên tắc vàng của vòng học:** mỗi độ lệch giữa Claude và Thái Phạm phải được phân loại
thành (a) thiếu dữ liệu → xây thêm agent, (b) thiếu mô hình → bổ sung tầng 2, hoặc (c) Claude
đúng và ông sai → ghi nhận, vì mục tiêu không phải bắt chước kết luận mà học cái khung.
Một Claude giỏi là Claude đôi khi lệch với ông — và đúng.

---

## VI. LỘ TRÌNH ĐỀ XUẤT

1. **Ngay:** khảo cổ 22 transcript → dựng `brain/thai-pham-mental-models.md` (thư viện ~30–50
   chuỗi nhân quả, gắn ngày dùng + kết quả scorecard). Tầng 2 phiên bản 1.
2. **Kế tiếp:** thêm bước "nhận định mù" vào pipeline `hd update` — Claude viết nhận định
   dạng cây kịch bản TRƯỚC khi đọc transcript mới, lưu `brain/claude_calls.md` có đóng dấu
   thời gian; call vào scorecard.
3. **Sau đó:** xây dần agent dữ liệu theo thứ tự lỗ hổng lộ ra từ các lần lệch — dự kiến
   trước tiên là lợi suất trái phiếu Mỹ + giao dịch ròng khối ngoại + độ rộng thị trường VN.
4. **Dài hạn:** tầng 3 — dòng tin chính trị/chính sách tự động chạy qua thư viện mô hình.
