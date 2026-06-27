import { slugify } from "./utils";
import { resolveBlogImage } from "./images";

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


export async function prepareArticleSections(sections, postSlug, postTitle, heroImage, imageFolder) {
  const prepared = [];

  for (const section of sections) {
    if (section.type === "heading") {
      const id = slugify(section.text);
      const level = section.level || 2;
      prepared.push({ ...section, id, level });
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
