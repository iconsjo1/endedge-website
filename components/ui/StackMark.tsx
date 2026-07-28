/**
 * StackMark — EndEdge's signature visual.
 * Layer fills/strokes use CSS variables so they follow data-theme.
 */
export default function StackMark({
  className = "",
  labels = false,
  rtl = false,
  animate = false,
  highlightIndex = null,
  activeThrough = null,
  missingIndex = null,
  idPrefix = "sm",
}: {
  className?: string;
  labels?: boolean | string[];
  rtl?: boolean;
  animate?: boolean;
  /** Emphasize one layer (0 = Infrastructure … 4 = Growth). */
  highlightIndex?: number | null;
  /** Light layers 0..n (inclusive); dim the rest — readiness / service ascent. */
  activeThrough?: number | null;
  /** Draw an empty dashed slot (404 broken edge). */
  missingIndex?: number | null;
  idPrefix?: string;
}) {
  const LAYER_GAP = 62;
  const TOP_Y = 78;
  const layers = [
    {
      y: TOP_Y + LAYER_GAP * 4,
      fill: "var(--stack-1-fill)",
      stroke: "var(--stack-1-stroke)",
      fallbackLabel: "Infrastructure",
    },
    {
      y: TOP_Y + LAYER_GAP * 3,
      fill: "var(--stack-2-fill)",
      stroke: "var(--stack-2-stroke)",
      fallbackLabel: "Applications",
    },
    {
      y: TOP_Y + LAYER_GAP * 2,
      fill: "var(--stack-3-fill)",
      stroke: "var(--stack-3-stroke)",
      fallbackLabel: "Automation",
    },
    {
      y: TOP_Y + LAYER_GAP,
      fill: "var(--stack-4-fill)",
      stroke: "var(--stack-4-stroke)",
      fallbackLabel: "Applied AI",
    },
    {
      y: TOP_Y,
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

  const STACK_CX = 200;
  const EDGE_W = 150;
  const EDGE_H = 34;
  const STACK_RIGHT = STACK_CX + EDGE_W;
  const LABEL_GAP = 36;
  const edgeAngleDeg = (Math.atan2(EDGE_H, EDGE_W) * 180) / Math.PI;
  const chevronOffset = 26;
  const chevronX = rtl ? STACK_CX - chevronOffset : STACK_CX + chevronOffset;
  const chevronY = TOP_Y - 28;
  const labelX = STACK_RIGHT + LABEL_GAP;
  const labelAnchor = rtl ? "end" : "start";

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

  const bottomY = TOP_Y + LAYER_GAP * 4;
  const viewH = bottomY + 70;
  const gradId = `${idPrefix}-edgeLine`;
  const softId = `${idPrefix}-soft`;

  const layerOpacity = (i: number) => {
    if (missingIndex === i) return 0.15;
    if (highlightIndex != null) return i === highlightIndex ? 1 : 0.38;
    if (activeThrough != null) return i <= activeThrough ? 1 : 0.32;
    return 1;
  };

  const isHot = (i: number) =>
    highlightIndex === i ||
    (activeThrough != null && i === activeThrough) ||
    (highlightIndex == null && activeThrough == null && missingIndex == null && i === layers.length - 1);

  return (
    <svg
      viewBox={`0 0 520 ${viewH}`}
      className={`${className}${animate ? " stack-mark-animate" : ""}${rtl ? " stack-mark-rtl" : ""}`}
      role="img"
      aria-label="EndEdge value stack: infrastructure, applications, automation, applied AI, growth"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--orange)" />
          <stop offset="100%" stopColor="var(--orange-bright)" />
        </linearGradient>
        <filter id={softId} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      <polygon
        className={animate ? "stack-glow" : undefined}
        points={plane(STACK_CX, TOP_Y)}
        fill="var(--orange)"
        opacity="0.16"
        filter={`url(#${softId})`}
      />

      {layers.map((l, i) => {
        const missing = missingIndex === i;
        return (
          <g
            key={i}
            className={animate ? "stack-layer" : undefined}
            style={{
              opacity: layerOpacity(i),
              transition: "opacity 0.35s ease",
              ...(animate ? { animationDelay: `${0.15 + i * 0.12}s` } : {}),
            }}
          >
            <polygon
              points={plane(STACK_CX, l.y)}
              fill={missing ? "transparent" : l.fill}
              stroke={missing ? "var(--orange)" : isHot(i) ? "var(--orange)" : l.stroke}
              strokeWidth={isHot(i) || missing ? 2.25 : 1.5}
              strokeDasharray={missing ? "6 5" : undefined}
            />
            {isHot(i) && !missing && (
              <polygon
                points={plane(STACK_CX, l.y)}
                fill="none"
                stroke={`url(#${gradId})`}
                strokeWidth="2.5"
              />
            )}
            {labelList &&
              (() => {
                const { fontSize, lines } = labelLines(labelList[i]);
                const lineHeight = fontSize * 1.4;
                const startY = l.y + 4 - ((lines.length - 1) * lineHeight) / 2;
                return (
                  <text
                    className={animate ? "stack-label" : undefined}
                    style={animate ? { animationDelay: `${0.35 + i * 0.12}s` } : undefined}
                    x={labelX}
                    y={startY}
                    fill={isHot(i) ? "var(--stack-label-active)" : "var(--stack-label)"}
                    fontSize={fontSize}
                    fontFamily={
                      rtl
                        ? "var(--font-el-messiri), sans-serif"
                        : "var(--font-poppins), sans-serif"
                    }
                    fontWeight={isHot(i) ? 600 : 500}
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
        );
      })}

      <line
        className={animate ? "stack-spine" : undefined}
        x1={STACK_CX}
        y1={bottomY + 28}
        x2={STACK_CX}
        y2={TOP_Y - 12}
        stroke={`url(#${gradId})`}
        strokeWidth="1.5"
        strokeDasharray="2 6"
        opacity="0.55"
      />

      {missingIndex !== layers.length - 1 && (
        <g
          transform={`translate(${chevronX} ${chevronY}) rotate(${rtl ? 180 - edgeAngleDeg : edgeAngleDeg})`}
        >
          <path
            className={animate ? "stack-chevron" : undefined}
            d="M-14 -18 L14 0 L-14 18 L-2 0 Z"
            fill="var(--orange)"
          />
        </g>
      )}
    </svg>
  );
}
