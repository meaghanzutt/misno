import { NavLink } from 'react-router-dom';
import { Brand } from './Brand';
import { Button } from './Button';
import { openLogin, openSignup } from '../lib/auth';

const links = [['Discover', '/#experiences'], ['Memberships', '/memberships'], ['About', '/about']];

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <div className="page-container flex h-18 items-center justify-between gap-5 py-4">
        <Brand />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {links.map(([label, to]) => <NavLink key={label} to={to} className="text-sm font-medium text-muted transition hover:text-ink">{label}</NavLink>)}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={openLogin}>Sign in</Button>
          <Button onClick={openSignup}>Join free</Button>
        </div>
      </div>
    </header>
  );
}
