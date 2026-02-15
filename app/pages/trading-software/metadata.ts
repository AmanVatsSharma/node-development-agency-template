/**
 * @fileoverview Trading Software Landing Page - SEO Metadata
 * @description Metadata configuration for broker trading platform landing page
 * @company Vedpragya Bharat Pvt. Ltd.
 * 
 * SEO OPTIMIZED for:
 * - Keywords: Trading software for brokers, broker trading platform, white-label trading software
 * - Target: Brokers, sub-brokers, brokerage firms in India
 * - Focus: Enterprise trading platform, NSE/BSE/MCX integration
 */

import { Metadata } from 'next';
import { companyProfile } from '@/app/data/companyProfile';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { toAbsoluteSeoUrl } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Trading Software for Brokers | Enterprise Trading Platform',
  description:
    'Enterprise-grade trading software for brokers with real-time market data, advanced charting, and white-label customization.',
  path: '/pages/trading-software',
  keywords: [
    'trading software for brokers',
    'broker trading platform',
    'white label trading software',
    'algo trading platform',
    'real-time trading software',
    'broker back office software',
  ],
});

// Structured Data (JSON-LD)
export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Vedpragya Trading Software',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web, iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '299000',
    priceCurrency: 'INR',
    priceValidUntil: '2025-12-31',
    availability: 'https://schema.org/InStock',
    description: 'Enterprise trading software with NSE, BSE, MCX integration',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
  provider: {
    '@type': 'Organization',
    name: companyProfile.legalName,
    url: companyProfile.websiteUrl,
  },
  featureList: [
    'Real-time market data (NSE, BSE, MCX, Forex)',
    'Advanced charting with TradingView',
    'Algorithmic trading support',
    'Multi-asset trading platform',
    'White-label solutions',
    'Mobile trading apps (iOS/Android)',
    'Risk management tools',
    'Back-office management',
    'API access for custom integrations',
  ],
};
