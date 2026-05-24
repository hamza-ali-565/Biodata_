import fs from "fs";
import path from "path";
import { slugify, getBlogImageCandidates } from "./utils";

const BLOG_IMAGES_BASE_DIR = path.join(process.cwd(), "public", "images");

let cachedImageMaps = {};

/**
 * Scan public/images/[imageFolder] and map slug -> public URL path.
 */
export function getDiscoveredBlogImages(imageFolder = "blog-1") {
  if (cachedImageMaps[imageFolder]) return cachedImageMaps[imageFolder];

  const map = {};
  const folderPath = path.join(BLOG_IMAGES_BASE_DIR, imageFolder);

  if (!fs.existsSync(folderPath)) {
    cachedImageMaps[imageFolder] = map;
    return map;
  }

  const files = fs.readdirSync(folderPath).filter((f) =>
    /\.(webp|jpe?g|png|avif|gif)$/i.test(f)
  );

  for (const file of files) {
    const slug = slugify(file.replace(/\.[^.]+$/i, ""));
    if (slug) {
      map[slug] = `/images/${imageFolder}/${file}`;
    }
  }

  cachedImageMaps[imageFolder] = map;
  return map;
}

/**
 * Resolve the best image path for a blog post (discovered file or slug-based guess).
 */
export function resolveBlogImage(slug, title, imageFolder = "blog-1") {
  const discovered = getDiscoveredBlogImages(imageFolder);
  if (discovered[slug]) return discovered[slug];

  const titleSlug = slugify(title);
  if (discovered[titleSlug]) return discovered[titleSlug];

  return getBlogImageCandidates(slug, title, imageFolder)[0];
}

export function getAllBlogImageFiles(imageFolder = "blog-1") {
  const folderPath = path.join(BLOG_IMAGES_BASE_DIR, imageFolder);
  if (!fs.existsSync(folderPath)) return [];
  return fs
    .readdirSync(folderPath)
    .filter((f) => /\.(webp|jpe?g|png|avif|gif)$/i.test(f));
}

/** All discovered images as { slug, path } for editorial section matching. */
export function listBlogImages(imageFolder = "blog-1") {
  const discovered = getDiscoveredBlogImages(imageFolder);
  return Object.entries(discovered).map(([slug, path]) => ({ slug, path }));
}
