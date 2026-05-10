import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Shopify Product Page Customization India | CRO Design — Vedpragya',
  description: 'Custom Shopify product page design that converts. Metafields, upsells, custom sections, and trust badges. Expert Shopify developers in India. Free CRO audit.',
  path: '/pages/shopify-product-page-customization',
  keywords: [
    'shopify product page customization india',
    'shopify product page design',
    'shopify cro optimization india',
    'shopify liquid development india',
    'shopify section customization',
    'shopify metafields developer',
    'shopify conversion optimization india',
  ],
});

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
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Shopify Product Page Customization India | CRO & Design — Vedpragya',
  description: 'Custom Shopify product page design for higher conversions. Metafield sections, custom components, trust signals, and A/B tested layouts. Boost your add-to-cart rate. Free review.',
  path: '/pages/shopify-product-page-customization',
  keywords: [
    'shopify product page customization india',
    'shopify product page design india',
    'shopify page builder india',
    'shopify cro india',
    'shopify theme customization india',
    'shopify developer india',
    'shopify conversion optimization india',
  ],
});

export default function ShopifyProductPageCustomizationPage() {
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
