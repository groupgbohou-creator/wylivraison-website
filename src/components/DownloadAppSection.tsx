import React, { useState } from 'react';
import { 
  Smartphone, 
  QrCode, 
  Apple, 
  Play, 
  MessageCircle, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Send 
} from 'lucide-react';
import { WoudyLogoMark } from './WoudyLogo';
import { GooglePlayLogo } from './GooglePlayLogo';
import { AppStoreLogo } from './AppStoreLogo';

interface DownloadAppSectionProps {
  onOpenAppModal: () => void;
}

export const DownloadAppSection: React.FC<DownloadAppSectionProps> = ({ onOpenAppModal }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [smsSent, setSmsSent] = useState(false);

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return;
    setSmsSent(true);
    setTimeout(() => {
      setPhoneNumber('');
      setSmsSent(false);
    }, 5000);
  };

  return (
    <section id="telecharger" className="py-16 sm:py-24 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white relative overflow-hidden border-b border-neutral-800">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-orange-300 bg-orange-950/60 px-3.5 py-1.5 rounded-full inline-block border border-orange-600/40">
              Disponible sur iOS & Android
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white leading-tight">
              Téléchargez l'application <span className="text-[#FF5400]">Woudy</span> & commandez en 3 clics
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
              Suivi GPS en direct du coursier, paiement simplifié par Mobile Money (Wave, Orange, Moov, MTN) ou à la livraison, et promotions exclusives réservées aux membres de l’app.
            </p>

            {/* Store Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Apple App Store */}
              <button
                onClick={onOpenAppModal}
                className="flex items-center bg-white text-neutral-950 hover:bg-neutral-100 font-bold px-5 py-2.5 rounded-2xl transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <AppStoreLogo variant="badge" theme="light" />
              </button>

              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=ci.woudy.livreur&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-700 font-bold px-5 py-2.5 rounded-2xl transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <GooglePlayLogo variant="badge" />
              </a>

              {/* WhatsApp Direct Order */}
              <a
                href="https://wa.me/2250720584171?text=Bonjour%20Woudy%2C%20je%20souhaite%20commander%20un%20repas%20%C3%A0%20Abidjan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-[#FF5400] hover:bg-[#E04B00] text-white font-bold px-5 py-3.5 rounded-2xl transition-all shadow-md shadow-orange-500/20 cursor-pointer text-sm"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Commander via WhatsApp (+225 07 20 58 41 71)</span>
              </a>
            </div>

            {/* Official Store Logos Showcase (matching provided assets) */}
            <div className="pt-2">
              <span className="text-[11px] text-neutral-400 block mb-2 font-medium">
                Logos officiels des boutiques d'applications :
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenAppModal}
                  className="bg-white p-2.5 rounded-2xl border border-neutral-200 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col items-center justify-center w-32 h-32 group"
                  title="Apple App Store"
                >
                  <AppStoreLogo variant="full" className="w-22 h-22 group-hover:scale-105 transition-transform" />
                </button>

                <a
                  href="https://play.google.com/store/apps/details?id=ci.woudy.livreur&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2.5 rounded-2xl border border-neutral-200 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col items-center justify-center w-32 h-32 group"
                  title="Google Play Store"
                >
                  <GooglePlayLogo variant="full" className="w-22 h-22 group-hover:scale-105 transition-transform" />
                </a>
              </div>
            </div>

            {/* Send Link by SMS or WhatsApp input */}
            <div className="pt-4 max-w-md">
              <span className="text-xs text-neutral-400 block mb-2 font-medium">
                Ou recevez le lien direct de téléchargement par SMS / WhatsApp :
              </span>
              <form onSubmit={handleSendLink} className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-400">
                    +225
                  </span>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="07 00 00 00 00"
                    className="w-full pl-14 pr-3 py-2.5 bg-neutral-900/90 text-white text-xs rounded-xl border border-neutral-700 focus:outline-none focus:border-[#FF5400]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#FF5400] hover:bg-[#E04B00] text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 shadow-xs shadow-orange-500/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Envoyer</span>
                </button>
              </form>

              {smsSent && (
                <p className="mt-2 text-xs font-bold text-orange-300 flex items-center gap-1.5 animate-fadeIn">
                  <Check className="w-4 h-4 text-[#FF5400]" />
                  Lien envoyé avec succès au numéro indiqué !
                </p>
              )}
            </div>

          </div>

          {/* Right: Phone Mockup & QR Code */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-center gap-6">
            
            {/* Interactive QR Code Card */}
            <div className="bg-white text-neutral-900 p-6 rounded-3xl shadow-2xl border border-neutral-200 text-center w-full max-w-[220px]">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF5400] flex items-center justify-center mx-auto mb-3">
                <QrCode className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-black font-display">Scanner pour installer</h4>
              <p className="text-[11px] text-neutral-500 mt-0.5 mb-3">
                Pointez la caméra de votre iPhone ou Android
              </p>

              {/* Simulated QR Code Graphic */}
              <div className="p-2 bg-neutral-900 rounded-2xl inline-block mx-auto">
                <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center p-2 relative">
                  <div className="grid grid-cols-5 gap-1 w-full h-full p-1 bg-neutral-100 rounded-lg">
                    {[...Array(25)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`rounded-xs ${
                          i % 2 === 0 || i % 7 === 0 ? 'bg-neutral-900' : 'bg-transparent'
                        }`}
                      ></div>
                    ))}
                  </div>
                  {/* Center Logo */}
                  <div className="absolute inset-0 m-auto w-8 h-8 rounded-lg bg-white border border-orange-200 text-[#FF5400] flex items-center justify-center p-1 shadow-md">
                    <WoudyLogoMark className="w-6 h-6" color="#FF5400" />
                  </div>
                </div>
              </div>

              <span className="block mt-3 text-[10px] text-[#FF5400] font-bold bg-orange-50 py-1 rounded-lg border border-orange-200">
                iOS 15+ & Android 9+
              </span>
            </div>

            {/* App Screen Graphic */}
            <div className="bg-neutral-900 rounded-3xl p-3 border-4 border-neutral-700 shadow-2xl w-full max-w-[240px] text-white">
              <div className="w-full aspect-[9/18] bg-neutral-950 rounded-2xl overflow-hidden p-3 flex flex-col justify-between border border-neutral-800">
                <div className="flex items-center justify-between text-[10px] text-neutral-400">
                  <span>9:41</span>
                  <span>Cocody Vallons 📍</span>
                </div>

                <div className="space-y-2 my-auto text-left">
                  <div className="p-2 bg-orange-950/70 rounded-xl border border-orange-800/70">
                    <span className="text-[9px] text-orange-400 font-bold uppercase">Livraison en 28 min</span>
                    <p className="text-xs font-bold text-white">Poulet Braisé & Alloco</p>
                  </div>
                  <div className="p-2 bg-neutral-900 rounded-xl border border-neutral-800">
                    <span className="text-[9px] text-orange-400 font-bold uppercase">Smash Burger</span>
                    <p className="text-xs font-bold text-white">Angré 8e Tranche</p>
                  </div>
                  <div className="p-2 bg-neutral-900 rounded-xl border border-neutral-800">
                    <span className="text-[9px] text-amber-400 font-bold uppercase">Pizza au feu de bois</span>
                    <p className="text-xs font-bold text-white">2 Plateaux Aghien</p>
                  </div>
                </div>

                <div className="text-center pt-2 border-t border-neutral-800">
                  <span className="text-[10px] text-orange-400 font-bold">Woudy App v1.0</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
