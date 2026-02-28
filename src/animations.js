// ─── Shared Framer Motion variants ────────────────────────────────────────────
// Centralise all animation definitions here so components stay clean and we
// avoid re-creating plain-object variants on every render.

/** Standard fade-up entrance used for most cards and sections */
export const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
}

/** Slightly larger travel for hero-level elements */
export const fadeUpHero = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
}

/** Scale-in entrance — great for cards / CTAs */
export const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
}

/** Slide from the right — for the specialist bio column */
export const slideRight = {
    hidden: { opacity: 0, x: 15 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
}

/** Slide from the left — for checklist items */
export const slideLeft = {
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
}

/**
 * Returns stagger delay capped at 300 ms so the last item in a long list
 * never feels like the page is broken.
 */
export function staggerDelay(i, step = 0.1) {
    return Math.min(i * step, 0.3)
}

/** Common viewport settings — trigger when 50 px enters the viewport, once only */
export const viewport = { once: true, margin: '-50px' }

/** Props to pass to every whileInView motion element for GPU compositing hints */
export const willChange = { willChange: 'transform, opacity' }

/** FAQ accordion variants — snappy open, smooth close */
export const accordionVariants = {
    open: { opacity: 1, height: 'auto' },
    collapsed: { opacity: 0, height: 0 },
}
export const accordionTransition = {
    duration: 0.22,
    ease: [0.04, 0.62, 0.23, 0.98],
}
