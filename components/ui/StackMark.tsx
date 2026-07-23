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

  const EDGE_W = 150;
  const EDGE_H = 34;
  const edgeAngleDeg = (Math.atan2(EDGE_H, EDGE_W) * 180) / Math.PI;
  const chevronX = 236;
  const chevronY = 64;
  const labelX = rtl ? 82 : 378;
  const labelAnchor = rtl ? "end" : "start";

  return (
    <svg
      viewBox="0 0 460 380"
      className={`${className}${animate ? " stack-mark-animate" : ""}`}
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
        points={plane(210, 92)}
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
            points={plane(210, l.y)}
            fill={l.fill}
            stroke={l.stroke}
            strokeWidth="1.5"
          />
          {i === layers.length - 1 && (
            <polygon
              points={plane(210, l.y)}
              fill="none"
              stroke="url(#edgeLine)"
              strokeWidth="2.5"
            />
          )}
          {labelList && (
            <text
              className={animate ? "stack-label" : undefined}
              style={animate ? { animationDelay: `${0.35 + i * 0.12}s` } : undefined}
              x={labelX}
              y={l.y + 4}
              fill={
                i === layers.length - 1
                  ? "var(--stack-label-active)"
                  : "var(--stack-label)"
              }
              fontSize="12"
              fontFamily="var(--font-poppins), var(--font-cairo), sans-serif"
              fontWeight={i === layers.length - 1 ? 600 : 400}
              textAnchor={labelAnchor}
            >
              {labelList[i]}
            </text>
          )}
        </g>
      ))}

      <line
        className={animate ? "stack-spine" : undefined}
        x1="210"
        y1="330"
        x2="210"
        y2="66"
        stroke="url(#edgeLine)"
        strokeWidth="1.5"
        strokeDasharray="2 6"
        opacity="0.55"
      />

      <g transform={`translate(${chevronX} ${chevronY}) rotate(${edgeAngleDeg})`}>
        <path
          className={animate ? "stack-chevron" : undefined}
          d="M-14 -18 L14 0 L-14 18 L-2 0 Z"
          fill="var(--orange)"
        />
      </g>
    </svg>
  );
}
