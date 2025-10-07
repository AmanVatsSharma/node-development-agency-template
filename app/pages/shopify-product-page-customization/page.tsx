'use client';

/**
 * @fileoverview Shopify Product Page Customization Landing Page - Main Entry Point
 * @description High-converting, production-ready landing page for Shopify product page customization
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * MARKETING FOCUS:
 * - High-ticket conversion optimization (₹25k-₹75k+ service)
 * - Google Ads ready with conversion tracking
 * - Mobile-first app-like interface
 * - Premium polished UI/UX
 * 
 * BRANDING:
 * - Primary: Luxury Deep Blue #0A2540
 * - Accent: Gold #FFB400 for CTAs and highlights
 * - Modern, techy, professional aesthetic
 * 
 * CONVERSION FLOW:
 * 1. Hero - Before/After split screen with animated Add to Cart
 * 2. Problem-Solution Matrix - Why your product page matters
 * 3. What's Included - 5 major feature categories
 * 4. Pricing - 3 transparent tiers with hover effects
 * 5. Add-Ons - Optional premium features
 * 6. Process - 5-step delivery timeline
 * 7. Tech Stack - Technologies we use
 * 8. Why Vedpragya - Key differentiators
 * 9. Case Studies - Real results with metrics
 * 10. FAQ - Objection handling
 * 11. Lead Form - Primary conversion point
 * 12. Final CTA - Strong closing with urgency
 * 13. Mobile Floating CTA - Always accessible
 * 14. Scroll to Top - UX enhancement
 */

import React, { useEffect } from 'react';

// Section Components - CONVERSION OPTIMIZED
import { HeroSection } from './_components/hero-section';
import { ProblemSolutionSection } from './_components/problem-solution-section';
import { WhatIncludedSection } from './_components/what-included-section';
import { PricingSection } from './_components/pricing-section';
import { AddOnsSection } from './_components/add-ons-section';
import { ProcessSection } from './_components/process-section';
import { TechStackSection } from './_components/tech-stack-section';
import { WhyVedpragyaSection } from './_components/why-vedpragya-section';
import { CaseStudiesSection } from './_components/case-studies-section';
import { FAQSection } from './_components/faq-section';
import { LeadFormSection } from './_components/lead-form-section';
import { FinalCTASection } from './_components/final-cta-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { ScrollToTop } from './_components/scroll-to-top';
import { SectionErrorBoundary } from './_components/section-error-boundary';

console.log('[Shopify-Product-Page] Main page component loaded');

/**
 * Shopify Product Page Customization Landing Page Component
 * CONVERSION OPTIMIZED VERSION 1.0
 * 
 * CONVERSION-FOCUSED FLOW:
 * - Multiple lead capture points throughout the page
 * - Trust signals and social proof strategically placed
 * - Clear CTAs with contrasting gold color
 * - Mobile-first design for thumb-reach optimization
 * - Performance optimized for fast loading
 * - Comprehensive error handling and logging
 * 
 * KEY FEATURES:
 * - Before/After product page visualization
 * - Interactive animations and micro-interactions
 * - Multi-step lead form with WhatsApp alternative
 * - Case study carousel with real metrics
 * - FAQ accordion for objection handling
 * - Sticky mobile CTA bar
 * - Scroll to top functionality
 * - Google Ads conversion tracking
 */
export default function ShopifyProductPageCustomizationPage() {
  useEffect(() => {
    console.log('[Shopify-Product-Page] Page mounted');
    console.log('[Shopify-Product-Page] User Agent:', navigator.userAgent);
    console.log('[Shopify-Product-Page] Viewport:', {
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Track page view for Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Shopify Product Page Customization Services',
        page_location: window.location.href,
        page_path: '/pages/shopify-product-page-customization',
        value: 35000, // Average package value
        currency: 'INR',
      });
    }

    return () => {
      console.log('[Shopify-Product-Page] Page unmounted');
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section - "Turn Your Product Page into a Sales Engine" */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* Problem-Solution Matrix - "Why Your Product Page Matters" */}
      <SectionErrorBoundary name="ProblemSolutionSection">
        <ProblemSolutionSection />
      </SectionErrorBoundary>

      {/* What's Included - 5 Major Features */}
      <SectionErrorBoundary name="WhatIncludedSection">
        <WhatIncludedSection />
      </SectionErrorBoundary>

      {/* Pricing - 3 Transparent Tiers */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>

      {/* Add-Ons - Optional Premium Features */}
      <SectionErrorBoundary name="AddOnsSection">
        <AddOnsSection />
      </SectionErrorBoundary>

      {/* Process - 5-Step Delivery Timeline */}
      <SectionErrorBoundary name="ProcessSection">
        <ProcessSection />
      </SectionErrorBoundary>

      {/* Tech Stack - Technologies We Use */}
      <SectionErrorBoundary name="TechStackSection">
        <TechStackSection />
      </SectionErrorBoundary>

      {/* Why Vedpragya - Key Differentiators */}
      <SectionErrorBoundary name="WhyVedpragyaSection">
        <WhyVedpragyaSection />
      </SectionErrorBoundary>

      {/* Case Studies - Real Results */}
      <SectionErrorBoundary name="CaseStudiesSection">
        <CaseStudiesSection />
      </SectionErrorBoundary>

      {/* FAQ - Objection Handling */}
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

console.log('[Shopify-Product-Page] Main page component exported');
