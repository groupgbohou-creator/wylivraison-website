import { motion } from 'motion/react';
import { CountUp } from '../ui/CountUp';
import { EASE_EXPO } from '../ui/Reveal';

const STATS = [
  { value: 30, unit: 'min', label: 'Délai moyen de livraison visé' },
  { value: 3, unit: 'clics', label: 'Pour passer commande' },
  { value: 5, unit: '', label: 'Moyens de paiement acceptés' },
  { value: 7, unit: 'j/7', label: 'Support sur WhatsApp' },
];

export function Stats() {
  return (
    <section aria-label="Woudy en chiffres" className="border-y border-ink/10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: EASE_EXPO }}
            className={`px-5 py-10 sm:py-14 ${i % 2 === 1 ? 'border-l border-ink/10' : ''} ${
              i >= 2 ? 'border-t border-ink/10 lg:border-t-0' : ''
            } ${i === 2 ? 'lg:border-l' : ''}`}
          >
            <p className="font-display flex items-baseline gap-1.5 text-[clamp(3rem,7vw,5.2rem)] font-bold leading-none">
              <CountUp to={s.value} delay={i * 0.08} />
              {s.unit && <span className="text-[0.38em] font-semibold text-brand">{s.unit}</span>}
            </p>
            <p className="mt-3 text-sm text-ink/60 sm:text-base">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
