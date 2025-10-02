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

// Section Components - CONVERSION OPTIMIZED
import { HeroSection } from './_components/hero-section';
import { ClientLogosSection } from './_components/client-logos-section';
import { TrustSignalsSection } from './_components/trust-signals-section';
import { ServicesSection } from './_components/services-section';
import { RecentProjectsSection } from './_components/recent-projects-section';
import { PricingSection } from './_components/pricing-section';
import { TestimonialsSection } from './_components/testimonials-section';
import { LeadFormSection } from './_components/lead-form-section';
import { FAQSection } from './_components/faq-section';
import { FinalCTASection } from './_components/final-cta-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { SectionErrorBoundary } from './_components/section-error-boundary';

console.log('[Business-Website] Main page component loaded');

/**
 * Business Website Landing Page Component
 * CONVERSION OPTIMIZED VERSION 2.0
 * 
 * CONVERSION-FOCUSED FLOW:
 * 1. Hero - Benefit-driven headline + urgency (3 slots left)
 * 2. Client Logos - Instant credibility with tech partners & certifications
 * 3. Trust Signals - Stats and social proof (500+ clients)
 * 4. Services - Visual service grid with pricing
 * 5. Recent Projects - Real results with metrics (NEW!)
 * 6. Pricing - Enhanced with urgency & better CTAs
 * 7. Testimonials - Photos + specific results
 * 8. Lead Form - Sticky on desktop, optimized CTAs
 * 9. FAQ - Address final objections
 * 10. Final CTA - Strong urgency & FOMO
 * 11. Mobile Floating CTA - Always-visible contact buttons (NEW!)
 * 
 * KEY IMPROVEMENTS:
 * - Action-specific CTAs throughout
 * - Multiple urgency indicators (slots left)
 * - Enhanced visual hierarchy & spacing
 * - Mobile-first sticky elements
 * - Real project showcases with metrics
 * - Trust signals in every section
 */
export default function BusinessWebsitePage() {
  useEffect(() => {
    console.log('[Business-Website] CONVERSION OPTIMIZED Page mounted');
    console.log('[Business-Website] User Agent:', navigator.userAgent);
    console.log('[Business-Website] Viewport:', {
      width: window.innerWidth,
      height: window.innerHeight
    });
    console.log('[Business-Website] Conversion optimization features active');

    return () => {
      console.log('[Business-Website] Page unmounted');
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section - CONVERSION OPTIMIZED: New headline + urgency */}
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

      {/* Mobile Floating CTA - NEW: Always-visible on mobile */}
      <MobileFloatingCTA />
    </main>
  );
}

