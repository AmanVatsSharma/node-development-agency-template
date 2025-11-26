'use client';

/**
 * @fileoverview Trading Software Landing Page - Main Entry Point
 * @description High-converting landing page for enterprise trading platform
 * Structured for Vedpragya Bharat Pvt. Ltd. - Trading Solutions Division
 * 
 * CONVERSION OPTIMIZED VERSION 1.0
 * 
 * BRANDING:
 * - Primary Color: Deep Navy Blue #0A1628 (Authority + Trust)
 * - Accent Color: Electric Green #00FF88 (Growth + Profit + Bullish)
 * - Secondary Accent: Gold #FFD700 (Premium + Enterprise)
 * - Danger: Red #FF3B30 (Bearish + Alerts)
 * - Typography: Poppins Bold (Headings) • Inter Regular (Body) • Mono (Numbers)
 * - Tone: Premium • Enterprise • Scalable • "Future of Trading Technology"
 */

import React, { useEffect } from 'react';

// Section Components
import { HeroSection } from './_components/hero-section';
import { ProblemSolutionSection } from './_components/problem-solution-section';
import { FeaturesShowcaseSection } from './_components/features-showcase-section';
import { TradingTerminalPreview } from './_components/trading-terminal-preview';
import { TechnologyStackSection } from './_components/technology-stack-section';
import { PerformanceMetricsSection } from './_components/performance-metrics-section';
import { BrokerBenefitsSection } from './_components/broker-benefits-section';
import { SecurityComplianceSection } from './_components/security-compliance-section';
import { IntegrationCapabilitiesSection } from './_components/integration-capabilities-section';
import { PricingComparisonSection } from './_components/pricing-comparison-section';
import { CaseStudiesSection } from './_components/case-studies-section';
import { FAQSection } from './_components/faq-section';
import { LeadFormSection } from './_components/lead-form-section';
import { FinalCTASection } from './_components/final-cta-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { ScrollToTop } from './_components/scroll-to-top';
import { SectionErrorBoundary } from './_components/section-error-boundary';
import { Breadcrumbs } from '@/app/components/SEO/Breadcrumbs';
import { RelatedServices } from '@/app/components/SEO/RelatedServices';
import { getBreadcrumbItems, getRelatedServicesTitle } from '@/app/lib/seo/page-helpers';

/**
 * Trading Software Landing Page Component
 * 
 * CONVERSION-FOCUSED FLOW:
 * 1. Hero - Enterprise-grade platform with animated terminal
 * 2. Problem/Solution - Traditional vs Modern trading systems
 * 3. Features Showcase - 10 key platform features
 * 4. Trading Terminal Preview - Interactive demo showcase
 * 5. Technology Stack - Enterprise tech infrastructure
 * 6. Performance Metrics - Real-time stats and guarantees
 * 7. Broker Benefits - Why brokers choose us
 * 8. Security & Compliance - SEBI, ISO certifications
 * 9. Integration Capabilities - Exchange & payment integrations
 * 10. Pricing Comparison - 3-tier transparent pricing
 * 11. Case Studies - Real results from brokers
 * 12. FAQ - Address objections and questions
 * 13. Lead Form - Primary conversion point
 * 14. Final CTA - Strong closing with urgency
 * 15. Mobile Floating CTA - Always-visible contact
 * 
 * KEY FEATURES:
 * - Mobile-first responsive design
 * - Multiple lead capture points
 * - Professional animations with Framer Motion
 * - Trust signals throughout (uptime, latency, security)
 * - Indian market focus (INR pricing, SEBI compliance, NSE/BSE/MCX)
 * - Technical authority establishment
 * - Premium, techy aesthetic with trading terminal vibes
 */
export default function TradingSoftwarePage() {
  useEffect(() => {
    console.log('[Trading-Software] Page mounted');
    console.log('[Trading-Software] User Agent:', navigator.userAgent);
    console.log('[Trading-Software] Viewport:', {
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Track page view
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Trading Software for Brokers - Enterprise Platform',
        page_location: window.location.href,
        page_path: '/pages/trading-software'
      });
      console.log('[Trading-Software] Google Analytics page view tracked');
    }

    return () => {
      console.log('[Trading-Software] Page unmounted');
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A1628] via-[#0d1b2e] to-[#0A1628]">
      {/* Breadcrumb Navigation - SEO Optimized */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumbs items={getBreadcrumbItems('trading-software')} />
      </div>

      {/* Console log for debugging section rendering */}
      {console.log('[Trading-Software] Rendering all sections')}
      
      {/* 1. Hero - "Enterprise-Grade Trading Platform Built for Modern Brokers" */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* 2. Problem/Solution - Traditional Trading Systems vs Modern Platform */}
      <SectionErrorBoundary name="ProblemSolutionSection">
        <ProblemSolutionSection />
      </SectionErrorBoundary>

      {/* 3. Features Showcase - 10 Key Platform Features */}
      <SectionErrorBoundary name="FeaturesShowcaseSection">
        <FeaturesShowcaseSection />
      </SectionErrorBoundary>

      {/* 4. Trading Terminal Preview - Interactive Demo */}
      <SectionErrorBoundary name="TradingTerminalPreview">
        <TradingTerminalPreview />
      </SectionErrorBoundary>

      {/* 5. Technology Stack - Enterprise Infrastructure */}
      <SectionErrorBoundary name="TechnologyStackSection">
        <TechnologyStackSection />
      </SectionErrorBoundary>

      {/* 6. Performance Metrics - Real-time Stats */}
      <SectionErrorBoundary name="PerformanceMetricsSection">
        <PerformanceMetricsSection />
      </SectionErrorBoundary>

      {/* 7. Broker Benefits - Why Choose Us */}
      <SectionErrorBoundary name="BrokerBenefitsSection">
        <BrokerBenefitsSection />
      </SectionErrorBoundary>

      {/* 8. Security & Compliance - SEBI, ISO Certifications */}
      <SectionErrorBoundary name="SecurityComplianceSection">
        <SecurityComplianceSection />
      </SectionErrorBoundary>

      {/* 9. Integration Capabilities - Exchange & Payment Integrations */}
      <SectionErrorBoundary name="IntegrationCapabilitiesSection">
        <IntegrationCapabilitiesSection />
      </SectionErrorBoundary>

      {/* 10. Pricing Comparison - 3-Tier Pricing */}
      <SectionErrorBoundary name="PricingComparisonSection">
        <PricingComparisonSection />
      </SectionErrorBoundary>

      {/* 11. Case Studies - Real Results from Brokers */}
      <SectionErrorBoundary name="CaseStudiesSection">
        <CaseStudiesSection />
      </SectionErrorBoundary>

      {/* 12. FAQ - Objection Handling */}
      <SectionErrorBoundary name="FAQSection">
        <FAQSection />
      </SectionErrorBoundary>

      {/* 13. Lead Form - Primary Conversion Point */}
      <SectionErrorBoundary name="LeadFormSection">
        <LeadFormSection />
      </SectionErrorBoundary>

      {/* Related Services - Internal Linking for SEO */}
      <SectionErrorBoundary name="RelatedServices">
        <RelatedServices 
          currentPage="trading-software"
          title={getRelatedServicesTitle('trading-software')}
        />
      </SectionErrorBoundary>

      {/* 14. Final CTA - Strong Closing */}
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
