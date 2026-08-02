import { ArrowUpRight, CalendarDays, Coffee, Compass, MapPin, MessageCircle, Users } from 'lucide-react';
import type { Experience } from '../types';
import { Card } from './Card';
import { MemberMark } from './MemberMark';

function categoryIcon(category: string) {
  const value = category.toLowerCase();
  if (value.includes('coffee') || value.includes('food')) return Coffee;
  if (value.includes('outdoor') || value.includes('adventure')) return Compass;
  return MessageCircle;
}

export function ExperienceCard({ experience }: { experience: Experience }) {
  const Icon = categoryIcon(experience.category);

  return (
    <Card className="group experience-card p-0">
      <div className="experience-card-header">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-white text-forest shadow-sm">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <span className="w-fit rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted">{experience.category}</span>
        <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em]">{experience.title}</h3>
        <p className="mt-4 text-base leading-7 text-muted">{experience.description}</p>
        <div className="mt-8 space-y-3 border-t border-border pt-6 text-sm text-muted">
          <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />{experience.schedule}</p>
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />{experience.location}</p>
          <p className="flex items-center gap-2"><Users className="h-4 w-4 shrink-0" aria-hidden="true" />{experience.members} people</p>
        </div>
        <p className="mt-6 border-t border-border pt-5 text-sm font-medium text-ink">Hosted by <MemberMark name={experience.host} membership={experience.hostMembership} /></p>
      </div>
    </Card>
  );
}
