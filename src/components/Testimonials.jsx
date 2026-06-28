import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../data/site.js'
import { fadeUp, stagger, viewport } from '../lib/motion.js'

export default function Testimonials() {
  return (
    <section className="section" id="avis">
      <div className="container">
        <div className="shead">
          <div>
            <span className="overline">Ils ont conduit la Model Y</span>
            <h2 className="display shead__title">
              Des road-trips <span className="accent">inoubliables</span>
            </h2>
          </div>
        </div>

        <motion.div
          className="voices"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure className="voice" key={t.name} variants={fadeUp}>
              <blockquote className="voice__quote">« {t.quote} »</blockquote>
              <figcaption className="voice__author">
                <b>{t.name}</b> — {t.city}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
