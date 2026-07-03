import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "About Me for Marriage Biodata — 15 Real Examples",
  description:
    "15 real About Me examples for Hindu, Muslim, Sikh, Marathi, NRI, doctor, IT professional, and second-marriage biodatas. Copy, adapt, and use immediately.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/about-me-for-marriage-biodata",
  },
  openGraph: {
    title: "About Me for Marriage Biodata — 15 Real Examples",
    description:
      "15 real About Me examples for Hindu, Muslim, Sikh, Marathi, NRI, doctor, IT professional, and second-marriage biodatas. Copy, adapt, and use.",
    url: "https://www.marriagebiodatahub.com/about-me-for-marriage-biodata",
    type: "article",
    locale: "en_IN",
    siteName: "Marriage Biodata Hub",
    images: [
      {
        url: "https://www.marriagebiodatahub.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "About Me for Marriage Biodata — 15 Examples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me for Marriage Biodata — 15 Real Examples",
    description:
      "15 real About Me examples — Hindu, Muslim, Sikh, Marathi, NRI, doctor, IT professional, second marriage. Copy and adapt.",
    images: ["https://www.marriagebiodatahub.com/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "What should I write in About Me section of marriage biodata?",
    a: "Write 3–5 sentences that include: one real quality shown through an example (not just named as an adjective), one genuine hobby or interest that is specific to you, a fact about your relationship with your family, and one honest sentence about what you are looking for in a partner. Avoid: \"I am simple, family-oriented, and fun-loving\" — this phrase appears in over 70% of Indian marriage biodatas and tells the receiving family nothing about you specifically. Replace every adjective with a fact. \"I am patient\" becomes \"I coached my younger sister through her board exams for seven months.\" One specific detail is worth more than five generic adjectives.",
  },
  {
    q: "How long should the About Me section be in a marriage biodata?",
    a: "3 to 5 sentences — no more than 80 to 100 words. Families reviewing 15 to 20 biodatas in a week spend about 90 seconds on each. A short, specific, memorable About Me works better than a long paragraph. If you have written more than 5 sentences, cut it down — keep only the most distinctive details. The About Me must fit on a single A4 page alongside all other sections.",
  },
  {
    q: "Can I write About Me in Hindi in a marriage biodata?",
    a: "Yes. If your biodata is in Hindi or is being shared with Hindi-speaking families in North India, writing the About Me section in Hindi is completely appropriate and often more genuine than a translated version. Write it the way you actually speak — not in formal literary Hindi that sounds stiff. \"Main apne ghar mein khana pakane mein bahut anand leta hun aur meri maa bolti hain ki meri dal makhani sabse achi banti hai\" is more memorable than any English equivalent.",
  },
  {
    q: "Should About Me be written in first person or third person?",
    a: "If you are writing your own biodata — first person. It reads as warmer and more genuine. If your parents are writing the biodata on your behalf — third person is natural and accepted. Be consistent throughout the section; mixing first and third person in the same About Me reads as careless. Many modern candidates now write in first person even for biodatas managed by parents — one paragraph in your own voice, written by you, is all it takes.",
  },
  {
    q: "What is the most common mistake in the About Me section of a marriage biodata?",
    a: "Writing \"I am a simple, family-oriented person who enjoys music, travel, and spending time with my loved ones.\" This phrase — or a near-identical version of it — appears in the majority of Indian marriage biodatas. It is so common that families reading it retain nothing. The mistake is describing yourself with adjectives instead of facts. Every adjective in an About Me can be replaced with something specific: \"family-oriented\" becomes \"we have Sunday lunch together at my parents' house every week without fail.\" Replace one adjective with one fact and your About Me immediately stands out.",
  },
];

const examples = [
  {
    tag: "Male · Software Engineer · Bengaluru · Hindu · Modern",
    text: "I'm a product engineer at a tech company in Bengaluru — I build things used by a few million people and that part of the job genuinely excites me. Outside work: I run three mornings a week in Cubbon Park, I'm learning to cook (dal fry is now acceptable, biryani is aspirational), and I call home to Hyderabad every Sunday evening without fail. We're a close nuclear family and it's important to me that this continues after marriage. I'm looking for someone who has her own interests and ambitions and values that same kind of quiet family life alongside whatever else she's building.",
  },
  {
    tag: "Female · Doctor · Delhi · Hindu Brahmin · Traditional",
    text: "I am completing my MD in Paediatrics at AIIMS New Delhi. Medicine is in my family — my father is a physician and my grandfather was a general practitioner in Rohtak for forty years — so it isn't just a career; it's the air I grew up in. Outside the hospital, I cook on Sundays when I can, and I have been learning Bharatanatyam since I was seven — though my guru would say I've been learning since I was seven and still have work to do. We are a warm, closely knit Brahmin family with roots in Karnal. I am looking for someone educated, grounded, and genuinely close to his own family.",
  },
  {
    tag: "Male · Bank Officer (SBI) · Lucknow · UP Brahmin · Traditional",
    text: "I work as a Probationary Officer at SBI's Lucknow branch. I come from a middle-class Brahmin family in Kanpur — my father is a retired school principal, and our home has always been a place where education and respect for elders were not negotiable values. I enjoy Urdu poetry (I can recite Ghalib for longer than anyone at the office appreciates), chess on weekends, and reading history. I believe a good family is built on patience and honesty rather than on any particular salary figure. I am looking for a well-educated, grounded partner from a similar background — caste: Brahmin preferred, though open to discussion.",
  },
  {
    tag: "Female · CA · Pune · Marathi Brahmin · Balanced",
    text: "I'm a Chartered Accountant in Pune, currently working with a mid-sized firm in Kothrud. My family is Deshastha Brahmin from Nashik and we visit every month — Sunday afternoons in Nashik with everyone at the table are the part of the month I look forward to most. Outside accounting deadlines, I enjoy Marathi theatre (I've been attending Bal Gandharva and Pune theatre festivals since school), trekking in the Sahyadris when the weather cooperates, and attempting to grow vegetables on my balcony (with mixed success and a lot of sun). Our Kulswamini is Renukamata. I'm looking for someone settled in his career, family-oriented in practice, and comfortable with a working wife who has her own life.",
  },
  {
    tag: "Male · IT Professional · Hyderabad · Muslim (Sunni) · Warm",
    text: "Alhamdulillah, I work as a senior developer at a tech company in Hyderabad's Hitec City. I try to maintain my five daily prayers and Juma — it's the one consistent structure in a schedule that's otherwise unpredictable. On weekends I play cricket with cousins, and I cook Hyderabadi biryani occasionally — Old City recipe, not the hotel version, which matters more than it should. Our family is Sunni, Syed, and we are warm and straightforward people. I am looking for a pious, educated partner who shares our values and is comfortable with life in Hyderabad — which I consider one of the best cities in India to live well.",
  },
  {
    tag: "Female · Software Engineer · Chennai · Tamil Brahmin (Iyer) · Formal",
    text: "I am a software engineer at an MNC in Chennai, five years into my career and doing well by any reasonable measure. My family is Iyer — we are from Thanjavur originally and now settled in T. Nagar for two generations. I play the veena and have been learning for twenty years; it is the part of my day I guard most carefully from other commitments. Horoscope compatibility (Jathagam porutham) is important to my family and I am genuinely open to that process. I am looking for a kind, responsible partner who respects our family's traditions and is close to his own family — sub-sect (Vadama or Brahacharanam) preferred, though we are open to discussion.",
  },
  {
    tag: "Male · IAS Officer · Delhi · North Indian · Assured",
    text: "I am an IAS officer currently posted in the Government of Rajasthan. I cleared UPSC in my second attempt — the first attempt taught me more than the second one did, and I've found that's true of most things worth doing. I come from a middle-class family in Allahabad; my father is a retired teacher and my mother runs the household with a discipline that I credit for most of what I am. I read extensively — history and political economy mostly — and I try to run three times a week when the posting schedule permits. I am looking for an educated partner who is secure in herself and comfortable with the life that comes with this service, including transfers.",
  },
  {
    tag: "Female · Teacher · Jaipur · Rajasthani Hindu · Traditional",
    text: "I teach English at a higher secondary school in Jaipur. I enjoy the work — there is something about watching a student find confidence in a language that felt foreign to them that never gets routine. My family is from Sikar originally and we are a joint family of eight people in our home in Vaishali Nagar. I cook for the family on Sundays, I read when I find the time, and I help my mother in her small boutique on weekends. I am a vegetarian and so is my entire household. I am looking for a settled, educated partner from a good Rajasthani family with similar values — joint family comfort is important to us.",
  },
  {
    tag: "Male · NRI Software Engineer · Toronto · Punjabi Hindu",
    text: "I moved to Toronto in 2019 after a few years in Delhi's startup world. Canada worked out — I enjoy the work, I like the city, and I have built a decent life here. But home is still the Sunday morning phone call to Chandigarh and the three weeks in Punjab every Diwali without exception. Outside work I follow cricket in a way that has been described as unhealthy, cook adequately, and have a strong opinion that Amritsar's kulcha makes a compelling case for returning to India. I hold Canadian PR and am genuinely open to either settling here or returning to India within three to four years — that conversation is worth having rather than decided in advance.",
  },
  {
    tag: "Female · Doctor · Kerala · Jacobite Christian",
    text: "I am completing my MD in Internal Medicine in Kochi. Medicine runs in my family — my father has been a physician for thirty years and I grew up in the middle of it, which is probably why I ended up here. Our family is Jacobite Syrian Christian from Kottayam and we attend St. George's Church, Niranam — the church is as much part of our weekly life as anything else. I am close to my family in a way I genuinely value; we call daily and I go home every month. I cook Kerala fish curry reasonably well. I am looking for someone who values family, has his own ambitions, and is comfortable with a doctor's schedule.",
  },
  {
    tag: "Female · NRI · London · Gujarati Hindu",
    text: "I grew up in Ahmedabad and have been in London for five years, working in financial services in Canary Wharf. I visit home every Diwali and for my parents' anniversary because some things are non-negotiable regardless of flight prices. I cook Gujarati food when I'm homesick — which is often — and I've been told my handvo is better than it has any right to be from someone who learned from YouTube. I hold UK ILR and I am genuinely open about geography: the right match matters more than which country we're in. Looking for someone who is settled, family-oriented in the way that shows rather than just claims, and comfortable with a woman who has her own career and opinions.",
  },
  {
    tag: "Male · Business Owner · Surat · Jain (Shvetambara Murtipujak)",
    text: "I run a diamond trading business in Surat — second generation, established by my father in 1988 and I have been part of it since completing my B.Com in 2017. Our family is Shvetambara Murtipujak, Oswal gotra Bhandari, and Paryushan is the most important week of our year. Strict Jain vegetarian household — no root vegetables, no eating after sunset. I enjoy cricket, follow the market more than I probably should, and take genuine pride in knowing every jeweller on Ring Road by name. Looking for a Jain girl from a similar background — educational qualification to at least graduate level, family values aligned, Jain dietary practice important to us.",
  },
  {
    tag: "Female · Second Marriage · Pune · Open, dignified",
    text: "I am 34, working as a project manager at a tech company in Pune, settled in my career and in my understanding of what I want from a relationship. I've been through a marriage and a separation — I come into this process with clarity and without apology. I have a six-year-old daughter who is the centre of my life and who will be part of any honest conversation about a future together. Outside work I run, read mostly non-fiction, and cook for friends on weekends. I have a calm, independent nature and I value real conversations over the performance of compatibility. I'm looking for someone emotionally mature, genuinely open, and ready to build something real.",
  },
  {
    tag: "Male · Government Engineer · Bhopal · MP Hindu · Simple",
    text: "I work as an Assistant Engineer with the state PWD in Bhopal — a stable government job that I am proud of and my parents are more proud of than I let on. Our family is from Vidisha district originally; we are a joint family and I live with my parents and younger brother. I am a vegetarian, I don't drink or smoke, and I play cricket on Sundays with the colony team. I am not a man of many words but the words I use are honest ones. Looking for a simple, educated girl from a good family — Madhya Pradesh or nearby states preferred. Our Gotra is Bharadwaj.",
  },
  {
    tag: "Female · Homemaker (post-MBA) · Bengaluru · South Indian",
    text: "I completed my MBA from XLRI in 2019 and worked in marketing for four years. I chose to step back after our family went through a difficult year and my parents needed consistent support — it was a deliberate choice that I stand by. I am now based in Bengaluru managing our household and taking care of my mother, and I pursue freelance content work that keeps me intellectually active. I read, I paint sporadically, and I make a South Indian filter coffee at 7am every day that my father calls the best thing about his retirement. I am looking for someone who respects that choices like mine can be both intentional and something that might change — and who values that I have a perspective formed by a career, not just a degree.",
  },
];

const useCaseTable = [
  { situation: "Male IT engineer, any metro", examples: "1, 7" },
  { situation: "Female doctor", examples: "2, 10" },
  { situation: "Traditional North Indian male", examples: "3, 8" },
  { situation: "Female professional, Marathi family", examples: "4" },
  { situation: "Muslim professional, Hyderabad", examples: "5" },
  { situation: "Tamil Brahmin female", examples: "6" },
  { situation: "IAS / government officer", examples: "7" },
  { situation: "Traditional female, North/West India", examples: "8" },
  { situation: "NRI male (UK, Canada, USA)", examples: "9, 11" },
  { situation: "Christian female, Kerala", examples: "10" },
  { situation: "NRI female", examples: "11" },
  { situation: "Jain business family", examples: "12" },
  { situation: "Second marriage (female or male)", examples: "13" },
  { situation: "Government job, smaller city", examples: "14" },
  { situation: "Homemaker (by choice, educated)", examples: "15" },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "About Me for Marriage Biodata — 15 Real Examples Across All Communities",
    description:
      "15 complete About Me examples for Hindu, Muslim, Sikh, Marathi, Christian, Jain, NRI, doctor, IT engineer, teacher, second marriage, girl, and boy biodatas — written to be copied and adapted directly.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    author: { "@type": "Organization", name: "Marriage Biodata Hub", url: "https://www.marriagebiodatahub.com" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      url: "https://www.marriagebiodatahub.com",
      logo: { "@type": "ImageObject", url: "https://www.marriagebiodatahub.com/images/Logo-of-marriage-biodata-hub.webp" },
    },
    inLanguage: "en-IN",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/about-me-for-marriage-biodata" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marriagebiodatahub.com" },
      { "@type": "ListItem", position: 2, name: "About Me for Marriage Biodata", item: "https://www.marriagebiodatahub.com/about-me-for-marriage-biodata" },
    ],
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

export default function AboutMeForMarriageBiodata() {
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
            <span className="text-slate-300">About Me for Marriage Biodata</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>10 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            About Me for Marriage Biodata — 15 Real Examples Across All Communities
          </h1>

          <AEOBlock>
            The About Me section in a marriage biodata is the only part where you speak as a person rather than a
            set of facts. Three to five sentences. No more than 100 words. The rule that separates a memorable About
            Me from one that gets scrolled past is simple: replace every adjective with a fact. "I am
            family-oriented" tells no one anything. "We have had Sunday lunch together at my parents' house every
            week for six years — even when I was working in another city" tells a family exactly who you are. The 15
            examples below are written for real candidates across different communities and professions. Copy the
            one that is closest to your situation, change every specific detail to yours, and use it.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">The one rule that fixes every About Me</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Before the examples — this one rule is worth more than all of them: <strong className="text-white">replace every adjective with a fact.</strong>
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Every Indian marriage biodata has the same About Me. Polite. Patient. Family-oriented. Fun-loving.
            Down-to-earth. Caring. These words appear in roughly 70% of all biodatas circulating in India right now.
            When a family reads them, they register nothing — not because the candidate is wrong to use them, but
            because every other candidate used them too.
          </p>

          <div className="space-y-3 mb-8">
            {[
              { before: "\"I am patient\"", after: "\"I spent five months helping my younger brother clear his CA Intermediate exams — morning sessions before work, every day.\"" },
              { before: "\"I love my family\"", after: "\"We call home every single evening. My father thinks it's because I miss the food. He's not entirely wrong.\"" },
              { before: "\"I am ambitious\"", after: "\"I went from fresher to team lead in two years and I'm still not satisfied — in a good way.\"" },
              { before: "\"I enjoy cooking\"", after: "\"My biryani is the reason my cousins start calling two days before Eid.\"" },
            ].map((row, i) => (
              <div key={i} className="rounded-xl bg-slate-900/60 border border-slate-800 p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-rose-300 text-sm line-through decoration-rose-500/40 sm:w-1/3">{row.before}</span>
                <span className="text-slate-500 text-sm hidden sm:inline">→</span>
                <span className="text-emerald-300 text-sm sm:w-2/3">{row.after}</span>
              </div>
            ))}
          </div>

          <p className="text-slate-300 leading-relaxed mb-4">
            One specific fact. That is the entire method. The 15 examples below follow this rule — use them as
            templates by changing each specific detail to yours.
          </p>
          <p className="text-slate-400 text-sm mb-10">
            For the full method of writing About Me from scratch, see our guide:{" "}
            <Link href="/blog/how-to-write-about-me-in-marriage-biodata" className="text-brand-400 hover:text-brand-300 underline underline-offset-4">
              How to write the About Me section in a marriage biodata →
            </Link>
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-6">15 About Me examples — copy and adapt</h2>

          <div className="space-y-5 mb-10">
            {examples.map((ex, i) => (
              <div key={i} className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-500/20 text-brand-400 text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-xs text-slate-500 font-medium tracking-wide">{ex.tag}</span>
                </div>
                <blockquote className="text-slate-200 leading-relaxed text-sm border-l-2 border-brand-500/40 pl-4">
                  {ex.text}
                </blockquote>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-6">Which example is closest to your situation?</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-800 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900/70 text-left text-slate-400">
                  <th className="p-4 font-semibold">Your situation</th>
                  <th className="p-4 font-semibold">Use example number</th>
                </tr>
              </thead>
              <tbody>
                {useCaseTable.map((row, i) => (
                  <tr key={row.situation} className={i % 2 === 0 ? "bg-slate-900/30" : "bg-transparent"}>
                    <td className="p-4 text-slate-300 border-t border-slate-800">{row.situation}</td>
                    <td className="p-4 text-slate-300 border-t border-slate-800">{row.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-sm mb-4">
            After finding the closest example: change every specific detail to yours. Keep the structure and tone.
            Replace the profession, city, hobby, family detail, and partner preference sentence with your own
            specifics.
          </p>
          <p className="text-slate-400 text-sm mb-10">
            The method behind writing your own from scratch is in our guide:{" "}
            <Link href="/blog/how-to-write-about-me-in-marriage-biodata" className="text-brand-400 hover:text-brand-300 underline underline-offset-4">
              How to write the About Me section in a marriage biodata →
            </Link>
          </p>

          {/* CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Ready to put your About Me in a biodata?</p>
            <p className="text-slate-400 text-sm mb-5">
              Choose a template, fill in your details including the About Me you just wrote, and download a
              one-page PDF in minutes. No login. No watermark. Free.
            </p>
            <SmartLink href="/#biodata-form-wrapper"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105"
            >
              Create My Biodata — Free →
            </SmartLink>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-14 mb-2">Frequently asked questions</h2>
          <SectionFAQ items={faqs} />

          <div className="mt-14 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-4">Related guides</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/blog/how-to-write-about-me-in-marriage-biodata", label: "How to write About Me from scratch" },
                { href: "/hobbies-for-marriage-biodata", label: "Hobbies for marriage biodata" },
                { href: "/marriage-biodata-format", label: "Complete biodata format guide" },
                { href: "/what-is-marriage-biodata", label: "What is a marriage biodata?" },
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/muslim-biodata-for-marriage", label: "Muslim Rishta biodata" },
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
