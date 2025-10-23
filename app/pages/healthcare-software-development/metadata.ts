import type { Metadata } from 'next';

/**
 * SEO Metadata for Healthcare Software Development Landing Page
 * Optimized for Google Ads and organic search in India
 */
export const metadata: Metadata = {
  title: 'Healthcare Software Development India | Hospital Management System | EHR Software – Vedpragya Bharat',
  description: 'Build HIPAA-compliant healthcare software including Hospital Management System, EHR, Telemedicine platforms. Trusted by 100+ healthcare providers across India. ₹2.5L onwards.',
  keywords: [
    'healthcare software development india',
    'hospital management system',
    'EHR software development',
    'telemedicine platform development',
    'HIPAA compliant software',
    'medical software company india',
    'healthcare app development',
    'pharmacy management software',
    'clinic management system',
    'medical lab management',
    'healthcare CRM software',
    'patient portal development',
    'healthcare analytics dashboard',
    'medical device integration',
    'healthcare mobile apps'
  ],
  authors: [{ name: 'Vedpragya Bharat Pvt. Ltd.' }],
  creator: 'Vedpragya Bharat Pvt. Ltd.',
  publisher: 'Vedpragya Bharat Pvt. Ltd.',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vedpragyabharat.com/pages/healthcare-software-development',
    title: 'Healthcare Software Development India | Vedpragya Bharat',
    description: 'Build HIPAA-compliant healthcare software including Hospital Management System, EHR, Telemedicine platforms. Starting from ₹2.5L.',
    siteName: 'Vedpragya Bharat',
    images: [
      {
        url: '/healthcare-software-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Healthcare Software Development Services'
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Software Development India | Vedpragya Bharat',
    description: 'Build HIPAA-compliant healthcare software including Hospital Management System, EHR, Telemedicine platforms.',
    images: ['/healthcare-software-og-image.jpg'],
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
    canonical: 'https://vedpragyabharat.com/pages/healthcare-software-development',
  },
  
  // Category
  category: 'Healthcare Technology',
};

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