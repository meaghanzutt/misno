import type { Membership } from '../types';
import { discoverExperiences } from './discoverData';

export interface ExperienceAttendee {
  id: string;
  name: string;
  membership: Membership;
}

export interface ExperienceDetail {
  id: string;
  longDescription: string;
  perfectFor: string[];
  expectations: string[];
  bring: string[];
  atmosphere: string[];
  attendees: ExperienceAttendee[];
  accessibilityNote?: string;
}

const details: Record<string, Omit<ExperienceDetail, 'id'>> = {
  'coffee-conversation': {
    longDescription: 'Bring your favorite notebook, order something you enjoy, and settle into a relaxed morning with people who are open to genuine conversation. There is no pitch, agenda, or pressure to perform. The host will make introductions and offer a few optional prompts so nobody has to carry the room alone.',
    perfectFor: ['Creatives', 'Remote workers', 'New residents', 'Anyone craving easy conversation'],
    expectations: ['A short welcome from the host', 'Small-group conversation', 'Time to meet people naturally', 'An optional walk through North Park afterward'],
    bring: ['A notebook, if you like', 'Money for your own drink', 'Curiosity and an open mind'],
    atmosphere: ['Relaxed', 'Small group', 'Casual', 'Conversation-led'],
    attendees: [
      { id: 'sarah', name: 'Sarah', membership: 'contributor' },
      { id: 'meaghan', name: 'Meaghan', membership: 'contributor' },
      { id: 'emily', name: 'Emily', membership: 'member' },
      { id: 'kai', name: 'Kai', membership: 'partner' },
      { id: 'malia', name: 'Malia', membership: 'contributor' },
      { id: 'jordan', name: 'Jordan', membership: 'community' },
    ],
    accessibilityNote: 'The café entrance and main seating area are wheelchair accessible. Contact the host if you would like help arranging seating.',
  },
  'creator-roundtable': {
    longDescription: 'A thoughtful working session for people with an idea, project, question, or creative block. Bring something unfinished. You will have time to explain what you are working on, receive grounded feedback, and hear how other builders are approaching their own work.',
    perfectFor: ['Designers', 'Writers', 'Founders', 'People building in public'],
    expectations: ['Brief introductions', 'Two focused feedback rounds', 'Quiet work time', 'A closing commitment for the week'],
    bring: ['One project or question', 'A laptop or notebook', 'Respectful, specific feedback'],
    atmosphere: ['Focused', 'Creative', 'Supportive', 'Practical'],
    attendees: [
      { id: 'malia', name: 'Malia', membership: 'partner' },
      { id: 'devon', name: 'Devon', membership: 'member' },
      { id: 'ana', name: 'Ana', membership: 'contributor' },
      { id: 'noah', name: 'Noah', membership: 'community' },
    ],
  },
  'sunrise-walk': {
    longDescription: 'A slow shoreline walk for people who want fresh air, gentle movement, and conversation without a crowded social agenda. The pace is beginner friendly, and you are welcome to walk quietly for part of the route.',
    perfectFor: ['Early risers', 'Beginners', 'People easing back into movement', 'Anyone who likes quiet company'],
    expectations: ['Meet at the south end of the boardwalk', 'A gentle out-and-back walk', 'Optional coffee afterward', 'No pace requirement'],
    bring: ['Comfortable shoes', 'Water', 'A light layer'],
    atmosphere: ['Quiet', 'Outdoors', 'Gentle', 'Low pressure'],
    attendees: [
      { id: 'keoni', name: 'Keoni', membership: 'partner' },
      { id: 'lena', name: 'Lena', membership: 'member' },
      { id: 'mike', name: 'Mike', membership: 'community' },
      { id: 'talia', name: 'Talia', membership: 'contributor' },
    ],
  },
  'lei-making-workshop': {
    longDescription: 'Spend an afternoon learning foundational lei-making techniques while sharing conversation and cultural context. The session is designed to be welcoming to beginners and respectful of the practice being shared.',
    perfectFor: ['Beginners', 'Culture learners', 'Creative people', 'Families with older children'],
    expectations: ['A cultural introduction', 'Step-by-step guidance', 'Time to create at your own pace', 'A closing photo and cleanup'],
    bring: ['Comfortable clothing', 'A reusable water bottle', 'Patience and respect'],
    atmosphere: ['Creative', 'Cultural', 'Hands-on', 'Welcoming'],
    attendees: [
      { id: 'leilani', name: 'Leilani', membership: 'executive' },
      { id: 'pua', name: 'Pua', membership: 'partner' },
      { id: 'cam', name: 'Cam', membership: 'member' },
    ],
  },
  'beach-cleanup': {
    longDescription: 'Help care for the coastline during a focused morning cleanup, then stay for a simple picnic and conversation. Supplies are provided, and the host will explain what can and cannot be safely collected.',
    perfectFor: ['Volunteers', 'Families', 'Outdoor people', 'Anyone who wants to contribute locally'],
    expectations: ['Safety briefing', 'Small cleanup teams', 'Waste sorting', 'Optional picnic afterward'],
    bring: ['Closed-toe shoes', 'Sun protection', 'Reusable water bottle'],
    atmosphere: ['Purposeful', 'Outdoors', 'Community-led', 'Active'],
    attendees: [
      { id: 'kai', name: 'Kai', membership: 'contributor' },
      { id: 'jules', name: 'Jules', membership: 'member' },
      { id: 'reece', name: 'Reece', membership: 'community' },
      { id: 'toni', name: 'Toni', membership: 'community' },
    ],
  },
  'weekend-adventures': {
    longDescription: 'A rotating series of beginner-friendly outings across San Diego County. Each meetup has a clear plan, realistic timing, and a host who keeps the group connected without turning the day into a rigid tour.',
    perfectFor: ['Weekend explorers', 'New residents', 'People who prefer small groups', 'Anyone ready to try something new'],
    expectations: ['A clear meetup point', 'A hosted group activity', 'Plenty of informal conversation', 'A shared recap afterward'],
    bring: ['Weather-appropriate clothing', 'Water and snacks', 'Any activity-specific items listed by the host'],
    atmosphere: ['Curious', 'Active', 'Friendly', 'Beginner friendly'],
    attendees: [
      { id: 'mia', name: 'Mia', membership: 'member' },
      { id: 'sam', name: 'Sam', membership: 'community' },
      { id: 'riley', name: 'Riley', membership: 'contributor' },
    ],
  },
};

export function getExperienceDetail(experienceId: string) {
  const experience = discoverExperiences.find((item) => item.id === experienceId);
  const detail = details[experienceId];
  if (!experience || !detail) return null;
  return { experience, detail: { id: experienceId, ...detail } };
}
