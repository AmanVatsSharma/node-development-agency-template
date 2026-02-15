import { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'ReactJS Web App Development Services',
  description:
    'Build scalable ReactJS web applications, dashboards, and SaaS products with performance-focused engineering.',
  path: '/pages/reactjs-development',
  keywords: [
    'reactjs development',
    'react web app development',
    'custom react applications',
    'react dashboard development',
  ],
});

export default function ReactJSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
