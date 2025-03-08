import { Resource } from '../types/blog';

// Mock resources data (for demonstration)
export const resources: Resource[] = [
  {
    id: '1',
    title: 'Enterprise Node.js Architecture Guide',
    description: 'Learn how to design and implement scalable Node.js applications for enterprise environments.',
    type: 'ebook',
    downloadUrl: '/resources/enterprise-nodejs-architecture-guide.pdf',
    imageUrl: '/images/resources/enterprise-nodejs-guide.jpg',
    publishedAt: '2023-07-10',
    featured: true
  },
  {
    id: '2',
    title: 'Three.js Performance Optimization Checklist',
    description: 'A comprehensive checklist to ensure your Three.js applications run smoothly across all devices.',
    type: 'whitepaper',
    downloadUrl: '/resources/threejs-performance-checklist.pdf',
    imageUrl: '/images/resources/threejs-performance.jpg',
    publishedAt: '2023-05-18',
    featured: true
  },
  {
    id: '3',
    title: 'Modern React Project Starter Template',
    description: 'Kickstart your React projects with this well-structured template featuring best practices and common patterns.',
    type: 'template',
    downloadUrl: '/resources/react-project-starter.zip',
    imageUrl: '/images/resources/react-template.jpg',
    publishedAt: '2023-06-22'
  },
  {
    id: '4',
    title: 'Microservices Implementation Workshop',
    description: 'A recorded workshop on implementing microservices architecture with practical examples.',
    type: 'video',
    downloadUrl: '/resources/microservices-workshop.mp4',
    imageUrl: '/images/resources/microservices-workshop.jpg',
    publishedAt: '2023-04-05'
  },
  {
    id: '5',
    title: 'DevOps for Frontend Developers',
    description: 'Learn essential DevOps principles and practices specifically for frontend development teams.',
    type: 'webinar',
    downloadUrl: '/resources/devops-for-frontend.mp4',
    imageUrl: '/images/resources/devops-frontend.jpg',
    publishedAt: '2023-03-15'
  },
  {
    id: '6',
    title: 'API Design Best Practices',
    description: 'A comprehensive guide to designing robust, scalable, and developer-friendly APIs.',
    type: 'whitepaper',
    downloadUrl: '/resources/api-design-best-practices.pdf',
    imageUrl: '/images/resources/api-design.jpg',
    publishedAt: '2023-02-28'
  }
]; 