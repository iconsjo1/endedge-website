import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Services from "@/components/Services";
import ValueStack from "@/components/ValueStack";
import Readiness from "@/components/Readiness";
import WhyEndEdge from "@/components/WhyEndEdge";
import CaseStudiesTeaser from "@/components/CaseStudiesTeaser";
import TechStack from "@/components/TechStack";
import Industries from "@/components/Industries";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Nav />
      <main>
        <Hero dict={dict} locale={locale} />
        <LogoStrip dict={dict} />
        <div data-edge-section>
          <Services dict={dict} locale={locale} />
        </div>
        <ValueStack dict={dict} />
        <Readiness />
        <div data-edge-section>
          <WhyEndEdge dict={dict} />
        </div>
        <div data-edge-section>
          <CaseStudiesTeaser dict={dict} locale={locale} />
        </div>
        <div data-edge-section>
          <TechStack dict={dict} />
        </div>
        <div data-edge-section>
          <Industries dict={dict} />
        </div>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
