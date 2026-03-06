import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BlogCard } from "../../components/BlogCard";

export const metadata = {
  title: "Blog | Biodata for Marriage",
  description:
    "Guides and tips on writing a perfect marriage biodata, choosing formats, and sharing with families.",
};

const posts = [
  {
    slug: "how-to-write-perfect-marriage-biodata",
    title: "How to write a perfect marriage biodata",
    excerpt:
      "Learn how to present your education, family and personality in a way that feels respectful, clear and modern.",
  },
  {
    slug: "tips-for-arranging-marriage-biodata",
    title: "Tips for arranging marriage biodata",
    excerpt:
      "From photo selection to formatting, follow these practical tips to make your biodata easy to read and share.",
  },
  {
    slug: "best-biodata-formats-for-marriage",
    title: "Best biodata formats for marriage introductions",
    excerpt:
      "Explore traditional, minimal and contemporary biodata formats, and when to use each style.",
  },
  {
    slug: "what-to-include-in-marriage-biodata",
    title: "What information should be included in a marriage biodata",
    excerpt:
      "A checklist of essential details to include so that families have a complete and respectful picture.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="mt-2 flex-1">
        <section className="rounded-3xl border border-white/10 bg-slate-900/80 px-6 py-8 sm:px-10">
          <header className="max-w-2xl">
            <h1 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
              Marriage biodata tips & guides
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              Read best practices on writing, formatting and sharing your
              marriage biodata. Optimised for search so families can easily find
              helpful information.
            </p>
          </header>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

