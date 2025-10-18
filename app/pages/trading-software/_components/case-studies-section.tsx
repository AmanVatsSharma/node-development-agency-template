'use client';

/**
 * @fileoverview Case Studies & Testimonials Section
 * @description Success stories from broker clients
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, TrendingUp, Users, DollarSign } from 'lucide-react';

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  console.log('[Case-Studies] Component rendered');

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO, Metro Securities',
      company: 'Sub-Broker Network',
      image: '👨‍💼',
      quote: 'Vedpragya trading platform helped us scale from 500 to 5,000 active clients in just 8 months. The white-label solution perfectly matches our brand.',
      metrics: [
        { label: 'Client Growth', value: '900%', icon: Users },
        { label: 'Cost Reduction', value: '60%', icon: DollarSign },
        { label: 'Revenue Increase', value: '3.5x', icon: TrendingUp }
      ]
    },
    {
      name: 'Priya Sharma',
      position: 'Director, Capital Broking',
      company: 'Full-Service Brokerage',
      image: '👩‍💼',
      quote: 'The algo trading feature and advanced charting tools attracted premium clients. Our average revenue per user increased by 40% after migration.',
      metrics: [
        { label: 'ARPU Increase', value: '40%', icon: TrendingUp },
        { label: 'Premium Clients', value: '2.5x', icon: Users },
        { label: 'Trading Volume', value: '5x', icon: DollarSign }
      ]
    },
    {
      name: 'Amit Patel',
      position: 'Founder, TradeSmart',
      company: 'Discount Brokerage',
      image: '👨‍💻',
      quote: 'Lightning-fast execution and zero downtime. Our client satisfaction scores improved dramatically. The 24/7 support team is outstanding.',
      metrics: [
        { label: 'Uptime', value: '99.99%', icon: TrendingUp },
        { label: 'Execution Speed', value: '< 40ms', icon: TrendingUp },
        { label: 'CSAT Score', value: '4.8/5', icon: Users }
      ]
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-[#0A1628] via-[#0d1b2e] to-[#0A1628]"
      id="case-studies"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-[#00FF88]/20 to-blue-500/20 rounded-full mb-5 border border-[#00FF88]/30">
            <span className="font-bold text-[#00FF88] uppercase tracking-wide text-sm">
              Success Stories
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 text-white">
            Real Results From{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-blue-400">
              Real Brokers
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            See how top brokerages transformed their business with our platform
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="relative bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-3xl p-8 hover:border-white/30 hover:bg-white/10 transition-all group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-[#00FF88] to-[#00dd77] flex items-center justify-center shadow-lg">
                <Quote className="h-6 w-6 text-[#0A1628]" />
              </div>

              {/* Avatar & Details */}
              <div className="flex items-center gap-4 mb-6 mt-4">
                <div className="text-5xl">{testimonial.image}</div>
                <div>
                  <div className="font-black text-white text-lg">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.position}</div>
                  <div className="text-xs text-[#00FF88] font-semibold">{testimonial.company}</div>
                </div>
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {testimonial.metrics.map((metric, idx) => {
                  const Icon = metric.icon;
                  return (
                    <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                      <Icon className="h-4 w-4 text-[#00FF88] mx-auto mb-1" />
                      <div className="font-black text-white text-sm">{metric.value}</div>
                      <div className="text-[10px] text-gray-400">{metric.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: '50+', label: 'Brokerages' },
            { value: '4.9/5', label: 'Avg Rating' },
            { value: '99.99%', label: 'Uptime' },
            { value: '₹10K Cr+', label: 'Daily Volume' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
              <div className="font-black text-3xl text-[#00FF88] mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 font-semibold">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
