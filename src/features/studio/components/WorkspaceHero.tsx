import { ArrowRight, Plus } from 'lucide-react';
import { ButtonLink } from '../../../components/Button';

export function WorkspaceHero() {
  return (
    <section className="studio-hero" aria-labelledby="studio-heading">
      <div>
        <p className="eyebrow">NÖMAD Studio</p>
        <h1 id="studio-heading" className="page-title mt-3 max-w-3xl">Ready to bring people together?</h1>
        <p className="mt-4 max-w-2xl body-muted">Turn an idea into a welcoming experience, keep drafts close, and see what your community is showing up for next.</p>
      </div>
      <ButtonLink to="/workspace/create" size="lg" className="shrink-0">
        <Plus className="h-4 w-4" aria-hidden="true" />
        Create an experience
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </ButtonLink>
    </section>
  );
}
