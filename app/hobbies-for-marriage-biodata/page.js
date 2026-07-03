import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

export const metadata = {
  title: "Hobbies for Marriage Biodata — What to Write",
  description:
    "What hobbies to write in your marriage biodata — which ones work, which ones bore families, and 30 real examples across communities and professions. With Hindi translations.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/hobbies-for-marriage-biodata",
  },
  openGraph: {
    title: "Hobbies for Marriage Biodata — What to Write",
    description:
      "What hobbies to write in your marriage biodata — which ones work, which ones bore families, and 30 real examples across professions and communities.",
    url: "https://www.marriagebiodatahub.com/hobbies-for-marriage-biodata",
    type: "article",
    locale: "en_IN",
    siteName: "Marriage Biodata Hub",
    images: [
      {
        url: "https://www.marriagebiodatahub.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Hobbies for Marriage Biodata — Marriage Biodata Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hobbies for Marriage Biodata — What to Write",
    description:
      "What hobbies to write in your marriage biodata — 30 real examples, what works, what bores families, Hindi translations included.",
    images: ["https://www.marriagebiodatahub.com/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "What hobbies should I write in my marriage biodata?",
    a: "Write one to three hobbies that are genuinely yours — specific enough to be memorable, honest enough to hold up in conversation. The most effective hobbies in an Indian marriage biodata are ones that show personality or values through action: 'coaching my cousin's cricket team on Sunday mornings,' 'learning to make Hyderabadi biryani from my grandmother,' 'road trips — six Indian states in three years.' Avoid generic lists of 6 to 8 hobbies (reading, music, travel, cooking, cricket, gym) — they appear in nearly every biodata and create no impression.",
  },
  {
    q: "What hobbies should I NOT write in my marriage biodata?",
    a: "Avoid writing hobbies that are so common they say nothing specific about you: 'reading, music, travel, cooking, spending time with family.' These appear in the majority of Indian marriage biodatas. Also avoid: watching movies or web series (too generic), scrolling social media (obvious and unflattering), and any hobby you don't actually pursue — the first family meeting will expose it. Listing 7 or 8 hobbies to seem well-rounded also backfires — families remember nothing from a long list. Choose two or three real ones.",
  },
  {
    q: "How many hobbies should I mention in a marriage biodata?",
    a: "Two to three. One hobby written specifically is more memorable than seven written generically. 'I play chess — I've been ranked in my state under-18 category' lands better than 'I enjoy chess, cricket, badminton, swimming, reading, music, and cooking.' The goal is not to prove you're well-rounded; it's to give the other family one specific thing to remember about you and one natural conversation starter for the first meeting.",
  },
  {
    q: "What hobbies work best for a girl's marriage biodata?",
    a: "The same rule applies regardless of gender: specific is better than generic. A girl's biodata that says 'I enjoy cooking, reading, and music' competes with roughly 80% of other biodatas. One that says 'I have been learning Bharatanatyam for twelve years — my guru says I have two more to go' or 'I run 5km three mornings a week and I've completed two half-marathons' is remembered. Avoid writing hobbies you think you're expected to write ('cooking, being homely') in place of hobbies you actually have — the mismatch shows up in conversation.",
  },
  {
    q: "Should I write hobbies in Hindi in my marriage biodata?",
    a: "If your biodata is primarily in Hindi or is being shared with Hindi-speaking families in North India — yes. Writing hobbies in Hindi sounds more natural and genuine than translated versions. 'Main cricket khelna pasand karta hun aur hamare colony team ka captain hun' is more specific and memorable than 'I enjoy cricket.' The section should sound like you, not like a translation. A Hindi hobbies list and an English one can serve different channels — keep both versions of your biodata if needed.",
  },
];

const groups = [
  {
    title: "Sports and fitness",
    items: [
      { label: "Cricket — team player", text: "Cricket — I play for my company team and we take the inter-office tournament embarrassingly seriously." },
      { label: "Cricket — childhood nostalgia", text: "Cricket on Sunday mornings in the gully — I've played on the same street team with the same seven people since Class 6." },
      { label: "Running — distance", text: "Running — I completed my first half-marathon in Bengaluru in January 2026 and am training for a full." },
      { label: "Running — daily habit", text: "Running — 5 km in Cubbon Park three mornings a week, most consistently before 6:30 AM because after that the city wakes up and ruins it." },
      { label: "Badminton", text: "Badminton — I've been playing at the colony court every Saturday morning for six years. It's now the reason I get up on Saturday." },
      { label: "Yoga — regular practice", text: "Yoga — I've maintained a morning practice for four years. My mother started it and I joined to humour her. I now won't let her skip." },
      { label: "Gym — honest version", text: "Gym — three mornings a week, consistent since 2023. Not an obsession; just the most reliable investment I've made in my energy levels." },
      { label: "Trekking — Sahyadris / Himalayas", text: "Trekking — I've done four Sahyadri treks in the last two years and I'm planning Kedarkantha next winter if the route opens." },
      { label: "Swimming", text: "Swimming — I've swum every morning since school. It's the one habit I've kept across cities, jobs, and every excuse the calendar provides." },
    ],
  },
  {
    title: "Music — specific instruments or traditions",
    items: [
      { label: "Veena or Sitar — classical", text: "Veena — I've been learning Carnatic classical for eighteen years. My teacher says I'm almost ready. She's been saying this for three years." },
      { label: "Tabla or Mridangam", text: "Tabla — I play for my Gurudwara's kirtan group on first Sunday of every month. It's been part of my Sunday for fifteen years." },
      { label: "Singing — Hindustani or Carnatic", text: "Hindustani classical singing — I'm in my eighth year of riyaaz with my guru in Varanasi over video call since I moved to Pune." },
      { label: "Rabindra Sangeet (Bengal)", text: "Rabindra Sangeet — I've been learning since school. It is the most Bengali thing about me, which is saying something." },
    ],
  },
  {
    title: "Cooking — specific, not generic",
    items: [
      { label: "Cooking — a signature dish", text: "Cooking — specifically biryani. I've been working on the Lucknow dum biryani recipe for two years and I'm at least 80% there." },
      { label: "Cooking — cultural connection", text: "Cooking Gujarati food abroad — it's the most efficient way I've found to manage homesickness when I'm in London." },
      { label: "Cooking — family tradition", text: "Cooking — I make Sunday lunch for the entire family every week. It started during the pandemic and nobody has asked me to stop." },
      { label: "Baking — specific", text: "Baking — I started during lockdown and the family has somehow come to expect it every weekend. I make a chocolate cake that my father rates higher than anything from a bakery, which is the highest compliment he gives anyone." },
    ],
  },
  {
    title: "Reading — with specificity",
    items: [
      { label: "Non-fiction history", text: "Reading — history and biography mostly. I've been through the complete Mughal history I could find in the last two years and have moved on to the Maratha period." },
      { label: "Regional literature", text: "Reading Malayalam literature in the original. It's the most alive thing about the language for me, more than any conversation." },
      { label: "Business and finance", text: "Reading about business and markets — I follow five newsletters every morning before work. My friends say this makes me boring at parties. They're not wrong." },
    ],
  },
  {
    title: "Travel — with specific detail",
    items: [
      { label: "Road trips through India", text: "Road trips — I've driven through six Indian states in the last three years. Rajasthan in January and Karnataka's coast in April are on the shortlist for next." },
      { label: "Spiritual travel", text: "Visiting dhams and pilgrimage sites with my parents — we've done four jyotirlinga yatras together. It's the annual trip the whole family plans around." },
      { label: "Backpacking — budget travel", text: "Backpacking — I've done three solo trips on minimal budgets. The planning is half the fun; the other half is finding a restaurant in a new city by smell." },
    ],
  },
  {
    title: "Family and community involvement",
    items: [
      { label: "Teaching or coaching family", text: "Coaching my younger cousins every weekend — it started as maths tuitions for one nephew and has expanded to four children over two years." },
      { label: "Volunteering", text: "I volunteer at a local NGO that teaches English to first-generation learners on Saturday mornings — I've been doing it for two years and I've had to say no to other Saturday plans to protect it." },
      { label: "Family religious practice", text: "Attending kirtan at the Gurudwara every Sunday — it's been my family's weekly anchor since before I was born and mine now." },
    ],
  },
  {
    title: "Creative and other interests",
    items: [
      { label: "Photography — candid", text: "Photography — specifically candid portraits at family functions. I have seven years of family history in 14,000 photos that nobody has asked me to organise yet." },
      { label: "Gardening / Plants", text: "Trying to grow vegetables on my balcony in Mumbai — the tomatoes have been successful, the spinach is a work in progress, the mint has taken over everything." },
      { label: "Chess", text: "Chess — I was ranked in my district under-18 category in school. I still play online most evenings and occasionally lose badly to someone half my age." },
      { label: "Sketching or painting", text: "Sketching — mostly portraits from memory, mostly people I find interesting. I've been doing it since school and I fill a notebook every three or four months." },
    ],
  },
];

const hindiExamples = [
  { label: "Cricket (team)", text: "Cricket — Main apni company ki team ki taraf se khelta hun aur hum inter-office tournament ko bahut seriously lete hain." },
  { label: "Cooking (signature)", text: "Khana banana — khaas taur par meri maa ki dal makhani ki recipe, jo main teen saal se perfect karne ki koshish kar raha hun." },
  { label: "Trekking", text: "Paharon mein trekking — Maine pichhle do saal mein Uttarakhand mein teen trek ki hain aur ek Kedarkantha ki planning hai." },
  { label: "Reading", text: "Padhai — main itihaas aur biography padhna pasand karta hun. Abhi Mughal period ki kitabein padh raha hun." },
  { label: "Yoga (family)", text: "Yoga — meri maa ne shuru kiya tha aur main unke saath join kar gaya. Ab main hi yaad dilata hun ki skip nahi karna." },
];

const avoidList = [
  { t: "\"Reading, music, travel, cooking\"", d: "in that order, or any combination. This is the most common hobbies line in Indian marriage biodatas. It carries zero information because it applies to nearly everyone." },
  { t: "Listing 7 or 8 hobbies.", d: "\"Cricket, badminton, swimming, gym, reading, music, cooking, travelling.\" No family retains this. They remember nothing. Two or three specific ones win over eight generic ones every time." },
  { t: "Hobbies you don't actually have.", d: "The first meeting will test them. \"You mentioned classical music — which gharana?\" is a natural question that becomes very uncomfortable if the answer is \"I just wrote it, I don't actually know.\"" },
  { t: "\"Watching movies / web series.\"", d: "This is what everyone does. It is not a hobby that distinguishes you. If your actual hobby is film criticism or you run a movie review account, write that specific version. Otherwise, leave it out." },
  { t: "\"Spending time with family.\"", d: "This is not a hobby — it is a value. Write it in the About Me section if it is genuine. In the hobbies line, it reads as a filler entry." },
  { t: "\"Social media.\"", d: "Please don't." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Hobbies for Marriage Biodata — What to Write, What to Avoid, and 30 Real Examples",
    description:
      "A complete guide to writing the hobbies and interests section of an Indian marriage biodata — which hobbies work with which families, 30 specific examples with Hindi translations, and the one mistake that makes every hobby list forgettable.",
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
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/hobbies-for-marriage-biodata" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marriagebiodatahub.com" },
      { "@type": "ListItem", position: 2, name: "Hobbies for Marriage Biodata", item: "https://www.marriagebiodatahub.com/hobbies-for-marriage-biodata" },
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

export default function HobbiesForMarriageBiodata() {
  let counter = 0;
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
            <span className="text-slate-300">Hobbies for Marriage Biodata</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Hobbies for Marriage Biodata — What to Write, What to Avoid, and 30 Real Examples
          </h1>

          <AEOBlock>
            The hobbies section in a marriage biodata has one job: give the receiving family one specific thing to
            remember about you after they've reviewed twenty others. "Reading, music, travel, cooking" doesn't do
            this — these four words appear in roughly 80% of Indian marriage biodatas and leave no impression at
            all. What works is specificity: "coaching my cousin's cricket team on Sunday mornings," "learning
            Hyderabadi biryani from my grandmother — Old City recipe," "road trips through India, six states in
            three years." One hobby written with a specific detail is worth more than eight generic ones. Write two
            to three. Make them real.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Why "reading, music, travel, cooking" doesn't work</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Let's say a mother in Lucknow receives twelve biodatas for her son in one week. She sits with them on a
            Sunday evening. She reads each About Me section and the hobbies line.
          </p>
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 mb-4 space-y-2 text-sm text-slate-300">
            <p><span className="text-slate-500">Biodata 1:</span> Reading, music, travel, cooking.</p>
            <p><span className="text-slate-500">Biodata 2:</span> Cricket, gym, travelling, spending time with family.</p>
            <p><span className="text-slate-500">Biodata 3:</span> Reading books, listening to music, cooking, watching movies.</p>
            <p><span className="text-slate-500">Biodata 4:</span> Travelling, photography, cooking, yoga.</p>
            <p className="pt-2 border-t border-slate-800"><span className="text-emerald-400">Biodata 5:</span> I coach my younger cousins' cricket team on Sunday mornings — it started as a favour to my brother-in-law and now I genuinely look forward to it every week.</p>
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            By biodata 11, she remembers nothing from biodatas 1 to 4. She remembers biodata 5. Not because cricket
            is an impressive hobby. Because it is specific, it shows something about the person's character
            (generous, consistent, involved with family), and it gives her something to mention in the first phone
            call.
          </p>
          <p className="text-slate-300 leading-relaxed">
            That's the only standard a hobby entry needs to meet: give one family member one specific thing to bring
            up later.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">The two rules for writing hobbies</h2>
          <div className="space-y-4 mb-8">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-white mb-2">Rule 1: Choose the real ones, not the impressive-sounding ones.</h3>
              <p className="text-slate-300 leading-relaxed">
                If you actually do yoga three mornings a week, write yoga. If you went to one yoga class in 2022 and
                that was it, don't write yoga. Families will ask about your hobbies in the first meeting. A
                conversation about a hobby you don't actually have is noticeable and uncomfortable in a way that
                early meetings can't recover from.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-white mb-2">Rule 2: Add one specific detail to at least one hobby.</h3>
              <p className="text-slate-300 leading-relaxed">
                Not just "cricket" — "cricket, I'm the captain of my colony team." Not just "cooking" — "cooking,
                specifically Kerala-style fish curry — I've been perfecting my grandmother's recipe for three
                years." Not just "reading" — "reading non-fiction history, currently working through William
                Dalrymple's Mughal series." One specific detail converts a hobby from a bullet point to a
                conversation.
              </p>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-2">30 hobby examples that work — use these directly</h2>
          <p className="text-slate-400 text-sm mb-8">
            Organised by type. Copy the one closest to yours and add your specific detail.
          </p>

          <div className="space-y-10 mb-10">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-lg font-bold text-white mb-4">{group.title}</h3>
                <div className="space-y-3">
                  {group.items.map((item) => {
                    counter += 1;
                    return (
                      <div key={item.label} className="rounded-xl border border-slate-700 bg-slate-900/40 p-5">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 text-[11px] font-bold flex items-center justify-center">
                            {counter}
                          </span>
                          <span className="text-xs text-slate-500 font-medium tracking-wide">{item.label}</span>
                        </div>
                        <p className="text-slate-200 leading-relaxed text-sm border-l-2 border-brand-500/40 pl-4">{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Hobby examples in Hindi — for North Indian biodatas</h2>
          <p className="text-slate-300 leading-relaxed mb-4">For families sharing biodatas in Hindi-speaking states:</p>
          <div className="space-y-3 mb-10">
            {hindiExamples.map((ex) => (
              <div key={ex.label} className="rounded-xl border border-slate-700 bg-slate-900/40 p-5">
                <p className="text-xs text-slate-500 font-medium tracking-wide mb-2">{ex.label}</p>
                <p className="text-slate-200 leading-relaxed text-sm border-l-2 border-brand-500/40 pl-4">{ex.text}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">What to avoid in the hobbies section</h2>
          <div className="space-y-3 mb-10">
            {avoidList.map(({ t, d }, i) => (
              <div key={i} className="flex gap-4 rounded-xl bg-slate-900/60 border border-slate-800 p-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center justify-center">✗</span>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{t}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Ready to put your hobbies in a biodata?</p>
            <p className="text-slate-400 text-sm mb-5">
              Write your two best hobbies with one specific detail each. Then open our free tool, fill in your
              biodata, and download a one-page PDF ready for WhatsApp and matrimonial sites. No login. Free.
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
                { href: "/about-me-for-marriage-biodata", label: "About Me examples" },
                { href: "/blog/how-to-write-about-me-in-marriage-biodata", label: "How to write About Me from scratch" },
                { href: "/marriage-biodata-format", label: "Complete biodata format guide" },
                { href: "/blog/marriage-biodata-for-girl", label: "Marriage biodata for girl" },
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
