# Codex working brief — MIXD visuals

You own this directory. Everything visual for the MIXD website is built here.

## Hard boundaries (do not cross)

- **Only create or edit files inside `visuals/`.**
- **Do NOT edit** `index.html`, `about.html`, `products.html`, `marketing.html`,
  `contact.html`, `css/style.css`, `js/main.js`, or `README.md`. Another agent
  owns those files and edits there will collide.
- If a page needs to be changed to use one of your assets, **do not change it** —
  write the exact snippet into `visuals/HANDOFF.md` instead and it will be wired in.

## What this project is

MIXD is a fictional apparel label for an IB Business Management SL school project.
It releases limited-run clothing built from unexpected brand collaborations —
two known brands paired once, never reprinted. Tagline: **"Two brands. One fit."**

Live site: https://clwx-31.github.io/mixd-website/
Repo: https://github.com/clwx-31/mixd-website

## Brand system (must match exactly — these are live CSS variables)

| Token | Hex | Use |
|---|---|---|
| `--brand-violet` | `#6C3CF4` | primary |
| `--brand-pink` | `#FF2D78` | primary |
| `--brand-orange` | `#FF9F0A` | accent |
| `--brand-blue` | `#0A84FF` | accent |
| `--brand-green` | `#30D158` | accent |
| `--bg` | `#FFFFFF` | light background |
| `--bg-soft` | `#F5F5F7` | grey section background |
| `--bg-dark` | `#0B0B0F` | dark section background |
| `--ink` | `#1D1D1F` | body text |
| `--ink-soft` | `#6E6E73` | secondary text |
| `--line` | `#E3E3E6` | borders |

Signature gradient: `linear-gradient(100deg, #6C3CF4, #FF2D78 55%, #FF9F0A)`
Corner radius: `20px` (large), `12px` (small). Content max width: `1120px`.
Type: system UI stack, tight letter-spacing (`-0.03em`) on large headings.

Visual language: clean, high-contrast, plenty of white space, flat vector.
The "mix" idea is expressed as a **hard 50/50 split of two colours** across one
shape (see the existing product SVGs in `products.html` for the established
pattern — read them, match them, do not rewrite them).

## Constraints

- **Static site, no build step.** Output must work by opening an HTML file directly.
- **SVG strongly preferred** over raster. If raster is unavoidable, use `.webp`
  or `.png`, under 200 KB each.
- **No external requests** — no CDN fonts, no remote images, no tracking pixels.
  GitHub Pages serves these files as-is.
- Every SVG needs `role="img"` and a `<title>` or `aria-label` for accessibility.
- Must look correct on a 360px-wide phone screen as well as desktop.
- Give every SVG `<defs>` id a unique prefix (e.g. `hero-grad-1`) — ids collide
  when several inline SVGs share a page.

## Work queue (rough priority order)

1. **`favicon.svg`** + `favicon-32.png` — the MIXD "D" in the brand gradient.
2. **Open Graph / share card** `og-image.png`, 1200×630 — logo, tagline, gradient.
   This is what shows when the link is pasted into a chat or handed to the teacher.
3. **Hero background graphic** for the home page — abstract, must sit behind
   white text without hurting contrast.
4. **Section dividers / background shapes** for the light-grey and dark sections.
5. **Product art** for any new products beyond the six that already exist —
   match the existing 200×200 viewBox split-colour style exactly.
6. **Marketing plan diagrams** — the 4-step drop cycle and the 7Ps, as flat
   vector diagrams that hold up in a printed/PDF submission.
7. **Icons** to replace the emoji currently used in `.card-icon` blocks
   (🎯 📈 🤝 🔁 🌍 ♻️ 👕 💷 📍 📣 ⚙️ 📦 ✉️) — one consistent flat set, single-colour,
   24×24 viewBox.

Do items 1–3 first. Stop and report if the scope is unclear rather than guessing.

## Where things go

```
visuals/
├── AGENTS.md      <- this brief
├── HANDOFF.md     <- you write here: what you made + exact snippet to paste
├── drafts/        <- your experiments, alternates, rejected versions
└── exports/       <- FINISHED assets only, ready to use as-is
```

Anything in `exports/` is referenced from a page as `visuals/exports/<filename>`
(that path works both locally and on the live site).

## When you finish an asset

Append an entry to `visuals/HANDOFF.md` in this format:

```
### og-image.png
- File: visuals/exports/og-image.png
- Goes in: <head> of every .html page
- Snippet:
  <meta property="og:image" content="https://clwx-31.github.io/mixd-website/visuals/exports/og-image.png">
- Notes: 1200x630, 84 KB
```

Then stop. Someone else pastes it in.
