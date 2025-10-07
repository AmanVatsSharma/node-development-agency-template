'use client';

/**
 * @fileoverview Security & Reliability Section - EnterpriseHero CRM
 * @description Dark section with security features and gold shield icon
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Server, 
  Key, 
  Database,
  FileCheck,
  AlertCircle
} from 'lucide-react';

console.log('[CRM] SecuritySection component loaded');

export function SecuritySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <Server className="h-6 w-6" />,
      title: 'Host on Your Server',
      description: 'Deploy on your own infrastructure or private cloud. Complete sovereignty over your data.'
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: '256-bit SSL',
      description: 'Bank-grade encryption for all data transmission. HTTPS enforced across all endpoints.'
    },
    {
      icon: <Key className="h-6 w-6" />,
      title: 'Role-Based Access',
      description: 'Granular permissions system. Control who sees what, down to field level.'
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Daily Backups',
      description: 'Automated backups with point-in-time recovery. Never lose your critical business data.'
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: 'Audit Logs',
      description: 'Complete activity tracking. Know who changed what and when, for compliance.'
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: 'SOC 2 Ready',
      description: 'Built with enterprise compliance standards. GDPR, HIPAA compatible architecture.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      id="security"
    >
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
      
      {/* Animated Gold Glows */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFA500] rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            {/* Gold Shield Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.5 }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center shadow-2xl">
                  <Shield className="h-16 w-16 text-[#002F9E]" />
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-3xl blur-2xl opacity-50 -z-10" />
              </div>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Security & <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent">Reliability</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade security built in. Your data is protected at every layer with military-grade encryption.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-[#FFD700]/30 hover:border-[#FFD700] transition-all shadow-xl hover:shadow-2xl hover:shadow-[#FFD700]/20">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-[#002F9E] mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-white mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 backdrop-blur-xl rounded-2xl border border-[#FFD700]/40 shadow-2xl">
              <Shield className="h-6 w-6 text-[#FFD700]" />
              <span className="text-base sm:text-lg font-bold text-white">
                99.9% Uptime SLA | 24/7 Security Monitoring | ISO Compliant
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
