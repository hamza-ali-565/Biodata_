"use client";

import { createContext, useContext, useMemo } from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";
import {
    SCROLL_DURATION,
    SCROLL_EASE,
    SCROLL_X,
    SCROLL_Y,
    fadeUpVariant,
    motionDisabledStagger,
    motionDisabledVariants,
    scrollViewport,
    slideFromVariant,
    staggerContainer,
} from "../lib/motion";

const ScrollMotionContext = createContext(null);

function buildFallback() {
    const reveal = (delay = 0) => ({
        initial: { opacity: 1, y: SCROLL_Y },
        whileInView: { opacity: 1, y: 0 },
        viewport: scrollViewport,
        transition: { duration: SCROLL_DURATION, delay, ease: SCROLL_EASE },
    });

    return {
        disabled: false,
        viewport: scrollViewport,
        revealProps: reveal,
        revealFromSide: (x = SCROLL_X, delay = 0) => ({
            initial: { opacity: 1, x },
            whileInView: { opacity: 1, x: 0 },
            viewport: scrollViewport,
            transition: { duration: SCROLL_DURATION, delay, ease: SCROLL_EASE },
        }),
        fadeUp: fadeUpVariant,
        slideFrom: slideFromVariant,
        stagger: staggerContainer,
        motionProps: (delay = 0) => ({
            variants: fadeUpVariant,
            initial: "hidden",
            whileInView: "visible",
            viewport: scrollViewport,
            custom: delay,
        }),
    };
}

export function ScrollMotionProvider({ children }) {
    const prefersReduced = useReducedMotion();
    const disabled = Boolean(prefersReduced);

    const value = useMemo(() => {
        if (disabled) {
            return {
                disabled: true,
                viewport: scrollViewport,
                revealProps: () => ({ initial: false }),
                revealFromSide: () => ({ initial: false }),
                fadeUp: motionDisabledVariants,
                slideFrom: () => motionDisabledVariants,
                stagger: motionDisabledStagger,
                motionProps: () => ({
                    initial: false,
                }),
            };
        }

        return {
            disabled: false,
            viewport: scrollViewport,
            revealProps: (delay = 0) => ({
                initial: { opacity: 1, y: SCROLL_Y },
                whileInView: { opacity: 1, y: 0 },
                viewport: scrollViewport,
                transition: { duration: SCROLL_DURATION, delay, ease: SCROLL_EASE },
            }),
            revealFromSide: (x = SCROLL_X, delay = 0) => ({
                initial: { opacity: 1, x },
                whileInView: { opacity: 1, x: 0 },
                viewport: scrollViewport,
                transition: { duration: SCROLL_DURATION, delay, ease: SCROLL_EASE },
            }),
            fadeUp: fadeUpVariant,
            slideFrom: slideFromVariant,
            stagger: staggerContainer,
            motionProps: (delay = 0) => ({
                variants: fadeUpVariant,
                initial: "hidden",
                whileInView: "visible",
                viewport: scrollViewport,
                custom: delay,
            }),
        };
    }, [disabled]);

    return (
        <ScrollMotionContext.Provider value={value}>
            <MotionConfig
                reducedMotion={prefersReduced ? "user" : "never"}
                transition={{ duration: SCROLL_DURATION, ease: SCROLL_EASE }}
            >
                {children}
            </MotionConfig>
        </ScrollMotionContext.Provider>
    );
}

export function useScrollMotion() {
    return useContext(ScrollMotionContext) ?? buildFallback();
}
