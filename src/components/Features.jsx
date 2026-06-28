import { motion } from 'framer-motion'
import { FEATURES } from '../data/site.js'
import { fadeUp, scaleIn, stagger, viewport } from '../lib/motion.js'
import { ICONS } from './Icons.jsx'

export default function Features() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div
          className="section__head"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.span className="eyebrow" variants={fadeUp}>
            L’expérience LOTOPEI
          </motion.span>
          <motion.h2 className="section__title" variants={fadeUp}>
            Le luxe électrique, <span className="grad-text">version péi</span>
          </motion.h2>
          <motion.p className="section__subtitle" variants={fadeUp}>
            Tout le confort d’une Tesla Model Y Long Range, pensé pour explorer La Réunion sans
            aucune contrainte.
          </motion.p>
        </motion.div>

        <motion.div
          className="features"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {FEATURES.map((f) => {
            const Icon = ICONS[f.icon]
            return (
              <motion.article
                className="card feature"
                key={f.title}
                variants={scaleIn}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              >
                <span className="feature__icon">{Icon && <Icon />}</span>
                <h3 className="feature__title">{f.title}</h3>
                <p className="feature__text">{f.text}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
