# Sổ nhận định mù của Claude

> **Mục đích:** Claude tự ra nhận định TRƯỚC khi xem nội dung mới của các chuyên gia, rồi đối chiếu
> sau — vòng lặp học của bộ não (xem brain/phuong-phap-thai-pham.md phần V).
> **Quy ước bất di bất dịch:**
> 1. Mỗi nhận định viết TRƯỚC khi đọc/xem bất kỳ nội dung mới nào của 5 kênh — ghi rõ mốc "mù từ ngày".
> 2. Kèo đủ 5 trường: vào / mục tiêu / dừng / tỉ trọng giả định / HẠN DÙNG. Không kèo suông.
> 3. Dạng cây kịch bản có xác suất, không dự báo điểm (mô hình I1).
> 4. **Dời mốc = tự chấm MISS kèo cũ trước rồi mới mở kèo mới** (nghiêm hơn hình mẫu — sửa điểm yếu I2).
> 5. Chấm điểm tại đây, KHÔNG đưa vào scorecard trên web cho đến khi thành tích đủ tin cậy.
> 6. Mỗi entry kèm snapshot dữ liệu từ 4 công cụ (fetch_macro / fetch_vn_market / detect_zones / fetch_polymarket) — nhận định phải truy được về số liệu.
> 7. Khi đối chiếu: mỗi độ lệch phân loại (a) thiếu DỮ LIỆU → build thêm công cụ, (b) thiếu MÔ HÌNH → bổ sung thư viện, (c) Claude đúng chuyên gia sai → ghi nhận.

## Bảng theo dõi kèo

| ID | Ngày | Tài sản | Kèo tóm tắt | Hạn | Trạng thái |
|---|---|---|---|---|---|
| C1-01 | 20/08 | Vàng | Không đuổi 4.550; chờ mua 4.430–4.460, stop 4.340, target 4.765 | 15/10 | ĐANG MỞ |
| C1-02 | 20/08 | CK Mỹ | Chỉnh ≥8% từ đỉnh 7.817 trước 15/10 (60%) | 15/10 | ĐANG MỞ |
| C1-03 | 20/08 | Dầu WTI | Đóng cửa các tuần tới trong 80–92 (70%) | 31/10 | ĐANG MỞ |
| C1-04 | 20/08 | VN-Index | Dập dình 1.700–1.780 (45%) / thủng 1.700 test 1.635–1.687 (30%) / vượt 1.800 (25%) | 30/09 | ĐANG MỞ |
| C1-05 | 20/08 | FPT | Ngoại mua ròng ≥3/5 phiên tới → test 75–77,7; ngược lại kẹt dưới 74 | 29/08 | ĐANG MỞ |
| C1-06 | 20/08 | GAS | Giữ trên 80 → chạy nhanh trong "vùng chân không" 83→90 (55%) | 19/09 | ĐANG MỞ |
| C1-07 | 20/08 | Fed | Họp 15–16/9 giữ nguyên lãi suất (70%) | 16/09 | ĐANG MỞ |
| C1-08 | 20/08 | FTSE rổ VN | Phiên 21–25/08 có kéo rồi xả quanh tin, index không giữ được trọn nhịp tăng | 26/08 | ĐANG MỞ |

---

## Nhận định mù #1 — 2026-08-20 (thứ Năm, sau phiên)

**Mù từ:** sau video Thái Phạm 19/08 (debt buyback) — đã xem trong đợt update 19/08. CHƯA xem bất kỳ
nội dung nào của 5 kênh phát sau thời điểm đó. Video nhịp đập tuần + tập hội viên của TP dự kiến ra
22–24/08 → entry này sẽ được chấm khi đối chiếu.

### Snapshot dữ liệu (20/08)

- **Lợi suất Mỹ:** 10Y 4,71% · 30Y 5,28% (trên mốc 5,2 "định giá lại") · chênh 30−10 = 0,57đ (dốc — trái chủ đòi premium kỳ hạn)
- **DXY 98,76** (−2,4%/tháng — đô yếu đi song song vàng tăng) · USD/VND 26.179 (+0,4%/tuần)
- **Vàng 4.551** (+4,3%/tuần, +11,8%/tháng — đang NGAY TẠI cụm kháng cự 4.556–4.592; kháng cự kế 4.765–4.880; hỗ trợ 4.465–4.513 rồi 4.285–4.400)
- **Dầu:** WTI 84,84 (uptrend, band 78–90) · Brent 92,16
- **S&P 500: 7.708**, cách đỉnh 52w 7.817 đúng 1,4%, cụm kháng cự kép 7.794–7.817 (2 lần chạm — đúng vùng TP giữ short)
- **VN-Index 1.736** — trung tính; kháng cự 1.772–1.814 (6 lần chạm), hỗ trợ 1.635–1.687 (6 lần); spring 16/07 còn hiệu lực cấu trúc
- **Độ rộng HOSE:** 60,7% downtrend, chỉ 25,7% trên MA200 (382 mã) — "điểm số là mặt nạ" vẫn nguyên
- **Khối ngoại:** bán ròng 9/10 phiên, lũy kế −2.878 tỷ/15 phiên; hôm nay −416 tỷ; NHƯNG mua ròng FPT +28 tỷ, VNM +32, PNJ +27; bán mạnh VPB/VIX/VIC/SSI
- **Polymarket:** Fed T9 giữ nguyên 72,5% / tăng 26,5%; "không cắt cả 2026" 85,7%; "có tăng trong 2026" 49,5% — coin flip

### 1. Vĩ mô Mỹ — khung chính (A2, A3)

Debt buyback 19/08 là bước "xóa ván" mà mô hình A2 dự từ Tập 42: không tăng được (lãi nợ = 1/5 thu
thuế), không hạ được (lạm phát + chủ nợ), nên đảo nợ. Hệ quả cơ học: phát hành thêm tín phiếu ngắn để
mua trái phiếu dài → đường cong DỐC THÊM (chênh 30−10 đang 0,57 và có cửa rộng ra). DXY −2,4%/tháng
+ vàng +11,8% = thị trường đang định giá "Fed bị ép nới / mất uy tín" chứ không phải định giá tăng lãi.
- **Kèo C1-07:** Fed 15–16/9 giữ nguyên: **70%** (Polymarket 72,5% — tôi không có lý do lệch); tăng 25bps: 25%; cắt: 5%.
- Cờ hiệu theo dõi: 30Y vượt **5,40%** → kích hoạt kịch bản CK Mỹ gãy mạnh (nâng C1-02 lên 75%).

### 2. Vàng — cùng hướng TP nhưng khác nhịp (G1, G6, #18)

Vàng đang NGAY TẠI kháng cự 4.556–4.592 sau khi chạy 11,8%/tháng và tin buyback ĐÃ RA (mô hình #18
"giá phản ánh hết kỳ vọng" + G6 "đỉnh/đáy đi trước tin"). Mua đuổi ở đây vi phạm G1.
- **Kèo C1-01:** không đuổi; đặt mua **4.430–4.460** (test lại cụm 4.465–4.513 và mép trên vùng
  4.400), stop 4.340 (thủng mốc mua 1/3 của kèo cộng đồng = cấu trúc hỏng), target 4.765 (mép dưới
  cụm kháng cự lớn), tỉ trọng giả định 1/3 vị thế vàng, hạn 15/10.
- Cây kịch bản: chạm 4.765 trước khi chạm 4.340: **55%** · đi ngang 4.400–4.600: 30% · sập <4.340: 15%.
- Lệch với TP: ông nhắm 5.300–5.600; tôi cùng hướng dài hạn nhưng cho rằng cần một nhịp nghỉ trước —
  nếu vàng KHÔNG hề nghỉ mà xuyên thẳng 4.765 trong 1–2 tuần thì tôi sai ở khoản "tôn trọng đà" (ghi sẵn).

### 3. Dầu — giữ nguyên mô hình sàn cứng (B2, B3)

SPR Mỹ vẫn cạn, hai eo biển vẫn là nút thắt — sàn cứng còn nguyên; trần là cầu bị giá cao bào mòn +
Trump cần dầu hạ trước bầu cử (C2 kéo xuống, B1 đẩy lên → kẹt trong band).
- **Kèo C1-03:** WTI đóng các tuần tới trong **80–92: 70%**; vọt >100 (leo thang lớn): 20%; thủng <78: 10%. Hạn 31/10.

### 4. CK Mỹ — hai lực ngược chiều (D1/D4/C4 vs C2)

Lực xuống: IPO đã hút xong tiền thật, margin/vốn hóa ngang đỉnh 2018, seasonality midterm (giảm
17–21% sau tháng 7), 30Y > 5,2% ép định giá. Lực lên: Trump cần chỉ số đẹp tới T11 → kéo trụ thay
phiên (E6). Tổng hợp: không sập thẳng — **lình xình phân phối rồi gãy một nhịp đáng kể**.
- **Kèo C1-02:** S&P chỉnh **≥8% từ 7.817** (tức ≤7.190) trước 15/10: **60%** · đi ngang 7.400–7.800: 30% · vượt 8.000: 10%.
- Không mở kèo short cụ thể: giá đang giữa range, không có mốc vào đặt sẵn hợp G1 (nếu S&P kéo lại
  7.790–7.817 lần ba mà không vượt → đó mới là điểm short có cấu trúc).

### 5. VN-Index & dòng tiền — thận trọng hơn Thái Phạm hiện tại (F2, F3, G6)

Độ rộng 60,7% downtrend + ngoại bán 15 phiên liên tiếp gần −2.900 tỷ + index bị VIC/VHM chi phối =
chưa có nền cho sóng thật. Ngày mai (21/08) FTSE công bố rổ ~27 mã: mô hình "nâng hạng = mua trước
kéo xả" (E7/G6) → kỳ vọng có nhịp kéo quanh tin rồi trả lại.
- **Kèo C1-04:** đến 30/09: dập dình **1.700–1.780: 45%** · thủng 1.700 test 1.635–1.687: 30% · vượt 1.800 bền: 25%.
- **Kèo C1-08 (FTSE):** phiên 21–25/08 có kéo rồi xả — index KHÔNG giữ được trọn nhịp tăng của ngày tin. Chấm bằng: đóng cửa 26/08 thấp hơn đỉnh cao nhất của cụm phiên 21–25/08 ít nhất 1%.
- Điều kiện đảo quan điểm (viết sẵn): khối ngoại mua ròng **5 phiên liên tiếp** (đo bằng công cụ số 2)
  → tôi bỏ kịch bản thủng 1.700, nghiêng vượt 1.800. LỆCH với TP: ông full cổ phiếu từ 05/08 với thesis
  "không gió ngược đến T11"; tôi giữ mức thận trọng vì độ rộng và dòng ngoại CHƯA xác nhận thesis đó.

### 6. Mã cụ thể

**FPT (tâm điểm debate — C1-05):** Tín hiệu mới mà CHỈ công cụ nhìn thấy: hôm nay ngoại MUA ròng
+28 tỷ — đi ngược chuỗi bán. Một phiên chưa là gì, nhưng đây đúng là biến số mấu chốt của debate
(TP "ngoại còn bán" vs Quang Dũng "định giá rẻ"). Kèo đo được: ngoại mua ròng **≥3/5 phiên** tới
(21–27/08) → FPT test kháng cự 75,2–77,7 (vùng "hồi 77–78 thì bán" của TP), xác suất 40%; ngược lại
kẹt dưới 74. Hạn 29/08. Đây là kèo "đo bằng máy" đầu tiên — công cụ số 2 chấm được từng phiên.

**GAS (C1-06):** 82,9 — ĐÃ đứng trên mốc 80 của kèo cộng đồng. Phát hiện từ máy vùng giá: 83→110 là
"vùng chân không" (không có cụm swing nào cản — vùng rơi nhanh T1–T3 không tạo nền). Nếu giữ được 80
(hỗ trợ 78–79,7 + gap 74,6–76,1 làm lưới đỡ xa), giá có thể chạy nhanh hơn bình thường. Kèo: chạm 90
trước khi thủng 78: **55%**, hạn 19/09.

**STB:** 74,8 sát kháng cự 76,1 + máy flag CỤM ĐỈNH — xác nhận độc lập kèo "vượt 76 chưa chắc chạy"
của CK 5 phút. Không mở kèo riêng, chỉ ghi nhận đồng thuận máy–người.

### Dự đoán nội dung Thái Phạm cuối tuần (đối chiếu tư duy — không phải kèo)

1. Nhấn tiếp debt buyback, tự tham chiếu "tôi nói xóa ván từ trước" (I7) — gần chắc chắn.
2. Khoe call vàng (4.078–4.080 → 4.5xx) và nhắc lại 3 vùng mua bổ sung + đích xa 5.300–5.600 — gần chắc chắn.
3. Bình luận FTSE rổ theo hướng "mua trước kéo xả, đừng đu theo tin" — nhiều khả năng.
4. Danh mục VN: "kế hoạch vẫn vậy", phân bón + bank, không đổi — nhiều khả năng.
5. CK Mỹ: giữ short US500, nhắc lợi suất 30Y và margin — nhiều khả năng.
6. Rủi ro dự đoán sai: ông ĐẢO chiến lược đột ngột lần nữa (như 05/08) — nếu xảy ra, đó là dữ kiện quý về mô hình I2.

### Tự ghi trước điểm yếu của entry này

- Chưa có dữ liệu margin VN/Mỹ cập nhật (công cụ chưa build) — kèo C1-02 dựa số margin tháng 7.
- Kèo vàng "chờ pullback" dễ thành miss kiểu "đứng ngoài nhìn tàu chạy" trong môi trường đà mạnh —
  chấp nhận, vì kỷ luật G1 quan trọng hơn một kèo.
- VN-Index: xác suất 3 nhánh gần nhau (45/30/25) — thú thật là độ tự tin thấp; giá trị chính của kèo
  này là ép tôi theo dõi ĐIỀU KIỆN ĐẢO (ngoại mua 5 phiên) chứ không phải đoán đúng nhánh.

*Đối chiếu & chấm: khi có video nhịp đập tuần / tập hội viên mới (dự kiến 22–24/08) và khi các kèo đáo hạn.*
