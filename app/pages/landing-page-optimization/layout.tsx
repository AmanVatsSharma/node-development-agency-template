import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Landing Page Optimization & CRO Services | Vedpragya India',
  description:
    'Improve conversion rates with landing page audits, UX improvements, A/B testing strategy, and performance optimization. Expert CRO services in India.',
  path: '/pages/landing-page-optimization',
  keywords: [
    'landing page optimization',
    'conversion rate optimization',
    'landing page audit',
    'cro services india',
    'landing page design india',
    'improve landing page conversions',
    'ab testing services',
    'google ads landing page optimization',
    'landing page development india',
    'user experience optimization',
    'increase website conversion rate',
    'cro agency india',
    'vedpragya landing page',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'What is landing page optimization (CRO)?',
    answer:
      'Landing page optimization (or CRO — Conversion Rate Optimization) is the process of improving a landing page\'s design, copy, and user experience to increase the percentage of visitors who take the desired action — such as filling a form, calling, or making a purchase.',
  },
  {
    question: 'How long does landing page optimization take?',
    answer:
      'An initial audit and redesign typically takes 1–3 weeks. A/B testing requires a minimum of 2–4 weeks to collect statistically significant data. Ongoing optimization is a continuous process with monthly improvements.',
  },
  {
    question: 'How much can CRO improve my conversion rates?',
    answer:
      'Results vary by page and industry. Typical improvements range from 20%–100%+ increase in conversion rate. Even a 30% improvement can significantly reduce your cost-per-lead and maximize your advertising spend.',
  },
  {
    question: 'Do you optimize landing pages for Google Ads?',
    answer:
      'Yes. We specialize in Google Ads landing pages — improving Quality Score, ad-to-page message match, page speed, mobile experience, and conversion elements to lower your CPC and increase ROAS.',
  },
  {
    question: 'What tools do you use for landing page A/B testing?',
    answer:
      'We use Google Optimize, VWO, Unbounce, and Hotjar for heatmaps and session recordings. Tool selection depends on your existing tech stack and testing requirements.',
  },
];

export default function LandingPageOptimizationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Landing Page Optimization', url: `${SEO_SITE_URL}/pages/landing-page-optimization` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      {children}
    </>
  );
}
