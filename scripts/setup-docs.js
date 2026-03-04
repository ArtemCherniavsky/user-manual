#!/usr/bin/env node
/**
 * setup-docs.js
 * Разворачивает шаблон Jekyll-документации в указанной папке.
 *
 * Запуск:
 *   node setup-docs.js
 *
 * Требования: Node.js 16+
 */

const fs   = require("fs");
const path = require("path");
const rl   = require("readline").createInterface({ input: process.stdin, output: process.stdout });

function ask(question, defaultVal) {
  return new Promise(resolve => {
    const hint = defaultVal ? ` [${defaultVal}]` : "";
    rl.question(`${question}${hint}: `, answer => {
      resolve(answer.trim() || defaultVal || "");
    });
  });
}

function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf-8");
  console.log("  created:", path.relative(process.cwd(), filePath));
}

async function main() {
  console.log("\n=== Jekyll Docs Setup ===\n");

  const targetDir  = await ask("Папка для нового проекта (будет создана)", "my-docs");
  const title      = await ask("Название документации", "My Documentation");
  const repoName   = await ask("Имя репозитория на GitHub (для baseurl)", targetDir);
  const ghUser     = await ask("GitHub username", "username");
  const logoUrl    = await ask("URL логотипа (SVG/PNG)", "");
  const link1Label = await ask("Ссылка 1 — название", "Video");
  const link1Url   = await ask("Ссылка 1 — URL", "");
  const link2Label = await ask("Ссылка 2 — название", "Samples");
  const link2Url   = await ask("Ссылка 2 — URL", "");
  const link3Label = await ask("Ссылка 3 — название", "Support");
  const link3Url   = await ask("Ссылка 3 — URL", "");

  rl.close();

  const root = path.resolve(process.cwd(), targetDir);
  if (fs.existsSync(root)) {
    console.log(`\nПапка "${targetDir}" уже существует. Файлы будут добавлены/перезаписаны.\n`);
  }

  console.log("\nСоздаю файлы...");

  // ── _config.yml ──────────────────────────────────────────────────────────
  write(path.join(root, "_config.yml"), `title: ${title}
description: Documentation
baseurl: "/${repoName}"
url: "https://${ghUser}.github.io"

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
      render_with_liquid: false

exclude:
  - scripts/
  - "*.py"
  - README.md
  - Gemfile
  - Gemfile.lock
`);

  // ── _layouts/default.html ────────────────────────────────────────────────
  const logoHtml = logoUrl
    ? `<img src="${logoUrl}" alt="${title}">`
    : `<span style="font-weight:600;font-size:15px;color:var(--color-text)">${title}</span>`;

  const navLinks = [
    [link1Label, link1Url],
    [link2Label, link2Url],
    [link3Label, link3Url],
  ].filter(([, u]) => u).map(([label, url]) =>
    `        <a href="${url}" target="_blank" rel="noopener">${label}</a>`
  ).join("\n");

  write(path.join(root, "_layouts", "default.html"), `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{% if page.title %}{{ page.title }} — {% endif %}{{ site.title }}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

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

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 15px;
      line-height: 1.7;
      color: var(--color-text);
      background: var(--color-bg);
      display: block;
    }

    /* ── Header ── */
    #site-header {
      position: sticky;
      top: 0;
      z-index: 50;
      width: 100%;
      height: var(--header-height);
      background: var(--color-bg);
      border-bottom: 1px solid var(--color-border);
    }

    #header-inner {
      max-width: var(--content-max);
      margin: 0 auto;
      padding: 0 24px;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 16px;
    }

    #logo {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      text-decoration: none;
    }

    #logo img { height: 28px; display: block; }

    /* Header search */
    #header-search {
      width: 100%;
      max-width: 700px;
      position: relative;
      justify-self: center;
    }

    #search-input {
      width: 100%;
      padding: 7px 10px 7px 32px;
      border: 1px solid var(--color-border);
      border-radius: 6px;
      background: var(--color-sidebar-bg);
      font-family: inherit;
      font-size: 13px;
      color: var(--color-text);
      outline: none;
      transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
    }

    #search-input:focus {
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px rgba(51,138,219,0.1);
      background: var(--color-bg);
    }

    #search-input::placeholder { color: #9ca3af; }

    #header-search::before {
      content: "";
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      width: 14px;
      height: 14px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: contain;
      pointer-events: none;
    }

    #search-results {
      display: none;
      position: absolute;
      left: 0; right: 0;
      top: calc(100% + 6px);
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: 8px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
      max-height: 60vh;
      overflow-y: auto;
      z-index: 100;
    }

    #search-results.visible { display: block; }
    #search-results a { display: block; padding: 10px 14px; text-decoration: none; border-bottom: 1px solid var(--color-border); color: var(--color-text); }
    #search-results a:last-child { border-bottom: none; }
    #search-results a:hover { background: var(--color-hover-bg); }
    .search-result-title { font-size: 13px; font-weight: 500; color: var(--color-text); margin-bottom: 2px; }
    .search-result-excerpt { font-size: 12px; color: var(--color-text-muted); line-height: 1.4; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .search-result-excerpt mark { background: #fef08a; color: var(--color-text); border-radius: 2px; }
    #search-empty { padding: 16px 14px; font-size: 13px; color: var(--color-text-muted); text-align: center; }

    /* Header nav */
    #header-nav { display: flex; align-items: center; gap: 2px; justify-self: end; }
    #header-nav a { font-size: 13.5px; font-weight: 500; color: var(--color-text-muted); text-decoration: none; padding: 6px 10px; border-radius: 6px; transition: background 0.1s, color 0.1s; white-space: nowrap; }
    #header-nav a:hover { background: var(--color-hover-bg); color: var(--color-text); }

    /* ── Page body ── */
    #page { max-width: var(--content-max); margin: 0 auto; display: flex; min-height: calc(100vh - var(--header-height)); }

    /* ── Sidebar ── */
    #sidebar {
      width: var(--sidebar-width);
      min-width: var(--sidebar-width);
      position: sticky;
      top: var(--header-height);
      height: calc(100vh - var(--header-height));
      background: var(--color-sidebar-bg);
      border-right: 1px solid var(--color-border);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    #sidebar-nav {
      flex: 1;
      overflow-y: auto;
      padding: 16px 8px 24px;
      scrollbar-width: thin;
      scrollbar-color: #d1d5db transparent;
      scrollbar-gutter: stable;
    }

    #sidebar-nav::-webkit-scrollbar { width: 4px; }
    #sidebar-nav::-webkit-scrollbar-track { background: transparent; }
    #sidebar-nav::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 2px; }
    #sidebar-nav ul { list-style: none; }
    #sidebar-nav li { margin: 1px 0; }

    #sidebar-nav a {
      display: flex; align-items: center; gap: 6px;
      padding: 5px 10px; border-radius: 6px;
      color: var(--color-text-sidebar); text-decoration: none;
      font-size: 13.5px; line-height: 1.4;
      transition: background 0.1s, color 0.1s;
    }

    #sidebar-nav a:hover { background: var(--color-hover-bg); color: var(--color-text); }
    #sidebar-nav a.active { background: var(--color-hover-bg); color: var(--color-text); font-weight: 600; }
    #sidebar-nav > ul > li > a { font-weight: 500; color: var(--color-text); font-size: 13px; margin-top: 4px; }

    #sidebar-nav li ul { display: none; padding-left: 10px; border-left: 1px solid var(--color-border); margin: 2px 0 2px 10px; }
    #sidebar-nav li.open > ul { display: block; }

    #sidebar-nav li.has-children > a::after {
      content: ""; display: inline-block; margin-left: auto;
      width: 14px; height: 14px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%236b7280'%3E%3Cpath fill-rule='evenodd' d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z' clip-rule='evenodd'/%3E%3C/svg%3E");
      background-repeat: no-repeat; background-position: center;
      flex-shrink: 0; transition: transform 0.15s;
    }
    #sidebar-nav li.has-children.open > a::after { transform: rotate(90deg); }

    /* ── Content ── */
    #main { flex: 1; min-width: 0; }
    #content { width: 100%; padding: 48px 56px 80px; }

    /* Breadcrumbs */
    .breadcrumbs { display: flex; align-items: center; flex-wrap: wrap; gap: 4px; margin-bottom: 20px; font-size: 13px; }
    .breadcrumbs a { color: var(--color-text-muted); text-decoration: none; }
    .breadcrumbs a:hover { color: var(--color-accent); }
    .bc-sep { color: #d1d5db; font-size: 12px; }
    .bc-current { color: var(--color-text); font-weight: 500; }

    /* Typography */
    #content h1 { font-size: 30px; font-weight: 600; letter-spacing: -0.02em; line-height: 1.25; margin-bottom: 8px; }
    #content h2 { font-size: 20px; font-weight: 600; letter-spacing: -0.01em; margin: 36px 0 12px; padding-top: 36px; border-top: 1px solid var(--color-border); }
    #content h3 { font-size: 17px; font-weight: 600; margin: 28px 0 10px; }
    #content h4 { font-size: 15px; font-weight: 600; margin: 20px 0 8px; }
    #content h1 + p, #content h1 + ul, #content h1 + ol { color: var(--color-text-muted); }
    #content p { margin-bottom: 16px; color: #374151; }
    #content ul, #content ol { margin: 0 0 16px 20px; color: #374151; }
    #content li { margin-bottom: 6px; }
    #content li > p { margin-bottom: 4px; }
    #content a { color: var(--color-accent); text-decoration: none; }
    #content a:hover { text-decoration: underline; }
    #content img { max-width: 100%; height: auto; margin: 20px 0; border: 1px solid var(--color-border); border-radius: 8px; display: block; }

    /* Code */
    #content pre { background: var(--color-code-bg); border: 1px solid var(--color-border); border-radius: 8px; padding: 20px 24px; overflow-x: auto; margin: 20px 0; font-size: 13.5px; line-height: 1.6; position: relative; }
    #content pre .hljs { background: transparent; padding: 0; display: block; }
    #content pre code { background: none; border: none; padding: 0; font-family: "JetBrains Mono", "Fira Code", "SF Mono", Consolas, monospace; }
    #content code { background: var(--color-code-bg); border: 1px solid var(--color-border); border-radius: 4px; padding: 2px 6px; font-size: 13px; font-family: "JetBrains Mono", "Fira Code", "SF Mono", Consolas, monospace; color: var(--color-text); }

    .copy-btn { position: absolute; top: 10px; right: 10px; padding: 4px 10px; background: #ffffff; border: 1px solid var(--color-border); border-radius: 5px; color: var(--color-text-muted); font-size: 12px; font-family: inherit; cursor: pointer; opacity: 0; transition: opacity 0.15s, background 0.15s; line-height: 1.4; }
    #content pre:hover .copy-btn { opacity: 1; }
    .copy-btn:hover { background: var(--color-hover-bg); color: var(--color-text); }
    .copy-btn.copied { color: #16a34a; border-color: #bbf7d0; opacity: 1; }

    /* Tables */
    #content table { border-collapse: collapse; width: 100%; margin: 20px 0; font-size: 14px; }
    #content thead tr { background: var(--color-code-bg); border-bottom: 2px solid var(--color-border); }
    #content th { padding: 10px 14px; font-weight: 600; text-align: left; }
    #content td { padding: 10px 14px; border-bottom: 1px solid var(--color-border); color: #374151; }
    #content tr:last-child td { border-bottom: none; }
    #content tr:hover td { background: #fafafa; }

    #content blockquote { border-left: 3px solid var(--color-accent); background: var(--color-accent-bg); padding: 12px 16px; border-radius: 0 6px 6px 0; margin: 20px 0; color: #1e40af; }
    #content blockquote p { color: inherit; margin: 0; }
    #content hr { border: none; border-top: 1px solid var(--color-border); margin: 32px 0; }

    /* Mobile */
    @media (max-width: 768px) {
      #header-search { max-width: none; }
      #header-nav { display: none; }
      #page { flex-direction: column; }
      #sidebar { width: 100%; min-width: unset; position: static; height: auto; }
      #sidebar-nav { max-height: 50vh; }
      #content { padding: 24px 20px 48px; }
    }
  </style>
</head>
<body>

  <header id="site-header">
    <div id="header-inner">
      <a id="logo" href="{{ site.baseurl }}/">
        ${logoHtml}
      </a>

      <div id="header-search">
        <input id="search-input" type="search" placeholder="Search documentation..." autocomplete="off" spellcheck="false">
        <div id="search-results"></div>
      </div>

      <nav id="header-nav">
${navLinks}
      </nav>
    </div>
  </header>

  <div id="page">
    <nav id="sidebar">
      <div id="sidebar-nav">
        <ul>
          {% include sidebar_item.html items=site.data.sidebar %}
        </ul>
      </div>
    </nav>

    <div id="main">
      <article id="content">
        {% include breadcrumbs.html %}
        {{ content }}
      </article>
    </div>
  </div>

  <link rel="stylesheet" href="{{ site.baseurl }}/pagefind/pagefind-ui.css">
  <script>
    var searchInput = document.getElementById('search-input');
    var searchResults = document.getElementById('search-results');
    var pagefindInstance = null;

    async function initPagefind() {
      if (pagefindInstance) return;
      try {
        const pf = await import('{{ site.baseurl }}/pagefind/pagefind.js');
        await pf.init();
        pagefindInstance = pf;
      } catch(e) {}
    }

    searchInput.addEventListener('focus', initPagefind);
    searchInput.addEventListener('input', async function() {
      var q = this.value.trim();
      if (!q) { searchResults.innerHTML = ''; searchResults.classList.remove('visible'); return; }
      await initPagefind();
      if (!pagefindInstance) return;
      var results = await pagefindInstance.search(q);
      if (!results.results.length) {
        searchResults.innerHTML = '<div id="search-empty">No results for "' + q + '"</div>';
        searchResults.classList.add('visible');
        return;
      }
      var html = '';
      for (var r of results.results.slice(0, 10)) {
        var data = await r.data();
        html += '<a href="' + data.url + '"><div class="search-result-title">' + (data.meta.title || 'Untitled') + '</div><div class="search-result-excerpt">' + (data.excerpt || '') + '</div></a>';
      }
      searchResults.innerHTML = html;
      searchResults.classList.add('visible');
    });
    document.addEventListener('click', function(e) {
      if (!document.getElementById('header-search').contains(e.target)) searchResults.classList.remove('visible');
    });
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') { searchResults.classList.remove('visible'); this.blur(); }
    });
  </script>
  <script>
    var STORAGE_KEY = 'sidebar_open';
    var SCROLL_KEY = 'sidebar_scroll';
    var nav = document.getElementById('sidebar-nav');

    function collectOpenHrefs() {
      var open = [];
      document.querySelectorAll('#sidebar-nav li.has-children').forEach(function(li) {
        if (li.classList.contains('open')) {
          var a = li.querySelector(':scope > a');
          if (a) open.push(a.getAttribute('href'));
        }
      });
      return open;
    }

    function saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(collectOpenHrefs()));
        localStorage.setItem(SCROLL_KEY, String(nav.scrollTop));
      } catch(e) {}
    }

    function openAncestors(el) {
      var cur = el.parentElement;
      while (cur && cur.id !== 'sidebar-nav') {
        if (cur.tagName === 'LI' && cur.classList.contains('has-children')) cur.classList.add('open');
        cur = cur.parentElement;
      }
    }

    var saved;
    try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch(e) { saved = []; }
    document.querySelectorAll('#sidebar-nav li.has-children > a').forEach(function(a) {
      if (saved.indexOf(a.getAttribute('href')) !== -1) {
        var li = a.closest('li');
        li.classList.add('open');
        openAncestors(li);
      }
    });

    var savedScroll = localStorage.getItem(SCROLL_KEY);
    if (savedScroll !== null) {
      nav.scrollTop = parseInt(savedScroll, 10);
    } else {
      var active = document.querySelector('#sidebar-nav a.active');
      if (active) active.scrollIntoView({ block: 'center', behavior: 'instant' });
    }

    document.querySelectorAll('#content pre').forEach(function(pre) {
      var btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.textContent = 'Copy';
      btn.addEventListener('click', function() {
        var code = pre.querySelector('code');
        var text = code ? code.innerText : pre.innerText;
        navigator.clipboard.writeText(text).then(function() {
          btn.textContent = 'Copied!';
          btn.classList.add('copied');
          setTimeout(function() { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
        });
      });
      pre.insertBefore(btn, pre.firstChild);
    });

    nav.addEventListener('click', function(e) {
      var a = e.target.closest('a');
      if (!a) return;
      var li = a.closest('li');
      if (!li) return;
      if (li.classList.contains('has-children')) {
        if (li.classList.contains('open')) {
          e.preventDefault();
          li.classList.remove('open');
          li.querySelectorAll('li.has-children.open').forEach(function(child) { child.classList.remove('open'); });
        } else {
          li.classList.add('open');
        }
      }
      saveState();
    });
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
  <script>
    document.querySelectorAll('#content pre code').forEach(function(block) {
      block.textContent = block.textContent.replace(/^\\n/, '').replace(/\\n$/, '');
      hljs.highlightElement(block);
    });
  </script>
</body>
</html>
`);

  // ── _includes/sidebar_item.html ──────────────────────────────────────────
  write(path.join(root, "_includes", "sidebar_item.html"), `{% for item in include.items %}
  {% assign item_full_url = item.url | prepend: site.baseurl %}
  {% assign current_url = page.url | remove: ".html" | remove_trailing_slash | prepend: site.baseurl %}
  {% assign item_url_clean = item_full_url | remove_trailing_slash %}
  {% assign is_active = false %}
  {% if current_url == item_url_clean %}{% assign is_active = true %}{% endif %}

  {% if item.children %}
    {% assign has_active_child = false %}
    {% for c1 in item.children %}
      {% assign c1_url = c1.url | prepend: site.baseurl | remove_trailing_slash %}
      {% if current_url == c1_url %}{% assign has_active_child = true %}{% endif %}
      {% if c1.children %}
        {% for c2 in c1.children %}
          {% assign c2_url = c2.url | prepend: site.baseurl | remove_trailing_slash %}
          {% if current_url == c2_url %}{% assign has_active_child = true %}{% endif %}
          {% if c2.children %}
            {% for c3 in c2.children %}
              {% assign c3_url = c3.url | prepend: site.baseurl | remove_trailing_slash %}
              {% if current_url == c3_url %}{% assign has_active_child = true %}{% endif %}
              {% if c3.children %}
                {% for c4 in c3.children %}
                  {% assign c4_url = c4.url | prepend: site.baseurl | remove_trailing_slash %}
                  {% if current_url == c4_url %}{% assign has_active_child = true %}{% endif %}
                {% endfor %}
              {% endif %}
            {% endfor %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}

    <li class="has-children{% if is_active or has_active_child %} open{% endif %}">
      <a href="{{ item_full_url }}"{% if is_active %} class="active"{% endif %}>{{ item.title }}</a>
      <ul>
        {% include sidebar_item.html items=item.children %}
      </ul>
    </li>
  {% else %}
    <li>
      <a href="{{ item_full_url }}"{% if is_active %} class="active"{% endif %}>{{ item.title }}</a>
    </li>
  {% endif %}
{% endfor %}
`);

  // ── _includes/breadcrumbs.html ───────────────────────────────────────────
  write(path.join(root, "_includes", "breadcrumbs.html"), `{% assign current_url = page.url | remove: ".html" | remove_trailing_slash | prepend: site.baseurl %}
{% assign crumbs = "" %}

{% for l1 in site.data.sidebar %}
  {% assign l1_url = l1.url | prepend: site.baseurl | remove_trailing_slash %}
  {% if l1.children %}
    {% for l2 in l1.children %}
      {% assign l2_url = l2.url | prepend: site.baseurl | remove_trailing_slash %}
      {% if l2.children %}
        {% for l3 in l2.children %}
          {% assign l3_url = l3.url | prepend: site.baseurl | remove_trailing_slash %}
          {% if l3.children %}
            {% for l4 in l3.children %}
              {% assign l4_url = l4.url | prepend: site.baseurl | remove_trailing_slash %}
              {% if current_url == l4_url %}
                {% assign crumb1 = l1.title | append: "||" | append: l1_url %}
                {% assign crumb2 = l2.title | append: "||" | append: l2_url %}
                {% assign crumb3 = l3.title | append: "||" | append: l3_url %}
                {% assign crumb4 = l4.title | append: "||" | append: l4_url %}
                {% assign crumbs = crumb1 | append: "::" | append: crumb2 | append: "::" | append: crumb3 | append: "::" | append: crumb4 %}
              {% endif %}
            {% endfor %}
          {% endif %}
          {% if current_url == l3_url %}
            {% assign crumb1 = l1.title | append: "||" | append: l1_url %}
            {% assign crumb2 = l2.title | append: "||" | append: l2_url %}
            {% assign crumb3 = l3.title | append: "||" | append: l3_url %}
            {% assign crumbs = crumb1 | append: "::" | append: crumb2 | append: "::" | append: crumb3 %}
          {% endif %}
        {% endfor %}
      {% endif %}
      {% if current_url == l2_url %}
        {% assign crumb1 = l1.title | append: "||" | append: l1_url %}
        {% assign crumb2 = l2.title | append: "||" | append: l2_url %}
        {% assign crumbs = crumb1 | append: "::" | append: crumb2 %}
      {% endif %}
    {% endfor %}
  {% endif %}
  {% if current_url == l1_url %}
    {% assign crumb1 = l1.title | append: "||" | append: l1_url %}
    {% assign crumbs = crumb1 %}
  {% endif %}
{% endfor %}

{% if crumbs != "" %}
  {% assign parts = crumbs | split: "::" %}
  <nav class="breadcrumbs">
    {% for part in parts %}
      {% assign pieces = part | split: "||" %}
      {% assign bc_title = pieces[0] %}
      {% assign bc_url = pieces[1] %}
      {% if forloop.last %}
        <span class="bc-current">{{ bc_title }}</span>
      {% else %}
        <a href="{{ bc_url }}">{{ bc_title }}</a>
        <span class="bc-sep">›</span>
      {% endif %}
    {% endfor %}
  </nav>
{% endif %}
`);

  // ── scripts/generate_sidebar.js ──────────────────────────────────────────
  write(path.join(root, "scripts", "generate_sidebar.js"), `#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const INDEX = path.join(ROOT, "index.md");
const OUTPUT = path.join(ROOT, "_data", "sidebar.yml");

const ITEM_RE = /^( *)- \\[([^\\]]+)\\]\\(([^)]+)\\)/;
const EXCLUDE_PATHS = []; // добавьте папки для исключения, например: ["Out_Of_Date/"]

function toUrl(filePath) {
  let url = "/" + filePath.replace(/\\\\/g, "/");
  if (url.endsWith("/index.md")) url = url.slice(0, -"index.md".length);
  else if (url.endsWith(".md")) url = url.slice(0, -3);
  return url;
}

function parseSidebar(text) {
  const items = [];
  const stack = [];
  let excludeUntilIndent = -1;

  for (const line of text.split("\\n")) {
    const m = ITEM_RE.exec(line);
    if (!m) continue;
    const indent = m[1].length;

    if (excludeUntilIndent >= 0) {
      if (indent > excludeUntilIndent) continue;
      else excludeUntilIndent = -1;
    }

    if (EXCLUDE_PATHS.some(p => m[3].startsWith(p))) {
      excludeUntilIndent = indent;
      continue;
    }

    const title = m[2];
    const url = toUrl(m[3]);
    const node = { title, url };

    if (stack.length === 0) {
      items.push(node);
      stack.push({ indent, list: items });
    } else {
      while (stack.length > 1 && stack[stack.length - 1].indent >= indent) stack.pop();
      const top = stack[stack.length - 1];
      if (indent > top.indent) {
        const parent = top.list[top.list.length - 1];
        if (!parent.children) parent.children = [];
        parent.children.push(node);
        stack.push({ indent, list: parent.children });
      } else {
        top.list.push(node);
      }
    }
  }
  return items;
}

function yamlStr(s) {
  if (/[:#\\[\\]{}&*!|>'""%@\`]/.test(s) || s.includes(",")) return \`"$\{s.replace(/"/g, '\\\\"')}\"\`;
  return s;
}

function toYaml(items, indent = 0) {
  const pad = " ".repeat(indent);
  let out = "";
  for (const item of items) {
    out += \`$\{pad}- title: $\{yamlStr(item.title)}\\n\`;
    out += \`$\{pad}  url: "$\{item.url}"\\n\`;
    if (item.children && item.children.length > 0) {
      out += \`$\{pad}  children:\\n\`;
      out += toYaml(item.children, indent + 4);
    }
  }
  return out;
}

const text = fs.readFileSync(INDEX, "utf-8");
const sidebar = parseSidebar(text);
fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
const yaml = toYaml(sidebar);
fs.writeFileSync(OUTPUT, yaml, "utf-8");
const count = yaml.split("\\n").filter(l => l.includes("title:")).length;
console.log(\`Generated $\{OUTPUT} with $\{count} items\`);
`);

  // ── .github/workflows/deploy.yml ─────────────────────────────────────────
  write(path.join(root, ".github", "workflows", "deploy.yml"), `name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Generate sidebar from index.md
        run: node scripts/generate_sidebar.js

      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.3'
          bundler-cache: true

      - name: Install Jekyll
        run: gem install jekyll jekyll-relative-links jekyll-optional-front-matter

      - name: Build Jekyll site
        run: jekyll build --destination _site

      - name: Index with Pagefind
        run: npx pagefind --site _site --output-path _site/pagefind

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: _site

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`);

  // ── index.md (шаблон) ────────────────────────────────────────────────────
  if (!fs.existsSync(path.join(root, "index.md"))) {
    write(path.join(root, "index.md"), `# ${title}

- [Getting Started](docs/getting-started.md)
- [Installation](docs/installation.md)
`);
    write(path.join(root, "docs", "getting-started.md"), `# Getting Started

Welcome to the documentation!
`);
    write(path.join(root, "docs", "installation.md"), `# Installation

Installation instructions here.
`);
  }

  // ── .gitignore ───────────────────────────────────────────────────────────
  write(path.join(root, ".gitignore"), `_site/
_data/sidebar.yml
.jekyll-cache/
.sass-cache/
Gemfile.lock
`);

  console.log(`
✓ Готово! Проект создан в: ${root}

Следующие шаги:
  1. Положите ваши .md файлы в папку проекта
  2. Обновите index.md — список ссылок на ваши файлы
  3. Создайте репозиторий на GitHub: https://github.com/new
     Имя репозитория: ${repoName}
  4. Запушьте:
       cd ${targetDir}
       git init && git add . && git commit -m "init"
       git remote add origin https://github.com/${ghUser}/${repoName}.git
       git push -u origin main
  5. В настройках репозитория: Settings → Pages → Source → GitHub Actions
  6. Сайт будет доступен по адресу: https://${ghUser}.github.io/${repoName}/
`);
}

main().catch(err => { console.error(err); process.exit(1); });
