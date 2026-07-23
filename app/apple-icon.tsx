import { ImageResponse } from "next/og";

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
          background: "#0A1230",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderTop: "42px solid transparent",
            borderBottom: "42px solid transparent",
            borderLeft: "68px solid #FF6F00",
            marginLeft: 12,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
