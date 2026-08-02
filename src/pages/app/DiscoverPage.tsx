import { useMemo, useState } from 'react';
import { Compass, SlidersHorizontal } from 'lucide-react';
import { ExperienceCard } from '../../components/ExperienceCard';
import { Button } from '../../components/Button';
import { EmptyState } from '../../components/EmptyState';
import { PageHeader } from '../../design/components/PageHeader';
import { Section } from '../../design/components/Section';
import { CategoryFilters } from '../../features/discover/CategoryFilters';
import { CircleCard } from '../../features/discover/CircleCard';
import { DiscoverSearch } from '../../features/discover/DiscoverSearch';
import { DiscoverTabs, type DiscoverTab } from '../../features/discover/DiscoverTabs';
import { NeighborhoodCard } from '../../features/discover/NeighborhoodCard';
import { PersonCard } from '../../features/discover/PersonCard';
import {
  circles,
  discoverExperiences,
  discoverPeople,
  neighborhoods,
  type DiscoverCategory,
} from '../../lib/discoverData';

export function DiscoverPage() {
  const [activeTab, setActiveTab] = useState<DiscoverTab>('Experiences');
  const [activeCategory, setActiveCategory] = useState<DiscoverCategory>('All');
  const [search, setSearch] = useState('');
  const normalizedSearch = search.trim().toLowerCase();

  const filteredExperiences = useMemo(() => discoverExperiences.filter((experience) => {
    const matchesCategory = activeCategory === 'All' || experience.category === activeCategory;
    const matchesSearch = !normalizedSearch || [experience.title, experience.description, experience.location, experience.category, experience.host]
      .some((value) => value.toLowerCase().includes(normalizedSearch));
    return matchesCategory && matchesSearch;
  }), [activeCategory, normalizedSearch]);

  const filteredNeighborhoods = neighborhoods.filter((neighborhood) => !normalizedSearch || [neighborhood.name, neighborhood.city, neighborhood.description]
    .some((value) => value.toLowerCase().includes(normalizedSearch)));
  const filteredCircles = circles.filter((circle) => !normalizedSearch || [circle.name, circle.description, circle.category]
    .some((value) => value.toLowerCase().includes(normalizedSearch)));
  const filteredPeople = discoverPeople.filter((person) => !normalizedSearch || [person.name, person.city, person.bio, ...person.interests]
    .some((value) => value.toLowerCase().includes(normalizedSearch)));

  const hasResults = activeTab === 'Experiences'
    ? filteredExperiences.length > 0
    : activeTab === 'Neighborhoods'
      ? filteredNeighborhoods.length > 0
      : activeTab === 'Circles'
        ? filteredCircles.length > 0
        : filteredPeople.length > 0;

  return (
    <div className="discover-page">
      <PageHeader
        eyebrow="Discover"
        title="Find something worth showing up for."
        description="Explore experiences, local neighborhoods, interest-based circles, and people who make the community feel alive."
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <DiscoverSearch value={search} onChange={setSearch} />
        <button className="discover-location-button" type="button">
          <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
          San Diego
        </button>
      </div>

      <div className="mt-8 border-b border-border">
        <DiscoverTabs active={activeTab} onChange={setActiveTab} />
      </div>

      {activeTab === 'Experiences' ? (
        <Section className="px-0 pb-0 pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow">Featured nearby</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">Experiences you can join</h2>
            </div>
            <CategoryFilters active={activeCategory} onChange={setActiveCategory} />
          </div>
          {filteredExperiences.length ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredExperiences.map((experience) => <ExperienceCard key={experience.id} experience={experience} />)}
            </div>
          ) : null}
        </Section>
      ) : null}

      {activeTab === 'Neighborhoods' && filteredNeighborhoods.length ? (
        <Section className="px-0 pb-0 pt-8">
          <p className="eyebrow">Local first</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">Neighborhoods with something happening</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredNeighborhoods.map((neighborhood) => <NeighborhoodCard key={neighborhood.id} neighborhood={neighborhood} />)}
          </div>
        </Section>
      ) : null}

      {activeTab === 'Circles' && filteredCircles.length ? (
        <Section className="px-0 pb-0 pt-8">
          <p className="eyebrow">Shared interests</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">Circles that feel easy to enter</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredCircles.map((circle) => <CircleCard key={circle.id} circle={circle} />)}
          </div>
        </Section>
      ) : null}

      {activeTab === 'People' && filteredPeople.length ? (
        <Section className="px-0 pb-0 pt-8">
          <p className="eyebrow">People nearby</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">Meet people through shared interests</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredPeople.map((person) => <PersonCard key={person.id} person={person} />)}
          </div>
        </Section>
      ) : null}

      {!hasResults ? (
        <div className="mt-10">
          <EmptyState
            icon={Compass}
            title="Nothing matches that search yet"
            description="Try another word, clear the search, or explore a different Discover tab."
          >
            <Button
              className="mt-6"
              onClick={() => {
                setSearch('');
                setActiveCategory('All');
              }}
            >
              Clear search
            </Button>
          </EmptyState>
        </div>
      ) : null}
    </div>
  );
}
