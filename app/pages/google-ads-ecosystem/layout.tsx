import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Google Ads Ecosystem | Complete PPC & Paid Media Services — Vedpragya',
  description:
    'Access a complete Google Ads ecosystem including strategy, campaign management, audits, optimization, and conversion-focused execution. Full-service PPC agency India.',
  path: '/pages/google-ads-ecosystem',
  keywords: [
    'google ads ecosystem',
    'complete ppc services',
    'google ads agency services',
    'paid search growth services',
    'google ads full service india',
    'ppc management agency india',
    'google ads specialist india',
    'paid media agency india',
    'search engine marketing india',
    'google ads management company',
    'ppc services india',
    'google ads consultant india',
    'vedpragya google ads',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'What does a complete Google Ads ecosystem include?',
    answer:
      'A complete Google Ads ecosystem includes: Search campaigns, Shopping campaigns, Display campaigns, YouTube ads, Performance Max, Discovery ads, remarketing, conversion tracking, Google Analytics integration, landing page optimization, and regular strategy reviews.',
  },
  {
    question: 'How much should I spend on Google Ads per month?',
    answer:
      'The right budget depends on your industry, competition, and goals. Small businesses typically start with ₹20,000–₹50,000/month. Established businesses often spend ₹1,00,000–₹10,00,000+/month. We help determine the right budget for your specific goals.',
  },
  {
    question: 'What makes Vedpragya different from other Google Ads agencies?',
    answer:
      'We combine data-driven campaign management with landing page optimization and conversion tracking expertise. We focus on ROAS and actual business outcomes — not just clicks and impressions. Every campaign is backed by transparent reporting.',
  },
  {
    question: 'Do you manage Google Ads accounts for businesses outside India?',
    answer:
      'Yes. We manage Google Ads accounts for clients in India, UAE, US, UK, Australia, and Canada. Our team is experienced with multi-currency campaigns, international targeting, and time-zone appropriate communication.',
  },
  {
    question: 'How do you charge for Google Ads management?',
    answer:
      'We charge a flat monthly management fee based on your ad spend level and account complexity. We do not take commissions from Google — all your budget goes to ads. Contact us for a custom pricing proposal.',
  },
];

export default function GoogleAdsEcosystemLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Google Ads Ecosystem', url: `${SEO_SITE_URL}/pages/google-ads-ecosystem` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      {children}
    </>
  );
}
