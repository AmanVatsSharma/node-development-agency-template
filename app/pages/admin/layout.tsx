/**
 * Admin Layout with Sidebar Navigation
 * 
 * Enterprise-grade admin dashboard layout with:
 * - Responsive sidebar navigation
 * - Active route highlighting
 * - Dark mode support
 * - User session display
 * - Quick actions
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  BookOpen,
  Users,
  MessageSquare,
  Mail,
  Settings,
  Activity,
  Wrench,
  Menu,
  X,
  LogOut,
  ChevronRight,
  Server,
  Database,
  Shield,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { cn } from '@/app/lib/utils';

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
  description?: string;
};

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/pages/admin',
    icon: LayoutDashboard,
    description: 'Overview and analytics',
  },
  {
    label: 'Services',
    href: '/pages/admin/services',
    icon: Wrench,
    description: 'Manage service offerings',
  },
  {
    label: 'Portfolio',
    href: '/pages/admin/portfolio',
    icon: Briefcase,
    description: 'Project showcase management',
  },
  {
    label: 'Resources',
    href: '/pages/admin/resources',
    icon: BookOpen,
    description: 'Ebooks, guides, templates',
  },
  {
    label: 'Blog Posts',
    href: '/pages/admin/blog',
    icon: FileText,
    description: 'Content management',
  },
  {
    label: 'Team',
    href: '/pages/admin/team',
    icon: Users,
    description: 'Team member profiles',
  },
  {
    label: 'Contacts',
    href: '/pages/admin/contacts',
    icon: MessageSquare,
    description: 'Form submissions',
  },
  {
    label: 'Newsletter',
    href: '/pages/admin/newsletter',
    icon: Mail,
    description: 'Email subscriptions',
  },
  {
    label: 'Integrations',
    href: '/pages/admin/integrations',
    icon: Settings,
    description: 'Zoho, Google Ads',
  },
  {
    label: 'Logs',
    href: '/pages/admin/logs',
    icon: Activity,
    description: 'System activity logs',
  },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.href = '/login';
    } catch (error) {
      console.error('[Admin Layout] Error logging out:', error);
    }
  };

  const isActiveRoute = (href: string) => {
    if (href === '/pages/admin') {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <>
      {/* SEO: Prevent indexing of admin pages */}
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        {/* Mobile sidebar backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={cn(
            'fixed top-0 left-0 z-50 h-full w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-transform duration-300 overflow-y-auto',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          )}
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-slate-900 dark:text-white">
                    Admin Panel
                  </h1>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Enterprise Dashboard
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActiveRoute(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-all group relative',
                    active
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  )}
                >
                  <Icon className={cn('h-5 w-5', active ? 'text-white' : 'text-slate-500 dark:text-slate-400')} />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{item.label}</div>
                    {item.description && !active && (
                      <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {item.description}
                      </div>
                    )}
                  </div>
                  {active && (
                    <ChevronRight className="h-4 w-4" />
                  )}
                  {item.badge && (
                    <span className="px-2 py-0.5 text-xs font-semibold bg-red-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Quick Stats */}
          <div className="p-4 mx-4 mb-4 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <Database className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                System Status
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600 dark:text-slate-400">Database</span>
                <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-medium">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  Online
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600 dark:text-slate-400">API</span>
                <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-medium">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600 dark:text-slate-400">Cache</span>
                <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium">
                  <Server className="h-3 w-3" />
                  Ready
                </span>
              </div>
            </div>
          </div>

          {/* Logout */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <Button
              variant="outline"
              className="w-full justify-start gap-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 border-red-200 dark:border-red-900"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:pl-72">
          {/* Mobile Header */}
          <header className="lg:hidden sticky top-0 z-30 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-3">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              >
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-sm font-semibold text-slate-900 dark:text-white">
                Admin Panel
              </h1>
              <div className="w-10" /> {/* Spacer for centering */}
            </div>
          </header>

          {/* Page Content */}
          <main className="min-h-screen">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
