import { TEMPLATE_DEFINITIONS } from "../components/templatesConfig";
import { getAllPosts } from "../lib/blog/posts";

/** Canonical production origin — must match metadataBase in layout.js */
const BASE_URL = "https://www.marriagebiodatahub.com";

/**
 * Indexable static routes (App Router pages under app/).
 * Excluded by design: /not-found, redirect-only paths (/blogs, /home, /template).
 */
const STATIC_ROUTES = [
  {
    path: "/",
    changeFrequency: "daily",
    priority: 1,
    lastmod: "2026-07-01",
  },
  {
    path: "/templates",
    changeFrequency: "weekly",
    priority: 0.9,
    lastmod: "2026-07-01",
  },
  {
    path: "/blog",
    changeFrequency: "weekly",
    priority: 0.85,
    lastmod: "2026-07-01",
  },
  {
    path: "/marriage-biodata-format",
    changeFrequency: "monthly",
    priority: 0.95,
    lastmod: "2026-07-01",
  },
  {
    path: "/what-is-marriage-biodata",
    changeFrequency: "monthly",
    priority: 0.9,
    lastmod: "2026-07-01",
  },
  {
    path: "/hindu-marriage-biodata",
    changeFrequency: "monthly",
    priority: 0.9,
    lastmod: "2026-07-01",
  },
  {
    path: "/marriage-biodata-format-2026",
    changeFrequency: "monthly",
    priority: 0.9,
    lastmod: "2026-08-01",
  },
  {
    path: "/wedding-season-2026-biodata-checklist",
    changeFrequency: "monthly",
    priority: 0.9,
    lastmod: "2026-08-01",
  },
  {
    path: "/horoscope-calculator",
    changeFrequency: "monthly",
    priority: 0.9,
    lastmod: "2026-07-01",
  },
  {
    path: "/muslim-biodata-for-marriage",
    changeFrequency: "monthly",
    priority: 0.9,
    lastmod: "2026-07-01",
  },
  {
    path: "/hindi-biodata-for-marriage",
    changeFrequency: "monthly",
    priority: 0.85,
    lastmod: "2026-07-01",
  },
  {
    path: "/marathi-biodata-for-marriage",
    changeFrequency: "monthly",
    priority: 0.85,
    lastmod: "2026-07-01",
  },
  {
    path: "/sikh-biodata-for-marriage",
    changeFrequency: "monthly",
    priority: 0.9,
    lastmod: "2026-07-01",
  },
  {
    path: "/christian-biodata-for-marriage",
    changeFrequency: "monthly",
    priority: 0.9,
    lastmod: "2026-07-01",
  },
  {
    path: "/jain-biodata-for-marriage",
    changeFrequency: "monthly",
    priority: 0.9,
    lastmod: "2026-07-01",
  },
  {
    path: "/nri-biodata-for-marriage",
    changeFrequency: "monthly",
    priority: 0.9,
    lastmod: "2026-07-01",
  },
  {
    path: "/about-me-for-marriage-biodata",
    changeFrequency: "monthly",
    priority: 0.85,
    lastmod: "2026-07-01",
  },
  {
    path: "/hobbies-for-marriage-biodata",
    changeFrequency: "monthly",
    priority: 0.8,
    lastmod: "2026-07-01",
  },
  {
    path: "/biodata-for-marriage-in-delhi",
    changeFrequency: "monthly",
    priority: 0.8,
    lastmod: "2026-07-01",
  },
  {
    path: "/biodata-for-marriage-in-mumbai",
    changeFrequency: "monthly",
    priority: 0.8,
    lastmod: "2026-07-01",
  },
  {
    path: "/biodata-for-marriage-in-pune",
    changeFrequency: "monthly",
    priority: 0.8,
    lastmod: "2026-07-01",
  },
  {
    path: "/biodata-for-marriage-in-chennai",
    changeFrequency: "monthly",
    priority: 0.8,
    lastmod: "2026-07-01",
  },
  {
    path: "/biodata-for-marriage-in-hyderabad",
    changeFrequency: "monthly",
    priority: 0.8,
    lastmod: "2026-07-01",
  },
  {
    path: "/biodata-for-marriage-in-bengaluru",
    changeFrequency: "monthly",
    priority: 0.8,
    lastmod: "2026-07-01",
  },
  {
    path: "/biodata-for-marriage-in-kolkata",
    changeFrequency: "monthly",
    priority: 0.8,
    lastmod: "2026-07-01",
  },
  {
    path: "/about-us",
    changeFrequency: "monthly",
    priority: 0.75,
    lastmod: "2026-07-01",
  },
  {
    path: "/contact-us",
    changeFrequency: "monthly",
    priority: 0.65,
    lastmod: "2026-07-01",
  },
  {
    path: "/privacy-policy",
    changeFrequency: "yearly",
    priority: 0.3,
    lastmod: "2026-06-01",
  },
  {
    path: "/terms-and-conditions",
    changeFrequency: "yearly",
    priority: 0.3,
    lastmod: "2026-06-01",
  },
];

function toAbsoluteUrl(path) {
  if (!path || path === "/") return BASE_URL;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${normalized}`;
}

function dedupeByUrl(entries) {
  const seen = new Set();
  return entries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}

function buildStaticEntries() {
  return STATIC_ROUTES.map(({ path, changeFrequency, priority, lastmod }) => ({
    url: toAbsoluteUrl(path),
    lastModified: lastmod ? new Date(lastmod) : new Date(),
    changeFrequency,
    priority,
  }));
}

function buildTemplateEntries() {
  const now = new Date();
  return TEMPLATE_DEFINITIONS.map((template) => ({
    url: toAbsoluteUrl(`/templates/${template.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
}

async function buildBlogEntries() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    url: toAbsoluteUrl(`/blog/${post.slug}`),
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
}

/**
 * @returns {import('next').MetadataRoute.Sitemap}
 */
export default async function sitemap() {
  return dedupeByUrl([
    ...buildStaticEntries(),
    ...buildTemplateEntries(),
    ...(await buildBlogEntries()),
  ]);
}
