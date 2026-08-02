import { ArrowRight, MapPin, Users } from 'lucide-react';
import { Button, ButtonLink } from '../../components/Button';
import { openSignup } from '../../lib/auth';

const previewItems = [
  {
    title: 'Coffee Passport',
    meta: 'North Park · Saturday, 10:00 AM',
    members: '24 people',
  },
  {
    title: 'Sunrise Club',
    meta: 'Mission Bay · Sunday, 6:30 AM',
    members: '18 people',
  },
  {
    title: 'Weekend Adventures',
    meta: 'San Diego · Twice monthly',
    members: '42 people',
  },
] as const;

export function Hero() {
  return (
    <section className="hero-section overflow-hidden" aria-labelledby="home-hero-title">
      <div className="page-container grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.08fr_.92fr] lg:gap-16 lg:py-28">
        <div className="hero-reveal max-w-3xl">
          <p className="eyebrow">Real people. Meaningful experiences.</p>
          <h1 id="home-hero-title" className="hero-title mt-5">
            Community shouldn’t be hard to find.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            Discover meaningful experiences, meet people who share your interests, and build genuine communities online and in person.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" onClick={openSignup} className="w-full sm:w-auto">
              Join free
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <ButtonLink to="/app/discover" variant="secondary" size="lg" className="w-full sm:w-auto">
              Explore experiences
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm leading-6 text-muted">
            Start with a free Community membership. No enrollment fee.
          </p>
        </div>

        <div className="hero-reveal hero-reveal-delay" aria-label="Featured MISNÖ experiences">
          <div className="rounded-[24px] border border-border bg-white p-4 shadow-soft sm:p-6">
            <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
              <div>
                <p className="text-sm font-semibold text-ink">Happening soon</p>
                <p className="mt-1 text-sm text-muted">A simple glimpse of the community.</p>
              </div>
              <span className="inline-flex rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">
                San Diego
              </span>
            </div>

            <div className="divide-y divide-border">
              {previewItems.map((item) => (
                <div key={item.title} className="group grid gap-3 py-5 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <h2 className="text-base font-semibold tracking-[-0.01em] text-ink transition group-hover:text-forest">
                      {item.title}
                    </h2>
                    <p className="mt-2 flex items-center gap-2 text-sm text-muted">
                      <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {item.meta}
                    </p>
                  </div>
                  <p className="flex items-center gap-2 text-sm font-medium text-muted">
                    <Users className="h-4 w-4" aria-hidden="true" />
                    {item.members}
                  </p>
                </div>
              ))}
            </div>

            <ButtonLink to="/app/discover" variant="ghost" className="mt-1 w-full justify-between border-t border-border pt-5">
              See what’s happening
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
