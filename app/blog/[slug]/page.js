import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { BlogArticleHero } from "../../../components/blog/BlogArticleHero";
import { BlogArticleBody } from "../../../components/blog/BlogArticleBody";
import { BlogTableOfContents } from "../../../components/blog/BlogTableOfContents";
import { BlogPageDecor } from "../../../components/blog/BlogDecor";
import { getPostBySlug, getAllSlugs } from "../../../lib/blog/posts";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  const canonical = `https://marriagebiodatahub.com/blog/${post.slug}`;

  return {
    title: `${post.title} | MBH`,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: post.image ? [{ url: post.image }] : undefined,
    },
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  // Extract the first paragraph(s) before any heading to use as the introduction
  let introduction = null;
  let bodySections = post.sections;
  const firstHeadingIndex = post.sections.findIndex((s) => s.type === "heading");

  if (firstHeadingIndex > 0) {
    introduction = post.sections
      .slice(0, firstHeadingIndex)
      .filter((s) => s.type === "paragraph")
      .map((s) => s.text)
      .join("\n\n");
    bodySections = post.sections.slice(firstHeadingIndex);
  } else if (firstHeadingIndex === -1 && post.sections.length > 0) {
    introduction = post.sections
      .filter((s) => s.type === "paragraph")
      .map((s) => s.text)
      .join("\n\n");
    bodySections = [];
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
    },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://marriagebiodatahub.com/blog/${post.slug}`,
    },
    ...(post.image ? { image: `https://marriagebiodatahub.com${post.image}` } : {}),
  };

  return (
    <>
      <Header />
      <main className="blog-editorial-page relative min-h-screen w-full pb-24 font-sans">
        <BlogPageDecor />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <nav
            className="mx-auto mb-8 max-w-[1600px] lg:mb-10"
            aria-label="Breadcrumb"
          >
            <Link href="/blog" className="blog-back-link">
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to Blog
            </Link>
          </nav>

          <article
            className="mx-auto w-full max-w-[1600px]"
            itemScope
            itemType="https://schema.org/BlogPosting"
          >
            <BlogArticleHero
              slug={post.slug}
              title={post.title}
              introduction={introduction}
              image={post.image}
              publishedAt={post.publishedAt}
            />

            <div className="blog-article-layout mt-12 lg:mt-16">
              <BlogTableOfContents items={post.tableOfContents} />

              <div className="blog-article-main">
                <div className="premium-frame">
                  <div aria-hidden className="premium-frame-glow" />
                  <div className="premium-panel blog-article-panel px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 xl:px-16 xl:py-16">
                    <div aria-hidden className="premium-panel-overlay" />
                    <div className="relative z-10" itemProp="articleBody">
                      <BlogArticleBody
                        sections={bodySections}
                        slug={post.slug}
                        title={post.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
