'use client';

/**
 * @fileoverview WhatsApp Business API Landing Page - Main Entry Point
 * @description Ultra-premium, highly converting landing page for WhatsApp Business API services
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * MARKETING FOCUS:
 * - Mobile-first, app-like interface
 * - High conversion optimization
 * - Indian market focus (₹ pricing, local examples)
 * - Google Ads ready with conversion tracking
 * - Psychological persuasion techniques
 * 
 * BRANDING:
 * - Primary: WhatsApp Green #25D366 (Trust + Recognition)
 * - Secondary: Deep Navy #075E54 (Professional + Authority)  
 * - Accent: Bright Orange #FF7A00 (Urgency + Action)
 * 
 * CONVERSION FLOW (13 Sections):
 * 1. Hero - Strong value proposition with animated WhatsApp chat
 * 2. Why WhatsApp - 98% open rate stats + comparison
 * 3. Features - 4 main offerings (API Setup, Automation, Analytics, CRM)
 * 4. Automation Workflows - Interactive showcase
 * 5. Use Cases - Industry-specific applications
 * 6. Technology Stack - Enterprise-grade tech credibility
 * 7. Process - 5-step implementation timeline
 * 8. Pricing - 3 transparent tiers with INR pricing
 * 9. Integrations - Platform connections
 * 10. Case Studies - Real results with metrics
 * 11. Testimonials - Social proof from clients
 * 12. FAQ - Objection handling
 * 13. Lead Form - Primary conversion point
 * 14. Final CTA - Strong closing with urgency
 * 15. Mobile Floating CTA - Always-visible contact
 */

import React, { useEffect } from 'react';

// Section Components - CONVERSION OPTIMIZED
import { HeroSection } from './_components/hero-section';
import { WhyWhatsAppSection } from './_components/why-whatsapp-section';
import { FeaturesSection } from './_components/features-section';
import { AutomationWorkflowsSection } from './_components/automation-workflows-section';
import { UseCasesSection } from './_components/use-cases-section';
import { TechnologyStackSection } from './_components/technology-stack-section';
import { ProcessSection } from './_components/process-section';
import { PricingSection } from './_components/pricing-section';
import { IntegrationsSection } from './_components/integrations-section';
import { CaseStudiesSection } from './_components/case-studies-section';
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

console.log('[WhatsApp-API] Main page component loaded');

/**
 * WhatsApp Business API Landing Page Component
 * CONVERSION OPTIMIZED VERSION 1.0
 * 
 * KEY FEATURES:
 * - Mobile-first responsive design (perfect on 375px)
 * - Multiple lead capture points (5+ CTAs)
 * - Professional animations with Framer Motion
 * - Trust signals and social proof throughout
 * - Indian market optimization
 * - Technical authority establishment
 * - Clear ROI demonstration
 * - Google Ads conversion tracking ready
 * 
 * PERFORMANCE:
 * - Component-based architecture
 * - Error boundaries per section
 * - Comprehensive logging for debugging
 * - Accessibility-first (ARIA labels, semantic HTML)
 * - Fast loading with lazy loading
 */
export default function WhatsAppBusinessAPIPage() {
  useEffect(() => {
    console.log('[WhatsApp-API] Page mounted');
    console.log('[WhatsApp-API] User Agent:', navigator.userAgent);
    console.log('[WhatsApp-API] Viewport:', {
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Track page view for Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'WhatsApp Business API Integration Services',
        page_location: window.location.href,
        page_path: '/pages/whatsapp-business-api'
      });
    }

    // Track time on page
    const startTime = Date.now();
    return () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      console.log('[WhatsApp-API] Page unmounted, time on page:', timeOnPage, 'seconds');
      
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'time_on_page', {
          event_category: 'Engagement',
          event_label: 'WhatsApp API Landing',
          value: timeOnPage
        });
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Breadcrumb Navigation - SEO Optimized */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumbs items={getBreadcrumbItems('whatsapp-business-api')} />
      </div>

      {/* 1. Hero Section - Strong Value Proposition */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* 2. Why WhatsApp - Education + Authority Building */}
      <SectionErrorBoundary name="WhyWhatsAppSection">
        <WhyWhatsAppSection />
      </SectionErrorBoundary>

      {/* 3. Features - Complete Offerings */}
      <SectionErrorBoundary name="FeaturesSection">
        <FeaturesSection />
      </SectionErrorBoundary>

      {/* 4. Automation Workflows - Interactive Showcase */}
      <SectionErrorBoundary name="AutomationWorkflowsSection">
        <AutomationWorkflowsSection />
      </SectionErrorBoundary>

      {/* 5. Use Cases - Industry-Specific Benefits */}
      <SectionErrorBoundary name="UseCasesSection">
        <UseCasesSection />
      </SectionErrorBoundary>

      {/* 6. Technology Stack - Technical Credibility */}
      <SectionErrorBoundary name="TechnologyStackSection">
        <TechnologyStackSection />
      </SectionErrorBoundary>

      {/* 7. Process - Transparent Workflow */}
      <SectionErrorBoundary name="ProcessSection">
        <ProcessSection />
      </SectionErrorBoundary>

      {/* 8. Pricing - Transparent Packages */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>

      {/* 9. Integrations - Platform Connections */}
      <SectionErrorBoundary name="IntegrationsSection">
        <IntegrationsSection />
      </SectionErrorBoundary>

      {/* 10. Case Studies - Real Results */}
      <SectionErrorBoundary name="CaseStudiesSection">
        <CaseStudiesSection />
      </SectionErrorBoundary>

      {/* 11. Testimonials - Social Proof */}
      <SectionErrorBoundary name="TestimonialsSection">
        <TestimonialsSection />
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
          currentPage="whatsapp-business-api"
          title={getRelatedServicesTitle('whatsapp-business-api')}
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

console.log('[WhatsApp-API] Page export successful');
