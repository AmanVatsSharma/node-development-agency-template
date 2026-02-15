/**
 * @fileoverview SEO Metadata for WhatsApp Business API Landing Page
 * @description Optimized for Google Ads and organic search
 * @keywords WhatsApp Business API India, WhatsApp automation, Meta Cloud API
 */

import { Metadata } from 'next';
import { companyProfile } from '@/app/data/companyProfile';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { toAbsoluteSeoUrl } from '@/app/lib/seo/constants';

/**
 * Primary Keywords (Google Ads Targeting):
 * - "WhatsApp Business API India"
 * - "WhatsApp automation agency"
 * - "WhatsApp chatbot integration"
 * - "WhatsApp marketing automation"
 * - "Meta Cloud API setup India"
 * - "WhatsApp Business API setup"
 * - "WhatsApp automation service"
 * - "WhatsApp CRM integration"
 */

export const metadata: Metadata = buildPageMetadata({
  title: 'WhatsApp Business API Integration Services',
  description:
    'Set up WhatsApp Business API automation for sales, support, and CRM workflows with robust implementation support.',
  path: '/pages/whatsapp-business-api',
  keywords: [
    'whatsapp business api integration',
    'whatsapp automation services',
    'whatsapp chatbot integration',
    'whatsapp crm integration',
    'meta cloud api setup',
  ],
});

/**
 * Structured Data for Google Rich Results
 * To be used in layout.tsx
 */
export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'serviceType': 'WhatsApp Business API Integration',
  'provider': {
    '@type': 'Organization',
    'name': companyProfile.legalName,
    'url': companyProfile.websiteUrl,
    'logo': toAbsoluteSeoUrl('/logo.png'),
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'Sales',
      'areaServed': 'IN',
      'email': companyProfile.contactEmail,
      'availableLanguage': ['English', 'Hindi']
    }
  },
  'description': 'Professional WhatsApp Business API setup and automation services in India. Verified Meta Cloud API integration with CRM connectivity, automated workflows, and 24/7 support.',
  'areaServed': {
    '@type': 'Country',
    'name': 'India'
  },
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'WhatsApp Business API Services',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Starter Package',
          'description': 'Complete WhatsApp Business API Setup + 1 Automation'
        },
        'price': '15000',
        'priceCurrency': 'INR'
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Growth Package',
          'description': 'API Setup + Up to 5 Automations + CRM Integration'
        },
        'price': '35000',
        'priceCurrency': 'INR'
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Pro Automation Suite',
          'description': 'Full automation stack + analytics dashboard + team training'
        },
        'price': '60000',
        'priceCurrency': 'INR'
      }
    ]
  },
  'offers': {
    '@type': 'AggregateOffer',
    'lowPrice': '15000',
    'highPrice': '60000',
    'priceCurrency': 'INR'
  }
};

console.log('[WhatsApp-API] Metadata loaded successfully');
