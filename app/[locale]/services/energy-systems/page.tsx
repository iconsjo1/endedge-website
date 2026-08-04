import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLandingPage from "@/components/services/ServiceLandingPage";
import { ENERGY_SYSTEMS_SLUG, getEnergySystemsContent } from "@/lib/content/energy-systems";
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
  const content = getEnergySystemsContent(locale);
  const meta = servicePageMetadata(locale, ENERGY_SYSTEMS_SLUG, content);
  return {
    title: meta.title,
    description: meta.description,
    alternates: meta.alternates,
    openGraph: meta.openGraph,
    twitter: meta.twitter,
  };
}

export default function EnergySystemsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  return (
    <ServiceLandingPage
      locale={locale}
      content={getEnergySystemsContent(locale)}
      stackLayer={0}
      slug={ENERGY_SYSTEMS_SLUG}
    />
  );
}