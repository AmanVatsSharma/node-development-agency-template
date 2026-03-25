/**
 * @fileoverview Layout Component for EnterpriseHero CRM Page
 * @description Premium layout wrapper for CRM showcase page
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import React from 'react';
import { metadata } from './metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export { metadata };

const FAQ_QUESTIONS = [
  {
    question: 'What is EnterpriseHero CRM?',
    answer:
      'EnterpriseHero CRM is a self-hosted, enterprise-grade CRM built on the BharatERP stack by Vedpragya Bharat. It is fully customizable, integrates with ERP modules, and keeps your business data on your own servers for maximum security and compliance.',
  },
  {
    question: 'What are the advantages of a self-hosted CRM?',
    answer:
      'A self-hosted CRM gives you complete data ownership, no per-user subscription costs, full customization freedom, integration with your internal systems, and compliance with Indian data residency requirements — unlike SaaS CRMs like Salesforce or HubSpot.',
  },
  {
    question: 'Can EnterpriseHero CRM be customized for my industry?',
    answer:
      'Yes. The CRM is highly customizable — from custom fields and pipelines to industry-specific workflows and reports. We build modules tailored for manufacturing, healthcare, real estate, finance, and other sectors.',
  },
  {
    question: 'How does EnterpriseHero CRM integrate with ERP?',
    answer:
      'EnterpriseHero CRM is built on the BharatERP stack, so it natively integrates with inventory, finance, HR, and supply chain modules. You get a single unified platform instead of separate CRM and ERP tools.',
  },
  {
    question: 'What does CRM implementation cost?',
    answer:
      'CRM implementation pricing depends on the number of users, modules, and customization required. We offer transparent project-based pricing — contact us for a free consultation and detailed proposal.',
  },
];

export default function CRMLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'EnterpriseHero CRM', url: `${SEO_SITE_URL}/pages/crm` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      {children}
    </>
  );
}
