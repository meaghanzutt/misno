import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock3, MapPin, Save, Sparkles, Users } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Button, ButtonLink } from '../../components/Button';
import { Card } from '../../components/Card';
import { EmptyState } from '../../components/EmptyState';
import { InputField, SelectField, TextareaField } from '../../components/FormField';
import { DraftCard } from '../../features/studio/components/DraftCard';
import { ResourceCard } from '../../features/studio/components/ResourceCard';
import { UpcomingExperienceCard } from '../../features/studio/components/UpcomingExperienceCard';
import { WorkspaceHero } from '../../features/studio/components/WorkspaceHero';
import { studioDrafts, studioResources, studioUpcoming, type StudioDraft, type StudioUpcoming } from '../../demo/studio';
import { emptyExperienceDraft, getStudioExperience, getStudioExperiences, saveStudioExperience, type ExperienceDraft } from '../../lib/studioStorage';

function formatDate(date: string, time: string) {
  if (!date) return 'Date to be confirmed';
  const value = new Date(`${date}T${time || '12:00'}`);
  if (Number.isNaN(value.getTime())) return date;
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' }).format(value);
}

export function StudioHomePage() {
  const [drafts, setDrafts] = useState<StudioDraft[]>(studioDrafts);
  const [upcoming, setUpcoming] = useState<StudioUpcoming[]>(studioUpcoming);

  useEffect(() => {
    const saved = getStudioExperiences();
    const savedDrafts: StudioDraft[] = saved.filter((item) => item.status === 'draft').map((item) => ({
      id: item.id,
      title: item.title || 'Untitled experience',
      category: item.category,
      updatedAt: 'Saved in your browser',
      progress: [item.title, item.location, item.date, item.description].filter(Boolean).length * 25,
    }));
    const savedUpcoming: StudioUpcoming[] = saved.filter((item) => item.status === 'published').map((item) => ({
      id: item.id,
      title: item.title,
      date: formatDate(item.date, item.time),
      location: item.location,
      registered: 0,
      capacity: item.capacity,
    }));
    if (savedDrafts.length) setDrafts([...savedDrafts, ...studioDrafts.filter((demo) => !savedDrafts.some((item) => item.id === demo.id))]);
    if (savedUpcoming.length) setUpcoming([...savedUpcoming, ...studioUpcoming]);
  }, []);

  return (
    <div className="studio-home-page">
      <WorkspaceHero />

      <section className="studio-section" aria-labelledby="drafts-heading">
        <div className="studio-section-heading">
          <div><p className="eyebrow">Drafts</p><h2 id="drafts-heading">Continue where you left off</h2></div>
          <Link to="/workspace/experiences" className="studio-section-link">View all <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        {drafts.length ? <div className="grid gap-5 md:grid-cols-2">{drafts.map(draft => <DraftCard key={draft.id} draft={draft} />)}</div> : <EmptyState icon={Sparkles} title="Your first experience starts here" description="Bring people together around something you care about." actionLabel="Create your first experience" actionTo="/workspace/create" />}
      </section>

      <section className="studio-section" aria-labelledby="upcoming-heading">
        <div className="studio-section-heading">
          <div><p className="eyebrow">Upcoming</p><h2 id="upcoming-heading">People are showing up</h2></div>
          <Link to="/workspace/events" className="studio-section-link">Manage events <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">{upcoming.map(experience => <UpcomingExperienceCard key={experience.id} experience={experience} />)}</div>
      </section>

      <section className="studio-section" aria-labelledby="resources-heading">
        <div className="studio-section-heading">
          <div><p className="eyebrow">Resources</p><h2 id="resources-heading">A little help, right when you need it</h2></div>
          <Link to="/workspace/resources" className="studio-section-link">Browse resources <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">{studioResources.map(resource => <ResourceCard key={resource.id} resource={resource} />)}</div>
      </section>
    </div>
  );
}


const steps = [
  { label: 'Details', description: 'Name and place' },
  { label: 'Schedule', description: 'Date and capacity' },
  { label: 'Story', description: 'What people can expect' },
  { label: 'Preview', description: 'Review before publishing' },
];

function splitLines(value: string) {
  return value.split('\n').map((item) => item.trim()).filter(Boolean);
}

export function CreateExperiencePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const editId = searchParams.get('draft');
  const initial = useMemo(() => {
    const stored = editId ? getStudioExperience(editId) : undefined;
    if (stored) return stored;
    const demo = editId ? studioDrafts.find((item) => item.id === editId) : undefined;
    return demo ? { ...emptyExperienceDraft, id: demo.id, title: demo.title, category: demo.category } : emptyExperienceDraft;
  }, [editId]);
  const [draft, setDraft] = useState<ExperienceDraft>(initial);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [published, setPublished] = useState(false);

  const update = <K extends keyof ExperienceDraft>(key: K, value: ExperienceDraft[K]) => {
    setDraft((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: '' }));
  };

  const validateStep = () => {
    const nextErrors: Record<string, string> = {};
    if (step === 0) {
      if (!draft.title.trim()) nextErrors.title = 'Give your experience a clear name.';
      if (!draft.location.trim()) nextErrors.location = 'Add a neighborhood, venue, or online location.';
    }
    if (step === 1) {
      if (!draft.date) nextErrors.date = 'Choose a date.';
      if (!draft.time) nextErrors.time = 'Choose a start time.';
      if (!draft.capacity || draft.capacity < 2) nextErrors.capacity = 'Capacity must be at least 2 people.';
    }
    if (step === 2 && draft.description.trim().length < 30) {
      nextErrors.description = 'Share at least a couple of sentences so people know what they are joining.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const goNext = () => {
    if (!validateStep()) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const saveDraft = () => {
    const saved = saveStudioExperience({ ...draft, status: 'draft' });
    setDraft(saved);
    navigate('/workspace');
  };

  const publish = () => {
    if (!draft.title || !draft.date || !draft.time || !draft.description) return;
    const saved = saveStudioExperience({ ...draft, status: 'published' });
    setDraft(saved);
    setPublished(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (published) {
    return (
      <div className="mx-auto max-w-3xl py-10">
        <Card className="p-8 text-center sm:p-12">
          <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 text-forest"><Check className="h-7 w-7" /></span>
          <p className="eyebrow mt-7">Published</p>
          <h1 className="page-title mt-3">Your experience is live.</h1>
          <p className="mx-auto mt-4 max-w-xl body-muted">People can now discover <strong className="font-semibold text-ink">{draft.title}</strong>. Your next job is the best one: make people feel welcome.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink to="/workspace" size="lg">Return to Workspace</ButtonLink>
            <ButtonLink to="/workspace/create" variant="secondary" size="lg">Create another</ButtonLink>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="experience-builder-page">
      <Link to="/workspace" className="experience-back-link"><ArrowLeft className="h-4 w-4" />Back to Workspace</Link>

      <div className="mt-8 flex flex-col gap-5 border-b border-border pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">NÖMAD Studio</p>
          <h1 className="page-title mt-3">Create an experience</h1>
          <p className="mt-4 max-w-2xl body-muted">A few thoughtful details are enough. You can save a draft whenever life taps you on the shoulder.</p>
        </div>
        <Button type="button" variant="secondary" onClick={saveDraft}><Save className="h-4 w-4" />Save draft</Button>
      </div>

      <ol className="builder-steps" aria-label="Experience creation progress">
        {steps.map((item, index) => (
          <li key={item.label} className={index === step ? 'is-current' : index < step ? 'is-complete' : ''}>
            <button type="button" onClick={() => index <= step && setStep(index)} disabled={index > step} aria-current={index === step ? 'step' : undefined}>
              <span className="builder-step-number">{index < step ? <Check className="h-4 w-4" /> : index + 1}</span>
              <span><strong>{item.label}</strong><small>{item.description}</small></span>
            </button>
          </li>
        ))}
      </ol>

      <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_380px]">
        <Card className="p-6 sm:p-8">
          {step === 0 && (
            <div className="space-y-6">
              <div><p className="eyebrow">Step 1</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">What are you bringing people together around?</h2></div>
              <InputField label="Experience name" value={draft.title} onChange={(event) => update('title', event.target.value)} placeholder="Coffee & Conversation" error={errors.title} maxLength={80} />
              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField label="Category" value={draft.category} onChange={(event) => update('category', event.target.value)}>
                  {['Coffee', 'Creative', 'Culture', 'Outdoors', 'Volunteer', 'Wellness', 'Professional'].map((category) => <option key={category}>{category}</option>)}
                </SelectField>
                <InputField label="Location" value={draft.location} onChange={(event) => update('location', event.target.value)} placeholder="North Park, San Diego" error={errors.location} />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <div><p className="eyebrow">Step 2</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">When should people show up?</h2></div>
              <div className="grid gap-5 sm:grid-cols-2">
                <InputField label="Date" type="date" value={draft.date} onChange={(event) => update('date', event.target.value)} error={errors.date} />
                <InputField label="Start time" type="time" value={draft.time} onChange={(event) => update('time', event.target.value)} error={errors.time} />
              </div>
              <InputField label="Capacity" type="number" min={2} max={500} value={draft.capacity} onChange={(event) => update('capacity', Number(event.target.value))} hint="A smaller group often makes first conversations easier." error={errors.capacity} />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div><p className="eyebrow">Step 3</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">Help people picture the experience.</h2></div>
              <TextareaField label="About this experience" value={draft.description} onChange={(event) => update('description', event.target.value)} placeholder="Share what the gathering will feel like, who may enjoy it, and why you are hosting." hint={errors.description || 'Keep it warm, specific, and easy to scan.'} className={errors.description ? 'border-red-400' : ''} />
              <TextareaField label="What to expect" value={draft.expectations} onChange={(event) => update('expectations', event.target.value)} placeholder={'Casual introductions\nSmall-group conversation\nTime to connect naturally'} hint="Add one item per line." />
              <TextareaField label="What to bring" value={draft.bring} onChange={(event) => update('bring', event.target.value)} placeholder={'Notebook\nReusable cup\nCuriosity'} hint="Optional. Add one item per line." />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-7">
              <div><p className="eyebrow">Step 4</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">Give it one calm look before it goes live.</h2></div>
              <div className="rounded-2xl border border-border bg-surface p-5 text-sm text-muted">
                Publishing makes this experience visible to the community. You can still edit it later from Workspace.
              </div>
              <Button type="button" size="lg" className="w-full" onClick={publish}><Sparkles className="h-4 w-4" />Publish experience</Button>
            </div>
          )}

          <div className="mt-9 flex items-center justify-between border-t border-border pt-6">
            <Button type="button" variant="ghost" onClick={() => setStep((current) => Math.max(0, current - 1))} disabled={step === 0}><ArrowLeft className="h-4 w-4" />Back</Button>
            {step < steps.length - 1 && <Button type="button" onClick={goNext}>Continue<ArrowRight className="h-4 w-4" /></Button>}
          </div>
        </Card>

        <aside className="xl:sticky xl:top-6 xl:self-start" aria-label="Live member preview">
          <p className="eyebrow mb-3">Member preview</p>
          <Card className="overflow-hidden">
            <div className="border-b border-border bg-surface p-6">
              <span className="inline-flex rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-forest">{draft.category || 'Experience'}</span>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-ink">{draft.title || 'Your experience name'}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{draft.description || 'Your description will appear here as you write it.'}</p>
            </div>
            <div className="space-y-4 p-6 text-sm">
              <p className="flex gap-3"><CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-forest" /><span>{draft.date || 'Choose a date'}</span></p>
              <p className="flex gap-3"><Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-forest" /><span>{draft.time || 'Choose a time'}</span></p>
              <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-forest" /><span>{draft.location || 'Add a location'}</span></p>
              <p className="flex gap-3"><Users className="mt-0.5 h-4 w-4 shrink-0 text-forest" /><span>Up to {draft.capacity || 20} people</span></p>
              {splitLines(draft.expectations).length > 0 && <div className="border-t border-border pt-4"><p className="font-semibold text-ink">What to expect</p><ul className="mt-3 space-y-2 text-muted">{splitLines(draft.expectations).slice(0, 3).map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" />{item}</li>)}</ul></div>}
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}

