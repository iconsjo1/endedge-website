import type { Metadata } from "next";
import { Poppins, Roboto, Cairo } from "next/font/google";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

// Loaded for Arabic (RTL) content when the [locale] pages are added.
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://endedge.co"),
  title: {
    default: "EndEdge — Enterprise Technology & AI Solutions | Dubai",
    template: "%s | EndEdge",
  },
  description:
    "At the Edge of Innovation. EndEdge helps UAE businesses modernize their infrastructure, automate operations, and adopt practical AI — through one trusted technology partner.",
  keywords: [
    "IT services Dubai",
    "managed hosting UAE",
    "AI consulting Dubai",
    "cloud infrastructure UAE",
    "enterprise technology partner",
    "AI automation Dubai",
  ],
  openGraph: {
    title: "EndEdge — Enterprise Technology & AI Solutions",
    description:
      "At the Edge of Innovation. Modernize your infrastructure, automate operations, and adopt AI — with one trusted partner in Dubai.",
    url: "https://endedge.co",
    siteName: "EndEdge",
    locale: "en_AE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${cairo.variable}`}
    >
      <body className="font-sans">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
