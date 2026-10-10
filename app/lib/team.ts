import prisma from '@/app/lib/prisma';
import { arrangeTeam, normalizeTeamRows } from '@/app/lib/teamArrange';
import { withTimeout } from '@/app/lib/withTimeout';

// Cold Neon compute + Prisma engine boot measured ~4.3s; allow headroom.
const DB_TIMEOUT_MS = 8000;

/**
 * Active team members from the database, founder first. Never throws: if the
 * database is unreachable the page still renders the founder from static data.
 */
export async function getTeam() {
  try {
    const raw = await withTimeout(
      prisma.teamMember.findMany({
        where: { active: true },
        orderBy: [{ order: 'asc' }, { name: 'asc' }],
      }),
      DB_TIMEOUT_MS,
      'teamMember.findMany',
    );
    return arrangeTeam(normalizeTeamRows(raw));
  } catch (error) {
    console.error('[Team] Database read failed; showing founder only', {
      error: error instanceof Error ? error.message : String(error),
    });
    return arrangeTeam([]);
  }
}
