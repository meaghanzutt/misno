import { CommunityGallery } from '../../features/home/CommunityGallery';
import { FeaturedExperiences } from '../../features/home/FeaturedExperiences';
import { FinalCta } from '../../features/home/FinalCta';
import { FoundingMembers } from '../../features/home/FoundingMembers';
import { Hero } from '../../features/home/Hero';
import { MembershipJourney } from '../../features/home/MembershipJourney';
import { Values } from '../../features/home/Values';

export function HomePage() {
  return (
    <>
      <Hero />
      <CommunityGallery />
      <Values />
      <FeaturedExperiences />
      <MembershipJourney />
      <FoundingMembers />
      <FinalCta />
    </>
  );
}
