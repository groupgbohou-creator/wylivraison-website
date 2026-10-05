import { motion } from 'motion/react';
import { ArrowUpRight, Banknote, Clock3, MapPinned, ShoppingBag, UtensilsCrossed, Wallet } from 'lucide-react';
import type { ReactNode } from 'react';
import { whatsappLink } from '../../config';
import { useRouteProgress, TrackingMap } from '../phone/screens';
import { CountUp } from '../ui/CountUp';
import { WhatsAppIcon } from '../ui/icons';
import { EASE_EXPO, Eyebrow, FadeUp, RevealLines } from '../ui/Reveal';

/** Carte du bento avec halo lumineux qui suit le curseur. */
function Card({
  children,
  className = '',
  tone = 'light',
  index,
}: {
  children: ReactNode;
  className?: string;
  tone?: 'light' | 'dark' | 'sand';
  index: number;
}) {
  const tones = {
    light: 'bg-white ring-1 ring-ink/5',
    sand: 'bg-sand',
    dark: 'bg-ink text-cream',
  };
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay: (index % 3) * 0.08, ease: EASE_EXPO }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`);
      }}
      className={`group relative isolate overflow-hidden rounded-[28px] p-6 sm:p-8 ${tones[tone]} ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), ${
            tone === 'dark' ? 'rgba(255,84,0,0.22)' : 'rgba(255,84,0,0.10)'
          }, transparent 65%)`,
        }}
      />
      {children}
    </motion.article>
  );
}

function CardTitle({ icon, children, tone = 'light' }: { icon: ReactNode; children: ReactNode; tone?: 'light' | 'dark' }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`grid size-10 place-items-center rounded-full ${
          tone === 'dark' ? 'bg-brand text-white' : 'bg-brand-50 text-brand'
        }`}
      >
        {icon}
      </span>
      <h3 className="font-display text-xl font-bold sm:text-2xl">{children}</h3>
    </div>
  );
}

function SpeedRing() {
  const r = 88;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative mx-auto mt-10 aspect-square w-full max-w-[300px]">
      <svg viewBox="0 0 200 200" className="absolute inset-0 -rotate-90">
        <circle cx="100" cy="100" r={r} fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="10" />
        <motion.circle
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="#FF5400"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c * 0.5 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.6, ease: EASE_EXPO }}
        />
        {Array.from({ length: 60 }).map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="4"
            x2="100"
            y2={i % 5 === 0 ? 12 : 8}
            stroke="currentColor"
            strokeOpacity={i % 5 === 0 ? 0.5 : 0.18}
            strokeWidth={i % 5 === 0 ? 1.5 : 1}
            transform={`rotate(${i * 6} 100 100)`}
          />
        ))}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display flex items-start text-[clamp(4.5rem,11vw,7rem)] font-bold leading-none text-brand">
          <CountUp to={30} />
        </span>
        <span className="mt-1 text-sm font-semibold uppercase tracking-[0.25em] text-cream/60">minutes</span>
      </div>
    </div>
  );
}

function LiveMap() {
  const progress = useRouteProgress(6);
  return (
    <div className="relative mt-6 h-56 overflow-hidden rounded-2xl bg-[#F4E8DC] ring-1 ring-ink/5 sm:h-60">
      <TrackingMap progress={progress} fit="meet" className="absolute inset-0 size-full" />
    </div>
  );
}

const PAYMENT_CHIPS = [
  { label: 'Wave', bg: '#1DC8FF', fg: '#fff', rotate: -6 },
  { label: 'Orange Money', bg: '#FF7900', fg: '#fff', rotate: 4 },
  { label: 'MTN MoMo', bg: '#FFCB05', fg: '#160E09', rotate: -3 },
  { label: 'Moov Money', bg: '#0A5FB4', fg: '#fff', rotate: 5 },
  { label: 'Espèces', bg: '#0E9F5B', fg: '#fff', rotate: -4, icon: true },
];

function PaymentChips() {
  return (
    <div className="mt-8 flex flex-wrap gap-2.5">
      {PAYMENT_CHIPS.map((chip, i) => (
        <motion.span
          key={chip.label}
          initial={{ opacity: 0, y: 30, rotate: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, rotate: chip.rotate, scale: 1 }}
          whileHover={{ rotate: 0, scale: 1.08, y: -4 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.15 + i * 0.07 }}
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold shadow-[0_10px_24px_-14px_rgba(22,14,9,0.6)]"
          style={{ background: chip.bg, color: chip.fg }}
        >
          {chip.icon && <Banknote className="size-4" />}
          {chip.label}
        </motion.span>
      ))}
    </div>
  );
}

function HeatBag() {
  return (
    <div className="relative mx-auto mt-6 grid h-36 w-36 place-items-end justify-center">
      <svg viewBox="0 0 120 70" className="absolute inset-x-0 top-0 h-20 w-full text-brand" fill="none" aria-hidden="true">
        {[30, 60, 90].map((x, i) => (
          <motion.path
            key={x}
            d={`M${x} 66 C ${x - 10} 52, ${x + 10} 40, ${x} 26 S ${x - 8} 8, ${x} 2`}
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0], y: [8, 0, -8] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.45, ease: 'easeInOut' }}
          />
        ))}
      </svg>
      <span className="grid size-20 place-items-center rounded-3xl bg-brand text-white shadow-[0_20px_40px_-16px_rgba(255,84,0,0.9)]">
        <ShoppingBag className="size-9" strokeWidth={1.8} />
      </span>
    </div>
  );
}

function ChatBubbles() {
  const bubbles = [
    { from: 'me', text: 'Bonsoir, ma commande arrive bientôt ?' },
    { from: 'woudy', text: 'Bonsoir ! Koffi est à 4 min de chez vous 🛵' },
  ];
  return (
    <div className="mt-6 space-y-2">
      {bubbles.map((b, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 14, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.3 + i * 0.7, type: 'spring', stiffness: 300, damping: 22 }}
          className={`w-fit max-w-[85%] rounded-2xl px-3.5 py-2 text-sm ${
            b.from === 'me'
              ? 'origin-bottom-left rounded-bl-md bg-cream text-ink'
              : 'ml-auto origin-bottom-right rounded-br-md bg-[#25D366] text-white'
          }`}
        >
          {b.text}
        </motion.p>
      ))}
    </div>
  );
}

const TILES = [
  { e: '🍗', bg: '#FF5400' },
  { e: '🍔', bg: '#FFB000' },
  { e: '🐟', bg: '#5FB7D4' },
  { e: '🍕', bg: '#E5383B' },
  { e: '🥗', bg: '#0E9F5B' },
];

function FoodFan() {
  return (
    <div className="relative mx-auto mt-8 h-32 w-full max-w-[260px]">
      {TILES.map((t, i) => {
        const offset = i - 2;
        return (
          <motion.span
            key={t.e}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.7, ease: EASE_EXPO }}
            className="absolute left-1/2 top-1/2 -ml-10 -mt-10"
            style={{ zIndex: 5 - Math.abs(offset) }}
          >
            <span
              className="grid size-20 place-items-center rounded-3xl text-4xl shadow-[0_16px_30px_-14px_rgba(22,14,9,0.5)] ring-4 ring-white transition-transform duration-700 ease-[var(--ease-expo)] [transform:translateX(calc(var(--o)*14px))_rotate(calc(var(--o)*5deg))] group-hover:[transform:translateX(calc(var(--o)*46px))_translateY(calc(var(--a)*6px))_rotate(calc(var(--o)*10deg))]"
              style={{ background: t.bg, ['--o' as string]: offset, ['--a' as string]: Math.abs(offset) }}
            >
              {t.e}
            </span>
          </motion.span>
        );
      })}
    </div>
  );
}

export function Features() {
  return (
    <section id="avantages" data-ga-location="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <Eyebrow>Pourquoi Woudy</Eyebrow>
            <RevealLines
              className="font-display mt-5 text-[clamp(2.2rem,5.4vw,4.4rem)] font-bold leading-[0.95]"
              lines={['Pensé pour Abidjan,', 'de la cuisine', 'à votre porte.']}
            />
          </div>
          <FadeUp as="p" delay={0.2} className="max-w-md text-lg leading-relaxed text-ink/65 lg:justify-self-end">
            Des livreurs qui connaissent chaque quartier, des paiements qui vous ressemblent et des plats qui arrivent
            comme à la sortie du four.
          </FadeUp>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          <Card index={0} tone="dark" className="flex flex-col md:col-span-2 lg:col-span-3 lg:row-span-2">
            <CardTitle tone="dark" icon={<Clock3 className="size-5" />}>
              Rapide. Vraiment.
            </CardTitle>
            <p className="mt-3 max-w-sm text-cream/65">
              C'est le délai moyen visé entre votre commande et la sonnette. Nos livreurs connaissent chaque raccourci
              de la ville.
            </p>
            <div className="flex flex-1 items-center">
              <SpeedRing />
            </div>
          </Card>

          <Card index={1} tone="light" className="lg:col-span-3">
            <CardTitle icon={<MapPinned className="size-5" />}>Suivi en temps réel</CardTitle>
            <p className="mt-3 text-ink/60">
              Suivez votre livreur rue par rue, de la cuisine jusqu'à votre porte.
            </p>
            <LiveMap />
          </Card>

          <Card index={2} tone="sand" className="lg:col-span-3">
            <CardTitle icon={<Wallet className="size-5" />}>Payez comme vous voulez</CardTitle>
            <p className="mt-3 text-ink/60">
              Mobile Money en un geste, ou espèces à la livraison. Toujours sans surprise.
            </p>
            <PaymentChips />
          </Card>

          <Card index={3} tone="light" className="lg:col-span-2">
            <CardTitle icon={<ShoppingBag className="size-5" />}>Livré chaud</CardTitle>
            <p className="mt-3 text-ink/60">Sacs isothermes scellés, du restaurant jusqu'à vous.</p>
            <HeatBag />
          </Card>

          <Card index={4} tone="dark" className="lg:col-span-2">
            <CardTitle tone="dark" icon={<WhatsAppIcon className="size-5" />}>
              Une équipe, 7j/7
            </CardTitle>
            <p className="mt-3 text-cream/65">Une question ? On répond sur WhatsApp, pour de vrai.</p>
            <ChatBubbles />
            <a
              href={whatsappLink('Bonjour Woudy, j’ai une question')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
            >
              Écrire au support <ArrowUpRight className="size-4" />
            </a>
          </Card>

          <Card index={5} tone="sand" className="md:col-span-2 lg:col-span-2">
            <CardTitle icon={<UtensilsCrossed className="size-5" />}>Du maquis au resto</CardTitle>
            <p className="mt-3 text-ink/60">Garba, braisé, burgers, pizzas… les adresses que vous aimez, au même endroit.</p>
            <FoodFan />
          </Card>
        </div>
      </div>
    </section>
  );
}
