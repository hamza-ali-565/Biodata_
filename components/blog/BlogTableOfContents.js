"use client";

import { useEffect, useState, useCallback } from "react";
import { List, ChevronDown } from "lucide-react";

export function BlogTableOfContents({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
      setMobileOpen(false);
    }
  }, []);

  if (!items.length) return null;

  const tocList = (
    <ul className="space-y-1">
      {items.map((item) => {
        const isActive = activeId === item.id;
        const isH3 = item.level === 3;

        return (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`blog-toc-link w-full text-left ${isH3 ? "blog-toc-link-nested" : ""} ${
                isActive ? "blog-toc-link-active" : ""
              }`}
            >
              <span className="line-clamp-2">{item.text}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Mobile / tablet collapsible */}
      <div className="blog-toc-mobile lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="blog-toc-mobile-trigger"
          aria-expanded={mobileOpen}
        >
          <List className="h-5 w-5 text-emerald-400/90" aria-hidden />
          <span className="font-semibold text-white">On this page</span>
          <ChevronDown
            className={`ml-auto h-5 w-5 text-slate-400 transition-transform ${mobileOpen ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
        {mobileOpen && (
          <nav aria-label="Table of contents" className="blog-toc-mobile-panel">
            {tocList}
          </nav>
        )}
      </div>

      {/* Desktop sticky sidebar */}
      <aside
        className="blog-toc-sidebar hidden lg:block"
        aria-label="Table of contents"
      >
        <div className="blog-toc-sidebar-inner">
          <p className="blog-toc-label">
            <List className="h-4 w-4 text-emerald-400/80" aria-hidden />
            On this page
          </p>
          <nav>{tocList}</nav>
        </div>
      </aside>
    </>
  );
}
