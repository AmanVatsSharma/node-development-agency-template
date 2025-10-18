"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

// Console log for page initialization - debugging support
console.log("About Page: Initializing lightweight instant-load about page");

export default function AboutPage() {
  // State for animated counters - lightweight implementation
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    countries: 0,
    team: 0,
  });

  // Quick counter animation on mount
  useEffect(() => {
    console.log("About Page: Loading counters");
    const targets = { clients: 500, projects: 1200, countries: 6, team: 50 };
    
    // Fast animation (500ms total)
    const duration = 500;
    const steps = 10;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      
      setCounters({
        clients: Math.floor(targets.clients * progress),
        projects: Math.floor(targets.projects * progress),
        countries: Math.floor(targets.countries * progress),
        team: Math.floor(targets.team * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
        console.log("About Page: Counters loaded");
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  console.log("About Page: Rendering lightweight version");

  return (
    <div className="w-full">
      {/* Hero Section - Simple and Fast */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-32">
        {/* Simple background pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 border border-amber-500/30 rounded-full backdrop-blur-sm">
              <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">Premium Enterprise Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-amber-200 via-slate-100 to-amber-300 bg-clip-text text-transparent">
              Enterprise Hero
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto mb-10 font-light leading-relaxed">
              Global Leaders in Enterprise-Grade Node.js Development & Digital Transformation
            </p>
            
            {/* Trust Indicators - Instant Load */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-600/20 border border-amber-500/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                    {counters.clients}+
                  </div>
                </div>
                <div className="text-sm md:text-base text-slate-300 font-medium">Fortune 500 Clients</div>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-600/20 border border-amber-500/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                    {counters.projects}+
                  </div>
                </div>
                <div className="text-sm md:text-base text-slate-300 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-600/20 border border-amber-500/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                    {counters.countries}
                  </div>
                </div>
                <div className="text-sm md:text-base text-slate-300 font-medium">Global Offices</div>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-600/20 border border-amber-500/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                    {counters.team}+
                  </div>
                </div>
                <div className="text-sm md:text-base text-slate-300 font-medium">Expert Team</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
              <motion.a
                href="/pages/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:via-yellow-400 hover:to-amber-500 text-slate-900 rounded-full font-bold transition-all duration-300 shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/70"
                onClick={() => console.log("About Page: Start Project CTA clicked")}
              >
                <span className="flex items-center gap-2 justify-center">
                  Start Your Project
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.a>
              <motion.a
                href="/pages/portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-slate-800/50 border-2 border-amber-500/50 hover:border-amber-400 hover:bg-slate-800/70 text-amber-100 hover:text-amber-50 rounded-full font-bold transition-all duration-300 backdrop-blur-sm"
                onClick={() => console.log("About Page: View Case Studies CTA clicked")}
              >
                View Case Studies
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Reach Section - Simple and Clean */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 dark:from-gray-950 dark:via-slate-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border border-amber-500/20 rounded-full backdrop-blur-sm">
              <span className="text-amber-600 dark:text-amber-400 text-sm font-bold tracking-wider uppercase">Worldwide Presence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-amber-200 dark:via-slate-100 dark:to-amber-200 bg-clip-text text-transparent">
              Our Global Reach
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-light">
              Delivering enterprise solutions across 6 countries with world-class development centers
            </p>
          </motion.div>

          {/* Office Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                city: "Gurugram",
                country: "India",
                type: "Global Headquarters",
                icon: "🏢",
              },
              {
                city: "Dubai",
                country: "UAE",
                type: "Middle East Hub",
                icon: "🌆",
              },
              {
                city: "California",
                country: "USA",
                type: "Tech Innovation Center",
                icon: "🚀",
              },
              {
                city: "Toronto",
                country: "Canada",
                type: "North American Operations",
                icon: "🍁",
              },
              {
                city: "Shenzhen",
                country: "China",
                type: "Asia-Pacific Hub",
                icon: "🌏",
              },
              {
                city: "Bangalore",
                country: "India",
                type: "Development Excellence Center",
                icon: "💻",
              },
            ].map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/30 dark:border-amber-500/20"
                onClick={() => console.log(`About Page: Clicked on ${office.city} office`)}
              >
                <div className="text-5xl mb-4">{office.icon}</div>
                <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">{office.city}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 font-medium">{office.country}</p>
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30 rounded-full">
                  <p className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wide">{office.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We partner with Fortune 500 companies and innovative startups to deliver mission-critical applications
            </p>
          </motion.div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { label: "Client Satisfaction", value: "99.8%", icon: "⭐" },
              { label: "On-Time Delivery", value: "100%", icon: "⚡" },
              { label: "Average ROI", value: "340%", icon: "📈" },
              { label: "Years Experience", value: "10+", icon: "🏆" },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-3">{metric.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Stack */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8">
              Enterprise Technology Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {["Node.js", "TypeScript", "Python", "SAP"].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
                  onClick={() => console.log(`About Page: Tech stack ${tech} clicked`)}
                >
                  <div className="w-16 h-16 mb-3 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                      {tech.substring(0, 2)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 p-10 rounded-2xl shadow-xl"
            >
              <div className="w-16 h-16 bg-blue-600 dark:bg-cyan-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                To revolutionize global businesses through enterprise-grade Node.js development and cutting-edge digital solutions. 
                We deliver mission-critical applications that power Fortune 500 companies worldwide.
              </p>
              <ul className="space-y-3">
                {[
                  "Enterprise-Grade Solutions",
                  "24/7 Global Support",
                  "Scalable Architecture",
                  "Security First Approach",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 text-blue-600 dark:text-cyan-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 p-10 rounded-2xl shadow-xl"
            >
              <div className="w-16 h-16 bg-purple-600 dark:bg-pink-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                To be the world's leading Node.js development agency, recognized for technical excellence, 
                global presence, and commitment to digital transformation.
              </p>
              <ul className="space-y-3">
                {[
                  "Global Market Leadership",
                  "Innovation & Research",
                  "Sustainable Growth",
                  "Client Success Partnership",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 text-purple-600 dark:text-pink-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that drive our success and shape our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from code quality to client communication. Our commitment to delivering premium solutions drives us to continuously improve and innovate.",
                icon: "shield",
                badge: "99.8% Quality Score",
                color: "blue"
              },
              {
                title: "Collaboration",
                description: "We believe in the power of collaboration, both within our team and with our clients. By working together, we create solutions that truly address business needs.",
                icon: "users",
                badge: "500+ Team Projects",
                color: "purple"
              },
              {
                title: "Innovation",
                description: "Innovation is at the heart of what we do. We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
                icon: "lightbulb",
                badge: "150+ Innovations",
                color: "green"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                onClick={() => console.log(`About Page: Value ${value.title} card clicked`)}
              >
                <div className={`w-16 h-16 bg-${value.color}-100 dark:bg-${value.color}-900 rounded-full flex items-center justify-center mb-6`}>
                  <svg className={`w-8 h-8 text-${value.color}-600 dark:text-${value.color}-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {value.icon === "shield" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                    {value.icon === "users" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
                    {value.icon === "lightbulb" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />}
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {value.description}
                </p>
                <div className={`inline-block px-4 py-2 bg-${value.color}-50 dark:bg-${value.color}-900/20 text-${value.color}-600 dark:text-${value.color}-400 rounded-full text-sm font-semibold`}>
                  {value.badge}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success <span className="text-blue-600 dark:text-cyan-400">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real results from real clients across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                industry: "E-Commerce",
                company: "Fortune 500 Retailer",
                challenge: "Legacy system modernization",
                result: "300% performance improvement",
                roi: "450% ROI in 6 months",
                icon: "🛒",
              },
              {
                industry: "Healthcare",
                company: "Global Health Provider",
                challenge: "HIPAA-compliant platform",
                result: "5M+ patients served",
                roi: "Zero security incidents",
                icon: "🏥",
              },
              {
                industry: "FinTech",
                company: "Digital Banking Platform",
                challenge: "Real-time transaction processing",
                result: "10K transactions/sec",
                roi: "99.99% uptime achieved",
                icon: "💳",
              },
            ].map((caseStudy, index) => (
              <motion.div
                key={caseStudy.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => console.log(`About Page: Case study ${caseStudy.company} clicked`)}
              >
                <div className="text-5xl mb-4">{caseStudy.icon}</div>
                <div className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mb-2">
                  {caseStudy.industry}
                </div>
                <h3 className="text-xl font-bold mb-4">{caseStudy.company}</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Challenge</div>
                    <div className="font-medium">{caseStudy.challenge}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Result</div>
                    <div className="font-bold text-green-600 dark:text-green-400">{caseStudy.result}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Impact</div>
                    <div className="font-bold text-purple-600 dark:text-purple-400">{caseStudy.roi}</div>
                  </div>
                </div>
                <button className="text-blue-600 dark:text-cyan-400 font-semibold hover:underline">
                  Read Full Case Study →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Trusted by industry leaders worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Enterprise Hero transformed our digital infrastructure. Their expertise in Node.js and enterprise architecture is unmatched.",
                author: "Sarah Johnson",
                role: "CTO, Fortune 500 Tech Company",
                rating: 5,
              },
              {
                quote: "The team's professionalism and technical depth exceeded our expectations. They delivered on time and within budget.",
                author: "Michael Chen",
                role: "VP Engineering, Global FinTech",
                rating: 5,
              },
              {
                quote: "Working with Enterprise Hero was a game-changer. Their global team provided round-the-clock support and exceptional results.",
                author: "Emma Rodriguez",
                role: "CEO, Healthcare Startup",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="font-bold text-gray-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Founder</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Visionary leadership driving global innovation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-purple-600 p-12 flex flex-col items-center justify-center text-white">
                  <div className="w-40 h-40 bg-white/20 rounded-full mb-6 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Aman Kumar Sharma</h3>
                  <p className="text-blue-100 text-lg mb-6">Founder & CEO</p>
                  <div className="space-y-2 text-center">
                    <p className="text-sm">🌍 6 Countries</p>
                    <p className="text-sm">💼 500+ Clients</p>
                    <p className="text-sm">🏆 10+ Years Experience</p>
                  </div>
                </div>
                <div className="md:w-3/5 p-10">
                  <h4 className="text-2xl font-bold mb-6 text-blue-600 dark:text-cyan-400">
                    Visionary Leader & Tech Entrepreneur
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Aman Kumar Sharma founded Enterprise Hero with a vision to create a globally recognized 
                    Node.js development agency that delivers enterprise-grade solutions to clients worldwide.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    His expertise in enterprise architecture, digital transformation, and global business operations has positioned 
                    Enterprise Hero as a trusted partner for mission-critical applications.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <h5 className="font-bold text-gray-900 dark:text-white">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {[
                        "Built global team across 6 countries",
                        "Delivered 1200+ enterprise projects",
                        "Achieved 99.8% client satisfaction rate",
                        "Led digital transformation for Fortune 500"
                      ].map((achievement, index) => (
                        <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Certifications */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Certified & <span className="text-blue-600 dark:text-cyan-400">Trusted</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Industry certifications and strategic partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "ISO 27001", desc: "Security Certified" },
              { name: "AWS Partner", desc: "Advanced Tier" },
              { name: "Microsoft Gold", desc: "Partner Status" },
              { name: "SOC 2 Type II", desc: "Compliance" },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 py-24">
        <div className="absolute inset-0 bg-[url('/noise.webp')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 border border-amber-500/30 rounded-full backdrop-blur-sm">
              <span className="text-amber-400 text-sm font-bold tracking-wider uppercase">Transform Your Business</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text text-transparent mb-8">
              Ready to Achieve Excellence?
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light max-w-3xl mx-auto">
              Join 500+ Fortune 500 companies who trust Enterprise Hero 
              for their enterprise-grade Node.js development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
              {[
                { icon: "⚡", text: "24/7 Global Support", desc: "Always available" },
                { icon: "🚀", text: "Rapid Deployment", desc: "Fast delivery" },
                { icon: "🔒", text: "Enterprise Security", desc: "Bank-grade protection" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-6 rounded-2xl border border-amber-500/20"
                >
                  <div className="text-5xl mb-3">{feature.icon}</div>
                  <div className="text-white font-bold text-lg mb-1">{feature.text}</div>
                  <div className="text-amber-300/70 text-sm">{feature.desc}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <motion.a
                href="/pages/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:via-yellow-400 hover:to-amber-500 text-slate-900 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl shadow-amber-500/50"
                onClick={() => console.log("About Page: Final CTA - Contact Global Team clicked")}
              >
                <span className="flex items-center gap-2 justify-center">
                  Contact Our Global Team
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.a>
              <motion.a
                href="/pages/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-slate-800/50 border-2 border-amber-500/50 hover:border-amber-400 hover:bg-slate-800/70 text-amber-100 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-sm"
                onClick={() => console.log("About Page: Final CTA - Schedule Consultation clicked")}
              >
                Schedule Consultation
              </motion.a>
            </div>

            <div className="flex items-center justify-center gap-6 text-amber-200/80 text-sm">
              <span className="flex items-center gap-2">
                <span className="text-amber-400">🌍</span> 6 countries
              </span>
              <span className="text-amber-500/50">•</span>
              <span className="flex items-center gap-2">
                <span className="text-amber-400">💼</span> 500+ clients
              </span>
              <span className="text-amber-500/50">•</span>
              <span className="flex items-center gap-2">
                <span className="text-amber-400">⭐</span> 99.8% satisfaction
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

console.log("About Page: Lightweight component definition completed successfully");
