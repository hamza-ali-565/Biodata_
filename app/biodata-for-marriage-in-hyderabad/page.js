import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "Marriage Biodata in Hyderabad — Templates & Guide",
  description:
    "Make your marriage biodata in Hyderabad — Muslim, Reddy, Kamma, Brahmin, and IT-professional formats explained. Free templates, PDF download, WhatsApp ready.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-hyderabad",
  },
  openGraph: {
    title: "Marriage Biodata in Hyderabad — Templates & Guide",
    description:
      "Make your marriage biodata in Hyderabad — Muslim, Reddy, Kamma, Brahmin, and IT-professional formats explained. Free templates, PDF download, WhatsApp ready.",
    url: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-hyderabad",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriage Biodata in Hyderabad — Templates & Guide",
    description:
      "Make your marriage biodata in Hyderabad — Muslim, Reddy, Kamma, Brahmin, and IT-professional formats explained.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "How do I make a marriage biodata in Hyderabad?",
    a: "Use a free online biodata maker and choose your community's format. Hyderabadi Muslim families need the Bismillah opening with Sect and Biradari fields; Telugu Hindu families (Reddy, Kamma, Brahmin) include Nakshatram, Rasi, and community identity; US-connected candidates should add visa status and dual-currency income. Download a one-page PDF — that's what moves through Hyderabad's family networks and WhatsApp groups.",
  },
  {
    q: "Should a Hyderabad biodata mention US visa status?",
    a: "If the candidate is in the US or actively planning to be — yes, explicitly. Hyderabad's Telugu families treat immigration status as first-class matrimonial information: \"MS in the US, currently on H1B in Dallas\" answers the first question the receiving family will ask. State the status accurately (H1B, green card stage, citizen) rather than vaguely — families here know the difference and will ask.",
  },
  {
    q: "How is the Old City rishta process different?",
    a: "Hyderabadi Muslim matrimonial culture moves through family elders and khandaan connections with more formality than WhatsApp-first cities — the biodata typically arrives with a family introduction. It follows the Muslim format (Bismillah, Sect, Biradari) and often uses \"photo shared on request\" per community privacy norms. Bureaus around Mehdipatnam and Tolichowki serve this process commercially.",
  },
  {
    q: "Which months do Telugu families avoid for weddings?",
    a: "Ashada masam (roughly July) is traditionally avoided — by custom even newlywed couples are separated during it. The favoured windows are the post-Devuthi months from November and the Magha–Phalguna period (February–March), with muhurtam dates booked months ahead at Hyderabad's function halls.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Marriage Biodata in Hyderabad — Templates & Community Guide for Hyderabad Families",
    description:
      "Make your marriage biodata in Hyderabad — Muslim, Reddy, Kamma, Brahmin, and IT-professional formats explained. Free templates, PDF download, WhatsApp ready.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    author: { "@type": "Organization", name: "Marriage Biodata Hub" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      logo: { "@type": "ImageObject", url: "https://www.marriagebiodatahub.com/icon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/biodata-for-marriage-in-hyderabad" },
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
      { "@type": "ListItem", position: 2, name: "Marriage Biodata in Hyderabad", item: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-hyderabad" },
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

export default function BiodataForMarriageInHyderabad() {
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
            <span className="text-slate-300">Marriage Biodata in Hyderabad</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Marriage Biodata in Hyderabad — Templates & Community Guide for Hyderabad Families
          </h1>

          <AEOBlock>
            Hyderabad's matrimonial map splits along the city's own geography. The Old City — Charminar,
            Mehdipatnam, Tolichowki — is the heart of Hyderabadi Muslim matrimonial culture, where the biodata
            opens with Bismillah, states Sect and Biradari, and moves through family-elder and masjid networks
            with a formality that reflects the city's Nawabi heritage. The newer city — Hitec City, Gachibowli,
            Kukatpally, and the Telugu heartland suburbs — runs on Telugu Hindu community lines: Reddy, Kamma,
            Velama, Kapu, and Brahmin families for whom community identity and, increasingly, US-connection status
            ("H1B holder," "green card processing") are standard biodata content. Few Indian cities put an NRI
            field to work as hard as Hyderabad does.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">How marriage biodatas work in Hyderabad</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Hyderabad may be the only Indian city where "USA lo unnaadu" (he's in the USA) functions as a biodata
            field.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            The Telugu-American pipeline — two generations of engineers from Hyderabad and coastal Andhra moving
            to the US — has made immigration status a first-class matrimonial data point in Telugu families.
            Biodatas routinely state "B.Tech (JNTU), MS (US university), currently in Dallas on H1B" in the
            education line, and families openly weigh green-card timelines the way other cities weigh salaries.
            If this is your situation, the four NRI fields covered in our NRI biodata guide — country, visa
            status, open-to, dual-currency income — belong in your biodata explicitly.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The Old City runs on a different clock. Hyderabadi Muslim matrimonial culture retains a formality
            inherited from the Nizam era: the rishta process moves through family elders, khandaani connections,
            and masjid networks, with the biodata carrying Sect, Biradari (Syed families in particular note it),
            and often "photo shared on request" per the privacy norms our Muslim biodata guide explains. Marriage
            bureaus around Mehdipatnam and Tolichowki serve this market specifically.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Hyderabad's communities — which biodata fields matter here</h2>
          <div className="space-y-4 mb-6">
            {[
              { label: "Hyderabadi Muslim families (Old City, Mehdipatnam, Tolichowki, Banjara Hills)", desc: "The Muslim format applies — Bismillah, Sect, Biradari; see our Muslim biodata guide. Old Hyderabad families often mention khandaan (family lineage) and mohalla; Urdu-medium education is stated without hesitation." },
              { label: "Reddy families", desc: "The dominant landowning community of Telangana and Rayalaseema; native district (Nalgonda, Karimnagar, Kadapa) and family land or business stated with weight. Strong preference for community matching." },
              { label: "Kamma families", desc: "Coastal Andhra origin, heavily represented in Hyderabad's business and tech world and in the US diaspora; the US-status line appears in Kamma biodatas more than almost any community in India." },
              { label: "Velama, Kapu, and BC communities", desc: "Community stated explicitly; local community associations run matrimonial meets and registers." },
              { label: "Telugu Brahmin families (Vaidiki, Niyogi)", desc: "Sub-community stated; horoscope matching follows the South Indian pattern — the Telugu Jatakam works like the Tamil Jathagam, with star (Nakshatram) and Rasi checked before proceeding." },
              { label: "IT migrants (Hitec City, Gachibowli, Kondapur, Miyapur)", desc: "Every community in India; biodatas lead with company and campus. \"Both in Hyderabad IT\" is a recognised match category with its own logistics questions (Gachibowli vs Uppal is a real commute conversation)." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">How biodatas circulate in Hyderabad</h2>
          <div className="space-y-4 mb-6">
            {[
              { label: "Family-elder and khandaan networks (Old City)", desc: "The most formal channel in any Indian metro: rishta proposals move elder-to-elder, and the biodata arrives with a family introduction, not cold. Bureaus in Mehdipatnam and Tolichowki extend this network commercially." },
              { label: "Community associations and Telugu registers", desc: "Reddy sanghams, Kamma associations, and Brahmin sabhas run matrimonial registers and periodic meets; biodata PDF plus Jatakam is the standard submission for Hindu families." },
              { label: "The US-family WhatsApp channel", desc: "Hyderabad's most distinctive flow: biodatas travelling Hyderabad — Dallas — Bay Area within extended families, with aunts in the US actively matchmaking for the India side and vice versa. A biodata that states visa status clearly saves this entire network a week of follow-up questions." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Hyderabad wedding season notes</h2>
          <p className="text-slate-300 leading-relaxed">
            Telugu weddings follow muhurtam dates with strong seasons around Magha–Phalguna (roughly
            February–March) and the post-Devuthi period from November; Ashada masam (roughly July) is
            traditionally avoided — newlyweds are even separated during it by custom. Sri Rama Navami and Akshaya
            Tritiya are heavy muhurtam days. Muslim Hyderabad is calendar-flexible but avoids Muharram for
            celebrations and slows during Ramzan. Function halls from Kompally to LB Nagar book on muhurtam dates
            months out — Telugu families exchanging biodatas by August–September are timed for the winter–spring
            season.
          </p>

          {/* Mid-page CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Ready to create your Hyderabad marriage biodata?</p>
            <p className="text-slate-400 text-sm mb-5">
              Bismillah-opening Muslim formats, Telugu Hindu formats with Jatakam fields, and NRI fields for the
              US-connected — pick what your family needs and download a one-page PDF. No login. Free.
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
                { href: "/muslim-biodata-for-marriage", label: "Muslim Rishta biodata" },
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/nri-biodata-for-marriage", label: "NRI marriage biodata" },
                { href: "/biodata-for-marriage-in-bengaluru", label: "Biodata in Bengaluru" },
                { href: "/biodata-for-marriage-in-chennai", label: "Biodata in Chennai" },
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
