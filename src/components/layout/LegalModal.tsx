import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { CONTACT } from '../../config';
import { EASE_EXPO } from '../ui/Reveal';

export type LegalDoc = 'mentions' | 'confidentialite' | 'cgu';

const TABS: { id: LegalDoc; label: string }[] = [
  { id: 'mentions', label: 'Mentions légales' },
  { id: 'confidentialite', label: 'Confidentialité' },
  { id: 'cgu', label: 'Conditions d’utilisation' },
];

function Content({ doc }: { doc: LegalDoc }) {
  if (doc === 'mentions') {
    return (
      <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[auto_1fr]">
        <dt className="font-semibold text-ink">Éditeur</dt>
        <dd>WOUDY LIVRAISON SARL</dd>
        <dt className="font-semibold text-ink">RCCM</dt>
        <dd>CI-ABJ-2024-B-14285</dd>
        <dt className="font-semibold text-ink">IDU</dt>
        <dd>CI-2024-0028941-K</dd>
        <dt className="font-semibold text-ink">Siège</dt>
        <dd>Cocody 2 Plateaux Vallons, Abidjan, Côte d’Ivoire</dd>
        <dt className="font-semibold text-ink">Contact</dt>
        <dd>
          {CONTACT.emailInfo} · {CONTACT.phoneDisplay} · WhatsApp {CONTACT.whatsappDisplay}
        </dd>
      </dl>
    );
  }
  if (doc === 'confidentialite') {
    return (
      <div className="space-y-4">
        <p>
          WOUDY LIVRAISON SARL respecte la vie privée de ses utilisateurs, conformément à la loi ivoirienne
          n° 2013-450 relative à la protection des données à caractère personnel.
        </p>
        <p>
          Les données collectées (nom, numéro de téléphone, adresse de livraison) servent uniquement à traiter vos
          commandes et à vous tenir informé de leur livraison. Elles ne sont jamais revendues.
        </p>
        <p>
          Ce site utilise Google Analytics pour mesurer son audience de façon agrégée. Pour toute demande d’accès,
          de rectification ou de suppression de vos données, écrivez à {CONTACT.emailSupport}.
        </p>
      </div>
    );
  }
  return (
    <div className="space-y-4">
      <p>
        Woudy est une plateforme éditée par WOUDY LIVRAISON SARL qui met en relation des clients situés à Abidjan,
        des restaurants partenaires et des livreurs indépendants.
      </p>
      <p>
        Les prix sont affichés en francs CFA, toutes taxes comprises. Les frais de livraison dépendent de la zone
        desservie et sont indiqués avant la validation de chaque commande.
      </p>
      <p>
        Le paiement s’effectue par Mobile Money (Wave, Orange Money, MTN MoMo, Moov Money) ou en espèces à la
        livraison.
      </p>
    </div>
  );
}

export function LegalModal({ doc, onChange, onClose }: { doc: LegalDoc | null; onChange: (d: LegalDoc) => void; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!doc) return;
    const root = document.documentElement;
    root.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      root.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [doc, onClose]);

  return (
    <AnimatePresence>
      {doc && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/60 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-title"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 60, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: EASE_EXPO }}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-cream p-6 text-ink/70 sm:p-10"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-ink/5 text-ink transition-colors hover:bg-ink/10"
            >
              <X className="size-5" />
            </button>
            <h2 id="legal-title" className="font-display pr-12 text-3xl font-bold text-ink">
              Informations légales
            </h2>
            <div role="tablist" className="mt-6 flex flex-wrap gap-2">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  type="button"
                  aria-selected={doc === t.id}
                  onClick={() => onChange(t.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    doc === t.id ? 'text-white' : 'text-ink/60 hover:text-ink'
                  }`}
                >
                  {doc === t.id && (
                    <motion.span layoutId="legal-tab" className="absolute inset-0 rounded-full bg-ink" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />
                  )}
                  <span className="relative">{t.label}</span>
                </button>
              ))}
            </div>
            <div role="tabpanel" className="mt-6 leading-relaxed">
              <Content doc={doc} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
