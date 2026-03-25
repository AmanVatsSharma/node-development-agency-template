import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'E-commerce Google Ads Optimization | Increase ROAS — Vedpragya',
  description:
    'Scale e-commerce revenue with Google Shopping, Merchant Center optimization, and conversion-focused campaign management. Expert e-commerce PPC in India.',
  path: '/pages/ecommerce-google-ads-optimization',
  keywords: [
    'ecommerce google ads optimization',
    'google shopping campaigns',
    'merchant center optimization',
    'ecommerce ppc management',
    'google shopping ads india',
    'ecommerce ppc agency india',
    'increase ecommerce roas',
    'shopping ads optimization',
    'google shopping feed optimization',
    'ecommerce google ads management',
    'online store advertising india',
    'performance max ecommerce',
    'vedpragya ecommerce ads',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'What is a good ROAS for e-commerce Google Ads?',
    answer:
      'A healthy ROAS (Return on Ad Spend) for e-commerce Google Ads is typically 4x–8x (400%–800%). This means for every ₹1 spent on ads, you earn ₹4–₹8 in revenue. We target above-benchmark ROAS through continuous optimization.',
  },
  {
    question: 'How do you optimize Google Shopping campaigns for e-commerce?',
    answer:
      'We optimize product feed quality in Merchant Center, structure Shopping campaigns by product category and margin, use negative keyword management, apply bid adjustments by device and audience, and continuously A/B test product titles and descriptions.',
  },
  {
    question: 'What e-commerce platforms do you work with?',
    answer:
      'We work with all major e-commerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom-built stores. We handle Merchant Center setup, feed integration, and campaign management across all platforms.',
  },
  {
    question: 'How long does it take to improve e-commerce ad performance?',
    answer:
      'Initial campaign restructuring and feed optimization takes 1–2 weeks. You typically see measurable ROAS improvements within 4–8 weeks as campaigns collect data and optimizations take effect.',
  },
  {
    question: 'Do you manage Performance Max campaigns for e-commerce?',
    answer:
      'Yes. We manage Performance Max campaigns alongside standard Shopping and Search campaigns. We optimize asset groups, audience signals, and conversion goals to maximize your e-commerce revenue from Google\'s AI-driven ad formats.',
  },
];

export default function EcommerceGoogleAdsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'E-commerce Google Ads Optimization', url: `${SEO_SITE_URL}/pages/ecommerce-google-ads-optimization` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      {children}
    </>
  );
}
