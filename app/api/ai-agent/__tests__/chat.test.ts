/**
 * AI Agent Chat API Tests
 * Tests chat endpoint with baseUrl support
 */

import { POST } from '../chat/route';
import { AIProviderFactory } from '@/app/lib/ai/providers';

// Mock Prisma
jest.mock('@/app/lib/prisma');

// Mock AI Provider Factory
jest.mock('@/app/lib/ai/providers');

const mockedPrisma = prisma as jest.Mocked<typeof prisma>;
const mockedFactory = AIProviderFactory as jest.Mocked<typeof AIProviderFactory>;

describe('AI Agent Chat API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should pass baseUrl to Claude provider when configured', async () => {
    const mockResponse = { content: 'Hello! How can I help you today?', usage: { totalTokens: 25 } };
    mockedFactory.chat.mockResolvedValue(mockResponse);

    const mockConfig = {
      id: '1',
      provider: 'claude',
      baseUrl: 'https://custom.api.com/v1',
      apiKey: 'test_key',
      model: 'claude-3-5-sonnet-20241022',
      enabled: true,
    };

    mockedPrisma.aIAgentConfig.findFirst.mockResolvedValue(mockConfig);

    const request = new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({
        sessionId: 'test-session',
        message: 'Hello',
        pageUrl: 'https://example.com',
        pagePath: '/test',
        pageTitle: 'Test Page',
        conversationHistory: [],
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(data.success).toBe(true);
    expect(data.response).toBe('Hello! How can I help you today?');

    // Verify factory was called with correct config
    expect(mockedFactory.chat).toHaveBeenCalledWith(
      expect.objectContaining({
        provider: 'claude',
        baseUrl: 'https://custom.api.com/v1',
        apiKey: 'test_key',
        model: 'claude-3-5-sonnet-20241022',
      }),
      expect.any(Array)
    );
  });

  it('should use undefined baseUrl if not configured', async () => {
    const mockResponse = { content: 'Hello!', usage: { totalTokens: 10 } };
    mockedFactory.chat.mockResolvedValue(mockResponse);

    const mockConfig = {
      id: '1',
      provider: 'claude',
      apiKey: 'test_key',
      model: 'claude-3-5-sonnet',
      enabled: true,
    };

    mockedPrisma.aIAgentConfig.findFirst.mockResolvedValue(mockConfig);

    const request = new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({
        message: 'Hello',
        pageUrl: 'https://example.com',
        pagePath: '/test',
        pageTitle: 'Test Page',
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(data.success).toBe(true);

    // Verify factory was called with undefined baseUrl
    expect(mockedFactory.chat).toHaveBeenCalledWith(
      expect.objectContaining({
        provider: 'claude',
        baseUrl: undefined,
      }),
      expect.any(Array)
    );
  });

  it('should handle OpenAI provider without baseUrl', async () => {
    const mockResponse = { content: 'Hello!', usage: { totalTokens: 15 } };
    mockedFactory.chat.mockResolvedValue(mockResponse);

    const mockConfig = {
      id: '1',
      provider: 'openai',
      apiKey: 'openai_key',
      model: 'gpt-4o',
      enabled: true,
    };

    mockedPrisma.aIAgentConfig.findFirst.mockResolvedValue(mockConfig);

    const request = new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({
        message: 'Hello',
        pageUrl: 'https://example.com',
        pagePath: '/test',
        pageTitle: 'Test Page',
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(data.success).toBe(true);

    // Verify OpenAI provider was called
    expect(mockedFactory.chat).toHaveBeenCalledWith(
      expect.objectContaining({
        provider: 'openai',
        baseUrl: undefined,
      }),
      expect.any(Array)
    );
  });

  it('should return 503 when AI agent is disabled', async () => {
    mockedPrisma.aIAgentConfig.findFirst.mockResolvedValue({
      id: '1',
      provider: 'claude',
      enabled: false,
    });

    const request = new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({
        message: 'Hello',
        pageUrl: 'https://example.com',
        pagePath: '/test',
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(503);
    expect(data.success).toBe(false);
    expect(data.error).toBe('AI agent is not enabled');
  });

  it('should return 400 for missing required fields', async () => {
    const mockConfig = {
      id: '1',
      provider: 'claude',
      enabled: true,
    };

    mockedPrisma.aIAgentConfig.findFirst.mockResolvedValue(mockConfig);

    const request = new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({
        message: 'Hello',
        // Missing pageUrl and pagePath
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.error).toBe('Missing required fields');
  });

  it('should track analytics on message', async () => {
    const mockResponse = { content: 'Hello!', usage: { totalTokens: 20 } };
    mockedFactory.chat.mockResolvedValue(mockResponse);

    const mockConfig = {
      id: '1',
      provider: 'claude',
      apiKey: 'test_key',
      model: 'claude-3-5-sonnet',
      enabled: true,
    };

    mockedPrisma.aIAgentConfig.findFirst.mockResolvedValue(mockConfig);
    mockedPrisma.aIConversation.create.mockResolvedValue({
      id: '1',
      sessionId: 'test-session',
    });
    mockedPrisma.aIAnalytics.create.mockResolvedValue({ id: '1' });

    const request = new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({
        message: 'Hello',
        pageUrl: 'https://example.com',
        pagePath: '/test',
        pageTitle: 'Test Page',
      }),
    });

    await POST(request);

    // Verify analytics was tracked
    expect(mockedPrisma.aIAnalytics.create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        date: expect.any(Date),
        pageUrl: 'https://example.com',
        metric: 'message_sent',
        value: 1,
        metadata: expect.objectContaining({
          provider: 'claude',
          model: 'claude-3-5-sonnet',
          tokensUsed: 20,
        }),
      }),
    });
  });
});