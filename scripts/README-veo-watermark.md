# EndEdge over Veo / Gemini watermark

How to place the EndEdge orange-chevron mark so it **covers** the visible Google Veo/Gemini sparkle on AI-generated videos.

## Why not trust “official” coordinates alone?

Published Veo placement (bottom-right, 32px margin) is a useful **starting guess**, but the **visible sparkle** on a given file can sit elsewhere.

| Resolution | Claimed Gemini box (top-left + size) |
|---|---|
| 1080p landscape `1920×1080` | `(1792, 952)` · `96×96` · box `[1792, 952, 1888, 1048]` |
| 1080p portrait `1080×1920` | `(952, 1792)` · `96×96` · box `[952, 1792, 1048, 1888]` |
| 720p landscape `1280×720` | `(1200, 640)` · `48×48` · box `[1200, 640, 1248, 688]` |

**On our Arabic hero clip (`1280×720`), the claimed 720p box was empty.**  
Measured visible sparkle was approximately:

- **Center:** `(1159, 595)`
- **BBox:** `[1144, 588, 1172, 615]` (~28×27 px core)

Always **measure the file** before locking EndEdge position.

---

## What worked (this project)

| Item | Value |
|---|---|
| Source video | `تقنية_مؤسسية_وذكاء_اصطناعي_لـا.mp4` |
| Output | `EndEdge_AR_Hero_watermarked.mp4` |
| Frame size | `1280×720` |
| Brand mark | `app/icon.svg` (navy `#0A1230` + orange `#FF6F00`) |
| EndEdge overlay | **`x=1123`, `y=559`, size `72×72`** |
| EndEdge box | `[1123, 559, 1195, 631]` |
| Goal | Center EndEdge on the sparkle so tips are covered |

Rule of thumb for **cover** (not “sit above”):

1. Measure sparkle center `(gx, gy)`.
2. Choose icon size `S` ≥ sparkle tip-to-tip (often **56–72** at 720p if you want full cover).
3. Place:  
   `x = gx - S/2`  
   `y = gy - S/2`

For **sit above** with a gap instead of covering:

```text
x = gx - S/2
y = sparkle_top - gap - S
```

---

## Prerequisites

- [ffmpeg](https://ffmpeg.org/) + ffprobe on `PATH`
- Node.js with `sharp` (already a devDependency here)

```bash
npm i
```

---

## Step 1 — Probe the video

```bash
ffprobe -v error -select_streams v:0 -show_entries stream=width,height,duration -of default=noprint_wrappers=1 "INPUT.mp4"
```

Note `width` × `height` (e.g. `1280` × `720`).

---

## Step 2 — Measure the visible Veo sparkle

Extract a few frames and find a **fixed** pale bright blob in the bottom-right (watermark does not move with the scene):

```bash
ffmpeg -y -ss 2 -i "INPUT.mp4" -frames:v 1 -update 1 -q:v 2 _frame.jpg
```

Then either:

- Inspect `_frame.jpg` in an editor and note sparkle center, **or**
- Use a small Python check (Pillow + NumPy) for a low-variance bright blob across several timestamps in the BR corner.

Record:

- `gx, gy` — sparkle center  
- Optional: tip bbox if you need exact cover padding  

---

## Step 3 — Render the EndEdge PNG

```bash
node -e "require('sharp')('app/icon.svg').resize(72,72).png().toFile('_endedge_wm.png')"
```

Change `72` to your chosen `S`.

---

## Step 4 — Overlay with ffmpeg

```bash
ffmpeg -y -i "INPUT.mp4" -i _endedge_wm.png ^
  -filter_complex "[1:v]format=rgba,colorchannelmixer=aa=1[wm];[0:v][wm]overlay=1123:559" ^
  -c:v libx264 -preset medium -crf 18 -c:a copy ^
  "OUTPUT_watermarked.mp4"
```

macOS / Linux (same filter, line continuation with `\`):

```bash
ffmpeg -y -i "INPUT.mp4" -i _endedge_wm.png \
  -filter_complex "[1:v]format=rgba,colorchannelmixer=aa=1[wm];[0:v][wm]overlay=1123:559" \
  -c:v libx264 -preset medium -crf 18 -c:a copy \
  "OUTPUT_watermarked.mp4"
```

Replace `1123:559` with your computed `x:y`.

| Flag | Meaning |
|---|---|
| `colorchannelmixer=aa=1` | Fully opaque cover (use `0.9–0.95` for a softer watermark look) |
| `-c:a copy` | Keep original audio |
| `crf 18` | High visual quality |

---

## Step 5 — Verify

```bash
ffmpeg -y -ss 2 -i "OUTPUT_watermarked.mp4" -frames:v 1 -update 1 -q:v 2 _check.jpg
ffmpeg -y -i _check.jpg -vf "crop=220:180:1080:520" -update 1 _check_br.jpg
```

Confirm in `_check_br.jpg`:

- EndEdge tile sits on the sparkle (cover mode), **or** cleanly above it (gap mode)
- No sparkle tips sticking out if cover was intended

---

## Quick formula cheat sheet

```text
W, H     = video width, height
S        = EndEdge PNG size (px)
gx, gy   = measured sparkle center

# Cover sparkle
x = gx - S/2
y = gy - S/2

# Official guess ONLY (may be wrong — always verify)
# 720p:
#   claimed_x = W - 32 - 48
#   claimed_y = H - 32 - 48
# 1080p:
#   claimed_x = W - 32 - 96
#   claimed_y = H - 32 - 96
```

---

## Notes

- **SynthID** (invisible watermark) cannot be removed or covered by this overlay; this only addresses the **visible** sparkle.
- Keep the original file; write a new `*_watermarked.mp4`.
- Do not commit large MP4s unless you intend to store media in git.
- Clean temp files: `_endedge_wm.png`, `_frame.jpg`, `_check*.jpg`.

---

## One-liner (after you know x, y, S)

PowerShell example for this repo’s 720p hero settings:

```powershell
node -e "require('sharp')('app/icon.svg').resize(72,72).png().toFile('_endedge_wm.png')"
$in  = Get-ChildItem -Filter "*.mp4" | Where-Object { $_.Name -notlike 'EndEdge*' } | Select-Object -First 1
ffmpeg -y -i $in.FullName -i _endedge_wm.png -filter_complex "[1:v]format=rgba,colorchannelmixer=aa=1[wm];[0:v][wm]overlay=1123:559" -c:v libx264 -preset medium -crf 18 -c:a copy EndEdge_watermarked.mp4
```
