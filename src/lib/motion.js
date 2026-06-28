// Variantes Framer Motion partagées — reveal au scroll (storytelling).
const EASE = [0.16, 1, 0.3, 1]

export const reveal = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
}

export const revealScale = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: EASE } },
}

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
}

export const viewport = { once: true, margin: '-70px' }

// Spotlight au curseur (cartes en verre).
export function spotlight(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}

// Bouton magnétique.
export function magnetize(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const mx = (e.clientX - (r.left + r.width / 2)) * 0.3
  const my = (e.clientY - (r.top + r.height / 2)) * 0.5
  el.style.transform = `translate(${mx}px, ${my}px)`
}
export function demagnetize(e) {
  e.currentTarget.style.transform = ''
}
