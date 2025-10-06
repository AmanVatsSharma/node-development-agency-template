'use client';

/**
 * Hero Section Component - AI Chatbot Development Landing Page
 * Your 24/7 AI Assistant That Never Sleeps
 * CONVERSION OPTIMIZED for Indian market - Google Ads ready
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { HeroHighlight, Highlight } from '@/app/components/ui/hero-highlight';
import { ArrowRight, Play, MessageSquare, TrendingUp, Clock, Zap } from 'lucide-react';

console.log('[AI-Chatbot-Dev] HeroSection component loaded');

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [metrics, setMetrics] = useState({ leads: 0, responseTime: 100 });

  useEffect(() => {
    console.log('[AI-Chatbot-Dev] HeroSection mounted');
    
    // Animate metrics
    if (inView) {
      let leadsCount = 0;
      let responseCount = 100;
      const interval = setInterval(() => {
        leadsCount += 10;
        responseCount -= 2;
        setMetrics({ leads: Math.min(leadsCount, 340), responseTime: Math.max(responseCount, 30) });
        if (leadsCount >= 340 && responseCount <= 30) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
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
      className="relative"
      id="home"
      role="region"
      aria-labelledby="hero-heading"
    >
      <HeroHighlight 
        containerClassName="min-h-screen"
        className="w-full"
      >
        <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
            
            {/* LEFT: Copy + CTA */}
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              {/* Micro Trust Bar - MOBILE OPTIMIZED */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6 text-[10px] sm:text-xs"
              >
                {[
                  { icon: <MessageSquare className="h-3 w-3" />, text: '24/7 Active' },
                  { icon: <Zap className="h-3 w-3" />, text: 'AI Powered' },
                  { icon: <TrendingUp className="h-3 w-3" />, text: '10× Growth' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-[#FFB100]/10 to-[#0A2540]/10 backdrop-blur-md rounded-full border border-[#FFB100]/30 font-bold text-gray-800 dark:text-gray-200 shadow-lg"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* Main Headline - MOBILE OPTIMIZED */}
              <motion.h1 
                id="hero-heading"
                variants={fadeInUp}
                className="text-[28px] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-5 tracking-tight"
              >
                <span className="text-gray-900 dark:text-white block mb-2">
                  Turn Conversations into
                </span>
                <span className="block">
                  <Highlight className="text-gray-900 dark:text-white bg-gradient-to-r from-[#0A2540] via-[#FFB100] to-[#0A2540] dark:from-[#FFB100] dark:via-[#0A2540] dark:to-[#FFB100]">
                    Conversions
                  </Highlight>
                </span>
              </motion.h1>

              {/* Sub-headline - MOBILE OPTIMIZED */}
              <motion.p 
                variants={fadeInUp}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
              >
                We build <span className="font-bold text-[#0A2540] dark:text-[#FFB100]">intelligent AI chatbots</span> that understand your business, talk like your best sales rep, and automate customer support — on{' '}
                <span className="font-bold text-green-600 dark:text-green-400">website, WhatsApp, or your CRM</span>.
              </motion.p>

              {/* CTA Buttons - MOBILE OPTIMIZED */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col gap-3 mb-6"
              >
                <Button 
                  asChild
                  size="lg"
                  className="w-full text-base sm:text-lg px-8 py-7 h-auto shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,177,0,0.5)] transition-all active:scale-95 bg-gradient-to-r from-[#0A2540] via-[#FFB100] to-[#0A2540] hover:from-[#0A2540] hover:via-[#FFB100] hover:to-[#0A2540] rounded-2xl font-black"
                  onClick={() => console.log('[AI-Chatbot-Dev] Hero CTA - Build My AI Chatbot clicked')}
                >
                  <a href="#lead-form" className="flex items-center justify-center gap-2">
                    👉 Build My AI Chatbot Now
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full text-base px-8 py-6 h-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-2 border-[#FFB100] dark:border-[#FFB100] hover:bg-[#FFB100]/10 dark:hover:bg-[#FFB100]/20 font-bold rounded-2xl shadow-lg active:scale-95 transition-all"
                  onClick={() => console.log('[AI-Chatbot-Dev] Hero CTA - See Live Demo clicked')}
                >
                  <a href="#case-studies" className="flex items-center justify-center gap-2">
                    <Play className="h-5 w-5" />
                    See Live Demo
                  </a>
                </Button>
              </motion.div>

              {/* Trust Badge */}
              <motion.div 
                variants={fadeInUp}
                className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center lg:text-left"
              >
                ✨ <span className="font-bold">Trusted by 50+ businesses</span> across India
              </motion.div>
            </motion.div>

            {/* RIGHT: Animated Chatbot Preview - MOBILE OPTIMIZED */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2 px-2 sm:px-0"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-white dark:border-gray-800 shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                {/* Chat Window Mock - MOBILE OPTIMIZED */}
                <div className="bg-gradient-to-r from-[#0A2540] to-[#0A2540]/90 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB100] to-[#FFB100]/70 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-[#0A2540]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">AI Sales Assistant</div>
                      <div className="flex items-center gap-1 text-xs text-green-400">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        Online 24/7
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-4 space-y-3 bg-white dark:bg-gray-950">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-[#0A2540] text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] text-sm">
                      I need help choosing a plan
                    </div>
                  </div>

                  {/* Bot Response */}
                  <div className="flex justify-start">
                    <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-900 dark:text-white px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] text-sm">
                      <div className="font-semibold mb-1">Sure! I'd love to help 😊</div>
                      <div className="text-xs opacity-90">
                        Based on your business needs, I recommend our Professional plan. It includes CRM integration and handles 10K+ queries/month.
                      </div>
                    </div>
                  </div>

                  {/* Typing indicator */}
                  <div className="flex justify-start">
                    <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 px-4 py-2 rounded-2xl rounded-tl-sm">
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 rounded-full bg-[#FFB100]"
                        />
                        <motion.div
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 rounded-full bg-[#FFB100]"
                        />
                        <motion.div
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 rounded-full bg-[#FFB100]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Dashboard - MOBILE OPTIMIZED */}
                <div className="bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 p-4 border-t-2 border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-3 border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Leads</span>
                      </div>
                      <div className="text-2xl font-black text-green-600">+{metrics.leads}%</div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-3 border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Response</span>
                      </div>
                      <div className="text-2xl font-black text-blue-600">-{100 - metrics.responseTime}%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0A2540]/20 via-[#FFB100]/20 to-[#0A2540]/20 rounded-3xl blur-2xl -z-10" />
            </motion.div>

          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}
