import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useMemo, useRef } from 'react';
import { whatsappLink } from '../../config';
import { detectPlatform } from '../../lib/platform';
import { Wordmark } from '../brand/Wordmark';
import { PhoneFrame } from '../phone/PhoneFrame';
import { DeliveredScreen, HomeScreen } from '../phone/screens';
import { WhatsAppIcon } from '../ui/icons';
import { FadeUp, RevealLines } from '../ui/Reveal';
import { StoreButton } from '../ui/StoreButtons';

export function Download() {
  const ref = useRef<HTMLElement>(null);
  const phonesRef = useRef<HTMLDivElement>(null);
  // Les écrans ne sont montés qu'à l'arrivée dans la section, pour que leurs animations s'y jouent.
  const phonesVisible = useInView(phonesRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yLeft = useTransform(scrollYProgress, [0, 1], [160, -90]);
  const yRight = useTransform(scrollYProgress, [0, 1], [200, -50]);
  const wordmarkX = useTransform(scrollYProgress, [0, 1], ['8%', '-12%']);

  // Sur iPhone on met l'App Store en premier, sur Android Google Play.
  const order = useMemo(() => (detectPlatform() === 'android' ? (['android', 'ios'] as const) : (['ios', 'android'] as const)), []);

  return (
    <section
      id="telecharger"
      ref={ref}
      data-ga-location="download"
      className="relative isolate overflow-hidden bg-brand text-white"
    >
      <motion.div
        aria-hidden="true"
        style={{ x: wordmarkX }}
        className="pointer-events-none absolute -bottom-[6vw] left-0 -z-10 w-[130vw] text-white/[0.09]"
      >
        <Wordmark draw="inView" duration={2.2} className="w-full" />
      </motion.div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-24 sm:pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:pt-28">
        <div className="pb-4 lg:pb-28">
          <FadeUp as="p" className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
            Gratuit sur iOS & Android
          </FadeUp>
          <RevealLines
            className="font-display mt-5 text-[clamp(2.6rem,6.6vw,5.6rem)] font-bold leading-[0.92]"
            lines={['Votre prochain', 'repas est à', <span className="text-ink">3 clics.</span>]}
          />
          <FadeUp as="p" delay={0.15} className="mt-6 max-w-md text-lg leading-relaxed text-white/85">
            Téléchargez Woudy, entrez votre adresse et laissez-vous livrer. Aucun abonnement, aucun frais caché.
          </FadeUp>
          <FadeUp delay={0.25} className="mt-9 flex flex-wrap items-center gap-3">
            {order.map((store) => (
              <StoreButton key={store} store={store} size="lg" />
            ))}
          </FadeUp>
          <FadeUp delay={0.35} className="mt-8">
            <a
              href={whatsappLink('Bonjour Woudy, je souhaite commander un repas')}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
            >
              <WhatsAppIcon className="size-4" />
              <span className="underline-offset-4 group-hover:underline">Pas envie d’installer l’app ? Commandez sur WhatsApp</span>
              <ArrowUpRight className="size-4 transition-transform duration-500 ease-[var(--ease-expo)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </FadeUp>
        </div>

        <div ref={phonesRef} className="relative flex h-[520px] justify-center sm:h-[600px] lg:h-[680px]">
          <motion.div style={{ y: yLeft }} className="absolute left-1/2 top-0 -ml-[230px] hidden -rotate-[8deg] sm:block">
            <PhoneFrame className="w-[260px]">{phonesVisible && <HomeScreen />}</PhoneFrame>
          </motion.div>
          <motion.div style={{ y: yRight }} className="absolute left-1/2 top-6 -ml-[135px] rotate-[6deg] sm:-ml-[10px]">
            <PhoneFrame className="w-[min(270px,78vw)]">{phonesVisible && <DeliveredScreen />}</PhoneFrame>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
