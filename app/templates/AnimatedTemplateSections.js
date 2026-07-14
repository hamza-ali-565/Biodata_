"use client";

import { ViewportSection } from "../../components/ViewportSection";
import Link from "next/link";
import { Sparkles, Palette, Users, FileText, Smartphone, ChevronDown } from "lucide-react";
import { TemplateList } from "../../components/TemplateList";
import { TEMPLATE_DEFINITIONS } from "../../components/templatesConfig";
import { useTemplateAutoScroll } from "../../lib/navigationUtils";

const faqs = [
  {
    q: "Can I switch to a different template after I've filled in my details?",
    a: "Yes — and you do not need to re-enter anything. Once your details are saved in your browser, go to the preview page and click any other template from the template list on that screen. Your information fills in automatically. You can try as many templates as you want before downloading.",
  },
  {
    q: "Do all templates include Gotra, Rashi, and Nakshatra fields for Hindu families?",
    a: "Yes. Every template includes the full horoscope section — Gotra, Rashi (Zodiac / Moon Sign), Nakshatra (Birth Star), Nadi, Gan, and Manglik status. If you are from a Muslim family and these fields are not relevant, you can remove or replace them using the custom fields feature. The Hilal template is specifically designed for Muslim families with Sect and Biradari fields instead.",
  },
  {
    q: "Which template is best for sharing on WhatsApp?",
    a: "Any template works on WhatsApp, but high-contrast designs (dark text on a light background) read most clearly after WhatsApp compresses the PDF. The Nutan, Rajasvi, and Neel templates have the best WhatsApp readability based on user feedback. Avoid very dark backgrounds if your biodata will be read primarily on a phone screen.",
  },
  {
    q: "Is there a Marathi lagnacha biodata template with Kul and Kulswamini fields?",
    a: "Yes. All templates support custom fields — you can add Kul (कुळ), Kulswamini (कुलस्वामिनी), and Mulchi Gavi (native village) as additional fields in the personal details section. These are standard fields for Marathi families and work within any template design.",
  },
  {
    q: "Can I download the template in Word format, or only PDF?",
    a: "Both PDF and JPEG image format are available for download. PDF is recommended for WhatsApp sharing, printing, and uploading to matrimonial sites — it preserves the design exactly on every device. JPEG is useful if a platform or recipient specifically wants an image file. Word (.docx) format is not currently available, but all template fields are editable before download.",
  },
  {
    q: "Do you have templates for Christian, Jain, Sikh, or NRI families?",
    a: "All our templates are fully customizable regardless of community. For Christian families, you can add Church name, Denomination, and Diocese as custom fields. For Jain families, you can add Digambar/Shvetambara and dietary practices. For NRI families, Visa status, Country of residence, and Citizenship fields can be added. For Sikh families, Gurudwara name and Amritdhari status can be included. The Hilal template is the most culturally specific — it is designed for Muslim families. All others are community-neutral by design.",
  },
  {
    q: "How many templates do you have, and are new ones added?",
    a: "We currently have 40+ templates across traditional, modern, elegant, and community-specific styles. New templates are added each season — typically before the November–February peak wedding season (Dev Uthani Ekadashi onwards) and before the April–June season (Akshaya Tritiya onwards). Follow us on Pinterest or Instagram to see new templates as they are released.",
  },
];

const mistakes = [
  {
    icon: Palette,
    title: "Choosing the most decorated template instead of the most readable one",
    body: "The most ornate template in the gallery is not the best choice for most families. A heavily decorated background with dark borders makes the text harder to read on a phone screen. Families reviewing 20–30 profiles on WhatsApp are reading on a 5-inch Android screen. If your font and the background compete, they will move to the next biodata.",
    color: "text-rose-400",
  },
  {
    icon: Users,
    title: "Using a template that doesn't match your community's expectations",
    body: "A Muslim family that receives a biodata without Bismillah and without Sect and Biradari fields will notice immediately. A traditional North Indian Hindu family that doesn't see Gotra and Nakshatra fields will question whether the biodata is complete. Choose a template built for your community — not the one that looks most modern.",
    color: "text-blue-400",
  },
  {
    icon: FileText,
    title: "Picking a 2-page layout",
    body: "Some templates are built for longer content and may push your details to a second page if you fill every field. A two-page biodata rarely gets fully read. Check the single-page preview before downloading. All our templates are optimised for one A4 page when filled correctly.",
    color: "text-amber-400",
  },
  {
    icon: Smartphone,
    title: "Not previewing on a phone before sharing on WhatsApp",
    body: "A design that looks beautiful on a laptop may look completely different on a 5-inch Android phone. Always preview your downloaded PDF on the phone you will be sharing from. WhatsApp compresses PDFs slightly — high-contrast designs (dark text on light background) survive this better than pastel-on-pastel colour schemes.",
    color: "text-emerald-400",
  },
];

const familyTable = [
  { family: "North Indian Hindu (UP, Delhi, Bihar, Rajasthan)", template: "Rajasvi · Kumkum", why: "Traditional aesthetic, warm colors, formal register" },
  { family: "Marathi family (Maharashtra)", template: "Kanakamala · Peepal", why: "Understated elegance, prints well for pandit copies" },
  { family: "Muslim family (any state)", template: "Hilal", why: "Bismillah opening, Islamic motifs, Sect/Biradari fields" },
  { family: "South Indian family (Tamil, Telugu, Kannada, Kerala)", template: "Tulsi · Nutan", why: "Clean layout, horoscope fields prominent" },
  { family: "IT professional / urban modern", template: "Nutan · Neel · Shvetambar", why: "Minimal, WhatsApp-friendly, professional look" },
  { family: "NRI family sharing abroad", template: "Nutan · Rajasvi", why: "English-first, clean, works on any screen size" },
  { family: "Girl's biodata", template: "Peepal · Tulsi", why: "Softer aesthetic without being overly floral" },
  { family: "Boy's biodata", template: "Rajasvi · Nutan · Shvetambar", why: "Professional, formal, career-forward layout" },
];

export function AnimatedTemplateSections() {
  useTemplateAutoScroll();

  return (
    <div className="space-y-12 pb-16">

      {/* SECTION 1: HERO */}
      <section className="premium-section px-6 py-12 text-center sm:px-10 sm:py-16">
        <Sparkles className="absolute -left-10 -top-10 h-64 w-64 text-slate-100 opacity-5 rotate-12" />
        <Sparkles className="absolute -right-10 -bottom-10 h-64 w-64 text-slate-100 opacity-5 -rotate-12" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center text-sm text-slate-500">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-slate-300 transition-colors">Home</Link></li>
              <li aria-hidden className="text-slate-700">›</li>
              <li className="text-slate-400">Marriage Biodata Templates</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Biodata Templates — Free Download for All Indian Communities
          </h1>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            40+ templates, built for Indian families. Each one is designed for a specific community — Hindu families get Gotra, Rashi, and Nakshatra fields. Muslim families get templates that open with Bismillah and include Sect and Biradari sections. Marathi families have Kul and Kulswamini fields ready. Choose your template, fill your details, download your PDF free — no login, no watermark.
          </p>
          <Link href="/biodata-samples" className="mt-4 inline-block text-sm font-semibold text-brand-300 underline underline-offset-4 hover:text-brand-200 transition-colors">
            See filled examples before you start →
          </Link>
        </div>
      </section>

      {/* TEMPLATE LIST */}
      <section
        id="templates-grid"
        className="premium-section px-6 py-8 sm:px-10"
        aria-labelledby="template-library-heading"
      >
        <h2 id="template-library-heading" className="sr-only">
          Browse Biodata Templates
        </h2>
        <TemplateList templates={TEMPLATE_DEFINITIONS} />
      </section>

      {/* SECTION 2: COMMUNITY FILTER */}
      <ViewportSection className="premium-section px-6 py-12 sm:px-10 lg:px-16">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              Find the right template for your community
            </h2>
          </div>
          <div className="space-y-4 text-slate-300 leading-relaxed sm:text-lg">
            <div className="premium-card-static rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Hindu families</h3>
              <p>
                Our Hindu biodata templates include Gotra, Rashi, Nakshatra, Nadi, Gan, and Manglik status fields by default. South Indian families who need Jathagam format can use the same templates with the Nakshatra field as their primary horoscope reference.{" "}
                <Link href="/hindu-marriage-biodata" className="text-brand-400 hover:underline transition-colors">See Hindu biodata guide →</Link>
              </p>
            </div>
            <div className="premium-card-static rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Muslim families</h3>
              <p>
                Rishta biodata templates open with Bismillah and include Sect (Sunni/Shia/Bohra/Deobandi/Barelvi) and Biradari fields. The photo section is flexible — include or exclude depending on your family{"'"}s preference.{" "}
                <Link href="/muslim-biodata-for-marriage" className="text-brand-400 hover:underline transition-colors">See Muslim biodata guide →</Link>
              </p>
            </div>
            <div className="premium-card-static rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Marathi families</h3>
              <p>
                Lagnacha biodata templates include Kul, Kulswamini, and Mulchi Gavi (native village) fields that standard templates miss. Suitable for Maratha, Brahmin, CKP, and all Marathi communities.{" "}
                <Link href="/marathi-biodata-for-marriage" className="text-brand-400 hover:underline transition-colors">See Marathi biodata guide →</Link>
              </p>
            </div>
            <div className="premium-card-static rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Sikh, Christian, Jain, NRI families</h3>
              <p>
                Every template is fully customizable. Add the fields relevant to your community using the custom fields feature.
              </p>
            </div>
          </div>
        </div>
      </ViewportSection>

      {/* SECTION 3: HOW TO CHOOSE */}
      <ViewportSection className="premium-section px-6 py-12 sm:px-10 lg:px-16">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              How to choose the right template from our collection
            </h2>
          </div>
          <div className="space-y-5 text-slate-300 leading-relaxed sm:text-lg">
            <p>
              Choosing a template is not just about which one looks nicest — it is about which one works for your community and gets a second look from the right family.
            </p>
            <div className="space-y-4">
              <div className="premium-card-static rounded-xl p-5">
                <p className="font-semibold text-slate-100 mb-2">If your family is traditional and religious:</p>
                <p>Choose a template with warmer colors (gold, maroon, deep red) and ornamental borders. Kumkum and Rajasvi work well. Avoid templates that look too corporate or Western.</p>
              </div>
              <div className="premium-card-static rounded-xl p-5">
                <p className="font-semibold text-slate-100 mb-2">If you are an urban professional sharing on BharatMatrimony or with modern families:</p>
                <p>Choose the Nutan or Neel template. Clean lines, strong photo placement, easy to read on a phone screen.</p>
              </div>
              <div className="premium-card-static rounded-xl p-5">
                <p className="font-semibold text-slate-100 mb-2">If you are sharing primarily on WhatsApp:</p>
                <p>Any template works, but prefer designs with high contrast between text and background — they hold up better when WhatsApp compresses the PDF for preview. Nutan and Rajasvi have the best WhatsApp readability.</p>
              </div>
              <div className="premium-card-static rounded-xl p-5">
                <p className="font-semibold text-slate-100 mb-2">If the biodata will be printed:</p>
                <p>Choose Kanakamala or Peepal — both are designed with print margins and ink density in mind. Avoid very dark hero backgrounds if you are printing on a standard home printer.</p>
              </div>
            </div>
            <p className="text-slate-400 text-base">
              All templates include Gotra, Rashi, Nakshatra, and Manglik fields by default. Muslim families can use the Hilal template or switch fields to Sect and Biradari using the custom fields feature.
            </p>
          </div>
        </div>
      </ViewportSection>

      {/* SECTION 4: FOUR MISTAKES */}
      <ViewportSection className="relative px-2 sm:px-0">
        <div className="mb-12 text-center max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">
            Four mistakes to avoid when choosing your biodata template
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 max-w-5xl mx-auto px-4 sm:px-0">
          {mistakes.map((m, i) => (
            <div key={i} className="premium-card group p-6 sm:p-8">
              <m.icon className={`h-8 w-8 ${m.color} mb-4 opacity-70 group-hover:opacity-100 transition-opacity`} />
              <h3 className="text-xl font-semibold text-slate-100 mb-3">{m.title}</h3>
              <p className="text-slate-400 leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>
      </ViewportSection>

      {/* SECTION 5: WHICH TEMPLATE FOR WHICH FAMILY */}
      <ViewportSection className="premium-section px-6 py-12 sm:px-10 lg:px-16">
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              Which template works best for which family?
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm text-slate-300">
              <thead>
                <tr className="bg-white/5 text-slate-200 text-left">
                  <th className="px-5 py-4 font-semibold">Family type</th>
                  <th className="px-5 py-4 font-semibold">Recommended template</th>
                  <th className="px-5 py-4 font-semibold hidden sm:table-cell">Why</th>
                </tr>
              </thead>
              <tbody>
                {familyTable.map((row, i) => (
                  <tr key={i} className={`border-t border-white/5 ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                    <td className="px-5 py-4">{row.family}</td>
                    <td className="px-5 py-4 text-brand-300 font-medium">{row.template}</td>
                    <td className="px-5 py-4 text-slate-400 hidden sm:table-cell">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ViewportSection>

      {/* SECTION 6: DEVICE OPTIMISATION */}
      <ViewportSection className="relative pt-12 px-4 sm:px-0">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl mb-4">
            What makes a biodata template work on every device?
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 px-4 sm:px-0">
          <p className="text-slate-300 leading-relaxed sm:text-lg">
            Most biodatas in India are shared on WhatsApp and opened on an Android phone — not a laptop or desktop. A template that looks beautiful on a 15-inch screen but breaks on a 5-inch screen has failed its most important test.
          </p>
          <p className="text-slate-300 leading-relaxed sm:text-lg">
            Every template on this site is optimised for three scenarios:
          </p>

          <div className="space-y-4">
            <div className="premium-card-static rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-100 mb-2">WhatsApp sharing (most common)</h3>
              <p className="text-slate-400 leading-relaxed">
                The PDF is generated at 96 DPI with high-contrast colour settings so it renders clearly even after WhatsApp{"'"}s automatic compression. Section headings are bold enough to remain readable at thumbnail scale.
              </p>
            </div>
            <div className="premium-card-static rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Digital sharing via link</h3>
              <p className="text-slate-400 leading-relaxed">
                The shareable link version of your biodata is responsive — it adapts to the recipient{"'"}s screen size automatically. Photo placement and section spacing adjust without the layout breaking.
              </p>
            </div>
            <div className="premium-card-static rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Print</h3>
              <p className="text-slate-400 leading-relaxed">
                For families that still hand a printed copy to their pandit, community marriage bureau, or relatives at a family function, all templates are print-ready at A4 dimensions with appropriate margins. Ink-heavy dark backgrounds (like the Shvetambar hero) are flagged in the preview so you can choose a lighter option if printing at home.
              </p>
            </div>
          </div>
        </div>
      </ViewportSection>

      {/* SECTION 7: BLOG LINK (replaces Role of Color) */}
      <ViewportSection className="relative py-8 px-4 sm:px-0">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-slate-400 leading-relaxed sm:text-lg">
            Want to understand how colour choices affect how your biodata is perceived?{" "}
            <Link href="/blog/clean-and-simple-biodata-templates-for-marriage" className="text-brand-400 hover:underline transition-colors">
              Read our guide: How colour in biodata templates affects first impressions →
            </Link>
          </p>
        </div>
      </ViewportSection>

      {/* SECTION 8: FAQ */}
      <ViewportSection className="premium-section px-6 py-12 sm:px-10 lg:px-16">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              Questions about our biodata templates
            </h2>
            <div className="flex justify-center mt-4">
              <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-rose-500 rounded-full" />
            </div>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group premium-card-static rounded-2xl overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 sm:p-6 text-slate-100 font-medium list-none">
                  <span>{faq.q}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </ViewportSection>

    </div>
  );
}
