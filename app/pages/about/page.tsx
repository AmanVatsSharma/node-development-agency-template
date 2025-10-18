'use client';

/**
 * @fileoverview About Us - Premium Techy Modern Landing Page
 * @description Ultra-compact, mobile-first, illustration-rich About page
 * @version 3.0.0 - TECHY MODERN PREMIUM
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedIllustration from '../../components/AnimatedIllustration';

console.log('[About] v3.0 - Techy Modern Premium loaded');

export default function AboutPage() {
  const [counters, setCounters] = useState({ clients: 0, projects: 0, countries: 0, team: 0 });

  useEffect(() => {
    console.log('[About] Initializing...');
    
    // Fast counter animation
    const targets = { clients: 500, projects: 1200, countries: 6, team: 50 };
    const duration = 1000;
    const steps = 30;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      
      setCounters({
        clients: Math.floor(targets.clients * eased),
        projects: Math.floor(targets.projects * eased),
        countries: Math.floor(targets.countries * eased),
        team: Math.floor(targets.team * eased),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* HERO - Techy Modern */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        {/* Tech grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating illustrations */}
        <div className="absolute top-10 right-10 w-32 h-32 md:w-48 md:h-48 opacity-30 hidden sm:block">
          <AnimatedIllustration
            src="/illustrations/undraw_programming.svg"
            alt="Programming"
            width={192}
            height={192}
            animationType="float"
            delay={0.2}
          />
        </div>
        <div className="absolute bottom-10 left-10 w-32 h-32 md:w-40 md:h-40 opacity-25 hidden sm:block">
          <AnimatedIllustration
            src="/illustrations/undraw_cloud_hosting.svg"
            alt="Cloud"
            width={160}
            height={160}
            animationType="pulse"
            delay={0.5}
          />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
              <span className="text-cyan-400 text-xs md:text-sm font-bold uppercase tracking-wider">Since 2015 • CIN: U47912HR2025PTC131357</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Enterprise Hero
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Global Node.js Development Agency Trusted by <span className="text-cyan-400 font-bold">500+ Fortune 500</span> Companies
            </p>

            {/* Quick stats - Compact */}
            <div className="grid grid-cols-4 gap-3 md:gap-6 mb-8 max-w-3xl mx-auto">
              {[
                { value: counters.clients, suffix: '+', label: 'Clients' },
                { value: counters.projects, suffix: '+', label: 'Projects' },
                { value: counters.countries, suffix: '', label: 'Countries' },
                { value: counters.team, suffix: '+', label: 'Team' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                  className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-3 md:p-4 hover:bg-white/10 hover:border-cyan-500/40 transition-all"
                >
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400">{stat.value}{stat.suffix}</div>
                  <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTAs - Compact */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link href="/pages/contact" className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-lg font-bold transition-all duration-300 shadow-lg shadow-cyan-500/50">
                Start Project →
              </Link>
              <Link href="/pages/portfolio" className="px-6 md:px-8 py-3 md:py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white rounded-lg font-bold transition-all backdrop-blur-sm">
                View Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GLOBAL OFFICES - Compact Grid */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Background illustration */}
        <div className="absolute top-10 right-10 w-48 h-48 opacity-5 hidden lg:block">
          <AnimatedIllustration
            src="/illustrations/undraw_mobile_app.svg"
            alt="Mobile"
            width={192}
            height={192}
            animationType="scale"
            delay={0.3}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="inline-block mb-3 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase">Global Presence</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">6 Global Offices</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">24/7 development across continents</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { city: 'Gurugram', country: 'India', icon: '🇮🇳', type: 'HQ' },
              { city: 'Dubai', country: 'UAE', icon: '🇦🇪', type: 'Hub' },
              { city: 'California', country: 'USA', icon: '🇺🇸', type: 'R&D' },
              { city: 'Toronto', country: 'Canada', icon: '🇨🇦', type: 'Ops' },
              { city: 'Shenzhen', country: 'China', icon: '🇨🇳', type: 'APAC' },
              { city: 'Bangalore', country: 'India', icon: '🇮🇳', type: 'Dev' }
            ].map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-200 dark:border-gray-600"
              >
                <div className="text-3xl md:text-4xl mb-2">{office.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-0.5">{office.city}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{office.country}</p>
                <span className="inline-block px-2 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded text-xs font-semibold">{office.type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VALUES - Split Compact */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        {/* Illustrations */}
        <div className="absolute bottom-10 right-10 w-40 h-40 opacity-20 hidden lg:block">
          <AnimatedIllustration
            src="/illustrations/undraw_programming.svg"
            alt="Code"
            width={160}
            height={160}
            animationType="rotate"
            delay={0.4}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 md:p-8"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Our Mission</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Deliver enterprise-grade Node.js solutions that power Fortune 500 companies worldwide.
              </p>
              <ul className="space-y-2 text-sm">
                {['Enterprise Solutions', '24/7 Support', 'Scalable Architecture'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 md:p-8"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Our Vision</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Be the world's leading Node.js agency recognized for technical excellence and global impact.
              </p>
              <ul className="space-y-2 text-sm">
                {['Market Leadership', 'Innovation Focus', 'Client Success'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOUNDER - Compact Card */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Illustration */}
        <div className="absolute top-10 left-10 w-48 h-48 opacity-5 hidden lg:block">
          <AnimatedIllustration
            src="/illustrations/undraw_cloud_hosting.svg"
            alt="Cloud"
            width={192}
            height={192}
            animationType="float"
            delay={0.2}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-block mb-3 px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full">
              <span className="text-purple-600 dark:text-purple-400 text-xs font-bold uppercase">Leadership</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Meet Our Founder</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-600">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-purple-600 p-8 flex flex-col items-center justify-center text-white">
                  <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mb-4 border-4 border-white/30">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-center">Aman Kumar Sharma</h3>
                  <p className="text-blue-100 mb-4">Founder & CEO</p>
                  <div className="grid grid-cols-2 gap-2 text-center text-sm">
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="font-bold">10+</div>
                      <div className="text-xs opacity-80">Years</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2">
                      <div className="font-bold">500+</div>
                      <div className="text-xs opacity-80">Clients</div>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5 p-6 md:p-8">
                  <h4 className="text-lg md:text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-pink-400">
                    Visionary Tech Entrepreneur
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
                    Founded Enterprise Hero in 2015, expanding to 6 countries and serving 500+ Fortune 500 companies. 
                    Expert in enterprise architecture and digital transformation.
                  </p>
                  <div className="space-y-2 text-sm">
                    {['Built global team across 6 countries', 'Delivered 1200+ enterprise projects', '99.8% client satisfaction'].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS - Compact Grid */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Illustration */}
        <div className="absolute bottom-10 right-10 w-40 h-40 opacity-5 hidden lg:block">
          <AnimatedIllustration
            src="/illustrations/undraw_mobile_app.svg"
            alt="Mobile"
            width={160}
            height={160}
            animationType="pulse"
            delay={0.3}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="inline-block mb-3 px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
              <span className="text-yellow-600 dark:text-yellow-400 text-xs font-bold uppercase">Client Success</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Trusted Worldwide</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Sarah J.', role: 'CTO, Tech Corp', quote: 'Exceptional Node.js expertise. Transformed our infrastructure.' },
              { name: 'Michael C.', role: 'VP Eng, FinTech', quote: 'Professional team. Delivered on time and exceeded expectations.' },
              { name: 'Emma R.', role: 'CEO, HealthTech', quote: 'Game-changer for our business. 24/7 global support is amazing.' }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS - Compact Icons */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-block mb-3 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
              <span className="text-green-600 dark:text-green-400 text-xs font-bold uppercase">Certified</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Industry Validated</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { name: 'ISO 27001', icon: '🔒' },
              { name: 'AWS Partner', icon: '☁️' },
              { name: 'Microsoft', icon: '⭐' },
              { name: 'SOC 2', icon: '✅' }
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl text-center hover:shadow-xl transition-all border border-gray-200 dark:border-gray-600"
              >
                <div className="text-4xl mb-2">{cert.icon}</div>
                <div className="font-bold text-sm">{cert.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - Compact & Powerful */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        {/* Illustrations */}
        <div className="absolute top-10 right-10 w-40 h-40 opacity-20 hidden lg:block">
          <AnimatedIllustration
            src="/illustrations/undraw_programming.svg"
            alt="Code"
            width={160}
            height={160}
            animationType="float"
            delay={0.2}
          />
        </div>
        <div className="absolute bottom-10 left-10 w-32 h-32 opacity-15 hidden lg:block">
          <AnimatedIllustration
            src="/illustrations/undraw_cloud_hosting.svg"
            alt="Cloud"
            width={128}
            height={128}
            animationType="scale"
            delay={0.5}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Ready to Build<br className="md:hidden" /> Something Great?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join 500+ Fortune 500 companies who trust us for enterprise Node.js development
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/pages/contact" className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-bold text-lg transition-all shadow-xl">
                Get Started →
              </Link>
              <Link href="/pages/services" className="px-8 py-4 bg-white/10 border-2 border-white/30 hover:bg-white/20 text-white rounded-lg font-bold text-lg transition-all backdrop-blur-sm">
                Our Services
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
              <span>🌍 6 Countries</span>
              <span>💼 500+ Clients</span>
              <span>⭐ 99.8% Satisfaction</span>
              <span>📊 1200+ Projects</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

console.log('[About] v3.0 Component loaded successfully');
