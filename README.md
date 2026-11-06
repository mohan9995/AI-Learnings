# AI Learnings Hub 🧠⚡

**AI Learnings** (`ai-learnings.dev`) is a community-driven engineering portal and technical blog covering the frontiers of Generative AI, Large Language Model (LLM) reasoning architectures, autonomous agent workflows, production RAG, and Model Context Protocol (MCP) integrations.

Built for speed, aesthetics, and clean readability, the portal utilizes **Astro**, **Tailwind CSS v4**, **TypeScript**, **MDX**, **Shiki**, and client-side instant search indexing. It compiles into a blazing-fast static website designed for 100/100 Google Lighthouse scores.

---

## 🏗️ Architecture & Stack

- **Framework**: Astro (Static site generation)
- **Styling**: Tailwind CSS v4 with unified design tokens in `src/styles/global.css` (Stripe/Mintlify-inspired Technical Navy dark theme & clean modern light theme)
- **Content Engine**: Astro Content Layer with Glob Loaders and strict Zod schemas (`src/content.config.ts`)
- **Code Frame & Highlighting**: Shiki with copy buttons, language tags, and filename headers (`src/components/mdx/Pre.astro`)
- **Instant Search**: Keyboard-navigated client-side search (`⌘K` / `Ctrl+K`), powered by `src/pages/search-index.json.ts`
- **Interactive Diagrams**: Client-side lazy-loaded Mermaid.js rendering with zero performance penalty on non-diagram pages
- **SEO & Social**: Automated Open Graph tags, Twitter cards, RSS 2.0 feed (`/rss.xml`), sitemap generator, and JSON-LD structured data schemas (`TechArticle`, `BreadcrumbList`, `FAQPage`)
- **Typography & Prose**: Apple-style rounded cards, responsive prose container, alert callouts (`> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!CAUTION]`)

---

## 📂 Project Directory Structure

```text
/
├── public/                  # Static assets (favicons, robots.txt, default avatars)
├── src/
│   ├── components/
│   │   ├── mdx/             # MDX customization components (Pre.astro code blocks)
│   │   ├── Header.astro     # Sticky glassmorphism header, theme toggle, mobile drawer
│   │   ├── Footer.astro     # Categories, site map links, newsletter form
│   │   └── SearchModal.astro# Accessible search overlay (⌘K, arrow key navigation)
│   ├── content/             # Structured content collections (MDX files)
│   │   ├── blogs/           # In-depth AI engineering & research blogs
│   │   ├── tutorials/       # Hands-on developer tutorials (Agents, MCP, Vector Search)
│   │   ├── architecture/    # Model & system architecture blueprints (Attention, KV Cache)
│   │   ├── prompts/         # Production system prompts, CoT, and tool routing schemas
│   │   ├── interview/       # AI/ML engineer system design interview scenarios
│   │   └── releases/        # Frontier model releases & benchmark evaluations
│   ├── layouts/
│   │   ├── BaseLayout.astro # Core HTML layout, flash-free theme script, SEO, analytics
│   │   └── ArticleLayout.astro # Article layout with TOC, reading time, FAQs, share, Giscus
│   ├── pages/
│   │   ├── blogs/           # Blog directory and individual slug pages
│   │   ├── tutorials/       # Tutorial listings and dynamic route pages
│   │   ├── architecture/    # Architecture blueprints listing and pages
│   │   ├── prompts/         # Prompt library listing and pages
│   │   ├── interview/       # Interview prep listings and pages
│   │   ├── releases/        # Release notes listings and pages
│   │   ├── tags/[tag].astro # Tag filtering pages
│   │   ├── categories/[category].astro # Category filtering pages
│   │   ├── authors/[author].astro     # Author portfolio pages
│   │   ├── search-index.json.ts # Search index generator API endpoint
│   │   ├── rss.xml.ts       # RSS feed generator API endpoint
│   │   ├── about.astro      # About page
│   │   ├── contact.astro    # Contact page
│   │   ├── contributors.astro # Contributor bios
│   │   └── 404.astro        # Custom 404 page
│   ├── styles/
│   │   └── global.css       # Full Tailwind CSS v4 rules & custom theme variables
│   └── config.ts            # Centralized site configurations & navigation items
├── astro.config.mjs         # Astro & Tailwind Vite integrations
├── package.json             # NPM dependencies & scripts
└── tsconfig.json            # TypeScript path aliases
```

---

## 🚀 Quickstart & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser to `http://localhost:4321`.

### 3. Build for Production
```bash
npm run build
```
Static output is compiled to `./docs` (ready for GitHub Pages or static host deployment).

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🎨 Styling & Theming

The site preserves the exact custom styling system from the reference repository:
- **Light Theme**: Soft slate background (`#F8FAFC`), crisp navy typography (`#0F172A`), indigo accents (`#4F46E5`).
- **Dark Theme**: Deep navy-slate background (`#0B0F17`), elevated card surfaces (`#131B2A`), high-contrast text (`#F8FAFC`), sky accents (`#38BDF8`), and subtle radial gradient mesh backgrounds.
- Zero-flash client theme switcher supporting system preferences and `localStorage` persistence.
