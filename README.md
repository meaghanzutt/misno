# MISNÖ Foundation

A clean React + Vite + TypeScript foundation for the MISNÖ community platform.

## Included
- Shared design system and Tailwind tokens
- Reusable components
- Public website routes
- Community app shell
- Workspace / NÖMAD Studio shell
- Admin shell
- Living MISNÖ Design System at `/design-system`
- Product documentation in `/docs`
- Netlify configuration and Identity widget shell

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Deploy to Netlify
1. Push this repository to GitHub or import the folder into Replit.
2. In Netlify, use build command `npm run build`.
3. Use publish directory `dist`.
4. Enable Netlify Identity if account registration is required.
5. Set `VITE_ENABLE_IDENTITY=true` in Netlify environment variables.

## Demo routes
- `/` public homepage
- `/memberships`
- `/app`
- `/workspace`
- `/admin`
- `/design-system`

## Important
The UI is a Sprint 1 foundation. Authentication authorization, payments, data persistence, production moderation, and live video are intentionally not implemented yet.

## Netlify TypeScript build fix

This package includes the following corrections for Netlify builds:

- Local TypeScript declaration for `netlify-identity-widget` at `src/types/netlify-identity-widget.d.ts`.
- Vite environment typings enabled through `types: ["vite/client"]` in `tsconfig.app.json`.
- `noEmit: true` added to `tsconfig.node.json` so Vite handles output.

Netlify settings:

- Build command: `npm run build`
- Publish directory: `dist`
