import { motion } from 'framer-motion'
import { MODELY } from '../data/site.js'
import { reveal, revealScale, stagger, viewport } from '../lib/motion.js'

export default function ModelY() {
  return (
    <section className="section" id="modely">
      <div className="container">
        <div className="modely__inner">
          <motion.div
            className="modely__media"
            variants={revealScale}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <div className="modely__photo" />
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
            <motion.span className="eyebrow" variants={reveal}>
              {MODELY.eyebrow}
            </motion.span>
            <motion.h2 className="stitle" variants={reveal}>
              {MODELY.title}
            </motion.h2>
            <motion.p className="slead" variants={reveal}>
              {MODELY.lead}
            </motion.p>

            <motion.div className="modely__features" variants={stagger}>
              {MODELY.features.map((f) => (
                <motion.div key={f.title} variants={reveal}>
                  <h3 className="feat__title">{f.title}</h3>
                  <p className="feat__text">{f.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
