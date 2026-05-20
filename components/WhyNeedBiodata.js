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

            {/* New Premium Cards Section */}
            <div className="relative z-10 max-w-7xl mx-auto mt-16 md:mt-24 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
                    {[
                        {
                            title: "First step toward a new journey:",
                            content: "Getting married and starting a new life is very important, because you may spend your life alone, but to tackle loneliness, you always need someone who can spend quality time with you, understands you, laughs with you, and makes you feel complete. Creating biodata for marriage is the very first step toward your new life journey that is marriage. That time has gone when you had to go to a computer shop and ask them to create and get a hard copy; now you can create it yourself in just three easy steps, download it, and share it for free.",
                            delay: 0.1
                        },
                        {
                            title: "Helps to avoid repetition of information:",
                            content: "When you are making a match through a marriage bureau, you have to share information with them, or if you are finding a match by yourself, in this case, too, you have to convey information repeatedly. Marriage biodata maker helps you save time. For example, you create a marriage biodata and download it in the form of a PDF or image format. Now, you can share that format when needed, no need to type information again and again. The wedding biodata hub not only saves your time but also your efforts, so you do not have to bother yourself by typing information every time someone asks for it.",
                            delay: 0.2
                        },
                        {
                            title: "Helps you to find a compatible match:",
                            content: "When you enter all information correctly in the marriage biodata template, the only compatible match contacts you, and no one who does not meet your expectations will contact you. Because you have entered all details about yourself, education, family details, and professional details, the only good match will contact you. This will save you time to handle non-serious matches because they will not bother you after reading your serious details.",
                            delay: 0.3
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
                                        <pattern id={`card-mesh-${index}`} width="32" height="32" patternUnits="userSpaceOnUse">
                                            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
                                            <circle cx="16" cy="16" r="1" fill="currentColor" className="text-white" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill={`url(#card-mesh-${index})`} />
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
        </section>
    );
}
