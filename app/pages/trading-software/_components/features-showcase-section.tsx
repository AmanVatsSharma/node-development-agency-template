'use client';

/**
 * @fileoverview Features Showcase Section
 * @description 10 key platform features with glassmorphism cards
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Activity,
  BarChart3,
  Bot,
  Shield,
  Smartphone,
  TrendingUp,
  Zap,
  Database,
  Globe,
  Code
} from 'lucide-react';

export function FeaturesShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  console.log('[Features-Showcase] Component rendered, inView:', inView);

  const features = [
    {
      icon: Activity,
      title: 'Real-time Market Data',
      description: 'Live streaming data from NSE, BSE, MCX, Forex with < 50ms latency',
      gradient: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: BarChart3,
      title: 'Advanced Charting',
      description: 'TradingView integration with 100+ technical indicators and drawing tools',
      gradient: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: Bot,
      title: 'Algorithmic Trading',
      description: 'Build, backtest, and deploy trading algorithms with Python & REST APIs',
      gradient: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500/30'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Position limits, stop-loss, margin monitoring, and real-time risk alerts',
      gradient: 'from-red-500 to-orange-500',
      borderColor: 'border-red-500/30'
    },
    {
      icon: TrendingUp,
      title: 'Multi-Asset Trading',
      description: 'Equity, F&O, Commodities, Currency, and Cryptocurrency support',
      gradient: 'from-yellow-500 to-amber-500',
      borderColor: 'border-yellow-500/30'
    },
    {
      icon: Smartphone,
      title: 'Mobile Trading Apps',
      description: 'Native iOS & Android apps with offline order queuing and biometric auth',
      gradient: 'from-indigo-500 to-blue-500',
      borderColor: 'border-indigo-500/30'
    },
    {
      icon: Database,
      title: 'Back-Office Management',
      description: 'Client onboarding, KYC, ledger, reports, and compliance management',
      gradient: 'from-teal-500 to-cyan-500',
      borderColor: 'border-teal-500/30'
    },
    {
      icon: Globe,
      title: 'Portfolio Management',
      description: 'Real-time P&L, holdings, analytics, and tax reports for clients',
      gradient: 'from-rose-500 to-pink-500',
      borderColor: 'border-rose-500/30'
    },
    {
      icon: Zap,
      title: 'Reporting & Analytics',
      description: 'Customizable dashboards, trade journals, and business intelligence tools',
      gradient: 'from-violet-500 to-purple-500',
      borderColor: 'border-violet-500/30'
    },
    {
      icon: Code,
      title: 'API Access',
      description: 'REST & WebSocket APIs for custom integrations and third-party tools',
      gradient: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-500/30'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-[#0A1628] via-[#0d1b2e] to-[#0A1628] relative overflow-hidden"
      id="features"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,255,136,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,215,0,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-[#00FF88]/20 to-[#FFD700]/20 rounded-full mb-5 border border-[#00FF88]/30">
            <span className="font-bold text-[#00FF88] uppercase tracking-wide text-sm">
              Platform Features
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 text-white">
            Everything Your Brokerage Needs,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#FFD700]">
              In One Platform
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive suite of tools designed for modern brokers. From market data to back-office management,
            we've got you covered.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`relative bg-white/5 backdrop-blur-md border-2 ${feature.borderColor} rounded-2xl p-6 h-full hover:bg-white/10 hover:border-opacity-60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-white mb-2 group-hover:text-[#00FF88] transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: '10+', label: 'Core Features' },
            { value: '99.99%', label: 'Uptime SLA' },
            { value: '< 50ms', label: 'Latency' },
            { value: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
              <div className="font-black text-3xl text-[#00FF88] mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 font-semibold">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
