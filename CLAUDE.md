# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build (outputs to dist/, not .next/)
npm start         # serve the production build
npm run lint      # eslint (flat config, eslint-config-next core-web-vitals + typescript)
```

There is no test suite/framework configured in this repo (no jest/vitest, no `*.test.*` files).

## Architecture

**TrackToBuy** — Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4. Frontend only; talks to Supabase for auth and to an external product API for data.

### Auth (Supabase SSR)

Auth gates the entire app. Three separate Supabase client constructors exist per `@supabase/ssr` convention — pick the right one for the context:
- [utils/supabase/client.ts](utils/supabase/client.ts) — browser/client components
- [utils/supabase/server.ts](utils/supabase/server.ts) — server components/route handlers (uses `next/headers` cookies)
- [utils/supabase/middleware.ts](utils/supabase/middleware.ts) — called from [middleware.ts](middleware.ts) on every request (except static assets, per the matcher) to refresh the auth token/cookies

Flow: [app/login/login-button.tsx](app/login/login-button.tsx) triggers Google OAuth via `signInWithOAuth`, which redirects to [app/auth/callback/route.ts](app/auth/callback/route.ts) to exchange the code for a session (this route special-cases the `x-forwarded-host` header since prod sits behind a proxy/CDN, not on Vercel). [app/page.tsx](app/page.tsx) is unconditional: it always redirects to `/dashboard` or `/login` based on session state — there's no actual landing content rendered there. [app/logout/page.tsx](app/logout/page.tsx) signs out server-side on render.

Env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (`.env.local`).

### Deployment

Not deployed on Vercel. `next.config.ts` sets `output: "standalone"` and `distDir: "dist"`. [.github/workflows/1_deploy_to_production.yml](.github/workflows/1_deploy_to_production.yml) builds on push to `main` and syncs `dist/` to S3, then invalidates a CloudFront distribution, using AWS OIDC (no long-lived AWS keys). Images are `unoptimized: true` since there's no Next.js image server in this setup; remote images are currently allow-listed only for `picsum.photos` (used as placeholder product images).

### Styling

Tailwind v4 is loaded via `@import "tailwindcss"` in [app/globals.css](app/globals.css), but `tailwind.config.ts` is empty/unused — the color system is hand-rolled instead: CSS custom properties (`--color-*`) plus matching utility classes (`.bg-accent`, `.text-muted`, etc.) defined directly in globals.css. [colors.json](colors.json) documents the same palette as a reference/design-source but is not read by any build tooling — if you change a color, update both files manually to keep them in sync.

### Product/board data layer — partially scaffolded

Most of the "boards" and "products" data layer exists only as empty placeholder files with no implementation and no references anywhere in the codebase: `hooks/useBoards.ts`, `hooks/useProducts.ts`, `types/Board.ts`, `types/User.ts`, `components/Modals.tsx`, `components/boards/BoardsGrid.tsx`. Don't assume these are wired up — check before extending them.

[app/dashboard/page.tsx](app/dashboard/page.tsx) is currently the only real consumer of product data, and it does its own thing rather than using the empty hooks: product state lives in local `useState` and is persisted to `localStorage` under the key `carterest-products`; `addProduct()` is a stubbed `setTimeout` that fabricates a fake product instead of calling a real extraction API; label filters are fetched from a hardcoded `mockable.io` demo endpoint (`utils/apiUrls.ts`) with a hardcoded `groupId` and a placeholder `Authorization: JWTTokenAqui` header. [services/productService.ts](services/productService.ts)'s `extractProduct()` is likewise a hardcoded stub, not called from the dashboard.

There are two near-duplicate budget bar components — [components/ui/BudgetBar.tsx](components/ui/BudgetBar.tsx) (uses `formatPrice`, has a red-when-over-budget state) and [components/boards/BoardBudget.tsx](components/boards/BoardBudget.tsx) (simpler, no formatting/color logic). Neither is currently imported anywhere (dashboard's `BudgetBar` import is commented out). Confirm which one — if either — is meant to be current before editing budget UI.

[components/layout/Sidebar.tsx](components/layout/Sidebar.tsx) links to `/boards` and `/add`, neither of which exists yet under `app/`.
