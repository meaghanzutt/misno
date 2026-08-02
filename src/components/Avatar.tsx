import type { Membership } from '../types';

const ringClasses: Record<Membership, string> = {
  community: 'ring-zinc-200',
  member: 'ring-forest/30',
  contributor: 'ring-teal-300',
  partner: 'ring-amber-300',
  executive: 'ring-amber-400',
};

export function Avatar({ name, src, membership = 'community', size = 'md' }: { name: string; src?: string; membership?: Membership; size?: 'sm' | 'md' | 'lg' }) {
  const initials = name.split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase();
  const sizes = { sm: 'h-8 w-8 text-xs', md: 'h-11 w-11 text-sm', lg: 'h-16 w-16 text-lg' };

  return src ? (
    <img src={src} alt={`${name} profile`} className={`${sizes[size]} rounded-full object-cover ring-2 ${ringClasses[membership]}`} />
  ) : (
    <span aria-label={`${name} profile`} className={`${sizes[size]} inline-flex items-center justify-center rounded-full bg-surface font-semibold text-ink ring-2 ${ringClasses[membership]}`}>
      {initials}
    </span>
  );
}
