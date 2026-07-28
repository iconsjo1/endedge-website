/**
 * StackMark — EndEdge's signature visual.
 * Layer fills/strokes use CSS variables so they follow data-theme.
 */
export default function StackMark({
  className = "",
  labels = false,
  rtl = false,
  animate = false,
}: {
  className?: string;
  labels?: boolean | string[];
  rtl?: boolean;
  animate?: boolean;
}) {
  const layers = [
    {
      y: 300,
      fill: "var(--stack-1-fill)",
      stroke: "var(--stack-1-stroke)",
      fallbackLabel: "Infrastructure",
    },
    {
      y: 248,
      fill: "var(--stack-2-fill)",
      stroke: "var(--stack-2-stroke)",
      fallbackLabel: "Applications",
    },
    {
      y: 196,
      fill: "var(--stack-3-fill)",
      stroke: "var(--stack-3-stroke)",
      fallbackLabel: "Automation",
    },
    {
      y: 144,
      fill: "var(--stack-4-fill)",
      stroke: "var(--stack-4-stroke)",
      fallbackLabel: "Applied AI",
    },
    {
      y: 92,
      fill: "var(--stack-5-fill)",
      stroke: "var(--stack-5-stroke)",
      fallbackLabel: "Growth",
    },
  ];

  const labelList =
    Array.isArray(labels) && labels.length === layers.length
      ? labels
      : labels
        ? layers.map((l) => l.fallbackLabel)
        : null;

  const plane = (cx: number, cy: number) => {
    const w = 150;
    const h = 34;
    return `${cx - w},${cy} ${cx},${cy - h} ${cx + w},${cy} ${cx},${cy + h}`;
  };

  const STACK_CX = 210;
  const EDGE_W = 150;
  const EDGE_H = 34;
  const edgeAngleDeg = (Math.atan2(EDGE_H, EDGE_W) * 180) / Math.PI;
  const chevronOffset = 26;
  const chevronX = rtl ? STACK_CX - chevronOffset : STACK_CX + chevronOffset;
  const chevronY = 64;
  const labelX = rtl ? 368 : 378;
  const labelAnchor = "start";

  const labelLines = (text: string): { fontSize: number; lines: string[] } => {
    if (!rtl) return { fontSize: 12, lines: [text] };
    if (text.length > 14) {
      const words = text.split(/\s+/);
      if (words.length >= 3) {
        const mid = Math.ceil(words.length / 2);
        return {
          fontSize: 10.5,
          lines: [words.slice(0, mid).join(" "), words.slice(mid).join(" ")],
        };
      }
      return { fontSize: 10.5, lines: [text] };
    }
    if (text.length > 9) return { fontSize: 11, lines: [text] };
    return { fontSize: 12, lines: [text] };
  };

  return (
    <svg
      viewBox="0 0 460 380"
      className={`${className}${animate ? " stack-mark-animate" : ""}${rtl ? " stack-mark-rtl" : ""}`}
      role="img"
      aria-label="EndEdge value stack: infrastructure, applications, automation, applied AI, growth"
    >
      <defs>
        <linearGradient id="edgeLine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--orange)" />
          <stop offset="100%" stopColor="var(--orange-bright)" />
        </linearGradient>
        <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      <polygon
        className={animate ? "stack-glow" : undefined}
        points={plane(STACK_CX, 92)}
        fill="var(--orange)"
        opacity="0.16"
        filter="url(#soft)"
      />

      {layers.map((l, i) => (
        <g
          key={i}
          className={animate ? "stack-layer" : undefined}
          style={animate ? { animationDelay: `${0.15 + i * 0.12}s` } : undefined}
        >
          <polygon
            points={plane(STACK_CX, l.y)}
            fill={l.fill}
            stroke={l.stroke}
            strokeWidth="1.5"
          />
          {i === layers.length - 1 && (
            <polygon
              points={plane(STACK_CX, l.y)}
              fill="none"
              stroke="url(#edgeLine)"
              strokeWidth="2.5"
            />
          )}
          {labelList && (() => {
            const { fontSize, lines } = labelLines(labelList[i]);
            const lineHeight = fontSize * 1.35;
            const startY = l.y + 4 - ((lines.length - 1) * lineHeight) / 2;
            return (
              <text
                className={animate ? "stack-label" : undefined}
                style={animate ? { animationDelay: `${0.35 + i * 0.12}s` } : undefined}
                x={labelX}
                y={startY}
                fill={
                  i === layers.length - 1
                    ? "var(--stack-label-active)"
                    : "var(--stack-label)"
                }
                fontSize={fontSize}
                fontFamily={
                  rtl
                    ? "var(--font-el-messiri), sans-serif"
                    : "var(--font-poppins), sans-serif"
                }
                fontWeight={i === layers.length - 1 ? 600 : 500}
                textAnchor={labelAnchor}
                direction={rtl ? "rtl" : "ltr"}
                unicodeBidi={rtl ? "plaintext" : undefined}
              >
                {lines.map((line, j) => (
                  <tspan key={j} x={labelX} dy={j === 0 ? 0 : lineHeight}>
                    {line}
                  </tspan>
                ))}
              </text>
            );
          })()}
        </g>
      ))}

      <line
        className={animate ? "stack-spine" : undefined}
        x1={STACK_CX}
        y1="330"
        x2={STACK_CX}
        y2="66"
        stroke="url(#edgeLine)"
        strokeWidth="1.5"
        strokeDasharray="2 6"
        opacity="0.55"
      />

      <g
        transform={`translate(${chevronX} ${chevronY}) rotate(${rtl ? 180 - edgeAngleDeg : edgeAngleDeg})`}
      >
        <path
          className={animate ? "stack-chevron" : undefined}
          d="M-14 -18 L14 0 L-14 18 L-2 0 Z"
          fill="var(--orange)"
        />
      </g>
    </svg>
  );
}
