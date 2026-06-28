import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../data/site.js'
import { fadeUp, scaleIn, stagger, viewport } from '../lib/motion.js'
import { IconStar } from './Icons.jsx'

export default function Testimonials() {
  return (
    <section className="section" id="avis">
      <div className="container">
        <motion.div
          className="section__head"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.span className="eyebrow" variants={fadeUp}>
            Ils ont conduit la Model Y
          </motion.span>
          <motion.h2 className="section__title" variants={fadeUp}>
            Des road-trips <span className="grad-text">inoubliables</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="testimonials"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              className="card testimonial"
              key={t.name}
              variants={scaleIn}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <div className="testimonial__stars" aria-label={`${t.rating} sur 5`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <IconStar key={i} width={18} height={18} />
                ))}
              </div>
              <blockquote className="testimonial__quote">“{t.quote}”</blockquote>
              <figcaption className="testimonial__author">
                <span className="testimonial__avatar" aria-hidden="true">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <strong>{t.name}</strong>
                  <span className="testimonial__city">{t.city}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
