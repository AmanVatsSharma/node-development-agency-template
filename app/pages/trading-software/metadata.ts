import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { TRADING_SOFTWARE_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for Trading Software Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire trading software developer" (high buyer intent)
 * - Secondary: Service-specific trading platform keywords
 * - Long-tail: Platform-type-specific trading keywords
 * - Semantic: Related trading and financial software terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire Trading Software Developer | Trading Software Development',
  'Enterprise-grade trading software for brokers with real-time market data, advanced charting, algo trading, and white-label solutions. NSE, BSE, MCX, Forex integration.',
  TRADING_SOFTWARE_KEYWORDS,
  '/pages/trading-software',
  {
    ogImage: '/images/trading-software-og.jpg',
    cta: 'Get free consultation today!',
  }
);

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
    name: 'Vedpragya Bharat Pvt. Ltd.',
    url: 'https://vedpragyabharat.com',
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
