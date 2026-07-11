import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "Telugu Marriage Biodata — Format & Free Templates",
  description:
    "Telugu marriage biodata — Jatakam fields and Telugu naming, NRI-ready format. Free templates for Reddy, Kamma, Brahmin, and Kapu families.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/telugu-biodata-for-marriage",
  },
  openGraph: {
    title: "Telugu Marriage Biodata — Format & Free Templates",
    description:
      "Telugu marriage biodata — Jatakam fields and Telugu naming, NRI-ready format. Free templates for Reddy, Kamma, Brahmin, and Kapu families.",
    url: "/telugu-biodata-for-marriage",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Telugu Marriage Biodata — Format & Free Templates",
    description: "Jatakam fields and Telugu naming, NRI-ready format. Free templates.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "What is a Telugu marriage biodata?",
    a: "A Telugu marriage biodata is written for Telugu-speaking families from Andhra Pradesh and Telangana, using Telugu matrimonial terminology — Jatakam (horoscope chart) instead of generic Kundali, Nakshatram for birth star, Rasi, and precise community identity — Reddy, Kamma, Velama, Kapu, or Brahmin (Vaidiki or Niyogi sub-division). It follows the standard six-section biodata structure with these community and language-specific fields given prominent placement, and frequently includes NRI-specific fields given the large Telugu-American population.",
  },
  {
    q: "Why do Telugu biodatas often mention US visa status?",
    a: "Telugu-speaking communities, particularly from Andhra Pradesh and Telangana, have one of the largest and longest-established Indian-American populations in the US, especially in technology and healthcare fields. It is common practice in Telugu matrimonial culture to state US immigration status (H1B, Green Card stage, Citizen) explicitly in the biodata, since a meaningful share of Telugu matrimonial matches involve at least one candidate based in the United States.",
  },
  {
    q: "What is Jatakam and how is it different from a regular biodata?",
    a: "Jatakam is the Telugu term for the full horoscope birth chart — the detailed astrological document showing planetary positions used for marriage compatibility matching, similar to the Tamil Jathagam or Hindi Kundali. The biodata itself is a one-page introduction document; the Jatakam is a separate, more detailed astrological chart typically prepared by a family purohit and exchanged alongside or shortly after the biodata once initial interest is confirmed.",
  },
  {
    q: "What are the main Telugu communities and how should they be stated in a biodata?",
    a: "The major Telugu communities include Reddy (the dominant landowning community across Telangana and Rayalaseema, with native district often stated — Nalgonda, Karimnagar, Kadapa), Kamma (coastal Andhra origin, strongly represented in business and the US diaspora), Velama (a prominent landowning community, particularly in Telangana), Kapu (a large agrarian community across coastal and Rayalaseema regions), and Brahmin families who state their sub-division as Vaidiki (traditionally priestly) or Niyogi (traditionally administrative/secular).",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Telugu Marriage Biodata — Format Guide with Jatakam Fields and NRI Context",
    description:
      "Telugu marriage biodata guide covering Jatakam horoscope fields, Nakshatram and Rasi naming, community-specific formats for Reddy, Kamma, Velama, Kapu, and Brahmin Telugu families, and the Telugu-American NRI biodata context.",
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
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/telugu-biodata-for-marriage" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marriagebiodatahub.com" },
      { "@type": "ListItem", position: 2, name: "Telugu Marriage Biodata", item: "https://www.marriagebiodatahub.com/telugu-biodata-for-marriage" },
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

export default function TeluguBiodataForMarriage() {
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
            <span className="text-slate-300">Telugu Marriage Biodata</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: August 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Telugu Marriage Biodata — Format Guide with Jatakam Fields and NRI Context
          </h1>

          <AEOBlock>
            A Telugu marriage biodata follows the standard six-section structure with Telugu-specific terminology and
            community fields given prominent placement: Nakshatram (birth star), Rasi, and precise community identity
            — Reddy, Kamma, Velama, Kapu, or Brahmin with sub-division (Vaidiki or Niyogi). The full horoscope chart
            is called Jatakam and is typically exchanged as a companion document once initial interest is confirmed.
            A distinctive feature of Telugu matrimonial culture: given the large and long-established Telugu-American
            population, US immigration status (H1B, Green Card stage, Citizen) is commonly stated explicitly in the
            biodata even for candidates currently in India, since many matches involve at least one US-based
            candidate.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Telugu communities — what to state in the biodata</h2>
          <div className="space-y-4 mb-6">
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Reddy:</span> The dominant landowning community across
              Telangana and Rayalaseema. Native district (Nalgonda, Karimnagar, Kadapa, Kurnool) and family land or
              business background often stated. Strong community preference for within-community matching remains
              common.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Kamma:</span> Coastal Andhra origin (Krishna, Guntur, West
              Godavari districts). Heavily represented in business, technology, and — notably — the US diaspora.
              Kamma biodatas are among the most likely to include detailed NRI fields given this community&apos;s US
              presence.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Velama:</span> A prominent landowning community,
              particularly concentrated in Telangana. Community identity stated clearly; some families additionally
              note specific sub-group affiliations.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Kapu:</span> A large agrarian community present across both
              coastal Andhra and Rayalaseema regions, with significant population and political prominence in the
              state.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Brahmin (Vaidiki/Niyogi):</span> Telugu Brahmin families
              state their sub-division — Vaidiki (traditionally associated with priestly and religious roles) or
              Niyogi (traditionally associated with administrative and secular roles) — alongside Gotram and
              horoscope fields.
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">NRI fields in Telugu biodatas</h2>
          <p className="text-slate-300 leading-relaxed mb-5">
            Given the scale of Telugu-American migration over the past three decades, it is standard — not
            exceptional — for a Telugu biodata to include: current US city, visa/immigration status, and income in
            dual currency, even when the candidate&apos;s family is based in Hyderabad or Vijayawada rather than the
            candidate themselves. See the complete field guide →{" "}
            <Link href="/nri-biodata-for-marriage" className="text-brand-400 hover:underline">NRI marriage biodata</Link>{" "}
            and our Hyderabad-specific matrimonial context →{" "}
            <Link href="/biodata-for-marriage-in-hyderabad" className="text-brand-400 hover:underline">Biodata in Hyderabad</Link>
          </p>

          {/* CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Create your Telugu marriage biodata</p>
            <p className="text-slate-400 text-sm mb-5">Fields formatted for Telugu families — Nakshatram, Rasi, community, and NRI details. Free PDF, no login.</p>
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
                { href: "/biodata-for-marriage-in-hyderabad", label: "Biodata in Hyderabad" },
                { href: "/nri-biodata-for-marriage", label: "NRI marriage biodata" },
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/blog/what-is-nakshatra-in-marriage-biodata", label: "What is Nakshatra" },
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
