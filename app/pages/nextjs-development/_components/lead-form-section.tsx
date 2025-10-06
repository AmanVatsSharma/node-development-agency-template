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

console.log('[NextJS-Dev] LeadFormSection component loaded');

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
    console.log('[NextJS-Dev] LeadFormSection mounted');
    return () => console.log('[NextJS-Dev] LeadFormSection unmounted');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[NextJS-Dev] Lead form submitted:', formData);
    
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
          source: 'nextjs-development',
          leadSource: 'Website - Next.js Landing',
          raw: {
            company: formData.company,
            projectType: formData.projectType,
            path: typeof window !== 'undefined' ? window.location.pathname : undefined,
          },
        }),
      });
      const data = await res.json();
      console.log('[NextJS-Dev] Lead API response:', data);
      if (!res.ok) throw new Error(data?.error || 'Lead API failed');
      setSubmitted(true);
      // Fire Google Ads conversion
      void fireConversion('lead_submit');
    } catch (err) {
      console.error('[NextJS-Dev] Lead submit error:', err);
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
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950"
      id="lead-form"
      role="region"
      aria-labelledby="form-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
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
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white"
              >
                Let's Build a Next-Gen Website That Converts
              </h2>

              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Get a <span className="font-bold text-indigo-600 dark:text-indigo-400">FREE project quote</span> and technical consultation with our Next.js experts!
              </p>

              {/* Benefits List */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  { icon: CheckCircle, text: 'Response within 2 hours', color: 'text-green-600 dark:text-green-400' },
                  { icon: Code2, text: 'Technical consultation included', color: 'text-blue-600 dark:text-blue-400' },
                  { icon: Briefcase, text: 'Detailed project roadmap', color: 'text-purple-600 dark:text-purple-400' },
                  { icon: CheckCircle, text: '100% confidential', color: 'text-indigo-600 dark:text-indigo-400' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <Icon className={`h-6 w-6 ${item.color} flex-shrink-0`} />
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Quick Contact Options */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 sm:p-6 border border-gray-200 dark:border-gray-800 shadow-lg">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4 uppercase tracking-wide">
                  Prefer to talk directly?
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:+919963730111"
                    className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors group"
                    onClick={() => { console.log('[NextJS-Dev] Quick call clicked'); void fireConversion('call_click'); }}
                  >
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Call us now</div>
                      <div className="font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                        +91 99637 30111
                      </div>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/919963730111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors group"
                    onClick={() => { console.log('[NextJS-Dev] WhatsApp clicked'); void fireConversion('whatsapp_click'); }}
                  >
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">WhatsApp us</div>
                      <div className="font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                        Chat on WhatsApp
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
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border-2 border-indigo-200 dark:border-indigo-800 relative overflow-hidden">
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full blur-3xl -z-0" />
                
                <div className="relative z-10">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    {/* Name Field */}
                    <div>
                      <Label htmlFor="name" className="text-gray-900 dark:text-white font-semibold mb-2 block">
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
                        className="h-12"
                      />
                    </div>

                    {/* Phone & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-gray-900 dark:text-white font-semibold mb-2 block">
                          Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 99637 30111"
                          className="h-12"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-gray-900 dark:text-white font-semibold mb-2 block">
                          Email Address
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="h-12"
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

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-lg h-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl font-bold transition-all hover:scale-[1.02]"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                          Processing...
                        </span>
                      ) : (
                        <>
                          💻 Get Your Free Quote Now
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>

                    {/* Trust Indicators */}
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        ✅ No Spam
                      </span>
                      <span className="flex items-center gap-1">
                        🔒 100% Secure
                      </span>
                      <span className="flex items-center gap-1">
                        ⚡ 2-Hour Response
                      </span>
                    </div>

                    <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                      Average delivery time: 10-21 days
                    </p>
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
