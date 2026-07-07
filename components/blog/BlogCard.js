import Link from "next/link";
import { ArrowUpRight, ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogFeaturedImage } from "./BlogFeaturedImage";
import { formatBlogDate } from "../../lib/blog/utils";
import { CATEGORY_LABELS, CATEGORY_COLORS } from "../../lib/blog/constants";

export function BlogCard({
  slug,
  title,
  excerpt,
  image,
  publishedAt,
  category,
  readTime,
  featured = false,
  layout = "editorial",
}) {
  const dateLabel = formatBlogDate(publishedAt);
  const categoryLabel = category ? CATEGORY_LABELS[category] : null;
  const categoryColor = category ? CATEGORY_COLORS[category] : null;

  if (layout === "grid") {
    return (
      <article className="premium-card blog-card-grid group relative overflow-hidden p-0">
        <Link href={`/blog/${slug}`} className="flex h-full flex-col">
          <div className="blog-card-grid-media">
            <BlogFeaturedImage
              slug={slug}
              title={title}
              image={image}
              variant="card"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            />
          </div>

          <div className="blog-card-grid-content flex flex-1 flex-col">
            {categoryLabel && (
              <span className={`category-label ${categoryColor}`}>{categoryLabel}</span>
            )}

            <h2 className="blog-card-title mt-3 text-lg leading-snug line-clamp-2 sm:text-xl">
              {title}
            </h2>

            <p className="blog-card-excerpt mt-3 text-sm leading-relaxed line-clamp-3">
              {excerpt}
            </p>

            <div className="mt-5 flex flex-1 items-end justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                {dateLabel && <time dateTime={publishedAt}>{dateLabel}</time>}
                {dateLabel && readTime && <span aria-hidden>&middot;</span>}
                {readTime && <span>{readTime} min read</span>}
              </div>

              <span className="blog-card-read-more">
                Read more
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </span>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article
      className={`premium-card group overflow-hidden p-0 ${
        featured ? "blog-card-featured" : "blog-card-editorial"
      }`}
    >
      <div className="blog-card-layout">
        <Link
          href={`/blog/${slug}`}
          className="blog-card-media block shrink-0"
          tabIndex={-1}
          aria-hidden
        >
          <BlogFeaturedImage
            slug={slug}
            title={title}
            image={image}
            variant="card"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Link>

        <div className="blog-card-content flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-400">
            {categoryLabel && (
              <span className={`category-label ${categoryColor}`}>{categoryLabel}</span>
            )}
            {dateLabel && (
              <p className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-emerald-400/80" aria-hidden />
                <time dateTime={publishedAt}>{dateLabel}</time>
              </p>
            )}
            {readTime && (
              <p className="flex items-center gap-2 text-slate-500">
                <Clock className="h-4 w-4" aria-hidden />
                <span>{readTime} min read</span>
              </p>
            )}
          </div>

          <h2 className="blog-card-title mt-5">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h2>

          <p className="blog-card-excerpt mt-4">{excerpt}</p>

          <div className="mt-8">
            <Link href={`/blog/${slug}`} className="blog-card-cta">
              Read Full Article
              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
