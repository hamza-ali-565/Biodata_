/** Sitewide scroll-reveal timing — keep entrances fast and unobtrusive */
export const SCROLL_DURATION = 0.35;
export const SCROLL_Y = 12;
export const SCROLL_X = 16;
export const STAGGER_CHILDREN = 0.04;
export const STAGGER_DELAY_CHILDREN = 0.02;
export const SCROLL_EASE = [0.25, 0.1, 0.25, 1];

export const scrollViewport = {
    once: true,
    amount: 0.12,
    margin: "0px 0px -40px 0px",
};

export const fadeUpVariant = {
    hidden: { opacity: 0, y: SCROLL_Y },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: SCROLL_DURATION, ease: SCROLL_EASE },
    },
};

export const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: STAGGER_CHILDREN,
            delayChildren: STAGGER_DELAY_CHILDREN,
        },
    },
};

export const motionDisabledVariants = { hidden: {}, visible: {} };
export const motionDisabledStagger = { hidden: {}, visible: {} };
