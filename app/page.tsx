/**
 * @fileoverview Home Page - Enterprise Hero Website
 * @description Premium enterprise-grade home page with 12+ sections
 * Features:
 * - World-class 3D hero animation
 * - Animated statistics counters
 * - Technology stack showcase
 * - Industry verticals
 * - Client testimonials
 * - Global presence map
 * - Case studies with metrics
 * - Process timeline
 * - Trust signals and certifications
 * 
 * Built by: Vedpragya Bharat Private Limited
 * Founder: Aman Kumar Sharma
 */

import Image from "next/image";
import HeroAnimationWrapper from "./components/HeroAnimationWrapper";
import AnimatedIllustration from "./components/AnimatedIllustration";

// Import premium home page components
import StatsCounter from "./components/home/StatsCounter";
import TechStackShowcase from "./components/home/TechStackShowcase";
import IndustryShowcase from "./components/home/IndustryShowcase";
import WhyChooseUs from "./components/home/WhyChooseUs";
import TestimonialCarousel from "./components/home/TestimonialCarousel";
import ProcessTimeline from "./components/home/ProcessTimeline";
import CaseStudyShowcase from "./components/home/CaseStudyShowcase";
import GlobalPresence from "./components/home/GlobalPresence";

// Console log for debugging
console.log('[HomePage] Loading enterprise home page');

export default function Home() {
  console.log('[HomePage] Rendering home page');
  
  return (
    <div className="w-full">
      {/* ========================================
          SECTION 1: 3D HERO - WORLD CLASS
          ======================================== */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        {/* 3D Background - Full opacity for maximum impact - Camera controls active here */}
        <div className="absolute inset-0 pointer-events-auto">
          <HeroAnimationWrapper />
        </div>
        
        {/* Glassmorphism Text Overlay - COMPACT & POSITIONED LOWER - Blocks camera controls */}
        <div className="relative z-10 text-center px-4 w-full flex items-end justify-center pb-24 pointer-events-none">
          {/* Smaller Glass Card Container - Re-enable pointer events only on this card */}
          <div className="inline-block px-8 py-6 md:px-10 md:py-8 rounded-2xl backdrop-blur-sm bg-black/30 border border-white/20 shadow-2xl max-w-2xl pointer-events-auto">
            {/* Compact Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] via-[#00ffff] to-[#0080ff] drop-shadow-[0_0_30px_rgba(0,255,255,0.8)]">
                Enterprise Node.js Solutions
            </span>
          </h1>
          
            {/* Minimal Subtitle */}
            <p className="text-sm md:text-base mb-6 text-white/80 font-light">
              Scalable <span className="text-[#00ffff]">•</span> Secure <span className="text-[#00ffff]">•</span> High-Performance
            </p>
            
            {/* Compact CTA Button */}
            <a 
              href="/pages/contact"
              className="group relative inline-block px-8 py-3 bg-gradient-to-r from-[#00ff41] to-[#00ffff] text-black font-semibold text-base rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,65,0.8)]"
            >
              <span className="relative z-10">Explore Services →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff] to-[#00ff41] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
          </div>
          
        {/* Interactive Hints */}
        <div className="absolute top-8 left-8 z-10 pointer-events-none">
          <div className="bg-black/70 border-2 border-cyan-400/50 rounded-xl px-4 py-3 backdrop-blur-sm max-w-xs">
            <h3 className="text-cyan-400 text-sm font-bold mb-2 flex items-center gap-2">
              <span className="text-xl">✨</span> Interactive Experience
            </h3>
            <ul className="text-white/80 text-xs space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-green-400">▸</span>
                <span>Drag to rotate & explore</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">▸</span>
                <span>Hover over elements to highlight</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">▸</span>
                <span>Click for detailed information</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[#00ff41] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 2: STATISTICS COUNTER
          ======================================== */}
      <StatsCounter />

      {/* ========================================
          SECTION 3: SERVICES HIGHLIGHTS (ENHANCED)
          ======================================== */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Background Illustrations */}
        <div className="absolute top-10 left-4 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 opacity-10 hidden sm:block">
          <AnimatedIllustration
            src="/illustrations/undraw_cloud_hosting.svg"
            alt="Cloud hosting illustration"
            width={192}
            height={192}
            animationType="pulse"
            delay={0.2}
          />
        </div>
        <div className="absolute bottom-10 right-4 sm:right-10 w-32 h-32 sm:w-48 sm:h-48 opacity-10 hidden sm:block">
          <AnimatedIllustration
            src="/illustrations/undraw_mobile_app.svg"
            alt="Mobile app illustration"
            width={192}
            height={192}
            animationType="scale"
            delay={0.8}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Enterprise-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Node.js</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Building Scalable Systems for Global Enterprises with Cutting-Edge Technology
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-cyan-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Enterprise Node.js Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Mission-critical Node.js solutions for Fortune 500 companies. Microservices architecture, API-first design, and 99.9% uptime guarantees.
              </p>
              <a href="/pages/services" className="text-cyan-600 dark:text-cyan-400 font-semibold inline-flex items-center group-hover:underline">
                Learn More
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            {/* Service 2 */}
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-purple-500">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Real-Time Systems & APIs</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                High-performance real-time systems with WebSocket infrastructure, RESTful & GraphQL APIs, and event-driven architecture.
              </p>
              <a href="/pages/services" className="text-purple-600 dark:text-purple-400 font-semibold inline-flex items-center group-hover:underline">
                Learn More
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            {/* Service 3 */}
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-green-500">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Global Digital Transformation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                End-to-end digital transformation for multinational corporations. Cloud migration, DevOps automation, and compliance-ready solutions.
              </p>
              <a href="/pages/services" className="text-green-600 dark:text-green-400 font-semibold inline-flex items-center group-hover:underline">
                Learn More
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 4: TECHNOLOGY STACK
          ======================================== */}
      <TechStackShowcase />

      {/* ========================================
          SECTION 5: INDUSTRIES WE SERVE
          ======================================== */}
      <IndustryShowcase />

      {/* ========================================
          SECTION 6: WHY CHOOSE US
          ======================================== */}
      <WhyChooseUs />

      {/* ========================================
          SECTION 7: CASE STUDIES / SUCCESS STORIES
          ======================================== */}
      <CaseStudyShowcase />

      {/* ========================================
          SECTION 8: GREAT PRODUCT SOFTWARE
          ======================================== */}
      <section className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
        {/* Background Illustrations */}
        <div className="absolute top-20 left-20 w-56 h-56 opacity-5">
          <Image
            src="/illustrations/undraw_cloud_hosting.svg"
            alt="Cloud hosting illustration"
            width={224}
            height={224}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-20 right-20 w-56 h-56 opacity-5">
          <Image
            src="/illustrations/undraw_mobile_app.svg"
            alt="Mobile app illustration"
            width={224}
            height={224}
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Great Product Software by <span className="text-blue-600">Company</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive suite of enterprise-grade software solutions designed to transform businesses across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Promerchants */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Promerchants</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Best ecommerce platform with advanced features for modern online businesses. Complete solution for digital commerce.
              </p>
              <a href="#" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300">
                Explore Platform
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* TradeZen */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">TradeZen</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                World-class charting software platform for professional traders and financial analysts with advanced analytics.
              </p>
              <a href="#" className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300">
                View Platform
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* MailZen */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">MailZen</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                AI Powered Enterprise Mail Management system for efficient communication and workflow automation.
              </p>
              <a href="#" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Waterakt */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Waterakt</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                WhatsApp Marketing Software for ecommerce owners with automated campaigns and customer engagement tools.
              </p>
              <a href="#" className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300">
                Discover Features
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* SwiftShift */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">SwiftShift</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                AI Powered Couriers and Logistics Management System for optimized delivery and supply chain operations.
              </p>
              <a href="#" className="inline-flex items-center text-orange-600 dark:text-orange-400 font-medium hover:text-orange-700 dark:hover:text-orange-300">
                Explore System
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* CodeYog */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">CodeYog</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Open source coding learning platform for developers to enhance their skills and collaborate on projects.
              </p>
              <a href="#" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300">
                Start Learning
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* BharatERP - Full Width Feature */}
          <div className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">BharatERP</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  A complete SAP Hana-like integrated database ERP System built in Node.js. Customized according to enterprise needs with custom modules built for specific business requirements.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">SAP Hana Compatible</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">Node.js Built</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm">Custom Modules</span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-full text-sm">Enterprise Ready</span>
                </div>
                <a href="#" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300">
                  Explore BharatERP
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 9: CLIENT TESTIMONIALS
          ======================================== */}
      <TestimonialCarousel />

      {/* ========================================
          SECTION 10: OUR DEVELOPMENT PROCESS
          ======================================== */}
      <ProcessTimeline />

      {/* ========================================
          SECTION 11: GLOBAL PRESENCE
          ======================================== */}
      <GlobalPresence />
      
      {/* ========================================
          SECTION 12: FINAL CTA (ENHANCED)
          ======================================== */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Background Illustrations */}
        <div className="absolute top-10 right-4 sm:right-10 w-32 h-32 sm:w-48 sm:h-48 opacity-20 hidden sm:block">
          <AnimatedIllustration
            src="/illustrations/undraw_programming.svg"
            alt="Programming illustration"
            width={192}
            height={192}
            animationType="rotate"
            delay={0.3}
          />
        </div>
        <div className="absolute bottom-10 left-4 sm:left-10 w-28 h-28 sm:w-40 sm:h-40 opacity-20 hidden sm:block">
          <AnimatedIllustration
            src="/illustrations/undraw_mobile_app.svg"
            alt="Mobile app illustration"
            width={160}
            height={160}
            animationType="float"
            delay={0.7}
          />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400">Amazing</span>?
          </h2>
          <p className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto font-light">
            Partner with Vedpragya Bharat Private Limited for enterprise-grade solutions
          </p>
          <p className="text-lg mb-10 max-w-3xl mx-auto text-white/90">
            Our global team delivers world-class scalable architecture, microservices, and real-time systems 
            that drive business growth and digital transformation across continents.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="/pages/contact"
              className="px-10 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-full font-semibold text-lg transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Start Your Project →
            </a>
            <a 
              href="/pages/services"
              className="px-10 py-4 bg-transparent border-2 border-white hover:bg-white/20 backdrop-blur-sm rounded-full font-semibold text-lg transition duration-300 shadow-lg"
            >
              Explore Services
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8 border-t border-white/30">
            <div>
              <p className="text-3xl font-bold mb-1">500+</p>
              <p className="text-sm text-white/80">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">200+</p>
              <p className="text-sm text-white/80">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">5</p>
              <p className="text-sm text-white/80">Global Offices</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">24/7</p>
              <p className="text-sm text-white/80">Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
