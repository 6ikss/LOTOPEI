import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../lib/motion.js'

const SPOTS = [
  'Lagon de l’Ermitage',
  'Piton de la Fournaise',
  'Route du littoral',
  'Cirque de Cilaos',
]

export default function Island() {
  return (
    <section className="island" id="ile">
      <IslandScene />

      <motion.div
        className="island__content container"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.span className="eyebrow" variants={fadeUp}>
          L’île intense
        </motion.span>
        <motion.h2 className="section__title" variants={fadeUp}>
          Une <span className="grad-text">Tesla</span>, toute{' '}
          <span className="grad-text">La Réunion</span>
        </motion.h2>
        <motion.p className="section__subtitle" variants={fadeUp}>
          Du lagon turquoise aux coulées du volcan, traversez l’île intense en silence —
          sans une goutte de carburant, ni le moindre bruit de moteur.
        </motion.p>

        <motion.div className="island__spots" variants={fadeUp}>
          {SPOTS.map((s) => (
            <span className="spot" key={s}>
              <span className="spot__dot" />
              {s}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

// Décor sunset : halo solaire, chaînes de montagnes + volcan, mer.
function IslandScene() {
  return (
    <svg
      className="island__scene"
      viewBox="0 0 1440 420"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="isun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffe0a3" />
          <stop offset="0.45" stopColor="#ff9a5b" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ff7a59" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hillBack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6a3640" />
          <stop offset="1" stopColor="#2c1622" />
        </linearGradient>
        <linearGradient id="hillFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#26101a" />
          <stop offset="1" stopColor="#0f0810" />
        </linearGradient>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a1130" />
          <stop offset="1" stopColor="#0a0712" />
        </linearGradient>
      </defs>

      {/* halo solaire bas sur l'horizon */}
      <circle cx="1010" cy="250" r="180" fill="url(#isun)" />

      {/* chaîne arrière avec pic du volcan */}
      <path
        d="M0 250 L150 224 L300 250 L470 168 L560 250 L760 214 L980 250 L1180 220 L1440 250 L1440 420 L0 420 Z"
        fill="url(#hillBack)"
      />
      {/* lueur de lave sur le volcan */}
      <path d="M470 168 L506 232 L434 232 Z" fill="#3a1c20" />
      <path d="M470 168 L484 210 L456 210 Z" fill="#ff7a59" opacity="0.55" />

      {/* chaîne avant */}
      <path
        d="M0 312 L230 286 L470 320 L740 282 L1010 322 L1260 292 L1440 314 L1440 420 L0 420 Z"
        fill="url(#hillFront)"
      />

      {/* mer + reflets */}
      <rect x="0" y="360" width="1440" height="60" fill="url(#sea)" />
      <g stroke="#ff9a5b" strokeOpacity="0.25" strokeLinecap="round">
        <line x1="960" y1="372" x2="1060" y2="372" strokeWidth="2" />
        <line x1="990" y1="384" x2="1040" y2="384" strokeWidth="2" />
        <line x1="930" y1="396" x2="1090" y2="396" strokeWidth="2" />
      </g>
    </svg>
  )
}
