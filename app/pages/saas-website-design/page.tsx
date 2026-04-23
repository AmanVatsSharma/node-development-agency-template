import { HeroSection } from './_components/hero-section';
import { WhatWeBuildSection } from './_components/what-we-build-section';
import { WhyUsSection } from './_components/why-us-section';
import { TechStackSection } from './_components/tech-stack-section';
import { LeadFormSection } from './_components/lead-form-section';
import { FAQSection } from './_components/faq-section';
import { FinalCtaSection } from './_components/final-cta-section';

export default function SaasWebsiteDesignPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhatWeBuildSection />
      <WhyUsSection />
      <TechStackSection />
      <LeadFormSection />
      <FAQSection />
      <FinalCtaSection />
    </main>
  );
}
