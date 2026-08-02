import type { Membership } from '../types';

const tones: Record<Membership, string> = {
  community: 'text-zinc-400',
  member: 'text-forest',
  contributor: 'text-teal-700',
  partner: 'text-amber-600',
  executive: 'text-amber-600 drop-shadow-[0_0_3px_rgba(217,119,6,.25)]'
};

export function MemberMark({ membership, name }: { membership: Membership; name: string }) {
  return <span className="inline-flex items-center gap-1.5 font-semibold">{name}<span className={`${tones[membership]} font-bold`} title={`${membership} membership`}>Ö</span></span>;
}
