import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "Tamil Marriage Biodata — Format & Free Templates",
  description:
    "Tamil marriage biodata — Jathagam fields, Tamil script labels, porutham-ready format. Free templates for Iyer, Iyengar, Mudaliar, Nadar families.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/tamil-biodata-for-marriage",
  },
  openGraph: {
    title: "Tamil Marriage Biodata — Format & Free Templates",
    description:
      "Tamil marriage biodata — Jathagam fields, Tamil script labels, porutham-ready format. Free templates for Iyer, Iyengar, Mudaliar, Nadar families.",
    url: "/tamil-biodata-for-marriage",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamil Marriage Biodata — Format & Free Templates",
    description: "Jathagam fields, Tamil script labels, porutham-ready format. Free templates.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "What is a Tamil marriage biodata?",
    a: "A Tamil marriage biodata is a marriage biodata written for Tamil-speaking families, using Tamil script and Tamil matrimonial terminology — Jathagam (horoscope chart) instead of generic Kundali, Natchathiram instead of Nakshatra, Rasi with Tamil sign names, and community identity (Iyer, Iyengar, Mudaliar, Nadar, Chettiar) stated with the precision Tamil families expect. It follows the same six-section structure as any Indian biodata but is presented bilingually or fully in Tamil for families who prefer it, and is typically exchanged alongside the Jathagam chart as a companion document.",
  },
  {
    q: "What is the difference between Nakshatra and Natchathiram?",
    a: "Nakshatra and Natchathiram refer to the exact same thing — the Vedic birth star, one of 27 lunar constellations. Nakshatra is the Sanskrit/Hindi term; Natchathiram (நட்சத்திரம்) is the Tamil term for the identical astronomical and astrological concept. A Tamil biodata uses Natchathiram; a Hindi or general biodata uses Nakshatra. The underlying calculation and the 27 stars themselves are the same across all Indian language traditions — only the name changes.",
  },
  {
    q: "Why do Tamil families check the Jathagam before anything else?",
    a: "Tamil matrimonial tradition is porutham-led — horoscope compatibility across traditionally ten factors is assessed by a family astrologer before the families invest time in meetings. This means the Jathagam (birth chart) with accurate Natchathiram and Rasi is often exchanged before or alongside the biodata itself, not after initial interest is confirmed as in some other regional traditions. Getting these fields right on the biodata is therefore not optional detail — it is the first filter.",
  },
  {
    q: "Should a Tamil biodata be written in Tamil or English?",
    a: "Both are common and acceptable. Many Tamil families, particularly in Chennai and other Tamil Nadu cities, use English-language biodatas with Tamil terms for community-specific fields (Natchathiram, Rasi, Gotram, community name). Families circulating biodatas primarily among Tamil Nadu relatives, or older-generation family members, often prefer a fully Tamil biodata. Diaspora Tamil families (Singapore, Malaysia, Sri Lanka, North America) frequently use English with Tamil terms retained for horoscope fields, since English is the shared working language across the extended family network.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tamil Marriage Biodata — Format Guide with Jathagam Fields and Tamil Script",
    description:
      "Tamil marriage biodata guide covering Jathagam-based horoscope fields, Tamil script field labels, Natchathiram and Rasi naming, and community-specific formats for Iyer, Iyengar, Mudaliar, Nadar, and Chettiar Tamil families.",
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
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/tamil-biodata-for-marriage" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marriagebiodatahub.com" },
      { "@type": "ListItem", position: 2, name: "Tamil Marriage Biodata", item: "https://www.marriagebiodatahub.com/tamil-biodata-for-marriage" },
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

export default function TamilBiodataForMarriage() {
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
            <span className="text-slate-300">Tamil Marriage Biodata</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: August 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Tamil Marriage Biodata — Format Guide with Jathagam Fields and Tamil Script
          </h1>

          <AEOBlock>
            A Tamil marriage biodata follows the same six-section structure as any Indian biodata, presented with
            Tamil script and terminology for the fields that matter most to Tamil families: Natchathiram (birth star)
            instead of Nakshatra, Rasi with Tamil sign names, Gotram, and precise community identity — Iyer, Iyengar,
            Mudaliar, Nadar, or Chettiar, often including sub-sect (Vadama or Brahacharanam for Iyer families;
            Vadakalai or Thenkalai for Iyengar families). Tamil matrimonial culture is Jathagam-led — the horoscope
            chart is typically exchanged before or alongside the biodata, and porutham (compatibility) is checked
            before meetings are arranged. Getting Natchathiram and Rasi correct on the biodata is the first filter,
            not a later step.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Why a Tamil biodata needs Tamil-specific fields</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            A generic Indian biodata template gives you Nakshatra, Rashi, Gotra — the Sanskrit/Hindi-rooted terms
            used across most of North and Central India. Tamil matrimonial tradition uses the same underlying
            astrological system but with Tamil names for the same concepts, and places different emphasis on which
            fields come first. A biodata using &quot;Nakshatra&quot; instead of &quot;Natchathiram&quot; isn&apos;t wrong exactly — the
            concept is identical — but it reads as generic rather than written for a Tamil family specifically, in
            the same way a form letter reads differently from one addressed by name.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Tamil biodata fields — what to write</h2>
          <div className="space-y-4 mb-6">
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Natchathiram (birth star):</span> The Tamil term for
              Nakshatra. Same 27 stars, Tamil names: Aswini, Bharani, Krithigai, Rohini, Mirugaseerisham,
              Thiruvadirai, Punarpoosam, Poosam, Ayilyam, Magam, Pooram, Uthiram, Hastam, Chithirai, Swathi, Visagam,
              Anusham, Kettai, Moolam, Pooradam, Uthiradam, Thiruvonam, Avittam, Sadayam, Poorattathi, Uthirattathi,
              Revathi. Full reference table with Sanskrit equivalents →{" "}
              <Link href="/blog/what-is-nakshatra-in-marriage-biodata" className="text-brand-400 hover:underline">what is Nakshatra</Link>
            </p>
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Rasi:</span> Same 12 signs as elsewhere in India, Tamil
              names: Mesham, Rishabham, Mithunam, Katakam, Simmam, Kanni, Tulam, Vrichigam, Dhanusu, Makaram, Kumbham,
              Meenam. Full explanation →{" "}
              <Link href="/blog/what-is-rashi-in-marriage-biodata" className="text-brand-400 hover:underline">what is Rashi</Link>
            </p>
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Gotram:</span> Same concept as Gotra elsewhere in India —
              patrilineal lineage. Tamil Brahmin (Iyer/Iyengar) Gotrams include Kashyapa, Bharadvaja, Harita,
              Srivatsa, Mudgala, Koundinya. Full explanation →{" "}
              <Link href="/blog/what-is-gotra-in-marriage-biodata" className="text-brand-400 hover:underline">what is Gotra</Link>
            </p>
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Community and sub-sect:</span> Iyer families state Vadama,
              Brahacharanam, or Ashtasahasram sub-sect. Iyengar families state Vadakalai or Thenkalai. Mudaliar,
              Nadar, and Chettiar families state their specific sub-community. Chettiar (Nagarathar) families
              additionally state their pirivu (division) and native Chettinad town.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Jathagam:</span> The full horoscope chart, typically
              attached as a companion document alongside the one-page biodata — this is the one widely-accepted
              exception to the one-page rule, since the Jathagam is a separate document, not additional biodata
              content. See our complete guide on this exception →{" "}
              <Link href="/blog/should-biodata-be-one-page-or-two" className="text-brand-400 hover:underline">one page or two?</Link>
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Sample Tamil biodata field labels (bilingual format)</h2>
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 mb-8 font-mono text-sm overflow-x-auto">
            <pre className="text-slate-300 whitespace-pre-wrap leading-loose">
{`பெயர் / Name:              Kavitha Sundaram
பிறந்த தேதி / DOB:          22 August 1997
நட்சத்திரம் / Natchathiram:  Anusham
ராசி / Rasi:                Vrichigam
கோத்திரம் / Gotram:          Srivatsa
சமூகம் / Community:          Iyer (Vadama)`}
            </pre>
          </div>

          {/* CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Create your Tamil marriage biodata</p>
            <p className="text-slate-400 text-sm mb-5">Fields formatted for Tamil families — Natchathiram, Rasi, Gotram, and community/sub-sect. Free PDF, no login.</p>
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
                { href: "/biodata-for-marriage-in-chennai", label: "Biodata in Chennai" },
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/blog/what-is-nakshatra-in-marriage-biodata", label: "What is Nakshatra" },
                { href: "/horoscope-calculator", label: "Horoscope calculator" },
                { href: "/christian-biodata-for-marriage", label: "Christian marriage biodata" },
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
