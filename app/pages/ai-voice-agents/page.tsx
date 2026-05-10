import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'AI Voice Agent Development India | Voice Bots & IVR — Vedpragya',
  description: 'Build custom AI voice agents for inbound sales, support, and IVR automation. Twilio, ElevenLabs, Whisper integrations. India-based AI voice agency. Get a free demo.',
  path: '/pages/ai-voice-agents',
  keywords: [
    'ai voice agent development india',
    'voice bot development india',
    'ai ivr development',
    'conversational voice ai',
    'twilio voice agent india',
    'elevenlabs integration india',
    'ai phone agent development',
  ],
});

/**
 * @fileoverview AI Voice Agents Landing Page - Main Entry Point
 * @description High-converting landing page for AI Voice Agent services
 * Structured for Vedpragya Bharat Pvt. Ltd. - AI Division
 * 
 * CONVERSION OPTIMIZED VERSION 1.0
 * 
 * BRANDING:
 * - Primary Color: Deep Navy Blue #0B1E39 (Tech + Authority)
 * - Accent Color: Electric Orange #FF7A00 (Voice + Energy + Action)
 * - Typography: Poppins SemiBold (Headings) • Inter Regular (Body)
 * - Tone: Confident • Reliable • Scalable • "Future of Voice Support"
 */

// Section Components
import { HeroSection } from './_components/hero-section';
import { ProblemSolutionSection } from './_components/problem-solution-section';
import { HowItWorksSection } from './_components/how-it-works-section';
import { WhoItsForSection } from './_components/who-its-for-section';
import { TechnologySection } from './_components/technology-section';
import { ProcessSection } from './_components/process-section';
import { CaseStudiesSection } from './_components/case-studies-section';
import { PricingSection } from './_components/pricing-section';
import { TestimonialsSection } from './_components/testimonials-section';
import { IntegrationsSection } from './_components/integrations-section';
import { FAQSection } from './_components/faq-section';
import { LeadFormSection } from './_components/lead-form-section';
import { FinalCTASection } from './_components/final-cta-section';
import { MobileFloatingCTA } from './_components/mobile-floating-cta';
import { ScrollToTop } from './_components/scroll-to-top';
import { SectionErrorBoundary } from './_components/section-error-boundary';

/**
 * AI Voice Agents Landing Page Component
 * 
 * CONVERSION-FOCUSED FLOW:
 * 1. Hero - Strong value proposition with phone call visual
 * 2. Problem/Solution - Traditional vs AI Voice Agents comparison
 * 3. How It Works - 5-step process breakdown
 * 4. Who It's For - Target industries showcase
 * 5. Technology - Enterprise-grade tech stack
 * 6. Process - Our 5-step delivery process
 * 7. Case Studies - Real results from Indian businesses
 * 8. Pricing - Transparent INR pricing with 3 tiers
 * 9. Testimonials - Social proof from clients
 * 10. Integrations - Seamless platform connections
 * 11. FAQ - Address objections
 * 12. Lead Form - Primary conversion point
 * 13. Final CTA - Strong closing with urgency
 * 14. Mobile Floating CTA - Always-visible contact
 * 
 * KEY FEATURES:
 * - Mobile-first responsive design
 * - Multiple lead capture points
 * - Professional animations with Framer Motion
 * - Trust signals throughout
 * - Indian market focus (INR pricing, regional languages)
 * - Technical authority establishment
 */
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'AI Voice Agents Development India | Conversational AI — Vedpragya',
  description: 'Build AI voice agents for sales, support, and scheduling. Powered by LLMs with natural Hindi and English speech. Reduce call centre costs by 60%. Free demo.',
  path: '/pages/ai-voice-agents',
  keywords: [
    'ai voice agent development india',
    'conversational ai india',
    'voice ai bot india',
    'ai phone agent india',
    'voice chatbot development india',
    'llm voice agent',
    'ai call centre india',
  ],
});

export default function AIVoiceAgentsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* 1. Hero - "Your AI Receptionist That Never Misses a Call" */}
      <SectionErrorBoundary name="HeroSection">
        <HeroSection />
      </SectionErrorBoundary>

      {/* 2. Problem/Solution - Traditional Call Centers vs AI Voice Agents */}
      <SectionErrorBoundary name="ProblemSolutionSection">
        <ProblemSolutionSection />
      </SectionErrorBoundary>

      {/* 3. How It Works - 5 Steps to AI-Powered Calls */}
      <SectionErrorBoundary name="HowItWorksSection">
        <HowItWorksSection />
      </SectionErrorBoundary>

      {/* 4. Who It's For - Target Industries */}
      <SectionErrorBoundary name="WhoItsForSection">
        <WhoItsForSection />
      </SectionErrorBoundary>

      {/* 5. Technology Stack */}
      <SectionErrorBoundary name="TechnologySection">
        <TechnologySection />
      </SectionErrorBoundary>

      {/* 6. Our Process - 5-Step Delivery */}
      <SectionErrorBoundary name="ProcessSection">
        <ProcessSection />
      </SectionErrorBoundary>

      {/* 7. Case Studies - Real Results */}
      <SectionErrorBoundary name="CaseStudiesSection">
        <CaseStudiesSection />
      </SectionErrorBoundary>

      {/* 8. Pricing - Transparent Plans */}
      <SectionErrorBoundary name="PricingSection">
        <PricingSection />
      </SectionErrorBoundary>

      {/* 9. Testimonials - Social Proof */}
      <SectionErrorBoundary name="TestimonialsSection">
        <TestimonialsSection />
      </SectionErrorBoundary>

      {/* 10. Integrations - Platform Connections */}
      <SectionErrorBoundary name="IntegrationsSection">
        <IntegrationsSection />
      </SectionErrorBoundary>

      {/* 11. FAQ - Objection Handling */}
      <SectionErrorBoundary name="FAQSection">
        <FAQSection />
      </SectionErrorBoundary>

      {/* 12. Lead Form - Primary Conversion Point */}
      <SectionErrorBoundary name="LeadFormSection">
        <LeadFormSection />
      </SectionErrorBoundary>

      {/* 13. Final CTA - Strong Closing */}
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
