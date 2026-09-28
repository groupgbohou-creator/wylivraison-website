import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Sparkles, 
  Flame, 
  ShieldCheck, 
  Bike, 
  Clock, 
  MapPin, 
  Info,
  ChevronRight,
  ShoppingBag,
  Filter
} from 'lucide-react';
import { Restaurant, Dish, CartItem, CartItemOption, OrderState } from '../../types';
import { BurgerShopHero } from './BurgerShopHero';
import { FoodyCategoryNav } from './FoodyCategoryNav';
import { FoodyMenuItemCard } from './FoodyMenuItemCard';
import { FoodyCartSidebar } from './FoodyCartSidebar';
import { ItemCustomizationModal } from './ItemCustomizationModal';
import { FoodyCheckoutModal } from './FoodyCheckoutModal';
import { LiveOrderTrackerModal } from './LiveOrderTrackerModal';
import { StoreInfoModal } from './StoreInfoModal';

interface FoodyBurgerShopViewProps {
  restaurant: Restaurant;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  currentAddress: string;
  onOpenAddressChange: () => void;
  deliveryMode: 'delivery' | 'pickup';
  onDeliveryModeChange: (mode: 'delivery' | 'pickup') => void;
  cartItems: CartItem[];
  onUpdateCartItemQuantity: (cartItemId: string, delta: number) => void;
  onRemoveCartItem: (cartItemId: string) => void;
  onClearCart: () => void;
  onAddToCart: (dish: Dish, quantity: number, options: CartItemOption[], instructions: string) => void;
  promoCode: string;
  onApplyPromo: (code: string) => void;
  onRemovePromo: () => void;
  discount: number;
  isCartDrawerOpen: boolean;
  onCloseCartDrawer: () => void;
  onOpenCartDrawer: () => void;
}

export function FoodyBurgerShopView({
  restaurant,
  searchQuery,
  onSearchChange,
  currentAddress,
  onOpenAddressChange,
  deliveryMode,
  onDeliveryModeChange,
  cartItems,
  onUpdateCartItemQuantity,
  onRemoveCartItem,
  onClearCart,
  onAddToCart,
  promoCode,
  onApplyPromo,
  onRemovePromo,
  discount,
  isCartDrawerOpen,
  onCloseCartDrawer,
  onOpenCartDrawer
}: FoodyBurgerShopViewProps) {
  const [activeCategory, setActiveCategory] = useState('Populaire');
  const [selectedDishForModal, setSelectedDishForModal] = useState<Dish | null>(null);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [storeInfoModalOpen, setStoreInfoModalOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState<OrderState | null>(null);

  // Group dishes by category
  const categories = useMemo(() => {
    const list: string[] = [];
    restaurant.dishes.forEach((d) => {
      if (!list.includes(d.category)) {
        list.push(d.category);
      }
    });
    return list;
  }, [restaurant.dishes]);

  const itemCountByCategory = useMemo(() => {
    const counts: Record<string, number> = {};
    restaurant.dishes.forEach((d) => {
      counts[d.category] = (counts[d.category] || 0) + 1;
    });
    return counts;
  }, [restaurant.dishes]);

  // Filtered dishes by search query
  const filteredDishes = useMemo(() => {
    if (!searchQuery.trim()) return restaurant.dishes;
    const q = searchQuery.toLowerCase();
    return restaurant.dishes.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q)
    );
  }, [restaurant.dishes, searchQuery]);

  const handleScrollToCategory = (cat: string) => {
    setActiveCategory(cat);
    const elementId = `cat-${cat.replace(/[^a-zA-Z0-9]/g, '-')}`;
    const el = document.getElementById(elementId);
    if (el) {
      const yOffset = -140; // Offset for sticky headers
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleQuickAdd = (dish: Dish) => {
    // If dish has customizable options (like a burger), open the customization modal
    if (dish.customizable || dish.category.includes('Burger')) {
      setSelectedDishForModal(dish);
    } else {
      // Direct add
      onAddToCart(dish, 1, [], '');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const effectiveDeliveryFee = deliveryMode === 'pickup' ? 0 : (subtotal >= 10000 ? 0 : restaurant.deliveryFee);
  const total = Math.max(0, subtotal + effectiveDeliveryFee - discount);

  return (
    <div className="bg-neutral-50 min-h-screen">
      
      {/* 1. Foody Cover Hero Section */}
      <BurgerShopHero
        restaurant={restaurant}
        onOpenStoreInfo={() => setStoreInfoModalOpen(true)}
        onSelectCategory={handleScrollToCategory}
      />

      {/* 2. Sticky Category Bar */}
      <FoodyCategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleScrollToCategory}
        itemCountByCategory={itemCountByCategory}
      />

      {/* 3. Main Two-Column Foody Layout (Menu Grid + Sticky Basket) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Menu Items by Category (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* If search query active, show search results */}
            {searchQuery.trim() !== '' ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-black text-neutral-900 font-display">
                    Résultats de recherche pour "{searchQuery}" ({filteredDishes.length})
                  </h3>
                  <button
                    onClick={() => onSearchChange('')}
                    className="text-xs text-[#FF5400] font-bold hover:underline"
                  >
                    Effacer la recherche
                  </button>
                </div>

                {filteredDishes.length === 0 ? (
                  <div className="bg-white rounded-3xl p-10 text-center border border-neutral-200">
                    <p className="text-sm text-neutral-600 font-semibold">
                      Aucun burger ou article ne correspond à votre recherche.
                    </p>
                    <button
                      onClick={() => onSearchChange('')}
                      className="mt-3 bg-[#FF5400] text-white text-xs font-bold px-4 py-2 rounded-xl"
                    >
                      Afficher tout le menu
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {filteredDishes.map((dish) => (
                      <FoodyMenuItemCard
                        key={dish.id}
                        dish={dish}
                        onSelect={(d) => setSelectedDishForModal(d)}
                        onQuickAdd={handleQuickAdd}
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // Standard Foody Category Grouping
              categories.map((cat) => {
                const categoryDishes = restaurant.dishes.filter((d) => d.category === cat);
                if (categoryDishes.length === 0) return null;

                const elementId = `cat-${cat.replace(/[^a-zA-Z0-9]/g, '-')}`;

                return (
                  <section key={cat} id={elementId} className="space-y-4 scroll-mt-36">
                    {/* Category Header */}
                    <div className="flex items-center justify-between border-b border-neutral-200/90 pb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-black text-neutral-900 font-display">
                          {cat}
                        </h3>
                        <span className="text-xs font-extrabold text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
                          {categoryDishes.length}
                        </span>
                      </div>
                    </div>

                    {/* Dishes Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {categoryDishes.map((dish) => (
                        <FoodyMenuItemCard
                          key={dish.id}
                          dish={dish}
                          onSelect={(d) => setSelectedDishForModal(d)}
                          onQuickAdd={handleQuickAdd}
                        />
                      ))}
                    </div>
                  </section>
                );
              })
            )}

            {/* Quality & Thermal Sealing Notice */}
            <div className="bg-orange-50/80 border border-orange-200 rounded-3xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FF5400] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-neutral-900">
                    Sac thermique scellé Woudy
                  </h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Tous nos burgers et frites voyagent dans des emballages certifiés avec bande d'inviolabilité pour une hygiène irréprochable.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setStoreInfoModalOpen(true)}
                className="text-xs font-bold text-[#FF5400] hover:underline whitespace-nowrap"
              >
                En savoir plus & allergènes
              </button>
            </div>

          </div>

          {/* Right Column: Sticky Foody Cart on Desktop (4 cols) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-36">
            <FoodyCartSidebar
              items={cartItems}
              onUpdateQuantity={onUpdateCartItemQuantity}
              onRemoveItem={onRemoveCartItem}
              onClearCart={onClearCart}
              deliveryMode={deliveryMode}
              onDeliveryModeChange={onDeliveryModeChange}
              currentAddress={currentAddress}
              onOpenAddressChange={onOpenAddressChange}
              deliveryFee={restaurant.deliveryFee}
              minOrder={restaurant.minOrder}
              promoCode={promoCode}
              onApplyPromo={onApplyPromo}
              onRemovePromo={onRemovePromo}
              discount={discount}
              onCheckout={() => setCheckoutModalOpen(true)}
            />
          </div>

        </div>
      </div>

      {/* Mobile Floating Cart Bottom Bar */}
      {cartItems.length > 0 && (
        <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40 animate-slideUp">
          <button
            onClick={onOpenCartDrawer}
            className="w-full bg-[#FF5400] hover:bg-[#E04B00] text-white font-extrabold p-4 rounded-2xl shadow-xl flex items-center justify-between cursor-pointer border border-white/20 active:scale-98 transition-all"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center text-xs font-black">
                {cartItems.reduce((s, i) => s + i.quantity, 0)}
              </div>
              <span className="text-sm">Voir mon panier</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-black bg-white/20 px-3 py-1 rounded-xl">
              <span>{total.toLocaleString('fr-FR')} FCFA</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      )}

      {/* Mobile Cart Drawer */}
      {isCartDrawerOpen && (
        <FoodyCartSidebar
          isMobileDrawer={true}
          onCloseMobileDrawer={onCloseCartDrawer}
          items={cartItems}
          onUpdateQuantity={onUpdateCartItemQuantity}
          onRemoveItem={onRemoveCartItem}
          onClearCart={onClearCart}
          deliveryMode={deliveryMode}
          onDeliveryModeChange={onDeliveryModeChange}
          currentAddress={currentAddress}
          onOpenAddressChange={onOpenAddressChange}
          deliveryFee={restaurant.deliveryFee}
          minOrder={restaurant.minOrder}
          promoCode={promoCode}
          onApplyPromo={onApplyPromo}
          onRemovePromo={onRemovePromo}
          discount={discount}
          onCheckout={() => {
            onCloseCartDrawer();
            setCheckoutModalOpen(true);
          }}
        />
      )}

      {/* Item Customization Modal */}
      {selectedDishForModal && (
        <ItemCustomizationModal
          dish={selectedDishForModal}
          onClose={() => setSelectedDishForModal(null)}
          onAddToCart={onAddToCart}
        />
      )}

      {/* Checkout Modal */}
      {checkoutModalOpen && (
        <FoodyCheckoutModal
          items={cartItems}
          subtotal={subtotal}
          deliveryFee={effectiveDeliveryFee}
          discount={discount}
          total={total}
          currentAddress={currentAddress}
          deliveryMode={deliveryMode}
          onClose={() => setCheckoutModalOpen(false)}
          onOrderSuccess={(order) => {
            setCheckoutModalOpen(false);
            onClearCart();
            setActiveOrder(order);
          }}
        />
      )}

      {/* Live Order Tracker Modal */}
      {activeOrder && (
        <LiveOrderTrackerModal
          order={activeOrder}
          onClose={() => setActiveOrder(null)}
        />
      )}

      {/* Store Info & Allergens Modal */}
      {storeInfoModalOpen && (
        <StoreInfoModal
          restaurant={restaurant}
          onClose={() => setStoreInfoModalOpen(false)}
        />
      )}

    </div>
  );
}

export default FoodyBurgerShopView;
