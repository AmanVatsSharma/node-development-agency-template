'use client';

/**
 * @fileoverview ReactJS Web App Development Landing Page - Main Entry Point
 * @description High-converting, production-ready landing page for ReactJS development services
 * @author Development Agency
 * @version 1.0.0
 * 
 * MARKETING FOCUS:
 * - Attract startups, enterprises, and founders
 * - Position as React powerhouse agency
 * - High-performance, scalable web app messaging
 * - Clear value proposition with technical authority
 * 
 * ARCHITECTURE:
 * - Component-based architecture with error boundaries
 * - Each section is a separate, reusable component
 * - Comprehensive error handling and logging
 * - Accessibility-first approach (ARIA labels, semantic HTML)
 * - Mobile-first responsive design with app-like experience
 */

import React, { useEffect } from 'react';

// Section Components - CONVERSION OPTIMIZED
import { HeroSection } from './_components/hero-section';
import { WhyReactSection } from './_components/why-react-section';
import { ExpertiseSection } from './_components/expertise-section';
import { ServicesSection } from './_components/services-section';
import { CaseStudiesSection } from './_components/case-studies-section';
import { TechStackSection } from './_components/tech-stack-section';
import { WhyChooseUsSection } from './_components/why-choose-us-section';
import { WorkflowSection } from './_components/workflow-section';
import { PricingSection } from './_components/pricing-section';
import { TestimonialsSection } from './_components/testimonials-section';
import { LeadFormSection } from './_components/lead-form-section';
import { FAQSection } from './_components/faq-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { ScrollToTop } from './_components/scroll-to-top';
import { SectionErrorBoundary } from './_components/section-error-boundary';
import { Breadcrumbs } from '@/app/components/SEO/Breadcrumbs';
import { RelatedServices } from '@/app/components/SEO/RelatedServices';
import { getBreadcrumbItems, getRelatedServicesTitle } from '@/app/lib/seo/page-helpers';

console.log('[ReactJS-Dev] Main page component loaded');

/**
 * ReactJS Web App Development Landing Page Component
 * CONVERSION OPTIMIZED VERSION 1.0
 * 
 * CONVERSION-FOCUSED FLOW:
 * 1. Hero - Strong value proposition with React branding
 * 2. Why ReactJS - Education + Authority building
 * 3. Our Expertise - Show React ecosystem mastery
 * 4. Services - Complete service offerings with clear deliverables
 * 5. Case Studies - Real results with metrics and swipeable cards
 * 6. Tech Stack - Show technical expertise with logos grid
 * 7. Why Choose Us - Trust signals and differentiators
 * 8. Workflow - 5-step transparent process timeline
 * 9. Pricing - Transparent INR pricing with packages
 * 10. Testimonials - Social proof from satisfied clients
 * 11. Lead Form - Strategic placement with multiple CTAs
 * 12. FAQ - Address final objections
 * 13. Mobile Floating CTA - Always-visible contact buttons
 * 
 * KEY FEATURES:
 * - Multiple lead capture points
 * - Performance-focused messaging
 * - Technical authority establishment
 * - Clear ROI demonstration
 * - Trust signals throughout
 * - Mobile-first design with app-like experience
 */
export default function ReactJSDevelopmentPage() {
  useEffect(() => {
    console.log('[ReactJS-Dev] Page mounted');
    console.log('[ReactJS-Dev] User Agent:', navigator.userAgent);
    console.log('[ReactJS-Dev] Viewport:', {
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Track page view
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'ReactJS Web App Development Services',
        page_location: window.location.href,
        page_path: '/pages/reactjs-development'
      });
    }

    return () => {
      console.log('[ReactJS-Dev] Page unmounted');
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Breadcrumb Navigation - SEO Optimized */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumbs items={getBreadcrumbItems('reactjs-development')} />
      </div>

      {/* Hero Section - Strong Value Proposition */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* Why ReactJS - Education + Authority */}
      <SectionErrorBoundary name="WhyReactSection">
        <WhyReactSection />
      </SectionErrorBoundary>

      {/* Our Expertise - React Ecosystem Mastery */}
      <SectionErrorBoundary name="ExpertiseSection">
        <ExpertiseSection />
      </SectionErrorBoundary>

      {/* Services - Complete Offerings */}
      <SectionErrorBoundary name="ServicesSection">
        <ServicesSection />
      </SectionErrorBoundary>

      {/* Case Studies - Real Results */}
      <SectionErrorBoundary name="CaseStudiesSection">
        <CaseStudiesSection />
      </SectionErrorBoundary>

      {/* Technology Stack - Technical Credibility */}
      <SectionErrorBoundary name="TechStackSection">
        <TechStackSection />
      </SectionErrorBoundary>

      {/* Why Choose Us - Trust Signals */}
      <SectionErrorBoundary name="WhyChooseUsSection">
        <WhyChooseUsSection />
      </SectionErrorBoundary>

      {/* Project Workflow - Transparent Process */}
      <SectionErrorBoundary name="WorkflowSection">
        <WorkflowSection />
      </SectionErrorBoundary>

      {/* Pricing - Transparent Packages */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>

      {/* Testimonials - Social Proof */}
      <SectionErrorBoundary name="TestimonialsSection">
        <TestimonialsSection />
      </SectionErrorBoundary>

      {/* Lead Form - Primary Conversion Point */}
      <SectionErrorBoundary name="LeadFormSection">
        <LeadFormSection />
      </SectionErrorBoundary>

      {/* FAQ - Objection Handling */}
      <SectionErrorBoundary name="FAQSection">
        <FAQSection />
      </SectionErrorBoundary>

      {/* Related Services - Internal Linking for SEO */}
      <SectionErrorBoundary name="RelatedServices">
        <RelatedServices 
          currentPage="reactjs-development"
          title={getRelatedServicesTitle('reactjs-development')}
        />
      </SectionErrorBoundary>

      {/* Scroll To Top - UX Enhancement */}
      <ScrollToTop />

      {/* Mobile Floating CTA - Always Accessible */}
      <MobileFloatingCTA />
    </main>
  );
}
