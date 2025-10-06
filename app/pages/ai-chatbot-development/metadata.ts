import type { Metadata } from 'next';

/**
 * SEO Metadata for AI Chatbot Development Landing Page
 * Optimized for Google Ads and organic search in India
 */
export const metadata: Metadata = {
  title: 'AI Chatbot Development for Businesses | Custom Chatbot Integration – Vedpragya Bharat',
  description: 'Build custom AI chatbots for your website, WhatsApp & CRM. Boost sales and automate support using OpenAI GPT chatbots. Trusted by 50+ businesses across India. ₹49,000 onwards.',
  keywords: [
    'ai chatbot for business',
    'chatbot development india',
    'custom chatbot',
    'ai automation india',
    'business chatbot developer',
    'whatsapp chatbot',
    'openai chatbot',
    'gpt chatbot development',
    'crm chatbot integration',
    'ai customer support',
    'chatbot development company india',
    'conversational ai india'
  ],
  authors: [{ name: 'Vedpragya Bharat Pvt. Ltd.' }],
  creator: 'Vedpragya Bharat Pvt. Ltd.',
  publisher: 'Vedpragya Bharat Pvt. Ltd.',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vedpragyabharat.com/pages/ai-chatbot-development',
    title: 'AI Chatbot Development for Businesses | Vedpragya Bharat',
    description: 'Build custom AI chatbots for your website, WhatsApp & CRM. Boost sales and automate support using OpenAI GPT chatbots. Starting from ₹49,000.',
    siteName: 'Vedpragya Bharat',
    images: [
      {
        url: '/ai-chatbot-og-image.jpg', // You'll need to create this
        width: 1200,
        height: 630,
        alt: 'AI Chatbot Development Services'
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'AI Chatbot Development for Businesses | Vedpragya Bharat',
    description: 'Build custom AI chatbots for your website, WhatsApp & CRM. Boost sales and automate support.',
    images: ['/ai-chatbot-og-image.jpg'],
    creator: '@vedpragyabharat'
  },
  
  // Additional metadata
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
  
  // Verification
  verification: {
    google: 'your-google-verification-code',
  },
  
  // Alternates
  alternates: {
    canonical: 'https://vedpragyabharat.com/pages/ai-chatbot-development',
  },
  
  // Category
  category: 'Technology',
};

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
