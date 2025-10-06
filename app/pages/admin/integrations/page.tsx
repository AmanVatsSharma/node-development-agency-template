/**
 * Admin Integrations Dashboard
 * 
 * Simple admin panel for managing CRM and Ads integrations.
 * Protected by simple password authentication (no complex auth system).
 * 
 * SEO:
 * - Includes noindex/nofollow meta tags to prevent search engine indexing
 * - Blocked in robots.txt
 * - Not included in sitemap.xml
 */

'use client';

import React, { useEffect, useState } from 'react';
import {
  Activity,
  AlertCircle,
  CheckCircle2,
  Clock,
  Database,
  LogOut,
  PlayCircle,
  RefreshCw,
  Save,
  Settings,
  Shield,
  TrendingUp,
  Zap,
} from 'lucide-react';

// UI Components
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert';
import { Separator } from '@/app/components/ui/separator';
import { Label } from '@/app/components/ui/label';

/**
 * Type Definitions
 */
type Settings = {
  id: string;
  zohoClientId?: string | null;
  zohoClientSecret?: string | null;
  zohoRefreshToken?: string | null;
  googleConversionId?: string | null;
  googleApiKey?: string | null;
  googleEventLabels?: Record<string, string> | null;
  lastZohoTokenRefreshAt?: string | null;
};

type LandingPageConfig = {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  leadSubmitLabel?: string | null;
  callClickLabel?: string | null;
  whatsappLabel?: string | null;
  newsletterLabel?: string | null;
  active: boolean;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
};

type IntegrationLog = {
  id: string;
  type: string;
  provider: string;
  level: string;
  message: string;
  error?: string | null;
  createdAt: string;
};

type TestResult = {
  ok: boolean;
  error?: string;
  tokenExpiresAt?: string;
  conversionId?: string;
  zohoLeadId?: string;
  response?: any;
};

/**
 * Main Component
 */
export default function IntegrationsAdminPage() {
  console.log('[Admin Page] Rendering integrations dashboard');

  // State Management
  const [settings, setSettings] = useState<Settings | null>(null);
  const [originalSettings, setOriginalSettings] = useState<Settings | null>(null);
  const [logs, setLogs] = useState<IntegrationLog[]>([]);
  const [settingsError, setSettingsError] = useState<string | null>(null);
  const [logsError, setLogsError] = useState<string | null>(null);
  const [authRequired, setAuthRequired] = useState(false);
  const [saving, setSaving] = useState(false);
  const [testing, setTesting] = useState<{ zoho: boolean; google: boolean; lead: boolean }>({
    zoho: false,
    google: false,
    lead: false,
  });
  const [testResult, setTestResult] = useState<{
    zoho?: TestResult;
    google?: TestResult;
    lead?: TestResult;
  }>({});
  const [activeTab, setActiveTab] = useState('zoho');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [logFilter, setLogFilter] = useState<'all' | 'zoho' | 'google_ads'>('all');
  
  // Landing Pages State
  const [landingPages, setLandingPages] = useState<LandingPageConfig[]>([]);
  const [editingPage, setEditingPage] = useState<LandingPageConfig | null>(null);
  const [savingPage, setSavingPage] = useState(false);

  /**
   * Load initial data on component mount
   */
  useEffect(() => {
    console.log('[Admin Page] Loading initial data...');
    loadData();
  }, []);

  /**
   * Check for unsaved changes
   */
  useEffect(() => {
    if (settings && originalSettings) {
      const hasChanges = JSON.stringify(settings) !== JSON.stringify(originalSettings);
      setHasUnsavedChanges(hasChanges);
    }
  }, [settings, originalSettings]);

  /**
   * Load data from API
   */
  const loadData = async () => {
    setSettingsError(null);
    setLogsError(null);
    setAuthRequired(false);

    // Helper: fetch with timeout to avoid hanging UI
    const fetchWithTimeout = (url: string, options: RequestInit = {}, timeoutMs = 15000): Promise<Response> => {
      return new Promise((resolve, reject) => {
        const id = setTimeout(() => reject(new Error('Request timed out')), timeoutMs);
        fetch(url, { cache: 'no-store', ...options })
          .then((res) => {
            clearTimeout(id);
            resolve(res);
          })
          .catch((err) => {
            clearTimeout(id);
            reject(err);
          });
      });
    };

    // 1) Load settings first; if this fails we show an error state
    try {
      const settingsRes = await fetchWithTimeout('/api/admin/integrations');
      let settingsData: any = null;
      try {
        settingsData = await settingsRes.json();
      } catch (e) {
        // Non-JSON response (e.g., HTML error page)
        settingsData = null;
      }

      if (!settingsRes.ok || !settingsData?.settings) {
        const status = settingsRes.status;
        const message = settingsData?.error || `Failed to load settings (status ${status || 'unknown'})`;
        setSettingsError(message);
        setAuthRequired(status === 401);
        return; // Stop here; keep UI in error state
      }

      setSettings(settingsData.settings);
      setOriginalSettings(settingsData.settings);
    } catch (error: any) {
      console.error('[Admin Page] Settings load failed:', error);
      setSettingsError(String(error?.message || error));
      return;
    }

    // 2) Load logs independently; failure should not block settings/UI
    try {
      const logsRes = await fetchWithTimeout('/api/admin/logs?take=100');
      let logsData: any = null;
      try {
        logsData = await logsRes.json();
      } catch (e) {
        logsData = null;
      }

      if (!logsRes.ok) {
        const status = logsRes.status;
        const message = logsData?.error || `Failed to load logs (status ${status || 'unknown'})`;
        setLogsError(message);
        setLogs([]);
      } else {
        setLogs(Array.isArray(logsData?.logs) ? logsData.logs : []);
      }
    } catch (error: any) {
      console.error('[Admin Page] Logs load failed:', error);
      setLogsError(String(error?.message || error));
      setLogs([]);
    }

    // 3) Load landing pages
    try {
      const pagesRes = await fetchWithTimeout('/api/admin/landing-pages');
      const pagesData = await pagesRes.json();
      if (pagesRes.ok && pagesData?.landingPages) {
        setLandingPages(pagesData.landingPages);
      }
    } catch (error: any) {
      console.error('[Admin Page] Landing pages load failed:', error);
    }
  };

  /**
   * Test provider connection
   */
  const testProvider = async (provider: 'zoho' | 'google') => {
    setTesting((prev) => ({ ...prev, [provider]: true }));
    setTestResult((prev) => ({ ...prev, [provider]: undefined }));

    try {
      const res = await fetch(`/api/admin/integrations/test?provider=${provider}`);
      const data = await res.json();
      setTestResult((prev) => ({ ...prev, [provider]: data }));
      await loadData();
    } catch (error) {
      setTestResult((prev) => ({
        ...prev,
        [provider]: { ok: false, error: String(error) },
      }));
    } finally {
      setTesting((prev) => ({ ...prev, [provider]: false }));
    }
  };

  /**
   * Test lead push to Zoho CRM
   */
  const testLeadPush = async () => {
    setTesting((prev) => ({ ...prev, lead: true }));
    setTestResult((prev) => ({ ...prev, lead: undefined }));

    try {
      const res = await fetch('/api/admin/integrations/test-lead', { method: 'POST' });
      const data = await res.json();
      setTestResult((prev) => ({ ...prev, lead: data }));
      await loadData();
    } catch (error) {
      setTestResult((prev) => ({
        ...prev,
        lead: { ok: false, error: String(error) },
      }));
    } finally {
      setTesting((prev) => ({ ...prev, lead: false }));
    }
  };

  /**
   * Save integration settings
   */
  const save = async () => {
    setSaving(true);

    try {
      const res = await fetch('/api/admin/integrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });

      const data = await res.json();
      setSettings(data.settings);
      setOriginalSettings(data.settings);
      setHasUnsavedChanges(false);
      await loadData();
    } catch (error) {
      console.error('[Admin Page] Error saving settings:', error);
      alert('Failed to save settings. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  /**
   * Handle logout
   */
  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.href = '/login';
    } catch (error) {
      console.error('[Admin Page] Error logging out:', error);
    }
  };

  /**
   * Update settings helper
   */
  const updateSettings = (updates: Partial<Settings>) => {
    setSettings((prev) => (prev ? { ...prev, ...updates } : null));
  };

  /**
   * Save landing page configuration
   */
  const saveLandingPage = async (page: Partial<LandingPageConfig>) => {
    setSavingPage(true);
    try {
      const res = await fetch('/api/admin/landing-pages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(page),
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save');
      
      await loadData();
      setEditingPage(null);
    } catch (error: any) {
      console.error('[Admin Page] Error saving landing page:', error);
      alert('Failed to save landing page: ' + error.message);
    } finally {
      setSavingPage(false);
    }
  };

  /**
   * Delete landing page configuration
   */
  const deleteLandingPage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this landing page configuration?')) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/landing-pages?id=${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to delete');
      }

      await loadData();
    } catch (error: any) {
      console.error('[Admin Page] Error deleting landing page:', error);
      alert('Failed to delete landing page: ' + error.message);
    }
  };

  /**
   * Create new landing page entry
   */
  const createNewLandingPage = () => {
    setEditingPage({
      id: '',
      slug: '',
      name: '',
      description: null,
      leadSubmitLabel: null,
      callClickLabel: null,
      whatsappLabel: null,
      newsletterLabel: null,
      active: true,
      notes: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  };

  /**
   * Filter logs based on selected provider
   */
  const filteredLogs = logs.filter((log) => {
    if (logFilter === 'all') return true;
    return log.provider === logFilter;
  });

  /**
   * Calculate statistics from logs
   */
  const stats = {
    totalLogs: logs.length,
    errors: logs.filter((l) => l.level === 'error').length,
    zohoLogs: logs.filter((l) => l.provider === 'zoho').length,
    googleLogs: logs.filter((l) => l.provider === 'google_ads').length,
  };

  /**
   * Loading state
   */
  if (!settings) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        {settingsError ? (
          <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 mt-0.5" />
              <div className="space-y-3">
                <div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">Failed to load dashboard</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{settingsError}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" onClick={loadData}>
                    <RefreshCw className="h-4 w-4 mr-2" /> Retry
                  </Button>
                  {authRequired && (
                    <Button onClick={() => (window.location.href = '/login?callbackUrl=/pages/admin/integrations')}>
                      <Shield className="h-4 w-4 mr-2" /> Sign in
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <RefreshCw className="h-12 w-12 animate-spin mx-auto text-primary" />
            <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
              Loading integrations dashboard...
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      {/* SEO: Prevent indexing of admin pages */}
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Admin - Integration Settings</title>
      </head>

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        {/* Header */}
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Integration Settings
                  </h1>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Manage CRM and Ads integrations
                  </p>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Total Logs
                    </p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                      {stats.totalLogs}
                    </p>
                  </div>
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <Activity className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Errors
                    </p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                      {stats.errors}
                    </p>
                  </div>
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
                    <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Zoho Events
                    </p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                      {stats.zohoLogs}
                    </p>
                  </div>
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                    <Database className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Google Events
                    </p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                      {stats.googleLogs}
                    </p>
                  </div>
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                    <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Unsaved Changes Alert */}
          {hasUnsavedChanges && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Unsaved Changes</AlertTitle>
              <AlertDescription>
                You have unsaved changes. Click the Save button below to persist your modifications.
              </AlertDescription>
            </Alert>
          )}

          {/* Integration Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Integration Configuration
              </CardTitle>
              <CardDescription>
                Configure your Zoho CRM and Google Ads integrations. Settings are encrypted and stored securely.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="w-full grid grid-cols-3 mb-6">
                  <TabsTrigger value="zoho" className="flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    Zoho CRM
                  </TabsTrigger>
                  <TabsTrigger value="google" className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Google Ads
                  </TabsTrigger>
                  <TabsTrigger value="landing-pages" className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Landing Pages
                  </TabsTrigger>
                </TabsList>

                {/* Zoho CRM Tab */}
                <TabsContent value="zoho" className="space-y-6">
                  <div className="space-y-4">
                    {/* Zoho OAuth Connect/Reauthorize */}
                    <div className="flex items-center gap-3">
                      {!settings.zohoRefreshToken ? (
                        <Button asChild variant="outline">
                          <a href="/api/admin/integrations/zoho/oauth/start">
                            <Shield className="h-4 w-4 mr-2" /> Connect Zoho (OAuth)
                          </a>
                        </Button>
                      ) : (
                        <>
                          <Button asChild variant="outline">
                            <a href="/api/admin/integrations/zoho/oauth/start">
                              <RefreshCw className="h-4 w-4 mr-2" /> Reauthorize Zoho
                            </a>
                          </Button>
                          <Button
                            variant="destructive"
                            onClick={async () => {
                              try {
                                await fetch('/api/admin/integrations/zoho/oauth/disconnect', { method: 'POST' });
                                await loadData();
                              } catch {}
                            }}
                          >
                            Disconnect
                          </Button>
                          <Badge variant="success">Connected</Badge>
                        </>
                      )}
                    </div>

                    {/* Client ID */}
                    <div className="space-y-2">
                      <Label htmlFor="zoho-client-id">Client ID</Label>
                      <Input
                        id="zoho-client-id"
                        placeholder="Enter Zoho Client ID"
                        value={settings.zohoClientId || ''}
                        onChange={(e) => updateSettings({ zohoClientId: e.target.value })}
                      />
                    </div>

                    {/* Client Secret */}
                    <div className="space-y-2">
                      <Label htmlFor="zoho-client-secret">Client Secret</Label>
                      <Input
                        id="zoho-client-secret"
                        type="password"
                        placeholder="Enter Zoho Client Secret"
                        value={settings.zohoClientSecret || ''}
                        onChange={(e) => updateSettings({ zohoClientSecret: e.target.value })}
                      />
                    </div>

                    {/* Refresh Token */}
                    <div className="space-y-2">
                      <Label htmlFor="zoho-refresh-token">Refresh Token</Label>
                      <Textarea
                        id="zoho-refresh-token"
                        placeholder="Enter Zoho Refresh Token"
                        value={settings.zohoRefreshToken || ''}
                        onChange={(e) => updateSettings({ zohoRefreshToken: e.target.value })}
                        rows={4}
                      />
                    </div>

                    {/* Last Refresh Info */}
                    {settings.lastZohoTokenRefreshAt && (
                      <div className="flex items-center gap-2 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        <Clock className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          Last token refresh:{' '}
                          <strong>
                            {new Date(settings.lastZohoTokenRefreshAt).toLocaleString()}
                          </strong>
                        </span>
                      </div>
                    )}
                  </div>

                  <Separator />

                  {/* Test Actions */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <Zap className="h-4 w-4 text-yellow-600" />
                      Connection Tests
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="outline"
                        onClick={() => testProvider('zoho')}
                        disabled={testing.zoho}
                      >
                        {testing.zoho ? (
                          <>
                            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                            Testing...
                          </>
                        ) : (
                          <>
                            <PlayCircle className="h-4 w-4 mr-2" />
                            Test Zoho Connection
                          </>
                        )}
                      </Button>

                      <Button onClick={testLeadPush} disabled={testing.lead}>
                        {testing.lead ? (
                          <>
                            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                            Pushing...
                          </>
                        ) : (
                          <>
                            <PlayCircle className="h-4 w-4 mr-2" />
                            Test Lead Push
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Test Results */}
                    {testResult.zoho && (
                      <Alert variant={testResult.zoho.ok ? 'default' : 'destructive'}>
                        {testResult.zoho.ok ? (
                          <>
                            <CheckCircle2 className="h-4 w-4" />
                            <AlertTitle>Connection Successful</AlertTitle>
                            <AlertDescription>
                              Zoho CRM connection is working.{' '}
                              {testResult.zoho.tokenExpiresAt && (
                                <>
                                  Token expires:{' '}
                                  <strong>
                                    {new Date(testResult.zoho.tokenExpiresAt).toLocaleString()}
                                  </strong>
                                </>
                              )}
                            </AlertDescription>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Connection Failed</AlertTitle>
                            <AlertDescription>
                              {testResult.zoho.error || 'Unknown error occurred'}
                            </AlertDescription>
                          </>
                        )}
                      </Alert>
                    )}

                    {testResult.lead && (
                      <Alert variant={testResult.lead.ok ? 'default' : 'destructive'}>
                        {testResult.lead.ok ? (
                          <>
                            <CheckCircle2 className="h-4 w-4" />
                            <AlertTitle>Lead Created Successfully</AlertTitle>
                            <AlertDescription>
                              Sandbox lead pushed to Zoho CRM.{' '}
                              {testResult.lead.zohoLeadId && (
                                <>
                                  Lead ID: <strong>{testResult.lead.zohoLeadId}</strong>
                                </>
                              )}
                            </AlertDescription>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Lead Push Failed</AlertTitle>
                            <AlertDescription>
                              {testResult.lead.error || 'Unknown error occurred'}
                            </AlertDescription>
                          </>
                        )}
                      </Alert>
                    )}
                  </div>
                </TabsContent>

                {/* Google Ads Tab */}
                <TabsContent value="google" className="space-y-6">
                  <div className="space-y-4">
                    {/* Conversion ID */}
                    <div className="space-y-2">
                      <Label htmlFor="google-conversion-id">Conversion ID</Label>
                      <Input
                        id="google-conversion-id"
                        placeholder="AW-XXXXXXXXXX"
                        value={settings.googleConversionId || ''}
                        onChange={(e) => updateSettings({ googleConversionId: e.target.value })}
                      />
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Your Google Ads conversion tracking ID (e.g., AW-123456789)
                      </p>
                    </div>

                    {/* API Key */}
                    <div className="space-y-2">
                      <Label htmlFor="google-api-key">API Key (Optional)</Label>
                      <Input
                        id="google-api-key"
                        type="password"
                        placeholder="Enter Google API Key"
                        value={settings.googleApiKey || ''}
                        onChange={(e) => updateSettings({ googleApiKey: e.target.value })}
                      />
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Optional: For server-side conversion tracking
                      </p>
                    </div>

                    {/* Event Labels */}
                    <div className="space-y-2">
                      <Label htmlFor="google-event-labels">Event Labels (JSON)</Label>
                      <Textarea
                        id="google-event-labels"
                        placeholder='{"lead_submit": "AW-XXXX/label", "call_click": "AW-XXXX/label2"}'
                        value={JSON.stringify(settings.googleEventLabels || {}, null, 2)}
                        onChange={(e) => {
                          try {
                            updateSettings({ googleEventLabels: JSON.parse(e.target.value) });
                          } catch {
                            // Invalid JSON, ignore
                          }
                        }}
                        rows={6}
                        className="font-mono text-sm"
                      />
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Map event types to Google Ads conversion labels
                      </p>
                    </div>
                  </div>

                  <Separator />

                  {/* Test Actions */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <Zap className="h-4 w-4 text-yellow-600" />
                      Configuration Tests
                    </h4>

                    <Button
                      variant="outline"
                      onClick={() => testProvider('google')}
                      disabled={testing.google}
                    >
                      {testing.google ? (
                        <>
                          <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                          Testing...
                        </>
                      ) : (
                        <>
                          <PlayCircle className="h-4 w-4 mr-2" />
                          Test Google Config
                        </>
                      )}
                    </Button>

                    {/* Test Results */}
                    {testResult.google && (
                      <Alert variant={testResult.google.ok ? 'default' : 'destructive'}>
                        {testResult.google.ok ? (
                          <>
                            <CheckCircle2 className="h-4 w-4" />
                            <AlertTitle>Configuration Valid</AlertTitle>
                            <AlertDescription>
                              Google Ads configuration is set up correctly.{' '}
                              {testResult.google.conversionId && (
                                <>
                                  Conversion ID: <strong>{testResult.google.conversionId}</strong>
                                </>
                              )}
                            </AlertDescription>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Configuration Error</AlertTitle>
                            <AlertDescription>
                              {testResult.google.error || 'Unknown error occurred'}
                            </AlertDescription>
                          </>
                        )}
                      </Alert>
                    )}
                  </div>
                </TabsContent>

                {/* Landing Pages Tab */}
                <TabsContent value="landing-pages" className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          Landing Page Conversion Tracking
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          Configure Google Ads conversion labels for each landing page. Each landing page can have different conversion labels for different events (form submit, call click, WhatsApp, etc.).
                        </p>
                      </div>
                      <Button onClick={createNewLandingPage} size="sm">
                        + Add Landing Page
                      </Button>
                    </div>

                    {/* Landing Pages List */}
                    <div className="space-y-3">
                      {landingPages.length === 0 ? (
                        <div className="text-center py-12 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                          <TrendingUp className="h-12 w-12 mx-auto mb-3 text-slate-400" />
                          <p className="text-slate-600 dark:text-slate-400">
                            No landing pages configured yet. Click "Add Landing Page" to get started.
                          </p>
                        </div>
                      ) : (
                        landingPages.map((page) => (
                          <Card key={page.id} className="border-2">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <h4 className="font-bold text-slate-900 dark:text-white">
                                      {page.name}
                                    </h4>
                                    <Badge variant={page.active ? 'success' : 'secondary'}>
                                      {page.active ? 'Active' : 'Inactive'}
                                    </Badge>
                                    <code className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">
                                      /{page.slug}
                                    </code>
                                  </div>
                                  {page.description && (
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                      {page.description}
                                    </p>
                                  )}
                                  <div className="grid grid-cols-2 gap-2 text-xs">
                                    <div>
                                      <span className="font-semibold">Form Submit:</span>{' '}
                                      <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">
                                        {page.leadSubmitLabel || 'Not set'}
                                      </code>
                                    </div>
                                    <div>
                                      <span className="font-semibold">Call Click:</span>{' '}
                                      <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">
                                        {page.callClickLabel || 'Not set'}
                                      </code>
                                    </div>
                                    <div>
                                      <span className="font-semibold">WhatsApp:</span>{' '}
                                      <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">
                                        {page.whatsappLabel || 'Not set'}
                                      </code>
                                    </div>
                                    <div>
                                      <span className="font-semibold">Newsletter:</span>{' '}
                                      <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">
                                        {page.newsletterLabel || 'Not set'}
                                      </code>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setEditingPage(page)}
                                  >
                                    Edit
                                  </Button>
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => deleteLandingPage(page.id)}
                                  >
                                    Delete
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))
                      )}
                    </div>

                    {/* Edit/Create Modal */}
                    {editingPage && (
                      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                          <CardHeader>
                            <CardTitle>
                              {editingPage.id ? 'Edit' : 'Create'} Landing Page Configuration
                            </CardTitle>
                            <CardDescription>
                              Configure conversion tracking labels for this landing page
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            {/* Slug */}
                            <div className="space-y-2">
                              <Label htmlFor="page-slug">
                                Landing Page Slug <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="page-slug"
                                placeholder="business-website"
                                value={editingPage.slug}
                                onChange={(e) =>
                                  setEditingPage({ ...editingPage, slug: e.target.value })
                                }
                                disabled={!!editingPage.id}
                              />
                              <p className="text-xs text-slate-500">
                                URL identifier (e.g., "business-website", "seo-audit")
                              </p>
                            </div>

                            {/* Name */}
                            <div className="space-y-2">
                              <Label htmlFor="page-name">
                                Display Name <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="page-name"
                                placeholder="Business Website"
                                value={editingPage.name}
                                onChange={(e) =>
                                  setEditingPage({ ...editingPage, name: e.target.value })
                                }
                              />
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                              <Label htmlFor="page-description">Description</Label>
                              <Textarea
                                id="page-description"
                                placeholder="Main landing page for business websites..."
                                value={editingPage.description || ''}
                                onChange={(e) =>
                                  setEditingPage({ ...editingPage, description: e.target.value })
                                }
                                rows={2}
                              />
                            </div>

                            <Separator />

                            {/* Conversion Labels */}
                            <div className="space-y-4">
                              <h4 className="font-semibold text-sm">
                                Google Ads Conversion Labels
                              </h4>
                              <p className="text-xs text-slate-500">
                                Enter just the label part (e.g., "AbCdEfGhIj"). The system will automatically combine with your Google Conversion ID.
                              </p>

                              <div className="space-y-2">
                                <Label htmlFor="lead-label">Form Submit Label</Label>
                                <Input
                                  id="lead-label"
                                  placeholder="AbCdEfGhIj"
                                  value={editingPage.leadSubmitLabel || ''}
                                  onChange={(e) =>
                                    setEditingPage({
                                      ...editingPage,
                                      leadSubmitLabel: e.target.value,
                                    })
                                  }
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="call-label">Call Click Label</Label>
                                <Input
                                  id="call-label"
                                  placeholder="XyZ123aBcD"
                                  value={editingPage.callClickLabel || ''}
                                  onChange={(e) =>
                                    setEditingPage({
                                      ...editingPage,
                                      callClickLabel: e.target.value,
                                    })
                                  }
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="whatsapp-label">WhatsApp Click Label</Label>
                                <Input
                                  id="whatsapp-label"
                                  placeholder="MnOpQrStUv"
                                  value={editingPage.whatsappLabel || ''}
                                  onChange={(e) =>
                                    setEditingPage({
                                      ...editingPage,
                                      whatsappLabel: e.target.value,
                                    })
                                  }
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="newsletter-label">Newsletter Signup Label</Label>
                                <Input
                                  id="newsletter-label"
                                  placeholder="WxYz456EfG"
                                  value={editingPage.newsletterLabel || ''}
                                  onChange={(e) =>
                                    setEditingPage({
                                      ...editingPage,
                                      newsletterLabel: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>

                            <Separator />

                            {/* Active Toggle */}
                            <div className="flex items-center gap-3">
                              <input
                                type="checkbox"
                                id="page-active"
                                checked={editingPage.active}
                                onChange={(e) =>
                                  setEditingPage({ ...editingPage, active: e.target.checked })
                                }
                                className="h-4 w-4"
                              />
                              <Label htmlFor="page-active">Active (enable tracking)</Label>
                            </div>

                            {/* Notes */}
                            <div className="space-y-2">
                              <Label htmlFor="page-notes">Internal Notes</Label>
                              <Textarea
                                id="page-notes"
                                placeholder="Testing notes, campaign details, etc..."
                                value={editingPage.notes || ''}
                                onChange={(e) =>
                                  setEditingPage({ ...editingPage, notes: e.target.value })
                                }
                                rows={3}
                              />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-end gap-3 pt-4">
                              <Button
                                variant="outline"
                                onClick={() => setEditingPage(null)}
                                disabled={savingPage}
                              >
                                Cancel
                              </Button>
                              <Button
                                onClick={() => saveLandingPage(editingPage)}
                                disabled={savingPage || !editingPage.slug || !editingPage.name}
                              >
                                {savingPage ? (
                                  <>
                                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                                    Saving...
                                  </>
                                ) : (
                                  <>
                                    <Save className="h-4 w-4 mr-2" />
                                    Save Landing Page
                                  </>
                                )}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>

              {/* Save Button - Only for Zoho/Google tabs */}
              {(activeTab === 'zoho' || activeTab === 'google') && (
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <Button onClick={save} disabled={saving || !hasUnsavedChanges} size="lg">
                    {saving ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Saving Changes...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save Settings
                      </>
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Integration Logs */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    Integration Logs
                  </CardTitle>
                  <CardDescription>
                    Real-time activity log for all integration events
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={loadData}
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {logsError && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Logs unavailable</AlertTitle>
                  <AlertDescription>{logsError}</AlertDescription>
                </Alert>
              )}
              {/* Filter Tabs */}
              <div className="mb-4">
                <Tabs value={logFilter} onValueChange={(v) => setLogFilter(v as any)}>
                  <TabsList>
                    <TabsTrigger value="all">
                      All ({stats.totalLogs})
                    </TabsTrigger>
                    <TabsTrigger value="zoho">
                      Zoho ({stats.zohoLogs})
                    </TabsTrigger>
                    <TabsTrigger value="google_ads">
                      Google ({stats.googleLogs})
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Logs List */}
              <div className="space-y-2 max-h-96 overflow-y-auto border border-slate-200 dark:border-slate-800 rounded-lg p-4 bg-slate-50 dark:bg-slate-900">
                {filteredLogs.length === 0 ? (
                  <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                    <Activity className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>No logs found</p>
                  </div>
                ) : (
                  filteredLogs.map((log) => (
                    <div
                      key={log.id}
                      className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge
                              variant={
                                log.provider === 'zoho'
                                  ? 'secondary'
                                  : log.provider === 'google_ads'
                                  ? 'default'
                                  : 'outline'
                              }
                            >
                              {log.provider}
                            </Badge>
                            <Badge
                              variant={
                                log.level === 'error'
                                  ? 'destructive'
                                  : log.level === 'warn'
                                  ? 'warning'
                                  : 'success'
                              }
                            >
                              {log.level}
                            </Badge>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              {log.type}
                            </span>
                          </div>
                          <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                            {log.message}
                          </p>
                          {log.error && (
                            <p className="text-xs text-red-600 dark:text-red-400 mt-1 font-mono">
                              {log.error}
                            </p>
                          )}
                        </div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                          {new Date(log.createdAt).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  );
}
