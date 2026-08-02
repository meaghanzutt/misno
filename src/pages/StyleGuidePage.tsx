import { Bell, Compass, Inbox, MoreHorizontal, Plus, Search, Sparkles, Users } from 'lucide-react';
import { useState } from 'react';
import { Avatar } from '../components/Avatar';
import { Badge } from '../components/Badge';
import { Brand } from '../components/Brand';
import { Button, ButtonLink } from '../components/Button';
import { Card } from '../components/Card';
import { EmptyState } from '../components/EmptyState';
import { ExperienceCard } from '../components/ExperienceCard';
import { InputField, SearchField, SelectField, TextareaField } from '../components/FormField';
import { MemberMark } from '../components/MemberMark';
import { MembershipCard } from '../components/MembershipCard';
import { Modal } from '../components/Modal';
import { ProfileCard } from '../components/ProfileCard';
import { TabPanel, Tabs } from '../components/Tabs';
import { experiences, memberships } from '../lib/data';
import { Container, Divider, IconButton, PageHeader, Section } from '../design';
import { colors, motion, radius, shadows, spacing, typography } from '../design/tokens';

const navigation = [
  ['Foundations', '#foundations'],
  ['Components', '#components'],
  ['Forms', '#forms'],
  ['Patterns', '#patterns'],
  ['Templates', '#templates'],
];

export function StyleGuidePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('experiences');

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-30 border-b border-border bg-white/95 backdrop-blur">
        <Container className="flex min-h-18 items-center justify-between gap-5 py-4">
          <div className="flex items-center gap-5"><Brand /><Badge tone="accent">Design System</Badge></div>
          <ButtonLink to="/" variant="secondary" size="sm">Back to website</ButtonLink>
        </Container>
      </header>

      <Container className="grid gap-12 py-12 lg:grid-cols-[210px_minmax(0,1fr)] lg:py-16">
        <aside className="hidden lg:block">
          <nav className="sticky top-28 space-y-1" aria-label="Design system sections">
            {navigation.map(([label, href]) => <a key={href} href={href} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted hover:bg-surface hover:text-ink">{label}</a>)}
          </nav>
        </aside>

        <main className="min-w-0">
          <PageHeader
            eyebrow="Internal reference"
            title="MISNÖ Design System"
            description="A calm, white-first system for the public website, Community, Workspace, and Admin. Components are accessible, responsive, and intentionally restrained."
          />

          <section id="foundations" className="scroll-mt-28 pt-20 first:pt-14">
            <SectionHeading eyebrow="Foundations" title="Visual language" description="The shared tokens that keep every MISNÖ screen consistent." />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ['White', '#FFFFFF', 'border-border'],
                ['Surface', '#FAFAFA', 'border-border'],
                ['Ink', '#111111', 'border-zinc-800'],
                ['Muted', '#6B7280', 'border-zinc-500'],
                ['Forest', '#2F5D50', 'border-forest'],
              ].map(([name, color, border]) => (
                <div key={name}>
                  <div className={`h-28 rounded-card border ${border}`} style={{ background: color }} />
                  <p className="mt-3 font-semibold">{name}</p><p className="text-sm text-muted">{color}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-6 xl:grid-cols-2">
              <Card className="p-7 sm:p-8">
                <p className="eyebrow">Typography</p>
                <div className="mt-6 space-y-7">
                  <p className="display-title">Display title</p>
                  <p className="page-title">Page title</p>
                  <p className="section-title">Section title</p>
                  <p className="text-xl font-semibold">Card title</p>
                  <p className="body-muted">Body text is comfortable, calm, and readable. It should support the experience rather than decorate it.</p>
                  <p className="text-sm text-muted">Supporting and caption text</p>
                </div>
              </Card>
              <Card className="p-7 sm:p-8">
                <p className="eyebrow">Spacing and shape</p>
                <div className="mt-6 space-y-7">
                  <TokenRow name="Spacing" value="4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96" />
                  <TokenRow name="Card radius" value="16px" />
                  <TokenRow name="Control radius" value="12px" />
                  <TokenRow name="Soft elevation" value="0 8px 24px rgba(0,0,0,.05)" />
                  <TokenRow name="Motion" value="150–200ms, purposeful only" />
                </div>
              </Card>
            </div>

            <Card className="mt-6 p-7 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="eyebrow">Typed tokens</p>
                  <h3 className="mt-3 text-lg font-semibold">One source for coded decisions</h3>
                  <p className="mt-2 body-muted">Use TypeScript tokens for JavaScript-driven interfaces and CSS variables for global and Tailwind styling.</p>
                </div>
                <IconButton label="More token options"><MoreHorizontal className="h-5 w-5" /></IconButton>
              </div>
              <Divider className="my-7" />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <TokenRow name="Forest" value={colors.forest} />
                <TokenRow name="Section spacing" value={`${spacing[16]}px`} />
                <TokenRow name="Card radius" value={`${radius.card}px`} />
                <TokenRow name="Soft shadow" value={shadows.soft} />
                <TokenRow name="Standard motion" value={`${motion.standard}ms`} />
                <TokenRow name="Body size" value={`${typography.body.fontSize}px`} />
              </div>
            </Card>
          </section>

          <section id="components" className="scroll-mt-28 pt-20">
            <SectionHeading eyebrow="Components" title="Reusable building blocks" description="Every component has one visual language and predictable states." />

            <Card className="mt-8 p-7 sm:p-8">
              <h3 className="text-lg font-semibold">Buttons</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button>Primary action</Button>
                <Button variant="secondary">Secondary action</Button>
                <Button variant="ghost">Ghost action</Button>
                <Button variant="danger">Destructive action</Button>
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button size="icon" aria-label="Add"><Plus className="h-4 w-4" /></Button>
              </div>
            </Card>

            <div className="mt-6 grid gap-6 xl:grid-cols-2">
              <Card className="p-7 sm:p-8">
                <h3 className="text-lg font-semibold">Badges and avatars</h3>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Badge>Neutral</Badge><Badge tone="accent">Featured</Badge><Badge tone="success">Active</Badge><Badge tone="warning">Pending</Badge><Badge tone="danger">Reported</Badge>
                </div>
                <div className="mt-8 flex items-end gap-5"><Avatar name="Maya Chen" size="sm" /><Avatar name="Meaghan Zuttermeister" membership="contributor" /><Avatar name="Kai Thompson" membership="partner" size="lg" /></div>
              </Card>
              <Card className="p-7 sm:p-8">
                <h3 className="text-lg font-semibold">Membership marks</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <MemberMark name="Community" membership="community" />
                  <MemberMark name="Member" membership="member" />
                  <MemberMark name="Contributor" membership="contributor" />
                  <MemberMark name="Partner" membership="partner" />
                  <MemberMark name="Executive" membership="executive" />
                </div>
              </Card>
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-2">
              <div><h3 className="mb-4 text-lg font-semibold">Experience card</h3><ExperienceCard experience={experiences[0]} /></div>
              <div><h3 className="mb-4 text-lg font-semibold">Profile card</h3><ProfileCard name="Meaghan Zuttermeister" membership="contributor" location="San Diego, CA" interests={['Coffee', 'Community', 'Local events']} /></div>
            </div>

            <div className="mt-6"><h3 className="mb-4 text-lg font-semibold">Membership card</h3><MembershipCard plan={memberships[2]} /></div>
          </section>

          <Section className="-mx-5 mt-20 rounded-[24px] px-5 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10" tone="soft">
            <SectionHeading eyebrow="Layout primitives" title="Consistent page rhythm" description="Container, Section, and PageHeader keep feature pages aligned without repeating layout decisions." />
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <Card className="p-7 sm:p-8">
                <PageHeader eyebrow="Example" title="Explore what is happening" description="Page headers keep one clear message and one optional primary action." action={<Button>Primary action</Button>} />
              </Card>
              <Card className="p-7 sm:p-8">
                <h3 className="text-lg font-semibold">Primitive rules</h3>
                <ul className="mt-5 space-y-3 text-sm text-muted">
                  <li>Container owns page width and responsive gutters.</li>
                  <li>Section owns vertical spacing and background tone.</li>
                  <li>PageHeader owns title hierarchy and primary action placement.</li>
                  <li>Divider separates content only when spacing is not enough.</li>
                </ul>
              </Card>
            </div>
          </Section>

          <section id="forms" className="scroll-mt-28 pt-20">
            <SectionHeading eyebrow="Forms" title="Clear, forgiving inputs" description="Labels stay visible, errors are explicit, and focus states are easy to find." />
            <Card className="mt-8 grid gap-6 p-7 sm:p-8 md:grid-cols-2">
              <InputField label="Display name" placeholder="How people will know you" hint="You can change this later." />
              <InputField label="Email" type="email" placeholder="name@example.com" />
              <InputField label="Field with an error" defaultValue="Incorrect value" error="Please review this value." />
              <SelectField label="Membership"><option>Community</option><option>Member</option><option>Contributor</option></SelectField>
              <TextareaField className="md:col-span-2" label="About you" placeholder="Share a little about yourself" hint="Keep it conversational and brief." />
              <div className="md:col-span-2"><SearchField placeholder="Search experiences, circles, and people" /></div>
            </Card>
          </section>

          <section id="patterns" className="scroll-mt-28 pt-20">
            <SectionHeading eyebrow="Patterns" title="Common interaction patterns" description="Reusable behavior prevents every feature from inventing its own rules." />
            <div className="mt-8 grid gap-6 xl:grid-cols-2">
              <Card className="p-7 sm:p-8">
                <h3 className="text-lg font-semibold">Tabs</h3>
                <div className="mt-6">
                  <Tabs items={[{ id: 'experiences', label: 'Experiences' }, { id: 'circles', label: 'Circles' }, { id: 'people', label: 'People' }]} activeId={activeTab} onChange={setActiveTab} />
                  <TabPanel id="experiences" activeId={activeTab}><p className="body-muted">Discover meaningful experiences happening nearby and online.</p></TabPanel>
                  <TabPanel id="circles" activeId={activeTab}><p className="body-muted">Find smaller communities organized around shared interests.</p></TabPanel>
                  <TabPanel id="people" activeId={activeTab}><p className="body-muted">Meet people with interests and plans that overlap with yours.</p></TabPanel>
                </div>
              </Card>
              <Card className="p-7 sm:p-8">
                <h3 className="text-lg font-semibold">Modal</h3>
                <p className="mt-2 body-muted">Use a modal for focused decisions without losing the current context.</p>
                <Button className="mt-6" onClick={() => setModalOpen(true)}>Open example</Button>
              </Card>
            </div>
            <div className="mt-6"><EmptyState icon={Inbox} title="Nothing here yet" description="Empty states explain what belongs here and offer one useful next step." actionLabel="Explore experiences" actionTo="/app/discover" /></div>
          </section>

          <section id="templates" className="scroll-mt-28 pt-20">
            <SectionHeading eyebrow="Templates" title="Layout previews" description="Public, Community, Workspace, and Admin all use the same system without becoming identical." />
            <div className="mt-8 grid gap-6 xl:grid-cols-2">
              <TemplatePreview title="Public website" icon={Compass} items={['MISNÖ wordmark', 'Focused headline', 'One primary action', 'Experience-led content']} />
              <TemplatePreview title="Community" icon={Users} items={['Persistent navigation', 'Search', 'Clear content hierarchy', 'Mobile bottom navigation']} />
              <TemplatePreview title="Workspace" icon={Sparkles} items={['Creator-focused navigation', 'Calm forms', 'One creation action', 'No vanity analytics']} />
              <TemplatePreview title="Admin" icon={Bell} items={['Members', 'Reports', 'Experiences', 'Settings']} />
            </div>
          </section>
        </main>
      </Container>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Join this experience?" description="You can leave at any time. Your participation will appear in your Passport.">
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end"><Button variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button><Button onClick={() => setModalOpen(false)}>Join experience</Button></div>
      </Modal>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div><p className="eyebrow">{eyebrow}</p><h2 className="section-title mt-3">{title}</h2><p className="mt-3 max-w-2xl body-muted">{description}</p></div>;
}

function TokenRow({ name, value }: { name: string; value: string }) {
  return <div className="border-b border-border pb-5 last:border-0 last:pb-0"><p className="text-sm font-semibold">{name}</p><p className="mt-1 text-sm text-muted">{value}</p></div>;
}

function TemplatePreview({ title, icon: Icon, items }: { title: string; icon: typeof Search; items: string[] }) {
  return <Card className="p-7 sm:p-8"><span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-forest"><Icon className="h-5 w-5" /></span><h3 className="mt-5 text-lg font-semibold">{title}</h3><ul className="mt-5 space-y-3 text-sm text-muted">{items.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />{item}</li>)}</ul></Card>;
}
