"use client";

import { useMemo } from "react";
import { getBlogImageCandidates } from "../../lib/blog/utils";
import { BlogImage } from "./BlogImage";

export function BlogFeaturedImage({
  slug,
  title,
  image,
  priority = false,
  className = "",
  frameClassName = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px",
  variant = "featured",
}) {
  const candidates = useMemo(() => {
    const list = image
      ? [image, ...getBlogImageCandidates(slug, title)]
      : getBlogImageCandidates(slug, title);
    return [...new Set(list)];
  }, [slug, title, image]);

  return (
    <BlogImage
      src={image || candidates[0]}
      alt={title}
      candidates={candidates}
      priority={priority}
      sizes={sizes}
      variant={variant}
      className={className}
      frameClassName={frameClassName}
    />
  );
}
