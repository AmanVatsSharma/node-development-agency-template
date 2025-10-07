'use client';

/**
 * @fileoverview EnterpriseHero CRM - Demo Request Page
 * @description Lead capture and onboarding experience for CRM demo requests
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * CONVERSION FLOW:
 * 1. Demo Hero - "Experience EnterpriseHero CRM — Personalized for You"
 * 2. Demo Form - Comprehensive lead capture form
 * 3. What Happens Next - 3-step process visualization
 * 4. FAQ - Answer common questions
 * 5. Contact Support - Support information
 * 
 * FEATURES:
 * - Mobile-first responsive design
 * - Form validation and error handling
 * - Success messaging
 * - Google Ads conversion tracking
 * - Console logs for debugging
 * - SEO optimized
 */

import React, { useEffect } from 'react';

// Section Components
import { DemoHeroSection } from './_components/demo-hero-section';
import { DemoFormSection } from './_components/demo-form-section';
import { WhatHappensNextSection } from './_components/what-happens-next-section';
import { FAQSection } from './_components/faq-section';
import { ContactSupportSection } from './_components/contact-support-section';

// Utility Components
import { SectionErrorBoundary } from '../_components/section-error-boundary';
import { ScrollToTop } from '../_components/scroll-to-top';

console.log('[CRM-Demo] Demo page component loaded');

/**
 * CRM Demo Request Page
 * Lead capture and personalized demo onboarding
 * 
 * CONVERSION OPTIMIZED:
 * - Clear value proposition
 * - Comprehensive form with module selection
 * - Trust signals throughout
 * - Process transparency
 * - Multiple support channels
 */
export default function CRMDemoPage() {
  useEffect(() => {
    console.log('[CRM-Demo] Demo page mounted');
    console.log('[CRM-Demo] User Agent:', navigator.userAgent);
    console.log('[CRM-Demo] Viewport:', {
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Track page view for Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Request CRM Demo - EnterpriseHero',
        page_location: window.location.href,
        page_path: '/crm/demo'
      });
      console.log('[CRM-Demo] Google Ads page view tracked');
    }

    // Scroll to form if hash is present
    if (window.location.hash === '#form') {
      setTimeout(() => {
        document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }

    return () => {
      console.log('[CRM-Demo] Demo page unmounted');
    };
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Demo Hero - Introduction */}
      <SectionErrorBoundary name="DemoHeroSection">
        <DemoHeroSection />
      </SectionErrorBoundary>

      {/* Demo Form - Lead Capture */}
      <SectionErrorBoundary name="DemoFormSection">
        <DemoFormSection />
      </SectionErrorBoundary>

      {/* What Happens Next - Process Steps */}
      <SectionErrorBoundary name="WhatHappensNextSection">
        <WhatHappensNextSection />
      </SectionErrorBoundary>

      {/* FAQ - Common Questions */}
      <SectionErrorBoundary name="FAQSection">
        <FAQSection />
      </SectionErrorBoundary>

      {/* Contact Support - Help Information */}
      <SectionErrorBoundary name="ContactSupportSection">
        <ContactSupportSection />
      </SectionErrorBoundary>

      {/* Utility Components */}
      <ScrollToTop />
    </main>
  );
}
