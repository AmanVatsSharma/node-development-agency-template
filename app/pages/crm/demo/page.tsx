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

// Section Components
import { DemoHeroSection } from './_components/demo-hero-section';
import { DemoFormSection } from './_components/demo-form-section';
import { WhatHappensNextSection } from './_components/what-happens-next-section';
import { FAQSection } from './_components/faq-section';
import { ContactSupportSection } from './_components/contact-support-section';

// Utility Components
import { SectionErrorBoundary } from '../_components/section-error-boundary';
import { ScrollToTop } from '../_components/scroll-to-top';

export default function CRMDemoPage() {
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
