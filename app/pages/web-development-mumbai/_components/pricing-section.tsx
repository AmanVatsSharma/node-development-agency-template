'use client';

/**
 * Pricing Section Component - MUMBAI-FOCUSED PRICING
 * Transparent pricing with Mumbai market focus and INR pricing
 * 
 * FEATURES:
 * - Mumbai-specific pricing
 * - INR currency focus
 * - Three main packages
 * - Mobile-responsive design
 * 
 * CONVERSION OPTIMIZATION:
 * - Clear pricing tiers
 * - Value proposition
 * - Urgency indicators
 * - Mobile optimization
 * 
 * @version 1.0.0 - Mumbai-Focused Pricing
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2, IndianRupee, Sparkles, ArrowRight, Phone } from 'lucide-react';

console.log('[Mumbai-Web-Development] PricingSection component loaded');

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  color: string;
  bgColor: string;
}

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[Mumbai-Web-Development] PricingSection mounted');
    return () => console.log('[Mumbai-Web-Development] PricingSection unmounted');
  }, []);

  const plans: PricingPlan[] = [
    {
      name: 'Starter Website',
      price: '15,999',
      period: 'One-time payment',
      description: 'Perfect for small Mumbai businesses and startups looking to establish online presence',
      features: [
        '5-7 Page Website',
        'Mobile Responsive Design',
        'Contact Form Integration',
        'Google Maps Integration',
        'Basic SEO Setup',
        'Social Media Links',
        'WhatsApp Integration',
        '1 Month Free Support',
        'Free SSL Certificate',
        'Fast Loading Speed',
        'Mumbai Local SEO',
        'Hindi/English Support'
      ],
      cta: 'Get Started Now',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      name: 'Professional Website',
      price: '49,999',
      period: 'One-time payment',
      description: 'Complete solution for growing Mumbai businesses with advanced features and integrations',
      features: [
        '10-15 Page Dynamic Website',
        'Advanced SEO Optimization',
        'Google Analytics Integration',
        'CRM Integration (Zoho/HubSpot)',
        'Blog System (CMS)',
        'Email Marketing Setup',
        'Social Media Integration',
        'Live Chat Support',
        'Payment Gateway (if needed)',
        'Admin Dashboard',
        '3 Months Free Support',
        'Performance Optimization',
        'Security & Backup Setup',
        'Mumbai Local Business Listings',
        'Multi-language Support',
        'Advanced Mobile Optimization'
      ],
      popular: true,
      cta: 'Most Popular - Get Quote',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
    },
    {
      name: 'Enterprise Solution',
      price: '95,000',
      period: 'Starting from',
      description: 'Complete e-commerce or custom web application with all advanced features for Mumbai enterprises',
      features: [
        'Unlimited Pages',
        'E-Commerce Platform (Shopify/WooCommerce/Custom)',
        'Custom Web Application',
        'Advanced CRM Integration',
        'Multi-language Support (Hindi, Marathi, English)',
        'Advanced Analytics & Reporting',
        'Custom API Development',
        'Third-party Integrations',
        'Inventory Management',
        'Order Management System',
        'Payment Gateway Integration',
        'SMS & Email Notifications',
        '6 Months Free Support',
        'Dedicated Account Manager',
        'Priority 24/7 Support',
        'Mumbai Market Research',
        'Competitor Analysis',
        'Custom Mobile App (Optional)'
      ],
      cta: 'Contact for Custom Quote',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    }
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
      className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900"
      id="pricing"
      role="region"
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-8 sm:mb-12"
        >
          {/* URGENCY BADGE */}
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-full mb-4 sm:mb-5 border-2 border-red-300 dark:border-red-800 text-xs sm:text-sm shadow-lg">
            <span className="font-bold text-red-700 dark:text-red-300 uppercase tracking-wide flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              🔥 Limited Time Offer - 2 Slots Left!
            </span>
          </div>

          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Transparent, Mumbai-Focused Pricing
          </h2>

          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-snug sm:leading-relaxed mb-5 sm:mb-7">
            One-time payment. <span className="text-green-600 dark:text-green-400 font-bold">No recurring fees.</span> GST included. Own forever.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm px-2">
            {[
              { icon: '⚡', text: '14-21 Days Delivery' },
              { icon: '💯', text: 'Money-Back Guarantee' },
              { icon: '🎁', text: 'Free Setup & SSL' },
              { icon: '♾️', text: 'Lifetime Ownership' },
              { icon: '🇮🇳', text: 'Mumbai Support' }
            ].map((item, i) => (
              <span key={i} className="px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-700 dark:text-blue-300 rounded-full font-semibold whitespace-nowrap border border-blue-200 dark:border-blue-800 shadow-sm">
                {item.icon} {item.text}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 group cursor-pointer ${
                plan.popular
                  ? 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/30 dark:via-purple-900/20 dark:to-pink-900/30 border-4 border-indigo-500 dark:border-indigo-600 shadow-2xl shadow-indigo-500/30 lg:scale-105 lg:-mt-6'
                  : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-2xl hover:scale-105 hover:-translate-y-2'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-5 left-1/2 -translate-x-1/2 px-3 sm:px-6 py-1 sm:py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs sm:text-sm font-bold rounded-full shadow-lg flex items-center gap-1 sm:gap-2">
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                  MOST POPULAR
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-snug">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-start justify-center">
                    <span className="text-gray-600 dark:text-gray-400 text-2xl sm:text-3xl mt-1 sm:mt-2">
                      <IndianRupee className="h-6 w-6 sm:h-8 sm:w-8 inline" />
                    </span>
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {plan.period}
                  </div>
                </div>

                {plan.popular && (
                  <div className="mt-3 text-sm text-green-600 dark:text-green-400 font-semibold">
                    💰 Save ₹30,000+
                  </div>
                )}
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-tight">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                asChild
                variant={plan.popular ? 'default' : 'outline'}
                size="lg"
                className={`w-full text-sm sm:text-base font-bold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl' 
                    : 'hover:bg-indigo-50 dark:hover:bg-indigo-900/20'
                }`}
                onClick={() => console.log(`[Mumbai-Web-Development] Pricing CTA clicked: ${plan.name}`)}
              >
                <a href="#lead-form" className="flex items-center justify-center gap-2">
                  {plan.price === 'Custom' ? '📞 Request Custom Quote' : '🚀 Start My Project'}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial="hidden"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12 text-center px-2"
        >
          <div className="inline-block px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl sm:rounded-2xl border border-purple-200 dark:border-purple-800 max-w-3xl">
            <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base md:text-lg mb-2">
              <span className="font-bold">Need Something Custom for Your Mumbai Business?</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-snug sm:leading-relaxed mb-4">
              We build Shopify, WordPress, Next.js apps & custom solutions. Contact for personalized quote!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+919963730111"
                className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
                onClick={() => console.log('[Mumbai-Web-Development] Custom Quote CTA - Call clicked')}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Mumbai Expert
              </a>
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center px-4 py-2 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-300"
                onClick={() => console.log('[Mumbai-Web-Development] Custom Quote CTA - Get Quote clicked')}
              >
                Get Custom Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}