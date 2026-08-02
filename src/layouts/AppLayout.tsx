import { Bell } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { AppSidebar } from '../components/AppSidebar';
import { MobileAppNav } from '../components/MobileAppNav';
import { SearchField } from '../components/FormField';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-surface lg:flex">
      <AppSidebar />
      <div className="min-w-0 flex-1">
        <header className="border-b border-border bg-white">
          <div className="flex h-16 items-center justify-between px-5 sm:px-8">
            <SearchField className="w-full max-w-md" aria-label="Search MISNÖ" placeholder="Search experiences, circles, people" />
            <button aria-label="Notifications" className="ml-4 rounded-xl border border-border p-2.5 text-muted hover:text-ink"><Bell className="h-4 w-4" /></button>
          </div>
        </header>
        <main className="p-5 pb-24 sm:p-8 sm:pb-24 lg:pb-8"><Outlet /></main>
        <MobileAppNav />
      </div>
    </div>
  );
}
