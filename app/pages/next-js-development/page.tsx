/**
 * @fileoverview Next.js Web Development Landing Page - Main Entry Point
 * @description High-converting, production-ready landing page for Next.js development services
 * @author Development Agency
 * @version 1.0.0
 * 
 * MARKETING FOCUS:
 * - Mid to high-ticket conversion optimization
 * - Performance and SEO focused messaging
 * - Enterprise-grade positioning
 * - Clear value proposition with technical authority
 * 
 * ARCHITECTURE:
 * - Component-based architecture with error boundaries
 * - Each section is a separate, reusable component
 * - Comprehensive error handling and logging
 * - Accessibility-first approach (ARIA labels, semantic HTML)
 * - Mobile-first responsive design
 */

// Section Components - CONVERSION OPTIMIZED
import { HeroSection } from './_components/hero-section';
import { WhyNextJsSection } from './_components/why-nextjs-section';
import { ServicesSection } from './_components/services-section';
import { ProcessSection } from './_components/process-section';
import { TechStackSection } from './_components/tech-stack-section';
import { PerformanceSection } from './_components/performance-section';
import { PricingSection } from './_components/pricing-section';
import { CaseStudiesSection } from './_components/case-studies-section';
import { TestimonialsSection } from './_components/testimonials-section';
import { LeadFormSection } from './_components/lead-form-section';
import { FAQSection } from './_components/faq-section';
import { FinalCTASection } from './_components/final-cta-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { ScrollToTop } from './_components/scroll-to-top';
import { SectionErrorBoundary } from './_components/section-error-boundary';
import { RelatedServicesStrip } from '@/app/components/RelatedServicesStrip';

export default function NextJsDevelopmentPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Strong Value Proposition */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* Why Next.js - Education + Authority */}
      <SectionErrorBoundary name="WhyNextJsSection">
        <WhyNextJsSection />
      </SectionErrorBoundary>

      {/* Services - Complete Offerings */}
      <SectionErrorBoundary name="ServicesSection">
        <ServicesSection />
      </SectionErrorBoundary>

      {/* Process - Transparent Workflow */}
      <SectionErrorBoundary name="ProcessSection">
        <ProcessSection />
      </SectionErrorBoundary>

      {/* Technology Stack - Technical Credibility */}
      <SectionErrorBoundary name="TechStackSection">
        <TechStackSection />
      </SectionErrorBoundary>

      {/* Performance Promise - Quantifiable Guarantees */}
      <SectionErrorBoundary name="PerformanceSection">
        <PerformanceSection />
      </SectionErrorBoundary>

      {/* Pricing - Transparent Packages */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>

      {/* Case Studies - Real Results */}
      <SectionErrorBoundary name="CaseStudiesSection">
        <CaseStudiesSection />
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

      {/* Final CTA - Strong Closing */}
      <SectionErrorBoundary name="FinalCTASection">
        <FinalCTASection />
      </SectionErrorBoundary>

      {/* Related Services - Internal linking */}
      <RelatedServicesStrip
        heading="Explore related services"
        services={[
          { label: 'SaaS Website Design', href: '/pages/saas-website-design' },
          { label: 'ReactJS Development', href: '/pages/reactjs-development' },
          { label: 'Node.js Development', href: '/pages/nodejs-development' },
          { label: 'Web Development India', href: '/pages/web-development' },
          { label: 'AI Chatbot Development', href: '/pages/ai-chatbot-development' },
        ]}
      />

      {/* Scroll To Top - UX Enhancement */}
      <ScrollToTop />

      {/* Mobile Floating CTA - Always Accessible */}
      <MobileFloatingCTA />
    </main>
  );
}
