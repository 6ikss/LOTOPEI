import { motion } from 'framer-motion'
import { PRICING } from '../data/site.js'
import { fadeUp, stagger, viewport } from '../lib/motion.js'

export default function Pricing() {
  return (
    <section className="section" id="tarifs">
      <div className="container">
        <div className="shead">
          <div>
            <span className="overline">Tarifs</span>
            <h2 className="display shead__title">
              Des formules <span className="accent">épurées</span>
            </h2>
          </div>
          <p className="lead shead__aside muted">
            Plus vous roulez, plus le tarif s’adoucit. Carburant : aucun — il suffit de brancher.
          </p>
        </div>

        <motion.div
          className="tiers"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {PRICING.map((t) => (
            <motion.article
              className={`tier${t.highlight ? ' tier--featured' : ''}`}
              key={t.name}
              variants={fadeUp}
            >
              <div className="tier__tag">{t.badge || ''}</div>
              <div className="tier__name">{t.name}</div>
              <div className="tier__duration">{t.duration}</div>
              <div className="tier__price">
                <span className="from">À partir de</span>
                <b>{t.price}</b> <small>{t.unit}</small>
              </div>
              <ul className="tier__list">
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a className="link" href="#reserver">
                {t.cta}
                <span className="link__arrow">→</span>
              </a>
            </motion.article>
          ))}
        </motion.div>

        <p className="tiers__note">
          Prix indicatifs — réservation et paiement sur Roadstr, Getaround ou Zotcar.
        </p>
      </div>
    </section>
  )
}
