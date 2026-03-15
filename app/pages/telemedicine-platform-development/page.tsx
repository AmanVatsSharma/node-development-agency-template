'use client';

import React, { useEffect } from 'react';

export default function TelemedicinePlatformPage() {
  useEffect(() => {
    console.log('[Telemedicine-Platform] Page mounted');
  }, []);

  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center min-h-screen py-12 sm:py-16 lg:py-20">
            
            <div className="w-full lg:w-1/2 lg:pr-12 mb-8 sm:mb-12 lg:mb-0 px-4 sm:px-0">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-purple-400 text-sm font-medium">HIPAA Compliant • 50+ Clinics</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Complete{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                  Telemedicine Platform
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Build a comprehensive telemedicine platform with video consultations, 
                online prescriptions, and patient management for modern healthcare delivery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">HD Video Consultations</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Digital Prescriptions</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Online Booking</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Mobile App Support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    Get Free Telemedicine Analysis
                    <span className="text-lg">→</span>
                  </span>
                </button>
                
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full backdrop-blur-sm w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    <span className="text-lg">▶</span>
                    Watch Demo
                  </span>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-12 px-4 sm:px-0">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Telemedicine Impact</h3>
                
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">
                      25,000+
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Video Consultations</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-400 mb-1 sm:mb-2">
                      50+
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Clinics Connected</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2">
                      95%
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Patient Satisfaction</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-1 sm:mb-2">
                      80%
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Cost Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Complete{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Telemedicine Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to deliver exceptional remote healthcare services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video Consultations */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📹</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Video Consultations</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  HD Video & Audio Quality
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Screen Sharing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Recording Capabilities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Multi-participant Support
                </li>
              </ul>
            </div>

            {/* Digital Prescriptions */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">💊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Digital Prescriptions</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  E-Prescription Generation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Drug Interaction Alerts
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Pharmacy Integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Digital Signatures
                </li>
              </ul>
            </div>

            {/* Patient Portal */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">👤</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Patient Portal</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Medical Records Access
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Appointment History
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Prescription Downloads
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Bill Payment
                </li>
              </ul>
            </div>

            {/* Online Booking */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📅</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Online Booking</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Real-time Availability
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Automated Reminders
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Rescheduling Options
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Payment Integration
                </li>
              </ul>
            </div>

            {/* Mobile App */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Mobile App</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  iOS & Android Support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Push Notifications
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Offline Mode
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Biometric Login
                </li>
              </ul>
            </div>

            {/* Analytics */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Analytics</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Consultation Metrics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Patient Engagement
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Revenue Tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Performance Reports
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Flexible{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Pricing Plans
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your telemedicine practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Starter</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Perfect for individual doctors</p>
                <div className="text-4xl font-bold text-purple-600 mb-2">₹10L</div>
                <p className="text-gray-500 text-sm">One-time setup</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Video Consultations</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Basic Patient Portal</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Online Booking</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Digital Prescriptions</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Mobile App</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-200 dark:border-purple-700 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Professional</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Ideal for clinics & small hospitals</p>
                <div className="text-4xl font-bold text-purple-600 mb-2">₹20L</div>
                <p className="text-gray-500 text-sm">One-time setup</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Everything in Starter</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Multi-doctor Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Advanced Analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">API Integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Priority Support</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Enterprise</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Complete solution for large hospitals</p>
                <div className="text-4xl font-bold text-purple-600 mb-2">₹30L</div>
                <p className="text-gray-500 text-sm">One-time setup</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Everything in Professional</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Custom Integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">White-label Solution</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Dedicated Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Training & Onboarding</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Launch Your Telemedicine Platform?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join 50+ healthcare providers who have transformed their practice with our telemedicine solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
