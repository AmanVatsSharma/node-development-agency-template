'use client';

/**
 * @fileoverview Developer Resources Section
 * @description Links to documentation, SDKs, and support
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Book, Code, Download, MessageCircle, FileText, Video } from 'lucide-react';

export function DeveloperResourcesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const resources = [
    {
      icon: <Book className="h-8 w-8" />,
      title: 'API Documentation',
      description: 'Complete API reference with examples and best practices',
      link: '#',
      color: 'from-[#00FF88] to-[#00CC70]'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Code Examples',
      description: 'Ready-to-use code snippets in Python, JavaScript, Java, C++',
      link: '#',
      color: 'from-[#FFD700] to-[#FFA500]'
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: 'Download SDKs',
      description: 'Official SDKs for popular programming languages',
      link: '#',
      color: 'from-[#00FF88] to-[#00CC70]'
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides to get started quickly',
      link: '#',
      color: 'from-[#FFD700] to-[#FFA500]'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Technical Blog',
      description: 'Latest updates, tips, and technical articles',
      link: '#',
      color: 'from-[#00FF88] to-[#00CC70]'
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Developer Support',
      description: '24/7 technical support via Slack, email, and phone',
      link: '#',
      color: 'from-[#FFD700] to-[#FFA500]'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-br from-[#0B1E39] via-[#0a1929] to-[#050b14] relative overflow-hidden"
      id="developer-resources"
    >
      {/* Background */}
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
            <Code className="h-4 w-4 text-[#00FF88]" />
            <span className="text-[#00FF88] font-bold text-sm">DEVELOPER RESOURCES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white">
            Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#FFD700]">Get Started</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comprehensive documentation, SDKs, and support to help you integrate quickly
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.link}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-[#00FF88]/50 transition-all duration-300 group hover:scale-105"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${resource.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                {resource.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#00FF88] transition-colors">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-sm">
                {resource.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-2 text-[#00FF88] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn More</span>
                <span>→</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Support Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-[#00FF88]/10 to-[#FFD700]/10 backdrop-blur-xl rounded-2xl p-8 border border-[#00FF88]/30 text-center"
        >
          <h3 className="text-2xl font-black text-white mb-2">Need Help Getting Started?</h3>
          <p className="text-white/80 mb-6">Our developer support team is here to help you 24/7</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:support@yourservice.com"
              className="px-6 py-3 bg-gradient-to-r from-[#00FF88] to-[#00CC70] text-[#0B1E39] font-bold rounded-xl hover:scale-105 transition-all"
            >
              📧 Email Support
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-xl hover:bg-white/20 transition-all"
            >
              💬 Join Slack Community
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Market-Data-API] DeveloperResourcesSection loaded');
