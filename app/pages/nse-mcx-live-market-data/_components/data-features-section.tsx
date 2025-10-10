'use client';

/**
 * @fileoverview Data Features Section
 * @description Showcases all data types and capabilities offered
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Activity,
  BarChart3,
  TrendingUp,
  Database,
  GitBranch,
  Layers,
  LineChart,
  PieChart
} from 'lucide-react';

export function DataFeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <Activity className="h-8 w-8" />,
      title: 'Tick-by-Tick Data',
      description: 'Every single price change captured in real-time. Perfect for high-frequency trading algorithms.',
      highlights: ['Last Trade Price', 'Volume', 'Timestamp', 'Exchange Info'],
      color: 'from-[#00FF88] to-[#00CC70]',
      badge: 'Real-time'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Options Chain Data',
      description: 'Complete options data with Greeks, IV, OI, and bid-ask spreads for all strikes and expiries.',
      highlights: ['Delta, Gamma, Vega', 'Implied Volatility', 'Open Interest', 'Bid-Ask Spread'],
      color: 'from-[#FFD700] to-[#FFA500]',
      badge: 'Live'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'F&O Data Streams',
      description: 'Futures & Options data for index and stock derivatives with real-time premium calculations.',
      highlights: ['Index Futures', 'Stock Futures', 'Index Options', 'Stock Options'],
      color: 'from-[#00FF88] to-[#00CC70]',
      badge: 'Streaming'
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: 'Market Depth (L2/L3)',
      description: 'Level 2 and Level 3 order book data. See the complete market depth with all bid-ask levels.',
      highlights: ['Top 5 Bids/Asks', 'Order Quantities', 'Price Levels', 'Market Maker Info'],
      color: 'from-[#FFD700] to-[#FFA500]',
      badge: 'Advanced'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Historical Data',
      description: 'Access years of historical data for backtesting strategies. Minute, hourly, daily candles.',
      highlights: ['OHLCV Data', '1-min to Daily', '10+ Years History', 'Corporate Actions'],
      color: 'from-[#00FF88] to-[#00CC70]',
      badge: 'Archive'
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: 'Index Data',
      description: 'Real-time index values for Nifty, Bank Nifty, Sensex, and all sectoral indices.',
      highlights: ['Nifty 50/100/500', 'Bank Nifty', 'Sensex', 'Sectoral Indices'],
      color: 'from-[#FFD700] to-[#FFA500]',
      badge: 'Live'
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: 'Commodity Data',
      description: 'MCX live data for Gold, Silver, Crude Oil, Natural Gas, and all major commodities.',
      highlights: ['Gold/Silver', 'Crude/Gas', 'Base Metals', 'Agri Commodities'],
      color: 'from-[#00FF88] to-[#00CC70]',
      badge: 'MCX'
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: 'Corporate Actions',
      description: 'Dividends, splits, bonuses, rights issues — all corporate actions data automatically adjusted.',
      highlights: ['Dividends', 'Stock Splits', 'Bonus Issues', 'Rights'],
      color: 'from-[#FFD700] to-[#FFA500]',
      badge: 'Auto-adjusted'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-18 md:py-24 lg:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900 relative overflow-hidden"
      id="data-features"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF88] rounded-full filter blur-[200px] opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00FF88]/10 to-[#FFD700]/10 rounded-full mb-4 border border-[#00FF88]/30">
            <Database className="h-4 w-4 text-[#00FF88]" />
            <span className="text-[#00FF88] font-bold text-sm">COMPREHENSIVE DATA COVERAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
            Everything You Need, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#FFD700]">One API</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From tick-by-tick data to historical archives — access all market data types 
            through a single, unified API.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-[#00FF88]/50 transition-all duration-300 h-full shadow-lg hover:shadow-2xl hover:shadow-[#00FF88]/10 hover:-translate-y-1">
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white`}>
                    {feature.icon}
                  </div>
                  <div className="text-xs font-bold text-[#00FF88] bg-[#00FF88]/10 px-2 py-1 rounded-full border border-[#00FF88]/30">
                    {feature.badge}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {feature.highlights.map((highlight, hIndex) => (
                    <div 
                      key={hIndex}
                      className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#00FF88]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00FF88]/0 to-[#FFD700]/0 group-hover:from-[#00FF88]/5 group-hover:to-[#FFD700]/5 transition-all duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00FF88] to-[#00CC70] text-[#0B1E39] font-black rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#00FF88]/50 transition-all duration-300 hover:scale-105"
          >
            <Database className="h-5 w-5" />
            Access All Data Types Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Market-Data-API] DataFeaturesSection loaded');
