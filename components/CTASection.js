import { ScrollToFormButton } from "./ScrollToFormButton";
import { MandalaSVG } from "./MandalaSVG";

export function CTASection() {



    return (
        <section className="mt-14 mb-20 w-full mx-auto px-4 sm:px-6 relative z-10">
            <div className="premium-frame">
                <div aria-hidden className="premium-frame-glow" />
                <div className="premium-panel p-10 text-center md:p-16">
                    <div aria-hidden className="premium-panel-overlay" />
                {/* Decorative Glows inside the card */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 rounded-full bg-brand-500/10 blur-[80px]" />
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 rounded-full bg-rose-500/10 blur-[80px]" />

                {/* Asian Wedding Theme Background Art: Mandala Motif */}
                <div className="absolute top-[-10%] left-[-5%] w-48 h-48 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] opacity-[0.03] pointer-events-none rotate-45">
                    <MandalaSVG />
                </div>

                <div className="absolute bottom-[-10%] right-[-5%] w-48 h-48 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] opacity-[0.03] pointer-events-none -rotate-12">
                    <MandalaSVG />
                </div>

                <div className="relative z-10 mx-auto max-w-2xl space-y-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                        A Meaningful Marriage Biodata Helps You Finds the Right Life Partner
                    </h2>
                    <p className="text-lg text-brand-200 font-medium">
                        Start your beautiful journey with us today!
                    </p>

                    <div className="pt-4">
                        <ScrollToFormButton
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-10 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(244,63,94,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                        >
                            Create My Biodata
                        </ScrollToFormButton>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}
