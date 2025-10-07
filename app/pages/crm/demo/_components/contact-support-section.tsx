'use client';

/**
 * @fileoverview Contact Support Section - EnterpriseHero CRM Demo
 * @description Support contact information
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MessageCircle, Clock } from 'lucide-react';

console.log('[CRM-Demo] ContactSupportSection component loaded');

export function ContactSupportSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  const contacts = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email Support',
      value: 'support@enterprisehero.in',
      action: 'mailto:support@enterprisehero.in',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: 'Phone',
      value: '(+91) 99999-xxxxx',
      action: 'tel:+919999900000',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      label: 'WhatsApp Business',
      value: 'Chat with us',
      action: 'https://wa.me/919999900000',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      id="contact"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Need Help? <span className="bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#00C897] bg-clip-text text-transparent">We're Here</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Our team is ready to answer any questions about EnterpriseHero CRM
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.action}
                target={contact.action.startsWith('http') ? '_blank' : undefined}
                rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-[#FFD700] shadow-xl hover:shadow-2xl transition-all">
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.color} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                    {contact.icon}
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">
                    {contact.label}
                  </h3>

                  {/* Value */}
                  <p className="text-base font-semibold text-[#002F9E] dark:text-[#FFD700]">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Support Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-xl rounded-2xl border-2 border-[#FFD700] shadow-xl">
              <Clock className="h-6 w-6 text-[#FFD700]" />
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900 dark:text-white">
                  Support Hours
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Monday - Friday: 9 AM - 7 PM IST | Saturday: 10 AM - 4 PM IST
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
