import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins, Roboto, El_Messiri } from "next/font/google";
import { notFound } from "next/navigation";
import ChatWidget from "@/components/ChatWidget";
import BrandCursor from "@/components/BrandCursor";
import ScrollEdgeTrace from "@/components/brand/ScrollEdgeTrace";
import SectionTicks from "@/components/brand/SectionTicks";
import BackToTopChevron from "@/components/brand/BackToTopChevron";
import LocaleCutWipe from "@/components/brand/LocaleCutWipe";
import AnalyticsScripts from "@/components/AnalyticsScripts";
import JsonLd from "@/components/JsonLd";
import { I18nProvider } from "@/components/I18nProvider";
import { GOOGLE_SITE_VERIFICATION } from "@/lib/analytics";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/json-ld";
import { ThemeProvider, themeInitScript } from "@/components/ThemeProvider";
import {
  defaultLocale,
  isLocale,
  localeDirection,
  locales,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import "../globals.css";

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

const elMessiri = El_Messiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-el-messiri",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = await getDictionary(locale);
  return {
    metadataBase: new URL("https://endedge.co"),
    title: {
      default: dict.meta.titleDefault,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
    alternates: {
      languages: {
        en: "/en",
        ar: "/ar",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: dict.meta.titleDefault,
      description: dict.meta.description,
      url: `https://endedge.co/${locale}`,
      siteName: "EndEdge",
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      type: "website",
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
    },
    manifest: "/site.webmanifest",
    robots: { index: true, follow: true },
    ...(GOOGLE_SITE_VERIFICATION
      ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
      : {}),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = await getDictionary(locale);
  const dir = localeDirection(locale);
  const fontClass =
    locale === "ar"
      ? `${elMessiri.variable} ${poppins.variable} font-arabic`
      : `${poppins.variable} ${roboto.variable} font-sans`;

  return (
    <html lang={locale} dir={dir} className={fontClass} data-theme="dark" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <JsonLd data={[organizationJsonLd(locale as Locale), websiteJsonLd()]} />
        <AnalyticsScripts />
        <ThemeProvider>
          <I18nProvider locale={locale} dict={dict}>
            {children}
            <ChatWidget />
            <BrandCursor />
            <ScrollEdgeTrace />
            <SectionTicks />
            <BackToTopChevron />
            <LocaleCutWipe />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
