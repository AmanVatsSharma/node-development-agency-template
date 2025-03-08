import { PrismaClient } from '@prisma/client';
import { blogPosts as mockBlogPosts } from '../app/data/blogPosts';
import { resources as mockResources } from '../app/data/resources';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seeding...');

  // Create authors
  console.log('Creating authors...');
  const johnSmith = await prisma.author.upsert({
    where: { email: 'john.smith@example.com' },
    update: {},
    create: {
      name: 'John Smith',
      title: 'Lead Node.js Developer',
      avatar: '/images/blog/authors/john-smith.jpg',
      email: 'john.smith@example.com',
    },
  });

  const emilyJohnson = await prisma.author.upsert({
    where: { email: 'emily.johnson@example.com' },
    update: {},
    create: {
      name: 'Emily Johnson',
      title: '3D Web Developer',
      avatar: '/images/blog/authors/emily-johnson.jpg',
      email: 'emily.johnson@example.com',
    },
  });

  const michaelChen = await prisma.author.upsert({
    where: { email: 'michael.chen@example.com' },
    update: {},
    create: {
      name: 'Michael Chen',
      title: 'Frontend Architect',
      avatar: '/images/blog/authors/michael-chen.jpg',
      email: 'michael.chen@example.com',
    },
  });

  console.log('Authors created!');

  // Create blog posts
  console.log('Creating blog posts...');
  await prisma.blogPost.upsert({
    where: { slug: 'microservices-with-nodejs' },
    update: {},
    create: {
      slug: 'microservices-with-nodejs',
      title: 'Building Scalable Microservices with Node.js',
      excerpt: 'Learn how to design and implement a microservices architecture using Node.js for enterprise applications.',
      content: mockBlogPosts[0].content,
      publishedAt: new Date('2023-06-15'),
      readTime: 8,
      category: 'development',
      tags: ['Node.js', 'Microservices', 'Architecture', 'Enterprise'],
      imageUrl: '/images/blog/microservices-with-nodejs.jpg',
      featured: true,
      authorId: johnSmith.id,
    },
  });

  await prisma.blogPost.upsert({
    where: { slug: 'threejs-animation-techniques' },
    update: {},
    create: {
      slug: 'threejs-animation-techniques',
      title: 'Advanced Three.js Animation Techniques for Interactive Websites',
      excerpt: 'Explore advanced animation techniques with Three.js to create immersive web experiences.',
      content: mockBlogPosts[1].content,
      publishedAt: new Date('2023-05-22'),
      readTime: 12,
      category: '3d',
      tags: ['Three.js', 'WebGL', '3D Animation', 'Interactive'],
      imageUrl: '/images/blog/threejs-animation-techniques.jpg',
      featured: true,
      authorId: emilyJohnson.id,
    },
  });

  await prisma.blogPost.upsert({
    where: { slug: 'react-state-management' },
    update: {},
    create: {
      slug: 'react-state-management',
      title: 'Modern State Management Approaches in React Applications',
      excerpt: 'Compare different state management solutions for React apps, from Context API to Redux and Zustand.',
      content: mockBlogPosts[2].content,
      publishedAt: new Date('2023-04-10'),
      readTime: 10,
      category: 'frontend',
      tags: ['React', 'State Management', 'Redux', 'Context API'],
      imageUrl: '/images/blog/react-state-management.jpg',
      featured: false,
      authorId: michaelChen.id,
    },
  });
  console.log('Blog posts created!');

  // Create resources
  console.log('Creating resources...');
  for (const resource of mockResources) {
    await prisma.resource.upsert({
      where: { id: resource.id },
      update: {},
      create: {
        id: resource.id,
        title: resource.title,
        description: resource.description,
        type: resource.type,
        downloadUrl: resource.downloadUrl,
        imageUrl: resource.imageUrl,
        publishedAt: new Date(resource.publishedAt),
        featured: resource.featured || false,
      },
    });
  }
  console.log('Resources created!');

  // Create services
  console.log('Creating services...');
  await prisma.service.upsert({
    where: { slug: 'nodejs-development' },
    update: {},
    create: {
      title: 'Node.js Development',
      slug: 'nodejs-development',
      summary: 'Enterprise-grade Node.js development services for scalable backend solutions.',
      description: 'Our Node.js experts build high-performance, scalable backend solutions for enterprise applications. We specialize in microservices architecture, API development, and real-time applications.',
      icon: 'node',
      imageUrl: '/images/services/nodejs-development.jpg',
      order: 1,
      featured: true,
    },
  });

  await prisma.service.upsert({
    where: { slug: 'frontend-development' },
    update: {},
    create: {
      title: 'Frontend Development',
      slug: 'frontend-development',
      summary: 'Modern frontend development with React, Next.js, and other cutting-edge technologies.',
      description: 'We create beautiful, responsive, and performant user interfaces using modern frameworks like React and Next.js. Our frontend solutions are fully accessible, SEO-friendly, and provide an exceptional user experience.',
      icon: 'react',
      imageUrl: '/images/services/frontend-development.jpg',
      order: 2,
      featured: true,
    },
  });

  await prisma.service.upsert({
    where: { slug: '3d-animations' },
    update: {},
    create: {
      title: '3D Animations',
      slug: '3d-animations',
      summary: 'Immersive 3D web experiences created with Three.js and WebGL.',
      description: 'Our team specializes in creating immersive 3D experiences for the web using Three.js and WebGL. From interactive product showcases to engaging landing pages, we bring your ideas to life in three dimensions.',
      icon: '3d',
      imageUrl: '/images/services/3d-animations.jpg',
      order: 3,
      featured: true,
    },
  });
  console.log('Services created!');

  // Add a team member
  console.log('Creating team members...');
  await prisma.teamMember.upsert({
    where: { id: 'ceo-1' },
    update: {},
    create: {
      id: 'ceo-1',
      name: 'Jane Doe',
      position: 'CEO & Founder',
      bio: 'Jane has over 15 years of experience in software development and technology leadership. She founded Enterprise Hero with a mission to deliver premium development solutions for enterprise clients.',
      avatar: '/images/team/jane-doe.jpg',
      order: 1,
      linkedIn: 'https://linkedin.com/in/janedoe',
      github: 'https://github.com/janedoe',
      active: true,
    },
  });
  console.log('Team members created!');

  // Add a demo user for CMS access
  console.log('Creating demo user...');
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@example.com',
      // In a real app, this would be properly hashed
      // This is a placeholder - NEVER store plain passwords!
      passwordHash: '$2a$10$MjbSbkG1InNjGC1cMy.6/eGFDiGbZdwz6yzrVY3LzjQbVJWlUmnrW', // "password123"
      role: 'admin',
      active: true,
    },
  });
  console.log('Demo user created!');

  console.log('Database seeding completed!');
}

main()
  .catch((e) => {
    console.error('Error during database seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 