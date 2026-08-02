import { MapPin } from 'lucide-react';
import type { DiscoverPerson } from '../../lib/discoverData';
import { Card } from '../../components/Card';
import { MemberMark } from '../../components/MemberMark';

export function PersonCard({ person }: { person: DiscoverPerson }) {
  return (
    <Card className="discover-detail-card">
      <MemberMark name={person.name} membership={person.membership} />
      <p className="mt-3 flex items-center gap-2 text-sm text-muted"><MapPin className="h-4 w-4" aria-hidden="true" />{person.city}</p>
      <p className="mt-5 leading-7 text-muted">{person.bio}</p>
      <div className="mt-7 flex flex-wrap gap-2 border-t border-border pt-6">
        {person.interests.map((interest) => <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted" key={interest}>{interest}</span>)}
      </div>
    </Card>
  );
}
