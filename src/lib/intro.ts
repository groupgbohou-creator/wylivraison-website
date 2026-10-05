import { createContext, useContext } from 'react';

/** Passe à true quand le rideau d'intro se lève : les animations du hero démarrent alors. */
export const IntroContext = createContext(true);

export const useIntroDone = () => useContext(IntroContext);

const STORAGE_KEY = 'woudy:intro-seen';

export function shouldPlayIntro(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false;
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) !== '1';
  } catch {
    return true;
  }
}

export function markIntroSeen() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, '1');
  } catch {
    // stockage indisponible (navigation privée) : l'intro rejouera, sans conséquence
  }
}
