// Minimal inline icon set (Lucide-style strokes) — no icon library needed.

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
}

export function IconBolt(props) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 4.5 13.5H11l-1 8.5 9-11.5H12l1-8.5z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconRoute(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="19" r="2.6" />
      <circle cx="18" cy="5" r="2.6" />
      <path d="M8.6 19H16a3.4 3.4 0 0 0 0-6.8H8a3.4 3.4 0 0 1 0-6.8h6.4" />
    </svg>
  )
}

export function IconShield(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 22s7.5-3.8 7.5-9.4V5.2L12 2.4 4.5 5.2v7.4C4.5 18.2 12 22 12 22z" />
      <path d="m9 12 2.2 2.2L15.4 10" />
    </svg>
  )
}

export function IconCheck(props) {
  return (
    <svg {...base} strokeWidth={2.2} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function IconStar(props) {
  return (
    <svg {...base} {...props}>
      <path
        d="M12 3.2l2.5 5.1 5.6.8-4 4 .95 5.6L12 16.9l-5 2.6.95-5.6-4-4 5.6-.8z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

export function IconArrow(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export const ICONS = {
  bolt: IconBolt,
  route: IconRoute,
  shield: IconShield,
}
