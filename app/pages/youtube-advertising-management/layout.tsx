import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'YouTube Advertising Management Services | Video Ads Agency — Vedpragya',
  description:
    'Run strategic YouTube ad campaigns for awareness, demand generation, and lead acquisition with full-funnel optimization. Expert YouTube Ads management in India.',
  path: '/pages/youtube-advertising-management',
  keywords: [
    'youtube advertising management',
    'youtube ads agency',
    'video ad campaign optimization',
    'youtube lead generation ads',
    'youtube ads management india',
    'youtube video advertising',
    'google video ads agency',
    'youtube skippable ads',
    'youtube brand awareness campaigns',
    'youtube remarketing ads',
    'video marketing services india',
    'youtube ads specialist india',
    'youtube advertising cost india',
    'vedpragya youtube ads',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'How much does YouTube advertising cost in India?',
    answer:
      'YouTube advertising costs are based on your ad budget. CPV (cost-per-view) typically ranges from ₹0.25–₹2 per view in India. We recommend a minimum monthly budget of ₹25,000 for meaningful reach and optimization data.',
  },
  {
    question: 'What types of YouTube ads do you manage?',
    answer:
      'We manage all YouTube ad formats: skippable in-stream ads, non-skippable in-stream ads, bumper ads, discovery ads, masthead ads, and YouTube Shorts ads — tailored to your campaign objectives.',
  },
  {
    question: 'How do you measure YouTube ad success?',
    answer:
      'We track view rate, watch time, CTR, brand recall lift, website visits, and conversions. We set up conversion tracking to tie YouTube views to leads and sales so you can see clear ROI.',
  },
  {
    question: 'Do I need to provide video creative or do you produce it?',
    answer:
      'You can provide your own video or we can refer you to our trusted video production partners. We focus on ad strategy, targeting, and optimization — or handle end-to-end if needed.',
  },
  {
    question: 'How long does it take to launch a YouTube ad campaign?',
    answer:
      'Once we have approved video creative and campaign brief, we can launch a YouTube ad campaign within 3–5 business days. Full campaign optimization takes 2–4 weeks as we collect performance data.',
  },
];

export default function YouTubeAdvertisingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'YouTube Advertising Management', url: `${SEO_SITE_URL}/pages/youtube-advertising-management` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      {children}
    </>
  );
}
