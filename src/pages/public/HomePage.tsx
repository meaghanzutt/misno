import { ExperienceCard } from '../../components/ExperienceCard';
import { MembershipCard } from '../../components/MembershipCard';
import { experiences, memberships } from '../../lib/data';
import { Hero } from '../../features/home/Hero';

export function HomePage() {
  return <>
    <Hero />
    <section id="experiences" className="section-space border-y border-border bg-surface"><div className="page-container"><p className="eyebrow">Featured experiences</p><div className="mt-4 flex items-end justify-between gap-5"><div><h2 className="section-title">Start with something you already enjoy.</h2><p className="mt-3 body-muted">Experiences bring the people, conversations, rooms, and meetups together.</p></div></div><div className="mt-10 grid gap-5 md:grid-cols-3">{experiences.map(e=><ExperienceCard key={e.id} experience={e}/>)}</div></div></section>
    <section id="memberships" className="section-space"><div className="page-container"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Memberships</p><h2 className="section-title mt-4">Start free. Grow as you become more involved.</h2><p className="mt-4 body-muted">Membership represents contribution, not status.</p></div><div className="mt-10 space-y-5"><MembershipCard plan={memberships[0]} wide/><div className="grid gap-5 md:grid-cols-2"><MembershipCard plan={memberships[1]}/><MembershipCard plan={memberships[2]}/></div><div className="grid gap-5 md:grid-cols-2"><MembershipCard plan={memberships[3]}/><MembershipCard plan={memberships[4]}/></div></div></div></section>
    <section className="section-space border-t border-border bg-surface"><div className="page-container grid gap-10 md:grid-cols-3"><div><span className="text-sm font-semibold">01</span><h3 className="mt-4 text-xl font-semibold">Discover</h3><p className="mt-3 body-muted">Find experiences, neighborhoods, circles, and people.</p></div><div><span className="text-sm font-semibold">02</span><h3 className="mt-4 text-xl font-semibold">Participate</h3><p className="mt-3 body-muted">Join the conversation, attend a meetup, or enter a room.</p></div><div><span className="text-sm font-semibold">03</span><h3 className="mt-4 text-xl font-semibold">Contribute</h3><p className="mt-3 body-muted">Earn access to Workspace and help create the community.</p></div></div></section>
  </>;
}
