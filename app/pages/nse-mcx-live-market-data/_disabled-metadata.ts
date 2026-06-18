/**
 * @fileoverview SEO Metadata for NSE/MCX Live Market Data Landing Page
 * @description Optimized for financial data API services
 * @keywords NSE live data API, MCX real-time data, stock market API India
 */

import { Metadata } from 'next';
import { companyProfile } from '@/app/data/companyProfile';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { toAbsoluteSeoUrl } from '@/app/lib/seo/constants';

/**
 * Primary Keywords (Target Audience: Algo Traders, Fintech Apps, Brokers):
 * - "NSE live data API India"
 * - "MCX real-time market data"
 * - "Stock market API India"
 * - "Live trading data feed"
 * - "NSE F&O data API"
 * - "BSE live data streaming"
 * - "Real-time stock prices API"
 * - "Market data vendor India"
 */

export const metadata: Metadata = buildPageMetadata({
  title: 'NSE & MCX Live Market Data API | Real-Time Trading Data',
  description:
    'Ultra-fast NSE, BSE, and MCX market data APIs with real-time streaming, low latency, and stable uptime for fintech and trading apps.',
  path: '/pages/nse-mcx-live-market-data',
  keywords: [
    'nse live data api',
    'mcx market data api',
    'bse live feed api',
    'real-time market data',
    'algo trading data feed',
    'websocket market data',
  ],
});

/**
 * Structured Data for Google Rich Results
 */
export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  'name': 'NSE & MCX Live Market Data API',
  'applicationCategory': 'FinanceApplication',
  'operatingSystem': 'Any',
  'offers': {
    '@type': 'AggregateOffer',
    'lowPrice': '999',
    'highPrice': '49999',
    'priceCurrency': 'INR',
    'availability': 'https://schema.org/InStock'
  },
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.8',
    'ratingCount': '127',
    'bestRating': '5',
    'worstRating': '1'
  },
  'provider': {
    '@type': 'Organization',
    'name': companyProfile.legalName,
    'url': companyProfile.websiteUrl,
    'logo': toAbsoluteSeoUrl('/logo.png')
  },
  'description': 'Ultra-fast NSE, BSE & MCX live market data API with millisecond-level accuracy. REST & WebSocket support for real-time trading applications.'
};

console.log('[Market-Data-API] Metadata loaded successfully');
