import { TEMPLATE_DEFINITIONS } from "../components/templatesConfig";
import { getAllPosts } from "../lib/blog/posts";

/** Canonical production origin — must match metadataBase in layout.js */
const BASE_URL = "https://marriagebiodatahub.com";

/**
 * Indexable static routes (App Router pages under app/).
 * Excluded by design: /not-found, redirect-only paths (/blogs, /home, /template).
 */
const STATIC_ROUTES = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/templates",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/blog",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    path: "/marriage-biodata-format",
    changeFrequency: "monthly",
    priority: 0.95,
  },
  {
    path: "/what-is-marriage-biodata",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/hindu-marriage-biodata",
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    path: "/muslim-biodata-for-marriage",
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    path: "/hindi-biodata-for-marriage",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/marathi-biodata-for-marriage",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/about-me-for-marriage-biodata",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/about-us",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/contact-us",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/privacy-policy",
    changeFrequency: "yearly",
    priority: 0.4,
  },
  {
    path: "/terms-and-conditions",
    changeFrequency: "yearly",
    priority: 0.4,
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
  const now = new Date();
  return STATIC_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: toAbsoluteUrl(path),
    lastModified: now,
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
