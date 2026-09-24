import React, { useState } from 'react';
import { 
  Bike, 
  Smartphone, 
  Menu, 
  X, 
  MapPin, 
  Clock, 
  FileText, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { WoudyWordmark } from './WoudyWordmark';

interface NavbarProps {
  onOpenAppModal: () => void;
  onOpenPrpModal: () => void;
  onSelectZoneSection: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenAppModal, 
  onOpenPrpModal,
  onSelectZoneSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Comment ça marche', href: '#comment-ca-marche' },
    { label: 'Restaurants', href: '#restaurants' },
    { label: 'Zone de couverture', href: '#couverture' },
    { label: 'Pourquoi Woudy', href: '#avantages' },
    { label: 'À Propos', href: '#a-propos' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 transition-all">
      {/* Top Banner: Status & PRP Badge */}
      <div className="bg-neutral-900 text-neutral-300 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5400] animate-pulse"></span>
              En service à Cocody
            </span>
            <span className="hidden sm:inline text-neutral-400">|</span>
            <span className="hidden sm:flex items-center gap-1 text-neutral-300">
              <Clock className="w-3.5 h-3.5 text-[#FF5400]" />
              Livraisons 7j/7 de 10h00 à 23h30
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={onSelectZoneSection}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-xs"
            >
              <MapPin className="w-3 h-3 text-[#FF5400]" />
              <span>Cocody, 2 Plateaux, Angré, Zone 3</span>
            </button>
            <button
              onClick={onOpenPrpModal}
              className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 transition-colors cursor-pointer font-medium"
              title="Consulter le Plan de Réalisation du Produit (PRP)"
            >
              <FileText className="w-3 h-3 text-[#FF5400]" />
              <span>PRP v1.0 (Sept. 2026)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo - ONLY THE LOGO, NO TEXT */}
        <a href="#" className="flex items-center group focus:outline-none py-1" title="Woudy">
          <WoudyWordmark className="h-10 sm:h-11 w-auto transition-transform group-hover:scale-105" color="#FF5400" />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-neutral-700 hover:text-[#FF5400] transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF5400] group-hover:w-full transition-all duration-200"></span>
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#couverture"
            className="text-xs font-bold text-neutral-700 hover:text-[#FF5400] px-3 py-2 rounded-lg hover:bg-orange-50/50 transition-colors"
          >
            Vérifier mon adresse
          </a>
          <button
            onClick={onOpenAppModal}
            className="flex items-center gap-2 bg-[#FF5400] hover:bg-[#E04B00] text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:shadow-orange-500/20 transition-all cursor-pointer active:scale-98"
          >
            <Smartphone className="w-4 h-4" />
            <span>Télécharger l'App</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenAppModal}
            className="sm:hidden p-2 rounded-lg bg-orange-50 text-[#FF5400] hover:bg-orange-100 transition-colors"
            aria-label="Télécharger l'application"
          >
            <Smartphone className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-semibold text-neutral-800 hover:text-[#FF5400] p-2.5 rounded-lg hover:bg-orange-50/60 transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#FF5400] hover:bg-[#E04B00] text-white font-bold py-3 rounded-xl shadow-md shadow-orange-500/20"
            >
              <Smartphone className="w-5 h-5" />
              <span>Télécharger l'App Woudy (iOS & Android)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrpModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-neutral-100 text-neutral-700 font-medium py-2.5 rounded-xl text-sm hover:bg-neutral-200 transition-colors"
            >
              <FileText className="w-4 h-4 text-neutral-500" />
              <span>Plan de Réalisation du Produit (PRP v1.0)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
