import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from 'motion/react';
import {
  ArrowLeft,
  Banknote,
  Check,
  ChevronDown,
  Heart,
  Home,
  MapPin,
  MessageCircle,
  Phone,
  Receipt,
  Search,
  Star,
  Store,
  User,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ScooterIcon } from '../ui/icons';
import { EASE_EXPO } from '../ui/Reveal';

/* -------------------------------------------------------------------------- */
/*  Écran 1 — Accueil / choisir                                               */
/* -------------------------------------------------------------------------- */

const CATEGORIES = [
  { emoji: '🍗', label: 'Braisé' },
  { emoji: '🍔', label: 'Burgers' },
  { emoji: '🐟', label: 'Attiéké' },
  { emoji: '🍕', label: 'Pizza' },
  { emoji: '🥗', label: 'Healthy' },
];

const SPOTS = [
  { emoji: '🍗', bg: 'linear-gradient(135deg,#FFB27A,#FF5400)', name: 'Chez Tantie Awa', type: 'Ivoirien · Braisés', time: '25 min', price: 'dès 2 500 F' },
  { emoji: '🍔', bg: 'linear-gradient(135deg,#FFE08A,#FFB000)', name: 'Smash Riviera', type: 'Burgers · Street food', time: '20 min', price: 'dès 3 000 F' },
  { emoji: '🍕', bg: 'linear-gradient(135deg,#FFB4A2,#E5383B)', name: 'Pizza Bella', type: 'Italien · Feu de bois', time: '30 min', price: 'dès 4 500 F' },
];

function TabBar() {
  const items = [Home, Search, Receipt, User];
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-around border-t border-ink/5 bg-white/90 px-6 pb-5 pt-2.5 backdrop-blur">
      {items.map((Icon, i) => (
        <span key={i} className={`flex flex-col items-center gap-1 ${i === 0 ? 'text-brand' : 'text-ink/30'}`}>
          <Icon className="size-[18px]" strokeWidth={2.2} />
          <span className={`size-1 rounded-full ${i === 0 ? 'bg-brand' : 'bg-transparent'}`} />
        </span>
      ))}
    </div>
  );
}

export function HomeScreen() {
  return (
    <div className="absolute inset-0 flex flex-col pt-12">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-ink/50">Livrer à</p>
            <p className="flex items-center gap-1 text-[13px] font-semibold">
              <MapPin className="size-3 text-brand" strokeWidth={2.5} />
              Riviera 2, Abidjan
              <ChevronDown className="size-3 text-ink/40" />
            </p>
          </div>
          <span className="grid size-8 place-items-center rounded-full bg-brand-100 text-[12px] font-bold text-brand">
            A
          </span>
        </div>
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_EXPO }}
          className="font-display mt-4 text-[23px] font-bold leading-[1.02]"
        >
          On mange quoi
          <br />
          ce soir ?
        </motion.h3>
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 text-[11px] text-ink/40 shadow-sm ring-1 ring-ink/5">
          <Search className="size-3.5" />
          Garba, burger, pizza…
        </div>
      </div>

      <div className="mt-3 flex gap-1.5 overflow-hidden px-4">
        {CATEGORIES.map((c, i) => (
          <motion.span
            key={c.label}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: EASE_EXPO }}
            className={`flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1.5 text-[10px] font-semibold ${
              i === 0 ? 'bg-ink text-cream' : 'bg-white text-ink/70 ring-1 ring-ink/5'
            }`}
          >
            <span>{c.emoji}</span>
            {c.label}
          </motion.span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between px-4">
        <p className="text-[12px] font-semibold">Populaire près de vous</p>
        <span className="text-[10px] font-semibold text-brand">Tout voir</span>
      </div>

      <div className="mt-2 space-y-2 px-4">
        {SPOTS.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + i * 0.08, duration: 0.6, ease: EASE_EXPO }}
            className="relative flex items-center gap-3 rounded-2xl bg-white p-2 ring-1 ring-ink/5"
          >
            <span className="grid size-[52px] shrink-0 place-items-center rounded-xl text-2xl" style={{ background: s.bg }}>
              {s.emoji}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[12px] font-semibold">{s.name}</span>
              <span className="block text-[10px] text-ink/50">{s.type}</span>
              <span className="mt-1 flex items-center gap-1.5 text-[10px] text-ink/70">
                <Star className="size-2.5 fill-amber-400 text-amber-400" />
                4,{8 - i}
                <span className="text-ink/30">·</span>
                {s.time}
                <span className="text-ink/30">·</span>
                {s.price}
              </span>
            </span>
            <Heart className={`mr-1 size-3.5 ${i === 0 ? 'fill-brand text-brand' : 'text-ink/25'}`} />
            {i === 0 && (
              <motion.span
                aria-hidden="true"
                className="absolute left-8 top-1/2 size-8 rounded-full bg-brand/30"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.6], opacity: [0.8, 0] }}
                transition={{ delay: 1.1, duration: 0.9, repeat: Infinity, repeatDelay: 1.6 }}
                style={{ translateY: '-50%' }}
              />
            )}
          </motion.div>
        ))}
      </div>
      <TabBar />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Écran 2 — Paiement                                                        */
/* -------------------------------------------------------------------------- */

const METHODS = [
  { name: 'Wave', mark: 'W', bg: '#1DC8FF', fg: '#fff' },
  { name: 'Orange Money', mark: 'OM', bg: '#FF7900', fg: '#fff' },
  { name: 'MTN MoMo', mark: 'MoMo', bg: '#FFCB05', fg: '#160E09' },
  { name: 'Moov Money', mark: 'M', bg: '#0A5FB4', fg: '#fff' },
  { name: 'Espèces à la livraison', mark: '', bg: '#0E9F5B', fg: '#fff' },
];

export function CheckoutScreen() {
  const [selected, setSelected] = useState<number | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setSelected(0);
      return;
    }
    const t = window.setTimeout(() => setSelected(0), 900);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <div className="absolute inset-0 flex flex-col px-4 pt-12">
      <div className="flex items-center gap-3">
        <span className="grid size-8 place-items-center rounded-full bg-white ring-1 ring-ink/5">
          <ArrowLeft className="size-3.5" />
        </span>
        <p className="text-[14px] font-semibold">Votre commande</p>
      </div>

      <div className="mt-4 space-y-2.5 rounded-2xl bg-white p-3 ring-1 ring-ink/5">
        {[
          { e: '🍗', n: 'Poulet braisé + alloco', q: 1, p: '4 500 F' },
          { e: '🥤', n: 'Bissap frais 50 cl', q: 2, p: '1 000 F' },
        ].map((it) => (
          <div key={it.n} className="flex items-center gap-2.5 text-[11px]">
            <span className="grid size-8 place-items-center rounded-lg bg-brand-50 text-base">{it.e}</span>
            <span className="flex-1">
              <span className="block font-semibold">{it.n}</span>
              <span className="text-ink/45">× {it.q}</span>
            </span>
            <span className="font-semibold">{it.p}</span>
          </div>
        ))}
        <div className="flex justify-between border-t border-dashed border-ink/10 pt-2 text-[10px] text-ink/50">
          <span>Livraison</span>
          <span>500 F</span>
        </div>
      </div>

      <p className="mt-4 text-[12px] font-semibold">Payer avec</p>
      <div className="mt-2 space-y-1.5">
        {METHODS.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: EASE_EXPO }}
            className="relative flex items-center gap-2.5 rounded-xl bg-white px-2.5 py-2 text-[11px] font-medium ring-1 ring-ink/5"
          >
            {selected === i && (
              <motion.span
                layoutId="pay-ring"
                className="absolute inset-0 rounded-xl ring-2 ring-brand"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span
              className="grid h-6 min-w-6 place-items-center rounded-md px-1 text-[8px] font-bold"
              style={{ background: m.bg, color: m.fg }}
            >
              {m.mark || <Banknote className="size-3.5" />}
            </span>
            <span className="flex-1">{m.name}</span>
            <span
              className={`grid size-4 place-items-center rounded-full border ${
                selected === i ? 'border-brand bg-brand' : 'border-ink/20'
              }`}
            >
              {selected === i && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 500, damping: 20 }}>
                  <Check className="size-2.5 text-white" strokeWidth={4} />
                </motion.span>
              )}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative mt-auto mb-7 overflow-hidden rounded-2xl bg-brand py-3.5 text-center text-[13px] font-semibold text-white"
        animate={selected === 0 && !reduce ? { scale: [1, 0.96, 1] } : undefined}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent [animation:shimmer_2.4s_var(--ease-expo)_infinite]"
        />
        Payer 6 000 F
      </motion.div>
    </div>
  );
}


/* -------------------------------------------------------------------------- */
/*  Écran 3 — Suivi en direct                                                 */
/* -------------------------------------------------------------------------- */

const ROUTE = 'M56 92 V138 Q56 150 68 150 H138 Q150 150 150 162 V220 Q150 232 162 232 H214 Q226 232 226 244 V298';
const TRIP_MINUTES = 12;

/** Progression 0 → 1 du livreur sur son trajet, jouée en boucle. */
export function useRouteProgress(duration = 7) {
  const progress = useMotionValue(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      progress.set(0.62);
      return;
    }
    const controls = animate(progress, [0, 1], {
      duration,
      ease: [0.45, 0, 0.4, 1],
      repeat: Infinity,
      repeatDelay: 1.6,
    });
    return () => controls.stop();
  }, [duration, progress, reduce]);

  return progress;
}

/** Plan stylisé d'un quartier d'Abidjan, avec le trajet restaurant → domicile. */
export function TrackingMap({
  progress,
  className = '',
  align = 'xMidYMid',
  fit = 'slice',
}: {
  progress: MotionValue<number>;
  className?: string;
  align?: 'xMidYMid' | 'xMidYMin';
  /** 'meet' : tout le trajet reste visible, le quartier déborde sur les côtés (cadres larges). */
  fit?: 'slice' | 'meet';
}) {
  const routeRef = useRef<SVGPathElement>(null);
  const point = (p: number) => {
    const path = routeRef.current;
    if (!path) return { x: 56, y: 92 };
    return path.getPointAtLength(p * path.getTotalLength());
  };
  const x = useTransform(progress, (p) => point(p).x);
  const y = useTransform(progress, (p) => point(p).y);

  return (
    <svg
      viewBox={fit === 'meet' ? '0 70 272 250' : '0 0 272 380'}
      preserveAspectRatio={`${align} ${fit}`}
      className={`${fit === 'meet' ? 'overflow-visible' : ''} ${className}`}
      aria-hidden="true"
    >
      <rect x="-500" y="-200" width="1272" height="780" fill="#F4E8DC" />
      {/* lagune Ébrié */}
      <path
        d="M170 400 C178 344 214 330 248 326 C300 318 340 300 420 296 C520 292 600 304 772 290 L772 600 L170 600 Z"
        fill="#CFE7EF"
      />
      {/* parcs & îlots */}
      <rect x="70" y="84" width="66" height="52" rx="10" fill="#DDEBCF" />
      <rect x="164" y="246" width="48" height="40" rx="10" fill="#DDEBCF" />
      <rect x="166" y="72" width="46" height="64" rx="10" fill="#EEDFD0" />
      <rect x="70" y="164" width="66" height="54" rx="10" fill="#EEDFD0" />
      <rect x="-120" y="166" width="96" height="52" rx="10" fill="#DDEBCF" />
      <rect x="-110" y="80" width="70" height="56" rx="10" fill="#EEDFD0" />
      <rect x="244" y="84" width="88" height="52" rx="10" fill="#DDEBCF" />
      <rect x="244" y="166" width="70" height="52" rx="10" fill="#EEDFD0" />
      <rect x="340" y="166" width="90" height="52" rx="10" fill="#DDEBCF" />
      {/* rues secondaires */}
      <g stroke="#fff" strokeWidth="5" strokeLinecap="round">
        <path d="M-500 64 H772" />
        <path d="M104 150 V232" />
        <path d="M150 300 H500" />
        <path d="M196 -200 V150" />
        <path d="M-40 -200 V340" />
        <path d="M330 -200 V300" />
      </g>
      {/* axes principaux */}
      <g stroke="#fff" strokeWidth="12" strokeLinecap="round">
        <path d="M56 -200 V600" />
        <path d="M-500 150 H772" />
        <path d="M150 40 V600" />
        <path d="M-500 232 H772" />
        <path d="M226 -200 V330" />
        <path d="M440 -200 V300" />
      </g>
      <path d="M-500 380 L-10 336 L110 300 L180 310" stroke="#FCE3BE" strokeWidth="14" strokeLinecap="round" fill="none" />

      {/* trajet restant puis parcouru */}
      <path d={ROUTE} stroke="#160E09" strokeOpacity="0.18" strokeWidth="4" strokeDasharray="2 7" strokeLinecap="round" fill="none" />
      <motion.path
        ref={routeRef}
        d={ROUTE}
        stroke="#FF5400"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{ pathLength: progress }}
      />

      {/* restaurant */}
      <g transform="translate(56 92)">
        <circle r="15" fill="#FF5400" stroke="#fff" strokeWidth="3" />
        <Store x={-7.5} y={-7.5} width={15} height={15} color="#fff" strokeWidth={2.4} />
      </g>
      {/* domicile */}
      <g transform="translate(226 298)">
        <circle r="22" fill="#160E09" fillOpacity="0.08" />
        <circle r="13" fill="#160E09" />
        <Home x={-7} y={-7} width={14} height={14} color="#FFF8F1" strokeWidth={2.4} />
      </g>
      {/* livreur */}
      <motion.g style={{ x, y }}>
        <circle r="13" fill="#FF5400" opacity="0.25">
          <animate attributeName="r" values="13;24;13" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.35;0;0.35" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle r="14" fill="#fff" stroke="#FF5400" strokeWidth="2.5" />
        <ScooterIcon x={-8} y={-8} width={16} height={16} color="#FF5400" strokeWidth={2.2} />
      </motion.g>
    </svg>
  );
}

export function TrackingScreen() {
  const progress = useRouteProgress();
  const [minutes, setMinutes] = useState(TRIP_MINUTES);
  useMotionValueEvent(progress, 'change', (p) =>
    setMinutes(p > 0.97 ? 0 : Math.max(1, Math.ceil(TRIP_MINUTES * (1 - p)))),
  );
  const fill = useTransform(progress, (p) => `${Math.min(100, p * 100)}%`);

  return (
    <div className="absolute inset-0">
      <TrackingMap progress={progress} align="xMidYMin" className="absolute inset-x-0 top-0 h-[66%] w-full" />
      <div className="absolute inset-x-0 top-12 flex justify-center">
        <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold shadow-sm">
          <span className="relative flex size-2">
            <span className="absolute inset-0 rounded-full bg-leaf [animation:ping-soft_1.6s_ease-out_infinite]" />
            <span className="relative size-2 rounded-full bg-leaf" />
          </span>
          Suivi en direct
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 rounded-t-[26px] bg-white px-4 pb-8 pt-2.5 shadow-[0_-12px_40px_-12px_rgba(22,14,9,0.25)]">
        <div className="mx-auto h-1 w-9 rounded-full bg-ink/10" />
        <div className="mt-3 flex items-end justify-between">
          <div>
            <p className="text-[10px] text-ink/50">{minutes === 0 ? 'Votre commande' : 'Votre livreur arrive dans'}</p>
            <p className="font-display text-[26px] font-bold leading-none tabular-nums">
              {minutes === 0 ? 'Il est là !' : `${minutes} min`}
            </p>
          </div>
          <span className="rounded-full bg-brand-50 px-2 py-1 text-[10px] font-semibold text-brand">Sac isotherme 🔥</span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-1">
          <span className="h-1 rounded-full bg-brand" />
          <span className="h-1 rounded-full bg-brand" />
          <span className="relative h-1 overflow-hidden rounded-full bg-ink/10">
            <motion.span className="absolute inset-y-0 left-0 rounded-full bg-brand" style={{ width: fill }} />
          </span>
        </div>
        <div className="mt-1.5 grid grid-cols-3 text-[9px] text-ink/45">
          <span>Confirmée</span>
          <span className="text-center">Préparée</span>
          <span className="text-right">En route</span>
        </div>

        <div className="mt-3 flex items-center gap-2.5 rounded-2xl bg-cream p-2">
          <span className="grid size-9 place-items-center rounded-full bg-leaf text-[13px] font-bold text-white">K</span>
          <span className="flex-1">
            <span className="block text-[12px] font-semibold">Koffi</span>
            <span className="flex items-center gap-1 text-[10px] text-ink/50">
              Livreur Woudy · <Star className="size-2.5 fill-amber-400 text-amber-400" /> 4,9
            </span>
          </span>
          <span className="grid size-8 place-items-center rounded-full bg-white ring-1 ring-ink/5">
            <MessageCircle className="size-3.5" />
          </span>
          <span className="grid size-8 place-items-center rounded-full bg-brand text-white">
            <Phone className="size-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Écran 4 — Livré                                                           */
/* -------------------------------------------------------------------------- */

export function DeliveredScreen() {
  return (
    <div className="absolute inset-0 flex flex-col items-center px-5 pt-16 text-center">
      <div className="relative mt-6 grid size-24 place-items-center">
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = (i / 10) * Math.PI * 2;
          return (
            <motion.span
              key={i}
              aria-hidden="true"
              className={`absolute size-2 rounded-full ${i % 3 === 0 ? 'bg-leaf' : i % 3 === 1 ? 'bg-brand' : 'bg-amber-400'}`}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
              animate={{ x: Math.cos(angle) * 62, y: Math.sin(angle) * 62, opacity: [0, 1, 0], scale: [0, 1, 0.6] }}
              transition={{ delay: 0.55, duration: 1, ease: 'easeOut' }}
            />
          );
        })}
        <motion.span
          className="grid size-24 place-items-center rounded-full bg-leaf shadow-[0_20px_40px_-12px_rgba(14,159,91,0.6)]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
        >
          <svg viewBox="0 0 24 24" className="size-11 text-white" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <motion.path
              d="M5 12.5l4.5 4.5L19 7.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.35, duration: 0.45, ease: 'easeOut' }}
            />
          </svg>
        </motion.span>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: EASE_EXPO }}
        className="font-display mt-6 text-[28px] font-bold leading-none"
      >
        Bon appétit !
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        className="mt-2 text-[11px] text-ink/55"
      >
        Livré en 27 min · encore bien chaud 🔥
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.6, ease: EASE_EXPO }}
        className="mt-6 w-full rounded-2xl bg-white p-3.5 ring-1 ring-ink/5"
      >
        <p className="text-[11px] font-semibold">Notez votre livraison</p>
        <div className="mt-2 flex justify-center gap-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0.4, opacity: 0.2 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1 + i * 0.12, type: 'spring', stiffness: 500, damping: 14 }}
            >
              <Star className="size-6 fill-amber-400 text-amber-400" />
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease: EASE_EXPO }}
        className="mt-2.5 w-full rounded-2xl bg-white p-3.5 ring-1 ring-ink/5"
      >
        <p className="text-[11px] font-semibold">Un pourboire pour Koffi ?</p>
        <div className="mt-2 grid grid-cols-3 gap-1.5 text-[11px] font-semibold">
          {['200 F', '500 F', '1 000 F'].map((t, i) => (
            <span key={t} className={`rounded-lg py-1.5 ${i === 1 ? 'bg-brand text-white' : 'bg-cream text-ink/70'}`}>
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      <span className="mb-8 mt-auto w-full rounded-2xl bg-ink py-3.5 text-[13px] font-semibold text-cream">Terminer</span>
    </div>
  );
}
