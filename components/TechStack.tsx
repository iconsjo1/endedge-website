const STACK = [
  { group: "Cloud", items: ["AWS", "Microsoft Azure", "DigitalOcean", "Cloudflare"] },
  { group: "Development", items: ["React", "Next.js", "Node.js", "PostgreSQL"] },
  { group: "Artificial Intelligence", items: ["OpenAI", "Anthropic", "Gemini", "RAG", "MCP", "AI Agents"] },
  { group: "Security", items: ["SSL / TLS", "Zero Trust", "Automated Backups", "24/7 Monitoring"] },
];

export default function TechStack() {
  return (
    <section id="tech" className="border-t border-slate-line bg-ink py-24">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Our technology</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-mist md:text-4xl">
            Proven tools, chosen for you.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            We work across the full stack and pick the right tool for your needs — not
            ours. No lock-in, no black boxes.
          </p>
        </div>

        <div className="mt-12 divide-y divide-slate-line border-y border-slate-line">
          {STACK.map((s) => (
            <div
              key={s.group}
              className="grid gap-3 py-6 sm:grid-cols-[220px_1fr] sm:items-center"
            >
              <h3 className="font-display text-xs uppercase tracking-widest text-orange">
                {s.group}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-slate-line bg-slate-panel px-3 py-1.5 font-display text-xs text-mist"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
