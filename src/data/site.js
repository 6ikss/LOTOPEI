// ─────────────────────────────────────────────────────────────────────────────
// CONTENU DU SITE — tout se modifie ici, sans toucher au code des composants.
//
// ⚠️ À PERSONNALISER : remplace la photo public/hero-tesla.jpg par TA photo,
//    et ajoute les logos plateformes dans public/logos/ (voir public/logos/).
//    Les liens PLATFORMS pointent déjà vers tes vraies annonces.
// ─────────────────────────────────────────────────────────────────────────────

export const BRAND = {
  name: 'Lotopéi',
  baseline: 'Location Tesla Model Y · La Réunion',
  intro:
    'Découvrez l’île intense au volant de la Tesla Model Y. Une conduite unique, silencieuse et 100 % électrique — du lagon turquoise aux routes du volcan.',
}

export const NAV = [
  { href: '#experience', label: 'L’expérience' },
  { href: '#modely', label: 'Model Y' },
  { href: '#itineraires', label: 'Itinéraires' },
  { href: '#faq', label: 'FAQ' },
]

export const HERO = {
  eyebrow: 'Location d’exception — La Réunion',
  titleTop: 'L’île intense,',
  titleAccent: 'en silence.',
  lead:
    'Explorez La Réunion au volant d’une Tesla Model Y 100 % électrique. Le confort d’un SUV premium, la puissance instantanée, et le silence absolu pour vivre l’île autrement.',
  badges: ['100 % électrique', 'SUV premium 5 places', 'Jusqu’à 600 km', 'Conduite silencieuse'],
}

export const STATS = [
  { value: '600', unit: 'km', label: 'd’autonomie' },
  { value: '5,0', unit: 's', label: '0 à 100 km/h' },
  { value: '2 158', unit: 'L', label: 'de coffre' },
  { value: '100', unit: '%', label: 'électrique' },
]

// Pourquoi Lotopéi — bénéfices
export const WHY = [
  {
    icon: 'sparkle',
    title: 'Confort premium',
    text: 'Habitacle épuré, sièges chauffants, suspension souple et silence de roulement : chaque trajet devient une parenthèse.',
  },
  {
    icon: 'battery',
    title: 'Autonomie pensée pour l’île',
    text: 'Jusqu’à 600 km d’autonomie — largement de quoi relier le Nord, l’Ouest et le volcan sans la moindre angoisse de recharge.',
  },
  {
    icon: 'bolt',
    title: 'Silence & 100 % électrique',
    text: 'Aucune vibration, aucun bruit moteur. Juste l’accélération instantanée et les paysages qui défilent, en apesanteur.',
  },
  {
    icon: 'route',
    title: 'L’île, autrement',
    text: 'Une autre façon de découvrir La Réunion : moderne, responsable et résolument haut de gamme, le temps d’un week-end ou d’un séjour.',
  },
]

// Section Tesla Model Y — points forts (pas une fiche technique froide)
export const MODELY = {
  eyebrow: 'La voiture',
  title: 'Tesla Model Y Long Range',
  lead:
    'Le SUV électrique le plus vendu au monde. Spacieux, technologique et bluffant de douceur — taillé pour avaler les routes de l’île.',
  features: [
    { title: 'SUV spacieux', text: '5 vraies places et une habitabilité généreuse pour la famille comme pour les bagages.' },
    { title: 'Coffre XXL', text: 'Jusqu’à 2 158 L avec les sièges rabattus, plus un coffre avant. Surf, valises, glacière : tout rentre.' },
    { title: 'Toit panoramique', text: 'Un immense toit en verre qui baigne l’habitacle de lumière sur les routes des hauts.' },
    { title: 'Écran central 15″', text: 'Navigation, musique, clim, caméras : tout est fluide, intuitif et toujours à jour.' },
    { title: 'Conduite douce', text: 'Accélération linéaire, freinage régénératif, tenue de route rassurante dans les lacets.' },
    { title: 'Sécurité 5 étoiles', text: 'Une des voitures les mieux notées au crash-test, avec aides à la conduite de série.' },
  ],
}

// Itinéraires réunionnais — faire ressentir le voyage
export const ITINERARIES = [
  {
    name: 'La Route du Littoral',
    meta: 'Saint-Denis → La Possession · 12 km',
    text: 'La nouvelle route en viaduc, suspendue au-dessus de l’océan, falaises d’un côté, grand bleu de l’autre. Le silence électrique rend la scène irréelle.',
  },
  {
    name: 'La côte Ouest & le lagon',
    meta: 'Saint-Denis → Saint-Gilles · 45 min',
    text: 'Cap sur les plages et le lagon de l’Ermitage. Couchers de soleil, paillotes et baignade — la dolce vita réunionnaise, en mode zéro émission.',
  },
  {
    name: 'Le Volcan',
    meta: 'Plaine des Cafres → Pas de Bellecombe',
    text: 'La montée vers le Piton de la Fournaise, paysages lunaires de la Plaine des Sables. Le couple instantané de la Model Y dévore les côtes sans effort.',
  },
  {
    name: 'Les Cirques',
    meta: 'Cilaos ou Salazie · routes mythiques',
    text: 'Plus de 400 virages vers Cilaos. Tenue de route et freinage régénératif transforment la grimpette en pur plaisir de conduite.',
  },
]

// Réservation — plateformes (liens réels vérifiés)
export const PLATFORMS = [
  {
    name: 'Roadstr',
    logo: '/logos/roadstr.png',
    url: 'https://www.roadstr.fr/cars/tesla-model-y-lr-2025-saint-denis',
    text: 'La communauté des passionnés d’autos d’exception.',
    note: 'Prise en charge · Saint-Denis',
  },
  {
    name: 'Getaround',
    logo: '/logos/getaround.png',
    url: 'https://fr.getaround.com/location-voiture/sainte-marie/tesla-model-y-long-range-1836699',
    text: 'Location entre particuliers, simple et sans contact.',
    note: 'Prise en charge · Sainte-Marie',
  },
  {
    name: 'Zotcar',
    logo: '/logos/zotcar.png',
    url: 'https://www.zotcar.com/vehicle/48887',
    text: 'Le spécialiste de la location de voitures à La Réunion.',
    note: 'Prise en charge · La Réunion',
  },
]

// Confiance / infos pratiques
export const TRUST = [
  { icon: 'shield', title: 'Assurance incluse', text: 'Couverture selon la plateforme choisie, assistance comprise.' },
  { icon: 'lock', title: 'Réservation sécurisée', text: 'Paiement et contrat gérés par des plateformes reconnues.' },
  { icon: 'sparkle', title: 'Véhicule entretenu', text: 'Voiture propre, désinfectée et chargée à chaque remise des clés.' },
  { icon: 'key', title: 'Prise en main simple', text: 'Un accompagnement complet à la prise du véhicule, même si c’est votre 1ʳᵉ Tesla.' },
]

export const FAQ = [
  {
    q: 'Où récupérer le véhicule ?',
    a: 'La prise en charge se fait dans le Nord de l’île (Saint-Denis / Sainte-Marie) selon la plateforme. Une remise ailleurs sur l’île peut être étudiée — précisez-le lors de la réservation.',
  },
  {
    q: 'Quelle est l’autonomie réelle ?',
    a: 'La Model Y Long Range offre jusqu’à 600 km d’autonomie (WLTP). Sur les routes de l’île, comptez largement de quoi enchaîner plusieurs sorties entre deux recharges.',
  },
  {
    q: 'Comment recharger à La Réunion ?',
    a: 'Le véhicule vous est remis chargé. L’île compte de plus en plus de bornes (Superchargeurs, bornes publiques et hôtels). Une simple prise domestique suffit aussi pour recharger la nuit.',
  },
  {
    q: 'Est-ce adapté pour visiter l’île ?',
    a: 'Totalement. SUV confortable, grand coffre, autonomie généreuse et couple instantané pour les montées : la Model Y est idéale pour le littoral comme pour les hauts.',
  },
  {
    q: 'Comment réserver ?',
    a: 'Choisissez votre plateforme (Roadstr, Getaround ou Zotcar), sélectionnez vos dates et réservez en ligne. La réservation, l’assurance et le paiement y sont gérés en toute sécurité.',
  },
  {
    q: 'Quelle plateforme choisir ?',
    a: 'Les trois proposent le même véhicule. Prenez celle où vous avez déjà un compte ou les meilleures conditions à vos dates — le tarif et les options peuvent varier.',
  },
]
