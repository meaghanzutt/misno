import netlifyIdentity from 'netlify-identity-widget';

export const identityEnabled = import.meta.env.VITE_ENABLE_IDENTITY !== 'false';

export function initializeIdentity(): void {
  if (!identityEnabled || typeof window === 'undefined') return;
  netlifyIdentity.init();
  netlifyIdentity.on('login', () => window.location.assign('/app'));
}

export function openLogin(): void {
  if (!identityEnabled) return;
  netlifyIdentity.open('login');
}

export function openSignup(): void {
  if (!identityEnabled) return;
  netlifyIdentity.open('signup');
}

export function logout(): void {
  if (!identityEnabled) return;
  netlifyIdentity.logout();
}
