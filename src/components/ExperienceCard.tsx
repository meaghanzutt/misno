import { ArrowUpRight, MapPin } from 'lucide-react';
import type { Experience } from '../types';
import { Card } from './Card';

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Card className="flex h-full flex-col p-6">
      <div className="mb-8 flex items-start justify-between gap-4">
        <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted">{experience.category}</span>
        <ArrowUpRight className="h-5 w-5 text-muted" />
      </div>
      <h3 className="text-xl font-semibold">{experience.title}</h3>
      <p className="mt-2 body-muted">{experience.description}</p>
      <div className="mt-auto pt-8 text-sm text-muted">
        <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />{experience.location}</div>
        <div className="mt-2">{experience.schedule} · {experience.members} people</div>
      </div>
    </Card>
  );
}
