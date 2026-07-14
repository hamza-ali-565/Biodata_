import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "Hindu Marriage Biodata — Gotra, Rashi, Manglik Guide",
  description:
    "Complete Hindu marriage biodata guide — Gotra, Rashi, Nakshatra, Nadi, Gan and Manglik fields explained simply. Free templates for all Hindu communities.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/hindu-marriage-biodata",
  },
  openGraph: {
    title: "Hindu Marriage Biodata — Gotra, Rashi, Manglik Guide",
    description:
      "Complete Hindu marriage biodata guide — Gotra, Rashi, Nakshatra, Nadi, Gan and Manglik fields explained simply. Free templates for all Hindu communities.",
    url: "/hindu-marriage-biodata",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hindu Marriage Biodata — Gotra, Rashi, Manglik Guide",
    description: "Complete Hindu marriage biodata guide — Gotra, Rashi, Nakshatra, Nadi, Gan and Manglik fields explained simply.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "What horoscope details are required in a Hindu marriage biodata?",
    a: "A Hindu marriage biodata typically requires six horoscope fields: Gotra (patrilineal clan), Rashi (Vedic moon sign), Nakshatra (birth star), Nadi (energy type — Aadi/Madhya/Antya), Gan (Deva/Manushya/Rakshasa), and Manglik status (whether Mars is positioned in houses 1, 4, 7, 8, or 12). South Indian Hindu families often call this section Jathagam and give highest priority to Nakshatra matching.",
  },
  {
    q: "What is Gotra in a Hindu marriage biodata?",
    a: "Gotra is your patrilineal clan lineage, traced back to a Vedic sage (Rishi). It is passed through the father's side. Two people from the same Gotra cannot marry in most Hindu communities — it is treated as equivalent to a sibling relationship. Common Gotras include Kashyap, Bharadwaj, Vashistha, Atri, and Vishwamitra. If you don't know your Gotra, ask your father or paternal grandparents.",
  },
  {
    q: "What is Manglik in a Hindu marriage biodata?",
    a: "A person is called Manglik when Mars (Mangal) is positioned in houses 1, 4, 7, 8, or 12 of their Vedic birth chart. Traditional Hindu belief holds that Manglik individuals should marry another Manglik or perform a specific puja before marriage. Many modern families treat this as optional information. Always disclose Manglik status honestly in your biodata — families who care will find out anyway.",
  },
  {
    q: "Should I include caste in my Hindu marriage biodata?",
    a: "Yes, if your family prefers caste-specific matches. This is honest and saves both families time. Write the full caste and sub-caste — e.g., \"Brahmin — Kanyakubj\" or \"OBC — Yadav\". If your family is open to all castes, write \"Caste no bar\" or \"Open to all Hindu communities\" in partner preferences. Data from Jeevansathi's 2026 report shows caste as a strict requirement has dropped from 91% to 54% among Indian matrimonial users over the last decade.",
  },
  {
    q: "How is a Hindu marriage biodata different from a Muslim biodata?",
    a: "The primary difference is in the horoscope section. Hindu biodatas include Gotra, Rashi, Nakshatra, Nadi, Gan, and Manglik status. Muslim biodatas (Rishta biodata) include Sect (Sunni/Shia/Bohra/Deobandi/Barelvi) and Biradari (community/caste — Khan, Syed, Ansari, Shaikh) instead. Muslim biodatas typically open with Bismillah; Hindu biodatas often open with Shree Ganeshaya Namah or similar.",
  },
  {
    q: "How do I calculate Rashi and Nakshatra for my marriage biodata?",
    a: "Use date of birth, time of birth (as exact as possible), and place of birth. Enter these into a Vedic astrology calculator using Lahiri ayanamsa — the system followed in Indian Vedic astrology. Your Rashi is your Vedic moon sign (not the Western sun sign). Your Nakshatra is the lunar mansion at your exact birth moment. If you don't know your birth time, give an approximate (morning/afternoon/evening) — avoid leaving it blank.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Hindu Marriage Biodata — Complete Format Guide with All Horoscope Fields",
    description: "Complete Hindu marriage biodata format guide with Gotra, Rashi, Nakshatra, Nadi, and Manglik fields explained in plain language.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    author: { "@type": "Organization", name: "Marriage Biodata Hub" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      logo: { "@type": "ImageObject", url: "https://www.marriagebiodatahub.com/icon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/hindu-marriage-biodata" },
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
      { "@type": "ListItem", position: 2, name: "Hindu Marriage Biodata", item: "https://www.marriagebiodatahub.com/hindu-marriage-biodata" },
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

export default function HinduMarriageBiodata() {
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
            <span className="text-slate-300">Hindu Marriage Biodata</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>10 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Hindu Marriage Biodata — Complete Format Guide with All Horoscope Fields
          </h1>

          <AEOBlock>
            A Hindu marriage biodata includes all standard sections — personal details, family background, education,
            career, and partner preferences — plus a dedicated horoscope section that most other communities don't have.
            This horoscope section typically includes Gotra (patrilineal clan lineage), Rashi (Vedic moon sign),
            Nakshatra (birth star), Nadi, Gan, and Manglik status. These six fields are what Hindu families check
            first when reviewing a biodata.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">What makes a Hindu marriage biodata different?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            The core difference is the horoscope section. Hindu families use Kundali Milan (horoscope compatibility
            matching) as a filter before deciding to meet. A biodata without horoscope details signals to a traditional
            Hindu family that either the family isn't serious, or they've created a generic biodata without
            understanding the community's expectations.
          </p>
          <p className="text-slate-300 leading-relaxed">
            This varies by region: North Indian families typically give more weight to Manglik status and Gotra
            matching. South Indian families (Tamil, Telugu, Kannada, Kerala) check Nakshatra compatibility first, often
            before Rashi. Urban, progressive Hindu families may include the fields but treat them as informational
            rather than decisive — they still want to see them filled in.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Hindu marriage biodata — all fields explained</h2>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">1. Personal details — Hindu-specific notes</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The standard fields (name, date of birth, height, etc.) apply here too, with a few Hindu-specific
            additions:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { label: "Time of birth", desc: "Critical for calculating Rashi and Nakshatra accurately. If you don't know your exact time, give an approximate (morning/afternoon/evening). Avoid leaving it blank." },
              { label: "Place of birth", desc: "Also needed for horoscope calculation. Include district/tehsil if born in a small town, not just the state." },
              { label: "Complexion", desc: "Still included in traditional North Indian biodatas (Wheatish, Fair). Urban and South Indian families increasingly omit this." },
              { label: "Caste and sub-caste", desc: "Write fully — e.g., \"Brahmin — Kanyakubj\" or \"Rajput — Sisodia\" or \"OBC — Yadav.\" The sub-caste matters for Gotra and exogamy rules." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-4">
                <p className="font-semibold text-white mb-1">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">2. Horoscope details — the section that separates Hindu biodatas from all others</h3>

          {/* Gotra */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 mb-5">
            <h4 className="text-lg font-bold text-white mb-3">Gotra</h4>
            <p className="text-slate-300 leading-relaxed mb-3">
              Your patrilineal clan lineage, traced back to a Vedic sage (Rishi). Your Gotra is passed through the
              father's side — you carry your father's Gotra. All descendants of the same Rishi share the same Gotra.
            </p>
            <p className="text-slate-300 leading-relaxed mb-3">
              <strong className="text-white">Why it matters in marriage:</strong> Two people from the same Gotra are
              considered to have the same ancestor — marriage between them is treated as a form of sibling marriage
              and is forbidden in most Hindu communities (Gotra exogamy).
            </p>
            <p className="text-slate-300 leading-relaxed mb-3">
              Common Gotras: Kashyap, Bharadwaj, Vashistha, Atri, Vishwamitra, Goutam, Shandilya, Parashar, Agastya,
              Kaushik, Gautama.
            </p>
            <div className="rounded-xl bg-brand-500/10 border border-brand-500/20 p-4 text-sm text-slate-300">
              <strong className="text-brand-300">What if I don't know my Gotra?</strong> This is more common than
              people admit. If your family has genuinely lost track — often happens after 2–3 generations of urban
              migration — write "Gotra not known." Don't guess or leave it blank. Make one phone call to extended
              family if you can.
            </div>
          </div>

          {/* Rashi */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 mb-5">
            <h4 className="text-lg font-bold text-white mb-3">Rashi (Zodiac / Moon sign)</h4>
            <p className="text-slate-300 leading-relaxed mb-3">
              Vedic astrology uses the position of the Moon at the time of your birth, not the Sun as in Western
              astrology. This is why your Vedic Rashi may be different from the Western star sign you know.
            </p>
            <p className="text-slate-300 leading-relaxed mb-2">
              The 12 rashis: Mesh (Aries), Vrishabha (Taurus), Mithun (Gemini), Karka (Cancer), Simha (Leo), Kanya
              (Virgo), Tula (Libra), Vrishchika (Scorpio), Dhanu (Sagittarius), Makar (Capricorn), Kumbha (Aquarius),
              Meen (Pisces).
            </p>
            <div className="rounded-xl bg-brand-500/10 border border-brand-500/20 p-4 text-sm text-slate-300 mt-3">
              <strong className="text-brand-300">How to find your Rashi:</strong> Use your exact date, time, and place
              of birth in a Vedic astrology calculator. Don't use your Western sun sign — it's often different. If you
              don't know your Rashi and Nakshatra, use our free{" "}
              <Link href="/horoscope-calculator" className="text-brand-300 underline hover:text-brand-200">
                horoscope calculator
              </Link>.
            </div>
          </div>

          {/* Nakshatra */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 mb-5">
            <h4 className="text-lg font-bold text-white mb-3">Nakshatra (Birth star)</h4>
            <p className="text-slate-300 leading-relaxed mb-3">
              The 27 lunar mansions in Vedic astrology. Your Nakshatra is determined by the position of the Moon at
              your exact birth moment. South Indian Hindu families — particularly Tamil and Telugu families — check
              Nakshatra compatibility as the primary filter, before Rashi.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              The 27 Nakshatras (in order): Ashwini, Bharani, Krittika, Rohini, Mrigashira, Ardra, Punarvasu, Pushya,
              Ashlesha, Magha, Purva Phalguni, Uttara Phalguni, Hasta, Chitra, Swati, Vishakha, Anuradha, Jyeshtha,
              Mula, Purva Ashadha, Uttara Ashadha, Shravana, Dhanishtha, Shatabhisha, Purva Bhadrapada, Uttara
              Bhadrapada, Revati.
            </p>
          </div>

          {/* Nadi, Gan, Manglik */}
          <div className="space-y-4 mb-6">
            {[
              {
                label: "Nadi",
                desc: "One of three energy types — Aadi, Madhya, or Antya. Determined by Nakshatra. Nadi dosha occurs when both partners have the same Nadi — considered inauspicious in North Indian tradition. Not all communities check Nadi. It can be calculated from your Nakshatra.",
              },
              {
                label: "Gan",
                desc: "Three categories — Deva, Manushya, Rakshasa — determined by Nakshatra. Certain Gan combinations are considered compatible; others are not. Gan matching is one of the 8 factors (Ashtakoot) in Vedic Kundali matching.",
              },
              {
                label: "Manglik status",
                desc: "A person is Manglik when Mars (Mangal) is positioned in houses 1, 4, 7, 8, or 12 of the birth chart. Many families prefer Manglik-to-Manglik matches. Some pandits perform specific pujas (like Kumbh Vivah) believed to neutralize the dosha. Urban families increasingly treat this as optional information, not a dealbreaker. Always disclose Manglik status honestly.",
              },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">3. Family details — what Hindu families look for</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            In many Hindu families — especially traditional ones — family background is weighted as heavily as the
            candidate's own profile. A "good family" signals: parents are educated and respectable, the household is
            stable, and the family has a history in the same community or region.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Include: father's name + occupation, mother's name + occupation, number of brothers and sisters (with
            married/unmarried status), whether the family is joint or nuclear, native place (ancestral village or
            district — important in Rajasthan, UP, Gujarat, MP), and Kuldevta or Kulswamini (family deity — common in
            Maharashtra and South India).
          </p>

          {/* Mid-page CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Ready to create your Hindu marriage biodata?</p>
            <p className="text-slate-400 text-sm mb-5">
              Our templates have all horoscope fields pre-built — Gotra, Rashi, Nakshatra, Nadi, Gan, and Manglik.
              You fill in the values; we format everything perfectly.
            </p>
            <SmartLink href="/#biodata-form-wrapper"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105"
            >
              Create My Hindu Biodata — Free →
            </SmartLink>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Hindu marriage biodata format by community — sub-caste differences</h2>

          <div className="space-y-4 mb-6">
            {[
              {
                label: "Brahmin families (UP, Bihar, Delhi, Maharashtra, South India)",
                points: [
                  "Gotra is strictly checked — same-Gotra match rejected",
                  "Sub-caste matters: Kanyakubj, Saraswat, Niyogi, Chitpavan, Iyer, Iyengar, CKP are not interchangeable",
                  "Vegetarian diet is typically a standard expectation",
                  "Pravara (full lineage chain) may be asked by very traditional families",
                ],
              },
              {
                label: "Rajput families (Rajasthan, UP, MP)",
                points: [
                  "Clan name (Vansh) is important — Sisodia, Rathore, Chauhan, Tomar, Kachwaha",
                  "Native village and ancestral district is relevant to older family members",
                  "Intermarriage between certain Rajput clans has historical restrictions — families check this",
                ],
              },
              {
                label: "Marwari / Baniya families (Rajasthan, Gujarat)",
                points: [
                  "Business family details are standard (what business, since when, which city)",
                  "Gotra checked strictly",
                  "Vegetarian diet is a firm requirement in most Marwari households",
                ],
              },
              {
                label: "South Indian Hindu — Brahmin (Iyer, Iyengar, Niyogi, Smartha)",
                points: [
                  "Jathagam (horoscope) is the primary compatibility check",
                  "Nakshatra matching checked before Rashi",
                  "Rigorous Gotra matching — same Gotra marriages strictly forbidden",
                  "Star (Natchathiram) and Rasi are checked in that order",
                ],
              },
            ].map(({ label, points }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-3">{label}</p>
                <ul className="space-y-1.5">
                  {points.map((pt, i) => (
                    <li key={i} className="flex gap-2 text-slate-300 text-sm">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-400 mt-2"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Auspicious times to share Hindu marriage biodatas in 2026</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Hindu marriage seasons are determined by the Panchang (Hindu calendar). Families begin exchanging biodatas
            6–8 weeks before the wedding season opens.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { label: "Dev Uthani Ekadashi — October 28, 2026", desc: "This date officially opens the Hindu marriage season (Kartik Shukla Ekadashi). Biodata exchange begins from mid-September onwards." },
              { label: "Peak wedding months 2026–27", desc: "November 2026, December 2026, February 2027, March 2027. Akshaya Tritiya (around April 27, 2027) is the busiest single wedding day in India." },
              { label: "Inauspicious periods (no Hindu weddings)", desc: "Chaturmas: approx. July 10 – October 28, 2026. Pitru Paksha: approx. September 15 – September 30, 2026. Dates vary slightly by regional calendar — confirm with your family pandit." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-4 flex gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-400 mt-2"></span>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{label}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Hindu marriage biodata — what NOT to include</h2>
          <div className="space-y-3 mb-6">
            {[
              { n: "1", t: "Pravara", d: "Unless the family specifically asks. Most urban families don't know their Pravara." },
              { n: "2", t: "Exact birth time if uncertain", d: "\"Approximately 7 AM\" is better than a wrong exact time that produces an incorrect horoscope." },
              { n: "3", t: "Multiple photos", d: "One clear, recent photo. Three photos of different occasions looks unorganised." },
              { n: "4", t: "Health issues or past surgeries", d: "This is for the meeting, not the biodata." },
              { n: "5", t: "Negative statements about community", d: "Any phrasing that sounds dismissive of other castes closes doors unnecessarily and reflects poorly on your family." },
            ].map(({ n, t, d }) => (
              <div key={n} className="flex gap-4 rounded-xl bg-slate-900/60 border border-slate-800 p-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center justify-center">{n}</span>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{t}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-2">Frequently asked questions</h2>
          <SectionFAQ items={faqs} />

          <div className="mt-14 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-4">Related guides</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/marriage-biodata-format", label: "Complete biodata format guide" },
                { href: "/what-is-marriage-biodata", label: "What is a marriage biodata?" },
                { href: "/muslim-biodata-for-marriage", label: "Muslim Rishta biodata" },
                { href: "/marathi-biodata-for-marriage", label: "Marathi Lagnacha biodata" },
                { href: "/sikh-biodata-for-marriage", label: "Sikh marriage biodata" },
                { href: "/christian-biodata-for-marriage", label: "Christian marriage biodata" },
                { href: "/jain-biodata-for-marriage", label: "Jain marriage biodata" },
                { href: "/nri-biodata-for-marriage", label: "NRI marriage biodata" },
                { href: "/about-me-for-marriage-biodata", label: "About Me examples" },
                { href: "/biodata-samples", label: "See real Hindu biodata samples" },
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
