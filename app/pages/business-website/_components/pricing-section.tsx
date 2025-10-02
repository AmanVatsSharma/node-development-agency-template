'use client';

/**
 * Pricing Section Component
 * Clear, transparent pricing with Indian Rupee focus
 * Three main packages: Starter (₹13,999), Professional (₹45,999), Enterprise (₹90,000+)
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2, IndianRupee, Sparkles } from 'lucide-react';

console.log('[Business-Website] PricingSection component loaded');

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[Business-Website] PricingSection mounted');
    return () => console.log('[Business-Website] PricingSection unmounted');
  }, []);

  const plans: PricingPlan[] = [
    {
      name: 'Starter Package',
      price: '13,999',
      period: 'One-time payment',
      description: 'Perfect for small businesses and startups looking to establish online presence',
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
        'Fast Loading Speed'
      ],
      cta: 'Get Started Now'
    },
    {
      name: 'Professional Package',
      price: '45,999',
      period: 'One-time payment',
      description: 'Complete solution for growing businesses with SEO, analytics, and CRM integration',
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
        'Security & Backup Setup'
      ],
      popular: true,
      cta: 'Most Popular - Get Quote'
    },
    {
      name: 'Enterprise Package',
      price: '90,000',
      period: 'Starting from',
      description: 'Complete e-commerce or custom web application with all advanced features',
      features: [
        'Unlimited Pages',
        'E-Commerce Platform (Shopify/WooCommerce/Custom)',
        'Custom Web Application',
        'Advanced CRM Integration',
        'Multi-language Support',
        'Advanced Analytics & Reporting',
        'Custom API Development',
        'Third-party Integrations',
        'Inventory Management',
        'Order Management System',
        'Payment Gateway Integration',
        'SMS & Email Notifications',
        '6 Months Free Support',
        'Dedicated Account Manager',
        'Priority 24/7 Support'
      ],
      cta: 'Contact for Custom Quote'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-14 md:py-20 lg:py-28 bg-white dark:bg-gray-900"
      id="pricing"
      role="region"
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-3 sm:mb-4 border border-green-200 dark:border-green-800 text-xs sm:text-sm">
            <span className="font-bold text-green-700 dark:text-green-300 uppercase tracking-wide flex items-center gap-1 sm:gap-2">
              <IndianRupee className="h-3 w-3 sm:h-4 sm:w-4" />
              No Hidden Costs
            </span>
          </div>

          <h2
            id="pricing-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-gray-900 dark:text-white px-2"
          >
            Affordable Packages
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-snug sm:leading-relaxed mb-4 sm:mb-6 px-2">
            One-time payment. No recurring fees. GST included. Own forever.
          </p>

          <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm px-2">
            {['✓ 14-21 Days', '✓ Money-Back', '✓ Free Setup', '✓ Lifetime'].map((item, i) => (
              <span key={i} className="px-2.5 sm:px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full font-medium whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards - Stack on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-2xl sm:rounded-3xl border-2 p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 transition-all duration-300 ${
                plan.popular
                  ? 'border-indigo-500 shadow-2xl shadow-indigo-500/20 lg:scale-105 lg:-mt-4'
                  : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-5 left-1/2 -translate-x-1/2 px-3 sm:px-6 py-1 sm:py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs sm:text-sm font-bold rounded-full shadow-lg flex items-center gap-1 sm:gap-2">
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                  MOST POPULAR
                </div>
              )}

              {/* Plan Header - Compact */}
              <div className="text-center mb-4 sm:mb-6 md:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 md:mb-6 leading-snug">
                  {plan.description}
                </p>

                {/* Price - Optimized for mobile */}
                <div className="mb-2">
                  <div className="flex items-start justify-center">
                    <span className="text-gray-600 dark:text-gray-400 text-xl sm:text-2xl mt-1 sm:mt-2">₹</span>
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-2">
                    {plan.period}
                  </div>
                </div>

                {plan.popular && (
                  <div className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm text-green-600 dark:text-green-400 font-semibold">
                    💰 Save ₹20,000+
                  </div>
                )}
              </div>

              {/* Features List - Compact */}
              <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-6 md:mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-tight">
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
                className="w-full text-sm sm:text-base"
                onClick={() => console.log(`[Business-Website] Pricing CTA clicked: ${plan.name}`)}
              >
                <a href="#lead-form">{plan.cta}</a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12 md:mt-16 text-center px-2"
        >
          <div className="inline-block px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl sm:rounded-2xl border border-purple-200 dark:border-purple-800 max-w-3xl">
            <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
              <span className="font-bold">Need Something Custom?</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-snug sm:leading-relaxed">
              We build Shopify, WordPress, Next.js apps & custom solutions. Contact for personalized quote!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

