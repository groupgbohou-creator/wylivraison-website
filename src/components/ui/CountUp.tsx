import { animate, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef } from 'react';

export function CountUp({
  to,
  duration = 1.6,
  delay = 0,
  className,
}: {
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    if (reduce) {
      el.textContent = String(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, to, duration, delay, reduce]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ''}`}>
      {reduce ? to : 0}
    </span>
  );
}
