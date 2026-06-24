import Link from "next/link";

export function BiodataFormatExplanation() {

    return (
        <section
            aria-labelledby="biodata-format-heading"
            className="relative mt-14 w-full overflow-hidden"
        >
            <div className="premium-frame">
                <div aria-hidden className="premium-frame-glow" />

                <div className="premium-panel">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-brand-500/15 blur-[100px]"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-rose-500/12 blur-[110px]"
                    />
                    <div aria-hidden className="premium-panel-overlay" />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />

                    <article className="relative z-10 px-5 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
                        <header className="mx-auto max-w-3xl text-center">
                            <h2
                                id="biodata-format-heading"
                                className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl"
                            >
                                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                                    What makes a good marriage biodata?
                                </span>
                            </h2>

                            <div className="mx-auto mt-6 flex justify-center" aria-hidden>
                                <div className="relative h-1 w-20 overflow-hidden rounded-full bg-white/10">
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-500 via-rose-400 to-brand-500" />
                                </div>
                            </div>

                            <p className="mx-auto mt-8 max-w-2xl text-base font-normal leading-[1.85] text-slate-300/95 sm:text-lg sm:leading-[1.9]">
                                A good biodata is honest, complete, and fits on a single A4 page. Families reviewing 20–30 profiles at once spend 90 seconds on each one. Our templates are structured so nothing important gets missed — and every field is explained as you fill it.
                            </p>

                            <div className="mt-8">
                                <Link
                                    href="/marriage-biodata-format"
                                    className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-medium transition-colors"
                                >
                                    Read the complete format guide →
                                </Link>
                            </div>
                        </header>
                    </article>
                </div>
            </div>
        </section>
    );
}
