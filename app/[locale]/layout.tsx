import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins, Roboto, Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import ChatWidget from "@/components/ChatWidget";
import { I18nProvider } from "@/components/I18nProvider";
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

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
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
    robots: { index: true, follow: true },
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
      ? `${cairo.variable} ${poppins.variable} ${roboto.variable} font-arabic`
      : `${poppins.variable} ${roboto.variable} ${cairo.variable} font-sans`;

  return (
    <html lang={locale} dir={dir} className={fontClass} data-theme="dark" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <I18nProvider locale={locale} dict={dict}>
            {children}
            <ChatWidget />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
