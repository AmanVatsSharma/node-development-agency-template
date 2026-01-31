'use client';

import React, { useEffect } from 'react';

export default function HealthcareAnalyticsPage() {
  useEffect(() => {
    console.log('[Healthcare-Analytics] Page mounted');
  }, []);

  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center min-h-screen py-12 sm:py-16 lg:py-20">
            
            <div className="w-full lg:w-1/2 lg:pr-12 mb-8 sm:mb-12 lg:mb-0 px-4 sm:px-0">
              <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <span className="text-pink-400 text-sm font-medium">AI-Powered • 90+ Hospitals</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Healthcare{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-red-400">
                  Analytics Dashboard
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Build AI-powered healthcare analytics dashboards with real-time insights, 
                predictive analytics, and comprehensive reporting for data-driven healthcare decisions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Real-time Analytics</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-rose-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-rose-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">AI Predictions</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Custom Dashboards</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">Population Health</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    Get Free Analytics Analysis
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
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Analytics Impact</h3>
                
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-400 mb-1 sm:mb-2">
                      90+
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Hospitals Using</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-rose-400 mb-1 sm:mb-2">
                      85%
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Decision Accuracy</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-400 mb-1 sm:mb-2">
                      60%
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Cost Reduction</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2">
                      95%
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">Data Accuracy</div>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                Analytics Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to make data-driven healthcare decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Real-time Analytics */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Real-time Analytics</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Live Patient Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Operational Metrics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Financial Dashboards
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Performance KPIs
                </li>
              </ul>
            </div>

            {/* Predictive Analytics */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🔮</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Predictive Analytics</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Patient Risk Assessment
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Readmission Prediction
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Resource Planning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Disease Outbreak Alerts
                </li>
              </ul>
            </div>

            {/* Population Health */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Population Health</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Health Trends Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Chronic Disease Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Preventive Care Insights
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Community Health Reports
                </li>
              </ul>
            </div>

            {/* Financial Analytics */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Financial Analytics</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Revenue Optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Cost Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Insurance Claims Analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Profitability Reports
                </li>
              </ul>
            </div>

            {/* Clinical Analytics */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🏥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Clinical Analytics</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Treatment Outcomes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Clinical Pathways
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Quality Metrics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Safety Indicators
                </li>
              </ul>
            </div>

            {/* Custom Dashboards */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎛️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Custom Dashboards</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Drag & Drop Builder
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Role-based Views
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Mobile Responsive
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Export Capabilities
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                Pricing Plans
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the perfect analytics solution for your healthcare facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Basic Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Perfect for small hospitals (50-200 beds)</p>
                <div className="text-4xl font-bold text-pink-600 mb-2">₹15L</div>
                <p className="text-gray-500 text-sm">One-time setup</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Basic Dashboards</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Financial Reports</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Patient Analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Basic Predictions</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Standard Support</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-pink-200 dark:border-pink-700 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Professional Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Ideal for medium hospitals (200-500 beds)</p>
                <div className="text-4xl font-bold text-pink-600 mb-2">₹30L</div>
                <p className="text-gray-500 text-sm">One-time setup</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Everything in Basic</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Advanced AI Predictions</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-700 dark:text-gray-300">Population Health Analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Custom Dashboards</span>
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
              <button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Enterprise Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Complete solution for large hospitals (500+ beds)</p>
                <div className="text-4xl font-bold text-pink-600 mb-2">₹40L</div>
                <p className="text-gray-500 text-sm">One-time setup</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Everything in Professional</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Machine Learning Models</span>
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
              <button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Transform Your Healthcare Data?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Join 90+ hospitals across India who have revolutionized their decision-making with our analytics platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
