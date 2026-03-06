"use client";

import { motion } from "framer-motion";
import { Zap, Settings, Layout } from "lucide-react";

const features = [
    {
        title: "Easy to use",
        description: "No Sign up / Registration required. Enter your details, choose template and voila! Your biodata in PDF format is ready.",
        icon: Zap,
        color: "from-amber-400 to-orange-500",
        bg: "bg-amber-500/10"
    },
    {
        title: "Customization made simple",
        description: "You have full control of what you want in your marriage biodata. You can add new fields and delete or rename the existing fields.",
        icon: Settings,
        color: "from-sky-400 to-blue-500",
        bg: "bg-sky-500/10"
    },
    {
        title: "Great Looking Templates",
        description: "We have designed these templates which are unique, clean and perfect for a matrimonial biodata.",
        icon: Layout,
        color: "from-emerald-400 to-teal-500",
        bg: "bg-emerald-500/10"
    }
];

export function FeatureBanner() {
    return (
        <section className="mt-14 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/60 to-slate-950/60 max-w-[1400px] mx-auto px-6 py-16 sm:px-12 relative overflow-hidden shadow-2xl">
            {/* Decorative Glows */}
            <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-brand-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-rose-500/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                        Why Choose Our Marriage Biodata Maker
                    </h2>
                    <div className="mt-4 flex justify-center">
                        <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-rose-500 rounded-full" />
                    </div>
                </div>

                <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md p-8 shadow-xl hover:shadow-2xl transition-all hover:bg-slate-800/80 hover:border-white/20 flex flex-col items-center text-center overflow-hidden"
                            >
                                {/* Subtle card glow on hover */}
                                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />

                                <div className={`relative mb-6 rounded-full ${feature.bg} p-4 ring-1 ring-white/10 group-hover:ring-white/20 shadow-inner overflow-hidden`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                                    <Icon className="w-8 h-8 text-white relative z-10 drop-shadow-md" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4">
                                    {feature.title}
                                </h3>

                                <p className="text-sm md:text-base leading-relaxed text-slate-300">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
