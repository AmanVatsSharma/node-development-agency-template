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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Premium <span className="text-blue-400">Node.js</span> Development<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              & 3D Experiences
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Enterprise-grade solutions that transform your business with cutting-edge technology and immersive digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition duration-300 transform hover:scale-105">
              View Our Services
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-full font-medium transition duration-300">
              Explore Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Premium <span className="text-blue-600">Services</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Node.js Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Custom, scalable Node.js solutions built for performance and reliability. Enterprise-grade architecture for mission-critical applications.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">3D Interactive Experiences</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Immersive 3D animations and experiences that captivate your audience and showcase your brand with cutting-edge visual storytelling.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Enterprise Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive enterprise architecture with microservices, API integration, and robust security for mission-critical business systems.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our premium Node.js development and 3D animation expertise can elevate your business.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-full font-medium transition duration-300 transform hover:scale-105">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}
