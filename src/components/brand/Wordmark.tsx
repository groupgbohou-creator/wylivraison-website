import { motion } from 'motion/react';

/**
 * Logo manuscrit Woudy, vectorisé trait par trait.
 * Chaque tracé peut être « dessiné » à la suite pour l'animation de signature.
 */
const STROKES = [
  // W
  'M52 110C44 145 38 185 48 214C56 236 76 238 92 210C106 182 114 135 118 112',
  'M118 112C120 148 122 198 138 222C152 242 175 238 188 200C205 145 222 75 232 24',
  // liaison W → o
  'M218 135C214 175 206 205 196 226C192 235 202 240 214 235C228 228 238 212 246 195',
  // o
  'M246 195C232 170 244 135 268 135C292 135 305 165 305 195C305 225 280 238 258 234C240 230 232 208 242 185C252 162 275 148 295 152C310 156 318 172 324 186',
  // u
  'M324 186C328 208 334 236 354 236C372 236 380 212 386 186',
  'M386 186C390 208 396 236 416 236C434 236 442 212 448 186',
  // d
  'M448 186C438 208 432 236 452 236C472 236 482 210 486 186C486 162 472 152 456 156C442 160 438 180 442 205',
  'M486 86L486 232C488 238 498 240 506 234',
  // y
  'M508 186C512 208 518 236 536 236C552 236 560 212 566 186',
  'M566 186L548 268C538 312 516 332 492 330C470 328 462 308 478 285C498 256 545 228 592 208',
];

// Longueur relative de chaque tracé, pour un rythme d'écriture naturel.
const WEIGHTS = [1, 1.35, 0.9, 1.7, 0.7, 0.7, 1.1, 0.75, 0.7, 1.4];
const TOTAL = WEIGHTS.reduce((a, b) => a + b, 0);

type WordmarkProps = {
  className?: string;
  /** false : statique · 'mount' : se dessine au montage · 'inView' : se dessine à l'apparition */
  draw?: false | 'mount' | 'inView';
  duration?: number;
  delay?: number;
  strokeWidth?: number;
};

export function Wordmark({
  className,
  draw = false,
  duration = 1.4,
  delay = 0,
  strokeWidth = 28,
}: WordmarkProps) {
  let elapsed = 0;

  return (
    <svg
      viewBox="20 6 590 344"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Woudy"
    >
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {STROKES.map((d, i) => {
          if (!draw) return <path key={i} d={d} />;

          const start = delay + (elapsed / TOTAL) * duration;
          const segment = (WEIGHTS[i] / TOTAL) * duration;
          elapsed += WEIGHTS[i];
          const target = { pathLength: 1, opacity: 1 };
          const transition = {
            pathLength: { delay: start, duration: segment, ease: [0.45, 0, 0.55, 1] as const },
            opacity: { delay: start, duration: 0.01 },
          };

          return (
            <motion.path
              key={i}
              d={d}
              initial={{ pathLength: 0, opacity: 0 }}
              {...(draw === 'mount'
                ? { animate: target }
                : { whileInView: target, viewport: { once: true, amount: 0.6 } })}
              transition={transition}
            />
          );
        })}
      </g>
    </svg>
  );
}
