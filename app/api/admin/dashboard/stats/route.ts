/**
 * Dashboard Statistics API
 * 
 * Provides aggregate statistics for the admin dashboard
 */

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    // Get counts from database
    const [
      blogPostsCount,
      featuredBlogPosts,
      projectsCount,
      featuredProjects,
      resourcesCount,
      servicesCount,
      featuredServices,
      teamCount,
      activeTeam,
      contactsCount,
      pendingContacts,
      newsletterCount,
      activeNewsletter,
      integrationSettings,
      recentLogs,
    ] = await Promise.all([
      prisma.blogPost.count(),
      prisma.blogPost.count({ where: { featured: true } }),
      prisma.project.count(),
      prisma.project.count({ where: { featured: true } }),
      prisma.resource.count(),
      prisma.service.count(),
      prisma.service.count({ where: { featured: true } }),
      prisma.teamMember.count(),
      prisma.teamMember.count({ where: { active: true } }),
      prisma.contactSubmission.count(),
      prisma.contactSubmission.count({ where: { status: 'pending' } }),
      prisma.newsletterSubscription.count(),
      prisma.newsletterSubscription.count({ where: { active: true } }),
      prisma.integrationSettings.findFirst(),
      prisma.integrationLog.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    // Calculate recent counts (last 7 days)
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const [recentBlogPosts, todayContacts, recentNewsletter, errorLogs] = await Promise.all([
      prisma.blogPost.count({
        where: { createdAt: { gte: weekAgo } },
      }),
      prisma.contactSubmission.count({
        where: {
          createdAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
          },
        },
      }),
      prisma.newsletterSubscription.count({
        where: { createdAt: { gte: weekAgo } },
      }),
      prisma.integrationLog.count({
        where: { level: 'error' },
      }),
    ]);

    const stats = {
      blogPosts: {
        total: blogPostsCount,
        featured: featuredBlogPosts,
        recent: recentBlogPosts,
      },
      projects: {
        total: projectsCount,
        featured: featuredProjects,
        active: projectsCount, // Could be refined with additional logic
      },
      resources: {
        total: resourcesCount,
        downloads: 0, // Would need tracking implementation
      },
      services: {
        total: servicesCount,
        featured: featuredServices,
      },
      team: {
        total: teamCount,
        active: activeTeam,
      },
      contacts: {
        total: contactsCount,
        pending: pendingContacts,
        today: todayContacts,
      },
      newsletter: {
        total: newsletterCount,
        active: activeNewsletter,
        thisWeek: recentNewsletter,
      },
      integrations: {
        zohoConnected: !!integrationSettings?.zohoRefreshToken,
        googleConfigured: !!integrationSettings?.googleConversionId,
        errors: errorLogs,
      },
    };

    // Format recent activity
    const recentActivity = recentLogs.map((log) => ({
      id: log.id,
      type: log.type,
      title: log.message,
      timestamp: log.createdAt.toISOString(),
      status: log.level === 'error' ? 'error' : log.level === 'warn' ? 'warning' : 'success',
    }));

    return NextResponse.json({
      stats,
      recentActivity,
    });
  } catch (error) {
    console.error('[Dashboard API] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard statistics' },
      { status: 500 }
    );
  }
}
