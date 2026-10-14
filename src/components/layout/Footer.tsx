import { ArrowUp } from 'lucide-react';
import type { ReactNode } from 'react';
import {
  ADMIN_PORTAL_URL,
  CONTACT,
  PARTNER_PORTAL_URL,
  PARTNER_REGISTER_URL,
  STORE_LINKS,
  whatsappLink,
} from '../../config';
import { Wordmark } from '../brand/Wordmark';
import { InstagramIcon, WhatsAppIcon } from '../ui/icons';
import { RevealLines } from '../ui/Reveal';
import { StoreButtons } from '../ui/StoreButtons';
import type { LegalDoc } from './LegalModal';

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/40">{title}</p>
      <ul className="mt-5 space-y-3 text-[15px]">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external,
  ga,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  ga?: string;
}) {
  return (
    <li>
      <a
        href={href}
        data-ga={ga}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="group relative inline-flex items-center gap-2 text-cream/75 transition-colors hover:text-cream"
      >
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-brand transition-transform duration-500 ease-[var(--ease-expo)] group-hover:origin-left group-hover:scale-x-100" />
      </a>
    </li>
  );
}

export function Footer({ onOpenLegal }: { onOpenLegal: (doc: LegalDoc) => void }) {
  return (
    <footer data-ga-location="footer" className="relative overflow-hidden bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 pt-20 sm:pt-28">
        <div className="flex flex-col gap-10 border-b border-cream/10 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <RevealLines
            className="font-display text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[0.92]"
            lines={['Une faim ?', <span className="text-brand">Une app.</span>]}
          />
          <StoreButtons theme="light" size="lg" />
        </div>

        <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-3 lg:grid-cols-5">
          <Column title="Application">
            {STORE_LINKS.client.ios && (
              <FooterLink href={STORE_LINKS.client.ios} external>
                App Store
              </FooterLink>
            )}
            {STORE_LINKS.client.android && (
              <FooterLink href={STORE_LINKS.client.android} external>
                Google Play
              </FooterLink>
            )}
            <FooterLink href="#comment">Comment ça marche</FooterLink>
            <FooterLink href="#faq">FAQ</FooterLink>
          </Column>
          <Column title="Rejoindre Woudy">
            {STORE_LINKS.courier.android && (
              <FooterLink href={STORE_LINKS.courier.android} external ga="apply_courier">
                Devenir livreur
              </FooterLink>
            )}
            <FooterLink href={PARTNER_REGISTER_URL} external ga="become_partner">
              Inscrire mon restaurant
            </FooterLink>
          </Column>
          <Column title="Espaces pro">
            <FooterLink href={PARTNER_PORTAL_URL} external>
              Portail Partenaires
            </FooterLink>
            <FooterLink href={ADMIN_PORTAL_URL} external>
              Portail Admin
            </FooterLink>
          </Column>
          <Column title="Contact">
            <FooterLink href={whatsappLink('Bonjour Woudy')} external>
              <WhatsAppIcon className="size-4" /> {CONTACT.whatsappDisplay}
            </FooterLink>
            <FooterLink href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</FooterLink>
            <FooterLink href={`mailto:${CONTACT.emailInfo}`}>{CONTACT.emailInfo}</FooterLink>
            <FooterLink href={`mailto:${CONTACT.emailSupport}`}>{CONTACT.emailSupport}</FooterLink>
          </Column>
          <Column title="Suivez-nous">
            <FooterLink href={CONTACT.instagramUrl} external>
              <InstagramIcon className="size-4" /> {CONTACT.instagramHandle}
            </FooterLink>
            <li className="pt-2 text-sm text-cream/45">Abidjan, Côte d’Ivoire</li>
          </Column>
        </div>
      </div>

      <div className="px-3 text-brand" aria-hidden="true">
        <Wordmark draw="inView" duration={2} className="mx-auto block w-full max-w-[1400px]" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-cream/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Woudy Livraison SARL. Tous droits réservés.</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <button type="button" onClick={() => onOpenLegal('mentions')} className="hover:text-cream">
            Mentions légales
          </button>
          <button type="button" onClick={() => onOpenLegal('confidentialite')} className="hover:text-cream">
            Confidentialité
          </button>
          <button type="button" onClick={() => onOpenLegal('cgu')} className="hover:text-cream">
            CGU
          </button>
          <a
            href="#top"
            aria-label="Retour en haut de page"
            className="grid size-10 place-items-center rounded-full bg-cream/10 text-cream transition-transform hover:-translate-y-1"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
