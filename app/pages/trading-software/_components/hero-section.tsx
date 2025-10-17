'use client';

/**
 * @fileoverview Hero Section - Trading Software Landing Page
 * @description "Enterprise-Grade Trading Platform Built for Modern Brokers"
 * Premium animated hero with trading terminal mockup
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { HeroHighlight, Highlight } from '@/app/components/ui/hero-highlight';
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  PlayCircle, 
  BarChart3,
  Activity,
  Clock
} from 'lucide-react';

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [currentPrice, setCurrentPrice] = useState(18250.50);
  const [priceChange, setPriceChange] = useState(0);

  // Simulate real-time price updates
  useEffect(() => {
    console.log('[Hero] Component mounted - starting price simulation');
    
    if (inView) {
      const interval = setInterval(() => {
        setCurrentPrice(prev => {
          const change = (Math.random() - 0.5) * 10;
          setPriceChange(change);
          const newPrice = prev + change;
          console.log('[Hero] Price updated:', newPrice.toFixed(2));
          return newPrice;
        });
      }, 2000);

      return () => {
        console.log('[Hero] Cleaning up price simulation');
        clearInterval(interval);
      };
    }
  }, [inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
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
        className="w-full bg-gradient-to-br from-[#0A1628] via-[#0d1b2e] to-[#1a2f4f]"
      >
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        <div className="container mx-auto px-4 pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
            
            {/* LEFT: Copy + CTA */}
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              {/* Trust Badges */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6 text-[10px] sm:text-xs"
              >
                {[
                  { icon: <Zap className="h-3 w-3" />, text: '< 50ms Latency', color: 'from-yellow-500/20 border-yellow-500/30 text-yellow-400' },
                  { icon: <Shield className="h-3 w-3" />, text: '99.99% Uptime', color: 'from-[#00FF88]/20 border-[#00FF88]/30 text-[#00FF88]' },
                  { icon: <Activity className="h-3 w-3" />, text: 'Real-time Data', color: 'from-blue-500/20 border-blue-500/30 text-blue-400' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r ${item.color} backdrop-blur-md rounded-full border font-bold shadow-lg`}
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                id="hero-heading"
                variants={fadeInUp}
                className="text-[28px] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-5 tracking-tight text-white"
              >
                <span className="block mb-2">
                  Enterprise-Grade
                </span>
                <span className="block">
                  <Highlight className="text-white bg-gradient-to-r from-[#00FF88] via-[#00dd77] to-[#00FF88]">
                    Trading Platform
                  </Highlight>
                </span>
                <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl">
                  Built for Modern Brokers
                </span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.p 
                variants={fadeInUp}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                <span className="font-bold text-[#00FF88]">Real-time market data</span>, lightning-fast execution, and{' '}
                <span className="font-bold text-white">institutional-grade security</span>. Power your brokerage with cutting-edge technology.
              </motion.p>

              {/* Key Stats */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-3 gap-3 mb-6 max-w-lg mx-auto lg:mx-0"
              >
                {[
                  { value: '1M+', label: 'Orders/Day', icon: TrendingUp },
                  { value: '₹10K Cr+', label: 'Daily Volume', icon: BarChart3 },
                  { value: '500K+', label: 'Active Users', icon: Activity }
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 text-center">
                      <Icon className="h-5 w-5 text-[#00FF88] mx-auto mb-1" />
                      <div className="font-mono font-bold text-lg text-white">{stat.value}</div>
                      <div className="text-[10px] text-gray-400 font-semibold">{stat.label}</div>
                    </div>
                  );
                })}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-3 mb-6"
              >
                <Button 
                  asChild
                  size="lg"
                  className="w-full sm:w-auto text-base sm:text-lg px-8 py-7 h-auto shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,255,136,0.8)] transition-all active:scale-95 bg-gradient-to-r from-[#00FF88] to-[#00dd77] hover:from-[#00dd77] hover:to-[#00FF88] rounded-xl font-black text-[#0A1628] border-2 border-[#00FF88]"
                >
                  <a href="#lead-form" className="flex items-center justify-center gap-2">
                    📊 Schedule Live Demo
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-6 h-auto bg-white/10 backdrop-blur-xl border-2 border-white/30 hover:bg-white/20 font-bold rounded-xl shadow-lg active:scale-95 transition-all text-white"
                >
                  <a href="#demo" className="flex items-center justify-center gap-2">
                    <PlayCircle className="h-5 w-5" />
                    Watch Platform Demo
                  </a>
                </Button>
              </motion.div>

              {/* Trust Line */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center lg:justify-start gap-3 text-xs text-gray-400 font-bold"
              >
                <span>✅ SEBI Compliant</span>
                <span>🔒 ISO 27001 Certified</span>
                <span>⚡ < 50ms Execution</span>
              </motion.div>
            </motion.div>

            {/* RIGHT: Animated Trading Terminal Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
              animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2 px-2 sm:px-0"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-[#00FF88] shadow-2xl shadow-[#00FF88]/20 bg-gradient-to-br from-[#0d1b2e] to-[#0A1628]">
                {/* Terminal Header */}
                <div className="bg-gradient-to-r from-[#0A1628] to-[#0d1b2e] border-b border-[#00FF88]/30 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-[#00FF88]"></div>
                    </div>
                    <span className="text-white font-bold text-sm ml-2">Trading Terminal</span>
                  </div>
                  <Clock className="h-4 w-4 text-gray-400" />
                </div>

                {/* Market Watch */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-400 font-bold">
                    <span>SYMBOL</span>
                    <span>LTP</span>
                    <span>CHG %</span>
                  </div>

                  {/* Live Price Row */}
                  <motion.div 
                    className="bg-white/5 backdrop-blur-sm border border-[#00FF88]/20 rounded-lg p-3 flex items-center justify-between"
                    animate={{
                      borderColor: priceChange > 0 ? 'rgba(0,255,136,0.4)' : 'rgba(255,59,48,0.4)'
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <TrendingUp className={`h-5 w-5 ${priceChange > 0 ? 'text-[#00FF88]' : 'text-red-500'}`} />
                      <span className="text-white font-bold text-sm">NIFTY 50</span>
                    </div>
                    <div className="text-right">
                      <motion.div 
                        className={`font-mono font-bold text-lg ${priceChange > 0 ? 'text-[#00FF88]' : 'text-red-500'}`}
                        key={currentPrice}
                        initial={{ scale: 1.2, color: priceChange > 0 ? '#00FF88' : '#FF3B30' }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        ₹{currentPrice.toFixed(2)}
                      </motion.div>
                      <div className={`text-xs font-bold ${priceChange > 0 ? 'text-[#00FF88]' : 'text-red-500'}`}>
                        {priceChange > 0 ? '+' : ''}{priceChange.toFixed(2)} ({((priceChange/currentPrice)*100).toFixed(2)}%)
                      </div>
                    </div>
                  </motion.div>

                  {/* Additional Instruments */}
                  {[
                    { symbol: 'SENSEX', price: 62450.30, change: 1.2 },
                    { symbol: 'BANKNIFTY', price: 43250.75, change: -0.8 },
                    { symbol: 'CRUDEOIL', price: 6850.00, change: 2.3 }
                  ].map((item, index) => (
                    <motion.div 
                      key={item.symbol}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 flex items-center justify-between"
                    >
                      <span className="text-white font-semibold text-sm">{item.symbol}</span>
                      <div className="text-right">
                        <div className="font-mono font-bold text-white">₹{item.price.toLocaleString()}</div>
                        <div className={`text-xs font-bold ${item.change > 0 ? 'text-[#00FF88]' : 'text-red-500'}`}>
                          {item.change > 0 ? '+' : ''}{item.change}%
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Order Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button className="bg-gradient-to-r from-[#00FF88] to-[#00dd77] text-[#0A1628] font-black py-3 rounded-lg hover:shadow-lg transition-all">
                      BUY
                    </button>
                    <button className="bg-gradient-to-r from-red-500 to-red-600 text-white font-black py-3 rounded-lg hover:shadow-lg transition-all">
                      SELL
                    </button>
                  </div>
                </div>

                {/* Glowing Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF88] via-[#00dd77] to-[#00FF88] opacity-20 blur-2xl -z-10"></div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-xl p-4 shadow-2xl border-2 border-[#FFD700]"
              >
                <div className="text-[#0A1628] font-black text-xs">UPTIME</div>
                <div className="text-[#0A1628] font-black text-2xl">99.99%</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="absolute -top-4 -left-4 bg-gradient-to-br from-[#00FF88] to-[#00dd77] rounded-xl p-4 shadow-2xl border-2 border-[#00FF88]"
              >
                <div className="text-[#0A1628] font-black text-xs">LATENCY</div>
                <div className="text-[#0A1628] font-black text-2xl">&lt; 50ms</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}
