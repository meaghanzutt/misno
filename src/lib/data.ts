import type { Experience, Person } from '../types';

export const experiences: Experience[] = [
  { id: 'coffee-passport', title: 'Coffee Passport', location: 'San Diego', schedule: 'Saturdays', description: 'Try neighborhood cafés with a small group and keep a shared list of favorites.', members: 48, category: 'Food & coffee' },
  { id: 'sunrise-club', title: 'Sunrise Club', location: 'Mission Bay', schedule: 'Twice monthly', description: 'Easy morning walks, good conversation, and no performance pressure.', members: 31, category: 'Outdoors' },
  { id: 'book-journey', title: 'Book Journey', location: 'Online', schedule: 'Monthly', description: 'A relaxed reading circle built around one thoughtful conversation each month.', members: 76, category: 'Books' },
];

export const people: Person[] = [
  { id: '1', name: 'Meaghan', city: 'San Diego', membership: 'contributor', bio: 'Coffee, community, and thoughtful experiences.' },
  { id: '2', name: 'Emily', city: 'San Diego', membership: 'member', bio: 'Bookstores, beach walks, and local food.' },
  { id: '3', name: 'Kai', city: 'Honolulu', membership: 'partner', bio: 'Creative host and weekend explorer.' },
];

export const memberships = [
  {
    name: 'Community',
    key: 'community',
    monthly: 'Free',
    enrollment: 'No enrollment fee',
    bestFor: 'Exploring MISNÖ',
    description: 'Start with the public community and discover where you want to participate.',
    features: ['Community profile', 'Public experiences and events', 'Public circles and conversations', 'Passport timeline', 'Upgrade anytime'],
    cta: 'Join free',
  },
  {
    name: 'Member',
    key: 'member',
    monthly: '$30',
    enrollment: '$50 one-time enrollment',
    bestFor: 'Deeper member access',
    description: 'Support the community while receiving custom benefits and optional rewards.',
    features: ['Everything in Community', 'One custom Pi', 'Behind-the-scenes access', 'Always Open Access', '20% merchandise earnings (optional)', '30% Pi referral rewards (optional)'],
    cta: 'Become a Member',
  },
  {
    name: 'Contributor',
    key: 'contributor',
    monthly: '$40',
    enrollment: '$100 one-time enrollment',
    bestFor: 'Hosting and contributing',
    description: 'Help shape conversations, creative work, and community experiences.',
    features: ['Everything in Member', 'Two custom Pi', 'Co-host community sessions', 'Late-entry guest privilege', 'Exclusive Inner Circle', 'Founder-selected T-shirt', '40% merchandise earnings (optional)', '50% Pi referral rewards (optional)'],
    cta: 'Become a Contributor',
    badge: 'Most popular',
  },
  {
    name: 'Partner',
    key: 'partner',
    monthly: '$60',
    enrollment: '$150 one-time enrollment',
    bestFor: 'Building with MISNÖ',
    description: 'Take a larger role in shaping the direction and future of the community.',
    features: ['Everything in Contributor', 'Three custom Pi', 'Co-host access', 'Exclusive Inner Circle', 'Personalized T-shirt and hoodie', 'Two monthly reinstatement passes', '50% merchandise earnings (optional)', '70% Pi referral rewards (optional)'],
    cta: 'Become a Partner',
  },
  {
    name: 'Executive Partner',
    key: 'executive',
    monthly: '$100',
    enrollment: '$600 one-time enrollment',
    bestFor: 'Community leadership',
    description: 'The highest level for people committed to representing and growing MISNÖ.',
    features: ['Everything in Partner', 'Unlimited jersey customization', 'Featured merchandise collection', 'Official co-host privileges', 'Three personalized merchandise items', '$25 monthly stipend for eligible term', '60% merchandise earnings (optional)', '80% Pi referral rewards (optional)'],
    cta: 'Apply for Executive',
    badge: 'Application required',
  },
] as const;
