'use client';

/**
 * @fileoverview AI Chatbot Development Landing Page - Main Entry Point
 * @description High-converting, production-ready landing page for AI Chatbot development services
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * MARKETING FOCUS:
 * - Indian market optimization (₹49K, ₹99K, ₹1.99L pricing)
 * - Google Ads ready with conversion tracking
 * - Mobile-first responsive design
 * - Clear value proposition with technical authority
 * 
 * BRANDING:
 * - Primary: Royal Deep Blue #0A2540 (Trust + Technology)
 * - Accent: Saffron Gold #FFB100 (Innovation + India Pride)
 * - Modern, techy, cool professional and premium polished
 * 
 * CONVERSION FLOW:
 * 1. Hero - Strong value proposition: "Turn Conversations into Conversions"
 * 2. Why AI Chatbots - Problem/Solution matrix
 * 3. What We Build - Use cases + Tech stack
 * 4. Process - 5-step delivery process
 * 5. Case Studies - Real results with metrics
 * 6. Testimonials - Social proof
 * 7. Pricing - Transparent INR pricing
 * 8. Integrations - Tech logos
 * 9. FAQ - Objection handling
 * 10. Lead Form - Primary conversion point
 * 11. Final CTA - Strong urgency
 * 12. Mobile Floating CTA - Always accessible
 */

import React, { useEffect } from 'react';

// Section Components - CONVERSION OPTIMIZED
import { HeroSection } from './_components/hero-section';
import { WhyChatbotsSection } from './_components/why-chatbots-section';
import { WhatWeBuildSection } from './_components/what-we-build-section';
import { ProcessSection } from './_components/process-section';
import { CaseStudiesSection } from './_components/case-studies-section';
import { TestimonialsSection } from './_components/testimonials-section';
import { PricingSection } from './_components/pricing-section';
import { IntegrationsSection } from './_components/integrations-section';
import { FAQSection } from './_components/faq-section';
import { LeadFormSection } from './_components/lead-form-section';
import { FinalCTASection } from './_components/final-cta-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { ScrollToTop } from './_components/scroll-to-top';
import { SectionErrorBoundary } from './_components/section-error-boundary';
import { Breadcrumbs } from '@/app/components/SEO/Breadcrumbs';
import { RelatedServices } from '@/app/components/SEO/RelatedServices';
import { getBreadcrumbItems, getRelatedServicesTitle } from '@/app/lib/seo/page-helpers';

console.log('[AI-Chatbot-Dev] Main page component loaded');

/**
 * AI Chatbot Development Landing Page Component
 * CONVERSION OPTIMIZED VERSION 1.0
 * 
 * CONVERSION-FOCUSED FLOW:
 * - Multiple lead capture points throughout the page
 * - Trust signals and social proof strategically placed
 * - Clear CTAs with contrasting colors
 * - Mobile-first design for India's mobile-heavy market
 * - Performance optimized for fast loading
 */
export default function AIChatbotDevelopmentPage() {
  useEffect(() => {
    console.log('[AI-Chatbot-Dev] Page mounted');
    console.log('[AI-Chatbot-Dev] User Agent:', navigator.userAgent);
    console.log('[AI-Chatbot-Dev] Viewport:', {
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Track page view for Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'AI Chatbot Development Services',
        page_location: window.location.href,
        page_path: '/pages/ai-chatbot-development'
      });
    }

    return () => {
      console.log('[AI-Chatbot-Dev] Page unmounted');
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Breadcrumb Navigation - SEO Optimized */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumbs items={getBreadcrumbItems('ai-chatbot-development')} />
      </div>

      {/* Hero Section - "Turn Conversations into Conversions" */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* Why AI Chatbots - Problem/Solution Matrix */}
      <SectionErrorBoundary name="WhyChatbotsSection">
        <WhyChatbotsSection />
      </SectionErrorBoundary>

      {/* What We Build - Use Cases + Tech Stack */}
      <SectionErrorBoundary name="WhatWeBuildSection">
        <WhatWeBuildSection />
      </SectionErrorBoundary>

      {/* Process - How We Deliver in 5 Steps */}
      <SectionErrorBoundary name="ProcessSection">
        <ProcessSection />
      </SectionErrorBoundary>

      {/* Case Studies - Real Results */}
      <SectionErrorBoundary name="CaseStudiesSection">
        <CaseStudiesSection />
      </SectionErrorBoundary>

      {/* Testimonials - Social Proof */}
      <SectionErrorBoundary name="TestimonialsSection">
        <TestimonialsSection />
      </SectionErrorBoundary>

      {/* Pricing - Transparent INR Packages */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>

      {/* Integrations - Tech Stack Logos */}
      <SectionErrorBoundary name="IntegrationsSection">
        <IntegrationsSection />
      </SectionErrorBoundary>

      {/* FAQ - Objection Handling */}
      <SectionErrorBoundary name="FAQSection">
        <FAQSection />
      </SectionErrorBoundary>

      {/* Lead Form - Primary Conversion Point */}
      <SectionErrorBoundary name="LeadFormSection">
        <LeadFormSection />
      </SectionErrorBoundary>

      {/* Related Services - Internal Linking for SEO */}
      <SectionErrorBoundary name="RelatedServices">
        <RelatedServices 
          currentPage="ai-chatbot-development"
          title={getRelatedServicesTitle('ai-chatbot-development')}
        />
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
