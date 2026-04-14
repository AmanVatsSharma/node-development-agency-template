import { ReactNode } from 'react';
import { metadata, structuredData } from './metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export { metadata };

const FAQ_QUESTIONS = [
  {
    question: 'What types of healthcare software do you develop?',
    answer:
      'We build hospital management systems (HMS), clinic management software, patient portals, appointment booking systems, health records management (EMR/EHR), telemedicine platforms, and healthcare analytics dashboards.',
  },
  {
    question: 'Is your healthcare software HIPAA and DISHA compliant?',
    answer:
      'Yes. We implement data encryption at rest and in transit, role-based access control, audit logging, and compliance with India\'s DISHA framework and international HIPAA guidelines for all healthcare software we build.',
  },
  {
    question: 'Can you build a hospital management system from scratch?',
    answer:
      'Yes. We develop complete HMS solutions covering OPD/IPD management, billing, pharmacy, laboratory, radiology, and HR modules — either as a modular system or a fully integrated platform tailored to your facility.',
  },
  {
    question: 'How much does healthcare software development cost?',
    answer:
      'Healthcare software costs vary by scope. A clinic management system starts around ₹2,00,000. A full hospital management system with multiple modules ranges from ₹10,00,000 to ₹50,00,000+. We provide free detailed proposals.',
  },
  {
    question: 'Do you integrate with existing health systems like HL7 or FHIR?',
    answer:
      'Yes. We support HL7 v2, HL7 FHIR R4, and custom API integrations with diagnostic labs, insurance systems, pharmacy networks, and government health portals including Ayushman Bharat Digital Mission (ABDM).',
  },
];

export default function HealthcareSoftwareDevelopmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Healthcare Software Development', url: `${SEO_SITE_URL}/pages/healthcare-software-development` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {children}
    </>
  );
}
