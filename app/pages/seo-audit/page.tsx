/**
 * @fileoverview SEO Audit Landing Page - Main Entry Point
 * @description High-converting SEO audit landing page with instant audit widget
 * @version 1.0.0
 * 
 * MARKETING FOCUS:
 * - Free 60-second SEO audit with instant results
 * - Lead generation through value-first approach
 * - Tiered paid audit packages (Starter/Professional/Enterprise)
 * - INR pricing (₹6,999, ₹19,999, ₹49,999)
 * - Complete deliverables transparency
 * 
 * ARCHITECTURE:
 * - Component-based with error boundaries
 * - Real-time audit widget with API integration
 * - Comprehensive SEO metadata and JSON-LD schema
 * - Mobile-first, conversion-optimized design
 */

import { HeroSection } from './_components/hero-section';
import { InstantAuditWidget } from './_components/instant-audit-widget';
import { HowItWorksSection } from './_components/how-it-works-section';
import { PricingSection } from './_components/pricing-section';
import { DeliverablesSection } from './_components/deliverables-section';
import { TrustSection } from './_components/trust-section';
import { TestimonialsSection } from './_components/testimonials-section';
import { FAQSection } from './_components/faq-section';
import { FinalCTASection } from './_components/final-cta-section';
import { SectionErrorBoundary } from '../business-website/_components/section-error-boundary';

export default function SEOAuditPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section with Instant Audit Widget */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* How It Works - Trust Builder */}
      <SectionErrorBoundary name="HowItWorksSection">
        <HowItWorksSection />
      </SectionErrorBoundary>

      {/* Trust Signals - Logos & Stats */}
      <SectionErrorBoundary name="TrustSection">
        <TrustSection />
      </SectionErrorBoundary>

      {/* Pricing Tiers */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>

      {/* Deliverables - What You Get */}
      <SectionErrorBoundary name="DeliverablesSection">
        <DeliverablesSection />
      </SectionErrorBoundary>

      {/* Testimonials - Social Proof */}
      <SectionErrorBoundary name="TestimonialsSection">
        <TestimonialsSection />
      </SectionErrorBoundary>

      {/* FAQ */}
      <SectionErrorBoundary name="FAQSection">
        <FAQSection />
      </SectionErrorBoundary>

      {/* Final CTA */}
      <SectionErrorBoundary name="FinalCTASection">
        <FinalCTASection />
      </SectionErrorBoundary>
    </main>
  );
}
