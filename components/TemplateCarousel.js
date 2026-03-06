"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const templates = [
    { id: 1, src: "/images/elegant-marriage-biodata-sample-girl.webp", alt: "Elegant Girl", isNew: false },
    { id: 2, src: "/images/popular-hindu-marriage-biodata-format.webp", alt: "Popular Hindu", isNew: true },
    { id: 3, src: "/images/flowers-marriage-biodata-format.webp", alt: "Flowers Format", isNew: false },
    { id: 4, src: "/images/traditional-theme-marriage-biodata-format.webp", alt: "Traditional Theme", isNew: false },
    { id: 5, src: "/images/sample-marriage-biodata-word-format.webp", alt: "Word Format", isNew: true },
    { id: 6, src: "/images/red-bordered-marriage-biodata-format.webp", alt: "Red Bordered", isNew: false },
    { id: 7, src: "/images/red-and-gold-two-column-marriage-biodata-format-example.webp", alt: "Red and Gold", isNew: false },
    { id: 8, src: "/images/orange-bordered-marriage-biodata-format.webp", alt: "Orange Bordered", isNew: false },
    { id: 9, src: "/images/elegant-marriage-biodata-sample-boy.webp", alt: "Elegant Boy", isNew: false },
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

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 sm:text-4xl">
                        Beautifully Handcrafted Marriage Biodata Templates
                    </h2>
                    <p className="text-sm text-slate-300 sm:text-base font-medium leading-relaxed px-4">
                        We have designed the best looking, well formatted marriage biodata formats for you to
                        just choose and make biodata without any hassle. No need to invest time on layouts,
                        designs and getting that perfect biodata for marriage.
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
                                        <div className="relative aspect-[1/1.414] w-full rounded-xl overflow-hidden bg-slate-950/80 group-hover:bg-slate-900 shadow-inner">
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
                                        </div>
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
