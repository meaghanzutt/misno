import type { ReactNode } from 'react';

export interface TabItem {
  id: string;
  label: string;
}

export function Tabs({ items, activeId, onChange, ariaLabel = 'Section navigation' }: { items: TabItem[]; activeId: string; onChange: (id: string) => void; ariaLabel?: string }) {
  return (
    <div role="tablist" aria-label={ariaLabel} className="flex flex-wrap gap-1 rounded-xl border border-border bg-surface p-1">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          role="tab"
          aria-selected={item.id === activeId}
          onClick={() => onChange(item.id)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${item.id === activeId ? 'bg-white text-ink shadow-sm' : 'text-muted hover:text-ink'}`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export function TabPanel({ id, activeId, children }: { id: string; activeId: string; children: ReactNode }) {
  if (id !== activeId) return null;
  return <div role="tabpanel" className="mt-6">{children}</div>;
}
