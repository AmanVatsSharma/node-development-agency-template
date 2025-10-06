'use client';

/**
 * Deliverables Section Component
 * Shows transparency on what clients receive
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FileText, 
  Code, 
  Gauge, 
  Link2, 
  FileSearch, 
  MessageSquare,
  CheckCircle2,
  BarChart3,
  MapPin
} from 'lucide-react';

export function DeliverablesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const deliverables = [
    {
      icon: FileText,
      title: 'Executive Summary + Full PDF',
      description: '1-page executive summary plus comprehensive audit report',
      impact: 'High'
    },
    {
      icon: CheckCircle2,
      title: 'Prioritized Issue List',
      description: 'P1/P2/P3 priority fixes with code snippets & screenshots',
      impact: 'High'
    },
    {
      icon: Gauge,
      title: 'Lighthouse + PageSpeed Results',
      description: 'Desktop & mobile Core Web Vitals analysis',
      impact: 'High'
    },
    {
      icon: Link2,
      title: 'Crawl Errors & Redirect Map',
      description: 'Broken links, redirect chains, 4xx/5xx errors',
      impact: 'High'
    },
    {
      icon: FileSearch,
      title: 'XML Sitemap & Robots.txt Check',
      description: 'Validation + suggested edits for crawlability',
      impact: 'Medium'
    },
    {
      icon: Code,
      title: 'Structured Data & Schema Fixes',
      description: 'JSON-LD snippets for rich results',
      impact: 'Medium'
    },
    {
      icon: Link2,
      title: 'Backlink Health Snapshot',
      description: 'Toxic links + top referring domains (paid plans)',
      impact: 'High'
    },
    {
      icon: BarChart3,
      title: 'Keyword Ranking Gaps',
      description: 'Content topics & keyword opportunities',
      impact: 'Medium'
    },
    {
      icon: MessageSquare,
      title: '60-Min Strategy Call',
      description: 'Recorded video call + meeting minutes',
      impact: 'High'
    }
  ];

  const technicalChecks = [
    { check: 'Title tags & meta descriptions', impact: 'High' },
    { check: 'H1–H3 structure & content relevancy', impact: 'High' },
    { check: 'Canonical tags & duplicate content', impact: 'High' },
    { check: 'Robots.txt & sitemap.xml presence', impact: 'Medium' },
    { check: 'HTTPS certificate & mixed content', impact: 'High' },
    { check: 'Mobile usability & viewport', impact: 'High' },
    { check: 'Core Web Vitals (LCP, CLS, FID/INP)', impact: 'High' },
    { check: 'Structured data (JSON-LD) & FAQ schema', impact: 'Medium' },
    { check: 'Duplicate meta / thin pages', impact: 'Medium' },
    { check: 'Backlink profile & toxicity', impact: 'High' },
    { check: 'Indexability & crawl budget issues', impact: 'Medium' },
    { check: 'hreflang (if multilingual)', impact: 'Medium' },
    { check: 'Redirect chains & 4xx/5xx errors', impact: 'High' },
    { check: 'Image alt text, compression & lazy load', impact: 'Medium' },
    { check: 'Page speed optimization (critical CSS, preconnect)', impact: 'High' }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case 'high':
        return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30';
      case 'medium':
        return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30';
      default:
        return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30';
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-950"
      id="deliverables"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 border border-blue-200 dark:border-blue-800">
            <span className="text-sm font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
              Complete Transparency
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            What You'll Receive
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive audit deliverables with actionable insights and clear implementation steps
          </p>
        </motion.div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {deliverables.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {item.description}
                    </p>
                    <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full ${getImpactColor(item.impact)}`}>
                      {item.impact} Impact
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Checks Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              Complete On-Page & Technical Checklist
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Every audit includes comprehensive checks across 15+ critical SEO factors:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {technicalChecks.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700"
                >
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-sm text-gray-900 dark:text-white font-medium">
                      {item.check}
                    </span>
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${getImpactColor(item.impact)}`}>
                      {item.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Prioritization Logic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-2xl p-6 border border-purple-200 dark:border-purple-800 max-w-3xl">
            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
              📊 Our Prioritization Formula
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <code className="bg-white dark:bg-gray-800 px-3 py-1 rounded text-sm font-mono">
                Severity × Frequency × Business Impact = Priority Score
              </code>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Example: Missing HTTPS (Severity: 9) on all pages (Frequency: High) × Business Impact (High) → <strong>P1 Priority</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
