import Link from "next/link";
import StackMark from "@/components/ui/StackMark";
import "./globals.css";

/**
 * Global not-found replaces the root layout (no locale shell / CSS).
 * Import globals + hardcode critical colors so the broken-edge page never
 * renders as black-on-black when Tailwind tokens fail to hydrate.
 */
export default function NotFound() {
  return (
    <html lang="en" data-theme="dark">
      <body
        className="min-h-screen bg-ink text-mist antialiased"
        style={{ backgroundColor: "#0a1230", color: "#eaeef9" }}
      >
        <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
          <StackMark
            className="mx-auto w-full max-w-xs"
            labels
            missingIndex={3}
            idPrefix="not-found"
          />
          <p
            className="mt-10 font-semibold uppercase tracking-[0.2em] text-orange"
            style={{ color: "#ff6f00" }}
          >
            404
          </p>
          <h1
            className="mt-3 text-3xl font-semibold tracking-tight"
            style={{ color: "#eaeef9" }}
          >
            A layer is missing.
          </h1>
          <p
            className="mt-4 max-w-md text-base leading-relaxed text-muted"
            style={{ color: "#93a0c8" }}
          >
            This page is not on the stack. Head back to the edge and continue from home.
          </p>
          <Link
            href="/en"
            className="btn-primary mt-8"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0.375rem",
              backgroundColor: "#ff6f00",
              padding: "0.75rem 1.25rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            Back to the edge
          </Link>
        </main>
      </body>
    </html>
  );
}
