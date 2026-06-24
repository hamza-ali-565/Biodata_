import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SmartLink } from "./SmartLink";
import { ScrollToFormButton } from "./ScrollToFormButton";

export function WhyPeopleLoveUs() {



    return (
        <section className="premium-section mt-14 w-full py-16 px-6 sm:px-12">
            {/* Soft Decor Glows */}
            <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-brand-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-rose-500/10 blur-[100px] pointer-events-none" />

            <div className="w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Text & Features */}
                    <div className="space-y-10 lg:pr-8 flex flex-col justify-center h-full relative">
                        {/* Subtle Background Glow behind text to make it feel full */}
                        <div className="absolute -inset-6 bg-gradient-to-r from-brand-500/5 to-transparent rounded-3xl blur-2xl -z-10" />

                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-300 text-sm font-medium mb-8">
                                <span className="relative flex h-2 w-2">
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                                </span>
                                Trusted Worldwide
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                                Why Indian Families Choose Marriage Biodata Hub
                            </h2>
                            <p className="text-slate-300 text-lg md:text-xl leading-loose max-w-xl font-medium">
                                Three things set us apart: your data stays on your device, every community gets the right fields, and sharing on WhatsApp takes one tap.
                            </p>
                        </div>

                        {/* Elegant glowing decorative separator */}
                        <div className="flex items-center gap-3 py-4">
                            <div className="h-[2px] w-12 bg-gradient-to-r from-brand-500 to-transparent rounded-full opacity-70" />
                            <div className="w-2 h-2 rounded-full bg-brand-400 shadow-[0_0_12px_rgba(251,146,60,0.9)]" />
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.9)]" />
                            <div className="h-[2px] w-12 bg-gradient-to-l from-rose-500 to-transparent rounded-full opacity-70" />
                        </div>
                    </div>

                    {/* Right Column: Floating Templates */}
                    <div className="relative h-[400px] md:h-[500px] flex items-center justify-center -mx-4 lg:mx-0 mt-10 lg:mt-0 perspective-1000">
                        {/* Background subtle shape */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/5 to-rose-500/5 rounded-full blur-3xl" />

                        {/* Template 1 (Back Left) */}
                        <div
                            className="absolute left-[10%] md:left-[15%] w-[180px] md:w-[240px] aspect-[1/1.414] rounded-xl shadow-2xl border flex flex-col border-white/10 overflow-hidden transform -rotate-12 origin-bottom hover:scale-[1.05] hover:-rotate-[20deg] hover:z-30 hover:shadow-brand-500/20 transition-all duration-300 ease-out"
                            style={{ zIndex: 10 }}
                        >
                            <Image
                                src="/images/new-templates/beautiful-green-and-off-white-marriage-biodata-contrast.webp"
                                alt="Beautiful Green Biodata Template"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Template 2 (Back Right) */}
                        <div
                            className="absolute right-[10%] md:right-[15%] top-[10%] w-[180px] md:w-[240px] aspect-[1/1.414] rounded-xl shadow-2xl border border-white/10 overflow-hidden transform rotate-[15deg] origin-bottom hover:scale-[1.05] hover:rotate-[15deg] hover:z-30 hover:shadow-brand-500/20 transition-all duration-300 ease-out"
                            style={{ zIndex: 20 }}
                        >
                            <Image
                                src="/images/new-templates/beautiful-light-green-and-arted-dark-green-marriage-biodata-contrast.webp"
                                alt="Beautiful Art Biodata Template"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Template 3 (Front Center) */}
                        <div
                            className="absolute top-[20%] md:top-[15%] w-[200px] md:w-[280px] aspect-[1/1.414] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 overflow-hidden transform rotate-2 hover:scale-[1.05] hover:-translate-y-2 hover:z-30 hover:shadow-brand-500/30 transition-all duration-300 ease-out"
                            style={{ zIndex: 30 }}
                        >
                            <Image
                                src="/images/new-templates/beautiful-golden-border-marriage-biodata.webp"
                                alt="Golden Border Biodata Template"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* New Premium Cards Section */}
                <div className="mt-20 lg:mt-32 w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
                        {[
                            {
                                title: "Your data, your device.",
                                content: "Unlike most biodata makers that store your family’s details on their servers, Marriage Biodata Hub processes everything in your browser. Close the tab, come back tomorrow — your biodata is still there.",
                            },
                            {
                                title: "Built for every Indian community.",
                                content: "From Gotra and Nakshatra fields for Hindu families, to Sect and Biradari fields for Muslim families, to Kul and Kulswamini for Marathi families — the right fields are already waiting for you.",
                                links: [
                                    { href: "/hindu-marriage-biodata", label: "Hindu biodata guide" },
                                    { href: "/muslim-biodata-for-marriage", label: "Muslim biodata guide" },
                                    { href: "/marathi-biodata-for-marriage", label: "Marathi biodata guide" },
                                    { href: "/hindi-biodata-for-marriage", label: "Hindi shadi biodata" },
                                ],
                            },
                            {
                                title: "One click to WhatsApp.",
                                content: "Most families in India share biodatas through WhatsApp. We’ve made it a single tap — PDF ready, message ready, no compression, no format issues.",
                            },
                        ].map((card, index) => (
                            <div
                                key={index}
                                className="relative group rounded-3xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col text-left"
                            >
                                {/* Gradient Border Background */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/0 group-hover:from-brand-500/40 group-hover:to-rose-500/40 transition-colors duration-500" />
                                
                                {/* Card Content Wrapper */}
                                <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-slate-900/90 backdrop-blur-2xl transition-colors duration-500 group-hover:bg-slate-900/80" />
                                
                                {/* Animated SVG background art for cards */}
                                <div className="absolute inset-[1px] pointer-events-none overflow-hidden rounded-[calc(1.5rem-1px)]">
                                    {/* Glowing Gradients */}
                                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-500/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform group-hover:scale-125" />
                                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-rose-500/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform group-hover:scale-125" />
                                    
                                    {/* Floating Particles & Mesh Pattern */}
                                    <svg className="absolute inset-0 w-full h-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id={`love-card-mesh-${index}`} width="32" height="32" patternUnits="userSpaceOnUse">
                                                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
                                                <circle cx="16" cy="16" r="1" fill="currentColor" className="text-white" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill={`url(#love-card-mesh-${index})`} />
                                    </svg>
                                </div>

                                <div className="relative z-10 flex flex-col h-full p-8 lg:p-10">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-5 leading-snug group-hover:text-brand-300 transition-colors duration-300">
                                        {card.title}
                                    </h3>
                                    <div className="w-12 h-[3px] bg-gradient-to-r from-brand-500 to-rose-500 rounded-full mb-6 group-hover:w-20 transition-all duration-500 ease-out opacity-70 group-hover:opacity-100" />
                                    <p className="text-slate-300 text-sm md:text-base leading-relaxed flex-grow font-medium">
                                        {card.content}
                                    </p>
                                    {card.links && (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {card.links.map(({ href, label }) => (
                                                <Link key={href} href={href} className="text-xs text-brand-400 hover:text-brand-300 underline underline-offset-2 transition-colors">
                                                    {label} →
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section CTA Button */}
                <div className="mt-16 w-full flex justify-center pb-2">
                    <ScrollToFormButton
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-10 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(244,63,94,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    >
                        Create Biodata Now
                        <ArrowRight className="w-6 h-6" />
                    </ScrollToFormButton>
                </div>
            </div>
        </section>
    );
}
