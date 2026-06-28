# Lotopéi — Location Tesla Model Y à La Réunion

Mini-site vitrine **premium** pour la location d'une **Tesla Model Y Long Range** à La Réunion.
Direction « L'île électrique » : noir carbone, blanc Tesla, accent braise volcanique — **Bodoni Moda + Jost**.
Construit avec **Vite + React + Framer Motion** (design system généré via le skill `ui-ux-pro-max`).

## Démarrer

```bash
npm install      # une seule fois
npm run dev      # http://localhost:5173
```

## Build / déploiement

```bash
npm run build    # génère dist/
npm run preview  # prévisualise le build
```

Le site se déploie **automatiquement** sur GitHub Pages à chaque `git push` sur `main`
(workflow `.github/workflows/deploy.yml` → build Vite → Pages).
Réglage requis une fois : **Settings → Pages → Source = GitHub Actions**.
URL : https://6ikss.github.io/LOTOPEI/

## Structure

```
src/
  components/   Atmosphere · Navbar · Hero · Why · ModelY · Itineraries ·
                Reserve · Trust · Faq · CtaFinal · Footer · Icons
  data/site.js  ← TOUT LE CONTENU (textes, stats, itinéraires, FAQ, liens)
  lib/motion.js variantes Framer Motion + helpers (spotlight, magnetic)
  index.css     design system complet (tokens, atmosphère, sections, responsive, a11y)
```

## Sections

Navbar flottante → Hero → Pourquoi Lotopéi → Tesla Model Y → Itinéraires →
Réserver (Roadstr / Getaround / Zotcar) → Confiance → FAQ → CTA final → Footer.

## À personnaliser

- **Photo hero** : remplace `public/hero-tesla.jpg` par **ta** photo de la Model Y
  (idéalement en extérieur, belle lumière). Format paysage/portrait, exportée en JPG/WebP.
- **Logos plateformes** : dépose `roadstr.png`, `getaround.png`, `zotcar.png` dans `public/logos/`.
- **Image OG** : crée `public/og-cover.jpg` (1200×630) puis décommente les balises `og:image` / `twitter:image` dans `index.html`.
- **Liens de réservation** : déjà renseignés dans `src/data/site.js` (Roadstr, Getaround, Zotcar).

## Accessibilité & perf

Contraste AA, focus visibles, `prefers-reduced-motion` respecté, cibles tactiles ≥ 44 px,
images en `loading="lazy"`, aucune emoji comme icône (SVG inline), responsive 375 → 1440 px.
