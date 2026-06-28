import { motion } from 'framer-motion'
import { BRAND, STATS } from '../data/site.js'
import { fadeUp, stagger } from '../lib/motion.js'
import CarVisual from './CarVisual.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* animated gradient background */}
      <div className="hero__bg" aria-hidden="true">
        <span className="blob blob--1" />
        <span className="blob blob--2" />
        <span className="blob blob--3" />
        <span className="hero__grid" />
        <span className="hero__vignette" />
      </div>

      <motion.div
        className="hero__content container"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.span className="badge" variants={fadeUp}>
          <span className="badge__dot" />
          Disponible à La Réunion · Tesla Model Y 2025
        </motion.span>

        <motion.h1 className="hero__title" variants={fadeUp}>
          Conduisez une <span className="grad-text">Tesla Model Y</span>
          <br />
          sur l’île de La Réunion
        </motion.h1>

        <motion.p className="hero__subtitle" variants={fadeUp}>
          {BRAND.subtitle}
        </motion.p>

        <motion.div className="hero__actions" variants={fadeUp}>
          <a className="btn btn--primary btn--lg" href="#reserver">
            Réserver maintenant
          </a>
          <a className="btn btn--ghost btn--lg" href="#tarifs">
            Voir les tarifs
          </a>
        </motion.div>

        <motion.dl className="hero__stats" variants={fadeUp}>
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <dt className="stat__value">{s.value}</dt>
              <dd className="stat__label">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <div className="container">
        <CarVisual />
      </div>
    </section>
  )
}
