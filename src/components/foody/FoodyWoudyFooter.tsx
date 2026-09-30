import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  HelpCircle, 
  Smartphone, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink,
  ChevronRight,
  X
} from 'lucide-react';
import { WoudyWordmark } from '../WoudyWordmark';
import { GooglePlayLogo } from '../GooglePlayLogo';
import { AppStoreLogo } from '../AppStoreLogo';
import { 
  trackWhatsAppClick, 
  trackContactWoudy, 
  trackDownloadAppClick, 
  trackBecomePartnerClick, 
  trackInstagramClick 
} from '../../utils/analytics';

export const FoodyWoudyFooter: React.FC = () => {
  const [activeLegalModal, setActiveLegalModal] = useState<string | null>(null);

  const googlePlayUrl = "https://play.google.com/store/apps/details?id=ci.woudy.livreur&pcampaignid=web_share";

  return (
    <footer className="bg-neutral-950 text-neutral-400 text-xs border-t border-neutral-800">
      
      {/* Top Value Propositions */}
      <div className="border-b border-neutral-800/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/10 text-[#FF5400] flex items-center justify-center shrink-0 border border-orange-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm">Garantie Chaleur 65°C</h4>
              <p className="text-neutral-400 text-[11px] mt-0.5 leading-snug">
                Sacs isothermes homologués et scellage hermétique pour chaque commande.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/10 text-[#FF5400] flex items-center justify-center shrink-0 border border-orange-500/20">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm">Livraison partout à Abidjan</h4>
              <p className="text-neutral-400 text-[11px] mt-0.5 leading-snug">
                Courtiers dédiés desservant Cocody, Plateau, Marcory, Yopougon, Treichville, Koumassi et périphéries.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/10 text-[#FF5400] flex items-center justify-center shrink-0 border border-orange-500/20">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm">Paiement 100% Sécurisé</h4>
              <p className="text-neutral-400 text-[11px] mt-0.5 leading-snug">
                Réglez par Wave, Orange Money, MTN MoMo ou à la livraison en espèces.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm">Support & Commandes 7j/7</h4>
              <div className="flex flex-col gap-0.5 mt-1 text-[11px]">
                <a 
                  href="https://wa.me/2250720584171?text=Bonjour%20Woudy%2C%20je%20souhaite%20commander" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackWhatsAppClick({
                      purpose: 'support',
                      location: 'footer_top_propositions',
                      phone: '+2250720584171',
                    });
                  }}
                  className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
                >
                  WhatsApp : +225 07 20 58 41 71
                </a>
                <a 
                  href="tel:+2252731944568" 
                  onClick={() => {
                    trackContactWoudy({
                      method: 'phone',
                      contact_detail: '+2252731944568',
                      location: 'footer_top_propositions',
                    });
                  }}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Tél : +225 27 31 94 45 68
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Legal Columns */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand & Corporate ID */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <WoudyWordmark className="h-9 w-auto text-[#FF5400]" color="#FF5400" />
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Plateforme ivoirienne de commande et de livraison express de repas chauds à Abidjan. Technologie inspirée des meilleurs standards mondiaux pour livrer partout à Abidjan en 30 minutes chrono.
            </p>

            {/* Official Legal & Contact Identifiers */}
            <div className="bg-neutral-900/90 rounded-2xl p-4 border border-neutral-800 space-y-1.5 text-[11px] font-mono">
              <div className="text-white font-bold font-sans text-xs mb-1">
                Informations & Contacts Officiels :
              </div>
              <p className="text-neutral-300">
                <strong className="text-neutral-400 font-sans">Contact Email :</strong>{' '}
                <a href="mailto:info@woudys.com" className="text-orange-400 hover:underline">info@woudys.com</a>
                <span className="text-neutral-500 mx-1.5">•</span>
                <a href="mailto:support@woudys.com" className="text-orange-400 hover:underline">support@woudys.com</a>
              </p>
              <p className="text-neutral-300">
                <strong className="text-neutral-400 font-sans">Téléphone :</strong> +225 27 31 94 45 68
              </p>
              <p className="text-neutral-300">
                <strong className="text-neutral-400 font-sans">WhatsApp :</strong> +225 07 20 58 41 71
              </p>
              <p className="text-neutral-300">
                <strong className="text-neutral-400 font-sans">Instagram :</strong>{' '}
                <a 
                  href="https://instagram.com/woudylivraison"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackInstagramClick({
                      location: 'footer_contacts_card',
                      url: 'https://instagram.com/woudylivraison',
                    });
                  }}
                  className="text-orange-400 hover:underline"
                >
                  @woudylivraison
                </a>
              </p>
              <p className="text-neutral-300">
                <strong className="text-neutral-400 font-sans">Raison sociale :</strong> WOUDY LIVRAISON SARL
              </p>
              <p className="text-neutral-300">
                <strong className="text-neutral-400 font-sans">RCCM :</strong> CI-ABJ-2024-B-14285
              </p>
              <p className="text-neutral-300">
                <strong className="text-neutral-400 font-sans">IDU :</strong> CI-2024-0028941-K
              </p>
              <p className="text-neutral-300">
                <strong className="text-neutral-400 font-sans">Siège :</strong> Cocody 2 Plateaux Vallons, Abidjan
              </p>
            </div>
          </div>

          {/* Restaurant Categories */}
          <div className="space-y-3">
            <h4 className="text-white font-black text-xs uppercase tracking-wider">
              Le Menu Burger Shop
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#Populaire" className="hover:text-white transition-colors">Populaire & Best-sellers</a></li>
              <li><a href="#Smash-Burgers" className="hover:text-white transition-colors">Smash Burgers Angus</a></li>
              <li><a href="#Boeuf-Premium-Angus" className="hover:text-white transition-colors">Bœuf Black Angus</a></li>
              <li><a href="#Poulet-Fillet-Croustillant" className="hover:text-white transition-colors">Crispy Chicken Fillets</a></li>
              <li><a href="#Menus-&-Combos" className="hover:text-white transition-colors">Menus & Combos Gourmets</a></li>
              <li><a href="#Accompagnements-(Sides)" className="hover:text-white transition-colors">Frites fraîches & Sides</a></li>
              <li><a href="#Sauces-Maison" className="hover:text-white transition-colors">Sauces secrètes Woudy</a></li>
            </ul>
          </div>

          {/* Legal Documents */}
          <div className="space-y-3">
            <h4 className="text-white font-black text-xs uppercase tracking-wider">
              Mentions & Légal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setActiveLegalModal('cgu')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Conditions Générales d'Utilisation
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveLegalModal('privacy')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Politique de Confidentialité
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveLegalModal('mentions')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Mentions Légales & RCCM
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveLegalModal('hygiene')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Charte Qualité Thermique Woudy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveLegalModal('delivery')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Conditions des Livreurs Partenaires
                </button>
              </li>
              <li className="pt-2 border-t border-neutral-800">
                <a
                  href="http://213.199.59.185:3000/auth/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackBecomePartnerClick({
                      location: 'footer_column_links',
                      action: 'open_portal',
                      details: { url: 'http://213.199.59.185:3000/auth/register' }
                    });
                  }}
                  className="text-orange-400 hover:text-orange-300 font-bold transition-colors inline-flex items-center gap-1"
                >
                  <span>Devenez restaurant partenaire</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Download App & Google Play Official Link */}
          <div className="space-y-3">
            <h4 className="text-white font-black text-xs uppercase tracking-wider">
              Application Mobile
            </h4>
            <p className="text-[11px] text-neutral-400 leading-snug">
              Téléchargez l'application officielle Woudy pour suivre vos livraisons de burgers en direct par GPS.
            </p>

            {/* Official Google Play Store & App Store Buttons */}
            <div className="space-y-2 pt-1">
              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackDownloadAppClick({
                    store: 'google_play',
                    location: 'footer_app_badge',
                    url: googlePlayUrl,
                  });
                }}
                className="flex items-center bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500/50 p-2.5 rounded-2xl transition-all group cursor-pointer"
              >
                <GooglePlayLogo variant="badge" />
              </a>

              <a
                href="#telecharger"
                onClick={() => {
                  trackDownloadAppClick({
                    store: 'apple_app_store',
                    location: 'footer_app_badge',
                  });
                }}
                className="flex items-center bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500/50 p-2.5 rounded-2xl transition-all group cursor-pointer"
              >
                <AppStoreLogo variant="badge" theme="dark" />
              </a>

              {/* Direct Play Store Link pasted below the button as requested */}
              <div className="pt-1">
                <span className="text-[10px] text-neutral-500 block mb-1">Lien direct Play Store :</span>
                <a
                  href={googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackDownloadAppClick({
                      store: 'google_play',
                      location: 'footer_direct_play_link',
                      url: googlePlayUrl,
                    });
                  }}
                  className="text-[10px] text-orange-400 hover:text-orange-300 break-all underline underline-offset-2 flex items-center gap-1 font-mono"
                >
                  <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                  <span>{googlePlayUrl}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="border-t border-neutral-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © 2026 WOUDY LIVRAISON SARL. Tous droits réservés. Abidjan, Côte d'Ivoire.
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <a 
              href="https://instagram.com/woudylivraison"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackInstagramClick({
                  location: 'footer_bottom_copyright_bar',
                  url: 'https://instagram.com/woudylivraison',
                });
              }}
              className="text-neutral-400 hover:text-white transition-colors font-medium flex items-center gap-1"
            >
              <span>Instagram</span>
            </a>
            <span>•</span>
            <span>Agrément ARTCI / MIN-TRANS-2024-0492</span>
            <span>•</span>
            <span>Règlement conforme aux lois ivoiriennes</span>
            <span>•</span>
            <span>Livraison rapide partout à Abidjan</span>
          </div>
        </div>
      </div>

      {/* Legal Modal Popup */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] shadow-2xl border border-neutral-200 flex flex-col text-neutral-800">
            
            <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#FF5400]" />
                <h3 className="font-extrabold text-base sm:text-lg text-neutral-900 font-display">
                  {activeLegalModal === 'cgu' && "Conditions Générales d'Utilisation (CGU) - Woudy"}
                  {activeLegalModal === 'privacy' && "Politique de Confidentialité & Données - Woudy"}
                  {activeLegalModal === 'mentions' && "Mentions Légales & Immatriculation - Woudy"}
                  {activeLegalModal === 'hygiene' && "Charte Qualité Thermique & Hygiène Woudy"}
                  {activeLegalModal === 'delivery' && "Conditions des Livreurs Partenaires Woudy"}
                </h3>
              </div>
              <button
                onClick={() => setActiveLegalModal(null)}
                className="p-1 rounded-full hover:bg-neutral-100 text-neutral-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-xs leading-relaxed text-neutral-600">
              {activeLegalModal === 'cgu' && (
                <>
                  <h4 className="font-bold text-neutral-900 text-sm">1. Objet du Service</h4>
                  <p>
                    Woudy est une plateforme numérique éditée par la société WOUDY LIVRAISON SARL, immatriculée au Registre du Commerce et du Crédit Mobilier sous le numéro CI-ABJ-2024-B-14285. Elle permet la mise en relation entre des consommateurs situés à Abidjan et des restaurants partenaires (dont Burger Shop), ainsi que des livreurs urbains géolocalisés.
                  </p>
                  <h4 className="font-bold text-neutral-900 text-sm">2. Commandes et Tarification</h4>
                  <p>
                    Les prix affichés sur le menu de Burger Shop sont stipulés en Francs CFA (FCFA) toutes taxes comprises. Les frais de livraison sont calculés selon la zone de desserte (1 000 FCFA standard à Abidjan, offerts à partir de 10 000 FCFA de commande).
                  </p>
                  <h4 className="font-bold text-neutral-900 text-sm">3. Paiement</h4>
                  <p>
                    Les règlements s'effectuent par Mobile Money (Wave, Orange Money, MTN MoMo, Moov) ou en espèces à la livraison. Le livreur est tenu de remettre un sac scellé après paiement intégral.
                  </p>
                </>
              )}

              {activeLegalModal === 'privacy' && (
                <>
                  <h4 className="font-bold text-neutral-900 text-sm">Protection des données à caractère personnel (Loi CI n° 2013-450)</h4>
                  <p>
                    WOUDY LIVRAISON SARL s'engage à respecter la vie privée des utilisateurs et la confidentialité de leurs données personnelles conformément à la loi ivoirienne n° 2013-450 relative à la protection des données à caractère personnel.
                  </p>
                  <h4 className="font-bold text-neutral-900 text-sm">Données collectées</h4>
                  <p>
                    Les données collectées (nom, numéro de téléphone, commune et adresse de livraison à Abidjan) sont exclusivement utilisées pour l'acheminement des commandes de repas et la communication relative à la livraison.
                  </p>
                </>
              )}

              {activeLegalModal === 'mentions' && (
                <>
                  <h4 className="font-bold text-neutral-900 text-sm">Mentions Légales Officielles</h4>
                  <p><strong>Dénomination :</strong> WOUDY LIVRAISON SARL</p>
                  <p><strong>Forme juridique :</strong> Société à Responsabilité Limitée</p>
                  <p><strong>Capital Social :</strong> 10 000 000 FCFA</p>
                  <p><strong>RCCM :</strong> CI-ABJ-2024-B-14285</p>
                  <p><strong>Identifiant Unique (IDU) :</strong> CI-2024-0028941-K</p>
                  <p><strong>Siège social :</strong> Rue des Jardins, Cocody 2 Plateaux Vallons, Abidjan, Côte d'Ivoire</p>
                  <p><strong>Contact :</strong> info@woudys.com / support@woudys.com / Tél : +225 27 31 94 45 68 / WhatsApp : +225 07 20 58 41 71</p>
                  <p><strong>Hébergement :</strong> Serveurs Cloud sécurisés avec redondance sous surveillance 24/7</p>
                </>
              )}

              {activeLegalModal === 'hygiene' && (
                <>
                  <h4 className="font-bold text-neutral-900 text-sm">Garantie Thermique & Chaîne du Chaud Woudy</h4>
                  <p>
                    Tous les smash burgers et frites de Burger Shop sont cuits minute à la commande. Les emballages alimentaires en carton kraft recyclable sont scellés par un ruban de sécurité inviolable avant d'être déposés dans le sac isotherme chauffé du livreur Woudy.
                  </p>
                  <p>
                    Température garantie à cœur à la remise au client : minimum 65°C.
                  </p>
                </>
              )}

              {activeLegalModal === 'delivery' && (
                <>
                  <h4 className="font-bold text-neutral-900 text-sm">Réseau des Livreurs Woudy</h4>
                  <p>
                    Les livreurs partenaires Woudy sont titulaires du permis de conduire catégorie A en vigueur, formés aux règles de sécurité routière et équipés du kit officiel Woudy (casque homologué, chasuble haute visibilité, boîte de transport isotherme certifiée).
                  </p>
                  <p>
                    Application livreur disponible sur Google Play Store : ci.woudy.livreur.
                  </p>
                </>
              )}
            </div>

            <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex justify-end">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="bg-[#FF5400] text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-[#E04B00] transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>

          </div>
        </div>
      )}

    </footer>
  );
};
