import type { ReactNode } from 'react';

export function PageHeader({ eyebrow, title, description, action, align = 'left' }: { eyebrow?: string; title: string; description?: string; action?: ReactNode; align?: 'left' | 'center' }) {
  const alignment = align === 'center' ? 'mx-auto items-center text-center' : 'items-start';
  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="page-title mt-3 first:mt-0">{title}</h1>
      {description && <p className="mt-4 body-muted">{description}</p>}
      {action && <div className="mt-7">{action}</div>}
    </div>
  );
}
