"use client";

import { motion } from "framer-motion";
import { useScrollMotion } from "./ScrollMotionProvider";

export function WhyNeedBiodata() {
    const { revealProps } = useScrollMotion();

    return (
        <section className="mt-14 relative overflow-hidden py-16 px-6 sm:px-12 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/60 to-slate-950/60 shadow-2xl w-full">
            {/* Background Art - Abstract Islamic Geometric / Mandala style */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none blur-[1px]">
                <div className="absolute -top-[10%] -left-[5%] w-64 h-64 md:w-[500px] md:h-[500px] opacity-[0.03] rotate-45 text-white">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-current" preserveAspectRatio="xMidYMid meet">
                        <polygon points="50,5 95,50 50,95 5,50" stroke="currentColor" strokeWidth="0.5" />
                        <polygon points="50,15 85,50 50,85 15,50" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                        <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M50 0 L50 100 M0 50 L100 50" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M15 15 L85 85 M15 85 L85 15" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                </div>

                <div className="absolute -bottom-[10%] -right-[5%] w-64 h-64 md:w-[500px] md:h-[500px] opacity-[0.03] text-white">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-current" preserveAspectRatio="xMidYMid meet">
                        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M50 5 C75 5 75 45 50 45 C25 45 25 5 50 5 Z" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M50 95 C75 95 75 55 50 55 C25 55 25 95 50 95 Z" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M5 50 C5 75 45 75 45 50 C45 25 5 25 5 50 Z" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M95 50 C95 75 55 75 55 50 C55 25 95 25 95 50 Z" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                </div>
            </div>

            {/* Decorative Glows */}
            <div className="absolute top-10 right-10 w-40 h-40 md:w-72 md:h-72 rounded-full bg-brand-500/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-40 h-40 md:w-72 md:h-72 rounded-full bg-rose-500/10 blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
                <motion.div {...revealProps()}>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6 sm:text-4xl leading-tight">
                        Why I should create a matrimonial biodata format?
                    </h2>

                    <div className="flex justify-center mb-8">
                        <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-rose-500 rounded-full" />
                    </div>

                    <div className="space-y-6 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                        <p>
                            Getting married is the most important and emotional moment in a person’s life. To make all these things happen, you need a good biodata for marriage because it can make a good impression.
                        </p>
                        <p>
                            Marriage means a new journey that takes you to a new chapter of your life. To make your journey peaceful and make your relationship healthy, you need a good life partner. Having a good life partner can make you mentally and physically healthy.
                        </p>
                        <p>
                            Now you must be thinking, how can I convey my information, which is personal, professional, and family details, to someone? So, you just don’t need to worry about it. Here, you can create your biodata for marriage, as well as matrimonial biodata.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
