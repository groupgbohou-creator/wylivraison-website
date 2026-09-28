import React from 'react';
import { 
  ShoppingBag, 
  Bike, 
  Store, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Smartphone, 
  CheckCircle2, 
  TrendingUp, 
  Zap,
  MapPin,
  HeartHandshake
} from 'lucide-react';

interface OurServicesSectionProps {
  onSelectLivraison: () => void;
  onSelectLivreur: () => void;
  onSelectRestaurant: () => void;
}

export const OurServicesSection: React.FC<OurServicesSectionProps> = ({
  onSelectLivraison,
  onSelectLivreur,
  onSelectRestaurant
}) => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-neutral-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#FF5400] uppercase tracking-wider">
            <span>Écosystème Woudy Abidjan</span>
            <span aria-hidden="true">·</span>
            <span>3 Solutions Clés</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight font-display">
            Nos Services Dédiés à Abidjan
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Une plateforme intégrée qui connecte consommateurs exigeants, coursiers engagés et restaurateurs passionnés partout à Abidjan.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Woudy Livraison */}
          <div className="group bg-neutral-50 rounded-3xl p-7 sm:p-8 border border-neutral-200/90 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 transition-all flex flex-col justify-between relative overflow-hidden">
            {/* Visual Header */}
            <div>
              <div className="w-14 h-14 rounded-2xl bg-orange-100/80 text-[#FF5400] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <ShoppingBag className="w-7 h-7" />
              </div>
              
              <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                Pour les Gourmets & Entreprises
              </div>
              
              <h3 className="text-2xl font-black text-neutral-900 font-display mb-3">
                Woudy Livraison
              </h3>
              
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                Commandez vos repas préférés auprès des meilleurs spots culinaires d'Abidjan et recevez-les chez vous ou au bureau en moins de 30 minutes chrono.
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-700 mb-8">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0 mt-0.5" />
                  <span><strong>Garantie Chaleur 65°C :</strong> Sacs thermiques chauffants scellés avec bande d'inviolabilité.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0 mt-0.5" />
                  <span><strong>Suivi en temps réel :</strong> Localisation GPS du livreur de la cuisine à votre porte.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0 mt-0.5" />
                  <span><strong>Paiement 100% souple :</strong> Wave, Orange Money, MTN MoMo ou espèces à l'arrivée.</span>
                </li>
              </ul>
            </div>

            {/* Action CTA */}
            <div>
              <button
                onClick={onSelectLivraison}
                className="w-full bg-[#FF5400] hover:bg-[#E04B00] text-white font-extrabold text-sm py-3.5 px-5 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-orange-500/20 active:scale-98"
              >
                <span>Commander un repas maintenant</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Woudy Livreur */}
          <div className="group bg-neutral-900 text-white rounded-3xl p-7 sm:p-8 border border-neutral-800 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all flex flex-col justify-between relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-600/15 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FF5400]/20 text-[#FF5400] border border-[#FF5400]/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Bike className="w-7 h-7" />
              </div>
              
              <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-1">
                Pour les Coursiers Indépendants
              </div>
              
              <h3 className="text-2xl font-black text-white font-display mb-3">
                Woudy Livreur
              </h3>
              
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                Rejoignez la flotte de coursiers la plus respectée et la mieux rémunérée d'Abidjan. Roulez selon vos disponibilités et percevez vos gains chaque semaine.
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-300 mb-8">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0 mt-0.5" />
                  <span><strong>Revenus transparents :</strong> Paiement hebdomadaire sécurisé par Wave ou Mobile Money.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0 mt-0.5" />
                  <span><strong>Équipements fournis :</strong> Sac thermique isotherme rigide homologué et gilet sécurité.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0 mt-0.5" />
                  <span><strong>Liberté totale :</strong> Choisissez vos créneaux et vos communes préférées (Cocody, Plateau...).</span>
                </li>
              </ul>
            </div>

            {/* Action CTA */}
            <div>
              <button
                onClick={onSelectLivreur}
                className="w-full bg-white hover:bg-neutral-100 text-neutral-900 font-extrabold text-sm py-3.5 px-5 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-98"
              >
                <span>Postuler comme Livreur</span>
                <ArrowRight className="w-4 h-4 text-[#FF5400]" />
              </button>
            </div>
          </div>

          {/* Card 3: Woudy Restaurant */}
          <div className="group bg-neutral-50 rounded-3xl p-7 sm:p-8 border border-neutral-200/90 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 transition-all flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-orange-100/80 text-[#FF5400] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Store className="w-7 h-7" />
              </div>
              
              <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                Pour les Restaurateurs & Maquis
              </div>
              
              <h3 className="text-2xl font-black text-neutral-900 font-display mb-3">
                Woudy Partenaire Restaurant
              </h3>
              
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                Développez vos ventes à emporter et touchez de nouveaux clients à Abidjan sans investir dans l'achat de motos ni gérer des chauffeurs.
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-700 mb-8">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0 mt-0.5" />
                  <span><strong>Logistique 100% gérée :</strong> Des livreurs Woudy arrivent dès que la commande est prête.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0 mt-0.5" />
                  <span><strong>Matériel & Tablette :</strong> Tablette tactile et logiciel de commande installés gratuitement.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0 mt-0.5" />
                  <span><strong>Visibilité maximale :</strong> Présentez votre carte à des milliers de clients gourmets actifs.</span>
                </li>
              </ul>
            </div>

            {/* Action CTA */}
            <div className="space-y-2">
              <a
                href="http://213.199.59.185:3000/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#FF5400] hover:bg-[#E04B00] text-white font-extrabold text-sm py-3.5 px-5 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-98"
              >
                <span>Devenez restaurant partenaire</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={onSelectRestaurant}
                className="w-full text-center text-xs text-neutral-500 hover:text-neutral-900 font-semibold py-1 transition-colors cursor-pointer"
              >
                Ou remplir la demande en ligne ci-dessous ↓
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
