import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "Marriage Biodata in Bengaluru — Templates & Guide",
  description:
    "Make your marriage biodata in Bengaluru — IT-professional, Kannadiga, Iyer-Iyengar, Vokkaliga, and Lingayat formats explained. Free templates, PDF download.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-bengaluru",
  },
  openGraph: {
    title: "Marriage Biodata in Bengaluru — Templates & Guide",
    description:
      "Make your marriage biodata in Bengaluru — IT-professional, Kannadiga, Iyer-Iyengar, Vokkaliga, and Lingayat formats explained. Free templates, PDF download.",
    url: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-bengaluru",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriage Biodata in Bengaluru — Templates & Guide",
    description:
      "Make your marriage biodata in Bengaluru — IT-professional, Kannadiga, Iyer-Iyengar, Vokkaliga, and Lingayat formats explained.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "How do I make a marriage biodata in Bengaluru?",
    a: "Use a free online biodata maker and build for the two-track Bengaluru reality: present your company, role, and work location precisely (it's the first thing assessed), and include the horoscope or community fields your home community expects — Jathagam details for Tamil families, Nakshatram for Telugu, Gotra for North Indian. Download a one-page PDF for WhatsApp; it will circulate in your home town as much as in Bengaluru.",
  },
  {
    q: "Should a Bengaluru biodata mention work location within the city?",
    a: "Yes. Whitefield to Electronic City is a 30-kilometre traffic question, and families of matched professionals genuinely plan around it. Stating \"working in Manyata Tech Park, living in Hebbal\" lets the other family assess the practical geography of a match immediately — the same way Mumbai families state their train line.",
  },
  {
    q: "My parents are in another city — whose format should my biodata follow?",
    a: "Your home community's, presented cleanly. The most common Bengaluru search runs through the parents' networks in the home town, where community-expected fields (sub-sect, star, Gotra) will be checked by elders. Keep the Bengaluru career details precise and complete, and include the community fields your family's channel requires — the biodata has to work in both rooms.",
  },
  {
    q: "Do tech-company and alumni networks really work for matrimony in Bengaluru?",
    a: "Yes — IIT/NIT/BITS alumni WhatsApp groups and company community groups carry steady matrimonial traffic, usually as informal referrals between families of colleagues and batchmates. The same one-page biodata PDF used in family channels is what gets forwarded; nothing different is needed for this channel.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Marriage Biodata in Bengaluru — Templates & Community Guide for Bengaluru Families",
    description:
      "Make your marriage biodata in Bengaluru — IT-professional, Kannadiga, Iyer-Iyengar, Vokkaliga, and Lingayat formats explained. Free templates, PDF download.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    author: { "@type": "Organization", name: "Marriage Biodata Hub" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      logo: { "@type": "ImageObject", url: "https://www.marriagebiodatahub.com/icon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/biodata-for-marriage-in-bengaluru" },
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
      { "@type": "ListItem", position: 2, name: "Marriage Biodata in Bengaluru", item: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-bengaluru" },
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

export default function BiodataForMarriageInBengaluru() {
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
            <span className="text-slate-300">Marriage Biodata in Bengaluru</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Marriage Biodata in Bengaluru — Templates & Community Guide for Bengaluru Families
          </h1>

          <AEOBlock>
            Bengaluru is India's largest "everyone is from somewhere else" matrimonial market. The typical
            Bengaluru biodata belongs to a software professional whose parents live in another city — Vijayawada,
            Coimbatore, Kolkata, Patna — and whose search runs on two tracks simultaneously: the parents working
            community channels back home, and the candidate managing a profile from an HSR Layout flat. Local
            Kannadiga communities — Vokkaliga, Lingayat, Kannada Brahmin — maintain their own strong formats and
            matrimonial networks alongside. What every Bengaluru biodata shares: the company and role carry
            unusual weight ("Which company?" is Bengaluru's first question), and work location within the city
            (Whitefield vs Electronic City) is stated because the commute between them is a genuine life-planning
            question.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">How marriage biodatas work in Bengaluru</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            The most common Bengaluru biodata scenario in one sentence: a 28-year-old engineer in Koramangala
            whose mother in Coimbatore is running the actual search.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            This split-city structure defines Bengaluru matrimonial life. The candidate lives here; the community,
            the family network, and often the final decision live in the home town. The biodata therefore does
            double duty — it must present the Bengaluru professional life precisely (company, role, work
            location, own flat or rented, onsite history) for the practical assessment, and carry the home
            community's expected fields (Jathagam details for a Tamil family, Nakshatram for a Telugu family,
            Gotra for a North Indian family) for the channel the parents are working.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Within the city, the tech-world texture is real: "Whitefield or Electronic City?" is asked early
            because the 30-kilometre traffic gap between them shapes where a couple can live. Families of two
            matched techies routinely discuss which side of Silk Board junction the couple will settle on —
            Bengaluru's version of Mumbai's train-line question.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Bengaluru's communities — which biodata fields matter here</h2>
          <div className="space-y-4 mb-6">
            {[
              { label: "Kannada Brahmin families (Basavanagudi, Malleswaram, Jayanagar)", desc: "Madhwa, Smartha, and Iyengar-connected communities with sub-sect stated; horoscope matching follows the South Indian star-and-rasi pattern. Old Bengaluru's Brahmin institutions run established matrimonial registers." },
              { label: "Vokkaliga families", desc: "The dominant landowning community of southern Karnataka; native place in the old Mysuru region (Mandya, Ramanagara, Hassan) stated with weight, and community matching preferred. Community associations run active matrimonial services." },
              { label: "Lingayat families", desc: "Northern Karnataka's major community (Hubballi, Belagavi, Kalaburagi roots common in Bengaluru); the matha (religious institution) connection and sub-sect are part of family identity in traditional households." },
              { label: "Tamil and Telugu Bengaluru", desc: "Decades-old Tamil neighbourhoods (around Ulsoor) and the huge Telugu tech population each run their home-community formats — Jathagam-led for Tamil families, Nakshatram and community identity for Telugu families — administered largely from the home towns." },
              { label: "North Indian and Bengali tech migrants (Whitefield, Marathahalli, HSR, Bellandur)", desc: "Standard North Indian Hindu format with horoscope section, or the Bengali format for Kolkata-origin families; the search typically runs through the home city's networks with the Bengaluru career as the headline asset." },
              { label: "Muslim and Christian Bengaluru", desc: "Shivajinagar and Frazer Town's established Muslim community follows the Muslim format; Bengaluru's significant Christian community (including Mangalorean Catholic families) follows the Christian format — see both guides." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">How biodatas circulate in Bengaluru</h2>
          <div className="space-y-4 mb-6">
            {[
              { label: "The home-town channel", desc: "Bengaluru's defining pattern: the biodata is made here but circulates there — through the parents' community networks in Coimbatore, Vijayawada, or Dharwad. This is why the biodata must satisfy home-community expectations even for a thoroughly Bengaluru life." },
              { label: "Local community institutions", desc: "Old Bengaluru's Brahmin sabhas, Vokkaliga and Lingayat associations, and church and masjid networks run registers and meets for rooted local families." },
              { label: "Tech-world networks", desc: "Alumni groups (IIT/NIT/BITS WhatsApp groups carry a steady matrimonial traffic), company-community groups, and colleague referrals — an informal but real channel unique in scale to Bengaluru. The same one-page PDF serves all of it." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Bengaluru wedding season notes</h2>
          <p className="text-slate-300 leading-relaxed">
            Bengaluru families follow their home community's calendar — Tamil families target Thai, Telugu
            families avoid Ashada, Kannadiga families follow the local panchanga's muhurta dates, North Indian
            families follow the saaya calendar. The city-level practical constraint is venue and travel
            logistics: choultries and convention halls in Bengaluru book heavily November–February and
            April–May, and the two-city structure of most matches (couple here, families elsewhere) means wedding
            planning needs longer lead time — biodata exchange six months before the target season is the safe
            Bengaluru rule.
          </p>

          {/* Mid-page CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Ready to create your Bengaluru marriage biodata?</p>
            <p className="text-slate-400 text-sm mb-5">
              Built for the two-track Bengaluru search — your career presented clearly for the practical read,
              your home community's fields (Jathagam, Nakshatram, Gotra, or none) included for the family channel.
              One-page PDF, free.
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
                { href: "/nri-biodata-for-marriage", label: "NRI marriage biodata" },
                { href: "/biodata-for-marriage-in-chennai", label: "Biodata in Chennai" },
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
