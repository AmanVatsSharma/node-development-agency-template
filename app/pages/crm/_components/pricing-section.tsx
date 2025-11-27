'use client';

/**
 * @fileoverview Pricing Section - EnterpriseHero CRM
 * @description Two pricing cards with self-hosted and enterprise editions
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { 
  Check, 
  Star, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

console.log('[CRM] PricingSection component loaded');

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const plans = [
    {
      name: 'Self-Hosted Edition',
      price: '₹24,999',
      period: 'one-time setup',
      description: 'Perfect for growing businesses ready to own their CRM',
      features: [
        'Own Domain Deployment',
        'Unlimited Users',
        '2 Custom Modules',
        'Basic Automation',
        'Email Support',
        'Standard Training',
        'Self-managed Hosting'
      ],
      cta: 'Get Started',
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      name: 'Enterprise Edition',
      price: '₹49,999',
      period: 'setup + ₹4,999/mo',
      description: 'For enterprises demanding full power and flexibility',
      features: [
        'Private Cloud Deployment',
        'Unlimited Users',
        'Unlimited Customization',
        'Advanced Automation',
        'Full ERP Integration',
        'Priority 24/7 Support',
        'Dedicated Account Manager',
        'Custom Development',
        'White-Glove Migration'
      ],
      cta: 'Request Enterprise Demo',
      color: 'from-purple-500 via-pink-500 to-orange-500',
      popular: true
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      id="pricing"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#002F9E]/20 rounded-full border border-[#FFD700]/40 mb-6">
              <Sparkles className="h-4 w-4 text-[#002F9E] dark:text-[#FFD700]" />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Transparent Pricing</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Hire CRM Developer <span className="bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#00C897] bg-clip-text text-transparent">Pricing & Packages</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Simple, transparent pricing with no hidden costs. Own your CRM from day one.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full shadow-xl">
                      <Star className="h-4 w-4 text-white fill-white" />
                      <span className="text-sm font-black text-white">MOST POPULAR</span>
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`relative h-full p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-2 ${plan.popular ? 'border-[#FFD700] shadow-2xl shadow-[#FFD700]/20' : 'border-gray-200 dark:border-gray-700 shadow-xl'} ${plan.popular ? 'lg:scale-105' : ''} transition-all`}>
                  
                  {/* Plan Name */}
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-2`}>
                      {plan.price}
                    </div>
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                      {plan.period}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    asChild
                    size="lg"
                    className={`w-full text-base font-bold py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#002F9E] text-white hover:from-[#0041E2] hover:via-[#FFD700] hover:to-[#0041E2]'
                        : 'bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200 text-white dark:text-gray-900'
                    }`}
                  >
                    <a href="/crm/demo" className="flex items-center justify-center gap-2">
                      {plan.cta}
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                </div>

                {/* Glow Effect for Popular */}
                {plan.popular && (
                  <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-r ${plan.color} opacity-20 blur-2xl -z-10`} />
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
              <p className="text-base font-bold text-gray-800 dark:text-gray-200">
                📦 Integrate more BharatERP modules anytime — HRM, Accounts, Inventory
              </p>
              <Button
                asChild
                variant="link"
                className="text-[#002F9E] dark:text-[#FFD700] font-bold mt-2"
              >
                <a href="/crm/demo">Get Your Custom Quote →</a>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
