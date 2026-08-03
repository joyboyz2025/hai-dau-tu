# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Ứng dụng riêng tư của một gia đình, không phải sản phẩm thương mại.

- **Người dùng chính (chủ sở hữu):** người tự vận hành quy trình cập nhật hàng tuần — tải transcript, dựng dữ liệu, chấm bảng điểm. Mở app **trên cả điện thoại lẫn máy tính**, nên hai chế độ đều là hạng nhất, không phải mobile là bản rút gọn.
- **Người nhà (vợ/chồng, bố mẹ, anh chị em):** cùng xem nhưng **mức hiểu biết tài chính không đồng đều**. Đây là ràng buộc thiết kế: thuật ngữ chuyên ngành (squeeze short, carry trade, call margin, forward guidance, spring, banana) phải luôn có ngữ cảnh đi kèm, và "điều cần làm" phải đọc được mà không cần hiểu hết lý do phía sau.

Không phát hành cho người ngoài gia đình.

## Product Purpose

Tổng hợp nhận định đầu tư từ YouTube của 4 chuyên gia Việt Nam thành một nguồn có cấu trúc, truy được nguồn và **chấm điểm được**.

Vấn đề nó giải: nhận định nằm rải rác trong hàng chục giờ video, nói một lần rồi trôi. Không ai nhớ tuần trước chuyên gia nói gì, càng không kiểm được họ nói đúng hay sai. App biến dòng nói đó thành: kèo có ngày tháng → theo dõi tới khi kết thúc → ghi hit/miss.

Thành công = mở app ra biết ngay ba điều: hôm nay cần làm gì, ai vừa nói gì, và người đó nói có đáng tin không.

## Positioning

Ba thứ khiến nó không thể bị thay bằng một app tin tức tài chính bất kỳ:

1. **Bảng điểm trung thực.** Ghi cả kèo SAI, kể cả khi chuyên gia tự chấm sai. Đây là điều không nguồn tổng hợp nào khác làm, vì nó không có lợi cho ai.
2. **Đa quan điểm trên cùng một mã.** Khi bốn chuyên gia bất đồng về HPG hay nhóm chứng khoán, app trưng cả bốn cạnh nhau kèm đoạn "khác nhau ở đâu" — thay vì chọn phe hộ người đọc.
3. **Truy được tới câu nói gốc.** Mọi luận điểm gắn `expertId` và ngày; nội dung chỉ dựng từ transcript thật.

## Operating Context

- **Nhịp cập nhật:** theo tuần, bám lịch ra video của các kênh (Thái Phạm ra video hội viên cuối tuần + bài đăng cộng đồng trong tuần; CK 5 phút gần như hàng ngày; AzFin ~2 bài/tuần; Quang Dũng 2–4 bài/tháng).
- **Quy trình cập nhật** chạy bằng skill `/hdt-update`, có runbook riêng tại `CLAUDE.md`: quét kênh → tải transcript (yt-dlp, video hội viên cần Chrome Profile 90) → dựng entry vào `data.js` bằng script node → chấm scorecard → cập nhật pulse/weekly/actions/tickers/briefing/context → đánh dấu Excel → verify trình duyệt → push (Vercel tự deploy).
- **Excel `Theo doi video-post kenh dau tu.xlsx`** là sổ theo dõi video đã xử lý; transcript lưu ở `data/transcripts/` (không commit).
- Người đọc thường mở app **trong hoặc ngay sau phiên giao dịch**, khi tâm lý đang bị giá tác động — đây là lý do phần "hành động" phải tách khỏi phần "phân tích".

## Capabilities and Constraints

**Hiện có:** Tổng quan · Bản tin (infographic tập mới nhất + hỏi–đáp cộng đồng) · Bối cảnh (chính trị thế giới, vĩ mô, chính sách–tin VN, bất động sản) · Hành động giá · Sổ mã (54 mã, đa quan điểm) · Chuyên gia · Tài sản · Khuyến nghị · Bảng điểm (96 kèo) · Lịch sử · Quản lý. Có tìm kiếm không dấu, đối chiếu Binance, chart TradingView nhúng, xuất PDF, PWA, badge MỚI.

**Ràng buộc kỹ thuật (người dùng đã chốt):**
- Giữ nguyên engine **DCLogic một file** — `Hai Dau Tu.dc.html` (`{{ }}`, `sc-if`, `sc-for`, toàn bộ logic trong `renderVals()`) + `data.js` (`window.HDT_DATA`) + `support.js` (không sửa). Không đổi sang React/Next/Tailwind, không tách file.
- Lý do: mọi script cập nhật, runbook và quy trình `/hdt-update` hàng tuần đang bám vào cấu trúc này.
- Mọi biến tính trong `renderVals` phải nằm trong khối `return` cuối hàm mới lộ ra template.
- Deploy: Vercel auto-deploy khi push `main`; `vercel.json` đặt `Cache-Control: no-cache` cho `data.js`.

**Ràng buộc nội dung (bất di bất dịch):**
- Chỉ dựng nội dung từ transcript thật. Không có transcript thì để trống — **không bao giờ suy nội dung từ tiêu đề video**.
- Bình luận người xem là ý kiến người xem, chỉ vào khối riêng có miễn trừ, không trộn vào nhận định chuyên gia.
- Giữ 7 bài mới nhất mỗi kênh.

**Chưa quyết:** cổng đăng nhập hiện là placeholder (gõ ≥4 ký tự bất kỳ) — chưa có cơ chế xác thực thật.

## Brand Commitments

- Tên: **Hải Đầu Tư** — "cùng các Chuyên Gia · dành riêng cho gia đình".
- **Ngôn ngữ: tiếng Việt toàn bộ**, kể cả nhãn kỹ thuật.
- **Giọng: thẳng và không tô hồng.** App ghi kèo sai cũng thẳng như kèo đúng, ghi luôn khi chuyên gia tự thừa nhận chốt lời sớm. Không dùng ngôn ngữ hô hào hay khẳng định chắc nịch thay cho chuyên gia.
- Bốn chuyên gia được theo dõi: Thái Phạm, AzFin, Chứng khoán 5 phút, Quang Dũng (`thai-pham`, `azfin`, `ck-5-phut`, `quang-dung`).

## Evidence on Hand

- `design_handoff_hai_dau_tu/data.js` — toàn bộ nội dung thật đã dựng: 4 chuyên gia × 7 bài, 96 kèo scorecard, 54 mã, 26 mục bối cảnh, bản tin infographic, hỏi–đáp cộng đồng.
- `data/transcripts/*.json` — transcript gốc (không commit, chỉ có trên máy).
- `data/comments/*.info.json` — bình luận đã tải.
- `~/Downloads/Binance-TradFi-Stocks.xlsx` — đối chiếu mã Binance.
- **Chưa có:** ảnh đại diện chuyên gia (thư mục `/avatars/` trống — hiện fallback về chữ tắt TP/AZ/QD), ảnh chụp màn hình hoặc tài sản thương hiệu nào khác. Không được bịa logo, ảnh hay số liệu ngoài transcript.

## Product Principles

1. **Truy được nguồn hoặc không tồn tại.** Mọi nhận định gắn người nói và ngày nói; thiếu transcript thì để trống chứ không lấp.
2. **Ghi cả cái sai.** Bảng điểm chỉ có giá trị khi nó dám ghi miss — đó là thứ phân biệt app này với một feed tin.
3. **Bất đồng là thông tin, không phải lỗi.** Khi chuyên gia mâu thuẫn, trưng cả hai phía và nói rõ mỗi bên đang nhìn vào cái gì.
4. **Tách "cần làm" khỏi "vì sao".** Người nhà phải hành động được mà không cần đọc hết phần phân tích; người đọc kỹ vẫn tới được tận câu nói gốc.
5. **Nội dung là dữ liệu, giao diện là khuôn.** Cập nhật hàng tuần chỉ chạm `data.js`; giao diện phải chịu được nội dung dài ngắn khác nhau mà không vỡ.

## Accessibility & Inclusion

- **Khoảng cách hiểu biết trong chính gia đình** là nhu cầu chính: thuật ngữ tài chính phải có ngữ cảnh, và tầng "cần làm" phải đọc được độc lập với tầng phân tích.
- Điện thoại và máy tính đều là môi trường chính — không có cái nào là bản phụ.
- App đã tôn trọng `prefers-reduced-motion` ở hiệu ứng danh sách; giữ nguyên cam kết này.
