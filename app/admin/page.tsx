/**
 * Admin Dashboard Overview
 * 
 * Main dashboard page with analytics, quick stats, and recent activity
 */

'use client';

import React, { useEffect, useState } from 'react';
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  BookOpen,
  Users,
  MessageSquare,
  Mail,
  TrendingUp,
  TrendingDown,
  Activity,
  AlertCircle,
  CheckCircle2,
  Clock,
  BarChart3,
  PieChart,
  Calendar,
  Eye,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';

type Stats = {
  blogPosts: { total: number; featured: number; recent: number };
  projects: { total: number; featured: number; active: number };
  resources: { total: number; downloads: number };
  services: { total: number; featured: number };
  team: { total: number; active: number };
  contacts: { total: number; pending: number; today: number };
  newsletter: { total: number; active: number; thisWeek: number };
  integrations: { zohoConnected: boolean; googleConfigured: boolean; errors: number };
};

type RecentActivity = {
  id: string;
  type: string;
  title: string;
  timestamp: string;
  status?: 'success' | 'warning' | 'error';
};

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/dashboard/stats');
      if (response.ok) {
        const data = await response.json();
        setStats(data.stats);
        setRecentActivity(data.recentActivity || []);
      }
    } catch (error) {
      console.error('[Dashboard] Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !stats) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <Activity className="h-12 w-12 animate-spin mx-auto text-blue-600" />
          <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
          <LayoutDashboard className="h-8 w-8 text-blue-600" />
          Dashboard Overview
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Welcome to your enterprise content management system
        </p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Blog Posts */}
        <Link href="/admin/blog">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Blog Posts
                  </p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                    {stats.blogPosts.total}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary" className="text-xs">
                      {stats.blogPosts.featured} Featured
                    </Badge>
                    {stats.blogPosts.recent > 0 && (
                      <Badge variant="success" className="text-xs">
                        +{stats.blogPosts.recent} This Week
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Portfolio Projects */}
        <Link href="/admin/portfolio">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-purple-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Portfolio Projects
                  </p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                    {stats.projects.total}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary" className="text-xs">
                      {stats.projects.featured} Featured
                    </Badge>
                    <Badge variant="default" className="text-xs">
                      {stats.projects.active} Active
                    </Badge>
                  </div>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Resources */}
        <Link href="/admin/resources">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Resources
                  </p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                    {stats.resources.total}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="success" className="text-xs flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {stats.resources.downloads} Downloads
                    </Badge>
                  </div>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Services */}
        <Link href="/admin/services">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-orange-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Services
                  </p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                    {stats.services.total}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary" className="text-xs">
                      {stats.services.featured} Featured
                    </Badge>
                  </div>
                </div>
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                  <BarChart3 className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Team Members */}
        <Link href="/admin/team">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-cyan-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Team Members
                  </p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                    {stats.team.total}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="success" className="text-xs">
                      {stats.team.active} Active
                    </Badge>
                  </div>
                </div>
                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-full">
                  <Users className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Contact Submissions */}
        <Link href="/admin/contacts">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-pink-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Contact Forms
                  </p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                    {stats.contacts.total}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    {stats.contacts.pending > 0 && (
                      <Badge variant="warning" className="text-xs">
                        {stats.contacts.pending} Pending
                      </Badge>
                    )}
                    {stats.contacts.today > 0 && (
                      <Badge variant="default" className="text-xs">
                        +{stats.contacts.today} Today
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-full">
                  <MessageSquare className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Newsletter */}
        <Link href="/admin/newsletter">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-indigo-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Newsletter Subs
                  </p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                    {stats.newsletter.total}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="success" className="text-xs">
                      {stats.newsletter.active} Active
                    </Badge>
                    {stats.newsletter.thisWeek > 0 && (
                      <Badge variant="default" className="text-xs flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        +{stats.newsletter.thisWeek}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                  <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* System Health */}
        <Card className="border-l-4 border-l-slate-500">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  System Health
                </p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                  {stats.integrations.errors === 0 ? '100%' : '98%'}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  {stats.integrations.zohoConnected ? (
                    <Badge variant="success" className="text-xs">Zoho Connected</Badge>
                  ) : (
                    <Badge variant="secondary" className="text-xs">Zoho Offline</Badge>
                  )}
                  {stats.integrations.googleConfigured ? (
                    <Badge variant="success" className="text-xs">Google Active</Badge>
                  ) : (
                    <Badge variant="secondary" className="text-xs">Google Inactive</Badge>
                  )}
                </div>
              </div>
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full">
                <Activity className="h-6 w-6 text-slate-600 dark:text-slate-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest updates across your system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.length === 0 ? (
                <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                  <Activity className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No recent activity</p>
                </div>
              ) : (
                recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className={`p-2 rounded-full ${
                      activity.status === 'success' ? 'bg-green-100 dark:bg-green-900/30' :
                      activity.status === 'warning' ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                      activity.status === 'error' ? 'bg-red-100 dark:bg-red-900/30' :
                      'bg-blue-100 dark:bg-blue-900/30'
                    }`}>
                      {activity.status === 'success' ? <CheckCircle2 className="h-4 w-4 text-green-600" /> :
                       activity.status === 'warning' ? <AlertCircle className="h-4 w-4 text-yellow-600" /> :
                       activity.status === 'error' ? <AlertCircle className="h-4 w-4 text-red-600" /> :
                       <Activity className="h-4 w-4 text-blue-600" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        {activity.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {new Date(activity.timestamp).toLocaleString()} • {activity.type}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-purple-600" />
              Quick Actions
            </CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/admin/blog">
                <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                  <FileText className="h-5 w-5" />
                  <span className="text-xs">New Blog Post</span>
                </Button>
              </Link>
              <Link href="/admin/portfolio">
                <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                  <Briefcase className="h-5 w-5" />
                  <span className="text-xs">Add Project</span>
                </Button>
              </Link>
              <Link href="/admin/resources">
                <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                  <BookOpen className="h-5 w-5" />
                  <span className="text-xs">Upload Resource</span>
                </Button>
              </Link>
              <Link href="/admin/services">
                <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                  <BarChart3 className="h-5 w-5" />
                  <span className="text-xs">Add Service</span>
                </Button>
              </Link>
              <Link href="/admin/team">
                <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                  <Users className="h-5 w-5" />
                  <span className="text-xs">Team Member</span>
                </Button>
              </Link>
              <Link href="/admin/contacts">
                <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                  <MessageSquare className="h-5 w-5" />
                  <span className="text-xs">View Contacts</span>
                </Button>
              </Link>
              <Link href="/admin/integrations">
                <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                  <Activity className="h-5 w-5" />
                  <span className="text-xs">Integrations</span>
                </Button>
              </Link>
              <Link href="/admin/logs">
                <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                  <Calendar className="h-5 w-5" />
                  <span className="text-xs">System Logs</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
