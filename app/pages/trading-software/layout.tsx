import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for Trading Software Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Trading Software for Brokers',
    serviceDescription: 'Enterprise-grade trading software for brokers with real-time market data, advanced charting, algo trading, and white-label solutions.',
    serviceType: 'Trading Platform Software',
    areaServed: ['India'],
    offers: [
      {
        name: 'Trading Software Starter',
        description: 'Basic trading platform with essential features',
        price: '500000',
        priceCurrency: 'INR',
      },
      {
        name: 'Trading Software Professional',
        description: 'Advanced trading platform with custom features',
        price: '1500000',
        priceCurrency: 'INR',
      },
      {
        name: 'Trading Software Enterprise',
        description: 'Enterprise trading platform with full customization',
        price: '5000000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.8',
      reviewCount: '80',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'What exchanges do you integrate with?',
        answer: 'We integrate with NSE, BSE, MCX, and Forex exchanges. We can integrate with any exchange that provides API access.',
      },
      {
        question: 'What features does the trading software include?',
        answer: 'Our trading software includes real-time market data, advanced charting, order management, algo trading, risk management, reporting, and white-label customization.',
      },
      {
        question: 'Is the software white-label?',
        answer: 'Yes, our trading software is white-label, meaning you can brand it with your own logo, colors, and domain. We provide full customization options.',
      },
      {
        question: 'What is the system latency?',
        answer: 'Our trading software provides <50ms latency with 99.99% uptime. We use high-performance infrastructure to ensure fast order execution.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Trading Software', url: '/pages/trading-software' },
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

export default function TradingSoftwareLayout({
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
