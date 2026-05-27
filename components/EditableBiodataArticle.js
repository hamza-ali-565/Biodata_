import { FileEdit, LayoutTemplate, Type } from "lucide-react";

const subsections = [
    {
        title: "How to Edit Text Details:",
        body: "Suppose you have entered your personal, family, and professional details, and now you want to make some changes, so the question is, how are you going to achieve this? We have two types of cases here. First, you are still in the browser, so you just edit them by simply editing input fields, or if you are on a template page, you can click back to edit details. In the second case, you realize that you need to make some changes after a few days. Here, we provide you with an amazing feature in which we do not delete user information from input fields even after you close your browser, unless the user manually resets it.",
        icon: FileEdit,
        accent: "from-brand-500/25 via-brand-500/5 to-transparent",
        borderGlow: "group-hover:shadow-[0_0_48px_rgba(244,63,94,0.14)]",
        number: "01",
    },
    {
        title: "How to change biodata format design of the same information:",
        body: "let's say you want to change the biodata format but don't want to enter information again and again, for this case, we are going to discuss some scenarios. After entering details for the first time, you will be navigated to template page to select a template and then you will move to preview page to preview the selected template but for some reason you want to change the theme you don't need to enter information again and select template again we have list down the all templates in preview page so user can select the template from the preview page. Now, if you want to change format and you have closed the browser, you don't need to worry about it, as we have discussed earlier that the information will not be removed until the user hits the reset button, so you can change the theme after closing the browser as well.",
        icon: LayoutTemplate,
        accent: "from-violet-500/20 via-rose-500/5 to-transparent",
        borderGlow: "group-hover:shadow-[0_0_48px_rgba(139,92,246,0.12)]",
        number: "02",
    },
    {
        title: "Editable Fonts and Theme:",
        body: "After entering information and selecting the template, the system will show you its real fonts and theme, which are designed for that originally, but you can also change the fonts and theme of your choice. To change font, you can check the list of font families, which is provided in the preview page in a drop-down list, including font families like Playfair Display, Poppins, Lora,  Cinzel, Libre Baskerville, and Merriweather. In the same way, the marriage biodata hub provides you with the ability to edit the theme color of your choice, which is also provided in the preview page in the form of a drop-down, and the theme colors include: Gold, Royal Blue, Maroon, Emerald Green, and Classic Black.",
        icon: Type,
        accent: "from-amber-500/15 via-brand-500/5 to-transparent",
        borderGlow: "group-hover:shadow-[0_0_48px_rgba(251,191,36,0.1)]",
        number: "03",
    },
];

function EditorialBackgroundArt() {
    const particles = [
        { cx: 12, cy: 18, r: 1.2, delay: 0 },
        { cx: 28, cy: 42, r: 0.8, delay: 0.4 },
        { cx: 45, cy: 12, r: 1, delay: 0.8 },
        { cx: 62, cy: 55, r: 1.1, delay: 1.2 },
        { cx: 78, cy: 28, r: 0.9, delay: 0.2 },
        { cx: 88, cy: 68, r: 1.3, delay: 1.6 },
        { cx: 35, cy: 72, r: 0.7, delay: 1 },
        { cx: 55, cy: 38, r: 1, delay: 0.6 },
        { cx: 72, cy: 82, r: 0.85, delay: 1.4 },
        { cx: 18, cy: 58, r: 1.15, delay: 0.3 },
    ];

    return (
        <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            {/* Mesh gradient blobs */}
            <div
                className="absolute -left-24 top-1/4 h-[420px] w-[420px] rounded-full bg-brand-500/12 blur-[120px]"
            />
            <div
                className="absolute -right-20 bottom-1/4 h-[380px] w-[380px] rounded-full bg-violet-500/10 blur-[110px]"
            />
            <div
                className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-rose-500/8 blur-[100px]"
            />

            {/* Rotating mandala / mesh SVG */}
            <div
                className="absolute -right-[12%] top-[8%] h-[min(520px,55vw)] w-[min(520px,55vw)] opacity-[0.04] text-brand-300"
            >
                <svg viewBox="0 0 200 200" fill="none" className="h-full w-full">
                    <defs>
                        <radialGradient id="edit-mesh-a" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3 6" />
                    <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.6" />
                    <circle cx="100" cy="100" r="50" fill="url(#edit-mesh-a)" />
                    {Array.from({ length: 8 }).map((_, i) => (
                        <ellipse
                            key={i}
                            cx="100"
                            cy="100"
                            rx="85"
                            ry="35"
                            stroke="currentColor"
                            strokeWidth="0.35"
                            transform={`rotate(${i * 22.5} 100 100)`}
                        />
                    ))}
                </svg>
            </div>

            {/* Glowing lines SVG */}
            <svg
                viewBox="0 0 400 200"
                className="absolute bottom-0 left-0 h-48 w-full opacity-[0.12] sm:h-56"
                preserveAspectRatio="none"
            >
                <path
                    d="M0 120 Q100 80 200 100 T400 90"
                    stroke="url(#edit-line-grad)"
                    strokeWidth="1"
                    fill="none"
                />
                <path
                    d="M0 150 Q120 110 240 130 T400 115"
                    stroke="url(#edit-line-grad)"
                    strokeWidth="0.6"
                    fill="none"
                />
                <defs>
                    <linearGradient id="edit-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f43f5e" stopOpacity="0" />
                        <stop offset="40%" stopColor="#f43f5e" stopOpacity="0.8" />
                        <stop offset="60%" stopColor="#a78bfa" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Abstract floating shapes */}
            <div
                className="absolute left-[6%] top-[18%] h-24 w-24 rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
            />
            <div
                className="absolute right-[10%] top-[42%] h-16 w-16 rounded-full border border-brand-500/15 bg-brand-500/5"
            />
            <div
                className="absolute bottom-[22%] left-[14%] h-3 w-3 rounded-full bg-brand-400/60 shadow-[0_0_12px_rgba(244,63,94,0.8)]"
            />

            {/* Particle field */}
            <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full opacity-30"
                preserveAspectRatio="xMidYMid slice"
            >
                {particles.map((p, i) => (
                    <circle
                        key={i}
                        cx={p.cx}
                        cy={p.cy}
                        r={p.r}
                        fill="currentColor"
                        className="text-brand-400/50"
                    />
                ))}
            </svg>

            {/* Top edge highlight */}
            <div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
            />
        </div>
    );
}

export function EditableBiodataArticle() {
    return (
        <section
            id="editable-biodata"
            aria-labelledby="editable-biodata-heading"
            className="relative mt-14 w-full scroll-mt-24 overflow-hidden"
        >
            <div className="premium-frame">
                <div aria-hidden className="premium-frame-glow" />

                <div className="premium-panel">
                    <EditorialBackgroundArt />

                    <div aria-hidden className="premium-panel-overlay" />

                    <article className="relative z-10 px-5 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
                        {/* H2 — Hero heading */}
                        <header
                            className="mx-auto max-w-4xl text-center"
                        >
                            <div
                                className="premium-chip mb-6 gap-2 px-4 py-1.5 text-xs font-medium tracking-wide text-brand-300 shadow-sm shadow-brand-500/10 sm:text-sm"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-60" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
                                </span>
                                Editorial
                            </div>

                            <h2
                                id="editable-biodata-heading"
                                className="text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
                            >
                                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                                    Editable biodata for marriage:
                                </span>
                            </h2>

                            <div
                                className="mx-auto mt-6 flex justify-center"
                                aria-hidden
                            >
                                <div
                                    className="relative h-1 w-24 overflow-hidden rounded-full bg-white/10"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-500 via-rose-400 to-violet-400" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-500 via-rose-400 to-violet-400 blur-md opacity-70" />
                                </div>
                            </div>

                            <p
                                className="mx-auto mt-8 max-w-3xl text-base font-normal leading-[1.88] text-slate-300/95 sm:text-lg sm:leading-[1.92]"
                            >
                                A fully customized marriage biodata maker platform offers you to create, edit, and download biodata for marriage. Here, not only is text information editable, but you can also change format style, font family, theme color, and download in a different format. Creating biodata is one thing, but making changes after creating it is another thing; this is very annoying to fill in details again and again. Here we provide you with some genuine solutions to overcome this problem. We make sure to save your data in the browser until you reset it manually.
                            </p>
                        </header>

                        {/* Separator */}
                        <div
                            className="mx-auto my-14 flex max-w-5xl items-center gap-4 sm:my-16 lg:my-20"
                            aria-hidden
                        >
                            <div
                                className="h-px flex-1 bg-gradient-to-r from-transparent via-white/12 to-transparent opacity-40"
                            />
                            <div className="flex gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-brand-400/90 shadow-[0_0_10px_rgba(244,63,94,0.7)]" />
                                <span className="h-1 w-1 rounded-full bg-violet-400/70" />
                                <span className="h-1.5 w-1.5 rounded-full bg-rose-400/80 shadow-[0_0_8px_rgba(251,113,133,0.5)]" />
                            </div>
                            <div
                                className="h-px flex-1 bg-gradient-to-r from-transparent via-white/12 to-transparent opacity-40"
                            />
                        </div>

                        {/* H3 subsections */}
                        <div
                            className="mx-auto flex max-w-5xl flex-col gap-8 sm:gap-10 lg:gap-12"
                        >
                            {subsections.map((section, index) => {
                                const Icon = section.icon;
                                return (
                                    <div key={index}>
                                        <article
                                            className={`premium-card group p-6 sm:p-8 lg:p-10 ${section.borderGlow}`}
                                        >
                                            {/* Card inner glow */}
                                            <div
                                                aria-hidden
                                                className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${section.accent} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
                                            />
                                            <div
                                                aria-hidden
                                                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                                style={{
                                                    background:
                                                        "linear-gradient(135deg, rgba(244,63,94,0.08) 0%, transparent 50%, rgba(139,92,246,0.06) 100%)",
                                                }}
                                            />

                                            <div
                                                aria-hidden
                                                className="pointer-events-none absolute inset-0 rounded-2xl p-[1px]"
                                                style={{
                                                    background:
                                                        "linear-gradient(135deg, rgba(255,255,255,0.08), transparent 40%, rgba(244,63,94,0.15))",
                                                    WebkitMask:
                                                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                    WebkitMaskComposite: "xor",
                                                    maskComposite: "exclude",
                                                    padding: "1px",
                                                }}
                                            />

                                            <div className="relative flex flex-col gap-5 sm:flex-row sm:gap-8">
                                                <div className="flex shrink-0 flex-row items-start gap-4 sm:flex-col sm:items-center sm:gap-3">
                                                    <span
                                                        aria-hidden
                                                        className="text-[0.65rem] font-bold tracking-[0.2em] text-white/20 sm:text-xs"
                                                    >
                                                        {section.number}
                                                    </span>
                                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-500/25 bg-brand-500/10 text-brand-400 shadow-inner shadow-brand-500/10 transition-all duration-500 group-hover:scale-105 group-hover:border-brand-400/35 group-hover:bg-brand-500/15 group-hover:shadow-brand-500/20">
                                                        <Icon className="h-5 w-5" aria-hidden />
                                                    </div>
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <div
                                                        aria-hidden
                                                        className="mb-4 h-px w-16 bg-gradient-to-r from-brand-500/80 via-rose-500/40 to-transparent sm:w-20"
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
                                                className="relative mt-7 h-px w-full bg-gradient-to-r from-brand-500/25 via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
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
