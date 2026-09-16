# Bảng điểm tự động — bảng hướng mù của Claude

_Sinh bởi `node score_boards.js --write` ngày 2026-09-16. Sổ cái: `brain/boards.json`. Luật chấm: đầu file `score_boards.js`._

**Mốc so sánh "đà"** = đoán rằng tài sản đi tiếp theo hướng 20 phiên trước ngày viết. Claude chỉ có giá trị khi điểm cao hơn mốc này.

## Tổng

| | Số dòng | Đúng | Nửa | Sai | Điểm (đúng=1, nửa=0,5) |
|---|---|---|---|---|---|
| **Claude** | 37 | 14 | 9 | 14 | **50%** |
| Mốc so sánh "đà" | 37 | 10 | 17 | 10 | **50%** |

Trong đó đã tới hạn chính thức: 0 dòng (các dòng còn lại là chấm TẠM tại giá mới nhất).

## Theo tài sản

| Tài sản | Dòng | Claude | Đà | Chênh |
|---|---|---|---|---|
| BĐS VN | 1 | 100% | 50% | +50 |
| CK Mỹ (S&P) | 4 | 75% | 50% | +25 |
| Thép VN | 2 | 50% | 25% | +25 |
| VN-Index | 4 | 63% | 50% | +13 |
| Phân bón | 4 | 63% | 50% | +13 |
| Lợi suất 30Y | 4 | 100% | 100% | +0 |
| Đường cong 30Y−10Y | 3 | 67% | 67% | +0 |
| DXY | 2 | 0% | 0% | +0 |
| Dầu WTI | 4 | 25% | 25% | +0 |
| Dầu khí VN | 1 | 100% | 100% | +0 |
| Vàng | 3 | 0% | 17% | -17 |
| Bitcoin | 4 | 0% | 50% | -50 |
| Cổ phiếu chứng khoán VN | 1 | 50% | 100% | -50 |

## Bảng #1 — viết 2026-08-20 · chấm TẠM · hạn 2026-09-19

| # | Tài sản | Gọi | Giá viết → giá chấm | Thay đổi | Ngưỡng | Mốc hỏng | Claude | Đà | Chấm tay |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Vàng | ↑ | 4.571 → 4.385 | -4.1% | ±3.6% | — | **SAI** | SAI · ↑ (đà 13.0%) | SAI nhịp (21/08) — hướng lên vẫn đúng |
| 2 | CK Mỹ (S&P) | ↓ | 7.641 → 7.586 | -0.7% | ±1.6% | — | **NỬA** | NỬA · ↑ (đà 3.1%) |  |
| 3 | Công nghệ Mỹ (Nasdaq 100) | THIẾU DỮ LIỆU (chạy lại sau) | — | — | — | — | không tính | — |  |
| 4a | Lợi suất 30Y neo cao | ≥ 5.2 | 5,23 → 5,34 | +0.11đ | ±0.07đ | — | **ĐÚNG** | ĐÚNG · giữ trên mốc |  |
| 4b | Đường cong 30Y−10Y dốc thêm | dốc | 0,54 → 0,37 | -0.17đ | ±0.03đ | — | **SAI** | SAI · dốc (theo đà) | SAI — đường cong phẳng lại (bỏ vế này ở #3) |
| 5 | DXY | ↓ | 98,9 → 99,7 | +0.8% | ±0.7% | — | **SAI** | SAI · ↓ (đà -2.5%) |  |
| 6 | Dầu WTI | ↔ 80–92 | 87,83 → 103,89 | +18.3% | ±7.9% | — | **SAI** | SAI · → (đà -4.7%) |  |
| 7 | Bitcoin | ↓ | 73.033 → 75.920 | +4.0% | ±4.9% | > 72.500 (ngày) **kích hoạt 21/08** | **SAI** | NỬA · ↑ (đà 16.3%) | SAI (21/08) |
| 8 | VN-Index | ↔ 1700–1780 | 1.734 → 1.810 | +4.4% | ±3.0% | — | **NỬA** | NỬA · → (đà 2.1%) | SAI biên (24/08) |
| 10 | Thép VN (HPG·NKG·HSG) | ↓ | 73,711 → 71,329 | -3.2% | ±2.8% | — | **ĐÚNG** | NỬA · → (đà 0.7%) |  |
| 11 | Cổ phiếu chứng khoán VN | ↓ | 94,706 → 93,362 | -1.4% | ±4.9% | — | **NỬA** | ĐÚNG · → (đà -2.0%) |  |
| 12 | BĐS VN (trừ Vin) | ↓ | 69,443 → 66,307 | -4.5% | ±3.8% | — | **ĐÚNG** | NỬA · → (đà -0.1%) |  |
| 13 | Dầu khí VN (GAS·BSR) | ↑ | 158,897 → 176,284 | +10.9% | ±8.6% | — | **ĐÚNG** | ĐÚNG · ↑ (đà 19.9%) |  |
| 14 | Phân bón (DCM·DPM) | → | 105,145 → 111,505 | +6.0% | ±4.9% | — | **NỬA** | NỬA · → (đà 3.8%) |  |
| — | 9 · Ngân hàng VN phân hóa — không có thước đo hướng | | | | | | không chấm | | |

## Bảng #2 — viết 2026-08-24 · chấm TẠM · hạn 2026-09-21

| # | Tài sản | Gọi | Giá viết → giá chấm | Thay đổi | Ngưỡng | Mốc hỏng | Claude | Đà | Chấm tay |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Vàng | ↑ | 4.698 → 4.385 | -6.7% | ±3.6% | — | **SAI** | SAI · ↑ (đà 15.3%) | NỬA — sai nhịp lần hai (28/08) |
| 2 | Bitcoin | ↑ | 78.964 → 75.920 | -3.9% | ±5.1% | < 76.029 (ngày) **kích hoạt 15/09** | **SAI** | NỬA · ↑ (đà 23.3%) |  |
| 3 | VN-Index | ↑ | 1.789 → 1.810 | +1.2% | ±3.0% | < 1.768 (ngày) | **NỬA** | NỬA · ↑ (đà 7.2%) |  |
| 4 | Lợi suất 30Y neo cao | ≥ 5.2 | 5,23 → 5,34 | +0.11đ | ±0.07đ | — | **ĐÚNG** | ĐÚNG · giữ trên mốc |  |
| 5 | DXY | ↓ | 99 → 99,7 | +0.7% | ±0.7% | > 101 (tuần) | **SAI** | SAI · ↓ (đà -2.5%) |  |
| 6 | CK Mỹ (S&P) | →↓ | 7.653 → 7.586 | -0.9% | ±1.6% | — | **ĐÚNG** | NỬA · ↑ (đà 3.2%) |  |
| 7 | Dầu WTI | ↔ 78–90 | 85,01 → 103,89 | +22.2% | ±7.9% | — | **SAI** | SAI · → (đà 2.9%) |  |
| 8 | Phân bón (DCM·DPM) | ↑ | 106,695 → 111,505 | +4.5% | ±4.9% | — | **NỬA** | NỬA · ↑ (đà 7.7%) |  |
| 9 | Thép VN (HPG·NKG·HSG) | → | 77,644 → 71,329 | -8.1% | ±2.8% | — | **SAI** | SAI · ↑ (đà 9.1%) |  |

## Bảng #3 — viết 2026-08-28 · chấm TẠM · hạn 2026-09-25

| # | Tài sản | Gọi | Giá viết → giá chấm | Thay đổi | Ngưỡng | Mốc hỏng | Claude | Đà | Chấm tay |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Vàng | ↑ | 4.530 → 4.385 | -3.2% | ±3.7% | < 4.514 (tuần) **kích hoạt 04/09** | **SAI** | NỬA · ↑ (đà 11.9%) | SAI (30/08) |
| 2 | VN-Index | ↑ | 1.832 → 1.810 | -1.2% | ±3.0% | < 1.788 (ngày) | **NỬA** | NỬA · ↑ (đà 5.6%) |  |
| 3 | Bitcoin | ↑ | 77.830 → 75.920 | -2.5% | ±5.3% | < 76.029 (ngày) **kích hoạt 15/09** | **SAI** | NỬA · ↑ (đà 19.9%) |  |
| 4 | DXY | không gọi | — | — | — | — | không tính | — |  |
| 5a | Lợi suất 30Y neo quanh 5,2% | ≥ 5.1 | 5,22 → 5,34 | +0.12đ | ±0.07đ | — | **ĐÚNG** | ĐÚNG · giữ trên mốc |  |
| 5b | Đường cong 30Y−10Y không dốc thêm | phẳng | 0,49 → 0,37 | -0.12đ | ±0.03đ | — | **ĐÚNG** | ĐÚNG · phẳng (theo đà) |  |
| 6 | CK Mỹ (S&P) | → | 7.712 → 7.586 | -1.6% | ±1.6% | — | **NỬA** | SAI · ↑ (đà 3.0%) |  |
| 7 | Dầu WTI | ↓ | 83,4 → 103,89 | +24.6% | ±7.8% | — | **SAI** | SAI · → (đà -1.5%) | SAI HẲN (08/09) |
| 8 | Phân bón (DCM·DPM) | ↑ | 104,991 → 111,505 | +6.2% | ±4.9% | — | **ĐÚNG** | NỬA · → (đà 0.1%) |  |

## Bảng #4 — viết 2026-09-08 · chấm TẠM · hạn 2026-10-06

| # | Tài sản | Gọi | Giá viết → giá chấm | Thay đổi | Ngưỡng | Mốc hỏng | Claude | Đà | Chấm tay |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Dầu WTI | ↑ | 93,03 → 103,89 | +11.7% | ±7.9% | < 80,56 (tuần) | **ĐÚNG** | ĐÚNG · ↑ (đà 13.3%) |  |
| 2a | Lợi suất 30Y neo cao | ≥ 5.2 | 5,25 → 5,34 | +0.09đ | ±0.07đ | — | **ĐÚNG** | ĐÚNG · giữ trên mốc |  |
| 2b | Đường cong 30Y−10Y phẳng tiếp | phẳng | 0,45 → 0,37 | -0.08đ | ±0.03đ | — | **ĐÚNG** | ĐÚNG · phẳng (theo đà) |  |
| 3 | VN-Index | →↓ | 1.830 → 1.810 | -1.1% | ±2.9% | > 1.853 (ngày) | **ĐÚNG** | NỬA · ↑ (đà 3.7%) |  |
| 4 | Vàng | không gọi | — | — | — | — | không tính | — |  |
| 5 | Bitcoin | ↑ | 78.439 → 75.920 | -3.2% | ±5.9% | < 76.248 (ngày) **kích hoạt 15/09** | **SAI** | NỬA · ↑ (đà 13.2%) | SAI (16/09) — mốc hỏng kích hoạt |
| 6 | DXY | không gọi | — | — | — | — | không tính | — |  |
| 7 | CK Mỹ (S&P) | → | 7.674 → 7.586 | -1.1% | ±1.6% | — | **ĐÚNG** | ĐÚNG · → (đà -1.0%) |  |
| 8 | Phân bón (DCM·DPM) | ↑ | 110,122 → 111,505 | +1.3% | ±4.8% | — | **NỬA** | NỬA · ↑ (đà 6.2%) |  |

## Chấm máy khác chấm tay ở đâu

Máy chấm HƯỚNG tại ngày chấm; sổ tay có lúc chấm NHỊP hoặc chấm sớm theo điều kiện viết bằng lời. Hai cách lệch nhau là bình thường — nhưng từ nay **điểm chính thức là điểm máy**, chấm tay chỉ để giải thích.
