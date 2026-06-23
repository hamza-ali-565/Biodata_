import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

export const metadata = {
  title: "What is a Marriage Biodata? Complete Answer for Indian Families 2026 | Marriage Biodata Hub",
  description:
    "A marriage biodata is a structured one-page document used in Indian arranged marriages. Learn exactly what it contains, how it differs from a CV, and what Indian families actually check first.",
  alternates: {
    canonical: "/what-is-marriage-biodata",
  },
  openGraph: {
    title: "What is a Marriage Biodata? Complete Answer for Indian Families 2026",
    description:
      "A marriage biodata is a structured one-page document used in Indian arranged marriages. Learn what it contains, how it differs from a CV, and what families check first.",
    url: "/what-is-marriage-biodata",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is a Marriage Biodata? Complete Answer 2026",
    description: "A marriage biodata is a structured one-page document used in Indian arranged marriages.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "What is a marriage biodata?",
    a: "A marriage biodata is a structured one-page document used in Indian arranged marriages to introduce a potential bride or groom to another family. It covers personal details, family background, education, career, horoscope information (for Hindu families), and partner preferences. It is shared via WhatsApp, given to relatives, or submitted to matrimonial bureaus — and is typically the first step in the arranged marriage process.",
  },
  {
    q: "Is a marriage biodata the same as a CV or resume?",
    a: "No. A marriage biodata and a resume are completely different documents. A resume is for job applications — it focuses on work experience, skills, and professional achievements. A marriage biodata is for the arranged marriage process — it includes family background, horoscope details, personal values, and partner preferences. The word \"biodata\" is used for both in India, which creates confusion, but the documents serve entirely different purposes.",
  },
  {
    q: "What is a marriage biodata called in different Indian languages?",
    a: "It's called shadi ka biodata (शादी का बायोडाटा) in Hindi, lagnacha biodata (लग्नाचा बायोडाटा) in Marathi, Jathagam biodata in Tamil, Rishta biodata or Nikah biodata in Muslim communities, and biye biodata (বিয়ের বায়োডাটা) in Bengali.",
  },
  {
    q: "Do I need a marriage biodata if I'm using Shaadi.com or BharatMatrimony?",
    a: "Yes. A matrimony site profile and a biodata PDF serve different networks. The site reaches families searching on that platform. The biodata PDF reaches relatives, family friends, community marriage bureaus, pandits, and WhatsApp family networks — channels that many Indian families use in parallel with matrimonial sites.",
  },
  {
    q: "How is a marriage biodata different from a matrimony profile?",
    a: "A matrimony site profile lives online and is searchable by other registered users. A marriage biodata is a PDF document you share manually — via WhatsApp, email, or in person. Biodatas often contain more personal and family detail than a public online profile, because they're shared with specific people you trust, not posted for anyone to find.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What is a Marriage Biodata? Everything Indian Families Need to Know",
    description: "A marriage biodata is a structured one-page document used in Indian arranged marriages.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    author: { "@type": "Organization", name: "Marriage Biodata Hub" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      logo: { "@type": "ImageObject", url: "https://marriagebiodatahub.com/icon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://marriagebiodatahub.com/what-is-marriage-biodata" },
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
      { "@type": "ListItem", position: 2, name: "What is Marriage Biodata", item: "https://marriagebiodatahub.com/what-is-marriage-biodata" },
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

export default function WhatIsMarriageBiodata() {
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
            <span className="text-slate-300">What is Marriage Biodata</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            What is a Marriage Biodata? Everything Indian Families Need to Know
          </h1>

          <AEOBlock>
            A marriage biodata is a structured one-page document used in Indian arranged marriages. It introduces a
            bride or groom to a potential partner's family, covering personal details, family background, education,
            career, horoscope information, and partner preferences. Families exchange biodatas — usually over WhatsApp
            or through relatives — before deciding whether to meet. It is the first step in the arranged marriage
            process, equivalent to a resume but for marriage.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Why is a marriage biodata used in India?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            The arranged marriage system in India involves families — not just individuals — finding a match. When a
            family starts searching, they may receive 20–30 profiles simultaneously, through relatives, community
            networks, pandits, marriage bureaus, and matrimonial sites like Shaadi.com, BharatMatrimony, and
            Jeevansathi. A biodata allows families to do initial filtering quickly — community, education, profession,
            location — before investing time and emotion in a meeting.
          </p>
          <p className="text-slate-300 leading-relaxed">
            According to Jeevansathi's 2026 report analysing 30,000 active users, 77% of Indian matrimonial profiles
            are now self-managed by the candidate themselves — up from roughly 30% a decade ago. Today, many young
            professionals create their own biodata, often with input from parents on family details and
            community-specific fields.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">What does a marriage biodata include?</h2>

          <div className="space-y-5 mb-6">
            {[
              {
                label: "Personal details",
                desc: "Name, date and time of birth, place of birth, height, mother tongue, blood group, religion, caste (where applicable).",
              },
              {
                label: "Horoscope details (for Hindu families)",
                desc: "Gotra, Rashi (Vedic moon sign), Nakshatra (birth star), Nadi, Gan, and Manglik status. For South Indian Hindu families, this section is called Jathagam. Muslim biodatas include Sect and Biradari here instead. Sikh biodatas include Gotra and native village.",
              },
              {
                label: "Family background",
                desc: "Father's name and occupation, mother's name and occupation, siblings (with married/unmarried status), family type (joint or nuclear), native village or ancestral town.",
              },
              {
                label: "Education and career",
                desc: "Highest qualification, institution, current employer, designation, and optionally, salary range.",
              },
              {
                label: "About Me",
                desc: "3–5 sentences describing personality, values, lifestyle, and what the candidate is genuinely looking for in a partner.",
              },
              {
                label: "Partner preferences",
                desc: "Age range, education, community (if specified), location, and any other preferences stated honestly and generously.",
              },
              {
                label: "Contact details",
                desc: "Parent's phone number and WhatsApp, email, city. Always the parent's number — not the candidate's personal mobile.",
              },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-1">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">What is a marriage biodata called in different languages?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Marriage biodata is known by different names across India:
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-800 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60">
                  <th className="text-left text-slate-300 font-semibold py-3 px-4">Language / Community</th>
                  <th className="text-left text-slate-300 font-semibold py-3 px-4">Term used</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  ["Hindi", "शादी का बायोडाटा (Shadi ka biodata) or Vivah biodata"],
                  ["Marathi", "लग्नाचा बायोडाटा (Lagnacha biodata)"],
                  ["Tamil", "Jathagam biodata or Thirumaṇa biodata"],
                  ["Telugu", "Vivaha biodata"],
                  ["Bengali", "বিয়ের বায়োডাটা (Biye biodata)"],
                  ["Punjabi", "Rishta biodata (Sikh and Punjabi Hindu families)"],
                  ["Muslim communities", "Rishta biodata or Nikah biodata"],
                ].map(([lang, term]) => (
                  <tr key={lang} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3 px-4 text-white font-medium">{lang}</td>
                    <td className="py-3 px-4 text-slate-300">{term}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Marriage biodata vs resume vs CV — what's the difference?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong className="text-white">Is a biodata the same as a resume?</strong> No. Despite the same word being
            used in job applications in India, a marriage biodata and a resume are completely different documents.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-800 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60">
                  <th className="text-left text-slate-300 font-semibold py-3 px-4"></th>
                  <th className="text-left text-slate-300 font-semibold py-3 px-4">Marriage Biodata</th>
                  <th className="text-left text-slate-300 font-semibold py-3 px-4">Resume / CV</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  ["Purpose", "Finding a life partner", "Getting a job"],
                  ["Read by", "Partner's family", "Employer / recruiter"],
                  ["Includes", "Family background, horoscope, values", "Work history, skills, achievements"],
                  ["Photo", "Almost always included", "Not standard (India exception)"],
                  ["Length", "1 page always", "1–3 pages"],
                  ["Tone", "Personal, warm", "Professional, formal"],
                  ["Shared via", "WhatsApp, relatives, pandit", "Email, job portals, LinkedIn"],
                ].map(([label, bio, resume]) => (
                  <tr key={label} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3 px-4 text-slate-400 font-medium">{label}</td>
                    <td className="py-3 px-4 text-slate-300">{bio}</td>
                    <td className="py-3 px-4 text-slate-400">{resume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Marriage biodata vs matrimony site profile — do I need both?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Yes, and they serve different networks. A matrimony site profile (Shaadi.com, BharatMatrimony, Jeevansathi)
            reaches families who are actively searching on that platform. A biodata PDF reaches everyone else —
            relatives, family friends, community marriage bureaus, pandits, and WhatsApp networks.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The biodata PDF is often the first document that goes out in a family's network, months before a matrimony
            site profile is created. Many families use both simultaneously. A matrimony site profile is public — visible
            to any registered user. A biodata is private — shared only with specific people you trust.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Who creates the marriage biodata — the candidate or the parents?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            According to Jeevansathi's 2026 report, 77% of Indian matrimonial profiles are now self-managed by the
            candidate. A decade ago, parents handled almost everything. Today, especially in urban India, the candidate
            typically creates their own biodata — often with input from parents on family details and community-specific
            fields.
          </p>
          <p className="text-slate-300 leading-relaxed">
            In Tier 2 and Tier 3 cities, siblings often act as digital facilitators, helping parents who aren't
            comfortable with technology. Both approaches are completely normal. Marriage Biodata Hub is designed to work
            for the 28-year-old engineer creating their own biodata at 10pm, and for the 52-year-old mother creating
            her daughter's biodata for the first time.
          </p>

          {/* CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Ready to create your marriage biodata?</p>
            <p className="text-slate-400 text-sm mb-5">No login. No watermark. Download PDF in 5 minutes.</p>
            <Link
              href="/#biodata-form-wrapper"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105"
            >
              Create My Free Biodata →
            </Link>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-14 mb-2">Frequently asked questions</h2>
          <SectionFAQ items={faqs} />

          <div className="mt-14 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-4">Related guides</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/marriage-biodata-format", label: "Complete biodata format guide" },
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/muslim-biodata-for-marriage", label: "Muslim Rishta biodata" },
                { href: "/about-me-for-marriage-biodata", label: "About Me examples" },
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
