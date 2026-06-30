import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

export const metadata = {
  title: "Sikh Marriage Biodata — Format & Free Templates",
  description:
    "Sikh marriage biodata guide — Ik Onkar opening, Gurudwara, Amritdhari status, and native village fields explained. Free templates for Punjabi families in India and abroad.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/sikh-biodata-for-marriage",
  },
  openGraph: {
    title: "Sikh Marriage Biodata — Format & Free Templates",
    description:
      "Sikh marriage biodata guide — Ik Onkar opening, Gurudwara, Amritdhari status, and native village fields explained. Free templates for Punjabi families in India and abroad.",
    url: "https://www.marriagebiodatahub.com/sikh-biodata-for-marriage",
    type: "article",
    locale: "en_IN",
    siteName: "Marriage Biodata Hub",
    images: [
      {
        url: "https://www.marriagebiodatahub.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Sikh Marriage Biodata — Marriage Biodata Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sikh Marriage Biodata — Format & Free Templates",
    description:
      "Sikh marriage biodata guide — Ik Onkar opening, Gurudwara, Amritdhari status explained. Free templates for Punjabi families.",
    images: ["https://www.marriagebiodatahub.com/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "What is a Sikh marriage biodata?",
    a: "A Sikh marriage biodata is a one-page matrimonial profile used by Punjabi Sikh families in the arranged marriage process. It opens with the Ik Onkar symbol (ੴ) and the Sikh greeting Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh. Unlike Hindu biodatas, it does not include Rashi, Nakshatra, or Manglik status. Instead, it includes the candidate's Gurudwara name, Amritdhari status (whether the person has taken Amrit, i.e., been baptised into the Khalsa), and native village in Punjab. It is typically shared via WhatsApp with relatives, through Gurudwara community networks, or via matrimonial sites.",
  },
  {
    q: "Does a Sikh marriage biodata include horoscope details?",
    a: "No. Horoscope fields — Rashi, Nakshatra, Gotra, Nadi, Gan, and Manglik status — are specific to Hindu biodatas and rooted in Vedic astrology. Sikh teaching does not endorse astrology or caste-based discrimination. A Sikh marriage biodata does not include these fields. If a family asks for horoscope details, it is a personal family preference, not a Sikh religious requirement. Include them only if your family specifically wants to.",
  },
  {
    q: "What is Amritdhari status in a Sikh biodata?",
    a: "Amritdhari refers to a Sikh who has undergone the Amrit Sanchar ceremony — the Khalsa initiation in Sikhism. An Amritdhari Sikh follows the Rehat Maryada (Sikh code of conduct), including maintaining five Kakars (Kesh, Kara, Kachera, Kirpan, Kangha). Keshdhari refers to a Sikh who keeps unshorn hair but has not taken Amrit. Sahajdhari refers to a Sikh who follows the faith without keeping unshorn hair. For many Amritdhari families, marrying within the same observance level is an important compatibility factor.",
  },
  {
    q: "What sub-communities should I mention in a Sikh biodata?",
    a: "Sikhism as a faith does not endorse the caste system. However, in practice, many Punjabi Sikh families mention their sub-community in the biodata, as it is part of their family and social identity. Common sub-communities include Jat Sikh (the largest farming community), Khatri (trading community — the community of the Sikh Gurus), Ramgarhia (artisan and craftsman community), Arora (trading community), Saini, Labana, and Ramdasia. Whether to include this depends on your family's preference. Many modern Sikh families write 'Caste no bar' or omit it entirely, which is consistent with Sikh principles.",
  },
  {
    q: "How does a Sikh marriage biodata look different from other Indian biodatas?",
    a: "Three things make a Sikh marriage biodata visually and structurally distinct: (1) It opens with the Ik Onkar symbol ੴ and a Sikh greeting — no religious image or Ganesh invocation. (2) It has no horoscope section — no Rashi, Nakshatra, Gotra, or Manglik fields. (3) It includes three community-specific fields that appear in no other Indian biodata: Gurudwara name, Amritdhari status, and native village in Punjab. The overall structure — personal details, family background, education, career, About Me, partner preferences, contact — is the same as any Indian marriage biodata.",
  },
  {
    q: "Should I include caste in a Sikh marriage biodata?",
    a: "This is a personal and family decision. Sikh scripture and the teachings of the Gurus are clear that caste distinctions have no spiritual validity. Many Sikh families — especially younger, urban, and diaspora families — write 'Caste no bar' in their biodata and mean it. Other families, particularly in rural Punjab and traditional households, still mention sub-community (Jat, Khatri, Ramgarhia, Arora) as part of their social identity. Both approaches are valid in practice. If caste matters to your family, include it honestly. If it doesn't, leave it out or write 'Caste no bar.'",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sikh Marriage Biodata — Complete Format Guide for Punjabi Families",
    description:
      "Sikh marriage biodata guide covering Ik Onkar opening, Gurudwara field, Amritdhari status, native village in Punjab, and community-specific differences for Jat Sikh, Khatri, Ramgarhia, and Arora families.",
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
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/sikh-biodata-for-marriage" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marriagebiodatahub.com" },
      { "@type": "ListItem", position: 2, name: "Sikh Marriage Biodata", item: "https://www.marriagebiodatahub.com/sikh-biodata-for-marriage" },
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

export default function SikhBiodataForMarriage() {
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
            <span className="text-slate-300">Sikh Marriage Biodata</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>9 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Sikh Marriage Biodata — Complete Format Guide for Punjabi Families
          </h1>

          <AEOBlock>
            A Sikh marriage biodata opens with the Ik Onkar symbol (ੴ) and the greeting Waheguru Ji Ka Khalsa,
            Waheguru Ji Ki Fateh — not with a religious image or Ganesh invocation. It does not include Rashi,
            Nakshatra, Gotra, Nadi, Gan, or Manglik status. These are Hindu fields rooted in Vedic astrology —
            they have no place in a Sikh matrimonial profile. A Sikh biodata has three community-specific fields
            instead: Gurudwara name, Amritdhari status (Amritdhari / Keshdhari / Sahajdhari), and native village
            in Punjab. Everything else — personal details, family background, education, career, About Me, partner
            preferences, and contact — follows the same structure as any Indian marriage biodata.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">What makes a Sikh marriage biodata different?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Most biodata templates treat a Sikh family the same as any Hindu family — they include Rashi, Nakshatra,
            and Manglik fields by default. If you are Sikh, these fields are not just irrelevant — they actively
            misrepresent who you are to the families receiving your biodata. A family in Chandigarh or Brampton who
            receives a biodata with Manglik status in it may reasonably wonder whether the biodata was made using a
            template designed for someone else.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            The three things that structurally separate a Sikh marriage biodata from a Hindu one:
          </p>

          <div className="space-y-4 mb-8">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-white mb-3">Opening invocation</h3>
              <p className="text-slate-300 leading-relaxed">
                A Sikh biodata opens with ੴ — the Ik Onkar, the opening symbol of the Guru Granth Sahib. This is not
                decorative. It is the same symbol that appears above the entrance to every Gurudwara, on every page of
                Sikh scripture, and on formal correspondence within the Sikh community. Below it, the greeting:
                Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh. This signals to the receiving family that you are a
                practising, culturally rooted Sikh — in the same way that Bismillah signals this for a Muslim family.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-white mb-3">No horoscope section</h3>
              <p className="text-slate-300 leading-relaxed">
                The absence of Rashi, Nakshatra, and Manglik is not an omission — it is a statement. Sikh teaching does
                not endorse astrology or kundali-based matchmaking. Including these fields in a Sikh biodata signals
                either that the template was not designed for Sikh families, or that the family is treating Sikh identity
                as secondary to pan-Indian matrimonial convention.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-white mb-3">Three community-specific fields</h3>
              <p className="text-slate-300 leading-relaxed">
                Gurudwara name, Amritdhari status, and native village in Punjab. These three fields tell the receiving
                family three things no generic biodata field captures: which Sikh institution the family is connected to,
                what level of religious observance the candidate maintains, and where the family's roots in Punjab are —
                information that carries real weight in Sikh matrimonial decision-making.
              </p>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Sikh-specific fields explained</h2>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 mb-5">
            <h3 className="text-lg font-bold text-white mb-3">Gurudwara Name</h3>
            <p className="text-slate-300 leading-relaxed mb-3">
              The Gurudwara the family regularly attends or is affiliated with. This is not asking for the nearest
              Gurudwara to the current address — it is asking which Gurudwara the family considers their home
              institution. For diaspora families in Southall, Brampton, or Fremont, this is the Gurudwara their parents
              helped build or have attended since arriving.
            </p>
            <p className="text-slate-300 leading-relaxed mb-3">
              What this tells the receiving family: how active the family is in the Sangat (congregation), how rooted
              they are in the community, and — for families in the same city — whether there is an existing community
              connection.
            </p>
            <div className="rounded-xl bg-brand-500/10 border border-brand-500/20 p-4 text-sm text-slate-300">
              <strong className="text-brand-300">What to write:</strong> "Gurudwara Guru Singh Sabha, Southall" or
              "Gurudwara Rakab Ganj Sahib, New Delhi." If the family does not regularly attend any Gurudwara, write
              "No specific affiliation" — do not leave it blank or invent an affiliation.
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 mb-5">
            <h3 className="text-lg font-bold text-white mb-3">Amritdhari Status</h3>
            <p className="text-slate-300 leading-relaxed mb-3">Three options. Write exactly one:</p>
            <div className="space-y-3">
              {[
                {
                  label: "Amritdhari",
                  desc: "The candidate has undergone Amrit Sanchar, the Khalsa initiation ceremony. They maintain all five Kakars (Kesh — unshorn hair; Kara — steel bracelet; Kachera — cotton undergarment; Kirpan — ceremonial sword; Kangha — wooden comb) and follow the Sikh Rehat Maryada. For many Amritdhari families, marrying another Amritdhari is a strong preference — not for social status, but for practical religious compatibility in daily life.",
                },
                {
                  label: "Keshdhari",
                  desc: "The candidate maintains unshorn hair (Kesh) and typically wears a dastar (turban) or chunni to cover the hair, but has not taken Amrit. They may follow many Sikh practices but are not bound by the full Rehat Maryada.",
                },
                {
                  label: "Sahajdhari",
                  desc: "The candidate follows the Sikh faith but does not maintain unshorn hair. The term literally means 'one who adopts gradually.' Many urban and diaspora Sikh families fall into this category. There is no social hierarchy between these categories — they represent different personal relationships with religious practice. If the candidate has trimmed hair (often called 'mona' in Punjabi social context), they are typically Sahajdhari.",
                },
              ].map(({ label, desc }) => (
                <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-4">
                  <p className="font-semibold text-white mb-1">{label}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 mb-5">
            <h3 className="text-lg font-bold text-white mb-3">Native Village in Punjab</h3>
            <p className="text-slate-300 leading-relaxed mb-3">
              "Pind" in Punjabi. The ancestral village in Punjab — where the family is originally from, regardless of
              where they live now.
            </p>
            <p className="text-slate-300 leading-relaxed mb-3">
              Why this matters: In Sikh matrimonial culture, the native village carries significant identity weight. A
              family from Ludhiana district, a family from Jalandhar, and a family from Bathinda all have distinct
              regional characters, dialects, and community networks. Families use this to establish common connections —
              "Oh, you're from Phagwara? Do you know the Singh family on the canal road?" The native village is how
              Sikh families map social geography.
            </p>
            <div className="rounded-xl bg-brand-500/10 border border-brand-500/20 p-4 text-sm text-slate-300">
              <strong className="text-brand-300">For diaspora families:</strong> Include both the Punjab origin AND the
              current country. "Family originally from Gurdaspur, settled in Brampton, Ontario since 1987." For families
              that have genuinely lost the village connection, write the district name: "Originally from Hoshiarpur
              district, now settled in Delhi for three generations."
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">What a Sikh biodata does NOT include — and why</h2>
          <div className="space-y-3 mb-6">
            {[
              {
                t: "Rashi, Nakshatra, Gotra, Nadi, Gan, Manglik",
                d: "These are Vedic astrology fields. Sikh scripture — particularly the Guru Granth Sahib and the writings of Guru Nanak Dev Ji — is explicit that astrology, superstition, and caste-based practices are inconsistent with Sikh teaching. Including these fields is not a minor aesthetic choice — it is a theological misrepresentation of who you are.",
              },
              {
                t: "Horoscope matching (Kundali Milan)",
                d: "No equivalent process exists in Sikh matrimonial tradition. The basis for Sikh marriage — the Anand Karaj ceremony — is the couple's commitment before the Guru Granth Sahib, not astrological compatibility. Families who ask for Kundali in a Sikh context are typically following pan-Indian convention out of social habit, not Sikh religious teaching.",
              },
              {
                t: "Caste (if family prefers not to include it)",
                d: "This is a personal choice. If you are committed to the Sikh principle that caste has no spiritual validity — which is what Sikh Gurus explicitly taught — write 'Caste no bar' or omit the field entirely. If you are a Jat Sikh family in a traditional community where sub-caste is social reality, include it honestly. Both are legitimate choices.",
              },
            ].map(({ t, d }, i) => (
              <div key={i} className="flex gap-4 rounded-xl bg-slate-900/60 border border-slate-800 p-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{t}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Sikh sub-communities — what to know for a marriage biodata</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Unlike Hindu varna and jati structure, Sikh sub-communities are primarily occupational in origin — they
            reflect what a family's ancestors did for work, not a spiritual hierarchy. However, in matrimonial practice,
            they still function as social identity markers in many families.
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                label: "Jat Sikh",
                desc: "The largest Sikh community, traditionally farmers and landowners. Dominant in rural Punjab (Ludhiana, Sangrur, Moga, Bathinda districts). Strong presence in diaspora communities in UK, Canada, USA. Sub-gotra divisions exist within Jat Sikh (Gill, Sandhu, Dhaliwal, Grewal, Sidhu, Randhawa) and some families check these.",
              },
              {
                label: "Khatri",
                desc: "The trading and merchant community from which the Sikh Gurus came. All ten Sikh Gurus were Khatri. A culturally prominent community, particularly in urban Punjab, Delhi, and Sindhi Khatri diaspora communities.",
              },
              {
                label: "Ramgarhia",
                desc: "Traditional artisan and skilled craftsman community. Highly skilled in construction and engineering. Large, organised communities in East Africa diaspora (Kenya, Uganda, Tanzania) and in the UK (particularly Birmingham, Wolverhampton). Strong community institutions and Gurudwaras.",
              },
              {
                label: "Arora",
                desc: "Trading community, historically associated with western Punjab regions now in Pakistan. Large presence in Delhi, urban Punjab, and diaspora.",
              },
              {
                label: "Saini",
                desc: "Horticulturalist and market gardening community from Punjab.",
              },
              {
                label: "Ramdasia / Chamar",
                desc: "Historically associated with leather work. Many members are Amritdhari Sikh with strong religious observance. Active Gurudwara institutions. Face historical caste prejudice that Sikh teaching explicitly condemns but that persists socially.",
              },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-brand-500/10 border border-brand-500/20 p-4 text-sm text-slate-300 mb-8">
            <strong className="text-brand-300">For the biodata:</strong> Write your sub-community if your family uses
            it in matrimonial context. Write "Caste no bar" if that is the family's genuine position. Do not write one
            thing in the biodata and look for something different in practice — it wastes everyone's time and damages
            trust before a conversation has started.
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Sikh marriage biodata — full sample</h2>
          <pre className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 text-slate-300 text-xs leading-relaxed overflow-x-auto mb-8 whitespace-pre-wrap">
{`ੴ
Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh

─────────────────────────────────────────
MARRIAGE BIODATA
─────────────────────────────────────────

PERSONAL DETAILS
────────────────
Name:               Harpreet Singh Gill
Date of Birth:      14 March 1997
Place of Birth:     Ludhiana, Punjab
Height:             5 ft 11 in
Blood Group:        O+
Religion:           Sikh
Sub-community:      Jat Sikh
Amritdhari Status:  Keshdhari
Gurudwara:          Gurudwara Sri Guru Singh Sabha, Ludhiana
Native Village:     Raikot, Ludhiana district

EDUCATION & CAREER
──────────────────
Education:          B.Tech, Mechanical Engineering — PTU, Jalandhar (2019)
Current Role:       Engineer, Larsen & Toubro — Pune
Annual Income:      8–10 LPA

FAMILY DETAILS
──────────────
Father:             S. Gurpreet Singh Gill — Retired, Punjab Police (DSP)
Mother:             Smt. Manjit Kaur — Homemaker
Siblings:           One elder sister — married, settled in Chandigarh
Family Type:        Nuclear — parents in Ludhiana, currently working in Pune
Native Village:     Raikot, Ludhiana district

ABOUT ME
────────
I am a mechanical engineer working in Pune, five years into my career and
settled in the work I do. I come from a disciplined, Gurudwara-going family
in Ludhiana — Sunday langar is not optional in our household. I am Keshdhari,
and faith is a quiet but important part of my daily life. On weekends I play
cricket, call home every morning, and am learning to cook dal makhani at a
level my mother won't be embarrassed by. I am looking for a grounded,
family-oriented partner who values her own identity and is comfortable with
a life that includes both Pune and regular trips to Punjab.

PARTNER PREFERENCES
───────────────────
Looking for an educated, Sikh woman between 25 and 30 years of age, settled
in her career or education, and from a family with similar values. Sub-
community: open. Location: open to Pune or Punjab. Amritdhari status:
Keshdhari or Sahajdhari preferred, though open to discussing.

CONTACT
───────
Contact Person:     S. Gurpreet Singh Gill (Father)
Mobile:             [number]
WhatsApp:           Same
City:               Ludhiana, Punjab`}
          </pre>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Punjab vs Delhi vs diaspora — how Sikh biodatas differ by location</h2>

          <div className="space-y-4 mb-8">
            {[
              {
                label: "Families based in Punjab (Ludhiana, Amritsar, Jalandhar, Patiala, Bathinda)",
                desc: "Punjab-based Sikh families tend to have the most traditionally structured biodatas. Native village, Gurudwara affiliation, and sub-community (Jat, Khatri, Ramgarhia) are all expected. The biodata circulates through family networks, village connections, local Gurudwara notice boards, and Punjabi matrimonial newspaper inserts. WhatsApp has replaced the physical copy in most cases, but the format is the same. Income is typically stated. Property and agricultural land are sometimes mentioned in family details if significant.",
              },
              {
                label: "Families based in Delhi",
                desc: "Delhi Sikh families are more cosmopolitan in biodata style. Sub-community is mentioned but less decisive than in rural Punjab. English-language biodata is standard. Gurudwara affiliation still expected. The emphasis shifts toward education and career. Notable Gurudwaras in Delhi families mention: Gurudwara Bangla Sahib (Connaught Place), Gurudwara Rakab Ganj Sahib, Gurudwara Sisganj Sahib.",
              },
              {
                label: "UK diaspora (Southall, Leicester, Wolverhampton, Birmingham)",
                desc: "The Sikh diaspora in the UK is large, tightly community-networked, and has developed its own matrimonial conventions. Gurudwara affiliation is critical — many Gurudwaras in the UK have active matrimonial notice boards and sewa-based matchmaking. Sub-community matters (Ramgarhia Gurudwaras and Jat Sikh Gurudwaras are separate institutions in many UK cities). The biodata often includes UK visa/citizenship status and whether the family is open to matches in India or only UK-based.",
              },
              {
                label: "Canada diaspora (Brampton, Surrey, Vancouver)",
                desc: "The Brampton and Surrey Sikh communities are among the most active diaspora matrimonial markets in the world. NRI-specific fields become important: PR/Citizen status, whether open to candidates from India, income in CAD. Sub-community networks are active — Jat Sikh, Ramgarhia, and Khatri families often circulate within their own networks first.",
              },
              {
                label: "USA diaspora (Fremont, Yuba City, New Jersey)",
                desc: "Similar to Canada diaspora pattern with H1B/Green Card/Citizen status added. For all diaspora biodatas, add: Country of Residence, Immigration Status (PR / Citizen / Work Visa / Student Visa), and Open to: Settling Abroad / Returning to India / Flexible.",
              },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Ready to create your Sikh marriage biodata?</p>
            <p className="text-slate-400 text-sm mb-5">
              Our templates open with Ik Onkar, include Gurudwara and Amritdhari fields, and leave out the horoscope
              section that doesn't belong in a Sikh biodata. No login. Free PDF download.
            </p>
            <Link
              href="/#biodata-form-wrapper"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105"
            >
              Create My Sikh Biodata — Free →
            </Link>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Sikh wedding seasons and biodata timing</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Unlike Hindu families who follow the Panchang for auspicious dates, Sikh weddings are not restricted by the
            lunar calendar. The Anand Karaj ceremony can take place on any day. However, Sikh families in India do
            observe the general Indian wedding season pattern — partly out of practical reasons (venues, family travel)
            and partly from cultural convergence with the broader North Indian wedding calendar.
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                label: "November to February — peak season",
                desc: "Peak Indian wedding season. Gurudwara halls are booked months in advance. Families in Punjab and Delhi exchange biodatas from August onwards for November-February ceremonies.",
              },
              {
                label: "Baisakhi (April 14) — especially auspicious",
                desc: "Marks the founding of the Khalsa and is considered an especially auspicious day for Anand Karaj. Many Sikh families specifically seek April ceremonies.",
              },
              {
                label: "Gurpurabs — community gathering occasions",
                desc: "Guru's birthdays and martyrdom anniversaries are not typically wedding days, but large community gatherings where families make connections and biodata exchange happens informally.",
              },
              {
                label: "No religious restrictions on any month or day",
                desc: "There is no Sikh equivalent of Chaturmas or Pitru Paksha. Families plan around the school calendar, agricultural season in Punjab, and diaspora travel schedules rather than religious calendar restrictions.",
              },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-4 flex gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-400 mt-2"></span>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{label}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-2">Frequently asked questions</h2>
          <SectionFAQ items={faqs} />

          <div className="mt-14 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-4">Related guides</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/marriage-biodata-format", label: "Complete biodata format guide" },
                { href: "/what-is-marriage-biodata", label: "What is a marriage biodata?" },
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
