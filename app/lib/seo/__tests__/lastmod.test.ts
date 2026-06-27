import { getRouteLastModified, MAX_LASTMOD_AGE_DAYS } from '../lastmod';

describe('getRouteLastModified', () => {
  it('returns a Date for a known route', () => {
    const result = getRouteLastModified('/pages/web-development');
    expect(result).toBeInstanceOf(Date);
    expect(result.getTime()).toBeLessThanOrEqual(Date.now());
  });

  it('never returns a future date', () => {
    const routes = [
      '/pages/web-development',
      '/pages/services',
      '/pages/contact',
      '/pages/portfolio',
    ];
    for (const route of routes) {
      const result = getRouteLastModified(route);
      expect(result.getTime()).toBeLessThanOrEqual(Date.now());
    }
  });

  it('returns a date within MAX_LASTMOD_AGE_DAYS of now', () => {
    const result = getRouteLastModified('/pages/about');
    const ageInDays = (Date.now() - result.getTime()) / (1000 * 60 * 60 * 24);
    expect(ageInDays).toBeLessThanOrEqual(MAX_LASTMOD_AGE_DAYS);
  });

  it('returns the same result for repeated calls (idempotent within a day)', () => {
    const a = getRouteLastModified('/pages/services').toISOString();
    const b = getRouteLastModified('/pages/services').toISOString();
    expect(a).toBe(b);
  });

  it('falls back gracefully for unknown routes', () => {
    const result = getRouteLastModified('/pages/this-route-does-not-exist');
    expect(result).toBeInstanceOf(Date);
    expect(result.getTime()).toBeLessThanOrEqual(Date.now());
  });
});