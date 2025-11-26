import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateBreadcrumbSchema,
  generateOrganizationSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for Resources Page
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
      { name: 'Resources', url: '/pages/resources' },
    ],
  });

  return (
    <>
      <StructuredDataScript data={organizationSchema} />
      <StructuredDataScript data={breadcrumbSchema} />
    </>
  );
}

export default function ResourcesLayout({
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
