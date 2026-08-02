import { Check } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';
import { openSignup } from '../lib/auth';

export interface MembershipPlan {
  name: string;
  key: string;
  monthly: string;
  enrollment: string;
  bestFor: string;
  description: string;
  features: readonly string[];
  cta: string;
  badge?: string;
}

export function MembershipCard({
  plan,
  featured = false,
  className = '',
}: {
  plan: MembershipPlan;
  featured?: boolean;
  className?: string;
}) {
  const selectPlan = () => {
    localStorage.setItem('misno-selected-plan', plan.key);
    openSignup();
  };

  return (
    <Card
      className={`membership-card group relative flex h-full flex-col overflow-hidden p-8 sm:p-10 ${
        featured ? 'membership-card-featured' : ''
      } ${className}`}
    >
      <div className="flex min-h-8 items-start justify-between gap-5">
        <h3 className="text-2xl font-semibold tracking-[-0.025em] text-ink sm:text-[1.75rem]">
          {plan.name}
        </h3>
        {plan.badge && (
          <span className="shrink-0 rounded-full border border-forest/20 bg-forest/5 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-forest">
            {plan.badge}
          </span>
        )}
      </div>

      <div className="mt-7 border-b border-border pb-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Best for</p>
        <p className="mt-2 text-base font-semibold leading-6 text-ink">{plan.bestFor}</p>
        <p className="mt-4 min-h-[3.5rem] text-sm leading-6 text-muted sm:text-base">
          {plan.description}
        </p>
      </div>

      <div className="border-b border-border py-8">
        <div className="flex flex-wrap items-end gap-x-2 gap-y-1">
          <span className="text-5xl font-semibold tracking-[-0.055em] text-ink sm:text-6xl">
            {plan.monthly}
          </span>
          {plan.monthly !== 'Free' && (
            <span className="pb-1.5 text-base font-medium text-muted">/month</span>
          )}
        </div>
        <p className="mt-4 text-sm leading-6 text-muted">{plan.enrollment}</p>
      </div>

      <div className="flex flex-1 flex-col pt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Included</p>
        <ul className="mt-5 space-y-4 text-sm leading-6 text-ink sm:text-[0.95rem]">
          {plan.features.map((feature) => (
            <li key={feature} className="flex gap-3.5">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest/[0.08]">
                <Check className="h-3.5 w-3.5 text-forest" aria-hidden="true" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          onClick={selectPlan}
          size="lg"
          className="mt-10 min-h-14 w-full text-[0.95rem] sm:mt-12"
          aria-label={`${plan.cta}: ${plan.name} membership`}
        >
          {plan.cta}
        </Button>
      </div>
    </Card>
  );
}
