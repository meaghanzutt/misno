# PR #2: Homepage Hero

## Goal
Help a first-time visitor understand MISNÖ and choose a next step within ten seconds.

## Files changed
- `src/features/home/Hero.tsx`
- `src/pages/public/HomePage.tsx`
- `src/styles/index.css`
- `docs/CHANGELOG.md`
- `package.json`

## Acceptance checks
- Visit `/` on desktop and mobile.
- Confirm there is one page-level `h1`.
- Confirm **Join free** opens Netlify Identity registration.
- Confirm **Explore experiences** opens `/app/discover`.
- Confirm keyboard focus is visible on both CTAs.
- Enable reduced motion and verify the entrance animation is removed.
- Run `npm run build` and confirm Netlify deploys successfully.

## Suggested commit

```bash
git add .
git commit -m "feat(home): build homepage hero"
git push
```
