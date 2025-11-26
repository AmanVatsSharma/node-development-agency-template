'use client';

/**
 * @fileoverview NSE/MCX Live Market Data API Landing Page - Main Entry Point
 * @description Ultra-premium, highly converting landing page for market data API services
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * MARKETING FOCUS:
 * - Futuristic, techy, financial market aesthetics
 * - High conversion optimization
 * - Algo traders, fintech apps, trading platforms target audience
 * - Google Ads ready with conversion tracking
 * - Professional trust-building elements
 * 
 * BRANDING:
 * - Primary: Deep Blue/Navy #0B1E39 (Trust & Professional)
 * - Accent: Electric Green #00FF88 (Market Growth)
 * - Alert: Gold #FFD700 (Premium/Trading)
 * - Warning: Red #FF3366 (Market Alerts)
 * 
 * CONVERSION FLOW (16 Sections):
 * 1. Hero - Animated stock ticker with live data visualization
 * 2. Why Live Data - Education + comparison tables
 * 3. Data Features - Complete data types offered
 * 4. Live Showcase - Interactive real-time demo
 * 5. API Capabilities - Code examples and tech specs
 * 6. Technology Stack - Infrastructure credibility
 * 7. Integration Process - 4-step quick start guide
 * 8. Pricing - Transparent tier-based pricing
 * 9. Supported Instruments - All exchanges covered
 * 10. Use Cases - Industry-specific applications
 * 11. Case Studies - Real client success stories
 * 12. Developer Resources - Documentation and SDKs
 * 13. Testimonials - Social proof from developers
 * 14. FAQ - Objection handling
 * 15. Lead Form - Primary conversion point
 * 16. Final CTA - Strong closing with urgency
 * 17. Mobile Floating CTA - Always-visible contact
 * 18. Scroll To Top - UX enhancement
 */

import React, { useEffect } from 'react';

// Section Components - CONVERSION OPTIMIZED
import { HeroSection } from './_components/hero-section';
import { WhyLiveDataSection } from './_components/why-live-data-section';
import { DataFeaturesSection } from './_components/data-features-section';
import { LiveShowcaseSection } from './_components/live-showcase-section';
import { APICapabilitiesSection } from './_components/api-capabilities-section';
import { TechnologyStackSection } from './_components/technology-stack-section';
import { IntegrationProcessSection } from './_components/integration-process-section';
import { PricingSection } from './_components/pricing-section';
import { SupportedInstrumentsSection } from './_components/supported-instruments-section';
import { UseCasesSection } from './_components/use-cases-section';
import { CaseStudiesSection } from './_components/case-studies-section';
import { DeveloperResourcesSection } from './_components/developer-resources-section';
import { TestimonialsSection } from './_components/testimonials-section';
import { FAQSection } from './_components/faq-section';
import { LeadFormSection } from './_components/lead-form-section';
import { FinalCTASection } from './_components/final-cta-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { ScrollToTop } from './_components/scroll-to-top';
import { SectionErrorBoundary } from './_components/section-error-boundary';
import { Breadcrumbs } from '@/app/components/SEO/Breadcrumbs';
import { RelatedServices } from '@/app/components/SEO/RelatedServices';
import { getBreadcrumbItems, getRelatedServicesTitle } from '@/app/lib/seo/page-helpers';

console.log('[Market-Data-API] Main page component loaded');

/**
 * NSE/MCX Live Market Data API Landing Page Component
 * CONVERSION OPTIMIZED VERSION 1.0
 * 
 * KEY FEATURES:
 * - Futuristic, techy, financial market design
 * - Real-time data visualization and animations
 * - Multiple lead capture points (5+ CTAs)
 * - Professional 3D effects with Framer Motion
 * - Trust signals and technical credibility throughout
 * - Developer-friendly with code examples
 * - Clear ROI and performance metrics demonstration
 * - Google Ads conversion tracking ready
 * 
 * PERFORMANCE:
 * - Component-based architecture
 * - Error boundaries per section
 * - Comprehensive logging for debugging
 * - Accessibility-first (ARIA labels, semantic HTML)
 * - Fast loading with optimized animations
 */
export default function NSEMCXLiveMarketDataPage() {
  useEffect(() => {
    console.log('[Market-Data-API] Page mounted');
    console.log('[Market-Data-API] User Agent:', navigator.userAgent);
    console.log('[Market-Data-API] Viewport:', {
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Track page view for Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'NSE MCX Live Market Data API',
        page_location: window.location.href,
        page_path: '/pages/nse-mcx-live-market-data'
      });
    }

    // Track time on page
    const startTime = Date.now();
    return () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      console.log('[Market-Data-API] Page unmounted, time on page:', timeOnPage, 'seconds');
      
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'time_on_page', {
          event_category: 'Engagement',
          event_label: 'Market Data API Landing',
          value: timeOnPage
        });
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Breadcrumb Navigation - SEO Optimized */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumbs items={getBreadcrumbItems('nse-mcx-live-market-data')} />
      </div>

      {/* 1. Hero Section - Animated Stock Ticker + Live Data Viz */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* 2. Why Live Data - Education + Comparison */}
      <SectionErrorBoundary name="WhyLiveDataSection">
        <WhyLiveDataSection />
      </SectionErrorBoundary>

      {/* 3. Data Features - Complete Offerings */}
      <SectionErrorBoundary name="DataFeaturesSection">
        <DataFeaturesSection />
      </SectionErrorBoundary>

      {/* 4. Live Showcase - Interactive Demo */}
      <SectionErrorBoundary name="LiveShowcaseSection">
        <LiveShowcaseSection />
      </SectionErrorBoundary>

      {/* 5. API Capabilities - Code Examples */}
      <SectionErrorBoundary name="APICapabilitiesSection">
        <APICapabilitiesSection />
      </SectionErrorBoundary>

      {/* 6. Technology Stack - Infrastructure Credibility */}
      <SectionErrorBoundary name="TechnologyStackSection">
        <TechnologyStackSection />
      </SectionErrorBoundary>

      {/* 7. Integration Process - Quick Start Guide */}
      <SectionErrorBoundary name="IntegrationProcessSection">
        <IntegrationProcessSection />
      </SectionErrorBoundary>

      {/* 8. Pricing - Transparent Tiers */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>

      {/* 9. Supported Instruments - Exchange Coverage */}
      <SectionErrorBoundary name="SupportedInstrumentsSection">
        <SupportedInstrumentsSection />
      </SectionErrorBoundary>

      {/* 10. Use Cases - Industry Applications */}
      <SectionErrorBoundary name="UseCasesSection">
        <UseCasesSection />
      </SectionErrorBoundary>

      {/* 11. Case Studies - Real Results */}
      <SectionErrorBoundary name="CaseStudiesSection">
        <CaseStudiesSection />
      </SectionErrorBoundary>

      {/* 12. Developer Resources - Documentation */}
      <SectionErrorBoundary name="DeveloperResourcesSection">
        <DeveloperResourcesSection />
      </SectionErrorBoundary>

      {/* 13. Testimonials - Social Proof */}
      <SectionErrorBoundary name="TestimonialsSection">
        <TestimonialsSection />
      </SectionErrorBoundary>

      {/* 14. FAQ - Objection Handling */}
      <SectionErrorBoundary name="FAQSection">
        <FAQSection />
      </SectionErrorBoundary>

      {/* 15. Lead Form - Primary Conversion Point */}
      <SectionErrorBoundary name="LeadFormSection">
        <LeadFormSection />
      </SectionErrorBoundary>

      {/* Related Services - Internal Linking for SEO */}
      <SectionErrorBoundary name="RelatedServices">
        <RelatedServices 
          currentPage="nse-mcx-live-market-data"
          title={getRelatedServicesTitle('nse-mcx-live-market-data')}
        />
      </SectionErrorBoundary>

      {/* 16. Final CTA - Strong Closing */}
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

console.log('[Market-Data-API] Page export successful');
