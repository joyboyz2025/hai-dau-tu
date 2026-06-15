# Handoff: Hải Đầu Tư cùng các Chuyên Gia

Web app nội bộ (chỉ dành cho người thân) tổng hợp **nhận định đầu tư theo từng chuyên gia**, dữ liệu lấy tự động từ YouTube (video công khai, transcript hội viên, post cộng đồng) và được AI tóm tắt thành dạng có cấu trúc.

## Về các file thiết kế trong gói này

File `Hai Dau Tu.dc.html` (+ `support.js`) là **bản thiết kế tham chiếu viết bằng HTML** — prototype thể hiện đúng giao diện và hành vi mong muốn, **không phải production code để copy nguyên xi**. Nhiệm vụ của Claude Code là **tái tạo thiết kế này trong môi trường codebase thật** (Next.js/React, Vue, hoặc framework phù hợp nếu repo chưa có gì — khuyến nghị Next.js + Tailwind cho dễ deploy tĩnh qua GitHub) theo đúng pattern của codebase.

## Độ hoàn thiện (Fidelity)

**High-fidelity.** Màu, font, cỡ chữ, spacing, bo góc, copy đều là quyết định cuối. Hãy tái tạo pixel-perfect bằng thư viện sẵn có của codebase. Mọi giá trị chính xác liệt kê ở mục *Design Tokens*.

---

## Kiến trúc nội dung (QUAN TRỌNG NHẤT)

Toàn bộ giao diện là **data-driven**. Khi triển khai thật, tách dữ liệu khỏi UI:

```
data/
  experts.json                      # danh sách chuyên gia
  experts/thai-pham/
    updates/2026-06-12.json         # mỗi bản cập nhật = 1 file theo schema
    updates/2026-06-08.json
    updates/2026-06-01.json
```

UI đọc data và render. **Cập nhật nội dung định kỳ = chỉ thêm file JSON mới, không sửa UI.** Schema chi tiết trong `data-schema.json`, quy trình cập nhật trong `CLAUDE.md` (bỏ file này vào root repo).

---

## Màn hình (5 screens)

### 1. Đăng nhập (`login`)
- **Mục đích**: 1 mã passcode chung cho cả nhà. Khi làm thật: so khớp mã (hash) lưu config; lưu trạng thái vào localStorage (`hdt_auth`).
- **Layout**: full-viewport, center cả 2 chiều; nền `linear-gradient(180deg, #F5F5F2 0%, #ECEDEA 100%)`. Khối rộng max 400px.
- **Components**:
  - Logo: ô 56×56, radius 16, nền brand, chữ "H" trắng 26px/800.
  - Tên app 22px/700, tagline 13px màu phụ.
  - Card trắng radius 16, padding 28, border `#E7E6E1`, shadow `0 1px 3px rgba(20,20,15,0.05)`.
  - Label "Mã truy cập" 15px/600 + mô tả 13px.
  - Input passcode: padding 14×16, radius 10, border `#DDDCD5`, nền `#FBFBF9`, font IBM Plex Mono 20px, letter-spacing 6px, text-align center, type=password, inputmode=numeric.
  - Lỗi sai mã: text 13px màu đỏ `oklch(0.52 0.16 27)`, căn giữa.
  - Button full-width: padding 14, radius 10, nền brand, chữ trắng 15px/600; hover đậm hơn (`oklch(0.36 0.08 235)`).
  - Hỗ trợ nhấn Enter để submit.

### 2. Header (chung mọi màn sau đăng nhập)
- Trắng, border-bottom `#E7E6E1`, sticky top, z-50. Container max 1180px, padding ngang 20, min-height 60, flex + wrap.
- Logo 32×32 radius 9 + tên 2 dòng (15px/700 và 10.5px màu nhạt). Click logo → Tổng quan.
- Nav 4 tab: **Tổng quan · Chuyên gia · Lịch sử · Quản lý**. Tab: padding 8×14, radius 9, 13.5px. Active: nền `oklch(0.95 0.02 235)`, chữ brand, weight 700. Inactive: trong suốt, chữ `#6E6D66`, weight 500.
- Bên phải: ngày hôm nay (IBM Plex Mono 12px `#9B9A92`) + nút "Đăng xuất" (13px, border `#E7E6E1`, radius 9, hover nền `#F5F5F2`).

### 3. Tổng quan (`dashboard`) — container max 1180px
1. **Tiêu đề** "Tổng quan thị trường" 24px/700, letter-spacing −0.4px + mô tả 13.5px. Bên phải: pill trắng border, chấm xanh lá 8px + "Cập nhật mới nhất: `<ngày · x giờ trước>`" (giá trị mono).
2. **Pulse strip**: hàng chip flex-wrap, mỗi chip = card trắng radius 10 padding 9×14: tên tài sản 13px/600 + tín hiệu mono 12px/700 có màu (↓ Giảm đỏ, ⚠ amber, ◷ xám, — xám nhạt). 7 chip: CK Mỹ, CK Việt, Vàng, Bạc, Bitcoin, Tỷ giá, BĐS.
3. **Lưới thẻ tài sản**: `grid auto-fit minmax(310px, 1fr)`, gap 14. Mỗi thẻ (radius 14, padding 20, shadow nhẹ): tên 15.5px/700 + badge tín hiệu (pill 11.5px/700, màu theo bảng tín hiệu) → tóm tắt 13.5px `#46453F` line-height 1.55 → dòng "vùng giá" mono 12px trên nền `#F7F7F4` radius 8 padding 8×10 → footer (border-top `#F0EFEA`): avatar chuyên gia 22px + tên 12px, bên phải ngày mono 11.5px.
4. **Mục "Chuyên gia"**: heading 18px/700, link "+ Thêm chuyên gia" (brand, 13px/600) → Quản lý. Lưới `minmax(320px,1fr)`. Thẻ chuyên gia: avatar tròn 46px (nền brand, chữ tắt trắng), tên 15.5px/700, nguồn 12px, pill "x giờ trước" xanh lá; tóm tắt 13px; hàng chip tín hiệu nhỏ (11px/700, pill màu); button outline brand full-width "Xem nhận định đầy đủ →". Chuyên gia mới thêm chưa có dữ liệu: card border-dashed `#D8D7D0`, avatar xám, pill "Chờ dữ liệu".
5. Footer disclaimer 12px `#9B9A92` căn giữa.

### 4. Chuyên gia (`expert`) — container max 1080px — MÀN TRUNG TÂM
1. Link "← Tổng quan" 13px.
2. **Header card** (radius 16, padding 26, flex wrap, 2 cụm):
   - Trái (flex 1.4): avatar 80px tròn nền brand chữ 30px/700; tên 23px/700 + pill trạng thái "Đang theo dõi" (xanh lá); bio 13px max-width 460px; hàng chip nguồn (▶ YouTube hội viên, ✎ Post cộng đồng, Tần suất: hàng tuần — pill `#EFEEE9`/`#5F5E57`); dòng "Cập nhật `<ngày · x giờ trước>` · nguồn mới nhất: …".
   - Phải (flex 1, min 250px): **gauge tiền–hàng**: label 12.5px/600 + badge "Thận trọng" (amber); thanh 14px radius 999 chia 2 đoạn (tiền = brand, cổ phiếu = `oklch(0.85 0.04 85)`); chú thích 2 đầu mono 12px, `white-space:nowrap`.
3. **Tabs bản cập nhật**: hàng chip 2 dòng (ngày mono 13px/700 + nhãn 11px), padding 9×16, radius 12, border 1.5px. Active: border + chữ brand, nền `oklch(0.95 0.02 235)`. Click tab → đổi toàn bộ nội dung bên dưới (key calls + sections).
4. **Dòng tiêu đề bản đang xem**: pill loại nguồn (Post = nền brand-light/chữ brand; Video = nền đỏ-light/chữ đỏ) + tiêu đề 14.5px/700.
5. **Quan điểm chính (key calls)**: grid `minmax(220px,1fr)` gap 12; thẻ radius 14 padding 16×18, **border-top 3px màu accent**; tag 11px/700 uppercase `#9B9A92` → giá trị IBM Plex Mono 17px/700 màu accent → ghi chú 12.5px.
6. **Các mục nhận định (sections)** — render từ data, mỗi section là card radius 16 padding 24:
   - Header: tiêu đề 16.5px/700 + badge tín hiệu pill.
   - Đoạn văn 13.5px `#46453F` lh 1.6 (nếu có `para`).
   - Bullets: chấm tròn 6px brand + text 13.5px (nếu có `bullets`).
   - **Bảng mã** (nếu có `tickers`): khung border `#F0EFEA` radius 12 **`overflow-x:auto`**, hàng grid `110px 105px 150px 1fr` gap 10 padding 12×16 **`min-width:560px`** (mobile cuộn ngang). Header row nền `#F7F7F4`, 11px/700 uppercase `#9B9A92`: Mã / Hành động / Vùng giá / Ghi chú. Cột Mã + Vùng giá dùng mono; Hành động là pill màu (bảng màu bên dưới).
   - Dòng "vùng giá" mono nền `#F7F7F4` (nếu có `levels`).
7. **"Nội dung gốc đã tổng hợp"**: card chứa list; mỗi hàng: icon ô 38×38 radius 10 (▶ đỏ-light / ✎ brand-light), tiêu đề 13.5px/600 + meta 12px, ngày mono, pill "✓ Đã tổng hợp" xanh lá. Link "Xem toàn bộ lịch sử →".
8. Disclaimer 12px.

### 5. Lịch sử (`history`) — container max 880px
Timeline dọc: cột trái = chấm tròn 12px border 3px brand + đường kẻ 2px `#E7E6E1`; phải = card radius 14 padding 20: ngày mono brand 13px/600 + pill loại nguồn + (phải) avatar 20px + tên; tiêu đề 15px/700; tóm tắt 13px lh 1.6.

### 6. Quản lý (`admin`) — container max 880px
1. **Card "Đang theo dõi"**: header strip nền `#F7F7F4` 11px uppercase; mỗi hàng: avatar 40px, tên 14.5px/700, nguồn 12px, "Quét: khi có nội dung mới" mono 12px, pill trạng thái (Hoạt động = xanh lá / Chờ dữ liệu = xám).
2. **Card "Thêm chuyên gia mới"**: 2 input (Tên — Be Vietnam Pro; Kênh YouTube — mono), style như input login nhưng 14px/padding 11×14; chọn "Nguồn nội dung" bằng 3 chip radio (Video công khai / Transcript hội viên / Post cộng đồng) — chip active: border + chữ brand, nền brand-light; button brand "Thêm chuyên gia" + ghi chú 12.5px. Thêm xong: xuất hiện ngay trong list + dashboard (trạng thái "Chờ dữ liệu"), clear form.

---

## Interactions & Behavior
- Điều hướng SPA theo state `screen` (login/dashboard/expert/history/admin); mỗi lần chuyển màn `scrollTo(0,0)`.
- Đăng nhập: mã ≥ 4 ký tự (demo). Thật: passcode trong env/config. Lưu `hdt_auth` localStorage; Đăng xuất đặt lại.
- Tab bản cập nhật trang chuyên gia: state `updIdx`, click đổi ngay không reload.
- Hover: button brand đậm hơn; nút phụ nền `#F5F5F2`; cursor pointer cho mọi phần tử click được.
- Responsive: grid `auto-fit minmax(...)` cho mọi lưới thẻ; header flex-wrap; **bảng mã cuộn ngang trên mobile** (wrapper `overflow-x:auto`, hàng `min-width:560px`). Không có breakpoint cứng.
- Không có animation trang trí; chuyển màn tức thì.

## State Management
| State | Kiểu | Vai trò |
|---|---|---|
| `logged` | boolean | đã đăng nhập (sync localStorage `hdt_auth`) |
| `screen` | 'login'\|'dashboard'\|'expert'\|'history'\|'admin' | màn hiện tại |
| `updIdx` | number | tab bản cập nhật đang xem ở trang chuyên gia |
| `pwError` | boolean | lỗi mã đăng nhập |
| `srcType` | number | chip nguồn đang chọn ở form thêm chuyên gia |
| `added` | Expert[] | chuyên gia thêm tại runtime (thật: ghi vào data) |

Dữ liệu fetch từ `data/` (build-time hoặc fetch JSON tĩnh — site host GitHub Pages/Vercel là đủ).

## Design Tokens

**Màu nền & chữ**
| Token | Giá trị |
|---|---|
| Nền trang | `#F5F5F2` (gradient login: → `#ECEDEA`) |
| Card | `#FFFFFF`, border `#E7E6E1`, border trong bảng/list `#F0EFEA` |
| Nền phụ (header bảng, ô levels) | `#F7F7F4` |
| Chữ chính | `#21211D` · thân bài `#46453F` · phụ `#6E6D66` · nhạt `#9B9A92` |
| Input | border `#DDDCD5`, nền `#FBFBF9`, placeholder `#A3A29A` |
| Chip trung tính | nền `#EFEEE9`, chữ `#5F5E57` |

**Màu vai trò (semantic)**
| Vai trò | Chữ/đậm | Nền nhạt |
|---|---|---|
| Brand (chủ đạo) | `oklch(0.42 0.08 235)` (hover `oklch(0.36 0.08 235)`) | `oklch(0.95 0.02 235)` |
| Giảm / Bán / rủi ro | `oklch(0.46 0.15 27)` (accent đậm `oklch(0.5 0.16 27)`) | `oklch(0.95 0.04 27)` |
| Thận trọng / cảnh báo | `oklch(0.5 0.1 70)` (accent `oklch(0.55 0.11 70)`) | `oklch(0.96 0.05 85)` |
| Tăng / hoạt động / OK | `oklch(0.42 0.1 150)` (chấm `oklch(0.52 0.12 150)`) | `oklch(0.95 0.04 150)` |
| Pill hành động Giữ | chữ `oklch(0.4 0.08 235)` | `oklch(0.95 0.02 235)` |
| Pill hành động Tránh | chữ `oklch(0.45 0.08 27)` | `#F1E9E7` |
| Gauge cổ phiếu | `oklch(0.85 0.04 85)` | — |

**Typography** — Google Fonts
- `Be Vietnam Pro` (400/500/600/700/800): toàn bộ UI.
- `IBM Plex Mono` (400/500/600): mã cổ phiếu, vùng giá, ngày giờ, số liệu, giá trị key-call.
- Thang cỡ: 10.5 / 11 / 11.5 / 12 / 12.5 / 13 / 13.5 / 14 / 14.5 / 15 / 15.5 / 16.5 / 17 / 18 / 21 / 22 / 23 / 24px. Heading lớn letter-spacing −0.3…−0.4px. Pill/label 11px thường 700 + uppercase + letter-spacing 0.5px.

**Spacing & hình khối**
- Radius: card lớn 16 · card vừa 14 · khung bảng/tab 12 · button/input 10 · nav/icon 9 · pill 999.
- Padding card: 20–28. Gap lưới: 12–14. Container: 1180 (dashboard) / 1080 (expert) / 880 (history, admin), padding ngang 20.
- Shadow card: `0 1px 2px rgba(20,20,15,0.04)`.
- Avatar: 80 (hero) / 46 / 40 / 22 / 20px — tròn, nền brand, chữ tắt trắng, weight 700.

## Assets
Không có ảnh bitmap/icon ngoài. Avatar = chữ tắt trên nền màu. Ký hiệu dùng text unicode: ↓ ⚠ ◷ — ▶ ✎ ✓ ←  →. Khi làm thật có thể thay bằng icon set của codebase (lucide…) giữ nguyên ngữ nghĩa.

## Files trong gói
| File | Nội dung |
|---|---|
| `Hai Dau Tu.dc.html` | Bản thiết kế tham chiếu đầy đủ 5 màn (mở trực tiếp bằng browser, cần `support.js` cạnh nó) |
| `support.js` | Runtime cho file thiết kế (chỉ để xem, không dùng production) |
| `data-schema.json` | Schema + ví dụ đầy đủ 1 bản cập nhật (nguồn sự thật cho cấu trúc dữ liệu) |
| `CLAUDE.md` | Bỏ vào root repo — hướng dẫn Claude Code tự cập nhật nội dung từ transcript |
