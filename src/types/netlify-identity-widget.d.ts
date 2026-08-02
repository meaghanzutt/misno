declare module 'netlify-identity-widget' {
  interface IdentityUser {
    id?: string;
    email?: string;
    user_metadata?: Record<string, unknown>;
    app_metadata?: Record<string, unknown>;
    token?: {
      access_token?: string;
      expires_at?: number;
      refresh_token?: string;
      token_type?: string;
    };
  }

  interface NetlifyIdentityWidget {
    init(options?: Record<string, unknown>): void;
    open(tab?: 'login' | 'signup' | 'recover'): void;
    close(): void;
    currentUser(): IdentityUser | null;
    logout(): Promise<void> | void;
    on(event: string, callback: (...args: unknown[]) => void): void;
    off(event: string, callback?: (...args: unknown[]) => void): void;
  }

  const netlifyIdentity: NetlifyIdentityWidget;
  export default netlifyIdentity;
}
