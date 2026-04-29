'use client';

import { useState } from 'react';

interface CityLeadFormProps {
  cityName: string;
  citySlug: string;
}

export function CityLeadForm({ cityName, citySlug }: CityLeadFormProps) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', budget: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setStatus('submitting');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email || undefined,
          message: form.message || undefined,
          budget: form.budget || undefined,
          source: `web-development-${citySlug}`,
          leadSource: `${cityName} Web Development Page`,
          raw: {
            path: typeof window !== 'undefined' ? window.location.pathname : undefined,
            referrer: typeof document !== 'undefined' ? document.referrer : undefined,
          },
        }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">We&apos;ll be in touch shortly</h3>
        <p className="text-gray-600 dark:text-gray-300">Our team typically responds within 2 hours during business hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="city-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="city-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Rajesh Kumar"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="city-phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="city-phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="city-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email Address
        </label>
        <input
          id="city-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@yourcompany.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <div>
        <label htmlFor="city-budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Approx. Budget
        </label>
        <select
          id="city-budget"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        >
          <option value="">Select budget range</option>
          <option value="₹15K-30K">₹15,000 – ₹30,000</option>
          <option value="₹30K-60K">₹30,000 – ₹60,000</option>
          <option value="₹60K-1L">₹60,000 – ₹1,00,000</option>
          <option value="₹1L-2L">₹1,00,000 – ₹2,00,000</option>
          <option value="₹2L+">₹2,00,000+</option>
          <option value="not-decided">Not decided yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="city-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Brief Requirement
        </label>
        <textarea
          id="city-message"
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder={`What kind of website do you need in ${cityName}?`}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600 dark:text-red-400">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting' || !form.name.trim() || !form.phone.trim()}
        className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl font-semibold text-lg transition"
      >
        {status === 'submitting' ? 'Sending…' : 'Get a Free Proposal'}
      </button>

      <p className="text-xs text-center text-gray-400 dark:text-gray-500">
        No spam. We respond within 2 business hours.
      </p>
    </form>
  );
}
