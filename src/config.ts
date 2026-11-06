export const SITE_NAME = "AI Learnings";
export const SITE_DOMAIN = "ai-learnings.dev";
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const SITE_DESCRIPTION = "The premier community-driven engineering portal and blog for AI Learnings, LLM reasoning architectures, autonomous agent workflows, production RAG, and MCP integrations.";

// Navigation Menu Config
export const NAV_ITEMS = [
  { label: "Blogs", href: "/blogs" },
  { label: "Tutorials", href: "/tutorials" },
  { label: "Architecture", href: "/architecture" },
  { label: "Prompt Library", href: "/prompts" },
  {
    label: "Deep Dives",
    href: "/blogs",
    children: [
      { label: "Agentic Systems", href: "/tags/agents" },
      { label: "Production RAG", href: "/tags/rag" },
      { label: "Model Context Protocol (MCP)", href: "/tags/mcp" },
      { label: "Reasoning Models", href: "/tags/reasoning" },
      { label: "Fine-Tuning & LoRA", href: "/tags/fine-tuning" },
    ]
  },
  { label: "Interview", href: "/interview" },
  { label: "Model Releases", href: "/releases" },
  { label: "About", href: "/about" },
];

// Footer Config
export const FOOTER_LINKS = {
  categories: [
    { label: "Agentic Architectures", href: "/tags/agents" },
    { label: "Reasoning & Test-Time Compute", href: "/tags/reasoning" },
    { label: "Hybrid RAG & Vector DBs", href: "/tags/rag" },
    { label: "Model Context Protocol (MCP)", href: "/tags/mcp" },
    { label: "Fine-Tuning & LoRA", href: "/tags/fine-tuning" },
    { label: "Prompt Engineering & Guardrails", href: "/tags/prompt-engineering" }
  ],
  company: [
    { label: "About AI Learnings", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Contributors", href: "/contributors" },
    { label: "RSS Feed", href: "/rss.xml" },
    { label: "Sitemap", href: "/sitemap-index.xml" }
  ],
  socials: {
    github: "https://github.com/mohan9995",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  }
};

// Giscus Comments Configuration
export const GISCUS_CONFIG = {
  repo: "mohan9995/ai-learnings",
  repoId: "R_kgDON-placeholder",
  category: "Announcements",
  categoryId: "DIC_kwDON-placeholder",
  mapping: "pathname",
  strict: "1",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "bottom",
  theme: "preferred_color_scheme",
  lang: "en",
  loading: "lazy"
};

// Newsletter Configuration (Mailchimp Embed Post URL)
export const MAILCHIMP_ACTION_URL = "https://example.us21.list-manage.com/subscribe/post?u=placeholder_u&id=placeholder_id";

// Analytics Configuration
export const GOOGLE_ANALYTICS_ID = "G-AILEARNINGS01";
export const GOOGLE_SEARCH_CONSOLE_ID = "gsc-verification-placeholder-string";
export const MICROSOFT_CLARITY_ID = "clarity-placeholder-id";

// Default Authors
export const DEFAULT_AUTHOR = {
  name: "Mohan Sai Puttagunta",
  avatar: "/images/authors/mohan-sai.webp",
  bio: "AI Researcher and Systems Architect writing about frontier LLMs, autonomous agents, and production machine learning.",
  twitter: "mohan9995"
};
