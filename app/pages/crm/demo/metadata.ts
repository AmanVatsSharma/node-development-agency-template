/**
 * @fileoverview SEO Metadata for EnterpriseHero CRM Demo Page
 * @description Request demo and personalized CRM experience
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import { Metadata } from 'next';

console.log('[CRM-Demo] Metadata configuration loaded');

export const metadata: Metadata = {
  title: 'Request CRM Demo | EnterpriseHero CRM | Vedpragya Bharat',
  description: 'Experience EnterpriseHero CRM personalized for your business. Request a custom demo of our self-hosted enterprise CRM built on BharatERP stack.',
  keywords: [
    'crm demo',
    'enterprise crm demo',
    'bharaterp demo',
    'custom crm demo',
    'self hosted crm demo',
    'vedpragya bharat crm',
    'request crm demo india'
  ].join(', '),
  authors: [{ name: 'Vedpragya Bharat Private Limited' }],
  openGraph: {
    title: 'Request CRM Demo | EnterpriseHero CRM',
    description: 'Experience EnterpriseHero CRM personalized for your business. Get your custom demo within 24 hours.',
    url: 'https://enterprisehero.com/pages/crm/demo',
    siteName: 'Enterprise Hero',
    locale: 'en_IN',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://enterprisehero.com/pages/crm/demo'
  }
};
