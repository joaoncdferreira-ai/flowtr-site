# Flowtr — landing site

Pre-launch landing page for **Flowtr**, the run-tracker that turns each run into a territory game.

- **Stack:** Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind 4
- **Brand:** Russo One + Chakra Petch, coral `#FF5733`
- **Live:** https://flowtr.app *(after deploy)*

## Local dev

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Deploying to Vercel

The site is static-first (one server route at `/api/waitlist`) and deploys to Vercel's free Hobby tier with no config.

### 1. Create a GitHub repo

```bash
# from this directory:
git remote add origin git@github.com:<you>/flowtr-site.git
git push -u origin main
```

### 2. Import on Vercel

1. https://vercel.com → **Add New… → Project**
2. Pick the GitHub repo. Vercel auto-detects Next.js — accept the defaults
3. Set environment variables (see [.env.example](.env.example))
4. Click **Deploy**. First build takes ~60s

You'll get a `flowtr-site-<you>.vercel.app` URL. Test there first.

### 3. Custom domain `flowtr.app`

In the Vercel project: **Settings → Domains → Add `flowtr.app` and `www.flowtr.app`**.

Vercel shows you DNS records to add at your registrar. Typically:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | `76.76.21.21`          |
| CNAME | www  | `cname.vercel-dns.com` |

If your domain is on **Cloudflare**, set the proxy to **DNS only** (grey cloud) for both records — Vercel handles SSL itself. SSL certificate auto-provisions in ~60s after DNS resolves.

### 4. Waitlist provider (Resend)

The waitlist API at [src/app/api/waitlist/route.ts](src/app/api/waitlist/route.ts) supports Resend natively.

1. Sign up at https://resend.com (free tier: 3 000 emails/month, 100/day)
2. Verify the `flowtr.app` domain — adds a few DNS records (SPF, DKIM)
3. **Audiences → Create Audience** ("Flowtr waitlist"), copy the audience ID
4. **API Keys → Create**, scope: `audiences:write`
5. Add to Vercel:
   - `RESEND_API_KEY` = the API key
   - `RESEND_AUDIENCE_ID` = the audience ID
6. Redeploy (Vercel auto-redeploys on env-var change)

To send the launch announcement later, pull the audience from Resend and use the Broadcasts feature.

## Privacy

The screenshots used on the site are sanitised by [scripts/sanitize-screenshots.mjs](scripts/sanitize-screenshots.mjs):

- Top-right HUD avatar → procedural Flowtr `avatar_0.png` over a soft dark blackout (covers the square photo region used by the in-app HUD)
- Profile-page heraldic photo → same procedural avatar
- Profile-page email row → coral "EMAIL OCULTO" pill

Re-run after replacing source screenshots:

```bash
node scripts/sanitize-screenshots.mjs
```
