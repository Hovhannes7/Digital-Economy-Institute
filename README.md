# Digital Economy Institute

A complete Vercel-ready frontend MVP for **Digital Economy Institute**, a publication-oriented research and policy institution focused on trustworthy digital-economy infrastructure.

Central project: **Targeted AI — A Web4 Infrastructure for Transparent and Reproducible Computational Research**.

This first version is intentionally static-first and backend-ready. It contains polished interfaces for registration, community chat, cross-community chat, chatbot assistance, file/photo/voice uploads, 48-hour deletion notices, discovery vaults, WIPO/IP Armenia pathways, publications, issue areas, centers, events, newsletter, partners, and contact pages.

## Tech stack

- Next.js 14+
- App Router
- TypeScript
- Tailwind CSS
- Markdown-based publications
- Static generation where possible
- No paid database
- No mandatory backend
- No external API keys
- Vercel-ready deployment

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## Main routes

- `/`
- `/publications`
- `/publications/[slug]`
- `/issues`
- `/issues/[slug]`
- `/targeted-ai`
- `/communities`
- `/communities/general-chat`
- `/communities/agriculture`
- `/communities/healthcare`
- `/communities/environment`
- `/communities/jurisprudence`
- `/communities/ai-blockchain`
- `/partners`
- `/centers`
- `/about`
- `/founders`
- `/events`
- `/newsletter`
- `/contact`

## Add a publication

Create a new Markdown file in `content/publications/` with this frontmatter:

```md
---
title: "Publication title"
slug: "publication-slug"
date: "2026-04-20"
author: "Digital Economy Institute Research Team"
type: "Report"
issueArea: "Targeted AI / Web4 Infrastructure"
summary: "Short summary."
tags: ["Targeted AI", "Web4"]
readingTime: "8 min read"
---

## Body heading
Publication body text.
```

## Edit site data

- Communities: `lib/communities.ts`
- Partners: `lib/partners.ts`
- Issue areas: `lib/issueAreas.ts`
- Centers: `lib/centers.ts`
- Site URL and email: `lib/site.ts`

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import it into Vercel.
3. Use the default Next.js settings.
4. Build command: `npm run build`.
5. After deployment, update `lib/site.ts` with your final URL.

## Connect a custom domain

In Vercel, open **Settings → Domains**, add your domain, and follow the DNS instructions. Then update `siteConfig.url` in `lib/site.ts`.

## Later CMS integration

This MVP uses local Markdown. Later you can add Sanity, Contentful, Strapi, Directus, Notion-as-CMS, or a Git-based MDX workflow for publications, authors, events, partners, and community resources.

## Later backend integration

The following are frontend-only prototypes in this MVP:

- user registration by email or phone
- community chat
- cross-community chat
- chatbot assistance
- file/photo/voice upload
- 48-hour permanent message deletion
- discovery vault
- WIPO forwarding
- forwarding to the Intellectual Property Office of Armenia

Production implementation should use Supabase, Firebase, PostgreSQL, Appwrite, or another secure backend.

## Authentication

For production use, add verified authentication, user roles, moderation permissions, consent flows, and audit logs. Options include Supabase Auth, Firebase Auth, Clerk, or Auth.js.

## Chat and 48-hour deletion

Production chat requires secure storage, realtime messaging, moderation, file scanning, and scheduled deletion logic. Store `created_at` and `expires_at`, then run a scheduled job through Vercel Cron, Supabase scheduled functions, Firebase scheduled functions, GitHub Actions, or your own server cron to permanently delete expired messages and attachments.

## File/photo/voice uploads

Use secure object storage such as Supabase Storage, Firebase Storage, S3-compatible storage, or Cloudflare R2. Add MIME validation, file size limits, malware scanning, signed upload URLs, and automatic deletion for chat attachments.

## Chatbot APIs

Production chatbot assistance requires a backend API route, model API key, prompt governance, rate limits, logging policy, content safety rules, and privacy controls. Never send sensitive medical, legal, or personal data to a model API without secure policy and consent.

## Discovery Vault and IP workflows

A secure Discovery Vault should include authentication, encryption, access control, version history, timestamps, review status, audit trails, prior-art review fields, legal review, and export-package generation. WIPO and Intellectual Property Office of Armenia submission workflows require human expert review and legal approval.

## Important public-launch warnings

Before public launch, verify all partnership and membership claims, founder biographies, institutional email/domain, authorship, medical/legal disclaimers, privacy policy, terms of use, moderation policy, and data protection compliance.

Do not publish unverified claims. The GTIPA and ITIF entries are deliberately labeled with verification warnings.

## License

Choose a license before public release. If following the open-source governance logic described on the site, consider GNU GPLv3 for software components, but consult legal advice first.
