import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

export const metadata = {
  title: "Lagnacha Biodata Format | लग्नाचा बायोडाटा — Free Marathi Marriage Biodata Maker | Marriage Biodata Hub",
  description:
    "लग्नाचा बायोडाटा format guide for Marathi families. Includes Kul, Kulswamini, Gotra fields. Free PDF download. For Maratha, Brahmin, CKP, Mali, and all Marathi communities.",
  alternates: {
    canonical: "/marathi-biodata-for-marriage",
  },
  openGraph: {
    title: "Lagnacha Biodata Format | लग्नाचा बायोडाटा — Free Marathi Marriage Biodata Maker",
    description:
      "Lagnacha biodata format for Marathi families. Kul, Kulswamini, Gotra fields. Free PDF. All Marathi communities.",
    url: "/marathi-biodata-for-marriage",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "mr_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagnacha Biodata Format — Marathi Marriage Biodata Maker",
    description: "Lagnacha biodata for Marathi families. Kul, Kulswamini, Gotra fields. Free PDF.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "लग्नाचा बायोडाटा मध्ये काय असतं? (What is in a Lagnacha Biodata?)",
    a: "A lagnacha biodata (लग्नाचा बायोडाटा) includes personal details, horoscope section (Gotra, Rashi, Nakshatra, Manglik), Kul, Kulswamini, Mulchi Gavi (native village), family background, education and career, About Me section, and partner preferences. The Kul and Kulswamini fields are specific to Marathi biodatas.",
  },
  {
    q: "Kul aani Kulswamini kaay aahey? (What is Kul and Kulswamini?)",
    a: "Kul (कुळ) is your ancestral clan or sub-lineage. Kulswamini (कुलस्वामिनी) is the family goddess associated with your Kul. Different Kuls worship different goddesses — for example, Jadhav Kul worships Tuljabhavani, Bhonsle Kul worships Bhavani. Many Marathi families consider visiting the Kulswamini temple an important part of the wedding ceremony.",
  },
  {
    q: "Lagnacha biodata Word format madhye download karata yeil ka? (Can I download Lagnacha Biodata in Word format?)",
    a: "Yes. Our tool lets you download your completed biodata as PDF (recommended for WhatsApp sharing) or Word (.docx) format. For Marathi families, PDF is recommended — it opens identically on all phones, which is important when sharing on WhatsApp.",
  },
  {
    q: "Lagnacha biodata kiti paananche asave? (How many pages should a Lagnacha Biodata be?)",
    a: "One page. Always. Marathi families review multiple biodatas before deciding to meet — a two-page biodata signals poor organisation. All details — personal, family, education, horoscope, and contact — should fit on a single A4 page.",
  },
  {
    q: "Marathi biodata madhe photo ghyavyaas havi ka? (Is photo required in Marathi biodata?)",
    a: "Yes. A biodata with a photo gets significantly more responses. Use a recent photo (within 6 months), with a simple background, clear face, and natural expression. Avoid heavily filtered or group photos.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Lagnacha Biodata — Complete Format Guide for Marathi Families",
    description: "Complete lagnacha biodata format guide for Marathi families with Kul, Kulswamini, and Gotra fields explained.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    author: { "@type": "Organization", name: "Marriage Biodata Hub" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      logo: { "@type": "ImageObject", url: "https://marriagebiodatahub.com/icon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://marriagebiodatahub.com/marathi-biodata-for-marriage" },
    inLanguage: "mr-IN",
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
      { "@type": "ListItem", position: 2, name: "Marathi Biodata for Marriage", item: "https://marriagebiodatahub.com/marathi-biodata-for-marriage" },
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

export default function MarathiBiodataForMarriage() {
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
            <span className="text-slate-300">Lagnacha Biodata (Marathi)</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Lagnacha Biodata — लग्नाचा बायोडाटा Format Guide for Marathi Families
          </h1>

          <AEOBlock>
            Lagnacha biodata (लग्नाचा बायोडाटा) is the Marathi term for a marriage biodata. Marathi families include
            three fields that other communities don't typically use: Kul (कुळ) — the ancestral clan or lineage beyond
            Gotra, Kulswamini (कुलस्वामिनी) — the family deity or goddess, and Mulchi Gavi (मूळ गाव) — the ancestral
            village. These three fields are what distinguish a Marathi biodata from a generic Indian marriage biodata.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">What is Lagnacha Biodata? (लग्नाचा बायोडाटा म्हणजे काय?)</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            "Lagna" means marriage in Marathi. A lagnacha biodata introduces a potential bride or groom to another
            Marathi family. Maharashtra's arranged marriage process involves family networks — from Pune's residential
            societies to Nashik's community halls, from Nagpur's Brahmin sabhas to Mumbai's housing society WhatsApp
            groups.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Ganesh Chaturthi (August–September) is a major period of family social connections in Maharashtra — many
            families initiate biodata exchange during or after the Ganapati festival season. Gudhi Padwa (Marathi New
            Year, April 2026) and Margashirsha month (November–December) are considered especially auspicious for
            weddings and marriage discussions.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Marathi-specific fields explained</h2>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 mb-5">
            <h3 className="text-lg font-bold text-white mb-3">Kul (कुळ)</h3>
            <p className="text-slate-300 leading-relaxed mb-3">
              The ancestral clan or sub-lineage. In Marathi culture, Kul is closely tied to Kulswamini (the deity that
              the Kul worships). Different Kuls have different Kulswaminis. For example:
            </p>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {[
                ["Jadhav Kul", "Tuljabhavani"],
                ["Bhonsle Kul", "Bhavani (Tuljapur)"],
                ["Patil Kul", "Varies by region"],
                ["Deshmukh Kul", "Renukadevi or local deity"],
              ].map(([kul, devi]) => (
                <div key={kul} className="rounded-lg bg-slate-800/60 border border-slate-700 p-3">
                  <p className="text-white text-xs font-semibold">{kul}</p>
                  <p className="text-slate-400 text-xs">{devi}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Kul determines which temples the family reveres and which festivals they observe with particular
              importance. If you don't know your Kul, ask your father or paternal grandparents.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 mb-5">
            <h3 className="text-lg font-bold text-white mb-3">Kulswamini / Kuladevata (कुलस्वामिनी / कुलदेवता)</h3>
            <p className="text-slate-300 leading-relaxed mb-3">
              The family deity. For many Marathi families, visiting the Kulswamini temple before or after the marriage
              ceremony is a sacred obligation. Some famous Kulswamini temples across Maharashtra:
            </p>
            <div className="space-y-2 mb-3">
              {[
                { temple: "Tuljabhavani Devi", location: "Tuljapur, Osmanabad (Dharashiv)" },
                { temple: "Mahalakshmi", location: "Kolhapur" },
                { temple: "Renukadevi", location: "Mahur, Nanded" },
                { temple: "Yogeshwari", location: "Ambejogai, Beed" },
                { temple: "Saptashringi Devi", location: "Nashik" },
              ].map(({ temple, location }) => (
                <div key={temple} className="flex justify-between text-sm py-1.5 border-b border-slate-800 last:border-0">
                  <span className="text-white font-medium">{temple}</span>
                  <span className="text-slate-400">{location}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Knowing the Kulswamini often gives a family additional context about geographic origin and community
              background.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 mb-6">
            <h3 className="text-lg font-bold text-white mb-3">Mulchi Gavi (मूळ गाव / Native Village)</h3>
            <p className="text-slate-300 leading-relaxed">
              The ancestral village — where the family's roots are, even if current residence is Mumbai, Pune, Nagpur,
              or another city. Many Marathi families trace their Kul and Kulswamini back to a specific village in
              Vidarbha, Marathwada, Konkan, or Western Maharashtra. This field helps families assess community
              alignment and check for common connections.
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Sample Lagnacha Biodata Format (Marathi + English)</h2>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 mb-8 font-mono text-sm overflow-x-auto">
            <pre className="text-slate-300 whitespace-pre-wrap leading-loose">
{`लग्नाचा बायोडाटा
━━━━━━━━━━━━━━━━━━━━━━━
वैयक्तिक माहिती / Personal Details
━━━━━━━━━━━━━━━━━━━━━━━
नाव / Name:
जन्म तारीख / Date of Birth:
जन्म वेळ / Time of Birth:
जन्म ठिकाण / Place of Birth:
राशी / Rashi:          | नक्षत्र / Nakshatra:
गोत्र / Gotra:         | मांगलिक / Manglik:
कुळ / Kul:             | कुलस्वामिनी / Kulswamini:
मूळ गाव / Native Village:
━━━━━━━━━━━━━━━━━━━━━━━
कौटुंबिक माहिती / Family Details
━━━━━━━━━━━━━━━━━━━━━━━
वडिलांचे नाव व व्यवसाय / Father's Name & Occupation:
आईचे नाव व व्यवसाय / Mother's Name & Occupation:
भाऊ / Brothers:        | बहीण / Sisters:
━━━━━━━━━━━━━━━━━━━━━━━
शिक्षण व नोकरी / Education & Career
━━━━━━━━━━━━━━━━━━━━━━━
शिक्षण / Education:
नोकरी / Employer:
पद / Designation:
पगार / Salary (Optional):
━━━━━━━━━━━━━━━━━━━━━━━
स्वतःबद्दल / About Me
━━━━━━━━━━━━━━━━━━━━━━━
[3–4 sentences in Marathi or English]
━━━━━━━━━━━━━━━━━━━━━━━
जोडीदाराकडून अपेक्षा / Partner Preferences
━━━━━━━━━━━━━━━━━━━━━━━
[Age range, education, community, location]
━━━━━━━━━━━━━━━━━━━━━━━
संपर्क / Contact
━━━━━━━━━━━━━━━━━━━━━━━`}
            </pre>
          </div>

          {/* CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">तुमचा लग्नाचा बायोडाटा आत्ता बनवा — मोफत</p>
            <p className="text-slate-400 text-sm mb-5">
              Kul, Kulswamini, Gotra fields included. No login. Download PDF in 5 minutes.
            </p>
            <Link
              href="/#biodata-form-wrapper"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105"
            >
              Create My Lagnacha Biodata — Free →
            </Link>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Marathi wedding seasons and biodata timing</h2>
          <div className="space-y-3 mb-6">
            {[
              { label: "Gudhi Padwa (April 2026) — Marathi New Year", desc: "Auspicious marriage season opens. Families actively exchange biodatas from February onwards." },
              { label: "Margashirsha month (November–December)", desc: "Considered very auspicious for Hindu and Marathi weddings — referred to as the month of the Gods. High biodata exchange season." },
              { label: "Akshaya Tritiya (April–May)", desc: "Major wedding day across Maharashtra. Many weddings happen simultaneously — families book halls 6–12 months in advance." },
              { label: "Ganesh Chaturthi season (August–September)", desc: "Not a wedding season, but a major social gathering period. Families meet, connections are made, and biodata exchange often begins during or after visarjan." },
              { label: "Avoid: Pitru Paksha / Shraaddha, Chaturmas", desc: "No Hindu weddings during Pitru Paksha (Sept–Oct) or Ashadha to Kartik (Chaturmas). Dates vary by regional calendar — confirm with family pandit." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-4 flex gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-400 mt-2.5"></span>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{label}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Marathi community-specific biodata notes</h2>
          <div className="space-y-4 mb-6">
            {[
              {
                label: "Maratha community",
                desc: "Kul and Kulswamini fields are critical. Clan surnames (Jadhav, Bhosale, Patil, Shinde, Pawar, Deshmukh) carry family identity. Some surname groups have traditional restrictions on marriage — families check this.",
              },
              {
                label: "Brahmin — CKP (Chandraseniya Kayastha Prabhu)",
                desc: "Community is small and tightly networked across Mumbai, Thane, Konkan. Gotra and Kul matching is important. CKP families are not interchangeable with other Brahmin sub-communities.",
              },
              {
                label: "Brahmin — Chitpavan / Konkanastha",
                desc: "Maharashtra's prominent Brahmin community. Gotra strictly checked. Strong cultural emphasis on education and professional achievement.",
              },
              {
                label: "Brahmin — Deshastha",
                desc: "Dominant in Vidarbha (Nagpur, Amravati) and Marathwada (Aurangabad). Different temple traditions from Konkanastha Brahmin families.",
              },
              {
                label: "Mali, Dhangar, and other communities",
                desc: "Community identity is stated clearly. Native village (Mulchi Gavi) and family deity are both important. Regional variations exist across Pune district, Nashik, and Solapur.",
              },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
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
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/hindi-biodata-for-marriage", label: "Hindi biodata (Shadi ka biodata)" },
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
