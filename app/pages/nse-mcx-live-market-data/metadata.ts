/**
 * @fileoverview SEO Metadata for NSE/MCX Live Market Data Landing Page
 * @description Optimized for financial data API services
 * @keywords NSE live data API, MCX real-time data, stock market API India
 */

import { Metadata } from 'next';

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

export const metadata: Metadata = {
  // Primary Title - 60 chars optimal
  title: 'NSE & MCX Live Market Data API | Real-Time Trading Data | Vedpragya',
  
  // Meta Description - 155-160 chars optimal
  description: 'Ultra-fast NSE, BSE & MCX live market data API. Millisecond-level tick data, options chain, F&O streaming via REST & WebSocket. 99.99% uptime. Start free trial today!',
  
  // Keywords for SEO
  keywords: [
    'NSE live data API',
    'MCX real-time market data',
    'stock market API India',
    'BSE live data feed',
    'live trading data API',
    'NSE F&O data API',
    'options chain data API',
    'tick by tick data India',
    'market depth API',
    'algo trading data feed',
    'real-time stock prices',
    'WebSocket market data',
    'low latency market data',
    'historical stock data API',
    'market data vendor India',
    'TrueData alternative',
    'trading data provider'
  ].join(', '),
  
  // Open Graph (Social sharing)
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vedpragyabharat.com/nse-mcx-live-market-data',
    siteName: 'Vedpragya Bharat',
    title: 'NSE & MCX Live Market Data API - Real-Time Trading Data',
    description: 'Ultra-fast live market data API for NSE, BSE & MCX. Millisecond-level accuracy. Perfect for algo trading, fintech apps & research platforms.',
    images: [
      {
        url: '/market-data-api-og.jpg',
        width: 1200,
        height: 630,
        alt: 'NSE MCX Live Market Data API Services'
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@VedpragyaBharat',
    creator: '@VedpragyaBharat',
    title: 'NSE & MCX Live Market Data API',
    description: 'Ultra-fast real-time market data for algo trading & fintech apps. 99.99% uptime.',
    images: ['/market-data-api-og.jpg']
  },
  
  // Additional Meta Tags
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'language': 'English',
    'target': 'Traders, Developers, Fintech Companies',
    'audience': 'Professional Traders, Algorithmic Trading Firms, Fintech Startups',
    'coverage': 'India',
    'distribution': 'India',
    'rating': 'General',
    'revisit-after': '3 days',
    'author': 'Vedpragya Bharat Pvt. Ltd.',
    'reply-to': 'contact@vedpragyabharat.com',
  },
  
  // Robots
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
  
  // Canonical URL
  alternates: {
    canonical: 'https://vedpragyabharat.com/nse-mcx-live-market-data'
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
};

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
