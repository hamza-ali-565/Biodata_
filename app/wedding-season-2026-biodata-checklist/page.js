import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
export const metadata = {
  title: "Wedding Season 2026 Biodata Checklist & Timing Guide",
  description:
    "When to prepare your marriage biodata for the 2026-27 wedding season — auspicious dates by community, timing checklist, and how far ahead to start.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/wedding-season-2026-biodata-checklist",
  },
  openGraph: {
    title: "Wedding Season 2026 Biodata Checklist & Timing Guide",
    description:
      "When to prepare your marriage biodata for the 2026-27 wedding season — auspicious dates by community and a complete timing checklist.",
    url: "/wedding-season-2026-biodata-checklist",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Season 2026 Biodata Checklist & Timing Guide",
    description: "When to prepare your biodata for 2026-27 wedding season — auspicious dates by community and complete timing checklist.",
    images: ["/images/og-image.webp"],
  },
};

const faqs = [
  {
    q: "When does the 2026-27 Indian wedding season start?",
    a: "The main Hindu wedding season for 2026-27 opens after Devuthani Ekadashi (also called Tulsi Vivah), which falls in late October or early November 2026, marking the end of Chaturmas — the four-month period when Hindu weddings are traditionally paused. From this point, auspicious wedding dates continue through mid-December, pause briefly during Kharmas (mid-December to mid-January), then resume from mid-January through the end of April, with a particularly active window around Vasant Panchami and building toward Akshaya Tritiya.",
  },
  {
    q: "How far in advance should I prepare my biodata for wedding season?",
    a: "Two to three months before the season you're targeting, at minimum. For the November 2026 to February 2027 core wedding season, biodata creation and initial circulation should begin by August-September 2026. This allows time for the biodata to circulate through community networks, initial meetings to happen, and an engagement or formal agreement to be reached before a specific wedding date needs to be booked — venue availability for popular auspicious dates fills up fast.",
  },
  {
    q: "Do Muslim, Sikh, and Christian families follow the same wedding season timing?",
    a: "Not exactly, though there is significant practical overlap due to shared factors like weather, venue availability, and school holiday calendars. Muslim weddings are not restricted by the Hindu auspicious date calendar but generally avoid the month of Muharram and slow considerably during Ramzan; the winter months remain popular for practical reasons. Sikh weddings have no calendar restriction at all, though families often plan around the same November-to-February window for weather and venue availability, with Baisakhi (mid-April) considered a specifically favoured date by many families. Christian weddings follow no religious calendar restriction, though Lent (the weeks before Easter) is traditionally treated as a quieter period by many Christian communities.",
  },
  {
    q: "What should be ready before wedding season biodata exchange begins?",
    a: "A complete biodata with a recent photo, accurate horoscope details if applicable (Rashi, Nakshatra, Gotra, Manglik for Hindu families), a specific rather than generic About Me section, and clear partner preferences. Beyond the biodata itself: family conversations about caste and community preferences should happen before the biodata circulates, not after a proposal arrives — this prevents mismatched expectations partway through the process.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Wedding Season 2026-27 Biodata Checklist — When to Start and What to Have Ready",
    description:
      "A timing guide for the 2026-27 Indian wedding season — when biodata exchange typically begins for each community, key auspicious date windows, and a complete checklist for having your biodata ready before the season starts.",
    datePublished: "2026-07-10",
    dateModified: "2026-07-10",
    author: { "@type": "Organization", name: "Marriage Biodata Hub" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      logo: { "@type": "ImageObject", url: "https://www.marriagebiodatahub.com/icon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/wedding-season-2026-biodata-checklist" },
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
      { "@type": "ListItem", position: 2, name: "Wedding Season 2026 Biodata Checklist", item: "https://www.marriagebiodatahub.com/wedding-season-2026-biodata-checklist" },
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

export default function WeddingSeason2026BiodataChecklist() {
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
            <span className="text-slate-300">Wedding Season 2026 Biodata Checklist</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: July 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Wedding Season 2026-27 Biodata Checklist — When to Start and What to Have Ready
          </h1>

          <AEOBlock>
            The main Hindu wedding season for 2026-27 opens after Devuthani Ekadashi
            (late October/early November 2026), marking the end of Chaturmas, and runs
            through mid-December, pauses during Kharmas, then resumes mid-January
            through late April with a peak window building toward Akshaya Tritiya.
            Families targeting this season should have their biodata ready and begin
            circulation by August-September 2026 — two to three months ahead — since
            finding a match, having meetings, and confirming an engagement all take real
            time before a specific wedding date can be booked. This page is a timing
            and planning guide; for the biodata format itself, see our{" "}
            <Link href="/marriage-biodata-format" className="text-brand-300 underline hover:text-brand-200">
              complete guide
            </Link>.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Why timing matters as much as the biodata itself</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            A perfectly written biodata that starts circulating in October, aiming for
            a December wedding, faces a structural problem that has nothing to do with
            its content: there simply isn't enough time left in the process. Finding a
            compatible match, arranging initial conversations, having families meet,
            reaching agreement, and then booking a venue on an auspicious date — all
            of this takes months, not weeks, in the typical Indian arranged marriage
            process.
          </p>
          <p className="text-slate-300 leading-relaxed">
            This page is a planning tool: when to start, based on which wedding season
            window you're targeting and which community's calendar applies to your
            family.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">The 2026-27 Hindu wedding season calendar</h2>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 mb-5">
            <h4 className="text-lg font-bold text-white mb-3">Chaturmas ends — Devuthani Ekadashi (late October/early November 2026)</h4>
            <p className="text-slate-300 leading-relaxed mb-3">
              Chaturmas is the four-month period (roughly July to October) during which
              Lord Vishnu is traditionally considered to be in cosmic sleep, and Hindu
              weddings are paused across most communities. Devuthani Ekadashi (also called
              Prabodhini Ekadashi or Tulsi Vivah) marks Vishnu's symbolic awakening and
              the reopening of the wedding season. This is the single most significant
              date on the Hindu wedding calendar — the season genuinely begins here.
            </p>
            <div className="rounded-xl bg-brand-500/10 border border-brand-500/20 p-4 text-sm text-slate-300">
              <strong className="text-brand-300">What this means for biodata timing:</strong> Families targeting an early-season
              wedding (November-December 2026) should have their biodata fully ready and
              circulating well before Devuthani Ekadashi — ideally by August or early
              September — since the window between the season opening and its first pause
              is relatively short.
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {[
              { label: "First window — November to mid-December 2026", desc: "Auspicious dates continue through this period. This is typically the busiest early stretch of the season, with venue availability tightening as the window progresses. Popular for families wanting to complete the wedding before winter deepens and before the Kharmas pause." },
              { label: "Kharmas pause — mid-December 2026 to mid-January 2027", desc: "During the Sun's transit through Sagittarius (Dhanu Rashi), Hindu weddings are traditionally paused. No auspicious wedding dates fall in this window regardless of other factors. Biodata exchange, meetings, and engagement conversations can continue during this pause — it is simply not used for the wedding ceremony itself." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-4">
                <p className="font-semibold text-white mb-1">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6 mb-6">
            <h4 className="text-lg font-bold text-white mb-3">Second window — mid-January through April 2027</h4>
            <p className="text-slate-300 leading-relaxed mb-3">
              The season resumes after Kharmas ends (Makar Sankranti, mid-January) and
              continues through April, generally considered the most active overall
              stretch of the wedding season, with particularly favoured dates around:
            </p>
            <p className="text-slate-300 leading-relaxed mb-3">
              <strong className="text-white">Vasant Panchami</strong> (late January/early February 2027) — considered an
              auspicious date without requiring individual muhurta calculation in many
              traditions, making it a popular choice for families wanting a simpler
              planning process.
            </p>
            <p className="text-slate-300 leading-relaxed mb-3">
              <strong className="text-white">Akshaya Tritiya (Akha Teej)</strong> (late April 2027) — the single most
              significant "self-auspicious" date on the entire Hindu calendar, meaning
              no muhurta calculation is required at all — the day itself is considered
              universally auspicious. In states like Rajasthan, mass weddings happen on
              this single day. Extremely high venue demand.
            </p>
            <div className="rounded-xl bg-brand-500/10 border border-brand-500/20 p-4 text-sm text-slate-300">
              <strong className="text-brand-300">What this means for biodata timing:</strong> Families targeting Akshaya Tritiya
              specifically should begin biodata exchange 6-8 months ahead — by
              September-October 2026 — given how far in advance venues and dates around
              this specific day get booked.
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Community-specific timing notes</h2>
          <div className="space-y-4 mb-6">
            {[
              { label: "Muslim wedding timing", desc: "Not restricted by the Hindu auspicious date calendar. Practical avoidance: the month of Muharram (early state of mourning for many communities), and Ramzan, during which wedding celebrations slow considerably as families focus on fasting and religious observance. Outside these periods, timing is driven mainly by practical factors — weather, venue, and family availability.", href: "/muslim-biodata-for-marriage", cta: "Complete Muslim biodata guide" },
              { label: "Sikh wedding timing", desc: "No calendar restriction on any date — the Anand Karaj ceremony can be performed any day of the year. In practice, many Sikh families plan around the same November-to-February window purely for weather and venue-availability reasons. Baisakhi (mid-April) is specifically favoured by many families as it marks the founding of the Khalsa.", href: "/sikh-biodata-for-marriage", cta: "Complete Sikh biodata guide" },
              { label: "Christian wedding timing", desc: "No religious calendar restriction on timing, though the period of Lent (the weeks leading up to Easter, typically February-March) is traditionally observed as a quieter period for celebrations in many Christian communities, similar to how Advent is sometimes treated with more restraint.", href: "/christian-biodata-for-marriage", cta: "Complete Christian biodata guide" },
              { label: "Jain wedding timing", desc: "Follows a calendar broadly similar to the Hindu pattern, with the addition that Paryushan (the most significant Jain religious observance, typically August-September) and the surrounding period sees no wedding activity at all — families are focused entirely on religious observance during this time.", href: "/jain-biodata-for-marriage", cta: "Complete Jain biodata guide" },
            ].map(({ label, desc, href, cta }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-2">
                  {desc}{" "}
                  <Link href={href} className="text-brand-300 underline hover:text-brand-200">
                    {cta}
                  </Link>.
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">The biodata readiness checklist</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Use this before wedding season biodata circulation begins:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { label: "Photo", desc: "Recent (within 6 months), clear, natural lighting, plain background.", href: "/blog/biodata-for-marriage-photo-tips", cta: "Photo tips guide" },
              { label: "Horoscope fields accurate (Hindu families)", desc: "Rashi, Nakshatra, Gotra, and Manglik status calculated correctly, not estimated.", href: "/horoscope-calculator", cta: "Free calculator" },
              { label: "Community fields complete", desc: "Sect and Biradari (Muslim), Kul and Kulswamini (Marathi), Gurudwara and Amritdhari status (Sikh), Denomination and Church (Christian) — whichever applies to your family." },
              { label: "About Me section specific, not generic", desc: "One genuine fact, not a list of adjectives.", href: "/blog/how-to-write-about-me-in-marriage-biodata", cta: "About Me guide" },
              { label: "Partner preferences honest and family-aligned", desc: "Have the family conversation about caste, community, and location preferences before the biodata circulates — not after a proposal arrives.", href: "/blog/marriage-biodata-partner-preferences-what-to-write", cta: "Partner preferences guide" },
              { label: "One page confirmed", desc: "Check your final PDF is genuinely one A4 page.", href: "/blog/should-biodata-be-one-page-or-two", cta: "One page or two?" },
              { label: "Contact number correct and WhatsApp-active", desc: "Verify the number listed is actively monitored, since most responses will arrive via WhatsApp." },
              { label: "Format matches your community", desc: "Using the right template — Hindu, Muslim, Sikh, Christian, Jain, Marathi, or NRI format — with the correct fields for your community rather than a generic template.", href: "/templates", cta: "Browse templates" },
            ].map(({ label, desc, href, cta }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-4">
                <p className="font-semibold text-white mb-1">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {desc}
                  {href && (
                    <>
                      {" "}
                      <Link href={href} className="text-brand-300 underline hover:text-brand-200">
                        {cta}
                      </Link>.
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Suggested timeline — working backward from your target season</h2>
          <div className="space-y-3 mb-6">
            {[
              { label: "Targeting November-December 2026 wedding (early season)", points: ["Biodata ready and circulating by: July 2026", "Meetings and initial conversations: September-October 2026", "Engagement/formal agreement: October-November 2026"] },
              { label: "Targeting January-February 2027 wedding (post-Kharmas window)", points: ["Biodata ready and circulating by: September-October 2026", "Meetings and initial conversations: November-December 2026", "Engagement/formal agreement: December 2026-January 2027"] },
              { label: "Targeting Akshaya Tritiya 2027 (late April)", points: ["Biodata ready and circulating by: September-October 2026 (earliest, given high demand for this specific date)", "Meetings and initial conversations: November 2026-February 2027", "Engagement/formal agreement: February-March 2027"] },
            ].map(({ label, points }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-3">{label}</p>
                <ul className="space-y-1.5">
                  {points.map((pt, i) => (
                    <li key={i} className="flex gap-2 text-slate-300 text-sm">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-400 mt-2"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-slate-300 leading-relaxed">
            These are general guidelines — individual family timelines vary considerably,
            and some matches move faster or slower than this framework suggests. The
            consistent principle: start earlier than feels necessary, since every stage
            of the process — from first contact to wedding day — reliably takes longer
            than initially expected.
          </p>

          {/* Mid-page CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Get your biodata ready for this wedding season</p>
            <p className="text-slate-400 text-sm mb-5">
              Complete the checklist above, then create your biodata in minutes.
              Community-correct fields, one-page format, free PDF and shareable link.
            </p>
            <SmartLink href="/#biodata-form-wrapper"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105"
            >
              Create My Biodata — Free →
            </SmartLink>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-2">Frequently asked questions</h2>
          <SectionFAQ items={faqs} />

          <div className="mt-14 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-4">Related guides</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/marriage-biodata-format-2026", label: "Marriage biodata format 2026" },
                { href: "/horoscope-calculator", label: "Horoscope calculator" },
                { href: "/blog/biodata-for-marriage-photo-tips", label: "Photo tips" },
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/muslim-biodata-for-marriage", label: "Muslim biodata" },
                { href: "/sikh-biodata-for-marriage", label: "Sikh biodata" },
                { href: "/christian-biodata-for-marriage", label: "Christian biodata" },
                { href: "/jain-biodata-for-marriage", label: "Jain biodata" },
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
