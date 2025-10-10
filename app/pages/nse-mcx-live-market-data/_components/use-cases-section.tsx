'use client';

/**
 * @fileoverview Use Cases Section
 * @description Shows different use cases for the market data API
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bot, Laptop, BarChart, TrendingUp, Users, Smartphone } from 'lucide-react';

export function UseCasesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const useCases = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'Algorithmic Trading',
      description: 'Build high-frequency trading algorithms with ultra-low latency data feeds.',
      examples: ['HFT Systems', 'Arbitrage Bots', 'Market Making', 'Auto Trading'],
      color: 'from-[#00FF88] to-[#00CC70]',
      stats: '<1ms latency'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Trading Apps',
      description: 'Power your mobile and web trading platforms with real-time market data.',
      examples: ['Mobile Trading', 'Web Platforms', 'Stock Screeners', 'Portfolio Apps'],
      color: 'from-[#FFD700] to-[#FFA500]',
      stats: '1000+ apps'
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: 'Analytics & Research',
      description: 'Perform deep market analysis with historical and real-time data.',
      examples: ['Backtesting', 'Research Tools', 'Market Analysis', 'Strategy Testing'],
      color: 'from-[#00FF88] to-[#00CC70]',
      stats: '10+ years data'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Portfolio Management',
      description: 'Real-time portfolio tracking and rebalancing with live market prices.',
      examples: ['Portfolio Tracker', 'Risk Management', 'Asset Allocation', 'Performance'],
      color: 'from-[#FFD700] to-[#FFA500]',
      stats: 'Real-time NAV'
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: 'Trading Terminals',
      description: 'Build professional trading terminals with advanced charting and analysis.',
      examples: ['Desktop Apps', 'Web Terminals', 'Chart Analysis', 'Order Management'],
      color: 'from-[#00FF88] to-[#00CC70]',
      stats: 'Pro features'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Advisory Services',
      description: 'Provide data-driven investment advice and recommendations to clients.',
      examples: ['Robo Advisory', 'Stock Tips', 'Recommendations', 'Client Reports'],
      color: 'from-[#FFD700] to-[#FFA500]',
      stats: '1000+ advisors'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900 relative overflow-hidden"
      id="use-cases"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #00FF88 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00FF88]/10 to-[#FFD700]/10 rounded-full mb-4 border border-[#00FF88]/30">
            <Laptop className="h-4 w-4 text-[#00FF88]" />
            <span className="text-[#00FF88] font-bold text-sm">BUILT FOR EVERY USE CASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
            Power <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#FFD700]">Every Trading Need</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From algo trading to portfolio management — our API powers all types of financial applications.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-[#00FF88]/50 transition-all duration-300 h-full shadow-lg hover:shadow-2xl hover:shadow-[#00FF88]/20 hover:-translate-y-1">
                {/* Icon & Stats */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${useCase.color} text-white`}>
                    {useCase.icon}
                  </div>
                  <div className="text-xs font-bold text-[#00FF88] bg-[#00FF88]/10 px-3 py-1.5 rounded-full border border-[#00FF88]/30">
                    {useCase.stats}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Examples */}
                <div className="grid grid-cols-2 gap-2">
                  {useCase.examples.map((example, eIndex) => (
                    <div 
                      key={eIndex}
                      className="text-xs px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 text-center font-semibold"
                    >
                      {example}
                    </div>
                  ))}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00FF88]/0 to-[#FFD700]/0 group-hover:from-[#00FF88]/5 group-hover:to-[#FFD700]/5 transition-all duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00FF88] to-[#00CC70] text-[#0B1E39] font-black rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#00FF88]/50 transition-all duration-300 hover:scale-105"
          >
            <Bot className="h-5 w-5" />
            Build Your Application Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Market-Data-API] UseCasesSection loaded');
