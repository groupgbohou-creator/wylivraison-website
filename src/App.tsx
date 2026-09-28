import React, { useState } from 'react';
import { RESTAURANTS_DATA } from './data/mockData';
import { Dish, CartItem, CartItemOption } from './types';
import { FoodyHeader } from './components/foody/FoodyHeader';
import { FoodyBurger } from './components/foody/FoodyBurgerShopView';
import { FoodyWoudyFooter } from './components/foody/FoodyWoudyFooter';
import { AppDownloadModal } from './components/AppDownloadModal';
import { RestaurantCatalog } from './components/RestaurantCatalog';
import { CoverageMap } from './components/CoverageMap';
import { DownloadAppSection } from './components/DownloadAppSection';

export default function App() {
  const burgerShopRestaurant = RESTAURANTS_DATA[0]; // Burger Shop

  // Delivery & Address State
  const [currentAddress, setCurrentAddress] = useState<string>('Cocody 2 Plateaux Vallons');
  const [deliveryMode, setDeliveryMode] = useState<'delivery' | 'pickup'>('delivery');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Seed with a default favorite for instant discovery
    {
      cartItemId: 'seed-1',
      dish: burgerShopRestaurant.dishes[0], // Smash Beef Burger Double
      quantity: 1,
      options: [
        { category: 'Cuisson', name: 'À point (recommandé)', priceDelta: 0 },
        { category: 'Sauce', name: 'Sauce secrète Woudy', priceDelta: 0 }
      ],
      totalPrice: 4900
    }
  ]);
  const [promoCode, setPromoCode] = useState<string>('WOUDY15');
  const [discount, setDiscount] = useState<number>(735); // 15% on 4900
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  // App Download Modal
  const [appModalOpen, setAppModalOpen] = useState(false);

  // View mode: Burger Shop (default Foody clone) vs Explore other Cocody spots
  const [viewMode, setViewMode] = useState<'burger-shop' | 'all-restaurants'>('burger-shop');

  // Cart operations
  const handleAddToCart = (
    dish: Dish,
    quantity: number,
    options: CartItemOption[],
    instructions: string
  ) => {
    const optionsTotal = options.reduce((sum, opt) => sum + opt.priceDelta, 0);
    const unitPrice = dish.price + optionsTotal;
    const totalPrice = unitPrice * quantity;

    const newItem: CartItem = {
      cartItemId: `${dish.id}-${Date.now()}`,
      dish,
      quantity,
      options,
      specialInstructions: instructions,
      totalPrice
    };

    setCartItems((prev) => {
      const updated = [...prev, newItem];
      // recalculate promo if active
      recalculateDiscount(updated, promoCode);
      return updated;
    });
  };

  const handleUpdateCartItemQuantity = (cartItemId: string, delta: number) => {
    setCartItems((prev) => {
      const updated = prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            const unitPrice = item.totalPrice / item.quantity;
            return {
              ...item,
              quantity: newQty,
              totalPrice: unitPrice * newQty
            };
          }
          return item;
        })
        .filter(Boolean) as CartItem[];

      recalculateDiscount(updated, promoCode);
      return updated;
    });
  };

  const handleRemoveCartItem = (cartItemId: string) => {
    setCartItems((prev) => {
      const updated = prev.filter((item) => item.cartItemId !== cartItemId);
      recalculateDiscount(updated, promoCode);
      return updated;
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
    setDiscount(0);
    setPromoCode('');
  };

  const recalculateDiscount = (items: CartItem[], code: string) => {
    const sub = items.reduce((s, i) => s + i.totalPrice, 0);
    if (code === 'WOUDY15') {
      setDiscount(Math.round(sub * 0.15));
    } else if (code === 'WOUDY2000') {
      setDiscount(Math.min(sub, 2000));
    } else if (code === 'BURGER10') {
      setDiscount(Math.round(sub * 0.10));
    } else {
      setDiscount(0);
    }
  };

  const handleApplyPromo = (code: string) => {
    setPromoCode(code);
    recalculateDiscount(cartItems, code);
  };

  const handleRemovePromo = () => {
    setPromoCode('');
    setDiscount(0);
  };

  // Calculations
  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const effectiveDeliveryFee = deliveryMode === 'pickup' ? 0 : (cartSubtotal >= 10000 ? 0 : burgerShopRestaurant.deliveryFee);
  const cartTotal = Math.max(0, cartSubtotal + effectiveDeliveryFee - discount);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans selection:bg-[#FF5400] selection:text-white">
      
      {/* 1. Foody Header */}
      <FoodyHeader
        currentAddress={currentAddress}
        onAddressChange={setCurrentAddress}
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartDrawerOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenAppModal={() => setAppModalOpen(true)}
        deliveryMode={deliveryMode}
        onDeliveryModeChange={setDeliveryMode}
        onViewAllRestaurants={() => setViewMode(viewMode === 'burger-shop' ? 'all-restaurants' : 'burger-shop')}
        showingAllRestaurants={viewMode === 'all-restaurants'}
      />

      {/* 2. Main Content */}
      <main className="flex-grow">
        {viewMode === 'burger-shop' ? (
          // Cloned Foody Cypress layout for Burger Shop
          <FoodyBurgerShopView
            restaurant={burgerShopRestaurant}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            currentAddress={currentAddress}
            onOpenAddressChange={() => {}}
            deliveryMode={deliveryMode}
            onDeliveryModeChange={setDeliveryMode}
            cartItems={cartItems}
            onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
            onRemoveCartItem={handleRemoveCartItem}
            onClearCart={handleClearCart}
            onAddToCart={handleAddToCart}
            promoCode={promoCode}
            onApplyPromo={handleApplyPromo}
            onRemovePromo={handleRemovePromo}
            discount={discount}
            isCartDrawerOpen={isCartDrawerOpen}
            onCloseCartDrawer={() => setIsCartDrawerOpen(false)}
            onOpenCartDrawer={() => setIsCartDrawerOpen(true)}
          />
        ) : (
          // Multi-Restaurant Discovery Mode
          <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="bg-white p-6 rounded-3xl border border-neutral-200 flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-neutral-900 font-display">
                  Tous les restaurants partenaires Woudy à Abidjan
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                  Découvrez les maquis chic, pizzerias au feu de bois et adresses street food partout à Abidjan.
                </p>
              </div>
              <button
                onClick={() => setViewMode('burger-shop')}
                className="bg-[#FF5400] text-white font-extrabold text-xs px-4 py-2.5 rounded-xl hover:bg-[#E04B00] transition-colors cursor-pointer"
              >
                Retour au menu Burger Shop
              </button>
            </div>

            <RestaurantCatalog
              onOpenAppModal={() => setAppModalOpen(true)}
            />

            <CoverageMap
              initialAddress={currentAddress}
              onOpenAppModal={() => setAppModalOpen(true)}
            />

            <DownloadAppSection
              onOpenAppModal={() => setAppModalOpen(true)}
            />
          </div>
        )}
      </main>

      {/* 3. Official Woudy Legal Footer */}
      <FoodyWoudyFooter />

      {/* App Download Modal */}
      <AppDownloadModal
        isOpen={appModalOpen}
        onClose={() => setAppModalOpen(false)}
      />

    </div>
  );
}
