import { Link } from 'react-router-dom';
import { Brand } from './Brand';

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="page-container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Brand compact />
        <div className="flex flex-wrap gap-5 text-sm text-muted">
          <Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/contact">Contact</Link>
        </div>
        <p className="text-sm text-muted">© {new Date().getFullYear()} MISNÖ</p>
      </div>
    </footer>
  );
}
