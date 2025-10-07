'use client';

/**
 * AI Agent Admin Configuration Panel
 * Configure AI provider, model, agent personality, and behavior
 * 
 * @author Vedpragya Bharat Pvt. Ltd.
 */

import React, { useEffect, useState } from 'react';
import {
  Bot,
  Brain,
  MessageSquare,
  Save,
  TestTube,
  Eye,
  Settings2,
  Sparkles,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  Users,
  TrendingUp,
  LogOut,
} from 'lucide-react';

import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Switch } from '@/app/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Separator } from '@/app/components/ui/separator';

// AI Models Configuration
const AI_MODELS = {
  openai: [
    { value: 'gpt-4o', label: 'GPT-4o (Recommended)', description: 'Most capable multimodal model' },
    { value: 'gpt-4o-mini', label: 'GPT-4o Mini', description: 'Fast and economical' },
    { value: 'gpt-4-turbo', label: 'GPT-4 Turbo', description: 'Previous generation flagship' },
  ],
  claude: [
    { value: 'claude-sonnet-4-5', label: 'Claude Sonnet 4.5 (Recommended)', description: 'Latest and most capable' },
    { value: 'claude-3-5-sonnet-20241022', label: 'Claude 3.5 Sonnet', description: 'Best balance' },
    { value: 'claude-3-opus-20240229', label: 'Claude 3 Opus', description: 'Most powerful' },
  ],
  gemini: [
    { value: 'gemini-2.0-flash-exp', label: 'Gemini 2.0 Flash (Recommended)', description: 'Experimental next-gen' },
    { value: 'gemini-1.5-pro', label: 'Gemini 1.5 Pro', description: 'Best for reasoning' },
    { value: 'gemini-1.5-flash', label: 'Gemini 1.5 Flash', description: 'Fast and efficient' },
  ],
};

export default function AIAgentAdminPage() {
  const [config, setConfig] = useState<any>(null);
  const [originalConfig, setOriginalConfig] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<any>(null);
  const [hasChanges, setHasChanges] = useState(false);
  const [stats, setStats] = useState<any>(null);
  const [conversations, setConversations] = useState<any[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (config && originalConfig) {
      const changed = JSON.stringify(config) !== JSON.stringify(originalConfig);
      console.log('[AI Agent Admin] Config changed:', changed, {
        config,
        originalConfig,
      });
      setHasChanges(changed);
    }
  }, [config, originalConfig]);

  const loadData = async () => {
    try {
      // Load configuration
      const configRes = await fetch('/api/ai-agent/config');
      const configData = await configRes.json();
      
      console.log('[AI Agent Admin] Config loaded:', configData);
      
      if (configData.success) {
        // Deep clone to avoid reference issues
        const loadedConfig = JSON.parse(JSON.stringify(configData.config));
        setConfig(loadedConfig);
        setOriginalConfig(JSON.parse(JSON.stringify(configData.config)));
        console.log('[AI Agent Admin] Config state set:', loadedConfig);
      } else {
        console.error('[AI Agent Admin] Failed to load config:', configData.error);
        alert('Failed to load configuration: ' + (configData.error || 'Unknown error'));
      }

      // Load conversations stats
      const conversationsRes = await fetch('/api/ai-agent/conversations?limit=10');
      const conversationsData = await conversationsRes.json();
      
      if (conversationsData.success) {
        setConversations(conversationsData.conversations || []);
        setStats(conversationsData.stats || {});
      }
    } catch (error) {
      console.error('[AI Agent Admin] Failed to load data:', error);
      alert('Failed to load configuration. Please check console for details.');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    console.log('[AI Agent Admin] Saving configuration:', config);
    setSaving(true);
    try {
      const response = await fetch('/api/ai-agent/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config),
      });

      const data = await response.json();
      console.log('[AI Agent Admin] Save response:', data);

      if (data.success) {
        const savedConfig = JSON.parse(JSON.stringify(data.config));
        setConfig(savedConfig);
        setOriginalConfig(JSON.parse(JSON.stringify(data.config)));
        setHasChanges(false);
        alert('✅ Configuration saved successfully!');
      } else {
        console.error('[AI Agent Admin] Save failed:', data.error);
        alert('❌ Failed to save configuration: ' + data.error);
      }
    } catch (error) {
      console.error('[AI Agent Admin] Save error:', error);
      alert('❌ Failed to save configuration. Check console for details.');
    } finally {
      setSaving(false);
    }
  };

  const handleTest = async () => {
    setTesting(true);
    setTestResult(null);

    try {
      const response = await fetch('/api/ai-agent/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: 'Hello! I need help with web development services.',
          pageUrl: window.location.href,
          pagePath: '/admin/ai-agent',
          pageTitle: 'AI Agent Admin',
          conversationHistory: [],
        }),
      });

      const data = await response.json();

      if (data.success) {
        setTestResult({
          success: true,
          response: data.response,
          usage: data.usage,
        });
      } else {
        setTestResult({
          success: false,
          error: data.error || 'Test failed',
        });
      }
    } catch (error: any) {
      setTestResult({
        success: false,
        error: error.message || 'Test failed',
      });
    } finally {
      setTesting(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center">
          <RefreshCw className="h-12 w-12 animate-spin mx-auto text-primary mb-4" />
          <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
            Loading AI Agent Configuration...
          </p>
        </div>
      </div>
    );
  }

  const currentModels = config ? AI_MODELS[config.provider as keyof typeof AI_MODELS] || [] : [];

  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <title>AI Agent Configuration - Admin</title>
      </head>

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        {/* Header */}
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Bot className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                    AI Sales Agent Configuration
                  </h1>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Configure your enterprise AI sales assistant
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href="/admin/integrations">
                    <Settings2 className="h-4 w-4 mr-2" />
                    Integrations
                  </a>
                </Button>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
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
                      Conversations Today
                    </p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                      {stats?.totalToday || 0}
                    </p>
                  </div>
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Leads Converted
                    </p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                      {stats?.conversionsToday || 0}
                    </p>
                  </div>
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                    <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Conversion Rate
                    </p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                      {stats?.conversionRate || 0}%
                    </p>
                  </div>
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                    <BarChart3 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Status
                    </p>
                    <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-1">
                      {config?.enabled ? 'Active' : 'Disabled'}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${config?.enabled ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
                    <Bot className={`h-6 w-6 ${config?.enabled ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Unsaved Changes Alert */}
          {hasChanges && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Unsaved Changes</AlertTitle>
              <AlertDescription>
                You have unsaved changes. Click Save Configuration to apply them.
              </AlertDescription>
            </Alert>
          )}

          {/* Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                AI Agent Configuration
              </CardTitle>
              <CardDescription>
                Configure AI provider, model, and agent behavior
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="provider" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="provider">Provider & Model</TabsTrigger>
                  <TabsTrigger value="personality">Personality</TabsTrigger>
                  <TabsTrigger value="behavior">Behavior</TabsTrigger>
                  <TabsTrigger value="appearance">Appearance</TabsTrigger>
                </TabsList>

                {/* Provider & Model Tab */}
                <TabsContent value="provider" className="space-y-4">
                  <div className="space-y-4">
                    {/* Enable/Disable */}
                    <div className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <div>
                        <Label htmlFor="enabled" className="text-base font-semibold">
                          Enable AI Agent
                        </Label>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          Make the AI agent available on your website
                        </p>
                      </div>
                      <Switch
                        id="enabled"
                        checked={config?.enabled || false}
                        onCheckedChange={(checked) => {
                          console.log('[AI Agent Admin] Enable switch toggled:', checked);
                          const newConfig = { ...config, enabled: checked };
                          console.log('[AI Agent Admin] New config:', newConfig);
                          setConfig(newConfig);
                        }}
                      />
                    </div>

                    {/* Provider Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="provider">AI Provider</Label>
                      <Select
                        value={config?.provider || 'openai'}
                        onValueChange={(value) => setConfig({ ...config, provider: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select provider" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="openai">OpenAI (GPT)</SelectItem>
                          <SelectItem value="claude">Anthropic (Claude)</SelectItem>
                          <SelectItem value="gemini">Google (Gemini)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* API Key */}
                    <div className="space-y-2">
                      <Label htmlFor="apiKey">API Key</Label>
                      <Input
                        id="apiKey"
                        type="password"
                        placeholder={config?.hasApiKey ? '••••••••••••••••' : 'Enter API key'}
                        onChange={(e) => setConfig({ ...config, apiKey: e.target.value })}
                      />
                      <p className="text-xs text-slate-500">
                        {config?.hasApiKey ? 'API key is configured' : 'No API key configured'}
                      </p>
                    </div>

                    {/* Model Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="model">Model</Label>
                      <Select
                        value={config?.model || ''}
                        onValueChange={(value) => setConfig({ ...config, model: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select model" />
                        </SelectTrigger>
                        <SelectContent>
                          {currentModels.map((model) => (
                            <SelectItem key={model.value} value={model.value}>
                              {model.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {currentModels.find(m => m.value === config?.model) && (
                        <p className="text-xs text-slate-500">
                          {currentModels.find(m => m.value === config?.model)?.description}
                        </p>
                      )}
                    </div>

                    {/* Temperature */}
                    <div className="space-y-2">
                      <Label htmlFor="temperature">
                        Temperature (Creativity): {config?.temperature || 0.7}
                      </Label>
                      <input
                        id="temperature"
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={config?.temperature || 0.7}
                        onChange={(e) => setConfig({ ...config, temperature: parseFloat(e.target.value) })}
                        className="w-full"
                      />
                      <p className="text-xs text-slate-500">
                        Lower = more focused, Higher = more creative
                      </p>
                    </div>

                    {/* Max Tokens */}
                    <div className="space-y-2">
                      <Label htmlFor="maxTokens">Max Response Length (tokens)</Label>
                      <Input
                        id="maxTokens"
                        type="number"
                        value={config?.maxTokens || 2000}
                        onChange={(e) => setConfig({ ...config, maxTokens: parseInt(e.target.value) })}
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* Personality Tab */}
                <TabsContent value="personality" className="space-y-4">
                  <div className="space-y-4">
                    {/* Agent Name */}
                    <div className="space-y-2">
                      <Label htmlFor="agentName">Agent Name</Label>
                      <Input
                        id="agentName"
                        value={config?.agentName || ''}
                        onChange={(e) => setConfig({ ...config, agentName: e.target.value })}
                        placeholder="e.g., Nova, Alex, Sarah"
                      />
                      <p className="text-xs text-slate-500">
                        Give your AI agent a friendly, memorable name
                      </p>
                    </div>

                    {/* Agent Role */}
                    <div className="space-y-2">
                      <Label htmlFor="agentRole">Agent Role</Label>
                      <Input
                        id="agentRole"
                        value={config?.agentRole || ''}
                        onChange={(e) => setConfig({ ...config, agentRole: e.target.value })}
                        placeholder="e.g., AI Sales Assistant, Customer Support Agent"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        value={config?.companyName || ''}
                        onChange={(e) => setConfig({ ...config, companyName: e.target.value })}
                        placeholder="Your company name"
                      />
                    </div>

                    {/* Welcome Message */}
                    <div className="space-y-2">
                      <Label htmlFor="welcomeMessage">Welcome Message</Label>
                      <Textarea
                        id="welcomeMessage"
                        value={config?.welcomeMessage || ''}
                        onChange={(e) => setConfig({ ...config, welcomeMessage: e.target.value })}
                        rows={3}
                        placeholder="Hi! I'm Nova, your AI assistant. How can I help you today?"
                      />
                    </div>

                    {/* System Prompt */}
                    <div className="space-y-2">
                      <Label htmlFor="systemPrompt">System Prompt (Advanced)</Label>
                      <Textarea
                        id="systemPrompt"
                        value={config?.systemPrompt || ''}
                        onChange={(e) => setConfig({ ...config, systemPrompt: e.target.value })}
                        rows={8}
                        placeholder="Base instructions for the AI agent..."
                      />
                      <p className="text-xs text-slate-500">
                        This is augmented with page-specific context automatically
                      </p>
                    </div>
                  </div>
                </TabsContent>

                {/* Behavior Tab */}
                <TabsContent value="behavior" className="space-y-4">
                  <div className="space-y-4">
                    {/* Lead Qualification */}
                    <div className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <div>
                        <Label htmlFor="leadQualification" className="text-base font-semibold">
                          Auto Lead Qualification
                        </Label>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          Automatically capture lead information during conversation
                        </p>
                      </div>
                      <Switch
                        id="leadQualification"
                        checked={config?.leadQualification || false}
                        onCheckedChange={(checked) => setConfig({ ...config, leadQualification: checked })}
                      />
                    </div>

                    {/* Auto Greeting */}
                    <div className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <div>
                        <Label htmlFor="autoGreeting" className="text-base font-semibold">
                          Auto Greeting
                        </Label>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          Show greeting bubble automatically to visitors
                        </p>
                      </div>
                      <Switch
                        id="autoGreeting"
                        checked={config?.autoGreeting || false}
                        onCheckedChange={(checked) => setConfig({ ...config, autoGreeting: checked })}
                      />
                    </div>

                    {/* Greeting Delay */}
                    {config?.autoGreeting && (
                      <div className="space-y-2">
                        <Label htmlFor="greetingDelay">
                          Greeting Delay: {(config?.greetingDelay || 3000) / 1000} seconds
                        </Label>
                        <input
                          id="greetingDelay"
                          type="range"
                          min="0"
                          max="10000"
                          step="1000"
                          value={config?.greetingDelay || 3000}
                          onChange={(e) => setConfig({ ...config, greetingDelay: parseInt(e.target.value) })}
                          className="w-full"
                        />
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* Appearance Tab */}
                <TabsContent value="appearance" className="space-y-4">
                  <div className="space-y-4">
                    {/* Widget Position */}
                    <div className="space-y-2">
                      <Label htmlFor="widgetPosition">Widget Position</Label>
                      <Select
                        value={config?.widgetPosition || 'bottom-right'}
                        onValueChange={(value) => setConfig({ ...config, widgetPosition: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bottom-right">Bottom Right</SelectItem>
                          <SelectItem value="bottom-left">Bottom Left</SelectItem>
                          <SelectItem value="top-right">Top Right</SelectItem>
                          <SelectItem value="top-left">Top Left</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Primary Color */}
                    <div className="space-y-2">
                      <Label htmlFor="primaryColor">Primary Color</Label>
                      <div className="flex gap-2">
                        <Input
                          id="primaryColor"
                          type="color"
                          value={config?.primaryColor || '#3b82f6'}
                          onChange={(e) => setConfig({ ...config, primaryColor: e.target.value })}
                          className="w-20 h-10"
                        />
                        <Input
                          type="text"
                          value={config?.primaryColor || '#3b82f6'}
                          onChange={(e) => setConfig({ ...config, primaryColor: e.target.value })}
                          placeholder="#3b82f6"
                        />
                      </div>
                    </div>

                    {/* Preview */}
                    <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <p className="text-sm font-semibold mb-4">Preview</p>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: config?.primaryColor || '#3b82f6' }}
                        >
                          <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">
                            {config?.agentName || 'Nova'}
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {config?.agentRole || 'AI Sales Assistant'}
                          </p>
                        </div>
                      </div>
                      <div
                        className="mt-4 p-3 rounded-lg text-white text-sm"
                        style={{ backgroundColor: config?.primaryColor || '#3b82f6' }}
                      >
                        {config?.welcomeMessage || 'Hi! How can I help you today?'}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Save & Test Buttons */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 flex gap-3">
                <Button
                  onClick={handleSave}
                  disabled={saving || !config}
                  size="lg"
                  className="flex-1"
                  variant={hasChanges ? "default" : "outline"}
                >
                  {saving ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      {hasChanges ? 'Save Configuration' : 'Save Configuration (No Changes)'}
                    </>
                  )}
                </Button>

                <Button
                  onClick={handleTest}
                  disabled={testing || !config?.enabled || !config?.hasApiKey}
                  variant="outline"
                  size="lg"
                >
                  {testing ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Testing...
                    </>
                  ) : (
                    <>
                      <TestTube className="h-4 w-4 mr-2" />
                      Test Agent
                    </>
                  )}
                </Button>
              </div>

              {/* Test Result */}
              {testResult && (
                <Alert variant={testResult.success ? 'default' : 'destructive'} className="mt-4">
                  {testResult.success ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      <AlertTitle>Test Successful!</AlertTitle>
                      <AlertDescription>
                        <p className="mb-2">{testResult.response}</p>
                        {testResult.usage && (
                          <p className="text-xs">
                            Tokens: {testResult.usage.totalTokens} (prompt: {testResult.usage.promptTokens}, completion: {testResult.usage.completionTokens})
                          </p>
                        )}
                      </AlertDescription>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Test Failed</AlertTitle>
                      <AlertDescription>{testResult.error}</AlertDescription>
                    </>
                  )}
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Recent Conversations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Recent Conversations
              </CardTitle>
              <CardDescription>
                Last 10 conversations with visitors
              </CardDescription>
            </CardHeader>
            <CardContent>
              {conversations.length === 0 ? (
                <div className="text-center py-8 text-slate-500">
                  <MessageSquare className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No conversations yet</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {conversations.map((conv) => (
                    <div
                      key={conv.id}
                      className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900 dark:text-white">
                            {conv.pageTitle || conv.pagePath}
                          </p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                            {conv.messageCount} messages • {conv.status}
                            {conv.leadCaptured && ' • ✅ Lead Captured'}
                          </p>
                        </div>
                        <span className="text-xs text-slate-500">
                          {new Date(conv.createdAt).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  );
}
