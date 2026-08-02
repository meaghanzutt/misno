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
  { name: 'Community', key: 'community', monthly: 'Free', enrollment: 'No enrollment fee', description: 'The easiest way to join MISNÖ.', features: ['Community profile', 'Public experiences', 'Public conversations', 'Passport timeline', 'Upgrade anytime'], cta: 'Join free' },
  { name: 'Member', key: 'member', monthly: '$30/month', enrollment: '$50 one-time enrollment', description: 'Added access, custom benefits, and optional rewards.', features: ['Everything in Community', 'One custom Pi', 'Behind-the-scenes access', 'Always Open Access', '20% merchandise earnings', '30% Pi referral rewards'], cta: 'Join as Member' },
  { name: 'Contributor', key: 'contributor', monthly: '$40/month', enrollment: '$100 one-time enrollment', description: 'Help shape community experiences.', features: ['Everything in Member', 'Two custom Pi', 'Host rooms', 'Create experiences', 'Exclusive Inner Circle', '40% merchandise earnings', '50% Pi referral rewards'], cta: 'Become a Contributor', badge: 'Most popular' },
  { name: 'Partner', key: 'partner', monthly: '$60/month', enrollment: '$150 one-time enrollment', description: 'Build and lead experiences within MISNÖ.', features: ['Everything in Contributor', 'Three custom Pi', 'Personalized merchandise', 'Featured experiences', '50% merchandise earnings', '70% Pi referral rewards'], cta: 'Become a Partner' },
  { name: 'Executive Partner', key: 'executive', monthly: '$100/month', enrollment: '$500 one-time enrollment', description: 'Leadership access for members shaping the future of MISNÖ.', features: ['Everything in Partner', 'Unlimited jersey customization', 'Featured merchandise collection', '$25 monthly stipend', '60% merchandise earnings', '80% Pi referral rewards'], cta: 'Apply for Executive', badge: 'Leadership' },
] as const;
