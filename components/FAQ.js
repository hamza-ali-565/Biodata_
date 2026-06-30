import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
    {
        question: "What is a marriage biodata?",
        answer: "A marriage biodata is a structured one-page document used in Indian arranged marriages. It introduces a bride or groom to a potential match's family, covering personal details, family background, education, career, horoscope information (for Hindu families), and partner preferences. It works like a resume but for the marriage process — and is typically shared via WhatsApp with relatives or uploaded to matrimonial sites like Shaadi.com and BharatMatrimony.",
    },
    {
        question: "Is Marriage Biodata Hub completely free?",
        answer: "Yes. You can create your full biodata, choose any template, preview it, and download the PDF completely free — no login, no email, no credit card. Your data is processed in your browser and never stored on our servers.",
    },
    {
        question: "Can I edit my biodata after downloading?",
        answer: "Yes, always. Return to marriagebiodatahub.com on the same device and your information will be restored from your browser's local storage. Update any field and re-download your updated PDF anytime.",
    },
    {
        question: "How do I share my marriage biodata on WhatsApp?",
        answer: "After downloading your PDF, tap the WhatsApp share button on the download screen. This opens WhatsApp with your biodata PDF attached and a ready-to-send message. You can also share the private link we generate — it opens your biodata beautifully on any phone without needing to download a file.",
    },
    {
        question: "Which Indian communities does Marriage Biodata Hub support?",
        answer: "We have dedicated templates and fields for Hindu, Muslim, Sikh, Christian, Jain, Marathi, Gujarati, Tamil, Telugu, Bengali, and Punjabi communities. Each template includes the community-specific fields that families actually check — Gotra, Rashi, and Manglik for Hindu families; Sect and Biradari for Muslim families; Kul and Kulswamini for Marathi families; Natchathiram and Rasi for Tamil families.",
        links: [
            { href: "/hindu-marriage-biodata", label: "Hindu biodata guide" },
            { href: "/muslim-biodata-for-marriage", label: "Muslim biodata guide" },
            { href: "/sikh-biodata-for-marriage", label: "Sikh biodata guide" },
            { href: "/christian-biodata-for-marriage", label: "Christian biodata guide" },
            { href: "/jain-biodata-for-marriage", label: "Jain biodata guide" },
            { href: "/nri-biodata-for-marriage", label: "NRI biodata guide" },
            { href: "/marathi-biodata-for-marriage", label: "Marathi biodata guide" },
            { href: "/hindi-biodata-for-marriage", label: "Hindi shadi biodata" },
        ],
    },
    {
        question: "Do I need to include a photo in my biodata?",
        answer: "Yes, if possible. A biodata with a photo receives significantly more responses than one without. Use a recent photo taken in the last 6 months, with a plain or light background, natural lighting, and a clear face. Avoid filters.",
    },
];

export function FAQ() {
    return (
        <section id="faq" className="mt-14 w-full mx-auto scroll-mt-24 px-4 py-10 sm:px-6 relative z-10" aria-labelledby="faq-heading">

            {/* Asian Wedding Theme Background Art: Mandala Motif */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none blur-[1px]">
                <div className="absolute top-[5%] left-[-10%] w-56 h-56 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] opacity-[0.02] -rotate-12">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white" preserveAspectRatio="xMidYMid meet">
                        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" />
                        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" />
                        <path d="M50 20 C65 20 65 35 50 50 C35 35 35 20 50 20 Z" stroke="currentColor" strokeWidth="1" />
                        <path d="M50 80 C65 80 65 65 50 50 C35 65 35 80 50 80 Z" stroke="currentColor" strokeWidth="1" />
                        <path d="M20 50 C20 65 35 65 50 50 C35 35 20 35 20 50 Z" stroke="currentColor" strokeWidth="1" />
                        <path d="M80 50 C80 65 65 65 50 50 C65 35 80 35 80 50 Z" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </div>

                <div className="absolute bottom-[0%] right-[-10%] w-56 h-56 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] opacity-[0.02] rotate-45">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white" preserveAspectRatio="xMidYMid meet">
                        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" />
                        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" />
                        <path d="M50 20 C65 20 65 35 50 50 C35 35 35 20 50 20 Z" stroke="currentColor" strokeWidth="1" />
                        <path d="M50 80 C65 80 65 65 50 50 C35 65 35 80 50 80 Z" stroke="currentColor" strokeWidth="1" />
                        <path d="M20 50 C20 65 35 65 50 50 C35 35 20 35 20 50 Z" stroke="currentColor" strokeWidth="1" />
                        <path d="M80 50 C80 65 65 65 50 50 C65 35 80 35 80 50 Z" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 text-center mb-10">
                <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                    Frequently Asked Questions
                </h2>
                <div className="flex justify-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-rose-500 rounded-full mb-8" />
                </div>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => {
                    return (
                        <article
                            key={index}
                            className="premium-card-static overflow-hidden"
                            itemScope
                            itemProp="mainEntity"
                            itemType="https://schema.org/Question"
                        >
                            <details className="group marker:content-none [&::-webkit-details-marker]:hidden">
                                <summary
                                    className="flex w-full items-center justify-between p-5 md:p-6 text-left cursor-pointer focus:outline-none focus-visible:bg-slate-800/50"
                                >
                                    <h3
                                        className="font-semibold text-white pr-4 sm:text-lg"
                                        itemProp="name"
                                    >
                                        {faq.question}
                                    </h3>
                                    <div
                                        className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 transition-transform duration-300 group-open:rotate-180 group-open:bg-brand-500/20 text-slate-400 group-open:text-brand-400"
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </summary>

                                <div
                                    id={`faq-answer-${index}`}
                                    itemScope
                                    itemProp="acceptedAnswer"
                                    itemType="https://schema.org/Answer"
                                >
                                    <div className="px-5 md:px-6 pb-6 pt-0 text-slate-300 leading-relaxed text-sm lg:text-base">
                                        <p itemProp="text">{faq.answer}</p>
                                        {faq.links && (
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {faq.links.map(({ href, label }) => (
                                                    <Link key={href} href={href} className="text-brand-400 hover:text-brand-300 underline underline-offset-2 transition-colors">
                                                        {label} →
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </details>
                        </article>
                    );
                })}
            </div>

            {/* Structural Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map((faq) => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
        </section>
    );
}
