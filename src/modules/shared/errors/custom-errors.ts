/**
 * Custom Error Classes
 * Enterprise-grade error handling for the application
 */

export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500,
    public isOperational: boolean = true,
    public code?: string
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ValidationError extends AppError {
  constructor(message: string, field?: string) {
    super(message, 400, true, 'VALIDATION_ERROR');
    this.field = field;
  }
  field?: string;
}

export class DatabaseError extends AppError {
  constructor(message: string, originalError?: Error) {
    super(message, 500, true, 'DATABASE_ERROR');
    this.originalError = originalError;
  }
  originalError?: Error;
}

export class IntegrationError extends AppError {
  constructor(
    message: string,
    public service: string,
    public originalError?: Error
  ) {
    super(message, 500, false, 'INTEGRATION_ERROR');
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, 404, true, 'NOT_FOUND');
  }
}
