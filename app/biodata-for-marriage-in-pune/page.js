import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "Marriage Biodata in Pune — Free Templates & Guide",
  description:
    "Make your marriage biodata in Pune — Marathi Brahmin, CKP, Maratha, and IT-professional formats explained. Free templates, PDF download, WhatsApp ready.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-pune",
  },
  openGraph: {
    title: "Marriage Biodata in Pune — Free Templates & Guide",
    description:
      "Make your marriage biodata in Pune — Marathi Brahmin, CKP, Maratha, and IT-professional formats explained. Free templates, PDF download, WhatsApp ready.",
    url: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-pune",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriage Biodata in Pune — Free Templates & Guide",
    description:
      "Make your marriage biodata in Pune — Marathi Brahmin, CKP, Maratha, and IT-professional formats explained.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "How do I make a marriage biodata in Pune?",
    a: "Use a free online biodata maker and pick a format that suits your family's tradition. Marathi families in Pune typically need the lagnacha biodata format with Kul, Kulswamini, and sub-community; IT professionals and migrant families usually lead with education and career. Download a one-page PDF — that's what circulates in Pune's WhatsApp groups and what you carry to a vadhu-var melava.",
  },
  {
    q: "What is a vadhu-var melava and do I need a printed biodata for it?",
    a: "A melava is a community matchmaking gathering — Brahmin sabhas, CKP mandals, and Maratha organisations in Pune hold them several times a year. Families attend in person and exchange printed biodatas, often collecting dozens in one afternoon. Yes, carry printed copies: one clean A4 page that an elder can scan in fifteen seconds is the standard.",
  },
  {
    q: "Do Pune IT professionals need the traditional Marathi biodata fields?",
    a: "If your family is Marathi and elders are involved in the search — yes. The most common Pune scenario is a Hinjewadi or Kharadi engineer whose parents manage the search through traditional community channels, where Kul, sub-community, and horoscope fields are expected. The biodata should present your career clearly and still carry the fields the elders will check.",
  },
  {
    q: "Which Pune communities hold matrimonial melavas?",
    a: "Deshastha and Konkanastha Brahmin sabhas, CKP mandals, Maratha community organisations, and several samaj institutions across western Maharashtra that use Pune as their hub. Most also run year-round vadhu-var registers and WhatsApp groups, so the same biodata PDF serves both the melava and the digital channel.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Marriage Biodata in Pune — Templates & Community Guide for Pune Families",
    description:
      "Make your marriage biodata in Pune — Marathi Brahmin, CKP, Maratha, and IT-professional formats explained. Free templates, PDF download, WhatsApp ready.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    author: { "@type": "Organization", name: "Marriage Biodata Hub" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      logo: { "@type": "ImageObject", url: "https://www.marriagebiodatahub.com/icon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/biodata-for-marriage-in-pune" },
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
      { "@type": "ListItem", position: 2, name: "Marriage Biodata in Pune", item: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-pune" },
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

export default function BiodataForMarriageInPune() {
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
            <span className="text-slate-300">Marriage Biodata in Pune</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Marriage Biodata in Pune — Templates & Community Guide for Pune Families
          </h1>

          <AEOBlock>
            Pune runs two matrimonial cultures in parallel. Old Pune — Sadashiv Peth, Kothrud, Deccan — is the
            heart of Marathi biodata tradition: Deshastha and Konkanastha Brahmin families, CKP families, and
            Maratha families for whom the lagnacha biodata with Kul and Kulswamini is a formal document reviewed
            by elders. New Pune — Hinjewadi, Kharadi, Baner, Wakad — is an IT city of migrants from every state,
            where the biodata is a crisp professional profile and the first question is "which company, which
            campus." Most Pune candidates need a biodata that satisfies both: correct Marathi fields for the
            elders in Kothrud, clean career presentation for the family assessing a Hinjewadi engineer.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">How marriage biodatas work in Pune</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Ask a Pune family where they live and the answer places them in one of the city's two matrimonial
            worlds.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            "Sadashiv Peth" or "Kothrud" says: rooted Marathi family, likely generations in Pune, connected to
            community institutions, expecting the traditional lagnacha biodata format with all the fields our
            Marathi biodata guide covers — Kul, Kulswamini, Mulchi Gavi — reviewed carefully by grandparents
            before anyone replies.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            "Baner" or "Kharadi" or "Hinjewadi society" says: professional family, possibly migrant, evaluating
            matches on education, company, and compatibility of work lives. Two IT professionals matching in Pune
            will discuss whether their campuses are on the same side of the city — Hinjewadi (west) to Kharadi
            (east) is Pune's version of Mumbai's cross-line problem.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The two worlds overlap constantly: the most common Pune biodata scenario is a software engineer in
            Wakad whose parents in Kothrud (or Nashik, or Solapur) are managing the search through traditional
            channels. The biodata has to work in both rooms.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Pune's communities — which biodata fields matter here</h2>
          <div className="space-y-4 mb-6">
            {[
              { label: "Deshastha and Konkanastha (Chitpavan) Brahmin families", desc: "The full Marathi Brahmin format — sub-community stated precisely (Deshastha Rigvedi vs Yajurvedi, Konkanastha), Kul and Gotra checked, horoscope matching taken seriously. These fields are explained in our Marathi and Hindu guides; in old Pune they are read before anything else." },
              { label: "CKP families (Chandraseniya Kayastha Prabhu)", desc: "A distinct, tightly networked community with its own matrimonial circles and CKP-specific vadhu-var melavas (matchmaking gatherings). CKP identity is stated explicitly in the biodata." },
              { label: "Maratha families", desc: "The 96-Kuli Maratha identity is stated where the family holds it; native village and family land near Pune district (Baramati, Shirur, Junnar) are mentioned with weight." },
              { label: "IT and migrant professionals (Hinjewadi, Kharadi, Magarpatta, Baner)", desc: "Every community in India is represented. The biodata leads with education and company; community fields follow per the family's tradition. Work location within Pune is worth stating — it's a genuine logistics question." },
              { label: "Other communities", desc: "Pune's Gujarati and Marwari trading families (Camp, Raviwar Peth) follow business-forward formats; Muslim families in Camp and Kondhwa follow the Muslim format covered in our Muslim biodata guide." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">How biodatas circulate in Pune</h2>
          <div className="space-y-4 mb-6">
            {[
              { label: "Vadhu-var melavas", desc: "Pune's signature channel: community matchmaking gatherings where families attend in person with printed biodatas. Brahmin sabhas, CKP mandals, and Maratha organisations run melavas several times a year, heaviest before wedding season. The printed one-page biodata is the currency of a melava — families collect dozens in an afternoon. Yours must be scannable in fifteen seconds." },
              { label: "Community registers and WhatsApp groups", desc: "The same organisations run year-round registers and WhatsApp groups organised by sub-community — \"Deshastha Vadhu-Var Pune,\" \"CKP Rishta.\" PDF-first, as everywhere." },
              { label: "The Nashik–Solapur–Kolhapur corridor", desc: "Pune is the matrimonial hub for all of western Maharashtra; families across the region route their search through Pune relatives and institutions. Biodatas travel Pune — Nashik — Solapur through family WhatsApp constantly." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Pune wedding season notes</h2>
          <p className="text-slate-300 leading-relaxed">
            Pune follows the Marathi muhurta calendar covered in our Marathi biodata guide — Margashirsha through
            Vaishakh carry the main muhurtas, with the monsoon and Chaturmas quiet period before. Melava season is
            the practical marker: the big community melavas cluster in the months before wedding season, and
            families who want to attend with a ready biodata should have it prepared by early autumn. Karve Nagar,
            Kothrud, and Sinhagad Road mangal karyalayas (wedding halls) book on muhurta dates months ahead.
          </p>

          {/* Mid-page CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Ready to create your Pune marriage biodata?</p>
            <p className="text-slate-400 text-sm mb-5">
              Traditional Marathi format for the melava, clean professional layout for the IT-city side of your
              search — one document that works in both rooms. One-page PDF, free download.
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
                { href: "/marathi-biodata-for-marriage", label: "Marathi Lagnacha biodata" },
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/biodata-for-marriage-in-mumbai", label: "Biodata in Mumbai" },
                { href: "/biodata-for-marriage-in-chennai", label: "Biodata in Chennai" },
                { href: "/marriage-biodata-format", label: "Complete biodata format guide" },
                { href: "/blog/how-to-make-marriage-biodata", label: "How to make a marriage biodata" },
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
