"use client";

import { createContext, useContext } from "react";

const ScrollMotionContext = createContext(null);

export function ScrollMotionProvider({ children }) {
    // Stripped out all framer-motion logic for performance
    const value = {
        disabled: true,
        viewport: {},
        revealProps: () => ({}),
        revealFromSide: () => ({}),
        fadeUp: {},
        slideFrom: () => ({}),
        stagger: {},
        motionProps: () => ({}),
    };

    return (
        <ScrollMotionContext.Provider value={value}>
            {children}
        </ScrollMotionContext.Provider>
    );
}

export function useScrollMotion() {
    return useContext(ScrollMotionContext) ?? {
        disabled: true,
        viewport: {},
        revealProps: () => ({}),
        revealFromSide: () => ({}),
        fadeUp: {},
        slideFrom: () => ({}),
        stagger: {},
        motionProps: () => ({}),
    };
}
