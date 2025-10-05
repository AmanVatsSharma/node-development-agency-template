/**
 * Email Validator
 * Validates email addresses with proper regex
 */

import { ValidationError } from '../errors/custom-errors';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class EmailValidator {
  static validate(email: string, field: string = 'email'): void {
    if (!email || typeof email !== 'string') {
      throw new ValidationError('Email is required', field);
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      throw new ValidationError('Invalid email format', field);
    }
  }

  static isValid(email: string): boolean {
    return EMAIL_REGEX.test(email?.trim() || '');
  }

  static sanitize(email: string): string {
    return email.trim().toLowerCase();
  }
}
