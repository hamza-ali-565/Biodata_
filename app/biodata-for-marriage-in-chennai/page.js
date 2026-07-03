import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "Marriage Biodata in Chennai — Free Templates & Guide",
  description:
    "Make your marriage biodata in Chennai — Jathagam-based Tamil formats for Iyer, Iyengar, Mudaliar, Nadar, and Chettiar families. Free templates, PDF download.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-chennai",
  },
  openGraph: {
    title: "Marriage Biodata in Chennai — Free Templates & Guide",
    description:
      "Make your marriage biodata in Chennai — Jathagam-based Tamil formats for Iyer, Iyengar, Mudaliar, Nadar, and Chettiar families. Free templates, PDF download.",
    url: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-chennai",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriage Biodata in Chennai — Free Templates & Guide",
    description:
      "Make your marriage biodata in Chennai — Jathagam-based Tamil formats for Iyer, Iyengar, Mudaliar, Nadar, and Chettiar families.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "How do I make a marriage biodata in Chennai?",
    a: "Use a free online biodata maker with Tamil-relevant fields: Natchathiram, Rasi, Gotram, Kuladeivam, and your community and sub-sect (Iyer Vadama, Iyengar Thenkalai, Mudaliar, Chettiar pirivu, Nadar). Place the horoscope details prominently — Chennai families check them first — and download a one-page PDF. Keep your Jathagam chart ready as a separate image; families will ask for it immediately after the biodata.",
  },
  {
    q: "Why do Chennai families ask for the Jathagam before anything else?",
    a: "Tamil matrimonial tradition is porutham-led: horoscope compatibility between the two charts is assessed — traditionally across 10 poruthams — before families invest time in calls and meetings. If the porutham count doesn't clear the family's threshold, the match doesn't proceed regardless of careers or family standing. Accurate Natchathiram and Rasi on the biodata is therefore non-negotiable.",
  },
  {
    q: "Should the Jathagam be part of the biodata or separate?",
    a: "Separate but travelling together. The standard Chennai practice is a one-page biodata plus the Jathagam chart as a second page or a separate image sent on WhatsApp. This is the one context in Indian matrimonial culture where a second page is expected — but the biodata itself should still be one clean page.",
  },
  {
    q: "Which month do Chennai families target for weddings?",
    a: "Thai (mid-January to mid-February) is the classic Tamil wedding month, with Aani, Aavani, and Panguni also favoured; Aadi is avoided. Because porutham checking adds time to the pipeline, families targeting a Thai wedding typically begin biodata and Jathagam exchange by September–October.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Marriage Biodata in Chennai — Templates & Community Guide for Tamil Families",
    description:
      "Make your marriage biodata in Chennai — Jathagam-based Tamil formats for Iyer, Iyengar, Mudaliar, Nadar, and Chettiar families. Free templates, PDF download.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    author: { "@type": "Organization", name: "Marriage Biodata Hub" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      logo: { "@type": "ImageObject", url: "https://www.marriagebiodatahub.com/icon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/biodata-for-marriage-in-chennai" },
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
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marriagebiodatahub.com" },
      { "@type": "ListItem", position: 2, name: "Marriage Biodata in Chennai", item: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-chennai" },
    ],
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

export default function BiodataForMarriageInChennai() {
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
            <span className="text-slate-300">Marriage Biodata in Chennai</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Marriage Biodata in Chennai — Templates & Community Guide for Tamil Families
          </h1>

          <AEOBlock>
            In Chennai, the biodata and the Jathagam (horoscope chart) travel together — and for many families the
            Jathagam is opened first. Tamil matrimonial culture is horoscope-led to a degree North India's is not:
            Natchathiram and Rasi are stated on the biodata itself, and porutham (compatibility) checking happens
            before the first phone call, not after. Community identity is stated precisely — Iyer (with sub-sect
            Vadama, Brahacharanam), Iyengar (Vadakalai or Thenkalai), Mudaliar, Chettiar, Nadar, Vanniyar — because
            Chennai families match within community lines more consistently than in most metros. The biodata
            format is otherwise standard: one page, but with the horoscope block given top position rather than
            buried mid-page.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">How marriage biodatas work in Chennai</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            There's a Chennai matrimonial ritual that surprises North Indians: the Jathagam exchange happens
            before anyone talks about the candidates.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Two families connected through a relative or a matrimonial platform will first exchange horoscope
            details — Natchathiram (birth star), Rasi, Lagnam, and often the full Jathagam chart — and have
            porutham checked by a family astrologer or a trusted temple priest. Only if the porutham count clears
            the family's threshold (traditionally 10 poruthams are assessed; many families want 7+ to proceed)
            does the conversation move to careers, families, and meetings.
          </p>
          <p className="text-slate-300 leading-relaxed">
            This means the Chennai biodata must carry the horoscope details prominently and accurately. A biodata
            with the Natchathiram missing, or with a Western sun sign written where the Rasi should be, stops the
            process before it starts — the astrologer literally cannot run the porutham without correct inputs.
            Chennai families also commonly attach the Jathagam chart as a second page or separate image alongside
            the one-page biodata — the one context where a "second page" is standard.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Chennai's communities — which biodata fields matter here</h2>
          <div className="space-y-4 mb-6">
            {[
              { label: "Iyer families (Mylapore, T. Nagar, West Mambalam)", desc: "Sub-sect stated — Vadama, Brahacharanam, Ashtasahasram — along with Gotram and the family's Kuladeivam (family deity). Veda and Sutram are included in traditional biodatas." },
              { label: "Iyengar families (Triplicane, Mylapore, Srirangam-connected families)", desc: "Vadakalai or Thenkalai stated explicitly — the distinction matters and the two communities largely match within themselves. Temple affiliation (Parthasarathy Temple, Srirangam connections) carries identity weight." },
              { label: "Mudaliar and Pillai families", desc: "Sub-community (Thuluva Vellala, Saiva Pillai) stated; these families balance horoscope matching with strong emphasis on family standing and education." },
              { label: "Chettiar families (Nagarathar/Nattukottai Chettiar)", desc: "One of India's most structured matrimonial systems — the pirivu (division) and native Chettinad town (Karaikudi, Devakottai) are stated, and matching follows community rules administered through Nagarathar associations." },
              { label: "Nadar families", desc: "Strong community institutions and matrimonial networks; church affiliation stated for Christian Nadar families — see our Christian biodata guide for denomination fields." },
              { label: "Muslim and Christian Chennai families", desc: "Tamil Muslim families (Triplicane, Royapettah) follow the Muslim format in our Muslim biodata guide; Chennai's large Christian community (Santhome, Vepery) follows the Christian format with denomination and diocese." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">How biodatas circulate in Chennai</h2>
          <div className="space-y-4 mb-6">
            {[
              { label: "The astrologer-priest network", desc: "Unique to Tamil matrimonial culture in its centrality: family astrologers and temple priests are active nodes who receive Jathagams, run porutham, and suggest matches from the other Jathagams they hold. Mylapore's astrologers function as informal matrimonial registers." },
              { label: "Community sabhas and associations", desc: "Iyer and Iyengar sabhas, Nagarathar associations, and Nadar mahajana sangams run matrimonial services and periodic match-making meets. Biodata plus Jathagam is the standard submission." },
              { label: "Matrimonial platforms with Tamil depth", desc: "Chennai families use community-specific platforms heavily alongside general ones — the same PDF biodata is attached everywhere, with the Jathagam image sent as a follow-up on WhatsApp." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Chennai wedding season notes</h2>
          <p className="text-slate-300 leading-relaxed">
            Tamil weddings follow the Tamil calendar's auspicious months — Thai (mid-January to mid-February) is
            the classic wedding month ("Thai pirandhal vazhi pirakkum" — when Thai is born, a way opens), along
            with Aani, Aavani, and Panguni. Aadi (mid-July to mid-August) is avoided for weddings. Practical
            implication: biodata and Jathagam exchange for a Thai wedding begins by September–October, allowing
            time for porutham checks across multiple potential matches — a slower, more deliberate pipeline than
            North Indian cities because of the astrology step.
          </p>

          {/* Mid-page CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Ready to create your Chennai marriage biodata?</p>
            <p className="text-slate-400 text-sm mb-5">
              Formats with Natchathiram, Rasi, Gotram, and Kuladeivam fields placed where Tamil families expect
              them — with space for your community and sub-sect. One-page PDF, free download, WhatsApp ready.
            </p>
            <SmartLink href="/#biodata-form-wrapper"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105"
            >
              Create My Biodata — Free →
            </SmartLink>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-2">Frequently Asked Questions</h2>
          <SectionFAQ items={faqs} />

          <div className="mt-14 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-4">Related guides</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/christian-biodata-for-marriage", label: "Christian marriage biodata" },
                { href: "/muslim-biodata-for-marriage", label: "Muslim Rishta biodata" },
                { href: "/biodata-for-marriage-in-bengaluru", label: "Biodata in Bengaluru" },
                { href: "/biodata-for-marriage-in-hyderabad", label: "Biodata in Hyderabad" },
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
