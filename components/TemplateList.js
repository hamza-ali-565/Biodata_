"use client";

import { useState } from "react";
import Link from "next/link";
import { TemplateThumbnail } from "./TemplateThumbnail";

export function TemplateList({ templates }) {
  const [visibleCount, setVisibleCount] = useState(9);

  const visibleTemplates = templates.slice(0, visibleCount);
  const hasMore = visibleCount < templates.length;

  return (
    <>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visibleTemplates.map((template) => (
          <article
            key={template.id}
            className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/70 text-xs text-slate-200 overflow-hidden shadow-lg hover:border-brand-500/30 transition-all hover:shadow-brand-500/10 hover:shadow-2xl hover:-translate-y-1 max-w-full min-w-0"
          >
            <TemplateThumbnail templateDefinition={template} />

            <div className="p-4 sm:p-5 md:p-6 lg:p-5 flex-1 flex flex-col">
              <div className="space-y-1 lg:space-y-0">
                <h2 className="text-base lg:text-[15px] font-bold text-slate-50 group-hover:text-brand-400 transition-colors line-clamp-1 lg:line-clamp-none">
                  {template.name}
                </h2>
                <p className="mt-1 lg:mt-1.5 text-[10px] font-semibold uppercase tracking-widest text-slate-500 truncate">
                  {template.style}
                </p>
                <p className="mt-2.5 lg:mt-3 text-sm lg:text-xs leading-relaxed text-slate-300 line-clamp-2 lg:line-clamp-none">
                  {template.description}
                </p>
              </div>

              {/* Exact original flex items-center justify-between gap-2 on lg: but stacked/flex-wrap on mobile */}
              <div className="mt-6 flex flex-col sm:flex-row lg:flex-row lg:items-center items-stretch sm:items-center justify-between gap-3 sm:gap-4 lg:gap-2 border-t border-white/5 pt-4 mt-auto">
                <span className="inline-flex h-7 lg:h-6 items-center justify-center rounded-full bg-slate-900 border border-white/5 px-3 lg:px-2.5 text-[11px] lg:text-[10px] font-medium text-slate-400 overflow-hidden whitespace-nowrap text-ellipsis max-w-full">
                  {template.layout}
                </span>
                <Link
                  href={`/templates/${template.id}`}
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 sm:px-6 lg:px-4 py-2.5 lg:py-2 text-[13px] lg:text-[11px] font-bold text-slate-900 shadow-soft transition lg:hover:scale-105 hover:bg-brand-500 hover:text-white text-center w-full sm:w-auto lg:w-auto"
                >
                  Open template
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 9)}
            className="inline-flex items-center justify-center rounded-full border border-brand-500/30 bg-slate-900/40 px-8 py-3 text-sm font-semibold text-brand-300 transition-all duration-300 hover:bg-brand-500/10 hover:border-brand-500/50 hover:text-brand-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Load More Templates
          </button>
        </div>
      )}
    </>
  );
}
