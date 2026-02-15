import type { Metadata } from 'next';
import { companyProfile } from '@/app/data/companyProfile';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { toAbsoluteSeoUrl } from '@/app/lib/seo/constants';

/**
 * SEO Metadata for Healthcare Software Development Landing Page
 * Optimized for Google Ads and organic search in India
 */
export const metadata: Metadata = buildPageMetadata({
  title:
    'Healthcare Software Development Services | Hospital Management, EHR & Telemedicine',
  description:
    'Build secure and scalable healthcare software including HMS, EHR, telemedicine, and patient engagement platforms.',
  path: '/pages/healthcare-software-development',
  keywords: [
    'healthcare software development',
    'hospital management system',
    'ehr software development',
    'telemedicine platform',
    'hipaa compliant healthcare software',
  ],
});

/**
 * Structured Data for SEO
 * Helps search engines understand the page content
 */
export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: `Healthcare Software Development Services - ${companyProfile.brandName}`,
  description: 'Custom healthcare software development including Hospital Management System, EHR, Telemedicine platforms, and medical device integration. HIPAA compliant solutions.',
  url: toAbsoluteSeoUrl('/pages/healthcare-software-development'),
  image: toAbsoluteSeoUrl('/logo.png'),
  
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