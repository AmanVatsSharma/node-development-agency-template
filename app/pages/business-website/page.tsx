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

// Section Components - CONVERSION OPTIMIZED with NEW ILLUSTRATIONS
import { HeroSection } from './_components/hero-section'; // ✅ Option 1: Website Transformation
import { ClientLogosSection } from './_components/client-logos-section';
import { TrustSignalsSection } from './_components/trust-signals-section';
import { GrowthDashboardSection } from './_components/growth-dashboard-section'; // ✅ Option 2: Growth Dashboard
import { ServicesSection } from './_components/services-section';
import { DeviceShowcase } from './_components/device-showcase'; // ✅ Option 3: 3-Device Showcase
import { RecentProjectsSection } from './_components/recent-projects-section';
import { PricingSection } from './_components/pricing-section';
import { TestimonialsSection } from './_components/testimonials-section';
import { LeadFormSection } from './_components/lead-form-section';
import { FAQSection } from './_components/faq-section';
import { FinalCTASection } from './_components/final-cta-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { ScrollToTop } from './_components/scroll-to-top';
import { SectionErrorBoundary } from './_components/section-error-boundary';

console.log('[Business-Website] Main page component loaded');

/**
 * Business Website Landing Page Component
 * CONVERSION OPTIMIZED VERSION 2.0
 * 
 * CONVERSION-FOCUSED FLOW WITH 3 NEW VISUAL ILLUSTRATIONS:
 * 1. Hero - ✅ OPTION 1: Website Transformation Visualization (Old vs New)
 * 2. Client Logos - Instant credibility with tech partners & certifications
 * 3. Trust Signals - Stats and social proof (500+ clients)
 * 4. Growth Dashboard - ✅ OPTION 2: Indian Business Growth Dashboard (NEW!)
 * 5. Services - Visual service grid with pricing
 * 6. Device Showcase - ✅ OPTION 3: 3-Device Responsive Design (NEW!)
 * 7. Recent Projects - Real results with metrics
 * 8. Pricing - Enhanced with urgency & better CTAs
 * 9. Testimonials - Photos + specific results
 * 10. Lead Form - Sticky on desktop, optimized CTAs
 * 11. FAQ - Address final objections
 * 12. Final CTA - Strong urgency & FOMO
 * 13. Mobile Floating CTA - Always-visible contact buttons
 * 
 * KEY IMPROVEMENTS V2.0:
 * - ✅ Option 1: Website Transformation in Hero (before/after comparison)
 * - ✅ Option 2: Growth Dashboard (India map, metrics, revenue charts)
 * - ✅ Option 3: 3-Device Showcase (responsive design demonstration)
 * - Action-specific CTAs throughout
 * - Multiple urgency indicators (slots left)
 * - Enhanced visual hierarchy & spacing
 * - Mobile-first sticky elements
 * - Real project showcases with metrics
 * - Trust signals in every section
 */
export default function BusinessWebsitePage() {
  useEffect(() => {
    console.log('[Business-Website] CONVERSION OPTIMIZED Page mounted - WITH 3 NEW ILLUSTRATIONS');
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
      {/* Hero Section - ✅ OPTION 1: Website Transformation Visualization */}
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

      {/* Growth Dashboard - ✅ OPTION 2: Indian Business Growth Dashboard */}
      <SectionErrorBoundary name="GrowthDashboardSection">
        <GrowthDashboardSection />
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

