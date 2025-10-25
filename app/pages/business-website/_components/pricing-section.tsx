'use client';

/**
 * Pricing Section Component
 * Clear, transparent pricing with Indian Rupee focus
 * Three main packages: Starter (₹9,999), Professional (₹29,999), Enterprise (₹59,999+)
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
      price: '9,999',
      period: 'One-time payment',
      description: 'Perfect for small businesses and startups looking to establish premium online presence',
      features: [
        '8-12 Page Premium Website',
        'Mobile-First Responsive Design',
        'Advanced Contact Form Integration',
        'Google Maps & Business Integration',
        'Complete SEO Setup & Optimization',
        'Social Media Integration & Links',
        'WhatsApp Business Integration',
        'Google Analytics & Search Console',
        'Professional Logo Design (3 Concepts)',
        'Brand Color Scheme & Typography',
        'Free SSL Certificate & Security',
        'Fast Loading Speed (90+ Score)',
        '12 Months Free Hosting & Support',
        'Basic Content Writing (5 Pages)',
        'Image Optimization & Compression',
        'Social Media Graphics (5 Designs)',
        'Google My Business Setup',
        'Basic Email Marketing Setup'
      ],
      cta: 'Get Started Now'
    },
    {
      name: 'Professional Package',
      price: '29,999',
      period: 'One-time payment',
      description: 'Complete digital solution for growing businesses with advanced features and premium deliverables',
      features: [
        '15-25 Page Dynamic Website',
        'Advanced SEO Optimization & Strategy',
        'Google Analytics 4 & Tag Manager',
        'CRM Integration (Zoho/HubSpot/Salesforce)',
        'Complete Blog System with CMS',
        'Email Marketing Automation Setup',
        'Social Media Integration & Management',
        'Live Chat & Support System',
        'Payment Gateway Integration',
        'Advanced Admin Dashboard',
        'Professional Content Writing (10 Pages)',
        'Custom Graphics & Illustrations (15 Designs)',
        'Video Integration & Optimization',
        'Advanced Security & Backup Setup',
        'Performance Optimization (95+ Score)',
        'A/B Testing Setup',
        'Conversion Rate Optimization',
        'Lead Generation Forms & Landing Pages',
        'Social Media Graphics Package (20 Designs)',
        'Email Template Design (5 Templates)',
        '12 Months Free Hosting & Support',
        'Monthly Performance Reports',
        'Competitor Analysis Report',
        'Local SEO Optimization',
        'Schema Markup Implementation'
      ],
      popular: true,
      cta: 'Most Popular - Get Quote'
    },
    {
      name: 'Enterprise Package',
      price: '59,999',
      period: 'Starting from',
      description: 'Complete digital transformation with unlimited pages, e-commerce, and premium enterprise features',
      features: [
        'Unlimited Pages & Sections',
        'Complete E-Commerce Platform (Shopify/WooCommerce/Custom)',
        'Custom Web Application Development',
        'Advanced CRM & ERP Integration',
        'Multi-language Support (3 Languages)',
        'Advanced Analytics & Custom Reporting',
        'Custom API Development & Integration',
        'Third-party Integrations (50+ Apps)',
        'Advanced Inventory Management System',
        'Complete Order Management System',
        'Multiple Payment Gateway Integration',
        'SMS & Email Notification System',
        'Advanced Security & Compliance',
        'Custom Mobile App (Basic Version)',
        'Professional Content Writing (25 Pages)',
        'Complete Brand Identity Package',
        'Custom Graphics & Illustrations (50+ Designs)',
        'Video Production & Integration (5 Videos)',
        'Advanced SEO & Digital Marketing Setup',
        'Social Media Management (3 Months)',
        'Email Marketing Campaigns (3 Months)',
        'Google Ads Setup & Management (1 Month)',
        'Advanced Analytics Dashboard',
        'A/B Testing & Conversion Optimization',
        'Lead Generation & Nurturing System',
        'Customer Support System Integration',
        'Advanced Backup & Recovery System',
        '12 Months Free Hosting & Support',
        'Dedicated Account Manager',
        'Priority 24/7 Support',
        'Monthly Strategy Sessions',
        'Competitive Analysis & Market Research',
        'Custom Training & Documentation'
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
          {/* Section Header - ENHANCED with urgency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          {/* URGENCY BADGE - Creates scarcity */}
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-full mb-4 sm:mb-5 border-2 border-red-300 dark:border-red-800 text-xs sm:text-sm shadow-lg">
            <span className="font-bold text-red-700 dark:text-red-300 uppercase tracking-wide flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              🔥 Premium Packages - 40% OFF - Only 5 Slots Left!
            </span>
          </div>

          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-5 md:mb-7 text-gray-900 dark:text-white px-2 leading-tight"
          >
            Premium Quality at Affordable Prices
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-snug sm:leading-relaxed mb-5 sm:mb-7 px-2 font-medium">
            One-time payment. <span className="text-green-600 dark:text-green-400 font-bold">No recurring fees.</span> GST included. Own forever. <span className="text-red-600 dark:text-red-400 font-bold">Limited Time: 40% OFF!</span>
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm px-2">
            {[
              { icon: '⚡', text: '14-21 Days Delivery' },
              { icon: '💯', text: 'Money-Back Guarantee' },
              { icon: '🎁', text: 'Free Setup & SSL' },
              { icon: '♾️', text: 'Lifetime Ownership' },
              { icon: '🎨', text: 'Premium Design' },
              { icon: '📈', text: 'SEO Included' },
              { icon: '📱', text: 'Mobile Optimized' },
              { icon: '🔒', text: 'Secure & Fast' }
            ].map((item, i) => (
              <span key={i} className="px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-700 dark:text-blue-300 rounded-full font-semibold whitespace-nowrap border border-blue-200 dark:border-blue-800 shadow-sm">
                {item.icon} {item.text}
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
              className={`relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-9 transition-all duration-300 group cursor-pointer ${
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
                    💰 Save ₹16,000+ (40% OFF!)
                  </div>
                )}
                {plan.name === 'Starter Package' && (
                  <div className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm text-green-600 dark:text-green-400 font-semibold">
                    💰 Save ₹4,000+ (29% OFF!)
                  </div>
                )}
                {plan.name === 'Enterprise Package' && (
                  <div className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm text-green-600 dark:text-green-400 font-semibold">
                    💰 Save ₹30,000+ (33% OFF!)
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

              {/* CTA Button - CONVERSION OPTIMIZED */}
              <Button
                asChild
                variant={plan.popular ? 'default' : 'outline'}
                size="lg"
                className={`w-full text-sm sm:text-base font-bold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl' 
                    : 'hover:bg-indigo-50 dark:hover:bg-indigo-900/20'
                }`}
                onClick={() => console.log(`[Business-Website] Pricing CTA clicked: ${plan.name}`)}
              >
                <a href="#lead-form" className="flex items-center justify-center gap-2">
                  {plan.price === 'Custom' ? '📞 Request Custom Quote' : '🚀 Start My Project'}
                </a>
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
          <div className="inline-block px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl sm:rounded-2xl border border-purple-200 dark:border-purple-800 max-w-4xl">
            <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
              <span className="font-bold">🎉 Premium Packages with Maximum Value!</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-snug sm:leading-relaxed">
              Each package includes design, development, SEO, content writing, graphics, and ongoing support. 
              <span className="font-semibold text-purple-600 dark:text-purple-400"> No hidden costs!</span> 
              Need something custom? We build Shopify, WordPress, Next.js apps & enterprise solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

