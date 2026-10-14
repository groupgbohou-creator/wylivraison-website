import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react';
import { Banknote, Check, Flame } from 'lucide-react';
import { useRef, type ReactNode } from 'react';
import { DELIVERY_MINUTES } from '../../config';
import { useIntroDone } from '../../lib/intro';
import { PhoneFrame } from '../phone/PhoneFrame';
import { TrackingScreen } from '../phone/screens';
import { EASE_EXPO, RevealLines } from '../ui/Reveal';
import { StoreButtons } from '../ui/StoreButtons';

const PAYMENTS = [
  { name: 'Wave', color: '#1DC8FF' },
  { name: 'Orange Money', color: '#FF7900' },
  { name: 'MTN MoMo', color: '#FFCB05' },
  { name: 'Moov Money', color: '#0A5FB4' },
];

function FloatingCard({
  children,
  className,
  delay,
  depth,
  mx,
  my,
  ready,
  float = 6,
}: {
  children: ReactNode;
  className: string;
  delay: number;
  depth: number;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  ready: boolean;
  float?: number;
}) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);
  return (
    <motion.div className={`absolute z-20 ${className}`} style={{ x, y }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={ready ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ delay, type: 'spring', stiffness: 220, damping: 18 }}
      >
        <motion.div
          animate={{ y: [0, -float, 0] }}
          transition={{ duration: 4 + depth / 10, repeat: Infinity, ease: 'easeInOut' }}
          className="flex items-center gap-2.5 rounded-2xl bg-white/90 px-3 py-2.5 shadow-[0_20px_50px_-20px_rgba(22,14,9,0.45)] ring-1 ring-ink/5 backdrop-blur-md sm:px-3.5 sm:py-3"
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const ready = useIntroDone();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const sunScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  const mxRaw = useMotionValue(0);
  const myRaw = useMotionValue(0);
  const mx = useSpring(mxRaw, { stiffness: 70, damping: 18 });
  const my = useSpring(myRaw, { stiffness: 70, damping: 18 });
  const tiltY = useTransform(mx, (v) => v * 0.35);
  const tiltX = useTransform(my, (v) => -v * 0.25);

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    mxRaw.set((e.clientX / window.innerWidth - 0.5) * 30);
    myRaw.set((e.clientY / window.innerHeight - 0.5) * 30);
  };

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={onPointerMove}
      data-ga-location="hero"
      className="relative isolate overflow-hidden pb-20 pt-28 sm:pt-32 lg:min-h-[100svh] lg:pb-24"
    >
      {/* fond : trame de rues + soleil orange */}
      <div
        aria-hidden="true"
        className="street-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_45%,black,transparent)]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.18fr_0.82fr] lg:gap-6">
        <motion.div style={{ y: textY, opacity: textOpacity }} className="relative z-10 min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE_EXPO }}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 py-1.5 pl-2 pr-3.5 text-xs font-semibold text-ink/70 ring-1 ring-ink/5 backdrop-blur"
          >
            <span className="relative flex size-2.5 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-leaf [animation:ping-soft_1.8s_ease-out_infinite]" />
              <span className="relative size-2 rounded-full bg-leaf" />
            </span>
            L'app de livraison de repas d'Abidjan
          </motion.p>

          <RevealLines
            as="h1"
            play={ready}
            delay={0.1}
            className="font-display mt-6 text-[clamp(2.3rem,6.2vw,5.1rem)] font-bold leading-[0.92]"
            lines={[
              'Abidjan a faim ?',
              'Woudy livre en',
              <span className="relative inline-block text-brand">
                {DELIVERY_MINUTES} minutes.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 320 20"
                  preserveAspectRatio="none"
                  className="absolute -bottom-[0.12em] left-0 h-[0.2em] w-[96%]"
                >
                  <motion.path
                    d="M3 13 C 60 5, 140 4, 220 9 S 300 15, 317 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={ready ? { pathLength: 1 } : {}}
                    transition={{ delay: 1.05, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                  />
                </svg>
              </span>,
            ]}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.9, ease: EASE_EXPO }}
            className="mt-7 max-w-[34rem] text-lg leading-relaxed text-ink/70"
          >
            Restaurants, maquis et fast-foods de toute la ville, livrés chauds à votre porte. Commandez en 3 clics,
            payez par Mobile Money et suivez votre livreur en direct.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.9, ease: EASE_EXPO }}
            className="mt-9"
          >
            <StoreButtons size="lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ delay: 0.95, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-ink/55"
          >
            <span className="uppercase tracking-[0.16em]">Payez avec</span>
            {PAYMENTS.map((p) => (
              <span key={p.name} className="inline-flex items-center gap-1.5 text-ink/75">
                <span className="size-2 rounded-full" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 text-ink/75">
              <Banknote className="size-3.5 text-leaf" />
              Espèces
            </span>
          </motion.div>
        </motion.div>

        {/* téléphone */}
        <motion.div style={{ y: phoneY }} className="relative mx-auto flex w-full max-w-[520px] justify-center">
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 aspect-square w-[118%] max-w-[600px] -translate-x-1/2 -translate-y-1/2"
            style={{ scale: sunScale }}
          >
            <motion.div
              className="absolute inset-[12%] rounded-full bg-brand"
              initial={{ scale: 0 }}
              animate={ready ? { scale: 1 } : {}}
              transition={{ duration: 1.2, ease: EASE_EXPO, delay: 0.1 }}
            />
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 size-full text-brand"
              initial={{ opacity: 0 }}
              animate={ready ? { opacity: 1, rotate: 360 } : {}}
              transition={{ opacity: { delay: 0.6, duration: 1 }, rotate: { duration: 60, repeat: Infinity, ease: 'linear' } }}
            >
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="1 2.2" />
            </motion.svg>
          </motion.div>

          <div style={{ perspective: 1200 }}>
            <motion.div
              initial={{ y: 140, opacity: 0, rotate: 8 }}
              animate={ready ? { y: 0, opacity: 1, rotate: 0 } : {}}
              transition={{ duration: 1.3, ease: EASE_EXPO, delay: 0.25 }}
              style={{ rotateY: tiltY, rotateX: tiltX }}
            >
              <PhoneFrame className="w-[min(260px,78vw)] sm:w-[300px]">
                <TrackingScreen />
              </PhoneFrame>
            </motion.div>
          </div>

          <FloatingCard ready={ready} delay={1.1} depth={1.4} mx={mx} my={my} className="-left-1 top-16 sm:left-0 lg:-left-10">
            <span className="grid size-8 place-items-center rounded-full bg-leaf text-white">
              <Check className="size-4" strokeWidth={3} />
            </span>
            <span className="text-left leading-tight">
              <span className="block text-[13px] font-semibold">Commande acceptée</span>
              <span className="text-[11px] text-ink/50">Chez Tantie Awa · 2 articles</span>
            </span>
          </FloatingCard>

          <FloatingCard ready={ready} delay={1.3} depth={-1.1} mx={mx} my={my} className="-right-1 top-[46%] sm:right-0 lg:-right-8" float={8}>
            <span className="grid h-8 min-w-8 place-items-center rounded-lg bg-[#1DC8FF] px-1 text-[11px] font-bold text-white">W</span>
            <span className="text-left leading-tight">
              <span className="block text-[13px] font-semibold">Paiement Wave</span>
              <span className="text-[11px] text-ink/50">6 000 F · reçu</span>
            </span>
          </FloatingCard>

          <FloatingCard ready={ready} delay={1.5} depth={0.8} mx={mx} my={my} className="bottom-32 left-0 hidden sm:block lg:-left-24" float={5}>
            <span className="grid size-8 place-items-center rounded-full bg-brand-100 text-brand">
              <Flame className="size-4" />
            </span>
            <span className="text-left leading-tight">
              <span className="block text-[13px] font-semibold">Toujours chaud</span>
              <span className="text-[11px] text-ink/50">Sac isotherme scellé</span>
            </span>
          </FloatingCard>
        </motion.div>
      </div>
    </section>
  );
}
