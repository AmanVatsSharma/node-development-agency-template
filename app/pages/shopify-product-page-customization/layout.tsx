/**
 * @fileoverview Layout Component for Shopify Product Page Customization Landing Page
 * @description Provides SEO metadata and structured data for the landing page
 * @version 1.0.0
 */

import { metadata as pageMetadata } from './metadata';
import { companyProfile } from '@/app/data/companyProfile';
import { toAbsoluteSeoUrl } from '@/app/lib/seo/constants';

console.log('[Shopify-Product-Page] Layout component loaded');

export const metadata = pageMetadata;

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
