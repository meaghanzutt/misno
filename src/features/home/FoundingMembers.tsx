import { ArrowRight } from 'lucide-react';
import { Button } from '../../components/Button';
import { openSignup } from '../../lib/auth';

export function FoundingMembers() {
  return (
    <section className="section-space border-y border-border bg-warm" aria-labelledby="founding-members-title">
      <div className="page-container">
        <div className="founding-panel">
          <div className="max-w-2xl">
            <p className="eyebrow">Founding members</p>
            <h2 id="founding-members-title" className="section-title mt-4">Help shape the first chapter of MISNÖ.</h2>
            <p className="mt-5 body-muted">The first 100 members will be invited to share early feedback, join private conversations, and leave their mark on the community as it grows.</p>
          </div>
          <Button size="lg" onClick={openSignup} className="w-full sm:w-auto">
            Become a founding member
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
