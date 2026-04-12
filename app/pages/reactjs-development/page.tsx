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

export default function ReactJSDevelopmentPage() {
  return (
    <main className="min-h-screen">
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

      {/* Scroll To Top - UX Enhancement */}
      <ScrollToTop />

      {/* Mobile Floating CTA - Always Accessible */}
      <MobileFloatingCTA />
    </main>
  );
}
