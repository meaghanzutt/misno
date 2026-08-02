import { ArrowRight, CalendarDays, Coffee, MessageCircle, Users } from 'lucide-react';
import { Button, ButtonLink } from '../../components/Button';
import { MemberMark } from '../../components/MemberMark';
import { openSignup } from '../../lib/auth';

const previewItems = [
  { icon: Coffee, title: 'Coffee & Conversation', meta: 'Saturday · North Park', people: '24 people' },
  { icon: MessageCircle, title: 'Community Space', meta: 'Thursday · Online', people: '18 people' },
];

export function Hero() {
  return (
    <section className="hero-section overflow-hidden" aria-labelledby="home-hero-title">
      <div className="page-container grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:py-28">
        <div className="hero-reveal max-w-3xl">
          <p className="eyebrow">Misfits &amp; Nomads</p>
          <h1 id="home-hero-title" className="hero-title mt-5">
            Not everyone fits in. <span className="text-forest">That’s the point.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            A creative community for people who think differently, build boldly, and believe the best experiences are shared.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" onClick={openSignup} className="w-full sm:w-auto">
              Join the community
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <ButtonLink to="/#experiences" variant="secondary" size="lg" className="w-full sm:w-auto">
              Explore experiences
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm leading-6 text-muted">Start with a free Community membership. No enrollment fee.</p>
        </div>

        <div className="hero-reveal hero-reveal-delay">
          <div className="hero-community-preview" aria-label="Preview of upcoming MISNÖ community activity">
            <div className="flex items-start justify-between gap-6 border-b border-border pb-6">
              <div>
                <p className="eyebrow">Happening soon</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">A simple way to show up.</h2>
              </div>
              <span className="rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">Community</span>
            </div>

            <div className="mt-2 divide-y divide-border">
              {previewItems.map(({ icon: Icon, title, meta, people }) => (
                <div key={title} className="flex items-center gap-4 py-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface text-forest">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-ink">{title}</p>
                    <p className="mt-1 text-sm text-muted">{meta}</p>
                  </div>
                  <p className="hidden text-sm text-muted sm:block">{people}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-border bg-surface p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold shadow-sm">S</div>
                <div>
                  <p className="text-sm font-semibold text-ink">Hosted by <MemberMark name="Sarah" membership="contributor" /></p>
                  <p className="mt-1 text-sm text-muted">Relaxed, welcoming, and built around real conversation.</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4 text-sm text-muted">
                <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4" aria-hidden="true" />This weekend</span>
                <span className="flex items-center gap-2"><Users className="h-4 w-4" aria-hidden="true" />Small groups</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
