import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Website Design & Development Services India — Vedpragya',
  description: 'Full-stack website services: design, development, hosting, SEO, and maintenance. One agency for your complete web presence. India-based team. Free consultation.',
  path: '/pages/website-services',
  keywords: [
    'website services india',
    'website design services india',
    'website development services india',
    'web design company india',
    'website maintenance india',
    'full stack web services india',
    'website agency india',
  ],
});

import React from "react";
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