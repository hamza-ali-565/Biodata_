"use client";

import { motion } from "framer-motion";
import { LayoutTemplate, User, Users, Camera, Download, ChevronRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    stepNumber: "Step 1",
    title: "Pick a Beautiful Template",
    description: "Browse modern, professionally designed themes that suit your background and personality.",
    icon: LayoutTemplate,
  },
  {
    stepNumber: "Step 2",
    title: "Enter Your Information",
    description: "Fill in essential details like your name, education, profession, and physical attributes.",
    icon: User,
  },
  {
    stepNumber: "Step 3",
    title: "Add Family Details",
    description: "Provide a brief overview of your family structure, parental occupations, and siblings.",
    icon: Users,
  },
  {
    stepNumber: "Step 4",
    title: "Add Your Best Photo",
    description: "Upload a clear, smiling picture to make your biodata instantly more appealing and trustworthy.",
    icon: Camera,
  },
  {
    stepNumber: "Step 5",
    title: "Download as PDF/JPEG",
    description: "Export your finished biodata in a high-resolution format, ready to be shared with prospects.",
    icon: Download,
  },
];

export function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="mt-14 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/60 to-slate-950/60 px-6 py-16 sm:px-12 relative overflow-hidden shadow-2xl"
    >
      {/* Background Glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand-500/10 blur-[100px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-rose-500/10 blur-[100px]" />

      {/* Asian Wedding Theme Background Art: Mandala Motif */}
      <div className="absolute top-[-5%] left-[-5%] w-48 h-48 md:w-96 md:h-96 opacity-[0.03] pointer-events-none rotate-45" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" />
          <path d="M50 20 C65 20 65 35 50 50 C35 35 35 20 50 20 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M50 80 C65 80 65 65 50 50 C35 65 35 80 50 80 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M20 50 C20 65 35 65 50 50 C35 35 20 35 20 50 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M80 50 C80 65 65 65 50 50 C65 35 80 35 80 50 Z" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute bottom-[-5%] right-[-5%] w-48 h-48 md:w-96 md:h-96 opacity-[0.03] pointer-events-none -rotate-12" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" />
          <path d="M50 20 C65 20 65 35 50 50 C35 35 35 20 50 20 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M50 80 C65 80 65 65 50 50 C35 65 35 80 50 80 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M20 50 C20 65 35 65 50 50 C35 35 20 35 20 50 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M80 50 C80 65 65 65 50 50 C65 35 80 35 80 50 Z" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Header text */}
      <div className="relative max-w-3xl text-center mx-auto mb-16 md:mb-24">
        <h2
          id="how-it-works-heading"
          className="text-3xl font-bold tracking-tight text-white mb-6 sm:text-4xl lg:text-5xl"
        >
          How to Create a Stunning <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 drop-shadow-sm">Marriage Biodata</span> in 5 Easy Steps
        </h2>
        <p className="text-base text-slate-300 sm:text-lg font-medium max-w-2xl mx-auto">
          A quick and simple guide to crafting a modern, impressive marriage profile that stands out.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-rose-500 rounded-full" />
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Central glowing line for desktop */}
        <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-500/50 via-rose-500/50 to-brand-500/10 md:-translate-x-1/2 rounded-full" />

        <div className="space-y-12 md:space-y-0 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex items-start md:items-center w-full ${isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
              >
                {/* Visual marker on timeline */}
                <div className="absolute left-[24px] md:left-1/2 w-4 h-4 rounded-full bg-slate-900 border-[3px] border-brand-400 md:-translate-x-1/2 transform translate-y-6 md:translate-y-0 z-10 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />

                {/* Card Container */}
                <div className={`ml-16 md:ml-0 md:w-[45%] ${isLeft ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"}`}>
                  <div className="group relative flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 md:p-8 hover:bg-slate-800/80 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 shadow-xl">

                    {/* Icon */}
                    <div className="mb-6 sm:mb-0 sm:mr-6 shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500 group-hover:border-brand-500/30">
                      <Icon className="h-7 w-7 text-brand-400 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                    </div>

                    {/* Content */}
                    <div>
                      <div className="text-brand-400 font-semibold text-xs tracking-wider uppercase mb-2">
                        {step.stepNumber}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA Footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-20 md:mt-28 text-center relative z-10 flex flex-col items-center"
      >
        <p className="text-slate-300 mb-6 text-lg">Ready to make the perfect first impression?</p>
        <button

          onClick={(e) => {
            e.preventDefault();
            document.getElementById("biodata-form")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-brand-500/25"
        >
          Create Your Free Biodata Today
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

          {/* Subtle glow underneath button */}
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-500 to-rose-500 opacity-40 blur-md transition-opacity group-hover:opacity-60" />
        </button>
      </motion.div>
    </section>
  );
}

