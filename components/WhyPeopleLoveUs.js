"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const features = [
    "Free Premium Templates",
    "Easy to use",
    "Data Security",
    "Editable Format"
];

export function WhyPeopleLoveUs() {
    const router = useRouter();

    const scrollToForm = () => {
        if (window.location.pathname !== "/") {
            sessionStorage.setItem("scrollToForm", "true");
            router.push("/");
            return;
        }
        const formElement = document.getElementById("biodata-form");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="mt-14 relative overflow-hidden py-16 px-6 sm:px-12 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/60 to-slate-950/60 shadow-2xl w-full">
            {/* Soft Decor Glows */}
            <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-brand-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-rose-500/10 blur-[100px] pointer-events-none" />

            <div className="w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Text & Features */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Why are our marriage biodata being loved by people?
                            </h2>
                            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-lg">
                                We’re gathering love around the globe because we are secure, we offer free premium templates, we are editable, and we are offering theme color selection.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + 0.3 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="bg-brand-500/20 p-1 rounded-full text-brand-400">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <span className="text-white font-medium text-lg">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <button
                                onClick={scrollToForm}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(244,63,94,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                            >
                                Create Biodata Now
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Column: Floating Templates */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] md:h-[500px] flex items-center justify-center -mx-4 lg:mx-0 mt-10 lg:mt-0 perspective-1000"
                    >
                        {/* Background subtle shape */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/5 to-rose-500/5 rounded-full blur-3xl" />

                        {/* Template 1 (Back Left) */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: -20, zIndex: 30 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="absolute left-[10%] md:left-[15%] w-[180px] md:w-[240px] aspect-[1/1.414] rounded-xl shadow-2xl border flex flex-col border-white/10 overflow-hidden transform -rotate-12 origin-bottom hover:shadow-brand-500/20"
                            style={{ zIndex: 10 }}
                        >
                            <Image
                                src="/images/new-templates/beautiful-green-and-off-white-marriage-biodata-contrast.webp"
                                alt="Beautiful Green Biodata Template"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Template 2 (Back Right) */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 15, zIndex: 30 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="absolute right-[10%] md:right-[15%] top-[10%] w-[180px] md:w-[240px] aspect-[1/1.414] rounded-xl shadow-2xl border border-white/10 overflow-hidden transform rotate-[15deg] origin-bottom hover:shadow-brand-500/20"
                            style={{ zIndex: 20 }}
                        >
                            <Image
                                src="/images/new-templates/beautiful-light-green-and-arted-dark-green-marriage-biodata-contrast.webp"
                                alt="Beautiful Art Biodata Template"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Template 3 (Front Center) */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="absolute top-[20%] md:top-[15%] w-[200px] md:w-[280px] aspect-[1/1.414] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 overflow-hidden transform rotate-2 hover:shadow-brand-500/30"
                            style={{ zIndex: 30 }}
                        >
                            <Image
                                src="/images/new-templates/beautiful-golden-border-marriage-biodata.webp"
                                alt="Golden Border Biodata Template"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
