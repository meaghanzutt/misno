import { ExperienceCard } from '../../components/ExperienceCard';
import { experiences } from '../../lib/data';

export function FeaturedExperiences() {
  return (
    <section id="experiences" className="section-space border-y border-border bg-surface" aria-labelledby="featured-experiences-title">
      <div className="page-container">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Featured experiences</p>
            <h2 id="featured-experiences-title" className="section-title mt-4">Start with something you already enjoy.</h2>
            <p className="mt-4 body-muted">A simple invitation is often all it takes to meet someone new.</p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {experiences.map((experience) => <ExperienceCard key={experience.id} experience={experience} />)}
        </div>
      </div>
    </section>
  );
}
