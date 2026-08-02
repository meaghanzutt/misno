import { ArrowRight } from 'lucide-react';
import { Button, ButtonLink } from '../../components/Button';
import { openSignup } from '../../lib/auth';

export function Hero() {
  return (
    <section className="hero-section overflow-hidden" aria-labelledby="home-hero-title">
      <div className="page-container grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.02fr_.98fr] lg:gap-20 lg:py-28">
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
          <p className="mt-5 text-sm leading-6 text-muted">
            Start with a free Community membership. No enrollment fee.
          </p>
        </div>

        <div className="hero-reveal hero-reveal-delay">
          <div className="hero-photo-frame">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=82"
              alt="A small group gathering around a table and sharing ideas"
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
            <div className="hero-photo-caption">
              <p className="text-sm font-semibold text-ink">Built around real moments.</p>
              <p className="mt-1 text-sm leading-6 text-muted">Coffee, conversations, creative work, and experiences worth showing up for.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
