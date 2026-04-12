/**
 * @fileoverview Shopify Headless Migration Landing Page - Premium Enterprise Service
 * @description Ultra-premium, high-converting landing page for Shopify → Next.js/Hydrogen migration
 * @author Vedpragya Bharat
 * @version 1.0.0
 * 
 * SEO METADATA:
 * Title: Shopify Headless Migration Services | Next.js & Hydrogen Experts
 * Description: Transform your Shopify store with headless commerce. 2-4× faster page loads, 
 *              95+ Lighthouse scores. Next.js/Hydrogen migration from ₹1L. Get free consultation.
 * Keywords: headless shopify, nextjs shopify, shopify hydrogen migration, shopify plus developer,
 *           shopify api integration, nextjs ecommerce, headless commerce agency
 * 
 * MARKETING POSITIONING:
 * - $10k+ project positioning for global and high-ticket clients
 * - Enterprise-grade technical authority
 * - Premium service with measurable ROI
 * - Mobile-first, app-like interface
 * - Futuristic, tech-luxury design aesthetic
 * 
 * ARCHITECTURE:
 * - Component-based architecture with error boundaries
 * - Mobile-first responsive design (app-like interface)
 * - Comprehensive error handling and console logging
 * - Accessibility-first approach (ARIA labels, semantic HTML)
 * - Performance optimized (lazy loading, code splitting)
 * - Framer Motion animations for premium feel
 * 
 * BRAND COLORS:
 * - Primary: #0F172A (Deep Navy)
 * - Accent: #00E0B8 (Futuristic Mint)
 * - Background: #F9FAFB
 * - Fonts: Poppins (headings) + Inter (body)
 * 
 * CONVERSION OPTIMIZATION:
 * - Multiple lead capture points strategically placed
 * - WhatsApp integration for instant contact
 * - Google Ads optimized structure
 * - Clear value proposition with technical credibility
 * - Social proof and case studies
 * - Transparent pricing in INR
 */

// Section Components - CONVERSION OPTIMIZED
import { HeroSection } from './_components/hero-section';
import { WhyHeadlessSection } from './_components/why-headless-section';
import { WhatYouGetSection } from './_components/what-you-get-section';
import { PricingSection } from './_components/pricing-section';
import { AddOnsSection } from './_components/add-ons-section';
import { ProcessSection } from './_components/process-section';
import { TechStackSection } from './_components/tech-stack-section';
import { WhyVedpragyaSection } from './_components/why-vedpragya-section';
import { CaseStudiesSection } from './_components/case-studies-section';
import { FinalCTASection } from './_components/final-cta-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { ScrollToTop } from './_components/scroll-to-top';
import { SectionErrorBoundary } from '@/app/components/common/SectionErrorBoundary';

export default function ShopifyHeadlessMigrationPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] dark:bg-[#0F172A]">
      {/* Hero Section - Strong Value Proposition with Neural Animation */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* Why Go Headless - Comparison Table */}
      <SectionErrorBoundary name="WhyHeadlessSection">
        <WhyHeadlessSection />
      </SectionErrorBoundary>

      {/* What You Get - 5 Service Modules */}
      <SectionErrorBoundary name="WhatYouGetSection">
        <WhatYouGetSection />
      </SectionErrorBoundary>

      {/* Pricing Plans - 3-Tier Transparent Pricing */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>

      {/* Add-Ons - Premium Additional Services */}
      <SectionErrorBoundary name="AddOnsSection">
        <AddOnsSection />
      </SectionErrorBoundary>

      {/* Process - 6-Step Workflow */}
      <SectionErrorBoundary name="ProcessSection">
        <ProcessSection />
      </SectionErrorBoundary>

      {/* Tech Stack - Technical Credibility */}
      <SectionErrorBoundary name="TechStackSection">
        <TechStackSection />
      </SectionErrorBoundary>

      {/* Why Vedpragya Bharat - USPs */}
      <SectionErrorBoundary name="WhyVedpragyaSection">
        <WhyVedpragyaSection />
      </SectionErrorBoundary>

      {/* Case Studies - Real Results */}
      <SectionErrorBoundary name="CaseStudiesSection">
        <CaseStudiesSection />
      </SectionErrorBoundary>

      {/* Final CTA - Strong Closing with WhatsApp */}
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
