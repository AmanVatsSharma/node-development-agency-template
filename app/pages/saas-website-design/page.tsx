import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'SaaS Website Design Agency India | High-Converting SaaS Sites | Vedpragya',
  description: 'Vedpragya designs and builds high-converting SaaS marketing websites, pricing pages, and product landing pages using Next.js and Framer Motion. Purpose-built for B2B SaaS companies.',
  path: '/pages/saas-website-design',
  keywords: ['saas website design india', 'saas landing page design', 'saas marketing website india', 'b2b saas website design', 'saas web design agency'],
});

import { HeroSection } from './_components/hero-section';
import { WhatWeBuildSection } from './_components/what-we-build-section';
import { WhyUsSection } from './_components/why-us-section';
import { TechStackSection } from './_components/tech-stack-section';
import { LeadFormSection } from './_components/lead-form-section';
import { FAQSection } from './_components/faq-section';
import { FinalCtaSection } from './_components/final-cta-section';

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
