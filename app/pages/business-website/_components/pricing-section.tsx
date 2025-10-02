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
      className="py-20 md:py-28 bg-white dark:bg-gray-900"
      id="pricing"
      role="region"
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-6 border border-green-200 dark:border-green-800">
            <span className="text-sm font-bold text-green-700 dark:text-green-300 uppercase tracking-wide flex items-center gap-2">
              <IndianRupee className="h-4 w-4" />
              Transparent Pricing - No Hidden Costs
            </span>
          </div>

          <h2
            id="pricing-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white"
          >
            Affordable Packages for Every Business
          </h2>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
            One-time payment. No recurring fees. GST included. Own your website forever.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {['✓ 14-21 Days Delivery', '✓ Money-Back Guarantee', '✓ Free Hosting Setup Help', '✓ Lifetime Ownership'].map((item, i) => (
              <span key={i} className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-3xl border-2 p-8 bg-white dark:bg-gray-800 transition-all duration-300 ${
                plan.popular
                  ? 'border-indigo-500 shadow-2xl shadow-indigo-500/20 lg:scale-105 lg:-mt-4'
                  : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  MOST POPULAR
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-2">
                  <div className="flex items-start justify-center">
                    <span className="text-gray-600 dark:text-gray-400 text-2xl mt-2">₹</span>
                    <span className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {plan.period}
                  </div>
                </div>

                {plan.popular && (
                  <div className="mt-4 text-sm text-green-600 dark:text-green-400 font-semibold">
                    💰 Save ₹20,000+ compared to monthly subscriptions
                  </div>
                )}
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
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
                className="w-full"
                onClick={() => console.log(`[Business-Website] Pricing CTA clicked: ${plan.name}`)}
              >
                <a href="#lead-form">{plan.cta}</a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200 dark:border-purple-800 max-w-3xl">
            <p className="text-gray-800 dark:text-gray-200 text-lg mb-2">
              <span className="font-bold">Need Something Custom?</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              We also build Shopify stores, WordPress sites, Next.js applications, and custom solutions.
              Contact us for a personalized quote tailored to your exact requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

