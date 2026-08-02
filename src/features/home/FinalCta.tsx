import { ArrowRight } from 'lucide-react';
import { Button } from '../../components/Button';
import { openSignup } from '../../lib/auth';

export function FinalCta() {
  return (
    <section className="section-space" aria-labelledby="final-cta-title">
      <div className="page-container text-center">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Your place is here</p>
          <h2 id="final-cta-title" className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">Ready to find your people?</h2>
          <p className="mx-auto mt-5 max-w-2xl body-muted">Join for free, explore the community, and decide where you want to show up.</p>
          <Button size="lg" onClick={openSignup} className="mt-8">
            Join the community
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
