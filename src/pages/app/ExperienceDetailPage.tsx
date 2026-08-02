import { useMemo, useState } from 'react';
import { ArrowLeft, CalendarDays, Check, CheckCircle2, Clock3, MapPin, Users } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { MemberMark } from '../../components/MemberMark';
import { Modal } from '../../components/Modal';
import { getExperienceDetail } from '../../lib/experienceDetails';

function storageKey(id: string) {
  return `misno_joined_experience_${id}`;
}

export function ExperienceDetailPage() {
  const { experienceId = '' } = useParams();
  const result = useMemo(() => getExperienceDetail(experienceId), [experienceId]);
  const [modalOpen, setModalOpen] = useState(false);
  const [joined, setJoined] = useState(() => localStorage.getItem(storageKey(experienceId)) === 'true');

  if (!result) return <Navigate to="/app/discover" replace />;

  const { experience, detail } = result;
  const visibleAttendees = detail.attendees.slice(0, 6);
  const remaining = Math.max(experience.members - visibleAttendees.length, 0);

  function confirmJoin() {
    localStorage.setItem(storageKey(experience.id), 'true');
    setJoined(true);
    setModalOpen(false);
  }

  return (
    <div className="experience-detail-page">
      <Link to="/app/discover" className="experience-back-link">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Discover
      </Link>

      <header className="experience-detail-header">
        <div>
          <p className="eyebrow">{experience.category} experience</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">{experience.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{experience.description}</p>
        </div>
        <div className="experience-detail-actions">
          {joined ? (
            <div className="experience-joined-state" role="status">
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              You joined this experience
            </div>
          ) : (
            <Button size="lg" onClick={() => setModalOpen(true)}>Join experience</Button>
          )}
        </div>
      </header>

      <div className="experience-facts" aria-label="Experience details">
        <div><CalendarDays className="h-5 w-5" aria-hidden="true" /><span><strong>When</strong>{experience.schedule}</span></div>
        <div><MapPin className="h-5 w-5" aria-hidden="true" /><span><strong>Where</strong>{experience.location}</span></div>
        <div><Users className="h-5 w-5" aria-hidden="true" /><span><strong>Going</strong>{experience.members} people</span></div>
      </div>

      <div className="experience-detail-grid">
        <main className="space-y-6">
          <Card className="experience-content-card">
            <p className="eyebrow">About</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">A simple invitation to show up as you are.</h2>
            <p className="mt-5 text-base leading-8 text-muted">{detail.longDescription}</p>
          </Card>

          <Card className="experience-content-card">
            <p className="eyebrow">What to expect</p>
            <ul className="experience-check-list mt-6">
              {detail.expectations.map((item) => <li key={item}><Check className="h-4 w-4" aria-hidden="true" />{item}</li>)}
            </ul>
          </Card>

          <Card className="experience-content-card">
            <p className="eyebrow">Perfect for</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {detail.perfectFor.map((item) => <span className="experience-tag" key={item}>{item}</span>)}
            </div>
          </Card>

          <Card className="experience-content-card">
            <p className="eyebrow">Who is going</p>
            <div className="mt-6 flex flex-wrap gap-5">
              {visibleAttendees.map((attendee) => (
                <div className="experience-attendee" key={attendee.id}>
                  <Avatar name={attendee.name} size="md" />
                  <MemberMark name={attendee.name} membership={attendee.membership} />
                </div>
              ))}
            </div>
            {remaining > 0 ? <p className="mt-6 text-sm text-muted">Plus {remaining} more people</p> : null}
          </Card>
        </main>

        <aside className="space-y-6">
          <Card className="experience-side-card">
            <p className="eyebrow">Hosted by</p>
            <div className="mt-5 flex items-center gap-4">
              <Avatar name={experience.host} size="lg" />
              <div>
                <p className="font-semibold"><MemberMark name={experience.host} membership={experience.hostMembership} /></p>
                <p className="mt-1 text-sm text-muted">Community host</p>
              </div>
            </div>
          </Card>

          <Card className="experience-side-card">
            <p className="eyebrow">Atmosphere</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {detail.atmosphere.map((item) => <span className="experience-tag" key={item}>{item}</span>)}
            </div>
          </Card>

          <Card className="experience-side-card">
            <p className="eyebrow">Bring</p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-muted">
              {detail.bring.map((item) => <li className="flex gap-3" key={item}><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />{item}</li>)}
            </ul>
          </Card>

          {detail.accessibilityNote ? (
            <Card className="experience-side-card">
              <p className="eyebrow">Accessibility</p>
              <p className="mt-4 text-sm leading-6 text-muted">{detail.accessibilityNote}</p>
            </Card>
          ) : null}
        </aside>
      </div>

      <div className="experience-mobile-action">
        {joined ? (
          <div className="experience-joined-state"><CheckCircle2 className="h-5 w-5" aria-hidden="true" />Joined</div>
        ) : (
          <Button className="w-full" size="lg" onClick={() => setModalOpen(true)}>Join experience</Button>
        )}
      </div>

      <Modal
        open={modalOpen}
        title={`Join ${experience.title}?`}
        description="Take a moment to confirm the details before you join."
        onClose={() => setModalOpen(false)}
      >
        <div className="rounded-2xl border border-border bg-surface p-5">
          <p className="font-semibold">{experience.title}</p>
          <div className="mt-4 space-y-3 text-sm text-muted">
            <p className="flex items-center gap-2"><Clock3 className="h-4 w-4" aria-hidden="true" />{experience.schedule}</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" aria-hidden="true" />{experience.location}</p>
          </div>
        </div>
        <p className="mt-5 text-sm leading-6 text-muted">Your spot will be added to this browser's demo profile. Attendance, not registration alone, will create a Passport entry.</p>
        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button variant="secondary" onClick={() => setModalOpen(false)}>Not yet</Button>
          <Button onClick={confirmJoin}>Confirm and join</Button>
        </div>
      </Modal>
    </div>
  );
}
