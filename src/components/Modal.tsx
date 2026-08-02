import { X } from 'lucide-react';
import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';

export function Modal({ open, title, description, children, onClose }: { open: boolean; title: string; description?: string; children: ReactNode; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="presentation">
      <button type="button" aria-label="Close modal" onClick={onClose} className="absolute inset-0 bg-black/35" />
      <section role="dialog" aria-modal="true" aria-labelledby="modal-title" className="relative z-10 w-full max-w-lg rounded-card border border-border bg-white p-6 shadow-soft sm:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 id="modal-title" className="text-2xl font-semibold tracking-tight">{title}</h2>
            {description && <p className="mt-2 body-muted">{description}</p>}
          </div>
          <button ref={closeButtonRef} type="button" onClick={onClose} className="rounded-lg border border-border p-2 text-muted hover:text-ink" aria-label="Close"><X className="h-4 w-4" /></button>
        </div>
        <div className="mt-6">{children}</div>
      </section>
    </div>
  );
}
