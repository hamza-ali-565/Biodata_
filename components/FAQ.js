import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Do I need design skills to create a good-looking marriage biodata?",
        answer: "No design skills are required to create a biodata. Simply enter your details, choose a template, and your beautiful marriage biodata will be ready to download in PDF format.",
    },
    {
        question: "Is it possible to include a profile photo in the biodata?",
        answer: "Certainly! You can include your profile photo on the first page of your biodata. However, please note that currently, you can only add one photo.",
    },
    {
        question: "Do I need to sign up/register in order to create a biodata?",
        answer: "No, signing up/registration is not required to create your biodata. Simply enter your details, select your preferred template, and your marriage biodata will be ready to download.",
    },
    {
        question: "What format will I get my biodata in?",
        answer: "We'll provide your marriage biodata as a high-quality PDF, which you can easily download. This format ensures your biodata looks professional and clear whether you're viewing it on screen or printing it out.",
    },
    {
        question: "Is it possible to modify the biodata once it is downloaded?",
        answer: "No, it is not possible to modify the existing biodata as of now. Since we are not storing any information on our end, editing is not possible. You will need to enter the details again and download the biodata if you want to modify anything.",
    },
    {
        question: "Is it possible to include custom fields or custom data in my marriage biodata?",
        answer: "Yes, with our biodata builder you can personalise your information according to your preferences. You can add new fields or modify existing ones to tailor your biodata.",
    },
    {
        question: "Do you have templates for different communities?",
        answer: "Yes. We offer marriage biodata templates for various communities including Hindu, Muslim, Sikh, Christian, and more. We also provide generic templates suitable for all communities.",
    },
    {
        question: "Can I create my biodata in my native language?",
        answer: "Absolutely! Our platform supports multiple languages such as Hindi, English, Marathi, Gujarati, and many more.",
    },
    {
        question: "How and where can I reach out for queries or feedback?",
        answer: "You can contact us anytime by sending an email to marriagebiodatahub@gmail.com.",
        isHtml: true,
        htmlAnswer: "You can contact us anytime by sending an email to <a href='mailto:marriagebiodatahub@gmail.com' class='text-brand-400 hover:text-brand-300 underline underline-offset-2'>marriagebiodatahub@gmail.com</a>."
    },
    {
        question: "Can I see examples of marriage biodata formats?",
        answer: "Yes! You can explore our template collection to see different biodata styles and get inspiration.",
    },
    {
        question: "What makes this biodata maker the best tool to create marriage biodata?",
        answer: "Our platform focuses on simplicity, design quality, and reliability.",
        hasList: true,
        listItems: [
            "Professionally Designed Templates created with a balance of tradition and modern style.",
            "Beautiful and intuitive interface that makes biodata creation easy and enjoyable.",
            "Trusted by thousands of families who use our platform.",
            "Fast and simple process allowing users to create a professional biodata within minutes."
        ]
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
                                        <div itemProp="text">
                                            {faq.isHtml ? (
                                                <p dangerouslySetInnerHTML={{ __html: faq.htmlAnswer }} />
                                            ) : (
                                                <p>{faq.answer}</p>
                                            )}

                                            {faq.hasList && (
                                                <div className="mt-4 space-y-3">
                                                    <p>Key highlights:</p>
                                                    <ul className="list-disc pl-5 space-y-2">
                                                        {faq.listItems.map((item, i) => {
                                                            const boldSplit = item.split(" created with ");
                                                            if (boldSplit.length > 1) {
                                                                return (
                                                                    <li key={i}>
                                                                        <strong className="text-white font-semibold">{boldSplit[0]}</strong> created with {boldSplit[1]}
                                                                    </li>
                                                                )
                                                            }
                                                            const boldSplit2 = item.split(" that makes ");
                                                            if (boldSplit2.length > 1) {
                                                                return (
                                                                    <li key={i}>
                                                                        <strong className="text-white font-semibold">{boldSplit2[0]}</strong> that makes {boldSplit2[1]}
                                                                    </li>
                                                                )
                                                            }
                                                            const boldSplit3 = item.split(" who use ");
                                                            if (boldSplit3.length > 1) {
                                                                return (
                                                                    <li key={i}>
                                                                        <strong className="text-white font-semibold">{boldSplit3[0]}</strong> who use {boldSplit3[1]}
                                                                    </li>
                                                                )
                                                            }
                                                            const boldSplit4 = item.split(" allowing users ");
                                                            if (boldSplit4.length > 1) {
                                                                return (
                                                                    <li key={i}>
                                                                        <strong className="text-white font-semibold">{boldSplit4[0]}</strong> allowing users {boldSplit4[1]}
                                                                    </li>
                                                                )
                                                            }
                                                            return <li key={i}>{item}</li>
                                                        })}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
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
                                "text": faq.hasList
                                    ? `${faq.answer} Key highlights: ${faq.listItems.join(' ')}`
                                    : faq.answer
                            }
                        }))
                    })
                }}
            />
        </section>
    );
}
