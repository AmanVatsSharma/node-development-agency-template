import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Telemedicine Platform Development India | Video Consultation Software | Vedpragya Bharat',
  description: 'Build comprehensive telemedicine platform with video consultations, digital prescriptions, and patient management. Trusted by 50+ clinics across India. ₹10L onwards.',
  keywords: [
    'telemedicine platform development',
    'video consultation software',
    'telemedicine app development',
    'online consultation platform',
    'digital health platform',
    'telemedicine software india',
    'virtual healthcare platform',
    'remote consultation software',
    'telehealth platform development',
    'online doctor consultation',
    'telemedicine solution',
    'healthcare video platform',
    'digital prescription software',
    'telemedicine integration',
    'virtual clinic platform'
  ],
  openGraph: {
    title: 'Telemedicine Platform Development India | Video Consultation Software',
    description: 'Build comprehensive telemedicine platform with video consultations, digital prescriptions, and patient management. Trusted by 50+ clinics across India.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Telemedicine Platform Development India | Video Consultation Software',
    description: 'Build comprehensive telemedicine platform with video consultations, digital prescriptions, and patient management. Trusted by 50+ clinics across India.',
  },
  alternates: {
    canonical: 'https://vedpragyabharat.com/telemedicine-platform-development',
  },
};

export default function TelemedicinePlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
