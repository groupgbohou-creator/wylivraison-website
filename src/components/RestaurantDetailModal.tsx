import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Clock, 
  MapPin, 
  Bike, 
  ShoppingBag, 
  Check, 
  Plus,
  Sparkles,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { Restaurant, Dish } from '../types';

interface RestaurantDetailModalProps {
  restaurant: Restaurant | null;
  onClose: () => void;
  onOpenAppModal: () => void;
}

export const RestaurantDetailModal: React.FC<RestaurantDetailModalProps> = ({
  restaurant,
  onClose,
  onOpenAppModal
}) => {
  const [cart, setCart] = useState<{ dish: Dish; quantity: number }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [orderNotice, setOrderNotice] = useState<string | null>(null);

  if (!restaurant) return null;

  const categories = ['all', ...Array.from(new Set(restaurant.dishes.map(d => d.category)))];

  const filteredDishes = selectedCategory === 'all' 
    ? restaurant.dishes 
    : restaurant.dishes.filter(d => d.category === selectedCategory);

  const handleAddToCart = (dish: Dish) => {
    setCart(prev => {
      const existing = prev.find(item => item.dish.id === dish.id);
      if (existing) {
        return prev.map(item => 
          item.dish.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { dish, quantity: 1 }];
    });
    setOrderNotice(`"${dish.name}" ajouté ! Finalisez sur l'application Woudy.`);
    setTimeout(() => setOrderNotice(null), 3000);
  };

  const totalCart = cart.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-neutral-900/70 hover:bg-neutral-900 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Header with Restaurant Image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-neutral-900">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

          {/* Badges and tags */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-lg bg-[#FF5400] font-bold text-xs shadow-xs">
                {restaurant.cuisine}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-neutral-800/80 backdrop-blur-md text-xs font-semibold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                {restaurant.neighborhood}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-neutral-950 text-xs font-bold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-neutral-950" />
                {restaurant.rating} ({restaurant.reviewCount} avis)
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
              {restaurant.name}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-200 mt-1 max-w-xl line-clamp-1">
              {restaurant.tagline}
            </p>
          </div>
        </div>

        {/* Quick Info Bar */}
        <div className="bg-neutral-50 px-6 py-3 border-b border-neutral-200 grid grid-cols-3 gap-2 text-center text-xs">
          <div>
            <span className="text-neutral-500 block">Délai estimé</span>
            <span className="font-bold text-neutral-900 flex items-center justify-center gap-1 mt-0.5">
              <Clock className="w-3.5 h-3.5 text-[#FF5400]" />
              {restaurant.deliveryTimeMin}-{restaurant.deliveryTimeMax} min
            </span>
          </div>
          <div className="border-x border-neutral-200">
            <span className="text-neutral-500 block">Frais de livraison</span>
            <span className="font-bold text-neutral-900 flex items-center justify-center gap-1 mt-0.5">
              <Bike className="w-3.5 h-3.5 text-[#FF5400]" />
              {restaurant.deliveryFee.toLocaleString()} FCFA
            </span>
          </div>
          <div>
            <span className="text-neutral-500 block">Commande minimum</span>
            <span className="font-bold text-neutral-900 block mt-0.5">
              {restaurant.minOrder.toLocaleString()} FCFA
            </span>
          </div>
        </div>

        {/* Categories Bar */}
        {categories.length > 2 && (
          <div className="px-6 py-3 border-b border-neutral-200 flex gap-2 overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#FF5400] text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {cat === 'all' ? 'Toute la carte' : cat}
              </button>
            ))}
          </div>
        )}

        {/* Order Feedback Toast */}
        {orderNotice && (
          <div className="mx-6 mt-3 p-3 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs font-semibold flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FF5400] shrink-0" />
              <span>{orderNotice}</span>
            </div>
            <button
              onClick={onOpenAppModal}
              className="text-xs font-bold text-[#FF5400] underline hover:text-[#E04B00] cursor-pointer ml-2"
            >
              Voir le panier
            </button>
          </div>
        )}

        {/* Dishes List */}
        <div className="p-6 max-h-96 overflow-y-auto space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500">
              Plats disponibles à la commande
            </h3>
            <span className="text-xs text-neutral-400">
              {filteredDishes.length} articles
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                className="p-3.5 rounded-2xl border border-neutral-200 bg-white hover:border-orange-400 transition-all flex gap-3.5 group"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-20 h-20 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="text-sm font-bold text-neutral-900 leading-tight">
                        {dish.name}
                      </h4>
                      {dish.isPopular && (
                        <span className="text-[10px] font-bold text-orange-700 bg-orange-100 px-1.5 py-0.5 rounded shrink-0">
                          Top
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-neutral-500 line-clamp-2 mt-1">
                      {dish.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-neutral-100">
                    <span className="text-xs font-extrabold text-neutral-900">
                      {dish.price.toLocaleString()} FCFA
                    </span>
                    <button
                      onClick={() => handleAddToCart(dish)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#FF5400] hover:bg-[#E04B00] px-2.5 py-1 rounded-lg transition-colors cursor-pointer shadow-xs shadow-orange-500/20"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Ajouter</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Bottom CTA */}
        <div className="p-4 sm:p-6 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-neutral-600">
            <ShieldCheck className="w-4 h-4 text-[#FF5400] shrink-0" />
            <span>Livré sous scellé isotherme à Cocody & environs</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {totalCart > 0 && (
              <div className="text-right hidden sm:block">
                <span className="text-xs text-neutral-500">Panier :</span>
                <p className="text-sm font-bold text-neutral-900">
                  {totalCart.toLocaleString()} FCFA
                </p>
              </div>
            )}
            <button
              onClick={() => {
                onClose();
                onOpenAppModal();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#FF5400] hover:bg-[#E04B00] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md shadow-orange-500/20 transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Commander sur l'Application Woudy</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
