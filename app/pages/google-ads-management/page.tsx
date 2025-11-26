'use client';

/**
 * @fileoverview Google Ads Management Service Landing Page - Main Entry Point
 * @description High-converting, premium landing page for Google Ads management services
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * MARKETING FOCUS:
 * - High-ticket conversion optimization (₹25K–₹50K+ monthly retainers)
 * - ROI-focused messaging for performance marketing
 * - Premium U.S. agency positioning adapted for Indian market
 * - Data-driven, strategic approach emphasis
 * 
 * ARCHITECTURE:
 * - Component-based architecture with error boundaries
 * - Each section is a separate, reusable component
 * - Comprehensive error handling and logging
 * - Mobile-first responsive design with animations
 * - Google Ads brand colors: Royal Blue (#1A73E8) + Yellow (#FABB05)
 */

import React, { useEffect } from 'react';

// Section Components - CONVERSION OPTIMIZED FOR GOOGLE ADS
import { HeroSection } from './_components/hero-section';
import { ProblemSolutionSection } from './_components/problem-solution-section';
import { ServicesSection } from './_components/services-section';
import { ProcessSection } from './_components/process-section';
import { CaseStudiesSection } from './_components/case-studies-section';
import { WhyChooseUsSection } from './_components/why-choose-us-section';
import { TestimonialsSection } from './_components/testimonials-section';
import { PricingSection } from './_components/pricing-section';
import { DashboardSection } from './_components/dashboard-section';
import { IntegrationsSection } from './_components/integrations-section';
import { FAQSection } from './_components/faq-section';
import { FinalCTASection } from './_components/final-cta-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { ScrollToTop } from './_components/scroll-to-top';
import { SectionErrorBoundary } from './_components/section-error-boundary';
import { RelatedServices } from '@/app/components/SEO/RelatedServices';
import { Breadcrumbs } from '@/app/components/SEO/Breadcrumbs';
import { getBreadcrumbItems, getRelatedServicesTitle } from '@/app/lib/seo/page-helpers';

console.log('[Google-Ads] Main page component loaded');

/**
 * Google Ads Management Landing Page Component
 * CONVERSION OPTIMIZED VERSION 1.0
 * 
 * CONVERSION-FOCUSED FLOW:
 * 1. Hero - Drive qualified leads with performance-focused Google Ads
 * 2. Problem/Solution - Address common Google Ads pain points
 * 3. Services - Complete campaign types & deliverables
 * 4. Process - 5-step proven system
 * 5. Case Studies - Real ROI results with metrics
 * 6. Why Choose Us - Key differentiators & expertise
 * 7. Testimonials - Social proof from successful clients
 * 8. Pricing - Transparent 3-tier plans (₹25K, ₹35K, ₹50K+)
 * 9. Dashboard - Show reporting transparency
 * 10. Integrations - Full-stack marketing tools
 * 11. FAQ - Address final objections
 * 12. Final CTA - Lead form with strong urgency
 * 
 * KEY FEATURES:
 * - Multiple strategic lead capture points
 * - ROI-obsessed messaging throughout
 * - Data-driven approach emphasis
 * - Clear ROAS demonstration
 * - Trust signals & certifications
 * - Mobile-first premium design
 */
export default function GoogleAdsManagementPage() {
  useEffect(() => {
    console.log('[Google-Ads] Page mounted');
    console.log('[Google-Ads] User Agent:', navigator.userAgent);
    console.log('[Google-Ads] Viewport:', {
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Track page view for Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Google Ads Management Service | Rajapragya Bharat',
        page_location: window.location.href,
        page_path: '/pages/google-ads-management'
      });
    }

    return () => {
      console.log('[Google-Ads] Page unmounted');
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Breadcrumb Navigation - SEO Optimized */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumbs items={getBreadcrumbItems('google-ads-management')} />
      </div>

      {/* Hero Section - Drive Clicks into Customers */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* Problem/Solution - The Issues We Solve */}
      <SectionErrorBoundary name="ProblemSolutionSection">
        <ProblemSolutionSection />
      </SectionErrorBoundary>

      {/* Services - What We Deliver */}
      <SectionErrorBoundary name="ServicesSection">
        <ServicesSection />
      </SectionErrorBoundary>

      {/* Process - Our Proven 5-Step System */}
      <SectionErrorBoundary name="ProcessSection">
        <ProcessSection />
      </SectionErrorBoundary>

      {/* Case Studies - Real Results */}
      <SectionErrorBoundary name="CaseStudiesSection">
        <CaseStudiesSection />
      </SectionErrorBoundary>

      {/* Why Choose Us - Key Differentiators */}
      <SectionErrorBoundary name="WhyChooseUsSection">
        <WhyChooseUsSection />
      </SectionErrorBoundary>

      {/* Testimonials - Social Proof */}
      <SectionErrorBoundary name="TestimonialsSection">
        <TestimonialsSection />
      </SectionErrorBoundary>

      {/* Pricing - Transparent Plans */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>

      {/* Dashboard - Reporting Transparency */}
      <SectionErrorBoundary name="DashboardSection">
        <DashboardSection />
      </SectionErrorBoundary>

      {/* Integrations - Tools & Platforms */}
      <SectionErrorBoundary name="IntegrationsSection">
        <IntegrationsSection />
      </SectionErrorBoundary>

      {/* FAQ - Objection Handling */}
      <SectionErrorBoundary name="FAQSection">
        <FAQSection />
      </SectionErrorBoundary>

      {/* Related Services - Internal Linking for SEO */}
      <SectionErrorBoundary name="RelatedServices">
        <RelatedServices 
          currentPage="google-ads-management"
          title={getRelatedServicesTitle('google-ads-management')}
        />
      </SectionErrorBoundary>

      {/* Final CTA - Lead Form */}
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
