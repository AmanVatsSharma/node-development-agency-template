/**
 * Newsletter Subscriptions Management Page
 * 
 * Manage email newsletter subscriptions
 */

'use client';

import React, { useEffect, useState } from 'react';
import {
  Search,
  Mail,
  Download,
  Trash2,
  UserCheck,
  UserX,
  Calendar,
  TrendingUp,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';

type NewsletterSubscription = {
  id: string;
  email: string;
  name?: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

export default function NewsletterAdminPage() {
  const [subscriptions, setSubscriptions] = useState<NewsletterSubscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => {
    loadSubscriptions();
  }, []);

  const loadSubscriptions = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/newsletter');
      if (response.ok) {
        const data = await response.json();
        setSubscriptions(data.subscriptions || []);
      }
    } catch (error) {
      console.error('[Newsletter] Error loading:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleActive = async (id: string, active: boolean) => {
    try {
      const response = await fetch('/api/admin/newsletter', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, active }),
      });
      
      if (response.ok) {
        await loadSubscriptions();
      }
    } catch (error) {
      console.error('[Newsletter] Error updating:', error);
      alert('Failed to update subscription. Please try again.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this subscription?')) return;
    
    try {
      const response = await fetch(`/api/admin/newsletter?id=${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        await loadSubscriptions();
      }
    } catch (error) {
      console.error('[Newsletter] Error deleting:', error);
      alert('Failed to delete subscription. Please try again.');
    }
  };

  const exportToCSV = () => {
    const csv = [
      ['Email', 'Name', 'Status', 'Subscribed Date'].join(','),
      ...filteredSubscriptions.map((sub) =>
        [
          sub.email,
          sub.name || '',
          sub.active ? 'Active' : 'Inactive',
          new Date(sub.createdAt).toLocaleDateString(),
        ].join(',')
      ),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter-subscriptions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const filteredSubscriptions = subscriptions.filter((subscription) => {
    const matchesSearch =
      subscription.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (subscription.name && subscription.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'active' && subscription.active) ||
      (statusFilter === 'inactive' && !subscription.active);
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: subscriptions.length,
    active: subscriptions.filter((s) => s.active).length,
    inactive: subscriptions.filter((s) => !s.active).length,
    thisWeek: subscriptions.filter((s) => {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return new Date(s.createdAt) > weekAgo;
    }).length,
  };

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Mail className="h-8 w-8 text-indigo-600" />
            Newsletter Subscriptions
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Manage email newsletter subscribers
          </p>
        </div>
        <Button onClick={exportToCSV} className="gap-2">
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Total Subscribers
                </p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                  {stats.total}
                </p>
              </div>
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Active
                </p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                  {stats.active}
                </p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                <UserCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Inactive
                </p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                  {stats.inactive}
                </p>
              </div>
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full">
                <UserX className="h-6 w-6 text-slate-600 dark:text-slate-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  This Week
                </p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                  {stats.thisWeek}
                </p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search & Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search by email or name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
            >
              <option value="all">All Status</option>
              <option value="active">Active Only</option>
              <option value="inactive">Inactive Only</option>
            </select>
            <Badge variant="secondary">
              {filteredSubscriptions.length} {filteredSubscriptions.length === 1 ? 'Subscriber' : 'Subscribers'}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Subscriptions List */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin h-8 w-8 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto" />
          <p className="mt-4 text-slate-600 dark:text-slate-400">Loading subscriptions...</p>
        </div>
      ) : (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              {filteredSubscriptions.map((subscription) => (
                <div
                  key={subscription.id}
                  className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className={`p-2 rounded-full ${
                      subscription.active
                        ? 'bg-green-100 dark:bg-green-900/30'
                        : 'bg-slate-200 dark:bg-slate-700'
                    }`}>
                      <Mail className={`h-4 w-4 ${
                        subscription.active
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-slate-400'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 dark:text-white truncate">
                        {subscription.email}
                      </p>
                      <div className="flex items-center gap-3 mt-1">
                        {subscription.name && (
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {subscription.name}
                          </p>
                        )}
                        <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(subscription.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={subscription.active ? 'success' : 'secondary'} className="text-xs">
                      {subscription.active ? 'Active' : 'Inactive'}
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleActive(subscription.id, !subscription.active)}
                    >
                      {subscription.active ? (
                        <UserX className="h-4 w-4" />
                      ) : (
                        <UserCheck className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(subscription.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
