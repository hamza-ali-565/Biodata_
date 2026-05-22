"use client";

import { BlogImage } from "./BlogImage";

export function BlogInlineImage({ src, alt, caption, candidates = [] }) {
  return (
    <div className="blog-figure">
      <BlogImage
        src={src}
        alt={alt || ""}
        candidates={candidates}
        variant="inline"
        sizes="(max-width: 1024px) 100vw, min(900px, 75vw)"
      />
      {caption ? (
        <figcaption className="blog-figure-caption">{caption}</figcaption>
      ) : null}
    </div>
  );
}
