/**
 * Convert a title or filename to a URL slug.
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Build candidate image paths under /images/blog-1 for a post.
 */
export function getBlogImageCandidates(slug, title) {
  const baseNames = [
    slug,
    slugify(title),
    title.toLowerCase().trim(),
    title.trim(),
  ].filter(Boolean);

  const unique = [...new Set(baseNames)];
  const extensions = [".webp", ".jpg", ".jpeg", ".png", ".avif"];
  const candidates = [];

  for (const name of unique) {
    for (const ext of extensions) {
      candidates.push(`/images/blog-1/${name}${ext}`);
    }
  }

  return candidates;
}

export function formatBlogDate(isoDate) {
  if (!isoDate) return null;
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
