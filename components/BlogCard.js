import Link from "next/link";

export function BlogCard({ slug, title, excerpt }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70">
      <div className="h-32 w-full bg-gradient-to-tr from-brand-500/40 via-rose-400/30 to-sky-400/30" />
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h2 className="text-sm font-semibold text-slate-50">{title}</h2>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-300">
          {excerpt}
        </p>
        <div className="mt-4">
          <Link
            href={`/blog/${slug}`}
            className="inline-flex text-xs font-semibold text-brand-200 underline-offset-4 hover:underline"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
}

