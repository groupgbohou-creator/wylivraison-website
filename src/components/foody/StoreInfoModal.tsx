import React from 'react';
import { X, Clock, MapPin, Phone, ShieldCheck, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';
import { Restaurant } from '../../types';

interface StoreInfoModalProps {
  restaurant: Restaurant;
  onClose: () => void;
}

export const StoreInfoModal: React.FC<StoreInfoModalProps> = ({
  restaurant,
  onClose
}) => {
  const schedule = [
    { day: 'Lundi', hours: '11:00 - 23:30', current: true },
    { day: 'Mardi', hours: '11:00 - 23:30', current: false },
    { day: 'Mercredi', hours: '11:00 - 23:30', current: false },
    { day: 'Jeudi', hours: '11:00 - 23:30', current: false },
    { day: 'Vendredi', hours: '11:00 - 00:30', current: false },
    { day: 'Samedi', hours: '11:00 - 00:30', current: false },
    { day: 'Dimanche', hours: '11:30 - 23:30', current: false },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-neutral-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden border border-neutral-200 flex flex-col">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-orange-50 text-[#FF5400] flex items-center justify-center font-bold">
              BS
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-neutral-900 font-display">
                {restaurant.name}
              </h3>
              <span className="text-xs text-neutral-500">
                Informations légales, horaires & allergènes
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-neutral-100 text-neutral-500 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-neutral-800 text-xs">
          
          {/* Address & Contact */}
          <div className="space-y-2">
            <h4 className="font-black text-neutral-900 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FF5400]" />
              Adresse & Accès restaurant
            </h4>
            <div className="bg-neutral-50 p-3 rounded-2xl border border-neutral-200 space-y-1">
              <p className="font-bold text-neutral-900">{restaurant.address}</p>
              <p className="text-neutral-500">Commune de Cocody, District Autonome d'Abidjan</p>
              <p className="text-[#FF5400] font-semibold pt-1">
                Liaison directe avec les coursiers Woudy sur place
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-2">
            <h4 className="font-black text-neutral-900 uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#FF5400]" />
              Horaires de livraison Woudy
            </h4>
            <div className="divide-y divide-neutral-100 bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden">
              {schedule.map((item) => (
                <div
                  key={item.day}
                  className={`flex justify-between py-2 px-3 text-xs ${
                    item.current ? 'bg-orange-50/80 font-black text-[#FF5400]' : 'text-neutral-700'
                  }`}
                >
                  <span>{item.day} {item.current && '• Aujourd’hui'}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Allergens & Dietary Information */}
          <div className="space-y-2">
            <h4 className="font-black text-neutral-900 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
              Allergènes & Origine des ingrédients
            </h4>
            <div className="bg-amber-50/70 border border-amber-200 p-3.5 rounded-2xl space-y-1.5 text-amber-900 leading-relaxed">
              <p>
                <strong>Bœuf :</strong> 100% Bœuf Black Angus sélectionné et haché chaque matin. Certifié Halal.
              </p>
              <p>
                <strong>Pains briochés :</strong> Contiennent du gluten, lait et graines de sésame grillées.
              </p>
              <p>
                <strong>Fromages & Sauces :</strong> Contiennent des dérivés laitiers et des œufs pasteurisés.
              </p>
              <p>
                <strong>Frites :</strong> Cuites dans de l’huile végétale pure sans arachide.
              </p>
            </div>
          </div>

          {/* Partner & Platform Certification */}
          <div className="p-3.5 bg-neutral-900 text-white rounded-2xl space-y-1">
            <div className="flex items-center gap-2 text-orange-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Partenaire Vérifié Woudy Food</span>
            </div>
            <p className="text-[11px] text-neutral-300 leading-normal">
              Ce restaurant respecte scrupuleusement la charte de qualité thermique et d’hygiène Woudy : préparation à la commande, scellage inviolable des contenants et livraison sous contrôle de température.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex justify-end">
          <button
            onClick={onClose}
            className="w-full bg-[#FF5400] hover:bg-[#E04B00] text-white font-bold text-xs py-2.5 rounded-xl transition-colors cursor-pointer"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
};
