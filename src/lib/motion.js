// Shared Framer Motion variants — keeps every transition consistent across the site.

const EASE = [0.16, 1, 0.3, 1] // premium "ease-out-expo" feel

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

// Parent container that staggers its children's entrance.
export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
}

// Reusable whileInView viewport config — reveal once, slightly before fully in view.
export const viewport = { once: true, margin: '-80px' }

// Cursor-follow spotlight: place on a card's onMouseMove to light a soft glow
// under the pointer (reads via the --mx/--my CSS vars in index.css).
export function spotlight(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}
