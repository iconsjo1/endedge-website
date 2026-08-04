import { ImageResponse } from "next/og";
import { ICON_BG, ICON_CHEVRON_PATH, ICON_ORANGE } from "@/lib/brand/icon-mark";

export const runtime = "edge";
export const alt = "EndEdge — Enterprise Technology & AI Solutions | Dubai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default Open Graph / share image for Google & social previews. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: ICON_BG,
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#111c4a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="44" height="44" viewBox="0 0 32 32" fill="none">
              <path d={ICON_CHEVRON_PATH} fill={ICON_ORANGE} />
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 42,
              fontWeight: 700,
              color: "#eaeef9",
              letterSpacing: "-0.02em",
            }}
          >
            EndEdge
            <span style={{ color: ICON_ORANGE, marginLeft: 4 }}>{">"}</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 54,
              fontWeight: 700,
              color: "#eaeef9",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              maxWidth: 920,
            }}
          >
            At the Edge of Innovation.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#93a0c8",
              lineHeight: 1.35,
              maxWidth: 880,
            }}
          >
            Enterprise technology & AI for UAE and GCC businesses — cloud, managed IT,
            automation, and e-invoicing.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#93a0c8",
            fontSize: 22,
          }}
        >
          <span>endedge.co</span>
          <span style={{ color: ICON_ORANGE }}>Dubai · UAE</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
