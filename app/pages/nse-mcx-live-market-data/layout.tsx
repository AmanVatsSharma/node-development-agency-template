import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for NSE/MCX Live Market Data Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'NSE & MCX Live Market Data API',
    serviceDescription: 'Ultra-fast NSE, BSE & MCX live market data API. Millisecond-level tick data, options chain, F&O streaming via REST & WebSocket.',
    serviceType: 'Financial Data API',
    areaServed: ['India'],
    offers: [
      {
        name: 'Market Data Starter',
        description: 'Basic live market data API access',
        price: '10000',
        priceCurrency: 'INR',
      },
      {
        name: 'Market Data Professional',
        description: 'Advanced market data with WebSocket streaming',
        price: '50000',
        priceCurrency: 'INR',
      },
      {
        name: 'Market Data Enterprise',
        description: 'Enterprise market data with custom solutions',
        price: '200000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.9',
      reviewCount: '150',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'What exchanges do you cover?',
        answer: 'We provide live market data for NSE (National Stock Exchange), BSE (Bombay Stock Exchange), and MCX (Multi Commodity Exchange).',
      },
      {
        question: 'What is the data latency?',
        answer: 'Our market data API provides millisecond-level latency with 99.99% uptime. Data is delivered in real-time via REST API and WebSocket streaming.',
      },
      {
        question: 'Do you provide historical data?',
        answer: 'Yes, we provide historical market data including tick data, OHLC data, and options chain data. Historical data can be accessed via our API.',
      },
      {
        question: 'How do I integrate the API?',
        answer: 'We provide REST API and WebSocket endpoints with comprehensive documentation. Our team can help with integration and provide sample code.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'NSE/MCX Live Market Data', url: '/pages/nse-mcx-live-market-data' },
    ],
  });

  return (
    <>
      <StructuredDataScript data={serviceSchema} />
      <StructuredDataScript data={faqSchema} />
      <StructuredDataScript data={breadcrumbSchema} />
    </>
  );
}

export default function NSEMCXLiveMarketDataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData />
      {children}
    </>
  );
}
