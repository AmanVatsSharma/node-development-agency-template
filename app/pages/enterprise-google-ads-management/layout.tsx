import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Enterprise Google Ads Management | Large Account PPC — Vedpragya',
  description:
    'Scale large ad accounts with dedicated PPC operations, advanced campaign strategy, and executive reporting. Enterprise Google Ads management from India.',
  path: '/pages/enterprise-google-ads-management',
  keywords: [
    'enterprise google ads management',
    'dedicated ppc team',
    'large account ppc management',
    'enterprise paid search services',
    'enterprise ppc agency india',
    'google ads for enterprise',
    'large budget google ads management',
    'enterprise digital marketing india',
    'enterprise campaign management',
    'white label ppc management',
    'enterprise sem services',
    'google ads account audit enterprise',
    'vedpragya enterprise ads',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'What qualifies as an enterprise Google Ads account?',
    answer:
      'Enterprise accounts typically have monthly ad spends above ₹5,00,000 ($6,000+), multiple campaigns across products or regions, large keyword lists, and complex attribution requirements. We provide dedicated account management for these large accounts.',
  },
  {
    question: 'What does your enterprise Google Ads management include?',
    answer:
      'Our enterprise service includes a dedicated PPC strategist, daily campaign monitoring, advanced bid management, cross-channel attribution, A/B testing, custom executive dashboards, monthly strategy reviews, and Slack/direct communication channels.',
  },
  {
    question: 'Do you offer white-label Google Ads management for agencies?',
    answer:
      'Yes. We offer white-label PPC management for digital marketing agencies. Your clients remain yours — we manage campaigns under your brand with transparent reporting and NDA-protected confidentiality.',
  },
  {
    question: 'How do you report on enterprise campaign performance?',
    answer:
      'We provide custom Looker Studio dashboards with real-time data, weekly performance summaries, monthly strategy reviews, and quarterly business reviews. Reports are branded and executive-ready.',
  },
  {
    question: 'Can you audit our existing large Google Ads account?',
    answer:
      'Yes. We offer comprehensive account audits that examine campaign structure, quality score, wasted spend, conversion tracking accuracy, audience strategy, and competitive positioning — with a detailed action plan for improvement.',
  },
];

export default function EnterpriseGoogleAdsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Enterprise Google Ads Management', url: `${SEO_SITE_URL}/pages/enterprise-google-ads-management` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      {children}
    </>
  );
}
