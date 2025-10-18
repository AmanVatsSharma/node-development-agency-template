'use client';

/**
 * @fileoverview Security & Compliance Section
 * @description Showcase security features and compliance certifications
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Lock, FileCheck, AlertTriangle, Key, Database, Eye, Server } from 'lucide-react';

export function SecurityComplianceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  console.log('[Security-Compliance] Component rendered');

  const features = [
    { icon: Shield, title: 'Bank-Grade Encryption', desc: 'AES-256 encryption for data at rest & in transit' },
    { icon: Lock, title: 'Two-Factor Authentication', desc: 'SMS, Email, & Authenticator app support' },
    { icon: Key, title: 'OAuth 2.0 + JWT', desc: 'Industry-standard authentication protocols' },
    { icon: Database, title: 'Data Isolation', desc: 'Multi-tenant architecture with complete data separation' },
    { icon: Eye, title: 'Audit Logging', desc: 'Complete audit trail for all transactions & actions' },
    { icon: Server, title: 'DDoS Protection', desc: 'Enterprise-grade DDoS mitigation & load balancing' },
    { icon: AlertTriangle, title: 'Real-time Alerts', desc: 'Suspicious activity detection & instant notifications' },
    { icon: FileCheck, title: 'Regular Security Audits', desc: 'Quarterly penetration testing & vulnerability scans' }
  ];

  const certifications = [
    { name: 'SEBI Registered', icon: '📋' },
    { name: 'ISO 27001', icon: '🏆' },
    { name: 'PCI DSS', icon: '💳' },
    { name: 'SOC 2 Type II', icon: '✅' }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-[#0d1b2e] via-[#0A1628] to-[#0d1b2e]"
      id="security"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-red-500/20 to-[#FFD700]/20 rounded-full mb-5 border border-red-500/30">
            <span className="font-bold text-red-400 uppercase tracking-wide text-sm">
              Security & Compliance
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 text-white">
            Enterprise-Grade{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#FFD700]">
              Security
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Your data and your clients' data are protected with institutional-level security measures
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08 }}
                className="bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-xl p-5 hover:border-red-500/30 hover:bg-white/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-black text-white mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-400">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-black text-center text-white mb-6">
            Certifications & Compliance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border-2 border-[#FFD700]/30 rounded-xl p-6 text-center hover:bg-white/10 transition-all"
              >
                <div className="text-4xl mb-2">{cert.icon}</div>
                <div className="text-sm font-bold text-white">{cert.name}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
