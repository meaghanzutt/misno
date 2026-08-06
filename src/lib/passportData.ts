import type { Experience } from '../types';
import { discoverExperiences } from './discoverData';

export type PassportEntryType = 'attended' | 'hosted' | 'joined' | 'community';

export interface PassportEntry {
  id: string;
  date: string;
  month: string;
  title: string;
  description: string;
  location: string;
  type: PassportEntryType;
  experienceId?: string;
  detail?: string;
}

export const passportEntries: PassportEntry[] = [
  {
    id: 'beach-cleanup-attended',
    date: 'August 2',
    month: 'August 2026',
    title: 'Community Beach Cleanup',
    description: 'Showed up with the Mission Beach group and contributed two volunteer hours.',
    location: 'Mission Beach, San Diego',
    type: 'attended',
    experienceId: 'beach-cleanup',
    detail: '2 volunteer hours',
  },
  {
    id: 'coffee-chat-hosted',
    date: 'July 18',
    month: 'July 2026',
    title: 'Hosted Coffee Chat',
    description: 'Welcomed a small group into an easy conversation about creativity and community.',
    location: 'Online',
    type: 'hosted',
    detail: 'First room hosted',
  },
  {
    id: 'sunset-walk-attended',
    date: 'July 12',
    month: 'July 2026',
    title: 'Sunset Walk',
    description: 'Joined a relaxed evening walk and met four people from the Outside Together Circle.',
    location: 'Mission Bay, San Diego',
    type: 'attended',
    detail: '4 new connections',
  },
  {
    id: 'book-journey-community',
    date: 'July 5',
    month: 'July 2026',
    title: 'Joined Book Journey',
    description: 'Became part of a monthly reading experience built around thoughtful discussion.',
    location: 'Online',
    type: 'community',
  },
];

function joinedStorageKey(id: string) {
  return `misno_joined_experience_${id}`;
}

function joinedEntry(experience: Experience): PassportEntry {
  return {
    id: `joined-${experience.id}`,
    date: 'Upcoming',
    month: 'Next up',
    title: `Joined ${experience.title}`,
    description: 'Your place is saved. This becomes part of your Passport after you attend.',
    location: experience.location,
    type: 'joined',
    experienceId: experience.id,
    detail: experience.schedule,
  };
}

export function getJoinedPassportEntries(): PassportEntry[] {
  if (typeof window === 'undefined') return [];

  return discoverExperiences
    .filter((experience) => window.localStorage.getItem(joinedStorageKey(experience.id)) === 'true')
    .map(joinedEntry);
}
