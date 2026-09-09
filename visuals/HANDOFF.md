# Handoff — finished visuals

Codex appends one entry per finished asset here. Nothing is wired into the site
until an entry appears below and someone pastes the snippet in.

Format:

```
### <filename>
- File: visuals/exports/<filename>
- Goes in: <which page / which section>
- Snippet: <the exact HTML to paste>
- Notes: <size, anything to watch for>
```

---

### favicon.svg
- File: visuals/exports/favicon.svg
- Goes in: `<head>` of every `.html` page
- Snippet:
  ```html
  <link rel="icon" href="visuals/exports/favicon.svg" type="image/svg+xml">
  ```
- Notes: Scalable transparent MIXD “D” mark in the exact brand gradient; 617 bytes.

### favicon-32.png
- File: visuals/exports/favicon-32.png
- Goes in: `<head>` of every `.html` page, directly after the SVG favicon link
- Snippet:
  ```html
  <link rel="icon" href="visuals/exports/favicon-32.png" type="image/png" sizes="32x32">
  ```
- Notes: 32×32 PNG fallback; 1.3 KB.

### og-image.png
- File: visuals/exports/og-image.png
- Goes in: `<head>` of every `.html` page
- Snippet:
  ```html
  <meta property="og:image" content="https://clwx-31.github.io/mixd-website/visuals/exports/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="MIXD — Two brands. One fit. Limited-run collaboration apparel.">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="https://clwx-31.github.io/mixd-website/visuals/exports/og-image.png">
  ```
- Notes: 1200×630, 75 KB. High-contrast layout keeps the logo and tagline legible in small chat previews.

### hero-background.svg
- File: visuals/exports/hero-background.svg
- Goes in: Home-page hero in `index.html`, plus the matching rule in `css/style.css`
- Snippet:
  ```html
  <!-- Replace only the home-page hero's opening tag. -->
  <section class="hero hero--home">
  ```
  ```css
  /* Dark home hero with a quiet center for readable copy. */
  .hero--home {
    min-height: min(760px, calc(100svh - 60px));
    display: grid;
    place-items: center;
    color: var(--ink-invert);
    background-color: var(--bg-dark);
    background-image: url("../visuals/exports/hero-background.svg");
    background-position: center;
    background-size: cover;
  }

  .hero--home::before { display: none; }
  .hero--home .lead { color: rgba(255, 255, 255, 0.72); }
  .hero--home .eyebrow { color: #FFFFFF; }
  .hero--home .btn-ghost {
    color: #FFFFFF;
    border-color: rgba(255, 255, 255, 0.32);
  }
  .hero--home .btn-ghost:hover { background: rgba(255, 255, 255, 0.1); }

  @media (max-width: 680px) {
    .hero--home {
      min-height: 620px;
      background-position: center;
    }
  }
  ```
- Notes: 1600×820 responsive SVG, approximately 3.6 KB. Edge-weighted split-colour forms preserve a dark central field for white hero text at desktop and 360px phone widths.
