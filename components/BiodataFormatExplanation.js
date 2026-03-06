"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const checks = [
    "Include essential sections such as Personal Details, Hobbies & Values, Cultural & Astrological Details, Educational & Professional Details, Family Details, and Contact Details.",
    "Use clear headings, bullet points, and concise language to present information effectively.",
    "Proofread carefully and maintain consistent formatting.",
];

export function BiodataFormatExplanation() {
    return (
        <section className="mt-14 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/60 to-slate-950/60 py-16 px-6 sm:px-12 relative overflow-hidden shadow-2xl">
            {/* Decorative Glows */}
            <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-brand-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-rose-500/10 blur-[100px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 sm:text-4xl">
                        Marriage Biodata Format: Crafting Your Perfect Introduction
                    </h2>
                    <p className="text-sm text-slate-300 sm:text-base font-medium leading-relaxed px-4">
                        A well-structured marriage biodata serves as your first impression. It helps families
                        understand who you are, your background, and your values, making the matchmaking process smoother and more meaningful.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-rose-500 rounded-full" />
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Content Area */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-xl md:text-3xl font-bold text-white mb-4 leading-tight">
                                What a Well-Structured Marriage Biodata Looks Like?
                            </h3>
                            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                                A good biodata should be organized, visually pleasing, and easy to read. It beautifully balances
                                essential facts with personal touches.
                            </p>
                        </div>

                        <ul className="space-y-5">
                            {checks.map((check, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.3 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1 flex-shrink-0 bg-brand-500/20 p-1 rounded-full">
                                        <CheckCircle2 className="w-5 h-5 text-brand-400" />
                                    </div>
                                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                                        {check}
                                    </p>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Column: Visual Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        className="relative flex justify-center lg:justify-end"
                        style={{ perspective: "1000px" }}
                    >
                        {/* Visual Backing Soft Shape */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-brand-500/5 via-rose-500/5 to-slate-900/50 rounded-[40px] border border-white/5 rotate-3 -z-10 backdrop-blur-3xl" />

                        {/* Biodata File Mockup */}
                        <motion.div
                            whileHover={{ y: -10, rotateX: 5, rotateY: -5, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="w-full max-w-[400px] aspect-[1/1.414] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-200 p-6 flex flex-col gap-6 relative overflow-hidden"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Fake Decorative watermark */}
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 border-[20px] border-brand-50 rounded-full opacity-50" />

                            {/* Header Section */}
                            <div className="flex flex-col items-center gap-3 border-b border-slate-100 pb-5 z-10">
                                <div className="w-24 h-24 rounded-full bg-slate-100 border-4 border-white shadow-md relative overflow-hidden">
                                    {/* Avatar Placeholder Silhouette */}
                                    <svg className="absolute bottom-0 text-slate-300 w-full h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                </div>
                                <div className="h-4 w-3/4 bg-slate-800 rounded-full" />
                                <div className="h-2 w-1/2 bg-slate-300 rounded-full" />
                            </div>

                            {/* Content Sections */}
                            <div className="flex-1 flex flex-col gap-5 z-10">
                                {/* Section 1 */}
                                <div className="space-y-3">
                                    <div className="h-3 w-1/3 bg-brand-500/80 rounded-full" />
                                    <div className="grid grid-cols-[1fr_2fr] gap-2">
                                        <div className="h-2 bg-slate-200 rounded-full" />
                                        <div className="h-2 bg-slate-600 rounded-full" />
                                        <div className="h-2 bg-slate-200 rounded-full" />
                                        <div className="h-2 bg-slate-600 rounded-full" />
                                        <div className="h-2 bg-slate-200 rounded-full" />
                                        <div className="h-2 bg-slate-600 rounded-full" />
                                    </div>
                                </div>

                                {/* Section 2 */}
                                <div className="space-y-3">
                                    <div className="h-3 w-1/3 bg-brand-500/80 rounded-full" />
                                    <div className="grid grid-cols-[1fr_2fr] gap-2">
                                        <div className="h-2 bg-slate-200 rounded-full" />
                                        <div className="h-2 bg-slate-600 rounded-full" />
                                        <div className="h-2 bg-slate-200 rounded-full" />
                                        <div className="h-2 w-2/3 bg-slate-600 rounded-full" />
                                    </div>
                                </div>

                                {/* Section 3 */}
                                <div className="space-y-3">
                                    <div className="h-3 w-1/3 bg-brand-500/80 rounded-full" />
                                    <div className="space-y-2">
                                        <div className="h-2 w-full bg-slate-600 rounded-full" />
                                        <div className="h-2 w-5/6 bg-slate-600 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
