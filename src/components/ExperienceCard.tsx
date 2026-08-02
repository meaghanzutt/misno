import { ArrowUpRight, CalendarDays, MapPin, Users } from 'lucide-react';
import type { Experience } from '../types';
import { Card } from './Card';
import { MemberMark } from './MemberMark';

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Card className="group experience-card overflow-hidden p-0">
      <div className="aspect-[4/3] overflow-hidden bg-surface">
        <img src={experience.image} alt="" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]" loading="lazy" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted">{experience.category}</span>
          <ArrowUpRight className="h-5 w-5 text-muted" aria-hidden="true" />
        </div>
        <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em]">{experience.title}</h3>
        <p className="mt-3 body-muted">{experience.description}</p>
        <div className="mt-7 space-y-3 border-t border-border pt-5 text-sm text-muted">
          <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />{experience.schedule}</p>
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />{experience.location}</p>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="flex items-center gap-2"><Users className="h-4 w-4 shrink-0" aria-hidden="true" />{experience.members} people</p>
            <p className="font-medium text-ink">Hosted by <MemberMark name={experience.host} membership={experience.hostMembership} /></p>
          </div>
        </div>
      </div>
    </Card>
  );
}
