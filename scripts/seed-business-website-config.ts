/**
 * Seed script for business-website landing page configuration
 * Run this after database migration to create initial configuration
 */

import prisma from '../app/lib/prisma';

async function main() {
  console.log('Seeding business-website landing page configuration...');

  // Create or update business-website landing page config
  const businessWebsite = await prisma.landingPageConfig.upsert({
    where: { slug: 'business-website' },
    create: {
      slug: 'business-website',
      name: 'Business Website',
      description: 'Main landing page for business website development services',
      leadSubmitLabel: '', // To be configured in admin dashboard
      callClickLabel: '', // To be configured in admin dashboard
      whatsappLabel: '', // To be configured in admin dashboard
      newsletterLabel: '', // To be configured in admin dashboard
      active: true,
      notes: 'Main conversion landing page - configure conversion labels in admin dashboard',
    },
    update: {
      name: 'Business Website',
      description: 'Main landing page for business website development services',
      active: true,
    },
  });

  console.log('Created/updated:', businessWebsite);

  // Optionally create configs for other landing pages
  const otherPages = [
    {
      slug: 'seo-audit',
      name: 'SEO Audit',
      description: 'SEO audit landing page',
    },
    {
      slug: 'reactjs-development',
      name: 'React.js Development',
      description: 'React.js development services landing page',
    },
    {
      slug: 'next-js-development',
      name: 'Next.js Development',
      description: 'Next.js development services landing page',
    },
  ];

  for (const page of otherPages) {
    const created = await prisma.landingPageConfig.upsert({
      where: { slug: page.slug },
      create: {
        slug: page.slug,
        name: page.name,
        description: page.description,
        active: true,
        notes: 'Configure conversion labels in admin dashboard',
      },
      update: {
        name: page.name,
        description: page.description,
      },
    });
    console.log('Created/updated:', created.slug);
  }

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error('Error seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
