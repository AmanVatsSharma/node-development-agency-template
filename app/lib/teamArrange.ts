import { FOUNDER_NAME, FOUNDER_TEAM_MEMBER } from '@/app/data/founder';

export interface TeamCardMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  avatar: string;
  linkedIn: string | null;
  twitter: string | null;
  github: string | null;
  website: string | null;
  order: number;
  isFounder: boolean;
}

export function isFounderName(name: string): boolean {
  return name.trim().toLowerCase() === FOUNDER_NAME.trim().toLowerCase();
}

/** First letter of the first and last word, upper-cased. */
export function initialsOf(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function founderFallbackMember(): TeamCardMember {
  return {
    id: FOUNDER_TEAM_MEMBER.id,
    name: FOUNDER_TEAM_MEMBER.name,
    position: FOUNDER_TEAM_MEMBER.position,
    bio: FOUNDER_TEAM_MEMBER.bio,
    avatar: FOUNDER_TEAM_MEMBER.avatar,
    linkedIn: null,
    twitter: null,
    github: null,
    website: null,
    order: FOUNDER_TEAM_MEMBER.order,
    isFounder: true,
  };
}

function stringOrNull(value: unknown): string | null {
  return typeof value === 'string' && value.trim() ? value : null;
}

/** Coerce unknown Prisma output (or the build-time mock `{}`) into card members. */
export function normalizeTeamRows(raw: unknown): TeamCardMember[] {
  if (!Array.isArray(raw)) return [];
  const members: TeamCardMember[] = [];
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue;
    const r = item as Record<string, unknown>;
    if (typeof r.name !== 'string' || typeof r.position !== 'string') continue;
    members.push({
      id: typeof r.id === 'string' ? r.id : r.name,
      name: r.name,
      position: r.position,
      bio: typeof r.bio === 'string' ? r.bio : '',
      avatar: typeof r.avatar === 'string' ? r.avatar : '',
      linkedIn: stringOrNull(r.linkedIn),
      twitter: stringOrNull(r.twitter),
      github: stringOrNull(r.github),
      website: stringOrNull(r.website),
      order: typeof r.order === 'number' ? r.order : 0,
      isFounder: isFounderName(r.name),
    });
  }
  return members;
}

/** Founder first (static fallback if absent), everyone else by order then name. */
export function arrangeTeam(members: TeamCardMember[]): {
  founder: TeamCardMember;
  others: TeamCardMember[];
} {
  const founder = members.find((m) => m.isFounder) ?? founderFallbackMember();
  const others = members
    .filter((m) => !m.isFounder)
    .sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
  return { founder, others };
}
