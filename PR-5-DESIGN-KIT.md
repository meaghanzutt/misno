# PR #5: MISNÖ Design Kit

## Goal
Create a typed, reusable design foundation so future pages inherit MISNÖ's clean, white, calm visual language without inventing one-off styles.

## Added
- Typed color, spacing, typography, radius, shadow, and motion tokens
- Container, Section, PageHeader, Divider, and IconButton primitives
- Stable `src/components/ui` component exports
- Expanded CSS variables for semantic status colors, panel radius, and lifted elevation
- Design Kit documentation
- Updated `/design-system` examples

## Acceptance checks
- `/design-system` displays the new layout primitives and token values
- Existing routes remain unchanged
- Icon buttons have accessible labels
- Responsive spacing remains consistent
- Netlify TypeScript and Vite build succeeds
