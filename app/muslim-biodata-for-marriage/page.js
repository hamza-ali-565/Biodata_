import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

export const metadata = {
  title: "Muslim Biodata for Marriage | Rishta Biodata Format — Complete 2026 Guide | Marriage Biodata Hub",
  description:
    "Complete Muslim marriage biodata and Rishta biodata format. Includes Sect, Biradari, religiosity level fields. Free templates that open with Bismillah. No login required.",
  alternates: {
    canonical: "/muslim-biodata-for-marriage",
  },
  openGraph: {
    title: "Muslim Biodata for Marriage | Rishta Biodata Format — Complete 2026 Guide",
    description:
      "Complete Muslim marriage biodata and Rishta biodata format. Sect, Biradari, religiosity fields. Free templates opening with Bismillah.",
    url: "/muslim-biodata-for-marriage",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muslim Biodata for Marriage | Rishta Biodata 2026",
    description: "Complete Muslim marriage biodata guide. Sect, Biradari, Bismillah opening. Free templates.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "What is a Rishta biodata?",
    a: "A Rishta biodata is the term used by Muslim families in India (and Pakistan) for a marriage biodata. \"Rishta\" means relationship or proposal in Urdu. It is a structured document introducing a potential bride or groom to another family, covering personal details, Sect, Biradari, religious observance, family background, education, career, and partner preferences. It typically opens with Bismillah and does not include Hindu horoscope fields.",
  },
  {
    q: "What is Biradari in a Muslim marriage biodata?",
    a: "Biradari refers to the Muslim community or clan subgroup — similar to caste in the broader Indian context. Common Biradaris in India include Syed, Sheikh, Khan, Ansari, Qureshi, Malik, and Mughal. Some families consider Biradari compatibility important; others are open across Biradaris. Write your Biradari honestly in the biodata. If your family is open to all, write \"Open to all Biradaris.\"",
  },
  {
    q: "Should a Muslim biodata include horoscope details?",
    a: "No. Horoscope fields (Rashi, Nakshatra, Gotra, Manglik) are specific to Hindu biodatas. Muslim biodatas use Sect and Biradari fields instead. Astrology and horoscope-based decision making is generally considered inconsistent with Islamic belief, though individual family practices vary.",
  },
  {
    q: "Is a photo required in a Muslim marriage biodata?",
    a: "Many Muslim families include the candidate's photo. For female candidates, many families share the photo privately only after initial interest is confirmed — not in the first biodata that circulates through a wide network. Our tool makes the photo optional. You can create a complete biodata without a photo for initial circulation, and share it separately with specific interested families.",
  },
  {
    q: "How is a Muslim Rishta biodata different from a Hindu marriage biodata?",
    a: "Three main differences: (1) Opening — Muslim biodata opens with Bismillah; Hindu biodata often opens with Shree Ganeshaya Namah. (2) Community fields — Muslim biodata includes Sect and Biradari; Hindu biodata includes Gotra, Rashi, Nakshatra, and Manglik status. (3) Photo — Muslim families are often more cautious about circulating the daughter's photo in the initial biodata; Hindu families typically include it from the start.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Muslim Biodata for Marriage — Rishta Biodata Format Complete Guide",
    description: "Complete Muslim marriage biodata and Rishta biodata format with Sect, Biradari, and religiosity fields.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    author: { "@type": "Organization", name: "Marriage Biodata Hub" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      logo: { "@type": "ImageObject", url: "https://marriagebiodatahub.com/icon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://marriagebiodatahub.com/muslim-biodata-for-marriage" },
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://marriagebiodatahub.com" },
      { "@type": "ListItem", position: 2, name: "Muslim Biodata for Marriage", item: "https://marriagebiodatahub.com/muslim-biodata-for-marriage" },
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

export default function MuslimBiodataForMarriage() {
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
            <span className="text-slate-300">Muslim Biodata for Marriage</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Muslim Biodata for Marriage — Rishta Biodata Format Complete Guide
          </h1>

          <AEOBlock>
            A Muslim marriage biodata (commonly called a Rishta biodata or Nikah biodata) opens with Bismillah
            ir-Rahman ir-Rahim and includes Sect (Sunni, Shia, Bohra, Deobandi, Barelvi, or other), Biradari
            (community or caste — Khan, Syed, Ansari, Shaikh, Pathan, etc.), and level of religious observance. It
            does not include Gotra, Rashi, Nakshatra, or Manglik status — those fields are specific to Hindu biodatas.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">What is a Rishta biodata?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            "Rishta" means relationship or proposal in Urdu. Muslim families across India — especially in UP, Bihar,
            Hyderabad, Mumbai, and Kerala — use this term for the marriage proposal process. The biodata is the first
            document exchanged between families, typically through relatives, local mosque networks, or community
            marriage bureaus, before any formal meeting takes place.
          </p>
          <p className="text-slate-300 leading-relaxed">
            A Rishta biodata serves the same purpose as any marriage biodata — it gives another family enough
            information to decide whether to take the conversation forward. What makes it distinctly Muslim is its
            opening invocation, its community-specific fields, and the cultural sensitivities around photo sharing for
            female candidates.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Complete Muslim biodata fields — what to include and why</h2>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 mb-5">
            <h3 className="text-lg font-bold text-white mb-3">Opening invocation — Bismillah</h3>
            <p className="text-slate-300 leading-relaxed mb-3">
              Every Muslim marriage biodata traditionally opens with:
            </p>
            <div className="rounded-xl bg-slate-800/60 border border-slate-700 px-5 py-4 mb-3 text-center">
              <p className="text-xl text-white font-medium mb-1" dir="rtl">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْم</p>
              <p className="text-slate-400 text-sm">Bismillah ir-Rahman ir-Rahim</p>
              <p className="text-slate-500 text-xs mt-1">In the name of God, the Most Gracious, the Most Merciful</p>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              This is not optional for religious families — its absence is noticed. Our Muslim templates include this
              automatically at the top of every design.
            </p>
          </div>

          <div className="space-y-4 mb-6">
            {[
              {
                label: "Sect",
                desc: "Sunni (including sub-schools: Deobandi, Barelvi, Ahle Hadith), Shia (Ithna Ashari, Ismaili, Bohra), or other. Sect matching is important to many families — a Deobandi family and a Shia family have different religious practices and will assess compatibility accordingly. Write your sect honestly.",
              },
              {
                label: "Biradari (community / caste)",
                desc: "Muslim social structure in India includes Biradari — community or clan divisions. Common Biradaris: Syed (descendants of the Prophet ﷺ), Sheikh (converts or traders), Khan (Pathan/Pashtun origin), Ansari (weavers), Qureshi (butchers), Malik, Mughal, Rajput (converted). Some families prioritise Biradari matching; others are more open. Write yours honestly — \"open to all Biradaris\" is also acceptable.",
              },
              {
                label: "Religious observance level",
                desc: "Whether the candidate is Practicing (5 daily prayers, observes all Islamic obligations), Moderately practicing, or Cultural Muslim. This is an increasingly common field in modern Rishta biodatas as families want to match lifestyle expectations before meeting.",
              },
              {
                label: "Privacy note for female candidates",
                desc: "In many Muslim families, the photograph of the daughter or sister is not included in biodatas that go to unknown recipients. Instead, the photo is shared privately only after initial interest is confirmed. Our tool supports this — the photo field is optional. You can create a complete biodata without a photo and add it later for specific recipients.",
              },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Rishta biodata by community in India</h2>

          <div className="space-y-5 mb-6">
            {[
              {
                region: "UP / Bihar Muslim families",
                points: [
                  "Biradari is prominently stated and checked early in the process",
                  "Urdu transliteration of names and fields is valued",
                  "Marriage bureaus in Lucknow, Aligarh, Azamgarh operate through community networks",
                  "AMU community networks (Aligarh Muslim University) are an important match-finding channel",
                ],
              },
              {
                region: "Hyderabad Muslim families",
                points: [
                  "More formal English-language biodata preferred",
                  "Old City family networks (Charminar area, Barkas, Purani Haveli) are active matrimonial channels",
                  "Hyderabadi families often include dietary preferences and educational background prominently",
                ],
              },
              {
                region: "Kerala Muslim families (Mappila community)",
                points: [
                  "Different community identities — Mappila, Sunni (IUML affiliated), Mujahid",
                  "Often include Mahallu (local mosque community) name in biodata",
                  "Strong emphasis on religious education and piety markers",
                ],
              },
              {
                region: "Mumbai Muslim families",
                points: [
                  "More cosmopolitan — Biradari less strictly enforced in urban Mumbai",
                  "Often bilingual (Urdu + English) biodata",
                  "Bohra community has distinct biodata format with formal invocation and Bohra Jamat details",
                ],
              },
            ].map(({ region, points }) => (
              <div key={region} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-3">{region}</p>
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

          {/* Mid-page CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Create your Muslim Rishta biodata free</p>
            <p className="text-slate-400 text-sm mb-5">
              Opens with Bismillah. Includes Sect and Biradari fields. Optional photo. Download PDF or share private link.
            </p>
            <Link
              href="/#biodata-form-wrapper"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105"
            >
              Create My Rishta Biodata →
            </Link>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">What NOT to include in a Muslim marriage biodata</h2>
          <div className="space-y-3 mb-6">
            {[
              "Horoscope fields (Rashi, Nakshatra, Manglik) — not applicable in Islam",
              "Reference to previous marriages — mention only if directly relevant and families will ask anyway",
              "Anything that could be misconstrued as a dowry discussion",
              "Colour-based specifications in partner preferences — avoid \"fair complexion required\" in writing",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 rounded-xl bg-slate-900/60 border border-slate-800 p-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center justify-center">{i + 1}</span>
                <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Muslim wedding season in India</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Muslim families typically avoid marriages during Muharram (first month of Islamic calendar) and Ramadan.
            Eid festivals are popular times for biodata exchange and family meetings, though weddings are not typically
            held on Eid day itself. Unlike Hindu families, there is no Panchang-based restriction on Muslim weddings —
            the community is active across all months of the year, including during Chaturmas when Hindu weddings
            pause.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The months immediately following Ramadan (Shawwal onwards) and the winter months (October–February) tend
            to see more matrimonial activity in North Indian Muslim communities, aligned partly with the general Indian
            wedding season.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-2">Frequently asked questions</h2>
          <SectionFAQ items={faqs} />

          <div className="mt-14 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-4">Related guides</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/marriage-biodata-format", label: "Complete biodata format guide" },
                { href: "/what-is-marriage-biodata", label: "What is a marriage biodata?" },
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/hindi-biodata-for-marriage", label: "Hindi biodata (Shadi ka biodata)" },
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
