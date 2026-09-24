import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  CheckCircle2, 
  Calendar, 
  DollarSign, 
  Users, 
  Target, 
  Activity, 
  MapPin, 
  Layers,
  ChevronRight
} from 'lucide-react';
import { PRP_SPECS } from '../data/mockData';

interface PrpViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrpViewerModal: React.FC<PrpViewerModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'personas' | 'calendar' | 'kpis' | 'budget'>('overview');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-8 flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-neutral-900 text-white p-6 flex items-center justify-between border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black font-display text-white">
                  Plan de Réalisation du Produit (PRP)
                </h3>
                <span className="text-[10px] bg-orange-500/20 text-orange-300 font-bold px-2 py-0.5 rounded-full border border-orange-500/30">
                  Version 1.0 • Septembre 2026
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Woudy Livraison – Site Vitrine & Plateforme Hyperlocale Abidjan
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

        {/* Tab Navigation */}
        <div className="bg-neutral-50 px-6 py-2 border-b border-neutral-200 flex gap-2 overflow-x-auto text-xs font-bold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-2 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>1. Résumé & Objectifs</span>
          </button>

          <button
            onClick={() => setActiveTab('personas')}
            className={`px-3 py-2 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'personas'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>3. Public Cible (3 Personas)</span>
          </button>

          <button
            onClick={() => setActiveTab('calendar')}
            className={`px-3 py-2 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'calendar'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>9. Calendrier (10-15 sem.)</span>
          </button>

          <button
            onClick={() => setActiveTab('kpis')}
            className={`px-3 py-2 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'kpis'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>10. Métriques & KPIs</span>
          </button>

          <button
            onClick={() => setActiveTab('budget')}
            className={`px-3 py-2 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'budget'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>11. Budget & Ressources</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-sm text-neutral-700 leading-relaxed">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-2xl">
                <h4 className="font-bold text-neutral-950 text-base mb-1">
                  1. Executive Summary & Proposition de Valeur
                </h4>
                <blockquote className="italic text-neutral-800 text-sm border-l-4 border-[#FF5400] pl-3 my-2 font-medium">
                  "Woudy Livraison = La meilleure nourriture de Cocody, livrée en 30 minutes"
                </blockquote>
                <p className="text-xs text-neutral-700">
                  Le site vitrine sert de point d'entrée digital pour les clients potentiels d'Abidjan (Cocody), explique la proposition de valeur et convertit les visiteurs en utilisateurs actifs de l'application mobile.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wider mb-3">
                  2.2 Matrice des Objectifs du Site
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                    <strong className="text-[#FF5400] block text-sm">Awareness (Notoriété)</strong>
                    <span>Établir la présence en ligne de Woudy et générer de la visibilité sur Abidjan.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                    <strong className="text-[#FF5400] block text-sm">Education (Pédagogie)</strong>
                    <span>Expliquer le concept hyper-local, les avantages et le mode d'utilisation en 3 clics.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                    <strong className="text-orange-600 block text-sm">Conversion (Acquisition)</strong>
                    <span>Convertir les visiteurs en utilisateurs inscrits et actifs de l'app mobile Woudy.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                    <strong className="text-orange-600 block text-sm">Engagement (Fidélisation)</strong>
                    <span>Maintenir une relation suivie via la newsletter de quartier et les promotions exclusives.</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wider mb-2">
                  Piliers de Différenciation
                </h4>
                <ul className="space-y-1.5 text-xs">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0" />
                    <span><strong>Localité :</strong> Partenaires de Cocody sélectionnés avec soin (Deux Plateaux, Angré, Danga, Riviera).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0" />
                    <span><strong>Rapidité :</strong> Temps de livraison garanti (25-40 min selon le lieu).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0" />
                    <span><strong>Qualité :</strong> Standards élevés de préparation et conditionnement thermique scellé.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0" />
                    <span><strong>Tarifs :</strong> Pas de frais de livraison excessifs, commande minimum basse.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5400] shrink-0" />
                    <span><strong>Sécurité :</strong> Livreurs vérifiés, sacs isothermes professionnels.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: PERSONAS */}
          {activeTab === 'personas' && (
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900 text-base mb-2">
                3. Profils Utilisateurs Cibles (Personas)
              </h4>

              {/* Persona 1 */}
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-neutral-900">Persona 1 : Le Jeune Professionnel</span>
                  <span className="text-[10px] bg-orange-100 text-orange-800 font-bold px-2 py-0.5 rounded">25-35 ans</span>
                </div>
                <p className="text-xs text-neutral-600">
                  <strong>Profession :</strong> Cadre, startup founder, consultant, banquier • <strong>Quartiers :</strong> Cocody, 2 Plateaux, Angré<br/>
                  <strong>Besoin :</strong> Solutions rapides et fiables pour déjeuner au bureau ou dîner sans perte de temps.<br/>
                  <strong>Comportement :</strong> Utilise régulièrement les apps mobiles, sensible au design, à la ponctualité et à la qualité.
                </p>
              </div>

              {/* Persona 2 */}
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-neutral-900">Persona 2 : La Famille Urbaine</span>
                  <span className="text-[10px] bg-orange-100 text-orange-800 font-bold px-2 py-0.5 rounded">30-50 ans</span>
                </div>
                <p className="text-xs text-neutral-600">
                  <strong>Situation :</strong> Couples avec enfants, actifs professionnellement • <strong>Quartiers :</strong> Cocody, Angré, Zone 3<br/>
                  <strong>Besoin :</strong> Repas de qualité pour toute la famille lors des soirs de semaine ou week-ends.<br/>
                  <strong>Comportement :</strong> Recherche de la variété culinaire, fiabilité absolue, emballage hygiénique propre.
                </p>
              </div>

              {/* Persona 3 */}
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-neutral-900">Persona 3 : L'Étudiant / Jeune Actif</span>
                  <span className="text-[10px] bg-neutral-100 text-neutral-800 font-bold px-2 py-0.5 rounded">18-28 ans</span>
                </div>
                <p className="text-xs text-neutral-600">
                  <strong>Situation :</strong> Étudiant ou jeune travailleur • <strong>Quartiers :</strong> Cocody, 2 Plateaux<br/>
                  <strong>Besoin :</strong> Options abordables, rapides, adaptées aux petits budgets (Garba, street food, sandwichs).<br/>
                  <strong>Comportement :</strong> Digital native, commande via Mobile Money, sensible aux offres promotionnelles.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: CALENDAR */}
          {activeTab === 'calendar' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-neutral-900 text-base">
                  9. Calendrier de Développement (10 - 15 semaines)
                </h4>
                <span className="text-xs font-bold text-[#FF5400]">Durée totale : 2.5 - 3.5 mois</span>
              </div>

              <div className="border border-neutral-200 rounded-2xl overflow-hidden">
                <table className="w-full text-xs text-left">
                  <thead className="bg-neutral-100 text-neutral-800 font-bold">
                    <tr>
                      <th className="p-3">Phase</th>
                      <th className="p-3">Tâches Principales</th>
                      <th className="p-3">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {PRP_SPECS.calendar.map((c, i) => (
                      <tr key={i} className="hover:bg-neutral-50">
                        <td className="p-3 font-bold text-neutral-900">{c.phase}</td>
                        <td className="p-3 text-neutral-600">{c.tasks}</td>
                        <td className="p-3 font-semibold text-[#FF5400]">{c.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: KPIS */}
          {activeTab === 'kpis' && (
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900 text-base">
                10. Métriques de Succès (KPIs Primaires)
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRP_SPECS.kpis.map((kpi, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between">
                    <div>
                      <span className="text-xs text-neutral-500 uppercase font-semibold">{kpi.period}</span>
                      <h5 className="text-sm font-bold text-neutral-900 mt-0.5">{kpi.metric}</h5>
                    </div>
                    <span className="text-xl font-black font-display text-[#FF5400] mt-2">
                      {kpi.target}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-neutral-100 text-xs text-neutral-600">
                <strong>Événements suivis :</strong> Clics "Télécharger l'app", Consultation des cartes restaurants, Soumissions newsletter, Interactions carte de couverture interactive, Temps passé par page.
              </div>
            </div>
          )}

          {/* TAB 5: BUDGET */}
          {activeTab === 'budget' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-neutral-900 text-base">
                  11. Budget & Ressources (Lancement)
                </h4>
                <span className="text-xs font-bold text-neutral-900 bg-neutral-200 px-2.5 py-1 rounded-lg">
                  Total : $9,000 - $15,500 USD
                </span>
              </div>

              <div className="border border-neutral-200 rounded-2xl overflow-hidden">
                <table className="w-full text-xs text-left">
                  <thead className="bg-neutral-100 text-neutral-800 font-bold">
                    <tr>
                      <th className="p-3">Poste Budgétaire</th>
                      <th className="p-3">Coût Estimé (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {PRP_SPECS.budget.map((b, i) => (
                      <tr key={i} className="hover:bg-neutral-50">
                        <td className="p-3 text-neutral-800 font-medium">{b.item}</td>
                        <td className="p-3 font-bold text-[#FF5400]">{b.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4">
                <h5 className="font-bold text-neutral-900 text-xs uppercase tracking-wider mb-2">
                  Équipe Projet Référencée au PRP
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {PRP_SPECS.team.map((t, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                      <span className="text-neutral-500 block">{t.role} :</span>
                      <strong className="text-neutral-900">{t.name}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
          <span>Document préparé pour Woudy Livraison | Septembre 2026</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded-xl cursor-pointer"
          >
            Fermer le document
          </button>
        </div>

      </div>
    </div>
  );
};
