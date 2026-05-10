import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'SaaS Website Design & Development Agency India — Vedpragya',
  description: 'Build a high-converting SaaS website with Vedpragya. Next.js, React, Framer Motion — conversion-optimised SaaS landing pages and web apps. Free proposal in 24h.',
  path: '/pages/saas-website-design',
  keywords: [
    'saas website design india',
    'saas landing page design',
    'saas web development india',
    'framer developer india',
    'next.js saas website',
    'saas ui design agency',
    'startup website design india',
  ],
});

import { HeroSection } from './_components/hero-section';
import { WhatWeBuildSection } from './_components/what-we-build-section';
import { WhyUsSection } from './_components/why-us-section';
import { TechStackSection } from './_components/tech-stack-section';
import { LeadFormSection } from './_components/lead-form-section';
import { FAQSection } from './_components/faq-section';
import { FinalCtaSection } from './_components/final-cta-section';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'SaaS Website Design India | Next.js UI/UX for Startups — Vedpragya',
  description: 'High-converting SaaS landing pages and marketing sites for Indian startups. Next.js, Framer Motion, and type-forward design. Onboarding flows, pricing pages, and demo CTAs. Free brief.',
  path: '/pages/saas-website-design',
  keywords: [
    'saas website design india',
    'saas landing page design india',
    'saas ui ux design india',
    'saas marketing website india',
    'next.js saas website',
    'saas website agency india',
    'framer developer india',
  ],
});

export default function SaasWebsiteDesignPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhatWeBuildSection />
      <WhyUsSection />
      <TechStackSection />
      <LeadFormSection />
      <FAQSection />
      <FinalCtaSection />
    </main>
  );
}
