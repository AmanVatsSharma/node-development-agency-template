'use client';

/**
 * @fileoverview Lead Form Section - Primary Conversion Point
 * @description Multi-step form with validation and WhatsApp alternative
 * @version 1.0.0
 */

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { MessageCircle, Send, CheckCircle2 } from 'lucide-react';

console.log('[Shopify-Product-Page] LeadFormSection component loaded');

export function LeadFormSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    storeName: '',
    package: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    console.log(`[Shopify-Product-Page] Form field ${field} changed`);
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[Shopify-Product-Page] Form submitted', formData);
    setIsSubmitting(true);

    // Track conversion event for Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
        value: 35000,
        currency: 'INR',
      });
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleWhatsApp = () => {
    console.log('[Shopify-Product-Page] WhatsApp quick contact clicked');
    const message = encodeURIComponent(
      'Hi! I want to customize my Shopify product page. Can we discuss?'
    );
    window.open(`https://wa.me/919999999999?text=${message}`, '_blank');
  };

  if (isSubmitted) {
    return (
      <section
        ref={sectionRef}
        id="lead-form"
        className="py-16 md:py-24 bg-white dark:bg-gray-950"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-12 border-2 border-green-200 dark:border-green-800">
              <CheckCircle2 className="h-20 w-20 text-green-600 mx-auto mb-6" />
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
                Thank You! 🎉
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                We've received your request. Our team will contact you within 24 hours to discuss your project.
              </p>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8 py-6 h-auto text-lg font-black rounded-2xl"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Chat on WhatsApp (Faster)
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="lead-form"
      className="py-16 md:py-24 bg-white dark:bg-gray-950"
      role="region"
      aria-labelledby="lead-form-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="lead-form-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gray-900 dark:text-white"
          >
            📝 Get Your Free <span className="text-[#FFB400]">Consultation</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Tell us about your Shopify store and we'll send you a custom proposal
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-base font-bold mb-2 block">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="John Doe"
                      className="h-12 text-base"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-base font-bold mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="john@example.com"
                      className="h-12 text-base"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-base font-bold mb-2 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="h-12 text-base"
                    />
                  </div>

                  {/* Store Name */}
                  <div>
                    <Label htmlFor="storeName" className="text-base font-bold mb-2 block">
                      Shopify Store URL *
                    </Label>
                    <Input
                      id="storeName"
                      type="text"
                      required
                      value={formData.storeName}
                      onChange={(e) => handleChange('storeName', e.target.value)}
                      placeholder="mystore.myshopify.com"
                      className="h-12 text-base"
                    />
                  </div>

                  {/* Package Selection */}
                  <div>
                    <Label htmlFor="package" className="text-base font-bold mb-2 block">
                      Preferred Package
                    </Label>
                    <Select
                      value={formData.package}
                      onValueChange={(value) => handleChange('package', value)}
                    >
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder="Select a package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="starter">Starter Customization (₹15,000)</SelectItem>
                        <SelectItem value="pro">Conversion Pro (₹35,000)</SelectItem>
                        <SelectItem value="premium">Premium Suite (₹60,000-₹75,000)</SelectItem>
                        <SelectItem value="custom">Custom Requirements</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-base font-bold mb-2 block">
                      Tell us about your project
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="What specific features are you looking for?"
                      className="min-h-[120px] text-base"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full py-7 h-auto text-lg font-black bg-gradient-to-r from-[#FFB400] to-orange-500 hover:from-orange-500 hover:to-[#FFB400] text-white rounded-2xl shadow-xl"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Get Free Proposal
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Quick WhatsApp */}
              <div className="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 dark:from-[#25D366]/20 dark:to-[#25D366]/10 rounded-3xl p-8 border-2 border-[#25D366]/30 dark:border-[#25D366]/50">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                  💬 Prefer WhatsApp?
                </h3>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
                  Get instant responses on WhatsApp. Chat with our team now!
                </p>
                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="w-full py-6 h-auto text-lg font-black bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-2xl"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">
                  ✨ What Happens Next?
                </h3>
                <ul className="space-y-3">
                  {[
                    '📞 We call you within 24 hours',
                    '🔍 Free UX audit of your current page',
                    '📊 Custom proposal with pricing',
                    '🎨 Visual mockup & timeline',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300"
                    >
                      <span className="flex-shrink-0">{item.split(' ')[0]}</span>
                      <span>{item.split(' ').slice(1).join(' ')}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guarantee */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-6 border-2 border-green-200 dark:border-green-800 text-center">
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                  🛡️ <span className="font-black">100% Satisfaction Guaranteed</span>
                  <br />
                  Your data is secure. We never spam.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

console.log('[Shopify-Product-Page] LeadFormSection exported');
