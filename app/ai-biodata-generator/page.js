import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ChevronDown } from "lucide-react";

import { SmartLink } from "../../components/SmartLink";
import { WaitlistForm } from "../../components/WaitlistForm";
import { CopyPromptButton } from "../../components/CopyPromptButton";

export const metadata = {
  title: "AI Biodata Generator — Free Prompts & Coming Tool",
  description:
    "Generate your marriage biodata About Me with AI. Free copy-paste ChatGPT prompts you can use today, plus our built-in AI generator launching soon.",
  alternates: {
    canonical: "https://www.marriagebiodatahub.com/ai-biodata-generator",
  },
  openGraph: {
    title: "AI Biodata Generator — Free Prompts & Coming Tool",
    description:
      "Generate your marriage biodata About Me with AI. Free copy-paste ChatGPT prompts you can use today, plus our built-in generator launching soon.",
    url: "https://www.marriagebiodatahub.com/ai-biodata-generator",
    type: "article",
    locale: "en_IN",
    siteName: "Marriage Biodata Hub",
    images: [
      {
        url: "https://www.marriagebiodatahub.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "AI Biodata Generator — Marriage Biodata Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Biodata Generator — Free Prompts & Coming Tool",
    description: "Generate your marriage biodata About Me with AI — free prompts you can use today.",
    images: ["https://www.marriagebiodatahub.com/images/og-image.webp"],
  },
};

const PROMPT_TEXT = `Write the About Me section for my Indian marriage biodata. Use ONLY the facts below — do not add any details I haven't given you, and do not use generic adjectives like "simple," "family-oriented," "caring," or "fun-loving" without a specific fact backing them up.

My profession/situation: [e.g., Software Engineer at a tech company in Bengaluru]

One genuine hobby with a specific detail: [e.g., I've been learning Bharatanatyam for 8 years]

A fact about my family: [e.g., I call home every Sunday without fail]

What I'm looking for in a partner: [e.g., someone who has her own ambitions and values family the same way I do]

Write this in first person, exactly 3 to 4 sentences, under 90 words total. No exclamation marks. Do not start with "I am a simple person" or any variation of that phrase. Output only the paragraph, nothing else.`;

const faqs = [
  {
    q: "Can I use AI to write my marriage biodata?",
    a: "Yes, AI tools like ChatGPT and Claude can help draft your About Me section, especially if you're stuck on where to start. The key is using AI as a first-draft assistant, not a final answer — AI-generated About Me text tends to default to the same generic phrases ('family-oriented, caring, simple') that this site's own guides specifically teach you to avoid. Use AI to get past a blank page, then edit the result to include specific, genuine facts about yourself rather than generic adjectives.",
  },
  {
    q: "What should I ask ChatGPT to write my biodata About Me?",
    a: "Give it specific facts about yourself, not just 'write my About Me for marriage.' A good prompt includes your profession, one genuine hobby with a specific detail, a fact about your family relationship, and what you're looking for in a partner — then asks the AI to write 3-4 sentences using only those facts, in first person, avoiding generic phrases. See the exact copy-paste prompt template on this page.",
  },
  {
    q: "Is a fully AI-generated biodata a good idea?",
    a: "Not for the whole biodata — most sections (personal details, family background, education) are factual information that AI cannot know about you and shouldn't guess at. AI is genuinely useful specifically for the About Me section, where the challenge is often finding the right words for facts you already know, not generating the facts themselves. Never let AI invent details about your family, career, or background that aren't true.",
  },
  {
    q: "Will Marriage Biodata Hub have a built-in AI generator?",
    a: "Yes, a guided AI About Me generator is launching directly within the biodata creation tool — you'll answer a few structured questions (profession, hobby, family detail, what you're looking for) and get a ready-to-use About Me paragraph, insertable directly into your biodata with one click. Join the waitlist on this page to be notified the moment it's live.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AI Biodata Generator",
    "@id": "https://www.marriagebiodatahub.com/ai-biodata-generator#app",
    url: "https://www.marriagebiodatahub.com/ai-biodata-generator",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web Browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    description:
      "A free AI-assisted tool for writing the About Me section of an Indian marriage biodata — includes ready-to-use ChatGPT and Claude prompts today, with a built-in guided AI generator launching directly on the platform soon.",
    inLanguage: "en-IN",
    publisher: { "@type": "Organization", name: "Marriage Biodata Hub", url: "https://www.marriagebiodatahub.com" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI Biodata Generator — Free Prompts You Can Use Today",
    description:
      "How to use AI tools like ChatGPT and Claude to help write your marriage biodata About Me section — with ready-to-copy prompts, the specific mistakes AI-generated biodatas make, and how to fix them before you use the text.",
    datePublished: "2026-08-15",
    dateModified: "2026-08-15",
    author: { "@type": "Organization", name: "Marriage Biodata Hub", url: "https://www.marriagebiodatahub.com" },
    publisher: {
      "@type": "Organization",
      name: "Marriage Biodata Hub",
      url: "https://www.marriagebiodatahub.com",
      logo: { "@type": "ImageObject", url: "https://www.marriagebiodatahub.com/images/Logo-of-marriage-biodata-hub.webp" },
    },
    inLanguage: "en-IN",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.marriagebiodatahub.com/ai-biodata-generator" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marriagebiodatahub.com" },
      { "@type": "ListItem", position: 2, name: "AI Biodata Generator", item: "https://www.marriagebiodatahub.com/ai-biodata-generator" },
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

export default function AiBiodataGenerator() {
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
            <span className="text-slate-300">AI Biodata Generator</span>
          </nav>

          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <span>Last updated: August 2026</span>
            <span>·</span>
            <span>Free prompts inside</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            AI Biodata Generator — Free Prompts You Can Use Today
          </h1>

          <AEOBlock>
            You can use AI tools like ChatGPT or Claude right now to help write your marriage biodata&apos;s About
            Me section — the part almost everyone gets stuck on. The key is giving the AI specific facts about
            yourself (your profession, one genuine hobby, a family detail, what you&apos;re looking for) rather
            than a vague instruction like &quot;write my biodata&quot; — a vague prompt produces the same generic
            &quot;simple, family-oriented, caring&quot; text that every other biodata already has. Below is a
            copy-paste prompt template that works with any AI tool, plus the specific mistakes AI-generated biodata
            text makes and how to fix them before you use it. Our own built-in AI generator — no copy-pasting
            required — is launching soon; join the waitlist below to get access first.
          </AEOBlock>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">The prompt that actually works — copy and paste this</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Most people who try &quot;write my marriage biodata About Me&quot; in ChatGPT get back exactly the
            generic text this site&apos;s own guides teach you to avoid. The problem isn&apos;t the AI — it&apos;s
            the prompt. Here&apos;s a prompt template that produces genuinely usable output, because it forces the
            AI to use your specific facts instead of inventing generic ones.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Copy this prompt, fill in your own details in the brackets, and paste it into ChatGPT, Claude, or any
            AI chat tool:
          </p>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 mb-3">
            <pre className="whitespace-pre-wrap text-sm text-slate-300 leading-relaxed font-mono">{PROMPT_TEXT}</pre>
          </div>
          <div className="flex justify-end mb-8">
            <CopyPromptButton value={PROMPT_TEXT} />
          </div>

          <div className="rounded-xl bg-brand-500/10 border border-brand-500/20 p-4 text-sm text-slate-300 mb-6">
            <strong className="text-brand-300">Why this specific prompt works:</strong> It gives the AI a hard
            constraint (only use provided facts), explicitly bans the generic phrases that make most biodatas
            forgettable, sets a length limit that matches what actually fits on a one-page biodata, and asks for
            the output alone — not a preamble, not an explanation, just the paragraph you can use directly.
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">The mistakes AI makes when writing biodatas — and how to catch them</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            AI tools are genuinely useful for getting past a blank page, but they have predictable failure patterns
            specific to this kind of writing. Check for these before you use any AI-generated text:
          </p>
          <div className="space-y-4 mb-6">
            {[
              { label: "Mistake 1 — Falling back to generic phrases anyway", desc: "Even with a good prompt, AI sometimes still produces \"warm and caring individual\" or similar. If you see this, ask it to rewrite that specific sentence using only the facts you gave it — most tools will correct this immediately when asked directly." },
              { label: "Mistake 2 — Inventing details you didn't provide", desc: "AI sometimes adds plausible-sounding but false details — a hobby you didn't mention, a family fact that isn't true. Read the output carefully and remove anything that wasn't in your original input. Never let invented details make it into your actual biodata." },
              { label: "Mistake 3 — Sounding like a corporate bio, not a person", desc: "AI trained mostly on professional writing sometimes produces LinkedIn-style phrasing (\"results-driven,\" \"passionate about\") that reads oddly in a marriage biodata context. If the output sounds like a job application, ask the AI specifically to make it \"sound like a warm, honest introduction to a family, not a professional bio.\"" },
              { label: "Mistake 4 — Getting the length wrong", desc: "AI often produces About Me sections that are too long by default. If your output exceeds 4-5 sentences, ask it to cut to the two or three most specific, memorable details rather than trying to include everything." },
              { label: "Mistake 5 — Using the exact same structure every time", desc: "If you generate multiple versions, they can start sounding formulaic in the same way generic human-written biodatas do. Read your final version against our real examples across different communities and professions to see the range of what genuinely distinctive About Me writing looks like." },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <p className="font-semibold text-white mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-300 leading-relaxed mb-6">
            See our guide on why honesty matters in every field —{" "}
            <Link href="/blog/marriage-biodata-mistakes-that-get-you-rejected" className="text-brand-300 underline hover:text-brand-200">
              biodata mistakes that get you rejected
            </Link>
            , our guide on why shorter is genuinely better —{" "}
            <Link href="/blog/should-biodata-be-one-page-or-two" className="text-brand-300 underline hover:text-brand-200">
              one page or two?
            </Link>
            , and 15 real examples across communities and professions at{" "}
            <Link href="/about-me-for-marriage-biodata" className="text-brand-300 underline hover:text-brand-200">
              About Me examples
            </Link>.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">What AI is good for in a biodata — and what it isn&apos;t</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5">
              <p className="font-semibold text-emerald-300 mb-2">Good for</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Getting past a blank page when you know your facts but struggle to find the words. Rewriting a
                rough draft to be more concise. Trying a few different tones (warm vs. formal vs. direct) quickly to
                see what feels right. Checking whether your own draft has fallen into generic adjective territory.
              </p>
            </div>
            <div className="rounded-xl bg-rose-500/5 border border-rose-500/20 p-5">
              <p className="font-semibold text-rose-300 mb-2">Not good for</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Generating your personal details, family background, or education fields — these are factual
                information the AI cannot know and should never guess at. Writing your partner preferences section
                without your direct input. Making the final decision on what to include — you know what&apos;s
                genuinely true and important about yourself; AI is a drafting tool, not a decision-maker.
              </p>
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed">
            The method behind writing a genuinely good About Me — with or without AI assistance — is explained in
            full in our dedicated guide —{" "}
            <Link href="/blog/how-to-write-about-me-in-marriage-biodata" className="text-brand-300 underline hover:text-brand-200">
              how to write About Me in a marriage biodata
            </Link>.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">Coming soon — a built-in AI generator, no copy-pasting required</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            We&apos;re building a guided AI About Me generator directly into the biodata creation tool. Instead of
            copying prompts into a separate AI chat app, you&apos;ll answer five short questions right here — your
            profession, one hobby with a specific detail, a family connection, what you&apos;re looking for, and
            your preferred tone — and get a ready-to-use About Me paragraph generated instantly, with a one-click
            button to insert it directly into your biodata form.
          </p>
          <p className="text-slate-300 leading-relaxed mb-8">
            This uses the same principle as the prompt above — specific facts in, specific and honest text out,
            with the generic-phrase problem built out of the system from the start rather than something you have
            to catch and fix yourself.
          </p>

          <div className="rounded-2xl border border-brand-500/20 bg-slate-900/60 p-8 text-center mb-12">
            <p className="text-white font-semibold text-lg mb-2">Be first to try it</p>
            <p className="text-slate-400 text-sm mb-6">
              Get notified the moment the AI generator goes live — plus early access before it&apos;s announced
              anywhere else.
            </p>
            <WaitlistForm />
          </div>

          {/* Secondary CTA */}
          <div className="my-12 rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Don&apos;t want to wait? Use the prompt above right now</p>
            <p className="text-slate-400 text-sm mb-5">
              Copy the prompt, fill in your details, paste it into ChatGPT or Claude, and bring the result back here
              to build your full biodata.
            </p>
            <SmartLink href="/#biodata-form-wrapper"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105"
            >
              Create My Biodata — Free →
            </SmartLink>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-2">Frequently Asked Questions</h2>
          <SectionFAQ items={faqs} />

          <div className="mt-14 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-4">Related guides</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/blog/how-to-write-about-me-in-marriage-biodata", label: "How to write About Me" },
                { href: "/about-me-for-marriage-biodata", label: "About Me examples" },
                { href: "/blog/marriage-biodata-mistakes-that-get-you-rejected", label: "Biodata mistakes to avoid" },
                { href: "/blog/should-biodata-be-one-page-or-two", label: "One page or two?" },
                { href: "/hobbies-for-marriage-biodata", label: "Hobbies for marriage biodata" },
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
