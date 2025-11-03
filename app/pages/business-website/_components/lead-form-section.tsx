'use client';

/**
 * Lead Form Section Component
 * High-converting lead capture form with validation
 * Multi-step form to reduce friction and increase completion rate
 * Includes reCAPTCHA v3 for bot protection
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

// reCAPTCHA v3 Site Key (public key - safe to expose)
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

// Business-Website specific conversion event types
// These map to Google Ads conversion actions configured in admin panel

console.log('[Business-Website] LeadFormSection component loaded');

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  budget: string;
  businessType: string;
  message: string;
}

// Budget options for lead quality scoring
const BUDGET_OPTIONS = [
  { value: '', label: 'Select budget range' },
  { value: '₹15K-30K', label: '₹15K - ₹30K' },
  { value: '₹30K-60K', label: '₹30K - ₹60K' },
  { value: '₹60K-1L', label: '₹60K - ₹1L' },
  { value: '₹1L-2L', label: '₹1L - ₹2L' },
  { value: '₹2L+', label: '₹2L+' },
  { value: 'not-decided', label: 'Not decided yet' },
  { value: 'need-consultation', label: 'Need consultation' }
];

export function LeadFormSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    city: '',
    budget: '',
    businessType: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Time tracking for lead scoring
  const [timeTracking, setTimeTracking] = useState({
    pageLoadTime: Date.now(),
    formViewTime: null as number | null,
    formStartTime: null as number | null,
    scrollDepth: 0
  });

  useEffect(() => {
    console.log('[Business-Website] LeadFormSection mounted');
    
    // Load reCAPTCHA v3 script if site key is configured
    if (RECAPTCHA_SITE_KEY && typeof window !== 'undefined') {
      const scriptId = 'recaptcha-v3-script';
      if (!document.getElementById(scriptId)) {
        console.log('[Business-Website] Loading reCAPTCHA v3 script');
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        
        script.onload = () => {
          console.log('[Business-Website] ✅ reCAPTCHA v3 script loaded');
        };
        
        script.onerror = () => {
          console.error('[Business-Website] ❌ Failed to load reCAPTCHA v3 script');
        };
      }
    } else {
      console.warn('[Business-Website] ⚠️ reCAPTCHA site key not configured - bot protection disabled');
    }
    
    // Track when form section comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !timeTracking.formViewTime) {
            const viewTime = Date.now();
            setTimeTracking(prev => ({
              ...prev,
              formViewTime: viewTime,
              timeToForm: viewTime - prev.pageLoadTime
            }));
            console.log('[Business-Website] Form section viewed, time to form:', viewTime - timeTracking.pageLoadTime, 'ms');
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Track scroll depth
    const handleScroll = () => {
      const scrollPercent = Math.round(
        ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
      );
      setTimeTracking(prev => ({ ...prev, scrollDepth: Math.max(prev.scrollDepth, scrollPercent) }));
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      console.log('[Business-Website] LeadFormSection unmounted');
    };
  }, [timeTracking.formViewTime]);

  // Validation helper
  const validateForm = (): string | null => {
    if (!formData.name || formData.name.trim().length < 2) {
      return 'Please enter your full name (at least 2 characters)';
    }
    if (!formData.phone) {
      return 'Please enter your phone number';
    }
    // Indian phone validation (10 digits, starts with 6-9)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10 || !phoneRegex.test(cleanPhone)) {
      return 'Please enter a valid 10-digit Indian phone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return 'Please enter a valid email address';
    }
    if (!formData.city) {
      return 'Please select your city';
    }
    if (!formData.budget) {
      return 'Please select your budget range';
    }
    if (!formData.message || formData.message.trim().length < 10) {
      return 'Please tell us about your project (at least 10 characters)';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationError = validateForm();
    if (validationError) {
      alert(validationError);
      return;
    }
    
    // Use existing form start time or current time
    const formStartTime = timeTracking.formStartTime || Date.now();
    
    console.log('[Business-Website] Lead form submitted:', formData);
    console.log('[Business-Website] Time tracking:', {
      timeOnPage: formStartTime - timeTracking.pageLoadTime,
      timeToForm: timeTracking.formViewTime ? timeTracking.formViewTime - timeTracking.pageLoadTime : null,
      formCompletionTime: timeTracking.formStartTime ? formStartTime - timeTracking.formStartTime : null,
      scrollDepth: timeTracking.scrollDepth
    });
    
    setLoading(true);
    
    // Get reCAPTCHA token if configured
    let recaptchaToken: string | null = null;
    if (RECAPTCHA_SITE_KEY && typeof window !== 'undefined' && (window as any).grecaptcha) {
      try {
        console.log('[Business-Website] Getting reCAPTCHA v3 token');
        recaptchaToken = await (window as any).grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' });
        console.log('[Business-Website] ✅ reCAPTCHA token obtained');
      } catch (error) {
        console.error('[Business-Website] ❌ Failed to get reCAPTCHA token:', error);
        // Continue without token if reCAPTCHA fails (non-blocking)
      }
    }
    
    try {
      const formCompletionTime = timeTracking.formStartTime 
        ? formStartTime - timeTracking.formStartTime 
        : null;
      
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          budget: formData.budget,
          source: 'business-website',
          leadSource: 'Website',
          raw: {
            city: formData.city,
            businessType: formData.businessType,
            budget: formData.budget,
            path: typeof window !== 'undefined' ? window.location.pathname : undefined,
            // Time tracking metadata for lead scoring
            timeOnPage: formStartTime - timeTracking.pageLoadTime,
            timeToForm: timeTracking.formViewTime ? timeTracking.formViewTime - timeTracking.pageLoadTime : null,
            formCompletionTime: formCompletionTime,
            scrollDepth: timeTracking.scrollDepth,
            userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
            referrer: typeof document !== 'undefined' ? document.referrer : undefined,
            // reCAPTCHA token for server-side verification
            recaptchaToken: recaptchaToken,
          },
        }),
      });
      const data = await res.json();
      console.log('[Business-Website] Lead API response:', data);
      if (!res.ok) throw new Error(data?.error || 'Lead API failed');
      setSubmitted(true);
      
      // Fire Google Ads conversion with conversion value (0-10,000) based on lead score
      // The API calculates the conversion value and returns it, but we also calculate client-side
      // The value is already sent server-side, but we fire client-side as backup
      const conversionValue = data.conversionValue || null;
      console.log('[Business-Website] Firing lead_submit conversion to Google Ads with value:', conversionValue);
      
      if (conversionValue !== null && typeof conversionValue === 'number') {
        void fireConversion('business_website_lead_submit', conversionValue, 'INR');
      } else {
        void fireConversion('business_website_lead_submit');
      }
      
      console.log('[Business-Website] ✅ Lead saved to database, Zoho CRM updated, Google Ads conversion fired');
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
        budget: '',
        businessType: '',
        message: ''
      });
      // Reset time tracking
      setTimeTracking({
        pageLoadTime: Date.now(),
        formViewTime: null,
        formStartTime: null,
        scrollDepth: 0
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    // Track when user starts filling the form (first interaction)
    if (!timeTracking.formStartTime) {
      setTimeTracking(prev => ({ ...prev, formStartTime: Date.now() }));
      console.log('[Business-Website] Form interaction started');
    }
    
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
                    onClick={() => { 
                      console.log('[Business-Website] Quick call clicked - Phone: +91 9963730111'); 
                      console.log('[Business-Website] Firing call_click conversion to Google Ads');
                      void fireConversion('business_website_call_click'); 
                    }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Call us now</div>
                      <div className="font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 text-sm sm:text-base">
                        +91 9963730111
                      </div>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/919963730111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors group"
                    onClick={() => { 
                      console.log('[Business-Website] WhatsApp clicked - Opening WhatsApp chat');
                      console.log('[Business-Website] Firing whatsapp_click conversion to Google Ads'); 
                      void fireConversion('business_website_whatsapp_click'); 
                    }}
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
                          placeholder="+91 9963730111"
                          className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-gray-900 dark:text-white font-semibold mb-1.5 sm:mb-2 block text-sm sm:text-base">
                          Email Address <span className="text-xs text-gray-500">(Optional)</span>
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

                    {/* City & Budget Row - CRITICAL FOR LEAD SCORING */}
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
                        <Label htmlFor="budget" className="text-gray-900 dark:text-white font-semibold mb-1.5 sm:mb-2 block text-sm sm:text-base">
                          Budget Range <span className="text-red-500">*</span>
                        </Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange as any}
                          required
                          className="w-full h-10 sm:h-11 md:h-12 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
                        >
                          {BUDGET_OPTIONS.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Business Type - Optional */}
                    <div>
                      <Label htmlFor="businessType" className="text-gray-900 dark:text-white font-semibold mb-1.5 sm:mb-2 block text-sm sm:text-base">
                        Business Type (Optional)
                      </Label>
                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange as any}
                        className="w-full h-10 sm:h-11 md:h-12 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
                      >
                        <option value="">Select type (optional)</option>
                        {BUSINESS_TYPES.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message Field - Min 10 characters for quality filtering */}
                    <div>
                      <Label htmlFor="message" className="text-gray-900 dark:text-white font-semibold mb-1.5 sm:mb-2 block text-sm sm:text-base">
                        Tell us about your project <span className="text-red-500">*</span>
                        <span className="text-xs text-gray-500 ml-2">(Minimum 10 characters)</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What kind of website do you need? Please provide some details..."
                        rows={3}
                        minLength={10}
                        required
                        className="text-sm sm:text-base"
                      />
                      {formData.message && formData.message.length < 10 && (
                        <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                          Please provide at least 10 characters ({formData.message.length}/10)
                        </p>
                      )}
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
                      Check your phone for a call from +91 9963730111 or email at support@vedpragya.com
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

