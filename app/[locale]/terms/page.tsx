import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalLayout, legalMetadata } from "@/components/LegalLayout";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = await getDictionary(params.locale);
  return legalMetadata(dict.legal.termsTitle, dict.legal.termsDescription);
}

export default async function TermsPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const { legal } = dict;

  return (
    <LegalLayout title={legal.termsTitle} locale={locale} legal={legal}>
      <p>{legal.terms.intro}</p>
      {legal.terms.sections.map((section) => (
        <section key={section.title} className="space-y-3">
          <h2 className="font-display text-lg font-semibold text-mist">{section.title}</h2>
          <div
            className="text-mist/85"
            dangerouslySetInnerHTML={{ __html: section.html }}
          />
        </section>
      ))}
    </LegalLayout>
  );
}
