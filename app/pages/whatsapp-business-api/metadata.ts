/**
 * @fileoverview SEO Metadata for WhatsApp Business API Landing Page
 * @description Optimized for Google Ads and organic search
 * @keywords WhatsApp Business API India, WhatsApp automation, Meta Cloud API
 */

import { Metadata } from 'next';

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

export const metadata: Metadata = {
  // Primary Title - 60 chars optimal
  title: 'WhatsApp Business API Integration Services India | Vedpragya Bharat',
  
  // Meta Description - 155-160 chars optimal
  description: 'Professional WhatsApp Business API setup & automation in India. 98% message open rate. Automate sales, support & payments. Verified Meta Cloud API integration. Setup in 48 hours. ₹15,000 onwards.',
  
  // Keywords for SEO (comma-separated)
  keywords: [
    'WhatsApp Business API India',
    'WhatsApp automation agency',
    'WhatsApp chatbot integration',
    'WhatsApp marketing automation',
    'Meta Cloud API setup India',
    'WhatsApp Business API setup',
    'WhatsApp automation service',
    'WhatsApp CRM integration',
    'WhatsApp API India',
    'WhatsApp Business automation',
    'WhatsApp lead generation',
    'WhatsApp ecommerce automation',
    'WhatsApp appointment booking',
    'WhatsApp payment integration',
    'Razorpay WhatsApp',
    '360Dialog India',
    'Gupshup WhatsApp API',
    'Twilio WhatsApp Business',
    'WhatsApp cart recovery',
    'WhatsApp customer support automation'
  ].join(', '),
  
  // Open Graph (Facebook, LinkedIn sharing)
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vedpragyabharat.com/whatsapp-business-api',
    siteName: 'Vedpragya Bharat',
    title: 'WhatsApp Business API Integration Services India',
    description: 'Automate conversations, boost sales & support instantly on WhatsApp. Verified API setup in 48 hours. 98% message open rate. ₹15,000 onwards.',
    images: [
      {
        url: '/whatsapp-business-api-og.jpg',
        width: 1200,
        height: 630,
        alt: 'WhatsApp Business API Integration Services India'
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@VedpragyaBharat',
    creator: '@VedpragyaBharat',
    title: 'WhatsApp Business API Integration India',
    description: 'Automate conversations, boost sales & support. 98% open rate. Setup in 48 hours.',
    images: ['/whatsapp-business-api-og.jpg']
  },
  
  // Additional Meta Tags
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'language': 'English',
    'target': 'all',
    'audience': 'all',
    'coverage': 'Worldwide',
    'distribution': 'Global',
    'rating': 'General',
    'revisit-after': '7 days',
    'author': 'Vedpragya Bharat Pvt. Ltd.',
    'reply-to': 'contact@vedpragyabharat.com',
    
    // Business Schema
    'business:contact_data:street_address': 'Your Business Address',
    'business:contact_data:locality': 'Your City',
    'business:contact_data:region': 'Your State',
    'business:contact_data:postal_code': 'Your Pincode',
    'business:contact_data:country_name': 'India',
    'business:contact_data:email': 'contact@vedpragyabharat.com',
    'business:contact_data:phone_number': '+91-XXXXXXXXXX',
    'business:contact_data:website': 'https://vedpragyabharat.com'
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
    canonical: 'https://vedpragyabharat.com/whatsapp-business-api'
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
  
  // Verification (add your verification codes)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      me: ['contact@vedpragyabharat.com']
    }
  }
};

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
