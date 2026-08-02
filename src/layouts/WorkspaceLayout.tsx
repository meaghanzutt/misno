import { NavLink, Outlet } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const tabs = [['Overview', '/workspace'], ['Experiences', '/workspace/experiences'], ['Rooms', '/workspace/rooms'], ['Events', '/workspace/events'], ['Resources', '/workspace/resources']];

export function WorkspaceLayout() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-border"><div className="page-container flex min-h-18 items-center justify-between py-4"><div><p className="eyebrow">Workspace</p><h1 className="text-xl font-semibold">NÖMAD Studio</h1></div><NavLink to="/app" className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink"><ArrowLeft className="h-4 w-4" />Back to community</NavLink></div></header>
      <div className="page-container grid gap-8 py-8 lg:grid-cols-[220px_1fr]">
        <nav className="space-y-1" aria-label="Workspace navigation">{tabs.map(([label,to]) => <NavLink key={to} to={to} end={to==='/workspace'} className={({isActive}) => `block rounded-xl px-3 py-2.5 text-sm font-medium ${isActive?'bg-surface text-ink':'text-muted hover:bg-surface hover:text-ink'}`}>{label}</NavLink>)}</nav>
        <main><Outlet /></main>
      </div>
    </div>
  );
}
