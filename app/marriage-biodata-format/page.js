import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "Marriage Biodata Format — Complete Guide 2026 | MBH",
  description:
    "Complete marriage biodata format guide — all fields, community differences, PDF vs Word. For Hindu, Muslim, Marathi & all Indian families.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/marriage-biodata-format",
  },
  openGraph: {
    title: "Marriage Biodata Format — Complete Guide 2026 | MBH",
    description:
      "Complete marriage biodata format guide — all fields, community differences, PDF vs Word. For Hindu, Muslim, Marathi & all Indian families.",
    url: "/marriage-biodata-format",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriage Biodata Format — Complete Guide 2026 | MBH",
    description: "Complete marriage biodata format guide — all fields, community differences, PDF vs Word. For Hindu, Muslim, Marathi & all Indian families.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "What is the correct format for a marriage biodata in India?",
    a: "A standard Indian marriage biodata format is a one-page document covering personal details (name, DOB, height), horoscope information (Gotra, Rashi, Nakshatra, and Manglik status for Hindu families), family background (parents' names and occupations, siblings), education and career, a short About Me section, partner preferences, and parent contact details. The exact format varies by community — Muslim biodatas include Sect and Biradari instead of horoscope fields, South Indian biodatas include Jathagam (horoscope) with star and rasi, and Marathi biodatas include Kul and Kulswamini.",
  },
  {
    q: "Can I download a marriage biodata format as PDF?",
    a: "Yes. Marriage Biodata Hub allows you to download your completed biodata as PDF (recommended for WhatsApp sharing and printing) or JPEG image. PDF is the best format — it opens identically on every phone and preserves the layout exactly.",
  },
  {
    q: "How many pages should a marriage biodata be?",
    a: "One page. Always one page. Families reviewing multiple profiles don't read page 2 — they move to the next biodata. If your information doesn't fit on one A4 page, you need to edit, not add pages. Use a template designed for single-page output, reduce font size slightly, or shorten your About Me section.",
  },
  {
    q: "Is the marriage biodata format different for boys and girls?",
    a: "The structure is the same for both. The emphasis is slightly different: a boy's biodata typically highlights career, designation, and income prominently. A girl's biodata often gives more space to education, family values, and the About Me section. Both should include a clear recent photograph and all community-specific fields.",
  },
  {
    q: "What is the best free marriage biodata format for a Hindu family?",
    a: "The best Hindu marriage biodata format includes a Gotra field, Rashi (moon sign), Nakshatra (birth star), Nadi, Gan, Manglik status, and Kuldevta. It should also include the standard sections — personal details, family background, education, career, About Me, and partner preferences — on a single A4 page. Marriage Biodata Hub has dedicated Hindu marriage biodata templates with all these fields pre-built.",
  },
  {
    q: "How often should I update my marriage biodata format?",
    a: "Update your biodata whenever something significant changes — a job change, a salary increase, completing a degree, or if your photo is more than 6 months old. Also update it at the start of each wedding season (October–November for the November–February peak, and February–March for the April–June peak). An outdated biodata with old information or a 2-year-old photo actively reduces your match rate.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Marriage Biodata Format — Complete Guide for All Indian Communities 2026",
    description:
      "Everything about marriage biodata format — what to include, community-specific fields, PDF vs Word, free download.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    author: { "@type": "Organization", name: "Marriage Biodata Hub" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      logo: { "@type": "ImageObject", url: "https://www.marriagebiodatahub.com/icon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/marriage-biodata-format" },
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
    "@type": "HowTo",
    name: "How to Create Your Marriage Biodata Format in 5 Steps",
    step: [
      { "@type": "HowToStep", name: "Gather information", text: "Collect date of birth with time and place, Gotra, qualification, employer, parents' names and siblings." },
      { "@type": "HowToStep", name: "Choose community format", text: "Select a template that matches your community — Hindu, Muslim, Marathi, Tamil, or modern English." },
      { "@type": "HowToStep", name: "Fill in every section", text: "Complete all sections, including About Me and horoscope fields. Write 'Not available' rather than leaving blank." },
      { "@type": "HowToStep", name: "Add a recent photograph", text: "Plain background, natural light, within 6 months. Portrait orientation, no filters." },
      { "@type": "HowToStep", name: "Download as PDF and share", text: "Download as PDF. Use the WhatsApp share button. Include a brief, respectful message." },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marriagebiodatahub.com" },
      { "@type": "ListItem", position: 2, name: "Marriage Biodata Format", item: "https://www.marriagebiodatahub.com/marriage-biodata-format" },
    ],
  },
];

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

function AEOBlock({ children }) {
  return (
    <div className="rounded-2xl border border-brand-500/30 bg-brand-500/5 p-6 mb-10 text-slate-200 leading-relaxed text-base">
      {children}
    </div>
  );
}

function CTABlock() {
  return (
    <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
      <p className="text-white font-semibold text-lg mb-2">Ready to create your biodata?</p>
      <p className="text-slate-400 text-sm mb-5">No login. No watermark. Download PDF in 5 minutes.</p>
      <SmartLink href="/#biodata-form-wrapper"
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105"
      >
        Create My Free Biodata →
      </SmartLink>
    </div>
  );
}

export default function MarriageBiodataFormat() {
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

          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 mb-8 flex gap-2 items-center">
            <Link href="/" className="hover:text-brand-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Marriage Biodata Format</span>
          </nav>

          {/* Header */}
          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>12 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Marriage Biodata Format — Complete Guide for All Indian Communities (2026)
          </h1>

          <AEOBlock>
            A marriage biodata format is a structured one-page document divided into four sections: personal details,
            family background, education and career, and partner preferences. For Hindu families, a fifth section covers
            horoscope details — Gotra, Rashi, Nakshatra, and Manglik status. Muslim families include Sect and Biradari
            instead of horoscope fields. The format varies slightly by community but the purpose is the same: giving
            another family enough information to decide whether to take the conversation forward.
          </AEOBlock>

          {/* Section 1 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">What is a marriage biodata format?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            The word "biodata" is short for biographical data. In the context of Indian arranged marriages, a marriage
            biodata is a structured one-page document that introduces a bride or groom to the other family. Unlike a job
            resume — which focuses on professional achievements — it covers personal life, family
            background, community identity, and life values.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong className="text-white">Is a marriage biodata the same as a CV or resume?</strong> No. A resume is
            for employers. A biodata is for the other family. A resume highlights skills and work experience; a
            biodata highlights family values, personal character, and life goals. The only overlap is education and
            career — and even those sections carry different weight in each context.
          </p>
          <p className="text-slate-300 leading-relaxed">
            When a family starts searching for a match, they may receive 20–30 biodatas simultaneously. The biodata
            format allows quick initial filtering — community, location, education, horoscope compatibility — before
            investing emotional energy in a meeting.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">What does a complete marriage biodata format include?</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            A complete biodata has four to five core sections depending on community. Here is exactly what goes into each.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Personal details</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Every marriage biodata format starts with personal details. These are the basics — name, date of birth, time
            of birth (important for horoscope matching in Hindu families), place of birth, height, weight, complexion,
            blood group, and mother tongue. For communities where it is culturally significant, religion, caste, and
            sub-caste go here too.
          </p>
          <p className="text-slate-300 leading-relaxed mb-2">
            <strong className="text-white">Should I mention my height and weight?</strong> Height is standard. Weight is
            optional — most families prefer height alone. Include it if your community expects it.
          </p>
          <p className="text-slate-300 leading-relaxed">
            <strong className="text-white">Should I mention complexion?</strong> This field is still common in
            traditional North Indian biodatas. Urban and progressive families often skip it. Include it if your family or
            community expects it.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Horoscope details — for Hindu families</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            This section is unique to Hindu biodatas and is the section that gets checked first by many families. It covers:
          </p>
          <ul className="space-y-4 mb-4">
            {[
              { term: "Rashi (Zodiac / Moon sign)", desc: "Your moon sign according to Vedic astrology — not the Western sun sign. Calculated from your date, time, and place of birth. The 12 rashis: Mesh, Vrishabha, Mithun, Karka, Simha, Kanya, Tula, Vrishchika, Dhanu, Makar, Kumbha, Meen." },
              { term: "Nakshatra (Birth star)", desc: "The lunar mansion at your time of birth. There are 27 nakshatras in Vedic astrology. South Indian families check Nakshatra compatibility as the primary filter, before Rashi." },
              { term: "Gotra", desc: "Your patrilineal clan lineage, traced back to a Vedic sage. Two people from the same Gotra cannot marry in most Hindu traditions. If you don't know your Gotra, ask your father or paternal grandparents." },
              { term: "Nadi", desc: "One of three energy types — Aadi, Madhya, or Antya. Nadi dosha (same Nadi in both partners) is considered inauspicious in some communities. Not checked in all regions." },
              { term: "Gan", desc: "Deva, Manushya, or Rakshasa — a compatibility factor in North Indian Kundali matching." },
              { term: "Manglik status", desc: "Whether Mars (Mangal) is positioned in houses 1, 4, 7, 8, or 12 of your birth chart. Many families prefer Manglik-to-Manglik matches. Modern families increasingly treat this as optional information." },
            ].map(({ term, desc }) => (
              <li key={term} className="rounded-xl bg-slate-900/60 border border-slate-800 p-4">
                <p className="font-semibold text-white mb-1">{term}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </li>
            ))}
          </ul>
          <p className="text-slate-300 leading-relaxed mb-2">
            <strong className="text-white">What if I don't know my Gotra?</strong> Ask your father or paternal grandparents. If genuinely unknown, write "Gotra not known" — it is honest and acceptable. Do not guess.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong className="text-white">Note on South Indian families:</strong> For Tamil, Telugu, Kannada, and Kerala
            Hindu families, the horoscope section is called Jathagam. Star (Natchathiram) is typically checked before
            Rashi. See:{" "}
            <Link href="/hindu-marriage-biodata" className="text-brand-400 hover:text-brand-300 transition-colors">
              Complete Hindu Biodata Guide
            </Link>.
          </p>
          <p className="text-slate-300 leading-relaxed">
            <strong className="text-white">Note on Muslim families:</strong> The horoscope section does not apply.
            Muslim families include Sect and Biradari in place of horoscope fields. See:{" "}
            <Link href="/muslim-biodata-for-marriage" className="text-brand-400 hover:text-brand-300 transition-colors">
              Muslim Rishta Biodata Guide
            </Link>.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Family details</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Family background is what the other family reads most carefully — more carefully than education or career in
            many traditional families. Include: father's full name and occupation, mother's full name and occupation
            (homemaker is completely fine to write), number of brothers and sisters with married/unmarried status, family
            type (joint or nuclear), and native place / ancestral village.
          </p>
          <p className="text-slate-300 leading-relaxed">
            <strong className="text-white">What should I write about my family?</strong> Keep it warm and specific.
            "My father is a retired school principal from Allahabad. My mother manages our home. I have one elder sister
            who is married and settled in Pune. We are a close-knit joint family." Four sentences is enough.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Education and career</h3>
          <p className="text-slate-300 leading-relaxed mb-3">
            Families scan this section quickly. List your highest qualification first (B.Tech, MBBS, MBA — state it
            fully), institution name (if reputable, mention it), current employer and designation, annual income
            (optional), and city of current work location.
          </p>
          <p className="text-slate-300 leading-relaxed">
            <strong className="text-white">Should I include salary?</strong> There is no rule. In North India and many
            traditional families, including a salary range (e.g., "₹12–15 LPA") is expected and helps families quickly
            assess lifestyle compatibility. Urban professionals sometimes omit it. If you include it, use a range rather
            than an exact figure.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">About Me / personality section</h3>
          <p className="text-slate-300 leading-relaxed mb-3">
            This is the section most people leave blank — and the one that makes the biggest difference when two
            biodatas look similar on paper. Write 3–5 sentences describing what you do outside work, a value that
            genuinely matters to you, and what kind of person you are — one or two real qualities, not "simple, honest,
            caring."
          </p>
          <p className="text-slate-300 leading-relaxed">
            <strong className="text-white">What to write in About Me?</strong> Be specific. Instead of "I am a
            family-oriented person," write "My family eats dinner together every night — that's something I want to
            carry forward." Specific details are memorable. Generic phrases are forgotten. See:{" "}
            <Link href="/about-me-for-marriage-biodata" className="text-brand-400 hover:text-brand-300 transition-colors">
              15 About Me examples for different communities
            </Link>.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Partner preferences</h3>
          <p className="text-slate-300 leading-relaxed">
            Write expectations generously — what you are genuinely open to, not as a strict filter. Families read harsh
            expectations as a red flag. Include: age range (keep a 4–5 year window), educational qualification
            preference, profession (if specific), location preference, community/caste preference (if applicable), and
            any lifestyle values that matter.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Contact details</h3>
          <p className="text-slate-300 leading-relaxed">
            Always use parent's contact details — not the candidate's personal mobile number. This is a cultural norm in
            Indian arranged marriages. Include father's or mother's mobile number, WhatsApp (same if applicable), email
            address, and city and state.
          </p>

          {/* Section 3 — Community comparison */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-14 mb-4">Marriage biodata format by community — what changes</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            The core format is the same across communities. What changes are three things: the opening invocation
            (religious greeting), specific community fields, and which sections are most important to that community.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-800 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60">
                  <th className="text-left text-slate-300 font-semibold py-3 px-4">Community</th>
                  <th className="text-left text-slate-300 font-semibold py-3 px-4">Opening</th>
                  <th className="text-left text-slate-300 font-semibold py-3 px-4">Unique Fields</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  ["Hindu", "Shree Ganeshaya Namah", "Gotra, Rashi, Nakshatra, Manglik, Kul"],
                  ["Muslim", "Bismillah ir-Rahman ir-Rahim", "Sect, Biradari, Religiosity level"],
                  ["Sikh", "Ik Onkar Sat Naam", "Gotra/lineage, Gurudwara, Amritdhari status"],
                  ["Christian", "In the name of God", "Church, Denomination, Diocese, Baptism"],
                  ["Jain", "Jai Jinendra", "Digambar/Shvetambara, Gotra, dietary practices"],
                ].map(([comm, opening, fields]) => (
                  <tr key={comm} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3 px-4 text-white font-medium">{comm}</td>
                    <td className="py-3 px-4 text-slate-300">{opening}</td>
                    <td className="py-3 px-4 text-slate-400">{fields}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed">
            See full community guides:{" "}
            <Link href="/hindu-marriage-biodata" className="text-brand-400 hover:text-brand-300 transition-colors">Hindu</Link>
            {" · "}
            <Link href="/muslim-biodata-for-marriage" className="text-brand-400 hover:text-brand-300 transition-colors">Muslim</Link>
            {" · "}
            <Link href="/marathi-biodata-for-marriage" className="text-brand-400 hover:text-brand-300 transition-colors">Marathi</Link>
          </p>

          {/* Section 4 — PDF vs Word */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-14 mb-4">Marriage biodata format: PDF vs Word vs Image</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong className="text-white">Which format is best — PDF or Word?</strong> PDF wins. Here is exactly why:
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            When you send a Word file on WhatsApp, the formatting breaks on the recipient's phone if they don't have
            Microsoft Word installed. On a basic Android phone — which is what most relatives are using — a .docx file
            opens in Google Docs and the layout shifts. Columns collapse, fonts change, the photo moves. Your
            beautifully designed biodata looks like a broken spreadsheet.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            A PDF opens identically on every device — iPhone, Android, laptop, desktop. It preserves every element
            exactly as designed. That is why PDF is the standard format for Indian marriage biodatas. Word format is
            useful if the recipient wants to copy text into a matrimonial website form or needs to print on a specific
            letterhead.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-800 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60">
                  <th className="text-left text-slate-300 font-semibold py-3 px-4"></th>
                  <th className="text-center text-slate-300 font-semibold py-3 px-4">PDF</th>
                  <th className="text-center text-slate-300 font-semibold py-3 px-4">Word (.docx)</th>
                  <th className="text-center text-slate-300 font-semibold py-3 px-4">Image (JPG/PNG)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  ["Opens on all phones", "✓", "✗ (needs app)", "✓"],
                  ["Formatting preserved", "✓", "✗", "✓"],
                  ["WhatsApp sharing", "✓ Best", "✗ Breaks", "✓ Works"],
                  ["Print quality", "✓", "✓", "✗ Can blur"],
                  ["Copy text to matrimony site", "✗", "✓", "✗"],
                ].map(([label, pdf, word, img]) => (
                  <tr key={label} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3 px-4 text-slate-300">{label}</td>
                    <td className="py-3 px-4 text-center text-emerald-400">{pdf}</td>
                    <td className="py-3 px-4 text-center text-slate-400">{word}</td>
                    <td className="py-3 px-4 text-center text-slate-400">{img}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 5 — Rejection reasons */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-14 mb-4">8 things that get biodatas rejected — from real family feedback</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Compiled from Reddit threads (r/delhi, r/RelationshipIndia, r/Arrangedmarriage), Quora answers, and family
            feedback from Indian matrimonial communities.
          </p>
          <div className="space-y-4 mb-6">
            {[
              { n: "1", t: "Missing horoscope fields for Hindu families", d: "When Gotra, Rashi, and Nakshatra are blank, a traditional family assumes the candidate's family doesn't take the process seriously — or is hiding something. Even if you don't believe in horoscope matching, filling in the fields is a gesture of respect to the other family." },
              { n: "2", t: "A photo that's 3 years old", d: "Families notice. If you look noticeably different at the meeting from your biodata photo, it damages trust before the conversation starts. Use a photo from the last 6 months." },
              { n: "3", t: "An About Me section that's blank or generic", d: '"I am a simple and family-oriented person who loves to travel" tells a family nothing. It also tells them you didn\'t try. Write one specific thing about yourself — something real.' },
              { n: "4", t: "Two pages", d: "Families looking through 20–30 profiles don't read page 2. Everything that matters must fit on one A4 page. If it doesn't, your biodata isn't ready." },
              { n: "5", t: "Salary exaggerated or inconsistent", d: "If you mention ₹25 LPA in your biodata but your LinkedIn shows ₹15–18 LPA, families find out before the meeting. The mismatch kills trust before you walk in." },
              { n: "6", t: "Partner preferences that sound like a job description", d: '"Looking for a fair, slim girl, 5\'4\" or above, CA or MBA, from a wealthy family who is willing to move abroad" — each requirement might be reasonable alone, but combined they tell the other family you\'re comparing their daughter to a checklist.' },
              { n: "7", t: "No contact details, or only the candidate's personal number", d: "Giving your own mobile number in a biodata is unusual in arranged marriage culture. Give your parent's contact. It signals that your family is involved — which other families find reassuring." },
              { n: "8", t: "Design that looks downloaded from 2010", d: "Old-looking templates, poor photo placement — families do make judgments about attention to detail based on how a biodata looks. It doesn't have to be fancy. It has to look clean and cared for." },
            ].map(({ n, t, d }) => (
              <div key={n} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5 flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/20 text-rose-400 font-bold text-sm flex items-center justify-center">{n}</span>
                <div>
                  <p className="font-semibold text-white mb-1">{t}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 6 — How to create */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-14 mb-4">How to create your marriage biodata format in 5 steps</h2>
          <div className="space-y-4 mb-6">
            {[
              { n: "1", t: "Gather your information before you start", d: "Don't sit at the form and try to remember everything. Collect: date of birth with time and place, Gotra (ask your father if you don't know), highest qualification with institution, employer name and designation, parents' full names and occupations, siblings' names and marital status. 10 minutes of preparation saves 30 minutes of filling and re-filling." },
              { n: "2", t: "Choose a format that matches your community", d: "A simple English template works for NRI families, urban professionals, and inter-community contexts. A traditional Hindi or Marathi format works better for North Indian and Maharashtrian families. A South Indian template with Jathagam section is standard for Tamil and Telugu families." },
              { n: "3", t: "Fill in every section completely", d: "Don't leave fields blank thinking they're optional. A blank Gotra field in a Hindu biodata is noticed. A blank About Me looks lazy. Where you genuinely don't have information, write \"Not available\" rather than leaving it empty." },
              { n: "4", t: "Add a recent photograph", d: "Plain or light background. Natural light, outdoors or near a window. Recent — within 6 months. No filters. No group photos cropped to show only you. Portrait orientation. The photo is the first thing any family looks at." },
              { n: "5", t: "Download as PDF and share on WhatsApp", d: 'Download your biodata as PDF. Use the one-tap WhatsApp share button. Include a brief, respectful message when sending: "Namaste [name], please find our biodata for your kind consideration." Keep the message warm and brief.' },
            ].map(({ n, t, d }) => (
              <div key={n} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5 flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500/20 text-brand-400 font-bold text-sm flex items-center justify-center">{n}</span>
                <div>
                  <p className="font-semibold text-white mb-1">{t}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>

          <CTABlock />

          {/* Section 7 — 2026 changes */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-14 mb-4">Marriage biodata format 2026 — what's changed this year</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            A few things have genuinely shifted in how Indian families approach the biodata format in 2025–26, based on
            Jeevansathi's report analysing 30,000 active users:
          </p>
          <div className="space-y-3 mb-6">
            {[
              `Caste as a strict filter has dropped from 91% to 54% in the last decade. Many urban families now write "caste no bar" or "open to all communities." This is especially common in metros — only 49% of Mumbai and Delhi users now consider caste mandatory.`,
              `77% of profiles are now self-managed by the candidate, not the parents. The tone of the About Me section has shifted from third-person ("She is a calm and responsible person") to first-person ("I work in marketing and I spend my weekends on long drives").`,
              `The median marriage age has moved from 27 to 29 in urban India. Many urban candidates now explicitly mention "open to candidates up to 33/35" in partner preferences.`,
              `WhatsApp has become the primary distribution channel, displacing printed copies and matrimonial bureaus as the first step. A mobile-optimised PDF that looks clean on a 6-inch screen is now more important than print quality.`,
            ].map((point, i) => (
              <div key={i} className="flex gap-3 text-slate-300 leading-relaxed">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-400 mt-2.5"></span>
                <p>{point}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-300 leading-relaxed">
            None of these changes mean abandoning tradition. They mean the biodata format, while structurally the same,
            is increasingly being filled with more authentic, specific, and self-aware content.
          </p>

          {/* Section 8 — Download */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-14 mb-4">Free marriage biodata format download — PDF and JPEG</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            You can create, preview, and download a completed biodata — not a blank template — using our free tool.
            PDF and JPEG image formats are available. PDF is recommended for WhatsApp sharing and matrimonial bureaus —
            it preserves the layout exactly on every phone. JPEG is useful when a platform or recipient specifically wants
            an image file. No login, no payment, no watermark.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <SmartLink href="/#biodata-form-wrapper"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105"
            >
              Create and Download Free PDF →
            </SmartLink>
            <Link
              href="/templates"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-8 py-3 text-sm font-semibold text-slate-300 hover:border-brand-500/50 hover:text-white transition-all"
            >
              Browse all templates →
            </Link>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-14 mb-2">Frequently asked questions</h2>
          <p className="text-slate-400 text-sm mb-6">Everything families ask about marriage biodata format.</p>
          <SectionFAQ items={faqs} />

          {/* Internal links */}
          <div className="mt-14 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-4">Related guides</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/what-is-marriage-biodata", label: "What is a marriage biodata?" },
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/muslim-biodata-for-marriage", label: "Muslim Rishta biodata" },
                { href: "/about-me-for-marriage-biodata", label: "About Me examples" },
                { href: "/templates", label: "All templates" },
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
