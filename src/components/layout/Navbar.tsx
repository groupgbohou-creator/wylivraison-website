import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { smartStoreLink } from '../../lib/platform';
import { Wordmark } from '../brand/Wordmark';
import { EASE_EXPO } from '../ui/Reveal';
import { StoreButtons } from '../ui/StoreButtons';

const LINKS = [
  { href: '#avantages', label: 'Avantages' },
  { href: '#comment', label: 'Comment ça marche' },
  { href: '#rejoindre', label: 'Rejoindre Woudy' },
  { href: '#faq', label: 'FAQ' },
];

function DownloadCta({ inverted = false }: { inverted?: boolean }) {
  const storeLink = useMemo(() => smartStoreLink('client'), []);
  return (
    <motion.a
      href={storeLink ?? '#telecharger'}
      {...(storeLink ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      whileTap={{ scale: 0.96 }}
      className={`group inline-flex h-11 items-center gap-1.5 rounded-full pl-5 pr-4 text-sm font-semibold transition-colors ${
        inverted ? 'bg-cream text-ink hover:bg-white' : 'bg-brand text-white hover:bg-brand-600'
      }`}
    >
      Télécharger l'app
      <span className="relative size-4 overflow-hidden">
        <ArrowUpRight className="absolute inset-0 size-4 transition-transform duration-500 ease-[var(--ease-expo)] group-hover:-translate-y-4 group-hover:translate-x-4" />
        <ArrowUpRight className="absolute inset-0 size-4 -translate-x-4 translate-y-4 transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </motion.a>
  );
}

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > previous && y > 520);
  });

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      root.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <motion.header
        data-ga-location="navbar"
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4"
        animate={{ y: hidden && !open ? -110 : 0 }}
        transition={{ duration: 0.5, ease: EASE_EXPO }}
      >
        <nav
          aria-label="Navigation principale"
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full py-2 pl-5 pr-2 transition-[background-color,box-shadow] duration-500 ${
            scrolled && !open
              ? 'bg-cream/80 shadow-[0_10px_40px_-18px_rgba(22,14,9,0.35)] ring-1 ring-ink/5 backdrop-blur-xl'
              : 'bg-transparent'
          }`}
        >
          <a href="#top" aria-label="Woudy, retour en haut de page" onClick={() => setOpen(false)}>
            <Wordmark className="h-9 w-auto text-brand" />
          </a>

          <ul className="hidden items-center lg:flex" onMouseLeave={() => setHovered(null)}>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onMouseEnter={() => setHovered(link.href)}
                  className="relative block px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-ink"
                >
                  {hovered === link.href && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-full bg-ink/[0.06]"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <DownloadCta inverted={open} />
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              className={`relative grid size-11 place-items-center rounded-full transition-colors lg:hidden ${
                open ? 'bg-cream text-ink' : 'bg-ink text-cream'
              }`}
            >
              <motion.span
                className="absolute h-[2px] w-4 rounded-full bg-current"
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -3.5 }}
                transition={{ duration: 0.4, ease: EASE_EXPO }}
              />
              <motion.span
                className="absolute h-[2px] w-4 rounded-full bg-current"
                animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 3.5 }}
                transition={{ duration: 0.4, ease: EASE_EXPO }}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            data-ga-location="mobile_menu"
            className="fixed inset-0 z-40 flex flex-col bg-ink px-6 pb-10 pt-28 text-cream lg:hidden"
            initial={{ clipPath: 'circle(0% at calc(100% - 44px) 38px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 44px) 38px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 44px) 38px)' }}
            transition={{ duration: 0.75, ease: EASE_EXPO }}
          >
            <ul className="space-y-1">
              {LINKS.map((link, i) => (
                <li key={link.href} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display flex items-baseline gap-4 py-2 text-[clamp(2.2rem,9vw,3.4rem)] font-bold leading-none"
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.8, ease: EASE_EXPO }}
                  >
                    <span className="text-sm font-medium text-brand tabular-nums">0{i + 1}</span>
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            <motion.div
              className="mt-auto space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7, ease: EASE_EXPO }}
            >
              <p className="text-sm text-cream/60">Téléchargez l'application Woudy</p>
              <StoreButtons theme="light" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
