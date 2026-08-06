import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { EmptyState } from '../../components/EmptyState';
import { DraftCard } from '../../features/studio/components/DraftCard';
import { ResourceCard } from '../../features/studio/components/ResourceCard';
import { UpcomingExperienceCard } from '../../features/studio/components/UpcomingExperienceCard';
import { WorkspaceHero } from '../../features/studio/components/WorkspaceHero';
import { studioDrafts, studioResources, studioUpcoming, type StudioDraft, type StudioUpcoming } from '../../demo/studio';
import { getStudioExperiences } from '../../lib/studioStorage';

function formatDate(date: string, time: string) {
  if (!date) return 'Date to be confirmed';
  const value = new Date(`${date}T${time || '12:00'}`);
  if (Number.isNaN(value.getTime())) return date;
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' }).format(value);
}

export function StudioHomePage() {
  const [drafts, setDrafts] = useState<StudioDraft[]>(studioDrafts);
  const [upcoming, setUpcoming] = useState<StudioUpcoming[]>(studioUpcoming);

  useEffect(() => {
    const saved = getStudioExperiences();
    const savedDrafts: StudioDraft[] = saved.filter((item) => item.status === 'draft').map((item) => ({
      id: item.id,
      title: item.title || 'Untitled experience',
      category: item.category,
      updatedAt: 'Saved in your browser',
      progress: [item.title, item.location, item.date, item.description].filter(Boolean).length * 25,
    }));
    const savedUpcoming: StudioUpcoming[] = saved.filter((item) => item.status === 'published').map((item) => ({
      id: item.id,
      title: item.title,
      date: formatDate(item.date, item.time),
      location: item.location,
      registered: 0,
      capacity: item.capacity,
    }));
    if (savedDrafts.length) setDrafts([...savedDrafts, ...studioDrafts.filter((demo) => !savedDrafts.some((item) => item.id === demo.id))]);
    if (savedUpcoming.length) setUpcoming([...savedUpcoming, ...studioUpcoming]);
  }, []);

  return (
    <div className="studio-home-page">
      <WorkspaceHero />

      <section className="studio-section" aria-labelledby="drafts-heading">
        <div className="studio-section-heading">
          <div><p className="eyebrow">Drafts</p><h2 id="drafts-heading">Continue where you left off</h2></div>
          <Link to="/workspace/experiences" className="studio-section-link">View all <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        {drafts.length ? <div className="grid gap-5 md:grid-cols-2">{drafts.map(draft => <DraftCard key={draft.id} draft={draft} />)}</div> : <EmptyState icon={Sparkles} title="Your first experience starts here" description="Bring people together around something you care about." actionLabel="Create your first experience" actionTo="/workspace/create" />}
      </section>

      <section className="studio-section" aria-labelledby="upcoming-heading">
        <div className="studio-section-heading">
          <div><p className="eyebrow">Upcoming</p><h2 id="upcoming-heading">People are showing up</h2></div>
          <Link to="/workspace/events" className="studio-section-link">Manage events <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">{upcoming.map(experience => <UpcomingExperienceCard key={experience.id} experience={experience} />)}</div>
      </section>

      <section className="studio-section" aria-labelledby="resources-heading">
        <div className="studio-section-heading">
          <div><p className="eyebrow">Resources</p><h2 id="resources-heading">A little help, right when you need it</h2></div>
          <Link to="/workspace/resources" className="studio-section-link">Browse resources <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">{studioResources.map(resource => <ResourceCard key={resource.id} resource={resource} />)}</div>
      </section>
    </div>
  );
}
