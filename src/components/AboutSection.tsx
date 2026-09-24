import React from 'react';
import { Target, Flag, ShieldCheck, Heart, Sparkles, Users, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="a-propos" className="py-16 sm:py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Brand Story & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#FF5400] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-full inline-block">
              Notre Histoire & Vision
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-display">
              Né à Cocody, pensé pour les réalités d’Abidjan
            </h2>

            <div className="space-y-4 text-base text-neutral-600 leading-relaxed">
              <p>
                À Abidjan, la nourriture est une véritable célébration culturelle : braisés du soir, attiéké garba croustillant, sauces graine onctueuses, kédjénous parfumés ou smash burgers de minuit.
              </p>
              <p>
                Pourtant, se faire livrer était devenu un parcours du combattant : livreurs coincés des heures dans les embouteillages du boulevard Latrille ou du carrefour Duncan, barquettes renversées et nourriture froide.
              </p>
              <p className="font-semibold text-neutral-800">
                Woudy Livraison est né pour casser ce modèle : nous croyons en la livraison hyperlocale. En nous concentrant exclusivement sur un périmètre maîtrisé à Cocody, nous garantissons des repas qui arrivent chauds, croustillants et dans un délai strict de 25 à 40 minutes.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <Target className="w-6 h-6 text-[#FF5400] mb-2" />
                <h4 className="text-sm font-bold text-neutral-900">Mission</h4>
                <p className="text-xs text-neutral-500 mt-1">
                  Connecter les meilleurs cuisiniers de Cocody à leurs voisins en 30 minutes.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <Heart className="w-6 h-6 text-orange-600 mb-2" />
                <h4 className="text-sm font-bold text-neutral-900">Équité</h4>
                <p className="text-xs text-neutral-500 mt-1">
                  Commissions justes pour les restaurateurs et salaires dignes pour nos coursiers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <ShieldCheck className="w-6 h-6 text-[#FF5400] mb-2" />
                <h4 className="text-sm font-bold text-neutral-900">Intégrité</h4>
                <p className="text-xs text-neutral-500 mt-1">
                  100% de boîtes scellées sous contrôle thermique strict.
                </p>
              </div>
            </div>

          </div>

          {/* Right: Visual Story card */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-br from-neutral-950 to-neutral-900 text-white rounded-3xl p-8 shadow-xl border border-neutral-800">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-orange-400 bg-orange-950/80 px-3 py-1 rounded-full border border-orange-800">
                  Startup Ivoirienne 🇨🇮
                </span>
              </div>

              <h3 className="text-2xl font-black font-display text-white mb-3">
                L’équipe derrière Woudy
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                Pilotée par des passionnés de la restauration et des ingénieurs d’Abidjan, l'équipe Woudy réunit des experts de la logistique urbaine, des développeurs d'applications mobiles et des superviseurs de qualité formés aux normes sanitaires internationales.
              </p>

              <div className="space-y-3 pt-4 border-t border-neutral-700/80 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Siège opérationnel</span>
                  <span className="font-semibold text-white">Cocody 2 Plateaux Vallons, Abidjan</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Restauration partenaire</span>
                  <span className="font-semibold text-orange-400">80+ restaurants agréés</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Flotte de coursiers</span>
                  <span className="font-semibold text-orange-400">45 coursiers formés & équipés</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Délai moyen constaté</span>
                  <span className="font-bold text-white">28 min 42 sec</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-700 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#FF5400] animate-pulse"></div>
                <span className="text-xs text-neutral-300">
                  En pleine croissance à Cocody, bientôt dans tout Abidjan.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
