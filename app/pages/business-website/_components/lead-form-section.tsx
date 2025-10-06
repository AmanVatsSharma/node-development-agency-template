'use client';

/**
 * Lead Form Section Component
 * High-converting lead capture form with validation
 * Multi-step form to reduce friction and increase completion rate
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
  MapPin,
  Briefcase
} from 'lucide-react';
import { fireConversion } from '@/utils/conversions';
import { getAttributionData, calculateConversionValue, calculateLeadScore } from '@/utils/attribution';

console.log('[Business-Website] LeadFormSection component loaded');

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  businessType: string;
  budget: string;
  timeline: string;
  message: string;
}

export function LeadFormSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    city: '',
    businessType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('[Business-Website] LeadFormSection mounted');
    return () => console.log('[Business-Website] LeadFormSection unmounted');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[Business-Website] Lead form submitted:', formData);
    
    setLoading(true);
    
    // Get attribution data (GCLID, UTMs, referrer)
    const attribution = getAttributionData();
    
    // Calculate conversion value based on budget and timeline
    const conversionValue = calculateConversionValue(
      'business-website',
      formData.budget,
      formData.timeline
    );
    
    // Calculate lead quality score
    const leadScore = calculateLeadScore({
      budget: formData.budget,
      timeline: formData.timeline,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });
    
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          source: 'business-website',
          leadSource: 'Website',
          // Attribution data
          gclid: attribution.gclid,
          utmSource: attribution.utm_source,
          utmMedium: attribution.utm_medium,
          utmCampaign: attribution.utm_campaign,
          utmTerm: attribution.utm_term,
          utmContent: attribution.utm_content,
          referrer: attribution.referrer,
          // Lead quality
          budget: formData.budget,
          timeline: formData.timeline,
          conversionValue,
          leadScore,
          raw: {
            city: formData.city,
            businessType: formData.businessType,
            path: typeof window !== 'undefined' ? window.location.pathname : undefined,
            attribution,
          },
        }),
      });
      const data = await res.json();
      console.log('[Business-Website] Lead API response:', data);
      if (!res.ok) throw new Error(data?.error || 'Lead API failed');
      setSubmitted(true);
      
      // Fire Google Ads conversion with dynamic value and user data
      const [firstName, ...lastNameParts] = formData.name.split(' ');
      const lastName = lastNameParts.join(' ');
      
      void fireConversion(
        'lead_submit',
        'business-website',
        conversionValue, // Dynamic value based on budget/timeline
        'INR',
        {
          email: formData.email,
          phone: formData.phone,
          firstName,
          lastName,
          city: formData.city,
        }
      );
      
      console.log('[Business-Website] Conversion fired with value:', conversionValue, 'Lead score:', leadScore);
    } catch (err) {
      console.error('[Business-Website] Lead submit error:', err);
      alert('Something went wrong. Please try again.');
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
        city: '',
        businessType: '',
        budget: '',
        timeline: '',
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

  const INDIAN_CITIES = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 
    'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Surat', 'Other'
  ];

  const BUSINESS_TYPES = [
    'Retail/Shop', 'Restaurant/Cafe', 'Services', 'Manufacturing',
    'Healthcare', 'Education', 'Real Estate', 'Technology', 'Other'
  ];

  const BUDGET_RANGES = [
    { value: 'under-50k', label: 'Under ₹50,000' },
    { value: '50k-2lakh', label: '₹50,000 - ₹2 Lakh' },
    { value: '2lakh-5lakh', label: '₹2-5 Lakh' },
    { value: '5lakh-plus', label: '₹5 Lakh+' },
  ];

  const TIMELINES = [
    { value: 'urgent', label: 'Urgent (Within 1 week)' },
    { value: 'this-month', label: 'This month' },
    { value: 'this-quarter', label: 'Next 1-3 months' },
    { value: 'exploring', label: 'Just exploring' },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-14 md:py-20 lg:py-28 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950"
      id="lead-form"
      role="region"
      aria-labelledby="form-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            {/* Left Side - Benefits & Trust Signals */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24"
            >
              <div className="inline-block px-3 sm:px-4 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-3 sm:mb-4 border border-green-200 dark:border-green-800 text-xs sm:text-sm">
                <span className="font-bold text-green-700 dark:text-green-300 uppercase tracking-wide">
                  Free Consultation
                </span>
              </div>

              <h2
                id="form-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-gray-900 dark:text-white"
              >
                Start Your Digital Journey Today
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 md:mb-8 leading-snug sm:leading-relaxed">
                Get a <span className="font-bold text-indigo-600 dark:text-indigo-400">FREE consultation</span> with our expert team!
              </p>

              {/* Benefits List - Compact */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 md:mb-8">
                {[
                  { icon: CheckCircle, text: 'Response in 2 hours', color: 'text-green-600 dark:text-green-400' },
                  { icon: CheckCircle, text: 'Free consultation', color: 'text-blue-600 dark:text-blue-400' },
                  { icon: CheckCircle, text: 'No obligation', color: 'text-purple-600 dark:text-purple-400' },
                  { icon: CheckCircle, text: '100% confidential', color: 'text-indigo-600 dark:text-indigo-400' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                      <Icon className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 ${item.color} flex-shrink-0`} />
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-xs sm:text-sm md:text-base">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Quick Contact Options - Compact */}
              <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-200 dark:border-gray-800 shadow-lg">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 uppercase tracking-wide">
                  Prefer to talk directly?
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <a 
                    href="tel:+919963730111"
                    className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors group"
                    onClick={() => { console.log('[Business-Website] Quick call clicked'); void fireConversion('call_click', 'business-website'); }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Call us now</div>
                      <div className="font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 text-sm sm:text-base">
                        +91 99637 30111
                      </div>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/919963730111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors group"
                    onClick={() => { console.log('[Business-Website] WhatsApp clicked'); void fireConversion('whatsapp_click', 'business-website'); }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">WhatsApp us</div>
                      <div className="font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 text-sm sm:text-base">
                        Chat on WhatsApp
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form - MOBILE STICKY OPTIMIZED */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:sticky lg:top-24"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border-2 border-indigo-200 dark:border-indigo-800 relative overflow-hidden">
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full blur-3xl -z-0" />
                
                <div className="relative z-10">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                    {/* Name Field */}
                    <div>
                      <Label htmlFor="name" className="text-gray-900 dark:text-white font-semibold mb-1.5 sm:mb-2 block text-sm sm:text-base">
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
                        className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                      />
                    </div>

                    {/* Phone & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-gray-900 dark:text-white font-semibold mb-1.5 sm:mb-2 block text-sm sm:text-base">
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
                          className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-gray-900 dark:text-white font-semibold mb-1.5 sm:mb-2 block text-sm sm:text-base">
                          Email Address
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    {/* City & Business Type Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <Label htmlFor="city" className="text-gray-900 dark:text-white font-semibold mb-1.5 sm:mb-2 block text-sm sm:text-base">
                          Your City <span className="text-red-500">*</span>
                        </Label>
                        <select
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange as any}
                          required
                          className="w-full h-10 sm:h-11 md:h-12 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
                        >
                          <option value="">Select your city</option>
                          {INDIAN_CITIES.map(city => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="businessType" className="text-gray-900 dark:text-white font-semibold mb-1.5 sm:mb-2 block text-sm sm:text-base">
                          Business Type
                        </Label>
                        <select
                          id="businessType"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange as any}
                          className="w-full h-10 sm:h-11 md:h-12 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
                        >
                          <option value="">Select type</option>
                          {BUSINESS_TYPES.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Budget & Timeline Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <Label htmlFor="budget" className="text-gray-900 dark:text-white font-semibold mb-1.5 sm:mb-2 block text-sm sm:text-base">
                          Project Budget
                        </Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange as any}
                          className="w-full h-10 sm:h-11 md:h-12 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
                        >
                          <option value="">Select budget range</option>
                          {BUDGET_RANGES.map(range => (
                            <option key={range.value} value={range.value}>{range.label}</option>
                          ))}
                        </select>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Helps us provide accurate quote
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="timeline" className="text-gray-900 dark:text-white font-semibold mb-1.5 sm:mb-2 block text-sm sm:text-base">
                          When do you need this?
                        </Label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange as any}
                          className="w-full h-10 sm:h-11 md:h-12 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
                        >
                          <option value="">Select timeline</option>
                          {TIMELINES.map(timeline => (
                            <option key={timeline.value} value={timeline.value}>{timeline.label}</option>
                          ))}
                        </select>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Helps us prioritize your project
                        </p>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <Label htmlFor="message" className="text-gray-900 dark:text-white font-semibold mb-1.5 sm:mb-2 block text-sm sm:text-base">
                        Tell us about your project
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What kind of website do you need?"
                        rows={3}
                        className="text-sm sm:text-base"
                      />
                    </div>

                    {/* Submit Button - CONVERSION OPTIMIZED */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-sm sm:text-base md:text-lg h-14 sm:h-15 md:h-16 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-xl hover:shadow-2xl font-bold transition-all hover:scale-[1.02]"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                          Processing Your Request...
                        </span>
                      ) : (
                        <>
                          💰 Get My Free Quote Now (2-Hour Response!)
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>

                    {/* Trust Indicators */}
                    <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
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
                      We've received your request. Our team will contact you within 2 hours!
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

