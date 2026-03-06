"use client";

import { motion } from "framer-motion";

export function CTASection() {
    const scrollToForm = () => {
        const formElement = document.getElementById("biodata-form");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="mt-14 mb-20 max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-10 md:p-16 text-center shadow-2xl backdrop-blur-xl"
            >
                {/* Decorative Glows inside the card */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 rounded-full bg-brand-500/10 blur-[80px]" />
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 rounded-full bg-rose-500/10 blur-[80px]" />

                {/* Asian Wedding Theme Background Art: Mandala Motif */}
                <div className="absolute top-[-10%] left-[-5%] w-48 h-48 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] opacity-[0.03] pointer-events-none rotate-45">
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

                <div className="absolute bottom-[-10%] right-[-5%] w-48 h-48 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] opacity-[0.03] pointer-events-none -rotate-12">
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

                <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                        Creating a Marriage Biodata is a meaningful step in your journey towards finding the right life partner.
                    </h2>

                    <p className="text-lg text-brand-200 font-medium">
                        Start your journey with us today!
                    </p>

                    <div className="pt-4">
                        <button
                            onClick={scrollToForm}
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-10 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(244,63,94,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                        >
                            Create My Biodata
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
