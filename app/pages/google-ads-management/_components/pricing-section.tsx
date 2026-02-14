'use client';

/**
 * Pricing Section Component
 * Transparent 3-Tier Pricing for Google Ads Management
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

console.log('[Google-Ads] PricingSection component loaded');

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  highlight?: string;
  gradient?: string;
}

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[Google-Ads] PricingSection mounted');
    return () => console.log('[Google-Ads] PricingSection unmounted');
  }, []);

  const plans: PricingPlan[] = [
    {
      name: 'Starter',
      price: '25,000',
      period: '/month',
      description: 'Small Businesses',
      features: [
        '1–2 Campaigns',
        'Weekly Optimization',
        'Basic Reports',
        'Email Support',
        'Google Analytics Setup',
        'Conversion Tracking'
      ],
      highlight: 'Perfect for businesses starting with Google Ads',
      gradient: 'from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900'
    },
    {
      name: 'Professional',
      price: '35,000',
      period: '/month',
      description: 'Growth Stage',
      features: [
        'Multi-Campaigns (3-5)',
        'Landing Page Audit',
        'Conversion Tracking',
        'Bi-Weekly Reports',
        'Phone Support',
        'A/B Testing',
        'Remarketing Campaigns',
        'Priority Optimization'
      ],
      popular: true,
      highlight: 'Most popular for scaling businesses',
      gradient: 'from-purple-50 to-pink-100 dark:from-purple-950 dark:to-pink-900'
    },
    {
      name: 'Enterprise',
      price: '50,000',
      period: '+/month',
      description: 'Scaling Brands',
      features: [
        'Unlimited Campaigns',
        'Full Funnel Strategy',
        'A/B Testing',
        'Dedicated Manager',
        'Weekly Review Calls',
        'Custom Dashboard',
        'Landing Page Optimization',
        '24/7 Support',
        'Multi-Platform Integration'
      ],
      highlight: 'Complete Google Ads management solution',
      gradient: 'from-yellow-50 to-orange-100 dark:from-yellow-950 dark:to-orange-900'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900"
      id="pricing"
      role="region"
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header - MOBILE OPTIMIZED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-4 sm:mb-5 border border-green-200 dark:border-green-800 text-sm sm:text-base">
            <span className="font-bold text-green-700 dark:text-green-300 uppercase tracking-wide">
              Plans & Pricing
            </span>
          </div>

          <h2
            id="pricing-heading"
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
          >
            Hire Google Ads Expert Pricing & Packages
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-5">
            Choose the plan that fits your business goals — all prices in INR
          </p>

          <div className="flex flex-wrap justify-center gap-2 text-[10px] sm:text-xs font-bold">
            {[
              '✅ No Setup Fees',
              '✅ Cancel Anytime',
              '✅ Data Transparency'
            ].map((item, i) => (
              <span key={i} className="px-3 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 rounded-full border-2 border-blue-200 dark:border-blue-700 shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards - MOBILE OPTIMIZED */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/30 dark:via-purple-900/20 dark:to-pink-900/30 border-[3px] border-indigo-500 dark:border-indigo-600 shadow-2xl shadow-indigo-500/40 scale-[1.02] lg:scale-105'
                  : 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-2xl active:scale-95'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs sm:text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  MOST POPULAR
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-2">
                  <div className="flex items-start justify-center">
                    <span className="text-2xl text-gray-600 dark:text-gray-400 mt-2">₹</span>
                    <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-lg text-gray-500 dark:text-gray-400 mt-2">{plan.period}</span>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-semibold">
                  {plan.highlight}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
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
                className={`w-full text-sm sm:text-base font-bold ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 hover:from-blue-700 hover:via-blue-800 hover:to-yellow-600 shadow-lg' 
                    : ''
                }`}
                onClick={() => console.log(`[Google-Ads] Pricing CTA clicked: ${plan.name}`)}
              >
                <a href="#lead-form" className="flex items-center justify-center gap-2">
                  Book Your Free Audit Call
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Add-on Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-6 sm:p-8 border border-yellow-200 dark:border-yellow-800 max-w-3xl mx-auto"
        >
          <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
            Add-on: Landing Page Optimization
          </p>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
            ₹10,000 – ₹30,000 (One-time)
            <br className="hidden sm:block" />
            Boost your conversion rates with our expert landing page optimization service.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
