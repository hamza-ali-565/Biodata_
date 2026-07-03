import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { HoroscopeCalculator } from "../../components/HoroscopeCalculator";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "Horoscope Calculator for Marriage Biodata — Free",
  description:
    "Find your Rashi, Nakshatra, Nadi, Gan, and Manglik status free. Enter date, time, and place of birth — results formatted exactly for your marriage biodata.",
  alternates: {
    canonical: "/horoscope-calculator",
  },
  openGraph: {
    title: "Horoscope Calculator for Marriage Biodata — Free",
    description:
      "Find Rashi, Nakshatra, Nadi, Gan, and Manglik status free. Results formatted exactly for your marriage biodata. No login.",
    url: "/horoscope-calculator",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Horoscope Calculator for Marriage Biodata — Free",
    description: "Find Rashi, Nakshatra, Nadi, Gan, Manglik status free. Results formatted for your marriage biodata.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "How do I find my Rashi for a marriage biodata?",
    a: "Enter your date of birth, time of birth, and place of birth in the calculator above. Your Rashi (Vedic moon sign) is calculated from the position of the Moon at the exact moment of your birth using the Lahiri Ayanamsha system, which is the standard for Indian astrology and marriage matching. The result appears in both Sanskrit and English — copy it directly into your biodata form. If you do not know your exact birth time, use 12:00 noon as an approximation — the Rashi result is usually accurate unless your birth was near the transition between two Rashis.",
  },
  {
    q: "What is the difference between Rashi and sun sign?",
    a: "Rashi is your Vedic moon sign — the zodiac sign the Moon was in at the time of your birth. Your Western sun sign is determined by the position of the Sun, which changes only once a month. The Moon moves through all 12 zodiac signs in about 28 days, making the Rashi far more specific to your exact date and time of birth. When Indian families ask for your Rashi, they mean the Vedic moon sign — not your Western sun sign. Aries in Western astrology is Mesha in Vedic; the signs have the same names but the calculation method differs because Vedic astrology uses the sidereal zodiac while Western astrology uses the tropical zodiac.",
  },
  {
    q: "What is Manglik in a marriage biodata?",
    a: "Manglik (also called Mangal Dosh or Kuja Dosha) refers to the placement of the planet Mars in specific houses of your birth chart — houses 1, 4, 7, 8, or 12. Approximately 40% of people are Manglik by this calculation, which means it is quite common. The traditional concern is that a Manglik person should ideally marry another Manglik person for compatibility. However, many astrologers recognize exceptions and cancellations — if both partners are Manglik, the dosha is considered neutralised. Most modern Hindu families check Manglik status as one of several compatibility factors, not as an absolute deciding criterion.",
  },
  {
    q: "What is Nadi in a marriage biodata?",
    a: "Nadi is one of the eight criteria (Ashta Koota) assessed during Hindu horoscope matching (Gun Milan). Each of the 27 Nakshatras belongs to one of three Nadis — Adi, Madhya, or Antya. Nadi carries 8 points in the Gun Milan scoring system, which is the highest weightage of all eight criteria. Nadi Dosha occurs when both the boy and girl share the same Nadi — it is considered inauspicious and reduces the score by 8 points. This makes Nadi one of the most important fields to fill accurately in a Hindu marriage biodata.",
  },
  {
    q: "How do I find my Gotra for a marriage biodata?",
    a: "Gotra cannot be calculated from your birth details — it is a patrilineal clan lineage passed through your father. Ask your father or paternal grandfather; it is almost always known in the family. Common Brahmin Gotras include Kashyap, Bharadwaj, Atri, Vishwamitra, Vashishth, and Sandilya. Common Aggarwal/Vaishya Gotras include Garg, Goyal, Bansal, Mittal, Singhal, and Mangal. If your Gotra is genuinely unknown after asking elders, write 'Gotra not known' — do not leave the field blank or guess.",
  },
  {
    q: "Is Manglik status permanent or can it change?",
    a: "Manglik status is calculated from your birth chart — it is a fixed calculation based on where Mars was when you were born and does not change over time. However, many astrologers recognise specific cancellations (parihar) that neutralise the dosha: if Mars is in its own sign (Aries or Scorpio), or in certain other positions, the dosha may be cancelled. The most common cancellation is when both partners are Manglik. For a definitive assessment with cancellations considered, consult a qualified Jyotishi with the full birth chart.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Marriage Biodata Horoscope Calculator",
    "@id": "https://www.marriagebiodatahub.com/horoscope-calculator#app",
    url: "https://www.marriagebiodatahub.com/horoscope-calculator",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web Browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    description:
      "Free online horoscope calculator for Indian marriage biodata. Enter date, time, and place of birth to instantly calculate Rashi (Vedic moon sign), Nakshatra (birth star), Nadi, Gan, and Manglik status — formatted exactly as they appear in a marriage biodata.",
    inLanguage: "en-IN",
    publisher: { "@type": "Organization", name: "Marriage Biodata Hub", url: "https://www.marriagebiodatahub.com" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marriagebiodatahub.com" },
      { "@type": "ListItem", position: 2, name: "Horoscope Calculator", item: "https://www.marriagebiodatahub.com/horoscope-calculator" },
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

export default function HoroscopeCalculatorPage() {
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
            <span className="text-slate-300">Horoscope Calculator</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Free tool</span>
            <span>·</span>
            <span>Results in seconds</span>
            <span>·</span>
            <span>No login required</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Horoscope Calculator for Marriage Biodata — Find Your Rashi, Nakshatra &amp; Manglik Status Free
          </h1>

          <AEOBlock>
            Enter your date of birth, time of birth, and place of birth. This calculator returns your Rashi (Vedic
            moon sign), Nakshatra (birth star), Pada (quarter), Nadi, Gan, and Manglik status — calculated using the
            Lahiri Ayanamsha standard used by Indian astrologers and required for Hindu marriage horoscope matching.
            Results appear in the exact format used in a marriage biodata, with a copy button next to each field. If
            you do not know your birth time, enter 12:00 noon — Rashi is usually accurate unless your birth falls
            near a Moon sign change. Nakshatra may vary by a few degrees without exact time; verify with a purohit if
            horoscope matching for your family requires absolute precision.
          </AEOBlock>

          <HoroscopeCalculator />

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">What these fields mean for your marriage biodata</h2>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Rashi — Your Vedic Moon Sign</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The Rashi field in a Hindu marriage biodata is your Vedic moon sign — not your Western sun sign. This
            distinction matters because many people know their Western sun sign from newspaper horoscopes, and that
            is not the same thing.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Western astrology uses the tropical zodiac — the Sun&apos;s position relative to the Earth&apos;s
            seasonal cycle. Vedic astrology uses the sidereal zodiac — the actual position of the planets against the
            background of fixed stars. Because Earth&apos;s axis has precessed over thousands of years, the two
            systems now differ by about 23–24 degrees. This means your Vedic Rashi and your Western sun sign are
            almost never the same.
          </p>
          <p className="text-slate-300 leading-relaxed mb-3">
            <strong className="text-white">The 12 Rashis with English equivalents:</strong> Mesha (Aries) ·
            Vrishabha (Taurus) · Mithuna (Gemini) · Karka (Cancer) · Simha (Leo) · Kanya (Virgo) · Tula (Libra) ·
            Vrishchika (Scorpio) · Dhanu (Sagittarius) · Makara (Capricorn) · Kumbha (Aquarius) · Meena (Pisces)
          </p>
          <div className="rounded-xl bg-brand-500/10 border border-brand-500/20 p-4 text-sm text-slate-300 mb-6">
            <strong className="text-brand-300">What to write in the biodata:</strong> The Sanskrit name — &quot;Vrishchika&quot;
            not &quot;Scorpio.&quot; South Indian (particularly Tamil) biodatas use the Tamil equivalents: Mesham,
            Rishabham, Mithunam, Katakam, Simmam, Kanni, Tulam, Vrichigam, Dhanusu, Makaram, Kumbham, Meenam.
          </div>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Nakshatra — Your Birth Star</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            The Nakshatra (also written Nakshatram or Natchathiram in Tamil) is your birth star — the constellation
            the Moon was passing through at the time of your birth. There are 27 Nakshatras, each spanning 13°20&apos;
            of the 360° zodiac. The Moon takes approximately one day to transit each Nakshatra.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Nakshatra is used for naming the baby, marriage matching (most of the Gun Milan calculation is
            Nakshatra-based), Muhurat selection for wedding dates, and identifying Nadi, Gan, and other compatibility
            parameters.
          </p>
          <div className="rounded-xl bg-brand-500/10 border border-brand-500/20 p-4 text-sm text-slate-300 mb-6">
            <strong className="text-brand-300">What to write in the biodata:</strong> The Nakshatra name in Sanskrit
            or the community-standard form. South Indian (Tamil) biodatas use the Tamil form — Ashwini becomes
            Aswini, Chitra becomes Chitrai, and so on.
          </div>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Pada — The Quarter</h3>
          <p className="text-slate-300 leading-relaxed mb-6">
            Each Nakshatra is divided into four Padas (quarters). The Pada is used primarily for baby name selection
            — each Pada corresponds to specific starting sounds for the name (Akshar). The Pada is not always
            included in the biodata itself, but is important when consulting a purohit for the Janma Akshar.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Nadi — The Most Important Gun Milan Factor</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Nadi carries 8 points in the Ashta Koota (8-factor) Gun Milan system — the highest weight of any single
            factor. The 8 Kootas and their points: Varna (1) + Vashya (2) + Tara (3) + Yoni (4) + Graha Maitri (5) +
            Gana (6) + Bhakoot (7) + Nadi (8) = 36 total points. A minimum of 18 points is generally expected for the
            match to proceed.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong className="text-white">Nadi Dosha:</strong> Occurs when both the boy&apos;s and girl&apos;s
            Nakshatra belong to the same Nadi. Costs 8 points in the Gun Milan score. Some astrologers recognise
            specific cancellations — consult a Jyotishi for cancellation assessment.
          </p>
          <div className="rounded-xl bg-brand-500/10 border border-brand-500/20 p-4 text-sm text-slate-300 mb-6">
            <strong className="text-brand-300">In the biodata:</strong> Nadi is written as &quot;Adi,&quot;
            &quot;Madhya,&quot; or &quot;Antya.&quot; Some biodata formats include it under horoscope details; others
            leave it for the Jathagam exchange.
          </div>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Gan — Gana Koota</h3>
          <p className="text-slate-300 leading-relaxed mb-6">
            Gan (or Gana) reflects temperament and nature — Deva Gan (gentle, generous), Manav Gan (worldly,
            practical), or Rakshasa Gan (strong-willed, intense). Gana Koota carries 6 points in the Gun Milan score.
            Same Gana is ideal; Deva-Manav is acceptable; Rakshasa-Deva is considered the most challenging combination
            by traditional astrologers, though modern astrologers weigh this less strictly.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Manglik Status — The Most Asked-About Field</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Manglik (Mangal Dosh, Kuja Dosha) is the most asked-about horoscope field on matrimonial platforms — and
            also the most misunderstood. Mars (Mangal) is considered inauspicious for marriage when it occupies the
            1st, 4th, 7th, 8th, or 12th house of the birth chart (South Indian tradition also includes the 2nd
            house). Approximately 40% of people are Manglik by this calculation — far too prevalent to be as alarming
            as popular culture treats it.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong className="text-white">The most important cancellation:</strong> if both partners are Manglik,
            the dosha is considered to cancel out. Other recognised cancellations include Mars in its own sign
            (Aries or Scorpio), Mars in exaltation (Capricorn), or Mars aspected by Jupiter — these vary by tradition
            and Jyotishi.
          </p>
          <div className="rounded-xl bg-brand-500/10 border border-brand-500/20 p-4 text-sm text-slate-300 mb-6">
            <strong className="text-brand-300">What to write in the biodata:</strong> &quot;Manglik,&quot;
            &quot;Non-Manglik,&quot; or &quot;Partial Manglik.&quot; Do not leave this field blank in a Hindu biodata
            shared with traditional families — a blank is read as avoidance, which creates more concern than a
            straightforward answer. Manglik status is not a reason to reject a match outright; most families treat it
            as one factor among many.
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">What if I don&apos;t know my birth time?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong className="text-white">Rashi without birth time:</strong> Usually accurate. The Moon changes
            Rashi every 2.25 days, so unless your birth happened to fall in the 2–4 hour window when the Moon was
            transitioning between two signs, the Rashi will be the same regardless of exact birth time.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong className="text-white">Nakshatra without birth time:</strong> Less reliable. The Moon
            transitions between Nakshatras roughly every 24–27 hours. If your birth time is off by 12 hours, you
            might land on a different Nakshatra. Ask your parents for even an approximate time of day — morning,
            afternoon, evening, or night narrows the window significantly.
          </p>
          <p className="text-slate-300 leading-relaxed">
            If the birth record is genuinely lost, some families use a Prasna Kundali (horary chart cast for the
            moment of inquiry) as a substitute — this is a discussion for a trusted Jyotishi, not for a calculator.
            For the biodata, write &quot;Birth time not known — Rashi: [value]&quot; and be honest about the
            uncertainty.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Gotra — why this calculator can&apos;t compute it</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Gotra is not an astronomical calculation. It cannot be derived from your date, time, or place of birth —
            it is a patrilineal clan lineage. The Gotra of your father is your Gotra, and his came from his father,
            back through the male line to a founding Vedic sage.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            North Indian biodatas commonly list: Kashyap, Bharadwaj, Atri, Vishwamitra, Vashishth, Sandilya, Garg,
            Parashara, Kaushik. South Indian (Tamil Brahmin) biodatas commonly list: Kashyap, Bharadwaj, Harita,
            Srivatsa, Mudgala, Koundinya, Angirasa. Marathi families often use Kul alongside or instead of Gotra.
          </p>
          <div className="rounded-xl bg-brand-500/10 border border-brand-500/20 p-4 text-sm text-slate-300">
            <strong className="text-brand-300">How to find your Gotra:</strong> Ask your father, or a senior male
            relative if he doesn&apos;t know. If it is genuinely unknown across generations, write &quot;Gotra not
            known&quot; — not &quot;N/A,&quot; which incorrectly implies it doesn&apos;t apply.
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">How to use these results in your biodata</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Once the calculator shows your results, here is exactly where each field goes in the Personal Details
            section of your biodata:
          </p>
          <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-5 mb-4 font-mono text-sm text-slate-300 space-y-1">
            <p>Rashi: <span className="text-white">Vrishchika</span></p>
            <p>Nakshatra: <span className="text-white">Anuradha, Pada 3</span></p>
            <p>Nadi: <span className="text-white">Antya</span></p>
            <p>Gan: <span className="text-white">Deva</span></p>
            <p>Manglik: <span className="text-white">Non-Manglik</span></p>
            <p>Gotra: <span className="text-slate-500">ask your father — cannot be calculated</span></p>
          </div>
          <p className="text-slate-300 leading-relaxed">
            After filling in your horoscope details, continue to Family Details, Education and Career, About Me, and
            Partner Preferences.
          </p>

          {/* Mid-page CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Got your horoscope details? Create your biodata now.</p>
            <p className="text-slate-400 text-sm mb-5">
              Your Rashi, Nakshatra, and Manglik status are ready. Open the free biodata maker and fill in these
              details along with your personal and family information. Choose a template, download your PDF, and
              share on WhatsApp. No login. Free.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <SmartLink href="/#biodata-form-wrapper"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105"
              >
                Create My Biodata — Free →
              </SmartLink>
              <Link
                href="/hindu-marriage-biodata"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-8 py-3 text-sm font-semibold text-slate-200 hover:border-brand-500/50 hover:text-white transition-all"
              >
                See Hindu Biodata Format →
              </Link>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-2">Frequently asked questions</h2>
          <SectionFAQ items={faqs} />

          <div className="mt-14 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-4">Related guides</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata guide" },
                { href: "/marriage-biodata-format", label: "Complete biodata format guide" },
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
