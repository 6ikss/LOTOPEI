import { motion } from 'framer-motion'
import { ITINERARIES } from '../data/site.js'
import { reveal, stagger, viewport } from '../lib/motion.js'

export default function Itineraries() {
  return (
    <section className="section" id="itineraires">
      <div className="container">
        <motion.div
          className="shead"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.span className="eyebrow" variants={reveal}>
            Itinéraires
          </motion.span>
          <motion.h2 className="stitle" variants={reveal}>
            L’île intense, <span className="accent-ital">d’un volant</span>
          </motion.h2>
          <motion.p className="slead" variants={reveal}>
            Du littoral aux hauts, quatre échappées pour ressentir La Réunion comme jamais —
            en silence, le couple sous le pied droit.
          </motion.p>
        </motion.div>

        <motion.div
          className="itin"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {ITINERARIES.map((it, i) => (
            <motion.article className="itin__row" key={it.name} variants={reveal}>
              <span className="itin__num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="itin__name">{it.name}</h3>
                <p className="itin__meta">{it.meta}</p>
              </div>
              <p className="itin__text">{it.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
