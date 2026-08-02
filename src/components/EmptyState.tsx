import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { ButtonLink } from './Button';

export function EmptyState({ icon: Icon, title, description, actionLabel, actionTo, children }: { icon: LucideIcon; title: string; description: string; actionLabel?: string; actionTo?: string; children?: ReactNode }) {
  return (
    <div className="rounded-card border border-dashed border-border bg-white px-6 py-12 text-center">
      <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface text-muted"><Icon className="h-5 w-5" /></span>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mx-auto mt-2 max-w-md body-muted">{description}</p>
      {actionLabel && actionTo && <ButtonLink to={actionTo} className="mt-6">{actionLabel}</ButtonLink>}
      {children}
    </div>
  );
}
