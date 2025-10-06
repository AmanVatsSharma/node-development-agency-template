/**
 * @fileoverview
 * Prisma seed script for populating the database with initial data.
 * 
 * - Uses bcrypt to hash the admin password before saving to the database.
 * - Includes robust error handling and debug logging for each step.
 * - See flow chart and docs at the end of this file.
 */

import { PrismaClient } from '@prisma/client';
import { blogPosts as mockBlogPosts } from '../app/data/blogPosts';
import { resources as mockResources } from '../app/data/resources';
import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing

const prisma = new PrismaClient();

async function main() {
  console.log('[Seed] Starting database seeding...');

  // === AUTHORS ===
  console.log('[Seed] Creating authors...');
  let johnSmith, emilyJohnson, michaelChen;
  try {
    johnSmith = await prisma.author.upsert({
      where: { email: 'john.smith@example.com' },
      update: {},
      create: {
        name: 'John Smith',
        title: 'Lead Node.js Developer',
        avatar: '/images/blog/authors/john-smith.jpg',
        email: 'john.smith@example.com',
      },
    });
    emilyJohnson = await prisma.author.upsert({
      where: { email: 'emily.johnson@example.com' },
      update: {},
      create: {
        name: 'Emily Johnson',
        title: '3D Web Developer',
        avatar: '/images/blog/authors/emily-johnson.jpg',
        email: 'emily.johnson@example.com',
      },
    });
    michaelChen = await prisma.author.upsert({
      where: { email: 'michael.chen@example.com' },
      update: {},
      create: {
        name: 'Michael Chen',
        title: 'Frontend Architect',
        avatar: '/images/blog/authors/michael-chen.jpg',
        email: 'michael.chen@example.com',
      },
    });
    console.log('[Seed] Authors created!');
  } catch (err) {
    console.error('[Seed][Authors] Error creating authors:', err);
    throw err;
  }

  // === BLOG POSTS ===
  console.log('[Seed] Creating blog posts...');
  try {
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
    console.log('[Seed] Blog posts created!');
  } catch (err) {
    console.error('[Seed][BlogPosts] Error creating blog posts:', err);
    throw err;
  }

  // === RESOURCES ===
  console.log('[Seed] Creating resources...');
  try {
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
      console.log(`[Seed][Resource] Upserted resource: ${resource.title}`);
    }
    console.log('[Seed] Resources created!');
  } catch (err) {
    console.error('[Seed][Resources] Error creating resources:', err);
    throw err;
  }

  // === SERVICES ===
  console.log('[Seed] Creating services...');
  try {
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
    console.log('[Seed] Services created!');
  } catch (err) {
    console.error('[Seed][Services] Error creating services:', err);
    throw err;
  }

  // === TEAM MEMBERS ===
  console.log('[Seed] Creating team members...');
  try {
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
    console.log('[Seed] Team members created!');
  } catch (err) {
    console.error('[Seed][TeamMembers] Error creating team members:', err);
    throw err;
  }

  // === ADMIN USER (CMS DEMO) ===
  console.log('[Seed] Creating demo user (admin)...');
  try {
    const adminEmail = 'admin@example.com';
    const adminPassword = 'password123';
    const adminName = 'Admin User';

    // Hash the password using bcrypt
    const saltRounds = 10;
    console.log('[Seed][Admin] Hashing password...');
    const passwordHash = await bcrypt.hash(adminPassword, saltRounds);
    console.log('[Seed][Admin] Password hashed:', passwordHash);

    await prisma.user.upsert({
      where: { email: adminEmail },
      update: {
        name: adminName,
        passwordHash: passwordHash,
        role: 'admin',
        active: true,
      },
      create: {
        name: adminName,
        email: adminEmail,
        passwordHash: passwordHash,
        role: 'admin',
        active: true,
      },
    });
    console.log('[Seed] Demo user created!');
  } catch (err) {
    console.error('[Seed][Admin] Error creating admin user:', err);
    throw err;
  }

  console.log('[Seed] Database seeding completed!');
}

// === FLOW CHART ===
// [main()] 
//   ├─> [Create Authors]
//   ├─> [Create Blog Posts]
//   ├─> [Create Resources]
//   ├─> [Create Services]
//   ├─> [Create Team Members]
//   └─> [Create Admin User (with bcrypt password hashing)]

// === MODULE DOCS ===
// This module seeds the database with initial data for authors, blog posts, resources, services, team members, and a demo admin user.
// The admin password is securely hashed using bcrypt before being saved to the database.
// All major steps are logged to the console for easy debugging and troubleshooting.
// Errors are caught and logged with context, and the process exits with code 1 on failure.

main()
  .catch((e) => {
    console.error('[Seed][Fatal] Error during database seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('[Seed] Prisma disconnected.');
  }); 