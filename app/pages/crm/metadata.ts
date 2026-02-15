/**
 * @fileoverview SEO Metadata for EnterpriseHero CRM Page
 * @description Premium self-hosted CRM built on BharatERP stack
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import { Metadata } from 'next';

console.log('[CRM] Metadata configuration loaded');

export const metadata: Metadata = {
  title: 'EnterpriseHero CRM | Custom Self-Hosted CRM on BharatERP Stack | Vedpragya Bharat',
  description: 'Experience India\'s premium self-hosted CRM — customizable, secure, and ERP-ready. Built by EnterpriseHero (Vedpragya Bharat). Own your business data with enterprise-grade features.',
  keywords: [
    'enterprise crm india',
    'self hosted crm',
    'custom crm solution',
    'bharaterp',
    'vedpragya bharat',
    'enterprise hero crm',
    'bharat erp crm',
    'customizable crm',
    'white label crm',
    'indian crm software',
    'erp integrated crm',
    'private cloud crm',
    'self hosted business software'
  ].join(', '),
  authors: [{ name: 'Vedpragya Bharat Private Limited' }],
  openGraph: {
    title: 'EnterpriseHero CRM | Custom Self-Hosted CRM on BharatERP Stack',
    description: 'Experience India\'s premium self-hosted CRM — customizable, secure, and ERP-ready. Built by EnterpriseHero (Vedpragya Bharat).',
    url: 'https://enterprisehero.com/pages/crm',
    siteName: 'Enterprise Hero',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Enterprise Hero CRM'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EnterpriseHero CRM | Custom Self-Hosted CRM',
    description: 'Premium self-hosted CRM — customizable, secure, and ERP-ready.',
    images: ['/logo.png']
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
    canonical: 'https://enterprisehero.com/pages/crm'
  }
};
