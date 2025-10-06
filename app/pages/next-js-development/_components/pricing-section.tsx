'use client';

/**
 * Pricing Section
 * Transparent pricing with INR-focused packages
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

console.log('[Next-JS-Dev] PricingSection component loaded');

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  highlight?: string;
}

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[Next-JS-Dev] PricingSection mounted');
    return () => console.log('[Next-JS-Dev] PricingSection unmounted');
  }, []);

  const plans: PricingPlan[] = [
    {
      name: 'Starter',
      price: '14,999',
      period: 'One-time',
      description: 'Personal Portfolio / Startup MVP',
      features: [
        '3 pages responsive design',
        'Next.js + Tailwind CSS',
        'Contact form integration',
        'SEO setup & meta tags',
        'Vercel deployment',
        'Mobile-first design',
        '7-day delivery',
        '14-day bug warranty'
      ],
      highlight: 'Perfect for individuals & small startups'
    },
    {
      name: 'Professional',
      price: '49,999',
      period: 'One-time',
      description: 'SMEs / Service Business',
      features: [
        '6-8 pages with custom design',
        'Next.js App Router',
        'Tailwind CSS + shadcn/ui',
        'Headless CMS integration',
        'Contact forms + Email',
        'Blog system',
        'Analytics setup',
        'Core Web Vitals optimized',
        'API routes',
        '14-21 day delivery',
        '30-day bug warranty'
      ],
      popular: true,
      highlight: 'Most popular for growing businesses'
    },
    {
      name: 'Enterprise',
      price: '1,00,000',
      period: 'Starting from',
      description: 'SaaS / Corporate',
      features: [
        'Unlimited pages',
        'Custom design system',
        'Full-stack with NestJS API',
        'Database design (PostgreSQL)',
        'Authentication & authorization',
        'Admin dashboard',
        'Payment integration',
        'Real-time features',
        'CI/CD pipeline',
        'AWS/Vercel hosting setup',
        'Documentation',
        '30-day bug warranty',
        'Priority support'
      ],
      highlight: 'Complete enterprise solution'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
      id="pricing"
      role="region"
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-4 sm:mb-5 border border-green-200 dark:border-green-800 text-sm sm:text-base">
            <span className="font-bold text-green-700 dark:text-green-300 uppercase tracking-wide">
              Transparent Pricing
            </span>
          </div>

          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            Packages & Pricing
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 mb-4">
            Choose the perfect plan for your project — all prices in INR
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
            {[
              '✅ No Hidden Costs',
              '✅ GST Included',
              '✅ Custom Quotations Available'
            ].map((item, i) => (
              <span key={i} className="px-3 sm:px-4 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-700 dark:text-blue-300 rounded-full font-semibold border border-blue-200 dark:border-blue-800">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-10 sm:mb-14">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/30 dark:via-purple-900/20 dark:to-pink-900/30 border-4 border-indigo-500 dark:border-indigo-600 shadow-2xl shadow-indigo-500/30 lg:scale-105'
                  : 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-2xl hover:scale-105'
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
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {plan.period}
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
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
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg' 
                    : ''
                }`}
                onClick={() => console.log(`[Next-JS-Dev] Pricing CTA clicked: ${plan.name}`)}
              >
                <a href="#lead-form" className="flex items-center justify-center gap-2">
                  Request Detailed Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 sm:p-8 border border-purple-200 dark:border-purple-800 max-w-3xl mx-auto"
        >
          <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
            Need a Custom Solution?
          </p>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
            We build custom Next.js applications tailored to your unique requirements.
            <br className="hidden sm:block" />
            Contact us for a personalized quote!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
