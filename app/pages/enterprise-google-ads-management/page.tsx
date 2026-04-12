/**
 * @fileoverview Enterprise Google Ads Management - Tier 1 Service Page
 * @description High-converting landing page for enterprise-level Google Ads management services
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * MARKETING FOCUS:
 * - Enterprise-level positioning (₹75K-₹2L+/month)
 * - Dedicated team and advanced strategies
 * - ROI-focused messaging for large businesses
 * - Comprehensive service coverage
 * - High-value lead generation
 */

// Section Components
import { HeroSection } from './_components/hero-section';
import { ProblemSolutionSection } from './_components/problem-solution-section';
import { ServiceFeaturesSection } from './_components/service-features-section';
import { CaseStudiesSection } from './_components/case-studies-section';
import { TestimonialsSection } from './_components/testimonials-section';
import { PricingSection } from './_components/pricing-section';
import { FAQSection } from './_components/faq-section';
import { FinalCTASection } from './_components/final-cta-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { ScrollToTop } from './_components/scroll-to-top';
import { SectionErrorBoundary } from './_components/section-error-boundary';

// Shared Components
import { ServiceNavigation } from '@/app/components/GoogleAdsEcosystem/ServiceNavigation';
import { ROICalculator } from '@/app/components/GoogleAdsEcosystem/ROICalculator';

export default function EnterpriseGoogleAdsManagementPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Enterprise Positioning */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* Problem/Solution - Enterprise Challenges */}
      <SectionErrorBoundary name="ProblemSolutionSection">
        <ProblemSolutionSection />
      </SectionErrorBoundary>

      {/* Service Features - Enterprise Service Portfolio */}
      <SectionErrorBoundary name="ServiceFeaturesSection">
        <ServiceFeaturesSection />
      </SectionErrorBoundary>

      {/* Case Studies - Enterprise Results */}
      <SectionErrorBoundary name="CaseStudiesSection">
        <CaseStudiesSection />
      </SectionErrorBoundary>


      {/* Testimonials - Enterprise Clients */}
      <SectionErrorBoundary name="TestimonialsSection">
        <TestimonialsSection />
      </SectionErrorBoundary>

      {/* Pricing - Enterprise Pricing */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>


      {/* ROI Calculator - Enterprise ROI */}
      <SectionErrorBoundary name="ROICalculator">
        <div className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ROICalculator industry="Enterprise" />
          </div>
        </div>
      </SectionErrorBoundary>

      {/* FAQ - Enterprise Questions */}
      <SectionErrorBoundary name="FAQSection">
        <FAQSection />
      </SectionErrorBoundary>

      {/* Service Navigation - Cross-Service Discovery */}
      <SectionErrorBoundary name="ServiceNavigation">
        <div className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceNavigation currentService="enterprise-google-ads" />
          </div>
        </div>
      </SectionErrorBoundary>

      {/* Final CTA - Enterprise Lead Form */}
      <SectionErrorBoundary name="FinalCTASection">
        <FinalCTASection />
      </SectionErrorBoundary>

      {/* Scroll To Top - UX Enhancement */}
      <ScrollToTop />

      {/* Mobile Floating CTA - Always Accessible */}
      <MobileFloatingCTA />
    </main>
  );
}