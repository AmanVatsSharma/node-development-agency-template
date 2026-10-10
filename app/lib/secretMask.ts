/**
 * Masking for IntegrationSettings secrets. The admin UI saves by posting the
 * whole settings object back, so the API must (a) never return secrets in the
 * clear and (b) ignore masked placeholders on write, otherwise a plain "Save"
 * would overwrite the real secret with dots.
 */
const MASK = '••••••••';

export const SECRET_KEYS = [
  'zohoClientSecret',
  'zohoRefreshToken',
  'zohoAccessToken',
  'googleApiKey',
] as const;

export function maskSecret(value: string | null | undefined): string | null {
  if (!value) return null;
  const tail = value.length > 8 ? value.slice(-4) : '';
  return `${MASK}${tail}`;
}

export function isMaskedSecret(value: unknown): boolean {
  return typeof value === 'string' && value.startsWith(MASK);
}

export function maskIntegrationSettings<T extends Record<string, unknown>>(
  settings: T | null,
): T | null {
  if (!settings) return settings;
  const copy: Record<string, unknown> = { ...settings };
  for (const key of SECRET_KEYS) {
    if (key in copy) copy[key] = maskSecret(copy[key] as string | null | undefined);
  }
  return copy as T;
}

export function stripMaskedSecrets(input: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = { ...input };
  for (const key of SECRET_KEYS) {
    if (isMaskedSecret(out[key])) delete out[key];
  }
  return out;
}
