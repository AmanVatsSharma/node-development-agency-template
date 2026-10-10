/**
 * @fileoverview Founder copy — single source for the founder page, team page,
 * about page card, and database seed/fix scripts.
 *
 * Identity (name/title) comes from companyProfile so there is one place to
 * change it. Bio text is copied from the existing About page.
 */
import { companyProfile } from './companyProfile';

const founder = companyProfile.founder;
if (!founder) {
  throw new Error('companyProfile.founder must be defined');
}

export const FOUNDER_NAME = founder.name;
export const FOUNDER_TITLE = founder.title ?? 'Founder';
export const FOUNDER_INITIALS = 'AK';
export const FOUNDER_FOUNDED_YEAR = 2025;

export const FOUNDER_QUOTE =
  'I started Vedpragya because great engineering is rare — and businesses deserve software that actually holds up.';

export const FOUNDER_SHORT_BIO =
  'Full-stack engineer and entrepreneur. Built enterprise-grade systems across fintech, logistics, healthcare, and e-commerce. Founded Vedpragya to bring serious engineering to businesses of all sizes.';

export const FOUNDER_LONG_BIO: readonly string[] = [
  FOUNDER_SHORT_BIO,
  'Before starting Vedpragya, Aman led engineering at multiple startups and delivered mission-critical systems for clients across India, the UAE, and North America. He believes the best engineering firms also ship their own products — and Vedpragya does exactly that with BharatERP, TradeZen, and five more live platforms.',
];

/** DRAFT COPY — owner to review. Describes the remit implied by "Operations Head". */
export const FOUNDER_RESPONSIBILITIES: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: 'Delivery & project governance',
    body: 'Keeps every engagement scoped, scheduled, and on track from kickoff to launch.',
  },
  {
    title: 'Client communication',
    body: 'Acts as the point of accountability for clients — clear updates, honest timelines, fast escalation.',
  },
  {
    title: 'Process & quality standards',
    body: 'Owns how Vedpragya plans, reviews, tests, and ships work so quality stays consistent.',
  },
  {
    title: 'Team operations',
    body: 'Coordinates people, tooling, and hiring so engineers can focus on building.',
  },
];

/** Row used for the TeamMember table (seed + fix script + page fallback). */
export const FOUNDER_TEAM_MEMBER = {
  id: 'team-founder',
  name: FOUNDER_NAME,
  position: FOUNDER_TITLE,
  bio: FOUNDER_SHORT_BIO,
  avatar: '',
  order: 0,
  active: true,
};
