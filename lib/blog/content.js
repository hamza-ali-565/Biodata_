import { slugify } from "./utils";
import { getDiscoveredBlogImages, resolveBlogImage } from "./images";

/**
 * Build table of contents from section headings.
 */
export function buildTableOfContents(sections) {
  return sections
    .filter(
      (s) =>
        s.type === "heading" &&
        (s.level === 2 || s.level === 3 || !s.level)
    )
    .map((s) => ({
      id: s.id || slugify(s.text),
      text: s.text,
      level: s.level === 3 ? 3 : 2,
    }));
}

/**
 * Resolve image for a section heading from discovered files.
 */
export function resolveSectionImage(sectionText, postSlug, postTitle, imageFolder) {
  const discovered = getDiscoveredBlogImages(imageFolder);
  const keys = [
    slugify(sectionText),
    slugify(`${postSlug}-${sectionText}`),
    slugify(`${postTitle}-${sectionText}`),
  ].filter(Boolean);

  for (const key of keys) {
    if (discovered[key]) return discovered[key];
  }

  for (const [fileSlug, path] of Object.entries(discovered)) {
    for (const key of keys) {
      if (fileSlug === key || fileSlug.includes(key) || key.includes(fileSlug)) {
        return path;
      }
    }
  }

  return null;
}

/**
 * All images in blog-1 related to this post (for cycling between sections).
 */
export function getPostImageGallery(postSlug, postTitle, imageFolder) {
  const discovered = getDiscoveredBlogImages(imageFolder);
  const gallery = [];
  const seen = new Set();

  const add = (path) => {
    if (path && !seen.has(path)) {
      seen.add(path);
      gallery.push(path);
    }
  };

  add(resolveBlogImage(postSlug, postTitle, imageFolder));

  const slugParts = postSlug.split("-").filter((p) => p.length > 3);

  for (const [fileSlug, path] of Object.entries(discovered)) {
    const matchesPost =
      fileSlug === postSlug ||
      fileSlug.startsWith(`${postSlug}-`) ||
      postSlug.startsWith(fileSlug) ||
      slugParts.some((part) => fileSlug.includes(part));

    if (matchesPost) add(path);
  }

  return gallery;
}

/**
 * Enrich sections with heading ids and editorial figures after H2 blocks.
 */
export function prepareArticleSections(sections, postSlug, postTitle, heroImage, imageFolder) {
  const gallery = getPostImageGallery(postSlug, postTitle, imageFolder);
  const usedImages = new Set();
  if (heroImage) usedImages.add(heroImage);

  let h2Index = 0;
  const prepared = [];

  for (const section of sections) {
    if (section.type === "heading") {
      const id = slugify(section.text);
      const level = section.level || 2;
      prepared.push({ ...section, id, level });

      if (level === 2) {
        let figureSrc =
          resolveSectionImage(section.text, postSlug, postTitle, imageFolder) ||
          gallery.find((src) => !usedImages.has(src)) ||
          null;

        if (figureSrc && figureSrc === heroImage && h2Index > 0) {
          figureSrc = gallery.find((src) => !usedImages.has(src) && src !== heroImage) || null;
        }

        if (figureSrc && !usedImages.has(figureSrc)) {
          usedImages.add(figureSrc);
          prepared.push({
            type: "figure",
            src: figureSrc,
            alt: section.text,
            caption: null,
          });
        }
        h2Index += 1;
      }
      continue;
    }

    prepared.push(section);
  }

  return prepared;
}

export function preparePost(post) {
  const imageFolder = post.imageFolder || "blog-1";
  const image = resolveBlogImage(post.slug, post.title, imageFolder);
  const sections = prepareArticleSections(
    post.sections,
    post.slug,
    post.title,
    image,
    imageFolder
  );
  const tableOfContents = buildTableOfContents(sections);

  return {
    ...post,
    image,
    sections,
    tableOfContents,
  };
}
