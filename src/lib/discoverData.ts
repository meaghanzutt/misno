import type { Experience, Membership } from '../types';

export type DiscoverCategory = 'All' | 'Coffee' | 'Creative' | 'Outdoors' | 'Culture' | 'Volunteer';

export interface Neighborhood {
  id: string;
  name: string;
  city: string;
  description: string;
  activeExperiences: number;
  members: number;
}

export interface Circle {
  id: string;
  name: string;
  description: string;
  members: number;
  activity: string;
  category: DiscoverCategory;
}

export interface DiscoverPerson {
  id: string;
  name: string;
  city: string;
  membership: Membership;
  bio: string;
  interests: string[];
}

export const discoverExperiences: Experience[] = [
  {
    id: 'coffee-conversation',
    title: 'Coffee & Conversation',
    location: 'North Park, San Diego',
    schedule: 'Saturday · 10:00 AM',
    description: 'A relaxed monthly meetup for people who want good coffee and an easy way to meet someone new.',
    members: 24,
    category: 'Coffee',
    host: 'Sarah',
    hostMembership: 'contributor',
  },
  {
    id: 'creator-roundtable',
    title: 'Creator Roundtable',
    location: 'Liberty Station, San Diego',
    schedule: 'Thursday · 6:30 PM',
    description: 'Bring one idea, question, or unfinished project and leave with useful feedback from thoughtful people.',
    members: 18,
    category: 'Creative',
    host: 'Malia',
    hostMembership: 'partner',
  },
  {
    id: 'sunrise-walk',
    title: 'Sunrise Walk',
    location: 'La Jolla Shores, San Diego',
    schedule: 'Sunday · 6:15 AM',
    description: 'A calm shoreline walk with conversation, fresh air, and no pressure to keep a certain pace.',
    members: 31,
    category: 'Outdoors',
    host: 'Keoni',
    hostMembership: 'partner',
  },
  {
    id: 'lei-making-workshop',
    title: 'Lei Making Workshop',
    location: 'Balboa Park, San Diego',
    schedule: 'August 22 · 1:00 PM',
    description: 'Learn, create, and spend an afternoon in community while exploring a meaningful cultural practice.',
    members: 16,
    category: 'Culture',
    host: 'Leilani',
    hostMembership: 'executive',
  },
  {
    id: 'beach-cleanup',
    title: 'Community Beach Cleanup',
    location: 'Mission Beach, San Diego',
    schedule: 'August 29 · 8:30 AM',
    description: 'Spend a morning caring for the coastline, then stay for a casual picnic with the group.',
    members: 37,
    category: 'Volunteer',
    host: 'Kai',
    hostMembership: 'contributor',
  },
  {
    id: 'weekend-adventures',
    title: 'Weekend Adventures',
    location: 'San Diego County',
    schedule: 'Twice monthly',
    description: 'Try something new with a small group, from neighborhood walks to low-key day trips.',
    members: 42,
    category: 'Outdoors',
    host: 'Mia',
    hostMembership: 'member',
  },
];

export const neighborhoods: Neighborhood[] = [
  {
    id: 'north-park',
    name: 'North Park',
    city: 'San Diego',
    description: 'Coffee, creative meetups, local food, and easy neighborhood gatherings.',
    activeExperiences: 8,
    members: 126,
  },
  {
    id: 'liberty-station',
    name: 'Liberty Station',
    city: 'San Diego',
    description: 'Art, culture, workshops, and collaborative experiences in one walkable place.',
    activeExperiences: 5,
    members: 84,
  },
  {
    id: 'mission-bay',
    name: 'Mission Bay',
    city: 'San Diego',
    description: 'Sunrise walks, wellness meetups, outdoor hangs, and community service.',
    activeExperiences: 6,
    members: 97,
  },
];

export const circles: Circle[] = [
  {
    id: 'coffee-people',
    name: 'Coffee People',
    description: 'For café explorers, slow mornings, and conversations that do not feel forced.',
    members: 148,
    activity: '12 new conversations this week',
    category: 'Coffee',
  },
  {
    id: 'creative-builders',
    name: 'Creative Builders',
    description: 'A practical circle for sharing work, getting feedback, and finishing ideas.',
    members: 93,
    activity: 'Creator Roundtable Thursday',
    category: 'Creative',
  },
  {
    id: 'outside-together',
    name: 'Outside Together',
    description: 'Low-pressure walks, beginner-friendly adventures, and time away from the screen.',
    members: 121,
    activity: 'Sunrise Walk Sunday',
    category: 'Outdoors',
  },
];

export const discoverPeople: DiscoverPerson[] = [
  {
    id: 'meaghan',
    name: 'Meaghan',
    city: 'San Diego',
    membership: 'contributor',
    bio: 'Building thoughtful community around creativity, culture, and real connection.',
    interests: ['Community', 'Coffee', 'Culture'],
  },
  {
    id: 'emily',
    name: 'Emily',
    city: 'San Diego',
    membership: 'member',
    bio: 'Bookstores, beach walks, local food, and low-key weekend plans.',
    interests: ['Books', 'Food', 'Outdoors'],
  },
  {
    id: 'kai',
    name: 'Kai',
    city: 'Honolulu',
    membership: 'partner',
    bio: 'Creative host, cultural storyteller, and weekend explorer.',
    interests: ['Culture', 'Creative', 'Travel'],
  },
  {
    id: 'malia',
    name: 'Malia',
    city: 'San Diego',
    membership: 'contributor',
    bio: 'Designer who likes collaborative work sessions and honest creative feedback.',
    interests: ['Design', 'Creative', 'Coffee'],
  },
];
