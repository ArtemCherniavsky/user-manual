# Project Architecture

Jekyll-based documentation site deployed to GitHub Pages via GitHub Actions.

---

## Repository Structure

```
repo-root/
├── index.md                        ← MASTER navigation file (source of truth for sidebar)
├── _config.yml                     ← Jekyll config (title, baseurl, url, plugins)
├── _layouts/
│   └── default.html                ← Single layout file: ALL CSS + HTML + JS in one file
├── _includes/
│   ├── sidebar_item.html           ← Recursive Liquid template for sidebar tree
│   └── breadcrumbs.html            ← Breadcrumb nav (reads from sidebar data)
├── _data/
│   └── sidebar.yml                 ← AUTO-GENERATED, do not edit manually
├── scripts/
│   └── generate_sidebar.js         ← Node.js script: reads index.md → writes _data/sidebar.yml
├── .github/
│   └── workflows/
│       └── deploy.yml              ← CI/CD: build + deploy to GitHub Pages
└── your-docs/                      ← Your actual .md documentation files (any folder structure)
```

---

## How the Sidebar Works

### Step 1 — Source of truth: `index.md`

The sidebar is driven entirely by `index.md` in the repo root.
It is a plain Markdown file with nested bullet links:

```markdown
# Title

- [Section 1](docs/section1.md)
  - [Page A](docs/section1/page-a.md)
  - [Page B](docs/section1/page-b.md)
- [Section 2](docs/section2.md)
```

Indentation (2 or 4 spaces) defines nesting depth. Up to 4 levels supported.

### Step 2 — Generation: `scripts/generate_sidebar.js`

Parses `index.md` and writes `_data/sidebar.yml`:

```yaml
- title: Section 1
  url: /docs/section1
  children:
    - title: Page A
      url: /docs/section1/page-a
```

Run locally: `node scripts/generate_sidebar.js`

To exclude a folder from the sidebar, add it to `EXCLUDE_PATHS` in the script:
```js
const EXCLUDE_PATHS = ["Out_Of_Date/"];
```

### Step 3 — Rendering: `_includes/sidebar_item.html`

Recursive Liquid template. Reads `site.data.sidebar` (= `_data/sidebar.yml`).
Called from `_layouts/default.html`:
```liquid
{% include sidebar_item.html items=site.data.sidebar %}
```

Active item detection: compares `page.url` with each item's URL.
Groups with active children get class `open` so they expand automatically.

---

## Layout and Styles: `_layouts/default.html`

**All CSS, HTML structure, and JavaScript live in this single file.**
There are no separate CSS files or JS files.

### Page Layout

```
┌─────────────────────────────────────── header (sticky, full width) ───┐
│  [logo]              [search input]              [Video Samples Support]│
└───────────────────────────────────────────────────────────────────────┘
┌──────── #page (max-width: 1280px, centered) ──────────────────────────┐
│ ┌── #sidebar ──┐  ┌──────────── #main ────────────────────────────────┐│
│ │ 260px wide   │  │  #content (padding: 48px 56px)                    ││
│ │ sticky       │  │  [breadcrumbs]                                    ││
│ │ scrollable   │  │  {{ content }}  (rendered markdown)               ││
│ └──────────────┘  └───────────────────────────────────────────────────┘│
└───────────────────────────────────────────────────────────────────────┘
```

### CSS Variables (edit these to restyle)

```css
:root {
  --header-height: 56px;
  --sidebar-width: 260px;
  --content-max: 1280px;
  --color-bg: #ffffff;
  --color-sidebar-bg: #ffffff;
  --color-border: #e7e9eb;
  --color-text: #1a1a1a;
  --color-text-muted: #6b7280;
  --color-text-sidebar: #374151;
  --color-accent: #338adb;
  --color-accent-bg: #e8f3fb;
  --color-hover-bg: #f3f4f6;
  --color-code-bg: #f6f8fa;
  --color-active-text: #1a6fb5;
}
```

### Header Layout

Uses CSS Grid with 3 columns: `1fr auto 1fr`
- Column 1: logo (left-aligned)
- Column 2: search input (centered, max-width 700px)
- Column 3: nav links (right-aligned)

### Active Sidebar Item Style

```css
#sidebar-nav a.active {
  background: var(--color-hover-bg);  /* #f3f4f6 — neutral gray */
  color: var(--color-text);           /* #1a1a1a — dark text */
  font-weight: 600;
}
```

No colored border. No blue accent.

### Code Blocks

- Light theme: background `#f6f8fa`, border `#e7e9eb`
- Syntax highlighting: **highlight.js 11.9** with `github` theme (loaded from CDN)
- Copy button: appears on hover (top-right corner of each `<pre>`)
- Leading/trailing newline trimmed before highlighting

---

## Search

Uses **Pagefind** — static search index built at deploy time.

- Index built by: `npx pagefind --site _site --output-path _site/pagefind`
- At runtime: search input in header loads `pagefind.js` lazily on first focus
- Results show title + excerpt with highlighted matches
- **Does not work on local `jekyll serve`** — index only exists after full build

---

## GitHub Actions: `deploy.yml`

Build steps in order:

1. `node scripts/generate_sidebar.js` — generates `_data/sidebar.yml` from `index.md`
2. `gem install jekyll jekyll-relative-links jekyll-optional-front-matter` — install Jekyll
3. `jekyll build --destination _site` — build static HTML
4. `npx pagefind --site _site --output-path _site/pagefind` — build search index
5. Upload `_site` and deploy to GitHub Pages

Triggers: push to `main` or manual dispatch.

---

## `_config.yml` — Required Settings

```yaml
title: Your Documentation Title
description: Short description.
baseurl: "/your-repo-name"          ← must match GitHub repo name exactly
url: "https://your-username.github.io"

plugins:
  - jekyll-relative-links
  - jekyll-optional-front-matter

relative_links:
  enabled: true
  collections: false

defaults:
  - scope:
      path: ""
    values:
      layout: default
      render_with_liquid: false      ← prevents Jekyll from processing Liquid in .md files

exclude:
  - scripts/
  - "*.py"
  - README.md
  - Gemfile
  - Gemfile.lock
```

**Critical:** `render_with_liquid: false` — without this, any `{{ }}` or `{% %}` in docs
will be processed as Liquid templates and may error out or disappear.

---

## Checklist: Setting Up a New Repo

- [ ] Copy `_layouts/default.html` — update logo URL and nav links inside
- [ ] Copy `_includes/sidebar_item.html`
- [ ] Copy `_includes/breadcrumbs.html`
- [ ] Copy `scripts/generate_sidebar.js`
- [ ] Copy `.github/workflows/deploy.yml`
- [ ] Create `_config.yml` — set correct `baseurl` and `url`
- [ ] Create `index.md` at repo root — list all your .md files as nested links
- [ ] Copy your `.md` documentation files
- [ ] Push to `main`
- [ ] GitHub repo Settings → Pages → Source: **GitHub Actions**
- [ ] `_data/sidebar.yml` is auto-generated — do NOT commit it (add to `.gitignore`)

---

## Common Problems

| Problem | Cause | Fix |
|---------|-------|-----|
| `_site` is empty, Pagefind finds 0 files | No `.md` content files / missing `index.md` | Add `index.md` and your docs |
| Sidebar is empty | `_data/sidebar.yml` missing or `index.md` missing | Check `generate_sidebar.js` step in Actions log |
| Pages show raw Liquid `{{ }}` | `render_with_liquid: false` missing in `_config.yml` | Add it to defaults |
| Site URL is wrong / 404 | `baseurl` doesn't match repo name | Fix `baseurl` in `_config.yml` |
| Search doesn't work locally | Pagefind index not built | Only works after full GitHub Actions deploy |
| Breadcrumbs missing | Page URL not found in `sidebar.yml` | Make sure page is listed in `index.md` |
