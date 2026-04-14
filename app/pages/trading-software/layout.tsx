/**
 * @fileoverview Trading Software Landing Page - Layout
 * @description Layout wrapper with metadata and structured data
 * @company Vedpragya Bharat Pvt. Ltd.
 */

import { ReactNode } from 'react';
import { metadata, structuredData } from './metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export { metadata };

const FAQ_QUESTIONS = [
  {
    question: 'What types of trading software do you build?',
    answer:
      'We build algo trading platforms, order management systems, portfolio trackers, market data terminals, strategy backtesting tools, risk management dashboards, and brokerage back-office systems — for retail traders and institutional clients.',
  },
  {
    question: 'Can you integrate NSE and MCX live market data?',
    answer:
      'Yes. We integrate live tick data from NSE, BSE, MCX, and NCDEX through authorized data vendors. Our systems handle high-frequency data streams with low-latency processing for real-time price updates and alerts.',
  },
  {
    question: 'How fast can your trading systems execute orders?',
    answer:
      'Our trading systems are optimized for low latency with typical order execution times under 50ms for API-based trading. We use optimized database queries, WebSocket connections, and in-memory caching for high-speed operations.',
  },
  {
    question: 'How much does custom trading software development cost?',
    answer:
      'A custom trading platform starts from ₹3,00,000 for a basic order management system. Full-featured algo trading platforms with live data, backtesting, and risk controls range from ₹8,00,000 to ₹30,00,000+.',
  },
  {
    question: 'Do you build SEBI-compliant trading systems?',
    answer:
      'Yes. We understand SEBI\'s algorithmic trading guidelines and risk management requirements. We build systems with circuit breakers, order quantity limits, P&L-based kill switches, and audit trails for regulatory compliance.',
  },
];

interface LayoutProps {
  children: ReactNode;
}

export default function TradingSoftwareLayout({ children }: LayoutProps) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Trading Software', url: `${SEO_SITE_URL}/pages/trading-software` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}
