import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "Marriage Biodata in Kolkata — Templates & Guide",
  description:
    "Make your marriage biodata in Kolkata — Bengali Brahmin, Kayastha, Baidya, Marwari, and Muslim family formats explained. Free templates, PDF download.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-kolkata",
  },
  openGraph: {
    title: "Marriage Biodata in Kolkata — Templates & Guide",
    description:
      "Make your marriage biodata in Kolkata — Bengali Brahmin, Kayastha, Baidya, Marwari, and Muslim family formats explained. Free templates, PDF download.",
    url: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-kolkata",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriage Biodata in Kolkata — Templates & Guide",
    description:
      "Make your marriage biodata in Kolkata — Bengali Brahmin, Kayastha, Baidya, Marwari, and Muslim family formats explained.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "How do I make a marriage biodata in Kolkata?",
    a: "Use a free online biodata maker with the fields Bengali families expect: Jati (Brahmin, Kayastha, Baidya), Gotra, Rashi and Nakshatra, and education stated in full (institutions matter in Kolkata — name the school and college). Give genuine space to cultural life — music, books, theatre — because Kolkata families read it as matching information. Download a one-page PDF for WhatsApp and the ghotok network.",
  },
  {
    q: "What is a ghotok and are they still used in Kolkata?",
    a: "A ghotok is the traditional Bengali matchmaker — and yes, the institution survives, now operating largely on WhatsApp. Ghotoks hold portfolios of biodatas across neighbourhood and community networks and provide vetted introductions, which many Kolkata families still prefer over cold platform matches. Your biodata PDF is what the ghotok circulates.",
  },
  {
    q: "Why do Kolkata biodatas emphasise education and culture so much?",
    a: "Bengali bhadralok matrimonial culture treats education and cultivation as matching criteria in their own right — which college the candidate attended and whether the household has a cultural life (Rabindra Sangeet, reading, theatre) are read as indicators of family compatibility. A Kolkata biodata that presents only career and income reads as incomplete to traditional Bengali families.",
  },
  {
    q: "When is Kolkata's main matchmaking season?",
    a: "The weeks after Durga Puja. Bengali weddings cluster in Agrahayan through Falgun (roughly November to March) on panjika-approved dates, and families targeting that season begin sombondho conversations and biodata exchange immediately post-Puja — making October–November the busiest matchmaking weeks of the Kolkata year.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Marriage Biodata in Kolkata — Templates & Community Guide for Bengali Families",
    description:
      "Make your marriage biodata in Kolkata — Bengali Brahmin, Kayastha, Baidya, Marwari, and Muslim family formats explained. Free templates, PDF download.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    author: { "@type": "Organization", name: "Marriage Biodata Hub" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      logo: { "@type": "ImageObject", url: "https://www.marriagebiodatahub.com/icon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/biodata-for-marriage-in-kolkata" },
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
      { "@type": "ListItem", position: 2, name: "Marriage Biodata in Kolkata", item: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-kolkata" },
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

export default function BiodataForMarriageInKolkata() {
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
            <span className="text-slate-300">Marriage Biodata in Kolkata</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Marriage Biodata in Kolkata — Templates & Community Guide for Bengali Families
          </h1>

          <AEOBlock>
            Kolkata's biodata culture is the most literary in India — Bengali families still call the process
            "sombondho" (alliance) and the biodata often reads more like a composed introduction than a form.
            Bengali Hindu families state Jati (Brahmin, Kayastha, Baidya) and Gotra, check Rashi and Nakshatra
            through the family purohit, and — distinctively — give education an almost ceremonial weight: which
            school, which college (Presidency, Jadavpur, St. Xavier's carry lifetime currency), and the family's
            cultural life (Rabindra Sangeet, books, theatre) appear in Kolkata biodatas the way property appears
            elsewhere. The city's large Marwari community (Burrabazar, Alipore) runs a parallel business-community
            format, and Kolkata's Muslim families (Park Circus, Metiabruz) follow the Muslim format with
            Bengali-Urdu bilingual reach.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">How marriage biodatas work in Kolkata</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Only in Kolkata will a biodata's hobbies line be read as carefully as its income line.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Bengali matrimonial culture — the sombondho process — carries the bhadralok inheritance: education,
            cultivation, and family culture are matching criteria in their own right. A biodata that says "B.Sc.
            Physics, Presidency; M.Sc., Jadavpur" places the candidate socially in a way a salary figure cannot,
            and "trained in Rabindra Sangeet for twelve years" is genuine matrimonial capital. Receiving families
            genuinely discuss whether the households are culturally compatible — a match between a poetry-and-adda
            household and a purely commercial one is flagged as a mismatch even when everything else aligns.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The process retains formality: the ghotok (traditional matchmaker) still operates, now on WhatsApp;
            the paka dekha (formal viewing and confirmation) remains a real institution; and the Sunday
            matrimonial pages of Anandabazar Patrika remain, remarkably, a living channel — Kolkata is the last
            Indian metro where newspaper matrimonial columns retain genuine volume, and the biodata PDF is what
            gets exchanged after a column response.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Kolkata's communities — which biodata fields matter here</h2>
          <div className="space-y-4 mb-6">
            {[
              { label: "Bengali Brahmin families", desc: "Jati and Gotra stated (Shandilya, Kashyap, Bharadwaj); Kulin heritage mentioned in traditional families. Rashi and Nakshatra checked through the family purohit before proceeding — the Bengali Hindu horoscope practice follows the fields our Hindu biodata guide explains." },
              { label: "Kayastha families", desc: "Kolkata's largest bhadralok community (Bose, Ghosh, Mitra, Dutta surnames); Jati stated as Kayastha with Gotra; education and family culture carry the defining weight." },
              { label: "Baidya families", desc: "The traditional physician community, small and highly matched-within; Baidya identity stated explicitly and community matching strongly preferred in traditional households." },
              { label: "Marwari and Rajasthani families (Burrabazar, Alipore, Salt Lake)", desc: "A parallel matrimonial world running on the Rajasthani-Marwari format — family business, gotra, and native town in Rajasthan (Bikaner, Jhunjhunu) stated; community associations and Marwari matrimonial networks administer the search. Jain Marwari families follow the Jain format — see our Jain biodata guide." },
              { label: "Muslim families (Park Circus, Kidderpore, Metiabruz)", desc: "The Muslim format applies — see our Muslim biodata guide; Kolkata's Urdu-speaking and Bengali-speaking Muslim communities both operate through family and masjid networks." },
              { label: "East Bengal (Bangal) vs West Bengal (Ghoti) roots", desc: "Stated casually but noticed — \"originally from Dhaka side, settled in Kolkata since Partition\" is a common biodata line and a real identity marker (extending, famously, to which football club the family supports)." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">How biodatas circulate in Kolkata</h2>
          <div className="space-y-4 mb-6">
            {[
              { label: "The ghotok network", desc: "Kolkata's traditional matchmakers survive as a working institution — now WhatsApp-based, holding portfolios of biodatas across para (neighbourhood) and community networks, and still trusted by families who want vetted introductions." },
              { label: "Anandabazar and newspaper columns", desc: "The Sunday matrimonial pages retain real volume in Kolkata alone among metros; a column listing generates WhatsApp responses, and the PDF biodata is the immediate next exchange." },
              { label: "Para and family networks", desc: "The neighbourhood as social unit remains strong — para elders and family friends carry sombondho proposals — alongside the standard community WhatsApp groups and matrimonial platforms every city now uses." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Kolkata wedding season notes</h2>
          <p className="text-slate-300 leading-relaxed">
            Bengali weddings follow the Bengali panchjika's auspicious dates, clustering in Agrahayan
            (November–December), Magh (January–February), Falgun (February–March), and Baisakh (April–May); the
            month of Bhadra is avoided, and no Bengali Hindu wedding happens during the inauspicious periods the
            purohit rules out. Poush is traditionally avoided for weddings in many families despite falling in
            winter. Practical rule: for an Agrahayan–Magh season wedding, sombondho conversations and biodata
            exchange begin by Durga Puja — the post-Puja weeks are Kolkata's busiest matchmaking period of the
            year.
          </p>

          {/* Mid-page CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Ready to create your Kolkata marriage biodata?</p>
            <p className="text-slate-400 text-sm mb-5">
              Formats with Jati, Gotra, Rashi, and space for the things Kolkata families actually read — education
              lineage and cultural life included. One-page PDF, free download, ready for the ghotok and the
              WhatsApp group alike.
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
                { href: "/jain-biodata-for-marriage", label: "Jain marriage biodata" },
                { href: "/muslim-biodata-for-marriage", label: "Muslim Rishta biodata" },
                { href: "/biodata-for-marriage-in-delhi", label: "Biodata in Delhi" },
                { href: "/biodata-for-marriage-in-mumbai", label: "Biodata in Mumbai" },
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
