'use client';

/**
 * Pricing Section Component
 * Displays three-tier pricing with clear CTAs
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Check, Star, Zap, Crown } from 'lucide-react';

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const packages = [
    {
      name: 'Starter',
      price: '₹6,999',
      icon: Zap,
      description: 'Perfect for small websites',
      popular: false,
      features: [
        '1-page deep crawl (homepage)',
        'PDF report (20 pages)',
        'Top 10 technical + on-page fixes',
        '30-min strategy call',
        'Email support (7 days)'
      ],
      cta: 'Get Started',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Professional',
      price: '₹19,999',
      icon: Star,
      description: 'Most recommended for businesses',
      popular: true,
      features: [
        'Up to 25 pages crawl',
        'Technical audit (Core Web Vitals, mobile, canonical)',
        'On-page + content gap analysis',
        'Backlink overview (spam score + top refs)',
        '60-min strategy call',
        '90-day priority email support',
        'Implementation roadmap (30-day plan)'
      ],
      cta: 'Most Popular',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Enterprise',
      price: '₹49,999',
      icon: Crown,
      description: 'Complete SEO transformation',
      popular: false,
      features: [
        'Up to 100 pages + competitor gap analysis',
        'In-depth backlink audit & disavow suggestions',
        'Keyword strategy + content plan (10 posts)',
        '2-hr strategy workshop',
        '3-month follow-up review',
        'Priority support',
        'Optional monthly retainer for implementation'
      ],
      cta: 'Go Enterprise',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-950"
      id="pricing"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-4 border border-green-200 dark:border-green-800">
            <span className="text-sm font-bold text-green-700 dark:text-green-300 uppercase tracking-wide">
              Transparent Pricing
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Hire SEO Audit Expert Pricing & Packages
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All packages include detailed reports and actionable recommendations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      ⭐ MOST RECOMMENDED
                    </div>
                  </div>
                )}

                <Card className={`h-full ${pkg.popular ? 'border-2 border-green-500 dark:border-green-600 shadow-2xl scale-105' : 'border border-gray-200 dark:border-gray-800'}`}>
                  <CardHeader className={`text-center pb-8 bg-gradient-to-br ${pkg.popular ? 'from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950' : 'from-gray-50 to-white dark:from-gray-900 dark:to-gray-800'}`}>
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {pkg.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {pkg.description}
                    </CardDescription>
                    
                    {/* Price */}
                    <div className="mb-2">
                      <span className="text-5xl font-extrabold text-gray-900 dark:text-white">
                        {pkg.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      One-time payment
                    </p>
                  </CardHeader>

                  <CardContent className="pt-6">
                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      size="lg"
                      className={`w-full font-bold ${pkg.popular 
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700' 
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'}`}
                      onClick={() => {
                        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {pkg.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Limited Availability Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-sm font-bold text-red-700 dark:text-red-300">
              ⚡ Only 10 Professional audits available this month at ₹19,999
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
