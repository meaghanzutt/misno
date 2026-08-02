# PR #3: Membership Experience

## Goal
Make membership selection feel calm, spacious, and easy to understand instead of resembling a compressed SaaS pricing table.

## Included
- Rebuilt `MembershipCard` with larger internal spacing and full-width actions.
- Added “Best for” guidance to every membership.
- Separated monthly price and one-time enrollment visually.
- Added equal-height membership cards and restrained hover states.
- Changed the Memberships page to a responsive 2–2–1 layout.
- Centered Executive Partner on large screens.
- Added a start-free closing call to action.
- Updated the homepage membership preview.

## Verify
- `/memberships`
- `/`
- Community signup opens with Community selected.
- Contributor displays “Most popular.”
- Executive Partner displays “Application required.”
- Cards stack cleanly on mobile.
- Buttons remain reachable without overlapping content.

## Suggested commit

```bash
git add .
git commit -m "feat(memberships): redesign membership experience"
git push
```

## Pricing correction
- Executive Partner: $600 one-time enrollment + $100/month.
