import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Check, ChefHat, ShoppingBag } from 'lucide-react';
import { useState, type ComponentType, type ReactNode } from 'react';
import { PARTNER_PORTAL_URL, whatsappLink } from '../../config';
import { useMediaQuery } from '../../lib/useMediaQuery';
import { ScooterIcon } from '../ui/icons';
import { EASE_EXPO, Eyebrow, FadeUp, RevealLines } from '../ui/Reveal';
import { StoreButton, StoreButtons } from '../ui/StoreButtons';

type Profile = {
  kicker: string;
  title: string;
  pitch: string;
  points: string[];
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  panel: string;
  muted: string;
  cta: ReactNode;
};

const PROFILES: Profile[] = [
  {
    kicker: 'Je commande',
    title: 'Woudy',
    pitch: 'L’application pour se faire livrer ses plats préférés, partout à Abidjan.',
    points: ['Restaurants, maquis et fast-foods', 'Paiement Mobile Money ou espèces', 'Suivi du livreur en direct'],
    Icon: ShoppingBag,
    panel: 'bg-brand text-white',
    muted: 'text-white/75',
    cta: <StoreButtons app="client" theme="dark" />,
  },
  {
    kicker: 'Je livre',
    title: 'Woudy Livreur',
    pitch: 'Rejoignez la flotte Woudy et roulez selon vos disponibilités.',
    points: ['Vos horaires, vos zones', 'Gains versés chaque semaine', 'Une équipe qui vous accompagne'],
    Icon: ScooterIcon,
    panel: 'bg-ink text-cream',
    muted: 'text-cream/65',
    cta: (
      <div className="flex flex-wrap items-center gap-3">
        <span data-ga="apply_courier" className="contents">
          <StoreButton store="android" app="courier" theme="light" />
        </span>
        <a
          href={whatsappLink('Bonjour Woudy, je souhaite devenir livreur')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-cream/80 underline-offset-4 hover:text-cream hover:underline"
        >
          Une question ? WhatsApp <ArrowUpRight className="size-4" />
        </a>
      </div>
    ),
  },
  {
    kicker: 'Je cuisine',
    title: 'Woudy Partenaires',
    pitch: 'Développez vos ventes en livraison, sans investir dans une flotte.',
    points: ['De nouveaux clients dans tout Abidjan', 'Un livreur dès que la commande est prête', 'Un espace pour gérer menu et commandes'],
    Icon: ChefHat,
    panel: 'bg-leaf text-white',
    muted: 'text-white/75',
    cta: (
      <motion.a
        href={PARTNER_PORTAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-ga="become_partner"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="group inline-flex h-14 items-center gap-2 rounded-2xl bg-cream px-6 font-semibold text-ink"
      >
        Inscrire mon restaurant
        <ArrowUpRight className="size-5 transition-transform duration-500 ease-[var(--ease-expo)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </motion.a>
    ),
  },
];

function PanelContent({ profile, index }: { profile: Profile; index: number }) {
  const { kicker, title, pitch, points, muted, cta } = profile;
  return (
    <>
      <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${muted}`}>
        0{index + 1} — {kicker}
      </p>
      <h3 className="font-display mt-4 text-[clamp(2.2rem,4vw,3.4rem)] font-bold leading-[0.95]">{title}</h3>
      <p className={`mt-4 max-w-sm text-lg leading-relaxed ${muted}`}>{pitch}</p>
      <ul className="mt-6 space-y-2.5">
        {points.map((p) => (
          <li key={p} className="flex items-center gap-3 font-medium">
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white/15">
              <Check className="size-3.5" strokeWidth={3} />
            </span>
            {p}
          </li>
        ))}
      </ul>
      <div className="mt-8">{cta}</div>
    </>
  );
}

export function Ecosystem() {
  const [active, setActive] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <section id="rejoindre" data-ga-location="ecosystem" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <Eyebrow>Une plateforme, trois apps</Eyebrow>
            <RevealLines
              className="font-display mt-5 text-[clamp(2.2rem,5.4vw,4.4rem)] font-bold leading-[0.95]"
              lines={['Commandez, livrez', 'ou cuisinez', <span className="text-brand">avec Woudy.</span>]}
            />
          </div>
          <FadeUp as="p" delay={0.2} className="max-w-md text-lg leading-relaxed text-ink/65 lg:justify-self-end">
            Woudy relie ceux qui ont faim, ceux qui cuisinent et ceux qui livrent. Choisissez votre place.
          </FadeUp>
        </div>

        {isDesktop ? (
          <motion.div
            className="mt-14 flex h-[560px] gap-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: EASE_EXPO }}
          >
            {PROFILES.map((profile, i) => {
              const isActive = active === i;
              const { Icon } = profile;
              return (
                <motion.div
                  key={profile.title}
                  role="group"
                  tabIndex={0}
                  aria-label={profile.title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  animate={{ flexGrow: isActive ? 3.2 : 1 }}
                  transition={{ duration: 0.8, ease: EASE_EXPO }}
                  className={`relative min-w-0 basis-0 cursor-pointer overflow-hidden rounded-[32px] ${profile.panel}`}
                >
                  <motion.div
                    aria-hidden="true"
                    className="absolute -bottom-10 -right-10 opacity-[0.12]"
                    animate={{ rotate: isActive ? -12 : 0, scale: isActive ? 1 : 0.75 }}
                    transition={{ duration: 0.9, ease: EASE_EXPO }}
                  >
                    <Icon className="size-72" strokeWidth={1.2} />
                  </motion.div>

                  {/* état replié */}
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-between p-7"
                    animate={{ opacity: isActive ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    aria-hidden={isActive}
                  >
                    <span className="font-display text-lg font-bold">0{i + 1}</span>
                    <span className="font-display self-start text-3xl font-bold [writing-mode:vertical-rl] rotate-180">
                      {profile.kicker}
                    </span>
                  </motion.div>

                  {/* état déplié, à largeur fixe pour ne pas se recomposer pendant l'animation */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        className="absolute inset-y-0 left-0 flex w-[540px] flex-col justify-end p-10"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0, transition: { delay: 0.25, duration: 0.6, ease: EASE_EXPO } }}
                        exit={{ opacity: 0, transition: { duration: 0.15 } }}
                      >
                        <PanelContent profile={profile} index={i} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <div className="mt-12 space-y-4">
            {PROFILES.map((profile, i) => {
              const { Icon } = profile;
              return (
                <motion.div
                  key={profile.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.9, ease: EASE_EXPO }}
                  className={`relative overflow-hidden rounded-[28px] p-7 sm:p-9 ${profile.panel}`}
                >
                  <Icon className="absolute -right-8 -top-8 size-44 opacity-[0.12]" strokeWidth={1.2} />
                  <div className="relative">
                    <PanelContent profile={profile} index={i} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
