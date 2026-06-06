/**
 * AI Provider Abstraction Layer
 * Supports OpenAI, Claude (Anthropic), and Google Gemini
 * 
 * @description Unified interface for multiple AI providers
 * @author Vedpragya Bharat Pvt. Ltd.
 */

export interface AIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface AIProviderConfig {
  provider: 'openai' | 'claude' | 'gemini';
  apiKey: string;
  model: string;
  baseUrl?: string; // Custom base URL for API endpoints
  temperature?: number;
  maxTokens?: number;
}

export interface AIResponse {
  content: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
  finishReason?: string;
}

/**
 * OpenAI Provider
 */
export class OpenAIProvider {
  private apiKey: string;
  private model: string;
  private baseURL = 'https://api.openai.com/v1';

  constructor(apiKey: string, model: string = 'gpt-4o') {
    this.apiKey = apiKey;
    this.model = model;
  }

  async chat(
    messages: AIMessage[],
    temperature: number = 0.7,
    maxTokens: number = 2000
  ): Promise<AIResponse> {
    try {
      const response = await fetch(`${this.baseURL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: this.model,
          messages,
          temperature,
          max_tokens: maxTokens,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`OpenAI API error: ${error.error?.message || response.statusText}`);
      }

      const data = await response.json();
      const choice = data.choices?.[0];

      return {
        content: choice?.message?.content || '',
        usage: data.usage ? {
          promptTokens: data.usage.prompt_tokens,
          completionTokens: data.usage.completion_tokens,
          totalTokens: data.usage.total_tokens,
        } : undefined,
        finishReason: choice?.finish_reason,
      };
    } catch (error) {
      console.error('[OpenAI Provider] Error:', error);
      throw error;
    }
  }
}

/**
 * Claude (Anthropic) Provider
 * Supports custom base URL for enterprise deployments (AWS Bedrock, Azure AI, custom proxies)
 */
export class ClaudeProvider {
  private apiKey: string;
  private model: string;
  private baseURL: string;

  constructor(apiKey: string, model: string = 'claude-sonnet-4-5', baseUrl?: string) {
    this.apiKey = apiKey;
    this.model = model;
    this.baseURL = baseUrl || 'https://api.anthropic.com/v1';
  }

  /**
   * Detect if the base URL uses OpenAI-compatible format
   * Used for AWS Bedrock, Azure AI, and other compatible endpoints
   */
  private isOpenAIFormat(): boolean {
    return (
      this.baseURL.includes('/v1/chat') ||
      this.baseURL.includes('/chat/completions') ||
      this.baseURL.includes('azure') ||
      this.baseURL.includes('bedrock') ||
      this.baseURL.includes('openai')
    );
  }

  async chat(
    messages: AIMessage[],
    temperature: number = 0.7,
    maxTokens: number = 2000
  ): Promise<AIResponse> {
    try {
      if (this.isOpenAIFormat()) {
        return this.chatOpenAIFormat(messages, temperature, maxTokens);
      }
      return this.chatAnthropicFormat(messages, temperature, maxTokens);
    } catch (error) {
      console.error('[Claude Provider] Error:', error);
      throw error;
    }
  }

  /**
   * Standard Anthropic API format
   */
  private async chatAnthropicFormat(
    messages: AIMessage[],
    temperature: number,
    maxTokens: number
  ): Promise<AIResponse> {
    const systemMessage = messages.find(m => m.role === 'system');
    const conversationMessages = messages
      .filter(m => m.role !== 'system')
      .map(m => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      }));

    const response = await fetch(`${this.baseURL}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: this.model,
        messages: conversationMessages,
        system: systemMessage?.content || '',
        temperature,
        max_tokens: maxTokens,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Claude API error: ${error.error?.message || response.statusText}`);
    }

    const data = await response.json();
    const content = data.content?.[0];

    return {
      content: content?.text || '',
      usage: data.usage ? {
        promptTokens: data.usage.input_tokens,
        completionTokens: data.usage.output_tokens,
        totalTokens: data.usage.input_tokens + data.usage.output_tokens,
      } : undefined,
      finishReason: data.stop_reason,
    };
  }

  /**
   * OpenAI-compatible format (for Azure AI, AWS Bedrock, custom proxies)
   */
  private async chatOpenAIFormat(
    messages: AIMessage[],
    temperature: number,
    maxTokens: number
  ): Promise<AIResponse> {
    const response = await fetch(`${this.baseURL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        messages: messages.map(m => ({
          role: m.role === 'system' ? 'system' : m.role,
          content: m.content,
        })),
        temperature,
        max_tokens: maxTokens,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Claude API error: ${error.error?.message || response.statusText}`);
    }

    const data = await response.json();
    const choice = data.choices?.[0];

    return {
      content: choice?.message?.content || '',
      usage: data.usage ? {
        promptTokens: data.usage.prompt_tokens,
        completionTokens: data.usage.completion_tokens,
        totalTokens: data.usage.total_tokens,
      } : undefined,
      finishReason: choice?.finish_reason,
    };
  }
}

/**
 * Google Gemini Provider
 */
export class GeminiProvider {
  private apiKey: string;
  private model: string;
  private baseURL = 'https://generativelanguage.googleapis.com/v1beta';

  constructor(apiKey: string, model: string = 'gemini-2.0-flash-exp') {
    this.apiKey = apiKey;
    this.model = model;
  }

  async chat(
    messages: AIMessage[],
    temperature: number = 0.7,
    maxTokens: number = 2000
  ): Promise<AIResponse> {
    try {
      // Gemini uses a different message format
      const systemInstruction = messages.find(m => m.role === 'system');
      const contents = messages
        .filter(m => m.role !== 'system')
        .map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }],
        }));

      const response = await fetch(
        `${this.baseURL}/models/${this.model}:generateContent?key=${this.apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents,
            systemInstruction: systemInstruction ? {
              parts: [{ text: systemInstruction.content }]
            } : undefined,
            generationConfig: {
              temperature,
              maxOutputTokens: maxTokens,
            },
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Gemini API error: ${error.error?.message || response.statusText}`);
      }

      const data = await response.json();
      const candidate = data.candidates?.[0];
      const content = candidate?.content?.parts?.[0]?.text || '';

      return {
        content,
        usage: data.usageMetadata ? {
          promptTokens: data.usageMetadata.promptTokenCount || 0,
          completionTokens: data.usageMetadata.candidatesTokenCount || 0,
          totalTokens: data.usageMetadata.totalTokenCount || 0,
        } : undefined,
        finishReason: candidate?.finishReason,
      };
    } catch (error) {
      console.error('[Gemini Provider] Error:', error);
      throw error;
    }
  }
}

/**
 * AI Provider Factory
 * Creates the appropriate provider based on configuration
 */
export class AIProviderFactory {
  static createProvider(config: AIProviderConfig): OpenAIProvider | ClaudeProvider | GeminiProvider {
    switch (config.provider) {
      case 'openai':
        return new OpenAIProvider(config.apiKey, config.model);
      case 'claude':
        return new ClaudeProvider(config.apiKey, config.model, config.baseUrl);
      case 'gemini':
        return new GeminiProvider(config.apiKey, config.model);
      default:
        throw new Error(`Unsupported AI provider: ${config.provider}`);
    }
  }

  static async chat(
    config: AIProviderConfig,
    messages: AIMessage[]
  ): Promise<AIResponse> {
    const provider = this.createProvider(config);
    return provider.chat(
      messages,
      config.temperature || 0.7,
      config.maxTokens || 2000
    );
  }
}

/**
 * Available Models by Provider
 */
export const AI_MODELS = {
  openai: [
    { value: 'gpt-4o', label: 'GPT-4o (Recommended)', description: 'Most capable, multimodal flagship model' },
    { value: 'gpt-4o-mini', label: 'GPT-4o Mini', description: 'Affordable, fast, intelligent small model' },
    { value: 'gpt-4-turbo', label: 'GPT-4 Turbo', description: 'Previous generation flagship' },
    { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo', description: 'Fast and economical' },
  ],
  claude: [
    { value: 'claude-sonnet-4-5', label: 'Claude Sonnet 4.5 (Recommended)', description: 'Latest and most capable' },
    { value: 'claude-3-5-sonnet-20241022', label: 'Claude 3.5 Sonnet', description: 'Best balance of speed and intelligence' },
    { value: 'claude-3-opus-20240229', label: 'Claude 3 Opus', description: 'Most powerful for complex tasks' },
    { value: 'claude-3-haiku-20240307', label: 'Claude 3 Haiku', description: 'Fastest and most compact' },
  ],
  gemini: [
    { value: 'gemini-2.0-flash-exp', label: 'Gemini 2.0 Flash (Recommended)', description: 'Experimental next-gen model' },
    { value: 'gemini-1.5-pro', label: 'Gemini 1.5 Pro', description: 'Best for complex reasoning' },
    { value: 'gemini-1.5-flash', label: 'Gemini 1.5 Flash', description: 'Fast and efficient' },
    { value: 'gemini-1.0-pro', label: 'Gemini 1.0 Pro', description: 'Stable and reliable' },
  ],
} as const;
