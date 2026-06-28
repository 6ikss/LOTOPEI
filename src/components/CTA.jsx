import { motion } from 'framer-motion'
import { PLATFORMS } from '../data/site.js'
import { fadeUp, scaleIn, stagger, viewport } from '../lib/motion.js'
import { IconArrow } from './Icons.jsx'

export default function CTA() {
  return (
    <section className="section cta" id="reserver">
      <div className="cta__glow" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="section__head"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.span className="eyebrow" variants={fadeUp}>
            Réservez en 2 minutes
          </motion.span>
          <motion.h2 className="section__title" variants={fadeUp}>
            Prêt à prendre le volant ?
          </motion.h2>
          <motion.p className="section__subtitle" variants={fadeUp}>
            Choisissez votre plateforme préférée. La réservation, l’assurance et le paiement sont
            gérés en toute sécurité directement sur le site partenaire.
          </motion.p>
        </motion.div>

        <motion.div
          className="platforms"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {PLATFORMS.map((p) => (
            <motion.a
              className="card platform"
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Réserver sur ${p.name} (nouvel onglet)`}
              style={{ '--card-accent': p.accent }}
              variants={scaleIn}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <span className="platform__top">
                <span className="platform__logo">
                  <img src={p.logo} alt={p.name} loading="lazy" width="120" height="24" />
                </span>
                <span className="platform__arrow">
                  <IconArrow width={20} height={20} />
                </span>
              </span>
              <span className="platform__tagline">{p.tagline}</span>
              <span className="platform__foot">
                <span className="platform__note">{p.note}</span>
                <span className="platform__action">Réserver →</span>
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
