/**
 * @fileoverview SEO Metadata for EnterpriseHero CRM Demo Page
 * @description Request demo and personalized CRM experience
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

console.log('[CRM-Demo] Metadata configuration loaded');

export const metadata: Metadata = buildPageMetadata({
  title: 'Request CRM Demo | EnterpriseHero CRM | Vedpragya Bharat',
  description:
    'Experience EnterpriseHero CRM personalized for your business. Request a custom demo of our self-hosted enterprise CRM built on BharatERP stack.',
  path: '/pages/crm/demo',
  imagePath: '/logo.png',
  keywords: [
    'crm demo',
    'enterprise crm demo',
    'bharaterp demo',
    'custom crm demo',
    'self hosted crm demo',
    'vedpragya bharat crm',
    'request crm demo india',
  ],
});
