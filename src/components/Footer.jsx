import { BRAND, PLATFORMS } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="footer__brand">{BRAND.name}</div>
            <p className="footer__tagline">{BRAND.tagline}</p>
          </div>

          <div className="footer__cols">
            <nav className="footer__col" aria-label="Le site">
              <h4>Le site</h4>
              <a href="#experience">L’expérience</a>
              <a href="#tarifs">Tarifs</a>
              <a href="#avis">Avis</a>
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
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {BRAND.name} · La Réunion
          </span>
          <span>Tesla et Model Y sont des marques de Tesla, Inc. Prix indicatifs.</span>
        </div>
      </div>
    </footer>
  )
}
