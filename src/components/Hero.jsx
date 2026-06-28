import { motion } from 'framer-motion'
import { HERO, STATS } from '../data/site.js'
import { reveal, stagger, magnetize, demagnetize } from '../lib/motion.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__inner">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.span className="eyebrow" variants={reveal}>
              {HERO.eyebrow}
            </motion.span>

            <motion.h1 className="hero__title" variants={reveal}>
              {HERO.titleTop}
              <br />
              <span className="accent-ital">{HERO.titleAccent}</span>
            </motion.h1>

            <motion.p className="hero__lead" variants={reveal}>
              {HERO.lead}
            </motion.p>

            <motion.div className="hero__badges" variants={reveal}>
              {HERO.badges.map((b) => (
                <span className="badge" key={b}>
                  {b}
                </span>
              ))}
            </motion.div>

            <motion.div className="hero__actions" variants={reveal}>
              <a
                className="btn btn--primary btn--lg magnetic"
                href="#reserver"
                onMouseMove={magnetize}
                onMouseLeave={demagnetize}
              >
                Réserver maintenant
              </a>
              <a className="btn btn--ghost btn--lg" href="#reserver">
                Voir les plateformes
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__media"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero__photo" />
            <span className="hero__tag">Tesla Model Y · Long Range</span>
          </motion.div>
        </div>

        <motion.dl
          className="specbar"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {STATS.map((s) => (
            <motion.div className="spec" key={s.label} variants={reveal}>
              <dt className="spec__value">
                {s.value}
                <span className="spec__unit">{s.unit}</span>
              </dt>
              <dd className="spec__label">{s.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>

      <span className="hero__scroll" aria-hidden="true">
        <span />
        Défiler
      </span>
    </section>
  )
}
