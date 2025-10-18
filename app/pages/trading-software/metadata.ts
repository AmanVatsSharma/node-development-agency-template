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

export const metadata: Metadata = {
  title: 'Trading Software for Brokers | Enterprise Trading Platform - Vedpragya Bharat',
  description: 'Enterprise-grade trading software for brokers with real-time market data, advanced charting, algo trading, and white-label solutions. NSE, BSE, MCX, Forex integration. 99.99% uptime, <50ms latency.',
  
  keywords: [
    // Primary Keywords
    'trading software for brokers',
    'broker trading platform',
    'white label trading software',
    'stock trading platform for brokers',
    
    // Secondary Keywords
    'NSE trading software',
    'BSE trading software',
    'MCX trading platform',
    'brokerage trading system',
    'sub broker trading software',
    
    // Feature-based
    'algo trading platform',
    'real-time trading software',
    'multi-asset trading platform',
    'trading terminal software',
    'broker back office software',
    
    // Location-based
    'trading software India',
    'SEBI approved trading platform',
    'Indian stock market software',
  ],
  
  authors: [{ name: 'Vedpragya Bharat Pvt. Ltd.' }],
  creator: 'Vedpragya Bharat',
  publisher: 'Vedpragya Bharat',
  
  // Open Graph (for social sharing)
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vedpragyabharat.com/pages/trading-software',
    title: 'Enterprise Trading Software for Brokers | Vedpragya Bharat',
    description: 'Transform your brokerage with our enterprise-grade trading platform. Real-time data, advanced charting, algo trading, white-label solutions. NSE, BSE, MCX integration.',
    siteName: 'Vedpragya Bharat',
    images: [
      {
        url: '/images/trading-software-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Trading Software Platform Preview',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Trading Software for Brokers | Vedpragya Bharat',
    description: 'Transform your brokerage with our enterprise-grade trading platform. Real-time data, algo trading, white-label solutions.',
    images: ['/images/trading-software-twitter.jpg'],
    creator: '@VedpragyaBharat',
  },
  
  // Additional Meta Tags
  alternates: {
    canonical: 'https://vedpragyabharat.com/pages/trading-software',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification
  verification: {
    google: 'your-google-site-verification-code',
  },
  
  // Additional metadata
  category: 'Technology',
  classification: 'Trading Software, Financial Technology',
};

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
