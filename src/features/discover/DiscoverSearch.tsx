import { Search, X } from 'lucide-react';

interface DiscoverSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function DiscoverSearch({ value, onChange }: DiscoverSearchProps) {
  return (
    <label className="discover-search">
      <span className="sr-only">Search Discover</span>
      <Search className="h-5 w-5 text-muted" aria-hidden="true" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search experiences, neighborhoods, circles, or people"
      />
      {value ? (
        <button type="button" onClick={() => onChange('')} aria-label="Clear search">
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      ) : null}
    </label>
  );
}
