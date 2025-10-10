'use client';

/**
 * @fileoverview Technology Stack Section
 * @description Showcases the technical infrastructure and reliability
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Server, Shield, Zap, Cloud, Database, Lock, Globe, CheckCircle2 } from 'lucide-react';

export function TechnologyStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const techStack = [
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Low-Latency Architecture',
      description: 'Custom-built high-performance servers with < 1ms response time',
      color: 'from-[#00FF88] to-[#00CC70]',
      features: ['Co-located Servers', 'Direct Exchange Feed', 'Optimized Network', 'Edge Caching']
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable, redundant cloud architecture across multiple regions',
      color: 'from-[#FFD700] to-[#FFA500]',
      features: ['Multi-Region', 'Auto-Scaling', 'Load Balancing', 'Failover Ready']
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Big Data Processing',
      description: 'Process millions of ticks per second with real-time analytics',
      color: 'from-[#00FF88] to-[#00CC70]',
      features: ['Stream Processing', 'Time-Series DB', 'Real-time Analytics', 'Data Lake']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Enterprise Security',
      description: 'Bank-grade security with encryption and compliance',
      color: 'from-[#FFD700] to-[#FFA500]',
      features: ['256-bit Encryption', 'ISO 27001', 'SOC 2 Compliant', 'DDoS Protection']
    }
  ];

  const metrics = [
    { value: '99.99%', label: 'Uptime SLA', icon: <CheckCircle2 className="h-6 w-6" /> },
    { value: '<1ms', label: 'API Latency', icon: <Zap className="h-6 w-6" /> },
    { value: '1M+', label: 'Ticks/Second', icon: <Database className="h-6 w-6" /> },
    { value: '24/7', label: 'Support', icon: <Globe className="h-6 w-6" /> }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-br from-[#0B1E39] via-[#0a1929] to-[#050b14] relative overflow-hidden"
      id="technology"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #00FF88 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00FF88]/10 backdrop-blur-md rounded-full mb-4 border border-[#00FF88]/30">
            <Server className="h-4 w-4 text-[#00FF88]" />
            <span className="text-[#00FF88] font-bold text-sm">ENTERPRISE-GRADE INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white">
            Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#FFD700]">Rock-Solid Tech</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Enterprise-grade infrastructure designed for high-frequency trading and mission-critical applications.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl p-8 border border-[#00FF88]/20 hover:border-[#00FF88]/50 transition-all duration-300 h-full shadow-xl hover:shadow-2xl hover:shadow-[#00FF88]/20">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${tech.color} text-white mb-4`}>
                  {tech.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {tech.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 mb-6 leading-relaxed">
                  {tech.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2">
                  {tech.features.map((feature, fIndex) => (
                    <div 
                      key={fIndex}
                      className="flex items-center gap-2 text-sm text-white/60"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#00FF88]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00FF88]/0 to-[#FFD700]/0 group-hover:from-[#00FF88]/5 group-hover:to-[#FFD700]/5 transition-all duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center hover:border-[#00FF88]/50 transition-all hover:scale-105"
              >
                <div className="flex justify-center mb-3 text-[#00FF88]">
                  {metric.icon}
                </div>
                <div className="text-3xl font-black text-white mb-2">{metric.value}</div>
                <div className="text-sm text-white/70">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <Shield />, text: 'ISO 27001 Certified' },
              { icon: <Lock />, text: 'SOC 2 Compliant' },
              { icon: <CheckCircle2 />, text: 'NSE Approved' },
              { icon: <Globe />, text: 'SEBI Registered' }
            ].map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/20 text-white text-sm"
              >
                <div className="h-4 w-4 text-[#00FF88]">{badge.icon}</div>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Market-Data-API] TechnologyStackSection loaded');
