import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { NSE_MCX_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for NSE MCX Live Market Data Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire nse mcx data developer" (high buyer intent)
 * - Secondary: Service-specific market data API keywords
 * - Long-tail: API-type-specific market data keywords
 * - Semantic: Related market data and trading API terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire NSE MCX Data Developer | NSE MCX Live Market Data API',
  'Ultra-fast NSE, BSE & MCX live market data API. Millisecond-level tick data, options chain, F&O streaming via REST & WebSocket. 99.99% uptime.',
  NSE_MCX_KEYWORDS,
  '/pages/nse-mcx-live-market-data',
  {
    ogImage: '/market-data-api-og.jpg',
    cta: 'Start free trial today!',
  }
);

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
    'name': 'Vedpragya Bharat Pvt. Ltd.',
    'url': 'https://vedpragyabharat.com',
    'logo': 'https://vedpragyabharat.com/logo.png'
  },
  'description': 'Ultra-fast NSE, BSE & MCX live market data API with millisecond-level accuracy. REST & WebSocket support for real-time trading applications.'
};

console.log('[Market-Data-API] Metadata loaded successfully');
