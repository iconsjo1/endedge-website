import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLandingPage from "@/components/services/ServiceLandingPage";
import {
  SOFTWARE_TRAINING_SLUG,
  getSoftwareTrainingContent,
} from "@/lib/content/software-training";
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
  const content = getSoftwareTrainingContent(locale);
  const meta = servicePageMetadata(locale, SOFTWARE_TRAINING_SLUG, content);
  return { title: meta.title, description: meta.description, alternates: meta.alternates, openGraph: meta.openGraph };
}

export default function SoftwareTrainingPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  return <ServiceLandingPage locale={locale} content={getSoftwareTrainingContent(locale)} />;
}
