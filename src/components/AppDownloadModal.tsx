import React, { useState } from 'react';
import { 
  X, 
  Apple, 
  Play, 
  MessageCircle, 
  QrCode, 
  Check, 
  Smartphone, 
  ShieldCheck, 
  Star,
  Send
} from 'lucide-react';
import { WoudyLogoMark } from './WoudyLogo';
import { GooglePlayLogo } from './GooglePlayLogo';
import { AppStoreLogo } from './AppStoreLogo';

interface AppDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppDownloadModal: React.FC<AppDownloadModalProps> = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return;
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setPhoneNumber('');
    }, 5000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 p-6 sm:p-8 text-white relative border-b border-neutral-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-2xl bg-neutral-900/90 border border-neutral-700/80 flex items-center justify-center p-1.5 shadow-sm">
              <WoudyLogoMark className="w-7 h-7" color="#FF5400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5400] animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                  Woudy Mobile App
                </span>
              </div>
              <span className="text-[10px] text-neutral-300 font-medium">Cocody • Abidjan</span>
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
            Téléchargez l'application Woudy
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-lg">
            Commandez vos repas favoris de Cocody en 3 clics, suivez votre livreur en direct et profitez de promotions exclusives.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Official Store Logos Visuals (from user assets) */}
          <div className="flex items-center justify-center gap-4 py-1">
            <div className="bg-white p-3 rounded-2xl border border-neutral-200 shadow-xs flex flex-col items-center justify-center w-28 h-28">
              <AppStoreLogo variant="full" className="w-20 h-20" />
            </div>
            <div className="bg-white p-3 rounded-2xl border border-neutral-200 shadow-xs flex flex-col items-center justify-center w-28 h-28">
              <GooglePlayLogo variant="full" className="w-20 h-20" />
            </div>
          </div>

          {/* Quick Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* iOS Button */}
            <a
              href="#ios-download"
              onClick={(e) => {
                e.preventDefault();
                // iOS redirection
              }}
              className="flex items-center justify-between p-4 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white transition-all shadow-sm group border border-neutral-700/60"
            >
              <AppStoreLogo variant="badge" theme="dark" />
              <span className="text-[10px] text-orange-400 font-bold bg-orange-950/60 px-2 py-0.5 rounded border border-orange-500/30">
                iOS 15+
              </span>
            </a>

            {/* Android Button */}
            <div className="flex flex-col">
              <a
                href="https://play.google.com/store/apps/details?id=ci.woudy.livreur&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white transition-all shadow-sm group border border-neutral-700/60 hover:border-[#FF5400]/50"
              >
                <GooglePlayLogo variant="badge" />
                <span className="text-[10px] text-orange-400 font-bold bg-orange-950/60 px-2 py-0.5 rounded border border-orange-500/30">
                  Android 9+
                </span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=ci.woudy.livreur&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-neutral-500 hover:text-[#FF5400] transition-colors mt-1.5 px-1 truncate flex items-center gap-1"
                title="https://play.google.com/store/apps/details?id=ci.woudy.livreur&pcampaignid=web_share"
              >
                <span className="underline">Lien direct : Woudy Livreur sur Play Store</span>
              </a>
            </div>

          </div>

          {/* Direct WhatsApp Ordering */}
          <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#FF5400] text-white flex items-center justify-center shrink-0 shadow-xs shadow-orange-500/20">
                <MessageCircle className="w-5 h-5 fill-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-900">
                  Pas envie d'installer l'application ?
                </h4>
                <p className="text-[11px] text-neutral-600">
                  Commandez directement sur WhatsApp en discutant avec un conseiller.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/2250720584171?text=Bonjour%20Woudy%2C%20je%20veux%20commander%20un%20plat"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-[#FF5400] hover:bg-[#E04B00] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer shadow-xs shadow-orange-500/20"
            >
              Ouvrir WhatsApp (+225 07 20 58 41 71)
            </a>
          </div>

          {/* Send SMS/WhatsApp link option */}
          <div className="border-t border-neutral-200 pt-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
              Recevoir le lien sur mon téléphone
            </h4>
            <form onSubmit={handleSendLink} className="flex gap-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-400">
                  +225
                </span>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="07 00 00 00 00"
                  className="w-full pl-14 pr-3 py-2.5 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:border-[#FF5400] text-neutral-800"
                />
              </div>
              <button
                type="submit"
                className="bg-[#FF5400] hover:bg-[#E04B00] text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors cursor-pointer shrink-0 flex items-center gap-1 shadow-xs shadow-orange-500/20"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Envoyer</span>
              </button>
            </form>

            {sentSuccess && (
              <p className="mt-2 text-xs font-semibold text-[#FF5400] flex items-center gap-1.5 animate-fadeIn">
                <Check className="w-4 h-4 text-[#FF5400]" />
                Lien de téléchargement envoyé par SMS & WhatsApp avec succès !
              </p>
            )}
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-neutral-500 pt-2 border-t border-neutral-100">
            <div>
              <span className="font-bold text-neutral-800 block">4.9 / 5</span>
              <span>1 200+ avis</span>
            </div>
            <div className="border-x border-neutral-200">
              <span className="font-bold text-[#FF5400] block">25-40 min</span>
              <span>Temps moyen</span>
            </div>
            <div>
              <span className="font-bold text-orange-600 block">0 FCFA</span>
              <span>Frais cachés</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
