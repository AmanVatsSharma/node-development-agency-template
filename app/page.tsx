import Image from "next/image";
import HeroAnimationWrapper from "./components/HeroAnimationWrapper";
import { FloatingBackgroundElements, PremiumFloatingCards, PremiumGeometricShapes } from "./components/PremiumFloatingElements";
import { 
  PremiumText, 
  PremiumCard, 
  PremiumButton, 
  PremiumSection,
  PremiumCounter,
  PremiumFloatingAction 
} from "./components/PremiumAnimations";
import PremiumJourney from "./components/PremiumJourney";

export default function Home() {
  return (
    <div className="w-full">
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center premium-gradient text-white overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <HeroAnimationWrapper />
        </div>
        <FloatingBackgroundElements />
        <PremiumFloatingCards />
        <PremiumGeometricShapes />
        
        {/* Premium Glass Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        
        <div className="container mx-auto px-4 z-10 text-center relative">
          {/* Master Craftsmanship Badge */}
          <PremiumFloatingAction className="inline-block mb-8">
            <div className="glass-morphism px-6 py-3 rounded-full">
              <span className="text-sm font-semibold premium-text-gradient">
                ✨ Masters at Work - Premium Excellence Since 2025
              </span>
            </div>
          </PremiumFloatingAction>

          {/* Premium Main Heading */}
          <PremiumText className="mb-6" delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight premium-heading">
              <span className="premium-text-gradient">
                Enterprise Hero
              </span><br/>
              <span className="text-white">Global</span> 
              <span className="text-blue-300 ml-4">Node.js</span> 
              <span className="text-white ml-2">Excellence</span><br/>
              <span className="premium-text-gradient">
                & 3D Innovation
              </span>
            </h1>
          </PremiumText>
          
          {/* Premium Subtitle */}
          <PremiumText className="mb-12" delay={0.4}>
            <p className="text-xl md:text-2xl max-w-5xl mx-auto text-gray-200 premium-body leading-relaxed">
              Transforming businesses worldwide with cutting-edge Node.js development and immersive digital experiences. 
              <span className="text-blue-300 font-semibold"> Serving Fortune 500 companies</span> across multiple continents with 
              <span className="text-green-300 font-semibold"> enterprise-grade solutions</span> and 
              <span className="text-purple-300 font-semibold"> premium craftsmanship</span>.
            </p>
          </PremiumText>
          
          {/* Premium Action Buttons */}
          <PremiumText className="mb-16" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <PremiumButton 
                variant="primary"
                className="px-10 py-4 text-lg font-semibold"
              >
                View Our Global Services
              </PremiumButton>
              <PremiumButton 
                variant="outline"
                className="px-10 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-gray-900"
              >
                Explore Enterprise Portfolio
              </PremiumButton>
            </div>
          </PremiumText>
          
          {/* Premium Global Presence */}
          <PremiumText delay={0.8}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {[
                { country: "India", cities: "Gurugram, Noida, Bangalore", flag: "🇮🇳", color: "from-blue-500 to-blue-600" },
                { country: "Dubai", cities: "UAE Office", flag: "🇦🇪", color: "from-green-500 to-green-600" },
                { country: "California", cities: "Tech Research", flag: "🇺🇸", color: "from-purple-500 to-purple-600" },
                { country: "Toronto", cities: "Canada Office", flag: "🇨🇦", color: "from-orange-500 to-orange-600" },
                { country: "Shenzhen", cities: "China Office", flag: "🇨🇳", color: "from-red-500 to-red-600" }
              ].map((location, index) => (
                <PremiumCard 
                  key={location.country}
                  delay={1 + index * 0.1}
                  className={`premium-card glass-morphism p-6 text-center ${location.color} bg-gradient-to-br`}
                >
                  <div className="text-4xl mb-3">{location.flag}</div>
                  <div className="text-xl font-bold text-white mb-2">{location.country}</div>
                  <div className="text-sm text-white/80">{location.cities}</div>
                </PremiumCard>
              ))}
            </div>
          </PremiumText>

          {/* Premium Stats */}
          <PremiumText delay={1.2}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <PremiumCounter end={500} suffix="+" className="text-4xl font-bold text-blue-300" />
                <div className="text-sm text-gray-300 mt-2">Fortune 500 Clients</div>
              </div>
              <div className="text-center">
                <PremiumCounter end={99} suffix=".9%" className="text-4xl font-bold text-green-300" />
                <div className="text-sm text-gray-300 mt-2">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <PremiumCounter end={6} suffix="" className="text-4xl font-bold text-purple-300" />
                <div className="text-sm text-gray-300 mt-2">Global Offices</div>
              </div>
              <div className="text-center">
                <PremiumCounter end={24} suffix="/7" className="text-4xl font-bold text-orange-300" />
                <div className="text-sm text-gray-300 mt-2">Support Available</div>
              </div>
            </div>
          </PremiumText>
        </div>
      </section>

      {/* Premium Services Section */}
      <PremiumSection className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <FloatingBackgroundElements />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Premium Section Header */}
          <PremiumText className="text-center mb-20" delay={0.2}>
            <div className="inline-block glass-morphism px-8 py-4 rounded-full mb-8">
              <span className="text-sm font-semibold premium-text-gradient">
                🚀 Premium Enterprise Solutions
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold premium-heading mb-6">
              Enterprise-Grade <span className="premium-text-gradient">Solutions</span><br/>
              <span className="text-2xl text-gray-600 dark:text-gray-400 font-normal premium-body">
                Serving Global Clients Worldwide with Premium Excellence
              </span>
            </h2>
          </PremiumText>
          
          {/* Premium Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 - Node.js Development */}
            <PremiumCard delay={0.4} className="premium-card glass-morphism p-10 text-center group">
              <div className="w-20 h-20 premium-gradient rounded-full flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 premium-subheading">Enterprise Node.js Development</h3>
              <p className="text-gray-600 dark:text-gray-300 premium-body leading-relaxed mb-6">
                Mission-critical Node.js solutions for Fortune 500 companies. Microservices architecture, API-first design, and 99.9% uptime guarantees across our global infrastructure.
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">Microservices</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">API-First</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm">99.9% Uptime</span>
              </div>
              <PremiumButton variant="outline" className="w-full">
                Learn More
              </PremiumButton>
            </PremiumCard>
            
            {/* Service 2 - 3D Solutions */}
            <PremiumCard delay={0.6} className="premium-card glass-morphism p-10 text-center group">
              <div className="w-20 h-20 premium-gradient-2 rounded-full flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 premium-subheading">Enterprise 3D Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 premium-body leading-relaxed mb-6">
                Award-winning 3D experiences for global brands. WebGL optimization, VR/AR integration, and interactive product visualization for enterprise marketing and training.
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm">WebGL</span>
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400 rounded-full text-sm">VR/AR</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">Interactive</span>
              </div>
              <PremiumButton variant="outline" className="w-full">
                Explore 3D
              </PremiumButton>
            </PremiumCard>
            
            {/* Service 3 - Digital Transformation */}
            <PremiumCard delay={0.8} className="premium-card glass-morphism p-10 text-center group">
              <div className="w-20 h-20 premium-gradient-3 rounded-full flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 premium-subheading">Global Digital Transformation</h3>
              <p className="text-gray-600 dark:text-gray-300 premium-body leading-relaxed mb-6">
                End-to-end digital transformation for multinational corporations. Cloud migration, DevOps automation, and compliance-ready solutions across all our global offices.
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">Cloud Migration</span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-full text-sm">DevOps</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 rounded-full text-sm">Compliance</span>
              </div>
              <PremiumButton variant="outline" className="w-full">
                Transform Now
              </PremiumButton>
            </PremiumCard>
          </div>

          {/* Premium Stats Row */}
          <PremiumText delay={1.0}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center premium-card glass-morphism p-6">
                <PremiumCounter end={15} suffix="+" className="text-3xl font-bold premium-text-gradient" />
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Years Experience</div>
              </div>
              <div className="text-center premium-card glass-morphism p-6">
                <PremiumCounter end={1000} suffix="+" className="text-3xl font-bold premium-text-gradient" />
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Projects Delivered</div>
              </div>
              <div className="text-center premium-card glass-morphism p-6">
                <PremiumCounter end={50} suffix="+" className="text-3xl font-bold premium-text-gradient" />
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Countries Served</div>
              </div>
              <div className="text-center premium-card glass-morphism p-6">
                <PremiumCounter end={24} suffix="/7" className="text-3xl font-bold premium-text-gradient" />
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Support Hours</div>
              </div>
            </div>
          </PremiumText>
        </div>
      </PremiumSection>

      {/* Premium Product Showcase */}
      <PremiumSection className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <PremiumFloatingCards />
        <PremiumGeometricShapes />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Premium Section Header */}
          <PremiumText className="text-center mb-20" delay={0.2}>
            <div className="inline-block glass-morphism px-8 py-4 rounded-full mb-8">
              <span className="text-sm font-semibold premium-text-gradient">
                💎 Premium Software Ecosystem
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold premium-heading mb-6">
              Great Product Software by <span className="premium-text-gradient">Company</span><br/>
              <span className="text-2xl text-gray-600 dark:text-gray-400 font-normal premium-body">
                Discover our comprehensive suite of enterprise-grade software solutions designed to transform businesses across industries
              </span>
            </h2>
          </PremiumText>
          
          {/* Premium Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Promerchants */}
            <PremiumCard delay={0.4} className="premium-card glass-morphism p-8 group">
              <div className="w-20 h-20 premium-gradient rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 premium-subheading text-gray-800 dark:text-white">Promerchants</h3>
              <p className="text-gray-600 dark:text-gray-300 premium-body leading-relaxed mb-6">
                Best ecommerce platform with advanced features for modern online businesses. Complete solution for digital commerce with premium enterprise features.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">E-commerce</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">Payment Gateway</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm">Analytics</span>
              </div>
              <PremiumButton variant="outline" className="w-full">
                Explore Platform
              </PremiumButton>
            </PremiumCard>

            {/* TradeZen */}
            <PremiumCard delay={0.6} className="premium-card glass-morphism p-8 group">
              <div className="w-20 h-20 premium-gradient-2 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 premium-subheading text-gray-800 dark:text-white">TradeZen</h3>
              <p className="text-gray-600 dark:text-gray-300 premium-body leading-relaxed mb-6">
                World-class charting software platform for professional traders and financial analysts with advanced analytics and real-time data processing.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">Trading</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">Analytics</span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-full text-sm">Real-time</span>
              </div>
              <PremiumButton variant="outline" className="w-full">
                View Platform
              </PremiumButton>
            </PremiumCard>

            {/* MailZen */}
            <PremiumCard delay={0.8} className="premium-card glass-morphism p-8 group">
              <div className="w-20 h-20 premium-gradient-3 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 premium-subheading text-gray-800 dark:text-white">MailZen</h3>
              <p className="text-gray-600 dark:text-gray-300 premium-body leading-relaxed mb-6">
                AI Powered Enterprise Mail Management system for efficient communication and workflow automation with intelligent routing.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm">AI Powered</span>
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400 rounded-full text-sm">Automation</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">Workflow</span>
              </div>
              <PremiumButton variant="outline" className="w-full">
                Learn More
              </PremiumButton>
            </PremiumCard>

            {/* Waterakt */}
            <PremiumCard delay={1.0} className="premium-card glass-morphism p-8 group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 premium-subheading text-gray-800 dark:text-white">Waterakt</h3>
              <p className="text-gray-600 dark:text-gray-300 premium-body leading-relaxed mb-6">
                WhatsApp Marketing Software for ecommerce owners with automated campaigns and customer engagement tools for maximum conversion.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full text-sm">WhatsApp</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 rounded-full text-sm">Marketing</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">Automation</span>
              </div>
              <PremiumButton variant="outline" className="w-full">
                Discover Features
              </PremiumButton>
            </PremiumCard>

            {/* SwiftShift */}
            <PremiumCard delay={1.2} className="premium-card glass-morphism p-8 group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 premium-subheading text-gray-800 dark:text-white">SwiftShift</h3>
              <p className="text-gray-600 dark:text-gray-300 premium-body leading-relaxed mb-6">
                AI Powered Couriers and Logistics Management System for optimized delivery and supply chain operations with real-time tracking.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-full text-sm">Logistics</span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full text-sm">AI Powered</span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 rounded-full text-sm">Tracking</span>
              </div>
              <PremiumButton variant="outline" className="w-full">
                Explore System
              </PremiumButton>
            </PremiumCard>

            {/* CodeYog */}
            <PremiumCard delay={1.4} className="premium-card glass-morphism p-8 group">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 premium-subheading text-gray-800 dark:text-white">CodeYog</h3>
              <p className="text-gray-600 dark:text-gray-300 premium-body leading-relaxed mb-6">
                Open source coding learning platform for developers to enhance their skills and collaborate on projects with premium educational content.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">Open Source</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">Learning</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm">Collaboration</span>
              </div>
              <PremiumButton variant="outline" className="w-full">
                Start Learning
              </PremiumButton>
            </PremiumCard>
          </div>

          {/* Premium BharatERP Feature */}
          <PremiumCard delay={1.6} className="mt-16 premium-card glass-morphism p-12">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3 text-center lg:text-left">
                <div className="w-24 h-24 premium-gradient rounded-full flex items-center justify-center mb-8 mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="inline-block glass-morphism px-6 py-3 rounded-full mb-6">
                  <span className="text-sm font-semibold premium-text-gradient">
                    🏆 Flagship Enterprise Solution
                  </span>
                </div>
              </div>
              <div className="lg:w-2/3">
                <h3 className="text-4xl font-bold mb-6 premium-heading text-gray-800 dark:text-white">BharatERP</h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 premium-body leading-relaxed mb-8">
                  A complete SAP Hana-like integrated database ERP System built in Node.js. Customized according to enterprise needs with custom modules built for specific business requirements. 
                  <span className="text-blue-600 dark:text-blue-400 font-semibold"> Premium enterprise-grade solution</span> trusted by Fortune 500 companies worldwide.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">SAP Hana Compatible</span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold">Node.js Built</span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold">Custom Modules</span>
                  <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-full text-sm font-semibold">Enterprise Ready</span>
                  <span className="px-4 py-2 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold">Fortune 500 Trusted</span>
                </div>
                <PremiumButton variant="primary" className="px-8 py-4 text-lg">
                  Explore BharatERP
                </PremiumButton>
              </div>
            </div>
          </PremiumCard>
        </div>
      </PremiumSection>

      {/* Premium Journey Section */}
      <PremiumJourney />
      
      {/* Premium CTA Section */}
      <PremiumSection className="py-24 premium-gradient text-white relative overflow-hidden">
        {/* Background Elements */}
        <FloatingBackgroundElements />
        <PremiumGeometricShapes />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Premium CTA Header */}
          <PremiumText delay={0.2}>
            <div className="inline-block glass-morphism px-8 py-4 rounded-full mb-8">
              <span className="text-sm font-semibold">
                🚀 Ready for Premium Excellence?
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 premium-heading">
              Ready for Global Digital Excellence?
            </h2>
          </PremiumText>
          
          {/* Premium CTA Content */}
          <PremiumText delay={0.4}>
            <p className="text-xl md:text-2xl mb-12 max-w-5xl mx-auto premium-body leading-relaxed">
              Partner with Enterprise Hero for enterprise-grade solutions. 
              Our global team delivers world-class Node.js development and 3D experiences 
              that drive business growth and digital transformation with 
              <span className="text-blue-300 font-semibold"> premium craftsmanship</span> and 
              <span className="text-green-300 font-semibold"> unmatched excellence</span>.
            </p>
          </PremiumText>
          
          {/* Premium CTA Buttons */}
          <PremiumText delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <PremiumButton 
                variant="secondary"
                className="px-12 py-4 text-lg font-semibold bg-white text-gray-900 hover:bg-gray-100"
              >
                Contact Our Global Team
              </PremiumButton>
              <PremiumButton 
                variant="outline"
                className="px-12 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-gray-900"
              >
                View Our Services
              </PremiumButton>
            </div>
          </PremiumText>

          {/* Premium Trust Indicators */}
          <PremiumText delay={0.8}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">500+</div>
                <div className="text-sm text-gray-300">Fortune 500 Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">99.9%</div>
                <div className="text-sm text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-2">24/7</div>
                <div className="text-sm text-gray-300">Global Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">6</div>
                <div className="text-sm text-gray-300">Global Offices</div>
              </div>
            </div>
          </PremiumText>
        </div>
      </PremiumSection>
    </div>
  );
}
