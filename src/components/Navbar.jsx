import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND, NAV } from '../data/site.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`nav${scrolled || open ? ' nav--scrolled' : ''}`}
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav__inner">
        <a className="nav__brand" href="#top" aria-label="Lotopéi, accueil">
          {BRAND.name}
          <sup>974</sup>
        </a>

        <nav className="nav__links" aria-label="Navigation principale">
          {NAV.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--primary nav__cta" href="#reserver">
          Réserver
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="nav-mobile"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`nav__burger${open ? ' is-open' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="nav-mobile"
            className="nav__mobile"
            aria-label="Navigation mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="nav__mobile-inner">
              {NAV.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a className="btn btn--primary" href="#reserver" onClick={() => setOpen(false)}>
                Réserver
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
