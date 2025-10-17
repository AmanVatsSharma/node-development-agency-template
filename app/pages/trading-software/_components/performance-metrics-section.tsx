'use client';

/**
 * @fileoverview Performance Metrics Section
 * @description Animated counter stats showcasing platform performance
 */

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Zap, Shield, Users } from 'lucide-react';

export function PerformanceMetricsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  console.log('[Performance-Metrics] Component rendered, inView:', inView);

  const metrics = [
    { icon: Zap, value: 50, suffix: 'ms', label: 'Order Execution', prefix: '< ', color: 'text-yellow-400', bgColor: 'from-yellow-500 to-amber-500' },
    { icon: Shield, value: 99.99, suffix: '%', label: 'Uptime SLA', prefix: '', color: 'text-[#00FF88]', bgColor: 'from-[#00FF88] to-[#00dd77]' },
    { icon: TrendingUp, value: 1000000, suffix: '+', label: 'Orders / Day', prefix: '', color: 'text-blue-400', bgColor: 'from-blue-500 to-cyan-500', format: 'short' },
    { icon: Users, value: 500000, suffix: '+', label: 'Active Traders', prefix: '', color: 'text-purple-400', bgColor: 'from-purple-500 to-pink-500', format: 'short' }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-[#0d1b2e] via-[#0A1628] to-[#0d1b2e] relative overflow-hidden"
      id="performance"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-[#00FF88]/20 to-yellow-500/20 rounded-full mb-5 border border-[#00FF88]/30">
            <span className="font-bold text-[#00FF88] uppercase tracking-wide text-sm">
              Performance Metrics
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 text-white">
            Numbers That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-yellow-400">
              Speak for Themselves
            </span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <MetricCard
                key={index}
                metric={metric}
                index={index}
                inView={inView}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Individual Metric Card with Counter Animation
function MetricCard({ metric, index, inView }: any) {
  const Icon = metric.icon;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    console.log(`[Performance-Metrics] Animating counter for: ${metric.label}`);
    
    let start = 0;
    const end = metric.value;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, metric.value, metric.label]);

  const formatValue = (val: number) => {
    if (metric.format === 'short') {
      if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
      if (val >= 1000) return `${(val / 1000).toFixed(0)}K`;
      return val.toFixed(0);
    }
    return val.toFixed(metric.value % 1 !== 0 ? 2 : 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-2xl p-6 text-center hover:border-white/30 hover:bg-white/10 transition-all">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${metric.bgColor} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
          <Icon className="h-8 w-8 text-white" />
        </div>

        {/* Counter */}
        <div className={`font-black text-4xl md:text-5xl ${metric.color} mb-2 font-mono`}>
          {metric.prefix}{formatValue(count)}{metric.suffix}
        </div>

        {/* Label */}
        <div className="text-sm text-gray-400 font-bold uppercase tracking-wide">
          {metric.label}
        </div>

        {/* Glow Effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${metric.bgColor} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity -z-10`} />
      </div>
    </motion.div>
  );
}
