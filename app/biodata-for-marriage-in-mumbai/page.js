import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "Marriage Biodata in Mumbai — Free Templates & Guide",
  description:
    "Make your marriage biodata in Mumbai — Marathi, Gujarati, North Indian, Muslim, and South Indian family formats. Free templates, PDF download, WhatsApp ready.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-mumbai",
  },
  openGraph: {
    title: "Marriage Biodata in Mumbai — Free Templates & Guide",
    description:
      "Make your marriage biodata in Mumbai — Marathi, Gujarati, North Indian, Muslim, and South Indian family formats. Free templates, PDF download, WhatsApp ready.",
    url: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-mumbai",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriage Biodata in Mumbai — Free Templates & Guide",
    description:
      "Make your marriage biodata in Mumbai — Marathi, Gujarati, North Indian, Muslim, and South Indian family formats.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "How do I make a marriage biodata in Mumbai?",
    a: "Use a free online biodata maker and choose the format for your community — Marathi biodatas include Kul and Kulswamini, Gujarati biodatas emphasise samaj and family business, Muslim biodatas open with Bismillah and include Sect and Biradari. Add your suburb clearly (Mumbai families check location early), and download a one-page PDF for WhatsApp and samaj register submission.",
  },
  {
    q: "Why do Mumbai biodatas mention the suburb and train line?",
    a: "Because commute distance is a real compatibility factor in Mumbai. A match across the Western and Central lines can mean multi-hour journeys for every family function. Families state \"Andheri West\" or \"settled in Thane\" so the receiving family can assess practical geography immediately — it saves both sides time.",
  },
  {
    q: "What is a vadhu-var suchak mandal?",
    a: "A community-run matrimonial register — literally \"bride-groom suggestion organisation\" — operated by Marathi and Gujarati samaj institutions in Mumbai, some for over 75 years. Families submit a biodata to be listed within their community. Most mandals now accept PDF biodatas on WhatsApp and share shortlists digitally, which is why a clean, phone-readable biodata matters.",
  },
  {
    q: "When should Mumbai families start biodata exchange for wedding season?",
    a: "By July–August for a November–February wedding. Mumbai's venue pressure is worse than most cities — banquet halls in Ghatkopar, Dadar, and Thane book out by September — so families that start exchanging biodatas after Ganesh Chaturthi are often late for the same season.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Marriage Biodata in Mumbai — Templates & Community Guide for Mumbai Families",
    description:
      "Make your marriage biodata in Mumbai — Marathi, Gujarati, North Indian, Muslim, and South Indian family formats. Free templates, PDF download, WhatsApp ready.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    author: { "@type": "Organization", name: "Marriage Biodata Hub" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      logo: { "@type": "ImageObject", url: "https://www.marriagebiodatahub.com/icon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/biodata-for-marriage-in-mumbai" },
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
      { "@type": "ListItem", position: 2, name: "Marriage Biodata in Mumbai", item: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-mumbai" },
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

export default function BiodataForMarriageInMumbai() {
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
            <span className="text-slate-300">Marriage Biodata in Mumbai</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Marriage Biodata in Mumbai — Templates & Community Guide for Mumbai Families
          </h1>

          <AEOBlock>
            Mumbai's marriage biodata culture is shaped by one thing no other Indian city has to the same degree:
            density of communities living side by side. A Marathi family in Dadar, a Gujarati family in
            Ghatkopar, a North Indian family in Kandivali, a Bohra family in Bhendi Bazaar, and a Tamil family in
            Matunga each follow their own biodata format — Marathi families include Kul and Kulswamini, Gujarati
            families emphasise family business and samaj identity, Bohra families follow jamaat processes. What
            Mumbai adds on top of community formats is logistics: local-train geography means families state
            their suburb and line (Western, Central, Harbour) the way other cities state neighbourhoods, because
            "Borivali to Dombivli" is a real compatibility question.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">How marriage biodatas work in Mumbai</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            In Mumbai, the first thing a family checks after the photo is not the salary — it's the suburb.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            This sounds like a joke to outsiders. It isn't. A match between a family in Borivali (Western line)
            and a family in Dombivli (Central line) means a 2.5-hour cross-city commute for every family
            function, every festival, every Sunday visit. Mumbai families have learned to treat geography as a
            genuine compatibility field, and the biodata reflects it: the address line often specifies "Andheri
            West" not just "Mumbai," and families mention "settled on the Western line" the way Delhi families
            mention their colony.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Beyond geography, Mumbai's biodata culture follows community lines. The city's samaj institutions are
            unusually strong — the Gujarati samaj halls of Ghatkopar and Mulund, the Marathi mandals of Dadar and
            Girgaon, the CKP and Pathare Prabhu community organisations — and most run their own matrimonial
            registers (vadhu-var suchak mandals) that have operated for generations and now run on WhatsApp and
            simple websites.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Mumbai's communities — which biodata fields matter here</h2>
          <div className="space-y-4 mb-6">
            {[
              { label: "Marathi families (Dadar, Girgaon, Vile Parle, Thane, Dombivli)", desc: "The Marathi biodata format applies — Kul, Kulswamini, Mulchi Gavi; see our full Marathi biodata guide. Vadhu-var suchak mandals (community matrimonial registers) remain the trusted first channel for many families." },
              { label: "Gujarati families (Ghatkopar, Mulund, Kandivali, Borivali, Walkeshwar)", desc: "Samaj identity leads — Kutchi, Kathiawadi, Halari, Patel samaj — and the family business gets the same prominence as the candidate's career. Vegetarian household status is stated plainly. Many Gujarati Jain families follow the Jain format — see our Jain biodata guide." },
              { label: "North Indian families (Kandivali, Malad, Mira Road, Vasai)", desc: "Predominantly UP and Bihar-origin families; the standard North Indian Hindu format with full horoscope section applies. Native place (\"Native: Gorakhpur, settled in Mumbai 25 years\") is stated clearly." },
              { label: "Muslim families (Bhendi Bazaar, Mohammed Ali Road, Kurla, Mumbra)", desc: "The Muslim biodata format applies — see our Muslim biodata guide. Mumbai's Bohra community follows its own jamaat-guided process; Konkani Muslim families from the coastal belt state their native town (Ratnagiri, Chiplun) prominently." },
              { label: "South Indian families (Matunga, Chembur, Sion)", desc: "Tamil and Malayali families maintain their community formats — Jathagam-based matching for Tamil Brahmin families of Matunga — while adding the Mumbai suburb reality to the contact section." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">How biodatas circulate in Mumbai</h2>
          <div className="space-y-4 mb-6">
            {[
              { label: "Samaj registers and vadhu-var suchak mandals", desc: "Mumbai's defining channel. Community matrimonial registers — some over 75 years old — where families list candidates within their samaj. Most now accept a PDF biodata over WhatsApp and circulate shortlists digitally. For Marathi and Gujarati families this remains the highest-trust channel." },
              { label: "Community WhatsApp groups", desc: "Same pattern as everywhere in India, organised by samaj and suburb: \"Kutchi Matrimonial Mumbai,\" \"CKP Vadhu-Var,\" \"Malad Gujarati Samaj Rishta.\" The suburb-level organisation is Mumbai-specific." },
              { label: "Family networks across the diaspora", desc: "Mumbai families are heavily connected to Gulf and overseas relatives; biodatas routinely travel Mumbai — Dubai — London within a family network. If your family has NRI connections, consider the NRI fields covered in our NRI biodata guide." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Mumbai wedding season notes</h2>
          <p className="text-slate-300 leading-relaxed">
            Mumbai weddings cluster November–February like the rest of India, with one local addition: the
            monsoon blackout. June–September weddings are rare not for religious reasons but because Mumbai's
            rains make logistics genuinely hostile. Marathi families follow the muhurta calendar (covered in our
            Marathi guide); Gujarati families favour Devuthi Ekadashi onwards and the days around Vasant Panchami.
            Banquet halls in Ghatkopar, Dadar, and Thane book out by September — which means biodata exchange for
            a winter wedding starts by July–August, slightly earlier than Delhi because venue pressure is worse.
          </p>

          {/* Mid-page CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Ready to create your Mumbai marriage biodata?</p>
            <p className="text-slate-400 text-sm mb-5">
              Marathi, Gujarati, North Indian, Muslim, or South Indian — pick the format your community expects,
              add your suburb, and download a one-page PDF ready for your samaj group. No login. Free.
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
                { href: "/gujarati-biodata-for-marriage", label: "Gujarati marriage biodata" },
                { href: "/jain-biodata-for-marriage", label: "Jain marriage biodata" },
                { href: "/muslim-biodata-for-marriage", label: "Muslim Rishta biodata" },
                { href: "/nri-biodata-for-marriage", label: "NRI marriage biodata" },
                { href: "/biodata-for-marriage-in-pune", label: "Biodata in Pune" },
                { href: "/biodata-for-marriage-in-delhi", label: "Biodata in Delhi" },
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
