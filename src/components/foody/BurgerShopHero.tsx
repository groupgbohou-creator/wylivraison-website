import React from 'react';
import { 
  Star, 
  Clock, 
  MapPin, 
  Info, 
  ShieldCheck, 
  Bike, 
  Tag, 
  ChevronRight,
  Share2,
  Heart,
  Flame
} from 'lucide-react';
import { Restaurant } from '../../types';

interface BurgerShopHeroProps {
  restaurant: Restaurant;
  onOpenStoreInfo: () => void;
  onSelectCategory: (cat: string) => void;
}

export const BurgerShopHero: React.FC<BurgerShopHeroProps> = ({
  restaurant,
  onOpenStoreInfo,
  onSelectCategory
}) => {
  return (
    <section className="bg-white border-b border-neutral-200">
      {/* Breadcrumb Trail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-neutral-500 flex items-center gap-1.5 flex-wrap">
        <a href="#" className="hover:text-[#FF5400] transition-colors">Accueil</a>
        <ChevronRight className="w-3 h-3 text-neutral-400" />
        <a href="#" className="hover:text-[#FF5400] transition-colors">Abidjan</a>
        <ChevronRight className="w-3 h-3 text-neutral-400" />
        <span className="text-neutral-500">Livraison Partout à Abidjan</span>
        <ChevronRight className="w-3 h-3 text-neutral-400" />
        <a href="#" className="hover:text-[#FF5400] transition-colors">Burgers & Street Food</a>
        <ChevronRight className="w-3 h-3 text-neutral-400" />
        <span className="text-neutral-900 font-bold">{restaurant.name}</span>
      </div>

      {/* Main Cover Banner & Info Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        
        {/* Cover Photo */}
        <div className="relative h-48 sm:h-64 md:h-72 w-full rounded-3xl overflow-hidden shadow-sm border border-neutral-200/80">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent"></div>

          {/* Floating Badges on Banner */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="bg-[#FF5400] text-white text-xs font-black px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 fill-current" />
              N°1 Smash Burgers Abidjan
            </span>
            <span className="bg-neutral-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-neutral-700">
              Certifié Halal & Bœuf Angus
            </span>
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Burger Shop sur Woudy Livraison',
                    url: window.location.href,
                  }).catch(() => {});
                } else {
                  alert('Lien du menu Burger Shop copié dans votre presse-papier !');
                }
              }}
              className="p-2.5 rounded-full bg-white/90 hover:bg-white text-neutral-800 backdrop-blur-md shadow-md transition-all cursor-pointer"
              title="Partager ce restaurant"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => alert('Burger Shop a été ajouté à vos favoris Woudy !')}
              className="p-2.5 rounded-full bg-white/90 hover:bg-white text-neutral-800 hover:text-red-500 backdrop-blur-md shadow-md transition-all cursor-pointer"
              title="Ajouter aux favoris"
            >
              <Heart className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Title on Banner (Mobile/Tablet look) */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div className="text-white">
              <div className="flex items-center gap-2 text-xs text-orange-300 font-semibold mb-1">
                <span className="inline-block w-2 h-2 rounded-full bg-[#FF5400] animate-pulse"></span>
                <span>Ouvert • Prépare les commandes en direct</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white drop-shadow-md">
                {restaurant.name}
              </h1>
            </div>
          </div>
        </div>

        {/* Restaurant Details Bar (Foody Cyprus exact metrics bar) */}
        <div className="mt-4 bg-white rounded-2xl p-4 sm:p-5 border border-neutral-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Left: Tags, Ratings & Description */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 flex-wrap">
              {/* Rating */}
              <div className="flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-1 rounded-xl font-bold text-xs">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{restaurant.rating}</span>
                <span className="text-neutral-500 font-normal">({restaurant.reviewCount} avis vérifiés)</span>
              </div>

              {/* Tags */}
              <span className="text-xs text-neutral-600 font-medium">
                Burgers • Smash Burgers • Fast Food Gourmet • Frites Locales
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl leading-relaxed">
              {restaurant.tagline}. Viande de bœuf Black Angus écrasée minute sur plaque brûlante, pain brioché artisanal toasté et sauces secrètes de Cocody.
            </p>
          </div>

          {/* Right: Key Delivery Metrics */}
          <div className="flex items-center gap-4 sm:gap-6 border-t md:border-t-0 md:border-l border-neutral-200 pt-3 md:pt-0 md:pl-6 shrink-0">
            {/* Delivery Time */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#FF5400] flex items-center justify-center shrink-0 border border-orange-200">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-neutral-500 block uppercase font-bold">Délai moyen</span>
                <span className="text-xs sm:text-sm font-extrabold text-neutral-900">
                  {restaurant.deliveryTimeMin}-{restaurant.deliveryTimeMax} min
                </span>
              </div>
            </div>

            {/* Delivery Fee */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#FF5400] flex items-center justify-center shrink-0 border border-orange-200">
                <Bike className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-neutral-500 block uppercase font-bold">Livraison Woudy</span>
                <span className="text-xs sm:text-sm font-extrabold text-neutral-900">
                  {restaurant.deliveryFee.toLocaleString('fr-FR')} F
                </span>
              </div>
            </div>

            {/* Min Order */}
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0 border border-neutral-200">
                <Tag className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-neutral-500 block uppercase font-bold">Commande min.</span>
                <span className="text-xs sm:text-sm font-extrabold text-neutral-900">
                  {restaurant.minOrder.toLocaleString('fr-FR')} F
                </span>
              </div>
            </div>

            {/* Info Button */}
            <button
              onClick={onOpenStoreInfo}
              className="p-2.5 rounded-xl border border-neutral-200 hover:border-[#FF5400] hover:text-[#FF5400] text-neutral-600 transition-colors cursor-pointer"
              title="Informations du restaurant, horaires et allergènes"
            >
              <Info className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Promo Banner Deal */}
        <div className="mt-3 bg-gradient-to-r from-orange-500 to-[#FF5400] text-white p-3 sm:p-4 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0 text-white">
              <Tag className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-black tracking-wide uppercase bg-white/25 px-2 py-0.5 rounded text-white mr-2">
                Offre Spéciale Woudy
              </span>
              <span className="text-xs sm:text-sm font-extrabold">
                -15% sur tous les Smash Burgers avec le code : <strong className="underline underline-offset-2">WOUDY15</strong>
              </span>
            </div>
          </div>
          <button
            onClick={() => onSelectCategory('Smash Burgers')}
            className="w-full sm:w-auto bg-white hover:bg-neutral-100 text-[#FF5400] text-xs font-extrabold px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-xs"
          >
            Voir les Smash Burgers
          </button>
        </div>

      </div>
    </section>
  );
};
