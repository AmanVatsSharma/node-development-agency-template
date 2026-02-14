'use client';

/**
 * @fileoverview Pricing Section - 3 Tier Pricing Plans
 * @description Transparent INR pricing with feature comparison
 * @version 1.0.0
 */

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Zap, Crown, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

console.log('[Shopify-Product-Page] PricingSection component loaded');

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter Customization',
    price: '15,000',
    idealFor: 'Small stores',
    delivery: '5 days',
    popular: false,
    icon: Zap,
    color: 'from-blue-500 to-indigo-600',
    features: [
      'Layout tweaks + custom sections',
      'Basic product gallery enhancements',
      'Simple variant selector',
      'Mobile-responsive design',
      'Basic add-to-cart styling',
      '7 days support',
      'Source code included',
    ],
  },
  {
    id: 'pro',
    name: 'Conversion Pro',
    price: '35,000',
    idealFor: 'Growth-stage brands',
    delivery: '10 days',
    popular: true,
    icon: Crown,
    color: 'from-[#FFB400] to-orange-500',
    features: [
      'Everything in Starter, plus:',
      'Dynamic logic + upsells + analytics',
      'Smart bundle & cross-sell widgets',
      'Real-time stock indicators',
      'Interactive product configurator',
      'GA4 + Meta Pixel integration',
      '14 days support',
      'Performance optimization',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Experience Suite',
    price: '60,000 – 75,000',
    idealFor: 'High-end D2C brands',
    delivery: '15 days',
    popular: false,
    icon: Sparkles,
    color: 'from-purple-500 to-pink-600',
    features: [
      'Everything in Pro, plus:',
      'Full custom UX + AI recommendations',
      'A/B testing setup & optimization',
      'Custom subscription widget',
      'Advanced analytics dashboard',
      'Heatmaps & user behavior tracking',
      '30 days priority support',
      'Dedicated project manager',
      'Post-launch optimization',
    ],
  },
];

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
      role="region"
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gray-900 dark:text-white"
          >
            Hire Shopify Customization Expert <span className="text-[#FFB400]">Pricing & Packages</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transparent pricing designed for Indian businesses. No hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards - Desktop Grid / Mobile Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredPlan(plan.id)}
              onHoverEnd={() => setHoveredPlan(null)}
              className={`relative ${plan.popular ? 'md:scale-105 md:-mt-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-[#FFB400] to-orange-500 text-white px-6 py-2 rounded-full text-sm font-black shadow-lg">
                    ⭐ MOST POPULAR
                  </div>
                </div>
              )}

              <div
                className={`relative bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 ${
                  plan.popular
                    ? 'border-[#FFB400] shadow-2xl shadow-[#FFB400]/20'
                    : 'border-gray-200 dark:border-gray-700 shadow-xl'
                } transition-all duration-300 ${
                  hoveredPlan === plan.id ? 'scale-105 shadow-2xl' : ''
                } h-full flex flex-col`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>

                {/* Ideal For */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="font-bold">Ideal for:</span> {plan.idealFor}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-gray-900 dark:text-white">
                      ₹{plan.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Delivery: <span className="font-bold">{plan.delivery}</span>
                  </p>
                </div>

                {/* Features List */}
                <div className="flex-1 mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'text-[#FFB400]' : 'text-green-600'
                        }`} />
                        <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  size="lg"
                  className={`w-full py-6 h-auto text-base font-black rounded-xl transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#FFB400] to-orange-500 hover:from-orange-500 hover:to-[#FFB400] text-white shadow-xl hover:shadow-2xl'
                      : 'bg-[#0A2540] hover:bg-[#0A2540]/90 text-white'
                  }`}
                  onClick={() => console.log(`[Shopify-Product-Page] ${plan.name} selected`)}
                >
                  <a href="#lead-form" className="flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 px-6 py-4 rounded-2xl border-2 border-green-200 dark:border-green-800">
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
              🛡️ <span className="font-black">100% Satisfaction Guarantee</span> — If you're not happy with the results, we'll make it right
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Shopify-Product-Page] PricingSection exported');
