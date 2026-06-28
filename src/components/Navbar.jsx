import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND } from '../data/site.js'
import { IconBolt } from './Icons.jsx'

const LINKS = [
  { href: '#experience', label: 'Expérience' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#avis', label: 'Avis' },
]

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
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav__inner">
        <a className="nav__brand" href="#top">
          <span className="nav__mark">
            <IconBolt width={18} height={18} />
          </span>
          {BRAND.name}
        </a>

        <nav className="nav__links" aria-label="Navigation principale">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--primary btn--sm nav__cta" href="#reserver">
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              className="btn btn--primary"
              href="#reserver"
              onClick={() => setOpen(false)}
            >
              Réserver
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
