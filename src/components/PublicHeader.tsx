import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Brand } from './Brand';
import { Button } from './Button';
import { openLogin, openSignup } from '../lib/auth';

const links = [['Discover', '/#experiences'], ['Memberships', '/memberships'], ['About', '/about']];

export function PublicHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <div className="page-container flex min-h-18 items-center justify-between gap-5 py-4">
        <Brand />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {links.map(([label, to]) => <NavLink key={label} to={to} className="text-sm font-medium text-muted transition hover:text-ink">{label}</NavLink>)}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <Button variant="ghost" onClick={openLogin}>Sign in</Button>
          <Button onClick={openSignup}>Join free</Button>
        </div>
        <button type="button" className="rounded-xl border border-border p-2.5 text-muted md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="page-container space-y-1 py-4" aria-label="Mobile navigation">
            {links.map(([label, to]) => <NavLink key={label} to={to} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-sm font-medium text-muted hover:bg-surface hover:text-ink">{label}</NavLink>)}
            <div className="grid gap-2 pt-3 sm:hidden">
              <Button variant="secondary" onClick={() => { setOpen(false); openLogin(); }}>Sign in</Button>
              <Button onClick={() => { setOpen(false); openSignup(); }}>Join free</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
