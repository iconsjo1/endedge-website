import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLandingPage from "@/components/services/ServiceLandingPage";
import { IT_CONSULTANCY_SLUG, getItConsultancyContent } from "@/lib/content/it-consultancy";
import { servicePageMetadata } from "@/lib/content/service-landing";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const content = getItConsultancyContent(locale);
  const meta = servicePageMetadata(locale, IT_CONSULTANCY_SLUG, content);
  return { title: meta.title, description: meta.description, alternates: meta.alternates, openGraph: meta.openGraph };
}

export default function ItConsultancyPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  return (
    <ServiceLandingPage locale={locale} content={getItConsultancyContent(locale)} stackLayer={2} />
  );
}
