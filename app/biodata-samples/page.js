import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";
import { SmartLink } from "../../components/SmartLink";
import { BiodataSamplesGallery } from "../../components/BiodataSamplesGallery";
import { biodataSamples } from "../../data/biodataSamples";

export const metadata = {
  title: "Marriage Biodata Samples — 22 Real Examples",
  description:
    "22 anonymized marriage biodata samples across communities, professions, and cities. Browse real examples, then create your own free in minutes.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/biodata-samples",
  },
  openGraph: {
    title: "Marriage Biodata Samples — 22 Real Examples",
    description:
      "22 anonymized marriage biodata samples across communities, professions, and cities. Browse real examples, then create your own free.",
    url: "/biodata-samples",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriage Biodata Samples — 22 Real Examples",
    description: "22 anonymized marriage biodata samples across communities, professions, and cities.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "Are these marriage biodata samples real people?",
    a: "No. Every sample on this page is a fictional, anonymized profile created to demonstrate realistic field content, tone, and structure across different communities, professions, and life situations. Names, contact details, and specific identifying information are entirely invented — the samples exist to show what a well-written biodata looks like in practice, not to represent actual individuals.",
  },
  {
    q: "Can I copy one of these samples directly for my own biodata?",
    a: "Use them as a structural reference, not a copy-paste template. Replace every detail — name, city, profession, hobby, family information — with your own honest information. The value of these samples is in seeing how fields are formatted and how a specific, non-generic About Me section reads; the actual content must be genuinely yours, since a biodata is meant to represent you accurately.",
  },
  {
    q: "Why do these samples look different from each other?",
    a: "Because biodata content genuinely varies by community, profession, and life situation — a Tamil Brahmin biodata includes Jathagam fields a Sikh biodata doesn't use; an NRI biodata includes visa status a India-based biodata doesn't need; a second-marriage biodata handles tone and disclosure differently than a first-marriage one. The variation across these 22 samples is intentional, showing the real range of what a correctly-formatted biodata looks like across different contexts.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Marriage Biodata Samples — 22 Real Examples",
    description:
      "A curated gallery of 22 anonymized marriage biodata samples spanning Hindu, Muslim, Sikh, Christian, Jain, and NRI communities, multiple professions, cities, and life situations — including second marriage and working professional examples.",
    url: "https://www.marriagebiodatahub.com/biodata-samples",
    datePublished: "2026-08-25",
    dateModified: "2026-08-25",
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", "@id": "https://www.marriagebiodatahub.com/#website" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      url: "https://www.marriagebiodatahub.com",
      logo: { "@type": "ImageObject", url: "https://www.marriagebiodatahub.com/images/Logo-of-marriage-biodata-hub.webp" },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Marriage Biodata Samples",
    numberOfItems: biodataSamples.length,
    itemListElement: biodataSamples.map((s) => ({
      "@type": "ListItem",
      position: s.id,
      name: s.title,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marriagebiodatahub.com" },
      { "@type": "ListItem", position: 2, name: "Marriage Biodata Samples", item: "https://www.marriagebiodatahub.com/biodata-samples" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

function AEOBlock({ children }) {
  return (
    <div className="rounded-2xl border border-brand-500/30 bg-brand-500/5 p-6 mb-10 text-slate-200 leading-relaxed text-base">
      {children}
    </div>
  );
}

function SectionFAQ({ items }) {
  return (
    <div className="space-y-4 mt-6">
      {items.map((faq, i) => (
        <article key={i} className="premium-card-static overflow-hidden">
          <details className="group marker:content-none [&::-webkit-details-marker]:hidden">
            <summary className="flex w-full items-center justify-between p-5 md:p-6 text-left cursor-pointer focus:outline-none focus-visible:bg-slate-800/50">
              <h3 className="font-semibold text-white pr-4 sm:text-lg">{faq.q}</h3>
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 transition-transform duration-300 group-open:rotate-180 group-open:bg-brand-500/20 text-slate-400 group-open:text-brand-400">
                <ChevronDown className="w-5 h-5" />
              </div>
            </summary>
            <div className="px-5 md:px-6 pb-6 pt-0 text-slate-300 leading-relaxed text-sm lg:text-base">
              <p>{faq.a}</p>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}

export default function BiodataSamplesGalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <div className="min-h-screen bg-slate-950 flex flex-col relative overflow-hidden pb-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[150px]" />
          <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-rose-500/8 blur-[150px]" />
        </div>

        <main className="flex-1 w-full max-w-5xl mx-auto px-6 pt-20 sm:px-8 sm:pt-28 relative z-10">

          <nav className="text-xs text-slate-500 mb-8 flex gap-2 items-center">
            <Link href="/" className="hover:text-brand-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Marriage Biodata Samples</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: August 2026</span>
            <span>·</span>
            <span>22 samples</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Marriage Biodata Samples — 22 Real Examples Across Communities and Professions
          </h1>

          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-200 mb-6">
            All samples are fictional and anonymized
          </div>

          <AEOBlock>
            This gallery shows 22 anonymized marriage biodata samples — real field content, realistic About Me
            sections, and complete formatting across Hindu, Muslim, Sikh, Christian, Jain, and NRI communities,
            spanning software engineers to IAS officers to second-marriage candidates. Every sample is fictional and
            anonymized; use them as a structural reference for how fields are formatted and how a specific,
            non-generic About Me actually reads — then create your own biodata with your genuine details. Filter by
            community, profession, or life situation below, or browse all 22.
          </AEOBlock>

          <BiodataSamplesGallery samples={biodataSamples} />

          <div className="my-14 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Ready to create your own biodata?</p>
            <p className="text-slate-400 text-sm mb-5">
              These 22 samples show the range — now build yours with your own genuine details. Choose a template,
              fill in the form, download free.
            </p>
            <SmartLink
              href="/#biodata-form-wrapper"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105"
            >
              Create My Biodata — Free →
            </SmartLink>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-2">Frequently Asked Questions</h2>
          <SectionFAQ items={faqs} />

          <div className="mt-14 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-4">Explore biodata guides by community</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/muslim-biodata-for-marriage", label: "Muslim Rishta biodata" },
                { href: "/sikh-biodata-for-marriage", label: "Sikh marriage biodata" },
                { href: "/christian-biodata-for-marriage", label: "Christian marriage biodata" },
                { href: "/jain-biodata-for-marriage", label: "Jain marriage biodata" },
                { href: "/nri-biodata-for-marriage", label: "NRI marriage biodata" },
                { href: "/biodata-for-marriage-in-hindi", label: "Hindi biodata guide" },
                { href: "/marathi-biodata-for-marriage", label: "Marathi biodata guide" },
                { href: "/tamil-biodata-for-marriage", label: "Tamil biodata guide" },
                { href: "/telugu-biodata-for-marriage", label: "Telugu biodata guide" },
                { href: "/bengali-biodata-for-marriage", label: "Bengali biodata guide" },
                { href: "/gujarati-biodata-for-marriage", label: "Gujarati biodata guide" },
                { href: "/punjabi-biodata-for-marriage", label: "Punjabi biodata guide" },
                { href: "/blog/how-to-write-about-me-in-marriage-biodata", label: "How to write About Me" },
                { href: "/marriage-biodata-format", label: "Complete format guide" },
                { href: "/templates", label: "Browse templates" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="text-xs rounded-full border border-slate-700 px-4 py-2 text-slate-300 hover:border-brand-500/50 hover:text-white transition-all">
                  {label}
                </Link>
              ))}
            </div>
          </div>

        </main>
      </div>
      <Footer />
    </>
  );
}
