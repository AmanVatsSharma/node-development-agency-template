'use client';

/**
 * @fileoverview Case Studies Section
 * @description Client success stories and results
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Zap, Award } from 'lucide-react';

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const caseStudies = [
    {
      company: 'AlgoTrade Pro',
      industry: 'Algo Trading Platform',
      logo: '🤖',
      challenge: 'Needed ultra-low latency data for high-frequency trading algorithms',
      solution: 'Integrated our WebSocket API with <1ms latency for real-time tick data',
      results: [
        { metric: '300%', label: 'Trade Volume Increase' },
        { metric: '<0.8ms', label: 'Avg. Latency' },
        { metric: '99.99%', label: 'Uptime Achieved' }
      ],
      testimonial: 'The API latency is phenomenal. Our HFT strategies now execute 3x faster!',
      author: 'Rahul Sharma, CTO'
    },
    {
      company: 'WealthTrack',
      industry: 'Portfolio Management App',
      logo: '📊',
      challenge: 'Required real-time portfolio valuation for 10,000+ users',
      solution: 'Used our REST API for bulk quotes and historical data analysis',
      results: [
        { metric: '50K+', label: 'Active Users' },
        { metric: '10M+', label: 'API Calls/Day' },
        { metric: '4.8★', label: 'App Rating' }
      ],
      testimonial: 'Reliable data feed that scales with our growth. Excellent support team!',
      author: 'Priya Mehta, Founder'
    },
    {
      company: 'TradeSmart',
      industry: 'Trading Terminal',
      logo: '💹',
      challenge: 'Needed complete options chain data with Greeks for 200+ instruments',
      solution: 'Integrated options API with real-time Greeks and IV calculations',
      results: [
        { metric: '5000+', label: 'Daily Traders' },
        { metric: '200+', label: 'F&O Instruments' },
        { metric: '₹50Cr+', label: 'Daily Volume' }
      ],
      testimonial: 'Complete options data with accurate Greeks. Game changer for our users!',
      author: 'Amit Patel, Product Head'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black relative overflow-hidden"
      id="case-studies"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00FF88]/10 to-[#FFD700]/10 rounded-full mb-4 border border-[#00FF88]/30">
            <Award className="h-4 w-4 text-[#00FF88]" />
            <span className="text-[#00FF88] font-bold text-sm">SUCCESS STORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#FFD700]">Real Results</span> from Real Clients
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how leading trading platforms use our API to power their applications
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-[#00FF88]/50 transition-all shadow-lg hover:shadow-2xl"
            >
              {/* Logo & Company */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{study.logo}</div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white">{study.company}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{study.industry}</p>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-4">
                <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Challenge</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Solution</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{study.solution}</p>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {study.results.map((result, rIndex) => (
                  <div key={rIndex} className="text-center p-3 bg-gradient-to-br from-[#00FF88]/10 to-[#FFD700]/10 rounded-xl">
                    <div className="text-xl font-black text-[#00FF88]">{result.metric}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{result.label}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="text-sm italic text-gray-700 dark:text-gray-300 mb-2">"{study.testimonial}"</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">— {study.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

console.log('[Market-Data-API] CaseStudiesSection loaded');
