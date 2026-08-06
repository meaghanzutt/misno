import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EmptyState } from '../../components/EmptyState';
import { DraftCard } from '../../features/studio/components/DraftCard';
import { ResourceCard } from '../../features/studio/components/ResourceCard';
import { UpcomingExperienceCard } from '../../features/studio/components/UpcomingExperienceCard';
import { WorkspaceHero } from '../../features/studio/components/WorkspaceHero';
import { studioDrafts, studioResources, studioUpcoming } from '../../demo/studio';

export function StudioHomePage() {
  return (
    <div className="studio-home-page">
      <WorkspaceHero />

      <section className="studio-section" aria-labelledby="drafts-heading">
        <div className="studio-section-heading">
          <div><p className="eyebrow">Drafts</p><h2 id="drafts-heading">Continue where you left off</h2></div>
          <Link to="/workspace/experiences" className="studio-section-link">View all <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        {studioDrafts.length ? <div className="grid gap-5 md:grid-cols-2">{studioDrafts.map(draft => <DraftCard key={draft.id} draft={draft} />)}</div> : <EmptyState icon={Sparkles} title="Your first experience starts here" description="Bring people together around something you care about." actionLabel="Create your first experience" actionTo="/workspace/experiences" />}
      </section>

      <section className="studio-section" aria-labelledby="upcoming-heading">
        <div className="studio-section-heading">
          <div><p className="eyebrow">Upcoming</p><h2 id="upcoming-heading">People are showing up</h2></div>
          <Link to="/workspace/events" className="studio-section-link">Manage events <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">{studioUpcoming.map(experience => <UpcomingExperienceCard key={experience.id} experience={experience} />)}</div>
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
