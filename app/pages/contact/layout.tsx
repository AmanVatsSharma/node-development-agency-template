import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateBreadcrumbSchema,
  generateOrganizationSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for Contact Page
 */
function StructuredData() {
  const organizationSchema = generateOrganizationSchema({
    name: 'Vedpragya Bharat Private Limited',
    url: 'https://enterprisehero.com',
    logo: 'https://enterprisehero.com/logo.png',
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/pages/contact' },
    ],
  });

  return (
    <>
      <StructuredDataScript data={organizationSchema} />
      <StructuredDataScript data={breadcrumbSchema} />
    </>
  );
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData />
      {children}
    </>
  );
}
