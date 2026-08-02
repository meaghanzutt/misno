export type DiscoverTab = 'Experiences' | 'Neighborhoods' | 'Circles' | 'People';

interface DiscoverTabsProps {
  active: DiscoverTab;
  onChange: (tab: DiscoverTab) => void;
}

const tabs: DiscoverTab[] = ['Experiences', 'Neighborhoods', 'Circles', 'People'];

export function DiscoverTabs({ active, onChange }: DiscoverTabsProps) {
  return (
    <div className="discover-tabs" role="tablist" aria-label="Discover content">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          role="tab"
          aria-selected={active === tab}
          className={active === tab ? 'is-active' : ''}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
