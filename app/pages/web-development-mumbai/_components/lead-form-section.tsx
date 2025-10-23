'use client';

/**
 * Lead Form Section Component - FREE CONSULTATION BOOKING
 * Captures leads with free consultation booking form
 * 
 * @version 1.0.0 - Lead Capture Form
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

console.log('[Mumbai-Web-Development] LeadFormSection component loaded');

export function LeadFormSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });

  useEffect(() => {
    console.log('[Mumbai-Web-Development] LeadFormSection mounted');
    return () => console.log('[Mumbai-Web-Development] LeadFormSection unmounted');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[Mumbai-Web-Development] Lead form submitted:', formData);
    // Handle form submission
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900"
      id="lead-form"
      role="region"
      aria-labelledby="lead-form-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-8 sm:mb-12"
        >
          <h2
            id="lead-form-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Get Your Free Website Quote
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to transform your Mumbai business online? Get a free consultation and custom quote today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeInUp}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  value={formData.business}
                  onChange={(e) => setFormData({...formData, business: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your business name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Tell us about your project requirements"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3"
              >
                Get Free Quote Now
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3">
                {[
                  'Mumbai-based team with local market knowledge',
                  '200+ successful projects delivered',
                  '14-21 days average delivery time',
                  'Free consultation and project planning',
                  '24/7 support and maintenance',
                  'Money-back guarantee'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-indigo-600 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">+91 99637 30111</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Call us anytime</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-indigo-600 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">hello@mumbaiwebdev.com</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Email us your requirements</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-indigo-600 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Mumbai, Maharashtra</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Serving all Mumbai areas</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-indigo-600 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Mon - Sat: 9 AM - 7 PM</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Sunday: 10 AM - 4 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}