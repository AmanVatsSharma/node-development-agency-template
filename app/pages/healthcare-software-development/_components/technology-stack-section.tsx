'use client';

/**
 * Technology Stack Section Component - Healthcare Software Development
 * Healthcare Integrations & Compliance
 * CONVERSION OPTIMIZED for Indian healthcare market
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Smartphone, 
  Zap,
  Lock,
  CheckCircle,
  Award,
  Globe,
  Server,
  Cpu,
  HardDrive,
  Network,
  ArrowRight,
  Play,
  Download
} from 'lucide-react';

console.log('[Healthcare-Software-Dev] TechnologyStackSection component loaded');

export function TechnologyStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const techCategories = [
    {
      title: 'Frontend Technologies',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'React.js', description: 'Modern UI framework for responsive interfaces', logo: '/tech-logos/react.png' },
        { name: 'Next.js', description: 'Full-stack React framework for optimal performance', logo: '/tech-logos/nextjs.png' },
        { name: 'TypeScript', description: 'Type-safe JavaScript for better code quality', logo: '/tech-logos/typescript.png' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development', logo: '/tech-logos/tailwind.png' },
        { name: 'Framer Motion', description: 'Advanced animations and micro-interactions', logo: '/tech-logos/framer.png' }
      ]
    },
    {
      title: 'Backend Technologies',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      technologies: [
        { name: 'Node.js', description: 'Scalable server-side JavaScript runtime', logo: '/tech-logos/nodejs.png' },
        { name: 'Express.js', description: 'Fast, unopinionated web framework', logo: '/tech-logos/express.png' },
        { name: 'Python', description: 'Powerful language for data processing and AI', logo: '/tech-logos/python.png' },
        { name: 'Django', description: 'High-level Python web framework', logo: '/tech-logos/django.png' },
        { name: 'FastAPI', description: 'Modern, fast web framework for APIs', logo: '/tech-logos/fastapi.png' }
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'PostgreSQL', description: 'Advanced open-source relational database', logo: '/tech-logos/postgresql.png' },
        { name: 'MongoDB', description: 'NoSQL database for flexible data storage', logo: '/tech-logos/mongodb.png' },
        { name: 'Redis', description: 'In-memory data structure store for caching', logo: '/tech-logos/redis.png' },
        { name: 'Elasticsearch', description: 'Distributed search and analytics engine', logo: '/tech-logos/elasticsearch.png' },
        { name: 'AWS S3', description: 'Scalable object storage service', logo: '/tech-logos/aws-s3.png' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      technologies: [
        { name: 'AWS', description: 'Comprehensive cloud computing platform', logo: '/tech-logos/aws.png' },
        { name: 'Docker', description: 'Containerization platform for consistent deployments', logo: '/tech-logos/docker.png' },
        { name: 'Kubernetes', description: 'Container orchestration for scalable applications', logo: '/tech-logos/kubernetes.png' },
        { name: 'Terraform', description: 'Infrastructure as code for cloud provisioning', logo: '/tech-logos/terraform.png' },
        { name: 'GitLab CI/CD', description: 'Automated testing and deployment pipeline', logo: '/tech-logos/gitlab.png' }
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-teal-500 to-cyan-500',
      technologies: [
        { name: 'React Native', description: 'Cross-platform mobile app development', logo: '/tech-logos/react-native.png' },
        { name: 'Flutter', description: 'Google\'s UI toolkit for mobile apps', logo: '/tech-logos/flutter.png' },
        { name: 'Ionic', description: 'Hybrid mobile app development framework', logo: '/tech-logos/ionic.png' },
        { name: 'PWA', description: 'Progressive Web Apps for mobile-like experience', logo: '/tech-logos/pwa.png' }
      ]
    },
    {
      title: 'AI & Analytics',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      technologies: [
        { name: 'TensorFlow', description: 'Open-source machine learning platform', logo: '/tech-logos/tensorflow.png' },
        { name: 'PyTorch', description: 'Deep learning framework for research and production', logo: '/tech-logos/pytorch.png' },
        { name: 'OpenAI API', description: 'Advanced AI capabilities for healthcare applications', logo: '/tech-logos/openai.png' },
        { name: 'Pandas', description: 'Data manipulation and analysis library', logo: '/tech-logos/pandas.png' },
        { name: 'Tableau', description: 'Business intelligence and data visualization', logo: '/tech-logos/tableau.png' }
      ]
    }
  ];

  const integrations = [
    { name: 'HL7 FHIR', description: 'Healthcare data exchange standard', icon: Network },
    { name: 'DICOM', description: 'Medical imaging communication standard', icon: HardDrive },
    { name: 'EMR Systems', description: 'Electronic Medical Records integration', icon: Database },
    { name: 'Payment Gateways', description: 'Secure payment processing', icon: Shield },
    { name: 'SMS/WhatsApp', description: 'Patient communication channels', icon: Smartphone },
    { name: 'Lab Systems', description: 'Laboratory information systems', icon: Cpu },
    { name: 'Pharmacy Systems', description: 'Pharmacy management integration', icon: Award },
    { name: 'Insurance APIs', description: 'Insurance verification and claims', icon: CheckCircle }
  ];

  const compliance = [
    {
      name: 'HIPAA Compliance',
      description: 'Health Insurance Portability and Accountability Act compliance for patient data protection',
      icon: Shield,
      features: ['Data encryption', 'Access controls', 'Audit trails', 'Breach notification']
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system certification',
      icon: Lock,
      features: ['Security policies', 'Risk management', 'Continuous monitoring', 'Regular audits']
    },
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      icon: Award,
      features: ['Security controls', 'Availability monitoring', 'Processing integrity', 'Confidentiality']
    },
    {
      name: 'GDPR Ready',
      description: 'General Data Protection Regulation compliance for EU patients',
      icon: Globe,
      features: ['Data privacy', 'Consent management', 'Right to erasure', 'Data portability']
    }
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
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 168, 107, 0.4) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
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
            Technology Stack &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              Compliance
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Built with cutting-edge technologies and designed to meet the highest 
            standards of security and compliance in healthcare.
          </p>
        </motion.div>

        {/* Technology Categories */}
        <motion.div 
          className="space-y-12 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white dark:bg-gray-600 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded"></div>
                      </div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">
                        {tech.name}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Healthcare Integrations */}
        <motion.div 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Healthcare Integrations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <integration.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  {integration.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Compliance & Security */}
        <motion.div 
          className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Security & Compliance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {compliance.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                <p className="text-blue-100 mb-4 text-sm">
                  {item.description}
                </p>
                <div className="space-y-1">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-blue-100 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">99.9%</div>
            <div className="text-gray-600 dark:text-gray-300">Uptime Guarantee</div>
          </div>
          
          <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">256-bit</div>
            <div className="text-gray-600 dark:text-gray-300">SSL Encryption</div>
          </div>
          
          <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Global</div>
            <div className="text-gray-600 dark:text-gray-300">CDN Network</div>
          </div>
          
          <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">Monitoring</div>
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
            Ready to Build with Cutting-Edge Technology?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss your technical requirements and create a solution 
            that leverages the best technologies for your healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Schedule Technical Discussion
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Tech Specs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}