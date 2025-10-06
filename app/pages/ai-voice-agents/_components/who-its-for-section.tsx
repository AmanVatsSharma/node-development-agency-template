'use client';

/**
 * Who It's For Section - Target Industries
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, HeartPulse, Home, IndianRupee, GraduationCap } from 'lucide-react';

export function WhoItsForSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const industries = [
    {
      icon: Building2,
      title: 'Call Centers / BPOs',
      description: 'Voice automation & QA',
      color: 'from-blue-500 to-cyan-500',
      emoji: '🏢'
    },
    {
      icon: HeartPulse,
      title: 'Clinics / Hospitals',
      description: 'Appointment calls',
      color: 'from-red-500 to-pink-500',
      emoji: '🏥'
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Lead qualification calls',
      color: 'from-green-500 to-emerald-500',
      emoji: '🏠'
    },
    {
      icon: IndianRupee,
      title: 'Finance / Loans',
      description: 'Verification & info calls',
      color: 'from-yellow-500 to-orange-500',
      emoji: '💰'
    },
    {
      icon: GraduationCap,
      title: 'Service Businesses',
      description: 'Law, education, repairs',
      color: 'from-purple-500 to-indigo-500',
      emoji: '🧑‍💼'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-[#0B1E39] to-[#1a2f4f]"
      id="who-its-for"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-5 py-2 bg-[#FF7A00]/20 backdrop-blur-md rounded-full mb-5 border border-[#FF7A00]/50">
            <span className="font-bold text-[#FF7A00] uppercase tracking-wide text-sm">
              Perfect For
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 text-white">
            Who It's For
          </h2>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Where there's a phone ring, there's a need for AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:border-[#FF7A00] transition-all hover:shadow-2xl hover:shadow-[#FF7A00]/20 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl mb-2">{industry.emoji}</div>
                <h3 className="text-xl font-black text-white mb-2">
                  {industry.title}
                </h3>
                <p className="text-white/70">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-[#FF7A00] to-[#ff9933] rounded-2xl shadow-2xl">
            <p className="text-white font-black text-lg md:text-xl">
              Where there's a phone ring, there's a need for AI 📞
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
