import { AnimatePresence, motion } from 'motion/react';
import { Mail, Plus } from 'lucide-react';
import { useId, useState } from 'react';
import { CONTACT, whatsappLink } from '../../config';
import { WhatsAppIcon } from '../ui/icons';
import { EASE_EXPO, Eyebrow, FadeUp, RevealLines } from '../ui/Reveal';

const QUESTIONS = [
  {
    q: 'Dans quels quartiers livrez-vous ?',
    a: 'Woudy livre dans tout Abidjan : Cocody, Riviera, Angré, 2 Plateaux, Plateau, Marcory, Zone 4, Treichville, Koumassi, Yopougon… Entrez votre adresse dans l’application pour voir les restaurants qui livrent chez vous.',
  },
  {
    q: 'Combien coûte la livraison ?',
    a: 'Les frais dépendent de la distance entre le restaurant et votre adresse. Ils sont toujours affichés avant que vous validiez la commande : vous savez exactement ce que vous payez.',
  },
  {
    q: 'Comment puis-je payer ?',
    a: 'Par Wave, Orange Money, MTN MoMo, Moov Money, ou en espèces à la livraison. Choisissez simplement au moment de commander.',
  },
  {
    q: 'Comment suivre ma commande ?',
    a: 'Dès que le restaurant accepte votre commande, vous suivez sa préparation, puis la position de votre livreur en temps réel sur la carte, jusqu’à votre porte.',
  },
  {
    q: 'Comment devenir livreur Woudy ?',
    a: 'Téléchargez l’application Woudy Livreur sur Google Play, créez votre profil et envoyez vos documents. Notre équipe vous recontacte rapidement pour finaliser votre inscription.',
  },
  {
    q: 'J’ai un restaurant, comment rejoindre Woudy ?',
    a: 'Inscrivez votre établissement depuis l’espace partenaires (section « Rejoindre Woudy »). Après validation, votre carte est en ligne et nos livreurs prennent en charge vos commandes.',
  },
  {
    q: 'L’application est-elle gratuite ?',
    a: 'Oui. L’application Woudy est gratuite au téléchargement et sans abonnement : vous ne payez que vos commandes.',
  },
];

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const id = useId();
  return (
    <div className="border-b border-ink/10">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className="font-display text-lg font-semibold sm:text-xl">{q}</span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.4, ease: EASE_EXPO }}
            className={`grid size-10 shrink-0 place-items-center rounded-full transition-colors ${
              open ? 'bg-brand text-white' : 'bg-ink/5 text-ink group-hover:bg-ink/10'
            }`}
          >
            <Plus className="size-5" />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE_EXPO }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 pr-12 leading-relaxed text-ink/65">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" data-ga-location="faq" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>FAQ</Eyebrow>
          <RevealLines
            className="font-display mt-5 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[0.95]"
            lines={['Questions', 'fréquentes.']}
          />
          <FadeUp delay={0.15} className="mt-8 rounded-[28px] bg-ink p-7 text-cream">
            <p className="font-display text-xl font-bold">Une autre question ?</p>
            <p className="mt-2 text-cream/65">Notre équipe vous répond tous les jours.</p>
            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={whatsappLink('Bonjour Woudy, j’ai une question')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp · {CONTACT.whatsappDisplay}
              </a>
              <a
                href={`mailto:${CONTACT.emailSupport}`}
                className="inline-flex h-12 items-center gap-2.5 rounded-full bg-cream/10 px-5 text-sm font-semibold transition-colors hover:bg-cream/15"
              >
                <Mail className="size-4" />
                {CONTACT.emailSupport}
              </a>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.1} className="border-t border-ink/10">
          {QUESTIONS.map((item, i) => (
            <Item key={item.q} {...item} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
