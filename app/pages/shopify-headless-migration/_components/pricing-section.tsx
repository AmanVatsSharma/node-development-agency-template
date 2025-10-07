'use client';

/**
 * Pricing Section - 3-Tier Pricing Plans
 * Transparent INR pricing for different client tiers
 * 
 * PLANS:
 * 1. Starter Headless - ₹1L - ₹1.5L
 * 2. Pro Next.js Storefront - ₹2.5L - ₹3L
 * 3. Enterprise Performance Suite - ₹4L - ₹5L+
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

console.log('[Shopify-Headless] PricingSection component loaded');

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Pricing plans data
  const plans = [
    {
      name: 'Starter Headless',
      icon: <Star className="h-6 w-6" />,
      price: '₹1L – ₹1.5L',
      delivery: '2 weeks',
      ideal: 'Small brands',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      popular: false,
      features: [
        'Hydrogen frontend setup',
        'Basic API integration',
        'Product & collection pages',
        'Basic cart functionality',
        'Mobile-responsive design',
        '14 days support'
      ]
    },
    {
      name: 'Pro Next.js Storefront',
      icon: <Zap className="h-6 w-6" />,
      price: '₹2.5L – ₹3L',
      delivery: '4 weeks',
      ideal: 'D2C growth brands',
      color: 'from-[#00E0B8] to-emerald-500',
      bgColor: 'from-[#00E0B8]/10 to-emerald-500/10 dark:from-[#00E0B8]/20 dark:to-emerald-500/20',
      popular: true,
      features: [
        'Full Next.js 14 setup',
        'Custom UX design',
        'ISR + SSR optimization',
        'Headless CMS integration',
        'Advanced state management',
        'Analytics dashboard',
        'SEO optimization',
        '30 days support'
      ]
    },
    {
      name: 'Enterprise Performance Suite',
      icon: <Crown className="h-6 w-6" />,
      price: '₹4L – ₹5L+',
      delivery: '6 – 8 weeks',
      ideal: 'Global brands',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      popular: false,
      features: [
        'Multi-region build',
        'Edge deployment (Cloudflare)',
        'Team training & handover',
        'Custom analytics dashboard',
        'A/B testing setup',
        'Performance monitoring',
        'Multi-currency support',
        'Priority support (90 days)',
        'White-label options'
      ]
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handlePlanClick = (planName: string) => {
    console.log(`[Shopify-Headless] Pricing plan clicked: ${planName}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'plan_selected', {
        plan_name: planName,
        page_path: '/pages/shopify-headless-migration'
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-[#0F172A] relative overflow-hidden"
      id="pricing"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
              💰 Pricing <span className="bg-gradient-to-r from-[#00E0B8] to-cyan-400 bg-clip-text text-transparent">Plans</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Transparent, value-driven pricing for every business size
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + (index * 0.15) }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-[#00E0B8] to-emerald-500 text-[#0F172A] text-xs font-black px-4 py-2 rounded-full shadow-lg">
                      ⭐ MOST POPULAR
                    </div>
                  </div>
                )}

                <div className={`h-full bg-gradient-to-br ${plan.bgColor} backdrop-blur-xl border-2 ${plan.popular ? 'border-[#00E0B8] shadow-[0_0_40px_rgba(0,224,184,0.3)]' : 'border-gray-200 dark:border-white/10'} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all`}>
                  
                  {/* Icon & Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} text-white shadow-lg`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Ideal for</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{plan.ideal}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
                      {plan.price}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded font-semibold">
                        {plan.delivery}
                      </span>
                      <span>delivery</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-6" />

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                        <Check className={`h-5 w-5 ${plan.popular ? 'text-[#00E0B8]' : 'text-gray-400'} flex-shrink-0 mt-0.5`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full py-6 text-base font-bold rounded-xl transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#00E0B8] to-emerald-500 hover:from-[#00d4ad] hover:to-emerald-600 text-[#0F172A] shadow-lg hover:shadow-xl'
                        : 'bg-gray-900 dark:bg-white text-white dark:text-[#0F172A] hover:bg-gray-800 dark:hover:bg-gray-100'
                    }`}
                    onClick={() => {
                      handlePlanClick(plan.name);
                      window.location.hash = '#contact';
                    }}
                  >
                    Get Started →
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              💡 All prices are estimates. Final quote provided after consultation.
              <br />
              <span className="text-[#00E0B8] font-semibold">Custom enterprise packages available</span> for larger projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
