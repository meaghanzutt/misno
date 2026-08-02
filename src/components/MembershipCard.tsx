import { Check } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';
import { openSignup } from '../lib/auth';

interface Plan {
  name: string; key: string; monthly: string; enrollment: string; description: string; features: readonly string[]; cta: string; badge?: string;
}

export function MembershipCard({ plan, wide = false }: { plan: Plan; wide?: boolean }) {
  const selectPlan = () => {
    localStorage.setItem('misno-selected-plan', plan.key);
    openSignup();
  };
  return (
    <Card className={`flex h-full flex-col p-7 sm:p-8 ${wide ? 'md:grid md:grid-cols-[1fr_1.2fr] md:gap-12' : ''}`}>
      <div>
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold">{plan.name}</h3>
          {plan.badge && <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-forest">{plan.badge}</span>}
        </div>
        <div className="mt-6 text-4xl font-semibold tracking-tight">{plan.monthly}</div>
        <p className="mt-2 text-sm text-muted">{plan.enrollment}</p>
        <p className="mt-6 body-muted">{plan.description}</p>
      </div>
      <div className="mt-8 flex flex-col md:mt-0">
        <ul className="space-y-3 text-sm">
          {plan.features.map((feature) => <li key={feature} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" />{feature}</li>)}
        </ul>
        <Button onClick={selectPlan} className="mt-8 w-full md:mt-auto">{plan.cta}</Button>
      </div>
    </Card>
  );
}
