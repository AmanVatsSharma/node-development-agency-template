'use client';

/**
 * @fileoverview Business Website Landing Page - Main Entry Point
 * @description High-converting, enterprise-grade landing page for Indian businesses
 * @author Development Agency
 * @version 2.0.0
 * 
 * MARKETING FOCUS:
 * - Indian city targeting (Mumbai, Delhi, Bangalore, etc.)
 * - INR-first pricing (₹13,999, ₹45,999, ₹90,000+)
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

import React, { useEffect } from 'react';

// Section Components
import { HeroSection } from './_components/hero-section';
import { TrustSignalsSection } from './_components/trust-signals-section';
import { ServicesSection } from './_components/services-section';
import { PricingSection } from './_components/pricing-section';
import { TestimonialsSection } from './_components/testimonials-section';
import { LeadFormSection } from './_components/lead-form-section';
import { FAQSection } from './_components/faq-section';
import { FinalCTASection } from './_components/final-cta-section';
import { SectionErrorBoundary } from './_components/section-error-boundary';

console.log('[Business-Website] Main page component loaded');

/**
 * Business Website Landing Page Component
 * 
 * FLOW:
 * 1. Hero - Grab attention with clear value prop and pricing
 * 2. Trust Signals - Build credibility immediately
 * 3. Services - Show complete solutions
 * 4. Pricing - Transparent, affordable packages
 * 5. Testimonials - Social proof from real clients
 * 6. Lead Form - Primary conversion point
 * 7. FAQ - Address objections
 * 8. Final CTA - Last chance to convert
 */
export default function BusinessWebsitePage() {
  useEffect(() => {
    console.log('[Business-Website] Page mounted');
    console.log('[Business-Website] User Agent:', navigator.userAgent);
    console.log('[Business-Website] Viewport:', {
      width: window.innerWidth,
      height: window.innerHeight
    });

    return () => {
      console.log('[Business-Website] Page unmounted');
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section - First Impression */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* Trust Signals - Build Credibility */}
      <SectionErrorBoundary name="TrustSignalsSection">
        <TrustSignalsSection />
      </SectionErrorBoundary>

      {/* Services - Show What We Offer */}
      <SectionErrorBoundary name="ServicesSection">
        <ServicesSection />
      </SectionErrorBoundary>

      {/* Pricing - Transparent & Affordable */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>

      {/* Testimonials - Social Proof */}
      <SectionErrorBoundary name="TestimonialsSection">
        <TestimonialsSection />
      </SectionErrorBoundary>

      {/* Lead Form - Primary Conversion Point */}
      <SectionErrorBoundary name="LeadFormSection">
        <LeadFormSection />
      </SectionErrorBoundary>

      {/* FAQ - Address Concerns */}
      <SectionErrorBoundary name="FAQSection">
        <FAQSection />
      </SectionErrorBoundary>

      {/* Final CTA - Last Conversion Opportunity */}
      <SectionErrorBoundary name="FinalCTASection">
        <FinalCTASection />
      </SectionErrorBoundary>
    </main>
  );
}

