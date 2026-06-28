import { motion } from 'framer-motion'
import { WHY } from '../data/site.js'
import { reveal, stagger, viewport, spotlight } from '../lib/motion.js'
import { ICONS } from './Icons.jsx'

export default function Why() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div
          className="shead"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.span className="eyebrow" variants={reveal}>
            Pourquoi Lotopéi
          </motion.span>
          <motion.h2 className="stitle" variants={reveal}>
            Le luxe électrique, <span className="accent-ital">version péi</span>
          </motion.h2>
          <motion.p className="slead" variants={reveal}>
            Bien plus qu’une location : une façon moderne et raffinée de vivre l’île intense,
            sans compromis sur le confort ni sur le silence.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {WHY.map((f) => {
            const Icon = ICONS[f.icon]
            return (
              <motion.article
                className="glass card"
                key={f.title}
                data-spot=""
                onMouseMove={spotlight}
                variants={reveal}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              >
                <span className="card__icon">{Icon && <Icon width={24} height={24} />}</span>
                <h3 className="card__title">{f.title}</h3>
                <p className="card__text">{f.text}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
