'use client';

/**
 * @fileoverview Next.js Web Development Landing Page - Main Entry Point
 * @description High-converting, production-ready landing page for Next.js development services
 * @author Development Agency
 * @version 1.0.0
 * 
 * MARKETING FOCUS:
 * - Mid to high-ticket conversion optimization
 * - Performance and SEO focused messaging
 * - Enterprise-grade positioning
 * - Clear value proposition with technical authority
 * 
 * ARCHITECTURE:
 * - Component-based architecture with error boundaries
 * - Each section is a separate, reusable component
 * - Comprehensive error handling and logging
 * - Accessibility-first approach (ARIA labels, semantic HTML)
 * - Mobile-first responsive design
 */

import React, { useEffect } from 'react';

// Section Components - CONVERSION OPTIMIZED
import { HeroSection } from './_components/hero-section';
import { WhyNextJsSection } from './_components/why-nextjs-section';
import { ServicesSection } from './_components/services-section';
import { ProcessSection } from './_components/process-section';
import { TechStackSection } from './_components/tech-stack-section';
import { PerformanceSection } from './_components/performance-section';
import { PricingSection } from './_components/pricing-section';
import { CaseStudiesSection } from './_components/case-studies-section';
import { TestimonialsSection } from './_components/testimonials-section';
import { LeadFormSection } from './_components/lead-form-section';
import { FAQSection } from './_components/faq-section';
import { FinalCTASection } from './_components/final-cta-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { ScrollToTop } from './_components/scroll-to-top';
import { SectionErrorBoundary } from './_components/section-error-boundary';

console.log('[Next-JS-Dev] Main page component loaded');

/**
 * Next.js Web Development Landing Page Component
 * CONVERSION OPTIMIZED VERSION 1.0
 * 
 * CONVERSION-FOCUSED FLOW:
 * 1. Hero - Strong value proposition with technical credibility
 * 2. Why Next.js - Education + Authority building
 * 3. Services - Complete service offerings with clear deliverables
 * 4. Process - 5-step transparent workflow
 * 5. Tech Stack - Show technical expertise
 * 6. Performance Promise - Quantifiable guarantees
 * 7. Pricing - Transparent INR pricing with packages
 * 8. Case Studies - Real results with metrics
 * 9. Testimonials - Social proof from satisfied clients
 * 10. Lead Form - Strategic placement with multiple CTAs
 * 11. FAQ - Address final objections
 * 12. Final CTA - Strong urgency & FOMO
 * 13. Mobile Floating CTA - Always-visible contact buttons
 * 
 * KEY FEATURES:
 * - Multiple lead capture points
 * - Performance-focused messaging
 * - Technical authority establishment
 * - Clear ROI demonstration
 * - Trust signals throughout
 * - Mobile-first design
 */
export default function NextJsDevelopmentPage() {
  useEffect(() => {
    console.log('[Next-JS-Dev] Page mounted');
    console.log('[Next-JS-Dev] User Agent:', navigator.userAgent);
    console.log('[Next-JS-Dev] Viewport:', {
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Track page view
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Next.js Web Development Services',
        page_location: window.location.href,
        page_path: '/pages/next-js-development'
      });
    }

    return () => {
      console.log('[Next-JS-Dev] Page unmounted');
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section - Strong Value Proposition */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* Why Next.js - Education + Authority */}
      <SectionErrorBoundary name="WhyNextJsSection">
        <WhyNextJsSection />
      </SectionErrorBoundary>

      {/* Services - Complete Offerings */}
      <SectionErrorBoundary name="ServicesSection">
        <ServicesSection />
      </SectionErrorBoundary>

      {/* Process - Transparent Workflow */}
      <SectionErrorBoundary name="ProcessSection">
        <ProcessSection />
      </SectionErrorBoundary>

      {/* Technology Stack - Technical Credibility */}
      <SectionErrorBoundary name="TechStackSection">
        <TechStackSection />
      </SectionErrorBoundary>

      {/* Performance Promise - Quantifiable Guarantees */}
      <SectionErrorBoundary name="PerformanceSection">
        <PerformanceSection />
      </SectionErrorBoundary>

      {/* Pricing - Transparent Packages */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>

      {/* Case Studies - Real Results */}
      <SectionErrorBoundary name="CaseStudiesSection">
        <CaseStudiesSection />
      </SectionErrorBoundary>

      {/* Testimonials - Social Proof */}
      <SectionErrorBoundary name="TestimonialsSection">
        <TestimonialsSection />
      </SectionErrorBoundary>

      {/* Lead Form - Primary Conversion Point */}
      <SectionErrorBoundary name="LeadFormSection">
        <LeadFormSection />
      </SectionErrorBoundary>

      {/* FAQ - Objection Handling */}
      <SectionErrorBoundary name="FAQSection">
        <FAQSection />
      </SectionErrorBoundary>

      {/* Final CTA - Strong Closing */}
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
