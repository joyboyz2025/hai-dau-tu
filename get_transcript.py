#!/usr/bin/env python3
"""
Lấy transcript từ YouTube (public + hội viên) qua yt-dlp + cookie Chrome.
Dùng: python3 get_transcript.py <youtube_url>
      python3 get_transcript.py <youtube_url> --out /tmp/output.txt
"""

import argparse
import json
import os
import re
import subprocess
import sys
import tempfile


def download_vtt(url: str, tmp_dir: str):
    """Tải VTT subtitle về tmp_dir. Trả về path file VTT, None nếu lỗi."""
    cmd = [
        "yt-dlp",
        "--cookies-from-browser", "chrome",
        "--write-sub", "--write-auto-sub",
        "--sub-lang", "vi",
        "--sub-format", "vtt",
        "--skip-download",
        "--output", os.path.join(tmp_dir, "%(id)s"),
        url,
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)

    if result.returncode != 0:
        print("[LỖI] yt-dlp thất bại:", result.stderr[-500:], file=sys.stderr)
        return None

    # Tìm file VTT vừa tải
    for fname in os.listdir(tmp_dir):
        if fname.endswith(".vtt"):
            return os.path.join(tmp_dir, fname)

    print("[LỖI] Không tìm thấy file VTT sau khi tải.", file=sys.stderr)
    return None


def get_video_info(url: str) -> dict:
    """Lấy metadata video (title, id, upload_date) qua yt-dlp --dump-json."""
    cmd = [
        "yt-dlp",
        "--cookies-from-browser", "chrome",
        "--dump-json",
        "--skip-download",
        url,
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode == 0:
        try:
            return json.loads(result.stdout)
        except json.JSONDecodeError:
            pass
    return {}


def parse_vtt(path: str) -> str:
    """Chuyển VTT → văn bản thuần, loại bỏ timestamp và trùng lặp."""
    with open(path, encoding="utf-8") as f:
        content = f.read()

    lines = content.split("\n")
    texts = []
    for line in lines:
        line = line.strip()
        # Bỏ dòng timestamp
        if re.match(r"^\d{2}:\d{2}", line):
            continue
        # Bỏ dòng header / trống
        if line in ("WEBVTT", "") or line.startswith("NOTE") or line.startswith("STYLE"):
            continue
        # Bỏ số thứ tự cue
        if re.match(r"^\d+$", line):
            continue
        # Bỏ tag HTML (<c>, <b>, v.v.)
        line = re.sub(r"<[^>]+>", "", line)
        if line:
            texts.append(line)

    # Loại bỏ dòng lặp liên tiếp (do overlap subtitle)
    result = []
    prev = None
    for t in texts:
        if t != prev:
            result.append(t)
            prev = t

    return " ".join(result)


def main():
    parser = argparse.ArgumentParser(description="Lấy transcript YouTube")
    parser.add_argument("url", help="URL video YouTube")
    parser.add_argument("--out", help="Lưu ra file (mặc định: in ra màn hình)")
    parser.add_argument("--json", action="store_true", help="Xuất dạng JSON kèm metadata")
    args = parser.parse_args()

    with tempfile.TemporaryDirectory() as tmp_dir:
        print(f"[1/3] Lấy metadata video...", file=sys.stderr)
        info = get_video_info(args.url)
        title = info.get("title", "(không có tiêu đề)")
        video_id = info.get("id", "unknown")
        upload_date = info.get("upload_date", "")  # dạng YYYYMMDD
        if upload_date and len(upload_date) == 8:
            upload_date = f"{upload_date[:4]}-{upload_date[4:6]}-{upload_date[6:]}"

        print(f"[2/3] Tải subtitle: {title}", file=sys.stderr)
        vtt_path = download_vtt(args.url, tmp_dir)
        if not vtt_path:
            sys.exit(1)

        print(f"[3/3] Xử lý transcript...", file=sys.stderr)
        transcript = parse_vtt(vtt_path)

    if args.json:
        output = json.dumps({
            "id": video_id,
            "title": title,
            "date": upload_date,
            "url": args.url,
            "transcript": transcript,
        }, ensure_ascii=False, indent=2)
    else:
        output = transcript

    if args.out:
        with open(args.out, "w", encoding="utf-8") as f:
            f.write(output)
        print(f"[OK] Đã lưu → {args.out}", file=sys.stderr)
    else:
        print(output)


if __name__ == "__main__":
    main()
