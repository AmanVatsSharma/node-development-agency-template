import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'B2B Lead Generation Google Ads India | B2B PPC Agency — Vedpragya',
  description: 'B2B lead generation via Google Ads Search and Display campaigns. Qualified pipeline, not just clicks. Vedpragya — India\'s specialist B2B PPC agency. Free audit.',
  path: '/pages/b2b-lead-generation-ads',
  keywords: [
    'b2b lead generation google ads india',
    'b2b ppc agency india',
    'b2b google ads management india',
    'b2b digital marketing india',
    'lead generation ads india',
    'b2b demand generation india',
    'google ads b2b campaigns india',
  ],
});

import { ServiceNavigation } from '@/app/components/GoogleAdsEcosystem/ServiceNavigation';
import { ROICalculator } from '@/app/components/GoogleAdsEcosystem/ROICalculator';
import { SectionErrorBoundary } from './_components/section-error-boundary';
import { HeroSection } from './_components/hero-section';
import { ProblemSolutionSection } from './_components/problem-solution-section';
import { ServiceFeaturesSection } from './_components/service-features-section';
import { PricingSection } from './_components/pricing-section';
import { CaseStudiesSection } from './_components/case-studies-section';
import { TestimonialsSection } from './_components/testimonials-section';
import { FAQSection } from './_components/faq-section';
import { FinalCTASection } from './_components/final-cta-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { ScrollToTop } from './_components/scroll-to-top';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'B2B Lead Generation Ads India | Google Ads for B2B — Vedpragya',
  description: 'Google Ads campaigns built specifically for B2B lead generation in India. Target decision-makers, generate quality MQLs, and track cost-per-lead. Free strategy call.',
  path: '/pages/b2b-lead-generation-ads',
  keywords: [
    'b2b lead generation ads india',
    'b2b google ads india',
    'b2b ppc india',
    'lead generation ads india',
    'b2b digital marketing india',
    'google ads b2b india',
    'b2b paid search india',
  ],
});

export default function B2BLeadGenerationAdsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* Problem & Solution Section */}
      <SectionErrorBoundary name="ProblemSolutionSection">
        <ProblemSolutionSection />
      </SectionErrorBoundary>

      {/* Service Features Section */}
      <SectionErrorBoundary name="ServiceFeaturesSection">
        <ServiceFeaturesSection />
      </SectionErrorBoundary>


      {/* Pricing Section */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>

      {/* ROI Calculator */}
      <SectionErrorBoundary name="ROICalculator">
        <div className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ROICalculator industry="B2B" />
          </div>
        </div>
      </SectionErrorBoundary>

      {/* Case Studies Section */}
      <SectionErrorBoundary name="CaseStudiesSection">
        <CaseStudiesSection />
      </SectionErrorBoundary>

      {/* Testimonials Section */}
      <SectionErrorBoundary name="TestimonialsSection">
        <TestimonialsSection />
      </SectionErrorBoundary>

      {/* FAQ Section */}
      <SectionErrorBoundary name="FAQSection">
        <FAQSection />
      </SectionErrorBoundary>

      {/* Service Navigation */}
      <SectionErrorBoundary name="ServiceNavigation">
        <div className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceNavigation 
              currentService="b2b-lead-generation-ads"
              showAllServices={false}
            />
          </div>
        </div>
      </SectionErrorBoundary>

      {/* Final CTA Section */}
      <SectionErrorBoundary name="FinalCTASection">
        <FinalCTASection />
      </SectionErrorBoundary>

      {/* Mobile Floating CTA */}
      <MobileFloatingCTA />

      {/* Scroll to Top */}
      <ScrollToTop />
    </main>
  );
}