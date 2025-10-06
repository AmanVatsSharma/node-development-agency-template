'use client';

/**
 * Instant Audit Widget Component
 * Captures leads through free SEO scan
 */

import React, { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { AlertCircle, CheckCircle2, Loader2, Globe } from 'lucide-react';
import { fireConversion } from '@/utils/conversions';

interface AuditFormData {
  url: string;
  email: string;
  goal: string;
  phone?: string;
}

interface AuditResult {
  score: number;
  grade: string;
  issues: Array<{ severity: string; title: string }>;
  quickFixes: string[];
  metrics: {
    lcp?: string;
    fcp?: string;
  };
}

export function InstantAuditWidget() {
  const [formData, setFormData] = useState<AuditFormData>({
    url: '',
    email: '',
    goal: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      // Validate URL
      const urlPattern = /^https?:\/\/.+\..+/i;
      if (!urlPattern.test(formData.url)) {
        throw new Error('Invalid URL — include http(s) and try again.');
      }

      // Call scan API
      const scanRes = await fetch('/api/seo-scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const scanData = await scanRes.json();
      
      if (!scanRes.ok) {
        throw new Error(scanData.error || 'Scan failed');
      }

      // Submit lead
      const leadRes = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          phone: formData.phone,
          message: `SEO Audit Request - URL: ${formData.url}, Goal: ${formData.goal}`,
          source: 'seo-audit',
          leadSource: 'SEO Audit Widget',
          raw: {
            url: formData.url,
            goal: formData.goal,
            score: scanData.score
          }
        })
      });

      if (leadRes.ok) {
        void fireConversion('lead_submit', 'seo-audit');
      }

      setResult(scanData);
    } catch (err: any) {
      console.error('[SEO-Audit] Scan error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="shadow-2xl border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-900">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 border-b">
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          Run Free SEO Scan
        </CardTitle>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Get your instant SEO score in 60 seconds
        </p>
      </CardHeader>
      
      <CardContent className="p-6">
        {!result ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Website URL */}
            <div>
              <Label htmlFor="url" className="text-gray-900 dark:text-white font-semibold mb-2 block">
                Website URL <span className="text-red-500">*</span>
              </Label>
              <Input
                type="url"
                id="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
                required
                placeholder="https://yourwebsite.com"
                className="h-12"
                disabled={loading}
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-gray-900 dark:text-white font-semibold mb-2 block">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@company.com"
                className="h-12"
                disabled={loading}
              />
            </div>

            {/* Goal Dropdown */}
            <div>
              <Label htmlFor="goal" className="text-gray-900 dark:text-white font-semibold mb-2 block">
                Primary Goal <span className="text-red-500">*</span>
              </Label>
              <select
                id="goal"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full h-12 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
              >
                <option value="">Select your goal</option>
                <option value="lead-gen">Lead Generation</option>
                <option value="ecommerce">E-commerce</option>
                <option value="brand">Brand Awareness</option>
                <option value="local">Local Business</option>
              </select>
            </div>

            {/* Phone (Optional) */}
            <div>
              <Label htmlFor="phone" className="text-gray-900 dark:text-white font-semibold mb-2 block">
                Phone Number <span className="text-gray-500 text-xs">(Optional)</span>
              </Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 99637 30111"
                className="h-12"
                disabled={loading}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-start gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-red-700 dark:text-red-300">{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full h-14 text-lg font-bold bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg hover:shadow-xl transition-all"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Scanning Your Website...
                </>
              ) : (
                <>
                  🚀 Run Free Scan
                </>
              )}
            </Button>

            {/* Privacy Notice */}
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              We only use your URL and email to run the scan. No passwords stored.
            </p>
          </form>
        ) : (
          <AuditResultCard result={result} onReset={() => setResult(null)} />
        )}
      </CardContent>
    </Card>
  );
}

function AuditResultCard({ result, onReset }: { result: AuditResult; onReset: () => void }) {
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-600 dark:text-green-400';
      case 'B': return 'text-blue-600 dark:text-blue-400';
      case 'C': return 'text-yellow-600 dark:text-yellow-400';
      case 'D': return 'text-orange-600 dark:text-orange-400';
      default: return 'text-red-600 dark:text-red-400';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800';
      case 'medium': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800';
      default: return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Score Display */}
      <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 rounded-2xl border border-blue-200 dark:border-blue-800">
        <div className={`text-6xl font-extrabold mb-2 ${getGradeColor(result.grade)}`}>
          {result.score}<span className="text-3xl">/100</span>
        </div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          Grade: {result.grade}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {result.score >= 80 ? 'Excellent SEO Health!' : 
           result.score >= 60 ? 'Good, but needs improvement' : 
           'Needs priority fixes'}
        </div>
      </div>

      {/* Top Issues */}
      <div>
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
          Top Issues Found
        </h3>
        <div className="space-y-2">
          {result.issues.map((issue, index) => (
            <div 
              key={index}
              className={`flex items-start gap-2 p-3 rounded-lg border ${getSeverityColor(issue.severity)}`}
            >
              <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="font-medium text-sm">{issue.title}</span>
                <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-white/50 dark:bg-black/20">
                  {issue.severity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Fixes */}
      <div>
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
          Quick Fixes
        </h3>
        <div className="space-y-2">
          {result.quickFixes.map((fix, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{fix}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="space-y-3 pt-4 border-t">
        <Button
          size="lg"
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold"
          onClick={() => {
            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          📊 Get Full Detailed Report
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="w-full"
          onClick={onReset}
        >
          Scan Another Website
        </Button>
      </div>

      {/* Email Confirmation */}
      <p className="text-xs text-center text-gray-600 dark:text-gray-400">
        ✅ Full report sent to your email. Check your inbox!
      </p>
    </div>
  );
}
