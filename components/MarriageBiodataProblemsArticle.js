"use client";

import { motion } from "framer-motion";
import { Download, LayoutGrid, ListOrdered } from "lucide-react";
import { useScrollMotion } from "./ScrollMotionProvider";

const subsections = [
    {
        title: "Biodata Template Options:",
        body: "On this app, you will get a variety of templates made with different cultural designs. You can make a live preview of them and select your favorite one. Currently,  we are offering 28+  biodata template designs, yes, you read it right, that's a big number because we know what it feels like when you have freedom of choice. You can select premium biodata templates for free according to your culture and society, and download them as well.    ",
        icon: LayoutGrid,
        accent: "from-emerald-500/20 via-brand-500/5 to-transparent",
        borderGlow: "group-hover:shadow-[0_0_48px_rgba(16,185,129,0.12)]",
        number: "01",
    },
    {
        title: "Low-Quality Downloads:",
        body: "Creating a marriage biodata is not enough, but downloading it in high-quality format is also important because a good design can also look ugly if its quality is not very low. Since we are offering you to download it in PDF and JPEG format, in this case, quality matters a lot because a blurry PDF or Image does not stand out, and we understand that. We are providing a high-quality file download in two different formats because the color, theme, and format design look more attractive in high-quality.",
        icon: Download,
        accent: "from-sky-500/20 via-violet-500/5 to-transparent",
        borderGlow: "group-hover:shadow-[0_0_48px_rgba(56,189,248,0.12)]",
        number: "02",
    },
    {
        title: "Difficulty in Organizing Information:",
        body: "When users handle too many things manually, it becomes very difficult for them to manage them, so some things are automatically managed by the system, and the hierarchy of information is one of them. Organizing information by the system is a good thing, so the user cannot get confused about arranging them, because sometimes we don't know about the thing and become a perfectionist in that thing, we do not take any step, and just delay it. Marriage biodata hub sets the information hierarchy in such a way that the user first enters personal details, then family details, and lastly contact details, and it will be shown in the same hierarchy in the matrimonial biodata template.",
        icon: ListOrdered,
        accent: "from-rose-500/20 via-amber-500/5 to-transparent",
        borderGlow: "group-hover:shadow-[0_0_48px_rgba(244,63,94,0.12)]",
        number: "03",
    },
];

function ProblemsSectionBackground() {
    const particles = [
        { cx: 8, cy: 25, r: 1.1, delay: 0.2 },
        { cx: 22, cy: 62, r: 0.9, delay: 0.7 },
        { cx: 38, cy: 15, r: 1.2, delay: 1.1 },
        { cx: 52, cy: 48, r: 0.75, delay: 0.4 },
        { cx: 68, cy: 78, r: 1, delay: 1.5 },
        { cx: 82, cy: 32, r: 1.15, delay: 0.9 },
        { cx: 92, cy: 58, r: 0.85, delay: 0.1 },
        { cx: 15, cy: 85, r: 1.05, delay: 1.3 },
    ];

    return (
        <motion.div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
                className="absolute -right-28 top-[12%] h-[440px] w-[440px] rounded-full bg-emerald-500/10 blur-[130px]"
                animate={{ x: [0, -28, 0], y: [0, 18, 0], scale: [1, 1.07, 1] }}
                transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute -left-24 bottom-[10%] h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[120px]"
                animate={{ x: [0, 22, 0], y: [0, -16, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute left-1/3 top-1/2 h-56 w-56 rounded-full bg-brand-500/8 blur-[90px]"
                animate={{ opacity: [0.35, 0.65, 0.35] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute -left-[10%] bottom-[15%] h-[min(480px,50vw)] w-[min(480px,50vw)] opacity-[0.035] text-emerald-300/80"
                animate={{ rotate: -360 }}
                transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
            >
                <svg viewBox="0 0 200 200" fill="none" className="h-full w-full">
                    <defs>
                        <linearGradient id="problems-mesh-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <polygon
                        points="100,15 185,55 185,145 100,185 15,145 15,55"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        fill="url(#problems-mesh-grad)"
                    />
                    <polygon
                        points="100,40 155,65 155,135 100,160 45,135 45,65"
                        stroke="currentColor"
                        strokeWidth="0.4"
                        strokeDasharray="4 4"
                    />
                    {Array.from({ length: 6 }).map((_, i) => (
                        <line
                            key={i}
                            x1="100"
                            y1="100"
                            x2={100 + 80 * Math.cos((i * Math.PI) / 3)}
                            y2={100 + 80 * Math.sin((i * Math.PI) / 3)}
                            stroke="currentColor"
                            strokeWidth="0.3"
                            opacity="0.6"
                        />
                    ))}
                </svg>
            </motion.div>

            <motion.svg
                viewBox="0 0 400 180"
                className="absolute right-0 top-[20%] h-40 w-2/3 opacity-[0.1] sm:h-52"
                preserveAspectRatio="none"
            >
                <motion.path
                    d="M0 90 C80 40 160 140 240 70 S400 110 400 60"
                    stroke="url(#problems-curve-grad)"
                    strokeWidth="1.2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.8, ease: "easeOut" }}
                />
                <motion.path
                    d="M0 120 C100 80 200 150 300 95 S400 130 400 100"
                    stroke="url(#problems-curve-grad)"
                    strokeWidth="0.5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3.2, delay: 0.4, ease: "easeOut" }}
                />
                <defs>
                    <linearGradient id="problems-curve-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                        <stop offset="35%" stopColor="#10b981" stopOpacity="0.7" />
                        <stop offset="65%" stopColor="#38bdf8" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </motion.svg>

            <motion.div
                className="absolute right-[8%] top-[28%] h-20 w-20 rotate-45 rounded-2xl border border-emerald-500/15 bg-emerald-500/5 backdrop-blur-sm"
                animate={{ y: [0, -16, 0], rotate: [45, 52, 45] }}
                transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute left-[12%] top-[35%] h-14 w-14 rounded-full border border-sky-400/20 bg-sky-500/5"
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-[30%] right-[20%] h-2 w-2 rounded-full bg-sky-400/70 shadow-[0_0_14px_rgba(56,189,248,0.9)]"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full opacity-25"
                preserveAspectRatio="xMidYMid slice"
            >
                {particles.map((p, i) => (
                    <motion.circle
                        key={i}
                        cx={p.cx}
                        cy={p.cy}
                        r={p.r}
                        fill="currentColor"
                        className="text-emerald-400/40"
                        animate={{
                            opacity: [0.15, 0.85, 0.15],
                            cx: [p.cx, p.cx + 2, p.cx],
                        }}
                        transition={{
                            duration: 4.5 + (i % 4),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: p.delay,
                        }}
                    />
                ))}
            </svg>

            <motion.div
                className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent"
                animate={{ opacity: [0.25, 0.7, 0.25] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
        </motion.div>
    );
}

export function MarriageBiodataProblemsArticle() {
    const { revealProps, fadeUp, stagger, viewport } = useScrollMotion();

    return (
        <section
            id="biodata-problems"
            aria-labelledby="biodata-problems-heading"
            className="relative mt-14 w-full scroll-mt-24 overflow-hidden"
        >
            <motion.div
                {...revealProps()}
                className="relative rounded-[2rem] p-[1px] shadow-[0_28px_90px_rgba(0,0,0,0.5)] sm:rounded-[2.5rem]"
            >
                <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-bl from-emerald-500/40 via-white/10 to-sky-500/35 opacity-70 sm:rounded-[2.5rem]"
                    animate={{ opacity: [0.45, 0.8, 0.45] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-slate-950/80 backdrop-blur-2xl sm:rounded-[calc(2.5rem-1px)]">
                    <ProblemsSectionBackground />

                    <motion.div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-900/25 to-slate-950/90"
                    />

                    <article className="relative z-10 px-5 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
                        <motion.header
                            className="mx-auto max-w-4xl text-center"
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewport}
                        >
                            <motion.h2
                                id="biodata-problems-heading"
                                variants={fadeUp}
                                className="text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
                            >
                                <span className="bg-gradient-to-r from-white via-emerald-50/90 to-slate-300 bg-clip-text text-transparent">
                                    Problems while creating marriage biodata online?
                                </span>
                            </motion.h2>

                            <motion.div
                                variants={fadeUp}
                                className="mx-auto mt-6 flex justify-center gap-2"
                                aria-hidden
                            >
                                <span className="h-1 w-8 rounded-full bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                <span className="h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 via-sky-400 to-brand-500" />
                                <span className="h-1 w-8 rounded-full bg-brand-500/80 shadow-[0_0_10px_rgba(244,63,94,0.4)]" />
                            </motion.div>

                            <motion.p
                                variants={fadeUp}
                                className="mx-auto mt-8 max-w-3xl text-base font-normal leading-[1.88] text-slate-300/95 sm:text-lg sm:leading-[1.92]"
                            >
                                Many people face problems while creating biodata for marriage, from limited templates to a lack of knowledge of color combinations and what font should be used in the template. It is very annoying if you have very limited choices and you just compromise your biodata just because someone is not providing you with choices. On this platform, you will get full control over template selection, font selection, and color combination.
                            </motion.p>
                        </motion.header>

                        <motion.div
                            {...revealProps()}
                            className="mx-auto my-14 flex max-w-5xl items-center gap-4 sm:my-16 lg:my-20"
                            aria-hidden
                        >
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
                            <motion.div
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md"
                                animate={{ rotate: [0, 180, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <span className="h-2 w-2 rounded-full bg-gradient-to-br from-emerald-400 to-sky-400" />
                            </motion.div>
                            <motion.div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
                        </motion.div>

                        <motion.div
                            className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:gap-10"
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewport}
                        >
                            {subsections.map((section, index) => {
                                const Icon = section.icon;
                                const isEven = index % 2 === 1;

                                return (
                                    <motion.div key={index} variants={fadeUp}>
                                        <motion.article
                                            className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/50 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/20 sm:p-8 lg:p-10 ${section.borderGlow}`}
                                        >
                                            <motion.div
                                                aria-hidden
                                                className={`pointer-events-none absolute -top-20 ${isEven ? "-left-20" : "-right-20"} h-52 w-52 rounded-full bg-gradient-to-br ${section.accent} opacity-50 transition-opacity duration-500 group-hover:opacity-90`}
                                            />
                                            <motion.div
                                                aria-hidden
                                                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                                style={{
                                                    background:
                                                        "linear-gradient(120deg, rgba(16,185,129,0.07) 0%, transparent 45%, rgba(56,189,248,0.06) 100%)",
                                                }}
                                            />

                                            <div
                                                className={`relative flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10 ${isEven ? "lg:flex-row-reverse" : ""}`}
                                            >
                                                <motion.div
                                                    className="flex shrink-0 flex-row items-center gap-4 lg:w-36 lg:flex-col lg:items-center lg:gap-4"
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    <span
                                                        aria-hidden
                                                        className="text-[0.65rem] font-bold tracking-[0.2em] text-white/20 sm:text-xs"
                                                    >
                                                        {section.number}
                                                    </span>
                                                    <motion.div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/15 to-slate-900/80 text-emerald-400 shadow-lg shadow-emerald-500/10 transition-all duration-500 group-hover:border-emerald-400/35 group-hover:shadow-emerald-500/20">
                                                        <Icon className="h-6 w-6" aria-hidden />
                                                    </motion.div>
                                                </motion.div>

                                                <div className="min-w-0 flex-1">
                                                    <motion.div
                                                        aria-hidden
                                                        className={`mb-4 h-px w-20 bg-gradient-to-r ${isEven ? "from-sky-500/70 via-brand-500/40 to-transparent" : "from-emerald-500/70 via-sky-500/40 to-transparent"}`}
                                                    />
                                                    <h3 className="mb-5 text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl md:text-[1.65rem] md:leading-tight">
                                                        {section.title}
                                                    </h3>
                                                    <p className="max-w-none text-sm leading-[1.88] text-slate-300/95 sm:text-base sm:leading-[1.92] lg:max-w-[52rem]">
                                                        {section.body}
                                                    </p>
                                                </div>
                                            </div>

                                            <motion.div
                                                aria-hidden
                                                className="relative mt-7 h-px w-full bg-gradient-to-r from-emerald-500/20 via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
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
