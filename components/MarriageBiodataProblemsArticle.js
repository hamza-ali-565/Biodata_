"use client";

import { Download, LayoutGrid, ListOrdered } from "lucide-react";

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
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
                className="absolute -right-28 top-[12%] h-[440px] w-[440px] rounded-full bg-emerald-500/10 blur-[130px]"
            />
            <div
                className="absolute -left-24 bottom-[10%] h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[120px]"
            />
            <div
                className="absolute left-1/3 top-1/2 h-56 w-56 rounded-full bg-brand-500/8 blur-[90px]"
            />

            <div
                className="absolute -left-[10%] bottom-[15%] h-[min(480px,50vw)] w-[min(480px,50vw)] opacity-[0.035] text-emerald-300/80"
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
            </div>

            <svg
                viewBox="0 0 400 180"
                className="absolute right-0 top-[20%] h-40 w-2/3 opacity-[0.1] sm:h-52"
                preserveAspectRatio="none"
            >
                <path
                    d="M0 90 C80 40 160 140 240 70 S400 110 400 60"
                    stroke="url(#problems-curve-grad)"
                    strokeWidth="1.2"
                    fill="none"
                />
                <path
                    d="M0 120 C100 80 200 150 300 95 S400 130 400 100"
                    stroke="url(#problems-curve-grad)"
                    strokeWidth="0.5"
                    fill="none"
                />
                <defs>
                    <linearGradient id="problems-curve-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                        <stop offset="35%" stopColor="#10b981" stopOpacity="0.7" />
                        <stop offset="65%" stopColor="#38bdf8" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <div
                className="absolute right-[8%] top-[28%] h-20 w-20 rotate-45 rounded-2xl border border-emerald-500/15 bg-emerald-500/5 backdrop-blur-sm"
            />
            <div
                className="absolute left-[12%] top-[35%] h-14 w-14 rounded-full border border-sky-400/20 bg-sky-500/5"
            />
            <div
                className="absolute bottom-[30%] right-[20%] h-2 w-2 rounded-full bg-sky-400/70 shadow-[0_0_14px_rgba(56,189,248,0.9)]"
            />

            <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full opacity-25"
                preserveAspectRatio="xMidYMid slice"
            >
                {particles.map((p, i) => (
                    <circle
                        key={i}
                        cx={p.cx}
                        cy={p.cy}
                        r={p.r}
                        fill="currentColor"
                        className="text-emerald-400/40"
                    />
                ))}
            </svg>

            <div
                className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent"
            />
        </div>
    );
}

export function MarriageBiodataProblemsArticle() {
    return (
        <section
            id="biodata-problems"
            aria-labelledby="biodata-problems-heading"
            className="relative mt-14 w-full scroll-mt-24 overflow-hidden"
        >
            <div className="premium-frame">
                <div aria-hidden className="premium-frame-glow" />

                <div className="premium-panel">
                    <ProblemsSectionBackground />

                    <div aria-hidden className="premium-panel-overlay" />

                    <article className="relative z-10 px-5 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
                        <header
                            className="mx-auto max-w-4xl text-center"
                        >
                            <h2
                                id="biodata-problems-heading"
                                className="text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
                            >
                                <span className="bg-gradient-to-r from-white via-emerald-50/90 to-slate-300 bg-clip-text text-transparent">
                                    Problems while creating marriage biodata online?
                                </span>
                            </h2>

                            <div
                                className="mx-auto mt-6 flex justify-center gap-2"
                                aria-hidden
                            >
                                <span className="h-1 w-8 rounded-full bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                <span className="h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 via-sky-400 to-brand-500" />
                                <span className="h-1 w-8 rounded-full bg-brand-500/80 shadow-[0_0_10px_rgba(244,63,94,0.4)]" />
                            </div>

                            <p
                                className="mx-auto mt-8 max-w-3xl text-base font-normal leading-[1.88] text-slate-300/95 sm:text-lg sm:leading-[1.92]"
                            >
                                Many people face problems while creating biodata for marriage, from limited templates to a lack of knowledge of color combinations and what font should be used in the template. It is very annoying if you have very limited choices and you just compromise your biodata just because someone is not providing you with choices. On this platform, you will get full control over template selection, font selection, and color combination.
                            </p>
                        </header>

                        <div
                            className="mx-auto my-14 flex max-w-5xl items-center gap-4 sm:my-16 lg:my-20"
                            aria-hidden
                        >
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
                            <div
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md"
                            >
                                <span className="h-2 w-2 rounded-full bg-gradient-to-br from-emerald-400 to-sky-400" />
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
                        </div>

                        <div
                            className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:gap-10"
                        >
                            {subsections.map((section, index) => {
                                const Icon = section.icon;
                                const isEven = index % 2 === 1;

                                return (
                                    <div key={index}>
                                        <article
                                            className={`premium-card group p-6 sm:p-8 lg:p-10 ${section.borderGlow}`}
                                        >
                                            <div
                                                aria-hidden
                                                className={`pointer-events-none absolute -top-20 ${isEven ? "-left-20" : "-right-20"} h-52 w-52 rounded-full bg-gradient-to-br ${section.accent} opacity-50 transition-opacity duration-500 group-hover:opacity-90`}
                                            />
                                            <div
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
                                                <div
                                                    className="flex shrink-0 flex-row items-center gap-4 lg:w-36 lg:flex-col lg:items-center lg:gap-4 hover:scale-105 transition-transform"
                                                >
                                                    <span
                                                        aria-hidden
                                                        className="text-[0.65rem] font-bold tracking-[0.2em] text-white/20 sm:text-xs"
                                                    >
                                                        {section.number}
                                                    </span>
                                                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/15 to-slate-900/80 text-emerald-400 shadow-lg shadow-emerald-500/10 transition-all duration-500 group-hover:border-emerald-400/35 group-hover:shadow-emerald-500/20">
                                                        <Icon className="h-6 w-6" aria-hidden />
                                                    </div>
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <div
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

                                            <div
                                                aria-hidden
                                                className="relative mt-7 h-px w-full bg-gradient-to-r from-emerald-500/20 via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                            />
                                        </article>
                                    </div>
                                );
                            })}
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
