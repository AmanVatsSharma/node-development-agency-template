import { Metadata } from 'next';

/**
 * SEO Metadata for Google Ads Management Service Landing Page
 * Optimized for search engines and social media sharing
 */

export const metadata: Metadata = {
  title: 'Google Ads Management Service | PPC Agency for Leads & Sales | Rajapragya Bharat Pvt. Ltd.',
  description: 'Hire top Google Ads experts to run high-ROI campaigns. We create, manage, and optimize Google Ads for leads & sales. Data-driven PPC agency in India. ₹25K-₹50K/month plans.',
  keywords: [
    'google ads agency',
    'ppc management',
    'google ads service',
    'lead generation ads',
    'ppc agency india',
    'google ads expert',
    'google ads management',
    'performance marketing agency',
    'google ads consultant',
    'paid search marketing',
    'google ads optimization',
    'ppc services india'
  ],
  authors: [{ name: 'Rajapragya Bharat Pvt. Ltd.' }],
  creator: 'Rajapragya Bharat Pvt. Ltd.',
  publisher: 'Rajapragya Bharat Pvt. Ltd.',
  
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rajapragya.com/pages/google-ads-management',
    title: 'Google Ads Management Service | Turn Clicks into Customers',
    description: 'Drive qualified leads & sales with performance-focused Google Ads management. ROI-obsessed approach with transparent reporting. Starting from ₹25,000/month.',
    siteName: 'Rajapragya Bharat Pvt. Ltd.',
    images: [
      {
        url: '/images/google-ads-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Google Ads Management Service by Rajapragya Bharat'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Management Service | Drive Real ROI',
    description: 'Performance-focused Google Ads campaigns that bring real results. Certified experts, transparent reporting, data-driven optimization.',
    images: ['/images/google-ads-twitter-image.jpg']
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },

  verification: {
    google: 'your-google-verification-code',
    other: {
      'facebook-domain-verification': 'your-facebook-verification-code'
    }
  },

  alternates: {
    canonical: 'https://rajapragya.com/pages/google-ads-management'
  },

  category: 'Digital Marketing Services'
};
