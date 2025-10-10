'use client';

/**
 * @fileoverview Hero Section - NSE/MCX Live Market Data Landing Page
 * @description Futuristic animated hero with live stock ticker and data visualization
 * @version 1.0.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { HeroHighlight, Highlight } from '@/app/components/ui/hero-highlight';
import { 
  TrendingUp, 
  TrendingDown,
  Zap, 
  Shield,
  Clock,
  Activity,
  BarChart3,
  LineChart,
  Sparkles
} from 'lucide-react';

interface StockData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const [marketStatus] = useState<'OPEN' | 'CLOSED'>('OPEN');
  
  const [tickerStocks, setTickerStocks] = useState<StockData[]>([
    { symbol: 'NIFTY 50', price: 19674.25, change: 125.30, changePercent: 0.64 },
    { symbol: 'BANKNIFTY', price: 44235.80, change: -89.50, changePercent: -0.20 },
    { symbol: 'SENSEX', price: 65953.48, change: 234.12, changePercent: 0.36 },
    { symbol: 'RELIANCE', price: 2456.75, change: 18.25, changePercent: 0.75 },
    { symbol: 'TCS', price: 3589.40, change: -12.30, changePercent: -0.34 },
    { symbol: 'INFY', price: 1456.90, change: 23.45, changePercent: 1.64 },
    { symbol: 'GOLD', price: 61234.00, change: 456.00, changePercent: 0.75 },
    { symbol: 'SILVER', price: 74523.50, change: -234.50, changePercent: -0.31 },
  ]);

  const [candleData] = useState([
    { height: 60, color: 'green' },
    { height: 40, color: 'red' },
    { height: 75, color: 'green' },
    { height: 45, color: 'red' },
    { height: 85, color: 'green' },
    { height: 55, color: 'green' },
    { height: 30, color: 'red' },
  ]);

  useEffect(() => {
    console.log('[HeroSection] Component mounted, view status:', inView);

    const interval = setInterval(() => {
      setTickerStocks(prev => prev.map(stock => ({
        ...stock,
        price: stock.price + (Math.random() - 0.5) * 10,
        change: stock.change + (Math.random() - 0.5) * 2,
        changePercent: stock.changePercent + (Math.random() - 0.5) * 0.1
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, [inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden"
      id="home"
      role="region"
      aria-labelledby="hero-heading"
    >
      <HeroHighlight 
        containerClassName="min-h-screen"
        className="w-full bg-gradient-to-br from-[#0B1E39] via-[#0a1929] to-[#050b14]"
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #00FF88 1px, transparent 1px), linear-gradient(to bottom, #00FF88 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00FF88] rounded-full filter blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFD700] rounded-full filter blur-[150px] opacity-10 animate-pulse" />

        {/* Live Stock Ticker Bar */}
        <div className="absolute top-20 left-0 right-0 bg-black/40 backdrop-blur-md border-y border-[#00FF88]/30 py-3 overflow-hidden z-20">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...tickerStocks, ...tickerStocks, ...tickerStocks].map((stock, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <span className="font-bold text-white">{stock.symbol}</span>
                <span className="text-[#FFD700]">₹{stock.price.toFixed(2)}</span>
                <span className={`flex items-center gap-1 ${stock.change >= 0 ? 'text-[#00FF88]' : 'text-[#FF3366]'}`}>
                  {stock.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {stock.changePercent.toFixed(2)}%
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="container mx-auto px-4 pt-40 pb-16 md:pt-44 md:pb-20 lg:pt-48 lg:pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            
            {/* LEFT: Copy + CTAs */}
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={{ show: { transition: { staggerChildren: 0.15 } } }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              {/* Market Status Badge */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00FF88]/10 backdrop-blur-md rounded-full border border-[#00FF88]/50 shadow-lg">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-2 w-2 bg-[#00FF88] rounded-full"
                  />
                  <span className="text-[#00FF88] text-sm font-bold">MARKET {marketStatus}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-bold">
                  <Zap className="h-3 w-3 text-[#FFD700]" />
                  <span>&lt;1ms Latency</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-bold">
                  <Shield className="h-3 w-3 text-[#00FF88]" />
                  <span>99.99% Uptime</span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                id="hero-heading"
                variants={fadeInUp}
                className="text-[32px] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-5 tracking-tight text-white"
              >
                <span className="block mb-3">
                  Real-Time NSE & MCX
                </span>
                <span className="block mb-3">
                  <Highlight className="text-white bg-gradient-to-r from-[#00FF88] via-[#00CC70] to-[#FFD700]">
                    Market Data at Your
                  </Highlight>
                </span>
                <span className="block text-white/90 text-[28px] sm:text-4xl md:text-5xl font-black">
                  Fingertips ⚡
                </span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.p 
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Power your trading applications with{' '}
                <span className="font-bold text-[#00FF88]">ultra-fast live market data</span>.
                Get millisecond-level tick-by-tick data, options chain, F&O streams, and market depth via{' '}
                <span className="font-bold text-[#FFD700]">REST API & WebSocket</span> — perfect for algo trading, fintech apps & research platforms.
              </motion.p>

              {/* Key Features Grid */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-2 gap-3 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                {[
                  { icon: <Activity />, text: 'Tick-by-Tick Data', color: 'text-[#00FF88]' },
                  { icon: <BarChart3 />, text: 'NSE/BSE/MCX', color: 'text-[#FFD700]' },
                  { icon: <LineChart />, text: 'Options Chain', color: 'text-[#00FF88]' },
                  { icon: <Sparkles />, text: 'WebSocket Stream', color: 'text-[#FFD700]' }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 text-white/90 text-sm sm:text-base bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10"
                  >
                    <div className={`h-5 w-5 flex-shrink-0 ${feature.color}`}>
                      {feature.icon}
                    </div>
                    <span className="font-semibold">{feature.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 mb-6"
              >
                <Button 
                  asChild
                  size="lg"
                  className="w-full sm:w-auto text-base sm:text-lg px-8 py-7 h-auto shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,255,136,0.9)] transition-all duration-300 active:scale-95 bg-gradient-to-r from-[#00FF88] to-[#00CC70] hover:from-[#00CC70] hover:to-[#00FF88] rounded-xl font-black border-2 border-[#00FF88]/50 text-[#0B1E39]"
                >
                  <a href="#lead-form" className="flex items-center justify-center gap-2">
                    <Zap className="h-5 w-5" />
                    Start Free Trial Now
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-6 h-auto bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 font-bold rounded-xl shadow-lg active:scale-95 transition-all border-2 border-white/30"
                >
                  <a href="#demo" className="flex items-center justify-center gap-2">
                    📊 View Live Demo Dashboard
                  </a>
                </Button>
              </motion.div>

              {/* Trust Line */}
              <motion.p 
                variants={fadeInUp}
                className="text-white/70 text-sm italic"
              >
                ✅ NSE Certified • 🔒 Secure & Compliant • 🇮🇳 Indian Support 24×7
              </motion.p>
            </motion.div>

            {/* RIGHT: Animated Market Data Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative mx-auto max-w-xl">
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#00FF88]/30 overflow-hidden">
                  
                  <div className="bg-gradient-to-r from-[#00FF88]/20 to-[#FFD700]/20 backdrop-blur-xl border-b border-[#00FF88]/30 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="h-3 w-3 bg-[#FF3366] rounded-full" />
                          <div className="h-3 w-3 bg-[#FFD700] rounded-full" />
                          <div className="h-3 w-3 bg-[#00FF88] rounded-full" />
                        </div>
                        <span className="text-white font-bold text-sm ml-2">Live Market Data</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Activity className="h-4 w-4 text-[#00FF88] animate-pulse" />
                        <span className="text-[#00FF88] text-xs font-mono">STREAMING</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="bg-black/40 rounded-xl p-4 mb-4 border border-[#00FF88]/20">
                      <div className="flex items-end justify-between h-32 gap-1">
                        {candleData.map((candle, index) => (
                          <motion.div
                            key={index}
                            initial={{ height: 0 }}
                            animate={{ height: `${candle.height}%` }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`flex-1 rounded-sm ${
                              candle.color === 'green' 
                                ? 'bg-gradient-to-t from-[#00FF88] to-[#00CC70]' 
                                : 'bg-gradient-to-t from-[#FF3366] to-[#ff5588]'
                            } shadow-lg`}
                            style={{
                              boxShadow: candle.color === 'green' 
                                ? '0 0 10px rgba(0,255,136,0.5)' 
                                : '0 0 10px rgba(255,51,102,0.5)'
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-white/50">
                        <span>9:15</span>
                        <span>11:30</span>
                        <span>13:45</span>
                        <span>15:30</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {tickerStocks.slice(0, 3).map((stock, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-[#00FF88]/50 transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-bold text-white text-sm">{stock.symbol}</div>
                              <div className="text-[#FFD700] text-xs font-mono">NSE</div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-white">₹{stock.price.toFixed(2)}</div>
                              <div className={`text-xs flex items-center gap-1 justify-end ${
                                stock.change >= 0 ? 'text-[#00FF88]' : 'text-[#FF3366]'
                              }`}>
                                {stock.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                                {stock.changePercent.toFixed(2)}%
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {[
                        { label: 'Latency', value: '<1ms', icon: <Zap className="h-4 w-4" /> },
                        { label: 'Updates/sec', value: '1000+', icon: <Activity className="h-4 w-4" /> },
                        { label: 'Instruments', value: '5000+', icon: <BarChart3 className="h-4 w-4" /> }
                      ].map((stat, i) => (
                        <div key={i} className="text-center p-2 bg-white/5 rounded-lg border border-white/10">
                          <div className="flex items-center justify-center gap-1 text-[#00FF88] mb-1">
                            {stat.icon}
                            <div className="text-sm font-black">{stat.value}</div>
                          </div>
                          <div className="text-white/60 text-[10px]">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -inset-4 bg-gradient-to-r from-[#00FF88]/20 via-[#FFD700]/20 to-[#00FF88]/20 rounded-[3rem] blur-3xl -z-10 animate-pulse" />
              </div>
            </motion.div>

          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}

console.log('[Market-Data-API] HeroSection component loaded');
