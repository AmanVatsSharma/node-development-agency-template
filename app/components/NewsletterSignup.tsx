"use client";

import { useState } from 'react';
import { fireConversion } from '@/utils/conversions';

interface NewsletterSignupProps {
  landingPageSlug?: string; // Optional: for landing page-specific conversion tracking
}

export default function NewsletterSignup({ landingPageSlug }: NewsletterSignupProps = {}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }
    
    setStatus('loading');
    setMessage('');
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      setStatus('success');
      try { void fireConversion('newsletter_signup', landingPageSlug); } catch {}
      setMessage(data.message || 'Successfully subscribed to the newsletter');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Failed to subscribe. Please try again.');
    }
  };
  
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 md:p-8 rounded-xl">
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Subscribe to Our Newsletter
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Stay updated with our latest insights, news, and technology trends.
      </p>
      
      {status === 'success' ? (
        <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 p-4 rounded-lg mb-4">
          {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors
                ${status === 'error'
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                  : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-700 dark:focus:ring-blue-900'
                }`}
              required
            />
            {status === 'error' && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{message}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition duration-300 ${
              status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {status === 'loading' ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Subscribing...
              </span>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>
      )}
      
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
      </p>
    </div>
  );
} 