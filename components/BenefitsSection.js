"use client";

import { motion } from "framer-motion";
import { Clock, LayoutTemplate, PenTool } from "lucide-react";

const benefits = [
    {
        title: "Time-Saving & Convenience",
        description: "Creating a marriage biodata online eliminates the hassle of formatting a document from scratch. With an intuitive interface, you can enter your details and have a beautiful, ready-to-print format in just a few minutes, from the comfort of your home.",
        icon: Clock,
    },
    {
        title: "Professional & Attractive Design",
        description: "First impressions matter. Our platform provides clean, premium templates that balance tradition with a modern aesthetic, ensuring your details are presented in a well-structured, eye-catching, and respectable manner.",
        icon: LayoutTemplate,
    },
    {
        title: "Easy Editing & Accessibility",
        description: "An online platform gives you the flexibility to build your biodata exactly how you want it. Update your information or change your template design anytime, and download a high-quality PDF from anywhere, on any device.",
        icon: PenTool,
    },
];

export function BenefitsSection() {
    return (
        <section className="mt-14 relative overflow-hidden py-16 px-6 sm:px-12 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/60 to-slate-950/60 shadow-2xl max-w-[1400px] mx-auto">
            {/* Soft Wedding/Floral Background Art */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none blur-[1px]">
                <div className="absolute top-[5%] right-[5%] w-64 h-64 md:w-[400px] md:h-[400px] opacity-[0.03] text-brand-200">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-current" preserveAspectRatio="xMidYMid meet">
                        <path d="M50 10 C60 25 80 25 85 40 C90 55 75 70 65 80 C50 90 35 80 25 70 C15 55 10 35 20 20 C30 10 40 10 50 10 Z" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M50 20 C55 30 70 30 75 40 C80 50 65 60 55 70 C50 75 40 70 35 60 C30 50 25 35 35 25 C40 20 45 20 50 20 Z" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                    </svg>
                </div>
                
                <div className="absolute bottom-[5%] left-[5%] w-64 h-64 md:w-[400px] md:h-[400px] opacity-[0.03] text-rose-200">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-current" preserveAspectRatio="xMidYMid meet">
                        <path d="M50 90 C35 80 20 65 15 50 C10 35 25 20 40 15 C55 10 70 20 80 30 C90 45 85 70 70 80 C60 85 55 90 50 90 Z" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="5" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                </div>
            </div>

            {/* Decorative Glows */}
            <div className="absolute top-0 right-1/4 w-40 h-40 md:w-72 md:h-72 rounded-full bg-brand-500/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-40 h-40 md:w-72 md:h-72 rounded-full bg-rose-500/10 blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6 sm:text-4xl leading-tight max-w-3xl mx-auto">
                            What are the benefits of creating a bio data format online?
                        </h2>
                        <div className="flex justify-center">
                            <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-rose-500 rounded-full" />
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col items-center md:items-start text-center md:text-left bg-white/[0.02] p-8 rounded-2xl border border-white/[0.05] hover:border-brand-500/30 transition-colors backdrop-blur-sm"
                        >
                            <div className="mb-6 p-4 bg-brand-500/10 rounded-2xl text-brand-400">
                                <benefit.icon className="w-8 h-8 md:w-10 md:h-10" />
                            </div>
                            
                            <h3 className="text-lg md:text-xl font-bold text-white mb-4">
                                {benefit.title}
                            </h3>
                            
                            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
