import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Professional Website Services India — Design, Dev & SEO | Vedpragya',
  description: 'End-to-end website services: UI/UX design, front-end development, back-end engineering, SEO, and ongoing support. Vedpragya delivers complete digital products for Indian businesses.',
  path: '/pages/website-services',
  keywords: ['website services india', 'web design and development india', 'website development company india', 'professional website india'],
});

import React from "react";
import { ServicesHero } from "./_components/services-hero-section";
import { ServicesList } from "./_components/services-list-section";
import { ProcessSection } from "./_components/process-section";
import { TechnologiesSection } from "./_components/technologies-section";
import { FeatureCta } from "./_components/feature-cta-section";
import { Cta } from "./_components/cta-section";
import { SectionErrorBoundary } from "@/app/components/common/SectionErrorBoundary";
import { RelatedServicesStrip } from "@/app/components/RelatedServicesStrip";

export default function ServicesPage() {
  return (
    <>
      {/* Resilient sections wrapped in error boundary with logging */}
      <SectionErrorBoundary name="ServicesHero"><ServicesHero /></SectionErrorBoundary>
      <SectionErrorBoundary name="ServicesList"><ServicesList /></SectionErrorBoundary>
      <SectionErrorBoundary name="ProcessSection"><ProcessSection /></SectionErrorBoundary>
      <SectionErrorBoundary name="TechnologiesSection"><TechnologiesSection /></SectionErrorBoundary>
      <SectionErrorBoundary name="FeatureCta"><FeatureCta /></SectionErrorBoundary>
      <SectionErrorBoundary name="Cta"><Cta /></SectionErrorBoundary>
      <RelatedServicesStrip
        heading="Explore related services"
        services={[
          { label: 'SaaS Website Design', href: '/pages/saas-website-design' },
          { label: 'Next.js Development', href: '/pages/next-js-development' },
          { label: 'ReactJS Development', href: '/pages/reactjs-development' },
          { label: 'Node.js Development', href: '/pages/nodejs-development' },
          { label: 'AI Chatbot Development', href: '/pages/ai-chatbot-development' },
        ]}
      />
    </>
  );
} 