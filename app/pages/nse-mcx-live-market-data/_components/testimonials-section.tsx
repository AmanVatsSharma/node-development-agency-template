'use client';

/**
 * @fileoverview Testimonials Section
 * @description Client testimonials and reviews
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder, QuickTrade',
      company: 'Algo Trading Platform',
      rating: 5,
      text: 'The API latency is incredible! Our HFT algorithms execute trades in milliseconds. Best market data provider in India.',
      avatar: '👨‍💼'
    },
    {
      name: 'Sneha Desai',
      role: 'CTO, WealthVista',
      company: 'Investment App',
      rating: 5,
      text: 'Reliable, fast, and comprehensive data coverage. Their support team is amazing — always responsive and helpful.',
      avatar: '👩‍💼'
    },
    {
      name: 'Amit Patel',
      role: 'Lead Developer, TradeX',
      company: 'Trading Terminal',
      rating: 5,
      text: 'Complete options chain with accurate Greeks. The WebSocket streaming is rock solid. Highly recommended!',
      avatar: '👨‍💻'
    },
    {
      name: 'Priya Sharma',
      role: 'Quant Analyst, AlphaEdge',
      company: 'Hedge Fund',
      rating: 5,
      text: 'Historical data quality is exceptional. Perfect for backtesting strategies. The API documentation is crystal clear.',
      avatar: '👩‍🔬'
    },
    {
      name: 'Vikram Singh',
      role: 'Product Manager, InvestPro',
      company: 'Fintech Startup',
      rating: 5,
      text: 'Scaled from 1K to 50K users seamlessly. The infrastructure handles our load without any hiccups. Great value for money!',
      avatar: '👨‍💼'
    },
    {
      name: 'Ananya Reddy',
      role: 'Founder, OptionsFlow',
      company: 'Options Analytics',
      rating: 5,
      text: 'Real-time options data with IV and Greeks — game changer for our platform. Setup was surprisingly easy!',
      avatar: '👩‍💼'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900 relative overflow-hidden"
      id="testimonials"
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
            <Star className="h-4 w-4 text-[#00FF88]" />
            <span className="text-[#00FF88] font-bold text-sm">CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#FFD700]">1000+ Developers</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See what our clients say about our market data API
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-[#00FF88]/50 transition-all shadow-lg hover:shadow-2xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-12 w-12 text-[#00FF88]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#00FF88]/10 to-[#FFD700]/10 px-8 py-4 rounded-2xl border border-[#00FF88]/30">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-[#FFD700] text-[#FFD700]" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-black text-gray-900 dark:text-white">4.9/5.0</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Based on 1000+ reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Market-Data-API] TestimonialsSection loaded');
