import type { DiscoverCategory } from '../../lib/discoverData';

const categories: DiscoverCategory[] = ['All', 'Coffee', 'Creative', 'Outdoors', 'Culture', 'Volunteer'];

interface CategoryFiltersProps {
  active: DiscoverCategory;
  onChange: (category: DiscoverCategory) => void;
}

export function CategoryFilters({ active, onChange }: CategoryFiltersProps) {
  return (
    <div className="category-filters" aria-label="Filter experiences by category">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          aria-pressed={active === category}
          className={active === category ? 'is-active' : ''}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
