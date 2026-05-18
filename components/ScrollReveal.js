"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useScrollMotion } from "./ScrollMotionProvider";

/**
 * Scroll-triggered reveal that stays visible even if IntersectionObserver
 * does not fire on mobile direct navigation (opacity is always 1 in variants).
 */
export function ScrollReveal({
    children,
    className,
    delay = 0,
    as = "motion.div",
    ...rest
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0, margin: "0px 0px -24px 0px" });
    const { disabled, fadeUp, viewport, motionProps } = useScrollMotion();

    const Component = motion[as] ?? motion.div;

    if (disabled) {
        return (
            <div ref={ref} className={className} {...rest}>
                {children}
            </div>
        );
    }

    return (
        <Component
            ref={ref}
            className={className}
            {...motionProps(delay)}
            animate={isInView ? "visible" : undefined}
            {...rest}
        >
            {children}
        </Component>
    );
}
