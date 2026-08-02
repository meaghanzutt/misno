import { ArrowUpRight, MapPin, Sparkles, Users } from 'lucide-react';
import type { Neighborhood } from '../../lib/discoverData';
import { Card } from '../../components/Card';

export function NeighborhoodCard({ neighborhood }: { neighborhood: Neighborhood }) {
  return (
    <Card className="discover-detail-card">
      <div className="flex items-start justify-between gap-4">
        <div className="discover-icon"><MapPin className="h-5 w-5" aria-hidden="true" /></div>
        <ArrowUpRight className="h-5 w-5 text-muted" aria-hidden="true" />
      </div>
      <p className="mt-7 text-sm font-medium text-forest">{neighborhood.city}</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">{neighborhood.name}</h3>
      <p className="mt-4 leading-7 text-muted">{neighborhood.description}</p>
      <div className="mt-8 grid grid-cols-2 gap-3 border-t border-border pt-6 text-sm text-muted">
        <span className="flex items-center gap-2"><Sparkles className="h-4 w-4" aria-hidden="true" />{neighborhood.activeExperiences} experiences</span>
        <span className="flex items-center gap-2"><Users className="h-4 w-4" aria-hidden="true" />{neighborhood.members} people</span>
      </div>
    </Card>
  );
}
