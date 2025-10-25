import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Lab Management System Development India | Laboratory Software | Vedpragya Bharat',
  description: 'Build comprehensive laboratory management system with sample tracking, quality control, and automated reporting. Trusted by 125+ labs across India. ₹12L onwards.',
  keywords: [
    'medical lab management system',
    'laboratory management software',
    'lab management system development',
    'diagnostic lab software',
    'lab information system',
    'laboratory automation software',
    'lab management system india',
    'diagnostic lab management',
    'lab workflow management',
    'laboratory quality control',
    'lab sample tracking',
    'medical laboratory software',
    'lab report generation',
    'laboratory analytics',
    'lab inventory management'
  ],
  openGraph: {
    title: 'Medical Lab Management System Development India | Laboratory Software',
    description: 'Build comprehensive laboratory management system with sample tracking, quality control, and automated reporting. Trusted by 125+ labs across India.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Lab Management System Development India | Laboratory Software',
    description: 'Build comprehensive laboratory management system with sample tracking, quality control, and automated reporting. Trusted by 125+ labs across India.',
  },
  alternates: {
    canonical: 'https://vedpragyabharat.com/medical-lab-management-system',
  },
};

export default function MedicalLabManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
