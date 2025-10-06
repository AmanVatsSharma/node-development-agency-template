import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free SEO Audit Tool — Instant Website SEO Check & Detailed Reports',
  description: 'Run a free SEO scan in 60s. Get prioritized fixes, Core Web Vitals report, backlink snapshot & a strategic SEO audit report. Professional packages starting at ₹6,999. Book your audit today!',
  keywords: [
    'SEO audit',
    'free SEO check',
    'website SEO analysis',
    'technical SEO audit',
    'SEO report',
    'Core Web Vitals',
    'backlink audit',
    'SEO consultant India',
    'website optimization',
    'search engine optimization'
  ],
  authors: [{ name: 'Your Agency Name' }],
  openGraph: {
    title: 'Free SEO Audit — Get Your Website Health Score in 60 Seconds',
    description: 'Instant SEO scan with actionable insights. Professional audits from ₹6,999 with detailed reports, strategy calls, and implementation roadmaps.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Your Agency Name',
    images: [
      {
        url: '/seo-audit-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Free SEO Audit Tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free SEO Audit — Boost Your Rankings',
    description: 'Get instant SEO insights + detailed audit reports starting at ₹6,999',
    images: ['/seo-audit-og-image.png']
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
  alternates: {
    canonical: '/pages/seo-audit'
  }
};
