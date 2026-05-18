/** Sitewide scroll-reveal timing — keep entrances fast and unobtrusive */
export const SCROLL_DURATION = 0.35;
export const SCROLL_Y = 12;
export const SCROLL_X = 16;
export const STAGGER_CHILDREN = 0.04;
export const STAGGER_DELAY_CHILDREN = 0.02;
export const SCROLL_EASE = [0.25, 0.1, 0.25, 1];

/** Lower threshold so mobile direct loads / refresh still trigger reveals */
export const scrollViewport = {
    once: true,
    amount: 0,
    margin: "0px 0px -24px 0px",
};

/**
 * Hidden state keeps opacity at 1 so content is never invisible if
 * whileInView fails to fire (common on mobile direct URL / refresh).
 */
export const fadeUpVariant = {
    hidden: { opacity: 1, y: SCROLL_Y },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: SCROLL_DURATION, ease: SCROLL_EASE },
    },
};

export const slideFromVariant = (x = SCROLL_X) => ({
    hidden: { opacity: 1, x },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: SCROLL_DURATION, ease: SCROLL_EASE },
    },
});

export const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: STAGGER_CHILDREN,
            delayChildren: STAGGER_DELAY_CHILDREN,
        },
    },
};

export const motionDisabledVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 },
};

export const motionDisabledStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0 } },
};
