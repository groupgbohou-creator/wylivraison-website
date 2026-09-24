import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  Tag, 
  Clock, 
  Bike, 
  ChevronRight, 
  AlertCircle,
  CheckCircle2,
  X
} from 'lucide-react';
import { CartItem } from '../../types';

interface FoodyCartSidebarProps {
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, delta: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  deliveryMode: 'delivery' | 'pickup';
  onDeliveryModeChange: (mode: 'delivery' | 'pickup') => void;
  currentAddress: string;
  onOpenAddressChange: () => void;
  deliveryFee: number;
  minOrder: number;
  promoCode: string;
  onApplyPromo: (code: string) => void;
  onRemovePromo: () => void;
  discount: number;
  onCheckout: () => void;
  isMobileDrawer?: boolean;
  onCloseMobileDrawer?: () => void;
}

export const FoodyCartSidebar: React.FC<FoodyCartSidebarProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  deliveryMode,
  onDeliveryModeChange,
  currentAddress,
  onOpenAddressChange,
  deliveryFee,
  minOrder,
  promoCode,
  onApplyPromo,
  onRemovePromo,
  discount,
  onCheckout,
  isMobileDrawer = false,
  onCloseMobileDrawer
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const effectiveDeliveryFee = deliveryMode === 'pickup' ? 0 : (subtotal >= 10000 ? 0 : deliveryFee);
  const total = Math.max(0, subtotal + effectiveDeliveryFee - discount);

  const freeDeliveryThreshold = 10000;
  const missingForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);
  const freeDeliveryProgress = Math.min(100, Math.round((subtotal / freeDeliveryThreshold) * 100));

  const handleApplyVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = promoInput.trim().toUpperCase();
    if (!clean) return;
    if (clean === 'WOUDY15' || clean === 'WOUDY2000' || clean === 'BURGER10') {
      onApplyPromo(clean);
      setPromoError('');
      setPromoInput('');
    } else {
      setPromoError('Code promo invalide. Essayez "WOUDY15" ou "WOUDY2000"');
    }
  };

  const isMinOrderSatisfied = subtotal >= minOrder || deliveryMode === 'pickup';

  const cartContent = (
    <div className="flex flex-col h-full bg-white text-neutral-800">
      {/* Sidebar Header */}
      <div className="p-4 sm:p-5 border-b border-neutral-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#FF5400] flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-neutral-900 font-display leading-tight">
                Mon Panier Woudy
              </h3>
              <span className="text-[11px] text-neutral-500">Burger Shop • Cocody 2 Plateaux</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={onClearCart}
                className="text-neutral-400 hover:text-red-500 text-xs font-semibold p-1 transition-colors cursor-pointer"
                title="Vider le panier"
              >
                Vider
              </button>
            )}
            {isMobileDrawer && onCloseMobileDrawer && (
              <button
                onClick={onCloseMobileDrawer}
                className="p-1 rounded-full hover:bg-neutral-100 text-neutral-500"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Delivery / Pickup Switch */}
        <div className="mt-3.5 grid grid-cols-2 gap-1 bg-neutral-100 p-1 rounded-xl">
          <button
            onClick={() => onDeliveryModeChange('delivery')}
            className={`py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              deliveryMode === 'delivery'
                ? 'bg-white text-[#FF5400] shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            🛵 Livraison (30 min)
          </button>
          <button
            onClick={() => onDeliveryModeChange('pickup')}
            className={`py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              deliveryMode === 'pickup'
                ? 'bg-white text-[#FF5400] shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            🛍️ À emporter (15 min)
          </button>
        </div>

        {/* Destination line */}
        {deliveryMode === 'delivery' && (
          <div className="mt-2.5 flex items-center justify-between text-xs bg-orange-50/50 border border-orange-100 p-2 rounded-xl">
            <span className="text-neutral-600 truncate max-w-[200px]">
              À : <strong>{currentAddress}</strong>
            </span>
            <button
              onClick={onOpenAddressChange}
              className="text-[#FF5400] font-bold text-[11px] hover:underline shrink-0 cursor-pointer"
            >
              Modifier
            </button>
          </div>
        )}
      </div>

      {/* Free Delivery Bar */}
      {items.length > 0 && deliveryMode === 'delivery' && (
        <div className="px-4 sm:px-5 py-2.5 bg-neutral-50 border-b border-neutral-100">
          <div className="flex items-center justify-between text-[11px] font-bold mb-1">
            {missingForFreeDelivery > 0 ? (
              <span className="text-neutral-600">
                Plus que <strong className="text-[#FF5400]">{missingForFreeDelivery.toLocaleString('fr-FR')} F</strong> pour la livraison offerte !
              </span>
            ) : (
              <span className="text-green-600 flex items-center gap-1 font-extrabold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Livraison Woudy offerte sur cette commande !
              </span>
            )}
            <span className="text-neutral-500">{freeDeliveryProgress}%</span>
          </div>
          <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FF5400] rounded-full transition-all duration-300"
              style={{ width: `${freeDeliveryProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Items Scrollable List */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
        {items.length === 0 ? (
          <div className="py-12 px-4 text-center flex flex-col items-center justify-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF5400]">
              <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-neutral-900">
                Votre panier est encore vide
              </h4>
              <p className="text-xs text-neutral-500 mt-1 max-w-[220px]">
                Choisissez vos smash burgers, frites dorées et sauces préférées pour débuter votre festin.
              </p>
            </div>
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.cartItemId}
              className="p-3 bg-neutral-50/70 hover:bg-neutral-50 rounded-2xl border border-neutral-200/80 transition-all space-y-2"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h5 className="font-extrabold text-xs text-neutral-900 leading-snug">
                    {item.dish.name}
                  </h5>
                  {/* Options Summary */}
                  {item.options.length > 0 && (
                    <div className="text-[10px] text-neutral-500 mt-0.5 space-x-1">
                      {item.options.map((opt, i) => (
                        <span key={i} className="inline-block bg-white px-1.5 py-0.5 rounded border border-neutral-200 text-neutral-600">
                          {opt.name}
                        </span>
                      ))}
                    </div>
                  )}
                  {item.specialInstructions && (
                    <p className="text-[10px] text-orange-600 italic mt-0.5">
                      Note: "{item.specialInstructions}"
                    </p>
                  )}
                </div>

                <span className="font-black text-xs text-neutral-900 shrink-0">
                  {item.totalPrice.toLocaleString('fr-FR')} F
                </span>
              </div>

              {/* Quantity controls */}
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => onRemoveItem(item.cartItemId)}
                  className="text-neutral-400 hover:text-red-500 p-1 rounded-lg transition-colors cursor-pointer"
                  title="Supprimer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl p-0.5">
                  <button
                    onClick={() => onUpdateQuantity(item.cartItemId, -1)}
                    className="w-6 h-6 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center text-xs cursor-pointer"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-5 text-center text-xs font-black text-neutral-900">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onUpdateQuantity(item.cartItemId, 1)}
                    className="w-6 h-6 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center text-xs cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer & Checkout Action (Fixed Bottom) */}
      {items.length > 0 && (
        <div className="p-4 sm:p-5 bg-neutral-50 border-t border-neutral-200 space-y-3 shrink-0">
          
          {/* Promo code box */}
          {promoCode ? (
            <div className="flex items-center justify-between bg-green-50 border border-green-200 px-3 py-2 rounded-xl text-xs">
              <div className="flex items-center gap-1.5 text-green-700 font-bold">
                <Tag className="w-3.5 h-3.5" />
                <span>Code {promoCode} appliqué (-{discount.toLocaleString('fr-FR')} F)</span>
              </div>
              <button
                onClick={onRemovePromo}
                className="text-neutral-400 hover:text-neutral-700 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleApplyVoucher} className="flex gap-1.5">
              <input
                type="text"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                placeholder="Code promo (ex: WOUDY15)"
                className="flex-1 px-3 py-1.5 text-xs rounded-xl border border-neutral-200 uppercase font-bold focus:outline-none focus:border-[#FF5400] text-neutral-800"
              />
              <button
                type="submit"
                className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
              >
                Appliquer
              </button>
            </form>
          )}

          {promoError && (
            <p className="text-[11px] text-red-500 font-medium">{promoError}</p>
          )}

          {/* Pricing breakdown */}
          <div className="space-y-1.5 text-xs text-neutral-600 pt-1">
            <div className="flex justify-between">
              <span>Sous-total</span>
              <span className="font-bold text-neutral-900">{subtotal.toLocaleString('fr-FR')} FCFA</span>
            </div>
            <div className="flex justify-between">
              <span>Frais de livraison Woudy</span>
              {effectiveDeliveryFee === 0 ? (
                <span className="font-bold text-green-600 uppercase text-[11px]">Offert</span>
              ) : (
                <span className="font-bold text-neutral-900">{effectiveDeliveryFee.toLocaleString('fr-FR')} FCFA</span>
              )}
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-green-600 font-bold">
                <span>Réduction Woudy</span>
                <span>-{discount.toLocaleString('fr-FR')} FCFA</span>
              </div>
            )}
            <div className="flex justify-between pt-2 border-t border-neutral-200 text-sm font-black text-neutral-900">
              <span>Total TTC</span>
              <span className="text-base text-[#FF5400]">{total.toLocaleString('fr-FR')} FCFA</span>
            </div>
          </div>

          {/* Min order warning if needed */}
          {!isMinOrderSatisfied && (
            <div className="flex items-center gap-1.5 text-[11px] text-amber-700 bg-amber-50 p-2 rounded-xl border border-amber-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Commande minimum de {minOrder.toLocaleString('fr-FR')} FCFA requise en livraison.</span>
            </div>
          )}

          {/* Big Checkout Button */}
          <button
            onClick={onCheckout}
            disabled={!isMinOrderSatisfied}
            className={`w-full py-3.5 px-4 rounded-2xl font-extrabold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-between ${
              isMinOrderSatisfied
                ? 'bg-[#FF5400] hover:bg-[#E04B00] text-white shadow-orange-500/20 active:scale-98'
                : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
            }`}
          >
            <span className="flex items-center gap-2">
              <span>Passer la commande</span>
              <ChevronRight className="w-4 h-4" />
            </span>
            <span className="bg-white/20 px-2 py-0.5 rounded-lg text-xs font-black">
              {total.toLocaleString('fr-FR')} FCFA
            </span>
          </button>
        </div>
      )}
    </div>
  );

  if (isMobileDrawer) {
    return (
      <div className="fixed inset-0 z-50 bg-neutral-950/70 backdrop-blur-xs flex justify-end">
        <div className="w-full max-w-md h-full bg-white shadow-2xl">
          {cartContent}
        </div>
      </div>
    );
  }

  return (
    <aside className="sticky top-28 bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden h-[calc(100vh-140px)] flex flex-col">
      {cartContent}
    </aside>
  );
};
