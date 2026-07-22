/**
 * StackMark — EndEdge's signature visual.
 * A layered value stack (Infrastructure at the base -> Growth at the top),
 * with the brand's orange chevron leading off the top edge: the "edge" that
 * moves the business forward. Reused in the hero and the value section.
 * Brand palette: navy #14257E surfaces, orange #FF6F00 accent.
 */
export default function StackMark({
  className = "",
  labels = false,
}: {
  className?: string;
  labels?: boolean;
}) {
  // Bottom (infra) -> top (growth). Bottom is widest/most solid.
  const layers = [
    { y: 300, fill: "#0E1A45", stroke: "#25336B", label: "Infrastructure" },
    { y: 248, fill: "#122055", stroke: "#2C3E86", label: "Applications" },
    { y: 196, fill: "#152863", stroke: "#33489A", label: "Automation" },
    { y: 144, fill: "#183072", stroke: "#3B54B0", label: "Applied AI" },
    { y: 92, fill: "#1B3A8A", stroke: "#FF6F00", label: "Growth" },
  ];

  const plane = (cx: number, cy: number) => {
    const w = 150; // half-width
    const h = 34; // vertical offset of the rhombus
    return `${cx - w},${cy} ${cx},${cy - h} ${cx + w},${cy} ${cx},${cy + h}`;
  };

  return (
    <svg
      viewBox="0 0 460 380"
      className={className}
      role="img"
      aria-label="EndEdge value stack: infrastructure, applications, automation, applied AI, growth"
    >
      <defs>
        <linearGradient id="edgeLine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6F00" />
          <stop offset="100%" stopColor="#FF9E4D" />
        </linearGradient>
        <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      {/* Ambient orange glow behind the top layer */}
      <polygon
        points={plane(210, 92)}
        fill="#FF6F00"
        opacity="0.16"
        filter="url(#soft)"
      />

      {layers.map((l, i) => (
        <g key={i}>
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
          {labels && (
            <text
              x="378"
              y={l.y + 4}
              fill={i === layers.length - 1 ? "#FF6F00" : "#93A0C8"}
              fontSize="12"
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight={i === layers.length - 1 ? 600 : 400}
              textAnchor="start"
            >
              {l.label}
            </text>
          )}
        </g>
      ))}

      {/* Vertical edge line up through the stack */}
      <line
        x1="210"
        y1="330"
        x2="210"
        y2="66"
        stroke="url(#edgeLine)"
        strokeWidth="1.5"
        strokeDasharray="2 6"
        opacity="0.55"
      />

      {/* Brand chevron leading off the top edge — "the edge" moving forward */}
      <path
        d="M234 40 L262 58 L234 76 L246 58 Z"
        fill="#FF6F00"
      />
    </svg>
  );
}
