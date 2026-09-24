import React from 'react';
import { 
  MapPin, 
  Zap, 
  Tag, 
  UserCheck, 
  ShieldAlert, 
  HeartHandshake, 
  CheckCircle,
  ThermometerSnowflake,
  Sparkles
} from 'lucide-react';

export const WhyWoudy: React.FC = () => {
  const advantages = [
    {
      title: 'Hyperlocalité Cocody',
      subtitle: 'Zéro détour, zéro traversée interminable',
      description: 'Nous concentrons nos flottes de livreurs exclusivement sur Cocody (2 Plateaux, Angré, Danga, Riviera, Zone 3). Vos repas ne passent pas 1 heure coincés sur le pont ou l’autoroute.',
      icon: MapPin,
      badge: 'Focus 100% Local',
      color: 'orange'
    },
    {
      title: 'Rapidité Garantie (25 - 40 min)',
      subtitle: 'Un engagement chrono respecté',
      description: 'Notre algorithme de dispatching intelligent assigne le coursier le plus proche dès que la cuisine commence la préparation. Suivez l’arrivée en temps réel sur la carte.',
      icon: Zap,
      badge: 'Chrono Garanti',
      color: 'orange'
    },
    {
      title: 'Tarifs Transparents & Commande Min. Basse',
      subtitle: 'Accessible aux étudiants comme aux familles',
      description: 'Frais de livraison fixes et lisibles (dès 800 FCFA). Pas de surtaxe météo abusive, pas de pourboire forcé. Commandez dès 2 000 FCFA sans pénalité.',
      icon: Tag,
      badge: 'Zéro Frais Cachés',
      color: 'orange'
    },
    {
      title: 'Livreurs Vérifiés & Salariés Formés',
      subtitle: 'Courtoisie, respect et professionnalisme',
      description: 'Chaque coursier Woudy est identifié avec badge officiel, formé aux règles d’hygiène et équipé de smartphones avec GPS précis.',
      icon: UserCheck,
      badge: 'Confiance & Sécurité',
      color: 'orange'
    },
    {
      title: 'Emballage Hermétique & Isotherme',
      subtitle: 'Arrive aussi chaud que si vous étiez à table',
      description: 'Boîtes scellées avec bande inviolable. Vos sauces ne se renversent pas dans le sac et la température est maintenue jusqu’à votre porte.',
      icon: ThermometerSnowflake,
      badge: 'Garantie Scellé',
      color: 'orange'
    }
  ];

  return (
    <section id="avantages" className="py-16 sm:py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#FF5400] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Pourquoi Woudy Livraison ?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-display">
            La promesse d’une livraison sans mauvaise surprise
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-3 leading-relaxed">
            Nous avons créé Woudy après avoir vécu les mêmes frustrations que vous à Abidjan : 
            plats tièdes, délais imprévisibles et livreurs introuvables. Voici comment nous changeons la donne.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-50/70 rounded-3xl p-8 border border-neutral-200/80 hover:border-orange-500/60 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 bg-orange-100 text-[#FF5400]">
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-orange-50 text-[#FF5400] border border-orange-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#FF5400] mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200/60 flex items-center gap-2 text-xs font-semibold text-neutral-700">
                  <CheckCircle className="w-4 h-4 text-[#FF5400]" />
                  <span>Standard vérifié Woudy</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Local Impact & Partnership */}
          <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white rounded-3xl p-8 border border-neutral-800 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-6 border border-orange-500/20">
                <HeartHandshake className="w-7 h-7" />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-orange-500/20 text-orange-300 border border-orange-500/30 inline-block mb-3">
                Impact Économique Local
              </span>

              <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                Soutenir nos restaurateurs & livreurs ivoiriens
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed">
                Contrairement aux multinationales de livraison, Woudy reverse la juste part aux cuisiniers locaux et offre des conditions de rémunération stables et valorisantes à nos coursiers.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center justify-between text-xs text-orange-400">
              <span>Plateforme fièrement ivoirienne</span>
              <span className="text-base">🇨🇮</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
