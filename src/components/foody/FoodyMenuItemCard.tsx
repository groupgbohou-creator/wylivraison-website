import React from 'react';
import { Plus, Flame, Sparkles } from 'lucide-react';
import { Dish } from '../../types';

interface FoodyMenuItemCardProps {
  dish: Dish;
  onSelect: (dish: Dish) => void;
  onQuickAdd: (dish: Dish) => void;
}

export const FoodyMenuItemCard: React.FC<FoodyMenuItemCardProps> = ({
  dish,
  onSelect,
  onQuickAdd
}) => {
  return (
    <div 
      onClick={() => onSelect(dish)}
      className="group bg-white rounded-2xl p-4 border border-neutral-200/90 hover:border-orange-300 hover:shadow-md transition-all cursor-pointer flex justify-between gap-3 relative"
    >
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-between pr-2">
        <div className="space-y-1.5">
          {/* Badges */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {dish.isPopular && (
              <span className="inline-flex items-center gap-1 bg-orange-50 text-[#FF5400] text-[10px] font-black px-2 py-0.5 rounded-md border border-orange-200">
                <Sparkles className="w-3 h-3" />
                Populaire
              </span>
            )}
            {dish.spicy && (
              <span className="inline-flex items-center gap-1 bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-md border border-red-200">
                <Flame className="w-3 h-3 fill-current" />
                Épicé
              </span>
            )}
            {dish.customizable && (
              <span className="text-neutral-400 text-[10px] font-semibold">
                Personnalisable
              </span>
            )}
          </div>

          {/* Title */}
          <h4 className="text-sm sm:text-base font-extrabold text-neutral-900 group-hover:text-[#FF5400] transition-colors leading-snug">
            {dish.name}
          </h4>

          {/* Description */}
          <p className="text-xs text-neutral-500 line-clamp-2 sm:line-clamp-3 leading-relaxed">
            {dish.description}
          </p>
        </div>

        {/* Price & Action */}
        <div className="pt-3 flex items-center justify-between">
          <span className="text-sm sm:text-base font-black text-neutral-900">
            {dish.price.toLocaleString('fr-FR')} <span className="text-xs font-bold text-neutral-600">FCFA</span>
          </span>
        </div>
      </div>

      {/* Right Dish Image & Plus Action */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-100">
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Floating Plus button on image */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickAdd(dish);
          }}
          className="absolute bottom-1.5 right-1.5 w-8 h-8 rounded-xl bg-white/95 hover:bg-[#FF5400] text-neutral-900 hover:text-white shadow-md flex items-center justify-center transition-all cursor-pointer"
          title="Ajouter au panier"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
