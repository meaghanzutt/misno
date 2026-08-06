import { CalendarCheck2, CheckCircle2, HeartHandshake, MapPin, Mic2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { PassportEntry as PassportEntryData, PassportEntryType } from '../../lib/passportData';

const icons = {
  attended: CheckCircle2,
  hosted: Mic2,
  joined: CalendarCheck2,
  community: HeartHandshake,
} satisfies Record<PassportEntryType, typeof CheckCircle2>;

const labels: Record<PassportEntryType, string> = {
  attended: 'Attended',
  hosted: 'Hosted',
  joined: 'Upcoming',
  community: 'Community',
};

export function PassportEntry({ entry }: { entry: PassportEntryData }) {
  const Icon = icons[entry.type];
  const content = (
    <article className="passport-entry-card">
      <div className={`passport-entry-icon passport-entry-icon-${entry.type}`}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="passport-entry-type">{labels[entry.type]}</span>
          <span className="text-sm text-muted">{entry.date}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-ink">{entry.title}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{entry.description}</p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-forest" aria-hidden="true" />{entry.location}</span>
          {entry.detail ? <span>{entry.detail}</span> : null}
        </div>
      </div>
    </article>
  );

  if (entry.experienceId) {
    return <Link to={`/app/experiences/${entry.experienceId}`} className="block rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-4">{content}</Link>;
  }

  return content;
}
