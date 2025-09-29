import Image from "next/image";
import HeroAnimationWrapper from "./components/HeroAnimationWrapper";
import AnimatedIllustration from "./components/AnimatedIllustration";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <HeroAnimationWrapper />
        </div>
        
        {/* Hero Illustration */}
        <div className="absolute top-20 right-4 sm:right-10 lg:right-20 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 opacity-20 lg:opacity-30 hidden sm:block">
          <AnimatedIllustration
            src="/illustrations/undraw_programming.svg"
            alt="Programming illustration"
            width={320}
            height={320}
            animationType="float"
            delay={0.5}
          />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Enterprise Hero
            </span><br/>
            Global <span className="text-blue-400">Node.js</span> Excellence<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              & 3D Innovation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Transforming businesses worldwide with cutting-edge Node.js development and immersive digital experiences. 
            Serving Fortune 500 companies across multiple continents with enterprise-grade solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition duration-300 transform hover:scale-105">
              View Our Global Services
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-full font-medium transition duration-300">
              Explore Enterprise Portfolio
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-300">India</div>
              <div className="text-sm text-gray-300">Gurugram, Noida, Bangalore</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-300">Dubai</div>
              <div className="text-sm text-gray-300">UAE Office</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-300">California</div>
              <div className="text-sm text-gray-300">Tech Research</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-300">Toronto</div>
              <div className="text-sm text-gray-300">Canada Office</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-300">Shenzhen</div>
              <div className="text-sm text-gray-300">China Office</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Background Illustrations */}
        <div className="absolute top-10 left-4 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 opacity-10 hidden sm:block">
          <AnimatedIllustration
            src="/illustrations/undraw_cloud_hosting_a0xv.svg"
            alt="Cloud hosting illustration"
            width={192}
            height={192}
            animationType="pulse"
            delay={0.2}
          />
        </div>
        <div className="absolute bottom-10 right-4 sm:right-10 w-32 h-32 sm:w-48 sm:h-48 opacity-10 hidden sm:block">
          <AnimatedIllustration
            src="/illustrations/undraw_mobile_app_re_catg.svg"
            alt="Mobile app illustration"
            width={192}
            height={192}
            animationType="scale"
            delay={0.8}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Enterprise-Grade <span className="text-blue-600">Solutions</span><br/>
            <span className="text-lg text-gray-600 dark:text-gray-400 font-normal">Serving Global Clients Worldwide</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Enterprise Node.js Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Mission-critical Node.js solutions for Fortune 500 companies. Microservices architecture, API-first design, and 99.9% uptime guarantees across our global infrastructure.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Enterprise 3D Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Award-winning 3D experiences for global brands. WebGL optimization, VR/AR integration, and interactive product visualization for enterprise marketing and training.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Global Digital Transformation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                End-to-end digital transformation for multinational corporations. Cloud migration, DevOps automation, and compliance-ready solutions across all our global offices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Great Product Software by Company */}
      <section className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
        {/* Background Illustrations */}
        <div className="absolute top-20 left-20 w-56 h-56 opacity-5">
          <Image
            src="/illustrations/undraw_cloud_hosting_a0xv.svg"
            alt="Cloud hosting illustration"
            width={224}
            height={224}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-20 right-20 w-56 h-56 opacity-5">
          <Image
            src="/illustrations/undraw_mobile_app_re_catg.svg"
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
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white relative overflow-hidden">
        {/* Background Illustrations */}
        <div className="absolute top-10 right-4 sm:right-10 w-32 h-32 sm:w-48 sm:h-48 opacity-20 hidden sm:block">
          <AnimatedIllustration
            src="/illustrations/undraw_programming_re_kg9v.svg"
            alt="Programming illustration"
            width={192}
            height={192}
            animationType="rotate"
            delay={0.3}
          />
        </div>
        <div className="absolute bottom-10 left-4 sm:left-10 w-28 h-28 sm:w-40 sm:h-40 opacity-20 hidden sm:block">
          <AnimatedIllustration
            src="/illustrations/undraw_mobile_app_re_catg.svg"
            alt="Mobile app illustration"
            width={160}
            height={160}
            animationType="float"
            delay={0.7}
          />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready for Global Digital Excellence?</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Partner with Enterprise Hero for enterprise-grade solutions. 
            Our global team delivers world-class Node.js development and 3D experiences 
            that drive business growth and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-full font-medium transition duration-300 transform hover:scale-105">
              Contact Our Global Team
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-full font-medium transition duration-300">
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
