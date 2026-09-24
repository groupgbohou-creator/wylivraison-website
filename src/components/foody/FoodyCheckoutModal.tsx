import React, { useState } from 'react';
import { 
  X, 
  Bike, 
  MapPin, 
  Phone, 
  User, 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard,
  Banknote,
  Clock,
  Sparkles
} from 'lucide-react';
import { CartItem, OrderState } from '../../types';

interface FoodyCheckoutModalProps {
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  currentAddress: string;
  deliveryMode: 'delivery' | 'pickup';
  onClose: () => void;
  onOrderSuccess: (order: OrderState) => void;
}

export const FoodyCheckoutModal: React.FC<FoodyCheckoutModalProps> = ({
  items,
  subtotal,
  deliveryFee,
  discount,
  total,
  currentAddress,
  deliveryMode,
  onClose,
  onOrderSuccess
}) => {
  const [fullName, setFullName] = useState('Kouassi Marc');
  const [phoneNumber, setPhoneNumber] = useState('+225 07 12 34 56 78');
  const [exactAddress, setExactAddress] = useState(currentAddress);
  const [deliveryNote, setDeliveryNote] = useState('Sonner au portail noir, 1er étage');
  const [paymentMethod, setPaymentMethod] = useState<'wave' | 'orange' | 'mtn' | 'moov' | 'cash' | 'card'>('wave');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newOrder: OrderState = {
        orderId: `WDY-${Math.floor(100000 + Math.random() * 900000)}`,
        status: 'preparing',
        customerName: fullName,
        phone: phoneNumber,
        address: exactAddress,
        neighborhood: 'Cocody Deux Plateaux',
        paymentMethod,
        items,
        subtotal,
        deliveryFee,
        discount,
        total,
        estimatedMinutes: 28,
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        courierName: 'Ibrahim Koné',
        courierPhone: '+225 07 88 99 00 11'
      };

      setIsSubmitting(false);
      onOrderSuccess(newOrder);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-neutral-200">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#FF5400] flex items-center justify-center font-bold">
              <Bike className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-neutral-900 font-display">
                Finaliser ma commande Woudy
              </h3>
              <p className="text-xs text-neutral-500">
                Burger Shop • {items.length} article{items.length > 1 ? 's' : ''}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-neutral-100 text-neutral-500 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form */}
        <form onSubmit={handleSubmitOrder} className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 text-neutral-800">
          
          {/* Coordinates & Delivery Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-neutral-900 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FF5400]" />
              Coordonnées de livraison à Abidjan
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Nom complet</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ex: Koffi Marc"
                  className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-xl focus:outline-none focus:border-[#FF5400]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Téléphone mobile (CI)</label>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+225 07..."
                  className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-xl focus:outline-none focus:border-[#FF5400]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Adresse ou repère précis</label>
              <input
                type="text"
                required
                value={exactAddress}
                onChange={(e) => setExactAddress(e.target.value)}
                placeholder="Rue des Jardins, Immeuble Horizon..."
                className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-xl focus:outline-none focus:border-[#FF5400]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Note pour le livreur Woudy</label>
              <input
                type="text"
                value={deliveryNote}
                onChange={(e) => setDeliveryNote(e.target.value)}
                placeholder="Code portail, indications particulières..."
                className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-xl focus:outline-none focus:border-[#FF5400]"
              />
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="space-y-3 pt-3 border-t border-neutral-100">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black text-neutral-900 uppercase tracking-wider flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-[#FF5400]" />
                Mode de Paiement sécurisé
              </h4>
              <span className="text-[10px] text-green-700 font-bold bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                Certifié 100% sécurisé
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {/* Wave */}
              <button
                type="button"
                onClick={() => setPaymentMethod('wave')}
                className={`p-3 rounded-2xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                  paymentMethod === 'wave'
                    ? 'border-[#FF5400] bg-orange-50 text-neutral-900 ring-2 ring-orange-500/20'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-sky-500 text-white font-black text-[10px] flex items-center justify-center shrink-0">
                  W
                </div>
                <div>
                  <span className="font-extrabold text-xs block">Wave CI</span>
                  <span className="text-[10px] text-neutral-500">0% de frais</span>
                </div>
              </button>

              {/* Orange Money */}
              <button
                type="button"
                onClick={() => setPaymentMethod('orange')}
                className={`p-3 rounded-2xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                  paymentMethod === 'orange'
                    ? 'border-[#FF5400] bg-orange-50 text-neutral-900 ring-2 ring-orange-500/20'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-orange-600 text-white font-black text-[10px] flex items-center justify-center shrink-0">
                  OM
                </div>
                <div>
                  <span className="font-extrabold text-xs block">Orange Money</span>
                  <span className="text-[10px] text-neutral-500">Instantané</span>
                </div>
              </button>

              {/* MTN */}
              <button
                type="button"
                onClick={() => setPaymentMethod('mtn')}
                className={`p-3 rounded-2xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                  paymentMethod === 'mtn'
                    ? 'border-[#FF5400] bg-orange-50 text-neutral-900 ring-2 ring-orange-500/20'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-yellow-400 text-black font-black text-[10px] flex items-center justify-center shrink-0">
                  MTN
                </div>
                <div>
                  <span className="font-extrabold text-xs block">MTN MoMo</span>
                  <span className="text-[10px] text-neutral-500">Mobile Money</span>
                </div>
              </button>

              {/* Cash on delivery */}
              <button
                type="button"
                onClick={() => setPaymentMethod('cash')}
                className={`p-3 rounded-2xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                  paymentMethod === 'cash'
                    ? 'border-[#FF5400] bg-orange-50 text-neutral-900 ring-2 ring-orange-500/20'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-black text-[10px] flex items-center justify-center shrink-0">
                  <Banknote className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-extrabold text-xs block">Espèces</span>
                  <span className="text-[10px] text-neutral-500">À la livraison</span>
                </div>
              </button>
            </div>
          </div>

          {/* Guarantee pill */}
          <div className="bg-neutral-50 border border-neutral-200 p-3 rounded-2xl flex items-center gap-2.5 text-xs text-neutral-600">
            <ShieldCheck className="w-5 h-5 text-[#FF5400] shrink-0" />
            <span>
              <strong>Garantie Fraîcheur & Sac Scellé</strong> : Votre commande est transportée dans un sac isotherme chauffé à 65°C pour conserver le croustillant des frites et burgers.
            </span>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FF5400] hover:bg-[#E04B00] text-white font-black text-sm py-4 rounded-2xl shadow-lg hover:shadow-orange-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Transmission au restaurant en cours...</span>
              ) : (
                <span>Confirmer & Payer {total.toLocaleString('fr-FR')} FCFA</span>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
