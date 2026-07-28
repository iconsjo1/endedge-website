import type { Dictionary } from "@/lib/i18n/types";

type IconProps = { className?: string };

function IndustryIcon({ id, className }: { id: string; className?: string }) {
  const props: IconProps = {
    className: className ?? "h-5 w-5",
  };

  switch (id) {
    case "government":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
          <path d="M4 20V10l8-5 8 5v10" strokeLinejoin="round" />
          <path d="M9 20v-6h6v6" strokeLinejoin="round" />
          <path d="M4 10h16" strokeLinecap="round" />
        </svg>
      );
    case "banking":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
          <path d="M3 10h18M5 10V19M9 10V19M15 10V19M19 10V19M2 10l10-6 10 6" strokeLinejoin="round" />
        </svg>
      );
    case "healthcare":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
          <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z" strokeLinejoin="round" />
          <path d="M12 11v4M10 13h4" strokeLinecap="round" />
        </svg>
      );
    case "education":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
          <path d="M12 3 2 8l10 5 10-5-10-5z" strokeLinejoin="round" />
          <path d="M6 11v4c0 2 2.5 4 6 4s6-2 6-4v-4" strokeLinejoin="round" />
        </svg>
      );
    case "retail":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
          <path d="M6 7h15l-1.5 9H7.5L6 7z" strokeLinejoin="round" />
          <path d="M6 7 5 3H2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="19" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="17" cy="19" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "real-estate":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
          <path d="M3 11l9-7 9 7" strokeLinejoin="round" />
          <path d="M5 10v9h14v-9" strokeLinejoin="round" />
          <path d="M10 19v-5h4v5" strokeLinejoin="round" />
        </svg>
      );
    case "professional-services":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
          <path d="M14 3h7v7" strokeLinejoin="round" />
          <path d="M10 14 21 3" strokeLinecap="round" />
          <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" strokeLinejoin="round" />
        </svg>
      );
    case "logistics":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
          <path d="M3 7h11v8H3V7z" strokeLinejoin="round" />
          <path d="M14 10h3l3 3v2h-6v-5z" strokeLinejoin="round" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}

export default function Industries({ dict }: { dict: Dictionary }) {
  const i = dict.industries;

  return (
    <section id="industries" className="relative overflow-hidden bg-paper py-24 text-graphite">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(20,37,126,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,37,126,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="pointer-events-none absolute -end-24 top-16 h-64 w-64 rounded-full bg-orange/[0.07] blur-3xl"
        aria-hidden
      />

      <div className="shell relative">
        <div className="max-w-2xl">
          <p className="eyebrow">{i.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {i.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone">{i.body}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {i.items.map((item, index) => (
            <article
              key={item.id}
              className="group relative flex flex-col rounded-xl border border-black/[0.07] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange/35 hover:shadow-[0_20px_50px_-28px_rgba(255,111,0,0.45)]"
            >
              <span
                className="absolute inset-y-0 start-0 w-1 rounded-s-xl bg-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy/[0.06] text-navy transition-colors duration-300 group-hover:bg-orange/10 group-hover:text-orange">
                  <IndustryIcon id={item.id} />
                </div>
                <span className="font-display text-[10px] font-semibold tabular-nums text-stone/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 font-display text-sm font-semibold leading-snug text-graphite transition-colors group-hover:text-navy">
                {item.name}
              </h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-stone">{item.hint}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
