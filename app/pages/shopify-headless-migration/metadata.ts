/**
 * SEO Metadata Configuration for Shopify Headless Migration Page
 * 
 * USAGE:
 * Import this in your layout.tsx or use generateMetadata function
 * 
 * For static metadata:
 * import { shopifyHeadlessMetadata } from './metadata';
 * export const metadata = shopifyHeadlessMetadata;
 * 
 * For dynamic metadata:
 * export async function generateMetadata(): Promise<Metadata> {
 *   return shopifyHeadlessMetadata;
 * }
 */

import type { Metadata } from 'next';

export const shopifyHeadlessMetadata: Metadata = {
  title: 'Shopify Headless Migration Services | Next.js & Hydrogen Experts | Vedpragya Bharat',
  description: 'Transform your Shopify store with headless commerce. 2-4× faster page loads, 95+ Lighthouse scores. Next.js/Hydrogen migration from ₹1L. Get free consultation today.',
  keywords: [
    'headless shopify',
    'nextjs shopify',
    'shopify hydrogen migration',
    'shopify plus developer',
    'shopify api integration',
    'nextjs ecommerce',
    'headless commerce agency',
    'shopify headless cms',
    'react shopify storefront',
    'shopify graphql',
    'shopify storefront api',
    'headless ecommerce',
    'shopify performance optimization',
  ].join(', '),
  
  openGraph: {
    title: 'Shopify Headless Migration Services | Next.js & Hydrogen Experts',
    description: 'Transform your Shopify store with headless commerce. 2-4× faster page loads, 95+ Lighthouse scores. Next.js/Hydrogen migration from ₹1L.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Vedpragya Bharat',
    url: 'https://vedpragyabharat.com/pages/shopify-headless-migration',
    images: [
      {
        url: '/og-image-shopify-headless.jpg', // Add this image to /public/
        width: 1200,
        height: 630,
        alt: 'Shopify Headless Migration Services',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Headless Migration Services | Next.js & Hydrogen',
    description: '2-4× faster page loads, 95+ Lighthouse scores. Transform your Shopify store with headless commerce.',
    images: ['/og-image-shopify-headless.jpg'], // Add this image to /public/
    creator: '@vedpragyabharat', // Update with your Twitter handle
    site: '@vedpragyabharat',
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: 'https://vedpragyabharat.com/pages/shopify-headless-migration',
  },
  
  authors: [
    {
      name: 'Vedpragya Bharat',
      url: 'https://vedpragyabharat.com',
    },
  ],
  
  category: 'Technology',
  
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

/**
 * Structured Data (JSON-LD) for Rich Snippets
 * Add this to your page component
 */
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Shopify Headless Migration",
  "description": "Professional Shopify to Next.js/Hydrogen headless migration services for enterprise e-commerce brands",
  "provider": {
    "@type": "Organization",
    "name": "Vedpragya Bharat",
    "url": "https://vedpragyabharat.com",
    "logo": "https://vedpragyabharat.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "Sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    }
  },
  "serviceType": "Web Development",
  "areaServed": {
    "@type": "Place",
    "name": "Global"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Starter Headless",
      "description": "Basic headless migration for small brands",
      "priceCurrency": "INR",
      "price": "100000",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "100000",
        "maxPrice": "150000",
        "priceCurrency": "INR"
      },
      "deliveryLeadTime": {
        "@type": "QuantitativeValue",
        "value": "2",
        "unitCode": "WEE"
      }
    },
    {
      "@type": "Offer",
      "name": "Pro Next.js Storefront",
      "description": "Full Next.js migration with custom UX for D2C brands",
      "priceCurrency": "INR",
      "price": "275000",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "250000",
        "maxPrice": "300000",
        "priceCurrency": "INR"
      },
      "deliveryLeadTime": {
        "@type": "QuantitativeValue",
        "value": "4",
        "unitCode": "WEE"
      }
    },
    {
      "@type": "Offer",
      "name": "Enterprise Performance Suite",
      "description": "Complete enterprise headless solution with edge deployment",
      "priceCurrency": "INR",
      "price": "450000",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "400000",
        "priceCurrency": "INR"
      },
      "deliveryLeadTime": {
        "@type": "QuantitativeValue",
        "value": "6",
        "unitCode": "WEE"
      }
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  }
};
