// ─────────────────────────────────────────────────────────────────────────────
// CONTENU DU SITE — modifie tout ici, sans toucher au code des composants.
//
// ⚠️ À PERSONNALISER :
//   • PRICING  : prix indicatifs (placeholders) → mets tes vrais tarifs.
//   • TESTIMONIALS : avis fictifs → remplace par de vrais avis clients.
//   • Les liens PLATFORMS pointent vers tes annonces réelles (vérifiés).
// ─────────────────────────────────────────────────────────────────────────────

export const BRAND = {
  name: 'LOTOPEI',
  tagline: 'Conduisez une Tesla Model Y sur l’île de La Réunion',
  subtitle:
    'Découvrez l’île intense au volant de la dernière Tesla Model Y. Une expérience de conduite unique, silencieuse et 100 % électrique pour explorer La Réunion autrement — entre plages, routes côtières et paysages volcaniques.',
  location: 'Saint-Denis · Sainte-Marie · La Réunion',
}

export const STATS = [
  { value: '600 km', label: 'd’autonomie' },
  { value: '5,0 s', label: '0 à 100 km/h' },
  { value: '100 %', label: 'électrique' },
]

export const FEATURES = [
  {
    icon: 'bolt',
    title: 'Performance silencieuse',
    text: '100 % électrique. Une accélération instantanée et un silence absolu, pour une conduite premium sans vibration ni bruit moteur.',
  },
  {
    icon: 'route',
    title: 'Liberté d’explorer',
    text: 'L’autonomie longue durée de la Model Y vous emmène partout : plages du lagon, routes du littoral et hauteurs volcaniques, sans contrainte.',
  },
  {
    icon: 'shield',
    title: 'Réservation sereine',
    text: 'Réservez sur vos plateformes habituelles — Roadstr, Getaround ou Zotcar. Assurance et assistance incluses, prise en charge dans le Nord.',
  },
]

export const PRICING = [
  {
    name: 'Découverte',
    duration: '1 jour',
    price: '99',
    unit: '€ / jour',
    highlight: false,
    features: [
      'Tesla Model Y Long Range',
      '200 km inclus / jour',
      'Assurance de base',
      'Prise en charge à Saint-Denis',
    ],
    cta: 'Réserver une journée',
  },
  {
    name: 'Évasion',
    duration: 'Week-end · 3 jours',
    price: '89',
    unit: '€ / jour',
    highlight: true,
    badge: 'Le plus choisi',
    features: [
      'Tesla Model Y Long Range',
      '600 km inclus',
      'Assurance tous risques',
      'Recharge offerte au départ',
      'Livraison dans le Nord',
    ],
    cta: 'Réserver le week-end',
  },
  {
    name: 'Aventure',
    duration: 'Semaine · 7 jours',
    price: '79',
    unit: '€ / jour',
    highlight: false,
    features: [
      'Tesla Model Y Long Range',
      'Kilométrage illimité',
      'Assurance premium',
      'Recharge offerte',
      'Livraison sur toute l’île',
      'Assistance 7j/7',
    ],
    cta: 'Réserver la semaine',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'Une expérience incroyable. La Model Y est parfaite pour faire le tour de l’île, et la prise en charge a été ultra simple. Je recommande à 100 %.',
    name: 'Marie L.',
    city: 'Saint-Gilles',
    rating: 5,
  },
  {
    quote:
      'Voiture impeccable, silencieuse et confortable. On a roulé du volcan jusqu’au lagon sans jamais s’inquiéter de l’autonomie. Au top !',
    name: 'Thomas R.',
    city: 'Saint-Pierre',
    rating: 5,
  },
  {
    quote:
      'Premier essai d’une Tesla et quelle claque. Service pro, voiture nickel, réservation hyper fluide. On reviendra, c’est certain.',
    name: 'Aurélie M.',
    city: 'Le Tampon',
    rating: 5,
  },
]

export const PLATFORMS = [
  {
    name: 'Roadstr',
    logo: '/logos/roadstr.png',
    url: 'https://www.roadstr.fr/cars/tesla-model-y-lr-2025-saint-denis',
    tagline: 'La communauté des passionnés d’autos d’exception.',
    note: 'Saint-Denis',
    accent: '#ff8a5b',
  },
  {
    name: 'Getaround',
    logo: '/logos/getaround.png',
    url: 'https://fr.getaround.com/location-voiture/sainte-marie/tesla-model-y-long-range-1836699',
    tagline: 'Location entre particuliers, simple et sans contact.',
    note: 'Sainte-Marie',
    accent: '#a05bff',
  },
  {
    name: 'Zotcar',
    logo: '/logos/zotcar.png',
    url: 'https://www.zotcar.com/vehicle/48887',
    tagline: 'Le spécialiste de la location de voitures à La Réunion.',
    note: 'La Réunion',
    accent: '#22d3ee',
  },
]
