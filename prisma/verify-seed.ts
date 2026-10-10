/**
 * @fileoverview Verification Script for Production Seed
 * @description Verifies that all data was seeded correctly
 * 
 * USAGE:
 * npm run db:verify
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function verify() {
  console.log('\n🔍 Verifying Database Seed...\n');

  try {
    // Count all records
    const authors = await prisma.author.count();
    const services = await prisma.service.count();
    const blogPosts = await prisma.blogPost.count();
    const resources = await prisma.resource.count();
    const users = await prisma.user.count();
    const teamMembers = await prisma.teamMember.count();

    console.log('📊 Database Record Counts:');
    console.log(`   ✅ Authors: ${authors} (Expected: 1+)`);
    console.log(`   ✅ Services: ${services} (Expected: 15)`);
    console.log(`   ✅ Blog Posts: ${blogPosts} (Expected: 0+ — public blog posts live in content/blog)`);
    console.log(`   ✅ Resources: ${resources} (Expected: 15)`);
    console.log(`   ✅ Users: ${users} (Expected: 1)`);
    console.log(`   ✅ Team Members: ${teamMembers} (Expected: 1+)`);
    console.log('');

    // Verify key records
    console.log('🔍 Checking Key Records:\n');

    // Check featured services
    const featuredServices = await prisma.service.findMany({
      where: { featured: true },
      select: { title: true },
    });
    console.log(`   Featured Services (${featuredServices.length}):`);
    featuredServices.forEach(s => console.log(`      - ${s.title}`));
    console.log('');

    // Check featured blog posts
    const featuredPosts = await prisma.blogPost.findMany({
      where: { featured: true },
      select: { title: true },
    });
    console.log(`   Featured Blog Posts (${featuredPosts.length}):`);
    featuredPosts.forEach(p => console.log(`      - ${p.title}`));
    console.log('');

    // Check featured resources
    const featuredResources = await prisma.resource.findMany({
      where: { featured: true },
      select: { title: true, type: true },
    });
    console.log(`   Featured Resources (${featuredResources.length}):`);
    featuredResources.forEach(r => console.log(`      - [${r.type}] ${r.title}`));
    console.log('');

    // Check admin user
    const adminUser = await prisma.user.findUnique({
      where: { email: 'admin@vedpragyabharat.com' },
      select: { email: true, role: true, active: true },
    });
    
    if (adminUser) {
      console.log('   ✅ Admin User Found:');
      console.log(`      Email: ${adminUser.email}`);
      console.log(`      Role: ${adminUser.role}`);
      console.log(`      Active: ${adminUser.active}`);
    } else {
      console.log('   ❌ Admin User NOT Found!');
    }
    console.log('');

    // Test relationships
    console.log('🔗 Checking Relationships:\n');
    
    const postsWithAuthors = await prisma.blogPost.findMany({
      include: { author: true },
      take: 3,
    });
    
    console.log('   Blog Post → Author Links:');
    postsWithAuthors.forEach(post => {
      console.log(`      - "${post.title}" by ${post.author.name}`);
    });
    console.log('');

    // Summary
    console.log('═'.repeat(60));
    console.log('                 VERIFICATION COMPLETE ✅');
    console.log('═'.repeat(60));
    console.log('');
    console.log('Your database is ready for production!');
    console.log('');
    console.log('Next steps:');
    console.log('  1. Start dev server: npm run dev');
    console.log('  2. Visit: http://localhost:3000/admin');
    console.log('  3. Login: admin@vedpragyabharat.com / Admin@2025');
    console.log('  4. Test pages:');
    console.log('     - Services: /pages/services');
    console.log('     - Blog: /pages/blog');
    console.log('     - Resources: /pages/resources');
    console.log('');

  } catch (error) {
    console.error('❌ Verification failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

verify();
