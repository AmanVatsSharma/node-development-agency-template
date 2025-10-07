'use client';

/**
 * Hero Section - AI Voice Agents Landing Page
 * "Your AI Receptionist That Never Misses a Call"
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { HeroHighlight, Highlight } from '@/app/components/ui/hero-highlight';
import { Phone, PlayCircle, PhoneCall, Waves } from 'lucide-react';

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimating(true);
      const interval = setInterval(() => {
        setAnimating(prev => !prev);
      }, 3000);
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
        className="w-full bg-gradient-to-br from-[#0B1E39] via-[#0B1E39] to-[#1a2f4f]"
      >
        <div className="container mx-auto px-4 pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
            
            {/* LEFT: Copy + CTA */}
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              {/* Trust Bar */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6 text-[10px] sm:text-xs"
              >
                {[
                  { icon: <Phone className="h-3 w-3" />, text: '24×7 Available' },
                  { icon: <Waves className="h-3 w-3" />, text: 'Human-Like AI' },
                  { icon: <PhoneCall className="h-3 w-3" />, text: '99% Accuracy' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#FF7A00]/10 backdrop-blur-md rounded-full border border-[#FF7A00]/30 font-bold text-[#FF7A00] shadow-lg"
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
                  Your AI Receptionist
                </span>
                <span className="block">
                  <Highlight className="text-white bg-gradient-to-r from-[#FF7A00] via-[#ff9933] to-[#FF7A00]">
                    That Never Misses a Call
                  </Highlight>
                </span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.p 
                variants={fadeInUp}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 leading-relaxed"
              >
                <span className="font-bold text-[#FF7A00]">Automate Your Business Calls</span> with Human-Like AI Voice Agents —{' '}
                <span className="font-bold text-white">just like trained humans, but faster and cheaper.</span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-3 mb-6"
              >
                <Button 
                  asChild
                  size="lg"
                  className="w-full sm:w-auto text-base sm:text-lg px-8 py-7 h-auto shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,122,0,0.8)] transition-all active:scale-95 bg-gradient-to-r from-[#0B1E39] to-[#FF7A00] hover:from-[#FF7A00] hover:to-[#ff9933] rounded-xl font-black border-2 border-[#FF7A00]"
                >
                  <a href="#lead-form" className="flex items-center justify-center gap-2">
                    ☎️ Get My AI Voice Agent
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
                    Listen to Live Demo Calls
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* RIGHT: Animated Phone Call Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2 px-2 sm:px-0"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-[#FF7A00] shadow-2xl bg-gradient-to-br from-[#0B1E39] to-[#1a2f4f]">
                {/* Phone Ring Animation */}
                <div className="p-8 md:p-12">
                  <motion.div
                    animate={animating ? { scale: [1, 1.1, 1], opacity: [1, 0.8, 1] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#ff9933] flex items-center justify-center shadow-2xl shadow-[#FF7A00]/50"
                  >
                    <Phone className="h-12 w-12 md:h-16 md:w-16 text-white" />
                  </motion.div>

                  {/* Waveform Visual */}
                  <div className="flex items-center justify-center gap-1.5 mb-6">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          height: animating ? [20, 40, 20] : 20,
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                        className="w-1.5 bg-gradient-to-t from-[#FF7A00] to-[#ff9933] rounded-full"
                        style={{ height: 20 }}
                      />
                    ))}
                  </div>

                  {/* AI Voice Reply */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <p className="text-white font-semibold text-sm md:text-base text-center italic">
                      "Good morning! How can I help you today?"
                    </p>
                    <p className="text-[#FF7A00] text-xs md:text-sm text-center mt-2 font-bold">
                      — AI Voice Agent responding in real-time
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {[
                      { label: 'Response', value: '< 2s' },
                      { label: 'Accuracy', value: '99%' },
                      { label: 'Uptime', value: '24/7' }
                    ].map((stat, i) => (
                      <div key={i} className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                        <div className="text-[#FF7A00] text-lg md:text-2xl font-black">{stat.value}</div>
                        <div className="text-white/70 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FF7A00]/20 via-[#ff9933]/20 to-[#FF7A00]/20 rounded-3xl blur-2xl -z-10" />
            </motion.div>

          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}
