import { slugify } from "./utils";
import { getDiscoveredBlogImages, resolveBlogImage } from "./images";

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

export async function resolveSectionImage(sectionText, postSlug, postTitle, imageFolder) {
  const discovered = await getDiscoveredBlogImages(imageFolder);
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

export async function getPostImageGallery(postSlug, postTitle, imageFolder) {
  const discovered = await getDiscoveredBlogImages(imageFolder);
  const gallery = [];
  const seen = new Set();

  const add = (path) => {
    if (path && !seen.has(path)) {
      seen.add(path);
      gallery.push(path);
    }
  };

  add(await resolveBlogImage(postSlug, postTitle, imageFolder));

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

export async function prepareArticleSections(sections, postSlug, postTitle, heroImage, imageFolder) {
  const gallery = await getPostImageGallery(postSlug, postTitle, imageFolder);
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
          (await resolveSectionImage(section.text, postSlug, postTitle, imageFolder)) ||
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

export async function preparePost(post) {
  const imageFolder = post.imageFolder || "blog-1";
  const image = await resolveBlogImage(post.slug, post.title, imageFolder);
  const sections = await prepareArticleSections(
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
