import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CaseStudyArticle from "@/components/case-studies/CaseStudyArticle";
import {
  CASE_STUDIES,
  CASE_STUDIES_INTRO,
} from "@/lib/content/case-studies";
import { COMPANY } from "@/lib/constants/company";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Detailed, anonymized EndEdge case studies — Kubernetes migrations, banking compliance platforms, Arabic RAG pipelines, AWS retail modernization, and managed education hosting.",
  openGraph: {
    title: "Case Studies | EndEdge",
    description:
      "Real-world enterprise outcomes: cloud migration metrics, Docker & Kubernetes stacks, custom RAG, and managed operations.",
    url: "https://endedge.co/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Nav />
      <main className="bg-ink pt-24 text-mist">
        <div className="shell pb-8">
          <p className="eyebrow">{CASE_STUDIES_INTRO.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {CASE_STUDIES_INTRO.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            {CASE_STUDIES_INTRO.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="mailto:hello@endedge.co" className="btn-primary">
              Discuss a similar project
            </a>
            <Link href="/#assessment" className="btn-ghost">
              Try the AI readiness check
            </Link>
          </div>

          <nav
            aria-label="Case study index"
            className="mt-14 rounded-xl border border-slate-line bg-slate-panel p-5 md:p-6"
          >
            <h2 className="font-display text-xs uppercase tracking-widest text-orange">
              On this page
            </h2>
            <ol className="mt-4 grid gap-2 sm:grid-cols-2">
              {CASE_STUDIES.map((study, index) => (
                <li key={study.slug}>
                  <a
                    href={`#${study.slug}`}
                    className="group flex gap-3 rounded-md px-2 py-2 text-sm text-mist/85 transition-colors hover:bg-ink hover:text-orange"
                  >
                    <span className="font-display text-xs text-orange/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-snug group-hover:text-orange">{study.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <section className="border-t border-slate-line py-4">
          <div className="shell">
            {CASE_STUDIES.map((study, index) => (
              <CaseStudyArticle key={study.slug} study={study} index={index} />
            ))}
          </div>
        </section>

        <section className="border-t border-slate-line py-20">
          <div className="shell">
            <div className="card edge-glow mx-auto max-w-3xl px-8 py-12 text-center md:px-12">
              <p className="eyebrow">Next step</p>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                Want outcomes like these for your organization?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
                Share your context — infrastructure, compliance constraints, or AI use cases — and
                we&apos;ll give you an honest view of what&apos;s feasible and how we&apos;d approach it.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={`mailto:${COMPANY.email}`} className="btn-primary">
                  Book a consultation
                </a>
                <Link href="/" className="btn-ghost">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
