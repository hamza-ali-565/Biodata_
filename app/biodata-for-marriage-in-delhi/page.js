import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "Marriage Biodata in Delhi — Free Templates & Guide",
  description:
    "Make your marriage biodata in Delhi — Punjabi, Brahmin, Baniya, Jat, and Muslim family formats explained. Free templates, PDF download, WhatsApp sharing.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-delhi",
  },
  openGraph: {
    title: "Marriage Biodata in Delhi — Free Templates & Guide",
    description:
      "Make your marriage biodata in Delhi — Punjabi, Brahmin, Baniya, Jat, and Muslim family formats explained. Free templates, PDF download, WhatsApp sharing.",
    url: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-delhi",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriage Biodata in Delhi — Free Templates & Guide",
    description:
      "Make your marriage biodata in Delhi — Punjabi, Brahmin, Baniya, Jat, and Muslim family formats explained.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "How do I make a marriage biodata in Delhi?",
    a: "Use a free online biodata maker — no Delhi family prints at a studio anymore. Choose a template that matches your community (Punjabi, Brahmin, Aggarwal, Jat, Sikh, or Muslim formats differ in which fields they include), fill in personal, family, education, and contact details, and download a one-page PDF. The PDF is what circulates in Delhi's community WhatsApp groups and what marriage bureaus in Karol Bagh and Lajpat Nagar ask for before any meeting.",
  },
  {
    q: "Which biodata format do Delhi families prefer?",
    a: "It depends on community, not on the city. Punjabi families prefer crisp, career-forward biodatas with light horoscope detail. Brahmin and UP-belt families expect the full horoscope section — Gotra, Rashi, Nakshatra, Manglik. Aggarwal and Baniya families give family business details prominent space. Sikh families use the Sikh format with Gurudwara and no horoscope. All communities share one standard: a single A4 page that reads clearly on a phone.",
  },
  {
    q: "Where do Delhi families share marriage biodatas?",
    a: "Three places: community matrimonial WhatsApp groups (the highest-volume channel — every major Delhi community runs dozens), family networks through relatives and colony connections, and marriage bureaus in Karol Bagh, Lajpat Nagar, and Pitampura, which now operate WhatsApp-first. Matrimonial sites like Shaadi.com and Jeevansathi run in parallel, and families typically attach the same biodata PDF there too.",
  },
  {
    q: "When should I start sharing my biodata for a Delhi winter wedding?",
    a: "By August–September. Delhi's wedding season peaks November–February, and families typically need two to four months of biodata exchange, meetings, and Roka planning before a winter ceremony. Biodatas that begin circulating around Raksha Bandhan are timed correctly for the season.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Marriage Biodata in Delhi — Templates & Community Guide for Delhi NCR Families",
    description:
      "Make your marriage biodata in Delhi — Punjabi, Brahmin, Baniya, Jat, and Muslim family formats explained. Free templates, PDF download, WhatsApp sharing.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    author: { "@type": "Organization", name: "Marriage Biodata Hub" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      logo: { "@type": "ImageObject", url: "https://www.marriagebiodatahub.com/icon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/biodata-for-marriage-in-delhi" },
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
      { "@type": "ListItem", position: 2, name: "Marriage Biodata in Delhi", item: "https://www.marriagebiodatahub.com/biodata-for-marriage-in-delhi" },
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

export default function BiodataForMarriageInDelhi() {
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
            <span className="text-slate-300">Marriage Biodata in Delhi</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Marriage Biodata in Delhi — Templates & Community Guide for Delhi NCR Families
          </h1>

          <AEOBlock>
            In Delhi, a marriage biodata travels through three networks at once: the family WhatsApp group, the
            community matrimonial WhatsApp groups (every major Delhi community — Punjabi, Aggarwal, Brahmin, Jat,
            Muslim — runs dozens of them), and the neighbourhood marriage bureaus that still operate from Karol
            Bagh to Lajpat Nagar. The format itself depends on your community: Punjabi Hindu and Sikh families
            keep it crisp and lead with career; Brahmin families from the UP-Delhi belt expect the full horoscope
            section; Aggarwal and Baniya families give the family business the same weight as the candidate's
            job. A Delhi biodata that works is one page, community-correct, and readable on a phone — because
            that's where every Delhi family will open it.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">How marriage biodatas work in Delhi</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Delhi is not one matrimonial market — it's at least five, running side by side.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            A Punjabi family in Rajouri Garden, a Brahmin family in Mayur Vihar with roots in Meerut, an Aggarwal
            family running a Chandni Chowk trading business, a Jat family in Najafgarh with village land in outer
            Delhi, and a Muslim family in Jamia Nagar are all "Delhi families" — and their biodatas look
            meaningfully different from each other.
          </p>
          <p className="text-slate-300 leading-relaxed">
            What unites them is how the biodata moves. Delhi runs on WhatsApp forwards through community groups,
            on rishtey aunties who function as human matrimonial databases across colonies, and on the marriage
            bureaus of Karol Bagh, Lajpat Nagar Central Market, and Pitampura that have quietly digitised — most
            now ask for a PDF biodata on WhatsApp before any in-person meeting. The practical implication: your
            biodata will be judged on a 6-inch phone screen, forwarded at least four times before it reaches the
            family that matters, and compared against a dozen others in the same WhatsApp thread. One page. Clear
            photo. Community-correct fields. That's the Delhi standard.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Delhi's communities — which biodata fields matter here</h2>
          <div className="space-y-4 mb-6">
            {[
              { label: "Punjabi Hindu and Sikh families (Rajouri Garden, Punjabi Bagh, Tilak Nagar, GK, Model Town)", desc: "Career and family standing lead. Sikh families use the Sikh format — Gurudwara, no horoscope; see our full Sikh biodata guide. Punjabi Hindu families often keep horoscope light — Rashi yes, deep Kundali detail no." },
              { label: "Brahmin and UP-belt families (East Delhi, Mayur Vihar, Ghaziabad, Noida)", desc: "Full horoscope section expected — Gotra, Rashi, Nakshatra, Manglik. These fields are explained in our Hindu biodata guide; in Delhi's UP-belt families they are checked before the career section is read." },
              { label: "Aggarwal / Baniya / Marwari families (Chandni Chowk, Model Town, Pitampura, Rohini)", desc: "Family business details carry real weight — what the business is, since when, which market. Gotra is checked (Garg, Goyal, Bansal, Mittal, Singhal are gotras here, not just surnames)." },
              { label: "Jat families (Najafgarh, Outer Delhi, adjoining Haryana)", desc: "Khap and village identity matter; native village is stated prominently. Land holding is often mentioned in family details without embarrassment." },
              { label: "Muslim families (Jamia Nagar, Okhla, Old Delhi, Seelampur)", desc: "The Muslim biodata format applies — Bismillah opening, Sect, Biradari; see our Muslim biodata guide. Old Delhi families often share biodata through masjid and family-elder networks before WhatsApp." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">How biodatas circulate in Delhi</h2>
          <p className="text-slate-300 leading-relaxed mb-4">Three channels, in order of volume:</p>
          <div className="space-y-4 mb-6">
            {[
              { label: "Community WhatsApp groups", desc: "Every Delhi community runs matrimonial groups — \"Aggarwal Rishtey Delhi NCR,\" \"Punjabi Matrimonial Delhi,\" \"Brahmin Rishta Group\" — some with thousands of members. Admission is usually through a relative already in the group. Your biodata PDF is the entry ticket; a biodata that renders badly on a phone gets scrolled past." },
              { label: "Rishtey aunties and family networks", desc: "The colony aunty who \"knows families\" remains Delhi's most effective matchmaker. She now works on WhatsApp — she'll ask for the biodata PDF and forward it with a voice note. Her forward carries an implicit endorsement; make the document worthy of it." },
              { label: "Marriage bureaus", desc: "Karol Bagh, Lajpat Nagar, and Pitampura bureaus charge ₹5,000–50,000 and maintain community-wise registers. Almost all now operate WhatsApp-first. Matrimonial newspaper columns (HT and TOI Sunday matrimonials) still exist but function mostly as lead generation for the same WhatsApp flow." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Delhi wedding season notes</h2>
          <p className="text-slate-300 leading-relaxed">
            Delhi's wedding calendar peaks November–February — the weather window when farmhouse venues in
            Chhatarpur and banquet halls from Rohini to Mayur Vihar run at full capacity. The auspicious-date
            logic (saaya dates) follows the North Indian Hindu calendar covered in our Hindu biodata guide. What
            matters for biodata timing: Delhi families begin serious biodata exchange in August–September for
            winter weddings. If your family is targeting this wedding season, your biodata should be circulating
            by Raksha Bandhan. Sikh and Muslim Delhi families are less date-restricted but follow the same
            winter-season venue reality.
          </p>

          {/* Mid-page CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Ready to create your Delhi marriage biodata?</p>
            <p className="text-slate-400 text-sm mb-5">
              Choose your community — Punjabi, Brahmin, Aggarwal, Jat, Sikh, or Muslim — fill in the fields that
              matter for your family, and download a one-page PDF built for WhatsApp sharing. No login. Free.
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
                { href: "/marriage-biodata-format", label: "Complete biodata format guide" },
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/muslim-biodata-for-marriage", label: "Muslim Rishta biodata" },
                { href: "/sikh-biodata-for-marriage", label: "Sikh marriage biodata" },
                { href: "/biodata-for-marriage-in-mumbai", label: "Biodata in Mumbai" },
                { href: "/biodata-for-marriage-in-kolkata", label: "Biodata in Kolkata" },
                { href: "/blog/how-to-share-marriage-biodata-on-whatsapp", label: "Sharing biodata on WhatsApp" },
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
