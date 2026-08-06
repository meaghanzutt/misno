import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../../components/Card';
import type { StudioResource } from '../../../demo/studio';

export function ResourceCard({ resource }: { resource: StudioResource }) {
  const Icon = resource.icon;
  return (
    <Card className="studio-resource-card">
      <span className="studio-card-icon"><Icon className="h-5 w-5" aria-hidden="true" /></span>
      <h3 className="mt-5 text-lg font-semibold text-ink">{resource.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{resource.description}</p>
      <Link to={resource.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-4">
        Open resource <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Card>
  );
}
