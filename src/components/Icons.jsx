// Jeu d'icônes SVG inline (style Lucide). Aucune emoji utilisée comme icône.

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
}

export const IconSparkle = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M12 8.5c.6 2 1.5 2.9 3.5 3.5-2 .6-2.9 1.5-3.5 3.5-.6-2-1.5-2.9-3.5-3.5 2-.6 2.9-1.5 3.5-3.5z" />
  </svg>
)
export const IconBattery = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="8" width="15" height="8" rx="2" />
    <path d="M21 11v2" />
    <path d="M7 12h3M9 10.5v3" />
  </svg>
)
export const IconBolt = (p) => (
  <svg {...base} {...p}>
    <path d="M13 2 4.5 13.5H11l-1 8.5 9-11.5H12l1-8.5z" fill="currentColor" stroke="none" />
  </svg>
)
export const IconRoute = (p) => (
  <svg {...base} {...p}>
    <circle cx="6" cy="19" r="2.4" />
    <circle cx="18" cy="5" r="2.4" />
    <path d="M8.4 19H16a3.3 3.3 0 0 0 0-6.6H8a3.3 3.3 0 0 1 0-6.6h6.6" />
  </svg>
)
export const IconShield = (p) => (
  <svg {...base} {...p}>
    <path d="M12 22s7.5-3.8 7.5-9.4V5.2L12 2.4 4.5 5.2v7.4C4.5 18.2 12 22 12 22z" />
    <path d="m9 12 2.2 2.2L15.4 10" />
  </svg>
)
export const IconLock = (p) => (
  <svg {...base} {...p}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
)
export const IconKey = (p) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="15" r="4" />
    <path d="M10.8 12.2 20 3M16 7l3 3M14 9l2 2" />
  </svg>
)
export const IconArrow = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)
export const IconArrowUpRight = (p) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const ICONS = {
  sparkle: IconSparkle,
  battery: IconBattery,
  bolt: IconBolt,
  route: IconRoute,
  shield: IconShield,
  lock: IconLock,
  key: IconKey,
}
