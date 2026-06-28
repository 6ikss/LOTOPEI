// Décor vectoriel « golden hour » de La Réunion : ciel coucher de soleil,
// soleil + halo, chaîne volcanique, mer avec reflet. Sert de hero par défaut ;
// la photo (public/hero-tesla.jpg) passe par-dessus si elle est présente.
export default function HeroScene() {
  return (
    <svg
      className="hero__scene"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#241640" />
          <stop offset="0.42" stopColor="#6e3556" />
          <stop offset="0.52" stopColor="#c85a4f" />
          <stop offset="0.57" stopColor="#ff9e5e" />
          <stop offset="0.6" stopColor="#ffd98a" />
        </linearGradient>
        <linearGradient id="hSea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffcfa0" />
          <stop offset="0.16" stopColor="#b1586a" />
          <stop offset="0.5" stopColor="#3a1f3a" />
          <stop offset="1" stopColor="#120a16" />
        </linearGradient>
        <radialGradient id="hSun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff4d6" />
          <stop offset="0.55" stopColor="#ffc56b" />
          <stop offset="1" stopColor="#ff9a5b" />
        </radialGradient>
        <radialGradient id="hGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffd9a0" stopOpacity="0.55" />
          <stop offset="0.5" stopColor="#ff9a5b" stopOpacity="0.18" />
          <stop offset="1" stopColor="#ff9a5b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hRidgeB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9a566a" />
          <stop offset="1" stopColor="#532f47" />
        </linearGradient>
        <linearGradient id="hRidgeF" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2c1626" />
          <stop offset="1" stopColor="#150b15" />
        </linearGradient>
        <linearGradient id="hReflect" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffdca6" stopOpacity="0.8" />
          <stop offset="1" stopColor="#ffdca6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ciel */}
      <rect x="0" y="0" width="1440" height="540" fill="url(#hSky)" />

      {/* halo + soleil */}
      <circle cx="1080" cy="250" r="320" fill="url(#hGlow)" />
      <circle cx="1080" cy="250" r="82" fill="url(#hSun)" />

      {/* chaîne arrière (brume chaude) */}
      <path
        d="M0 540 L0 470 C170 446 330 392 500 410 C650 426 720 372 860 402 C1000 432 1140 414 1280 442 L1440 462 L1440 540 Z"
        fill="url(#hRidgeB)"
        opacity="0.7"
      />

      {/* chaîne avant + volcan */}
      <path
        d="M0 540 L0 506 C150 506 300 478 430 488 L548 352 L660 488 C800 506 950 478 1090 498 C1220 512 1330 504 1440 510 L1440 540 Z"
        fill="url(#hRidgeF)"
      />
      {/* braise au sommet du volcan */}
      <path d="M548 352 L566 398 L530 398 Z" fill="#ff7a59" opacity="0.6" />

      {/* mer */}
      <rect x="0" y="540" width="1440" height="360" fill="url(#hSea)" />
      {/* bande lumineuse à l'horizon */}
      <ellipse cx="1080" cy="540" rx="430" ry="20" fill="#ffe0aa" opacity="0.45" />
      {/* reflet du soleil */}
      <path d="M1040 542 L1120 542 L1158 820 L1002 820 Z" fill="url(#hReflect)" />
    </svg>
  )
}
