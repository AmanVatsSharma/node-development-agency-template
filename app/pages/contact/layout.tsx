import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact Enterprise Hero | Talk to Our Global Team',
  description:
    'Contact Enterprise Hero to discuss web development, AI automation, and growth marketing services. We respond quickly with actionable next steps.',
  path: '/pages/contact',
  keywords: [
    'contact enterprise hero',
    'software development consultation',
    'google ads consultation',
    'ai automation consultation',
  ],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
