import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landing Page Optimization | Conversion Optimization | Rajapragya Bharat',
  description: 'Expert landing page optimization with A/B testing, conversion tracking, and user experience improvements. ₹30K-₹1L one-time. 3.2× average improvement, 55% conversion increase.',
  keywords: [
    'landing page optimization',
    'conversion optimization',
    'ab testing',
    'landing page design',
    'conversion rate optimization',
    'landing page testing',
    'user experience optimization',
    'landing page audit',
    'conversion tracking',
    'landing page performance',
    'cro services',
    'landing page conversion'
  ],
  openGraph: {
    title: 'Landing Page Optimization | Conversion Optimization',
    description: 'Expert landing page optimization with A/B testing, conversion tracking, and user experience improvements. 3.2× average improvement, 55% conversion increase.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Rajapragya Bharat',
    images: [
      {
        url: '/og-landing-page-optimization.jpg',
        width: 1200,
        height: 630,
        alt: 'Landing Page Optimization - Conversion Optimization'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Page Optimization | Conversion Optimization',
    description: 'Expert landing page optimization with A/B testing, conversion tracking, and user experience improvements. 3.2× average improvement.',
    images: ['/og-landing-page-optimization.jpg']
  },
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
  alternates: {
    canonical: '/pages/landing-page-optimization'
  }
};

export default function LandingPageOptimizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}