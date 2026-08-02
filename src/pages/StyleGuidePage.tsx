import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { MemberMark } from '../components/MemberMark';
import { ExperienceCard } from '../components/ExperienceCard';
import { MembershipCard } from '../components/MembershipCard';
import { experiences, memberships } from '../lib/data';

export function StyleGuidePage(){return <div className="min-h-screen bg-white"><div className="page-container py-16"><p className="eyebrow">Internal reference</p><h1 className="display-title mt-4">MISNÖ Style Guide</h1><p className="mt-5 max-w-2xl body-muted">The living visual source of truth for the public website, community app, Workspace, and Admin.</p>
<section className="mt-16"><h2 className="section-title">Color</h2><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{[['White','#FFFFFF'],['Surface','#FAFAFA'],['Ink','#111111'],['Muted','#6B7280'],['Forest','#2F5D50']].map(([n,c])=><div key={n}><div className="h-24 rounded-card border border-border" style={{background:c}}/><p className="mt-3 font-semibold">{n}</p><p className="text-sm text-muted">{c}</p></div>)}</div></section>
<section className="mt-16"><h2 className="section-title">Typography</h2><Card className="mt-6 space-y-7 p-8"><p className="display-title">Display title</p><p className="page-title">Page title</p><p className="section-title">Section title</p><p className="body-muted">Body text is comfortable, calm, and intentionally readable. It should never fight the content.</p></Card></section>
<section className="mt-16"><h2 className="section-title">Buttons</h2><div className="mt-6 flex flex-wrap gap-3"><Button>Primary action</Button><Button variant="secondary">Secondary action</Button><Button variant="ghost">Text action</Button><Button disabled>Disabled</Button></div></section>
<section className="mt-16"><h2 className="section-title">Membership marks</h2><Card className="mt-6 flex flex-wrap gap-8 p-8"><MemberMark name="Community" membership="community"/><MemberMark name="Member" membership="member"/><MemberMark name="Contributor" membership="contributor"/><MemberMark name="Partner" membership="partner"/><MemberMark name="Executive" membership="executive"/></Card></section>
<section className="mt-16"><h2 className="section-title">Forms</h2><Card className="mt-6 grid gap-5 p-8 md:grid-cols-2"><label className="text-sm font-medium">Input<input className="mt-2 w-full rounded-xl border border-border px-4 py-3" placeholder="Clear placeholder"/></label><label className="text-sm font-medium">Select<select className="mt-2 w-full rounded-xl border border-border px-4 py-3"><option>Choose an option</option></select></label><label className="text-sm font-medium md:col-span-2">Textarea<textarea className="mt-2 w-full rounded-xl border border-border px-4 py-3" rows={4}/></label></Card></section>
<section className="mt-16"><h2 className="section-title">Experience card</h2><div className="mt-6 max-w-sm"><ExperienceCard experience={experiences[0]}/></div></section>
<section className="mt-16"><h2 className="section-title">Membership card</h2><div className="mt-6 max-w-xl"><MembershipCard plan={memberships[2]}/></div></section>
</div></div>}
