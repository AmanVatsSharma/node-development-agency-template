'use client';

/**
 * Pricing Section - AI Voice Agents
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const plans = [
    {
      name: 'Starter',
      setup: '29,999',
      monthly: '10,000',
      bestFor: 'Small business',
      features: [
        '1 Voice Agent',
        'Single Language',
        'Basic Call Flow',
        'Up to 500 calls/month',
        'Email support',
        'Call recordings',
        'Basic analytics'
      ]
    },
    {
      name: 'Professional',
      setup: '59,999',
      monthly: '15,000',
      bestFor: 'Multi-department',
      popular: true,
      features: [
        '2–3 Agents',
        'Multi-Language',
        'CRM Integration',
        'Up to 2,000 calls/month',
        'Analytics Dashboard',
        'Custom voice training',
        'WhatsApp notifications',
        'Priority support'
      ]
    },
    {
      name: 'Enterprise',
      setup: '99,999',
      monthly: '25,000',
      bestFor: 'High volume centers',
      features: [
        '10k+ Calls/month',
        'Custom TTS Voice',
        'API Access',
        'Dedicated Support',
        'Advanced analytics',
        'Custom integrations',
        'SLA guarantee',
        'Dedicated account manager'
      ]
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-[#0B1E39] to-[#1a2f4f]"
      id="pricing"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-5 py-2 bg-[#FF7A00]/20 backdrop-blur-md rounded-full mb-5 border border-[#FF7A00]/50">
            <span className="font-bold text-[#FF7A00] uppercase tracking-wide text-sm">
              Plans & Pricing
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 text-white">
            Choose Your Plan
          </h2>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            All prices in INR. GST applicable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-[#FF7A00] to-[#ff9933] border-4 border-white shadow-2xl shadow-[#FF7A00]/60 scale-105'
                  : 'bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-[#FF7A00] hover:shadow-2xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-white text-[#0B1E39] text-sm font-black rounded-full shadow-lg flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-2xl font-black mb-2 ${plan.popular ? 'text-white' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-white/90' : 'text-white/70'}`}>
                  Best For: {plan.bestFor}
                </p>

                <div className="mb-4">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className={`text-xl ${plan.popular ? 'text-white' : 'text-white/80'}`}>₹</span>
                    <span className={`text-5xl font-extrabold ${plan.popular ? 'text-white' : 'text-white'}`}>
                      {plan.setup}
                    </span>
                  </div>
                  <div className={`text-sm ${plan.popular ? 'text-white/90' : 'text-white/70'}`}>
                    Setup Fee
                  </div>
                </div>

                <div className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-[#FF7A00]'}`}>
                  + ₹{plan.monthly}/month
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className={`h-5 w-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-white' : 'text-[#FF7A00]'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-white' : 'text-white/90'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={`w-full text-base font-bold ${
                  plan.popular 
                    ? 'bg-white text-[#0B1E39] hover:bg-gray-100' 
                    : 'bg-gradient-to-r from-[#FF7A00] to-[#ff9933] hover:from-[#ff9933] hover:to-[#FF7A00]'
                }`}
              >
                <a href="#lead-form" className="flex items-center justify-center gap-2">
                  Book Free Demo Call
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <p className="text-white font-bold text-lg mb-2">
              💬 Need a Custom Solution?
            </p>
            <p className="text-white/80">
              Contact us for enterprise pricing and custom requirements
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
