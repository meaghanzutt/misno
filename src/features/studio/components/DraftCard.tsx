import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../../components/Card';
import type { StudioDraft } from '../../../demo/studio';

export function DraftCard({ draft }: { draft: StudioDraft }) {
  return (
    <Card className="studio-draft-card">
      <div className="flex items-start justify-between gap-4">
        <span className="studio-card-icon"><FileText className="h-5 w-5" aria-hidden="true" /></span>
        <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">Draft</span>
      </div>
      <div className="mt-6">
        <p className="text-sm font-medium text-forest">{draft.category}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-ink">{draft.title}</h3>
        <p className="mt-2 text-sm text-muted">{draft.updatedAt}</p>
      </div>
      <div className="mt-6" aria-label={`${draft.progress}% complete`}>
        <div className="mb-2 flex items-center justify-between text-xs text-muted"><span>Draft progress</span><span>{draft.progress}%</span></div>
        <div className="h-1.5 overflow-hidden rounded-full bg-surface"><div className="h-full rounded-full bg-forest" style={{ width: `${draft.progress}%` }} /></div>
      </div>
      <Link to="/workspace/experiences" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-4">
        Continue editing <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Card>
  );
}
