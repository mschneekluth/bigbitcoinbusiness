# Big Bitcoin Business – Claude Instructions

## Project
Nuxt 3 podcast website for the German-language crypto podcast "Big Bitcoin Business".
Deployment: Netlify SSG (`nuxt build` / `npm run build` with `netlify-static` preset).

## Tech Stack
- Nuxt 3 + Vue 3 (Composition API)
- TailwindCSS 3 + DaisyUI 4 (custom themes: `bbb-dark`, `bbb-light`)
- `@nuxt/icon` v1 (NOT v2 – incompatible with Nuxt 3)
- `@nuxtjs/tailwindcss`, `@nuxtjs/google-fonts`, `@nuxt/image`, `@vueuse/nuxt`
- Fonts: Oswald (headings) + Inter (body)

## Branding Colors
- Primary Gold: `#C9A84C`
- Accent Gold: `#D4A843`
- Dark Gold: `#8B7D3C`
- Background Dark: `#0A0A0A`

## Key Files
- `nuxt.config.ts` – modules, head config, SSG preset
- `tailwind.config.ts` – DaisyUI custom themes
- `composables/useTheme.ts` – theme toggle (dark/light)
- `data/hosts.ts` – host data
- `data/episodes.ts` – episode data (placeholder YouTube IDs)
- `data/navigation.ts` – nav items

## Dev
- Dev server runs on port 3001 (`npm run dev`)
- Build: `npm run build` (Netlify SSG)

## Conventions
- Use Composition API (`<script setup lang="ts">`)
- German UI text throughout (this is a German-language podcast)
- Keep components in `components/`, pages in `pages/`
- Prefer editing existing files over creating new ones
