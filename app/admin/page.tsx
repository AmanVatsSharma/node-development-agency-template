/**
 * Admin Dashboard Overview
 *
 * Main dashboard with real-time system health, leads funnel, AI agent stats,
 * content stats, recent activity, and quick actions.
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
  Activity,
  AlertCircle,
  CheckCircle2,
  Clock,
  BarChart3,
  PieChart,
  Calendar,
  Eye,
  Database,
  Wifi,
  WifiOff,
  Bot,
  RefreshCw,
  Flame,
  RotateCcw,
  Zap,
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
  leads: { total: number; new: number; contacted: number; interested: number; converted: number; today: number };
  aiAgent: { conversationsToday: number; leadsToday: number; conversionRate: number };
};

type RecentActivity = {
  id: string;
  type: string;
  title: string;
  timestamp: string;
  status?: 'success' | 'warning' | 'error';
};

type HealthStatus = {
  database: { ok: boolean; latencyMs: number | null; error?: string };
  zoho: { ok: boolean; connected: boolean; tokenExpiresAt?: string; error?: string };
  aiAgent: { ok: boolean; enabled: boolean; provider?: string; hasApiKey: boolean; error?: string };
  retryQueue: { queued: number; failed: number };
  checkedAt?: string;
};

function HealthDot({ ok }: { ok: boolean }) {
  return (
    <span className={`inline-block w-2.5 h-2.5 rounded-full ${ok ? 'bg-green-500' : 'bg-red-500'}`} />
  );
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [healthLoading, setHealthLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
    loadHealth();
    const healthInterval = setInterval(loadHealth, 30000);
    return () => clearInterval(healthInterval);
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

  const loadHealth = async () => {
    setHealthLoading(true);
    try {
      const response = await fetch('/api/admin/health');
      if (response.ok) {
        const data = await response.json();
        setHealth(data);
      }
    } catch (error) {
      console.error('[Dashboard] Error loading health:', error);
    } finally {
      setHealthLoading(false);
    }
  };

  if (loading || !stats) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <Activity className="h-12 w-12 animate-spin mx-auto text-blue-600" />
          <p className="text-lg font-medium text-slate-700 dark:text-slate-300">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <LayoutDashboard className="h-8 w-8 text-blue-600" />
            Dashboard Overview
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Welcome to your enterprise management system</p>
        </div>
        <Button variant="outline" onClick={() => { loadDashboardData(); loadHealth(); }}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      {/* ── SYSTEM HEALTH PANEL ── */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Zap className="h-5 w-5 text-blue-600" />
              System Health
            </CardTitle>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              {healthLoading && <RefreshCw className="h-3 w-3 animate-spin" />}
              {health?.checkedAt && `Checked ${new Date(health.checkedAt).toLocaleTimeString()}`}
              <Button variant="ghost" size="sm" onClick={loadHealth} disabled={healthLoading} className="h-7 px-2">
                <RefreshCw className={`h-3 w-3 ${healthLoading ? 'animate-spin' : ''}`} />
              </Button>
            </div>
          </div>
          <CardDescription>Real-time status of all connected services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Database */}
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 space-y-1">
              <div className="flex items-center gap-2">
                <HealthDot ok={health?.database?.ok ?? false} />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Database</span>
              </div>
              {health?.database ? (
                health.database.ok ? (
                  <p className="text-xs text-green-600 dark:text-green-400">
                    Connected · {health.database.latencyMs}ms
                  </p>
                ) : (
                  <p className="text-xs text-red-600 dark:text-red-400 truncate">{health.database.error || 'Connection failed'}</p>
                )
              ) : (
                <p className="text-xs text-slate-400">Checking...</p>
              )}
            </div>

            {/* Zoho CRM */}
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 space-y-1">
              <div className="flex items-center gap-2">
                <HealthDot ok={health?.zoho?.connected ?? false} />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Zoho CRM</span>
              </div>
              {health?.zoho ? (
                health.zoho.connected ? (
                  <p className="text-xs text-green-600 dark:text-green-400">
                    Connected
                    {health.zoho.tokenExpiresAt && (
                      <span className="text-slate-400"> · expires {new Date(health.zoho.tokenExpiresAt).toLocaleDateString()}</span>
                    )}
                  </p>
                ) : (
                  <p className="text-xs text-red-600 dark:text-red-400">Disconnected</p>
                )
              ) : (
                <p className="text-xs text-slate-400">Checking...</p>
              )}
              <Link href="/admin/integrations" className="text-xs text-blue-500 hover:underline">Configure →</Link>
            </div>

            {/* AI Agent */}
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 space-y-1">
              <div className="flex items-center gap-2">
                <HealthDot ok={(health?.aiAgent?.enabled && health?.aiAgent?.hasApiKey) ?? false} />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">AI Agent</span>
              </div>
              {health?.aiAgent ? (
                <p className={`text-xs ${health.aiAgent.enabled && health.aiAgent.hasApiKey ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'}`}>
                  {health.aiAgent.enabled ? 'Enabled' : 'Disabled'}
                  {health.aiAgent.provider && ` · ${health.aiAgent.provider}`}
                  {!health.aiAgent.hasApiKey && ' · No API key'}
                </p>
              ) : (
                <p className="text-xs text-slate-400">Checking...</p>
              )}
              <Link href="/admin/ai-agent" className="text-xs text-blue-500 hover:underline">Configure →</Link>
            </div>

            {/* Retry Queue */}
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 space-y-1">
              <div className="flex items-center gap-2">
                <HealthDot ok={(health?.retryQueue?.queued ?? 0) === 0 && (health?.retryQueue?.failed ?? 0) === 0} />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Retry Queue</span>
              </div>
              {health?.retryQueue ? (
                <div className="flex gap-3">
                  <p className="text-xs text-amber-600 dark:text-amber-400">{health.retryQueue.queued} queued</p>
                  <p className="text-xs text-red-600 dark:text-red-400">{health.retryQueue.failed} failed</p>
                </div>
              ) : (
                <p className="text-xs text-slate-400">Checking...</p>
              )}
              <Link href="/admin/integrations" className="text-xs text-blue-500 hover:underline">View logs →</Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── LEADS FUNNEL ── */}
      <div>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-purple-600" />
          Leads Pipeline
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { label: 'Total', value: stats.leads.total,     color: 'border-l-slate-400',  textColor: 'text-slate-900 dark:text-white', filter: '' },
            { label: 'New',   value: stats.leads.new,       color: 'border-l-blue-500',   textColor: 'text-blue-600',    filter: 'new' },
            { label: 'Contacted', value: stats.leads.contacted, color: 'border-l-amber-500', textColor: 'text-amber-600', filter: 'contacted' },
            { label: 'Interested', value: stats.leads.interested, color: 'border-l-purple-500', textColor: 'text-purple-600', filter: 'interested' },
            { label: 'Converted', value: stats.leads.converted, color: 'border-l-green-500', textColor: 'text-green-600', filter: 'converted' },
            { label: 'Today',  value: stats.leads.today,    color: 'border-l-indigo-500', textColor: 'text-indigo-600',  filter: '' },
          ].map(s => (
            <Link key={s.label} href={`/admin/leads${s.filter ? `?status=${s.filter}` : ''}`}>
              <Card className={`hover:shadow-md transition-shadow cursor-pointer border-l-4 ${s.color}`}>
                <CardContent className="pt-4 pb-4">
                  <div className="text-center">
                    <p className={`text-2xl font-bold ${s.textColor}`}>{s.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{s.label}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* ── AI AGENT TODAY + CONTENT STATS ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* AI Agent Today */}
        <Link href="/admin/conversations">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-violet-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">AI Conversations</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stats.aiAgent.conversationsToday}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="success" className="text-xs flex items-center gap-1">
                      <Flame className="h-3 w-3" />
                      {stats.aiAgent.leadsToday} leads today
                    </Badge>
                    {stats.aiAgent.conversionRate > 0 && (
                      <Badge variant="secondary" className="text-xs">{stats.aiAgent.conversionRate}% rate</Badge>
                    )}
                  </div>
                </div>
                <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-full">
                  <Bot className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Blog Posts */}
        <Link href="/admin/blog">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Blog Posts</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stats.blogPosts.total}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary" className="text-xs">{stats.blogPosts.featured} Featured</Badge>
                    {stats.blogPosts.recent > 0 && <Badge variant="success" className="text-xs">+{stats.blogPosts.recent} This Week</Badge>}
                  </div>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Portfolio */}
        <Link href="/admin/portfolio">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-purple-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Portfolio</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stats.projects.total}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary" className="text-xs">{stats.projects.featured} Featured</Badge>
                  </div>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400" />
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
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Newsletter Subs</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stats.newsletter.total}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="success" className="text-xs">{stats.newsletter.active} Active</Badge>
                    {stats.newsletter.thisWeek > 0 && (
                      <Badge variant="default" className="text-xs flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />+{stats.newsletter.thisWeek}
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

        {/* Resources */}
        <Link href="/admin/resources">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Resources</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stats.resources.total}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="success" className="text-xs flex items-center gap-1">
                      <Eye className="h-3 w-3" />{stats.resources.downloads} Downloads
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
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Services</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stats.services.total}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary" className="text-xs">{stats.services.featured} Featured</Badge>
                  </div>
                </div>
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                  <BarChart3 className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Team */}
        <Link href="/admin/team">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-cyan-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Team Members</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stats.team.total}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="success" className="text-xs">{stats.team.active} Active</Badge>
                  </div>
                </div>
                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-full">
                  <Users className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Contact Forms */}
        <Link href="/admin/contacts">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-pink-500">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Contact Forms</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stats.contacts.total}</p>
                  <div className="flex items-center gap-2 mt-2">
                    {stats.contacts.pending > 0 && <Badge variant="warning" className="text-xs">{stats.contacts.pending} Pending</Badge>}
                    {stats.contacts.today > 0 && <Badge variant="default" className="text-xs">+{stats.contacts.today} Today</Badge>}
                  </div>
                </div>
                <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-full">
                  <MessageSquare className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* ── RECENT ACTIVITY + QUICK ACTIONS ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest integration events across your system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.length === 0 ? (
                <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                  <Activity className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No recent activity</p>
                </div>
              ) : (
                recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className={`p-2 rounded-full shrink-0 ${
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
                      <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{activity.title}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {new Date(activity.timestamp).toLocaleString()} · {activity.type}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="mt-3">
              <Link href="/admin/logs">
                <Button variant="outline" size="sm" className="w-full">View All Logs</Button>
              </Link>
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
              <Link href="/admin/leads">
                <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                  <Database className="h-5 w-5" />
                  <span className="text-xs">View All Leads</span>
                </Button>
              </Link>
              <Link href="/admin/conversations">
                <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                  <Bot className="h-5 w-5" />
                  <span className="text-xs">AI Conversations</span>
                </Button>
              </Link>
              <Link href="/admin/ai-agent">
                <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                  <Zap className="h-5 w-5" />
                  <span className="text-xs">AI Agent Config</span>
                </Button>
              </Link>
              <Link href="/admin/integrations">
                <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                  <Activity className="h-5 w-5" />
                  <span className="text-xs">Integrations</span>
                </Button>
              </Link>
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
              <Link href="/admin/team">
                <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
                  <Users className="h-5 w-5" />
                  <span className="text-xs">Team Member</span>
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
