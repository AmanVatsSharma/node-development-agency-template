import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { WHATSAPP_BUSINESS_API_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for WhatsApp Business API Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire whatsapp business api developer" (high buyer intent)
 * - Secondary: Service-specific WhatsApp API keywords
 * - Long-tail: Integration-specific WhatsApp keywords
 * - Semantic: Related WhatsApp and automation terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire WhatsApp Business API Developer | WhatsApp API Integration Services',
  'Professional WhatsApp Business API setup & automation in India. 98% message open rate. Automate sales, support & payments. Verified Meta Cloud API integration.',
  WHATSAPP_BUSINESS_API_KEYWORDS,
  '/pages/whatsapp-business-api',
  {
    pricing: {
      startingPrice: '15,000',
      currency: '₹',
    },
    ogImage: '/whatsapp-business-api-og.jpg',
    cta: 'Get free consultation today!',
  }
);

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
    'name': 'Vedpragya Bharat Pvt. Ltd.',
    'url': 'https://vedpragyabharat.com',
    'logo': 'https://vedpragyabharat.com/logo.png',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+91-XXXXXXXXXX',
      'contactType': 'Sales',
      'areaServed': 'IN',
      'availableLanguage': ['English', 'Hindi']
    },
    'sameAs': [
      'https://www.linkedin.com/company/vedpragyabharat',
      'https://twitter.com/VedpragyaBharat'
    ]
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
