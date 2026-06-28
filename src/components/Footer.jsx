import { BRAND, NAV, PLATFORMS } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brandcol">
            <div className="footer__brand">{BRAND.name}</div>
            <p className="footer__tagline">
              Location d’une Tesla Model Y Long Range à La Réunion. L’île intense, en silence.
            </p>
          </div>

          <nav className="footer__col" aria-label="Le site">
            <h4>Le site</h4>
            {NAV.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <a href="#reserver">Réserver</a>
          </nav>

          <nav className="footer__col" aria-label="Réserver">
            <h4>Réserver</h4>
            {PLATFORMS.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer">
                {p.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {BRAND.name} · La Réunion</span>
          <span>Site indépendant — non affilié à Tesla, Inc. « Tesla » et « Model Y » sont des marques de Tesla, Inc.</span>
        </div>
      </div>
    </footer>
  )
}
