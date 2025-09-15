"use client";

import React from 'react';
import { PremiumText, PremiumCard, PremiumButton } from './PremiumAnimations';

interface JourneyStepProps {
  year: string;
  title: string;
  description: string;
  achievements: string[];
  icon: string;
  color: string;
  delay: number;
}

const JourneyStep: React.FC<JourneyStepProps> = ({ 
  year, 
  title, 
  description, 
  achievements, 
  icon, 
  color, 
  delay 
}) => {
  return (
    <PremiumCard delay={delay} className="premium-card glass-morphism p-8 group">
      <div className="flex items-start gap-6">
        <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold premium-text-gradient">{year}</span>
            <h3 className="text-xl font-bold premium-subheading">{title}</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 premium-body leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {achievements.map((achievement, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {achievement}
              </span>
            ))}
          </div>
        </div>
      </div>
    </PremiumCard>
  );
};

export const PremiumJourney: React.FC = () => {
  const journeySteps = [
    {
      year: "2010",
      title: "Foundation of Excellence",
      description: "Aman Kumar Sharma founded Vedpragya Bharat Private Limited with a vision to revolutionize enterprise software development. Starting with a small team of passionate developers, we began our journey towards becoming a global leader in Node.js development.",
      achievements: ["Company Founded", "First Enterprise Client", "Core Team Assembled"],
      icon: "🚀",
      color: "premium-gradient",
      delay: 0.2
    },
    {
      year: "2015",
      title: "Global Expansion Begins",
      description: "Expanded operations internationally, establishing our first overseas office in Dubai. This marked the beginning of our global presence and our commitment to serving Fortune 500 companies worldwide with premium enterprise solutions.",
      achievements: ["Dubai Office", "International Clients", "Fortune 500 Partnerships"],
      icon: "🌍",
      color: "premium-gradient-2",
      delay: 0.4
    },
    {
      year: "2018",
      title: "Innovation & 3D Excellence",
      description: "Pioneered advanced 3D visualization technologies and WebGL solutions. Our team developed cutting-edge 3D experiences that set new industry standards for interactive product visualization and enterprise marketing solutions.",
      achievements: ["3D Technology", "WebGL Innovation", "Industry Recognition"],
      icon: "🎨",
      color: "premium-gradient-3",
      delay: 0.6
    },
    {
      year: "2020",
      title: "Digital Transformation Leadership",
      description: "Led digital transformation initiatives for major corporations during the global shift to remote work. Our enterprise-grade solutions enabled seamless business continuity and accelerated digital adoption across multiple industries.",
      achievements: ["Digital Transformation", "Remote Work Solutions", "Business Continuity"],
      icon: "💻",
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
      delay: 0.8
    },
    {
      year: "2022",
      title: "AI & Automation Revolution",
      description: "Integrated artificial intelligence and machine learning capabilities into our software ecosystem. Developed AI-powered solutions for enterprise automation, intelligent routing, and predictive analytics that revolutionized business operations.",
      achievements: ["AI Integration", "Machine Learning", "Automation Solutions"],
      icon: "🤖",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      delay: 1.0
    },
    {
      year: "2024",
      title: "Premium Ecosystem Launch",
      description: "Launched our comprehensive premium software ecosystem including Promerchants, TradeZen, MailZen, Waterakt, SwiftShift, and CodeYog. Each platform represents years of expertise and innovation, serving diverse industries with enterprise-grade solutions.",
      achievements: ["Premium Ecosystem", "Multiple Platforms", "Industry Leadership"],
      icon: "💎",
      color: "bg-gradient-to-br from-blue-500 to-indigo-500",
      delay: 1.2
    },
    {
      year: "2025",
      title: "Global Excellence Achieved",
      description: "Achieved recognition as a global leader in enterprise Node.js development and 3D innovation. With offices across 6 countries and serving Fortune 500 companies worldwide, we continue to set new standards for premium software development and digital excellence.",
      achievements: ["Global Recognition", "6 Global Offices", "Fortune 500 Trusted"],
      icon: "🏆",
      color: "bg-gradient-to-br from-yellow-500 to-orange-500",
      delay: 1.4
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 premium-gradient rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 premium-gradient-2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 premium-gradient-3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Premium Section Header */}
        <PremiumText className="text-center mb-20" delay={0.2}>
          <div className="inline-block glass-morphism px-8 py-4 rounded-full mb-8">
            <span className="text-sm font-semibold premium-text-gradient">
              📈 Our Journey to Excellence
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold premium-heading mb-6">
            Masters at Work - <span className="premium-text-gradient">Our Story</span><br/>
            <span className="text-2xl text-gray-600 dark:text-gray-400 font-normal premium-body">
              From humble beginnings to global excellence in enterprise software development
            </span>
          </h2>
        </PremiumText>

        {/* Journey Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline Connector */}
                {index < journeySteps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"></div>
                )}
                <JourneyStep {...step} />
              </div>
            ))}
          </div>
        </div>

        {/* Premium Stats Showcase */}
        <PremiumText delay={1.6}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center premium-card glass-morphism p-6">
              <div className="text-4xl font-bold premium-text-gradient mb-2">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years of Excellence</div>
            </div>
            <div className="text-center premium-card glass-morphism p-6">
              <div className="text-4xl font-bold premium-text-gradient mb-2">6</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Global Offices</div>
            </div>
            <div className="text-center premium-card glass-morphism p-6">
              <div className="text-4xl font-bold premium-text-gradient mb-2">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Fortune 500 Clients</div>
            </div>
            <div className="text-center premium-card glass-morphism p-6">
              <div className="text-4xl font-bold premium-text-gradient mb-2">1000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
            </div>
          </div>
        </PremiumText>

        {/* Premium CTA */}
        <PremiumText delay={1.8}>
          <div className="text-center mt-16">
            <div className="inline-block glass-morphism px-8 py-4 rounded-full mb-8">
              <span className="text-sm font-semibold premium-text-gradient">
                🎯 Join Our Journey
              </span>
            </div>
            <h3 className="text-3xl font-bold premium-heading mb-6">
              Ready to Be Part of Our Success Story?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 premium-body mb-8 max-w-3xl mx-auto">
              Partner with Enterprise Hero and experience the premium excellence that has made us a global leader in enterprise software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PremiumButton variant="primary" className="px-8 py-3">
                Start Your Journey
              </PremiumButton>
              <PremiumButton variant="outline" className="px-8 py-3">
                Learn More About Us
              </PremiumButton>
            </div>
          </div>
        </PremiumText>
      </div>
    </div>
  );
};

export default PremiumJourney;