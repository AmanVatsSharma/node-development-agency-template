"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import AnimatedIllustration from "../../components/AnimatedIllustration";
import { LampContainer } from "../../components/lamp";
import { WorldMap } from "../../components/ui/world-map";

// Console log for page initialization
console.log("About Page: Initializing enterprise-grade about page component");

export default function AboutPage() {
  // State for animated counters
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    countries: 0,
    team: 0,
  });

  // Animate counters on mount
  useEffect(() => {
    console.log("About Page: Starting counter animations");
    try {
      const targets = { clients: 500, projects: 1200, countries: 6, team: 50 };
      const duration = 2000; // 2 seconds
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          clients: Math.floor(targets.clients * progress),
          projects: Math.floor(targets.projects * progress),
          countries: Math.floor(targets.countries * progress),
          team: Math.floor(targets.team * progress),
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
          console.log("About Page: Counter animations completed");
        }
      }, interval);

      return () => {
        clearInterval(timer);
        console.log("About Page: Cleaning up counter animations");
      };
    } catch (error) {
      console.error("About Page: Error in counter animation:", error);
    }
  }, []);

  // World map connection data showing global reach
  const worldMapDots = [
    {
      start: { lat: 28.7041, lng: 77.1025 }, // Delhi/Gurugram (HQ)
      end: { lat: 25.2048, lng: 55.2708 }, // Dubai
    },
    {
      start: { lat: 28.7041, lng: 77.1025 }, // Delhi/Gurugram
      end: { lat: 37.7749, lng: -122.4194 }, // San Francisco/California
    },
    {
      start: { lat: 28.7041, lng: 77.1025 }, // Delhi/Gurugram
      end: { lat: 43.6532, lng: -79.3832 }, // Toronto
    },
    {
      start: { lat: 28.7041, lng: 77.1025 }, // Delhi/Gurugram
      end: { lat: 22.5431, lng: 114.0579 }, // Shenzhen
    },
    {
      start: { lat: 28.7041, lng: 77.1025 }, // Delhi/Gurugram
      end: { lat: 12.9716, lng: 77.5946 }, // Bangalore
    },
    {
      start: { lat: 28.7041, lng: 77.1025 }, // Delhi/Gurugram
      end: { lat: 28.5355, lng: 77.3910 }, // Noida
    },
  ];

  console.log("About Page: Rendering with world map connections:", worldMapDots.length);

  return (
    <div className="w-full">
      {/* Hero Section with Lamp Component */}
      <section className="relative overflow-hidden">
        <LampContainer>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 text-center px-4"
          >
            <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-7xl mb-6">
              Enterprise Hero
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              Global Leaders in Enterprise-Grade Node.js Development & Digital Transformation
            </p>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {counters.clients}+
                </div>
                <div className="text-sm md:text-base text-slate-400">Fortune 500 Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {counters.projects}+
                </div>
                <div className="text-sm md:text-base text-slate-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {counters.countries}
                </div>
                <div className="text-sm md:text-base text-slate-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {counters.team}+
                </div>
                <div className="text-sm md:text-base text-slate-400">Expert Team</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-semibold transition duration-300 shadow-lg"
                onClick={() => console.log("About Page: Start Project CTA clicked")}
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-slate-300 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 rounded-full font-semibold transition duration-300"
                onClick={() => console.log("About Page: View Case Studies CTA clicked")}
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </LampContainer>
      </section>

      {/* Global Reach with World Map */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-blue-600 dark:text-cyan-400">Global Reach</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Delivering enterprise solutions across 6 countries with a network of world-class development centers
            </p>
          </motion.div>

          {/* World Map Component */}
          <div className="max-w-6xl mx-auto mb-12">
            <WorldMap dots={worldMapDots} lineColor="#06b6d4" />
          </div>

          {/* Office Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              {
                city: "Gurugram",
                country: "India",
                type: "Global Headquarters",
                icon: "🏢",
                color: "blue",
              },
              {
                city: "Dubai",
                country: "UAE",
                type: "Middle East Hub",
                icon: "🌆",
                color: "purple",
              },
              {
                city: "California",
                country: "USA",
                type: "Tech Innovation Center",
                icon: "🚀",
                color: "cyan",
              },
              {
                city: "Toronto",
                country: "Canada",
                type: "North American Operations",
                icon: "🍁",
                color: "green",
              },
              {
                city: "Shenzhen",
                country: "China",
                type: "Asia-Pacific Hub",
                icon: "🌏",
                color: "orange",
              },
              {
                city: "Bangalore",
                country: "India",
                type: "Development Excellence Center",
                icon: "💻",
                color: "pink",
              },
            ].map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
                onClick={() => console.log(`About Page: Clicked on ${office.city} office`)}
              >
                <div className="text-4xl mb-3">{office.icon}</div>
                <h3 className="text-xl font-bold mb-1">{office.city}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{office.country}</p>
                <p className="text-sm font-medium text-blue-600 dark:text-cyan-400">{office.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Client Logos & Stats */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

          {/* Technology Stack Logos */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8">
              Enterprise Technology Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {["Node.js", "TypeScript", "Python", "SAP"].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all"
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

      {/* Mission & Vision - Enhanced */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
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
                We deliver mission-critical applications that power Fortune 500 companies worldwide, ensuring scalability, 
                security, and performance at every level.
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
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
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
                To be the world's leading Node.js development agency, recognized for our technical excellence, 
                global presence, and commitment to digital transformation. We envision a future where every enterprise 
                leverages our innovative solutions to achieve unprecedented growth and operational efficiency.
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

      {/* Core Values - Enhanced */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that drive our success and shape our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Excellence Value */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              onClick={() => console.log("About Page: Value Excellence card clicked")}
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We strive for excellence in everything we do, from code quality to client communication. Our commitment to delivering premium solutions drives us to continuously improve and innovate.
              </p>
              <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                99.8% Quality Score
              </div>
            </motion.div>

            {/* Collaboration Value */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              onClick={() => console.log("About Page: Value Collaboration card clicked")}
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We believe in the power of collaboration, both within our team and with our clients. By working together, we create solutions that truly address business needs and exceed expectations.
              </p>
              <div className="inline-block px-4 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold">
                500+ Team Projects
              </div>
            </motion.div>

            {/* Innovation Value */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              onClick={() => console.log("About Page: Value Innovation card clicked")}
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Innovation is at the heart of what we do. We constantly explore new technologies and approaches to deliver cutting-edge solutions that help our clients stay ahead in their industries.
              </p>
              <div className="inline-block px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold">
                150+ Innovations
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
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
            transition={{ duration: 0.6 }}
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
                quote: "Enterprise Hero transformed our digital infrastructure. Their expertise in Node.js and enterprise architecture is unmatched. A true partner in our digital transformation journey.",
                author: "Sarah Johnson",
                role: "CTO, Fortune 500 Tech Company",
                rating: 5,
              },
              {
                quote: "The team's professionalism and technical depth exceeded our expectations. They delivered a mission-critical application on time and within budget. Highly recommended!",
                author: "Michael Chen",
                role: "VP Engineering, Global FinTech",
                rating: 5,
              },
              {
                quote: "Working with Enterprise Hero was a game-changer for our business. Their global team provided round-the-clock support and delivered exceptional results.",
                author: "Emma Rodriguez",
                role: "CEO, Healthcare Startup",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
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

      {/* Founder Spotlight - Enhanced */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Founder</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Visionary leadership driving global innovation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-purple-600 p-12 flex flex-col items-center justify-center text-white">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-40 h-40 bg-white/20 rounded-full mb-6 flex items-center justify-center backdrop-blur-sm"
                  >
                    <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </motion.div>
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
                    Node.js development agency that delivers enterprise-grade solutions to clients worldwide. Under his leadership, 
                    the company has expanded to 6 countries, serving Fortune 500 companies and innovative startups.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    His expertise in enterprise architecture, digital transformation, and global business operations has positioned 
                    Enterprise Hero as a trusted partner for mission-critical applications and cutting-edge technological solutions.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <h5 className="font-bold text-gray-900 dark:text-white">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {[
                        "Built global team across 6 countries",
                        "Delivered 1200+ enterprise projects",
                        "Achieved 99.8% client satisfaction rate",
                        "Led digital transformation for Fortune 500 companies"
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

                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                      Enterprise Architecture
                    </span>
                    <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                      Global Operations
                    </span>
                    <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                      Digital Transformation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Certifications & Partnerships */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Certified & <span className="text-blue-600 dark:text-cyan-400">Trusted</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Industry certifications and strategic partnerships that validate our expertise
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
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

      {/* Final CTA with Lamp Effect */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('/noise.webp')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"
            />
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 relative z-10">
              Join 500+ Fortune 500 companies worldwide who trust Enterprise Hero 
              for their enterprise-grade Node.js development and digital solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: "⚡", text: "24/7 Global Support" },
                { icon: "🚀", text: "Rapid Deployment" },
                { icon: "🔒", text: "Enterprise Security" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <div className="text-white font-medium">{feature.text}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-bold text-lg transition duration-300 shadow-2xl shadow-cyan-500/50"
                onClick={() => console.log("About Page: Final CTA - Contact Global Team clicked")}
              >
                Contact Our Global Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full font-bold text-lg transition duration-300"
                onClick={() => console.log("About Page: Final CTA - Schedule Consultation clicked")}
              >
                Schedule Consultation
              </motion.button>
            </div>

            <p className="text-slate-400 mt-8 text-sm">
              🌍 Serving clients in 6 countries • 💼 500+ Fortune 500 clients • ⭐ 99.8% satisfaction rate
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

console.log("About Page: Component definition completed successfully"); 