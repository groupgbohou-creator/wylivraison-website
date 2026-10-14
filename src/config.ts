/**
 * Liens et coordonnées officiels Woudy.
 * Tout ce qui pointe vers l'extérieur du site est centralisé ici, et les valeurs
 * viennent des fichiers `.env` / `.env.development` (variables `VITE_*`).
 */

const env = (value: string | undefined) => (value ?? '').trim();

/** Promesse de délai de livraison affichée sur le site, en minutes. */
export const DELIVERY_MINUTES = Number(env(import.meta.env.VITE_DELIVERY_MINUTES)) || 10;

export const STORE_LINKS = {
  /** Application client (commander un repas). Lien iOS vide = bouton « Bientôt ». */
  client: {
    ios: env(import.meta.env.VITE_CLIENT_APP_IOS_URL),
    android: env(import.meta.env.VITE_CLIENT_APP_ANDROID_URL),
  },
  /** Application livreur (Woudy Livreur). */
  courier: {
    ios: env(import.meta.env.VITE_COURIER_APP_IOS_URL),
    android: env(import.meta.env.VITE_COURIER_APP_ANDROID_URL),
  },
} as const;

/** Back-office Woudy (Portail Admin). */
export const ADMIN_PORTAL_URL = env(import.meta.env.VITE_ADMIN_PORTAL_URL);

/** Espace restaurateurs (Portail Partenaires) et sa page d'inscription. */
export const PARTNER_PORTAL_URL = env(import.meta.env.VITE_PARTNER_PORTAL_URL);
export const PARTNER_REGISTER_URL = env(import.meta.env.VITE_PARTNER_REGISTER_URL);

const phoneNumber = env(import.meta.env.VITE_PHONE_NUMBER);

export const CONTACT = {
  whatsappDisplay: env(import.meta.env.VITE_WHATSAPP_DISPLAY),
  whatsappNumber: env(import.meta.env.VITE_WHATSAPP_NUMBER),
  phoneDisplay: env(import.meta.env.VITE_PHONE_DISPLAY),
  phoneHref: `tel:${phoneNumber}`,
  emailInfo: env(import.meta.env.VITE_EMAIL_INFO),
  emailSupport: env(import.meta.env.VITE_EMAIL_SUPPORT),
  instagramHandle: env(import.meta.env.VITE_INSTAGRAM_HANDLE),
  instagramUrl: env(import.meta.env.VITE_INSTAGRAM_URL),
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
