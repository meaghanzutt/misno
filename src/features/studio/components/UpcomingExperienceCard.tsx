import { CalendarDays, MapPin, Users } from 'lucide-react';
import { Card } from '../../../components/Card';
import type { StudioUpcoming } from '../../../demo/studio';

export function UpcomingExperienceCard({ experience }: { experience: StudioUpcoming }) {
  const percentage = Math.min(100, Math.round((experience.registered / experience.capacity) * 100));
  return (
    <Card className="studio-upcoming-card">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full border border-forest/20 bg-forest/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-forest">Published</span>
        <span className="text-sm text-muted">{experience.registered}/{experience.capacity}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-ink">{experience.title}</h3>
      <div className="mt-5 space-y-3 text-sm text-muted">
        <p className="flex items-center gap-3"><CalendarDays className="h-4 w-4 text-forest" aria-hidden="true" />{experience.date}</p>
        <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-forest" aria-hidden="true" />{experience.location}</p>
        <p className="flex items-center gap-3"><Users className="h-4 w-4 text-forest" aria-hidden="true" />{experience.registered} people joining you</p>
      </div>
      <div className="mt-6" aria-label={`${percentage}% capacity filled`}>
        <div className="h-1.5 overflow-hidden rounded-full bg-surface"><div className="h-full rounded-full bg-ink" style={{ width: `${percentage}%` }} /></div>
      </div>
    </Card>
  );
}
