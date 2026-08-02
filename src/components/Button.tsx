import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost';

const classes: Record<Variant, string> = {
  primary: 'bg-ink text-white hover:bg-forest border-ink',
  secondary: 'bg-white text-ink hover:border-ink border-border',
  ghost: 'bg-transparent text-muted hover:text-ink border-transparent'
};

export function Button({ variant = 'primary', className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={`inline-flex min-h-11 items-center justify-center rounded-xl border px-5 py-2.5 text-sm font-semibold transition ${classes[variant]} ${className}`} {...props} />;
}

export function ButtonLink({ to, children, variant = 'primary', className = '' }: { to: string; children: ReactNode; variant?: Variant; className?: string }) {
  return <Link to={to} className={`inline-flex min-h-11 items-center justify-center rounded-xl border px-5 py-2.5 text-sm font-semibold transition ${classes[variant]} ${className}`}>{children}</Link>;
}
