import Link from "next/link";
import StackMark from "@/components/ui/StackMark";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0a1230] text-[#eaeef9] antialiased">
        <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
          <StackMark
            className="mx-auto w-full max-w-xs"
            labels
            missingIndex={3}
            idPrefix="not-found"
          />
          <p className="mt-10 font-semibold uppercase tracking-[0.2em] text-[#ff6f00]">404</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">A layer is missing.</h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#93a0c8]">
            This page is not on the stack. Head back to the edge and continue from home.
          </p>
          <Link
            href="/en"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-[#ff6f00] px-5 py-3 text-sm font-medium text-white"
          >
            Back to the edge
          </Link>
        </main>
      </body>
    </html>
  );
}
