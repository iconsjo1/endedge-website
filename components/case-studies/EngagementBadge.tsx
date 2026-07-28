type Props = {
  type: "production" | "demonstrator";
  researchBacked?: boolean;
  labels: {
    production: string;
    demonstrator: string;
    researchBacked: string;
  };
};

export default function EngagementBadge({ type, researchBacked, labels }: Props) {
  const isProduction = type === "production";

  return (
    <span className="flex flex-wrap items-center gap-2">
      <span
        className={`rounded-full border px-2.5 py-0.5 font-display text-[10px] uppercase tracking-wider ${
          isProduction
            ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
            : "border-amber-500/40 bg-amber-500/10 text-amber-200"
        }`}
      >
        {isProduction ? labels.production : labels.demonstrator}
      </span>
      {researchBacked ? (
        <span className="rounded-full border border-slate-line px-2.5 py-0.5 font-display text-[10px] uppercase tracking-wider text-muted">
          {labels.researchBacked}
        </span>
      ) : null}
    </span>
  );
}
