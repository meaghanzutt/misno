import type { HTMLAttributes, ReactNode } from 'react';

export function Section({ children, className = '', tone = 'white', ...props }: HTMLAttributes<HTMLElement> & { children: ReactNode; tone?: 'white' | 'soft' | 'warm' }) {
  const tones = { white: 'bg-white', soft: 'bg-surface', warm: 'bg-warm' };
  return <section className={`py-16 sm:py-24 ${tones[tone]} ${className}`} {...props}>{children}</section>;
}
