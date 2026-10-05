import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'motion/react';
import { useRef } from 'react';
import { DISHES, NEIGHBORHOODS } from '../../config';

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

/** Bandeau infini dont la vitesse et le sens suivent le scroll. */
function VelocityBand({ items, baseVelocity, className }: { items: string[]; baseVelocity: number; className: string }) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const f = factor.get();
    if (f < 0) direction.current = -1;
    else if (f > 0) direction.current = 1;
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    moveBy += direction.current * moveBy * f;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div className="flex shrink-0 whitespace-nowrap" style={{ x }}>
        {Array.from({ length: 4 }).map((_, copy) => (
          <span key={copy} aria-hidden={copy > 0} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span key={item} className="flex items-center">
                <span className="px-5 sm:px-7">{item}</span>
                <svg viewBox="0 0 24 24" className="size-[0.5em] shrink-0" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 0l2.6 8.2L23 6.6l-6.2 5.4L23 17.4l-8.4-1.6L12 24l-2.6-8.2L1 17.4l6.2-5.4L1 6.6l8.4 1.6z"
                  />
                </svg>
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-label="Quartiers desservis et plats populaires" className="relative z-10 overflow-hidden py-14">
      <div className="-rotate-[2.5deg] scale-[1.04] bg-brand py-4 text-cream shadow-[0_20px_60px_-30px_rgba(255,84,0,0.8)] sm:py-5">
        <VelocityBand
          items={NEIGHBORHOODS}
          baseVelocity={-2.2}
          className="font-display text-[clamp(1.8rem,5vw,3.6rem)] font-bold uppercase leading-none"
        />
      </div>
      <div className="-mt-3 rotate-[1.8deg] scale-[1.04] bg-ink py-3 text-cream/90 sm:py-4">
        <VelocityBand
          items={DISHES}
          baseVelocity={1.6}
          className="font-display text-[clamp(1.1rem,2.6vw,1.9rem)] font-medium leading-none"
        />
      </div>
    </section>
  );
}
