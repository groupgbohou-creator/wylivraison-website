import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  Bike, 
  ChefHat, 
  Phone, 
  MapPin, 
  ShieldCheck,
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { OrderState } from '../../types';

interface LiveOrderTrackerModalProps {
  order: OrderState;
  onClose: () => void;
}

export const LiveOrderTrackerModal: React.FC<LiveOrderTrackerModalProps> = ({
  order,
  onClose
}) => {
  const [activeStep, setActiveStep] = useState(2); // 1: received, 2: preparing, 3: courier, 4: delivered
  const [remainingMinutes, setRemainingMinutes] = useState(order.estimatedMinutes);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingMinutes((prev) => Math.max(1, prev - 1));
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      id: 1,
      title: 'Commande reçue par Burger Shop',
      time: order.createdAt,
      desc: 'La cuisine a validé votre commande.',
      icon: CheckCircle2,
      done: true
    },
    {
      id: 2,
      title: 'Préparation minute & Smash grill',
      time: '15:10',
      desc: 'Steaks Angus écrasés à la plancha & frites fraîches en cuisson.',
      icon: ChefHat,
      done: activeStep >= 2
    },
    {
      id: 3,
      title: 'Livreur Woudy en route',
      time: '15:22',
      desc: 'Sac isotherme scellé hermétiquement à 65°C.',
      icon: Bike,
      done: activeStep >= 3
    },
    {
      id: 4,
      title: 'Arrivée à votre adresse',
      time: '15:35',
      desc: `${order.address}, ${order.neighborhood}`,
      icon: MapPin,
      done: activeStep >= 4
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-neutral-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden border border-neutral-200 flex flex-col">
        
        {/* Top Header */}
        <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-800 text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5400] animate-ping"></span>
            <span className="text-xs font-black tracking-wider uppercase text-orange-400">
              Suivi en direct • Woudy Express
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black font-display tracking-tight text-white">
            Commande N° {order.orderId}
          </h3>

          <div className="mt-3 flex items-center justify-between bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
            <div>
              <span className="text-[11px] text-neutral-400 block uppercase font-bold">Temps estimé</span>
              <span className="text-lg font-black text-orange-400 flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                ~{remainingMinutes} minutes
              </span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-neutral-400 block uppercase font-bold">Total réglé</span>
              <span className="text-sm font-extrabold text-white">
                {order.total.toLocaleString('fr-FR')} FCFA
              </span>
            </div>
          </div>
        </div>

        {/* Courier Badge */}
        <div className="p-4 bg-orange-50 border-b border-orange-100 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white border border-orange-200 text-[#FF5400] flex items-center justify-center font-black text-sm shadow-xs">
              IK
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black text-neutral-900">{order.courierName}</span>
                <span className="text-[10px] bg-white text-neutral-700 px-1.5 py-0.5 rounded border border-neutral-200 font-bold">
                  Livreur Certifié
                </span>
              </div>
              <span className="text-[11px] text-neutral-500">Moto Yamaha YBR • Sac Scellé Woudy</span>
            </div>
          </div>

          <a
            href={`tel:${order.courierPhone}`}
            className="flex items-center gap-1.5 bg-[#FF5400] text-white text-xs font-extrabold px-3 py-2 rounded-xl shadow-xs hover:bg-[#E04B00] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Appeler</span>
          </a>
        </div>

        {/* 4 Interactive Progress Steps */}
        <div className="p-5 sm:p-6 space-y-4">
          <div className="space-y-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex items-start gap-3 relative">
                  {/* Vertical Connector Line */}
                  {idx < steps.length - 1 && (
                    <div
                      className={`absolute left-4 top-8 bottom-0 w-0.5 -mb-4 ${
                        step.done ? 'bg-[#FF5400]' : 'bg-neutral-200'
                      }`}
                    />
                  )}

                  {/* Icon dot */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 transition-colors ${
                      step.done
                        ? 'bg-[#FF5400] text-white ring-4 ring-orange-100'
                        : 'bg-neutral-100 text-neutral-400 border border-neutral-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Step Description */}
                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center justify-between">
                      <h4 className={`text-xs font-bold ${step.done ? 'text-neutral-900 font-black' : 'text-neutral-500'}`}>
                        {step.title}
                      </h4>
                      <span className="text-[10px] font-bold text-neutral-400">{step.time}</span>
                    </div>
                    <p className="text-[11px] text-neutral-500 mt-0.5 leading-snug">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Order Summary */}
          <div className="pt-3 border-t border-neutral-100 bg-neutral-50 p-3.5 rounded-2xl space-y-2">
            <span className="text-[11px] font-black text-neutral-700 uppercase tracking-wider block">
              Articles commandés chez Burger Shop :
            </span>
            <div className="space-y-1">
              {order.items.map((it) => (
                <div key={it.cartItemId} className="flex justify-between text-xs text-neutral-600">
                  <span>{it.quantity}x {it.dish.name}</span>
                  <span className="font-bold text-neutral-900">{it.totalPrice.toLocaleString('fr-FR')} F</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-white border-t border-neutral-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-extrabold text-xs py-3 rounded-xl transition-colors cursor-pointer"
          >
            Fermer et continuer à naviguer
          </button>
        </div>

      </div>
    </div>
  );
};
