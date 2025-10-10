'use client';

/**
 * @fileoverview Why Live Market Data Section
 * @description Explains the importance and benefits of real-time data
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Clock, 
  TrendingUp, 
  Shield, 
  Zap,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

export function WhyLiveDataSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Millisecond-Level Accuracy',
      description: 'Get tick-by-tick data with <1ms latency. Every millisecond counts in algorithmic trading.',
      stat: '<1ms',
      color: 'from-[#00FF88] to-[#00CC70]'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Real-Time Updates',
      description: 'Live WebSocket streaming ensures you never miss a market movement. 1000+ updates per second.',
      stat: '1000+/s',
      color: 'from-[#FFD700] to-[#FFA500]'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: '99.99% Uptime SLA',
      description: 'Enterprise-grade infrastructure with redundant systems. Your trading never stops.',
      stat: '99.99%',
      color: 'from-[#00FF88] to-[#00CC70]'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Complete Market Coverage',
      description: 'NSE, BSE, MCX — all major Indian exchanges. 5000+ instruments at your fingertips.',
      stat: '5000+',
      color: 'from-[#FFD700] to-[#FFA500]'
    }
  ];

  const comparison = [
    { feature: 'Data Latency', ours: '<1ms', delayed: '15-20 min', manual: 'Hours' },
    { feature: 'Update Frequency', ours: 'Real-time', delayed: '5-15 min', manual: 'Manual' },
    { feature: 'Accuracy', ours: '99.99%', delayed: '95%', manual: '80%' },
    { feature: 'WebSocket Support', ours: true, delayed: false, manual: false },
    { feature: 'Historical Data', ours: true, delayed: 'Limited', manual: false },
    { feature: 'API Access', ours: true, delayed: 'Limited', manual: false }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black relative overflow-hidden"
      id="why-live-data"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00FF88]/10 rounded-full mb-4 border border-[#00FF88]/30">
            <AlertCircle className="h-4 w-4 text-[#00FF88]" />
            <span className="text-[#00FF88] font-bold text-sm">WHY REAL-TIME MATTERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
            Every Millisecond = <span className="text-[#00FF88]">Money</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            In algorithmic trading, delayed data means missed opportunities. 
            Get the competitive edge with ultra-fast live market data.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-[#00FF88]/50 transition-all duration-300 h-full shadow-lg hover:shadow-2xl hover:shadow-[#00FF88]/20">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.color} text-white mb-4`}>
                  {benefit.icon}
                </div>

                {/* Stat */}
                <div className="text-3xl font-black text-[#00FF88] mb-2">
                  {benefit.stat}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-center mb-8 text-gray-900 dark:text-white">
            Live Data vs Delayed vs Manual
          </h3>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#0B1E39] to-[#1a2f4f] text-white">
                    <th className="px-6 py-4 text-left font-bold">Feature</th>
                    <th className="px-6 py-4 text-center font-bold">
                      <div className="flex items-center justify-center gap-2">
                        <Zap className="h-5 w-5 text-[#00FF88]" />
                        Our Live API
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-white/70">Delayed Data</th>
                    <th className="px-6 py-4 text-center font-bold text-white/70">Manual Entry</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr 
                      key={index}
                      className={`border-t border-gray-200 dark:border-gray-700 ${
                        index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900/50' : 'bg-white dark:bg-gray-800'
                      }`}
                    >
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.ours === 'boolean' ? (
                          row.ours ? (
                            <CheckCircle2 className="h-6 w-6 text-[#00FF88] mx-auto" />
                          ) : (
                            <span className="text-gray-400">—</span>
                          )
                        ) : (
                          <span className="font-bold text-[#00FF88]">{row.ours}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-400">
                        {typeof row.delayed === 'boolean' ? (
                          row.delayed ? (
                            <CheckCircle2 className="h-6 w-6 text-gray-400 mx-auto" />
                          ) : (
                            <span className="text-gray-400">✗</span>
                          )
                        ) : (
                          row.delayed
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-400">
                        {typeof row.manual === 'boolean' ? (
                          row.manual ? (
                            <CheckCircle2 className="h-6 w-6 text-gray-400 mx-auto" />
                          ) : (
                            <span className="text-gray-400">✗</span>
                          )
                        ) : (
                          row.manual
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Market-Data-API] WhyLiveDataSection loaded');
