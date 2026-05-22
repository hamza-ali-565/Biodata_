import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BlogCard } from "../../components/blog/BlogCard";
import { BlogPageDecor } from "../../components/blog/BlogDecor";
import { getPostsForListing } from "../../lib/blog/posts";

export const metadata = {
  title: "Blog | Marriage Biodata Tips & Template Ideas",
  description:
    "Expert guides on marriage biodata templates, design tips for boys and girls, and how to create a premium, readable matrimonial profile.",
  alternates: {
    canonical: "https://marriagebiodatahub.com/blog",
  },
  openGraph: {
    title: "Marriage Biodata Blog | Marriage Biodata Hub",
    description:
      "Premium tips and creative ideas for marriage biodata templates.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogListingPage() {
  const posts = getPostsForListing();

  return (
    <>
      <Header />
      <main className="blog-editorial-page relative min-h-screen w-full pb-24 font-sans">
        <BlogPageDecor />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <header className="blog-listing-header mx-auto max-w-[1600px]">
            <div className="premium-chip mb-6 gap-2 px-4 py-1.5 text-xs font-medium tracking-wide text-emerald-200/90 sm:text-sm">
              Editorial
            </div>
            <h1 className="blog-listing-title">
              <span className="bg-gradient-to-r from-white via-emerald-50/90 to-slate-300 bg-clip-text text-transparent">
                Marriage Biodata Blog
              </span>
            </h1>
            <div className="mt-6 flex gap-2" aria-hidden>
              <span className="h-1 w-8 rounded-full bg-emerald-500/80" />
              <span className="h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 via-sky-400 to-brand-500" />
              <span className="h-1 w-8 rounded-full bg-brand-500/80" />
            </div>
            <p className="blog-listing-subtitle mt-6 max-w-3xl">
              Design inspiration, template ideas, and practical advice for creating a biodata that feels premium and gets read.
            </p>
          </header>

          <div className="mx-auto mt-12 w-full max-w-[1600px] sm:mt-16 lg:mt-20">
            {posts.length === 0 ? (
              <p className="text-center text-lg text-slate-400">
                New articles coming soon.
              </p>
            ) : (
              <div className="flex flex-col gap-10 lg:gap-14">
                {posts.map((post, index) => (
                  <BlogCard
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    image={post.image}
                    publishedAt={post.publishedAt}
                    featured={index === 0}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
