import React from 'react';

interface FoodyCategoryNavProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  itemCountByCategory: Record<string, number>;
}

export const FoodyCategoryNav: React.FC<FoodyCategoryNavProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  itemCountByCategory
}) => {
  return (
    <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto py-2.5 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count = itemCountByCategory[cat] || 0;

            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#FF5400] text-white shadow-xs scale-102'
                    : 'bg-neutral-100/80 hover:bg-neutral-200/80 text-neutral-700 hover:text-neutral-900'
                }`}
              >
                <span>{cat}</span>
                {count > 0 && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-neutral-200 text-neutral-600'
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
