"use client";

import Link from 'next/link';
import LeadCapture from '@/app/components/LeadCapture';
import { motion } from 'framer-motion';

export default function EnterprisePage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise Solutions for Mission-Critical Outcomes
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Modernize legacy platforms, automate workflows, and scale globally with secure, compliant, and high‑performance Node.js architectures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pages/contact" className="px-8 py-3 bg-white text-blue-700 hover:bg-gray-100 rounded-full font-medium transition">
                Talk to an Architect
              </Link>
              <Link href="/pages/portfolio" className="px-8 py-3 border-2 border-white hover:bg-white/10 rounded-full font-medium transition">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Executive Overview</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              We build enterprise platforms with measurable impact. Our teams combine modern Node.js stacks, robust cloud architecture, and automation to increase productivity, reduce operational cost, and accelerate revenue.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { kpi: '99.9%+', label: 'Uptime Targets' },
                { kpi: '50%+', label: 'Productivity Gains' },
                { kpi: '60% faster', label: 'Reporting & Insights' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{item.kpi}</div>
                  <div className="text-gray-600 dark:text-gray-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Why Enterprise Hero</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-blue-500 mr-3 mt-2"></span> Global delivery with follow‑the‑sun execution</li>
              <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-blue-500 mr-3 mt-2"></span> Secure‑by‑design architecture & compliance readiness</li>
              <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-blue-500 mr-3 mt-2"></span> Performance engineering and SRE best practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white">Enterprise Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Platform Modernization',
                desc: 'Replace legacy monoliths with microservices, event‑driven patterns, and robust CI/CD.',
              },
              {
                title: 'Workflow Automation',
                desc: 'Automate business processes and approvals with secure APIs and orchestration.',
              },
              {
                title: 'Data & Insights',
                desc: 'Real‑time analytics dashboards, reporting pipelines, and BI integrations.',
              },
              {
                title: 'Scalable APIs',
                desc: 'REST/GraphQL gateways, versioning strategies, and developer experience tooling.',
              },
              {
                title: 'Security & Compliance',
                desc: 'Zero‑trust patterns, secrets management, auditing, and GDPR/SOC‑aligned controls.',
              },
              {
                title: 'Immersive 3D',
                desc: 'Interactive 3D for product, training, and sales enablement to drive engagement.',
              },
            ].map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{c.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture & Security */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Reference Architecture</h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>APIs: Node.js, GraphQL/REST, gateway & rate‑limiting</li>
              <li>Services: Microservices, queue/event bus, caching (Redis)</li>
              <li>Data: PostgreSQL, time‑series/warehouse, search</li>
              <li>Ops: Kubernetes, IaC, blue/green, observability</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Security & Compliance</h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>Principle of least privilege, secrets management</li>
              <li>Audit trails, encryption at rest and in transit</li>
              <li>GDPR/SOC‑aligned controls and data residency options</li>
              <li>Vulnerability scanning, SAST/DAST in CI</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Delivery Model */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Global Delivery, SLA‑Backed</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Offices in India, Dubai, California, Toronto, and Shenzhen enable 24/7 coverage with dedicated PMs, architects, and SREs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Discovery', desc: 'Requirements, risks, and ROI model' },
              { step: '2', title: 'Blueprint', desc: 'Architecture, delivery plan, and SLAs' },
              { step: '3', title: 'Build & Scale', desc: 'Agile delivery, reliability, and growth' },
            ].map((s, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-3">{s.step}</div>
                <h3 className="text-lg font-bold mb-1 text-gray-800 dark:text-white">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <LeadCapture headline="Talk to an Enterprise Architect" subhead="Get a free modernization blueprint and ROI estimate." interestDefault="enterprise" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Book an Enterprise Consultation</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Speak with a senior architect about your modernization roadmap, security posture, and scaling strategy.
          </p>
          <Link href="/pages/contact" className="px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 rounded-full font-medium transition">
            Talk to an Architect
          </Link>
        </div>
      </section>
    </div>
  );
}

