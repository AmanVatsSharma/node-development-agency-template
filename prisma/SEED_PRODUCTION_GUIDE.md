# Production Seed Guide - Vedpragya Bharat Website

## 📋 Overview

This guide covers the production database seeding process that populates your website with:
- **15+ Services** from all your landing pages
- **20+ Blog Posts** across AI, E-commerce, Frontend, Marketing categories
- **15+ Resources** (ebooks, whitepapers, templates, videos)
- **5 Authors** with complete profiles
- **3 Team Members** for About page
- **1 Admin User** for dashboard access

## 🚀 Quick Start

### Prerequisites

1. **Database Connection**: Ensure your `DATABASE_URL` is set in `.env`
2. **Node.js**: Version 18+ required
3. **Dependencies**: Run `npm install` first

### Running the Seed

```bash
# Option 1: Using npm script (recommended)
npm run db:seed:production

# Option 2: Direct execution
npx tsx prisma/seed-production.ts

# Option 3: Using Prisma CLI
npx prisma db seed
```

### Verify the Seed

```bash
npm run db:verify
```

This will show you:
- Total records created
- Featured items
- Sample relationships
- Admin user details

## 📁 File Structure

```
prisma/
├── seed-production.ts          # Main orchestrator script
├── seed-data/
│   ├── services.ts             # 15 services data
│   ├── authors.ts              # 5 authors
│   ├── blog-posts.ts           # Part 1: AI & Chatbot posts
│   ├── blog-posts-part2.ts     # Part 2: E-commerce, Frontend, Marketing
│   └── resources.ts            # 15+ resources
├── verify-seed.ts              # Verification script
└── SEED_PRODUCTION_GUIDE.md    # This file
```

## 🎯 What Gets Seeded

### 1. Services (15)

All services from your landing pages:

**AI & Automation:**
- AI Chatbot Development
- AI Voice Agents

**E-commerce & Shopify:**
- Shopify Headless Migration
- Shopify Product Page Customization
- Shopify Store Setup

**Marketing & Communication:**
- WhatsApp Business API
- Google Ads Management
- SEO Audit Services

**Web Development:**
- React.js Development
- Next.js Development
- Business Website Development
- Web Development (General)

**Specialized Applications:**
- Trading Software Development
- NSE/MCX Live Market Data
- CRM Development

**Slug Format:** `/pages/ai-chatbot-development`, `/pages/shopify-headless-migration`, etc.

### 2. Blog Posts (20+)

**Categories:**
- `ai` - AI & Chatbots (5 posts)
- `ecommerce` - Shopify & E-commerce (6 posts)
- `frontend` - React/Next.js (5 posts)
- `marketing` - SEO/Google Ads (5 posts)
- `business` - Strategy & Growth (4 posts)

**Featured Posts:**
- AI Chatbot ROI Calculator
- GPT-4 vs Claude vs Gemini
- Shopify Headless Commerce Guide
- And more...

### 3. Resources (15+)

**E-books (5):**
- AI Chatbots for Business Guide
- Shopify Headless Technical Guide
- SEO Checklist for E-commerce
- React Performance Optimization
- WhatsApp Business API Setup Guide

**Whitepapers (4):**
- AI vs Human Cost Analysis
- State of Headless Commerce in India
- Next.js vs React Benchmark
- Google Ads Benchmarks

**Templates (3):**
- E-commerce Project Brief
- Web Dev Contract (India)
- AI Chatbot Conversation Flows

**Videos (2):**
- Shopify Headless Crash Course
- GPT-4 React Integration

**Webinar (1):**
- Scaling to 1 Crore Revenue

### 4. Authors (5)

- **Rajesh Kumar** - Full-Stack & AI Specialist
- **Priya Sharma** - E-commerce Solutions Architect
- **Amit Patel** - Frontend Architect
- **Sneha Reddy** - Digital Marketing & SEO Expert
- **Vikram Singh** - DevOps & Cloud Architect

### 5. Team Members (3)

- CEO & Full-Stack Architect
- E-commerce Solutions Lead
- Frontend Architect

### 6. Admin User (1)

**Email:** `admin@vedpragyabharat.com`  
**Password:** `Admin@2025`  
**Role:** `admin`

> ⚠️ **IMPORTANT**: Change this password immediately after first login!

## 🔄 Process Flow

```
┌─────────────────────────┐
│   Start Seed Process    │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│   Import Data Modules   │
│   - services.ts         │
│   - authors.ts          │
│   - blog-posts.ts       │
│   - resources.ts        │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  STEP 1: Seed Authors   │
│  - Create 5 authors     │
│  - Build email→id map   │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ STEP 2: Seed Services   │
│  - Create 15 services   │
│  - Set featured flags   │
│  - Order by priority    │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ STEP 3: Seed Blog Posts │
│  - Link to authors      │
│  - 20+ posts created    │
│  - Categories assigned  │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ STEP 4: Seed Resources  │
│  - 15+ resources        │
│  - All types covered    │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ STEP 5: Create Admin    │
│  - Hash password        │
│  - Set admin role       │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ STEP 6: Seed Team       │
│  - 3 team members       │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│   Generate Summary      │
│   Show statistics       │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Disconnect Database    │
│   Seed Complete! ✅     │
└─────────────────────────┘
```

## 🛡️ Safety Features

### 1. Idempotent Operations
- Uses `upsert` instead of `create`
- Safe to run multiple times
- Won't create duplicates

### 2. Error Handling
- Each step wrapped in try-catch
- Detailed error logging
- Process continues if individual items fail
- Final summary shows success/failure counts

### 3. Data Validation
- Author relationships verified before blog post creation
- Email uniqueness enforced
- Slug uniqueness enforced
- Date formats validated

### 4. Transaction Safety
- Database connection properly managed
- Automatic disconnection on completion
- Rollback on critical failures

## 🧪 Testing After Seed

### 1. Verify Database
```bash
npm run db:verify
```

### 2. Check Admin Dashboard
1. Start server: `npm run dev`
2. Visit: `http://localhost:3000/admin`
3. Login with admin credentials
4. Verify all sections have data:
   - Services Management
   - Blog Management
   - Resources Management

### 3. Check Public Pages
Visit these URLs to verify:
- `/pages/services` - Should show all 15 services
- `/pages/blog` - Should show blog posts with filters
- `/pages/resources` - Should show resources by type
- `/pages/ai-chatbot-development` - Sample service page
- `/pages/shopify-headless-migration` - Sample service page

### 4. Database Inspection
```bash
# Open Prisma Studio for visual inspection
npm run db:studio
```

## 🔧 Troubleshooting

### Issue: "Author not found" errors

**Cause:** Author email mismatch between blog posts and authors data

**Fix:**
1. Check `blog-posts.ts` for `authorEmail` field
2. Verify it matches an email in `authors.ts`
3. Re-run seed

### Issue: Duplicate key errors

**Cause:** Running seed when data already exists

**Solution:**
- Script uses `upsert`, so this shouldn't happen
- If it does, check for custom unique constraints
- Clear database and re-run: `npx prisma migrate reset`

### Issue: Password not working

**Cause:** Incorrect admin password or user not created

**Solution:**
1. Check seed logs for admin user creation
2. Verify password: `Admin@2025`
3. Re-run seed if user wasn't created

### Issue: Images not loading

**Cause:** Image paths are placeholders

**Solution:**
1. Upload actual images to `/public/images/`
2. Update image URLs in seed data files
3. Or use image hosting service (Cloudinary, AWS S3)

## 📦 Adding More Content

### Method 1: Via Admin Dashboard (Recommended)

1. Login to `/admin`
2. Navigate to appropriate section
3. Click "Create New"
4. Fill form and save

**Benefits:**
- No code changes needed
- Immediate visual feedback
- Built-in validation

### Method 2: Update Seed Files

1. Edit appropriate file in `prisma/seed-data/`
2. Add new object to array
3. Re-run seed: `npm run db:seed:production`

**Benefits:**
- Version controlled
- Bulk updates easy
- Reproducible across environments

## 🚀 Production Deployment

### Pre-Deployment Checklist

- [ ] Database is ready (PostgreSQL on production)
- [ ] `DATABASE_URL` environment variable set
- [ ] Run migrations: `npx prisma migrate deploy`
- [ ] Run production seed: `npm run db:seed:production`
- [ ] Verify data: `npm run db:verify`
- [ ] **Change admin password!**
- [ ] Test all pages load correctly
- [ ] Upload actual images (replace placeholders)

### Migration Commands

```bash
# 1. Generate Prisma Client
npx prisma generate

# 2. Run migrations on production database
npx prisma migrate deploy

# 3. Seed production data
npm run db:seed:production

# 4. Verify
npm run db:verify
```

### Database Backup (Before Seed)

```bash
# PostgreSQL backup
pg_dump $DATABASE_URL > backup-before-seed.sql

# Restore if needed
psql $DATABASE_URL < backup-before-seed.sql
```

## 📊 Expected Output

When seed runs successfully, you should see:

```
🚀 Starting Production Database Seeding...

📊 Data to be seeded:
   - Services: 15
   - Authors: 5
   - Blog Posts: 20
   - Resources: 15

============================================================
  STEP 1: Seeding Authors
============================================================
✅ Created/Updated author: Rajesh Kumar
✅ Created/Updated author: Priya Sharma
✅ Created/Updated author: Amit Patel
✅ Created/Updated author: Sneha Reddy
✅ Created/Updated author: Vikram Singh
ℹ️  Total authors processed: 5/5

============================================================
  STEP 2: Seeding Services
============================================================
✅ Created/Updated service: AI Chatbot Development
✅ Created/Updated service: AI Voice Agents
... (13 more)
ℹ️  Total services processed: 15/15

[Similar output for remaining steps...]

============================================================
  SEEDING COMPLETED SUCCESSFULLY! 🎉
============================================================

📊 Database Summary:
   Authors: 5
   Services: 15
   Blog Posts: 20
   Resources: 15
   Admin Users: 1
   Team Members: 3

✨ Your website is now production-ready!
```

## 🎓 Best Practices

1. **Always backup** before running seeds in production
2. **Test locally first** before running on staging/production
3. **Use environment-specific** credentials
4. **Monitor logs** during seeding process
5. **Verify data** after seeding completes
6. **Change default passwords** immediately
7. **Update placeholder images** with real ones
8. **Review content** for your specific brand voice

## 🆘 Support

If you encounter issues:

1. Check the error logs in console
2. Verify database connection
3. Check Prisma schema matches database
4. Review this guide's troubleshooting section
5. Inspect data files for syntax errors

## 📝 Maintenance

### Regular Updates

1. **Add new services** as you create landing pages
2. **Publish blog posts** monthly (aim for 2-4 posts/month)
3. **Update resources** quarterly with new materials
4. **Review and update** existing content for accuracy

### Content Calendar Suggestion

- **Week 1:** New blog post (AI/Tech)
- **Week 2:** New blog post (E-commerce)
- **Week 3:** New resource (template/guide)
- **Week 4:** Update existing content

---

## ✅ Quick Command Reference

```bash
# Full seed with all data
npm run db:seed:production

# Verify seed results
npm run db:verify

# Open database GUI
npm run db:studio

# Create new migration
npm run db:migrate

# Deploy migrations (production)
npx prisma migrate deploy

# Reset database (WARNING: Deletes all data)
npx prisma migrate reset
```

---

**Last Updated:** November 2024  
**Version:** 1.0.0  
**Author:** Vedpragya Bharat Development Team
