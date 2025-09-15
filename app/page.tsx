import Image from "next/image";
import HeroAnimationWrapper from "./components/HeroAnimationWrapper";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <HeroAnimationWrapper />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-blue-200 border border-white/20">
              Vedpragya Bharat Private Limited | CIN: U47912HR2025PTC131357
            </span>
          </div>
          
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
            Founded by <strong className="text-blue-300">Aman Kumar Sharma</strong>, we deliver enterprise-grade solutions across 
            <strong className="text-blue-300"> India, Dubai, California, Toronto, and Shenzhen</strong>. 
            Transforming businesses worldwide with cutting-edge Node.js development and immersive digital experiences.
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
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
              GST: 06AALCV0051A1ZV | Legally Registered & Compliant
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Enterprise-Grade <span className="text-blue-600">Solutions</span><br/>
            <span className="text-lg text-gray-600 dark:text-gray-400 font-normal">Serving Global Clients Across 6 Countries</span>
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
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready for Global Digital Excellence?</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Partner with <strong>Vedpragya Bharat Private Limited</strong> for enterprise-grade solutions. 
            Our global team across <strong>6 countries</strong> delivers world-class Node.js development and 3D experiences 
            that drive business growth and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-full font-medium transition duration-300 transform hover:scale-105">
              Contact Our Global Team
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-full font-medium transition duration-300">
              View Legal Compliance
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
