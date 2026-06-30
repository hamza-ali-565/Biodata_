import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BlogCard } from "../../components/blog/BlogCard";
import { BlogPageDecor } from "../../components/blog/BlogDecor";
import { getPostsForListing } from "../../lib/blog/posts";

export const metadata = {
  title: "Blog | Marriage Biodata Tips & Guide",
  description:
    "Expert guides on writing, designing, and sharing your marriage biodata. Tips for every Indian community.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Marriage Biodata Tips & Guide",
    description:
      "Expert guides on writing, designing, and sharing your marriage biodata. Tips for every Indian community.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Marriage Biodata Tips & Guide",
    description:
      "Expert guides on writing, designing, and sharing your marriage biodata. Tips for every Indian community.",
    images: ["/images/og-image.webp"],
  },
};

const blogJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Marriage Biodata Hub Blog",
    description: "Expert guides on writing, designing, and sharing your marriage biodata for every Indian community.",
    url: "https://www.marriagebiodatahub.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      url: "https://www.marriagebiodatahub.com",
    },
    inLanguage: "en-IN",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marriagebiodatahub.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.marriagebiodatahub.com/blog" },
    ],
  },
];

export default async function BlogListingPage() {
  const posts = await getPostsForListing();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
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
