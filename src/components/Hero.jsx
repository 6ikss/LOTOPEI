import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BRAND, STATS } from '../data/site.js'
import { fadeUp, stagger } from '../lib/motion.js'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // parallax — l'image défile plus lentement et zoome légèrement
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero__media" aria-hidden="true">
        <motion.div className="hero__img" style={{ y: imgY, scale: imgScale }} />
        <motion.div className="hero__overlay" style={{ opacity: overlayOpacity }} />
        <span className="hero__sun" />
      </div>

      <motion.div
        className="hero__content container"
        style={{ y: contentY }}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.span className="badge" variants={fadeUp}>
          <span className="badge__dot" />
          La Réunion · Tesla Model Y Long Range
        </motion.span>

        <motion.h1 className="hero__title" variants={fadeUp}>
          Conduisez une <span className="grad-text">Tesla Model Y</span>
          <br />
          au cœur de La Réunion
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

      <a className="hero__scroll" href="#experience" aria-label="Découvrir la suite">
        <span className="hero__scroll-dot" />
      </a>
    </section>
  )
}
