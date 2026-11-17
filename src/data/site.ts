// All editable content for the repeated blocks of the site lives here.

export const WHATSAPP_NUMBER = '213542157611';
export const PHONE_DISPLAY = '+213 542 15 76 11';

export const allServices = [
  { n: '01', title: 'Sites web & vitrines', text: 'Un site rapide et bilingue qui présente votre activité.', tags: 'WEB · SEO · FR / AR' },
  { n: '02', title: 'E-commerce', text: 'Boutique en ligne, paiement à la livraison, commandes sur WhatsApp.', tags: 'BOUTIQUE · COD' },
  { n: '03', title: 'Logiciels sur mesure', text: "Stock, caisse, facturation, CRM : l'outil fait pour vous.", tags: 'WEB APP · SAAS' },
  { n: '04', title: 'Applications mobiles', text: 'Apps Android et iOS pour vos clients ou vos équipes.', tags: 'ANDROID · IOS' },
  { n: '05', title: 'Branding & logo', text: 'Logo, couleurs, typographies et supports.', tags: 'IDENTITÉ · CHARTE' },
  { n: '06', title: 'Montage vidéo & motion', text: 'Reels, vidéos promo et animations de logo.', tags: 'REELS · MOTION' },
  { n: '07', title: 'Contenu réseaux sociaux', text: 'Visuels et textes pour une page active.', tags: 'FACEBOOK · INSTAGRAM' },
  { n: '08', title: 'Publicité Meta', text: 'Campagnes ciblées qui ramènent des clients.', tags: 'ADS · CIBLAGE' },
  { n: '09', title: 'Chatbots IA', text: 'Un assistant WhatsApp qui répond 24h/24, en darija aussi.', tags: 'WHATSAPP · IA' },
  { n: '10', title: 'SEO & Google Business', text: 'Soyez trouvé sur Google et Google Maps.', tags: 'GOOGLE · MAPS' },
];

export type Project = {
  name: string;
  sub: string;
  img: string;
  cat: 'dev' | 'branding';
  w: number;
  h: number;
  eager?: boolean;
  url?: string;
  concept?: boolean;
};

// Order matters: it is the order of the grid.
export const projects: Project[] = [
  { name: 'Eighty Eight', sub: 'Plateforme SaaS & site · Arabie saoudite', img: 'shot-eighty.webp', cat: 'dev', w: 1400, h: 1050, eager: true, url: 'https://www.eighty-eight.fit' },
  { name: 'Zitouna', sub: 'Identité de marque', img: 'shot-zitouna.webp', cat: 'branding', w: 1400, h: 1050, eager: true, concept: true },
  { name: 'Logix POS', sub: 'Système de caisse · Australie', img: 'shot-logix.webp', cat: 'dev', w: 1400, h: 1050, eager: true, url: 'https://www.logixpos.io/' },
  { name: 'Sahra', sub: 'Packaging · café de spécialité', img: 'shot-sahra.webp', cat: 'branding', w: 1280, h: 960, concept: true },
  { name: 'Debull AI', sub: 'Dashboard IA · États-Unis', img: 'shot-debull.webp', cat: 'dev', w: 1400, h: 1050, url: 'https://faty-portfolio-production.up.railway.app/projects/debull-ai' },
  { name: 'Dupond et Dupont', sub: 'Boutique en ligne · Canada', img: 'shot-dupond.webp', cat: 'dev', w: 1400, h: 1050, url: 'https://www.dupondetdupont.com' },
  { name: 'Atlas Logistique', sub: 'Identité de marque', img: 'shot-atlas.webp', cat: 'branding', w: 1400, h: 1050, concept: true },
  { name: 'Kasbah', sub: "Identité · studio d'architecture", img: 'shot-kasbah.webp', cat: 'branding', w: 1280, h: 960, concept: true },
  { name: 'Surfing', sub: 'Site web · landing page', img: 'shot-surfing.webp', cat: 'dev', w: 1400, h: 1050 },
  { name: 'Drivoxe', sub: 'Location de voitures · Golfe', img: 'shot-drivoxe.webp', cat: 'dev', w: 1400, h: 1050, url: 'https://faty-portfolio-production.up.railway.app/projects/drivoxe-car' },
  { name: 'Lumière', sub: 'Identité · cosmétiques', img: 'shot-lumiere.webp', cat: 'branding', w: 1280, h: 960, concept: true },
  { name: 'Immo', sub: 'Plateforme immobilière', img: 'shot-immo.webp', cat: 'dev', w: 1400, h: 1050 },
  { name: 'Nawa', sub: 'Identité · club de fitness', img: 'shot-nawa.webp', cat: 'branding', w: 1280, h: 960, concept: true },
  { name: 'Elmintad', sub: 'Plateforme de voyage', img: 'shot-elmintad.webp', cat: 'dev', w: 1400, h: 1050 },
  { name: 'Cruisa', sub: 'Application mobile · Golfe', img: 'shot-cruisa.webp', cat: 'dev', w: 1400, h: 1050, url: 'https://faty-portfolio-production.up.railway.app/projects/cruisa' },
];

export const steps = [
  { n: '01', title: 'Échange', text: 'On comprend votre activité et vos objectifs.', when: 'Jour 1' },
  { n: '02', title: 'Maquette', text: 'Vous validez le design avant de lancer la production.', when: 'Jours 2 à 4' },
  { n: '03', title: 'Développement', text: 'Développement, branding ou montage, selon votre projet.', when: 'Selon le projet' },
  { n: '04', title: 'Lancement', text: 'Mise en ligne, formation et 30 jours de support gratuit.', when: 'Livraison' },
];

export const faq = [
  { q: 'Combien de temps prend un projet ?', a: 'Environ 10 jours pour un site vitrine, 2 à 3 semaines pour une boutique en ligne. Un logo ou une vidéo se livre en quelques jours.', open: true },
  { q: 'Comment se passe le paiement ?', a: 'En deux fois : 50 % au démarrage du projet, 50 % à la livraison, avant la mise en ligne.' },
  { q: 'Le domaine et le site sont-ils à mon nom ?', a: "Oui. Le nom de domaine et le site vous appartiennent. Nous pouvons aussi nous occuper de l'hébergement et de la maintenance." },
  { q: 'Je pourrai modifier mon site moi-même ?', a: 'Oui. On vous forme à mettre à jour vos textes, images et produits.' },
  { q: 'Vous faites aussi le montage et les pubs ?', a: 'Oui. Montage vidéo, motion design et campagnes Meta, seuls ou avec votre site et votre marque.' },
  { q: 'Vous travaillez partout en Algérie ?', a: "Oui, tout se fait à distance : appels, WhatsApp et partage d'écran." },
];

export const projectTypes = [
  { value: 'Développement', label: 'Développement' },
  { value: 'Branding', label: 'Branding' },
  { value: 'Montage vidéo', label: 'Montage vidéo' },
  { value: 'Publicité Meta', label: 'Pubs Meta' },
];
