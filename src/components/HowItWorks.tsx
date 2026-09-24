import React from 'react';
import { 
  Store, 
  Smartphone, 
  PackageCheck, 
  Bike, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface HowItWorksProps {
  onOpenAppModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenAppModal }) => {
  const steps = [
    {
      number: '01',
      title: 'Sélectionnez votre restaurant de Cocody',
      description: 'Parcourez les meilleures adresses de braisés, maquis réputés, tables modernes et burgers artisanaux à deux pas de chez vous.',
      icon: Store,
      badge: 'Sélection rigoureuse',
      color: 'orange'
    },
    {
      number: '02',
      title: 'Commandez en 3 clics sur l’App',
      description: 'Personnalisez vos sauces et accompagnements (alloco, attiéké, frites de patate douce), payez par Wave, Orange Money, Moov, MTN ou à la livraison.',
      icon: Smartphone,
      badge: 'Mobile Money & Cash',
      color: 'orange'
    },
    {
      number: '03',
      title: 'Préparation minute & Scellage hermétique',
      description: 'Le restaurant prépare votre repas immédiatement. Chaque boîte est scellée avec notre bande d’inviolabilité thermique.',
      icon: PackageCheck,
      badge: 'Sécurité hygiène 100%',
      color: 'orange'
    },
    {
      number: '04',
      title: 'Livraison express en 25 à 40 minutes',
      description: 'Nos livreurs Woudy dédiés, équipés de sacs isothermes professionnels, évitent les grands axes encombrés pour vous livrer à temps.',
      icon: Bike,
      badge: 'Chrono garanti',
      color: 'orange'
    }
  ];

  return (
    <section id="comment-ca-marche" className="py-16 sm:py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#FF5400] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Simplicité & Rapidité
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-display">
            Comment fonctionne Woudy Livraison ?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-3 leading-relaxed">
            Une expérience pensée de bout en bout pour vous faire gagner du temps sans jamais sacrifier la chaleur ni la saveur de vos plats.
          </p>
        </div>

        {/* Steps Grid with connector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="relative bg-neutral-50/80 rounded-2xl p-6 border border-neutral-200/80 hover:border-orange-500/50 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                {/* Step Top */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 bg-orange-100 text-[#FF5400]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black font-display text-neutral-300 group-hover:text-[#FF5400] transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md mb-2 bg-orange-50 text-[#FF5400] border border-orange-200">
                    {step.badge}
                  </span>

                  <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Bottom Accent */}
                <div className="pt-4 mt-4 border-t border-neutral-200/60 flex items-center text-xs font-semibold text-neutral-500">
                  <span>Étape {idx + 1} sur 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Hours & Quality Banner */}
        <div className="mt-14 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/30">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Horaires de Service</h4>
                <p className="text-xs text-neutral-300 mt-0.5">
                  Lundi au Dimanche : <strong className="text-[#FF5400]">10h00 - 23h30</strong>
                </p>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Service continu midi et soir, même les jours fériés.
                </p>
              </div>
            </div>

            {/* Hygiene Guarantee */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Garantie Plat Chaud & Scellé</h4>
                <p className="text-xs text-neutral-300 mt-0.5">
                  Sac isotherme renforcé et scellé de sécurité
                </p>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Si le scellé est brisé, votre commande est remboursée.
                </p>
              </div>
            </div>

            {/* CTA action */}
            <div className="flex md:justify-end">
              <button
                onClick={onOpenAppModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF5400] hover:bg-[#E04B00] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-md shadow-orange-500/20 active:scale-98"
              >
                <span>Commander maintenant</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
