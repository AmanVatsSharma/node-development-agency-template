'use client';

/**
 * @fileoverview Technology Stack Section
 * @description Enterprise infrastructure and technology showcase
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Server, Database, Cloud, Lock, Zap, Code } from 'lucide-react';

export function TechnologyStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  console.log('[Technology-Stack] Component rendered');

  const stack = [
    { category: 'Frontend', tech: 'React • Next.js • TypeScript • TailwindCSS', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { category: 'Backend', tech: 'Node.js • Python • Go • Redis • RabbitMQ', icon: Server, color: 'from-green-500 to-emerald-500' },
    { category: 'Database', tech: 'PostgreSQL • TimescaleDB • MongoDB • Cassandra', icon: Database, color: 'from-purple-500 to-pink-500' },
    { category: 'Infrastructure', tech: 'AWS • GCP • Kubernetes • Docker • CDN', icon: Cloud, color: 'from-orange-500 to-red-500' },
    { category: 'Security', tech: 'OAuth 2.0 • JWT • 2FA • AES-256 • SSL/TLS', icon: Lock, color: 'from-red-500 to-pink-500' },
    { category: 'APIs', tech: 'REST • WebSocket • GraphQL • FIX Protocol', icon: Zap, color: 'from-yellow-500 to-amber-500' }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-[#0A1628] via-[#0d1b2e] to-[#0A1628]"
      id="technology"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-5 border border-blue-500/30">
            <span className="font-bold text-blue-400 uppercase tracking-wide text-sm">
              Enterprise Technology
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 text-white">
            Built on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Rock-Solid Infrastructure
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Modern tech stack designed for scale, speed, and reliability
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-2">{item.category}</h3>
                <p className="text-sm text-gray-400 font-mono">{item.tech}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
