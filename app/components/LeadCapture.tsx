"use client";

import { useState } from 'react';

type LeadPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  interest?: string;
  message?: string;
  source?: string;
  page?: string;
  newsletterOptIn?: boolean;
};

interface LeadCaptureProps {
  headline?: string;
  subhead?: string;
  interestDefault?: string;
  compact?: boolean;
  context?: Record<string, any>;
  onSuccess?: (result: { id: string }) => void;
}

export default function LeadCapture({ headline = 'Talk to an Architect', subhead = 'Get a free assessment of your modernization roadmap.', interestDefault = 'enterprise', compact = false, context, onSuccess }: LeadCaptureProps) {
  const [payload, setPayload] = useState<LeadPayload>({ name: '', email: '', company: '', phone: '', interest: interestDefault, message: '', source: 'website', page: typeof window !== 'undefined' ? window.location.pathname : undefined, newsletterOptIn: true });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const update = (k: keyof LeadPayload, v: string | boolean) => setPayload((p: LeadPayload) => ({ ...p, [k]: v } as LeadPayload));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...payload, context }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Submission failed');
      setSuccess('Thanks! We will reach out shortly.');
      // @ts-expect-error gtag is defined globally by GA script
      window?.gtag?.('event', 'lead_submit', { source: payload.source, page: payload.page, interest: payload.interest });
      if (onSuccess && data?.id) {
        try { onSuccess({ id: data.id }); } catch {}
      }
      setPayload({ name: '', email: '', company: '', phone: '', interest: interestDefault, message: '', source: 'website', page: typeof window !== 'undefined' ? window.location.pathname : undefined, newsletterOptIn: true });
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
      <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{headline}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{subhead}</p>

      {success ? (
        <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800 p-4 rounded-lg">{success}</div>
      ) : (
        <form onSubmit={submit} className="space-y-4">
          <div className={compact ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'grid grid-cols-1 md:grid-cols-2 gap-6'}>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name *</label>
              <input value={payload.name} onChange={(e) => update('name', e.target.value)} required className="w-full px-4 py-3 border rounded-lg dark:border-gray-700 dark:bg-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
              <input type="email" value={payload.email} onChange={(e) => update('email', e.target.value)} required className="w-full px-4 py-3 border rounded-lg dark:border-gray-700 dark:bg-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company</label>
              <input value={payload.company} onChange={(e) => update('company', e.target.value)} className="w-full px-4 py-3 border rounded-lg dark:border-gray-700 dark:bg-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
              <input value={payload.phone} onChange={(e) => update('phone', e.target.value)} className="w-full px-4 py-3 border rounded-lg dark:border-gray-700 dark:bg-gray-900" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Interest</label>
            <select value={payload.interest} onChange={(e) => update('interest', e.target.value)} className="w-full px-4 py-3 border rounded-lg dark:border-gray-700 dark:bg-gray-900">
              <option value="enterprise">Enterprise Solutions</option>
              <option value="nodejs">Node.js Development</option>
              <option value="api">API Development</option>
              <option value="3d">3D Interactive</option>
              <option value="consulting">Technical Consulting</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea value={payload.message} onChange={(e) => update('message', e.target.value)} rows={4} className="w-full px-4 py-3 border rounded-lg dark:border-gray-700 dark:bg-gray-900" />
          </div>
          {error && <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800 p-3 rounded-lg">{error}</div>}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <label className="inline-flex items-center text-sm text-gray-600 dark:text-gray-300">
              <input type="checkbox" checked={!!payload.newsletterOptIn} onChange={(e) => update('newsletterOptIn', e.target.checked)} className="mr-2" />
              Subscribe to newsletter
            </label>
            <button type="submit" disabled={loading} className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
              {loading ? 'Submitting...' : 'Request Consultation'}
            </button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">By submitting, you agree to our Privacy Policy.</p>
        </form>
      )}
    </div>
  );
}

