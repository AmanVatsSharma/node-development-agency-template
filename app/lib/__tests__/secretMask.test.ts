import { describe, expect, it } from '@jest/globals';
import {
  isMaskedSecret,
  maskIntegrationSettings,
  maskSecret,
  stripMaskedSecrets,
} from '../secretMask';

describe('maskSecret', () => {
  it('returns null for empty values', () => {
    expect(maskSecret(null)).toBeNull();
    expect(maskSecret(undefined)).toBeNull();
    expect(maskSecret('')).toBeNull();
  });

  it('shows only the last 4 characters of long secrets', () => {
    const masked = maskSecret('abcdefghijklmnop');
    expect(masked).toBe('••••••••mnop');
    expect(masked).not.toContain('abcdefgh');
  });

  it('shows nothing of short secrets', () => {
    expect(maskSecret('short')).toBe('••••••••');
  });
});

describe('isMaskedSecret', () => {
  it('recognises masked values only', () => {
    expect(isMaskedSecret('••••••••mnop')).toBe(true);
    expect(isMaskedSecret('••••••••')).toBe(true);
    expect(isMaskedSecret('real-secret')).toBe(false);
    expect(isMaskedSecret(null)).toBe(false);
    expect(isMaskedSecret('')).toBe(false);
  });
});

describe('maskIntegrationSettings', () => {
  it('masks every secret key and leaves other keys alone', () => {
    const result = maskIntegrationSettings({
      id: 'x',
      zohoClientId: 'public-client-id',
      zohoClientSecret: 'client-secret-123456',
      zohoRefreshToken: 'refresh-token-abcdef',
      zohoAccessToken: null,
      googleApiKey: 'AIza-key-0000',
    });
    expect(result?.zohoClientId).toBe('public-client-id');
    expect(result?.zohoClientSecret).toBe('••••••••3456');
    expect(result?.zohoRefreshToken).toBe('••••••••cdef');
    expect(result?.zohoAccessToken).toBeNull();
    expect(result?.googleApiKey).toBe('••••••••0000');
  });

  it('passes null through', () => {
    expect(maskIntegrationSettings(null)).toBeNull();
  });
});

describe('stripMaskedSecrets', () => {
  it('drops masked secret keys so a Save cannot overwrite the stored value', () => {
    const result = stripMaskedSecrets({
      zohoClientId: 'id',
      zohoClientSecret: '••••••••3456',
      zohoRefreshToken: 'brand-new-token',
    });
    expect(result).toEqual({ zohoClientId: 'id', zohoRefreshToken: 'brand-new-token' });
  });

  it('keeps an explicit empty string (user cleared the field)', () => {
    expect(stripMaskedSecrets({ zohoClientSecret: '' })).toEqual({ zohoClientSecret: '' });
  });
});
