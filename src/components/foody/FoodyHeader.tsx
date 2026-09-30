import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  ShoppingBag, 
  User, 
  ChevronDown, 
  Clock, 
  Phone, 
  Mail,
  Sparkles,
  ArrowLeft,
  X,
  Smartphone,
  Bike,
  Store,
  Layers
} from 'lucide-react';
import { WoudyWordmark } from '../WoudyWordmark';
import { GooglePlayLogo } from '../GooglePlayLogo';
import { 
  trackWhatsAppClick, 
  trackContactWoudy, 
  trackDownloadAppClick, 
  trackBecomePartnerClick, 
  trackApplyCourierClick 
} from '../../utils/analytics';

interface FoodyHeaderProps {
  currentAddress: string;
  onAddressChange: (newAddress: string) => void;
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenAppModal: () => void;
  deliveryMode: 'delivery' | 'pickup';
  onDeliveryModeChange: (mode: 'delivery' | 'pickup') => void;
  onViewAllRestaurants?: () => void;
  showingAllRestaurants?: boolean;
  onNavigateSection?: (sectionId: string, partnerTab?: 'courier' | 'restaurant') => void;
}

export const FoodyHeader: React.FC<FoodyHeaderProps> = ({
  currentAddress,
  onAddressChange,
  cartCount,
  cartTotal,
  onOpenCart,
  searchQuery,
  onSearchChange,
  onOpenAppModal,
  deliveryMode,
  onDeliveryModeChange,
  onViewAllRestaurants,
  showingAllRestaurants = false,
  onNavigateSection
}) => {
  const [addressModalOpen, setAddressModalOpen] = useState(false);
  const [inputAddress, setInputAddress] = useState(currentAddress);

  const neighborhoods = [
    'Cocody (2 Plateaux, Angré, Riviera, Danga)',
    'Plateau (Centre des affaires)',
    'Marcory (Zone 4, Biétry, Résidentiel, VGE)',
    'Yopougon (Maroc, Selmer, Niangon, Toit Rouge)',
    'Treichville (Arras, Avenue 8, Belleville)',
    'Koumassi (Remblais, Divo, Prodomo)',
    'Port-Bouët (Vridi, Aéroport, Gonzagueville)',
    'Adjamé (220 Logements, Liberté)',
    'Bingerville (Feh Kessé, Akouédo Est)'
  ];

  const handleSaveAddress = (addr: string) => {
    onAddressChange(addr);
    setAddressModalOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200/90 shadow-xs">
      {/* Top Banner: Status & Quick Info */}
      <div className="bg-neutral-900 text-neutral-300 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-bold text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5400] animate-pulse"></span>
              Livraison partout à Abidjan
            </span>
            <span className="hidden md:inline text-neutral-500">•</span>
            <span className="hidden md:flex items-center gap-1 text-neutral-300 text-[11px]">
              <Clock className="w-3 h-3 text-[#FF5400]" />
              7j/7 de 10h00 à 23h30
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-[11px] flex-wrap">
            <a 
              href="https://wa.me/2250720584171?text=Bonjour%20Woudy%2C%20je%20souhaite%20commander"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsAppClick({
                  purpose: 'order',
                  location: 'header_top_bar',
                  phone: '+2250720584171',
                });
              }}
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
              title="Discuter sur WhatsApp"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>WhatsApp : +225 07 20 58 41 71</span>
            </a>

            <span className="text-neutral-600 hidden sm:inline">|</span>

            <a 
              href="tel:+2252731944568" 
              onClick={() => {
                trackContactWoudy({
                  method: 'phone',
                  contact_detail: '+2252731944568',
                  location: 'header_top_bar',
                });
              }}
              className="flex items-center gap-1 text-neutral-300 hover:text-white transition-colors font-medium"
              title="Appeler le service client"
            >
              <Phone className="w-3 h-3 text-[#FF5400]" />
              <span>Tél : +225 27 31 94 45 68</span>
            </a>

            <span className="text-neutral-600 hidden sm:inline">|</span>

            <a 
              href="mailto:support@woudys.com"
              onClick={() => {
                trackContactWoudy({
                  method: 'email',
                  contact_detail: 'support@woudys.com',
                  location: 'header_top_bar',
                });
              }}
              className="hidden md:flex items-center gap-1 text-neutral-300 hover:text-white transition-colors font-medium"
              title="Support Woudy"
            >
              <Mail className="w-3 h-3 text-[#FF5400]" />
              <span>support@woudys.com</span>
            </a>

            <span className="text-neutral-600 hidden lg:inline">|</span>

            <a 
              href="https://play.google.com/store/apps/details?id=ci.woudy.livreur&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackDownloadAppClick({
                  store: 'google_play',
                  location: 'header_top_bar_livreur_link',
                  url: 'https://play.google.com/store/apps/details?id=ci.woudy.livreur&pcampaignid=web_share',
                });
              }}
              className="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors text-neutral-300 font-medium"
            >
              <GooglePlayLogo variant="icon" className="w-3.5 h-3.5" />
              <span>App Livreur Play Store</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo - ONLY THE WOUDY LOGO AS REQUESTED, ABSOLUTELY NO TEXT */}
        <div className="flex items-center shrink-0">
          <button 
            onClick={onViewAllRestaurants}
            className="flex items-center group cursor-pointer focus:outline-none py-1"
            title="Woudy"
          >
            <WoudyWordmark className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-105" color="#FF5400" />
          </button>
        </div>

        {/* Address & Mode Selector (Foody Hallmark) */}
        <div className="hidden md:flex items-center gap-2 bg-neutral-100/90 hover:bg-neutral-200/80 p-1 rounded-2xl border border-neutral-200 transition-colors">
          {/* Mode Switcher */}
          <div className="flex items-center p-0.5 bg-white rounded-xl shadow-xs">
            <button
              onClick={() => onDeliveryModeChange('delivery')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                deliveryMode === 'delivery'
                  ? 'bg-[#FF5400] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              🛵 Livraison
            </button>
            <button
              onClick={() => onDeliveryModeChange('pickup')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                deliveryMode === 'pickup'
                  ? 'bg-[#FF5400] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              🛍️ À emporter
            </button>
          </div>

          {/* Address Button */}
          <button
            onClick={() => setAddressModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-800 font-semibold hover:text-[#FF5400] transition-colors cursor-pointer max-w-[220px]"
            title="Modifier l'adresse de livraison"
          >
            <MapPin className="w-3.5 h-3.5 text-[#FF5400] shrink-0" />
            <span className="truncate">{currentAddress}</span>
            <ChevronDown className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          </button>
        </div>

        {/* Live Search inside Menu */}
        <div className="flex-1 max-w-md mx-2 hidden sm:block">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Rechercher un smash burger, frites, sauce..."
              className="w-full pl-10 pr-9 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-50 focus:bg-white text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 border border-neutral-200 focus:border-[#FF5400] focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 p-1"
                aria-label="Effacer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Action Buttons: Toggle Restaurants, Account, Cart */}
        <div className="flex items-center gap-2 sm:gap-3">
          {onViewAllRestaurants && (
            <button
              onClick={onViewAllRestaurants}
              className="hidden lg:flex items-center gap-1.5 text-xs font-bold text-neutral-700 hover:text-[#FF5400] px-3 py-2 rounded-xl hover:bg-orange-50/60 border border-neutral-200 transition-colors cursor-pointer"
            >
              {showingAllRestaurants ? (
                <>
                  <ArrowLeft className="w-3.5 h-3.5 text-[#FF5400]" />
                  <span>Menu Burger Shop</span>
                </>
              ) : (
                <span>Autres restaurants Cocody</span>
              )}
            </button>
          )}

          {/* User Profile / Connexion */}
          <button
            onClick={onOpenAppModal}
            className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-[#FF5400] p-2 sm:px-3 sm:py-2 rounded-xl hover:bg-neutral-100 transition-colors cursor-pointer"
            title="Mon compte Woudy"
          >
            <User className="w-4 h-4 text-neutral-600" />
            <span className="hidden sm:inline">Connexion</span>
          </button>

          {/* Sticky Basket Trigger (Foody Hallmark) */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2.5 bg-[#FF5400] hover:bg-[#E04B00] text-white font-extrabold text-xs sm:text-sm px-3 sm:px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:shadow-orange-500/20 transition-all cursor-pointer active:scale-98"
            aria-label="Voir le panier"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-neutral-950 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline">Panier</span>
            {cartTotal > 0 && (
              <span className="bg-white/20 px-1.5 py-0.5 rounded text-[11px] sm:text-xs">
                {cartTotal.toLocaleString('fr-FR')} F
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar Row */}
      <div className="sm:hidden px-4 pb-3">
        <div className="relative">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Rechercher dans le menu..."
            className="w-full pl-9 pr-8 py-2 rounded-xl bg-neutral-100 text-xs text-neutral-800 placeholder-neutral-400 border border-neutral-200 focus:outline-none focus:border-[#FF5400]"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Services Navigation Bar - Navigation Intuitive & Accès Rapide à Tous les Services */}
      <div className="bg-neutral-100/90 border-t border-neutral-200/90 py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
          <nav className="flex items-center gap-1 sm:gap-2 text-xs font-extrabold flex-nowrap shrink-0">
            <a 
              href="#accueil" 
              onClick={(e) => {
                e.preventDefault();
                onNavigateSection?.('accueil');
              }}
              className="px-3 py-1.5 rounded-xl text-neutral-700 hover:text-[#FF5400] hover:bg-white transition-all whitespace-nowrap"
            >
              Accueil
            </a>

            <a 
              href="#commander" 
              onClick={(e) => {
                e.preventDefault();
                onNavigateSection?.('commander');
              }}
              className="px-3 py-1.5 rounded-xl text-[#FF5400] bg-orange-50 hover:bg-orange-100/80 border border-orange-200 transition-all whitespace-nowrap flex items-center gap-1.5 shadow-xs"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Commander / Menu</span>
            </a>

            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                onNavigateSection?.('services');
              }}
              className="px-3 py-1.5 rounded-xl text-neutral-700 hover:text-[#FF5400] hover:bg-white transition-all whitespace-nowrap"
            >
              Nos Services
            </a>

            <a 
              href="#telecharger" 
              onClick={(e) => {
                e.preventDefault();
                trackDownloadAppClick({ store: 'direct', location: 'header_nav' });
                onNavigateSection?.('telecharger');
              }}
              className="px-3 py-1.5 rounded-xl text-neutral-700 hover:text-[#FF5400] hover:bg-white transition-all whitespace-nowrap flex items-center gap-1"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Applications</span>
            </a>

            <a 
              href="#partenaires" 
              onClick={(e) => {
                e.preventDefault();
                trackApplyCourierClick({ location: 'header_nav', action: 'open_tab' });
                onNavigateSection?.('partenaires', 'courier');
              }}
              className="px-3 py-1.5 rounded-xl text-neutral-700 hover:text-[#FF5400] hover:bg-white transition-all whitespace-nowrap flex items-center gap-1"
            >
              <Bike className="w-3.5 h-3.5 text-[#FF5400]" />
              <span>Devenir Livreur</span>
            </a>

            <a 
              href="http://213.199.59.185:3000/auth/register" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackBecomePartnerClick({
                  location: 'header_nav',
                  action: 'open_portal',
                  details: { url: 'http://213.199.59.185:3000/auth/register' }
                });
              }}
              className="px-3 py-1.5 rounded-xl text-neutral-700 hover:text-[#FF5400] hover:bg-white transition-all whitespace-nowrap flex items-center gap-1 font-semibold"
            >
              <Store className="w-3.5 h-3.5 text-[#FF5400]" />
              <span>Devenez restaurant partenaire</span>
            </a>

            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                trackContactWoudy({ method: 'section_navigate', location: 'header_nav' });
                onNavigateSection?.('contact');
              }}
              className="px-3 py-1.5 rounded-xl text-neutral-700 hover:text-[#FF5400] hover:bg-white transition-all whitespace-nowrap"
            >
              Contact & Support
            </a>
          </nav>
        </div>
      </div>

      {/* Address Selection Modal */}
      {addressModalOpen && (
        <div className="fixed inset-0 z-50 bg-neutral-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-neutral-200 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#FF5400]" />
                <h3 className="text-base font-extrabold text-neutral-900 font-display">
                  Adresse de livraison à Abidjan
                </h3>
              </div>
              <button
                onClick={() => setAddressModalOpen(false)}
                className="p-1 rounded-full hover:bg-neutral-100 text-neutral-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-neutral-600">
              Woudy dessert désormais l'ensemble des communes d'Abidjan (Cocody, Plateau, Marcory, Yopougon, Treichville, Koumassi, etc.) avec une garantie de livraison chaude et rapide en sac isotherme scellé.
            </p>

            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-700">Sélectionnez votre quartier :</label>
              <div className="grid gap-1.5 max-h-48 overflow-y-auto">
                {neighborhoods.map((n) => (
                  <button
                    key={n}
                    onClick={() => handleSaveAddress(n)}
                    className={`text-left text-xs font-semibold px-3 py-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      currentAddress === n
                        ? 'border-[#FF5400] bg-orange-50 text-[#FF5400]'
                        : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                    }`}
                  >
                    <span>{n}</span>
                    {currentAddress === n && <span className="text-[10px] font-bold">Actuel</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
              <label className="text-xs font-bold text-neutral-700">Ou entrez votre adresse précise :</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputAddress}
                  onChange={(e) => setInputAddress(e.target.value)}
                  placeholder="Ex: Rue des Jardins, Immeuble Horizon..."
                  className="flex-1 px-3 py-2 text-xs border border-neutral-200 rounded-xl focus:outline-none focus:border-[#FF5400]"
                />
                <button
                  onClick={() => handleSaveAddress(inputAddress)}
                  className="bg-[#FF5400] text-white font-bold text-xs px-4 py-2 rounded-xl hover:bg-[#E04B00] transition-colors cursor-pointer"
                >
                  Valider
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
