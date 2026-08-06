export type ExperienceDraft = {
  id: string;
  title: string;
  category: string;
  location: string;
  date: string;
  time: string;
  capacity: number;
  description: string;
  expectations: string;
  bring: string;
  status: 'draft' | 'published';
  updatedAt: string;
};

const STORAGE_KEY = 'misno_studio_experiences';

export const emptyExperienceDraft: ExperienceDraft = {
  id: '',
  title: '',
  category: 'Coffee',
  location: '',
  date: '',
  time: '',
  capacity: 20,
  description: '',
  expectations: '',
  bring: '',
  status: 'draft',
  updatedAt: '',
};

export function getStudioExperiences(): ExperienceDraft[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ExperienceDraft[]) : [];
  } catch {
    return [];
  }
}

export function getStudioExperience(id: string): ExperienceDraft | undefined {
  return getStudioExperiences().find((experience) => experience.id === id);
}

export function saveStudioExperience(experience: ExperienceDraft): ExperienceDraft {
  const experiences = getStudioExperiences();
  const id = experience.id || `experience-${Date.now()}`;
  const saved = { ...experience, id, updatedAt: new Date().toISOString() };
  const next = experiences.some((item) => item.id === id)
    ? experiences.map((item) => (item.id === id ? saved : item))
    : [saved, ...experiences];
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return saved;
}
