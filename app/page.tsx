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

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoStrip />
        <Services />
        <ValueStack />
        <Readiness />
        <WhyEndEdge />
        <CaseStudiesTeaser />
        <TechStack />
        <Industries />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
