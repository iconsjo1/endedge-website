import type { Dictionary } from "@/lib/i18n/types";

export default function LogoStrip({ dict }: { dict: Dictionary }) {
  const { label, sectors } = dict.logoStrip;

  return (
    <section className="border-y border-slate-line bg-slate-panel/40 py-8">
      <div className="shell">
        <p className="text-center font-display text-[11px] uppercase tracking-[0.2em] text-muted">
          {label}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {sectors.map((s) => (
            <span
              key={s}
              className="font-display text-sm font-medium text-muted/80 transition-colors hover:text-mist"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
