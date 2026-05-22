import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogFeaturedImage } from "./BlogFeaturedImage";
import { formatBlogDate } from "../../lib/blog/utils";

export function BlogCard({ slug, title, excerpt, image, publishedAt, featured = false }) {
  const dateLabel = formatBlogDate(publishedAt);

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
            {dateLabel && (
              <p className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-emerald-400/80" aria-hidden />
                <time dateTime={publishedAt}>{dateLabel}</time>
              </p>
            )}
            <p className="flex items-center gap-2 text-slate-500">
              <Clock className="h-4 w-4" aria-hidden />
              <span>Editorial</span>
            </p>
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
