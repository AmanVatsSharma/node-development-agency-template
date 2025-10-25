import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EHR Software Development India | Electronic Health Records | Vedpragya Bharat',
  description: 'Build HIPAA-compliant Electronic Health Records (EHR) system with secure patient data management, lab integration, and analytics. Trusted by 200+ hospitals across India. ₹20L onwards.',
  keywords: [
    'EHR software development',
    'electronic health records',
    'EHR system development',
    'healthcare records management',
    'patient data management',
    'EHR software india',
    'electronic medical records',
    'healthcare data management',
    'EHR integration',
    'HIPAA compliant EHR',
    'digital health records',
    'clinical data management',
    'healthcare software solutions',
    'EHR platform development',
    'medical records system'
  ],
  openGraph: {
    title: 'EHR Software Development India | Electronic Health Records',
    description: 'Build HIPAA-compliant Electronic Health Records (EHR) system with secure patient data management, lab integration, and analytics. Trusted by 200+ hospitals across India.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EHR Software Development India | Electronic Health Records',
    description: 'Build HIPAA-compliant Electronic Health Records (EHR) system with secure patient data management, lab integration, and analytics. Trusted by 200+ hospitals across India.',
  },
  alternates: {
    canonical: 'https://vedpragyabharat.com/ehr-software-development',
  },
};

export default function EHRSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
