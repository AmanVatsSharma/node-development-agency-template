import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ReactJS Web App Development Services | Custom Web Apps & Dashboards',
  description: 'Hire expert ReactJS developers to build custom web apps, dashboards, and SaaS platforms. Scalable, fast, and beautifully designed — powered by ReactJS.',
  keywords: [
    'ReactJS development',
    'React web app development',
    'custom React apps',
    'React dashboard development',
    'React SaaS development',
    'hire React developers',
    'React component development',
    'Redux development',
    'React consulting'
  ],
  openGraph: {
    title: 'ReactJS Web App Development Services | Build Lightning-Fast Apps',
    description: 'From Idea to Pixel — We Craft React Apps That Perform, Scale, and Impress. Expert ReactJS development for startups, enterprises, and founders.',
    type: 'website',
    images: [
      {
        url: '/og-reactjs-development.jpg',
        width: 1200,
        height: 630,
        alt: 'ReactJS Web App Development Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReactJS Web App Development Services',
    description: 'Build lightning-fast, scalable web apps with ReactJS. Expert development for startups and enterprises.',
  }
};

export default function ReactJSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
