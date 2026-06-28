import { motion } from 'framer-motion'
import { TRUST } from '../data/site.js'
import { reveal, stagger, viewport } from '../lib/motion.js'
import { ICONS } from './Icons.jsx'

export default function Trust() {
  return (
    <section className="section" id="confiance">
      <div className="container">
        <motion.div
          className="shead shead--center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.span className="eyebrow eyebrow--center" variants={reveal}>
            En toute sérénité
          </motion.span>
          <motion.h2 className="stitle" variants={reveal}>
            Réservez l’esprit léger
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {TRUST.map((t) => {
            const Icon = ICONS[t.icon]
            return (
              <motion.div className="glass trust" key={t.title} variants={reveal}>
                <span className="trust__icon">{Icon && <Icon width={24} height={24} />}</span>
                <div>
                  <h3 className="trust__title">{t.title}</h3>
                  <p className="trust__text">{t.text}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
