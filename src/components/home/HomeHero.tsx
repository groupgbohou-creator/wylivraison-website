import React, { useState } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  MapPin, 
  Smartphone, 
  ArrowRight, 
  Clock, 
  Search, 
  ShoppingBag,
  Sparkles,
  Bike,
  Store,
  ChevronRight,
  Flame,
  CheckCircle2
} from 'lucide-react';

interface HomeHeroProps {
  onOrderNow: () => void;
  onExploreServices: () => void;
  onOpenDownload: () => void;
  onOpenPartners: (tab?: 'courier' | 'restaurant') => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  onOrderNow,
  onExploreServices,
  onOpenDownload,
  onOpenPartners,
}) => {
  const [addressQuery, setAddressQuery] = useState('');
  const [addressFeedback, setAddressFeedback] = useState<{
    status: 'covered' | 'expanding';
    message: string;
    details: string;
  } | null>(null);

  const handleQuickCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!addressQuery.trim()) return;

    const lower = addressQuery.toLowerCase();
    const coveredAreas = [
      'cocody', 'plateaux', 'plateau', 'vallon', 'angre', 'angré', 
      'riviera', 'danga', 'aghien', 'zone 3', 'zone 4', 'marcory', 
      'treichville', 'yopougon', 'koumassi'
    ];

    const isMatch = coveredAreas.some(area => lower.includes(area));

    if (isMatch) {
      setAddressFeedback({
        status: 'covered',
        message: 'Votre zone est couverte en 25 à 35 minutes chrono !',
        details: 'Courriers équipés de sacs thermiques scellés à 65°C disponibles immédiatement.'
      });
    } else {
      setAddressFeedback({
        status: 'expanding',
        message: 'Quartier en cours de déploiement prioritaire !',
        details: 'Commandez dès maintenant : nos coursiers desservent tout le Grand Abidjan sur demande.'
      });
    }
  };

  return (
    <section id="accueil" className="relative overflow-hidden bg-gradient-to-b from-orange-50/50 via-white to-neutral-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-200/70">
      
      {/* Background Ambience Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-24 -left-20 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-12 -right-20 w-96 h-96 bg-amber-200/35 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Live Indicator Kicker - Anti-slop clean typography */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-800">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#FF5400] animate-pulse"></span>
              <span className="text-[#FF5400] uppercase tracking-wider">Plateforme Officielle Woudy</span>
              <span className="text-neutral-300" aria-hidden="true">·</span>
              <span className="text-neutral-600 font-medium">Livraison Partout à Abidjan</span>
            </div>

            {/* Main Punchy Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight font-display leading-[1.12]">
              La meilleure nourriture d'Abidjan, livrée chaude en <span className="text-[#FF5400]">30 minutes</span>.
            </h1>

            {/* Subtitle with Real Local Anchor */}
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
              Fini les repas tièdes ou les livreurs perdus. Woudy connecte les gourmets, les meilleurs restaurants et une flotte de coursiers professionnels à <strong className="text-neutral-900 font-bold">Cocody, Deux-Plateaux, Riviera, Marcory, Plateau et tout Abidjan</strong> dans des sacs thermiques scellés à 65°C.
            </p>

            {/* Address Eligibility Verification Widget */}
            <div className="w-full max-w-xl bg-white p-2 sm:p-2.5 rounded-2xl shadow-lg border border-neutral-200/90 focus-within:border-[#FF5400] focus-within:ring-2 focus-within:ring-orange-500/20 transition-all">
              <form onSubmit={handleQuickCheck} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1 flex items-center">
                  <MapPin className="w-5 h-5 text-[#FF5400] absolute left-3.5 pointer-events-none" />
                  <input
                    type="text"
                    value={addressQuery}
                    onChange={(e) => {
                      setAddressQuery(e.target.value);
                      if (addressFeedback) setAddressFeedback(null);
                    }}
                    placeholder="Votre commune ou quartier (ex: Cocody Vallons, Angré, Zone 4...)"
                    className="w-full pl-11 pr-3 py-3 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none rounded-xl"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#FF5400] hover:bg-[#E04B00] text-white text-xs sm:text-sm font-extrabold px-5 py-3 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm shadow-orange-500/20 whitespace-nowrap active:scale-98"
                >
                  <Search className="w-4 h-4" />
                  <span>Tester mon adresse</span>
                </button>
              </form>

              {addressFeedback && (
                <div className={`mt-2.5 px-3.5 py-2.5 text-xs font-semibold rounded-xl border flex items-start gap-2 animate-fadeIn ${
                  addressFeedback.status === 'covered'
                    ? 'bg-emerald-50 text-emerald-950 border-emerald-200'
                    : 'bg-amber-50 text-amber-950 border-amber-200'
                }`}>
                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                    addressFeedback.status === 'covered' ? 'text-emerald-600' : 'text-amber-600'
                  }`} />
                  <div>
                    <span className="font-extrabold block">{addressFeedback.message}</span>
                    <span className="text-[11px] font-normal text-neutral-600">{addressFeedback.details}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onOrderNow}
                className="flex items-center gap-2.5 bg-[#FF5400] hover:bg-[#E04B00] text-white font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md shadow-orange-500/25 hover:shadow-lg transition-all cursor-pointer active:scale-98"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Commander maintenant</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="flex items-center gap-2 bg-white hover:bg-orange-50/50 text-neutral-800 border border-neutral-300 hover:border-orange-300 font-bold text-sm sm:text-base px-5 py-3.5 rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <span>Découvrir nos 3 services</span>
              </button>

              <button
                onClick={() => onOpenPartners('courier')}
                className="flex items-center gap-1.5 text-xs font-extrabold text-neutral-700 hover:text-[#FF5400] px-3 py-3 rounded-xl hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <Bike className="w-4 h-4 text-[#FF5400]" />
                <span>Devenir Livreur</span>
              </button>

              <a
                href="http://213.199.59.185:3000/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-extrabold text-neutral-800 hover:text-[#FF5400] px-3 py-3 rounded-xl hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <Store className="w-4 h-4 text-[#FF5400]" />
                <span>Devenez restaurant partenaire</span>
              </a>
            </div>

            {/* Trust Micro-Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 pt-2 text-xs text-neutral-600 border-t border-neutral-200/80 w-full">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF5400] shrink-0" />
                <span><strong>25-35 min</strong> délai moyen</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF5400] shrink-0" />
                <span><strong>Sac scellé 65°C</strong> thermique</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Zap className="w-4 h-4 text-[#FF5400] shrink-0" />
                <span><strong>Wave & Orange Money</strong> 1-clic</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 bg-white">
                <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80"
                    alt="Smash Burger artisanal Woudy Abidjan"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#FF5400] text-white text-[11px] font-black px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 fill-current" />
                      N°1 Smash Burgers Abidjan
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-black font-display leading-tight">
                      Burger Shop × Woudy
                    </h3>
                    <p className="text-xs text-neutral-300 mt-0.5">
                      Cocody 2 Plateaux Vallons · Rue des Jardins
                    </p>
                  </div>
                </div>

                {/* Micro Order Summary Simulator */}
                <div className="p-4 sm:p-5 space-y-3 bg-white">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-neutral-800">Spécialité du chef :</span>
                    <span className="font-extrabold text-[#FF5400]">4 900 FCFA</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-orange-50/70 border border-orange-100">
                    <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-neutral-200">
                      <img
                        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=80"
                        alt="Smash Beef Burger Double"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-black text-neutral-900 truncate">Smash Beef Burger Double</h4>
                      <p className="text-[11px] text-neutral-500 truncate">Bœuf Angus, cheddar fondu & sauce secrète</p>
                    </div>
                    <button
                      onClick={onOrderNow}
                      className="bg-[#FF5400] hover:bg-[#E04B00] text-white text-xs font-extrabold px-3 py-1.5 rounded-lg transition-colors cursor-pointer shrink-0"
                    >
                      Ajouter
                    </button>
                  </div>

                  {/* 3 Interactive Quick Badges */}
                  <div className="flex items-center justify-between pt-1 text-[11px] text-neutral-500 font-medium">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Ouvert 10h-23h30
                    </span>
                    <span>🛵 Livré en 25 min</span>
                    <span>⭐ 4.8 / 5 (864 avis)</span>
                  </div>
                </div>
              </div>

              {/* Floating Testimonial Micro-Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-neutral-200/90 max-w-[240px] animate-slideUp hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-orange-100 text-[#FF5400] flex items-center justify-center font-black text-xs">
                    K
                  </div>
                  <div>
                    <span className="text-xs font-black text-neutral-900 block leading-none">Kouassi M.</span>
                    <span className="text-[10px] text-neutral-500">Cocody Riviera 2</span>
                  </div>
                </div>
                <p className="text-[11px] text-neutral-600 mt-1.5 italic leading-snug">
                  « Le burger est arrivé brûlant et les frites bien croustillantes ! Service au top. »
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
