'use client';

import React, { useEffect } from 'react';

export default function MedicalDeviceIntegrationPage() {
  useEffect(() => {
    console.log('[Medical-Device-Integration] Page mounted');
  }, []);

  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center min-h-screen py-12 sm:py-16 lg:py-20">
            
            <div className="w-full lg:w-1/2 lg:pr-12 mb-8 sm:mb-12 lg:mb-0 px-4 sm:px-0">
              <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
                <span className="text-violet-400 text-sm font-medium">IoT Certified • 60+ Hospitals</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Medical{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
                  Device Integration
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Build comprehensive medical device integration solutions with IoT connectivity, 
                real-time monitoring, and seamless data flow for modern healthcare facilities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-violet-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-violet-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">IoT Connectivity</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Real-time Monitoring</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Data Integration</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Alert Systems</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    Get Free Device Analysis
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
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Device Integration Impact</h3>
                
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-violet-400 mb-1 sm:mb-2">
                      60+
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Hospitals Connected</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">
                      500+
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Devices Integrated</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-400 mb-1 sm:mb-2">
                      99.9%
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Uptime</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2">
                      80%
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Efficiency Gain</div>
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
              Advanced{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">
                Integration Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to connect and manage medical devices seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* IoT Connectivity */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">IoT Connectivity</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Wireless Device Connection
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Protocol Standardization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Edge Computing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Cloud Integration
                </li>
              </ul>
            </div>

            {/* Real-time Monitoring */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Real-time Monitoring</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Live Device Status
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Performance Metrics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Health Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Predictive Maintenance
                </li>
              </ul>
            </div>

            {/* Data Integration */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Data Integration</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  HL7 FHIR Support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  DICOM Integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  API Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Data Transformation
                </li>
              </ul>
            </div>

            {/* Alert Systems */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🚨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Alert Systems</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Critical Alerts
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Multi-channel Notifications
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Escalation Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Alert Analytics
                </li>
              </ul>
            </div>

            {/* Security */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Security & Compliance</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  End-to-end Encryption
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  HIPAA Compliance
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Access Controls
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Audit Trails
                </li>
              </ul>
            </div>

            {/* Analytics */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Device Analytics</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Usage Analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Performance Reports
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Predictive Insights
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Custom Dashboards
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
              Enterprise{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">
                Pricing Plans
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the perfect integration solution for your healthcare facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Basic Integration</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Perfect for small hospitals (10-50 devices)</p>
                <div className="text-4xl font-bold text-violet-600 mb-2">₹25L</div>
                <p className="text-gray-500 text-sm">One-time setup</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Basic Device Connectivity</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Real-time Monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Basic Alerts</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Data Integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Standard Support</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-violet-200 dark:border-violet-700 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Professional Integration</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Ideal for medium hospitals (50-200 devices)</p>
                <div className="text-4xl font-bold text-violet-600 mb-2">₹50L</div>
                <p className="text-gray-500 text-sm">One-time setup</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Everything in Basic</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Advanced Analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Predictive Maintenance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Custom Integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Priority Support</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Enterprise Integration</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Complete solution for large hospitals (200+ devices)</p>
                <div className="text-4xl font-bold text-violet-600 mb-2">₹80L</div>
                <p className="text-gray-500 text-sm">One-time setup</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Everything in Professional</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">AI-Powered Analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Multi-location Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Custom Development</span>
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
              <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Connect Your Medical Devices?
          </h2>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Join 60+ hospitals across India who have transformed their device management with our integration platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-violet-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-violet-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
