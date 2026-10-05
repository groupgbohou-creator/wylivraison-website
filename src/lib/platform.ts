import { STORE_LINKS } from '../config';

export type Platform = 'ios' | 'android' | 'other';

export function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return 'other';
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return 'android';
  // iPadOS se présente comme un Mac : on le repère via l'écran tactile.
  if (/iPad|iPhone|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
  return 'other';
}

/**
 * Lien de téléchargement le plus pertinent pour l'appareil du visiteur.
 * Renvoie null sur ordinateur (ou si le store de l'appareil n'a pas encore de lien),
 * auquel cas on redirige vers la section de téléchargement.
 */
export function smartStoreLink(app: keyof typeof STORE_LINKS = 'client'): string | null {
  const platform = detectPlatform();
  if (platform === 'ios') return STORE_LINKS[app].ios || null;
  if (platform === 'android') return STORE_LINKS[app].android || null;
  return null;
}
