import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "Gujarati Marriage Biodata — Format & Free Templates",
  description:
    "Gujarati marriage biodata — samaj identity, family business, and dietary fields explained. Free templates for Patel, Modh, and Kutchi families.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/gujarati-biodata-for-marriage",
  },
  openGraph: {
    title: "Gujarati Marriage Biodata — Format & Free Templates",
    description:
      "Gujarati marriage biodata — samaj identity, family business, and dietary fields explained. Free templates for Patel, Modh, and Kutchi families.",
    url: "/gujarati-biodata-for-marriage",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gujarati Marriage Biodata — Format & Free Templates",
    description: "Samaj identity, family business, and dietary fields explained. Free templates.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "What is a Gujarati marriage biodata?",
    a: "A Gujarati marriage biodata is written for Gujarati-speaking families and follows the standard six-section structure with particular emphasis on samaj (community sub-group) identity — Patel, Modh, Kutchi, Kathiawadi, and others — and family business background, which is given prominence comparable to career details in many Gujarati matrimonial contexts. Dietary observance (most Gujarati Hindu and Jain households are strictly vegetarian) is stated clearly, and the biodata format serves both Hindu and Jain Gujarati families, who share language and many cultural fields while differing in specific religious content.",
  },
  {
    q: "What samaj identities are common in Gujarati biodatas?",
    a: "Common Gujarati samaj (community) identities include Patel (Leuva Patel and Kadva Patel are the two major sub-divisions, both prominent in business and the diaspora), Modh (a Vaishya trading community), Kutchi (from the Kutch region, with distinct sub-groups including Kutchi Lohana and Kutchi Visa Oswal), Kathiawadi (from the Saurashtra/Kathiawar region), and Vaishnav communities more broadly. Sub-group specificity matters for matrimonial matching in many traditional Gujarati families.",
  },
  {
    q: "How is a Gujarati Jain biodata different from a Gujarati Hindu biodata?",
    a: "Language, samaj naming conventions, and family business emphasis are largely shared between Gujarati Hindu and Gujarati Jain families. What differs are the religion-specific fields: a Gujarati Jain biodata needs Sect (Digambar or Shvetambara), Jain Gotra, and precise dietary observance level (strict Jain vegetarian versus standard vegetarian) — fields not applicable to Gujarati Hindu families, who instead include standard Hindu horoscope fields (Gotra, Rashi, Nakshatra, Manglik).",
  },
  {
    q: "Why is family business detail important in Gujarati biodatas?",
    a: "Gujarati communities have a long-established and prominent presence in trade, textiles, diamonds, and business more broadly, both within India and across the diaspora (UK, USA, East Africa). Many Gujarati families run multi-generational family businesses, and stating what the business does, since when, and in which city is treated as comparably important information to career details for candidates in salaried employment — it signals family stability and social context in a way that a job title alone does not.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Gujarati Marriage Biodata — Format Guide with Samaj and Business Family Fields",
    description:
      "Gujarati marriage biodata guide covering samaj (community) identity, family business background, vegetarian dietary fields, and formats for Patel, Modh, Kutchi, and Gujarati Jain families, including diaspora context for UK and US Gujarati communities.",
    datePublished: "2026-08-15",
    dateModified: "2026-08-15",
    author: { "@type": "Organization", name: "Marriage Biodata Hub", url: "https://www.marriagebiodatahub.com" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      url: "https://www.marriagebiodatahub.com",
      logo: { "@type": "ImageObject", url: "https://www.marriagebiodatahub.com/images/Logo-of-marriage-biodata-hub.webp" },
    },
    inLanguage: "en-IN",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/gujarati-biodata-for-marriage" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marriagebiodatahub.com" },
      { "@type": "ListItem", position: 2, name: "Gujarati Marriage Biodata", item: "https://www.marriagebiodatahub.com/gujarati-biodata-for-marriage" },
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

export default function GujaratiBiodataForMarriage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <div className="min-h-screen bg-slate-950 flex flex-col relative overflow-hidden pb-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[150px]" />
          <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-rose-500/8 blur-[150px]" />
        </div>

        <main className="flex-1 w-full max-w-4xl mx-auto px-6 pt-20 sm:px-8 sm:pt-28 relative z-10">

          <nav className="text-xs text-slate-500 mb-8 flex gap-2 items-center">
            <Link href="/" className="hover:text-brand-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Gujarati Marriage Biodata</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: August 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Gujarati Marriage Biodata — Format Guide with Samaj and Business Family Fields
          </h1>

          <AEOBlock>
            A Gujarati marriage biodata follows the standard six-section structure with particular weight given to
            samaj (community sub-group) identity — Patel, Modh, Kutchi, Kathiawadi — and family business background,
            which many Gujarati families present with the same prominence as career details. Dietary observance is
            stated clearly, since most Gujarati Hindu and Jain households are strictly vegetarian. This format serves
            both Gujarati Hindu and Gujarati Jain families, who share language, samaj conventions, and
            business-family emphasis while differing in specific religious fields — Jain families additionally need
            Sect and dietary strictness level detailed in our dedicated Jain guide →{" "}
            <Link href="/jain-biodata-for-marriage" className="text-brand-400 hover:underline">Jain marriage biodata</Link>
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Gujarati samaj identities — what to state</h2>
          <div className="space-y-4 mb-6">
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Patel:</span> One of the largest and most prominent
              Gujarati communities, with two major sub-divisions — Leuva Patel and Kadva Patel — both strongly
              represented in business and across the global diaspora, particularly UK, USA, and East Africa.
              Sub-division specificity matters for many families.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Modh:</span> A Vaishya trading community with historical
              prominence in Gujarat&apos;s business communities.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Kutchi:</span> Families originating from the Kutch region,
              including distinct sub-groups such as Kutchi Lohana and Kutchi Visa Oswal (the latter typically Jain) —
              each with its own matrimonial networks.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Kathiawadi:</span> Families from the Saurashtra/Kathiawar
              region of Gujarat.
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Family business — how to present it</h2>
          <p className="text-slate-300 leading-relaxed mb-5">
            Rather than a generic &quot;Business&quot; entry, state specifics: nature of the business (textiles, diamonds,
            retail, manufacturing), city or market (Surat&apos;s diamond market, Ahmedabad&apos;s textile trade), and years
            established. &quot;Father: Diamond trading business, Surat — established 1985&quot; communicates considerably more
            than &quot;Father: Businessman&quot; and is the standard families expect. See our complete family details guide for
            the general principle →{" "}
            <Link href="/blog/how-to-write-family-details-in-marriage-biodata" className="text-brand-400 hover:underline">family details guide</Link>
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Diaspora context — UK and US Gujarati communities</h2>
          <p className="text-slate-300 leading-relaxed">
            Large, well-established Gujarati communities exist in the UK (Leicester, Wembley, Harrow) and the US (New
            Jersey, Chicago, Houston), many with roots tracing through East Africa (Kenya, Uganda) following
            mid-20th-century migration. Biodatas for diaspora Gujarati candidates should include the standard NRI
            fields — country, visa status, dual-currency income — alongside samaj identity. See our complete NRI
            guide →{" "}
            <Link href="/nri-biodata-for-marriage" className="text-brand-400 hover:underline">NRI marriage biodata</Link>
          </p>

          {/* CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Create your Gujarati marriage biodata</p>
            <p className="text-slate-400 text-sm mb-5">Fields formatted for Gujarati families — samaj identity, family business, and dietary details. Free PDF, no login.</p>
            <SmartLink href="/#biodata-form-wrapper"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105"
            >
              Create My Biodata — Free →
            </SmartLink>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-2">Frequently asked questions</h2>
          <SectionFAQ items={faqs} />

          <div className="mt-14 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-4">Related guides</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/jain-biodata-for-marriage", label: "Jain marriage biodata" },
                { href: "/nri-biodata-for-marriage", label: "NRI marriage biodata" },
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/biodata-for-marriage-in-mumbai", label: "Biodata in Mumbai" },
                { href: "/horoscope-calculator", label: "Horoscope calculator" },
                { href: "/marriage-biodata-format", label: "Complete biodata format guide" },
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
