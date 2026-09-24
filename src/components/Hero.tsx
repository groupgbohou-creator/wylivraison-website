import React, { useState } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  MapPin, 
  Smartphone, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Clock, 
  Search, 
  ChefHat,
  ShoppingBag,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onOpenAppModal: () => void;
  onExploreRestaurants: () => void;
  onCheckAddress: (address: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAppModal,
  onExploreRestaurants,
  onCheckAddress,
}) => {
  const [addressQuery, setAddressQuery] = useState('');
  const [addressFeedback, setAddressFeedback] = useState<string | null>(null);

  const handleQuickCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!addressQuery.trim()) return;

    const lower = addressQuery.toLowerCase();
    if (
      lower.includes('cocody') || 
      lower.includes('plateaux') || 
      lower.includes('vallon') || 
      lower.includes('angr') || 
      lower.includes('riviera') || 
      lower.includes('danga') || 
      lower.includes('aghien') || 
      lower.includes('zone 3')
    ) {
      setAddressFeedback('✅ Excellente nouvelle ! Votre adresse est couverte en 25-35 minutes.');
    } else {
      setAddressFeedback('ℹ️ Quartier en cours d\'extension. Cocody, 2 Plateaux, Angré et Zone 3 sont 100% actifs !');
    }
    onCheckAddress(addressQuery);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-neutral-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-200/60">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-100/60 rounded-full blur-3xl"></div>
        <div className="absolute top-10 -right-20 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Form */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-900 border border-orange-200 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#FF5400] animate-ping"></span>
              <span className="font-bold text-[#FF5400]">Livraison Hyperlocale à Abidjan</span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-700">Cocody en priorité</span>
            </div>

            {/* Main Tagline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight font-display leading-[1.15]">
              La meilleure nourriture de <span className="text-[#FF5400] underline decoration-neutral-800 decoration-wavy decoration-2 underline-offset-4">Cocody</span>, livrée en <span className="text-[#FF5400]">30 minutes</span>.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl leading-relaxed">
              Fini les livraisons froides et les livreurs perdus dans les embouteillages d'Abidjan. 
              Woudy sélectionne les meilleurs restaurants de quartier aux <strong className="text-neutral-800 font-semibold">Deux Plateaux, Angré, Cocody Centre et Zone 3</strong> pour une livraison express, chaude et hermétiquement scellée.
            </p>

            {/* Quick Address Checker */}
            <div className="w-full max-w-xl bg-white p-2.5 rounded-2xl shadow-lg border border-neutral-200/90 focus-within:border-[#FF5400] focus-within:ring-2 focus-within:ring-orange-500/20 transition-all">
              <form onSubmit={handleQuickCheck} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1 flex items-center">
                  <MapPin className="w-5 h-5 text-[#FF5400] absolute left-3 pointer-events-none" />
                  <input
                    type="text"
                    value={addressQuery}
                    onChange={(e) => {
                      setAddressQuery(e.target.value);
                      if (addressFeedback) setAddressFeedback(null);
                    }}
                    placeholder="Votre quartier (ex: Vallons, Angré 8e, Danga...)"
                    className="w-full pl-10 pr-3 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none rounded-xl"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#FF5400] hover:bg-[#E04B00] text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm shadow-orange-500/20 whitespace-nowrap active:scale-98"
                >
                  <Search className="w-4 h-4" />
                  <span>Vérifier mon adresse</span>
                </button>
              </form>
              {addressFeedback && (
                <div className="mt-2.5 px-3 py-2 text-xs font-medium rounded-lg bg-orange-50 text-orange-950 border border-orange-200 flex items-center gap-2 animate-fadeIn">
                  <span>{addressFeedback}</span>
                </div>
              )}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenAppModal}
                className="flex items-center gap-3 bg-[#FF5400] hover:bg-[#E04B00] text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-md shadow-orange-500/25 hover:shadow-lg transition-all cursor-pointer active:scale-98"
              >
                <Smartphone className="w-5 h-5" />
                <span>Télécharger l'application</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreRestaurants}
                className="flex items-center gap-2 bg-white hover:bg-orange-50/50 text-neutral-800 border border-neutral-300 hover:border-orange-300 font-semibold text-base px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <ChefHat className="w-5 h-5 text-[#FF5400]" />
                <span>Découvrir les restaurants</span>
              </button>
            </div>

            {/* Micro Trust Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 pt-3 text-xs sm:text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0" />
                <span>25 à 40 min garanti</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0" />
                <span>Emballage thermique scellé</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0" />
                <span>Pas de frais surprises</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Hero Mockup & Interactive Order Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-amber-500/20 rounded-3xl filter blur-2xl -z-10 transform scale-95"></div>

              {/* Main App Mockup Card */}
              <div className="bg-white rounded-3xl shadow-2xl border border-neutral-200/90 overflow-hidden">
                
                {/* Smartphone-like Top Bar */}
                <div className="bg-neutral-900 text-white px-5 py-3 flex items-center justify-between text-xs">
                  <span className="font-semibold text-neutral-200">12:35</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF5400] bg-neutral-800 px-1.5 py-0.5 rounded border border-orange-500/30">
                      WOUDY LIVE
                    </span>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5400] animate-pulse"></div>
                  </div>
                </div>

                {/* Live Order Simulation Banner */}
                <div className="p-4 bg-gradient-to-r from-neutral-950 to-neutral-900 text-white border-b border-neutral-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-medium text-orange-400 uppercase tracking-wider">
                        Commande en cours d'acheminement
                      </p>
                      <h3 className="text-lg font-extrabold tracking-tight font-display text-white">
                        Chez Ambroise Cocody
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/20 backdrop-blur-md flex flex-col items-center justify-center border border-orange-500/30">
                      <span className="text-base font-black text-[#FF5400]">14</span>
                      <span className="text-[9px] uppercase font-semibold text-orange-300">min</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-3 space-y-1">
                    <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                      <div className="bg-[#FF5400] h-2 rounded-full w-3/4 animate-pulse"></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-neutral-400 pt-0.5">
                      <span className="text-orange-300">Préparé & Scellé</span>
                      <span className="font-bold text-white">En route aux Vallons</span>
                      <span>Livré</span>
                    </div>
                  </div>
                </div>

                {/* Dish preview visual */}
                <div className="p-4 space-y-4">
                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                    <img 
                      src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=160&q=80" 
                      alt="Demi-poulet braisé" 
                      className="w-16 h-16 rounded-xl object-cover shadow-sm"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-neutral-900 truncate">
                          Demi-Poulet Braisé & Alloco
                        </h4>
                        <span className="text-xs font-black text-[#FF5400]">
                          4 500 FCFA
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 line-clamp-1">
                        Alloco banane mûre, piment doux & oignons
                      </p>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-[10px] bg-orange-50 text-[#FF5400] font-bold px-2 py-0.5 rounded-md border border-orange-200">
                          Emballage Isotherme 🔒
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Courier Info */}
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-neutral-900 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FF5400] text-white flex items-center justify-center font-bold text-sm shadow-inner">
                        BK
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-xs font-bold text-white">Bakary K.</p>
                          <span className="text-[10px] text-orange-400 bg-neutral-800 px-1.5 py-0.5 rounded border border-orange-500/30">
                            Certifié
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-400">
                          Scooter Woudy #04 • 2 Plateaux
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-amber-400 text-xs font-bold justify-end">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>4.96</span>
                      </div>
                      <span className="text-[10px] text-neutral-400">380+ courses</span>
                    </div>
                  </div>

                  {/* Button Inside Mockup */}
                  <button 
                    onClick={onOpenAppModal}
                    className="w-full py-2.5 bg-[#FF5400] hover:bg-[#E04B00] text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-orange-500/20"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Commander maintenant sur Woudy</span>
                  </button>
                </div>

              </div>

              {/* Floating Customer Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-neutral-200/90 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5 text-[#FF5400]" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs font-extrabold text-neutral-900">
                    <span>28 min</span>
                    <span className="text-neutral-400 font-normal">temps moyen</span>
                  </div>
                  <p className="text-[11px] text-neutral-500">Record à Cocody Vallons</p>
                </div>
              </div>

              {/* Floating Review Badge */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white p-3 rounded-2xl shadow-xl border border-neutral-200/90 flex items-center gap-2">
                <div className="flex text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <span className="text-xs font-bold text-neutral-800">4.9 / 5</span>
              </div>

            </div>

          </div>

        </div>

        {/* Value Prop Stats Strip */}
        <div className="mt-14 pt-8 border-t border-neutral-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white border border-neutral-200/70 shadow-xs">
            <span className="text-2xl sm:text-3xl font-black text-[#FF5400] font-display">25-40 min</span>
            <p className="text-xs sm:text-sm font-semibold text-neutral-800 mt-1">Délai chrono garanti</p>
            <p className="text-[11px] text-neutral-500">Pas de détours, direct cuisine-table</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-neutral-200/70 shadow-xs">
            <span className="text-2xl sm:text-3xl font-black text-[#FF5400] font-display">100% Cocody</span>
            <p className="text-xs sm:text-sm font-semibold text-neutral-800 mt-1">Focus hyper-local</p>
            <p className="text-[11px] text-neutral-500">2 Plateaux, Angré, Danga, Riviera</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-neutral-200/70 shadow-xs">
            <span className="text-2xl sm:text-3xl font-black text-neutral-900 font-display">0 FCFA</span>
            <p className="text-xs sm:text-sm font-semibold text-neutral-800 mt-1">Frais cachés</p>
            <p className="text-[11px] text-neutral-500">Tarif transparent dès 800 FCFA</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-neutral-200/70 shadow-xs">
            <span className="text-2xl sm:text-3xl font-black text-[#FF5400] font-display">100% Hermétique</span>
            <p className="text-xs sm:text-sm font-semibold text-neutral-800 mt-1">Emballage scellé</p>
            <p className="text-[11px] text-neutral-500">Chaud, propre, aucune éclaboussure</p>
          </div>
        </div>

      </div>
    </section>
  );
};
