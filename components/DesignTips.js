"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const tips = [
    {
        title: "Marriage Biodata Format With Photo",
        image: "/images/new-templates/beautiful-green-border-art-marriage-biodata.png",
        points: [
            "Use a clear, high-resolution, recent photograph.",
            "Display the photo prominently at the top-center or side.",
            "Ensure good, natural lighting with a neutral background.",
            "Maintain an elegant and modest dress code in the picture.",
            "Crop to a professional portrait or semi-portrait aspect ratio."
        ]
    },
    {
        title: "Marriage Biodata Format Without Photo",
        image: "/images/new-templates/beautiful-sober-marriage-biodata.png",
        points: [
            "Opt for a clean, highly text-focused structural layout.",
            "Ensure distinct horizontal spacing between critical sections.",
            "Use premium typography so the text itself becomes the design.",
            "Highlight key personal details, education, and family background.",
            "Utilize tasteful borders or minimalistic line dividers to structure data."
        ]
    },
    {
        title: "Add High-Quality Religious Elements",
        image: "/images/new-templates/beautiful-traditional-marriage-biodata.png",
        points: [
            "Incorporate subtle, beautiful Islamic or religious motifs (e.g., Bismillah calligraphy, subtle mosque patterns or mandalas).",
            "Maintain an elegant implementation that acts as an accent rather than a distraction.",
            "Avoid overcrowding the header area with excessively large icons.",
            "Blend religious motifs seamlessly with the underlying color theme of your template."
        ]
    },
    {
        title: "Maintain Clean & Balanced Layout",
        image: "/images/new-templates/beautiful-leafs-effect-marriage-biodata.png",
        points: [
            "Establish proper text alignment (typically left-aligned for data, center for headings).",
            "Pick a maximum of two complimentary, elegant fonts to ensure reading comfort.",
            "Categorize your details into logical sections (Personal, Professional, Family).",
            "Enforce empty whitespace to avoid clutter and overcrowding.",
            "Proofread to ensure impeccable flow and visual symmetry on the printed page."
        ]
    }
];

export function DesignTips() {
    return (
        <section className="mt-14 relative overflow-hidden py-16 px-6 sm:px-12 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/60 to-slate-950/60 shadow-2xl max-w-[1400px] mx-auto">
            {/* Background Decor Glows */}
            <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-brand-500/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full bg-rose-500/5 blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6 sm:text-4xl">
                            Some design tips to create biodata for marriage
                        </h2>
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-rose-500 rounded-full" />
                        </div>
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
                            Create an attractive, well-structured format that makes a lasting first impression. Follow these professional design principles.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-24 lg:space-y-32">
                    {tips.map((tip, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`flex flex-col gap-10 lg:gap-16 items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                            >
                                {/* Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6 }}
                                    className="flex-1 space-y-6 w-full"
                                >
                                    <div className="inline-block px-3 py-1 bg-brand-500/10 border border-brand-500/20 text-brand-400 font-semibold rounded-full text-xs md:text-sm mb-2">
                                        Tip {index + 1}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white capitalize leading-snug">
                                        {tip.title}
                                    </h3>

                                    <ul className="space-y-4 pt-2">
                                        {tip.points.map((point, pointIndex) => (
                                            <li key={pointIndex} className="flex items-start gap-4">
                                                <div className="mt-1 flex-shrink-0 text-brand-400">
                                                    <CheckCircle2 className="w-5 h-5" />
                                                </div>
                                                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                                                    {point}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Visual Element (Mockup) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.7 }}
                                    className="flex-1 w-full max-w-sm lg:max-w-md relative flex justify-center"
                                >
                                    {/* Accent Decoration behind the image */}
                                    <div className={`absolute top-[5%] -bottom-[5%] w-[100%] bg-gradient-to-tr from-brand-500/10 to-rose-500/10 rounded-2xl -z-10 blur-xl ${isEven ? "-right-[5%]" : "-left-[5%]"}`} />

                                    <div className="w-full aspect-[1/1.414] relative rounded-lg border border-white/10 shadow-2xl overflow-hidden bg-slate-800">
                                        <Image
                                            src={tip.image}
                                            alt={tip.title}
                                            fill
                                            className="object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
