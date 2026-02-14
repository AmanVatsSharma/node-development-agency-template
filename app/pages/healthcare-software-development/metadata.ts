import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { HEALTHCARE_SOFTWARE_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for Healthcare Software Development Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire healthcare software developer" (high buyer intent)
 * - Secondary: Service-specific healthcare software keywords
 * - Long-tail: System-specific healthcare keywords
 * - Semantic: Related healthcare IT and medical software terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire Healthcare Software Developer | Healthcare Software Development',
  'Build HIPAA-compliant healthcare software including Hospital Management System, EHR, Telemedicine platforms. Trusted by 100+ healthcare providers across India.',
  HEALTHCARE_SOFTWARE_KEYWORDS,
  '/pages/healthcare-software-development',
  {
    pricing: {
      startingPrice: '250,000',
      currency: '₹',
    },
    ogImage: '/healthcare-software-og-image.jpg',
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
  name: 'Healthcare Software Development Services - Vedpragya Bharat',
  description: 'Custom healthcare software development including Hospital Management System, EHR, Telemedicine platforms, and medical device integration. HIPAA compliant solutions.',
  url: 'https://vedpragyabharat.com/pages/healthcare-software-development',
  image: 'https://vedpragyabharat.com/healthcare-software-og-image.jpg',
  
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'India'
  },
  
  priceRange: '₹₹₹₹',
  
  offers: [
    {
      '@type': 'Offer',
      name: 'Basic Healthcare Software',
      price: '250000',
      priceCurrency: 'INR',
      description: 'Clinic Management System with Basic Features'
    },
    {
      '@type': 'Offer',
      name: 'Professional Healthcare Software',
      price: '500000',
      priceCurrency: 'INR',
      description: 'Hospital Management System with EHR Integration'
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Healthcare Software',
      price: '1000000',
      priceCurrency: 'INR',
      description: 'Complete Healthcare Ecosystem with AI Integration'
    }
  ],
  
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '100'
  },
  
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Dr. Rajesh Kumar'
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5'
      },
      reviewBody: 'The Hospital Management System from Vedpragya Bharat reduced our patient wait time by 60% and improved our operational efficiency significantly.'
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Dr. Priya Sharma'
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5'
      },
      reviewBody: 'Their EHR software is HIPAA compliant and user-friendly. Our clinic operations have become much more streamlined.'
    }
  ],
  
  serviceType: [
    'Healthcare Software Development',
    'Hospital Management System',
    'EHR Software Development',
    'Telemedicine Platform',
    'Medical Device Integration',
    'Healthcare Mobile Apps',
    'Pharmacy Management Software',
    'Healthcare Analytics'
  ],
  
  areaServed: {
    '@type': 'Country',
    name: 'India'
  },
  
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Healthcare Software Development Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Hospital Management Systems',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Complete Hospital Management System with Patient Records, Billing, and Staff Management'
            }
          }
        ]
      },
      {
        '@type': 'OfferCatalog',
        name: 'Electronic Health Records',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'HIPAA Compliant EHR Software with Patient Data Management and Analytics'
            }
          }
        ]
      }
    ]
  }
};