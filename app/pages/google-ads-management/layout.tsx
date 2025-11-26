import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for Google Ads Management Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Google Ads Management Service',
    serviceDescription: 'Professional Google Ads management and optimization. Drive qualified leads & sales with performance-focused campaigns. ROI-obsessed approach with transparent reporting.',
    serviceType: 'PPC Management & Digital Marketing',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'Starter',
        description: 'Small Businesses - 1-2 Campaigns, Weekly Optimization, Basic Reports',
        price: '25000',
        priceCurrency: 'INR',
      },
      {
        name: 'Professional',
        description: 'Growing Businesses - 3-5 Campaigns, Daily Optimization, Advanced Reports',
        price: '35000',
        priceCurrency: 'INR',
      },
      {
        name: 'Enterprise',
        description: 'Large Organizations - Unlimited Campaigns, Dedicated Manager, Custom Reporting',
        price: '50000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.9',
      reviewCount: '450',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'How soon can I see results?',
        answer: 'Typically within 2–4 weeks of launch once data optimizations start. However, some clients see positive movement in the first week. Google Ads requires initial learning phase of 7-14 days, after which we implement aggressive optimization based on real performance data.',
      },
      {
        question: 'Do I need a landing page?',
        answer: 'Yes, we either improve yours or build a high-converting page for best ROI. A dedicated landing page typically converts 3-5× better than sending traffic to your homepage. We offer landing page optimization as an add-on service (₹10K-₹30K one-time).',
      },
      {
        question: 'Is the ad spend included in your fee?',
        answer: 'No — you pay Google directly; our fee covers management & optimization. This keeps everything transparent. You maintain full control of your ad account and budget. We recommend a minimum ad spend of ₹30,000-₹50,000/month for meaningful results.',
      },
      {
        question: 'Will I get access to my Google Ads account?',
        answer: 'Always. You own the data; we just manage it professionally. We set up the account under your ownership and you can access it 24/7. We provide admin access and full transparency into all campaign settings, keywords, and performance data.',
      },
      {
        question: 'What makes you different from other agencies?',
        answer: 'We focus on ROI, not just clicks. Our data-driven approach, transparent reporting, and proven track record set us apart. We work as an extension of your team, not just a vendor.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Google Ads Management', url: '/pages/google-ads-management' },
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

export default function GoogleAdsManagementLayout({
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
