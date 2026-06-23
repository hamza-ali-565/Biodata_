import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

export const metadata = {
  title: "What to Write in \"About Me\" for Marriage Biodata — 15 Examples 2026 | Marriage Biodata Hub",
  description:
    "Stuck on the About Me section? 15 real examples for different communities, professions, and tones. Copy, adapt, and make it yours. For Hindu, Muslim, Marathi, Tamil, NRI, and more.",
  alternates: {
    canonical: "/about-me-for-marriage-biodata",
  },
  openGraph: {
    title: "What to Write in \"About Me\" for Marriage Biodata — 15 Examples 2026",
    description:
      "Stuck on the About Me section? 15 real examples for different communities, professions, and tones. Copy, adapt, and make it yours.",
    url: "/about-me-for-marriage-biodata",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What to Write in \"About Me\" for Marriage Biodata — 15 Examples",
    description: "15 real About Me examples for different communities, professions, and tones.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "What should I write in the About Me section of a marriage biodata?",
    a: "Write 3–5 sentences covering: one real personality quality with a specific example, a genuine hobby or interest (not a list), a value that matters to you, and briefly what you're looking for in a partner. Avoid generic phrases like \"I am a simple, family-oriented person\" — every biodata has this. Write something specific that only you would write.",
  },
  {
    q: "How long should the About Me section be in a marriage biodata?",
    a: "3–5 sentences. No more. Families reviewing multiple biodatas spend 90 seconds per profile. A short, specific, memorable About Me is far more effective than a long paragraph. If you've written more than 5 sentences, edit it down — keep only the most distinctive things about yourself.",
  },
  {
    q: "What NOT to write in the About Me section of a marriage biodata?",
    a: "Avoid: generic adjectives without examples (\"simple, honest, caring\"), lists of 10 hobbies without depth, anything about past relationships, requirements that sound demanding, or anything better suited to another section (salary goes in career section, Gotra goes in horoscope section). Also avoid writing in third person — \"She is a calm person\" feels distant. First person (\"I enjoy...\") is warmer.",
  },
  {
    q: "Can I use the same About Me on Shaadi.com and my PDF biodata?",
    a: "Yes and no. Your core content can be the same, but a matrimony site profile often has word limits and different sections. The tone can also be slightly different — a site profile may be slightly more formal (it's public); a PDF biodata shared with specific families can be more personal. Use the same truthful content, adapt the format for each platform.",
  },
];

const examples = [
  {
    tag: "Software Engineer · Bengaluru · Modern",
    text: "I work as a Senior Software Engineer at a product company in Bengaluru. Outside work, I'm an avid trekker — I completed the Kedarkantha trek last December, and I'm planning Chadar next winter. I come from a close family in Delhi; we're traditional in our values but practical in our approach to life. I'm looking for a partner who has her own interests and ambitions, and who values both family and personal growth.",
  },
  {
    tag: "Doctor · Delhi · Traditional",
    text: "I am a second-year MD student at AIIMS New Delhi. My family has been in medicine for two generations, and the values I've grown up with — sincerity, service, and respect for elders — guide everything I do. I enjoy cooking on weekends (I make a good dal makhani) and playing chess. I am looking for a life partner who is educated, warm-hearted, and values family as much as I do.",
  },
  {
    tag: "IT Professional · Pune · Marathi community",
    text: "मी पुण्यात IT क्षेत्रात software developer म्हणून काम करतो. / I work as a software developer in Pune. My family is from Nashik — we visit every month, and those Sunday mornings in Nashik's market are something I've grown up loving. I enjoy badminton in the evenings and long drives on the Pune–Mumbai expressway on weekends. I am looking for a partner who values family time as much as independence.",
  },
  {
    tag: "Bank Officer · Lucknow · UP Brahmin",
    text: "I work as a Probationary Officer at SBI Lucknow branch. I come from a middle-class Brahmin family in Kanpur — my father is a retired school principal, and our home has always had a strong focus on education and culture. I am fond of ghazals, classical music, and reading Hindi literature. I am looking for a well-educated, grounded life partner from a similar family background.",
  },
  {
    tag: "Muslim professional · Hyderabad",
    text: "Alhamdulillah, I work as a civil engineer based in Hyderabad. I try to maintain my five daily prayers and observe the values my family has taught me — honesty, responsibility, and gratitude. On weekends I enjoy cooking biryani (Old City style) and playing cricket with cousins. I am looking for a pious, educated, and family-oriented partner who shares similar values.",
  },
  {
    tag: "Teacher · Chennai · Tamil Brahmin (Iyer)",
    text: "I am a higher secondary school teacher in Chennai, teaching Mathematics. I am an Iyer from a family with roots in Thanjavur. I enjoy Carnatic music (I play veena), cooking, and reading Tamil literature. Horoscope compatibility (Jathagam porutham) is important to my family, and I am open to traditional matching. I am looking for a kind, responsible life partner who respects our family traditions.",
  },
  {
    tag: "Engineer · Mumbai · Gujarati family",
    text: "I'm a mechanical engineer currently working with a manufacturing company in Mumbai's Andheri belt. My family is from Surat originally, settled in Mumbai for two generations. I enjoy traveling — I've been to 11 Indian states and plan to cover all 28 in the next five years. I'm a vegetarian and come from a Vaishnav family. Looking for a simple, educated partner who is family-oriented and open to living in Mumbai.",
  },
  {
    tag: "MBA · Delhi · NRI / Canada",
    text: "I'm an MBA graduate currently working in Toronto, Canada, in the banking sector. I grew up in Delhi (Dwarka) and come from a Punjabi family. I visit India every year for Diwali. I enjoy cooking Indian food abroad — it's my way of staying connected. I'm looking for a life partner who is comfortable with life between India and Canada, and who values both our roots and our current lives.",
  },
  {
    tag: "Government officer (SDM) · Jaipur · Rajput",
    text: "I serve as a Sub-Divisional Magistrate (SDM) in Rajasthan. I come from a Rajput family in Sikar district — we have our ancestral home there and visit for every major festival. I believe in simplicity, duty, and family. I play chess and read history in my free time. I am looking for a life partner from a traditional family who understands the nature and demands of a government service career.",
  },
  {
    tag: "CA · Ahmedabad · Jain family",
    text: "I'm a Chartered Accountant practising in Ahmedabad. Our family is Jain — I follow paryushana and our dietary practices strictly. I'm vegetarian and teetotaler, which is non-negotiable. I enjoy cricket and family travel — we visited Mahabalipuram last year. I'm looking for a Jain partner who shares our values and can be comfortable building a family in Ahmedabad.",
  },
  {
    tag: "IT Professional · Kolkata · Bengali family",
    text: "আমি একটি IT কোম্পানিতে project manager হিসেবে কাজ করি। / I work as a project manager in an IT company in Kolkata's Salt Lake sector. My family is from South Kolkata — my mother is a music teacher and my father is a retired bank officer. I love Rabindra Sangeet, adda on lazy Sunday afternoons, and Kolkata street food (especially phuchka from Maddox Square). Looking for a Bengali partner who is educated, warm, and values both tradition and independence.",
  },
  {
    tag: "Doctor (female) · Hyderabad · Telugu family",
    text: "I completed my MBBS from Osmania Medical College and am currently doing my MD in Internal Medicine. My family is from Vijayawada, and we are Kamma community. I enjoy reading, cooking, and watching cricket. I value family deeply — both families visiting on Telugu festivals is something I look forward to every year. I'm looking for an educated, understanding partner who supports my career while valuing our family traditions.",
  },
  {
    tag: "UX Designer (female) · Bengaluru · Modern",
    text: "I'm a UX designer at a tech company in Bengaluru — I work on products that are used by millions, which I find genuinely exciting. I grew up in Mysuru, so I carry a bit of the old city's pace with the new city's ambition. I cycle every morning, grow plants on my balcony, and am teaching myself to play the guitar (slowly). I'm looking for a partner who respects my career, enjoys good conversations, and doesn't mind a bit of organised chaos at home.",
  },
  {
    tag: "Accountant (male) · Coimbatore · Tamil community",
    text: "I work as a senior accountant in a textile company in Coimbatore. My family has been in Coimbatore for three generations — my grandfather started in the handloom business. I am a strict vegetarian. I enjoy watching Tamil films, badminton, and helping at our local temple on Fridays. My horoscope (Jathagam) shows Rasi as Mithun and Natchathiram as Punarpoosam. I am looking for a Tamil girl from a traditional family, preferably from Coimbatore or Tirupur district.",
  },
  {
    tag: "Software professional · Pune · Second marriage",
    text: "I am a 36-year-old software professional currently based in Pune. I believe every chapter of life brings new understanding, and I come into this process with clarity, honesty, and openness. I enjoy cooking, hiking, and reading — mostly non-fiction. I have a calm, independent nature and value deep conversations over small talk. I'm looking for a partner who is emotionally mature, independent, and open to building something new with honesty and mutual respect.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What to Write in \"About Me\" for Marriage Biodata — 15 Real Examples",
    description: "15 real About Me examples for different Indian communities, professions, and tones.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    author: { "@type": "Organization", name: "Marriage Biodata Hub" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      logo: { "@type": "ImageObject", url: "https://marriagebiodatahub.com/icon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://marriagebiodatahub.com/about-me-for-marriage-biodata" },
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
      { "@type": "ListItem", position: 2, name: "About Me for Marriage Biodata", item: "https://marriagebiodatahub.com/about-me-for-marriage-biodata" },
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
            <Link href="/marriage-biodata-format" className="hover:text-brand-400 transition-colors">Biodata Format</Link>
            <span>/</span>
            <span className="text-slate-300">About Me Examples</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            What to Write in "About Me" for Marriage Biodata — 15 Real Examples
          </h1>

          <AEOBlock>
            The About Me section in a marriage biodata should be 3–5 sentences describing your personality, values,
            lifestyle, and what you're looking for in a partner. Write something specific — a specific hobby, a
            specific value with an example, something real about your family life. Generic phrases like "I am a
            simple, family-oriented person" are forgettable. A specific sentence like "My family eats dinner together
            every evening — that's something I want to carry forward" is remembered.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Why the About Me section matters more than you think</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            When two candidates have similar education and career profiles — which is increasingly common in urban
            arranged marriage searches — the About Me section is what gets one biodata called back and the other passed
            over. It's the only section where a family can see the person, not just their credentials.
          </p>
          <p className="text-slate-300 leading-relaxed">
            A family reviewing 20–30 biodatas reads the About Me section in about 10 seconds. If it says "I am a
            simple, honest person who loves to travel" — they move on. If it says something specific and human, they
            pause. That pause is the opening for a conversation.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">What to include in About Me — and what to avoid</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5">
              <p className="font-semibold text-emerald-300 mb-3">Include</p>
              <ul className="space-y-2">
                {[
                  "One specific personality quality (with an example, not just the adjective)",
                  "One genuine interest or hobby (not a list — one specific thing)",
                  "A value that genuinely matters to you",
                  "One sentence about what you're looking for in a partner",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-slate-300 text-sm">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5">
              <p className="font-semibold text-rose-300 mb-3">Avoid</p>
              <ul className="space-y-2">
                {[
                  "\"I am a simple, honest, and family-oriented person\" — every biodata says this",
                  "Listing 10 hobbies without depth",
                  "Anything about past relationships",
                  "Requirements that sound like demands",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-slate-300 text-sm">
                    <span className="text-rose-400 mt-0.5">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-6">15 About Me examples for Indian marriage biodata</h2>
          <p className="text-slate-400 text-sm mb-8">
            Copy any of these, adapt it to your own details, and make it yours. The goal is not to use someone else's
            words — it's to see what specific and honest looks like before you write your own.
          </p>

          <div className="space-y-5 mb-8">
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

          {/* CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Ready to write your About Me?</p>
            <p className="text-slate-400 text-sm mb-5">
              Use our free biodata maker. Fill in your details including the About Me section, choose a template, and
              download your PDF.
            </p>
            <Link
              href="/#biodata-form-wrapper"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105"
            >
              Create My Biodata — Free →
            </Link>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-14 mb-2">Frequently asked questions</h2>
          <SectionFAQ items={faqs} />

          <div className="mt-14 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-4">Related guides</p>
            <div className="flex flex-wrap gap-3">
              {[
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
