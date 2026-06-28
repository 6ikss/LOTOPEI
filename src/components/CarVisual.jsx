import { motion, useReducedMotion } from 'framer-motion'

// Floating spec chips around the car stage (reflow into a row on mobile).
const CHIPS = [
  { label: 'Silence absolu', x: '3%', y: '14%', delay: 0 },
  { label: '0 émission', x: '80%', y: '18%', delay: 0.4 },
  { label: 'Supercharge', x: '6%', y: '74%', delay: 0.8 },
  { label: 'Model Y · 2025', x: '76%', y: '78%', delay: 1.2 },
]

export default function CarVisual() {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className="carstage"
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="carstage__panel">
        <span className="carstage__halo" aria-hidden="true" />

        <motion.div
          className="carstage__car"
          animate={reduce ? {} : { y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Car />
        </motion.div>

        <div className="carstage__chips">
          {CHIPS.map((c) => (
            <motion.span
              key={c.label}
              className="chip chip--float"
              style={{ left: c.x, top: c.y }}
              initial={{ opacity: 0, y: 8 }}
              animate={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -9, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.8 + c.delay },
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: c.delay },
              }}
            >
              <span className="chip__dot" />
              {c.label}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Stylised side-profile EV silhouette: carved wheel arches + fastback roofline.
function Car() {
  return (
    <svg
      className="carsvg"
      viewBox="0 0 720 300"
      role="img"
      aria-label="Tesla Model Y, location de voiture électrique à La Réunion"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a3043" />
          <stop offset="0.52" stopColor="#161a26" />
          <stop offset="1" stopColor="#0b0d15" />
        </linearGradient>
        <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5b9bff" />
          <stop offset="0.5" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9cc4ff" stopOpacity="0.6" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0.1" />
        </linearGradient>
        <radialGradient id="head" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#cfeaff" />
          <stop offset="1" stopColor="#cfeaff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ground" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#5b9bff" stopOpacity="0.42" />
          <stop offset="1" stopColor="#5b9bff" stopOpacity="0" />
        </radialGradient>
        <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* ground reflection / glow */}
      <ellipse cx="360" cy="268" rx="295" ry="20" fill="url(#ground)" />

      {/* body with carved wheel arches + fastback roof */}
      <path
        d="M66 210
           C60 184 68 168 92 162
           C150 120 212 100 300 99
           C360 99 402 106 452 140
           C516 150 596 156 646 166
           C668 171 678 184 674 200
           L666 203 L572 203
           C566 158 474 158 470 203
           L250 203
           C244 158 152 158 148 203
           L66 210 Z"
        fill="url(#body)"
        stroke="url(#rim)"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* greenhouse / glass with a continuous fastback curve */}
      <path
        d="M160 150 C182 121 216 107 268 106 C330 105 374 112 412 130 C432 140 446 146 456 150 Z"
        fill="url(#glass)"
      />

      {/* beltline + door seam + handle for surface detail */}
      <path d="M120 152 L598 158" stroke="url(#rim)" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
      <line x1="334" y1="118" x2="334" y2="196" stroke="#0a0c14" strokeWidth="2.5" opacity="0.5" />
      <rect x="298" y="166" width="22" height="4" rx="2" fill="#39405a" />

      {/* taillight + headlight */}
      <path d="M70 170 L82 172 L82 182 L70 181 Z" fill="url(#rim)" opacity="0.85" />
      <path d="M636 176 L668 182" stroke="url(#rim)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="660" cy="184" r="14" fill="url(#head)" filter="url(#soft)" />

      {/* wheels tucked into the arches */}
      {[200, 520].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="212" r="47" fill="#070810" />
          <circle cx={cx} cy="212" r="46" fill="none" stroke="#2a3042" strokeWidth="2" />
          <circle cx={cx} cy="212" r="25" fill="none" stroke="url(#rim)" strokeWidth="3" />
          <circle cx={cx} cy="212" r="6" fill="#5b9bff" />
          {[0, 60, 120, 180, 240, 300].map((a) => {
            const r = (a * Math.PI) / 180
            return (
              <line
                key={a}
                x1={cx + Math.cos(r) * 8}
                y1={212 + Math.sin(r) * 8}
                x2={cx + Math.cos(r) * 23}
                y2={212 + Math.sin(r) * 23}
                stroke="#39405a"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            )
          })}
        </g>
      ))}
    </svg>
  )
}
