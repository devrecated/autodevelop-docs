/**
 * Copyright (c) 2026 Devrecated
 *
 * Public Autodevelop handbook. Customer install, CLI, GitHub App, and use.
 * Do not add architecture, decision records, or kit internals.
 */
import { defineConfig } from "vitepress";

const SITE_NAME = "Autodevelop";
const SITE_DESCRIPTION =
  "Install Autodevelop, connect GitHub, and run tickets, mail, and ship gates in a product repository.";
const SITE_ORIGIN = "https://devprecated.github.io/autodevelop-docs";
const SITE_BASE = "/autodevelop-docs/";

const pageUrl = (relativePath = "") => {
  const trimmed = String(relativePath)
    .replace(/(^|\/)index\.md$/, "$1")
    .replace(/\.md$/, "");
  if (!trimmed || trimmed === "index") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}/${trimmed}`;
};

export default defineConfig({
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  base: SITE_BASE,
  titleTemplate: ":title",
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: `${SITE_ORIGIN}/`,
  },
  head: [
    ["meta", { name: "robots", content: "index,follow" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: `${SITE_BASE}logo.svg` }],
  ],
  transformHead({ pageData }) {
    const url = pageUrl(pageData.relativePath);
    const title = pageData.title || SITE_DESCRIPTION;
    const description = pageData.description || SITE_DESCRIPTION;
    return [
      ["link", { rel: "canonical", href: url }],
      ["meta", { name: "description", content: description }],
      ["meta", { property: "og:type", content: "website" }],
      ["meta", { property: "og:title", content: title }],
      ["meta", { property: "og:description", content: description }],
      ["meta", { property: "og:url", content: url }],
    ];
  },
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: SITE_NAME,
    nav: [
      { text: "Overview", link: "/overview" },
      { text: "Guide", link: "/guide" },
      { text: "Install", link: "/install" },
      { text: "CLI", link: "/cli" },
      { text: "Workflows", link: "/workflows/initial-setup" },
    ],
    sidebar: [
      {
        text: "Start",
        items: [
          { text: "Handbook", link: "/" },
          { text: "What is Autodevelop", link: "/overview" },
          { text: "Client guide", link: "/guide" },
          { text: "Install", link: "/install" },
          { text: "CLI", link: "/cli" },
          { text: "GitHub App", link: "/github" },
          { text: "Configure", link: "/configure" },
          { text: "Integration", link: "/integration" },
          { text: "Hosted apps", link: "/hosted" },
        ],
      },
      {
        text: "Workflows",
        items: [
          { text: "Initial setup", link: "/workflows/initial-setup" },
          { text: "Create tickets", link: "/workflows/create-tickets" },
          { text: "Notify stakeholders", link: "/workflows/notify-stakeholders" },
          { text: "Ship to staging", link: "/workflows/ship-to-staging" },
          { text: "Ship to production", link: "/workflows/ship-to-production" },
          { text: "When something breaks", link: "/workflows/when-something-breaks" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/devprecated/autodevelop-docs" },
    ],
    outline: [2, 3],
  },
});
