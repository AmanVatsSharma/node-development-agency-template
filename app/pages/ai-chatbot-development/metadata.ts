import type { Metadata } from 'next';
import { companyProfile } from '@/app/data/companyProfile';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { toAbsoluteSeoUrl } from '@/app/lib/seo/constants';

/**
 * SEO Metadata for AI Chatbot Development Landing Page
 * Optimized for Google Ads and organic search in India
 */
export const metadata: Metadata = buildPageMetadata({
  title: 'AI Chatbot Development for Businesses | Custom Chatbot Integration',
  description:
    'Build custom AI chatbots for your website, WhatsApp, and CRM to automate support and improve lead conversion.',
  path: '/pages/ai-chatbot-development',
  keywords: [
    'ai chatbot development',
    'business chatbot automation',
    'whatsapp chatbot integration',
    'custom gpt chatbot',
    'crm chatbot integration',
  ],
});

/**
 * Structured Data for SEO
 * Helps search engines understand the page content
 */
export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: `AI Chatbot Development Services - ${companyProfile.brandName}`,
  description: 'Custom AI chatbot development for businesses using OpenAI GPT, Claude, and Gemini. Website, WhatsApp, and CRM integration services.',
  url: toAbsoluteSeoUrl('/pages/ai-chatbot-development'),
  image: toAbsoluteSeoUrl('/logo.png'),
  
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'India'
  },
  
  priceRange: '₹₹₹',
  
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter AI Chatbot',
      price: '49000',
      priceCurrency: 'INR',
      description: 'Basic AI Chatbot for Small Websites'
    },
    {
      '@type': 'Offer',
      name: 'Professional AI Chatbot',
      price: '99000',
      priceCurrency: 'INR',
      description: 'Custom Personality + CRM Integration'
    },
    {
      '@type': 'Offer',
      name: 'Enterprise AI Chatbot',
      price: '199000',
      priceCurrency: 'INR',
      description: 'Multi-Platform + Custom AI Training'
    }
  ],
  
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '50'
  },
  
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Arjun Mehra'
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5'
      },
      reviewBody: 'Our AI chatbot from Vedpragya Bharat is like having a sales team that never sleeps. We closed ₹3 L+ extra in a month.'
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Kritika S.'
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5'
      },
      reviewBody: 'They understand AI like artists understand colors. It\'s not just code — it\'s experience.'
    }
  ],
  
  serviceType: [
    'AI Chatbot Development',
    'Custom Chatbot Integration',
    'WhatsApp Chatbot',
    'CRM Integration',
    'Conversational AI',
    'Business Automation'
  ],
  
  areaServed: {
    '@type': 'Country',
    name: 'Global'
  },
  
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Chatbot Development Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'E-commerce Chatbots',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Product Recommendation & Order Tracking Chatbot'
            }
          }
        ]
      },
      {
        '@type': 'OfferCatalog',
        name: 'Customer Support Chatbots',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Multi-language Intelligent Response Chatbot'
            }
          }
        ]
      }
    ]
  }
};
