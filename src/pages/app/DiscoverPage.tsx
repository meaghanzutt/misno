import { ExperienceCard } from '../../components/ExperienceCard';
import { Card } from '../../components/Card';
import { MemberMark } from '../../components/MemberMark';
import { experiences, people } from '../../lib/data';

export function DiscoverPage(){return <div className="mx-auto max-w-6xl"><p className="eyebrow">Discover</p><h1 className="page-title mt-3">Explore what feels like you.</h1><div className="mt-8 flex gap-2 overflow-x-auto pb-2">{['Experiences','Neighborhoods','Circles','People'].map((x,i)=><button key={x} className={`rounded-full border px-4 py-2 text-sm ${i===0?'border-ink bg-ink text-white':'border-border bg-white text-muted'}`}>{x}</button>)}</div><div className="mt-8 grid gap-5 md:grid-cols-3">{experiences.map(e=><ExperienceCard key={e.id} experience={e}/>)}</div><h2 className="mt-12 section-title">People nearby</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{people.map(p=><Card className="p-5" key={p.id}><MemberMark name={p.name} membership={p.membership}/><p className="mt-1 text-sm text-muted">{p.city}</p><p className="mt-4 text-sm leading-6">{p.bio}</p></Card>)}</div></div>}
