import { Coffee, MessageCircle, Palette } from 'lucide-react';

const communityItems = [
  {
    icon: MessageCircle,
    title: 'Live conversations',
    description: 'Drop into relaxed rooms built around shared interests, honest conversation, and meeting new people.',
  },
  {
    icon: Coffee,
    title: 'Local experiences',
    description: 'Find simple plans nearby, from coffee meetups to weekend gatherings that are easy to join.',
  },
  {
    icon: Palette,
    title: 'Creative collaboration',
    description: 'Bring ideas, contribute your perspective, and help shape experiences with other community members.',
  },
] as const;

export function CommunityGallery() {
  return (
    <section className="section-space border-y border-border bg-surface" aria-labelledby="community-gallery-title">
      <div className="page-container">
        <div className="max-w-2xl">
          <p className="eyebrow">Community in action</p>
          <h2 id="community-gallery-title" className="section-title mt-4">Built around things people actually want to do.</h2>
          <p className="mt-4 body-muted">No forced networking. No endless feed. Just clear ways to connect and participate.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {communityItems.map(({ icon: Icon, title, description }, index) => (
            <article key={title} className="community-action-card">
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-white text-forest shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold text-muted">0{index + 1}</span>
              </div>
              <h3 className="mt-10 text-xl font-semibold tracking-[-0.025em]">{title}</h3>
              <p className="mt-4 text-base leading-7 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
