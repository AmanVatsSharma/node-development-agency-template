import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Google Ads for Local Businesses India | Local PPC — Vedpragya',
  description: 'Drive foot traffic and local leads with Google Ads for local businesses. Local Service Ads, location targeting, call campaigns. India-based local PPC experts. Free audit.',
  path: '/pages/local-business-google-ads',
  keywords: [
    'google ads for local business india',
    'local ppc management india',
    'local service ads india',
    'local google ads agency india',
    'small business google ads india',
    'local search ads india',
    'google ads local targeting india',
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

export default function LocalBusinessGoogleAdsPage() {
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
            <ROICalculator industry="Local Business" />
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
              currentService="local-business-google-ads"
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