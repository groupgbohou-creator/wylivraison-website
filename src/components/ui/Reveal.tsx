import { motion, type Variants } from 'motion/react';
import type { ElementType, ReactNode } from 'react';

export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

/**
 * Titre révélé ligne par ligne, chaque ligne sortant d'un masque.
 * `play` permet de piloter le déclenchement (ex. après l'intro) ; sinon révélation à l'apparition.
 */
export function RevealLines({
  lines,
  as: Tag = 'h2',
  className,
  lineClassName = '',
  delay = 0,
  stagger = 0.09,
  play,
}: {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  play?: boolean;
}) {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const line: Variants = {
    hidden: { y: '110%', rotate: 2 },
    show: { y: '0%', rotate: 0, transition: { duration: 1, ease: EASE_EXPO } },
  };

  const trigger =
    play === undefined
      ? { whileInView: 'show', viewport: { once: true, amount: 0.5 } }
      : { animate: play ? 'show' : 'hidden' };

  return (
    <Tag className={className}>
      <motion.span className="block" variants={container} initial="hidden" {...trigger}>
        {lines.map((content, i) => (
          <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
            <motion.span className={`block origin-left ${lineClassName}`} variants={line}>
              {content}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

export function FadeUp({
  children,
  className,
  delay = 0,
  y = 28,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'p' | 'li' | 'span';
}) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, delay, ease: EASE_EXPO }}
    >
      {children}
    </Comp>
  );
}

export function Eyebrow({ children, tone = 'dark' }: { children: ReactNode; tone?: 'dark' | 'light' }) {
  return (
    <FadeUp
      as="p"
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
        tone === 'dark' ? 'text-ink/60' : 'text-cream/60'
      }`}
    >
      <span className="size-1.5 rounded-full bg-brand" />
      {children}
    </FadeUp>
  );
}
