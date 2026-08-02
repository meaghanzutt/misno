import { Search } from 'lucide-react';
import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

const baseControl = 'mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-ink placeholder:text-zinc-400 transition hover:border-zinc-300 focus:border-forest focus:outline-none focus:ring-4 focus:ring-forest/10 disabled:cursor-not-allowed disabled:bg-surface disabled:text-muted';

export function InputField({ label, hint, error, id, className = '', ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string; hint?: string; error?: string }) {
  const inputId = id ?? `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  return (
    <label htmlFor={inputId} className="block text-sm font-medium text-ink">
      {label}
      <input id={inputId} className={`${baseControl} ${error ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : ''} ${className}`} aria-invalid={Boolean(error)} aria-describedby={hint || error ? `${inputId}-help` : undefined} {...props} />
      {(hint || error) && <span id={`${inputId}-help`} className={`mt-2 block text-sm ${error ? 'text-red-600' : 'text-muted'}`}>{error ?? hint}</span>}
    </label>
  );
}

export function TextareaField({ label, hint, id, className = '', ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; hint?: string }) {
  const inputId = id ?? `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  return (
    <label htmlFor={inputId} className="block text-sm font-medium text-ink">
      {label}
      <textarea id={inputId} className={`${baseControl} min-h-28 resize-y ${className}`} aria-describedby={hint ? `${inputId}-help` : undefined} {...props} />
      {hint && <span id={`${inputId}-help`} className="mt-2 block text-sm text-muted">{hint}</span>}
    </label>
  );
}

export function SelectField({ label, id, className = '', children, ...props }: SelectHTMLAttributes<HTMLSelectElement> & { label: string }) {
  const inputId = id ?? `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  return (
    <label htmlFor={inputId} className="block text-sm font-medium text-ink">
      {label}
      <select id={inputId} className={`${baseControl} ${className}`} {...props}>{children}</select>
    </label>
  );
}

export function SearchField({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={`relative block ${className}`}>
      <span className="sr-only">Search</span>
      <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
      <input type="search" className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 text-sm text-ink placeholder:text-zinc-400 transition hover:border-zinc-300 focus:border-forest focus:outline-none focus:ring-4 focus:ring-forest/10" {...props} />
    </label>
  );
}
