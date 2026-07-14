import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "Bengali Marriage Biodata — Format & Free Templates",
  description:
    "Bengali marriage biodata guide — Jati, Gotra, and cultural fields explained. Free templates for Brahmin, Kayastha, Baidya, and all Bengali Hindu families.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/bengali-biodata-for-marriage",
  },
  openGraph: {
    title: "Bengali Marriage Biodata — Format & Free Templates",
    description:
      "Bengali marriage biodata guide — Jati, Gotra, and cultural fields explained. Free templates for Brahmin, Kayastha, Baidya, and all Bengali Hindu families.",
    url: "/bengali-biodata-for-marriage",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bengali Marriage Biodata — Format & Free Templates",
    description: "Jati, Gotra, and cultural fields explained. Free templates.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "What is a Bengali marriage biodata?",
    a: "A Bengali marriage biodata is written for Bengali-speaking Hindu families, following the standard six-section structure but giving particular weight to education (school and college names are often stated in full) and family cultural life (music, literature, theatre) alongside the standard Jati, Gotra, and horoscope fields. It is used within the traditional 'sombondho' matrimonial process, which often involves a family matchmaker called a ghotok, and is exchanged alongside detailed horoscope information checked by a family purohit.",
  },
  {
    q: "What is Jati in a Bengali biodata and how is it different from Gotra?",
    a: "Jati refers to the specific Bengali Hindu community group — most commonly Brahmin, Kayastha, or Baidya, the three traditionally prominent bhadralok communities in Bengali society. Gotra is the separate patrilineal clan lineage traced to a Vedic sage, used the same way as in other Hindu communities. A Bengali biodata typically states both: Jati identifies the broad community, Gotra identifies the specific ancestral lineage within Hindu tradition used for matrimonial exogamy rules.",
  },
  {
    q: "Why do Bengali biodatas emphasise education and cultural background?",
    a: "Bengali bhadralok matrimonial culture has historically treated education and cultural refinement — literature, music, the arts — as significant matching criteria in their own right, alongside career and family background. A Bengali biodata that states the specific school and college attended, and mentions genuine cultural interests (learning Rabindra Sangeet, reading), is following an established cultural pattern where these details are read as meaningful indicators of family compatibility, not incidental information.",
  },
  {
    q: "What is a ghotok in Bengali matrimonial culture?",
    a: "A ghotok is a traditional Bengali matchmaker — an individual, often known within a community or neighbourhood network, who facilitates introductions between families for the sombondho (matrimonial alliance) process. The institution survives today, largely operating through WhatsApp and phone networks rather than in person, and remains a trusted channel for many Bengali families alongside newspaper matrimonial columns and digital matrimonial platforms.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Bengali Marriage Biodata — Format Guide for Bengali Hindu Families",
    description:
      "Bengali marriage biodata guide covering Jati, Gotra, Rashi, and the cultural and educational fields Bengali families weigh heavily — for Brahmin, Kayastha, and Baidya communities, with sombondho matrimonial process explained.",
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
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/bengali-biodata-for-marriage" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marriagebiodatahub.com" },
      { "@type": "ListItem", position: 2, name: "Bengali Marriage Biodata", item: "https://www.marriagebiodatahub.com/bengali-biodata-for-marriage" },
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

export default function BengaliBiodataForMarriage() {
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
            <span className="text-slate-300">Bengali Marriage Biodata</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: August 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Bengali Marriage Biodata — Format Guide for Bengali Hindu Families
          </h1>

          <AEOBlock>
            A Bengali marriage biodata follows the standard six-section structure with particular emphasis on two
            things Bengali matrimonial culture weighs heavily: education stated in full detail (school and college
            names, not just degree) and genuine cultural life (music, literature, theatre) as a meaningful
            compatibility signal alongside career. Jati (community — Brahmin, Kayastha, or Baidya) and Gotra are both
            stated, checked by a family purohit alongside Rashi and Nakshatra. The traditional matchmaking process,
            called sombondho, often involves a ghotok (matchmaker) — an institution that survives today largely
            through WhatsApp networks. For city-specific Kolkata matrimonial culture including the ghotok network and
            Anandabazar matrimonial columns in depth, see →{" "}
            <Link href="/biodata-for-marriage-in-kolkata" className="text-brand-400 hover:underline">Biodata in Kolkata</Link>
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Bengali communities and the Jati field</h2>
          <div className="space-y-4 mb-6">
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Brahmin:</span> The traditionally priestly Bengali Hindu
              community. Gotra stated (Shandilya, Kashyap, Bharadwaj among common ones), often alongside Kulin
              heritage notation in more traditional families — a historical sub-classification within Bengali
              Brahmin society.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Kayastha:</span> Historically Bengal&apos;s largest bhadralok
              (educated professional class) community — common surnames include Bose, Ghosh, Mitra, Dutta, Dey. Jati
              stated as Kayastha with Gotra.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-white">Baidya:</span> The traditional physician community,
              comparatively small and often strongly preferring within-community matching in traditional families.
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">What Bengali biodatas emphasise beyond the standard fields</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Where many Indian biodatas keep education to a single line (degree, institution, year), Bengali biodatas
            frequently name the specific school alongside the college — Presidency, Jadavpur, and St. Xavier&apos;s carry
            recognised social weight that families read as meaningful. Genuine cultural interests — Rabindra Sangeet
            training, classical music, literature, theatre — are commonly included in the About Me section as
            substantive information about the candidate&apos;s household, not filler. See our complete About Me guide for
            how to state these specifically rather than generically →{" "}
            <Link href="/blog/how-to-write-about-me-in-marriage-biodata" className="text-brand-400 hover:underline">writing About Me</Link>
          </p>
          <p className="text-slate-300 leading-relaxed">
            <span className="font-semibold text-white">East Bengal (Bangal) vs West Bengal (Ghoti) origin</span> is
            sometimes noted casually in the family background — a residual but still-recognised identity marker
            among many Bengali families with Partition-era migration history.
          </p>

          {/* CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Create your Bengali marriage biodata</p>
            <p className="text-slate-400 text-sm mb-5">Fields formatted for Bengali families — Jati, Gotra, education, and cultural background. Free PDF, no login.</p>
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
                { href: "/biodata-for-marriage-in-kolkata", label: "Biodata in Kolkata" },
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/blog/what-is-gotra-in-marriage-biodata", label: "What is Gotra" },
                { href: "/blog/how-to-write-about-me-in-marriage-biodata", label: "About Me examples" },
                { href: "/horoscope-calculator", label: "Horoscope calculator" },
                { href: "/marriage-biodata-format", label: "Complete biodata format guide" },
                { href: "/biodata-samples", label: "See real Bengali biodata samples" },
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
