import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "Punjabi Marriage Biodata — Format & Free Templates",
  description:
    "Punjabi marriage biodata guide — Gurmukhi script and native village fields, for Punjabi Hindu and Sikh families. Free templates, diaspora-ready.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/punjabi-biodata-for-marriage",
  },
  openGraph: {
    title: "Punjabi Marriage Biodata — Format & Free Templates",
    description:
      "Punjabi marriage biodata guide — Gurmukhi script and native village fields, for Punjabi Hindu and Sikh families. Free templates, diaspora-ready.",
    url: "/punjabi-biodata-for-marriage",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Punjabi Marriage Biodata — Format & Free Templates",
    description: "Gurmukhi script and native village fields, for Punjabi Hindu and Sikh families.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "What is a Punjabi marriage biodata?",
    a: "A Punjabi marriage biodata is written for Punjabi-speaking families, using Gurmukhi script for field labels where the family prefers it, and giving prominent placement to native village (pind) in Punjab and family background. Unlike a Sikh-specific biodata, a Punjabi language biodata serves both Punjabi Hindu families (who include Gotra, Rashi, Nakshatra, and Manglik horoscope fields) and Punjabi Sikh families (who follow the Sikh format without horoscope fields — see our dedicated Sikh biodata guide). This page covers the shared language, script, and cultural fields common to Punjabi families regardless of religion.",
  },
  {
    q: "What is the difference between a Punjabi biodata and a Sikh biodata?",
    a: "Punjabi refers to language and regional/cultural identity — spoken by both Hindu and Sikh families across Punjab, Delhi, Chandigarh, and the diaspora. Sikh refers specifically to religious identity. A Punjabi Hindu family's biodata includes standard Hindu horoscope fields (Gotra, Rashi, Nakshatra, Manglik) written with Punjabi cultural context; a Punjabi Sikh family's biodata follows the distinct Sikh format — Ik Onkar opening, Gurudwara and Amritdhari fields, no horoscope section — detailed in our dedicated guide. This page covers the shared Punjabi language and cultural fields; the religion-specific format differs.",
  },
  {
    q: "Why does native village (pind) matter so much in Punjabi biodatas?",
    a: "Native village, called pind in Punjabi, carries significant social weight in Punjabi matrimonial culture across both Hindu and Sikh communities — families use it to establish shared regional connections, community reputation, and often direct or indirect acquaintance ('do you know the family near the canal road in Phagwara?'). This is true whether the family currently lives in Ludhiana, Delhi, or Brampton — the ancestral pind remains a stated identity marker even generations after the family has settled elsewhere.",
  },
  {
    q: "How should a diaspora Punjabi biodata handle both Indian and Western context?",
    a: "Diaspora Punjabi biodatas — common for families in the UK (Southall, Leicester), Canada (Brampton, Surrey), and the USA — typically state both the ancestral Punjab connection (native district or village) and the current country of residence, along with standard NRI fields (visa/immigration status, dual-currency income, openness to relocation). This dual context matters because Punjabi diaspora matrimonial networks actively connect families across India and abroad simultaneously, more so than in many other diaspora communities.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Punjabi Marriage Biodata — Format Guide for Punjabi Hindu and Sikh Families",
    description:
      "Punjabi marriage biodata guide covering Gurmukhi script field labels, native village and family background fields, and how the format differs for Punjabi Hindu families (who use horoscope fields) versus Punjabi Sikh families (who do not), with UK, Canada, and USA diaspora context.",
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
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/punjabi-biodata-for-marriage" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marriagebiodatahub.com" },
      { "@type": "ListItem", position: 2, name: "Punjabi Marriage Biodata", item: "https://www.marriagebiodatahub.com/punjabi-biodata-for-marriage" },
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

export default function PunjabiBiodataForMarriage() {
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
            <span className="text-slate-300">Punjabi Marriage Biodata</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: August 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Punjabi Marriage Biodata — Format Guide for Punjabi Hindu and Sikh Families
          </h1>

          <AEOBlock>
            A Punjabi marriage biodata is written for Punjabi-speaking families and gives prominent placement to
            native village (pind) and family background — fields that carry real social weight in Punjabi
            matrimonial culture across both Hindu and Sikh communities. This page covers the shared language and
            cultural fields. The religious content differs by family: Punjabi Hindu families include standard
            horoscope fields (Gotra, Rashi, Nakshatra, Manglik); Punjabi Sikh families follow the distinct Sikh
            format with no horoscope section — Ik Onkar opening, Gurudwara, and Amritdhari status instead, covered in
            full in our dedicated Sikh biodata guide →{" "}
            <Link href="/sikh-biodata-for-marriage" className="text-brand-400 hover:underline">Sikh marriage biodata</Link>
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Punjabi Hindu vs Punjabi Sikh — same language, different format</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            This is the single most important distinction for this page. Punjabi is a language and a
            regional-cultural identity shared by both Hindu and Sikh families across Punjab, Haryana, Delhi,
            Chandigarh, and the global diaspora. It is not a religion.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            A <span className="font-semibold text-white">Punjabi Hindu</span> biodata includes the standard Hindu
            horoscope section — Gotra, Rashi, Nakshatra, Manglik status — written with Punjabi cultural markers:
            native village emphasis, family background presented in the direct, warm style common to Punjabi
            matrimonial culture, and often a stated sub-community (Khatri, Arora, Brahmin, Bania) alongside religion.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            A <span className="font-semibold text-white">Punjabi Sikh</span> biodata follows an entirely different
            religious format — no horoscope fields at all, opening with Ik Onkar, and including Gurudwara affiliation
            and Amritdhari status. Full detail →{" "}
            <Link href="/sikh-biodata-for-marriage" className="text-brand-400 hover:underline">Sikh marriage biodata</Link>
          </p>
          <p className="text-slate-300 leading-relaxed">
            Both share: Gurmukhi script option for field labels, strong emphasis on native village (pind), family
            background presented with warmth and directness, and — for diaspora families — dual India/abroad
            context.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Native village (pind) — why it matters</h2>
          <p className="text-slate-300 leading-relaxed">
            Punjabi families, regardless of religion, place unusual weight on stating their ancestral village or
            district — Ludhiana, Jalandhar, Hoshiarpur, Amritsar district, and dozens of others. This isn&apos;t
            nostalgic detail; it functions as active social geography that families use to establish connections,
            shared acquaintances, and community reputation, even for families that have lived in Delhi or abroad for
            generations. &quot;Family originally from Phagwara, Jalandhar district, settled in Delhi for three
            generations&quot; is a complete and meaningful statement in Punjabi matrimonial culture.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Diaspora Punjabi biodatas</h2>
          <p className="text-slate-300 leading-relaxed">
            The Punjabi diaspora — UK (Southall, Leicester, Birmingham), Canada (Brampton, Surrey), USA (California,
            New Jersey) — maintains unusually active two-way matrimonial connections with families in Punjab itself.
            A diaspora Punjabi biodata typically states both the ancestral Punjab connection and current country
            context, plus standard NRI fields. See our complete NRI guide →{" "}
            <Link href="/nri-biodata-for-marriage" className="text-brand-400 hover:underline">NRI marriage biodata</Link>{" "}
            and, for Sikh diaspora families specifically, the diaspora section of our Sikh guide →{" "}
            <Link href="/sikh-biodata-for-marriage" className="text-brand-400 hover:underline">Sikh marriage biodata</Link>
          </p>

          {/* CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Create your Punjabi marriage biodata</p>
            <p className="text-slate-400 text-sm mb-5">Fields formatted for Punjabi families — native village, family background, and Gurmukhi script option. Free PDF, no login.</p>
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
                { href: "/sikh-biodata-for-marriage", label: "Sikh marriage biodata" },
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/nri-biodata-for-marriage", label: "NRI marriage biodata" },
                { href: "/biodata-for-marriage-in-delhi", label: "Biodata in Delhi" },
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
