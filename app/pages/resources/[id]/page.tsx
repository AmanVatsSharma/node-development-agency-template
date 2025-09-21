"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import LeadCapture from '@/app/components/LeadCapture';

type Resource = {
  id: string;
  title: string;
  description: string;
  type: 'ebook' | 'whitepaper' | 'template' | 'video' | 'webinar';
  downloadUrl: string;
  imageUrl: string;
  publishedAt: string;
  featured?: boolean;
};

export default function ResourceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = (params?.id as string) || '';
  const [resource, setResource] = useState<Resource | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const res = await fetch(`/api/resources/${id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || 'Failed to load resource');
        setResource(data as Resource);
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Failed to load resource';
        console.error('Failed to load resource:', msg);
      }
    };
    if (id) fetchResource();
  }, [id]);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900">
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <button onClick={() => router.back()} className="text-sm text-white/70 hover:text-white">← Back</button>
          <h1 className="text-3xl md:text-4xl font-bold mt-4">{resource?.title || 'Resource'}</h1>
          <p className="text-gray-300 mt-2 max-w-3xl">{resource?.description}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            {!unlocked ? (
              <div>
                <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Get the {resource?.type}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Enter your details to unlock the download. We will send the link to your email.</p>
                <LeadCapture
                  headline="Unlock Download"
                  subhead="Receive the download link instantly via email."
                  interestDefault={resource?.type || 'ebook'}
                  context={{ resourceId: id, title: resource?.title, type: resource?.type }}
                  onSuccess={() => {
                    setUnlocked(true);
                    try {
                      // @ts-expect-error gtag is defined globally by GA script
                      window?.gtag?.('event', 'resource_lead', { resourceId: id, title: resource?.title, type: resource?.type });
                    } catch {}
                    if (resource?.downloadUrl) {
                      setTimeout(() => {
                        try {
                          // @ts-expect-error gtag is defined globally by GA script
                          window?.gtag?.('event', 'resource_download', { resourceId: id, title: resource?.title, type: resource?.type });
                        } catch {}
                        window.location.href = resource.downloadUrl;
                      }, 600);
                    }
                  }}
                />
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">After submitting, you will be redirected to the download.</div>
              </div>
            ) : (
              <div className="text-center">
                <a href={resource?.downloadUrl} className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">Download Now</a>
              </div>
            )}
          </div>
        </div>
        <aside>
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl">
            <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-white">What you'll learn</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>Practical architecture blueprints</li>
              <li>Implementation checklists</li>
              <li>Security & compliance tips</li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}

