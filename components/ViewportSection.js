"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useScrollMotion } from "./ScrollMotionProvider";

/**
 * Section that reveals on scroll. Uses both whileInView and useInView-driven
 * animate so content stays visible and animates on mobile direct loads.
 */
export function ViewportSection({
  children,
  className,
  variants,
  stagger = false,
  ...rest
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0,
    margin: "0px 0px -24px 0px",
  });
  const { fadeUp, stagger: staggerVariant, viewport, disabled } = useScrollMotion();
  const resolvedVariants = variants ?? (stagger ? staggerVariant : fadeUp);

  if (disabled) {
    return (
      <section ref={ref} className={className} {...rest}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      ref={ref}
      className={className}
      variants={resolvedVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileInView="visible"
      viewport={viewport}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
