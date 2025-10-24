'use client';

/**
 * @fileoverview ROICalculator Component - Interactive ROI demonstration tool
 * @description Dynamic calculator showing potential ROI improvements with Google Ads services
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - Interactive sliders for budget and current metrics
 * - Real-time ROI calculations
 * - Industry-specific benchmarks
 * - Animated charts and visualizations
 * - Lead capture integration
 * - Mobile-optimized interface
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, DollarSign, Target, BarChart3, Calculator, Zap } from 'lucide-react';

interface ROICalculatorProps {
  industry?: string;
  className?: string;
}

interface CalculatorState {
  monthlyBudget: number;
  currentCPC: number;
  currentConversionRate: number;
  currentROAS: number;
  averageOrderValue: number;
  industry: string;
}

const industryBenchmarks = {
  'E-commerce': {
    avgCPC: 25,
    avgConversionRate: 2.5,
    avgROAS: 4.0,
    avgAOV: 2500
  },
  'Real Estate': {
    avgCPC: 45,
    avgConversionRate: 8.0,
    avgROAS: 6.0,
    avgAOV: 50000
  },
  'Healthcare': {
    avgCPC: 35,
    avgConversionRate: 5.0,
    avgROAS: 5.5,
    avgAOV: 15000
  },
  'B2B Services': {
    avgCPC: 55,
    avgConversionRate: 3.0,
    avgROAS: 7.0,
    avgAOV: 25000
  },
  'SaaS': {
    avgCPC: 40,
    avgConversionRate: 4.0,
    avgROAS: 6.5,
    avgAOV: 12000
  },
  'Education': {
    avgCPC: 30,
    avgConversionRate: 6.0,
    avgROAS: 5.0,
    avgAOV: 8000
  }
};

export function ROICalculator({ industry = 'E-commerce', className = '' }: ROICalculatorProps) {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>({
    monthlyBudget: 100000,
    currentCPC: industryBenchmarks[industry as keyof typeof industryBenchmarks]?.avgCPC || 35,
    currentConversionRate: industryBenchmarks[industry as keyof typeof industryBenchmarks]?.avgConversionRate || 3.0,
    currentROAS: industryBenchmarks[industry as keyof typeof industryBenchmarks]?.avgROAS || 4.0,
    averageOrderValue: industryBenchmarks[industry as keyof typeof industryBenchmarks]?.avgAOV || 10000,
    industry
  });

  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Calculate improved metrics (our optimization typically achieves)
  const improvedMetrics = {
    cpc: calculatorState.currentCPC * 0.6, // 40% reduction
    conversionRate: calculatorState.currentConversionRate * 1.8, // 80% improvement
    roas: calculatorState.currentROAS * 2.2, // 120% improvement
  };

  // Calculate current performance
  const currentMetrics = {
    clicks: Math.round(calculatorState.monthlyBudget / calculatorState.currentCPC),
    conversions: Math.round((calculatorState.monthlyBudget / calculatorState.currentCPC) * (calculatorState.currentConversionRate / 100)),
    revenue: Math.round((calculatorState.monthlyBudget / calculatorState.currentCPC) * (calculatorState.currentConversionRate / 100) * calculatorState.averageOrderValue),
    profit: Math.round(((calculatorState.monthlyBudget / calculatorState.currentCPC) * (calculatorState.currentConversionRate / 100) * calculatorState.averageOrderValue) - calculatorState.monthlyBudget)
  };

  // Calculate improved performance
  const improvedPerformance = {
    clicks: Math.round(calculatorState.monthlyBudget / improvedMetrics.cpc),
    conversions: Math.round((calculatorState.monthlyBudget / improvedMetrics.cpc) * (improvedMetrics.conversionRate / 100)),
    revenue: Math.round((calculatorState.monthlyBudget / improvedMetrics.cpc) * (improvedMetrics.conversionRate / 100) * calculatorState.averageOrderValue),
    profit: Math.round(((calculatorState.monthlyBudget / improvedMetrics.cpc) * (improvedMetrics.conversionRate / 100) * calculatorState.averageOrderValue) - calculatorState.monthlyBudget)
  };

  const improvement = {
    revenueIncrease: improvedPerformance.revenue - currentMetrics.revenue,
    profitIncrease: improvedPerformance.profit - currentMetrics.profit,
    roiImprovement: ((improvedPerformance.profit / calculatorState.monthlyBudget) * 100) - ((currentMetrics.profit / calculatorState.monthlyBudget) * 100)
  };

  const handleInputChange = (field: keyof CalculatorState, value: number | string) => {
    setCalculatorState(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCalculate = () => {
    setIsCalculating(true);
    console.log('[ROICalculator] Starting calculation with:', calculatorState);
    
    setTimeout(() => {
      setIsCalculating(false);
      setShowResults(true);
      
      // Track calculator usage
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'roi_calculator_used', {
          industry: calculatorState.industry,
          monthly_budget: calculatorState.monthlyBudget,
          current_roas: calculatorState.currentROAS,
          page_location: window.location.pathname
        });
      }
    }, 2000);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 ${className}`}>
      <div className="text-center mb-8">
        <motion.div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Calculator className="w-4 h-4" />
          ROI Calculator
        </motion.div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          See Your Potential ROI Improvement
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enter your current Google Ads performance to see how our optimization can improve your results
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Current Performance
          </h4>

          {/* Monthly Budget */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Ad Spend: {formatCurrency(calculatorState.monthlyBudget)}
            </label>
            <input
              type="range"
              min="25000"
              max="500000"
              step="25000"
              value={calculatorState.monthlyBudget}
              onChange={(e) => handleInputChange('monthlyBudget', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>₹25K</span>
              <span>₹5L</span>
            </div>
          </div>

          {/* Current CPC */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Cost Per Click: ₹{calculatorState.currentCPC}
            </label>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={calculatorState.currentCPC}
              onChange={(e) => handleInputChange('currentCPC', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>₹10</span>
              <span>₹100</span>
            </div>
          </div>

          {/* Conversion Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Conversion Rate: {calculatorState.currentConversionRate}%
            </label>
            <input
              type="range"
              min="0.5"
              max="15"
              step="0.5"
              value={calculatorState.currentConversionRate}
              onChange={(e) => handleInputChange('currentConversionRate', parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0.5%</span>
              <span>15%</span>
            </div>
          </div>

          {/* Average Order Value */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Average Order Value: {formatCurrency(calculatorState.averageOrderValue)}
            </label>
            <input
              type="range"
              min="1000"
              max="100000"
              step="5000"
              value={calculatorState.averageOrderValue}
              onChange={(e) => handleInputChange('averageOrderValue', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>₹1K</span>
              <span>₹1L</span>
            </div>
          </div>

          {/* Industry Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <select
              value={calculatorState.industry}
              onChange={(e) => {
                const selectedIndustry = e.target.value;
                const benchmarks = industryBenchmarks[selectedIndustry as keyof typeof industryBenchmarks];
                if (benchmarks) {
                  setCalculatorState(prev => ({
                    ...prev,
                    industry: selectedIndustry,
                    currentCPC: benchmarks.avgCPC,
                    currentConversionRate: benchmarks.avgConversionRate,
                    currentROAS: benchmarks.avgROAS,
                    averageOrderValue: benchmarks.avgAOV
                  }));
                }
              }}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {Object.keys(industryBenchmarks).map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>

          <motion.button
            onClick={handleCalculate}
            disabled={isCalculating}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isCalculating ? (
              <>
                <motion.div
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                Calculating...
              </>
            ) : (
              <>
                <Zap className="w-4 h-4" />
                Calculate My ROI
              </>
            )}
          </motion.button>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            Potential Improvement
          </h4>

          <AnimatePresence>
            {showResults && (
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Revenue Comparison */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Monthly Revenue</span>
                    <span className="text-xs text-green-600 font-semibold">
                      +{formatCurrency(improvement.revenueIncrease)}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Current:</span>
                      <span className="font-semibold">{formatCurrency(currentMetrics.revenue)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Optimized:</span>
                      <span className="font-semibold text-green-600">{formatCurrency(improvedPerformance.revenue)}</span>
                    </div>
                  </div>
                </div>

                {/* Profit Comparison */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Monthly Profit</span>
                    <span className="text-xs text-green-600 font-semibold">
                      +{formatCurrency(improvement.profitIncrease)}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Current:</span>
                      <span className="font-semibold">{formatCurrency(currentMetrics.profit)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Optimized:</span>
                      <span className="font-semibold text-green-600">{formatCurrency(improvedPerformance.profit)}</span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">CPC Reduction</div>
                    <div className="text-lg font-bold text-blue-600">
                      {Math.round((1 - improvedMetrics.cpc / calculatorState.currentCPC) * 100)}%
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">Conversion Rate</div>
                    <div className="text-lg font-bold text-green-600">
                      +{Math.round((improvedMetrics.conversionRate / calculatorState.currentConversionRate - 1) * 100)}%
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">More Clicks</div>
                    <div className="text-lg font-bold text-purple-600">
                      +{formatNumber(improvedPerformance.clicks - currentMetrics.clicks)}
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">More Conversions</div>
                    <div className="text-lg font-bold text-orange-600">
                      +{formatNumber(improvedPerformance.conversions - currentMetrics.conversions)}
                    </div>
                  </div>
                </div>

                {/* ROI Improvement */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 text-center">
                  <div className="text-sm text-gray-600 mb-1">ROI Improvement</div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    +{Math.round(improvement.roiImprovement)}%
                  </div>
                  <div className="text-xs text-gray-500">
                    Annual potential: {formatCurrency(improvement.profitIncrease * 12)}
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-yellow-600 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    console.log('[ROICalculator] CTA clicked - Get Free Audit');
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'roi_calculator_cta_click', {
                        potential_roi: improvement.roiImprovement,
                        potential_revenue: improvement.revenueIncrease,
                        page_location: window.location.pathname
                      });
                    }
                  }}
                >
                  Get Free Audit to Achieve These Results
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3B82F6, #8B5CF6);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3B82F6, #8B5CF6);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}

export default ROICalculator;