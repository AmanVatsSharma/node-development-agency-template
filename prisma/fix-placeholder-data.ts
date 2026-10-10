/**
 * One-off, idempotent data fix.
 *
 *  - deletes the fabricated placeholder team members created by an earlier seed
 *  - deletes the 7 mock BlogPost rows that duplicate real content/blog/*.md slugs
 *    (their bodies are 25-60% as long as the real posts and would replace them,
 *    because the database wins over files when slugs collide)
 *  - deletes the 5 fabricated authors once they own no posts
 *  - upserts the real founder as Author and TeamMember
 *
 * Usage:
 *   npx dotenv-cli -e .env.local -- npx tsx prisma/fix-placeholder-data.ts --dry-run
 *   npx dotenv-cli -e .env.local -- npx tsx prisma/fix-placeholder-data.ts
 */
import { PrismaClient } from '@prisma/client';
import { companyProfile } from '../app/data/companyProfile';
import {
  FOUNDER_NAME,
  FOUNDER_SHORT_BIO,
  FOUNDER_TEAM_MEMBER,
  FOUNDER_TITLE,
} from '../app/data/founder';

const prisma = new PrismaClient();
const dryRun = process.argv.includes('--dry-run');

const PLACEHOLDER_TEAM_IDS = ['team-ceo-1', 'team-lead-2', 'team-dev-3'];

const FABRICATED_AUTHOR_EMAILS = [
  'rajesh.kumar@vedpragyabharat.com',
  'priya.sharma@vedpragyabharat.com',
  'amit.patel@vedpragyabharat.com',
  'sneha.reddy@vedpragyabharat.com',
  'vikram.singh@vedpragyabharat.com',
];

const MOCK_BLOG_SLUGS = [
  'ai-chatbot-roi-calculator',
  'gpt4-vs-claude-vs-gemini-chatbots',
  'whatsapp-ai-chatbot-india',
  'ai-voice-agents-business',
  'ai-chatbot-mistakes-avoid',
  'shopify-headless-complete-guide',
  'shopify-conversion-optimization',
];

async function main() {
  console.log(dryRun ? '--- DRY RUN: nothing will be changed ---' : '--- APPLYING CHANGES ---');

  // Only delete rows that are provably the seeded mocks: right slug AND a fabricated author.
  const mockPostWhere = {
    slug: { in: MOCK_BLOG_SLUGS },
    author: { email: { in: FABRICATED_AUTHOR_EMAILS } },
  };
  const teamWhere = { id: { in: PLACEHOLDER_TEAM_IDS } };

  const teamToDelete = await prisma.teamMember.findMany({ where: teamWhere, select: { id: true, name: true } });
  const postsToDelete = await prisma.blogPost.findMany({ where: mockPostWhere, select: { slug: true } });
  const authorsToDelete = await prisma.author.findMany({
    where: { email: { in: FABRICATED_AUTHOR_EMAILS } },
    select: { name: true, _count: { select: { blogPosts: true } } },
  });
  console.log('Placeholder team members:', teamToDelete.map((t) => t.name));
  console.log('Mock blog rows:', postsToDelete.map((p) => p.slug));
  console.log('Fabricated authors (posts owned):', authorsToDelete.map((a) => `${a.name} (${a._count.blogPosts})`));

  if (!dryRun) {
    const team = await prisma.teamMember.deleteMany({ where: teamWhere });
    const posts = await prisma.blogPost.deleteMany({ where: mockPostWhere });
    const authors = await prisma.author.deleteMany({
      where: { email: { in: FABRICATED_AUTHOR_EMAILS }, blogPosts: { none: {} } },
    });
    console.log(`Deleted: ${team.count} team members, ${posts.count} blog rows, ${authors.count} authors`);

    const author = await prisma.author.upsert({
      where: { email: companyProfile.contactEmail },
      update: { name: FOUNDER_NAME, title: FOUNDER_TITLE, bio: FOUNDER_SHORT_BIO },
      create: {
        email: companyProfile.contactEmail,
        name: FOUNDER_NAME,
        title: FOUNDER_TITLE,
        bio: FOUNDER_SHORT_BIO,
        avatar: '',
      },
    });
    const member = await prisma.teamMember.upsert({
      where: { id: FOUNDER_TEAM_MEMBER.id },
      update: FOUNDER_TEAM_MEMBER,
      create: FOUNDER_TEAM_MEMBER,
    });
    console.log(`Upserted founder author (${author.id}) and team member (${member.id})`);
  }

  const [teamCount, postCount, authorCount] = await Promise.all([
    prisma.teamMember.count(),
    prisma.blogPost.count(),
    prisma.author.count(),
  ]);
  console.log({ teamCount, postCount, authorCount });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
