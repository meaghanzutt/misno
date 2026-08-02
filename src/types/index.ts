export type Membership = 'community' | 'member' | 'contributor' | 'partner' | 'executive';
export type Role = Membership | 'admin';

export interface Person {
  id: string;
  name: string;
  city: string;
  membership: Membership;
  bio?: string;
}

export interface Experience {
  id: string;
  title: string;
  location: string;
  schedule: string;
  description: string;
  members: number;
  category: string;
}
