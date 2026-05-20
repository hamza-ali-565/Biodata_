"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScrollMotion } from "./ScrollMotionProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function WhyPeopleLoveUs() {
    const router = useRouter();
    const { revealProps, revealFromSide } = useScrollMotion();

    const scrollToForm = () => {
        if (window.location.pathname !== "/") {
            sessionStorage.setItem("scrollToForm", "true");
            router.push("/");
            return;
        }
        const formElement = document.getElementById("biodata-form");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="mt-14 relative overflow-hidden py-16 px-6 sm:px-12 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/60 to-slate-950/60 shadow-2xl w-full">
            {/* Soft Decor Glows */}
            <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-brand-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-rose-500/10 blur-[100px] pointer-events-none" />

            <div className="w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Text & Features */}
                    <motion.div
                        {...revealFromSide(-16)}
                        className="space-y-10 lg:pr-8 flex flex-col justify-center h-full relative"
                    >
                        {/* Subtle Background Glow behind text to make it feel full */}
                        <div className="absolute -inset-6 bg-gradient-to-r from-brand-500/5 to-transparent rounded-3xl blur-2xl -z-10" />

                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-300 text-sm font-medium mb-8">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                                </span>
                                Trusted Worldwide
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                                Why are our marriage biodata being loved by people?
                            </h2>
                            <p className="text-slate-300 text-lg md:text-xl leading-loose max-w-xl font-medium">
                                We’re gathering love around the globe because we are secure, we offer free premium templates, we are editable, and we are offering theme color selection.
                            </p>
                        </div>

                        {/* Elegant glowing decorative separator */}
                        <div className="flex items-center gap-3 py-4">
                            <div className="h-[2px] w-12 bg-gradient-to-r from-brand-500 to-transparent rounded-full opacity-70" />
                            <div className="w-2 h-2 rounded-full bg-brand-400 shadow-[0_0_12px_rgba(251,146,60,0.9)]" />
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.9)]" />
                            <div className="h-[2px] w-12 bg-gradient-to-l from-rose-500 to-transparent rounded-full opacity-70" />
                        </div>
                    </motion.div>

                    {/* Right Column: Floating Templates */}
                    <motion.div
                        {...revealFromSide(16, 0.05)}
                        className="relative h-[400px] md:h-[500px] flex items-center justify-center -mx-4 lg:mx-0 mt-10 lg:mt-0 perspective-1000"
                    >
                        {/* Background subtle shape */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/5 to-rose-500/5 rounded-full blur-3xl" />

                        {/* Template 1 (Back Left) */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: -20, zIndex: 30 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="absolute left-[10%] md:left-[15%] w-[180px] md:w-[240px] aspect-[1/1.414] rounded-xl shadow-2xl border flex flex-col border-white/10 overflow-hidden transform -rotate-12 origin-bottom hover:shadow-brand-500/20"
                            style={{ zIndex: 10 }}
                        >
                            <Image
                                src="/images/new-templates/beautiful-green-and-off-white-marriage-biodata-contrast.webp"
                                alt="Beautiful Green Biodata Template"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Template 2 (Back Right) */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 15, zIndex: 30 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="absolute right-[10%] md:right-[15%] top-[10%] w-[180px] md:w-[240px] aspect-[1/1.414] rounded-xl shadow-2xl border border-white/10 overflow-hidden transform rotate-[15deg] origin-bottom hover:shadow-brand-500/20"
                            style={{ zIndex: 20 }}
                        >
                            <Image
                                src="/images/new-templates/beautiful-light-green-and-arted-dark-green-marriage-biodata-contrast.webp"
                                alt="Beautiful Art Biodata Template"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Template 3 (Front Center) */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="absolute top-[20%] md:top-[15%] w-[200px] md:w-[280px] aspect-[1/1.414] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 overflow-hidden transform rotate-2 hover:shadow-brand-500/30"
                            style={{ zIndex: 30 }}
                        >
                            <Image
                                src="/images/new-templates/beautiful-golden-border-marriage-biodata.webp"
                                alt="Golden Border Biodata Template"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* New Premium Cards Section */}
                <div className="mt-20 lg:mt-32 w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
                        {[
                            {
                                title: "Free Premium Templates:",
                                content: "People love those who create ease for them and add some value to their lives. We are here offering high-quality templates with high-quality design for free. That’s why they love us and want to create their biodata from the marriage biodata hub.",
                                delay: 0.1
                            },
                            {
                                title: "Easy to use:",
                                content: "Our marriage biodata creator is very easy to use because we are providing a solution in three steps: Enter details, select a template, and download the template for biodata. This pretty fast solution makes us different from other biodata makers. Because we believe in providing solutions and making a small effort to make you happy.",
                                delay: 0.2
                            },
                            {
                                title: "Data security:",
                                content: "On this platform, your data will be secure because we are not using any database that can save your information outside of your computer or phone. Your data will be secure because it will be saved in browser storage, which is not accessible by any other person than you. Because we know that someone’s personal information can’t be shared with everyone.",
                                delay: 0.3
                            },
                            {
                                title: "Editable format:",
                                content: "We have a long discussion above about how our marriage biodata is flexible, so that you can edit your biodata even after closing the browser. Not only can it edit personal information, but it can also change the template without entering information again and again. Because we are humans and humans can make mistakes, and also humans can correct them.",
                                delay: 0.4
                            }
                        ].map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7, delay: card.delay, ease: [0.21, 0.47, 0.32, 0.98] }}
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
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section CTA Button */}
                <motion.div 
                    {...revealProps()}
                    className="mt-16 w-full flex justify-center pb-2"
                >
                    <button
                        onClick={scrollToForm}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-10 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(244,63,94,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    >
                        Create Biodata Now
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
