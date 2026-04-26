import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospital Management System Development India | HMS Software | Vedpragya Bharat',
  description: 'Build comprehensive Hospital Management System (HMS) with patient management, billing, staff scheduling, and analytics. Trusted by 100+ hospitals across India. ₹15L onwards.',
  keywords: [
    'hospital management system',
    'HMS software development',
    'hospital management software india',
    'hospital management system development',
    'hospital software solutions',
    'patient management system',
    'hospital billing software',
    'staff management system',
    'hospital analytics',
    'HIPAA compliant HMS',
    'hospital management platform',
    'healthcare management system',
    'hospital operations management',
    'medical management software',
    'hospital information system'
  ],
  openGraph: {
    title: 'Hospital Management System Development India | HMS Software',
    description: 'Build comprehensive Hospital Management System (HMS) with patient management, billing, staff scheduling, and analytics. Trusted by 100+ hospitals across India.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospital Management System Development India | HMS Software',
    description: 'Build comprehensive Hospital Management System (HMS) with patient management, billing, staff scheduling, and analytics. Trusted by 100+ hospitals across India.',
  },
  alternates: {
    canonical: 'https://vedpragyabharat.com/hospital-management-system',
  },
};

export default function HospitalManagementSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
