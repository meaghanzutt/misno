import { Link } from 'react-router-dom';
import { Brand } from './Brand';

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="page-container grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <Brand compact />
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">Misfits &amp; Nomads is a community built around meaningful experiences, creative participation, and real connection.</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted" aria-label="Footer navigation">
          <Link to="/about">About</Link>
          <Link to="/memberships">Memberships</Link>
          <Link to="/#experiences">Experiences</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </nav>
      </div>
      <div className="page-container mt-10 border-t border-border pt-6"><p className="text-sm text-muted">© {new Date().getFullYear()} MISNÖ · Misfits &amp; Nomads</p></div>
    </footer>
  );
}
