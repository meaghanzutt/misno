# MISNÖ Simple Netlify Build

A clean, white, Netlify-ready MISNÖ website and community app.

## Core product

- Public homepage with memberships
- Netlify Identity modal authentication
- Community app: Home, Discover, Circles, Experiences, Messages, Passport, Profile
- NÖMAD Studio for Contributor, Partner, and Executive Partner memberships
- Simple admin page protected by the `admin` Netlify Identity role

## Netlify deployment

1. Create or open a Netlify site.
2. Connect this repository.
3. Enable Netlify Identity in Project configuration.
4. Use open registration while testing.
5. Assign the `admin` role manually to administrator accounts.

Build command: `npm run build`

Publish directory: `dist`
