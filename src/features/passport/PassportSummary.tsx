import { CalendarCheck2, MapPinned, Mic2 } from 'lucide-react';
import type { PassportEntry } from '../../lib/passportData';

export function PassportSummary({ entries }: { entries: PassportEntry[] }) {
  const attended = entries.filter((entry) => entry.type === 'attended').length;
  const hosted = entries.filter((entry) => entry.type === 'hosted').length;
  const places = new Set(entries.filter((entry) => entry.location !== 'Online').map((entry) => entry.location)).size;

  const summary = [
    { label: 'Experiences attended', value: attended, icon: CalendarCheck2 },
    { label: 'Moments hosted', value: hosted, icon: Mic2 },
    { label: 'Places in your story', value: places, icon: MapPinned },
  ];

  return (
    <div className="passport-summary" aria-label="Passport summary">
      {summary.map(({ label, value, icon: Icon }) => (
        <div key={label} className="passport-summary-item">
          <Icon className="h-5 w-5 text-forest" aria-hidden="true" />
          <div>
            <p className="text-2xl font-semibold tracking-[-0.035em] text-ink">{value}</p>
            <p className="mt-1 text-sm text-muted">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
