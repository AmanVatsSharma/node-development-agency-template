import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Performance Max Campaign Management Services | Google PMax — Vedpragya',
  description:
    'Run high-performing Google Performance Max campaigns with strategic setup, continuous optimization, and conversion-focused reporting. PMax experts in India.',
  path: '/pages/performance-max-campaigns',
  keywords: [
    'performance max campaigns',
    'google performance max management',
    'ai powered ads optimization',
    'google ads automation services',
    'performance max setup india',
    'pmax campaign management',
    'google pmax agency',
    'performance max optimization',
    'performance max for ecommerce',
    'google ads performance max india',
    'smart campaign management',
    'vedpragya performance max',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'What is a Google Performance Max (PMax) campaign?',
    answer:
      'Performance Max is Google\'s AI-driven campaign type that runs across all Google channels — Search, Display, YouTube, Discover, Gmail, and Maps — from a single campaign. It uses machine learning to find the best placements and audiences to meet your conversion goals.',
  },
  {
    question: 'Is Performance Max better than standard Google Ads campaigns?',
    answer:
      'PMax works best when you have strong conversion data and high-quality creative assets. For e-commerce and broad reach, PMax often outperforms standard campaigns. However, search campaigns with exact targeting still excel for specific high-intent keywords. We run both in parallel for optimal results.',
  },
  {
    question: 'What assets do I need for a Performance Max campaign?',
    answer:
      'PMax requires creative assets including: images (multiple aspect ratios), headlines, descriptions, video (recommended), logo, and final URL. We help you prepare and test high-quality asset groups to maximize AI performance.',
  },
  {
    question: 'How do you optimize Performance Max campaigns?',
    answer:
      'We optimize PMax by crafting strong asset groups, providing high-quality audience signals, setting accurate conversion goals, excluding irrelevant placements, testing new creatives monthly, and analyzing search term insights.',
  },
  {
    question: 'What industries benefit most from Performance Max?',
    answer:
      'E-commerce, lead generation, real estate, education, healthcare, and travel businesses see the strongest results with PMax. Any business with clear conversion goals and sufficient historical conversion data can benefit.',
  },
];

export default function PerformanceMaxCampaignsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Performance Max Campaigns', url: `${SEO_SITE_URL}/pages/performance-max-campaigns` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      {children}
    </>
  );
}
