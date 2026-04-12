/**
 * @fileoverview EnterpriseHero CRM - Main Showcase Page
 * @description Premium self-hosted CRM built on BharatERP stack
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * CONVERSION FLOW:
 * 1. Hero - "Your Business. Your Data. Your CRM."
 * 2. About - Battle-tested CRM with 4 pillars
 * 3. Core Modules - 6 animated feature cards
 * 4. Customization - Dynamic use-cases & BharatERP integration
 * 5. Implementation - 5-step process timeline
 * 6. Security - Enterprise-grade protection
 * 7. Showcase - Visual carousel of features
 * 8. Trust - Testimonials & enterprise logos
 * 9. Pricing - Transparent INR packages
 * 10. Final CTA - Strong closing with demo request
 * 
 * BRANDING:
 * - Primary: Bharat Blue #002F9E
 * - Accent: Gold #FFD700
 * - Success: Emerald #00C897
 * - Premium, polished, professional, enterprise-grade
 * 
 * FEATURES:
 * - Mobile-first responsive design
 * - Scroll animations with Framer Motion
 * - Glass-effect cards with gradients
 * - Error boundaries for resilience
 * - Console logs for debugging
 * - SEO optimized
 */

// Section Components
import { HeroSection } from './_components/hero-section';
import { AboutSection } from './_components/about-section';
import { CoreModulesSection } from './_components/core-modules-section';
import { CustomizationSection } from './_components/customization-section';
import { ImplementationSection } from './_components/implementation-section';
import { SecuritySection } from './_components/security-section';
import { ShowcaseSection } from './_components/showcase-section';
import { TrustSection } from './_components/trust-section';
import { PricingSection } from './_components/pricing-section';
import { FinalCTASection } from './_components/final-cta-section';

// Utility Components
import { SectionErrorBoundary } from './_components/section-error-boundary';
import { ScrollToTop } from './_components/scroll-to-top';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';

export default function CRMPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section - "Your Business. Your Data. Your CRM." */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* About Section - Battle-Tested CRM with 4 Pillars */}
      <SectionErrorBoundary name="AboutSection">
        <AboutSection />
      </SectionErrorBoundary>

      {/* Core Modules - 6 Animated Feature Cards */}
      <SectionErrorBoundary name="CoreModulesSection">
        <CoreModulesSection />
      </SectionErrorBoundary>

      {/* Customization & Integration - Dynamic Use-Cases */}
      <SectionErrorBoundary name="CustomizationSection">
        <CustomizationSection />
      </SectionErrorBoundary>

      {/* Implementation Process - 5-Step Timeline */}
      <SectionErrorBoundary name="ImplementationSection">
        <ImplementationSection />
      </SectionErrorBoundary>

      {/* Security & Reliability - Dark Section with Gold Shield */}
      <SectionErrorBoundary name="SecuritySection">
        <SecuritySection />
      </SectionErrorBoundary>

      {/* Visual Showcase - Feature Carousel */}
      <SectionErrorBoundary name="ShowcaseSection">
        <ShowcaseSection />
      </SectionErrorBoundary>

      {/* Enterprise Trust - Testimonials & Logos */}
      <SectionErrorBoundary name="TrustSection">
        <TrustSection />
      </SectionErrorBoundary>

      {/* Pricing Snapshot - Two Clear Packages */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>

      {/* Final CTA - Strong Closing with Tricolor Wave */}
      <SectionErrorBoundary name="FinalCTASection">
        <FinalCTASection />
      </SectionErrorBoundary>

      {/* Utility Components */}
      <ScrollToTop />
      <MobileFloatingCTA />
    </main>
  );
}
