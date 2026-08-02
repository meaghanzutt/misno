import { MapPin } from 'lucide-react';
import type { Membership } from '../types';
import { Avatar } from './Avatar';
import { Badge } from './Badge';
import { Card } from './Card';
import { MemberMark } from './MemberMark';

export function ProfileCard({ name, membership, location, interests }: { name: string; membership: Membership; location: string; interests: string[] }) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4">
        <Avatar name={name} membership={membership} size="lg" />
        <div>
          <MemberMark name={name} membership={membership} />
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted"><MapPin className="h-3.5 w-3.5" />{location}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {interests.map((interest) => <Badge key={interest}>{interest}</Badge>)}
      </div>
    </Card>
  );
}
