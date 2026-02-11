"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { companyProfile } from '@/app/data/companyProfile';
import { fireConversion } from '@/utils/conversions';
import { trackEvent as trackGAEvent } from '@/app/components/Analytics/GoogleAnalytics';

// Form field type
type FormField = {
  value: string;
  error: string;
  touched: boolean;
};

// Form state type
type FormState = {
  name: FormField;
  email: FormField;
  company: FormField;
  phone: FormField;
  service: FormField;
  message: FormField;
};

export default function ContactPage() {
  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  // Form state
  const [form, setForm] = useState<FormState>({
    name: { value: '', error: '', touched: false },
    email: { value: '', error: '', touched: false },
    company: { value: '', error: '', touched: false },
    phone: { value: '', error: '', touched: false },
    service: { value: '', error: '', touched: false },
    message: { value: '', error: '', touched: false },
  });
  
  // Service options
  const serviceOptions = [
    { value: '', label: 'Select a service' },
    { value: 'nodejs', label: 'Node.js Development' },
    { value: '3d', label: '3D Interactive Experiences' },
    { value: 'enterprise', label: 'Enterprise Solutions' },
    { value: 'api', label: 'API Development' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'other', label: 'Other / Not Sure' },
  ];
  
  // Handle input change
  const handleChange = (field: keyof FormState, value: string) => {
    let error = '';
    
    // Basic validation
    if (value.trim() === '' && field !== 'phone' && field !== 'company') {
      error = 'This field is required';
    } else if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Please enter a valid email address';
    }
    
    setForm({
      ...form,
      [field]: {
        value,
        error,
        touched: true
      }
    });
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[ContactPage] Form submit triggered');
    
    // Check if all required fields are filled and valid
    const requiredFields: (keyof FormState)[] = ['name', 'email', 'service', 'message'];
    const formValid = requiredFields.every(field => 
      form[field].value.trim() !== '' && form[field].error === ''
    );
    
    if (!formValid) {
      // Mark all fields as touched to show errors
      const updatedForm = { ...form };
      requiredFields.forEach(field => {
        if (updatedForm[field].value.trim() === '') {
          updatedForm[field] = {
            ...updatedForm[field],
            error: 'This field is required',
            touched: true
          };
        }
      });
      
      setForm(updatedForm);
      console.warn('[ContactPage] Form validation failed - required fields missing/invalid');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Prepare the form data for submission
      const formData = {
        name: form.name.value,
        email: form.email.value,
        company: form.company.value,
        phone: form.phone.value,
        service: form.service.value,
        message: form.message.value
      };
      
      // Call the API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit the form');
      }
      
      // Conversion tracking (Google Ads + server-side backup) - fire-and-forget
      // NOTE: This relies on conversion labels configured in Admin → Integrations.
      try {
        console.log('[ContactPage] Firing conversion event: contact_form_submit');
        void fireConversion('contact_form_submit');
      } catch (err) {
        console.error('[ContactPage] Conversion tracking failed (non-critical):', err);
      }

      // Analytics event (GA4) - optional
      try {
        console.log('[ContactPage] Firing GA event: contact_form_submit');
        trackGAEvent('submit', 'contact_form', 'Contact form submitted');
      } catch (err) {
        console.error('[ContactPage] GA event failed (non-critical):', err);
      }

      setSubmitSuccess(true);
      // Reset form
      setForm({
        name: { value: '', error: '', touched: false },
        email: { value: '', error: '', touched: false },
        company: { value: '', error: '', touched: false },
        phone: { value: '', error: '', touched: false },
        service: { value: '', error: '', touched: false },
        message: { value: '', error: '', touched: false },
      });
    } catch (error) {
      console.error('[ContactPage] Submit error:', error);
      setSubmitError(error instanceof Error ? error.message : 'An error occurred while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-blue-200 border border-white/20">
                {companyProfile.legalName} | CIN: {companyProfile.legal.cin}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ready to discuss your enterprise project? Reach out to our global team across <strong>6 countries</strong> 
              and let's bring your vision to life with world-class Node.js development.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">Global Contact Information</h2>
                
                {/* Company Details */}
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">{companyProfile.legalName}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                    <strong>CIN:</strong> {companyProfile.legal.cin}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                    <strong>GST:</strong> {companyProfile.legal.gst}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Founder:</strong> Aman Kumar Sharma
                  </p>
                </div>
                
                {/* Global Offices */}
                <div className="space-y-6">
                  {/* India HQ */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-orange-100 dark:bg-orange-900 rounded-full p-3 mr-4">
                      <span className="text-lg">🇮🇳</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1 text-gray-800 dark:text-white">India (Headquarters)</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-1">
                        <strong>Gurugram:</strong> Main corporate office<br/>
                        <strong>Noida:</strong> Development center<br/>
                        <strong>Bangalore:</strong> Innovation hub
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">Primary operations</p>
                    </div>
                  </div>
                  
                  {/* Dubai */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-100 dark:bg-green-900 rounded-full p-3 mr-4">
                      <span className="text-lg">🇦🇪</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1 text-gray-800 dark:text-white">Dubai</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-1">
                        Middle East operations<br/>
                        Second major office
                      </p>
                      <p className="text-sm text-green-600 dark:text-green-400">MENA region</p>
                    </div>
                  </div>
                  
                  {/* California */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                      <span className="text-lg">🇺🇸</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1 text-gray-800 dark:text-white">California</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-1">
                        Tech research & development<br/>
                        Innovation hub
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">R&D center</p>
                    </div>
                  </div>
                  
                  {/* Toronto */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-red-100 dark:bg-red-900 rounded-full p-3 mr-4">
                      <span className="text-lg">🇨🇦</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1 text-gray-800 dark:text-white">Toronto</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-1">
                        North American operations<br/>
                        Canada office
                      </p>
                      <p className="text-sm text-red-600 dark:text-red-400">North America</p>
                    </div>
                  </div>
                  
                  {/* Shenzhen */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-yellow-100 dark:bg-yellow-900 rounded-full p-3 mr-4">
                      <span className="text-lg">🇨🇳</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1 text-gray-800 dark:text-white">Shenzhen</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-1">
                        Asia-Pacific center<br/>
                        China operations
                      </p>
                      <p className="text-sm text-yellow-600 dark:text-yellow-400">Asia-Pacific</p>
                    </div>
                  </div>
                </div>
                
                {/* General Contact */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">info@enterprisehero.com</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">24/7 Global Support</span>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-10">
                  <h3 className="text-lg font-medium mb-4 text-gray-800 dark:text-white">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { key: 'linkedin', url: companyProfile.social?.linkedin, bg: 'hover:bg-blue-100 dark:hover:bg-blue-900', color: 'hover:text-blue-600 dark:hover:text-blue-400', path: 'M18.335 18.339H15.67v-4.177c0-0.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h0.003z' },
                      { key: 'instagram', url: companyProfile.social?.instagram, bg: 'hover:bg-pink-100 dark:hover:bg-pink-900', color: 'hover:text-pink-600 dark:hover:text-pink-400', path: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' },
                      { key: 'facebook', url: companyProfile.social?.facebook, bg: 'hover:bg-blue-100 dark:hover:bg-blue-900', color: 'hover:text-blue-600 dark:hover:text-blue-400', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                      { key: 'x', url: companyProfile.social?.x, bg: 'hover:bg-blue-100 dark:hover:bg-blue-900', color: 'hover:text-blue-400 dark:hover:text-blue-300', path: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
                      { key: 'youtube', url: companyProfile.social?.youtube, bg: 'hover:bg-red-100 dark:hover:bg-red-900', color: 'hover:text-red-600 dark:hover:text-red-400', path: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z' },
                    ]
                      .filter((item) => Boolean(item.url))
                      .map((item) => (
                        <a
                          key={item.key}
                          href={item.url as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`bg-gray-200 dark:bg-gray-700 ${item.bg} text-gray-600 dark:text-gray-300 ${item.color} p-3 rounded-full transition-colors`}
                          onClick={() => console.log(`[ContactPage] Social clicked: ${item.key}`)}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d={item.path} />
                          </svg>
                        </a>
                      ))}
                    <a
                      href={`mailto:${companyProfile.contactEmail}`}
                      className="bg-gray-200 dark:bg-gray-700 hover:bg-green-100 dark:hover:bg-green-900 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 p-3 rounded-full transition-colors"
                      onClick={() => console.log("[ContactPage] Email clicked")}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">Get in Touch</h2>
              
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 p-6 rounded-lg"
                >
                  <h3 className="text-lg font-bold mb-2">Thank You!</h3>
                  <p>Your message has been submitted successfully. Our team will get back to you shortly.</p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={form.name.value}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors
                          ${form.name.touched && form.name.error
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-blue-900'
                          }`}
                      />
                      {form.name.touched && form.name.error && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{form.name.error}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={form.email.value}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors
                          ${form.email.touched && form.email.error
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-blue-900'
                          }`}
                      />
                      {form.email.touched && form.email.error && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{form.email.error}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Company & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={form.company.value}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-blue-900"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={form.phone.value}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-blue-900"
                      />
                    </div>
                  </div>
                  
                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      value={form.service.value}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors
                        ${form.service.touched && form.service.error
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                          : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-blue-900'
                        }`}
                    >
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {form.service.touched && form.service.error && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{form.service.error}</p>
                    )}
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message.value}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors
                        ${form.message.touched && form.message.error
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                          : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-blue-900'
                        }`}
                    ></textarea>
                    {form.message.touched && form.message.error && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{form.message.error}</p>
                    )}
                  </div>
                  
                  {/* Error Message */}
                  {submitError && (
                    <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 p-4 rounded-lg">
                      {submitError}
                    </div>
                  )}
                  
                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition duration-300 ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 dark:bg-gray-950 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-300 dark:bg-gray-800 h-96 rounded-xl relative overflow-hidden">
            {/* Simple static map visualization or remove completely if no image available */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800">
               <div className="text-center p-8">
                  <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">Global Presence</h3>
                  <p className="text-gray-600 dark:text-gray-400">Serving clients in 6+ countries with local support.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Enterprise Solutions FAQ</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Common questions about our global enterprise-grade Node.js development services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                How does your global presence benefit enterprise clients?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                With offices across India, Dubai, California, Toronto, and Shenzhen, we provide 24/7 support and development capabilities. 
                Our global team ensures faster delivery, better timezone coverage, and local compliance expertise. 
                Enterprise projects benefit from our distributed talent pool and round-the-clock development cycles.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                What enterprise-grade guarantees do you provide?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We offer SLA-backed support options and define uptime targets based on the agreed architecture, hosting, and operational scope.
                Our solutions include monitoring, automated backups, incident response processes, and security best practices aligned to your compliance requirements (e.g., GDPR where applicable).
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                How do you handle large-scale enterprise projects?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our enterprise methodology includes dedicated project managers, technical architects, and specialized teams 
                across our global offices. We follow enterprise-grade project management practices with regular stakeholder 
                updates, risk management, and scalable architecture planning. Project scope and budgets vary widely; we provide a clear roadmap, milestones, and transparent deliverables after discovery.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                What makes {companyProfile.legalName} legally compliant?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We are legally registered as {companyProfile.legalName} (CIN: {companyProfile.legal.cin}) with GST 
                compliance ({companyProfile.legal.gst}). Founded by Aman Kumar Sharma, we maintain full legal compliance across 
                all jurisdictions where we operate, including data protection laws, intellectual property rights, 
                and international business standards.
              </p>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                Do you provide dedicated support for enterprise teams?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes. We offer dedicated support packages including dedicated account managers, priority technical support, custom SLA agreements, and production-readiness practices for mission-critical systems.
                The exact support model (hours, response times, escalation, and monitoring) is finalized during scoping.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 