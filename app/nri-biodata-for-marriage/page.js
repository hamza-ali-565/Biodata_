import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "NRI Marriage Biodata — Format for Indians Abroad",
  description:
    "NRI marriage biodata guide — visa status, country of residence, dual currency income fields explained. For Indians in UK, Canada, USA, UAE, Australia, Singapore. Free PDF.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/nri-biodata-for-marriage",
  },
  openGraph: {
    title: "NRI Marriage Biodata — Format for Indians Abroad",
    description:
      "NRI marriage biodata — visa status, country of residence, income fields. For Indians in UK, Canada, USA, UAE, Australia, Singapore. Free PDF.",
    url: "https://www.marriagebiodatahub.com/nri-biodata-for-marriage",
    type: "article",
    locale: "en_IN",
    siteName: "Marriage Biodata Hub",
    images: [
      {
        url: "https://www.marriagebiodatahub.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "NRI Marriage Biodata — Marriage Biodata Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NRI Marriage Biodata — Format for Indians Abroad",
    description:
      "NRI marriage biodata — visa, country, income fields. For Indians in UK, Canada, USA, UAE, Australia. Free PDF.",
    images: ["https://www.marriagebiodatahub.com/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "What is an NRI marriage biodata?",
    a: "An NRI marriage biodata is a marriage biodata created by or for an Indian national living outside India — Non-Resident Indian. It follows the same structure as any Indian marriage biodata (personal details, family background, education, career, About Me, partner preferences, contact) but adds four fields that are essential for NRI candidates: Country of Residence, Visa or Immigration Status (Work Visa / PR / Citizen), Open to (Settling Abroad / Returning to India / Flexible), and Income stated in both foreign currency and INR equivalent. These four fields answer the first practical questions that the Indian family receiving the biodata will have.",
  },
  {
    q: "Should I mention visa status in my NRI marriage biodata?",
    a: "Yes — always. Visa or immigration status is the most practically important NRI-specific field. Whether you are on a temporary Work Visa (H1B, Tier 2), a Permanent Resident (Green Card, ILR, PR), or a full Citizen tells the receiving family two things: how stable your current life abroad is, and what kind of future planning is realistic. Write your current status honestly and accurately.",
  },
  {
    q: "Should I include income in my NRI biodata, and in which currency?",
    a: "Yes, include income — and state it in both foreign currency and the INR equivalent. Write it as a range: 'CA$90,000–110,000 per year (approx. ₹55–68 LPA).' The Indian family receiving the biodata will think in rupees; the NRI candidate lives in the foreign currency. Both numbers together give the most honest and complete picture.",
  },
  {
    q: "What does 'Open to' mean in an NRI marriage biodata?",
    a: "The 'Open to' field answers the question that every Indian family asks when they receive an NRI's biodata: is this person going to stay abroad, come back to India, or is it negotiable? Write one of three options honestly: 'Settling Abroad,' 'Returning to India' (with a rough timeframe), or 'Flexible.' Do not write 'Flexible' if you are actually not open to discussion — it sets up a conversation that goes nowhere.",
  },
  {
    q: "Can I use the same biodata format for NRI and India-based matches?",
    a: "Not ideally. The standard Indian marriage biodata format does not have fields for country of residence, visa status, or foreign currency income — the three things that matter most for an NRI match. Create a dedicated NRI version of your biodata with the four additional fields and use it for all sharing, whether with families in India or with NRI families abroad.",
  },
  {
    q: "How is an NRI marriage biodata different for UK, Canada, USA, and UAE candidates?",
    a: "The structure is the same across all four countries, but the specific field values differ meaningfully. UK candidates should specify ILR vs British Citizen vs Tier 2 Work Visa. Canada candidates should specify PR vs Canadian Citizen vs Work Permit. USA candidates should specify H1B / Green Card stage / US Citizen. UAE candidates should specify Residency Visa vs Golden Visa — UAE residency is tied to employment unless you hold a Golden Visa, which changes the stability assessment significantly.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "NRI Marriage Biodata — Complete Format Guide for Indians Living Abroad",
    description:
      "NRI marriage biodata guide covering visa and immigration status, country of residence, dual currency income display, open to returning to India field, and community-specific NRI biodata formats for Punjabi, Gujarati, South Indian, and Muslim NRI families in UK, Canada, USA, UAE, Australia, and Singapore.",
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
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/nri-biodata-for-marriage" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marriagebiodatahub.com" },
      { "@type": "ListItem", position: 2, name: "NRI Marriage Biodata", item: "https://www.marriagebiodatahub.com/nri-biodata-for-marriage" },
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

export default function NriBiodataForMarriage() {
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
            <span className="text-slate-300">NRI Marriage Biodata</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>10 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            NRI Marriage Biodata — Complete Format Guide for Indians Living Abroad
          </h1>

          <AEOBlock>
            An NRI marriage biodata has the same six sections as any Indian marriage biodata — personal details,
            family background, education, career, About Me, partner preferences, contact — with four additional
            fields that no standard template includes but every NRI candidate needs: Country of Residence, Visa or
            Immigration Status, Open to (Settling Abroad / Returning to India / Flexible), and Income stated in
            both foreign currency and INR equivalent. These four fields answer the first four practical questions
            that the Indian family receiving the biodata will ask before anything else. Without them, the family
            has to ask follow-up questions for basic information — which slows down the process and sometimes reads
            as evasive. An NRI biodata is also the only biodata format that needs to work equally well for two
            different audiences simultaneously: the uncle in Ahmedabad or Jalandhar who wants to see Gotra and
            native village, and the receiving family abroad who may be evaluating this against professional
            standards from their adopted country.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">The real challenge of NRI biodata — two audiences, one document</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            This is a problem no other biodata format has to solve.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            When a family in Bengaluru's Indiranagar sends a biodata to another family in Bengaluru's Koramangala,
            both families have the same reference points. They know what 8 LPA means. They know what "joint family
            in Malleswaram" means. They know what CSE from MSRIT means locally.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            An NRI candidate's biodata goes to an uncle in Ludhiana who wants to see the native village and the
            Gurudwara affiliation, AND to a cousin in Brampton who is evaluating it against the kinds of profiles
            they see on Canadian matrimonial platforms. The document has to satisfy both. Most standard biodata
            templates serve neither well — they assume India-only context and omit the NRI-specific fields, or
            they're so generic that they give no useful cultural context to the India-based family.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { name: "Country of Residence", desc: "Stated prominently in the header area, not buried in the contact section." },
              { name: "Visa / Immigration Status", desc: "One of the three most important pieces of practical information for any family making a match assessment across geographies." },
              { name: "Open to", desc: "The single most important sentence in an NRI biodata. Every family reading it wants to know whether they are being asked to consider relocating their daughter or son to another country. State this honestly and specifically, not vaguely." },
              { name: "Income in dual currency", desc: "The Indian family thinks in rupees. The NRI lives in pounds, dollars, or dirhams. Give both numbers so nobody has to estimate. State it as a range — exact figures create unnecessary focus on a single number." },
            ].map((f) => (
              <div key={f.name} className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
                <h3 className="text-lg font-bold text-white mb-2">{f.name}</h3>
                <p className="text-slate-300 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-6">The four NRI-specific fields — what to write and why it matters</h2>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Country of Residence</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Write the country where you currently live and work. This goes in the personal details section, near
            the top — not in the contact section at the bottom.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            If you have been in the country less than a year, mention how long: "Based in Toronto, Canada — 8 months."
            If you have been there more than five years and consider it your settled base, say that too: "Based in
            London, UK — settled there since 2017."
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            For diaspora candidates who grew up abroad (second-generation): "Born and raised in Southall, UK —
            family originally from Jalandhar, Punjab." Both the country identity and the Indian family origin
            are relevant.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Visa / Immigration Status</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The most practically significant NRI-specific field. Be specific:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                name: "United Kingdom",
                items: [
                  "Tier 2 / Skilled Worker Visa: Temporary. Tied to employer.",
                  "ILR (Indefinite Leave to Remain): Permanent residency. 'ILR holder since [year].'",
                  "British Citizen: 'British Citizen (naturalised [year])' or 'British Citizen (by birth/descent).'",
                ],
              },
              {
                name: "Canada",
                items: [
                  "Work Permit: Temporary. Mention type (LMIA, intra-company, post-study).",
                  "PR (Permanent Resident): Stable but not citizenship. 'Canadian PR since [year].'",
                  "Canadian Citizen: 'Canadian Citizen.'",
                ],
              },
              {
                name: "USA",
                items: [
                  "H1B: Employer-sponsored, temporary. Mention sponsoring company category.",
                  "L1 (Intracompany Transfer): 'L1 visa, [company name].'",
                  "Green Card: 'Green Card holder since [year]' or specify stage accurately.",
                  "US Citizen: 'US Citizen.'",
                ],
              },
              {
                name: "UAE",
                items: [
                  "Employment / Residency Visa: Standard UAE residency tied to employer. If job changes, visa changes — 30–90 days to find new sponsorship.",
                  "UAE Golden Visa: 5 or 10-year residency not tied to employer. State explicitly: 'UAE Golden Visa holder.'",
                ],
              },
            ].map((c) => (
              <div key={c.name} className="rounded-2xl border border-slate-700 bg-slate-900/40 p-5">
                <p className="font-bold text-white mb-3">{c.name}</p>
                <ul className="space-y-2">
                  {c.items.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                      <span className="text-brand-400 mt-0.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Open to (Settling Abroad / Returning to India / Flexible)</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            This is the most uncomfortable field to write honestly, and it is the most important one.
          </p>

          <div className="space-y-4 mb-6">
            {[
              {
                name: '"Settling Abroad"',
                desc: "You plan to continue your life in your current country. Add a specific line in partner preferences: 'Looking for a match who is open to settling in [city, country] or who is already abroad.' Write this only if you mean it.",
              },
              {
                name: '"Returning to India"',
                desc: "You plan to move back. Give a timeframe if possible: 'Planning to return to India within 2–3 years' or 'Return timeline flexible, targeting Bengaluru or Mumbai.' Without a timeframe, this sounds like a vague intention.",
              },
              {
                name: '"Flexible"',
                desc: "Genuinely open to both. Only write this if you mean it. If you would actually not be comfortable with your partner joining you abroad, or with returning to India, one of the other two options is more honest.",
              },
            ].map((o) => (
              <div key={o.name} className="rounded-2xl border border-slate-700 bg-slate-900/40 p-5">
                <p className="font-bold text-white mb-2">{o.name}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Income — stated in dual currency</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Format: <span className="text-slate-200 font-medium">[Foreign amount] per year (approx. ₹[INR equivalent] LPA)</span>
          </p>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 mb-6">
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-4">2026 approximate examples</p>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex gap-3"><span className="text-slate-500 w-20 shrink-0">UK</span><span>£55,000–65,000 per year (approx. ₹58–69 LPA)</span></div>
              <div className="flex gap-3"><span className="text-slate-500 w-20 shrink-0">Canada</span><span>CA$90,000–110,000 per year (approx. ₹55–68 LPA)</span></div>
              <div className="flex gap-3"><span className="text-slate-500 w-20 shrink-0">USA</span><span>$95,000–115,000 per year (approx. ₹79–96 LPA)</span></div>
              <div className="flex gap-3"><span className="text-slate-500 w-20 shrink-0">UAE</span><span>AED 15,000–20,000 per month (approx. ₹35–46 LPA) — state monthly AND annually AND in INR</span></div>
              <div className="flex gap-3"><span className="text-slate-500 w-20 shrink-0">Australia</span><span>AU$90,000–110,000 per year (approx. ₹47–57 LPA)</span></div>
              <div className="flex gap-3"><span className="text-slate-500 w-20 shrink-0">Singapore</span><span>SGD 60,000–80,000 per year (approx. ₹38–51 LPA)</span></div>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed mb-8">
            State a range, not an exact figure. Exact figures invite negotiation that doesn't belong in a biodata.
            Some NRI candidates add a cost-of-living note — "£65,000 in London — equivalent purchasing power to
            approx. ₹45–50 LPA in Delhi after adjusting for London's higher cost of living." Include it if your
            salary looks high in INR but is moderate in your city's cost of living context.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-6">NRI marriage biodata — full sample (Canada, Punjabi Hindu family)</h2>

          <pre className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 text-slate-300 text-xs leading-relaxed overflow-x-auto mb-8 whitespace-pre-wrap">{`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MARRIAGE BIODATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PERSONAL DETAILS
────────────────
Name:               Arjun Sharma
Date of Birth:      03 June 1994
Place of Birth:     Chandigarh, Punjab
Current Location:   Brampton, Ontario, Canada
Immigration Status: Canadian Permanent Resident (since 2021)
Open to:            Flexible — open to settling in Canada or returning to
                    Delhi / Chandigarh within 3–4 years
Height:             5 ft 10 in
Blood Group:        O+
Religion:           Hindu
Caste / Community:  Brahmin (Saraswat)
Gotra:              Kashyap
Rashi / Nakshatra:  Vrishchika / Anuradha
Manglik:            No

EDUCATION & CAREER
──────────────────
Education:          B.Tech, Computer Science — NSIT, Delhi (2016)
                    PG Diploma, Data Analytics — George Brown College, Toronto (2019)
Current Role:       Data Analyst, RBC (Royal Bank of Canada) — Toronto
Annual Income:      CA$88,000–100,000 (approx. ₹54–62 LPA)

FAMILY DETAILS
──────────────
Father:             Shri Rakesh Sharma — Retired, Punjab Government (SDO)
Mother:             Smt. Sunita Sharma — Homemaker
Siblings:           One younger sister — pursuing MBBS, Chandigarh
Family Type:        Nuclear — parents in Chandigarh, currently in Canada
Native Place:       Chandigarh (roots in Hoshiarpur district, Punjab)

ABOUT ME
────────
I moved to Toronto in 2018 after a couple of years working in Delhi's startup
scene. Canada worked out — I enjoy the work, I like the city, and I have a
decent life here. But "home" is still a Sunday morning phone call to Chandigarh
and a bowl of my mum's rajma chawal whenever I'm back. I visit India every
Diwali without fail. Outside work I follow cricket embarrassingly closely,
cook adequately, and have developed a strong opinion that Amritsar's kulcha is
genuinely the best argument for a return to India. I am looking for a partner
who has her own life, her own views, and is open to building something that
includes both here and there.

PARTNER PREFERENCES
───────────────────
Looking for an educated, working woman between 26 and 31. Hindu preferred
(Brahmin not a requirement — open within Hindu community). Based in Canada or
India and genuinely open to Canada. Should value family and have a warm,
grounded approach to life. Caste flexible — warmth and family values matter more.

CONTACT
───────
Contact Person:     Shri Rakesh Sharma (Father) — Chandigarh
Mobile (India):     [number]
WhatsApp (India):   Same
Son's WhatsApp:     [number] — Toronto, Canada
City:               Brampton, Canada / Chandigarh, India`}</pre>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-6">NRI biodata by country — what families expect</h2>

          <div className="space-y-6 mb-8">
            {[
              {
                name: "Indians in the United Kingdom",
                content: "The UK Indian diaspora is one of the oldest and most established in the world — families who came in the 1960s and 1970s are now in their third generation. The matrimonial culture in Southall, Leicester, Birmingham, and Wolverhampton is a complex blend of traditional community practice and British-Indian identity. Mention borough or city as well as country: 'London — East Ham / Wembley' or 'Leicester.' ILR vs Citizen distinction matters to India-based families. UK income should note whether pre-tax or post-tax: '£60,000 gross / approx. £44,000 net after UK tax and National Insurance.' If the candidate owns property in the UK, mention it: 'Own a two-bedroom flat in Harrow' signals settled life.",
              },
              {
                name: "Indians in Canada",
                content: "The Canadian Punjabi Sikh and Hindu community — particularly in Brampton, Surrey (Vancouver), and Mississauga — is one of the most active matrimonial markets in the world. Province matters: Ontario (Toronto/Brampton), British Columbia (Vancouver/Surrey), Alberta (Calgary) have different Indian community densities. PR vs Citizen vs Work Permit is critical — a Work Permit can lapse if the job ends; PR is stable. State city AND suburb: 'Toronto (Brampton)' or 'Vancouver (Surrey)' — these are where actual community life is.",
              },
              {
                name: "Indians in the USA",
                content: "The USA Indian diaspora has the highest income levels and educational qualifications of any Indian diaspora community. H1B concentration in California, New Jersey, Seattle, Chicago, and Houston creates distinct community clusters. H1B vs Green Card is the most asked-about status — an H1B holder has 60 days to find a new sponsor if laid off; a Green Card holder is fully stable. If Green Card is in process, be accurate about the stage. State: 'Bay Area (Fremont / Sunnyvale)' or 'New Jersey (Edison / Parsippany).' Employer health insurance and 401k matching is worth mentioning — it addresses healthcare concerns Indian families often have.",
              },
              {
                name: "Indians in the UAE",
                content: "The UAE Indian community is the largest Indian diaspora community in the world by population — over 3.5 million Indians in the UAE. UAE residency is tied to employment — a fundamental difference from Western PR/Citizen status. If you have a UAE Golden Visa, state it explicitly and explain what it means: 'UAE Golden Visa — long-term residency not tied to employer.' UAE is tax-free: 'AED 20,000 per month (approx. ₹45 LPA, all net income as UAE has no personal income tax)' helps Indian families understand actual take-home. Dubai vs Abu Dhabi vs Sharjah have different Indian community characters.",
              },
              {
                name: "Indians in Australia and Singapore",
                content: "Australia: Melbourne (Doncaster, Box Hill, Dandenong) and Sydney (Parramatta, Liverpool, Blacktown) are the main hubs. Australian PR and Citizenship are considered highly stable. Singapore: A professional hub with significant Indian expatriate community in financial services and tech. Singapore's EP (Employment Pass) and S Pass are employer-tied; PR is stable but competitive to obtain. Singapore income is high but cost of living is also high — state this context.",
              },
            ].map((country) => (
              <div key={country.name} className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
                <h3 className="text-lg font-bold text-white mb-3">{country.name}</h3>
                <p className="text-slate-300 leading-relaxed text-sm">{country.content}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Common mistakes in NRI biodatas</h2>

          <div className="space-y-4 mb-8">
            {[
              {
                title: "Using a standard Indian template without NRI-specific fields",
                desc: "A biodata that says 'Occupation: Software Engineer' and 'Location: Seattle, USA' without visa status, open to returning, or income in dual currency forces the receiving family to ask follow-up questions before they can assess basic compatibility.",
              },
              {
                title: 'Writing "Flexible" when you are actually not flexible',
                desc: "If you have Permanent Residency in Canada and have built your life in Brampton over seven years and genuinely won't move back to India, write 'Settling abroad — Brampton, Canada.' Families who are open to that will respond. Ones who are not will filter out early.",
              },
              {
                title: "Overstating income without the local context",
                desc: "£80,000 in London after UK taxes and London rent is a genuinely different quality of life than ₹80 LPA in Bangalore after Bangalore rent. If your foreign salary looks high in INR but is moderate in your city's cost of living, add a brief context note.",
              },
              {
                title: "Not mentioning the India connection",
                desc: "NRI biodatas that focus entirely on life abroad can leave the India-based family feeling like the person has mentally left India entirely. Whether it's visiting home every Diwali, calling parents daily, or planning to return eventually — name it.",
              },
              {
                title: "One biodata for both audiences",
                desc: "A family in London evaluating this biodata has different reference points than a family in Lucknow. Consider having a slightly adjusted About Me section for each context — same facts, different emphasis. Contextually appropriate, not dishonest.",
              },
            ].map((m, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-brand-400 font-bold text-lg shrink-0 mt-0.5">{i + 1}.</span>
                <div>
                  <p className="font-semibold text-white mb-1">{m.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Block */}
          <div className="rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-500/10 to-rose-500/10 p-8 mb-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to create your NRI marriage biodata?</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Our tool includes Country of Residence, Visa Status, and income fields specifically for NRI candidates.
              Fill in your details from wherever you are, download your PDF, and share with families in India and
              abroad in one click. No login. No watermark.
            </p>
            <SmartLink href="/#biodata-form-wrapper"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_24px_rgba(244,63,94,0.25)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(244,63,94,0.4)]"
            >
              Create My NRI Biodata — Free
            </SmartLink>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Frequently Asked Questions</h2>
          <SectionFAQ items={faqs} />

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Related guides</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { href: "/marriage-biodata-format", label: "Complete biodata format guide" },
              { href: "/what-is-marriage-biodata", label: "What is a marriage biodata?" },
              { href: "/sikh-biodata-for-marriage", label: "Sikh marriage biodata" },
              { href: "/christian-biodata-for-marriage", label: "Christian marriage biodata" },
              { href: "/jain-biodata-for-marriage", label: "Jain marriage biodata" },
              { href: "/blog/marriage-biodata-for-girl", label: "Marriage biodata for girl" },
              { href: "/blog/how-to-write-about-me-in-marriage-biodata", label: "How to write About Me" },
              { href: "/about-me-for-marriage-biodata", label: "About Me examples" },
              { href: "/biodata-samples", label: "See real NRI biodata samples" },
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
