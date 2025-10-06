'use client';

/**
 * Lead Form Section Component
 * High-converting lead capture form with Next.js development focus
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle, 
  Code2,
  Briefcase
} from 'lucide-react';
import { fireConversion } from '@/utils/conversions';

console.log('[Next-JS-Dev] LeadFormSection component loaded');

interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

export function LeadFormSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('[Next-JS-Dev] LeadFormSection mounted');
    return () => console.log('[Next-JS-Dev] LeadFormSection unmounted');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[Next-JS-Dev] Lead form submitted:', formData);
    
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
          source: 'next-js-development',
          leadSource: 'Website - Next.js Landing',
          raw: {
            company: formData.company,
            projectType: formData.projectType,
            path: typeof window !== 'undefined' ? window.location.pathname : undefined,
          },
        }),
      });
      const data = await res.json();
      console.log('[Next-JS-Dev] Lead API response:', data);
      if (!res.ok) throw new Error(data?.error || 'Lead API failed');
      setSubmitted(true);
      // Fire Google Ads conversion for this landing page
      void fireConversion('lead_submit', 'next-js-development');
    } catch (err) {
      console.error('[Next-JS-Dev] Lead submit error:', err);
      alert('Something went wrong. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        projectType: '',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const PROJECT_TYPES = [
    'New Website/App',
    'Migration to Next.js',
    'Performance Optimization',
    'E-Commerce Solution',
    'SaaS/Dashboard',
    'Other'
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950"
      id="lead-form"
      role="region"
      aria-labelledby="form-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Benefits & Trust Signals */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24"
            >
              <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-4 sm:mb-5 border border-green-200 dark:border-green-800 text-sm sm:text-base">
                <span className="font-bold text-green-700 dark:text-green-300 uppercase tracking-wide">
                  Free Consultation
                </span>
              </div>

              <h2
                id="form-heading"
                className="text-[28px] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
              >
                Build Your Next-Gen Website
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Get a <span className="font-bold text-indigo-600 dark:text-indigo-400">FREE quote</span> + technical consultation!
              </p>

              {/* Benefits List - MOBILE OPTIMIZED */}
              <div className="space-y-3 mb-6">
                {[
                  { icon: CheckCircle, text: '2-hour response', color: 'text-green-600 dark:text-green-400' },
                  { icon: Code2, text: 'Tech consultation', color: 'text-blue-600 dark:text-blue-400' },
                  { icon: Briefcase, text: 'Project roadmap', color: 'text-purple-600 dark:text-purple-400' },
                  { icon: CheckCircle, text: '100% confidential', color: 'text-indigo-600 dark:text-indigo-400' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-2.5">
                      <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${item.color} flex-shrink-0`} />
                      <span className="text-gray-700 dark:text-gray-300 font-bold text-sm sm:text-base">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Quick Contact Options - MOBILE OPTIMIZED */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border-2 border-gray-200 dark:border-gray-800 shadow-xl">
                <p className="text-xs sm:text-sm font-black text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
                  Or Contact Directly
                </p>
                <div className="space-y-2.5">
                  <a 
                    href="tel:+919963730111"
                    className="flex items-center gap-3 p-3.5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 active:scale-95 transition-all group shadow-md"
                    onClick={() => { console.log('[Next-JS-Dev] Quick call clicked'); void fireConversion('call_click', 'next-js-development'); }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase">Call Now</div>
                      <div className="font-black text-sm text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                        +91 99637 30111
                      </div>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/919963730111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 active:scale-95 transition-all group shadow-md"
                    onClick={() => { console.log('[Next-JS-Dev] WhatsApp clicked'); void fireConversion('whatsapp_click', 'next-js-development'); }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase">WhatsApp</div>
                      <div className="font-black text-sm text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                        Chat Now
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:sticky lg:top-24"
            >
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 shadow-2xl border-[3px] border-indigo-300 dark:border-indigo-700 relative overflow-hidden">
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full blur-3xl -z-0" />
                
                <div className="relative z-10">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Field - MOBILE OPTIMIZED */}
                    <div>
                      <Label htmlFor="name" className="text-gray-900 dark:text-white font-black mb-2 block text-sm">
                        Your Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="h-14 text-base border-2 rounded-xl shadow-sm"
                      />
                    </div>

                    {/* Phone & Email - MOBILE OPTIMIZED */}
                    <div className="space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-gray-900 dark:text-white font-black mb-2 block text-sm">
                          Phone <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 99637 30111"
                          className="h-14 text-base border-2 rounded-xl shadow-sm"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-gray-900 dark:text-white font-black mb-2 block text-sm">
                          Email
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="h-14 text-base border-2 rounded-xl shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Company & Project Type Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company" className="text-gray-900 dark:text-white font-semibold mb-2 block">
                          Company Name
                        </Label>
                        <Input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="h-12"
                        />
                      </div>

                      <div>
                        <Label htmlFor="projectType" className="text-gray-900 dark:text-white font-semibold mb-2 block">
                          Project Type
                        </Label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange as any}
                          className="w-full h-12 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
                        >
                          <option value="">Select type</option>
                          {PROJECT_TYPES.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <Label htmlFor="message" className="text-gray-900 dark:text-white font-semibold mb-2 block">
                        Project Details
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project requirements..."
                        rows={4}
                      />
                    </div>

                    {/* Submit Button - MOBILE OPTIMIZED */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-base sm:text-lg h-16 sm:h-18 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.6)] font-black rounded-2xl active:scale-95 transition-all"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                          Processing...
                        </span>
                      ) : (
                        <>
                          💻 Get Free Quote
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>

                    {/* Trust Indicators - MOBILE OPTIMIZED */}
                    <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 font-bold">
                      <span className="flex items-center gap-1">
                        ✅ No Spam
                      </span>
                      <span className="flex items-center gap-1">
                        🔒 Secure
                      </span>
                      <span className="flex items-center gap-1">
                        ⚡ 2-Hr Response
                      </span>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-6 flex items-center justify-center">
                      <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Thank You! 🎉
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                      We've received your request. Our Next.js expert will contact you within 2 hours!
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Check your phone for a call from +91 99637 30111
                    </p>
                  </motion.div>
                )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
