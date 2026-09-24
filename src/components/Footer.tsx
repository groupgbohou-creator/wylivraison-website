import React from 'react';
import { 
  Bike, 
  MapPin, 
  Mail, 
  Phone, 
  Apple, 
  Play, 
  MessageCircle, 
  FileText, 
  ShieldCheck, 
  Heart,
  ChevronRight
} from 'lucide-react';
import { WoudyLogoMark } from './WoudyLogo';

interface FooterProps {
  onOpenAppModal: () => void;
  onOpenPrpModal: () => void;
  onOpenLegal: (type: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAppModal,
  onOpenPrpModal,
  onOpenLegal
}) => {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800">
      
      {/* Top CTA Banner */}
      <div className="bg-[#FF5400] text-white py-8 px-4 sm:px-6 lg:px-8 border-b border-[#E04B00]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-100">
              Prêt à vous régaler ?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display mt-0.5 text-white">
              Commandez votre premier repas en 30 minutes chrono
            </h3>
            <p className="text-xs sm:text-sm text-orange-100 mt-1">
              Disponible à Cocody, 2 Plateaux, Angré et Zone 3. Scellé isotherme garanti.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenAppModal}
              className="bg-neutral-950 text-white hover:bg-neutral-900 font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md cursor-pointer active:scale-98"
            >
              Télécharger l'App Woudy
            </button>
            <a
              href="https://wa.me/2250720584171?text=Bonjour%20Woudy%2C%20je%20veux%20commander"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600/90 hover:bg-orange-700 text-white border border-orange-300 font-semibold text-sm px-5 py-3 rounded-xl transition-all cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp : +225 07 20 58 41 71</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-neutral-900 border border-neutral-800 text-[#FF5400] flex items-center justify-center p-1.5 shadow-md">
                <WoudyLogoMark className="w-7 h-7" color="#FF5400" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight font-display text-white">
                  WOUDY
                </span>
                <span className="text-[#FF5400] text-xs px-1.5 py-0.5 bg-orange-500/10 border border-orange-500/20 rounded uppercase font-bold tracking-wider">
                  Livraison
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Plateforme de livraison hyperlocale de nourriture à Abidjan. Notre engagement : la meilleure cuisine de quartier livrée chaude en 25 à 40 minutes grâce à des circuits courts et des coursiers formés.
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-300">
              <MapPin className="w-4 h-4 text-[#FF5400] shrink-0" />
              <span>Rue des Jardins, Cocody 2 Plateaux Vallons, Abidjan 🇨🇮</span>
            </div>

            {/* App Store Buttons */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={onOpenAppModal}
                className="flex items-center gap-2 px-3 py-2 bg-neutral-900 hover:bg-neutral-800 rounded-xl border border-neutral-700 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                <Apple className="w-4 h-4 fill-current" />
                <span>App Store</span>
              </button>
              <a
                href="https://play.google.com/store/apps/details?id=ci.woudy.livreur&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-neutral-900 hover:bg-neutral-800 rounded-xl border border-neutral-700 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                <Play className="w-4 h-4 fill-orange-400 text-orange-400" />
                <span>Google Play</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation rapide */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#comment-ca-marche" className="hover:text-[#FF5400] transition-colors">
                  Comment ça marche
                </a>
              </li>
              <li>
                <a href="#restaurants" className="hover:text-[#FF5400] transition-colors">
                  Catalogue des Restaurants
                </a>
              </li>
              <li>
                <a href="#couverture" className="hover:text-[#FF5400] transition-colors">
                  Zone de Couverture
                </a>
              </li>
              <li>
                <a href="#avantages" className="hover:text-[#FF5400] transition-colors">
                  Pourquoi Woudy
                </a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-[#FF5400] transition-colors">
                  À Propos de nous
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF5400] transition-colors">
                  Nous Contacter
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quartiers desservis */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Zones de Cocody
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#couverture" className="hover:text-[#FF5400] transition-colors">
                  Deux Plateaux & Vallons
                </a>
              </li>
              <li>
                <a href="#couverture" className="hover:text-[#FF5400] transition-colors">
                  Angré 8e Tranche & Château
                </a>
              </li>
              <li>
                <a href="#couverture" className="hover:text-[#FF5400] transition-colors">
                  Cocody Centre & Danga
                </a>
              </li>
              <li>
                <a href="#couverture" className="hover:text-[#FF5400] transition-colors">
                  Riviera (1 à 4) & Golf
                </a>
              </li>
              <li>
                <a href="#couverture" className="hover:text-[#FF5400] transition-colors">
                  Zone 3 / Liaison Express
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Légal & Documentation Projet */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Documentation & Légal
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-[#FF5400] transition-colors cursor-pointer text-left"
                >
                  Conditions d'utilisation (CGU)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-[#FF5400] transition-colors cursor-pointer text-left"
                >
                  Politique de Confidentialité
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrpModal}
                  className="hover:text-orange-400 text-orange-400/90 font-medium transition-colors cursor-pointer flex items-center gap-1 text-left"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>PRP v1.0 (Septembre 2026)</span>
                </button>
              </li>
              <li className="pt-2 text-[11px] text-neutral-500">
                Horaires de service :<br />
                <strong>10h00 - 23h30</strong> 7j/7
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-12 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Woudy Livraison SARL. Tous droits réservés. Abidjan, Côte d'Ivoire.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-neutral-400">
              Conçu pour Cocody avec fierté 🇨🇮
            </span>
            <button
              onClick={onOpenPrpModal}
              className="text-neutral-400 hover:text-white underline cursor-pointer text-[11px]"
            >
              Plan de Réalisation du Produit
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
