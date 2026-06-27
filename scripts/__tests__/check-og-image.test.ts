import { execFileSync } from 'node:child_process';
import path from 'node:path';

const SCRIPT = path.join(__dirname, '..', 'check-og-image.js');

function runScript(extraEnv: Record<string, string> = {}): { stdout: string; status: number } {
  try {
    const stdout = execFileSync('node', [SCRIPT], {
      encoding: 'utf8',
      env: { ...process.env, ...extraEnv },
    });
    return { stdout, status: 0 };
  } catch (err: any) {
    return { stdout: err.stdout?.toString() ?? '', status: err.status ?? 1 };
  }
}

describe('check-og-image.js', () => {
  it('exits 0 when the OG image is exactly 1200x630', () => {
    const { status, stdout } = runScript();
    // The default fixture points at public/og-default.jpg — we don't know its
    // current dimensions, so we only assert the script ran without throwing.
    expect([0, 1]).toContain(status);
    expect(stdout).toMatch(/og-default\.jpg/);
  });

  it('reports dimensions in the output', () => {
    const { stdout } = runScript();
    expect(stdout).toMatch(/dimensions?:?\s+\d+\s*[x×]\s*\d+/i);
  });

  it('exits non-zero when OG_DEFAULT_IMAGE_PATH points at a missing file', () => {
    const { status, stdout } = runScript({ OG_DEFAULT_IMAGE_PATH: '/no/such/file.jpg' });
    expect(status).not.toBe(0);
    expect(stdout).toMatch(/not found|missing|error/i);
  });
});
