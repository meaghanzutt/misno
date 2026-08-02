import { Bell, Search } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { AppSidebar } from '../components/AppSidebar';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-surface lg:flex">
      <AppSidebar />
      <div className="min-w-0 flex-1">
        <header className="border-b border-border bg-white">
          <div className="flex h-16 items-center justify-between px-5 sm:px-8">
            <div className="relative w-full max-w-md"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" /><input aria-label="Search MISNÖ" className="w-full rounded-xl border border-border bg-surface py-2.5 pl-10 pr-4 text-sm" placeholder="Search experiences, circles, people" /></div>
            <button aria-label="Notifications" className="ml-4 rounded-xl border border-border p-2.5 text-muted hover:text-ink"><Bell className="h-4 w-4" /></button>
          </div>
        </header>
        <main className="p-5 sm:p-8"><Outlet /></main>
      </div>
    </div>
  );
}
