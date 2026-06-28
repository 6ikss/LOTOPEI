// Variantes Framer Motion — discrètes, lentes, raffinées.

const EASE = [0.16, 1, 0.3, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.95, ease: EASE } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.1, ease: EASE } },
}

// Conteneur qui décale l'entrée de ses enfants.
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
}

export const viewport = { once: true, margin: '-60px' }

// Bouton magnétique : l'élément glisse légèrement vers le curseur.
export function magnetize(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const mx = (e.clientX - (r.left + r.width / 2)) * 0.32
  const my = (e.clientY - (r.top + r.height / 2)) * 0.5
  el.style.transform = `translate(${mx}px, ${my}px)`
}
export function demagnetize(e) {
  e.currentTarget.style.transform = ''
}
