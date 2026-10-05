import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Wordmark } from '../brand/Wordmark';
import { EASE_EXPO } from '../ui/Reveal';

/** Rideau d'ouverture : le logo s'écrit à la main, puis le rideau se lève sur le site. */
export function Intro() {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = 'hidden';
    return () => {
      root.style.overflow = previous;
    };
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[100] grid place-items-center bg-brand"
      initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      transition={{ duration: 0.95, ease: EASE_EXPO }}
    >
      <motion.div
        className="flex flex-col items-center"
        exit={{ y: -80, opacity: 0 }}
        transition={{ duration: 0.7, ease: EASE_EXPO }}
      >
        <Wordmark draw="mount" duration={1.25} delay={0.15} className="w-[min(64vw,440px)] text-cream" />
        <motion.p
          className="font-display mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-cream/80"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6, ease: EASE_EXPO }}
        >
          Abidjan · Livraison
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
