import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "Marriage Biodata in Kochi — Kerala Format Guide",
  description:
    "Make your marriage biodata in Kochi — Nair, Ezhava, Mappila Muslim, and Christian family formats explained. Free templates for all Kerala communities.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-kochi",
  },
  openGraph: {
    title: "Marriage Biodata in Kochi — Kerala Format Guide",
    description:
      "Make your marriage biodata in Kochi — Nair, Ezhava, Mappila Muslim, and Christian family formats explained. Free templates for all Kerala communities.",
    url: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-kochi",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriage Biodata in Kochi — Kerala Format Guide",
    description:
      "Make your marriage biodata in Kochi — Nair, Ezhava, Mappila Muslim, and Christian family formats explained.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "How do I make a marriage biodata in Kochi?",
    a: "Use a free online biodata maker and choose the format for your community — Nair and Ezhava Hindu families use Jathakam-based horoscope formats with Nakshatram and Rasi fields, Mappila Muslim families use the Bismillah-opening format with Sect and family lineage fields, and Kerala's Christian families (Syro-Malabar, Jacobite, Marthomite, CSI) use denomination-specific formats — see our complete Christian biodata guide for the full detail. Download a one-page PDF for WhatsApp sharing, which is the standard channel across all Kerala communities.",
  },
  {
    q: "What is Mappila Muslim biodata culture like in Kerala?",
    a: "Mappila (or Moplah) Muslim families in Kerala have a distinct community identity separate from North Indian Muslim matrimonial culture — the community traces some of the earliest Islamic presence in India, connected to historic Arab trade routes through the Malabar coast. Biodatas follow the standard Muslim format (Bismillah opening, Sect, family background) but the specific family lineage and native area within Kerala (Malabar, Kozhikode, Malappuram) often carry particular social weight. See our complete Muslim biodata guide for the Sect and family lineage fields.",
  },
  {
    q: "What Hindu communities are prominent in Kochi and Kerala matrimonial culture?",
    a: "The major Kerala Hindu communities include Nair (a historically prominent matrilineal community, though modern biodatas follow standard patrilineal family-detail conventions), Ezhava (Kerala's largest Hindu community, with strong social reform history tied to Sree Narayana Guru), and Namboothiri (the traditional Kerala Brahmin community, smaller in number with distinct customs). Each maintains its own community associations and matrimonial registers, with Jathakam (horoscope) exchange playing a significant role across all three, similar in structure to Tamil matrimonial practice.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Marriage Biodata in Kochi — Templates & Community Guide for Kerala Families",
    description:
      "A guide to marriage biodata culture in Kochi and across Kerala — covering Nair, Ezhava, Namboothiri Hindu families, Mappila Muslim families, and Kerala's distinctive Christian denominations, with the state's specific matrimonial timing and distribution channels.",
    datePublished: "2026-08-10",
    dateModified: "2026-08-10",
    author: { "@type": "Organization", name: "Marriage Biodata Hub" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      logo: { "@type": "ImageObject", url: "https://www.marriagebiodatahub.com/icon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/biodata-for-marriage-in-kochi" },
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
      { "@type": "ListItem", position: 2, name: "Marriage Biodata in Kochi", item: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-kochi" },
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

export default function BiodataForMarriageInKochi() {
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
            <span className="text-slate-300">Marriage Biodata in Kochi</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: August 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Marriage Biodata in Kochi — Templates & Community Guide for Kerala Families
          </h1>

          <AEOBlock>
            Kochi and Kerala's matrimonial culture spans three major religious communities, each with genuinely
            distinct biodata conventions: Hindu families (Nair, Ezhava, Namboothiri) using Jathakam-based horoscope
            formats with Nakshatram and Rasi; Mappila Muslim families with roots tracing to some of India's
            earliest Islamic settlement via Malabar coast trade routes; and Kerala's Christian community,
            denominationally more diverse than almost anywhere else in India (Syro-Malabar Catholic, Jacobite
            Syrian, Marthomite, CSI) — covered in full depth in our dedicated{" "}
            <Link href="/christian-biodata-for-marriage" className="text-brand-300 underline hover:text-brand-200">
              Christian biodata guide
            </Link>. What unites all three in Kochi specifically: WhatsApp-first sharing, strong community
            association registers, and horoscope or family-lineage detail checked carefully before any meeting is
            arranged.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Kochi's Hindu communities — Nair, Ezhava, Namboothiri</h2>
          <div className="space-y-4 mb-6">
            {[
              { label: "Nair", desc: "Historically one of Kerala's most prominent communities, with a matrilineal family tradition (Marumakkathayam) that shaped Kerala's social structure for centuries. Modern Nair biodatas follow the standard patrilineal family-detail format used elsewhere in India, though family tharavad (ancestral home) identity retains social significance in introductions. Jathakam exchange and Nakshatram matching are taken seriously in traditional Nair families, following the same porutham logic used in Tamil biodata practice, adapted to Kerala's specific Nakshatram naming." },
              { label: "Ezhava", desc: "Kerala's largest Hindu community by population, with a strong social reform history connected to Sree Narayana Guru's teachings on equality and education. Ezhava biodatas follow standard Hindu format conventions; community identity is stated clearly, and many families — reflecting the community's reformist history — place particular emphasis on education and career achievement in the biodata's framing." },
              { label: "Namboothiri", desc: "The traditional Kerala Brahmin community, comparatively small in number, with distinct customs separate from Tamil or North Indian Brahmin traditions. Namboothiri biodatas place strong emphasis on Gotra and precise horoscope matching, with community networks that remain tightly connected given the community's smaller size." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Mappila Muslim biodata culture</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Kerala's Muslim community, particularly the Mappila (Moplah) community of the Malabar coast, represents
            one of the oldest Muslim populations in India — connected to historic Arab trading relationships that
            predate much of North Indian Islamic history by centuries. Kochi and the wider Malabar region (Kozhikode,
            Malappuram, Kannur) maintain strong, distinct Mappila matrimonial networks.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Biodatas follow the standard Muslim format — Bismillah opening, Sect (overwhelmingly Sunni Shafi'i in
            Kerala, distinct from the Hanafi tradition more common in North India) — with family lineage and native
            area within Kerala often carrying real social weight in how a match is assessed. See our complete{" "}
            <Link href="/muslim-biodata-for-marriage" className="text-brand-300 underline hover:text-brand-200">
              Muslim biodata guide
            </Link>{" "}
            for Sect field detail.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Kerala's Christian denominational diversity</h2>
          <p className="text-slate-300 leading-relaxed">
            Kerala is home to the most denominationally complex Christian landscape in India, with communities
            tracing continuous presence back nearly 2,000 years to the tradition of St. Thomas the Apostle. This
            complexity — Syro-Malabar Catholic, Syro-Malankara Catholic, Jacobite Syrian (Malankara Orthodox),
            Marthomite, CSI, and Pentecostal communities each maintaining distinct identities — is covered in full
            depth in our dedicated{" "}
            <Link href="/christian-biodata-for-marriage" className="text-brand-300 underline hover:text-brand-200">
              Christian biodata guide
            </Link>, including the Tharavad naming convention specific to Kerala Christian families.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">How biodatas circulate in Kochi</h2>
          <div className="space-y-4 mb-6">
            {[
              { label: "Community associations and church networks", desc: "Nair Service Society, Sree Narayana Dharma Paripalana (SNDP) Yogam for Ezhava families, parish-level networks for Christian families, and mosque-community connections for Mappila families all maintain active matrimonial functions alongside digital circulation." },
              { label: "WhatsApp groups, organised by community and locality", desc: "The dominant modern channel, mirroring the pattern across every other Indian city — community-specific groups circulate biodata PDFs actively, particularly ahead of the traditional wedding season." },
              { label: "Kerala's strong NRI connection", desc: "A significant share of Kochi and Kerala families have close Gulf (UAE, Saudi Arabia, Qatar) or Western diaspora connections. Biodatas for Kerala candidates frequently include NRI-relevant fields even when the candidate is currently based in Kerala, since Gulf-based matches are extremely common across all three religious communities." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-300 leading-relaxed mb-6">
            See our NRI guide for the specific fields —{" "}
            <Link href="/nri-biodata-for-marriage" className="text-brand-300 underline hover:text-brand-200">
              NRI marriage biodata
            </Link>.
          </p>

          {/* Mid-page CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Ready to create your Kochi marriage biodata?</p>
            <p className="text-slate-400 text-sm mb-5">
              Nair, Ezhava, Namboothiri, Mappila Muslim, or Kerala Christian format — free templates built for every
              Kochi community. One-page PDF, free.
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
                { href: "/christian-biodata-for-marriage", label: "Christian marriage biodata" },
                { href: "/muslim-biodata-for-marriage", label: "Muslim marriage biodata" },
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/nri-biodata-for-marriage", label: "NRI marriage biodata" },
                { href: "/biodata-for-marriage-in-chennai", label: "Biodata in Chennai" },
                { href: "/biodata-for-marriage-in-bengaluru", label: "Biodata in Bengaluru" },
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
