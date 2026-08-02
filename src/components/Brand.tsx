import { Link } from 'react-router-dom';

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="inline-flex items-center" aria-label="MISNÖ home">
      <img src="/misno-logo.png" alt="MISNÖ" className={compact ? 'h-8 w-auto' : 'h-10 w-auto'} />
    </Link>
  );
}
