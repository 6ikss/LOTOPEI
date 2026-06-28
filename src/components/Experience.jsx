import { motion } from 'framer-motion'
import { FEATURES } from '../data/site.js'
import { fadeUp, stagger, viewport } from '../lib/motion.js'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="shead">
          <div>
            <span className="overline">L’expérience LOTOPEI</span>
            <h2 className="display shead__title">
              Le raffinement, <span className="accent">sans bruit</span>
            </h2>
          </div>
          <p className="lead shead__aside muted">
            Tout le confort d’une Tesla Model Y Long Range, pensé pour découvrir La Réunion
            dans la plus grande sérénité.
          </p>
        </div>

        <motion.div
          className="xlist"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {FEATURES.map((f, i) => (
            <motion.article className="xitem" key={f.title} variants={fadeUp}>
              <div className="xitem__num">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="xitem__title">{f.title}</h3>
              <p className="xitem__text">{f.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
