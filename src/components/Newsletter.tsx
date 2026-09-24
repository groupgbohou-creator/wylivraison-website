import React, { useState } from 'react';
import { Mail, Gift, CheckCircle2, Copy, Sparkles, Send } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [neighborhood, setNeighborhood] = useState('Deux Plateaux');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmitted(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText('WOUDY2026');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
  };

  return (
    <section className="py-16 sm:py-20 bg-neutral-900 text-white relative overflow-hidden border-b border-neutral-800">
      
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-neutral-800/90 to-neutral-900/90 rounded-3xl p-8 sm:p-12 border border-neutral-700/80 shadow-2xl">
          
          <div className="max-w-2xl mx-auto text-center space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold uppercase tracking-wider">
              <Gift className="w-3.5 h-3.5" />
              <span>Offre de Bienvenue Cocody</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
              Recevez <span className="text-[#FF5400]">2 000 FCFA</span> de réduction sur votre première commande
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Inscrivez-vous à la newsletter Woudy pour recevoir nos bons plans secrets de Cocody, les nouveaux restaurants ajoutés chaque semaine et des livraisons gratuites le week-end.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="mt-8 space-y-3 sm:space-y-0 sm:flex sm:gap-3 max-w-xl mx-auto text-left">
                
                {/* Email Input */}
                <div className="relative flex-1">
                  <Mail className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse email"
                    className="w-full pl-10 pr-4 py-3 bg-neutral-900 text-white rounded-xl text-sm border border-neutral-700 focus:outline-none focus:border-[#FF5400] placeholder-neutral-500"
                  />
                </div>

                {/* Neighborhood select */}
                <div className="sm:w-44">
                  <select
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className="w-full py-3 px-3 bg-neutral-900 text-white rounded-xl text-sm border border-neutral-700 focus:outline-none focus:border-[#FF5400] cursor-pointer"
                  >
                    <option value="Deux Plateaux">2 Plateaux</option>
                    <option value="Angré">Angré</option>
                    <option value="Cocody Centre">Cocody Centre</option>
                    <option value="Riviera">Riviera</option>
                    <option value="Zone 3">Zone 3</option>
                    <option value="Autre commune">Autre quartier</option>
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#FF5400] hover:bg-[#E04B00] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all cursor-pointer shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 whitespace-nowrap active:scale-98"
                >
                  <span>Recevoir mon code</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="mt-8 p-6 bg-orange-950/80 border border-orange-500/50 rounded-2xl animate-fadeIn">
                <div className="flex items-center justify-center gap-2 text-orange-400 mb-2">
                  <CheckCircle2 className="w-6 h-6" />
                  <h3 className="text-lg font-bold">Félicitations ! Votre code est prêt</h3>
                </div>
                <p className="text-xs text-neutral-300">
                  Un email de confirmation a été envoyé à <strong>{email}</strong> pour le secteur {neighborhood}.
                </p>

                <div className="mt-4 p-3 bg-neutral-900 rounded-xl border border-orange-800 inline-flex items-center gap-4">
                  <div>
                    <span className="text-[10px] text-neutral-400 block uppercase">Code de réduction :</span>
                    <span className="text-xl font-black font-display text-orange-400 tracking-wider">
                      WOUDY2026
                    </span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg bg-[#FF5400] hover:bg-[#E04B00] text-white transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedCode ? 'Copié !' : 'Copier'}</span>
                  </button>
                </div>
                <p className="text-[11px] text-neutral-400 mt-2">
                  Valable sur votre première commande via l'application Woudy.
                </p>
              </div>
            )}

            <div className="text-[11px] text-neutral-400 pt-2">
              🔒 Vos données restent confidentielles. Désinscription en 1 clic à tout moment. Pas de spams.
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
