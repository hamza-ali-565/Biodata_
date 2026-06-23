
import { forwardRef } from "react";

export const ScrollReveal = forwardRef(function ScrollReveal({
    children,
    className,
    as: Component = "div",
    ...rest
}, ref) {
    return (
        <Component ref={ref} className={className} {...rest}>
            {children}
        </Component>
    );
});
