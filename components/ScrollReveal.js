"use client";

import { forwardRef } from "react";

export const ScrollReveal = forwardRef(function ScrollReveal({
    children,
    className,
    as: Component = "div",
    ...rest
}, ref) {
    // Stripped out framer-motion, using static component
    // If Component was "motion.div", change it to "div"
    const Tag = typeof Component === "string" && Component.startsWith("motion.") 
        ? Component.replace("motion.", "") 
        : Component;

    return (
        <Tag ref={ref} className={className} {...rest}>
            {children}
        </Tag>
    );
});
