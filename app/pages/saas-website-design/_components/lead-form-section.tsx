'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';
import { Phone, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { fireConversion } from '@/utils/conversions';

interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

const PROJECT_TYPES = [
  'New SaaS marketing site',
  'Pricing / landing page',
  'Redesign existing site',
  'Docs / help centre',
  'Launch / waitlist page',
  'Other',
];

export function LeadFormSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          source: 'saas-website-design',
          leadSource: 'Website - SaaS Design Landing',
          raw: {
            company: formData.company,
            projectType: formData.projectType,
            path: typeof window !== 'undefined' ? window.location.pathname : undefined,
          },
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Lead API failed');
      setSubmitted(true);
      void fireConversion('saas_website_design_lead_submit');
    } catch {
      alert('Something went wrong. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', company: '', projectType: '', message: '' });
    }, 5000);
  };

  return (
    <section
      ref={sectionRef}
      id="lead-form"
      className="py-20 md:py-28 bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950"
      role="region"
      aria-labelledby="form-heading"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left: value prop */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="lg:sticky lg:top-24"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-5">
              Free Consultation
            </span>
            <h2
              id="form-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4 leading-tight"
            >
              Ready to build a SaaS site that{' '}
              <span className="text-indigo-600 dark:text-indigo-400">actually converts?</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-base leading-relaxed">
              Tell us about your product. We'll respond within 2 hours with a scope, timeline, and
              ballpark — no commitment required.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                '2-hour response guarantee',
                'Free scope & timeline estimate',
                'Design consultation included',
                '100% confidential',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Or contact directly</p>
              <a
                href="tel:+919963730111"
                onClick={() => void fireConversion('saas_design_call_click')}
                className="flex items-center gap-3 p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 hover:border-green-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Call now</p>
                  <p className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                    +91 9963730111
                  </p>
                </div>
              </a>
              <a
                href="https://wa.me/919963730111"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => void fireConversion('saas_design_whatsapp_click')}
                className="flex items-center gap-3 p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 hover:border-green-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">WhatsApp</p>
                  <p className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                    Chat now
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-7 sm:p-8 shadow-xl border-2 border-indigo-100 dark:border-indigo-900">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="font-bold text-sm mb-1.5 block">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="h-12"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="font-bold text-sm mb-1.5 block">
                        Phone <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9963730111"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-bold text-sm mb-1.5 block">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="font-bold text-sm mb-1.5 block">
                        Company / SaaS name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectType" className="font-bold text-sm mb-1.5 block">
                        Project type
                      </Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full h-12 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
                      >
                        <option value="">Select type</option>
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-bold text-sm mb-1.5 block">
                      Tell us about your project
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What does your SaaS do? What's missing from the current site?"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full h-14 text-base font-bold bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-600/20"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                        Sending…
                      </span>
                    ) : (
                      <>
                        Get a free consultation <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-gray-400">
                    No spam · 2-hour response · 100% confidential
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-5 flex items-center justify-center">
                    <CheckCircle className="h-9 w-9 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                    Request received!
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    We'll call you within 2 hours. Talk soon.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
