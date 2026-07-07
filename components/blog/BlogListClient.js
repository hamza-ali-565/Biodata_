"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "./BlogCard";
import { CATEGORIES, FEATURED_POST_SLUG } from "../../lib/blog/constants";

export function BlogListClient({ posts }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const featuredPost = useMemo(
    () => posts.find((p) => p.slug === FEATURED_POST_SLUG) || posts[0],
    [posts]
  );

  const filteredPosts = useMemo(() => {
    const rest = posts.filter((p) => p.slug !== featuredPost?.slug);
    if (activeCategory === "all") return rest;
    return rest.filter((p) => p.category === activeCategory);
  }, [posts, featuredPost, activeCategory]);

  return (
    <div>
      {featuredPost && (
        <div className="mb-10 lg:mb-14">
          <BlogCard
            slug={featuredPost.slug}
            title={featuredPost.title}
            excerpt={featuredPost.excerpt}
            image={featuredPost.image}
            publishedAt={featuredPost.publishedAt}
            category={featuredPost.category}
            readTime={featuredPost.readTime}
            featured
          />
        </div>
      )}

      <div className="category-pill-row mb-10 flex flex-wrap gap-2.5">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => setActiveCategory(cat.value)}
            className={`category-pill ${activeCategory === cat.value ? "category-pill-active" : ""}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <p className="text-center text-lg text-slate-400">No articles in this category yet.</p>
      ) : (
        <div className="blog-grid grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              publishedAt={post.publishedAt}
              category={post.category}
              readTime={post.readTime}
              layout="grid"
            />
          ))}
        </div>
      )}
    </div>
  );
}
