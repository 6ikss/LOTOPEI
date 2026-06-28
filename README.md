# LOTOPEI — Location Tesla Model Y à La Réunion

Landing page premium pour la location d'une **Tesla Model Y Long Range** à La Réunion.
Construite avec **Vite + React + Framer Motion**.

## Démarrer

```bash
npm install      # une seule fois
npm run dev      # serveur de dev → http://localhost:5173
```

## Construire pour la production

```bash
npm run build    # génère le dossier dist/
npm run preview  # prévisualise le build
```

Le dossier `dist/` est statique : il se déploie tel quel sur **GitHub Pages, Netlify ou Vercel**.
(`base: './'` dans `vite.config.js` rend les chemins relatifs, donc compatible avec un sous-dossier.)

## Structure

```
src/
  components/   Navbar, Hero, CarVisual, Features, Pricing, Testimonials, CTA, Footer
  data/site.js  ← TOUT LE CONTENU (textes, tarifs, avis, liens) se modifie ici
  lib/motion.js variantes d'animation Framer Motion partagées
  index.css     design system (couleurs, typo, animations)
```

## À personnaliser (`src/data/site.js`)

- **PRICING** — les prix sont **indicatifs** (placeholders) → mets tes vrais tarifs.
- **TESTIMONIALS** — avis **fictifs** → remplace par de vrais avis clients.
- **PLATFORMS** — liens de réservation (déjà renseignés) :
  - Roadstr · Getaround · Zotcar

## Sections

Hero (gradient animé) → Expérience (3 atouts) → Tarifs (3 formules) → Avis → Réserver (3 plateformes) → Footer.
