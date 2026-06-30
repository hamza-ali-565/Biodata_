import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

export const metadata = {
  title: "Shadi Biodata Format | Hindi Marriage Biodata Guide",
  description:
    "शादी के लिए बायोडाटा कैसे बनाएं? Complete shadi biodata format guide for UP, Bihar, Delhi & Rajasthan families. Free PDF. WhatsApp share. No login.",
  alternates: {
    canonical: "/hindi-biodata-for-marriage",
  },
  openGraph: {
    title: "Shadi Biodata Format | Hindi Marriage Biodata Guide",
    description:
      "Complete shadi biodata format guide for UP, Bihar, Delhi & Rajasthan families. Free PDF. WhatsApp share. No login.",
    url: "/hindi-biodata-for-marriage",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "hi_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadi Biodata Format | Hindi Marriage Biodata Guide",
    description: "Complete shadi biodata format for UP, Bihar, Delhi & Rajasthan families. Free PDF. No login.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "Shadi ke liye biodata kaise banate hain? (How to make shadi biodata?)",
    a: "Our tool is designed exactly for this. Fill in your personal details, family background, education and career, About Me, and partner preferences. Choose a Hindi-friendly template. Download as PDF. Takes less than 5 minutes. No login, no payment required.",
  },
  {
    q: "Shadi ke biodata mein kya-kya likhna chahiye? (What to write in shadi biodata?)",
    a: "Write: personal details including date/time/place of birth; Gotra, Rashi, Nakshatra, and Manglik status for horoscope section; father and mother's names and occupations; number of brothers and sisters; your highest qualification and current job; a brief About Me; partner preferences; and your parents' contact number. Don't leave any section blank.",
  },
  {
    q: "Kya shadi ke biodata mein salary likhni chahiye? (Should I write salary in shadi biodata?)",
    a: "Optional, but recommended for North Indian families. Most UP and Bihar families expect a salary range (e.g., \"₹8–10 LPA\"). Write a range rather than an exact figure. If you're not comfortable sharing, you can write \"As per industry standards\" or discuss it at the meeting.",
  },
  {
    q: "Biodata WhatsApp pe kaise bhejein? (How to send biodata on WhatsApp?)",
    a: "Download your biodata as PDF from our site. Open WhatsApp. Go to the chat where you want to send it. Tap the attachment (paperclip) icon. Select \"Document.\" Choose your biodata PDF. Add a respectful message. Send. PDF files preserve formatting on all phones — do not send as an image if you want the design to look right.",
  },
  {
    q: "Kya main apna biodata online free mein bana sakta/sakti hoon? (Can I create my biodata online free?)",
    a: "Yes, completely free. Marriage Biodata Hub lets you create, preview, and download your full biodata PDF without any payment, login, or signup. No watermark on the download.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Shadi Biodata Format — Complete Hindi Marriage Biodata Guide",
    description: "Complete shadi biodata format guide for North Indian families with Hindi fields and WhatsApp message templates.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    author: { "@type": "Organization", name: "Marriage Biodata Hub" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      logo: { "@type": "ImageObject", url: "https://www.marriagebiodatahub.com/icon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/hindi-biodata-for-marriage" },
    inLanguage: "hi-IN",
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
      { "@type": "ListItem", position: 2, name: "Hindi Biodata for Marriage", item: "https://www.marriagebiodatahub.com/hindi-biodata-for-marriage" },
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

export default function HindiBiodataForMarriage() {
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
            <span className="text-slate-300">Shadi Biodata (Hindi)</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            शादी के लिए बायोडाटा | Shadi Biodata Format — Complete Hindi Guide
          </h1>

          <AEOBlock>
            Shadi ka biodata (शादी का बायोडाटा) is the Hindi term for a matrimonial profile. For North Indian families
            in UP, Bihar, Delhi, Rajasthan, and Madhya Pradesh, it includes personal details, Gotra, Rashi, Nakshatra,
            Manglik status, family background, education, and partner preferences — all on one A4 page. Families in
            these states primarily share biodatas via WhatsApp with relatives, or give a printed copy to the local
            pandit or marriage bureau.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Shadi ka biodata kya hota hai? | What is Shadi Biodata?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Biodata is the first document that goes out when a family starts their shaadi ki talash (marriage search).
            It goes to chacha-chachi, mama-mami, neighbours, pandit ji, and the family marriage bureau in the local
            market. In cities like Lucknow, Allahabad (Prayagraj), Varanasi, Kanpur, and Patna, a printed copy
            delivered to the community pandit is still the most trusted first step.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The biodata has to do one thing well: in 90 seconds, tell the other family who you are, what your family
            is like, and whether there's a reason to meet. A well-made shadi biodata does this clearly and respectfully.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Shadi ke liye biodata format | Hindi Shadi Biodata ke fields</h2>
          <p className="text-slate-300 leading-relaxed mb-5">
            Here is a sample shadi biodata structure with both Hindi and English field names — the format most North
            Indian families recognise and expect.
          </p>

          {/* Sample biodata structure */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 mb-8 font-mono text-sm overflow-x-auto">
            <pre className="text-slate-300 whitespace-pre-wrap leading-loose">
{`बायोडाटा / BIODATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
व्यक्तिगत विवरण / Personal Details
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
नाम / Name:
जन्म तिथि / Date of Birth:
जन्म समय / Time of Birth:
जन्म स्थान / Place of Birth:
राशि / Rashi:          | नक्षत्र / Nakshatra:
गोत्र / Gotra:         | मांगलिक / Manglik: हाँ / नहीं
ऊंचाई / Height:        | रक्त समूह / Blood Group:
मातृभाषा / Mother Tongue:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
पारिवारिक विवरण / Family Details
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
पिता का नाम / Father's Name:
पिता का व्यवसाय / Father's Occupation:
माता का नाम / Mother's Name:
माता का व्यवसाय / Mother's Occupation:
भाई / Brothers:        | बहन / Sisters:
पारिवारिक प्रकार / Family Type: संयुक्त / एकल
मूल निवास / Native Place:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
शैक्षणिक एवं व्यावसायिक विवरण
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
शिक्षा / Qualification:
संस्था / Institution:
वर्तमान पद / Current Designation:
नियोक्ता / Employer:
वेतन / Salary (Optional):
कार्यस्थल / Work Location:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
अपने बारे में / About Me
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[3–4 sentences about personality, values, hobbies]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
जीवनसाथी से अपेक्षाएं / Partner Preferences
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Age range, education, community, location]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
संपर्क विवरण / Contact Details
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
संपर्क व्यक्ति: (Father's name)
मोबाइल / Mobile:
व्हाट्सएप / WhatsApp:
ईमेल / Email:
शहर / City:`}
            </pre>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">WhatsApp par biodata kaise bhejein | How to Share Shadi Biodata on WhatsApp</h2>
          <p className="text-slate-300 leading-relaxed mb-5">
            After downloading your biodata PDF, use one of these WhatsApp message templates when sending to relatives
            or a specific family. These are the messages North Indian families actually use — warm, brief, and
            respectful.
          </p>

          <div className="space-y-5 mb-6">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-5">
              <p className="text-slate-500 text-xs mb-3 uppercase tracking-wide">For relatives / family network</p>
              <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-4 text-slate-300 text-sm leading-loose">
                <p>आदरणीय [Name] जी,</p>
                <p>सादर प्रणाम। हमारे [बेटे/बेटी] का बायोडाटा संलग्न है। यदि आपके परिचय में कोई उचित रिश्ता हो तो कृपया हमें अवश्य बताएं।</p>
                <p>धन्यवाद 🙏</p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-5">
              <p className="text-slate-500 text-xs mb-3 uppercase tracking-wide">For a specific family</p>
              <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-4 text-slate-300 text-sm leading-loose">
                <p>नमस्ते [Name] जी,</p>
                <p>आपसे बात हुई थी। हमारे [बेटे/बेटी] का बायोडाटा भेज रहे हैं। कृपया देखें और जवाब दें।</p>
                <p>🙏</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">UP, Bihar, Delhi ke families ke liye special tips</h2>
          <div className="space-y-4 mb-6">
            {[
              {
                city: "Lucknow, Allahabad (Prayagraj), Varanasi — UP",
                tips: [
                  "Pandit ji's role is still central — give them a printed copy. Community marriage bureaus in Hazratganj (Lucknow) and Civil Lines areas handle biodatas from across the state.",
                  "Gotra and Manglik fields are non-negotiable for traditional UP Brahmin and Thakur families.",
                  "Salutation in biodata is important — \"Shree Ganeshaya Namah\" opening is expected for Hindu families.",
                ],
              },
              {
                city: "Patna, Bhagalpur — Bihar",
                tips: [
                  "Joint family background is especially important here. Mention explicitly whether the candidate will live in the ancestral home or independently after marriage.",
                  "Professional stability (government job or established business) carries significant weight.",
                  "Native village and zila (district) information is closely read by Bihari families.",
                ],
              },
              {
                city: "Delhi NCR (Noida, Gurugram, Faridabad, Ghaziabad)",
                tips: [
                  "More urban format. Professional templates. English biodata accepted alongside Hindi.",
                  "Gotra and Manglik fields still required for traditional North Delhi Punjabi and UP Brahmin families.",
                  "WhatsApp is the primary sharing channel — no printing needed in most cases.",
                ],
              },
              {
                city: "Jaipur, Jodhpur, Udaipur — Rajasthan",
                tips: [
                  "Clan (Vansh) for Rajput families — Sisodia, Rathore, Chauhan, Tomar are not the same community.",
                  "Village/tehsil of origin matters strongly. Extended family networks are important.",
                  "Families are formal and image-conscious about biodata quality — clean design matters here.",
                ],
              },
            ].map(({ city, tips }) => (
              <div key={city} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-3 text-sm">{city}</p>
                <ul className="space-y-1.5">
                  {tips.map((tip, i) => (
                    <li key={i} className="flex gap-2 text-slate-300 text-sm">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-400 mt-2"></span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">अभी अपना बायोडाटा बनाएं — बिल्कुल मुफ्त</p>
            <p className="text-slate-400 text-sm mb-5">No login. No watermark. 5 minutes mein PDF ready.</p>
            <Link
              href="/#biodata-form-wrapper"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105"
            >
              Create My Shadi Biodata — Free →
            </Link>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-2">Frequently asked questions</h2>
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
