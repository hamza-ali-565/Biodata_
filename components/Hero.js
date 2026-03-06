"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Hero3D } from "./Hero3D";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 3D parallax effect on scroll
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const cardRotateX = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const cardRotateY = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const cardOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      style={{ perspective: 1200 }}
      aria-labelledby="hero-heading"
      className="relative grid gap-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 px-6 py-10 shadow-soft sm:px-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:py-14"
    >
      {/* Asian Wedding Theme Background Art: Mandala Motif */}
      <div className="absolute top-[-10%] left-[-5%] w-64 h-64 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] opacity-[0.03] pointer-events-none rotate-12">
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

      <div className="absolute bottom-[-10%] right-[-5%] w-64 h-64 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] opacity-[0.03] pointer-events-none -rotate-45">
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

      <Hero3D />
      <div className="relative z-10 space-y-6">
        <p className="inline-flex rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-sm px-3 py-1 text-[11px] font-medium tracking-wide text-brand-200 shadow-xl">
          Premium Marriage Biodata Maker
        </p>
        <div>
          <h1
            id="hero-heading"
            className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]"
          >
            Create Beautiful Marriage Biodata in Minutes
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base font-medium">
            Craft an elegant, well-organised biodata that highlights who you
            are. Choose from premium templates, personalise every detail, and
            download as PDF or JPEG—ready to share with families and
            matchmakers.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#biodata-form"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-rose-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(244,63,94,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Create Biodata
          </a>
          <p className="text-xs text-slate-400 font-medium tracking-wide">
            No signup required. Export-ready in a few clicks.
          </p>
        </div>
      </div>
      <motion.div
        style={{
          y: cardY,
          rotateX: cardRotateX,
          rotateY: cardRotateY,
          scale: cardScale,
          opacity: cardOpacity,
        }}
        className="relative z-10 hidden min-h-[300px] items-center justify-center rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-5 sm:flex shadow-2xl transition-transform"
      >
        <div className="absolute -left-5 top-6 h-14 w-14 rounded-2xl bg-gradient-to-tr from-brand-400/60 via-brand-500/40 to-rose-500/40 blur-2xl" />
        <div className="absolute -right-4 bottom-4 h-16 w-16 rounded-full bg-gradient-to-tr from-sky-400/40 via-cyan-400/30 to-emerald-400/40 blur-2xl" />
        <div className="relative flex w-full max-w-sm flex-col gap-3 rounded-2xl bg-slate-950/80 p-5 text-xs text-slate-100 shadow-2xl border border-white/5">
          <div className="flex gap-3">
            <div className="h-16 w-16 rounded-xl bg-slate-800/80" aria-hidden />
            <div className="space-y-1.5">
              <div className="h-2.5 w-28 rounded-full bg-slate-700" />
              <div className="h-2 w-24 rounded-full bg-slate-800" />
              <div className="h-2 w-20 rounded-full bg-slate-800" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="space-y-1">
              <div className="h-2 w-16 rounded-full bg-slate-700" />
              <div className="h-2 w-20 rounded-full bg-slate-800" />
            </div>
            <div className="space-y-1">
              <div className="h-2 w-16 rounded-full bg-slate-700" />
              <div className="h-2 w-20 rounded-full bg-slate-800" />
            </div>
          </div>
          <div className="mt-2 h-10 w-full rounded-xl bg-gradient-to-r from-brand-500/80 to-rose-500/80 shadow-inner" />
        </div>
      </motion.div>
    </section>
  );
}

