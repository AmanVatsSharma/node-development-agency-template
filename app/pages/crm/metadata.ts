/**
 * @fileoverview SEO Metadata for EnterpriseHero CRM Page
 * @description Premium self-hosted CRM built on BharatERP stack
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

console.log('[CRM] Metadata configuration loaded');

export const metadata: Metadata = buildPageMetadata({
  title: 'EnterpriseHero CRM | Custom Self-Hosted CRM on BharatERP Stack | Vedpragya Bharat',
  description:
    "Experience India's premium self-hosted CRM — customizable, secure, and ERP-ready. Built by EnterpriseHero (Vedpragya Bharat). Own your business data with enterprise-grade features.",
  path: '/pages/crm',
  imagePath: '/logo.png',
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
    'self hosted business software',
  ],
});
