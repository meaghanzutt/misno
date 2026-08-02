# PR #7 — Experience Details

## Goal
Help a member understand an Experience and join it with confidence.

## Added
- Clickable Experience cards
- `/app/experiences/:experienceId` route
- Reusable details sourced from demo data
- Host, attendee, atmosphere, expectations, and accessibility information
- Join confirmation modal
- Local browser persistence for joined state
- Responsive sticky mobile action

## QA
- Open `/app/discover`
- Select each Experience card
- Confirm unknown IDs return to Discover
- Join an Experience and refresh the page
- Verify keyboard focus and Escape-to-close modal behavior
- Test desktop and mobile layouts
