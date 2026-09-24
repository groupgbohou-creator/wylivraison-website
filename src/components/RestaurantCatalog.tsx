import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Bike, 
  MapPin, 
  ChevronRight, 
  ChefHat, 
  Sparkles,
  SlidersHorizontal,
  Info
} from 'lucide-react';
import { RESTAURANTS_DATA } from '../data/mockData';
import { Restaurant } from '../types';
import { RestaurantDetailModal } from './RestaurantDetailModal';

interface RestaurantCatalogProps {
  onOpenAppModal: () => void;
}

export const RestaurantCatalog: React.FC<RestaurantCatalogProps> = ({ onOpenAppModal }) => {
  const [selectedCuisine, setSelectedCuisine] = useState<string>('Tous');
  const [selectedZone, setSelectedZone] = useState<string>('Toutes les zones');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeRestaurant, setActiveRestaurant] = useState<Restaurant | null>(null);

  const cuisines = [
    'Tous',
    'Ivoirien & Braisés',
    'Burgers & Street',
    'Africain Moderne',
    'Italien & Pizza',
    'Healthy & Jus locaux'
  ];

  const zones = [
    'Toutes les zones',
    '2 Plateaux',
    'Angré',
    'Cocody Centre',
    'Riviera',
    'Zone 3'
  ];

  const filteredRestaurants = RESTAURANTS_DATA.filter((restaurant) => {
    const matchesCuisine = selectedCuisine === 'Tous' || restaurant.cuisine === selectedCuisine;
    const matchesZone = selectedZone === 'Toutes les zones' || restaurant.zone === selectedZone;
    const matchesSearch = 
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.neighborhood.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCuisine && matchesZone && matchesSearch;
  });

  return (
    <section id="restaurants" className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-orange-600 bg-orange-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Restaurants Partenaires
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-display">
              La crème culinaire de Cocody
            </h2>
            <p className="text-base text-neutral-600 mt-2 max-w-2xl">
              Des maquis réputés aux adresses branchées des 2 Plateaux et de l’Angré. 
              Sélectionnés pour leur hygiène, leur régularité et leur rapidité de préparation.
            </p>
          </div>

          <div className="text-xs text-neutral-500 font-medium">
            <span className="font-bold text-neutral-900">{filteredRestaurants.length}</span> restaurants disponibles
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-neutral-200 shadow-xs mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un restaurant, un plat (alloco, tchep, burger, pizza...)"
                className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 rounded-xl text-sm border border-neutral-200 focus:outline-none focus:border-[#FF5400] focus:bg-white"
              />
            </div>

            {/* Zone Selector */}
            <div className="w-full md:w-56">
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="w-full py-2.5 px-3.5 bg-neutral-50 rounded-xl text-sm border border-neutral-200 focus:outline-none focus:border-[#FF5400] text-neutral-800 font-medium cursor-pointer"
              >
                {zones.map((zone) => (
                  <option key={zone} value={zone}>
                    {zone}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Cuisine Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-neutral-400 font-semibold text-xs flex items-center gap-1 shrink-0 pl-1">
              <Filter className="w-3.5 h-3.5" />
              Cuisine :
            </span>
            {cuisines.map((cuisine) => (
              <button
                key={cuisine}
                onClick={() => setSelectedCuisine(cuisine)}
                className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCuisine === cuisine
                    ? 'bg-[#FF5400] text-white shadow-xs shadow-orange-500/20'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {cuisine}
              </button>
            ))}
          </div>
        </div>

        {/* Restaurant Cards Grid */}
        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-neutral-200 p-8">
            <ChefHat className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-neutral-800">Aucun restaurant trouvé</h3>
            <p className="text-sm text-neutral-500 mt-1">
              Essayez de modifier votre recherche ou vos filtres de quartier.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCuisine('Tous');
                setSelectedZone('Toutes les zones');
              }}
              className="mt-4 px-4 py-2 bg-orange-100 text-orange-800 text-xs font-bold rounded-xl hover:bg-orange-200 transition-colors cursor-pointer"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-orange-400/80 transition-all duration-300 flex flex-col group"
              >
                {/* Image & Badges */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-[#FF5400]/95 backdrop-blur-md text-white font-bold text-xs shadow-xs">
                      {restaurant.cuisine}
                    </span>
                    <div className="flex items-center gap-1 bg-white/95 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-black text-neutral-900 shadow-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span>{restaurant.rating}</span>
                      <span className="text-[10px] text-neutral-500 font-normal">({restaurant.reviewCount})</span>
                    </div>
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <div className="flex items-center gap-1 text-xs font-semibold drop-shadow">
                      <MapPin className="w-3.5 h-3.5 text-orange-400" />
                      <span>{restaurant.neighborhood}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-neutral-900/80 px-2 py-0.5 rounded text-[11px] font-medium backdrop-blur-xs">
                      <Clock className="w-3.5 h-3.5 text-orange-400" />
                      <span>{restaurant.deliveryTimeMin}-{restaurant.deliveryTimeMax} min</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-black text-neutral-900 tracking-tight font-display group-hover:text-[#FF5400] transition-colors">
                      {restaurant.name}
                    </h3>
                    <p className="text-xs text-neutral-500 line-clamp-2 mt-1">
                      {restaurant.tagline}
                    </p>

                    {/* Specialties chips */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {restaurant.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-md"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer & Actions */}
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <div className="text-xs">
                      <span className="text-neutral-400 block text-[10px] uppercase font-bold tracking-wider">Livraison dès</span>
                      <span className="font-extrabold text-neutral-900">
                        {restaurant.deliveryFee.toLocaleString()} FCFA
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveRestaurant(restaurant)}
                        className="text-xs font-bold px-3 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors cursor-pointer"
                      >
                        Voir la carte
                      </button>
                      <button
                        onClick={onOpenAppModal}
                        className="text-xs font-bold px-3 py-2 rounded-xl bg-[#FF5400] hover:bg-[#E04B00] text-white transition-colors cursor-pointer flex items-center gap-1 shadow-xs shadow-orange-500/20"
                      >
                        <span>Commander</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

        {/* Modal for Details */}
        <RestaurantDetailModal
          restaurant={activeRestaurant}
          onClose={() => setActiveRestaurant(null)}
          onOpenAppModal={onOpenAppModal}
        />

      </div>
    </section>
  );
};
