import type { LucideIcon } from 'lucide-react';
import { BookOpen, ClipboardCheck, ShieldCheck } from 'lucide-react';

export type StudioDraft = {
  id: string;
  title: string;
  category: string;
  updatedAt: string;
  progress: number;
};

export type StudioUpcoming = {
  id: string;
  title: string;
  date: string;
  location: string;
  registered: number;
  capacity: number;
};

export type StudioResource = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export const studioDrafts: StudioDraft[] = [
  {
    id: 'coffee-conversation-draft',
    title: 'Coffee & Conversation',
    category: 'Coffee',
    updatedAt: 'Edited 20 minutes ago',
    progress: 60,
  },
];

export const studioUpcoming: StudioUpcoming[] = [
  {
    id: 'creator-roundtable',
    title: 'Creator Roundtable',
    date: 'August 18 · 6:30 PM',
    location: 'Liberty Station, San Diego',
    registered: 18,
    capacity: 24,
  },
  {
    id: 'mission-bay-cleanup',
    title: 'Mission Bay Community Cleanup',
    date: 'August 23 · 8:00 AM',
    location: 'Mission Bay, San Diego',
    registered: 31,
    capacity: 40,
  },
];

export const studioResources: StudioResource[] = [
  {
    id: 'host-handbook',
    title: 'Host handbook',
    description: 'A calm, practical guide for welcoming people and running an experience.',
    icon: BookOpen,
    href: '/workspace/resources',
  },
  {
    id: 'event-checklist',
    title: 'Experience checklist',
    description: 'A simple pre-publish and day-of checklist so the details do not wander off.',
    icon: ClipboardCheck,
    href: '/workspace/resources',
  },
  {
    id: 'safety-guide',
    title: 'Community safety guide',
    description: 'Clear expectations for creating respectful, accessible, and safe gatherings.',
    icon: ShieldCheck,
    href: '/workspace/resources',
  },
];
