import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function RelatedPosts({ currentSlug, currentCategory, allPosts }) {
  if (!currentCategory) return null;

  const related = allPosts
    .filter((p) => p.slug !== currentSlug && p.category === currentCategory)
    .slice(0, 2);

  if (related.length === 0) return null;

  return (
    <section className="related-posts mt-14 border-t border-white/[0.08] pt-10 sm:mt-16">
      <h3 className="text-xl font-bold text-white sm:text-2xl">Related guides</h3>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="related-card group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-slate-900/50 p-5 transition-colors hover:border-emerald-500/25"
          >
            <span className="text-base font-semibold leading-snug text-white">{post.title}</span>
            <span className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-200/90">
              {post.readTime ? `${post.readTime} min read` : "Read more"}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
