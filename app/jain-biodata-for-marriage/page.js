import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

export const metadata = {
  title: "Jain Marriage Biodata — Format & Free Templates",
  description:
    "Jain marriage biodata guide — Jai Jinendra opening, Digambar vs Shvetambara, dietary fields, Paryushan timing, and community-specific biodata formats. Free PDF download.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/jain-biodata-for-marriage",
  },
  openGraph: {
    title: "Jain Marriage Biodata — Format & Free Templates",
    description:
      "Jain marriage biodata guide — Jai Jinendra opening, Digambar vs Shvetambara, dietary fields explained. Free templates for all Jain communities.",
    url: "https://www.marriagebiodatahub.com/jain-biodata-for-marriage",
    type: "article",
    locale: "en_IN",
    siteName: "Marriage Biodata Hub",
    images: [
      {
        url: "https://www.marriagebiodatahub.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Jain Marriage Biodata — Marriage Biodata Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jain Marriage Biodata — Format & Free Templates",
    description:
      "Jain marriage biodata — Jai Jinendra opening, Digambar vs Shvetambara, dietary fields explained. Free templates.",
    images: ["https://www.marriagebiodatahub.com/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "What is a Jain marriage biodata?",
    a: "A Jain marriage biodata is a one-page matrimonial profile used by Jain families in the arranged marriage process. It opens with Jai Jinendra and includes three community-specific fields: Sect (Digambar or Shvetambara), Gotra (Jain gotra — different from Hindu gotras — passed through the father's side but traced to clan or business origin), and dietary observance level (strict Jain vegetarian, no root vegetables, no eating after sunset). Business family background and financial stability are given significant weight in the family details section. The overall structure follows the same format as any Indian marriage biodata — personal details, family background, education, career, About Me, partner preferences, and contact.",
  },
  {
    q: "What is the difference between Digambar and Shvetambara in a Jain biodata?",
    a: "Digambar and Shvetambara are the two main sects of Jainism. Digambar monks practice complete nudity as part of their ascetic path; lay Digambar Jains follow strict vegetarianism and religious observance. Shvetambara monks wear white robes; Shvetambara communities include several sub-sects including Sthanakvasi, Terapanthi, and Murtipujak. In matrimonial practice, most Jain families prefer same-sect matches — a Digambar family and a Shvetambara family have different temple traditions, religious texts, and some dietary practice differences. Write your sect honestly in the biodata.",
  },
  {
    q: "What dietary fields should I include in a Jain marriage biodata?",
    a: "Include your specific dietary observance level clearly. The options range from strict Jain vegetarian (no meat, no eggs, no root vegetables including onion, garlic, potatoes, carrots, beetroot), to Jain vegetarian (no meat, no eggs, avoids root vegetables but not strictly), to standard vegetarian (no meat, no eggs, includes onion and garlic). Some devout Jain families also do not eat after sunset. If you or your family observe this practice, mention it. Diet is one of the most important compatibility factors for Jain families — a strict observer marrying someone who is less observant creates genuine daily friction.",
  },
  {
    q: "What is Jain Gotra and how is it different from Hindu Gotra?",
    a: "Jain communities use a Gotra system structurally similar to the Hindu Gotra system — a patrilineal clan name that defines exogamy rules. Two people from the same Jain Gotra cannot marry. However, Jain Gotras are different from Hindu Gotras — they do not trace back to Vedic sages. Instead, they often derive from ancestral business, village of origin, or historical clan identity. Common Jain Gotras in Rajasthan and Gujarat include Bhandari, Choraria, Surana, Mehta, Shah, Doshi, and others. Ask your father or paternal grandparents for your Gotra — it is passed through the father's side, the same as in Hindu tradition.",
  },
  {
    q: "When is the best time to share a Jain marriage biodata?",
    a: "Jain families are most active in matrimonial matching before and after Paryushan (the 8–10 day period of intense religious observance, typically August–September). Wedding ceremonies are not held during Paryushan or the four months of Chaumasa. The most active Jain wedding season runs from November to February, and March to June. Biodata exchange begins 3–6 months before the intended wedding season. Akshaya Tritiya (Akha Teej, typically April–May) is an especially auspicious wedding day across Jain and Hindu communities — many weddings happen on this single day and families plan well in advance.",
  },
  {
    q: "Does a Jain marriage biodata include horoscope details?",
    a: "This depends on the family and community. Jain scripture and philosophy do not endorse astrology. However, many Jain families — particularly in Rajasthan and Gujarat — do include Rashi and Nakshatra in their biodata as a cultural practice. Whether to include horoscope fields is a personal and family decision. If your family checks these details before proceeding, include them. If your family does not prioritise horoscope matching, leave the section out. There is no religious requirement to include it in a Jain biodata.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Jain Marriage Biodata — Complete Format Guide for All Jain Communities",
    description:
      "Jain marriage biodata guide covering Jai Jinendra opening, Digambar and Shvetambara differences, dietary and lifestyle fields, Paryushan biodata exchange timing, and community-specific formats for Oswal, Shrimali, Porwal, Khandelwal, and Aggarwal Jain families.",
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
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/jain-biodata-for-marriage" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marriagebiodatahub.com" },
      { "@type": "ListItem", position: 2, name: "Jain Marriage Biodata", item: "https://www.marriagebiodatahub.com/jain-biodata-for-marriage" },
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

export default function JainBiodataForMarriage() {
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
            <span className="text-slate-300">Jain Marriage Biodata</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>9 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Jain Marriage Biodata — Complete Format Guide for All Jain Communities
          </h1>

          <AEOBlock>
            A Jain marriage biodata opens with Jai Jinendra and has three fields you won't find in any other Indian
            biodata: Sect (Digambar or Shvetambara), Jain Gotra (different from Hindu gotras — passed through the
            father's side but traced to clan or business origin, not to Vedic sages), and dietary observance level.
            That dietary field is the one most Jain families actually check first — because a strict
            Paryushan-observing family and a family that eats onion and garlic at home have incompatibilities that
            show up every single day, not just on occasion. The rest of the format is identical to any Indian marriage
            biodata: personal details, family background, education and career, About Me, partner preferences,
            contact. Business family background gets more weight in the family section than in most other communities
            — many Jain families are in trade and manufacturing, and what the family business does and how long it
            has operated are genuine compatibility signals.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">What makes a Jain marriage biodata different?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            There is a reason the Jain community is one of the most socially cohesive communities in India despite
            being a religious minority of roughly five million people. The matrimonial network is tight, intentional,
            and deeply embedded in community institutions — from the neighbourhood Jain samaj to the pan-India Jain
            Shwetambar Terapanthi Mahasabha, from the Jain Mahila Mandal in every Gujarati mohalla to the Paryushan
            gatherings in Mumbai's Malad, Ahmedabad's Ellis Bridge, and Rajasthan's Marwar region.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            A Jain biodata that comes without the right fields signals to a receiving family that the template
            wasn't made for them. Seeing Rashi and Nakshatra in a Jain biodata isn't wrong exactly — many families
            include them — but seeing no sect field, no dietary field, and no Gotra is a signal that whoever created
            this biodata treated Jain identity as an afterthought.
          </p>

          <div className="space-y-4 mb-8">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-white mb-3">Sect — Digambar or Shvetambara</h3>
              <p className="text-slate-300 leading-relaxed">
                This is the first filter for most Jain families. It is not merely a religious label — it determines
                which temples the family visits, which scripture they follow, which religious festivals they observe
                and how, and how strictly they interpret dietary rules. Many families will not proceed without a
                same-sect match.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-white mb-3">Dietary observance level</h3>
              <p className="text-slate-300 leading-relaxed">
                The most practically significant field in a Jain biodata. Jainism's principle of ahimsa (non-violence)
                extends to diet in ways that produce meaningful real-life differences between families at different
                observance levels. A couple where one person is strictly Jain vegetarian (no root vegetables, specific
                utensils, no eating after sunset) and the other is standard vegetarian faces daily friction that no
                amount of compatibility in other areas resolves. Write your actual observance level — not the most
                impressive version of it.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-white mb-3">Business family background</h3>
              <p className="text-slate-300 leading-relaxed">
                Jain families have historically dominated trading, diamond, textile, pharmaceutical, and manufacturing
                industries in India. What the family business does, since when, and in which city is relevant context
                that other communities don't give the same weight to. This isn't snobbery — it's recognising that
                business families have specific lifestyle patterns, work cultures, and social expectations that are
                genuine compatibility factors.
              </p>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-6">Jain-specific fields explained</h2>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Sect (Sampraday)</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong className="text-white">Digambar</strong> — One of the two main Jain sects. The name means
            "sky-clad" — fully initiated Digambar monks practice complete nudity as the ultimate renunciation of
            worldly attachment. Lay Digambar Jains are strictly vegetarian, observe all major Jain festivals, and
            typically have closer ties to traditional religious practices. Digambar communities are concentrated in
            Karnataka (particularly Shravanabelagola), Rajasthan, Madhya Pradesh, and Uttar Pradesh.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong className="text-white">Shvetambara</strong> — Literally "white-clad." Shvetambara monks wear
            white robes. The Shvetambara tradition has several sub-sects:
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { name: "Murtipujak", desc: "The largest Shvetambara sub-sect. Worships Jain Tirthankaras in temples with images and ritual. Dominant in Gujarat and Rajasthan." },
              { name: "Sthanakvasi", desc: "Does not worship images. Religious practice is conducted in Sthanakas (meeting halls). Strong presence in Rajasthan, Punjab, and Haryana." },
              { name: "Terapanthi", desc: "Founded by Acharya Bhikanji in 1760. Strong single-lineage ascetic order. Known for strict discipline. Significant presence in Rajasthan." },
            ].map((s) => (
              <div key={s.name} className="rounded-2xl border border-slate-700 bg-slate-900/40 p-5">
                <p className="font-bold text-white mb-2">{s.name}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-300 leading-relaxed mb-3">
            <strong className="text-white">What to write:</strong> Write your full sect identification:
            "Shvetambara — Murtipujak" or "Shvetambara — Sthanakvasi" or "Shvetambara — Terapanthi" or
            "Digambar." Do not write just "Jain" without sect.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Jain Gotra</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The Jain Gotra system works similarly to the Hindu Gotra system — it is a patrilineal clan lineage that
            defines who you can and cannot marry. Two people from the same Jain Gotra cannot marry. The Gotra is
            passed through the father's side.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            The difference from Hindu Gotra: Jain Gotras do not trace back to Vedic sages. They typically derive
            from one of three origins — the ancestral village or region, an ancestral business or occupation, or a
            historical clan identity.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Common Jain Gotras across communities:
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4 ml-2">
            <li><strong className="text-slate-200">Rajasthan (Oswal, Shrimali):</strong> Bhandari, Choraria, Surana, Singhvi, Mutha, Mehta, Kothari, Doshi, Gehlot, Lodha, Bachhawat</li>
            <li><strong className="text-slate-200">Gujarat (Oswal, Visa Oswal, Porwal, Shrimali):</strong> Shah, Mehta, Desai, Doshi, Sheth, Zaveri, Vora</li>
          </ul>
          <p className="text-slate-300 leading-relaxed mb-3">
            If you don't know your Jain Gotra, ask your father or paternal grandfather. Write "Gotra not known"
            if genuinely unknown rather than leaving it blank or guessing.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Dietary observance level</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Write exactly where your family stands. There are three meaningful levels and no judgment between them —
            but pretending to be at a stricter level than you actually are causes friction after the marriage.
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                name: "Strict Jain vegetarian (Pakkā Jain Āhār)",
                desc: "No meat, no fish, no eggs. No root vegetables — no onion, garlic, potatoes, carrots, beetroot, radish. No eating after sunset (Ratri Bhojan Tyag). No alcohol. Separate utensils for preparation. Additional restrictions apply during Paryushan.",
              },
              {
                name: "Jain vegetarian",
                desc: "No meat, no fish, no eggs, no alcohol. Avoids root vegetables in principle but may not maintain strict separation in practice. May eat after sunset.",
              },
              {
                name: "Standard vegetarian",
                desc: "No meat, no fish, no eggs. Includes onion and garlic. No specific time restriction on eating. If this is your reality, write this — not 'Jain vegetarian.'",
              },
            ].map((d) => (
              <div key={d.name} className="rounded-2xl border border-slate-700 bg-slate-900/40 p-5">
                <p className="font-bold text-white mb-2">{d.name}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Business family background</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            This field doesn't appear in most biodata templates. In Jain biodatas — especially for Oswal, Shrimali,
            Porwal, Aggarwal Jain, and Khandelwal Jain families from Rajasthan and Gujarat — what the family
            business does is as relevant as what the father's job title is.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            "Father: Textile business — wholesale, operating in Surat's Ring Road market for 30 years" tells a
            receiving family far more than "Father: Businessman."
          </p>
          <p className="text-slate-300 leading-relaxed mb-3">
            What to include: nature of the business (textile, diamond, pharma, retail, manufacturing), geographic
            base (Surat, Mumbai, Jaipur, Kolkata, Indore), approximate scale, and years in business. If the
            candidate is expected to join the family business, say so honestly in the About Me or partner preferences.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-6">Jain marriage biodata — full sample</h2>

          <pre className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 text-slate-300 text-xs leading-relaxed overflow-x-auto mb-8 whitespace-pre-wrap">{`Jai Jinendra 🙏

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MARRIAGE BIODATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PERSONAL DETAILS
────────────────
Name:               Priya Jain
Date of Birth:      08 November 1998
Place of Birth:     Jaipur, Rajasthan
Height:             5 ft 4 in
Blood Group:        B+
Religion:           Jain
Sect:               Shvetambara — Murtipujak
Gotra:              Bhandari Gotra
Caste / Community:  Oswal

DIETARY OBSERVANCE
──────────────────
Diet:               Strict Jain vegetarian
                    (No root vegetables, no eating after sunset)
Alcohol:            Never

EDUCATION & CAREER
──────────────────
Education:          B.Com (Hons), University of Rajasthan (2020)
                    CA — Final (pursuing)
Current Role:       Article Assistant, Maheshwari & Associates — Jaipur
Annual Income:      Will update after CA qualification

FAMILY DETAILS
──────────────
Father:             Shri Sanjay Jain — Diamond business, Jaipur and Surat
                    (Import-export, established 1992)
Mother:             Smt. Neeta Jain — Homemaker, active in Jain Mahila Mandal
Siblings:           One elder brother — married, joined father's business
Family Type:        Joint — three generations living together in Jaipur
Native City:        Jaipur, Rajasthan (roots in Marwar)

ABOUT ME
────────
I am a CA final year student in Jaipur, almost there. I grew up in a household
where Paryushan is the most important week of the year — eight days of stepping
back from everything and going inward — and it shapes how I think about most
things. Outside CA preparation, I read, do yoga, and help in the family's
accounts. I am looking for someone who is grounded, has a sense of what he
values, and whose family has similar religious practices. This is not a rigid
requirement — it is just the honest answer to the question of what I am
actually looking for.

PARTNER PREFERENCES
───────────────────
Looking for a Jain man (Shvetambara preferred, though open to discussion)
between 27 and 32 years. Educated and settled in career. Strict or Jain
vegetarian diet essential. Location: Jaipur or willing to settle here.
Caste: Oswal preferred but genuinely open within the Jain community.

CONTACT
───────
Contact Person:     Shri Sanjay Jain (Father)
Mobile:             [number]
WhatsApp:           Same
City:               Jaipur, Rajasthan`}</pre>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-6">Jain sub-communities — what to know for a biodata</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            India's Jain community is internally diverse. The biodata that works for an Oswal family in Rajasthan
            is not the same as the one that works for a Digambar family in Karnataka. Here's what to know
            by community.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                name: "Oswal",
                desc: "The largest Jain community. Predominantly Shvetambara Murtipujak. Geographic concentration in Rajasthan (Jodhpur, Jaisalmer, Barmer, Bikaner, Jaipur) with major business presence in Mumbai, Kolkata, Surat, and the Jain diaspora in East Africa and Europe. Mention Gotra, business background, and home city clearly. Dietary strictness is usually high — clarify specific level.",
              },
              {
                name: "Shrimali",
                desc: "A Shvetambara Jain community from the Shrimal region of historical Rajasthan. Significant presence in Rajasthan, Gujarat, and MP. Several sub-divisions including Visa Shrimali and Dasa Shrimali — these distinctions matter for some families' matrimonial matching.",
              },
              {
                name: "Porwal",
                desc: "Associated with the Porwal region. Present in Rajasthan, Gujarat, and Maharashtra. Both Digambar and Shvetambara sub-groups exist. The business community is active in textiles and gems.",
              },
              {
                name: "Khandelwal Jain",
                desc: "Present in Rajasthan, UP, and MP. Significant overlap with Hindu Khandelwal Vaishya community. Some Khandelwal Jain families also follow Hindu practices — worth stating honestly if relevant.",
              },
              {
                name: "Aggarwal Jain",
                desc: "Some Aggarwal families from Rajasthan and UP identify as Jain. They often follow both Jain and Hindu practices. 'Aggarwal Jain, follows both Jain and Vaishnava practices' is a legitimate thing to write.",
              },
              {
                name: "South Indian Jain (Digambar)",
                desc: "Karnataka (Shravanabelagola, Mudabidri, Karkal), Tamil Nadu, and Andhra Pradesh have significant Digambar Jain communities. Culturally distinct from North Indian Jain communities. The biodata should mention specific community and district.",
              },
            ].map((c) => (
              <div key={c.name} className="rounded-2xl border border-slate-700 bg-slate-900/40 p-5">
                <p className="font-bold text-white mb-2">{c.name}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Paryushan and Jain wedding seasons</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            If there is one religious calendar fact that shapes every Jain family's matrimonial planning, it is
            Paryushan.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Paryushan is the most important religious period in the Jain calendar — eight days (Shvetambara) or
            ten days (Digambar, called Das Lakshana Parva) of intense religious observance, fasting, confession,
            and spiritual retreat. It typically falls in August–September. During Paryushan, no Jain family
            celebrates a wedding or holds social ceremonies. The focus is entirely inward.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            What this means for biodata exchange: Jain families become very active in matrimonial matching in the
            months before Paryushan (May–July) and in the months after (October onwards). The wedding season begins
            after Chaumasa — the four-month monsoon period when many traditional families reduce travel and social
            activity.
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-3 mb-8 ml-2">
            <li><strong className="text-slate-200">Akshaya Tritiya (Akha Teej) — April 2027 (approx.):</strong> The most auspicious single wedding day for Jain and Hindu families alike. In Rajasthan, thousands of weddings happen simultaneously. Jain families begin biodata exchange specifically for Akha Teej targets six to eight months in advance.</li>
            <li><strong className="text-slate-200">Paryushan 2026 — approximately August 17–24 (Shvetambara):</strong> No weddings. Biodata exchange continues but meetings and family visits are reduced.</li>
            <li><strong className="text-slate-200">Peak wedding months 2026–27:</strong> November 2026, December 2026, February 2027, March 2027, April 2027 leading to Akha Teej.</li>
          </ul>

          {/* CTA Block */}
          <div className="rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-500/10 to-rose-500/10 p-8 mb-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to create your Jain marriage biodata?</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Our form includes Sect, Gotra, and dietary observance fields specifically for Jain families.
              Jai Jinendra opening. No login. Free PDF. Download and share via WhatsApp in minutes.
            </p>
            <Link
              href="/#biodata-form-wrapper"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_24px_rgba(244,63,94,0.25)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(244,63,94,0.4)]"
            >
              Create My Jain Biodata — Free
            </Link>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Frequently Asked Questions</h2>
          <SectionFAQ items={faqs} />

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Related guides</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { href: "/marriage-biodata-format", label: "Complete biodata format guide" },
              { href: "/what-is-marriage-biodata", label: "What is a marriage biodata?" },
              { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
              { href: "/muslim-biodata-for-marriage", label: "Muslim Rishta biodata" },
              { href: "/sikh-biodata-for-marriage", label: "Sikh marriage biodata" },
              { href: "/christian-biodata-for-marriage", label: "Christian marriage biodata" },
              { href: "/nri-biodata-for-marriage", label: "NRI marriage biodata" },
              { href: "/about-me-for-marriage-biodata", label: "About Me examples" },
              { href: "/templates", label: "Browse templates" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-brand-500/50 hover:text-brand-300"
              >
                {label} →
              </Link>
            ))}
          </div>

        </main>
        <Footer />
      </div>
    </>
  );
}
