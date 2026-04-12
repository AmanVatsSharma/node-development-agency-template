/**
 * @fileoverview Google Ads Ecosystem Hub - Main showcase page for all Google Ads services
 * @description High-converting ecosystem page showcasing mastery of Google Ads industry
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

// Section Components
import { HeroSection } from './_components/hero-section';
import { EcosystemOverview } from './_components/ecosystem-overview';
import { WhyChooseUsSection } from './_components/why-choose-us';
import { CaseStudiesShowcase } from './_components/case-studies-showcase';
import { ExpertTeam } from './_components/expert-team';
import { PricingOverview } from './_components/pricing-overview';
import { TestimonialsSection } from './_components/testimonials-section';
import { FAQSection } from './_components/faq-section';
import { FinalCTASection } from './_components/final-cta-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { ScrollToTop } from './_components/scroll-to-top';
import { SectionErrorBoundary } from './_components/section-error-boundary';

// Interactive client sections (filters, calculator)
import { EcosystemInteractive } from './_components/ecosystem-interactive';

export default function GoogleAdsEcosystemPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Ecosystem Mastery */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* Ecosystem Overview - Complete Service Mastery */}
      <SectionErrorBoundary name="EcosystemOverview">
        <EcosystemOverview />
      </SectionErrorBoundary>

      {/* Interactive: Service Tiers, Industry Focus, ROI Calculator, Service Navigation */}
      <EcosystemInteractive />

      {/* Why Choose Us - Key Differentiators */}
      <SectionErrorBoundary name="WhyChooseUs">
        <WhyChooseUsSection />
      </SectionErrorBoundary>

      {/* Case Studies Showcase - Real Results */}
      <SectionErrorBoundary name="CaseStudiesShowcase">
        <CaseStudiesShowcase />
      </SectionErrorBoundary>

      {/* Expert Team - Credibility Building */}
      <SectionErrorBoundary name="ExpertTeam">
        <ExpertTeam />
      </SectionErrorBoundary>

      {/* Pricing Overview - Transparent Ecosystem Pricing */}
      <SectionErrorBoundary name="PricingOverview">
        <PricingOverview />
      </SectionErrorBoundary>

      {/* Testimonials - Social Proof */}
      <SectionErrorBoundary name="TestimonialsSection">
        <TestimonialsSection />
      </SectionErrorBoundary>

      {/* FAQ - Objection Handling */}
      <SectionErrorBoundary name="FAQSection">
        <FAQSection />
      </SectionErrorBoundary>

      {/* Final CTA - Lead Form with Ecosystem Context */}
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
