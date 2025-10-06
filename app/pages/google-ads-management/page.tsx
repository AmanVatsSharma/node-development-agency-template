'use client';

import React from 'react';
import { HeroSection } from './_components/hero-section';
import { ResultsSection } from './_components/results-section';
import { ServicesSection } from './_components/services-section';
import { PricingSection } from './_components/pricing-section';
import { CaseStudiesSection } from './_components/case-studies-section';
import { LeadFormSection } from './_components/lead-form-section';
import { FAQSection } from './_components/faq-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';

export default function GoogleAdsManagementPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ResultsSection />
      <ServicesSection />
      <CaseStudiesSection />
      <PricingSection />
      <LeadFormSection />
      <FAQSection />
      <MobileFloatingCTA />
    </main>
  );
}
