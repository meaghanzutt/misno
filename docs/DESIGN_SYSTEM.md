# MISNÖ Design System

The MISNÖ interface is calm, white-first, and designed to make meaningful participation feel obvious.

## Live reference

Run the application and visit `/design-system`.

## Foundations

### Colors
- Background: `#FFFFFF`
- Surface: `#FAFAFA`
- Ink: `#111111`
- Muted: `#6B7280`
- Border: `#E5E7EB`
- Forest: `#2F5D50`

Forest green communicates primary actions, active states, and meaningful emphasis. It is not decoration.

### Typography
- Font: Inter with system fallbacks
- Display: responsive 40–60px
- Page title: responsive 30–40px
- Section title: responsive 24–30px
- Body: 16px with generous line height
- Supporting text: 14px

### Spacing
Use the shared scale: `4, 8, 12, 16, 24, 32, 48, 64, 96`.

### Shape
- Controls: 12px radius
- Cards: 16px radius
- Pills: fully rounded only for compact statuses and tags

### Motion
- 150–200ms transitions
- No bouncing, glowing, spinning decoration, or motion without meaning
- Reduced-motion preferences are respected

## Components

Core reusable components include:
- Button and ButtonLink
- Card
- Avatar
- Badge
- MemberMark
- InputField, SelectField, TextareaField, SearchField
- Modal
- Tabs and TabPanel
- ExperienceCard
- MembershipCard
- ProfileCard
- EmptyState
- PublicHeader, AppSidebar, MobileAppNav, Footer

## Accessibility
- Visible keyboard focus
- Semantic buttons and links
- Explicit form labels and error descriptions
- Escape-to-close modal behavior
- Responsive navigation
- Sufficient contrast
- Reduced-motion support

## Product rules
1. Every screen has one primary action.
2. White space is intentional.
3. Icons support text and do not replace it.
4. Color communicates state or importance.
5. Components should be reused before new patterns are invented.
