import { Compass, Home, Mail, Map, User, BriefcaseBusiness, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Brand } from './Brand';
import { MemberMark } from './MemberMark';
import type { Membership } from '../types';
import { logout } from '../lib/auth';

const items = [
  { to: '/app', label: 'Home', icon: Home, end: true },
  { to: '/app/discover', label: 'Discover', icon: Compass },
  { to: '/app/messages', label: 'Messages', icon: Mail },
  { to: '/app/passport', label: 'Passport', icon: Map },
  { to: '/app/profile', label: 'Profile', icon: User },
];

export function AppSidebar({ membership = 'contributor' }: { membership?: Membership }) {
  const eligible = ['contributor', 'partner', 'executive'].includes(membership);
  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-border bg-white p-5 lg:flex lg:flex-col">
      <Brand />
      <nav className="mt-10 space-y-1" aria-label="Application navigation">
        {items.map(({ to, label, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end} className={({isActive}) => `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${isActive ? 'bg-surface text-ink' : 'text-muted hover:bg-surface hover:text-ink'}`}>
            <Icon className="h-4 w-4" />{label}
          </NavLink>
        ))}
      </nav>
      {eligible && <div className="mt-8 border-t border-border pt-6"><p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted">Workspace</p><NavLink to="/workspace" className={({isActive}) => `mt-2 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${isActive ? 'bg-surface text-ink' : 'text-muted hover:bg-surface hover:text-ink'}`}><BriefcaseBusiness className="h-4 w-4" />NÖMAD Studio</NavLink></div>}
      <div className="mt-auto border-t border-border pt-5">
        <div className="px-3"><MemberMark name="Meaghan" membership={membership} /><p className="mt-1 text-xs capitalize text-muted">{membership}</p></div>
        <button onClick={logout} className="mt-4 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted hover:bg-surface hover:text-ink"><LogOut className="h-4 w-4" />Sign out</button>
      </div>
    </aside>
  );
}
