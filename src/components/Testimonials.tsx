import React, { useState } from 'react';
import { Star, Quote, CheckCircle, Heart, Award, Utensils } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const Testimonials: React.FC = () => {
  const [activePersonaFilter, setActivePersonaFilter] = useState<string>('Tous');

  const filters = ['Tous', 'Jeune Pro', 'Famille', 'Étudiant', 'Partenaire'];

  const filteredTestimonials = activePersonaFilter === 'Tous'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter(t => t.personaType === activePersonaFilter);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#FF5400] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Retours d'Expérience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-display">
            Ce que Cocody dit de Woudy
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-3 leading-relaxed">
            Professionnels pressés, familles réunies le week-end ou étudiants : découvrez pourquoi ils ont fait de Woudy leur réflexe déjeuner et dîner.
          </p>

          {/* Persona Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActivePersonaFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activePersonaFilter === filter
                    ? 'bg-[#FF5400] text-white shadow-xs shadow-orange-500/20'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {filter === 'Tous' ? 'Tous les avis (4.9/5)' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-50 rounded-3xl p-6 border border-neutral-200/90 flex flex-col justify-between hover:shadow-md hover:border-orange-400 transition-all group"
            >
              <div>
                {/* Header with Persona Badge & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-orange-50 text-[#FF5400] border border-orange-200">
                    {item.personaType}
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic relative">
                  "{item.comment}"
                </p>

                {/* Favorite Dish */}
                <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center gap-1.5 text-[11px] text-neutral-500">
                  <Utensils className="w-3 h-3 text-[#FF5400] shrink-0" />
                  <span className="truncate">Plat favori : <strong className="text-neutral-800 font-semibold">{item.favoriteOrder}</strong></span>
                </div>
              </div>

              {/* Author Info */}
              <div className="mt-5 pt-4 border-t border-neutral-200/80 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-orange-500/30"
                />
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-neutral-900 truncate">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-neutral-500 truncate">
                    {item.role}
                  </p>
                  <p className="text-[10px] text-[#FF5400] font-medium truncate">
                    📍 {item.neighborhood}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Rating Score Bar */}
        <div className="mt-12 bg-neutral-900 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-xl font-display border border-amber-500/30">
              4.9
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <p className="text-xs text-neutral-300 mt-0.5">
                Basé sur plus de 1 200 livraisons vérifiées à Cocody
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-orange-400 bg-orange-950/80 px-4 py-2 rounded-xl border border-orange-800">
            <CheckCircle className="w-4 h-4 text-orange-400" />
            <span>98.4% de livraisons remises à l'heure exacte</span>
          </div>
        </div>

      </div>
    </section>
  );
};
