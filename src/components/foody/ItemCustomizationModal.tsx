import React, { useState } from 'react';
import { X, Plus, Minus, Check, Flame, Sparkles } from 'lucide-react';
import { Dish, CartItemOption } from '../../types';

interface ItemCustomizationModalProps {
  dish: Dish | null;
  onClose: () => void;
  onAddToCart: (dish: Dish, quantity: number, options: CartItemOption[], instructions: string) => void;
}

export const ItemCustomizationModal: React.FC<ItemCustomizationModalProps> = ({
  dish,
  onClose,
  onAddToCart
}) => {
  if (!dish) return null;

  const [quantity, setQuantity] = useState(1);
  const [cookingPreference, setCookingPreference] = useState('À point (recommandé)');
  const [selectedCheese, setSelectedCheese] = useState({ name: 'Cheddar fondant classique', price: 0 });
  const [selectedExtras, setSelectedExtras] = useState<Array<{ name: string; price: number }>>([]);
  const [selectedSauce, setSelectedSauce] = useState({ name: 'Sauce secrète Woudy', price: 0 });
  const [specialNotes, setSpecialNotes] = useState('');

  const isBurger = dish.category.toLowerCase().includes('burger') || dish.name.toLowerCase().includes('burger');

  const cookingOptions = [
    { label: 'À point (recommandé, juteux & doré)', value: 'À point (recommandé)' },
    { label: 'Bien cuit (croustillant)', value: 'Bien cuit' },
    { label: 'Saignant (cœur rosé)', value: 'Saignant' }
  ];

  const cheeseOptions = [
    { name: 'Cheddar fondant affiné (inclus)', price: 0 },
    { name: 'Double Cheddar fondant', price: 700 },
    { name: 'Raclette fumée coulante', price: 600 },
    { name: 'Sans fromage', price: 0 }
  ];

  const extrasAvailable = [
    { name: 'Bacon croustillant grillé', price: 600 },
    { name: 'Oignons caramélisés au beurre doux', price: 400 },
    { name: 'Œuf au plat coulant', price: 400 },
    { name: 'Piments Jalapeños & Habanero', price: 300 },
    { name: 'Extra Steak Smash Angus', price: 1800 }
  ];

  const sauceChoices = [
    { name: 'Sauce secrète Woudy', price: 0 },
    { name: 'Mayonnaise Truffée maison', price: 300 },
    { name: 'Sauce BBQ fumée au bois', price: 0 },
    { name: 'Sauce piquante dynamite', price: 0 }
  ];

  const toggleExtra = (extra: { name: string; price: number }) => {
    if (selectedExtras.some(e => e.name === extra.name)) {
      setSelectedExtras(selectedExtras.filter(e => e.name !== extra.name));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
  };

  // Calculate unit price including options
  const extrasTotal = selectedExtras.reduce((sum, e) => sum + e.price, 0);
  const unitPrice = dish.price + selectedCheese.price + selectedSauce.price + extrasTotal;
  const totalPrice = unitPrice * quantity;

  const handleConfirm = () => {
    const options: CartItemOption[] = [];
    if (isBurger) {
      options.push({ category: 'Cuisson', name: cookingPreference, priceDelta: 0 });
      if (selectedCheese.name) {
        options.push({ category: 'Fromage', name: selectedCheese.name, priceDelta: selectedCheese.price });
      }
      options.push({ category: 'Sauce', name: selectedSauce.name, priceDelta: selectedSauce.price });
      selectedExtras.forEach(e => {
        options.push({ category: 'Extra', name: e.name, priceDelta: e.price });
      });
    }

    onAddToCart(dish, quantity, options, specialNotes);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-neutral-200">
        
        {/* Header with Image & Close */}
        <div className="relative h-44 sm:h-52 w-full bg-neutral-100 shrink-0">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-neutral-800 flex items-center justify-center shadow-md transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-3 left-4 bg-neutral-900/80 backdrop-blur-md text-white px-3 py-1 rounded-xl text-xs font-bold">
            {dish.category}
          </div>
        </div>

        {/* Scrollable Customization Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-neutral-800">
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900 font-display">
              {dish.name}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1 leading-relaxed">
              {dish.description}
            </p>
            <div className="mt-2 text-base font-black text-[#FF5400]">
              {dish.price.toLocaleString('fr-FR')} FCFA
            </div>
          </div>

          {/* If Burger or customizable item, show Foody customization steps */}
          {isBurger && (
            <>
              {/* 1. Cuisson */}
              <div className="space-y-2.5 pt-3 border-t border-neutral-100">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-neutral-900 uppercase tracking-wider">
                    1. Cuisson de la viande
                  </label>
                  <span className="text-[11px] font-bold text-[#FF5400] bg-orange-50 px-2 py-0.5 rounded">
                    Requis
                  </span>
                </div>
                <div className="space-y-1.5">
                  {cookingOptions.map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                        cookingPreference === opt.value
                          ? 'border-[#FF5400] bg-orange-50/50 font-bold text-neutral-900'
                          : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                      }`}
                    >
                      <span>{opt.label}</span>
                      <input
                        type="radio"
                        name="cooking"
                        value={opt.value}
                        checked={cookingPreference === opt.value}
                        onChange={() => setCookingPreference(opt.value)}
                        className="accent-[#FF5400]"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* 2. Fromage */}
              <div className="space-y-2.5 pt-3 border-t border-neutral-100">
                <label className="text-xs font-black text-neutral-900 uppercase tracking-wider block">
                  2. Choix du Fromage
                </label>
                <div className="space-y-1.5">
                  {cheeseOptions.map((opt) => (
                    <label
                      key={opt.name}
                      className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                        selectedCheese.name === opt.name
                          ? 'border-[#FF5400] bg-orange-50/50 font-bold text-neutral-900'
                          : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                      }`}
                    >
                      <span>{opt.name}</span>
                      <div className="flex items-center gap-2">
                        {opt.price > 0 && (
                          <span className="text-[11px] font-bold text-[#FF5400]">
                            +{opt.price.toLocaleString('fr-FR')} F
                          </span>
                        )}
                        <input
                          type="radio"
                          name="cheese"
                          checked={selectedCheese.name === opt.name}
                          onChange={() => setSelectedCheese(opt)}
                          className="accent-[#FF5400]"
                        />
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* 3. Extras Gourmands */}
              <div className="space-y-2.5 pt-3 border-t border-neutral-100">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-neutral-900 uppercase tracking-wider">
                    3. Extras & Suppléments
                  </label>
                  <span className="text-[11px] text-neutral-400">Optionnel</span>
                </div>
                <div className="space-y-1.5">
                  {extrasAvailable.map((extra) => {
                    const isChecked = selectedExtras.some(e => e.name === extra.name);
                    return (
                      <label
                        key={extra.name}
                        className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                          isChecked
                            ? 'border-[#FF5400] bg-orange-50/50 font-bold text-neutral-900'
                            : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                        }`}
                      >
                        <span>{extra.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-[#FF5400]">
                            +{extra.price.toLocaleString('fr-FR')} F
                          </span>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleExtra(extra)}
                            className="w-4 h-4 accent-[#FF5400] rounded"
                          />
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* 4. Sauce d'accompagnement */}
              <div className="space-y-2.5 pt-3 border-t border-neutral-100">
                <label className="text-xs font-black text-neutral-900 uppercase tracking-wider block">
                  4. Sauce préférée
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {sauceChoices.map((s) => (
                    <button
                      key={s.name}
                      type="button"
                      onClick={() => setSelectedSauce(s)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        selectedSauce.name === s.name
                          ? 'border-[#FF5400] bg-orange-50 font-bold text-[#FF5400]'
                          : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                      }`}
                    >
                      <span className="block truncate">{s.name}</span>
                      {s.price > 0 ? (
                        <span className="text-[10px] text-[#FF5400]">+{s.price} F</span>
                      ) : (
                        <span className="text-[10px] text-neutral-400">Inclus</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Instructions pour la cuisine */}
          <div className="space-y-2 pt-3 border-t border-neutral-100">
            <label className="text-xs font-black text-neutral-900 uppercase tracking-wider block">
              Instructions spéciales (Allergies, sans oignon...)
            </label>
            <textarea
              rows={2}
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              placeholder="Ex: Pas de sauce dans le burger, bien grillé svp..."
              className="w-full p-3 text-xs border border-neutral-200 rounded-xl focus:outline-none focus:border-[#FF5400] text-neutral-800 placeholder-neutral-400 resize-none"
            />
          </div>
        </div>

        {/* Bottom Bar: Quantity & Add CTA */}
        <div className="p-4 sm:p-5 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between gap-4 shrink-0">
          {/* Stepper */}
          <div className="flex items-center gap-2 bg-white border border-neutral-200 rounded-2xl p-1 shadow-xs">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-extrabold text-sm text-neutral-900">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add CTA */}
          <button
            onClick={handleConfirm}
            className="flex-1 bg-[#FF5400] hover:bg-[#E04B00] text-white font-extrabold text-xs sm:text-sm py-3.5 px-4 rounded-2xl shadow-sm hover:shadow-md hover:shadow-orange-500/20 transition-all cursor-pointer flex items-center justify-between"
          >
            <span>Ajouter au panier</span>
            <span className="bg-white/20 px-2 py-0.5 rounded-lg text-xs font-black">
              {totalPrice.toLocaleString('fr-FR')} FCFA
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};
