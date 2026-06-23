import fs from "fs";
import path from "path";
import { slugify, getBlogImageCandidates } from "./utils";

const BLOG_IMAGES_BASE_DIR = path.join(process.cwd(), "public", "images");

const cachedImageMaps = {};

export async function getDiscoveredBlogImages(imageFolder = "blog-1") {
  if (cachedImageMaps[imageFolder]) return cachedImageMaps[imageFolder];

  const map = {};
  const folderPath = path.join(BLOG_IMAGES_BASE_DIR, imageFolder);

  try {
    const files = (await fs.promises.readdir(folderPath)).filter((f) =>
      /\.(webp|jpe?g|png|avif|gif)$/i.test(f)
    );
    for (const file of files) {
      const slug = slugify(file.replace(/\.[^.]+$/i, ""));
      if (slug) {
        map[slug] = `/images/${imageFolder}/${file}`;
      }
    }
  } catch {
    // folder doesn't exist or is unreadable — return empty map
  }

  cachedImageMaps[imageFolder] = map;
  return map;
}

export async function resolveBlogImage(slug, title, imageFolder = "blog-1") {
  const discovered = await getDiscoveredBlogImages(imageFolder);
  if (discovered[slug]) return discovered[slug];

  const titleSlug = slugify(title);
  if (discovered[titleSlug]) return discovered[titleSlug];

  return getBlogImageCandidates(slug, title, imageFolder)[0];
}

export async function getAllBlogImageFiles(imageFolder = "blog-1") {
  const folderPath = path.join(BLOG_IMAGES_BASE_DIR, imageFolder);
  try {
    return (await fs.promises.readdir(folderPath)).filter((f) =>
      /\.(webp|jpe?g|png|avif|gif)$/i.test(f)
    );
  } catch {
    return [];
  }
}

export async function listBlogImages(imageFolder = "blog-1") {
  const discovered = await getDiscoveredBlogImages(imageFolder);
  return Object.entries(discovered).map(([slug, filePath]) => ({ slug, path: filePath }));
}
