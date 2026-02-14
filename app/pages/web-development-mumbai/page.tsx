'use client';

/**
 * @fileoverview Mumbai Web Development Landing Page - Main Entry Point
 * @description High-converting, Mumbai-focused landing page for web development services
 * @author Development Agency
 * @version 1.0.0
 * 
 * MUMBAI FOCUS:
 * - Mumbai-specific targeting and messaging
 * - INR-first pricing (₹15,999, ₹49,999, ₹95,000+)
 * - Mumbai client testimonials and case studies
 * - Local market understanding and expertise
 * - Mumbai skyline and cultural elements
 * 
 * CONVERSION OPTIMIZATION:
 * - Multiple lead capture touchpoints
 * - Free consultation booking system
 * - Interactive 3D website showcase
 * - Mobile-first design with floating CTAs
 * - Comprehensive error handling and logging
 * - Accessibility-first approach (ARIA labels, semantic HTML)
 */

import React, { useEffect } from 'react';

// Section Components - MUMBAI-FOCUSED WEB DEVELOPMENT
import { HeroSection } from './_components/hero-section';
import { TrustSignalsSection } from './_components/trust-signals-section';
import { ServicesSection } from './_components/services-section';
import { PortfolioSection } from './_components/portfolio-section';
import { PricingSection } from './_components/pricing-section';
import { TestimonialsSection } from './_components/testimonials-section';
import { ProcessSection } from './_components/process-section';
import { TechnologySection } from './_components/technology-section';
import { LeadFormSection } from './_components/lead-form-section';
import { FAQSection } from './_components/faq-section';
import { FinalCTASection } from './_components/final-cta-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { ScrollToTop } from './_components/scroll-to-top';
import { SectionErrorBoundary } from './_components/section-error-boundary';
import { Breadcrumbs } from '@/app/components/SEO/Breadcrumbs';
import { RelatedServices } from '@/app/components/SEO/RelatedServices';
import { getBreadcrumbItems, getRelatedServicesTitle } from '@/app/lib/seo/page-helpers';

console.log('[Mumbai-Web-Development] Main page component loaded');

/**
 * Mumbai Web Development Landing Page Component
 * CONVERSION OPTIMIZED VERSION 1.0
 * 
 * MUMBAI-FOCUSED CONVERSION FLOW:
 * 1. Hero - Mumbai skyline + 3D website showcase
 * 2. Trust Signals - Mumbai client logos + stats
 * 3. Services - Comprehensive web development grid
 * 4. Portfolio - Mumbai-based case studies with results
 * 5. Pricing - Transparent INR pricing with Mumbai focus
 * 6. Testimonials - Mumbai client success stories
 * 7. Process - Our 5-step development process
 * 8. Technology - Tech stack and expertise
 * 9. Lead Form - Free consultation booking
 * 10. FAQ - Address common concerns
 * 11. Final CTA - Strong urgency + FOMO
 * 12. Mobile Floating CTA - Always-visible contact
 * 
 * KEY FEATURES:
 * - Mumbai-specific messaging and targeting
 * - 3D interactive website showcase
 * - Multiple lead capture touchpoints
 * - Mobile-first responsive design
 * - Comprehensive error handling
 * - SEO-optimized for Mumbai market
 */
export default function MumbaiWebDevelopmentPage() {
  useEffect(() => {
    console.log('[Mumbai-Web-Development] Page mounted - Mumbai-focused web development');
    console.log('[Mumbai-Web-Development] User Agent:', navigator.userAgent);
    console.log('[Mumbai-Web-Development] Viewport:', {
      width: window.innerWidth,
      height: window.innerHeight
    });
    console.log('[Mumbai-Web-Development] Mumbai market targeting active');

    return () => {
      console.log('[Mumbai-Web-Development] Page unmounted');
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Breadcrumb Navigation - SEO Optimized */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumbs items={getBreadcrumbItems('web-development-mumbai')} />
      </div>

      {/* Hero Section - Mumbai skyline + 3D website showcase */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* Trust Signals - Mumbai client logos + stats */}
      <SectionErrorBoundary name="TrustSignalsSection">
        <TrustSignalsSection />
      </SectionErrorBoundary>

      {/* Services - Comprehensive web development grid */}
      <SectionErrorBoundary name="ServicesSection">
        <ServicesSection />
      </SectionErrorBoundary>

      {/* Portfolio - Mumbai-based case studies with results */}
      <SectionErrorBoundary name="PortfolioSection">
        <PortfolioSection />
      </SectionErrorBoundary>

      {/* Pricing - Transparent INR pricing with Mumbai focus */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>

      {/* Testimonials - Mumbai client success stories */}
      <SectionErrorBoundary name="TestimonialsSection">
        <TestimonialsSection />
      </SectionErrorBoundary>

      {/* Process - Our 5-step development process */}
      <SectionErrorBoundary name="ProcessSection">
        <ProcessSection />
      </SectionErrorBoundary>

      {/* Technology - Tech stack and expertise */}
      <SectionErrorBoundary name="TechnologySection">
        <TechnologySection />
      </SectionErrorBoundary>

      {/* Lead Form - Free consultation booking */}
      <SectionErrorBoundary name="LeadFormSection">
        <LeadFormSection />
      </SectionErrorBoundary>

      {/* FAQ - Address common concerns */}
      <SectionErrorBoundary name="FAQSection">
        <FAQSection />
      </SectionErrorBoundary>

      {/* Related Services - Internal Linking for SEO */}
      <SectionErrorBoundary name="RelatedServices">
        <RelatedServices 
          currentPage="web-development-mumbai"
          title={getRelatedServicesTitle('web-development-mumbai')}
        />
      </SectionErrorBoundary>

      {/* Final CTA - Strong urgency + FOMO */}
      <SectionErrorBoundary name="FinalCTASection">
        <FinalCTASection />
      </SectionErrorBoundary>

      {/* Scroll To Top - Smooth scroll to top */}
      <ScrollToTop />

      {/* Mobile Floating CTA - Always-visible contact */}
      <MobileFloatingCTA />
    </main>
  );
}