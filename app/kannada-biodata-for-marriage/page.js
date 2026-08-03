import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "Kannada Marriage Biodata — Format & Free Templates",
  description:
    "Kannada marriage biodata guide — script, Gotra, and community fields for Vokkaliga, Lingayat, and Brahmin families. Free templates, Karnataka-wide.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/kannada-biodata-for-marriage",
  },
  openGraph: {
    title: "Kannada Marriage Biodata — Format & Free Templates",
    description:
      "Kannada marriage biodata guide — script, Gotra, and community fields for Vokkaliga, Lingayat, and Brahmin families. Free templates, Karnataka-wide.",
    url: "https://www.marriagebiodatahub.com/kannada-biodata-for-marriage",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kannada Marriage Biodata — Format & Free Templates",
    description:
      "Kannada marriage biodata guide — script, Gotra, and community fields for Vokkaliga, Lingayat, and Brahmin families.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "What is a Kannada marriage biodata?",
    a: "A Kannada marriage biodata is written for Kannada-speaking families across Karnataka, using Kannada script for field labels where preferred and Karnataka-specific matrimonial terminology — Nakshatra, Rashi, and Gotra with Kannada naming conventions, and precise community identity such as Vokkaliga, Lingayat, or Kannada Brahmin (Madhwa, Smartha, or Iyengar-connected). It follows the standard six-section biodata structure, commonly presented bilingually in Kannada and English for families sharing across generations.",
  },
  {
    q: "Do Vokkaliga and Lingayat biodatas use horoscope fields?",
    a: "Yes, both communities generally include Rashi, Nakshatra, and Gotra fields following the standard South Indian horoscope-matching pattern, though the emphasis varies by family. Vokkaliga families, the dominant landowning community of southern Karnataka, typically state native place in the old Mysuru region (Mandya, Ramanagara, Hassan) alongside horoscope details. Lingayat families, concentrated in northern Karnataka (Hubballi, Belagavi, Kalaburagi), often note their specific matha (religious institution) affiliation and sub-sect alongside standard fields.",
  },
  {
    q: "Should a Kannada biodata be written in Kannada script or English?",
    a: "Both are common. Families in Mysuru, Hubballi, or smaller Karnataka towns, especially when sharing with older relatives, often prefer Kannada script for the full document. Bengaluru-based professional families, or those searching across state lines, frequently use English as the primary language with Kannada terms retained for community-specific fields (Gotra, Nakshatra, matha affiliation). Both formats are equally acceptable — the choice depends on who the biodata is being shared with most.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kannada Marriage Biodata — Format Guide for Karnataka Families",
    description:
      "Kannada marriage biodata guide covering script conventions, Gotra, Rashi and Nakshatra naming, and community-specific formats for Vokkaliga, Lingayat, and Kannada Brahmin families across Karnataka — from Mysuru to Hubballi to Mangaluru.",
    datePublished: "2026-08-10",
    dateModified: "2026-08-10",
    author: { "@type": "Organization", name: "Marriage Biodata Hub" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      logo: { "@type": "ImageObject", url: "https://www.marriagebiodatahub.com/icon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/kannada-biodata-for-marriage" },
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
      { "@type": "ListItem", position: 2, name: "Kannada Marriage Biodata", item: "https://www.marriagebiodatahub.com/kannada-biodata-for-marriage" },
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

export default function KannadaBiodataForMarriage() {
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
            <span className="text-slate-300">Kannada Marriage Biodata</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: August 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Kannada Marriage Biodata — Format Guide for Karnataka Families
          </h1>

          <AEOBlock>
            A Kannada marriage biodata follows the standard six-section structure with Kannada script and
            terminology given prominent placement for the fields Karnataka families check first: Nakshatra, Rashi,
            Gotra, and precise community identity — Vokkaliga, Lingayat, or Kannada Brahmin with sub-sect.
            Karnataka's matrimonial culture spans the old Mysuru region in the south (Vokkaliga strongholds, Mandya
            and Ramanagara), the Lingayat belt of the north (Hubballi, Belagavi, Kalaburagi), and Bengaluru's
            IT-driven, pan-community search culture — see our dedicated{" "}
            <Link href="/biodata-for-marriage-in-bengaluru" className="text-brand-300 underline hover:text-brand-200">
              Bengaluru city guide
            </Link>{" "}
            for that context. This page covers what's shared across Kannada-speaking families regardless of city:
            script, vocabulary, and community field conventions.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Kannada communities — what to state in the biodata</h2>
          <div className="space-y-4 mb-6">
            {[
              { label: "Vokkaliga", desc: "The dominant landowning community of southern Karnataka — native place in the old Mysuru region (Mandya, Ramanagara, Hassan, Tumkur) stated with weight, and community matching generally preferred. Strong community associations run active matrimonial registers, particularly around Mysuru and the Old Bengaluru neighbourhoods." },
              { label: "Lingayat", desc: "Karnataka's major community concentrated in the north (Hubballi-Dharwad, Belagavi, Kalaburagi, Vijayapura). The matha (religious institution) affiliation and specific sub-sect are part of family identity in traditional households and often stated alongside standard fields — this is distinctive to Lingayat biodatas and not found in most other Karnataka community formats." },
              { label: "Kannada Brahmin (Madhwa, Smartha, Iyengar-connected)", desc: "Sub-sect stated precisely; horoscope matching follows the South Indian star-and-Rasi pattern common across peninsular India. Old Bengaluru neighbourhoods (Basavanagudi, Malleswaram, Jayanagar) and Mysuru retain established Brahmin matrimonial institutions and registers." },
              { label: "Other communities", desc: "Kuruba, Reddy (in Karnataka's border districts with Andhra), Bunt (coastal Karnataka, particularly Mangaluru and Udupi), and various Muslim and Christian Kannada-speaking families each maintain distinct matrimonial networks." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-300 leading-relaxed mb-6">
            See our Muslim and Christian community guides for religion-specific field detail —{" "}
            <Link href="/muslim-biodata-for-marriage" className="text-brand-300 underline hover:text-brand-200">
              Muslim marriage biodata
            </Link>{" "}
            ·{" "}
            <Link href="/christian-biodata-for-marriage" className="text-brand-300 underline hover:text-brand-200">
              Christian marriage biodata
            </Link>.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Kannada field labels — sample bilingual format</h2>
          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 mb-6 font-mono text-sm text-slate-300 overflow-x-auto">
            <p>ಹೆಸರು / Name: <span className="text-white">Ananya Gowda</span></p>
            <p>ಜನ್ಮ ದಿನಾಂಕ / DOB: <span className="text-white">14 August 1998</span></p>
            <p>ನಕ್ಷತ್ರ / Nakshatra: <span className="text-white">Chitta</span></p>
            <p>ರಾಶಿ / Rashi: <span className="text-white">Tula</span></p>
            <p>ಗೋತ್ರ / Gotra: <span className="text-white">Kashyapa</span></p>
            <p>ಸಮುದಾಯ / Community: <span className="text-white">Vokkaliga</span></p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Coastal Karnataka — a distinct matrimonial culture</h2>
          <p className="text-slate-300 leading-relaxed">
            Mangaluru and Udupi districts (coastal Karnataka) maintain their own distinct matrimonial character —
            Bunt, Konkani-speaking Goud Saraswat Brahmin, and Mangalorean Catholic communities (the latter sharing
            Portuguese-origin surnames with Goan Catholics — see our Christian guide) each run separate, established
            networks. A coastal Karnataka biodata often notes native taluka specifically, since this region's
            community identity is closely tied to specific coastal villages and towns.
          </p>

          {/* Mid-page CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Ready to create your Kannada marriage biodata?</p>
            <p className="text-slate-400 text-sm mb-5">
              Free templates with Nakshatra, Rashi, Gotra, and community fields ready — for Vokkaliga, Lingayat,
              Kannada Brahmin, and every Karnataka community. One-page PDF, free.
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
                { href: "/biodata-for-marriage-in-bengaluru", label: "Biodata in Bengaluru" },
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/blog/what-is-gotra-in-marriage-biodata", label: "What is Gotra?" },
                { href: "/muslim-biodata-for-marriage", label: "Muslim marriage biodata" },
                { href: "/christian-biodata-for-marriage", label: "Christian marriage biodata" },
                { href: "/horoscope-calculator", label: "Horoscope calculator" },
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
