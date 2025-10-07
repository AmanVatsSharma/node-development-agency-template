'use client';

/**
 * @fileoverview Demo Form Section - EnterpriseHero CRM
 * @description Lead capture form for demo requests
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - Comprehensive form with validation
 * - Multi-select for modules
 * - Error handling
 * - Success messaging
 * - Console logs for debugging
 */

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle,
  User,
  Building2,
  Mail,
  Globe,
  List,
  MessageSquare
} from 'lucide-react';

console.log('[CRM-Demo] DemoFormSection component loaded');

export function DemoFormSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    website: '',
    modules: [] as string[],
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const modules = [
    'Leads & Sales',
    'Contacts & Accounts',
    'Projects & Tasks',
    'Invoices & Payments',
    'Reports & Analytics',
    'User Roles & Permissions',
    'BharatERP Integration',
    'Custom Module'
  ];

  const handleModuleToggle = (module: string) => {
    setFormData(prev => ({
      ...prev,
      modules: prev.modules.includes(module)
        ? prev.modules.filter(m => m !== module)
        : [...prev.modules, module]
    }));
    console.log('[CRM-Demo] Module toggled:', module);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[CRM-Demo] Form submission started', formData);
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Validate form
      if (!formData.fullName || !formData.email || !formData.companyName) {
        throw new Error('Please fill in all required fields');
      }

      // Submit to API
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'CRM Demo Request',
          leadType: 'demo'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit demo request');
      }

      console.log('[CRM-Demo] Form submitted successfully');
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        website: '',
        modules: [],
        message: ''
      });

      // Track conversion
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          send_to: 'AW-17606401808/demo_request',
          value: 1.0,
          currency: 'INR'
        });
        console.log('[CRM-Demo] Conversion tracked');
      }

    } catch (error) {
      console.error('[CRM-Demo] Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      id="demo-form"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            {/* Form Card */}
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700 shadow-2xl">
              
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 text-center">
                Request Your <span className="bg-gradient-to-r from-[#002F9E] to-[#FFD700] bg-clip-text text-transparent">Custom Demo</span>
              </h2>

              {submitStatus === 'success' ? (
                /* Success Message */
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white mb-6">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                    Demo Request Received!
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    You'll receive a personalized demo URL within <span className="font-bold text-[#00C897]">24 hours</span>.
                  </p>
                  <Button
                    onClick={() => setSubmitStatus('idle')}
                    variant="outline"
                    className="border-2 border-[#FFD700]"
                  >
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Full Name */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      <User className="h-4 w-4" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-[#FFD700] focus:ring-4 focus:ring-[#FFD700]/20 transition-all"
                      placeholder="e.g., Amit Kumar"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      <Building2 className="h-4 w-4" />
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-[#FFD700] focus:ring-4 focus:ring-[#FFD700]/20 transition-all"
                      placeholder="e.g., TechCorp India Pvt. Ltd."
                    />
                  </div>

                  {/* Business Email */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      <Mail className="h-4 w-4" />
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-[#FFD700] focus:ring-4 focus:ring-[#FFD700]/20 transition-all"
                      placeholder="amit@techcorp.com"
                    />
                  </div>

                  {/* Website */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      <Globe className="h-4 w-4" />
                      Website / Domain
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-[#FFD700] focus:ring-4 focus:ring-[#FFD700]/20 transition-all"
                      placeholder="https://techcorp.com"
                    />
                  </div>

                  {/* Modules Interested In */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                      <List className="h-4 w-4" />
                      Modules Interested In
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {modules.map((module) => (
                        <button
                          key={module}
                          type="button"
                          onClick={() => handleModuleToggle(module)}
                          className={`px-4 py-3 rounded-xl border-2 text-left text-sm font-semibold transition-all ${
                            formData.modules.includes(module)
                              ? 'border-[#FFD700] bg-[#FFD700]/10 text-[#002F9E] dark:text-[#FFD700]'
                              : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-[#FFD700]/50'
                          }`}
                        >
                          <span className="mr-2">{formData.modules.includes(module) ? '✓' : '○'}</span>
                          {module}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      <MessageSquare className="h-4 w-4" />
                      Message / Customization Details
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      rows={4}
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-[#FFD700] focus:ring-4 focus:ring-[#FFD700]/20 transition-all resize-none"
                      placeholder="Tell us about your specific requirements, workflows, or any questions..."
                    />
                  </div>

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-3 px-4 py-3 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                      <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                        {errorMessage}
                      </span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full text-lg font-black py-7 h-auto shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,215,0,0.8)] transition-all active:scale-95 bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#002F9E] rounded-2xl text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>⏳ Submitting...</>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Request My Custom Demo
                      </>
                    )}
                  </Button>

                  {/* Bottom Note */}
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400 pt-4">
                    ✨ You'll receive a personalized demo URL within <span className="font-bold">24 hours</span>
                  </p>
                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
