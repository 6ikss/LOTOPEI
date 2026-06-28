import { motion } from 'framer-motion'
import { PLATFORMS } from '../data/site.js'
import { fadeUp, stagger, viewport } from '../lib/motion.js'

export default function CTA() {
  return (
    <section className="section reserve" id="reserver">
      <div className="container">
        <div className="shead">
          <div>
            <span className="overline">Réservation</span>
            <h2 className="display reserve__title">
              Prenez le <span className="accent">volant</span>
            </h2>
          </div>
          <p className="lead shead__aside reserve__lead">
            Choisissez votre plateforme. Réservation, assurance et paiement sécurisés,
            directement chez notre partenaire.
          </p>
        </div>

        <motion.div
          className="platforms"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {PLATFORMS.map((p) => (
            <motion.a
              className="platform"
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Réserver sur ${p.name} (nouvel onglet)`}
              variants={fadeUp}
            >
              <span className="platform__name">{p.name}</span>
              <span className="platform__note">{p.tagline}</span>
              <span className="platform__arrow" aria-hidden="true">
                ↗
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
