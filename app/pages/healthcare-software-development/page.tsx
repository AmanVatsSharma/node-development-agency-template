'use client';

/**
 * @fileoverview Healthcare Software Development Landing Page - Main Entry Point
 * @description High-converting, production-ready landing page for Healthcare Software Development services
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * MARKETING FOCUS:
 * - Indian healthcare market optimization (₹2.5L, ₹5L, ₹10L+ pricing)
 * - Google Ads ready with conversion tracking
 * - Mobile-first responsive design
 * - Clear value proposition with medical authority
 * 
 * BRANDING:
 * - Primary: Medical Blue #0B4F6C (Trust + Healthcare)
 * - Accent: Healthcare Green #00A86B (Health + Growth)
 * - Secondary: Professional White #FFFFFF (Clean + Medical)
 * - Accent 2: Emergency Red #DC2626 (Urgency + Action)
 * 
 * CONVERSION FLOW:
 * 1. Hero - Strong value proposition: "Transform Healthcare with Cutting-Edge Software"
 * 2. Problem/Solution - Healthcare industry challenges
 * 3. What We Build - Healthcare solutions + Tech stack
 * 4. Process - 6-step delivery methodology
 * 5. Case Studies - Real healthcare results with metrics
 * 6. Testimonials - Healthcare professional social proof
 * 7. Pricing - Transparent INR pricing
 * 8. Technology Stack - Healthcare integrations
 * 9. Compliance & Security - HIPAA, GDPR, certifications
 * 10. FAQ - Healthcare industry objections
 * 11. Lead Form - Primary conversion point
 * 12. Final CTA - Strong urgency
 * 13. Mobile Floating CTA - Always accessible
 */

import React, { useEffect } from 'react';

// Section Components - CONVERSION OPTIMIZED
import { HeroSection } from './_components/hero-section';
import { ProblemSolutionSection } from './_components/problem-solution-section';
import { WhatWeBuildSection } from './_components/what-we-build-section';
import { ProcessSection } from './_components/process-section';
import { CaseStudiesSection } from './_components/case-studies-section';
import { TestimonialsSection } from './_components/testimonials-section';
import { PricingSection } from './_components/pricing-section';
import { TechnologyStackSection } from './_components/technology-stack-section';
import { ComplianceSecuritySection } from './_components/compliance-security-section';
import { FAQSection } from './_components/faq-section';
import { LeadFormSection } from './_components/lead-form-section';
import { FinalCTASection } from './_components/final-cta-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { ScrollToTop } from './_components/scroll-to-top';
import { SectionErrorBoundary } from './_components/section-error-boundary';

console.log('[Healthcare-Software-Dev] Main page component loaded');

/**
 * Healthcare Software Development Landing Page Component
 * CONVERSION OPTIMIZED VERSION 1.0
 * 
 * CONVERSION-FOCUSED FLOW:
 * - Multiple lead capture points throughout the page
 * - Trust signals and social proof strategically placed
 * - Clear CTAs with contrasting colors
 * - Mobile-first design for India's mobile-heavy market
 * - Performance optimized for fast loading
 * - Healthcare industry specific content and imagery
 */
export default function HealthcareSoftwareDevelopmentPage() {
  useEffect(() => {
    console.log('[Healthcare-Software-Dev] Page mounted');
    console.log('[Healthcare-Software-Dev] User Agent:', navigator.userAgent);
    console.log('[Healthcare-Software-Dev] Viewport:', {
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Track page view for Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Healthcare Software Development Services',
        page_location: window.location.href,
        page_path: '/pages/healthcare-software-development'
      });
    }

    return () => {
      console.log('[Healthcare-Software-Dev] Page unmounted');
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section - "Transform Healthcare with Cutting-Edge Software" */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* Problem/Solution Matrix - Healthcare Industry Challenges */}
      <SectionErrorBoundary name="ProblemSolutionSection">
        <ProblemSolutionSection />
      </SectionErrorBoundary>

      {/* What We Build - Healthcare Solutions + Tech Stack */}
      <SectionErrorBoundary name="WhatWeBuildSection">
        <WhatWeBuildSection />
      </SectionErrorBoundary>

      {/* Process - 6-Step Delivery Methodology */}
      <SectionErrorBoundary name="ProcessSection">
        <ProcessSection />
      </SectionErrorBoundary>

      {/* Case Studies - Real Healthcare Results */}
      <SectionErrorBoundary name="CaseStudiesSection">
        <CaseStudiesSection />
      </SectionErrorBoundary>

      {/* Testimonials - Healthcare Professional Social Proof */}
      <SectionErrorBoundary name="TestimonialsSection">
        <TestimonialsSection />
      </SectionErrorBoundary>

      {/* Pricing - Transparent INR Packages */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>

      {/* Technology Stack - Healthcare Integrations */}
      <SectionErrorBoundary name="TechnologyStackSection">
        <TechnologyStackSection />
      </SectionErrorBoundary>

      {/* Compliance & Security - HIPAA, GDPR, Certifications */}
      <SectionErrorBoundary name="ComplianceSecuritySection">
        <ComplianceSecuritySection />
      </SectionErrorBoundary>

      {/* FAQ - Healthcare Industry Objections */}
      <SectionErrorBoundary name="FAQSection">
        <FAQSection />
      </SectionErrorBoundary>

      {/* Lead Form - Primary Conversion Point */}
      <SectionErrorBoundary name="LeadFormSection">
        <LeadFormSection />
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