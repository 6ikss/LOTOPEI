import { BRAND, PLATFORMS } from '../data/site.js'
import { IconBolt } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brandcol">
          <a className="nav__brand" href="#top">
            <span className="nav__mark">
              <IconBolt width={18} height={18} />
            </span>
            {BRAND.name}
          </a>
          <p className="footer__tagline">{BRAND.tagline}</p>
          <p className="footer__loc">{BRAND.location}</p>
        </div>

        <nav className="footer__col" aria-label="Le site">
          <span className="footer__heading">Le site</span>
          <a href="#experience">Expérience</a>
          <a href="#tarifs">Tarifs</a>
          <a href="#avis">Avis</a>
          <a href="#reserver">Réserver</a>
        </nav>

        <nav className="footer__col" aria-label="Réserver">
          <span className="footer__heading">Réserver</span>
          {PLATFORMS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.name} (nouvel onglet)`}
            >
              {p.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {BRAND.name} · La Réunion</span>
        <span className="footer__fine">
          Tesla et Model Y sont des marques de Tesla, Inc. Prix indicatifs.
        </span>
      </div>
    </footer>
  )
}
