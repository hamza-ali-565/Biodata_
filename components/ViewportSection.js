
import { forwardRef } from "react";

export const ViewportSection = forwardRef(function ViewportSection({
  children,
  className,
  ...rest
}, ref) {
  return (
    <section ref={ref} className={className} {...rest}>
      {children}
    </section>
  );
});
