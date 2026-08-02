import { ArrowUpRight, MessageCircle, Users } from 'lucide-react';
import type { Circle } from '../../lib/discoverData';
import { Card } from '../../components/Card';

export function CircleCard({ circle }: { circle: Circle }) {
  return (
    <Card className="discover-detail-card">
      <div className="flex items-start justify-between gap-4">
        <div className="discover-icon"><MessageCircle className="h-5 w-5" aria-hidden="true" /></div>
        <ArrowUpRight className="h-5 w-5 text-muted" aria-hidden="true" />
      </div>
      <span className="mt-7 w-fit rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted">{circle.category}</span>
      <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">{circle.name}</h3>
      <p className="mt-4 leading-7 text-muted">{circle.description}</p>
      <div className="mt-8 space-y-3 border-t border-border pt-6 text-sm text-muted">
        <p className="flex items-center gap-2"><Users className="h-4 w-4" aria-hidden="true" />{circle.members} people</p>
        <p>{circle.activity}</p>
      </div>
    </Card>
  );
}
