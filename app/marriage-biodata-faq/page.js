import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";
import { SmartLink } from "../../components/SmartLink";

export const metadata = {
  title: "Marriage Biodata FAQ — 50 Questions Answered",
  description:
    "50 real questions about marriage biodatas answered — using the tool, special situations, privacy, and matrimonial process etiquette. Everything in one place.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/marriage-biodata-faq",
  },
  openGraph: {
    title: "Marriage Biodata FAQ — 50 Questions Answered",
    description:
      "50 real questions about marriage biodatas answered — using the tool, special situations, privacy, and matrimonial process etiquette.",
    url: "/marriage-biodata-faq",
    siteName: "Marriage Biodata Hub",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriage Biodata FAQ — 50 Questions Answered",
    description:
      "50 real questions about marriage biodatas — tool use, special situations, privacy, and matrimonial etiquette.",
    images: ["/images/og-image.webp"],
  },
};

const categories = [
  {
    id: "using-the-tool",
    title: "Using the Tool",
    faqs: [
      { q: "Do I need to create an account to make a biodata?", a: "No. You can create, preview, and download your complete biodata without creating an account, signing up, or providing an email address. The tool works entirely in your browser — open the site, fill in the form, choose a template, and download. There is nothing to register." },
      { q: "Is my data safe when I use an online biodata maker?", a: "On Marriage Biodata Hub specifically, yes — the information you enter is processed in your browser and is not stored on our servers. Nothing you type is saved, transmitted, or retained once you close the tab, unless you explicitly use the shareable link feature, which creates a link you control. Always check any biodata tool's privacy approach before entering sensitive personal details like your address and date of birth." },
      { q: "Does the biodata maker work on iPhone and Android?", a: "Yes. The tool works in any mobile browser — Safari on iPhone, Chrome on Android — with no app to install. The form, template preview, and PDF download all work directly in your phone's browser." },
      { q: "Can I make a biodata using only my phone, without a laptop?", a: "Yes, completely. The tool is designed to work end-to-end on a phone — filling in the form, uploading your photo from your gallery, previewing templates, and downloading the final PDF. Most users actually complete their biodata on a phone rather than a laptop, since that's where the final document gets shared anyway." },
      { q: "How many templates are available and are they all free?", a: "There are 40+ templates spanning traditional, modern, and community-specific designs, and every template is completely free to use — there is no premium tier, no paywalled template, and no upgrade prompt. Browse the full collection at /templates." },
      { q: "Can I download my biodata as a JPEG instead of a PDF?", a: "Yes, both formats are available on the download screen. PDF is recommended for general sharing since it preserves quality across all devices and doesn't compress when forwarded through WhatsApp, but JPEG is available if a specific recipient or platform requests an image format instead of a document." },
      { q: "Will there be a watermark on my downloaded biodata?", a: "No. Every template downloads completely clean, with no watermark, no logo overlay, and no branding on the document itself. What you see in the preview is exactly what downloads." },
      { q: "Can two family members use the tool to make separate biodatas?", a: "Yes. Since no account is required, each person simply opens the tool separately (or the same browser at different times) and fills in their own details independently. There is no account-based limit — a family creating biodatas for two siblings can do so one after another with no restriction." },
      { q: "Can I save my progress and come back to finish my biodata later?", a: "Yes. Your details are stored in your browser's local storage as you fill in the form, so returning to the site on the same device and browser will restore your progress. This works as long as you don't clear your browser data in the meantime." },
      { q: "Can I generate a QR code for my biodata instead of sharing a file?", a: "If a QR code feature is not yet available, the shareable link feature serves a similar purpose — it generates a private link to your biodata that opens as a clean web page on any device. Check the download screen for the current sharing options, as tool features are added over time." },
    ],
  },
  {
    id: "content-format",
    title: "Content & Format Questions",
    faqs: [
      { q: "Can I create a biodata for a second marriage using the same tool?", a: "Yes. While every template supports second marriage biodatas, be aware that standard fields don't include a dedicated 'Children' or 'Marital Status' field by default — these can be added as custom fields within the form. For complete guidance on second marriage biodata content and tone, see the broader discussion in our About Me and partner preferences guides, which cover honest, dignified framing for this situation." },
      { q: "Should divorced or widowed candidates use a different biodata format?", a: "The structural format stays the same — personal details, family, career, About Me, partner preferences, contact. What changes is content and tone: marital status should be stated clearly and honestly (Divorced, Widowed, Separated), children should be mentioned if applicable, and the About Me section carries more weight since it establishes who the candidate is now, independent of past circumstances. Choose a template with a calmer, more mature visual tone rather than a bridal or celebratory design." },
      { q: "Can I include my own mobile number instead of my father's?", a: "Yes, this is entirely your choice. The convention of listing a parent's number signals family involvement, which some traditional families expect, but it is not a rule. Independent candidates, second-marriage candidates, and NRI candidates managing their own search frequently list their own number directly — simply note who the contact person is (e.g., 'Contact: Priya Sharma, candidate') so there's no confusion." },
      { q: "Is it okay to make a biodata without family involvement?", a: "Yes, completely normal, particularly among independent professionals managing their own matrimonial search or using matrimonial platforms directly. There is no requirement that a biodata be family-created or family-approved — many candidates create, control, and share their own biodata entirely independently, especially those in their late twenties or older who are self-sufficient." },
      { q: "Can I make a joint biodata for two siblings?", a: "The standard templates on this tool are built for one candidate per document, which keeps each biodata focused and clean. If your family wants to present two siblings' biodatas together — a documented practice in many Indian families — the practical approach is creating two separate one-page biodatas and sharing them together in the same message, since combining two full profiles onto one page compromises readability for both." },
      { q: "Should NRI candidates make two separate versions of their biodata?", a: "Generally no — one well-designed NRI biodata that includes both Indian family context (native place, Gotra if applicable) and clear NRI fields (country, visa status, dual-currency income) works for both India-based and abroad-based recipients. See our complete NRI biodata guide for the specific fields to include so one document serves both audiences.", link: { href: "/nri-biodata-for-marriage", label: "NRI marriage biodata guide" } },
      { q: "Can a biodata be used for both arranged marriage and a partner met independently?", a: "Yes. While biodatas are most strongly associated with the traditional arranged marriage process, it's increasingly common for couples who met independently — through work, mutual friends, or dating apps — to still prepare biodatas once families become involved, since many Indian families expect this document regardless of how the couple met, as part of the formal introduction to extended family." },
      { q: "How often should I update my biodata while actively searching?", a: "Update it whenever a material fact changes — a job change, a promotion, a house move, or a significant life update. Beyond factual updates, if your biodata has been circulating for six months to a year without generating meaningful responses, it's worth revisiting the photo and About Me section specifically, since these are the two most common reasons a biodata underperforms.", link: { href: "/blog/marriage-biodata-mistakes-that-get-you-rejected", label: "Common biodata mistakes" } },
      { q: "Should I stop sharing my biodata once I get engaged?", a: "Yes, and promptly — continuing to circulate your biodata after becoming engaged, even informally, can create confusion or embarrassment if it reaches a family that then makes an approach. If your biodata is on any matrimonial platform, deactivate or delete the profile once you're seriously committed to one match." },
      { q: "Can I use the same biodata PDF across multiple matrimonial platforms?", a: "Yes. Most matrimonial platforms (Shaadi.com, BharatMatrimony, Jeevansathi) accept a PDF upload alongside their own profile fields, and using the same well-designed biodata across all platforms and direct WhatsApp sharing keeps your presentation consistent everywhere rather than maintaining several different versions." },
    ],
  },
  {
    id: "special-situations",
    title: "Special Situations",
    faqs: [
      { q: "Can one biodata template work for an inter-faith or inter-community family?", a: "Yes — for an inter-faith or inter-community candidate, the most practical approach is choosing a modern, community-neutral template rather than one built around a single religion's specific fields (like a Hindu horoscope-focused template or a Muslim Bismillah-opening template). State your actual background honestly in the personal details, and let the partner preferences section reflect genuine openness rather than trying to force the biodata into one community's specific format." },
      { q: "Do all Indian states use the same biodata format?", a: "The core six-section structure is consistent nationwide, but specific fields vary meaningfully by region and community — see our dedicated guides for Hindu, Muslim, Sikh, Christian, Jain, Marathi, Tamil, Telugu, Bengali, Gujarati, and Punjabi biodata formats, each of which covers the fields and cultural context specific to that community or language." },
      { q: "Is a printed biodata still required, or is digital sufficient everywhere?", a: "Digital (PDF shared via WhatsApp or a link) is sufficient and standard practice in the vast majority of Indian matrimonial contexts today, including traditional families. Printed copies are still occasionally expected at in-person community matchmaking gatherings (like Marathi vadhu-var melavas) or when submitting to certain community registers and marriage bureaus that maintain physical files — check with the specific bureau or event if you're unsure." },
      { q: "What's the difference between a biodata and a matrimonial site profile?", a: "A matrimonial site profile is an online form filled directly into a platform like Shaadi.com or Jeevansathi, structured by that platform's own fields and searchable by other users. A biodata is a standalone document — typically a PDF — that you control, design, and share directly via WhatsApp, email, or in person, independent of any specific platform. Most serious candidates maintain both: a platform profile for discoverability, and a well-designed biodata PDF for direct sharing." },
      { q: "Do biodata formats differ for arranged marriage versus remarriage after divorce?", a: "The document structure is the same, but content emphasis shifts. First-marriage biodatas typically lead with family background and education; remarriage biodatas often give more weight to the About Me section (to establish who the candidate is as an individual, independent of their previous marriage) and require honest, clear marital status and children fields, which don't need to be prominent — or present at all — in a first-marriage biodata." },
      { q: "What if I don't have a father to list as the contact person?", a: "List whoever is genuinely managing the process — your mother, an elder sibling, a paternal or maternal uncle, or yourself directly if you're managing your search independently. There is no requirement that the contact person specifically be a father; the field exists to give the receiving family a clear point of contact, and any close family member (or the candidate themselves) fulfills that purpose." },
      { q: "How do I make a biodata if my parents are separated?", a: "State the family information honestly and simply — list the parent who is actively managing or supporting the process as the primary contact, and you're not obligated to explain the separation in the biodata itself. A phrasing like 'Mother: [name], Contact Person' with father's details listed separately (or omitted if not relevant to the process) is standard and doesn't require further elaboration in a first-introduction document." },
      { q: "Should I mention if I'm open to a live-in relationship before marriage?", a: "No — a marriage biodata is specifically a document for arranging marriage, and preferences about a live-in arrangement prior to marriage are a personal conversation to have directly with a specific match after initial contact, not content for a document shared broadly across multiple families and community networks." },
      { q: "Should I mention a physical disability in my biodata?", a: "This is a personal decision with no universal right answer, but the general guidance from disability advocacy voices within matrimonial contexts is: if the condition is visible or would reasonably come up at a first meeting, mentioning it briefly and matter-of-factly in the biodata (rather than surprising a family later) tends to lead to more genuine, compatible matches and avoids an uncomfortable disclosure conversation after interest has already been expressed." },
      { q: "What if my exact date of birth is uncertain, for example if I was adopted?", a: "Use your best documented estimate — the date on your official records (birth certificate, school leaving certificate, passport) even if it's an approximation assigned at the time. Write it as you would any other date of birth; there's no need to flag the uncertainty in the biodata itself unless it's directly relevant to horoscope matching, in which case a note like 'approximate, based on official records' alongside the horoscope fields is honest and sufficient." },
      { q: "How do I handle a biodata if I'm the sole earning member supporting my family?", a: "State this honestly in the About Me or family details section rather than omitting it — 'I currently support my parents and younger sibling's education' is a meaningful, specific fact (following the same 'replace adjective with fact' principle used throughout good About Me writing) that tells a receiving family something real about your character and circumstances, and it's better disclosed early than discovered later." },
    ],
  },
  {
    id: "privacy-safety",
    title: "Privacy & Safety",
    faqs: [
      { q: "Can I mention I have a child from a previous relationship?", a: "Yes, and this should be stated clearly rather than omitted — most templates don't have a dedicated 'Children' field by default, so add it as a custom field in the personal details section. Being upfront about this is both more honest and more effective long-term than having it emerge later in the process, since families who would have a serious objection are better identified early rather than after emotional investment has grown." },
      { q: "What if my family doesn't want any photo included at all?", a: "You can create and download a complete biodata without a photo — the templates render correctly with the photo section simply left empty. Be aware, however, that biodatas without photos generally receive meaningfully fewer responses, since the photo is typically the first thing a receiving family looks at; many families will ask for a photo before proceeding regardless." },
      { q: "Is the biodata creation process different for transgender candidates?", a: "The tool and template structure work the same regardless of gender identity — there's no separate process. What differs is a personal decision about disclosure: some transgender candidates choose to state this directly and matter-of-factly in the About Me section to ensure compatibility from the outset; others prefer to disclose in conversation after initial contact. Both are valid approaches and depend entirely on individual comfort and the specific matrimonial network being used." },
      { q: "Can I create a biodata that mixes two languages, like Hindi and English?", a: "Yes — many biodatas, particularly for North Indian families, use English as the primary language with specific terms (Gotra, Rashi, an opening invocation) written in Hindi or Devanagari script, since these terms carry more precise meaning in their original language. This bilingual approach is standard practice, not unusual, and is covered in detail in our Hindi biodata guide.", link: { href: "/biodata-for-marriage-in-hindi", label: "Hindi biodata guide" } },
      { q: "Is it safe to include my full home address in a biodata?", a: "It's safer to include only city and state (or a general area) rather than a full street address in a biodata that will circulate broadly through WhatsApp groups and multiple families. A complete address can be shared directly and privately once a specific match is being seriously considered, rather than being visible to every recipient of a widely-forwarded document." },
      { q: "How do I avoid my biodata being misused after I share it?", a: "Complete prevention isn't possible once a document is shared, but practical steps reduce risk: avoid including your full home address, share primarily through trusted family and community channels rather than public groups, use the shareable link feature (which you control and can update) rather than a permanently downloadable file where possible, and periodically search your own name and phone number online to check for unexpected exposure." },
    ],
  },
  {
    id: "matrimonial-process",
    title: "The Matrimonial Process",
    faqs: [
      { q: "Should I watermark my own biodata photo for extra protection?", a: "A visible watermark across your photo undermines the biodata's purpose — families need to see your face clearly — so this isn't standard practice for biodatas the way it might be for stock photography. If you're specifically concerned about photo misuse, the more practical safeguard is controlling who you share the document with directly rather than degrading the photo's usefulness with a watermark." },
      { q: "What should I do if my biodata gets shared without my permission?", a: "First, identify how widely it's circulated and through whom, and ask the original recipient to stop further forwarding. If it appears on a public platform or website without your consent, most platforms have a reporting mechanism for unauthorized content, and you can request removal citing personal data misuse. For persistent or malicious misuse, India's IT Act and data protection provisions provide grounds for a formal complaint if the situation escalates." },
      { q: "Can someone screenshot and misuse my biodata photo elsewhere?", a: "Technically yes, since any image shared digitally can be screenshotted or saved — no biodata tool can fully prevent this. The realistic mitigation is being thoughtful about which photo you use (a photo you'd be comfortable being seen more broadly than intended) and sharing your biodata primarily through trusted, known channels rather than fully public or unmoderated groups." },
      { q: "How many biodatas should I expect to send before finding a match?", a: "This varies enormously by community, city, age, and specific preferences, and there's no reliable average figure — some families report a match within the first handful of biodatas exchanged, others report dozens over many months. What matters more than the count is periodically reviewing whether your biodata itself is a limiting factor.", link: { href: "/blog/marriage-biodata-mistakes-that-get-you-rejected", label: "Common mistakes that reduce response rates" } },
      { q: "What typically happens after a family responds positively to a biodata?", a: "The typical next steps are: a phone call or further WhatsApp conversation between the families (sometimes including the candidates directly), horoscope matching if relevant to the community, an in-person meeting between the families (traditionally called 'seeing the girl/boy' in many communities), and — if both sides remain interested — a direct conversation between the candidates before families move toward a formal engagement discussion." },
      { q: "Is it normal to not receive replies to most biodatas sent?", a: "Yes, this is extremely common and not a reflection of the candidate's worth — families reviewing many biodatas in a week typically only respond to a small fraction, often without any acknowledgment to the ones they pass on. This is simply how high-volume biodata review works in practice, and a lack of response should not be over-interpreted." },
      { q: "Should I follow up if there's no response to my biodata?", a: "One polite follow-up after a reasonable gap (3-4 days to a week) is generally acceptable and doesn't come across as pushy, particularly if the biodata was sent with a personal introduction rather than through a broad group. Beyond one follow-up, it's better to move on — repeated follow-ups to a non-responsive family are more likely to create an awkward impression than to change the outcome." },
      { q: "Can a family reject a match based on the biodata alone, without meeting?", a: "Yes, and this is completely standard practice — the biodata's entire purpose is to allow a first-pass filtering before the significant time investment of meetings and conversations. Families routinely set aside biodatas based on stated preferences (community, horoscope compatibility, location, or other factors) without any meeting taking place, and this shouldn't be interpreted as a personal rejection of the candidate specifically." },
    ],
  },
  {
    id: "comparisons-etiquette",
    title: "Comparisons & Etiquette",
    faqs: [
      { q: "Does a biodata need to look like a professional resume for working professionals?", a: "No — while career and education details matter and should be presented clearly, a marriage biodata should not be formatted like a corporate resume or CV. It needs the warmer, more personal elements (photo, About Me, family background, partner preferences) that a professional resume deliberately excludes, since the two documents serve entirely different purposes even when created by the same accomplished professional." },
      { q: "Is a biodata necessary if a professional matchmaker or bureau is arranging everything?", a: "Yes, in almost every case — marriage bureaus and professional matchmakers typically require a biodata as their standard intake document, and it remains the artifact that gets shown to prospective families regardless of who is facilitating the introduction. Even fully bureau-managed searches rely on the biodata as the core document families review before agreeing to proceed." },
      { q: "Can grandparents or a family matchmaker create the biodata instead of parents?", a: "Yes, there's no requirement that specifically the parents create the document — grandparents, an aunt or uncle acting as the family's matchmaking coordinator, or an external professional matchmaker can all create and manage a candidate's biodata. What matters is that the information is accurate and, ideally, that the candidate has reviewed and approved the final content, particularly the About Me and partner preferences sections." },
      { q: "What is the polite way to reject a biodata you're not interested in?", a: "A brief, respectful message is sufficient and appreciated, even though many people skip this step entirely. Something like: 'Thank you for sharing — after reviewing, we don't feel it's the right match for us at this time, but we wish you all the best in your search' closes the loop without requiring a detailed explanation, and is considered good etiquette in most Indian matrimonial communities, even if not universally practiced." },
      { q: "Should a biodata be sent as a PDF attachment or shared as a link?", a: "Both are acceptable and increasingly used together — a PDF attachment works everywhere and is the format most matrimonial bureaus and community registers still expect, while a shareable link is faster for the recipient (opens instantly without downloading) and works well for quick WhatsApp introductions. Using the PDF for formal channels and the link for casual sharing covers both contexts effectively." },
    ],
  },
];

const allFaqs = categories.flatMap((c) => c.faqs);

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Marriage Biodata FAQ — 50 Questions Answered",
    description:
      "The complete marriage biodata FAQ hub — 50 real questions covering how to use the biodata tool, special life situations, privacy and safety, and matrimonial process etiquette that no single guide on this site covers in full.",
    datePublished: "2026-08-20",
    dateModified: "2026-08-20",
    author: { "@type": "Organization", name: "Marriage Biodata Hub" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      logo: { "@type": "ImageObject", url: "https://www.marriagebiodatahub.com/icon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/marriage-biodata-faq" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: "Marriage Biodata FAQ", item: "https://www.marriagebiodatahub.com/marriage-biodata-faq" },
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
              <p>
                {faq.a}
                {faq.link && (
                  <>
                    {" "}
                    <Link href={faq.link.href} className="text-brand-300 underline hover:text-brand-200">
                      {faq.link.label}
                    </Link>
                  </>
                )}
              </p>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}

export default function MarriageBiodataFAQ() {
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
            <span className="text-slate-300">Marriage Biodata FAQ</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: August 2026</span>
            <span>·</span>
            <span>50 questions answered</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Marriage Biodata FAQ — 50 Questions Answered
          </h1>

          <AEOBlock>
            This page answers 50 real questions about marriage biodatas that don't belong to any single guide —
            practical questions about using the tool, special life situations, privacy and safety, and matrimonial
            process etiquette. For deep-dive guides on specific topics — community fields, horoscope details, writing
            your About Me, sharing on WhatsApp — see the linked guides throughout, or browse our{" "}
            <Link href="/marriage-biodata-format" className="text-brand-300 underline hover:text-brand-200">
              complete guide library
            </Link>.
          </AEOBlock>

          <nav aria-label="Jump to category" className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-xs rounded-full border border-slate-700 px-4 py-2 text-slate-300 hover:border-brand-500/50 hover:text-white transition-all"
              >
                {cat.title}
              </a>
            ))}
          </nav>

          {categories.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-2">{cat.title}</h2>
              <SectionFAQ items={cat.faqs} />
            </section>
          ))}

          <div className="my-14 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Ready to create your biodata?</p>
            <p className="text-slate-400 text-sm mb-5">
              Answered the question you came here for? Start building your biodata now — free templates, no login,
              download in minutes.
            </p>
            <SmartLink
              href="/#biodata-form-wrapper"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105"
            >
              Create My Biodata — Free →
            </SmartLink>
          </div>

          <div className="mt-14 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-4">Explore specific topics in depth</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/marriage-biodata-format", label: "Complete biodata format guide" },
                { href: "/blog/how-to-make-marriage-biodata", label: "How to make a marriage biodata" },
                { href: "/about-me-for-marriage-biodata", label: "About Me examples" },
                { href: "/hindu-marriage-biodata", label: "Hindu marriage biodata" },
                { href: "/muslim-biodata-for-marriage", label: "Muslim Rishta biodata" },
                { href: "/sikh-biodata-for-marriage", label: "Sikh marriage biodata" },
                { href: "/christian-biodata-for-marriage", label: "Christian marriage biodata" },
                { href: "/jain-biodata-for-marriage", label: "Jain marriage biodata" },
                { href: "/nri-biodata-for-marriage", label: "NRI marriage biodata" },
                { href: "/biodata-for-marriage-in-hindi", label: "Hindi biodata guide" },
                { href: "/marathi-biodata-for-marriage", label: "Marathi biodata guide" },
                { href: "/tamil-biodata-for-marriage", label: "Tamil biodata guide" },
                { href: "/telugu-biodata-for-marriage", label: "Telugu biodata guide" },
                { href: "/bengali-biodata-for-marriage", label: "Bengali biodata guide" },
                { href: "/gujarati-biodata-for-marriage", label: "Gujarati biodata guide" },
                { href: "/punjabi-biodata-for-marriage", label: "Punjabi biodata guide" },
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
