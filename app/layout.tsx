import type { ReactNode } from "react";

/** Root layout must exist; locale layout owns <html>/<body>. */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
