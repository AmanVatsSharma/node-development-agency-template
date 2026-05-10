import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'YouTube Advertising Management India | YouTube Ads Agency — Vedpragya',
  description: 'YouTube ad campaigns that drive brand awareness and conversions. In-stream, discovery, and Shorts ads. India-based YouTube advertising agency. Free strategy call.',
  path: '/pages/youtube-advertising-management',
  keywords: [
    'youtube advertising management india',
    'youtube ads agency india',
    'youtube marketing india',
    'youtube ad campaign india',
    'video advertising india',
    'youtube instream ads india',
    'youtube ads management india',
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
  title: 'YouTube Advertising Management India | Video Ads Agency — Vedpragya',
  description: 'YouTube video ad campaigns for Indian brands. In-stream, bumper, and discovery ads. Creative strategy, targeting, and conversion tracking. Reach crores of viewers. Free brief.',
  path: '/pages/youtube-advertising-management',
  keywords: [
    'youtube advertising india',
    'youtube ads management india',
    'youtube video ads india',
    'youtube marketing agency india',
    'youtube ads agency india',
    'video advertising india',
    'youtube campaign management india',
  ],
});

export default function YouTubeAdvertisingManagementPage() {
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
        <div className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ROICalculator industry="YouTube" />
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
        <div className="py-16 md:py-20 bg-gradient-to-br from-red-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceNavigation 
              currentService="youtube-advertising-management"
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