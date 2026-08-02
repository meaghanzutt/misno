import { Compass, Home, Mail, Map, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const items = [
  { to: '/app', label: 'Home', icon: Home, end: true },
  { to: '/app/discover', label: 'Discover', icon: Compass },
  { to: '/app/messages', label: 'Messages', icon: Mail },
  { to: '/app/passport', label: 'Passport', icon: Map },
  { to: '/app/profile', label: 'Profile', icon: User },
];

export function MobileAppNav() {
  return (
    <nav aria-label="Mobile application navigation" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-border bg-white px-2 pb-[max(.5rem,env(safe-area-inset-bottom))] pt-2 lg:hidden">
      {items.map(({ to, label, icon: Icon, end }) => (
        <NavLink key={to} to={to} end={end} className={({ isActive }) => `flex flex-col items-center gap-1 rounded-lg py-1.5 text-[11px] font-medium ${isActive ? 'text-forest' : 'text-muted'}`}>
          <Icon className="h-4 w-4" />{label}
        </NavLink>
      ))}
    </nav>
  );
}
