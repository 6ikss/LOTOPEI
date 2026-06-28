import { motion } from 'framer-motion'
import { reveal, stagger, viewport, magnetize, demagnetize } from '../lib/motion.js'

export default function CtaFinal() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <motion.div
          className="finalcta"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.span className="eyebrow eyebrow--center" variants={reveal}>
            Prêt à prendre le volant ?
          </motion.span>
          <motion.h2 className="finalcta__title" variants={reveal}>
            La Réunion vous attend, <span className="accent-ital">en silence.</span>
          </motion.h2>
          <motion.div className="finalcta__actions" variants={reveal}>
            <a
              className="btn btn--primary btn--lg magnetic"
              href="#reserver"
              onMouseMove={magnetize}
              onMouseLeave={demagnetize}
            >
              Réserver ma Tesla Model Y
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
