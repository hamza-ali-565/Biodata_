
import { forwardRef } from "react";

export const ViewportSection = forwardRef(function ViewportSection({
  children,
  className,
  variants,
  stagger = false,
  ...rest
}, ref) {
  // Stripped out framer-motion, using static section
  return (
    <section ref={ref} className={className} {...rest}>
      {children}
    </section>
  );
});
