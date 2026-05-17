"use client";

import { BookOpen, Scale, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollMotion } from "./ScrollMotionProvider";

const articleSections = [
    {
        title: "Information preference:",
        body: "A professional marriage bio data should be well-designed information in the biodata form, which should be entered according to preferences. For example, you are making a biodata for yourself, so it should start with your information, and obviously, it should be like that; you can’t start with your professional details, as it will not have a good impact on the reader. Start writing about yourself first, then include other information like family and contact info in sequence, so your matrimonial biodata stands out.",
        icon: SlidersHorizontal,
        accent: "from-brand-500/20 via-brand-500/5 to-transparent",
        glow: "group-hover:shadow-[0_0_40px_rgba(244,63,94,0.12)]",
    },
    {
        title: "Exact and Balanced Information:",
        body: "Information in the biodata card should be to the point and balanced, and it should not be cluttered with unnecessary and off-topic details. When we talk about exact information, it does not mean that you avoid the important part of your information in a marriage bio data. First, think about the information you should include or avoid, take your time and think with a fresh mind, do some paperwork, and then include it in your wedding biodata.",
        icon: Scale,
        accent: "from-rose-500/20 via-rose-500/5 to-transparent",
        glow: "group-hover:shadow-[0_0_40px_rgba(244,63,94,0.1)]",
    },
    {
        title: "Easy to understand:",
        body: "families who are reading your biodata should understand what you have written in the wedding biodata format. You are making biodata so the families can understand them easily, not to make them realize that they’re reading a messy marriage biodata card. An easy-to-understand marriage biodata should be written in simple, native, and understandable words so the reader can easily read, and simple words help them to understand about yourself.",
        icon: BookOpen,
        accent: "from-violet-500/15 via-brand-500/5 to-transparent",
        glow: "group-hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]",
    },
];

export function BiodataFormatExplanation() {
    const { revealProps, fadeUp, stagger, viewport } = useScrollMotion();

    return (
        <section
            aria-labelledby="biodata-format-heading"
            className="relative mt-14 w-full overflow-hidden"
        >
            <motion.div
                {...revealProps()}
                className="relative rounded-[2rem] p-[1px] shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:rounded-[2.5rem]"
            >
                <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-500/40 via-white/10 to-rose-500/30 opacity-70 sm:rounded-[2.5rem]"
                    animate={{ opacity: [0.45, 0.75, 0.45] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-slate-950/75 backdrop-blur-2xl sm:rounded-[calc(2.5rem-1px)]">
                    <motion.div
                        aria-hidden
                        className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-brand-500/15 blur-[100px]"
                        animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
                        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        aria-hidden
                        className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-rose-500/12 blur-[110px]"
                        animate={{ x: [0, -20, 0], y: [0, 18, 0] }}
                        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950/30 to-slate-950/80"
                    />
                    <motion.div
                        aria-hidden
                        className="pointer-events-none absolute right-8 top-8 h-28 w-28 rounded-full border border-white/[0.04] bg-white/[0.02] blur-sm"
                        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        aria-hidden
                        className="pointer-events-none absolute bottom-24 left-6 h-20 w-20 rounded-2xl border border-brand-500/10 bg-brand-500/5 backdrop-blur-md"
                        animate={{ rotate: [0, 6, 0], y: [0, -8, 0] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        aria-hidden
                        className="pointer-events-none absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-500/5 blur-[80px]"
                    />
                    <motion.div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />

                    <article className="relative z-10 px-5 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
                        {/* H2 — Hero title */}
                        <motion.header
                            className="mx-auto max-w-4xl text-center"
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewport}
                        >
                            <motion.h2
                                id="biodata-format-heading"
                                variants={fadeUp}
                                className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
                            >
                                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                                    Marriage Biodata Format: Designing Your Best Introduction
                                </span>
                            </motion.h2>

                            <motion.div
                                variants={fadeUp}
                                className="mx-auto mt-6 flex justify-center"
                                aria-hidden
                            >
                                <div className="relative h-1 w-20 overflow-hidden rounded-full bg-white/10">
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-500 via-rose-400 to-brand-500" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-500 via-rose-400 to-brand-500 blur-md opacity-80" />
                                </div>
                            </motion.div>

                            <motion.p
                                variants={fadeUp}
                                className="mx-auto mt-8 max-w-2xl text-base font-normal leading-[1.85] text-slate-300/95 sm:text-lg sm:leading-[1.9]"
                            >
                                Presenting biodata for marriage to someone means presenting yourself. Focus on keeping it clean, well-structured, and visually appealing, which should be easy to read to make a strong impression. Selecting the right format is essential so you can highlight the important information without making it messy and confusing.
                            </motion.p>
                        </motion.header>

                        {/* Visual separator */}
                        <motion.div
                            {...revealProps()}
                            className="mx-auto my-14 flex max-w-6xl items-center gap-4 sm:my-16 lg:my-20"
                            aria-hidden
                        >
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            <motion.div className="h-1.5 w-1.5 rounded-full bg-brand-400/80 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </motion.div>

                        {/* H3 — Section heading */}
                        <motion.div
                            {...revealProps()}
                            className="relative mx-auto mb-12 max-w-6xl sm:mb-14 lg:mb-16"
                        >
                            <div
                                aria-hidden
                                className="absolute -left-1 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-brand-400/80 via-rose-500/60 to-transparent sm:block"
                            />
                            <div className="flex flex-col gap-5 sm:pl-6">
                                <div
                                    aria-hidden
                                    className="h-px w-16 bg-gradient-to-r from-brand-500/80 via-rose-500/50 to-transparent sm:w-24"
                                />
                                <h3 className="max-w-3xl text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl md:text-[2rem] md:leading-tight">
                                    What a Well-Organized Wedding Biodata Looks Like?
                                </h3>
                            </div>
                        </motion.div>

                        {/* H4 article cards */}
                        <motion.div
                            className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-7 lg:grid-cols-3 lg:gap-8"
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewport}
                        >
                            {articleSections.map((section, index) => {
                                const Icon = section.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={fadeUp}
                                        className={
                                            index === 2
                                                ? "lg:col-span-1"
                                                : undefined
                                        }
                                    >
                                        <motion.article
                                            className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-slate-900/50 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-500/25 sm:p-7 lg:p-8 ${section.glow}`}
                                        >
                                            <motion.div
                                                aria-hidden
                                                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                                style={{
                                                    background:
                                                        "linear-gradient(135deg, rgba(244,63,94,0.12), transparent 45%, rgba(244,63,94,0.06))",
                                                }}
                                            />
                                            <div
                                                aria-hidden
                                                className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${section.accent} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
                                            />
                                            <div
                                                aria-hidden
                                                className="pointer-events-none absolute right-0 top-0 h-14 w-14 rounded-bl-[1.75rem] border-b border-l border-white/[0.06] bg-white/[0.02] transition-colors duration-500 group-hover:border-brand-500/20 group-hover:bg-brand-500/5"
                                            />

                                            <div className="relative mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-brand-400 shadow-inner shadow-brand-500/10 transition-all duration-500 group-hover:scale-105 group-hover:border-brand-400/30 group-hover:bg-brand-500/15">
                                                <Icon className="h-5 w-5" aria-hidden />
                                            </div>

                                            <h4 className="relative mb-4 text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">
                                                {section.title}
                                            </h4>

                                            <p className="relative flex-1 text-sm leading-[1.85] text-slate-300/95 sm:text-[0.95rem] sm:leading-[1.9]">
                                                {section.body}
                                            </p>

                                            <div
                                                aria-hidden
                                                className="relative mt-6 h-px w-full bg-gradient-to-r from-brand-500/30 via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                            />
                                        </motion.article>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </article>
                </motion.div>
            </motion.div>
        </section>
    );
}
