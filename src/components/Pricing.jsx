import { motion } from 'framer-motion'
import { PRICING } from '../data/site.js'
import { fadeUp, scaleIn, spotlight, stagger, viewport } from '../lib/motion.js'
import { IconCheck } from './Icons.jsx'

// The featured tier rests slightly lifted. Driving the offset through Framer
// (instead of a CSS transform) avoids the inline-transform overriding the lift.
const featuredScaleIn = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  show: {
    opacity: 1,
    scale: 1,
    y: -10,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Pricing() {
  return (
    <section className="section section--alt" id="tarifs">
      <div className="container">
        <motion.div
          className="section__head"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.span className="eyebrow" variants={fadeUp}>
            Tarifs
          </motion.span>
          <motion.h2 className="section__title" variants={fadeUp}>
            Des formules <span className="grad-text">simples et transparentes</span>
          </motion.h2>
          <motion.p className="section__subtitle" variants={fadeUp}>
            Plus vous roulez, plus le tarif est doux. Carburant ? Zéro. Il suffit de brancher.
          </motion.p>
        </motion.div>

        <motion.div
          className="pricing"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {PRICING.map((tier) => (
            <motion.article
              className={`card price${tier.highlight ? ' price--featured' : ''}`}
              key={tier.name}
              onMouseMove={spotlight}
              variants={tier.highlight ? featuredScaleIn : scaleIn}
              whileHover={{ y: tier.highlight ? -18 : -8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              {tier.badge && <span className="price__badge">{tier.badge}</span>}
              <h3 className="price__name">{tier.name}</h3>
              <p className="price__duration">{tier.duration}</p>

              <p className="price__amount">
                <span className="price__value">{tier.price}</span>
                <span className="price__unit">{tier.unit}</span>
              </p>

              <ul className="price__list">
                {tier.features.map((f) => (
                  <li key={f}>
                    <IconCheck width={18} height={18} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                className={`btn btn--lg ${tier.highlight ? 'btn--primary' : 'btn--ghost'}`}
                href="#reserver"
              >
                {tier.cta}
              </a>
            </motion.article>
          ))}
        </motion.div>

        <p className="pricing__note">
          Prix indicatifs — la réservation et le paiement se font sur Roadstr, Getaround ou Zotcar.
        </p>
      </div>
    </section>
  )
}
