/**
 * @fileoverview Authors Data for Blog Posts
 * @description The real author(s) offered in the admin blog editor.
 * Only people who actually exist belong here — add teammates via /admin/team.
 */
import { companyProfile } from '../../app/data/companyProfile';
import {
  FOUNDER_NAME,
  FOUNDER_SHORT_BIO,
  FOUNDER_TITLE,
} from '../../app/data/founder';

export const authorsData = [
  {
    // Author.email is the unique upsert key; the shared company mailbox is used
    // because no personal address is published.
    email: companyProfile.contactEmail,
    name: FOUNDER_NAME,
    title: FOUNDER_TITLE,
    bio: FOUNDER_SHORT_BIO,
    avatar: '',
    website: null,
    linkedIn: null,
    twitter: null,
    github: null,
  },
];

console.log('[Seed Data] Authors data loaded:', authorsData.length, 'authors');
