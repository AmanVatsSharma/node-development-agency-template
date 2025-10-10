'use client';

/**
 * @fileoverview Live Data Showcase Section
 * @description Interactive demo of live data streaming
 */

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Activity,
  TrendingUp,
  TrendingDown,
  Zap,
  BarChart3
} from 'lucide-react';

export function LiveShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const [activeTab, setActiveTab] = useState<'equity' | 'options' | 'futures'>('equity');
  const [liveData, setLiveData] = useState({
    equity: [
      { symbol: 'RELIANCE', ltp: 2456.75, change: 18.25, volume: 2345678, high: 2478.90, low: 2445.20 },
      { symbol: 'TCS', ltp: 3589.40, change: -12.30, volume: 1234567, high: 3605.80, low: 3580.10 },
      { symbol: 'INFY', ltp: 1456.90, change: 23.45, volume: 3456789, high: 1465.30, low: 1442.50 },
      { symbol: 'HDFC BANK', ltp: 1623.45, change: -8.90, volume: 4567890, high: 1635.70, low: 1618.30 },
    ],
    options: [
      { strike: '19600 CE', ltp: 234.50, change: 45.20, iv: '18.5%', oi: 1234567 },
      { strike: '19700 CE', ltp: 156.30, change: -12.40, iv: '19.2%', oi: 2345678 },
      { strike: '19600 PE', ltp: 178.90, change: -23.50, iv: '17.8%', oi: 3456789 },
      { strike: '19500 PE', ltp: 256.75, change: 34.60, iv: '18.9%', oi: 4567890 },
    ],
    futures: [
      { symbol: 'NIFTY FUT', ltp: 19674.25, change: 125.30, oi: 12345678, volume: 23456789 },
      { symbol: 'BANKNIFTY FUT', ltp: 44235.80, change: -89.50, oi: 23456789, volume: 34567890 },
      { symbol: 'RELIANCE FUT', ltp: 2460.50, change: 22.75, oi: 3456789, volume: 4567890 },
    ]
  });

  // Simulate live updates
  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setLiveData(prev => ({
        equity: prev.equity.map(stock => ({
          ...stock,
          ltp: stock.ltp + (Math.random() - 0.5) * 5,
          change: stock.change + (Math.random() - 0.5) * 2,
          volume: stock.volume + Math.floor(Math.random() * 10000)
        })),
        options: prev.options.map(option => ({
          ...option,
          ltp: option.ltp + (Math.random() - 0.5) * 10,
          change: option.change + (Math.random() - 0.5) * 5
        })),
        futures: prev.futures.map(future => ({
          ...future,
          ltp: future.ltp + (Math.random() - 0.5) * 20,
          change: future.change + (Math.random() - 0.5) * 10
        }))
      }));
    }, 1500);

    return () => clearInterval(interval);
  }, [inView]);

  const tabs = [
    { id: 'equity' as const, label: 'Equity', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'options' as const, label: 'Options', icon: <Activity className="h-4 w-4" /> },
    { id: 'futures' as const, label: 'Futures', icon: <TrendingUp className="h-4 w-4" /> }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-br from-[#0B1E39] via-[#0a1929] to-[#050b14] relative overflow-hidden"
      id="live-showcase"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(to right, #00FF88 1px, transparent 1px), linear-gradient(to bottom, #00FF88 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#00FF88] rounded-full filter blur-[150px] opacity-10 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FFD700] rounded-full filter blur-[150px] opacity-10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00FF88]/10 backdrop-blur-md rounded-full mb-4 border border-[#00FF88]/30">
            <Zap className="h-4 w-4 text-[#00FF88]" />
            <span className="text-[#00FF88] font-bold text-sm">LIVE DATA DEMO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white">
            See It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#FFD700]">Live in Action</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Real-time data streaming directly to your application. 
            Watch prices update every second.
          </p>
        </motion.div>

        {/* Live Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Dashboard Container */}
          <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#00FF88]/30 overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-[#00FF88]/20 to-[#FFD700]/20 backdrop-blur-xl border-b border-[#00FF88]/30 p-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <Activity className="h-5 w-5 text-[#00FF88] animate-pulse" />
                  <span className="text-white font-bold">Live Market Data Stream</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="flex items-center gap-1 px-3 py-1 bg-[#00FF88]/10 rounded-full border border-[#00FF88]/30">
                    <div className="h-2 w-2 bg-[#00FF88] rounded-full animate-pulse" />
                    <span className="text-[#00FF88] font-mono">STREAMING</span>
                  </div>
                  <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white/70">
                    Latency: <span className="text-[#FFD700] font-bold">&lt;1ms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-white/10 bg-black/20">
              <div className="flex gap-2 p-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-[#00FF88] to-[#00CC70] text-[#0B1E39]'
                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Data Table */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {activeTab === 'equity' && (
                  <motion.div
                    key="equity"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-3"
                  >
                    {/* Table Header */}
                    <div className="grid grid-cols-6 gap-4 px-4 py-2 bg-white/5 rounded-lg text-xs font-bold text-white/70">
                      <div>SYMBOL</div>
                      <div className="text-right">LTP</div>
                      <div className="text-right">CHANGE</div>
                      <div className="text-right">HIGH</div>
                      <div className="text-right">LOW</div>
                      <div className="text-right">VOLUME</div>
                    </div>
                    {/* Table Rows */}
                    {liveData.equity.map((stock, index) => (
                      <motion.div
                        key={stock.symbol}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid grid-cols-6 gap-4 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all"
                      >
                        <div className="font-bold text-white">{stock.symbol}</div>
                        <div className="text-right text-[#FFD700] font-mono">₹{stock.ltp.toFixed(2)}</div>
                        <div className={`text-right font-bold flex items-center justify-end gap-1 ${stock.change >= 0 ? 'text-[#00FF88]' : 'text-[#FF3366]'}`}>
                          {stock.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                          {stock.change.toFixed(2)}
                        </div>
                        <div className="text-right text-white/70">₹{stock.high.toFixed(2)}</div>
                        <div className="text-right text-white/70">₹{stock.low.toFixed(2)}</div>
                        <div className="text-right text-white/70 text-sm">{stock.volume.toLocaleString()}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'options' && (
                  <motion.div
                    key="options"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-3"
                  >
                    {/* Table Header */}
                    <div className="grid grid-cols-5 gap-4 px-4 py-2 bg-white/5 rounded-lg text-xs font-bold text-white/70">
                      <div>STRIKE</div>
                      <div className="text-right">LTP</div>
                      <div className="text-right">CHANGE</div>
                      <div className="text-right">IV</div>
                      <div className="text-right">OI</div>
                    </div>
                    {/* Table Rows */}
                    {liveData.options.map((option, index) => (
                      <motion.div
                        key={option.strike}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid grid-cols-5 gap-4 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all"
                      >
                        <div className="font-bold text-white">{option.strike}</div>
                        <div className="text-right text-[#FFD700] font-mono">₹{option.ltp.toFixed(2)}</div>
                        <div className={`text-right font-bold ${option.change >= 0 ? 'text-[#00FF88]' : 'text-[#FF3366]'}`}>
                          {option.change.toFixed(2)}
                        </div>
                        <div className="text-right text-white/70">{option.iv}</div>
                        <div className="text-right text-white/70 text-sm">{option.oi.toLocaleString()}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'futures' && (
                  <motion.div
                    key="futures"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-3"
                  >
                    {/* Table Header */}
                    <div className="grid grid-cols-5 gap-4 px-4 py-2 bg-white/5 rounded-lg text-xs font-bold text-white/70">
                      <div>SYMBOL</div>
                      <div className="text-right">LTP</div>
                      <div className="text-right">CHANGE</div>
                      <div className="text-right">OI</div>
                      <div className="text-right">VOLUME</div>
                    </div>
                    {/* Table Rows */}
                    {liveData.futures.map((future, index) => (
                      <motion.div
                        key={future.symbol}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid grid-cols-5 gap-4 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all"
                      >
                        <div className="font-bold text-white">{future.symbol}</div>
                        <div className="text-right text-[#FFD700] font-mono">₹{future.ltp.toFixed(2)}</div>
                        <div className={`text-right font-bold flex items-center justify-end gap-1 ${future.change >= 0 ? 'text-[#00FF88]' : 'text-[#FF3366]'}`}>
                          {future.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                          {future.change.toFixed(2)}
                        </div>
                        <div className="text-right text-white/70 text-sm">{future.oi.toLocaleString()}</div>
                        <div className="text-right text-white/70 text-sm">{future.volume.toLocaleString()}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00FF88] to-[#00CC70] text-[#0B1E39] font-black rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#00FF88]/50 transition-all duration-300 hover:scale-105"
            >
              <Zap className="h-5 w-5" />
              Get Instant API Access
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Market-Data-API] LiveShowcaseSection loaded');
