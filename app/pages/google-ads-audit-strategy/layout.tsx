import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Google Ads Audit & Strategy Services | PPC Account Review — Vedpragya',
  description:
    'Get a detailed Google Ads account audit with strategic recommendations to improve efficiency, lead quality, and ROAS. Expert PPC audit services in India.',
  path: '/pages/google-ads-audit-strategy',
  keywords: [
    'google ads audit',
    'google ads strategy',
    'ppc account analysis',
    'campaign performance audit',
    'google ads account review',
    'ppc audit services india',
    'google ads performance report',
    'google ads health check',
    'wasted ad spend audit',
    'google ads optimization strategy',
    'ppc strategy consulting india',
    'google ads quality score audit',
    'vedpragya ads audit',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'What does a Google Ads audit cover?',
    answer:
      'A comprehensive Google Ads audit covers: account structure, campaign settings, keyword strategy, negative keywords, Quality Score, ad copy, bidding strategy, conversion tracking accuracy, audience targeting, landing page relevance, and budget efficiency.',
  },
  {
    question: 'How long does a Google Ads audit take?',
    answer:
      'A thorough Google Ads audit typically takes 3–5 business days depending on account size. You receive a detailed audit report with findings and a prioritized action plan to improve performance.',
  },
  {
    question: 'How much wasted ad spend can an audit identify?',
    answer:
      'Most Google Ads accounts have 20%–40% wasted ad spend from poor keyword targeting, broad match keywords without negatives, underperforming ad groups, and incorrect bidding. Our audits typically identify significant saving opportunities.',
  },
  {
    question: 'Do you offer a free Google Ads audit?',
    answer:
      'Yes. We offer a free initial Google Ads account review that identifies the top 3–5 issues hurting your performance. A full detailed audit with a complete action plan is available as a paid service.',
  },
  {
    question: 'Can you help implement the audit recommendations?',
    answer:
      'Absolutely. After the audit, we can implement all recommendations ourselves or guide your team through the changes. Many clients engage us for ongoing management after an audit reveals improvement opportunities.',
  },
];

export default function GoogleAdsAuditStrategyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Google Ads Audit & Strategy', url: `${SEO_SITE_URL}/pages/google-ads-audit-strategy` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      {children}
    </>
  );
}
