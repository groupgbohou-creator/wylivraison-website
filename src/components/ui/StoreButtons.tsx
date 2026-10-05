import { motion } from 'motion/react';
import { STORE_LINKS } from '../../config';
import { Magnetic } from './Magnetic';

type Theme = 'dark' | 'light';
type Size = 'md' | 'lg';

export function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

export function GooglePlayLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#00A0FF" d="M1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924z" />
      <path fill="#00D26A" d="M13.544 10.989l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973z" />
      <path fill="#FFC400" d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594z" />
      <path fill="#FF3A44" d="M13.544 13.056l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
    </svg>
  );
}

const base =
  'group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border transition-colors duration-300 select-none';
const themes: Record<Theme, string> = {
  dark: 'bg-ink text-cream border-ink hover:bg-ink-800',
  light: 'bg-cream text-ink border-cream hover:bg-white',
};
const sizes: Record<Size, { box: string; icon: string; small: string; big: string }> = {
  md: { box: 'h-14 pl-4 pr-5', icon: 'size-6', small: 'text-[10px]', big: 'text-[17px]' },
  lg: { box: 'h-16 pl-5 pr-7', icon: 'size-7', small: 'text-[11px]', big: 'text-xl' },
};

function Shine() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 group-hover:[animation:shimmer_0.9s_var(--ease-expo)]"
    />
  );
}

type StoreButtonProps = {
  store: 'ios' | 'android';
  app?: keyof typeof STORE_LINKS;
  theme?: Theme;
  size?: Size;
  magnetic?: boolean;
};

export function StoreButton({
  store,
  app = 'client',
  theme = 'dark',
  size = 'md',
  magnetic = true,
}: StoreButtonProps) {
  const href = STORE_LINKS[app][store];
  const s = sizes[size];
  const isIos = store === 'ios';
  const label = isIos ? "Télécharger dans l'App Store" : 'Disponible sur Google Play';

  const content = (
    <>
      <Shine />
      {isIos ? <AppleLogo className={s.icon} /> : <GooglePlayLogo className={s.icon} />}
      <span className="flex flex-col items-start leading-none">
        <span className={`${s.small} font-medium uppercase tracking-wide opacity-70`}>
          {isIos ? (href ? 'Télécharger dans' : 'Bientôt sur') : 'Disponible sur'}
        </span>
        <span className={`${s.big} mt-1 font-semibold tracking-tight`}>
          {isIos ? "l'App Store" : 'Google Play'}
        </span>
      </span>
    </>
  );

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.96 },
    transition: { type: 'spring', stiffness: 400, damping: 22 },
  } as const;

  const button = href ? (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${base} ${themes[theme]} ${s.box}`}
      {...motionProps}
    >
      {content}
    </motion.a>
  ) : (
    <motion.button
      type="button"
      data-ga="coming_soon"
      aria-label="L'application iPhone arrive bientôt sur l'App Store"
      title="Bientôt disponible sur l'App Store"
      className={`${base} ${themes[theme]} ${s.box} cursor-default opacity-80`}
      {...motionProps}
    >
      {content}
    </motion.button>
  );

  return magnetic ? <Magnetic>{button}</Magnetic> : button;
}

export function StoreButtons({
  app = 'client',
  theme = 'dark',
  size = 'md',
  className = '',
}: {
  app?: keyof typeof STORE_LINKS;
  theme?: Theme;
  size?: Size;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <StoreButton store="ios" app={app} theme={theme} size={size} />
      <StoreButton store="android" app={app} theme={theme} size={size} />
    </div>
  );
}
