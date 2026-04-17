# luminago.app — Official Marketing Site

Next.js 15 (App Router) · Tailwind CSS · Framer Motion · TypeScript
Deployed to **Vercel** at [luminago.app](https://luminago.app).

---

## Layout

```
.
├── index.html           ← Legacy GitHub Pages (mobile app privacy, shipped builds still ping this)
├── support.html         ← Legacy GitHub Pages (support page)
├── public/              ← Next.js static assets (logo, screenshots, OG image)
├── src/
│   ├── app/             ← Next.js App Router (layout, page, sitemap, robots, globals.css)
│   ├── components/      ← Navbar, Hero, Features, Ecosystem, AppShowcase, ForDevelopers, Footer
│   ├── i18n/            ← EN / 中 / 日 / ES dictionaries + LanguageProvider
│   └── lib/             ← utilities (cn helper)
├── next.config.mjs
├── tailwind.config.ts
├── vercel.json
└── package.json
```

**Coexistence note**: Both `index.html` and `support.html` live at the repo root and continue to be served by **GitHub Pages** (`zhoukok.github.io/luminago-site/`) as a safety net for shipped App Store / Play Store builds whose privacy URL is hardcoded there. Next.js **does not** read these files — it serves from `src/app/page.tsx`. Do not remove them until every shipped app version has been migrated to `https://docs.luminago.app/privacy`.

---

## Local development

```bash
cd luminago-site
pnpm install           # or npm install / yarn / bun install
pnpm dev               # http://localhost:3000
pnpm build && pnpm start
```

Requires Node 18.18+ (recommended: Node 20 LTS).

---

## Deploy to Vercel

### One-time setup (≈ 3 clicks)

1. Push this repo to `github.com/zhoukok/luminago-site` (already the origin).
2. In the Vercel dashboard → **Add New Project** → import `luminago-site`.
3. Framework preset will auto-detect as **Next.js**; no env vars needed for the MVP.

Or via CLI (authenticate browser once):

```bash
npx vercel login
npx vercel link --project luminago-site
npx vercel --prod
```

### Production domain

In Vercel → **Project Settings → Domains**, add:

- `luminago.app` (apex)
- `www.luminago.app` (will auto-redirect to apex)

### Cloudflare DNS (on your Cloudflare zone for `luminago.app`)

Keep these two records as **Proxied → DNS only** (gray cloud), because Vercel handles TLS:

| Type  | Name  | Value                        | Proxy status |
| ----- | ----- | ---------------------------- | ------------ |
| A     | `@`   | `76.76.21.21`                | DNS only     |
| CNAME | `www` | `cname.vercel-dns.com`       | DNS only     |

Other subdomains (`docs`, `proxy`, `relay`) remain on Cloudflare Workers as configured in `bt_remote/*/wrangler.toml`.

---

## Content / i18n

All copy is in `src/i18n/{en,zh,ja,es}.ts`. They share the shape defined in `types.ts`. Add a new key in `types.ts` first, then fill it in each dictionary.

Language detection:

1. `localStorage["luminago.lang"]` (user override)
2. `navigator.language` (auto-detect on first visit)
3. Falls back to English

No path segments (`/zh`, `/ja`) for MVP — language lives client-side to keep the apex URL clean and SEO simple. Revisit when we need regional sub-paths.

---

## Brand tokens

See [`../bt_remote/docs/BRAND-GUIDELINE.md`](../bt_remote/docs/BRAND-GUIDELINE.md) for the full spec. Key values baked into `tailwind.config.ts`:

- Primary: `#000FF0`
- Dark surface: `#05050c`
- Font stack: Inter (Latin) + Noto Sans SC (中文) + JetBrains Mono (code)

---

## Analytics (optional, not enabled by default)

- Plausible (privacy-friendly) — set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=luminago.app` and add the script to `layout.tsx`.
- Vercel Analytics — flip the toggle in the Vercel project, no code change needed.

---

## License

© 2026 Chengdu Hotack Technology Co., Ltd. (成都市和天创科技股份有限公司). All rights reserved.
