"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

/** Intrinsic dimensions for Next.js — display size is controlled via CSS (w-full, h-auto). */
const INTRINSIC_WIDTH = 1600;
const INTRINSIC_HEIGHT = 1200;

const VARIANT_STYLES = {
  inline: "blog-image-frame blog-image-frame--inline",
  hero: "blog-image-frame blog-image-frame--hero",
  card: "blog-image-frame blog-image-frame--card",
  featured: "blog-image-frame blog-image-frame--featured",
};

/**
 * Global blog image renderer — full image visible, no top-crop, preserves aspect ratio.
 */
export function BlogImage({
  src,
  alt = "",
  candidates = [],
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px",
  variant = "inline",
  className = "",
  frameClassName = "",
}) {
  const allCandidates = useMemo(
    () => [...new Set([src, ...candidates].filter(Boolean))],
    [src, candidates]
  );

  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);
  const current = allCandidates[index];

  const frameClass = [
    VARIANT_STYLES[variant] || VARIANT_STYLES.inline,
    frameClassName,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (failed || !current) {
    if (variant === "inline") return null;
    return (
      <div
        className={`${frameClass} blog-image-frame--empty`}
        aria-hidden={!alt}
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
      >
        <span className="text-xs font-medium tracking-widest text-slate-500 uppercase">
          Image unavailable
        </span>
      </div>
    );
  }

  return (
    <figure className={frameClass} data-blog-image-variant={variant}>
      <Image
        src={current}
        alt={alt}
        width={INTRINSIC_WIDTH}
        height={INTRINSIC_HEIGHT}
        priority={priority}
        sizes={sizes}
        quality={90}
        className="blog-image"
        onError={() => {
          if (index < allCandidates.length - 1) {
            setIndex((i) => i + 1);
          } else {
            setFailed(true);
          }
        }}
      />
    </figure>
  );
}
