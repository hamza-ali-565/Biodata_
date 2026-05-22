import fs from "fs";
import path from "path";
import { slugify, getBlogImageCandidates } from "./utils";

const BLOG_IMAGE_DIR = path.join(process.cwd(), "public", "images", "blog-1");

let cachedImageMap = null;

/**
 * Scan public/images/blog-1 and map slug -> public URL path.
 */
export function getDiscoveredBlogImages() {
  if (cachedImageMap) return cachedImageMap;

  const map = {};

  if (!fs.existsSync(BLOG_IMAGE_DIR)) {
    cachedImageMap = map;
    return map;
  }

  const files = fs.readdirSync(BLOG_IMAGE_DIR).filter((f) =>
    /\.(webp|jpe?g|png|avif|gif)$/i.test(f)
  );

  for (const file of files) {
    const slug = slugify(file.replace(/\.[^.]+$/i, ""));
    if (slug) {
      map[slug] = `/images/blog-1/${file}`;
    }
  }

  cachedImageMap = map;
  return map;
}

/**
 * Resolve the best image path for a blog post (discovered file or slug-based guess).
 */
export function resolveBlogImage(slug, title) {
  const discovered = getDiscoveredBlogImages();
  if (discovered[slug]) return discovered[slug];

  const titleSlug = slugify(title);
  if (discovered[titleSlug]) return discovered[titleSlug];

  return getBlogImageCandidates(slug, title)[0];
}

export function getAllBlogImageFiles() {
  if (!fs.existsSync(BLOG_IMAGE_DIR)) return [];
  return fs
    .readdirSync(BLOG_IMAGE_DIR)
    .filter((f) => /\.(webp|jpe?g|png|avif|gif)$/i.test(f));
}

/** All discovered images as { slug, path } for editorial section matching. */
export function listBlogImages() {
  const discovered = getDiscoveredBlogImages();
  return Object.entries(discovered).map(([slug, path]) => ({ slug, path }));
}
