import { ImageResponse } from "next/og";
import { ICON_BG, ICON_CHEVRON_PATH } from "@/lib/brand/icon-mark";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: ICON_BG,
          borderRadius: 40,
        }}
      >
        <svg width="112" height="112" viewBox="0 0 32 32" fill="none">
          <path d={ICON_CHEVRON_PATH} fill="#FF6F00" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
