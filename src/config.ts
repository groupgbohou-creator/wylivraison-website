/**
 * Liens et coordonnées officiels Woudy.
 * Tout ce qui pointe vers l'extérieur du site est centralisé ici.
 */

export const STORE_LINKS = {
  /** Application client (commander un repas). */
  client: {
    // À renseigner dès que l'app est publiée sur l'App Store (ex. https://apps.apple.com/ci/app/woudy/id0000000000).
    // Tant que la valeur est vide, le bouton App Store s'affiche en « Bientôt ».
    ios: '',
    // Lien Play Store utilisé jusqu'ici par l'ancien site pour tous les boutons « Télécharger ».
    android: 'https://play.google.com/store/apps/details?id=ci.woudy.livreur',
  },
  /** Application livreur (Woudy Livreur). */
  courier: {
    ios: '',
    android: 'https://play.google.com/store/apps/details?id=ci.woudy.livreur',
  },
} as const;

export const PARTNER_PORTAL_URL = 'http://213.199.59.185:3000/auth/register';

export const CONTACT = {
  whatsappDisplay: '+225 07 20 58 41 71',
  whatsappNumber: '2250720584171',
  phoneDisplay: '+225 27 31 94 45 68',
  phoneHref: 'tel:+2252731944568',
  emailInfo: 'info@woudys.com',
  emailSupport: 'support@woudys.com',
  instagramHandle: '@woudylivraison',
  instagramUrl: 'https://instagram.com/woudylivraison',
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const NEIGHBORHOODS = [
  'Cocody',
  'Riviera',
  'Angré',
  '2 Plateaux',
  'Plateau',
  'Marcory',
  'Zone 4',
  'Treichville',
  'Koumassi',
  'Yopougon',
  'Bingerville',
  'Port-Bouët',
];

export const DISHES = [
  'Garba',
  'Alloco',
  'Poulet braisé',
  'Attiéké poisson',
  'Kedjenou',
  'Burgers',
  'Pizza',
  'Shawarma',
  'Foutou sauce graine',
  'Bissap frais',
];
