/**
 * AI Agent Configuration API Tests
 * Tests GET and POST routes with baseUrl support
 */

import { GET, POST } from '../config/route';
import { prisma } from '@/app/lib/prisma';

// Mock Prisma
jest.mock('@/app/lib/prisma');

describe('AI Agent Config API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/ai-agent/config', () => {
    it('should return default config when none exists', async () => {
      (prisma.aIAgentConfig.findFirst as jest.Mock).mockResolvedValue(null);

      const response = await GET(new Request('http://localhost'));
      const data = await response.json();

      expect(data.success).toBe(true);
      expect(data.config).toBeDefined();
      expect(data.config.baseUrl).toBeUndefined();
    });

    it('should return existing config with baseUrl', async () => {
      const mockConfig = {
        id: '1',
        provider: 'claude',
        baseUrl: 'https://custom.api.com/v1',
        model: 'claude-3-5-sonnet-20241022',
        agentName: 'Test Agent',
        enabled: true,
        hasApiKey: true,
      };

      (prisma.aIAgentConfig.findFirst as jest.Mock).mockResolvedValue(mockConfig);

      const response = await GET(new Request('http://localhost'));
      const data = await response.json();

      expect(data.success).toBe(true);
      expect(data.config.baseUrl).toBe('https://custom.api.com/v1');
    });
  });

  describe('POST /api/ai-agent/config', () => {
    let mockRequest: Request;
    let sessionCookie: string;

    beforeEach(() => {
      sessionCookie = 'admin_session_value';
      mockRequest = new Request('http://localhost', {
        method: 'POST',
        headers: {
          'cookie': `admin_session=${sessionCookie}`,
        },
        body: JSON.stringify({
          provider: 'claude',
          baseUrl: 'https://new.api.com/v1',
          model: 'claude-sonnet-4-5',
          enabled: true,
        }),
      });
    });

    it('should create new config with baseUrl', async () => {
      // Mock environment variable
      process.env.ADMIN_PASSWORD = 'test_password';

      (prisma.aIAgentConfig.findFirst as jest.Mock).mockResolvedValue(null);

      const mockCreatedConfig = {
        id: '1',
        provider: 'claude',
        baseUrl: 'https://new.api.com/v1',
        model: 'claude-sonnet-4-5',
        enabled: true,
        hasApiKey: false,
      };

      (prisma.aIAgentConfig.create as jest.Mock).mockResolvedValue(mockCreatedConfig);

      const response = await POST(mockRequest);
      const data = await response.json();

      expect(data.success).toBe(true);
      expect(data.config.baseUrl).toBe('https://new.api.com/v1');
      expect(prisma.aIAgentConfig.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          provider: 'claude',
          baseUrl: 'https://new.api.com/v1',
        }),
      });
    });

    it('should update existing config with baseUrl', async () => {
      process.env.ADMIN_PASSWORD = 'test_password';

      const existingConfig = {
        id: '1',
        provider: 'claude',
        baseUrl: 'https://old.api.com/v1',
        apiKey: 'existing_key',
      };

      (prisma.aIAgentConfig.findFirst as jest.Mock).mockResolvedValue(existingConfig);

      const updatedConfig = {
        ...existingConfig,
        baseUrl: 'https://updated.api.com/v1',
      };

      (prisma.aIAgentConfig.update as jest.Mock).mockResolvedValue(updatedConfig);

      const response = await POST(mockRequest);
      const data = await response.json();

      expect(data.success).toBe(true);
      expect(data.config.baseUrl).toBe('https://updated.api.com/v1');
    });

    it('should not update API key if not provided', async () => {
      process.env.ADMIN_PASSWORD = 'test_password';

      const mockRequestWithoutKey = new Request('http://localhost', {
        method: 'POST',
        headers: {
          'cookie': `admin_session=${sessionCookie}`,
        },
        body: JSON.stringify({
          provider: 'claude',
          baseUrl: 'https://api.com/v1',
          model: 'claude-3-5-sonnet',
        }),
      });

      const existingConfig = {
        id: '1',
        provider: 'claude',
        baseUrl: 'https://old.api.com/v1',
        apiKey: 'existing_key',
      };

      (prisma.aIAgentConfig.findFirst as jest.Mock).mockResolvedValue(existingConfig);
      (prisma.aIAgentConfig.update as jest.Mock).mockResolvedValue({
        ...existingConfig,
        baseUrl: 'https://api.com/v1',
      });

      const response = await POST(mockRequestWithoutKey);
      const data = await response.json();

      expect(data.success).toBe(true);
      expect(data.config.baseUrl).toBe('https://api.com/v1');

      // Verify update data doesn't include API key
      expect(prisma.aIAgentConfig.update).toHaveBeenCalledWith({
        where: { id: '1' },
        data: expect.not.objectContaining({ apiKey: undefined }),
      });
    });

    it('should return 401 for unauthorized request', async () => {
      const unauthorizedRequest = new Request('http://localhost', {
        method: 'POST',
        headers: {
          'cookie': 'admin_session=wrong_password',
        },
        body: JSON.stringify({ provider: 'claude' }),
      });

      process.env.ADMIN_PASSWORD = 'correct_password';

      const response = await POST(unauthorizedRequest);
      const data = await response.json();

      expect(response.status).toBe(401);
      expect(data.error).toBe('Unauthorized');
    });
  });
});