/**
 * @fileoverview Layout for NSE/MCX Live Market Data Landing Page
 * @description Handles metadata and structured data for SEO
 * @version 2.0.0
 */

import { metadata as pageMetadata, structuredData } from './metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata = pageMetadata;

const FAQ_QUESTIONS = [
  {
    question: 'What is NSE/MCX live market data API integration?',
    answer:
      'NSE/MCX live market data integration connects your trading platform or financial application to real-time price feeds from the National Stock Exchange (NSE), Multi Commodity Exchange (MCX), and other Indian exchanges for live quotes, depth, and historical data.',
  },
  {
    question: 'How real-time is the market data feed?',
    answer:
      'Our market data integrations deliver tick-level real-time data with typical latency under 100ms. We support Level 1 (top of book) and Level 2 (market depth) data feeds depending on your exchange subscription.',
  },
  {
    question: 'Can you integrate NSE/MCX data into my existing trading application?',
    answer:
      'Yes. We integrate market data APIs into existing trading platforms, mobile apps, web dashboards, and algorithmic trading systems. We handle authentication, data normalization, WebSocket streaming, and reconnection logic.',
  },
  {
    question: 'What does NSE/MCX market data API integration cost?',
    answer:
      'Market data integration pricing depends on data vendor licensing and the complexity of your existing system. Integration services typically start from ₹50,000. Contact us for a free technical assessment and quote.',
  },
  {
    question: 'Do you provide historical market data alongside live feeds?',
    answer:
      'Yes. We can integrate historical OHLCV data, tick data archives, and corporate action data alongside live feeds — enabling backtesting, chart analysis, and analytics features in your financial application.',
  },
];

export default function MarketDataAPILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'NSE/MCX Live Market Data', url: `${SEO_SITE_URL}/pages/nse-mcx-live-market-data` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {children}
    </>
  );
}
