"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const industries = [
  {
    id: 'ecommerce',
    title: 'Ecommerce',
    pain: 'High returns, slow search, low conversion',
    solution: 'Headless commerce, search relevance, personalization',
    outcomes: ['+25% conversion', '-35% returns', 'Sub‑200ms search'],
    color: 'blue'
  },
  {
    id: 'finance',
    title: 'Finance',
    pain: 'Real‑time analytics, fraud detection, compliance',
    solution: 'Event‑driven pipelines, dashboards, audit‑ready controls',
    outcomes: ['2M+ tx/day', '+40% fraud catch', 'GDPR/SOC aligned'],
    color: 'indigo'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    pain: 'Downtime, manual workflows, siloed data',
    solution: 'IoT streams, predictive maintenance, unified data',
    outcomes: ['-45% downtime', '-30% maintenance cost', 'Live KPIs'],
    color: 'emerald'
  },
  {
    id: 'logistics',
    title: 'Logistics',
    pain: 'Routing inefficiency, lack of visibility',
    solution: 'Optimization services, real‑time tracking, alerts',
    outcomes: ['-20% delivery cost', '+18% on‑time', 'Multi‑tenant'],
    color: 'orange'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    pain: 'Data privacy, interoperability, patient experience',
    solution: 'Secure APIs, consent mgmt, portals and analytics',
    outcomes: ['HIPAA patterns', 'Faster intake', 'Better outcomes'],
    color: 'rose'
  }
];

export default function IndustriesPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 md:py-28 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries We Empower</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored enterprise solutions that solve industry‑specific challenges and move the needle on core KPIs.
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className={`h-2 bg-${ind.color}-600`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{ind.title}</h3>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Pain: {ind.pain}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">Solution: {ind.solution}</div>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {ind.outcomes.map((o, i) => (
                    <li key={i} className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full text-xs text-gray-700 dark:text-gray-300">
                      {o}
                    </li>
                  ))}
                </ul>
                <Link href="/pages/contact" className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
                  Discuss Your Use Case
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">See Industry Case Studies</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Explore how we deliver measurable outcomes across sectors.</p>
          <Link href="/pages/portfolio" className="px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 rounded-full font-medium transition">
            View Case Studies
          </Link>
        </div>
      </section>
    </div>
  );
}

