import { describe, expect, it } from '@jest/globals';
import {
  arrangeTeam,
  founderFallbackMember,
  initialsOf,
  normalizeTeamRows,
  type TeamCardMember,
} from '../teamArrange';

function member(overrides: Partial<TeamCardMember>): TeamCardMember {
  return {
    id: 'id',
    name: 'Someone',
    position: 'Engineer',
    bio: 'bio',
    avatar: '',
    linkedIn: null,
    twitter: null,
    github: null,
    website: null,
    order: 1,
    isFounder: false,
    ...overrides,
  };
}

describe('initialsOf', () => {
  it('uses first letters of the first and last word', () => {
    expect(initialsOf('Priya Sharma')).toBe('PS');
    expect(initialsOf('  Madonna ')).toBe('M');
    expect(initialsOf('Anna Maria Lopez')).toBe('AL');
    expect(initialsOf('')).toBe('?');
  });
});

describe('normalizeTeamRows', () => {
  it('returns [] for non-arrays such as the build-time mock result', () => {
    expect(normalizeTeamRows({})).toEqual([]);
    expect(normalizeTeamRows(null)).toEqual([]);
  });

  it('drops rows without a name or position and flags the founder by name', () => {
    const rows = normalizeTeamRows([
      { id: 'a', name: 'Aman Kumar Sharma', position: 'Founder', bio: 'b', avatar: '', order: 0 },
      { id: 'b', name: 'No Position' },
      { id: 'c', name: 'Riya Verma', position: 'Designer', bio: 'b', avatar: '/x.jpg', order: 2, linkedIn: 'https://l' },
    ]);
    expect(rows.map((r) => r.name)).toEqual(['Aman Kumar Sharma', 'Riya Verma']);
    expect(rows[0].isFounder).toBe(true);
    expect(rows[1].isFounder).toBe(false);
    expect(rows[1].linkedIn).toBe('https://l');
    expect(rows[1].github).toBeNull();
  });
});

describe('arrangeTeam', () => {
  it('puts the founder first and sorts the rest by order then name', () => {
    const { founder, others } = arrangeTeam([
      member({ id: '1', name: 'Zed', order: 2 }),
      member({ id: '2', name: 'Amy', order: 2 }),
      member({ id: '3', name: 'Founder', isFounder: true, order: 0 }),
      member({ id: '4', name: 'Bob', order: 1 }),
    ]);
    expect(founder.name).toBe('Founder');
    expect(others.map((o) => o.name)).toEqual(['Bob', 'Amy', 'Zed']);
  });

  it('falls back to the static founder when none is present', () => {
    const { founder, others } = arrangeTeam([]);
    expect(founder.isFounder).toBe(true);
    expect(founder.name).toBe(founderFallbackMember().name);
    expect(others).toEqual([]);
  });
});
