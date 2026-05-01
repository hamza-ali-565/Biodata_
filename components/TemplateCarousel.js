"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const templates = [
    { id: 1, src: "/images/new-templates/beautiful-golden-border-marriage-biodata.webp", alt: "beautiful-golden-border-marriage-biodata", isNew: true },
    { id: 2, src: "/images/new-templates/beautiful-green-and-off-white-marriage-biodata-contrast.webp", alt: "beautiful-green-and-off-white-marriage-biodata-contrast", isNew: true },
    { id: 3, src: "/images/new-templates/beautiful-green-border-art-marriage-biodata.webp", alt: "beautiful-green-border-art-marriage-biodata", isNew: true },
    { id: 4, src: "/images/new-templates/beautiful-leafs-effect-marriage-biodata.webp", alt: "beautiful-leafs-effect-marriage-biodata", isNew: true },
    { id: 5, src: "/images/new-templates/beautiful-light-green-and-arted-dark-green-marriage-biodata-contrast.webp", alt: "beautiful-light-green-and-arted-dark-green-marriage-biodata-contrast", isNew: true },
    { id: 6, src: "/images/new-templates/beautiful-sea-green-and-off-white-marriage-biodata-contrast.webp", alt: "beautiful-sea-green-and-off-white-marriage-biodata-contrast", isNew: true },
    { id: 7, src: "/images/new-templates/beautiful-sober-marriage-biodata.webp", alt: "beautiful-sober-marriage-biodata", isNew: true },
    { id: 8, src: "/images/new-templates/beautiful-traditional-marriage-biodata.webp", alt: "beautiful-traditional-marriage-biodata", isNew: true },
];

export function TemplateCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const [itemsPerView, setItemsPerView] = useState(3);

    // Determine items per view based on screen size
    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth < 640) setItemsPerView(1);
            else if (window.innerWidth < 1024) setItemsPerView(2);
            else if (window.innerWidth < 1280) setItemsPerView(3);
            else setItemsPerView(4);
        };

        updateItemsPerView();
        window.addEventListener("resize", updateItemsPerView);
        return () => window.removeEventListener("resize", updateItemsPerView);
    }, []);

    // Auto loop
    useEffect(() => {
        if (isHovered) return;

        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % templates.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(timer);
    }, [isHovered]);

    const slideLeft = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? templates.length - 1 : prev - 1));
    };

    const slideRight = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % templates.length);
    };

    // Get current visible templates
    const getVisibleTemplates = () => {
        const visible = [];
        for (let i = 0; i < itemsPerView; i++) {
            const index = (currentIndex + i) % templates.length;
            visible.push(templates[index]);
        }
        return visible;
    };

    return (
        <section
            className="mt-14 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/60 to-slate-950/60 py-16 px-4 sm:px-8 relative overflow-hidden shadow-2xl"
        >
            {/* Interactive Glowing Atmospheric Blurs matching HowItWorks */}
            <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-rose-500/10 blur-[100px] pointer-events-none" />

            {/* Asian Wedding Theme Background Art: Mandala Motif */}
            <div className="absolute top-[5%] left-[-5%] w-48 h-48 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] opacity-[0.03] pointer-events-none rotate-12">
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

            <div className="absolute bottom-[-5%] right-[-5%] w-48 h-48 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] opacity-[0.03] pointer-events-none -rotate-12">
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

            <div className="w-full relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 sm:text-4xl">
                        Beautiful & Elegant Marriage Biodata Templates
                    </h2>
                    <p className="text-sm text-slate-300 sm:text-base font-medium leading-relaxed px-4">
                        There is a saying that the first impression is the last impression; that’s why choosing the right marriage biodata is important. Here we’re offering you the{" "}
                        <Link href="/templates" className="text-brand-400 hover:text-brand-300 transition-colors">
                            best templates
                        </Link>{" "}
                        designed to present your personal, family, and professional details in a clean, well-designed, and attractive way. Select template and create your biodata for marriage.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-rose-500 rounded-full" />
                    </div>
                </div>

                <div
                    className="relative group mt-8 select-none"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Scroll Left Button */}
                    <button
                        onClick={slideLeft}
                        className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-md p-3 text-brand-200 hover:text-white hover:bg-slate-800 transition-all hidden md:block opacity-0 group-hover:opacity-100 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                        aria-label="Previous template"
                    >
                        <ChevronLeft size={24} strokeWidth={2.5} />
                    </button>

                    {/* Carousel Track Container */}
                    <div className="overflow-hidden py-8 px-4" style={{ perspective: "1000px" }}>
                        <motion.div
                            className="flex gap-6 lg:gap-8 justify-center items-center"
                            layout
                        >
                            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                                {getVisibleTemplates().map((template) => (
                                    <motion.div
                                        key={`${template.id}-${currentIndex}`} // Unique key ensures forced re-render per slide
                                        layout
                                        custom={direction}
                                        initial={{ opacity: 0, x: direction > 0 ? 100 : -100, scale: 0.9, rotateY: direction > 0 ? -15 : 15 }}
                                        animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                                        exit={{ opacity: 0, x: direction > 0 ? -100 : 100, scale: 0.9, rotateY: direction > 0 ? 15 : -15, position: "absolute" }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 1 }}
                                        whileHover={{
                                            scale: 1.05,
                                            y: -10,
                                            rotateX: 5,
                                            rotateY: -5,
                                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                                        }}
                                        className="flex-none w-[260px] md:w-[280px] lg:w-[300px] rounded-2xl border border-white/10 bg-slate-900/60 p-2 backdrop-blur-md transition-colors cursor-pointer relative z-10"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <Link href="/templates" className="block relative aspect-[1/1.414] w-full rounded-xl overflow-hidden bg-slate-950/80 group-hover:bg-slate-900 shadow-inner">
                                            <Image
                                                src={template.src}
                                                alt={template.alt}
                                                fill
                                                className="object-cover p-1 rounded-xl transition-transform duration-500 ease-out group-hover:scale-105"
                                                sizes="(max-width: 640px) 260px, (max-width: 1024px) 280px, 300px"
                                            />
                                            {template.isNew && (
                                                <div className="absolute top-3 right-3 z-20">
                                                    <span className="bg-gradient-to-r from-brand-500 to-rose-500 text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded shadow-lg shadow-rose-500/20 tracking-wider">
                                                        NEW
                                                    </span>
                                                </div>
                                            )}
                                        </Link>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    {/* Scroll Right Button */}
                    <button
                        onClick={slideRight}
                        className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-md p-3 text-brand-200 hover:text-white hover:bg-slate-800 transition-all hidden md:block opacity-0 group-hover:opacity-100 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                        aria-label="Next template"
                    >
                        <ChevronRight size={24} strokeWidth={2.5} />
                    </button>
                </div>
            </div>
        </section>
    );
}
