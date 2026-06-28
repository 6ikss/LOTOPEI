import { motion } from 'framer-motion'
import { BRAND, STATS } from '../data/site.js'
import { fadeUp, stagger, viewport, magnetize, demagnetize } from '../lib/motion.js'

const EASE = [0.16, 1, 0.3, 1]
const lineUp = (delay) => ({
  initial: { y: '110%' },
  animate: { y: '0%' },
  transition: { duration: 0.95, delay, ease: EASE },
  style: { display: 'block' },
})

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <motion.span
              className="overline hero__overline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              Location d’exception — La Réunion
            </motion.span>

            <h1 className="display hero__title">
              <span className="line">
                <motion.span {...lineUp(0.2)}>Conduisez l’île,</motion.span>
              </span>
              <span className="line">
                <motion.span className="accent" {...lineUp(0.32)}>
                  en silence.
                </motion.span>
              </span>
            </h1>

            <motion.p
              className="lead hero__lead"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: EASE }}
            >
              {BRAND.subtitle}
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.64, ease: EASE }}
            >
              <a
                className="link magnetic"
                href="#reserver"
                onMouseMove={magnetize}
                onMouseLeave={demagnetize}
              >
                Réserver l’expérience
                <span className="link__arrow">→</span>
              </a>
              <a className="link link--muted" href="#experience">
                Découvrir le véhicule
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero__media"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.3, ease: EASE }}
          >
            <div className="hero__photo" />
            <span className="hero__media-frame" />
            <span className="hero__media-label">Tesla Model Y Long Range</span>
          </motion.div>
        </div>

        <motion.div
          className="specbar"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {STATS.map((s) => (
            <motion.div className="spec" key={s.label} variants={fadeUp}>
              <div className="spec__value">{s.value}</div>
              <div className="spec__label">{s.label}</div>
            </motion.div>
          ))}
          <motion.div className="spec" variants={fadeUp}>
            <div className="spec__value">5 places</div>
            <div className="spec__label">tout confort</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
