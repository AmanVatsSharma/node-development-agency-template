'use client';

/**
 * @fileoverview Hero Section - WhatsApp Business API Landing Page
 * @description Premium animated hero with WhatsApp chat visual
 * @version 1.0.0
 * 
 * CONVERSION ELEMENTS:
 * - Strong value proposition: "Automate Conversations, Boost Sales & Support"
 * - Trust badges: 98% open rate, 24/7, Verified API
 * - Dual CTAs: Primary (Get Setup) + Secondary (Schedule Demo)
 * - Animated WhatsApp message flow
 * - Mobile-first responsive design
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { HeroHighlight, Highlight } from '@/app/components/ui/hero-highlight';
import { 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Shield,
  Clock,
  Zap
} from 'lucide-react';

/**
 * WhatsApp Message Interface
 */
interface WhatsAppMessage {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  time: string;
}

/**
 * Hero Section Component
 */
export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  // Animated WhatsApp messages
  const [messages, setMessages] = useState<WhatsAppMessage[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Message sequence
  const messageSequence: WhatsAppMessage[] = [
    { id: 1, text: "Hi! I want to check my order status", sender: 'user', time: '10:30 AM' },
    { id: 2, text: "Hello! 👋 Your order #1234 is out for delivery and will arrive by 3 PM today.", sender: 'bot', time: '10:30 AM' },
    { id: 3, text: "Can I reschedule?", sender: 'user', time: '10:31 AM' },
    { id: 4, text: "Of course! When would you prefer delivery? Reply with: 1️⃣ Tomorrow 2️⃣ This Weekend", sender: 'bot', time: '10:31 AM' },
  ];

  useEffect(() => {
    console.log('[HeroSection] Component mounted, view status:', inView);

    if (inView && currentMessageIndex < messageSequence.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, messageSequence[currentMessageIndex]]);
        setCurrentMessageIndex(prev => prev + 1);
      }, 1000 + (currentMessageIndex * 1500));

      return () => clearTimeout(timer);
    }
  }, [inView, currentMessageIndex]);

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
        className="w-full bg-gradient-to-br from-[#25D366] via-[#128C7E] to-[#075E54]"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto px-4 pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            
            {/* LEFT: Copy + CTAs */}
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={{ show: { transition: { staggerChildren: 0.15 } } }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              {/* Trust Badges */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6"
              >
                {[
                  { icon: <CheckCircle2 className="h-3 w-3" />, text: '98% Open Rate', color: 'bg-white/20' },
                  { icon: <Clock className="h-3 w-3" />, text: '24×7 Automation', color: 'bg-white/20' },
                  { icon: <Shield className="h-3 w-3" />, text: 'Verified API', color: 'bg-white/20' }
                ].map((badge, index) => (
                  <div 
                    key={index}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${badge.color} backdrop-blur-md rounded-full border border-white/30 text-white text-xs sm:text-sm font-bold shadow-lg`}
                  >
                    {badge.icon}
                    <span>{badge.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* Main Headline - SEO Optimized */}
              <motion.h1 
                id="hero-heading"
                variants={fadeInUp}
                className="text-[32px] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-5 tracking-tight text-white"
              >
                <span className="block mb-3">
                  Hire WhatsApp Business API Expert
                </span>
                <span className="block mb-3">
                  <Highlight className="text-white bg-gradient-to-r from-[#FF7A00] via-[#ff9933] to-[#FFB100]">
                    Professional WhatsApp Business API Services
                  </Highlight>
                </span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.p 
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Power your business communication with{' '}
                <span className="font-bold text-[#FFB100]">verified WhatsApp automation</span>.
                Connect instantly with leads, send personalized offers, collect payments, 
                and support customers{' '}
                <span className="font-bold">24×7 — without lifting a finger</span>.
              </motion.p>

              {/* Key Benefits */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                {[
                  { icon: <TrendingUp />, text: '10× more than email' },
                  { icon: <Sparkles />, text: 'Verified green-tick account' },
                  { icon: <Zap />, text: 'Setup in 48 hours' },
                  { icon: <MessageCircle />, text: 'CRM integration ready' }
                ].map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 text-white/90 text-sm sm:text-base"
                  >
                    <div className="h-5 w-5 flex-shrink-0 text-[#FFB100]">
                      {benefit.icon}
                    </div>
                    <span className="font-semibold">{benefit.text}</span>
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
                  className="w-full sm:w-auto text-base sm:text-lg px-8 py-7 h-auto shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,122,0,0.9)] transition-all duration-300 active:scale-95 bg-gradient-to-r from-[#FF7A00] to-[#FFB100] hover:from-[#FFB100] hover:to-[#ff9933] rounded-xl font-black border-2 border-white/20 text-white"
                >
                  <a href="#lead-form" className="flex items-center justify-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Get WhatsApp API Setup in 48 Hours
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-6 h-auto bg-white text-[#25D366] hover:bg-white/90 font-bold rounded-xl shadow-lg active:scale-95 transition-all border-2 border-white"
                >
                  <a href="#demo" className="flex items-center justify-center gap-2">
                    📞 Schedule Free Consultation
                  </a>
                </Button>
              </motion.div>

              {/* Trust Line */}
              <motion.p 
                variants={fadeInUp}
                className="text-white/80 text-sm italic"
              >
                ✅ Official Meta Cloud API Partner • 🇮🇳 Local Indian Support • 🔒 100% Secure
              </motion.p>
            </motion.div>

            {/* RIGHT: Animated WhatsApp Chat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative order-1 lg:order-2"
            >
              {/* Phone Mockup */}
              <div className="relative mx-auto max-w-sm">
                {/* Phone Frame */}
                <div className="relative bg-white rounded-[2.5rem] shadow-2xl border-[8px] border-gray-800 overflow-hidden">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-3xl z-20" />
                  
                  {/* WhatsApp Header */}
                  <div className="bg-[#075E54] text-white p-4 pt-8">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center font-bold">
                        AI
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm">Your Business Bot</h3>
                        <p className="text-xs text-white/80">Online • Automated</p>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-[#25D366]" />
                    </div>
                  </div>

                  {/* Chat Area */}
                  <div className="bg-[#ECE5DD] min-h-[400px] p-4 space-y-3">
                    <AnimatePresence>
                      {messages.map((message, index) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.4 }}
                          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div 
                            className={`max-w-[80%] rounded-lg px-3 py-2 ${
                              message.sender === 'user' 
                                ? 'bg-[#DCF8C6]' 
                                : 'bg-white shadow-sm'
                            }`}
                          >
                            <p className="text-sm text-gray-800">{message.text}</p>
                            <p className="text-[10px] text-gray-500 mt-1 text-right">
                              {message.time}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {/* Typing Indicator */}
                    {messages.length < messageSequence.length && messages.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="bg-white rounded-lg px-3 py-2 shadow-sm">
                          <div className="flex gap-1">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                                className="h-2 w-2 bg-gray-400 rounded-full"
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Input Bar */}
                  <div className="bg-[#F0F0F0] p-2 flex items-center gap-2">
                    <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-400">
                      Type a message...
                    </div>
                    <div className="h-8 w-8 bg-[#25D366] rounded-full flex items-center justify-center">
                      <MessageCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#25D366]/30 via-[#FFB100]/30 to-[#FF7A00]/30 rounded-[3rem] blur-2xl -z-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}

console.log('[WhatsApp-API] HeroSection component loaded');
