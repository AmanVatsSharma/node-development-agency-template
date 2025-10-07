/**
 * Global Error Handler
 * Centralized error handling with logging and appropriate responses
 */

import { AppError } from './custom-errors';
import { logger } from '../logger/logger.service';

export interface ErrorResponse {
  success: false;
  error: {
    message: string;
    code?: string;
    statusCode: number;
    field?: string;
    details?: any;
  };
}

export class ErrorHandler {
  static handle(error: Error | AppError): ErrorResponse {
    // Log the error
    if (error instanceof AppError) {
      if (!error.isOperational) {
        logger.error('Critical operational error', {
          message: error.message,
          code: error.code,
          statusCode: error.statusCode,
          stack: error.stack,
        });
      } else {
        logger.warn('Operational error', {
          message: error.message,
          code: error.code,
          statusCode: error.statusCode,
        });
      }

      return {
        success: false,
        error: {
          message: error.message,
          code: error.code,
          statusCode: error.statusCode,
          field: (error as any).field,
        },
      };
    }

    // Unknown/unexpected error
    logger.error('Unexpected error', {
      message: error.message,
      stack: error.stack,
    });

    return {
      success: false,
      error: {
        message: process.env.NODE_ENV === 'production' 
          ? 'An unexpected error occurred' 
          : error.message,
        code: 'INTERNAL_ERROR',
        statusCode: 500,
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      },
    };
  }

  static async handleAsync<T>(
    fn: () => Promise<T>,
    fallback?: T
  ): Promise<T | ErrorResponse> {
    try {
      return await fn();
    } catch (error) {
      if (fallback !== undefined) {
        return fallback;
      }
      return ErrorHandler.handle(error as Error);
    }
  }
}
