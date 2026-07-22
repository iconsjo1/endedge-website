import StackMark from "./ui/StackMark";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* Grid backdrop + animated edge trace */}
      <div className="pointer-events-none absolute inset-0 grid-backdrop" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-16 h-40 w-px -translate-x-1/2 bg-gradient-to-b from-orange to-transparent opacity-70 [animation:edge-trace_6s_ease-in-out_infinite]"
        aria-hidden
      />

      <div className="shell relative grid items-center gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
        <div className="animate-fade-up">
          <p className="eyebrow">Enterprise Technology &amp; AI · Dubai, UAE</p>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-mist sm:text-5xl md:text-[3.4rem]">
            Enterprise technology &amp; AI for{" "}
            <span className="text-gradient">growing businesses</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Built by architects with nearly two decades delivering enterprise systems
            across government, banking, education, and the private sector. We modernize
            your infrastructure, automate your operations, and put practical AI to work —
            end to end, under one trusted partner.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#assessment" className="btn-primary">
              Check your AI readiness
            </a>
            <a href="#services" className="btn-ghost">
              Explore what we do
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-slate-line pt-7">
            {[
              ["19+ yrs", "delivery experience"],
              ["20k+", "users served on one system"],
              ["End-to-end", "one accountable partner"],
            ].map(([big, small]) => (
              <div key={small}>
                <dt className="font-display text-xl font-semibold text-mist">{big}</dt>
                <dd className="mt-1 font-display text-[11px] uppercase tracking-wide text-muted">
                  {small}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up md:max-w-none">
          <StackMark className="w-full" labels />
        </div>
      </div>
    </section>
  );
}
