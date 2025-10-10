'use client';

/**
 * @fileoverview Supported Instruments Section
 * @description Shows all supported exchanges and instruments
 */

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { BarChart3, TrendingUp, Coins, DollarSign, Building2 } from 'lucide-react';

export function SupportedInstrumentsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeExchange, setActiveExchange] = useState<'nse' | 'bse' | 'mcx' | 'currency'>('nse');

  const exchanges = [
    {
      id: 'nse' as const,
      name: 'NSE',
      fullName: 'National Stock Exchange',
      icon: <BarChart3 className="h-6 w-6" />,
      color: 'from-[#00FF88] to-[#00CC70]',
      instruments: [
        { name: 'Nifty 50 Stocks', count: '50', description: 'Blue-chip stocks' },
        { name: 'Nifty 100', count: '100', description: 'Top 100 companies' },
        { name: 'Nifty 500', count: '500', description: 'Broad market' },
        { name: 'Index Futures', count: '15+', description: 'All major indices' },
        { name: 'Stock Futures', count: '200+', description: 'F&O stocks' },
        { name: 'Index Options', count: '10+', description: 'Nifty, Bank Nifty' },
        { name: 'Stock Options', count: '200+', description: 'All strikes' },
        { name: 'All NSE Stocks', count: '2000+', description: 'Complete coverage' }
      ]
    },
    {
      id: 'bse' as const,
      name: 'BSE',
      fullName: 'Bombay Stock Exchange',
      icon: <Building2 className="h-6 w-6" />,
      color: 'from-[#FFD700] to-[#FFA500]',
      instruments: [
        { name: 'Sensex 30', count: '30', description: 'Top 30 stocks' },
        { name: 'BSE 100', count: '100', description: 'Large cap stocks' },
        { name: 'BSE 500', count: '500', description: 'Broad index' },
        { name: 'BSE Midcap', count: '150+', description: 'Mid cap stocks' },
        { name: 'BSE Smallcap', count: '250+', description: 'Small cap stocks' },
        { name: 'Sensex Futures', count: '5+', description: 'Index derivatives' },
        { name: 'All BSE Stocks', count: '5000+', description: 'Complete coverage' }
      ]
    },
    {
      id: 'mcx' as const,
      name: 'MCX',
      fullName: 'Multi Commodity Exchange',
      icon: <Coins className="h-6 w-6" />,
      color: 'from-[#00FF88] to-[#00CC70]',
      instruments: [
        { name: 'Gold', count: 'Multiple expiries', description: 'Spot & Futures' },
        { name: 'Silver', count: 'Multiple expiries', description: 'Spot & Futures' },
        { name: 'Crude Oil', count: 'WTI & Brent', description: 'Energy futures' },
        { name: 'Natural Gas', count: 'Multiple expiries', description: 'Energy commodity' },
        { name: 'Base Metals', count: '6+', description: 'Copper, Zinc, etc.' },
        { name: 'Agri Commodities', count: '15+', description: 'Cotton, Mentha, etc.' },
        { name: 'All MCX Contracts', count: '100+', description: 'Complete coverage' }
      ]
    },
    {
      id: 'currency' as const,
      name: 'Currency',
      fullName: 'Currency Derivatives',
      icon: <DollarSign className="h-6 w-6" />,
      color: 'from-[#FFD700] to-[#FFA500]',
      instruments: [
        { name: 'USD-INR', count: 'All expiries', description: 'Dollar futures' },
        { name: 'EUR-INR', count: 'All expiries', description: 'Euro futures' },
        { name: 'GBP-INR', count: 'All expiries', description: 'Pound futures' },
        { name: 'JPY-INR', count: 'All expiries', description: 'Yen futures' },
        { name: 'Currency Options', count: '10+', description: 'All strikes' },
        { name: 'Cross Currency', count: '5+', description: 'EUR-USD, etc.' }
      ]
    }
  ];

  const stats = [
    { value: '5000+', label: 'Total Instruments' },
    { value: '4', label: 'Major Exchanges' },
    { value: '100%', label: 'F&O Coverage' },
    { value: 'Real-time', label: 'Data Updates' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-br from-[#0B1E39] via-[#0a1929] to-[#050b14] relative overflow-hidden"
      id="instruments"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #00FF88 1px, transparent 1px), linear-gradient(to bottom, #00FF88 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00FF88]/10 backdrop-blur-md rounded-full mb-4 border border-[#00FF88]/30">
            <TrendingUp className="h-4 w-4 text-[#00FF88]" />
            <span className="text-[#00FF88] font-bold text-sm">COMPLETE MARKET COVERAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#FFD700]">5000+ Instruments</span> Supported
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Complete coverage of all Indian exchanges — NSE, BSE, MCX, and Currency derivatives.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center hover:border-[#00FF88]/50 transition-all"
            >
              <div className="text-3xl font-black text-[#00FF88] mb-2">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Exchange Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {exchanges.map((exchange) => (
              <button
                key={exchange.id}
                onClick={() => setActiveExchange(exchange.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeExchange === exchange.id
                    ? `bg-gradient-to-r ${exchange.color} text-white shadow-2xl scale-105`
                    : 'bg-white/5 backdrop-blur-md text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {exchange.icon}
                <span>{exchange.name}</span>
              </button>
            ))}
          </div>

          {/* Instruments Grid */}
          <AnimatePresence mode="wait">
            {exchanges.map((exchange) => 
              activeExchange === exchange.id && (
                <motion.div
                  key={exchange.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Exchange Header */}
                  <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 mb-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${exchange.color}`}>
                        {exchange.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white">{exchange.fullName}</h3>
                        <p className="text-white/70">Complete real-time coverage</p>
                      </div>
                    </div>
                  </div>

                  {/* Instruments Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {exchange.instruments.map((instrument, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-[#00FF88]/50 hover:bg-white/10 transition-all"
                      >
                        <div className="text-[#00FF88] font-mono text-sm mb-1">{instrument.count}</div>
                        <div className="text-white font-bold mb-1">{instrument.name}</div>
                        <div className="text-white/60 text-xs">{instrument.description}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </motion.div>

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
            <BarChart3 className="h-5 w-5" />
            Access All Instruments Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Market-Data-API] SupportedInstrumentsSection loaded');
