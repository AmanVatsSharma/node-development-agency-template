'use client';

/**
 * Compliance & Security Section Component - Healthcare Software Development
 * HIPAA, GDPR, and Medical Certifications
 * CONVERSION OPTIMIZED for Indian healthcare market
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Award, 
  CheckCircle, 
  FileText, 
  Users,
  Database,
  Eye,
  Key,
  Globe,
  Server,
  AlertTriangle,
  ArrowRight,
  Download,
  Play
} from 'lucide-react';

console.log('[Healthcare-Software-Dev] ComplianceSecuritySection component loaded');

export function ComplianceSecuritySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const complianceStandards = [
    {
      name: 'HIPAA Compliance',
      description: 'Health Insurance Portability and Accountability Act compliance for patient data protection',
      icon: Shield,
      features: [
        'End-to-end encryption',
        'Access controls and authentication',
        'Audit trails and logging',
        'Breach notification procedures',
        'Business Associate Agreements',
        'Risk assessments'
      ],
      certification: 'SOC 2 Type II',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system certification',
      icon: Lock,
      features: [
        'Security policies and procedures',
        'Risk management framework',
        'Continuous monitoring',
        'Regular security audits',
        'Incident response planning',
        'Staff training programs'
      ],
      certification: 'ISO 27001:2013',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'GDPR Ready',
      description: 'General Data Protection Regulation compliance for EU patients',
      icon: Globe,
      features: [
        'Data privacy by design',
        'Consent management',
        'Right to erasure',
        'Data portability',
        'Privacy impact assessments',
        'Data protection officer support'
      ],
      certification: 'GDPR Compliant',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      icon: Award,
      features: [
        'Security controls audit',
        'Availability monitoring',
        'Processing integrity',
        'Confidentiality protection',
        'Independent verification',
        'Annual compliance reports'
      ],
      certification: 'SOC 2 Type II',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const securityFeatures = [
    {
      title: 'Data Encryption',
      description: 'AES-256 encryption for data at rest and in transit',
      icon: Key,
      details: 'All patient data is encrypted using industry-standard AES-256 encryption both at rest and in transit'
    },
    {
      title: 'Access Controls',
      description: 'Role-based access control with multi-factor authentication',
      icon: Users,
      details: 'Granular permissions based on user roles with mandatory multi-factor authentication'
    },
    {
      title: 'Audit Logging',
      description: 'Comprehensive audit trails for all system activities',
      icon: FileText,
      details: 'Complete logging of all user actions, data access, and system changes for compliance'
    },
    {
      title: 'Secure Infrastructure',
      description: 'Cloud infrastructure with enterprise-grade security',
      icon: Server,
      details: 'Hosted on secure cloud infrastructure with regular security updates and monitoring'
    },
    {
      title: 'Data Backup',
      description: 'Automated backups with disaster recovery planning',
      icon: Database,
      details: 'Daily automated backups with off-site storage and disaster recovery procedures'
    },
    {
      title: 'Privacy Protection',
      description: 'Patient data anonymization and privacy controls',
      icon: Eye,
      details: 'Advanced privacy controls including data anonymization and patient consent management'
    }
  ];

  const certifications = [
    { name: 'HIPAA Compliant', status: 'Certified', icon: Shield },
    { name: 'ISO 27001', status: 'Certified', icon: Lock },
    { name: 'SOC 2 Type II', status: 'Certified', icon: Award },
    { name: 'GDPR Ready', status: 'Compliant', icon: Globe },
    { name: 'NIST Framework', status: 'Aligned', icon: FileText },
    { name: 'PCI DSS', status: 'Compliant', icon: Key }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 168, 107, 0.4) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Security &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              Compliance
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your patient data security is our top priority. We maintain the highest standards 
            of compliance and security in healthcare software development.
          </p>
        </motion.div>

        {/* Compliance Standards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {complianceStandards.map((standard, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${standard.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <standard.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {standard.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {standard.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                    <CheckCircle className="w-4 h-4" />
                    {standard.certification}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Key Features:
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {standard.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Security Features */}
        <motion.div 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Advanced Security Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {feature.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {feature.details}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Our Certifications & Compliance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-semibold mb-1">{cert.name}</div>
                <div className="text-sm text-blue-100">{cert.status}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Guarantee */}
        <motion.div 
          className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Security Guarantee
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              We guarantee 100% compliance with healthcare data protection standards. 
              In the unlikely event of a security incident, we provide immediate notification, 
              remediation, and full support throughout the process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
                <div className="text-gray-700 dark:text-gray-300">Compliance Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
                <div className="text-gray-700 dark:text-gray-300">Security Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">Zero</div>
                <div className="text-gray-700 dark:text-gray-300">Security Breaches</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Ready to Secure Your Healthcare Data?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss your security requirements and create a comprehensive 
            compliance plan for your healthcare software solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Schedule Security Review
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Security Whitepaper
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}