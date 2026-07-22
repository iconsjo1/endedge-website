import StackMark from "./ui/StackMark";

const LAYERS = [
  {
    name: "Applied AI",
    desc: "Automation and intelligence that turn stable systems into measurable speed.",
  },
  {
    name: "Automation",
    desc: "The repetitive work between your tools, handled reliably and without re-keying.",
  },
  {
    name: "Applications",
    desc: "The software your team uses every day — connected, not scattered.",
  },
  {
    name: "Infrastructure",
    desc: "Secure, monitored cloud that everything else is safely built upon.",
  },
];

export default function ValueStack() {
  return (
    <section id="value" className="border-t border-slate-line bg-ink py-24">
      <div className="shell grid items-center gap-14 md:grid-cols-[0.8fr_1.2fr]">
        <div className="order-2 md:order-1">
          <StackMark className="mx-auto w-full max-w-xs" />
        </div>

        <div className="order-1 md:order-2">
          <p className="eyebrow">How we deliver value</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-mist md:text-4xl">
            Infrastructure first. Intelligence on top.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            AI only compounds when it stands on solid ground. We build each layer so it
            strengthens the one above — turning stable systems into automation, and
            automation into growth.
          </p>

          <div className="mt-8 divide-y divide-slate-line border-y border-slate-line">
            {LAYERS.map((l, i) => (
              <div key={l.name} className="flex gap-5 py-4">
                <span className="mt-0.5 font-display text-xs text-orange">
                  {String(LAYERS.length - i).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-base font-medium text-mist">
                    {l.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
