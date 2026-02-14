'use client';

/**
 * @fileoverview EnterpriseHero CRM - Main Showcase Page
 * @description Premium self-hosted CRM built on BharatERP stack
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * CONVERSION FLOW:
 * 1. Hero - "Your Business. Your Data. Your CRM."
 * 2. About - Battle-tested CRM with 4 pillars
 * 3. Core Modules - 6 animated feature cards
 * 4. Customization - Dynamic use-cases & BharatERP integration
 * 5. Implementation - 5-step process timeline
 * 6. Security - Enterprise-grade protection
 * 7. Showcase - Visual carousel of features
 * 8. Trust - Testimonials & enterprise logos
 * 9. Pricing - Transparent INR packages
 * 10. Final CTA - Strong closing with demo request
 * 
 * BRANDING:
 * - Primary: Bharat Blue #002F9E
 * - Accent: Gold #FFD700
 * - Success: Emerald #00C897
 * - Premium, polished, professional, enterprise-grade
 * 
 * FEATURES:
 * - Mobile-first responsive design
 * - Scroll animations with Framer Motion
 * - Glass-effect cards with gradients
 * - Error boundaries for resilience
 * - Console logs for debugging
 * - SEO optimized
 */

import React, { useEffect } from 'react';

// Section Components
import { HeroSection } from './_components/hero-section';
import { AboutSection } from './_components/about-section';
import { CoreModulesSection } from './_components/core-modules-section';
import { CustomizationSection } from './_components/customization-section';
import { ImplementationSection } from './_components/implementation-section';
import { SecuritySection } from './_components/security-section';
import { ShowcaseSection } from './_components/showcase-section';
import { TrustSection } from './_components/trust-section';
import { PricingSection } from './_components/pricing-section';
import { FinalCTASection } from './_components/final-cta-section';

// Utility Components
import { SectionErrorBoundary } from './_components/section-error-boundary';
import { ScrollToTop } from './_components/scroll-to-top';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { Breadcrumbs } from '@/app/components/SEO/Breadcrumbs';
import { RelatedServices } from '@/app/components/SEO/RelatedServices';
import { getBreadcrumbItems, getRelatedServicesTitle } from '@/app/lib/seo/page-helpers';

console.log('[CRM] Main page component loaded');

/**
 * EnterpriseHero CRM Landing Page
 * Premium showcase page for self-hosted enterprise CRM
 * 
 * CONVERSION OPTIMIZED:
 * - Multiple demo request CTAs throughout
 * - Trust signals and social proof
 * - Clear value proposition
 * - Mobile-first design for India's mobile-heavy market
 * - Performance optimized for fast loading
 */
export default function CRMPage() {
  useEffect(() => {
    console.log('[CRM] Page mounted');
    console.log('[CRM] User Agent:', navigator.userAgent);
    console.log('[CRM] Viewport:', {
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Track page view for Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'EnterpriseHero CRM - Self-Hosted Enterprise Solution',
        page_location: window.location.href,
        page_path: '/crm'
      });
      console.log('[CRM] Google Ads page view tracked');
    }

    return () => {
      console.log('[CRM] Page unmounted');
    };
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Breadcrumb Navigation - SEO Optimized */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumbs items={getBreadcrumbItems('crm')} />
      </div>

      {/* Hero Section - "Your Business. Your Data. Your CRM." */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* About Section - Battle-Tested CRM with 4 Pillars */}
      <SectionErrorBoundary name="AboutSection">
        <AboutSection />
      </SectionErrorBoundary>

      {/* Core Modules - 6 Animated Feature Cards */}
      <SectionErrorBoundary name="CoreModulesSection">
        <CoreModulesSection />
      </SectionErrorBoundary>

      {/* Customization & Integration - Dynamic Use-Cases */}
      <SectionErrorBoundary name="CustomizationSection">
        <CustomizationSection />
      </SectionErrorBoundary>

      {/* Implementation Process - 5-Step Timeline */}
      <SectionErrorBoundary name="ImplementationSection">
        <ImplementationSection />
      </SectionErrorBoundary>

      {/* Security & Reliability - Dark Section with Gold Shield */}
      <SectionErrorBoundary name="SecuritySection">
        <SecuritySection />
      </SectionErrorBoundary>

      {/* Visual Showcase - Feature Carousel */}
      <SectionErrorBoundary name="ShowcaseSection">
        <ShowcaseSection />
      </SectionErrorBoundary>

      {/* Enterprise Trust - Testimonials & Logos */}
      <SectionErrorBoundary name="TrustSection">
        <TrustSection />
      </SectionErrorBoundary>

      {/* Pricing Snapshot - Two Clear Packages */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>

      {/* Related Services - Internal Linking for SEO */}
      <SectionErrorBoundary name="RelatedServices">
        <RelatedServices 
          currentPage="crm"
          title={getRelatedServicesTitle('crm')}
        />
      </SectionErrorBoundary>

      {/* Final CTA - Strong Closing with Tricolor Wave */}
      <SectionErrorBoundary name="FinalCTASection">
        <FinalCTASection />
      </SectionErrorBoundary>

      {/* Utility Components */}
      <ScrollToTop />
      <MobileFloatingCTA />
    </main>
  );
}
