'use client';

/**
 * @fileoverview Lead Form Section
 * @description Primary conversion point with form
 * @version 1.0.0
 */

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/app/components/ui/select';

export function LeadFormSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log('[LeadFormSection] Rendering, inView:', inView);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('[LeadFormSection] Form submitted:', formData);
    setIsSubmitting(true);

    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'Lead Form',
        event_label: 'WhatsApp API Lead',
        value: 1
      });
    }

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/leads/whatsapp-api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('[LeadFormSection] Form submitted successfully');
        setIsSubmitted(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            businessType: '',
            message: ''
          });
        }, 5000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('[LeadFormSection] Error submitting form:', error);
      alert('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    'Free 30-minute consultation',
    'Custom solution recommendation',
    'No obligation, no pressure',
    'Response within 2 hours'
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      id="lead-form"
      role="region"
      aria-labelledby="lead-form-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 rounded-full text-[#25D366] font-bold text-sm border border-[#25D366]/20">
                <Send className="h-4 w-4" />
                Get Started Now
              </span>
            </div>
            <h2 
              id="lead-form-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 md:mb-6"
            >
              Get Your WhatsApp API
              <br />
              <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">
                Setup in 48 Hours
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Fill out the form below and we'll get back to you within 2 hours
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
            
            {/* Left: Benefits */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">
                    What Happens Next?
                  </h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                    💯 Our Promise
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>No spam, ever</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Your data is secure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Transparent pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Cancel anytime</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div variants={fadeInUp} className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 shadow-2xl border-2 border-gray-200 dark:border-gray-700">
                
                {isSubmitted ? (
                  /* Success Message */
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center h-20 w-20 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                      <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-4">
                      Thank You! 🎉
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                      We've received your request. Our team will contact you within 2 hours.
                    </p>
                    <p className="text-sm text-gray-500">
                      Check your email for confirmation
                    </p>
                  </div>
                ) : (
                  /* Form */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name" className="text-gray-900 dark:text-white font-semibold">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your full name"
                        className="mt-2 h-12 text-base"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-gray-900 dark:text-white font-semibold">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="you@company.com"
                          className="mt-2 h-12 text-base"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-900 dark:text-white font-semibold">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+91 98765 43210"
                          className="mt-2 h-12 text-base"
                        />
                      </div>
                    </div>

                    {/* Company & Business Type */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company" className="text-gray-900 dark:text-white font-semibold">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="Your Company Pvt. Ltd."
                          className="mt-2 h-12 text-base"
                        />
                      </div>
                      <div>
                        <Label htmlFor="businessType" className="text-gray-900 dark:text-white font-semibold">
                          Business Type *
                        </Label>
                        <Select 
                          value={formData.businessType}
                          onValueChange={(value) => setFormData({...formData, businessType: value})}
                          required
                        >
                          <SelectTrigger className="mt-2 h-12 text-base">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="healthcare">Healthcare / Clinics</SelectItem>
                            <SelectItem value="services">Service Provider</SelectItem>
                            <SelectItem value="enterprise">Enterprise</SelectItem>
                            <SelectItem value="agency">Agency / SaaS</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="text-gray-900 dark:text-white font-semibold">
                        What are you looking to automate?
                      </Label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your requirements..."
                        rows={4}
                        className="mt-2 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-base text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 text-lg font-bold bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white rounded-xl shadow-xl hover:shadow-2xl transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Get Started - Setup in 48 Hours
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                      By submitting, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </form>
                )}

              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}

console.log('[WhatsApp-API] LeadFormSection component loaded');
