# MISNÖ Design Kit

The Design Kit is the coded source of truth for MISNÖ's visual language. It keeps the public website, Community, Workspace, and Admin calm, consistent, and accessible.

## Principles

1. White is the default canvas.
2. Forest green communicates emphasis, selection, and progress.
3. Every screen has one primary action.
4. Typography and spacing carry more visual weight than decoration.
5. Components expose predictable variants instead of one-off styling.
6. Motion is subtle and respects reduced-motion preferences.

## Design tokens

Design tokens live in `src/design/tokens`:

- `colors.ts`
- `spacing.ts`
- `typography.ts`
- `radius.ts`
- `shadows.ts`
- `motion.ts`

CSS variables remain in `src/styles/index.css` for Tailwind and global styles. TypeScript tokens provide a typed source for JavaScript-driven UI and future integrations.

## Layout components

Design layout primitives live in `src/design/components`:

- `Container`: shared responsive widths and gutters
- `Section`: consistent vertical rhythm and background tones
- `PageHeader`: page title, supporting copy, and optional primary action
- `Divider`: consistent separators
- `IconButton`: accessible icon-only controls

## Existing UI components

Reusable UI components are re-exported from `src/components/ui` so feature code has one stable import path.

```tsx
import { Button, Card, Container, PageHeader, Section } from '../components/ui';
```

## Rules

- Do not add arbitrary colors when an existing token communicates the meaning.
- Use the spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- Use `Container` instead of creating new maximum widths.
- Use `Section` instead of repeating vertical page padding.
- Icon-only buttons require a visible tooltip/title and an accessible label.
- Update `/design-system` whenever a reusable component or token is added.
