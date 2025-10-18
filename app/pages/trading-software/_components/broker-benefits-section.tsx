'use client';

/**
 * @fileoverview Broker Benefits Section
 * @description Why brokers choose our platform - key selling points
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Palette, 
  DollarSign, 
  Headphones, 
  Scale, 
  TrendingUp, 
  Settings,
  Award,
  Rocket
} from 'lucide-react';

export function BrokerBenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  console.log('[Broker-Benefits] Component rendered');

  const benefits = [
    {
      icon: Palette,
      title: 'White-Label Solution',
      description: 'Complete branding freedom - your logo, colors, domain, and brand identity',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: DollarSign,
      title: 'Flexible Revenue Model',
      description: 'Choose between revenue sharing, fixed pricing, or hybrid models',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: '24/7 technical support with dedicated account manager for your brokerage',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Scale,
      title: 'SEBI Compliant',
      description: 'Fully compliant with SEBI regulations, exchange norms, and audit-ready',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Infrastructure',
      description: 'Grow from 100 to 100K+ users without performance degradation',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Settings,
      title: 'Full Customization',
      description: 'Customize features, workflows, and UI to match your business needs',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Powering 50+ brokerages across India with 99.99% uptime',
      gradient: 'from-yellow-500 to-amber-500'
    },
    {
      icon: Rocket,
      title: 'Quick Launch',
      description: 'Go live in 2-4 weeks with complete training and onboarding support',
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-[#0A1628] via-[#0d1b2e] to-[#0A1628]"
      id="benefits"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#00FF88]/20 rounded-full mb-5 border border-[#FFD700]/30">
            <span className="font-bold text-[#FFD700] uppercase tracking-wide text-sm">
              Broker Benefits
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 text-white">
            Why Top Brokers{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#00FF88]">
              Choose Us
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Everything you need to launch, grow, and scale your brokerage business
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08 }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-2xl p-6 h-full hover:border-white/30 hover:bg-white/10 transition-all hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-lg font-black text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>

                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 blur-xl transition-opacity -z-10`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
