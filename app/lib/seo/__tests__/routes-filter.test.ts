import { NOINDEXED_ROUTES } from '../constants';
import { getStaticSeoRoutes } from '../routes';

describe('getStaticSeoRoutes filters noindexed routes', () => {
  it('does not include any noindexed route', () => {
    const routes = getStaticSeoRoutes();
    for (const noindexed of NOINDEXED_ROUTES) {
      expect(routes).not.toContain(noindexed);
    }
  });

  it('NOINDEXED_ROUTES list contains both known disabled pages', () => {
    expect(NOINDEXED_ROUTES).toContain('/pages/nse-mcx-live-market-data');
    expect(NOINDEXED_ROUTES).toContain('/pages/trading-software');
  });

  it('NOINDEXED_ROUTES is a readonly array', () => {
    // TypeScript enforces this at compile time; runtime check confirms the shape.
    expect(Array.isArray(NOINDEXED_ROUTES)).toBe(true);
    expect(NOINDEXED_ROUTES.length).toBeGreaterThan(0);
  });
});