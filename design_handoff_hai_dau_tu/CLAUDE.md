# ⚠️ KIẾN TRÚC TRONG FILE NÀY ĐÃ LỖI THỜI — đọc `../CLAUDE.md`

Bản cũ mô tả cấu trúc `data/experts/*/updates/*.json` — **không còn dùng**.
Hiện tại toàn bộ nội dung nằm trong `data.js` (`window.HDT_DATA`).
**Runbook chính thức: [`../CLAUDE.md`](../CLAUDE.md) (gốc repo).**

Các quy tắc dưới đây KHÔNG lỗi thời — vẫn áp dụng khi dựng nội dung:

## Văn phong tóm tắt
Trung tính, cô đọng kiểu bản tin. Bỏ khẩu ngữ, câu đệm, quảng cáo link sàn. GIỮ nguyên: con số, vùng giá, thuật ngữ riêng của chuyên gia (vd nền "banana", hiệu ứng "bà ngoại Hàn Quốc") trong ngoặc kép. Không thêm nhận định không có trong nguồn. Mọi số liệu phải truy được về transcript.

## Tín hiệu (signal)
Chỉ dùng: `down` (Giảm/Bán — đỏ), `warn` (Thận trọng/Áp lực — vàng), `wait` (Chờ/Đứng ngoài — xám), `up` (Tăng — xanh). Suy từ giọng tổng thể của chuyên gia về tài sản đó.

## Luôn giữ
- Disclaimer "chỉ mang tính tham khảo, không phải khuyến nghị đầu tư" ở dashboard + trang chuyên gia.
- Repo private (nội dung hội viên trả phí — không công khai transcript gốc, chỉ bản tóm tắt).
- Không thêm font mới, gradient trang trí ngoài hệ đã có (Be Vietnam Pro + IBM Plex Mono, oklch).
