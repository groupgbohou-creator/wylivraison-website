import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isTerms = type === 'terms';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-8 flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="bg-neutral-900 text-white p-6 flex items-center justify-between border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
              {isTerms ? <FileText className="w-5 h-5" /> : <Shield className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white">
                {isTerms ? 'Conditions Générales d’Utilisation (CGU)' : 'Politique de Confidentialité'}
              </h3>
              <p className="text-xs text-neutral-400">
                Woudy Livraison SARL • Abidjan, Côte d’Ivoire
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed">
          {isTerms ? (
            <>
              <h4 className="font-bold text-neutral-900 text-sm">1. Objet du Service</h4>
              <p>
                Woudy Livraison fournit une plateforme intermédiaire de mise en relation entre des consommateurs situés à Abidjan (commune de Cocody et zones limitrophes), des restaurants partenaires indépendants et des livreurs certifiés.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm">2. Zone & Délais de Livraison</h4>
              <p>
                Les livraisons s'effectuent prioritairement dans les zones actives définies (Deux Plateaux, Angré, Cocody Centre, Riviera, Zone 3). L'estimation de 25 à 40 minutes est calculée à partir de la confirmation de la commande par la cuisine du restaurant.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm">3. Tarifs et Moyens de Paiement</h4>
              <p>
                Tous les prix des repas sont indiqués en Francs CFA (XOF) toutes taxes comprises. Les paiements peuvent être effectués via Mobile Money (Wave, Orange Money, Moov Money, MTN Money) ou en espèces directement auprès du coursier à la réception du scellé thermique.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm">4. Garantie Scellé Hygiène</h4>
              <p>
                Si le scellé d'inviolabilité thermique d'une commande est constaté ouvert ou dégradé à la remise par le livreur, le client est invité à refuser le colis et à contacter immédiatement le support WhatsApp (+225 07 20 58 41 71).
              </p>
            </>
          ) : (
            <>
              <h4 className="font-bold text-neutral-900 text-sm">1. Collecte des Données Personnelles</h4>
              <p>
                Woudy Livraison collecte uniquement les données strictement nécessaires à l'exécution du service de livraison : nom, adresse de livraison précise à Cocody/Abidjan, numéro de téléphone (pour contact coursier) et adresse email.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm">2. Utilisation des Coordonnées</h4>
              <p>
                Votre numéro de téléphone est exclusivement utilisé pour vous tenir informé du statut de votre commande et permettre au coursier de vous localiser. Vos données ne sont jamais vendues ni cédées à des tiers publicitaires.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm">3. Sécurité des Transactions</h4>
              <p>
                Les transactions Mobile Money s'opèrent directement via les passerelles sécurisées certifiées des opérateurs télécoms de Côte d'Ivoire. Woudy ne stocke aucun code secret de paiement.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm">4. Vos Droits</h4>
              <p>
                Conformément à la législation ivoirienne relative à la protection des données à caractère personnel, vous disposez d'un droit d'accès, de rectification et de suppression en écrivant à support@woudys.com ou info@woudys.com.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs rounded-xl cursor-pointer"
          >
            J'ai compris
          </button>
        </div>

      </div>
    </div>
  );
};
