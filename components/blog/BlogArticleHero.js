import { Calendar } from "lucide-react";
import { BlogFeaturedImage } from "./BlogFeaturedImage";
import { formatBlogDate } from "../../lib/blog/utils";

export function BlogArticleHero({ slug, title, excerpt, image, publishedAt }) {
  const dateLabel = formatBlogDate(publishedAt);

  return (
    <header className="blog-article-hero">
      <div className="blog-article-hero-media premium-frame overflow-hidden rounded-none border-0 p-0 shadow-none sm:rounded-2xl sm:p-[1px]">
        <div aria-hidden className="premium-frame-glow rounded-none sm:rounded-2xl" />
        <div className="premium-panel overflow-hidden rounded-none p-2 sm:rounded-[calc(1rem-1px)] sm:p-3">
          <BlogFeaturedImage
            slug={slug}
            title={title}
            image={image}
            priority
            variant="hero"
            sizes="(max-width: 768px) 100vw, (max-width: 1600px) 100vw, 1600px"
          />
        </div>
      </div>

      <div className="blog-article-hero-meta mt-8 lg:mt-10">
        {dateLabel && (
          <p className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-400 sm:text-base">
            <Calendar className="h-4 w-4 text-emerald-400/80" aria-hidden />
            <time dateTime={publishedAt}>{dateLabel}</time>
          </p>
        )}
        <h1 className="blog-article-title" itemProp="headline">
          {title}
        </h1>
        {excerpt && (
          <p className="blog-article-deck mt-5" itemProp="description">
            {excerpt}
          </p>
        )}
      </div>
    </header>
  );
}
