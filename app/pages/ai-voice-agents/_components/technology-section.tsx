'use client';

/**
 * Technology Stack Section
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Mic, Phone, Workflow, Server } from 'lucide-react';

export function TechnologySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const technologies = [
    { name: 'OpenAI / Gemini Voice Models', icon: Mic },
    { name: 'ElevenLabs / Azure Speech APIs', icon: Code2 },
    { name: 'Twilio / Exotel Voice Gateways', icon: Phone },
    { name: 'LangChain / Flowise Automations', icon: Workflow },
    { name: 'Node.js / Next.js / NestJS backend', icon: Server }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-900"
      id="technology"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full mb-5 border border-blue-200 dark:border-blue-800">
            <span className="font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide text-sm">
              Technology We Use
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 text-gray-900 dark:text-white">
            Powered by Enterprise-Grade Tech
          </h2>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Enterprise-grade tech, simplified for Indian businesses
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#FF7A00] dark:hover:border-[#FF7A00] transition-all shadow-lg hover:shadow-2xl"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0B1E39] to-[#FF7A00] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <div className="font-bold text-gray-900 dark:text-white text-lg">
                  {tech.name}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
