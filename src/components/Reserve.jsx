import { motion } from 'framer-motion'
import { PLATFORMS } from '../data/site.js'
import { reveal, stagger, viewport, spotlight } from '../lib/motion.js'
import { IconArrowUpRight } from './Icons.jsx'

export default function Reserve() {
  return (
    <section className="section" id="reserver">
      <div className="container">
        <motion.div
          className="shead shead--center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.span className="eyebrow eyebrow--center" variants={reveal}>
            Réserver
          </motion.span>
          <motion.h2 className="stitle" variants={reveal}>
            Trois plateformes, <span className="accent-ital">une Tesla</span>
          </motion.h2>
          <motion.p className="slead" variants={reveal}>
            Choisissez votre plateforme préférée. Réservation, assurance et paiement sont gérés
            en toute sécurité directement chez le partenaire.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid-3"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {PLATFORMS.map((p) => (
            <motion.div
              className="glass platform"
              key={p.name}
              data-spot=""
              onMouseMove={spotlight}
              variants={reveal}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <span className="platform__logo">
                <img src={p.logo} alt={p.name} loading="lazy" width="120" height="24" />
              </span>
              <h3 className="platform__name">{p.name}</h3>
              <p className="platform__text">{p.text}</p>
              <div className="platform__foot">
                <span className="platform__note">{p.note}</span>
                <a
                  className="tlink"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir l’annonce sur ${p.name} (nouvel onglet)`}
                >
                  Voir l’annonce
                  <IconArrowUpRight className="tlink__arrow" width={17} height={17} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
