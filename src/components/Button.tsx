import { LoaderCircle } from 'lucide-react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg' | 'icon';

const classes: Record<Variant, string> = {
  primary: 'border-ink bg-ink text-white hover:border-forest hover:bg-forest',
  secondary: 'border-border bg-white text-ink hover:border-ink',
  ghost: 'border-transparent bg-transparent text-muted hover:bg-surface hover:text-ink',
  danger: 'border-red-600 bg-red-600 text-white hover:border-red-700 hover:bg-red-700',
};

const sizes: Record<Size, string> = {
  sm: 'min-h-9 px-3.5 py-2 text-sm',
  md: 'min-h-11 px-5 py-2.5 text-sm',
  lg: 'min-h-12 px-6 py-3 text-base',
  icon: 'h-11 w-11 p-0',
};

export function Button({ variant = 'primary', size = 'md', loading = false, className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size; loading?: boolean }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl border font-semibold transition duration-150 disabled:cursor-not-allowed disabled:opacity-50 ${classes[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  );
}

export function ButtonLink({ to, children, variant = 'primary', size = 'md', className = '' }: { to: string; children: ReactNode; variant?: Variant; size?: Size; className?: string }) {
  return <Link to={to} className={`inline-flex items-center justify-center gap-2 rounded-xl border font-semibold transition duration-150 ${classes[variant]} ${sizes[size]} ${className}`}>{children}</Link>;
}
