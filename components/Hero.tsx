import StackMark from "./ui/StackMark";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";

export default function Hero({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const h = dict.hero;

  return (
    <section id="top" className="relative overflow-hidden pt-[4.25rem]">
      {/* Grid backdrop + animated edge trace */}
      <div className="pointer-events-none absolute inset-0 grid-backdrop" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-16 h-40 w-px -translate-x-1/2 bg-gradient-to-b from-orange to-transparent opacity-70 [animation:edge-trace_6s_ease-in-out_infinite]"
        aria-hidden
      />

      <div className="shell relative grid items-center gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
        <div>
          <p className="eyebrow hero-reveal" style={{ animationDelay: "0.05s" }}>
            {h.eyebrow}
          </p>

          <h1
            className="hero-reveal mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-mist sm:text-5xl md:text-[3.4rem]"
            style={{ animationDelay: "0.15s" }}
          >
            {h.titleBefore}
            <span className="text-gradient">{h.titleHighlight}</span>
            {h.titleAfter}
          </h1>

          <p
            className="hero-reveal mt-6 max-w-xl text-lg leading-relaxed text-muted"
            style={{ animationDelay: "0.28s" }}
          >
            {h.body}
          </p>

          <div
            className="hero-reveal mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="#assessment" className="btn-primary">
              {h.ctaPrimary}
            </a>
            <a href="#services" className="btn-ghost">
              {h.ctaSecondary}
            </a>
          </div>

          <dl
            className="hero-reveal mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-slate-line pt-7"
            style={{ animationDelay: "0.55s" }}
          >
            {h.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-xl font-semibold text-mist">{stat.value}</dt>
                <dd className="mt-1 font-display text-[11px] uppercase tracking-wide text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="hero-reveal relative mx-auto w-full max-w-sm md:max-w-none"
          style={{ animationDelay: "0.2s" }}
        >
          <StackMark
            className="w-full"
            labels={dict.stackLabels}
            rtl={locale === "ar"}
            animate
          />
        </div>
      </div>
    </section>
  );
}
