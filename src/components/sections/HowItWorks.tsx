import { AnimatePresence, motion, useInView, useScroll, useSpring } from 'motion/react';
import { useEffect, useRef, useState, type ComponentType } from 'react';
import { useMediaQuery } from '../../lib/useMediaQuery';
import { PhoneFrame } from '../phone/PhoneFrame';
import { CheckoutScreen, DeliveredScreen, HomeScreen, TrackingScreen } from '../phone/screens';
import { EASE_EXPO, Eyebrow, RevealLines } from '../ui/Reveal';

const STEPS: { title: string; text: string; Screen: ComponentType }[] = [
  {
    title: 'Choisissez',
    text: 'Parcourez les restaurants, maquis et fast-foods autour de vous. Filtrez par envie, par prix ou par temps de livraison.',
    Screen: HomeScreen,
  },
  {
    title: 'Payez',
    text: 'Wave, Orange Money, MTN MoMo, Moov Money ou espèces à la livraison. Le total est affiché avant de valider, frais compris.',
    Screen: CheckoutScreen,
  },
  {
    title: 'Suivez',
    text: 'Votre livreur apparaît sur la carte dès qu’il récupère votre commande. Vous savez exactement quand ouvrir la porte.',
    Screen: TrackingScreen,
  },
  {
    title: 'Savourez',
    text: 'Votre repas arrive chaud, dans un sac isotherme scellé. Notez la livraison, laissez un pourboire si le cœur vous en dit.',
    Screen: DeliveredScreen,
  },
];

function Step({
  index,
  active,
  onActive,
  isDesktop,
}: {
  index: number;
  active: boolean;
  onActive: (i: number) => void;
  isDesktop: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Une étape devient active quand elle franchit la ligne médiane de l'écran.
  const inView = useInView(ref, { margin: '-48% 0px -48% 0px' });
  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  const { title, text, Screen } = STEPS[index];

  return (
    <div ref={ref} className="flex flex-col justify-center py-10 lg:min-h-[78vh] lg:py-0">
      <motion.div animate={{ opacity: active || !isDesktop ? 1 : 0.28 }} transition={{ duration: 0.5 }}>
        <span className="font-display text-sm font-semibold tabular-nums text-brand">
          Étape 0{index + 1}
        </span>
        <h3 className="font-display mt-3 text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[0.9]">{title}.</h3>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-cream/65">{text}</p>
      </motion.div>

      {/* sur mobile, chaque étape montre son propre écran */}
      {!isDesktop && (
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE_EXPO }}
        >
          <PhoneFrame className="w-[min(250px,78vw)]">
            <Screen />
          </PhoneFrame>
        </motion.div>
      )}
    </div>
  );
}

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start center', 'end center'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const ActiveScreen = STEPS[active].Screen;

  return (
    <section id="comment" data-ga-location="how_it_works" className="relative bg-ink text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(ellipse_at_top,rgba(255,84,0,0.18),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 pt-24 sm:pt-32">
        <Eyebrow tone="light">Comment ça marche</Eyebrow>
        <RevealLines
          className="font-display mt-5 text-[clamp(2.2rem,5.4vw,4.4rem)] font-bold leading-[0.95]"
          lines={['Commander,', <span className="text-brand">c’est 4 gestes.</span>]}
        />

        <div className="relative grid gap-10 pb-16 lg:grid-cols-[1fr_auto_1fr] lg:gap-14 lg:pb-0">
          {/* rail de progression */}
          <div className="relative hidden lg:block lg:order-2" aria-hidden="true">
            <div className="sticky top-0 flex h-screen items-center">
              <div className="relative h-[52vh] w-[2px] rounded-full bg-cream/10">
                <motion.div
                  className="absolute inset-x-0 top-0 h-full origin-top rounded-full bg-brand"
                  style={{ scaleY: progress }}
                />
                {STEPS.map((_, i) => (
                  <span
                    key={i}
                    className={`absolute left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-colors duration-500 ${
                      i <= active ? 'border-brand bg-brand' : 'border-cream/25 bg-ink'
                    }`}
                    style={{ top: `${(i / (STEPS.length - 1)) * 100}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div ref={listRef} className="lg:order-1 lg:py-[11vh]">
            {STEPS.map((_, i) => (
              <Step key={i} index={i} active={active === i} onActive={setActive} isDesktop={isDesktop} />
            ))}
          </div>

          {/* téléphone épinglé (desktop) */}
          {isDesktop && (
          <div className="relative lg:order-3">
            <div className="sticky top-0 flex h-screen items-center justify-center">
              <span
                aria-hidden="true"
                className="font-display pointer-events-none absolute -z-0 select-none text-[22rem] font-bold leading-none text-cream/[0.04]"
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={active}
                    className="block"
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{ duration: 0.7, ease: EASE_EXPO }}
                  >
                    0{active + 1}
                  </motion.span>
                </AnimatePresence>
              </span>
              <PhoneFrame className="w-[min(300px,42vh)]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={active}
                    className="absolute inset-0"
                    initial={{ opacity: 0, y: 60, scale: 0.94, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -40, scale: 0.97, filter: 'blur(6px)' }}
                    transition={{ duration: 0.6, ease: EASE_EXPO }}
                  >
                    <ActiveScreen />
                  </motion.div>
                </AnimatePresence>
              </PhoneFrame>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}
