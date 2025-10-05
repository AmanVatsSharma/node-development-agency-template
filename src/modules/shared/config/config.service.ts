/**
 * Configuration Service
 * Centralized configuration management with type safety
 */

export interface AppConfig {
  nodeEnv: string;
  isDevelopment: boolean;
  isProduction: boolean;
  
  // Database
  databaseUrl: string;
  
  // External Integrations
  google: {
    analyticsId?: string;
    adsConversionId?: string;
    adsConversionLabel?: string;
  };
  
  crm: {
    apiUrl?: string;
    apiKey?: string;
    enabled: boolean;
  };
  
  // Email service (SendGrid, AWS SES, etc.)
  email: {
    provider?: string;
    apiKey?: string;
    fromEmail?: string;
    toEmail?: string;
    enabled: boolean;
  };
  
  // Application settings
  app: {
    name: string;
    url: string;
    supportEmail: string;
    supportPhone: string;
  };
}

class ConfigService {
  private config: AppConfig;

  constructor() {
    this.config = this.loadConfig();
  }

  private loadConfig(): AppConfig {
    const nodeEnv = process.env.NODE_ENV || 'development';
    
    return {
      nodeEnv,
      isDevelopment: nodeEnv === 'development',
      isProduction: nodeEnv === 'production',
      
      databaseUrl: process.env.DATABASE_URL || '',
      
      google: {
        analyticsId: process.env.NEXT_PUBLIC_GA_ID,
        adsConversionId: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID,
        adsConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL,
      },
      
      crm: {
        apiUrl: process.env.CRM_API_URL,
        apiKey: process.env.CRM_API_KEY,
        enabled: !!process.env.CRM_API_URL && !!process.env.CRM_API_KEY,
      },
      
      email: {
        provider: process.env.EMAIL_PROVIDER,
        apiKey: process.env.EMAIL_API_KEY,
        fromEmail: process.env.EMAIL_FROM || 'noreply@enterprisehero.com',
        toEmail: process.env.EMAIL_TO || 'info@enterprisehero.com',
        enabled: !!process.env.EMAIL_API_KEY,
      },
      
      app: {
        name: 'Enterprise Hero',
        url: process.env.NEXT_PUBLIC_APP_URL || 'https://enterprisehero.com',
        supportEmail: 'info@enterprisehero.com',
        supportPhone: '+91 99637 30111',
      },
    };
  }

  get(): AppConfig {
    return this.config;
  }

  get<K extends keyof AppConfig>(key: K): AppConfig[K] {
    return this.config[key];
  }
}

export const configService = new ConfigService();
