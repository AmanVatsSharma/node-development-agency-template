'use client';

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

import React, { useEffect } from 'react';

// SEO NOTE: Add metadata in layout.tsx or create a metadata file
// Since this is a 'use client' component, metadata must be set in parent layout
// See QUICK_START.md for SEO setup instructions

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

console.log('[Shopify-Headless] Main page component loaded');
console.log('[Shopify-Headless] Brand Colors - Primary: #0F172A, Accent: #00E0B8');

/**
 * Shopify Headless Migration Landing Page Component
 * ULTRA-PREMIUM VERSION 1.0 - $10k+ PROJECT POSITIONING
 * 
 * CONVERSION-FOCUSED FLOW:
 * 1. Hero - "Go Headless. Go Limitless." with neural-line animation
 * 2. Why Go Headless - Comparison table (Traditional vs Headless)
 * 3. What You Get - 5 service modules with detailed deliverables
 * 4. Pricing Plans - 3-tier transparent pricing (₹1L - ₹5L+)
 * 5. Add-Ons - Premium additional services
 * 6. Process - 6-step transparent workflow
 * 7. Tech Stack - Technical credibility showcase
 * 8. Why Vedpragya Bharat - USPs and guarantees
 * 9. Case Studies - Real results with metrics
 * 10. Final CTA - WhatsApp integration + demo booking
 * 11. Mobile Floating CTA - Always-visible contact buttons
 * 
 * KEY FEATURES:
 * - Mobile-first, app-like interface
 * - Premium animations with Framer Motion
 * - Multiple lead capture points
 * - WhatsApp integration for instant contact
 * - Google Ads conversion tracking
 * - Core Web Vitals 95+ optimized
 * - SEO metadata and structured data
 * 
 * TARGET AUDIENCE:
 * - Global e-commerce brands
 * - High-ticket D2C brands
 * - Enterprise Shopify Plus clients
 * - Agencies looking for white-label partners
 */
export default function ShopifyHeadlessMigrationPage() {
  useEffect(() => {
    console.log('[Shopify-Headless] Page mounted');
    console.log('[Shopify-Headless] User Agent:', navigator.userAgent);
    console.log('[Shopify-Headless] Viewport:', {
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < 768
    });
    console.log('[Shopify-Headless] Page loaded at:', new Date().toISOString());

    // Track page view for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      console.log('[Shopify-Headless] Tracking Google Analytics page view');
      (window as any).gtag('event', 'page_view', {
        page_title: 'Shopify Headless Migration Services',
        page_location: window.location.href,
        page_path: '/pages/shopify-headless-migration',
        service_type: 'headless_migration',
        ticket_size: 'high_ticket'
      });
    }

    // Track scroll depth for conversion optimization
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercentage > maxScroll && scrollPercentage % 25 === 0) {
        maxScroll = scrollPercentage;
        console.log('[Shopify-Headless] Scroll depth:', scrollPercentage + '%');
        
        if ((window as any).gtag) {
          (window as any).gtag('event', 'scroll_depth', {
            depth_percentage: scrollPercentage,
            page_path: '/pages/shopify-headless-migration'
          });
        }
      }
    };

    window.addEventListener('scroll', trackScrollDepth);

    return () => {
      console.log('[Shopify-Headless] Page unmounted');
      window.removeEventListener('scroll', trackScrollDepth);
    };
  }, []);

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
