'use client';

/**
 * @fileoverview Trading Terminal Preview Section
 * @description Interactive showcase of trading interface with video placeholder
 */

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Monitor, Smartphone, Tablet } from 'lucide-react';

export function TradingTerminalPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeView, setActiveView] = useState<'desktop' | 'mobile' | 'tablet'>('desktop');

  console.log('[Trading-Terminal-Preview] Component rendered, activeView:', activeView);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-[#0d1b2e] via-[#0A1628] to-[#0d1b2e] relative overflow-hidden"
      id="demo"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-[#00FF88]/20 to-blue-500/20 rounded-full mb-5 border border-[#00FF88]/30">
            <span className="font-bold text-[#00FF88] uppercase tracking-wide text-sm">
              Live Demo
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 text-white">
            See The Platform{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-blue-400">
              In Action
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Experience our intuitive trading interface designed for speed, efficiency, and ease of use
          </p>

          {/* Device Selector */}
          <div className="flex justify-center gap-3 mb-8">
            {[
              { id: 'desktop', icon: Monitor, label: 'Desktop' },
              { id: 'tablet', icon: Tablet, label: 'Tablet' },
              { id: 'mobile', icon: Smartphone, label: 'Mobile' }
            ].map((device) => {
              const Icon = device.icon;
              return (
                <button
                  key={device.id}
                  onClick={() => {
                    setActiveView(device.id as any);
                    console.log('[Trading-Terminal-Preview] View changed to:', device.id);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${
                    activeView === device.id
                      ? 'bg-[#00FF88] text-[#0A1628]'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{device.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Demo Video/Screenshot Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className={`relative rounded-2xl overflow-hidden border-4 border-[#00FF88]/30 shadow-2xl shadow-[#00FF88]/20 bg-gradient-to-br from-[#0d1b2e] to-[#0A1628] transition-all duration-500 ${
            activeView === 'mobile' ? 'max-w-sm mx-auto' :
            activeView === 'tablet' ? 'max-w-3xl mx-auto' :
            'w-full'
          }`}>
            {/* Video Placeholder */}
            <div className="relative aspect-video bg-gradient-to-br from-[#0A1628] via-[#0d1b2e] to-[#1a2f4f] flex items-center justify-center">
              {/* Play Button Overlay */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute inset-0 z-10 flex items-center justify-center group"
                onClick={() => console.log('[Trading-Terminal-Preview] Play button clicked')}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00FF88] to-[#00dd77] flex items-center justify-center shadow-2xl group-hover:shadow-[#00FF88]/50 transition-all">
                  <Play className="h-10 w-10 text-[#0A1628] ml-1" fill="currentColor" />
                </div>
              </motion.button>

              {/* Mock Terminal Interface */}
              <div className="w-full h-full p-8">
                <div className="grid grid-cols-3 gap-4 h-full">
                  {/* Market Watch */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-xs font-bold text-gray-400 mb-3">MARKET WATCH</div>
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="mb-2 h-6 bg-white/5 rounded animate-pulse"></div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-xs font-bold text-gray-400 mb-3">CHART</div>
                    <div className="h-full flex items-end gap-1">
                      {[30, 50, 40, 70, 60, 80, 65, 90, 75].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-[#00FF88] to-[#00FF88]/30 rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Order Book */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-xs font-bold text-gray-400 mb-3">ORDER BOOK</div>
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="mb-2 flex justify-between">
                        <div className="h-4 w-16 bg-red-500/20 rounded"></div>
                        <div className="h-4 w-16 bg-[#00FF88]/20 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Watermark */}
              <div className="absolute bottom-4 right-4 text-xs font-mono text-gray-600 font-bold">
                Vedpragya Trading Platform Demo
              </div>
            </div>

            {/* Device Frame Effect */}
            {activeView === 'mobile' && (
              <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/50 to-transparent rounded-t-2xl flex items-center justify-center">
                <div className="w-12 h-1 bg-gray-700 rounded-full"></div>
              </div>
            )}
          </div>

          {/* Feature Callouts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              { title: 'Real-time Updates', desc: 'Live market data with < 50ms latency' },
              { title: 'Advanced Charts', desc: 'TradingView with 100+ indicators' },
              { title: 'One-Click Trading', desc: 'Quick order placement & modification' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
              >
                <div className="font-bold text-white mb-1">{feature.title}</div>
                <div className="text-sm text-gray-400">{feature.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
