/**
 * @fileoverview Business Website Landing Page - Main Entry Point
 * @description High-converting, enterprise-grade landing page for Indian businesses
 * @author Development Agency
 * @version 2.0.0
 * 
 * MARKETING FOCUS:
 * - Indian city targeting (Mumbai, Delhi, Bangalore, etc.)
 * - INR-first pricing (₹9,999, ₹29,999, ₹59,999+)
 * - Problem-solving approach with complete digital solutions
 * - Fast lead capture with multiple touchpoints
 * - Mobile-first design for Indian market
 * 
 * ARCHITECTURE:
 * - Component-based architecture with error boundaries
 * - Each section is a separate, reusable component
 * - Comprehensive error handling and logging
 * - Accessibility-first approach (ARIA labels, semantic HTML)
 */

// Section Components - SIMPLIFIED WITH DEVICE SHOWCASE ONLY
import { HeroSection } from './_components/hero-section'; // Clean text-only hero
import { ClientLogosSection } from './_components/client-logos-section';
import { TrustSignalsSection } from './_components/trust-signals-section';
import { ServicesSection } from './_components/services-section';
import { DeviceShowcase } from './_components/device-showcase'; // ✅ ONLY ILLUSTRATION - User loved this!
import { RecentProjectsSection } from './_components/recent-projects-section';
import { PricingSection } from './_components/pricing-section';
import { TestimonialsSection } from './_components/testimonials-section';
import { LeadFormSection } from './_components/lead-form-section';
import { FAQSection } from './_components/faq-section';
import { FinalCTASection } from './_components/final-cta-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { ScrollToTop } from './_components/scroll-to-top';
import { SectionErrorBoundary } from './_components/section-error-boundary';

export default function BusinessWebsitePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Clean text-only, no illustrations */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* Client Logos - NEW: Instant credibility */}
      <SectionErrorBoundary name="ClientLogosSection">
        <ClientLogosSection />
      </SectionErrorBoundary>

      {/* Trust Signals - Build Credibility with Stats */}
      <SectionErrorBoundary name="TrustSignalsSection">
        <TrustSignalsSection />
      </SectionErrorBoundary>

      {/* Services - Show Complete Solutions */}
      <SectionErrorBoundary name="ServicesSection">
        <ServicesSection />
      </SectionErrorBoundary>

      {/* Device Showcase - ✅ OPTION 3: 3-Device Responsive Design */}
      <SectionErrorBoundary name="DeviceShowcase">
        <DeviceShowcase />
      </SectionErrorBoundary>

      {/* Recent Projects - NEW: Real results & metrics */}
      <SectionErrorBoundary name="RecentProjectsSection">
        <RecentProjectsSection />
      </SectionErrorBoundary>

      {/* Pricing - ENHANCED: Urgency + better CTAs */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>

      {/* Testimonials - Social Proof with Photos */}
      <SectionErrorBoundary name="TestimonialsSection">
        <TestimonialsSection />
      </SectionErrorBoundary>

      {/* Lead Form - OPTIMIZED: Sticky + better CTAs */}
      <SectionErrorBoundary name="LeadFormSection">
        <LeadFormSection />
      </SectionErrorBoundary>

      {/* FAQ - Address Final Concerns */}
      <SectionErrorBoundary name="FAQSection">
        <FAQSection />
      </SectionErrorBoundary>

      {/* Final CTA - ENHANCED: Strong urgency */}
      <SectionErrorBoundary name="FinalCTASection">
        <FinalCTASection />
      </SectionErrorBoundary>

      {/* Scroll To Top - NEW: Middle-right smooth rectangle */}
      <ScrollToTop />

      {/* Mobile Floating CTA - ENHANCED: Professional with message */}
      <MobileFloatingCTA />
    </main>
  );
}

