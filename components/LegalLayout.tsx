import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/constants/company";

type LegalLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export function legalMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    robots: { index: true, follow: true },
  };
}

export function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <>
      <Nav />
      <main className="min-h-[70vh] bg-ink py-20 text-mist">
        <div className="shell max-w-3xl">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-3 text-sm text-muted">
            Last updated: {COMPANY.lastUpdated}
          </p>
          <div className="prose-legal mt-10 space-y-6 text-sm leading-relaxed text-mist/90">
            {children}
          </div>
          <p className="mt-12 text-sm text-muted">
            Questions? Contact us at{" "}
            <a href={`mailto:${COMPANY.email}`} className="text-orange hover:underline">
              {COMPANY.email}
            </a>
            .
          </p>
          <p className="mt-6">
            <Link href="/" className="text-sm text-orange hover:underline">
              ← Back to home
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
