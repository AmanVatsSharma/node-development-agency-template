/**
 * @fileoverview Layout Component for Shopify Product Page Customization Landing Page
 * @description Provides SEO metadata and structured data for the landing page
 * @version 1.0.0
 */

import { metadata as pageMetadata } from './metadata';
import { companyProfile } from '@/app/data/companyProfile';
import { toAbsoluteSeoUrl } from '@/app/lib/seo/constants';
import { FAQStructuredData } from '@/app/components/SEO/StructuredData';

console.log('[Shopify-Product-Page] Layout component loaded');

export const metadata = pageMetadata;

const FAQ_QUESTIONS = [
  {
    question: 'What customizations can you make to Shopify product pages?',
    answer:
      'We customize product page layouts, add custom size guides, interactive image galleries, video embeds, custom variant selectors, sticky add-to-cart bars, trust badges, upsell widgets, and dynamic pricing displays using custom Liquid and JavaScript.',
  },
  {
    question: 'Will product page customizations affect my store\'s performance?',
    answer:
      'No. We write optimized, lightweight code and test against Core Web Vitals benchmarks. All customizations are built for fast load times and mobile performance — we do not use bloated apps or unnecessary scripts.',
  },
  {
    question: 'Can you add custom size guides, comparison tools, and product selectors?',
    answer:
      'Yes. We build custom interactive elements including size finders, product comparison tables, bundle builders, custom option selectors, and conditional logic for product variants — all fully responsive and conversion-focused.',
  },
  {
    question: 'How much does Shopify product page customization cost?',
    answer:
      'Shopify product page customization starts from ₹15,000 for a single page layout upgrade. Full custom product page redesigns with multiple dynamic features range from ₹40,000 to ₹1,50,000 depending on complexity.',
  },
  {
    question: 'Will custom product page designs work on mobile?',
    answer:
      'Yes. All our Shopify customizations are built mobile-first and tested across iOS and Android browsers. We also ensure compatibility with Shopify\'s Theme Editor so you can continue making content edits without developer help.',
  },
];

/**
 * Layout wrapper for Shopify Product Page Customization landing page
 * Includes structured data for SEO and accessibility
 */
export default function ShopifyProductPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('[Shopify-Product-Page] Layout rendering');

  return (
    <>
      <FAQStructuredData questions={FAQ_QUESTIONS} />

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Shopify Product Page Customization',
            description:
              'Professional Shopify product page customization services with custom Liquid, JavaScript, and dynamic features to boost conversions.',
            provider: {
              '@type': 'Organization',
              name: companyProfile.legalName,
              url: companyProfile.websiteUrl,
              logo: toAbsoluteSeoUrl('/logo.png'),
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Sales',
                areaServed: 'IN',
                email: companyProfile.contactEmail,
                availableLanguage: ['en', 'hi'],
              },
            },
            areaServed: 'IN',
            serviceType: 'Shopify Development',
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'INR',
              lowPrice: '15000',
              highPrice: '75000',
              offerCount: '3',
            },
          }),
        }}
      />

      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: toAbsoluteSeoUrl('/'),
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: toAbsoluteSeoUrl('/pages/services'),
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Shopify Product Page Customization',
                item: toAbsoluteSeoUrl('/pages/shopify-product-page-customization'),
              },
            ],
          }),
        }}
      />

      {children}
    </>
  );
}

console.log('[Shopify-Product-Page] Layout component exported');
