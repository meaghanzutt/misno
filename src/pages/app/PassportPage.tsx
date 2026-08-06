import { useMemo, useState } from 'react';
import { BookOpen, Compass } from 'lucide-react';
import { EmptyState } from '../../components/EmptyState';
import { ButtonLink } from '../../components/Button';
import { PassportEntry } from '../../features/passport/PassportEntry';
import { PassportSummary } from '../../features/passport/PassportSummary';
import { getJoinedPassportEntries, passportEntries, type PassportEntryType } from '../../lib/passportData';

type PassportFilter = 'all' | PassportEntryType;

const filters: { value: PassportFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'attended', label: 'Attended' },
  { value: 'hosted', label: 'Hosted' },
  { value: 'joined', label: 'Upcoming' },
  { value: 'community', label: 'Community' },
];

export function PassportPage() {
  const [filter, setFilter] = useState<PassportFilter>('all');
  const entries = useMemo(() => [...getJoinedPassportEntries(), ...passportEntries], []);
  const filteredEntries = filter === 'all' ? entries : entries.filter((entry) => entry.type === filter);
  const groupedEntries = filteredEntries.reduce<Record<string, typeof filteredEntries>>((groups, entry) => {
    (groups[entry.month] ??= []).push(entry);
    return groups;
  }, {});

  return (
    <div className="passport-page">
      <header className="passport-header">
        <div>
          <p className="eyebrow">Your Passport</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-ink sm:text-5xl">A record of the moments you chose to show up.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">No points. No streaks. Just the experiences, places, and people that are becoming part of your story.</p>
        </div>
        <ButtonLink to="/app/discover" variant="secondary" size="lg" className="shrink-0">
          <Compass className="h-4 w-4" aria-hidden="true" />
          Find an experience
        </ButtonLink>
      </header>

      <PassportSummary entries={entries} />

      <div className="passport-filter" role="tablist" aria-label="Filter Passport entries">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={filter === item.value}
            className={filter === item.value ? 'is-active' : ''}
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {filteredEntries.length ? (
        <div className="mt-10 space-y-12">
          {Object.entries(groupedEntries).map(([month, monthEntries]) => (
            <section key={month} aria-labelledby={`passport-${month.replace(/\s+/g, '-').toLowerCase()}`}>
              <div className="passport-month-heading">
                <h2 id={`passport-${month.replace(/\s+/g, '-').toLowerCase()}`}>{month}</h2>
                <span>{monthEntries.length} {monthEntries.length === 1 ? 'moment' : 'moments'}</span>
              </div>
              <div className="mt-5 space-y-4">
                {monthEntries.map((entry) => <PassportEntry key={entry.id} entry={entry} />)}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="mt-10">
          <EmptyState
            icon={BookOpen}
            title="This chapter is still waiting."
            description="Choose another filter or discover an experience that feels worth showing up for."
            actionLabel="Explore Discover"
            actionTo="/app/discover"
          />
        </div>
      )}
    </div>
  );
}
