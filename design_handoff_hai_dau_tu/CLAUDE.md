# CLAUDE.md — Hải Đầu Tư cùng các Chuyên Gia

Web app nội bộ cho gia đình: tổng hợp nhận định đầu tư theo từng chuyên gia từ YouTube (video công khai / transcript hội viên / post cộng đồng).

**Nguyên tắc số 1: UI là cố định, nội dung là dữ liệu.** Mọi cập nhật định kỳ chỉ được thêm/sửa file trong `data/` — KHÔNG sửa component, style, layout trừ khi được yêu cầu rõ ràng. Spec giao diện đầy đủ ở `design_handoff_hai_dau_tu/README.md`; schema dữ liệu ở `design_handoff_hai_dau_tu/data-schema.json`.

## Cấu trúc dữ liệu

```
data/
  experts.json                          # danh sách chuyên gia
  experts/<expert-id>/updates/<YYYY-MM-DD>.json   # mỗi bản cập nhật 1 file
```

- `expert-id`: slug không dấu, vd `thai-pham`.
- Mỗi video/post mới của chuyên gia = 1 file update mới theo schema trong `data-schema.json`. Không sửa file update cũ (chúng là lịch sử).

## Nhiệm vụ định kỳ: "Cập nhật nhận định từ transcript"

Khi được giao transcript/post mới (file đính kèm hoặc dán trực tiếp), thực hiện:

1. **Xác định metadata**: chuyên gia, ngày đăng, loại nguồn (`video` | `post`), tiêu đề gốc (giữ nguyên văn, lược "(45)" và "- YouTube").
2. **Đọc toàn bộ transcript** và trích xuất theo schema thành file `data/experts/<id>/updates/<YYYY-MM-DD>.json`:
   - `keyCalls` (3–4 thẻ): những con số/quan điểm quan trọng nhất, `value` phải NGẮN và đắt (vd "Black Monday?", "50% tiền mặt", "3.900–4.000", "test ~50k").
   - `sections`: chia theo lớp tài sản đúng thứ tự transcript đề cập. Tiêu đề chuẩn: "Bối cảnh vĩ mô & địa chính trị", "Chứng khoán Mỹ", "Chứng khoán Việt Nam", "Vĩ mô Việt Nam", "Vàng & Bạc", "Bitcoin & Crypto", "Tỷ giá & Vĩ mô Việt Nam", "Bất động sản". Chỉ tạo section cho chủ đề transcript THỰC SỰ nói đến.
   - Mỗi khuyến nghị mã cụ thể → 1 dòng `tickers` với `action` ∈ `Mua | Bán | Giữ | Giữ ½ | Theo dõi | Tránh | Trung lập | Chờ mua` (đừng bịa thêm loại mới), `zone` = vùng giá nếu chuyên gia nêu (để "—" nếu không), `note` ≤ 1 câu.
3. **Văn phong tóm tắt**: trung tính, cô đọng kiểu bản tin. Bỏ khẩu ngữ, câu đệm, quảng cáo link sàn. GIỮ nguyên: con số, vùng giá, tên thuật ngữ riêng của chuyên gia (vd nền "banana", hiệu ứng "bà ngoại Hàn Quốc") trong ngoặc kép. Không thêm nhận định không có trong nguồn. Mọi số liệu phải truy được về transcript.
4. **Cập nhật phần tổng hợp** (dashboard) — file `data/experts.json` hoặc nơi app tổng hợp:
   - `assetCards` + `pulse`: cập nhật tín hiệu và tóm tắt cho các tài sản mà bản update mới có đề cập; tài sản không nhắc đến giữ nguyên (kèm ngày cũ).
   - `updatedAt` của chuyên gia = ngày bản mới.
5. **Tín hiệu (signal)**: chỉ dùng `down` (Giảm/Bán — đỏ), `warn` (Thận trọng/Áp lực — vàng), `wait` (Chờ mua/Đứng ngoài/Trung lập — xám), `up` (Tăng — xanh). Suy ra từ giọng tổng thể của chuyên gia về tài sản đó.
6. **Kiểm tra trước khi commit**: JSON hợp lệ theo schema; ngày đúng định dạng; build/preview chạy không lỗi; trang chuyên gia hiện tab mới ở vị trí đầu (sort giảm dần theo ngày); lịch sử có thêm dòng mới.
7. Commit message: `content: <expert-id> <YYYY-MM-DD> (<loại nguồn>)`.

## Thêm chuyên gia mới

Thêm entry vào `data/experts.json`: `{ id, name, initials, channel, sources: [...], active: true }`. Chuyên gia chưa có update nào → UI tự hiện trạng thái "Chờ dữ liệu" (card border-dashed). Không cần sửa UI.

## Quy tắc giao diện (khi ĐƯỢC yêu cầu sửa UI)

- Tuân thủ design tokens trong `design_handoff_hai_dau_tu/README.md` (màu oklch, Be Vietnam Pro + IBM Plex Mono, radius, bảng màu pill hành động/tín hiệu).
- Bảng mã trên mobile: wrapper `overflow-x:auto`, hàng `min-width:560px` — đừng phá pattern này.
- Không thêm emoji, gradient trang trí, hay font khác.
- Disclaimer "chỉ mang tính tham khảo, không phải khuyến nghị đầu tư" phải luôn hiện ở dashboard và trang chuyên gia.

## Bảo mật tối thiểu

- Passcode không hardcode trong client: dùng env var + hash, hoặc middleware/edge function nếu host hỗ trợ. localStorage key: `hdt_auth`.
- Repo nên để private (nội dung hội viên trả phí — không công khai transcript gốc; chỉ lưu bản tóm tắt).
