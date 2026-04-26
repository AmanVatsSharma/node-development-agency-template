'use client';

import React, { useEffect } from 'react';

export default function MedicalLabManagementPage() {
  useEffect(() => {
    console.log('[Medical-Lab-Management] Page mounted');
  }, []);

  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center min-h-screen py-12 sm:py-16 lg:py-20">
            
            <div className="w-full lg:w-1/2 lg:pr-12 mb-8 sm:mb-12 lg:mb-0 px-4 sm:px-0">
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                <span className="text-indigo-400 text-sm font-medium">ISO Certified • 125+ Labs</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Complete{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Lab Management System
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Build a comprehensive laboratory management system with sample tracking, 
                result processing, quality control, and automated reporting for modern diagnostic labs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Sample Tracking</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Automated Results</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Quality Control</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Digital Reports</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    Get Free Lab Analysis
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
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Lab Impact Metrics</h3>
                
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-400 mb-1 sm:mb-2">
                      125+
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Labs Using</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">
                      99.5%
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Accuracy Rate</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-400 mb-1 sm:mb-2">
                      75%
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Time Saved</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2">
                      50%
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Error Reduction</div>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                Lab Management Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to run a modern, efficient diagnostic laboratory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Management */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🧪</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Sample Management</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Barcode Sample Tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Chain of Custody
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Sample Storage Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Expiry Alerts
                </li>
              </ul>
            </div>

            {/* Test Processing */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🔬</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Test Processing</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Automated Test Workflows
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Result Entry & Validation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Reference Range Checks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Critical Value Alerts
                </li>
              </ul>
            </div>

            {/* Quality Control */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Quality Control</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  QC Sample Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Statistical Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Calibration Tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Compliance Reporting
                </li>
              </ul>
            </div>

            {/* Report Generation */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Report Generation</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Automated Report Creation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Custom Report Templates
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Digital Signatures
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Email Delivery
                </li>
              </ul>
            </div>

            {/* Inventory Management */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📦</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Inventory Management</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Reagent Tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Equipment Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Automated Reordering
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Cost Tracking
                </li>
              </ul>
            </div>

            {/* Analytics */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Analytics & Insights</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Test Volume Analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Turnaround Time Reports
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Revenue Analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Performance Dashboards
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
              Scalable{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                Pricing Plans
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your laboratory size and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Basic Lab</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Perfect for small labs (1-10 tests/day)</p>
                <div className="text-4xl font-bold text-indigo-600 mb-2">₹12L</div>
                <p className="text-gray-500 text-sm">One-time setup</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Basic Sample Tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Test Processing</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Report Generation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Basic QC</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Patient Portal</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-indigo-200 dark:border-indigo-700 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Professional Lab</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Ideal for medium labs (10-50 tests/day)</p>
                <div className="text-4xl font-bold text-indigo-600 mb-2">₹25L</div>
                <p className="text-gray-500 text-sm">One-time setup</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Everything in Basic</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Advanced QC</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Inventory Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Analytics Dashboard</span>
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
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Enterprise Lab</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Complete solution for large labs (50+ tests/day)</p>
                <div className="text-4xl font-bold text-indigo-600 mb-2">₹35L</div>
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
                  <span className="text-gray-700 dark:text-gray-300">Custom Integrations</span>
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
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Modernize Your Laboratory?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join 125+ laboratories across India who have transformed their operations with our management system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
