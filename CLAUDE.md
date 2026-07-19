# CLAUDE.md — Hải Đầu Tư (runbook)

Web app nội bộ cho gia đình: tổng hợp nhận định đầu tư từ YouTube (Thái Phạm, AzFin, Chứng khoán 5 phút) thành feed có cấu trúc + điểm mua/bán + bảng điểm chuyên gia. Repo: `joyboyz2025/hai-dau-tu`, deploy: **Vercel auto-deploy khi push lên main**.

## Kiến trúc (hiện tại — bản trong design_handoff_hai_dau_tu/CLAUDE.md đã lỗi thời)

```
design_handoff_hai_dau_tu/
  Hai Dau Tu.dc.html   # Toàn bộ app 1 file (DCLogic engine: {{ }}, sc-if, sc-for, renderVals())
  data.js              # window.HDT_DATA — TOÀN BỘ nội dung (JSON, có header comment)
  support.js           # engine — không sửa
  manifest.json, icons/  # PWA
scan_channels.py       # Quét kênh: đọc sheet "Kênh" → yt-dlp liệt kê video mới → thêm vào Excel + tải transcript
get_transcript.py      # Tải transcript 1 video (yt-dlp + cookie Chrome — video hội viên cần Chrome login đúng tài khoản Platinum)
data/transcripts/<id>.json   # transcript đã tải (gitignore — chỉ có trên máy local)
Theo doi video-post kenh dau tu.xlsx  # sheet "Kênh" (danh bạ kênh) + "Video-Post mới" (tracker, cột Post: Đã post/Chưa)
vercel.json            # rewrites + Cache-Control no-cache cho data.js
```

`HDT_DATA` gồm: `lastUpdated`, `pulse[]`, `weekly{}`, `assetCards[]`, `experts{id: {…, updates[], sources[]}}`, `scorecard[]`.

## LUẬT BẤT DI BẤT DỊCH
1. **Chỉ dựng nội dung từ transcript thật** — KHÔNG BAO GIỜ bịa nhận định từ tiêu đề video. Không có transcript → hỏi user hoặc bỏ qua.
2. **Giữ 7 bài mới nhất/kênh**; riêng Thái Phạm ưu tiên bài HỘI VIÊN (`sourceType` bắt đầu bằng `member`): giữ bài mới nhất + các bài member gần nhất. Sources cũng ~7.
3. **UI cố định, nội dung là dữ liệu** — cập nhật định kỳ chỉ sửa `data.js` (+ Excel), không sửa HTML/CSS trừ khi được yêu cầu.
4. Mọi thay đổi data.js: regenerate bằng node (đọc → sửa object → ghi lại `header + "window.HDT_DATA = " + JSON.stringify(D,null,2) + ";\n"`), validate bằng `node -e "eval(...)"` trước khi commit.

## Quy trình "chạy update" (mỗi lần user yêu cầu)
1. `python3 scan_channels.py --no-transcript` (cần `dangerouslySkipSandbox`/network) → thấy video mới nào.
2. Với video mới nhất mỗi kênh: transcript đã tự tải, hoặc `python3 get_transcript.py <url> --json --out data/transcripts/<id>.json`. AzFin đôi khi chưa có phụ đề → để "Chưa", thử lại lần sau.
3. Đọc transcript ĐẦY ĐỦ → dựng entry: `date` (YYYY-MM-DD), `dateShort`, `timeAgo`, `tab`, `sourceType` (public-video|member-video|member-post), `typeLabel`, `title`, `summary`, `feedChips[{label,sig}]` (sig: up/down/warn/wait), `keyCalls[{tag,value,signal,note}]`, `sections[{title,signal,sigLabel,para,bullets[],levels?}]`.
4. Video hội viên Thái Phạm: thêm `tradeLevels` = mảng NHÓM `[{group:"Chứng khoán Việt Nam", items:[{asset,dir,entry,target,stop,sig,tv}]}]`. `tv` = symbol TradingView (HOSE:TCX, OANDA:XAUUSD, BINANCE:BTCUSDT, NASDAQ:AAPL, TVC:USOIL…). Nhóm chuẩn: Vàng & Bạc / Bitcoin & Crypto / Dầu / Chứng khoán Mỹ / Nhật & Hàn / Chứng khoán Việt Nam.
5. Prepend vào `experts[id].updates`, áp luật 7 bài (member-priority cho thai-pham), cập nhật `sources`, `lastUpdated`.
6. **Scorecard** (`HDT.scorecard[{expert,date,asset,call,result,note}]`): đối chiếu call `pending` với transcript mới → chốt `hit`/`miss` (chuyên gia thường tự xác nhận); thêm call mới kiểm chứng được; **ghi cả call SAI** — đó là thứ làm bảng đáng tin. Kết quả phải có căn cứ transcript, tự thuật ghi "tự thuật".
7. **Pulse strip** (`HDT.pulse`) + **weekly** (`HDT.weekly`): cập nhật theo quan điểm TUẦN MỚI NHẤT — pulse cũ từng mâu thuẫn với weekly (bug đã sửa 15/07), đừng để lặp lại.
7b. **Hành động giá** (`HDT.actions{updated, now[], waiting[], events[]}` — trang "Hành động", thêm 19/07): mỗi lần update phải đồng bộ theo transcript mới — `now[{asset,dir,sig,expertId,detail,level}]` vị thế đang chạy; `waiting[{asset,trigger,action,sig,expertId,note}]` lệnh chờ mức giá; `events[{date|dateLabel,label,note,sig,expertId}]` lịch sự kiện (date ISO → app tự đếm "Còn X ngày", sự kiện đã qua thì XÓA). Gỡ hành động hết hiệu lực, thêm hành động mới, cập nhật `updated`.
7c. **Sổ mã** (`HDT.tickers[]` — trang "Sổ mã" + trang chi tiết từng mã, thêm 19/07): mỗi phần tử `{key, symbol, name, group (Chứng khoán Việt Nam|Quốc tế|Hàng hóa & Crypto), tv (symbol TradingView, rỗng = không chart), sig, stance, oneLiner, aliases[] (chuỗi không dấu để auto-gom "Nhắc đến" + "Bảng điểm của mã" từ ALL_CALLS/scorecard), thesis[{title,body}] (luận điểm dài — CHỈ từ transcript), orders[{expertId,dir,sig,entry,target,stop,status:active|waiting|done,date,note}], potential (1–5) + potentialNote, caution (1–5) + cautionNote (thang Tiềm năng/Thận trọng của KHUYẾN NGHỊ hiện tại — chỉnh lại mỗi khi stance đổi)}`. Mỗi lần update: sửa stance/orders theo transcript mới (lệnh khớp mục tiêu → status done), thêm mã mới khi chuyên gia bắt đầu theo dõi, cập nhật thesis khi có luận điểm mới.
8. Excel: đánh dấu video đã post → `Post = "Đã post"` (openpyxl, match videoId trong cột Link).
9. Verify: server `hai-dau-tu` (launch.json, port 5500, python http.server) → mở `http://localhost:5500/Hai Dau Tu.dc.html?v=<timestamp>`; login = gõ ≥4 ký tự bất kỳ (hoặc `localStorage.setItem('hdt_auth','1')`). Check: không lỗi console, không chuỗi `[object`, bài mới hiện đúng tab.
10. Commit + push (Vercel tự deploy). Git hay kẹt lock: `rm -f .git/index.lock .git/HEAD.lock`.

## Gotchas
- Browser cache data.js: đã fix bằng header no-cache trong vercel.json; local dev vẫn nên cache-bust `?v=`.
- Video hội viên Platinum: yt-dlp dùng `--cookies-from-browser chrome` — Chrome phải đang login tài khoản có gói hội viên đủ cấp.
- Không tải được video stream của video hội viên (403) — chỉ transcript. Đừng thử vẽ/chụp TradingView tự động (đã thử, quá mong manh) — dùng chart embed có sẵn.
- `scExpert`, `callsExpert`, `assetKey`, `q`, `chartSym` là state filter trong renderVals — thêm state mới nhớ khai báo trong constructor.
- Smoke test renderVals: extract script bằng regex `<script type="text/x-dc"...>`, `node --check`, rồi eval với DCLogic/React/localStorage giả (xem lịch sử commit để có mẫu).

## Tính năng đã có (đừng làm lại)
Tìm kiếm live không dấu (quét cả tickers/bullets) + lịch sử 5 call của mã; trang Tài sản (timeline theo asset); Khuyến nghị (call tracker + nhãn Cũ); Bảng điểm chuyên gia (tỷ lệ đúng/sai + filter); Điểm mua/bán theo nhóm + chart TradingView nhúng; badge MỚI (localStorage `hdt_seen`); PWA; card "Tuần này" (weekly).
