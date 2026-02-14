import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { AI_CHATBOT_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for AI Chatbot Development Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire chatbot developer" (high buyer intent)
 * - Secondary: Service-specific AI chatbot keywords
 * - Long-tail: Platform-specific chatbot keywords
 * - Semantic: Related AI and automation terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire Chatbot Developer | AI Chatbot Development Services',
  'Build custom AI chatbots for your website, WhatsApp & CRM. Boost sales and automate support using OpenAI GPT chatbots. Trusted by 50+ businesses across India.',
  AI_CHATBOT_KEYWORDS,
  '/pages/ai-chatbot-development',
  {
    pricing: {
      startingPrice: '49,000',
      currency: '₹',
    },
    ogImage: '/ai-chatbot-og-image.jpg',
    cta: 'Get free consultation today!',
  }
);

/**
 * Structured Data for SEO
 * Helps search engines understand the page content
 */
export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'AI Chatbot Development Services - Vedpragya Bharat',
  description: 'Custom AI chatbot development for businesses using OpenAI GPT, Claude, and Gemini. Website, WhatsApp, and CRM integration services.',
  url: 'https://vedpragyabharat.com/pages/ai-chatbot-development',
  image: 'https://vedpragyabharat.com/ai-chatbot-og-image.jpg',
  
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
    name: 'India'
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
