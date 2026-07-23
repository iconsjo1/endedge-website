import type { Dictionary } from "@/lib/i18n/types";

export default function CTA({ dict }: { dict: Dictionary }) {
  const c = dict.cta;

  return (
    <section id="contact" className="border-t border-slate-line bg-ink py-24">
      <div className="shell">
        <div className="card edge-glow relative overflow-hidden px-8 py-14 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-40" aria-hidden />
          <div className="relative">
            <p className="eyebrow">{c.eyebrow}</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-mist md:text-4xl">
              {c.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">{c.body}</p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="mailto:hello@endedge.co" className="btn-primary">
                {c.primary}
              </a>
              <a href="#assessment" className="btn-ghost">
                {c.secondary}
              </a>
            </div>

            <p className="mt-8 font-display text-xs uppercase tracking-widest text-muted">
              {c.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}