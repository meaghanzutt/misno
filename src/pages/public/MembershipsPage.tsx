import { ArrowRight } from 'lucide-react';
import { MembershipCard } from '../../components/MembershipCard';
import { Button } from '../../components/Button';
import { memberships } from '../../lib/data';
import { openSignup } from '../../lib/auth';

export function MembershipsPage() {
  const joinCommunity = () => {
    localStorage.setItem('misno-selected-plan', 'community');
    openSignup();
  };

  return (
    <>
      <section className="border-b border-border bg-white py-20 sm:py-28">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Memberships</p>
            <h1 className="display-title mt-5">Choose how you&apos;ll be part of the community.</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
              Start free, then grow into deeper contribution and leadership as your involvement expands.
            </p>
          </div>
        </div>
      </section>

      <section className="membership-section bg-surface/60 py-16 sm:py-24">
        <div className="page-container">
          <div className="grid gap-8 lg:grid-cols-2">
            <MembershipCard plan={memberships[0]} />
            <MembershipCard plan={memberships[1]} />
            <MembershipCard plan={memberships[2]} featured />
            <MembershipCard plan={memberships[3]} />
            <MembershipCard plan={memberships[4]} className="lg:col-span-2 lg:mx-auto lg:w-[calc(50%-1rem)]" />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white py-20 sm:py-28">
        <div className="page-container">
          <div className="mx-auto max-w-3xl rounded-[1.5rem] border border-border bg-white px-7 py-12 text-center shadow-soft sm:px-12 sm:py-16">
            <p className="eyebrow">Still deciding?</p>
            <h2 className="section-title mt-4">Start with Community. Upgrade when you&apos;re ready.</h2>
            <p className="mx-auto mt-4 max-w-xl body-muted">
              There is no enrollment fee for Community membership, and you can explore public experiences before choosing a deeper level of involvement.
            </p>
            <Button onClick={joinCommunity} size="lg" className="mt-8 min-h-14 px-8">
              Join the Community <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
