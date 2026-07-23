"use client";

import { useState } from "react";
import { useI18n } from "@/components/I18nProvider";

interface Report {
  total: number;
  band: string;
  dimensions: { dimension: string; score: number }[];
  headline: string;
  summary: string;
  recommendations: string[];
  source: "ai" | "fallback";
}

type Phase = "intro" | "quiz" | "loading" | "result" | "error";

export default function Readiness() {
  const { locale, dict } = useI18n();
  const r = dict.readiness;
  const questions = r.questions;

  const [phase, setPhase] = useState<Phase>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [report, setReport] = useState<Report | null>(null);

  const total = questions.length;
  const q = questions[step];
  const answered = q ? answers[q.id] !== undefined : false;

  function choose(idx: number) {
    setAnswers((a) => ({ ...a, [q.id]: idx }));
  }

  async function submit() {
    setPhase("loading");
    try {
      const res = await fetch("/api/assess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers, locale }),
      });
      if (!res.ok) throw new Error("Request failed");
      const data: Report = await res.json();
      setReport(data);
      setPhase("result");
    } catch {
      setPhase("error");
    }
  }

  function next() {
    if (step < total - 1) setStep(step + 1);
    else submit();
  }

  function reset() {
    setAnswers({});
    setStep(0);
    setReport(null);
    setPhase("intro");
  }

  return (
    <section id="assessment" className="relative border-t border-slate-line bg-ink py-24">
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{r.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-mist md:text-4xl">
            {r.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{r.body}</p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="card edge-glow overflow-hidden p-1">
            <div className="rounded-lg bg-ink p-7 md:p-9">
              {phase === "intro" && (
                <div className="animate-fade-up text-center">
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-slate-line bg-slate-panel">
                    <span className="font-display text-lg text-orange">AI</span>
                  </div>
                  <p className="font-display text-xs uppercase tracking-widest text-muted">
                    {r.meta}
                  </p>
                  <button onClick={() => setPhase("quiz")} className="btn-primary mt-6">
                    {r.start}
                  </button>
                </div>
              )}

              {phase === "quiz" && q && (
                <div className="animate-fade-up">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-display text-xs text-muted">
                      {String(step + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </span>
                    <div className="ml-4 h-1 flex-1 overflow-hidden rounded-full bg-slate-line">
                      <div
                        className="h-full rounded-full bg-orange transition-all duration-300"
                        style={{ width: `${((step + (answered ? 1 : 0)) / total) * 100}%` }}
                      />
                    </div>
                  </div>

                  <p className="font-display text-[11px] uppercase tracking-widest text-orange">
                    {q.dimension}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-medium text-mist">{q.prompt}</h3>

                  <div className="mt-6 space-y-3">
                    {q.options.map((opt, i) => {
                      const selected = answers[q.id] === i;
                      return (
                        <button
                          key={i}
                          onClick={() => choose(i)}
                          aria-pressed={selected}
                          className={`flex w-full items-center gap-3 rounded-lg border px-4 py-3.5 text-left text-sm transition-colors ${
                            selected
                              ? "border-orange bg-orange/10 text-mist"
                              : "border-slate-line bg-slate-panel text-muted hover:border-muted hover:text-mist"
                          }`}
                        >
                          <span
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                              selected ? "border-orange" : "border-muted"
                            }`}
                          >
                            {selected && <span className="h-2 w-2 rounded-full bg-orange" />}
                          </span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-7 flex items-center justify-between">
                    <button
                      onClick={() => (step > 0 ? setStep(step - 1) : setPhase("intro"))}
                      className="font-sans text-sm text-muted hover:text-mist"
                    >
                      {r.back}
                    </button>
                    <button
                      onClick={next}
                      disabled={!answered}
                      className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {step < total - 1 ? r.next : r.seeReport}
                    </button>
                  </div>
                </div>
              )}

              {phase === "loading" && (
                <div className="py-10 text-center">
                  <div className="mx-auto flex items-center justify-center gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange"
                        style={{ animationDelay: `${i * 150}ms` }}
                      />
                    ))}
                  </div>
                  <p className="mt-5 font-display text-xs uppercase tracking-widest text-muted">
                    {r.analyzing}
                  </p>
                </div>
              )}

              {phase === "result" && report && (
                <div className="animate-fade-up">
                  <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">
                    <ScoreDial value={report.total} band={report.band} />
                    <div>
                      <p className="font-display text-[11px] uppercase tracking-widest text-orange">
                        {r.readinessLabel} · {report.band}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-mist">
                        {report.headline}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-muted">
                    {report.summary}
                  </p>

                  <div className="mt-6 border-t border-slate-line pt-5">
                    <p className="font-display text-[11px] uppercase tracking-widest text-muted">
                      {r.nextSteps}
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {report.recommendations.map((rec, i) => (
                        <li key={i} className="flex gap-3 text-sm text-mist">
                          <span className="mt-0.5 font-display text-xs text-orange">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="leading-relaxed">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a href={`/${locale}/#contact`} className="btn-primary flex-1">
                      {r.discuss}
                    </a>
                    <button onClick={reset} className="btn-ghost">
                      {r.retake}
                    </button>
                  </div>
                </div>
              )}

              {phase === "error" && (
                <div className="py-8 text-center">
                  <p className="text-sm text-mist">{r.error}</p>
                  <button onClick={submit} className="btn-ghost mt-5">
                    {r.tryAgain}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScoreDial({ value, band }: { value: number; band: string }) {
  const radius = 34;
  const c = 2 * Math.PI * radius;
  const offset = c - (value / 100) * c;
  return (
    <div className="relative h-24 w-24 shrink-0">
      <svg viewBox="0 0 80 80" className="h-24 w-24 -rotate-90">
        <circle cx="40" cy="40" r={radius} fill="none" stroke="var(--dial-track)" strokeWidth="7" />
        <circle
          cx="40"
          cy="40"
          r={radius}
          fill="none"
          stroke="url(#dial)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
        <defs>
          <linearGradient id="dial" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--orange)" />
            <stop offset="100%" stopColor="var(--navy)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-2xl font-semibold text-mist">{value}</span>
        <span className="font-display text-[9px] uppercase tracking-wider text-muted">/ 100</span>
      </div>
      <span className="sr-only">{band}</span>
    </div>
  );
}
