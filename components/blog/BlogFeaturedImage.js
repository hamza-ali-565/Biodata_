"use client";

import { BlogImage } from "./BlogImage";

// image is server-resolved to the correct path by resolveBlogImage — trust it directly.
// No client-side candidate generation needed; it was producing wrong blog-1 fallbacks for every post.
export function BlogFeaturedImage({
  title,
  image,
  priority = false,
  className = "",
  frameClassName = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px",
  variant = "featured",
}) {
  return (
    <BlogImage
      src={image || null}
      alt={title}
      candidates={image ? [image] : []}
      priority={priority}
      sizes={sizes}
      variant={variant}
      className={className}
      frameClassName={frameClassName}
    />
  );
}
