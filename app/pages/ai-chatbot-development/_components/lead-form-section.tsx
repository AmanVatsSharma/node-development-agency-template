'use client';

/**
 * Lead Form Section
 * Contact form with success popup
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';
import { CheckCircle2, Send, X, Phone, MessageCircle } from 'lucide-react';
import { fireConversion } from '@/utils/conversions';

console.log('[AI-Chatbot-Dev] LeadFormSection component loaded');

export function LeadFormSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    website: '',
    whatsapp: '',
    goal: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    console.log('[AI-Chatbot-Dev] LeadFormSection mounted');
    return () => console.log('[AI-Chatbot-Dev] LeadFormSection unmounted');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('[AI-Chatbot-Dev] Form submitted:', formData);

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.whatsapp,
          message: `Website: ${formData.website}, Goal: ${formData.goal}`,
          source: 'ai-chatbot-development',
          leadSource: 'Website - AI Chatbot Development Landing',
          raw: {
            businessName: formData.businessName,
            website: formData.website,
            whatsapp: formData.whatsapp,
            goal: formData.goal,
            path: typeof window !== 'undefined' ? window.location.pathname : undefined,
          },
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Lead API failed');
      
      setShowSuccess(true);
      setFormData({
        name: '',
        businessName: '',
        website: '',
        whatsapp: '',
        goal: ''
      });

      // Track conversion
      console.log('[AI-Chatbot-Dev] Lead submit conversion fired');
      void fireConversion('ai_chatbot_development_lead_submit');
    } catch (err) {
      console.error('[AI-Chatbot-Dev] Lead submit error:', err);
      alert('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      id="lead-form"
      role="region"
      aria-labelledby="lead-form-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-[#FFB100]/20 to-[#0A2540]/20 rounded-full mb-4 sm:mb-5 border border-[#FFB100] text-sm sm:text-base">
            <span className="font-bold text-[#0A2540] dark:text-[#FFB100] uppercase tracking-wide">
              Get Started Today
            </span>
          </div>

          <h2
            id="lead-form-heading"
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
          >
            Request Your Free Consultation
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tell us about your business and we'll show you how AI chatbots can transform your customer engagement
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-gray-200 dark:border-gray-700 shadow-2xl">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-sm font-bold text-gray-900 dark:text-white mb-2 block">
                  Your Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-[#FFB100] dark:focus:border-[#FFB100] transition-all"
                />
              </div>

              {/* Business Name */}
              <div>
                <Label htmlFor="businessName" className="text-sm font-bold text-gray-900 dark:text-white mb-2 block">
                  Business Name *
                </Label>
                <Input
                  id="businessName"
                  name="businessName"
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your Company Pvt. Ltd."
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-[#FFB100] dark:focus:border-[#FFB100] transition-all"
                />
              </div>

              {/* Website */}
              <div>
                <Label htmlFor="website" className="text-sm font-bold text-gray-900 dark:text-white mb-2 block">
                  Website URL
                </Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-[#FFB100] dark:focus:border-[#FFB100] transition-all"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <Label htmlFor="whatsapp" className="text-sm font-bold text-gray-900 dark:text-white mb-2 block">
                  WhatsApp Number *
                </Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-[#FFB100] dark:focus:border-[#FFB100] transition-all"
                />
              </div>

              {/* Goal */}
              <div>
                <Label htmlFor="goal" className="text-sm font-bold text-gray-900 dark:text-white mb-2 block">
                  What's your primary goal? *
                </Label>
                <Textarea
                  id="goal"
                  name="goal"
                  required
                  value={formData.goal}
                  onChange={handleChange}
                  placeholder="e.g., Generate more leads, Automate customer support, Improve conversion rate..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-[#FFB100] dark:focus:border-[#FFB100] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full text-base sm:text-lg px-8 py-7 h-auto shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,177,0,0.5)] transition-all active:scale-95 bg-gradient-to-r from-[#0A2540] via-[#FFB100] to-[#0A2540] hover:from-[#0A2540] hover:via-[#FFB100] hover:to-[#0A2540] rounded-2xl font-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="h-5 w-5" />
                    Get Free Consultation
                  </span>
                )}
              </Button>

              {/* Trust Badge */}
              <p className="text-xs sm:text-sm text-center text-gray-600 dark:text-gray-400">
                🔒 Your information is secure and will never be shared
              </p>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 max-w-md w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Success Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-white" />
              </div>

              {/* Message */}
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-4 text-center">
                Thank you, {formData.name.split(' ')[0] || 'there'}! 🎉
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
                Our AI team will reach you within <span className="font-bold text-[#FFB100]">24 hours</span> on WhatsApp!
              </p>

              <Button
                onClick={() => setShowSuccess(false)}
                className="w-full bg-gradient-to-r from-[#0A2540] to-[#0A2540]/90 hover:from-[#0A2540]/90 hover:to-[#0A2540] text-white font-bold py-3 rounded-xl"
              >
                Got it!
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
