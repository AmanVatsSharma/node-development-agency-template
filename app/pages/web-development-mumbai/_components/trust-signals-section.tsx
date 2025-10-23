'use client';

/**
 * Trust Signals Section Component - MUMBAI-FOCUSED
 * Builds credibility with Mumbai client logos, stats, and social proof
 * 
 * FEATURES:
 * - Mumbai client logos and testimonials
 * - Key statistics and achievements
 * - Social proof indicators
 * - Mobile-responsive design
 * 
 * CONVERSION OPTIMIZATION:
 * - Instant credibility building
 * - Mumbai-specific social proof
 * - Trust indicators
 * - Mobile optimization
 * 
 * @version 1.0.0 - Mumbai-Focused Trust Signals
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Users, Award, Clock, CheckCircle } from 'lucide-react';

console.log('[Mumbai-Web-Development] TrustSignalsSection component loaded');

export function TrustSignalsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    console.log('[Mumbai-Web-Development] TrustSignalsSection mounted');
    return () => console.log('[Mumbai-Web-Development] TrustSignalsSection unmounted');
  }, []);

  const stats = [
    {
      number: '200+',
      label: 'Mumbai Businesses Served',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      number: '4.9/5',
      label: 'Average Rating',
      icon: Star,
      color: 'text-yellow-600'
    },
    {
      number: '14-21',
      label: 'Days Delivery',
      icon: Clock,
      color: 'text-green-600'
    },
    {
      number: '100%',
      label: 'Client Satisfaction',
      icon: Award,
      color: 'text-purple-600'
    }
  ];

  const mumbaiClients = [
    { name: 'Bandra Restaurant', logo: '🍽️', industry: 'Food & Beverage' },
    { name: 'Andheri Clinic', logo: '🏥', industry: 'Healthcare' },
    { name: 'Powai Tech Startup', logo: '🚀', industry: 'Technology' },
    { name: 'Thane Real Estate', logo: '🏢', industry: 'Real Estate' },
    { name: 'Navi Mumbai E-commerce', logo: '🛒', industry: 'E-commerce' },
    { name: 'Malad Fitness Center', logo: '💪', industry: 'Fitness' }
  ];

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
      className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900/50"
      id="trust-signals"
      role="region"
      aria-labelledby="trust-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-8 sm:mb-12"
        >
          <h2
            id="trust-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Trusted by Mumbai's Leading Businesses
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join 200+ successful Mumbai businesses who chose us for their web development needs
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 mb-3 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mumbai Clients */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="mb-8 sm:mb-12"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white text-center mb-6">
            Mumbai Clients We've Helped
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {mumbaiClients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-2xl mb-2">{client.logo}</div>
                <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white mb-1">
                  {client.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {client.industry}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <CheckCircle className="h-8 w-8 text-green-600 mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Mumbai-Based Team
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Local understanding of Mumbai market and business culture
              </p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-8 w-8 text-green-600 mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Quick Response
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Same-day response to all Mumbai client inquiries
              </p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-8 w-8 text-green-600 mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Free Consultation
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Complimentary strategy session for all Mumbai businesses
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}