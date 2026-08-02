# PR #4A: Remove Homepage Photography

## Summary

Removes all homepage stock photography and replaces it with clean, white, typography-led UI.

## Changes

- Hero uses an activity preview instead of a photograph.
- Community in Action uses three icon-led cards.
- Experience cards no longer load remote images.
- Experience demo data and types no longer include image URLs.
- External image dependencies are removed from the homepage.

## QA

- Verify `/` on desktop, tablet, and mobile.
- Confirm no Unsplash requests appear in the browser network panel.
- Confirm hero and experience cards remain readable with JavaScript enabled.
- Confirm Netlify production build succeeds.
