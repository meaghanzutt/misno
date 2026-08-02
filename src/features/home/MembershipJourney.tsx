import { ArrowRight } from 'lucide-react';
import { ButtonLink } from '../../components/Button';
import { memberships } from '../../lib/data';

export function MembershipJourney() {
  return (
    <section id="memberships" className="section-space" aria-labelledby="membership-journey-title">
      <div className="page-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Membership journey</p>
          <h2 id="membership-journey-title" className="section-title mt-4">Choose how you want to participate.</h2>
          <p className="mt-4 body-muted">Start free. Take on more responsibility as your involvement grows.</p>
        </div>
        <ol className="membership-journey mt-12" aria-label="MISNÖ membership progression">
          {memberships.map((plan, index) => (
            <li key={plan.key} className="membership-journey-item">
              <div>
                <p className="text-sm font-semibold text-ink">{plan.name}</p>
                <p className="mt-1 text-sm text-muted">{plan.monthly === 'Free' ? 'Free' : `${plan.monthly}/month`}</p>
              </div>
              {index < memberships.length - 1 && <ArrowRight className="membership-journey-arrow h-4 w-4 text-muted" aria-hidden="true" />}
            </li>
          ))}
        </ol>
        <div className="mt-10 flex justify-center">
          <ButtonLink to="/memberships" variant="secondary" size="lg">View memberships</ButtonLink>
        </div>
      </div>
    </section>
  );
}
