import React, { useState } from 'react';
import { 
  Bike, 
  Store, 
  Send, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Smartphone, 
  Clock, 
  ShieldCheck, 
  FileText, 
  Sparkles, 
  AlertCircle, 
  HelpCircle, 
  ExternalLink, 
  MessageCircle 
} from 'lucide-react';
import { GooglePlayLogo } from '../GooglePlayLogo';
import { 
  trackApplyCourierClick, 
  trackBecomePartnerClick 
} from '../../utils/analytics';

interface PartnerApplicationSectionProps {
  initialTab?: 'courier' | 'restaurant';
}

export const PartnerApplicationSection: React.FC<PartnerApplicationSectionProps> = ({
  initialTab = 'courier'
}) => {
  const [activeTab, setActiveTab] = useState<'courier' | 'restaurant'>(initialTab);

  // --- Livreur Form State ---
  const [courierForm, setCourierForm] = useState({
    fullName: '',
    phone: '',
    whatsapp: '',
    zone: 'Cocody (2 Plateaux, Vallons, Riviera)',
    transport: 'Moto personnelle',
    smartphone: 'Android (Compatible avec l\'app Woudy Livreur)',
    experience: 'Moins de 6 mois / Débutant motivé',
    availability: 'Temps plein (6 à 7 jours / semaine)',
    idDocumentNumber: '',
    notes: ''
  });

  const [courierSubmitting, setCourierSubmitting] = useState(false);
  const [courierSubmittedDossier, setCourierSubmittedDossier] = useState<string | null>(null);

  // --- Restaurant Form State ---
  const [restaurantForm, setRestaurantForm] = useState({
    restaurantName: '',
    managerName: '',
    phone: '',
    email: '',
    zone: 'Cocody (2 Plateaux, Vallons, Riviera)',
    address: '',
    cuisineType: 'Burgers & Street Food',
    dailyOrders: '30 à 80 commandes / jour',
    currentDeliverySetup: 'Pas encore de livraison (Nouveau canal)',
    rccmNumber: '',
    notes: ''
  });

  const [restaurantSubmitting, setRestaurantSubmitting] = useState(false);
  const [restaurantSubmittedDossier, setRestaurantSubmittedDossier] = useState<string | null>(null);

  // Handlers
  const handleCourierSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!courierForm.fullName || !courierForm.phone) return;

    trackApplyCourierClick({
      location: 'courier_application_form',
      action: 'submit_application',
      details: {
        zone: courierForm.zone,
        transport: courierForm.transport,
      },
    });

    setCourierSubmitting(true);
    setTimeout(() => {
      const dossierId = `WDY-LIV-${Math.floor(10000 + Math.random() * 90000)}`;
      setCourierSubmittedDossier(dossierId);
      setCourierSubmitting(false);
    }, 700);
  };

  const handleRestaurantSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!restaurantForm.restaurantName || !restaurantForm.managerName || !restaurantForm.phone) return;

    trackBecomePartnerClick({
      location: 'restaurant_application_form',
      action: 'submit_application',
      details: {
        restaurantName: restaurantForm.restaurantName,
        zone: restaurantForm.zone,
        cuisineType: restaurantForm.cuisineType,
      },
    });

    setRestaurantSubmitting(true);
    setTimeout(() => {
      const dossierId = `WDY-RESTO-${Math.floor(10000 + Math.random() * 90000)}`;
      setRestaurantSubmittedDossier(dossierId);
      setRestaurantSubmitting(false);
    }, 700);
  };

  return (
    <section id="partenaires" className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#FF5400] uppercase tracking-wider">
            <span>Rejoignez l'Aventure Woudy</span>
            <span aria-hidden="true">·</span>
            <span>Recrutement & Partenariats</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight font-display">
            Espace Candidatures & Partenariats
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Que vous souhaitiez rouler avec nous ou booster les commandes de votre restaurant, postulez en ligne et intégrez le réseau Woudy en 24h à Abidjan.
          </p>
        </div>

        {/* Tab Switcher - Anti-slop interactive segmented button */}
        <div className="max-w-md mx-auto mb-10 p-1.5 bg-neutral-200/80 rounded-2xl flex items-center shadow-inner">
          <button
            onClick={() => {
              trackApplyCourierClick({ location: 'partner_tab_switcher', action: 'open_tab' });
              setActiveTab('courier');
            }}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'courier'
                ? 'bg-[#FF5400] text-white shadow-md'
                : 'text-neutral-700 hover:text-neutral-900'
            }`}
          >
            <Bike className="w-4 h-4" />
            <span>🚴 Postuler comme Livreur</span>
          </button>

          <button
            onClick={() => {
              trackBecomePartnerClick({ location: 'partner_tab_switcher', action: 'open_form' });
              setActiveTab('restaurant');
            }}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'restaurant'
                ? 'bg-neutral-900 text-white shadow-md'
                : 'text-neutral-700 hover:text-neutral-900'
            }`}
          >
            <Store className="w-4 h-4" />
            <span>🏪 Postuler comme Restaurant</span>
          </button>
        </div>

        {/* --- Tab 1: Formulaire Livreur --- */}
        {activeTab === 'courier' && (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-xl transition-all">
            
            {courierSubmittedDossier ? (
              <div className="text-center py-10 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block">
                    Candidature Livreur Enregistrée
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 font-display">
                    Félicitations, votre dossier a été reçu !
                  </h3>
                  <div className="inline-block bg-orange-50 border border-orange-200 text-[#FF5400] font-mono font-extrabold px-4 py-2 rounded-xl text-sm">
                    Dossier N° {courierSubmittedDossier}
                  </div>
                  <p className="text-sm text-neutral-600 max-w-lg mx-auto leading-relaxed pt-2">
                    Notre équipe des opérations livreurs d'Abidjan examine votre profil. Vous serez contacté par WhatsApp au <strong>{courierForm.phone || courierForm.whatsapp}</strong> sous 24 à 48 heures pour votre session de formation et la remise de votre sac thermique scellé.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/2250720584171?text=Bonjour%20Woudy%2C%20je%20viens%20de%20d%C3%A9poser%20ma%20candidature%20de%20livreur%20avec%20le%20dossier%20${courierSubmittedDossier}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirmer sur WhatsApp (+225 07 20 58 41 71)</span>
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=ci.woudy.livreur&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 border border-neutral-700"
                  >
                    <GooglePlayLogo variant="badge" />
                  </a>

                  <button
                    onClick={() => {
                      setCourierSubmittedDossier(null);
                      setCourierForm({
                        fullName: '',
                        phone: '',
                        whatsapp: '',
                        zone: 'Cocody (2 Plateaux, Vallons, Riviera)',
                        transport: 'Moto personnelle',
                        smartphone: 'Android (Compatible avec l\'app Woudy Livreur)',
                        experience: 'Moins de 6 mois / Débutant motivé',
                        availability: 'Temps plein (6 à 7 jours / semaine)',
                        idDocumentNumber: '',
                        notes: ''
                      });
                    }}
                    className="text-xs text-neutral-500 hover:text-neutral-900 font-semibold underline block sm:inline"
                  >
                    Déposer une autre candidature
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleCourierSubmit} className="space-y-8">
                
                {/* Form Introduction Header */}
                <div className="border-b border-neutral-100 pb-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FF5400] mb-1">
                    <Bike className="w-4 h-4" />
                    <span>Recrutement Flotte Woudy</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-neutral-900 font-display">
                    Formulaire de Recrutement Coursier
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                    Complétez ce formulaire pour rejoindre les livreurs Woudy. Rémunération attractive, équipements professionnels offerts et paiement garanti chaque semaine.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Nom complet */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Nom et Prénom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={courierForm.fullName}
                      onChange={(e) => setCourierForm({ ...courierForm, fullName: e.target.value })}
                      placeholder="Ex: Koné Ibrahim"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#FF5400] focus:ring-2 focus:ring-orange-500/20 text-xs sm:text-sm text-neutral-900 focus:outline-none"
                    />
                  </div>

                  {/* Téléphone Principal */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Numéro de Téléphone (Appels) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-500">
                        +225
                      </span>
                      <input
                        type="tel"
                        required
                        value={courierForm.phone}
                        onChange={(e) => setCourierForm({ ...courierForm, phone: e.target.value })}
                        placeholder="07 00 00 00 00"
                        className="w-full pl-16 pr-4 py-3 rounded-xl border border-neutral-300 focus:border-[#FF5400] focus:ring-2 focus:ring-orange-500/20 text-xs sm:text-sm text-neutral-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Numéro WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Numéro WhatsApp (Pour validation du dossier)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-500">
                        +225
                      </span>
                      <input
                        type="tel"
                        value={courierForm.whatsapp}
                        onChange={(e) => setCourierForm({ ...courierForm, whatsapp: e.target.value })}
                        placeholder="07 20 58 41 71"
                        className="w-full pl-16 pr-4 py-3 rounded-xl border border-neutral-300 focus:border-[#FF5400] focus:ring-2 focus:ring-orange-500/20 text-xs sm:text-sm text-neutral-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Commune / Zone d'Abidjan */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Zone de livraison préférée à Abidjan <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={courierForm.zone}
                      onChange={(e) => setCourierForm({ ...courierForm, zone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#FF5400] focus:ring-2 focus:ring-orange-500/20 text-xs sm:text-sm text-neutral-900 bg-white focus:outline-none"
                    >
                      <option value="Cocody (2 Plateaux, Vallons, Riviera)">Cocody (2 Plateaux, Vallons, Riviera)</option>
                      <option value="Cocody Angré & Aghien">Cocody Angré & Aghien</option>
                      <option value="Plateau (Centre des Affaires)">Plateau (Centre des Affaires)</option>
                      <option value="Marcory (Zone 4, Biétry, Anoumabo)">Marcory (Zone 4, Biétry, Anoumabo)</option>
                      <option value="Treichville & Koumassi">Treichville & Koumassi</option>
                      <option value="Yopougon">Yopougon</option>
                      <option value="Toutes communes (Flexible sur tout Abidjan)">Toutes communes (Flexible sur tout Abidjan)</option>
                    </select>
                  </div>

                  {/* Moyen de transport */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Moyen de transport disponible <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={courierForm.transport}
                      onChange={(e) => setCourierForm({ ...courierForm, transport: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#FF5400] focus:ring-2 focus:ring-orange-500/20 text-xs sm:text-sm text-neutral-900 bg-white focus:outline-none"
                    >
                      <option value="Moto personnelle (125cc ou +)">Moto personnelle (125cc ou +)</option>
                      <option value="Scooter">Scooter</option>
                      <option value="Vélo électrique / Vélo classique">Vélo électrique / Vélo classique</option>
                      <option value="Recherche moto en location-vente">Recherche moto en location-vente Woudy</option>
                      <option value="À pied / Transports en commun (Zone dense)">À pied / Transports (Zone dense)</option>
                    </select>
                  </div>

                  {/* Type de smartphone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Smartphone utilisé <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={courierForm.smartphone}
                      onChange={(e) => setCourierForm({ ...courierForm, smartphone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#FF5400] focus:ring-2 focus:ring-orange-500/20 text-xs sm:text-sm text-neutral-900 bg-white focus:outline-none"
                    >
                      <option value="Android (Compatible avec l'app Woudy Livreur)">Android (Compatible Woudy Livreur sur Play Store)</option>
                      <option value="iPhone (iOS)">iPhone (iOS)</option>
                      <option value="Pas encore de smartphone adapté">Pas encore de smartphone adapté</option>
                    </select>
                  </div>

                  {/* Expérience dans la livraison */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Expérience en livraison <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={courierForm.experience}
                      onChange={(e) => setCourierForm({ ...courierForm, experience: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#FF5400] focus:ring-2 focus:ring-orange-500/20 text-xs sm:text-sm text-neutral-900 bg-white focus:outline-none"
                    >
                      <option value="Moins de 6 mois / Débutant motivé">Moins de 6 mois / Débutant motivé</option>
                      <option value="6 mois à 1 an d'expérience">6 mois à 1 an d'expérience</option>
                      <option value="Plus d'1 an (Glovo, Yango, Jumia ou coursier indépendant)">Plus d'1 an (Glovo, Yango, Jumia ou indépendant)</option>
                      <option value="Plus de 3 ans de métier à Abidjan">Plus de 3 ans de métier à Abidjan</option>
                    </select>
                  </div>

                  {/* Disponibilité */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Disponibilité horaire <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={courierForm.availability}
                      onChange={(e) => setCourierForm({ ...courierForm, availability: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#FF5400] focus:ring-2 focus:ring-orange-500/20 text-xs sm:text-sm text-neutral-900 bg-white focus:outline-none"
                    >
                      <option value="Temps plein (6 à 7 jours / semaine)">Temps plein (6 à 7 jours / semaine)</option>
                      <option value="Soirées et Week-ends uniquement">Soirées et Week-ends uniquement</option>
                      <option value="Mi-temps flexible (Midis ou Soirs)">Mi-temps flexible (Midis ou Soirs)</option>
                    </select>
                  </div>

                  {/* CNI / Permis */}
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Numéro de CNI, Passeport ou Permis de conduire
                    </label>
                    <input
                      type="text"
                      value={courierForm.idDocumentNumber}
                      onChange={(e) => setCourierForm({ ...courierForm, idDocumentNumber: e.target.value })}
                      placeholder="Numéro de pièce d'identité (facilite la validation rapide)"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#FF5400] focus:ring-2 focus:ring-orange-500/20 text-xs sm:text-sm text-neutral-900 focus:outline-none"
                    />
                  </div>

                  {/* Motivations */}
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Message ou motivation particulière (facultatif)
                    </label>
                    <textarea
                      rows={3}
                      value={courierForm.notes}
                      onChange={(e) => setCourierForm({ ...courierForm, notes: e.target.value })}
                      placeholder="Parlez-nous de vos compétences, de vos quartiers de prédilection ou de vos attentes..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#FF5400] focus:ring-2 focus:ring-orange-500/20 text-xs sm:text-sm text-neutral-900 focus:outline-none"
                    ></textarea>
                  </div>

                </div>

                {/* Terms agreement note */}
                <div className="bg-orange-50/70 p-4 rounded-2xl border border-orange-200/80 flex items-start gap-3 text-xs text-neutral-700">
                  <ShieldCheck className="w-5 h-5 text-[#FF5400] shrink-0 mt-0.5" />
                  <p>
                    En soumettant votre candidature, vous certifiez l'exactitude de ces informations. Woudy s'engage à protéger vos données et à vous équiper gratuitement d'un sac thermique certifié dès validation de votre inscription.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={courierSubmitting}
                  className="w-full bg-[#FF5400] hover:bg-[#E04B00] text-white font-extrabold text-sm sm:text-base py-4 px-6 rounded-2xl transition-all shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50"
                >
                  {courierSubmitting ? (
                    <span>Traitement de votre candidature...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Envoyer ma candidature de Livreur Woudy</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        )}

        {/* --- Tab 2: Formulaire Restaurant --- */}
        {activeTab === 'restaurant' && (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-xl transition-all">
            
            {restaurantSubmittedDossier ? (
              <div className="text-center py-10 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block">
                    Demande Partenaire Enregistrée
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 font-display">
                    Bienvenue dans le réseau partenaires Woudy !
                  </h3>
                  <div className="inline-block bg-neutral-900 text-white font-mono font-extrabold px-4 py-2 rounded-xl text-sm">
                    Partenaire N° {restaurantSubmittedDossier}
                  </div>
                  <p className="text-sm text-neutral-600 max-w-lg mx-auto leading-relaxed pt-2">
                    Votre demande pour <strong>{restaurantForm.restaurantName}</strong> a été transmise à notre responsable des partenariats culinaires. Nous vous appellerons au <strong>{restaurantForm.phone}</strong> sous 24h pour planifier l'onboarding et l'installation de votre tablette de commande.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/2250720584171?text=Bonjour%20Woudy%2C%20je%20suis%20le%20responsable%20du%20restaurant%20${encodeURIComponent(restaurantForm.restaurantName)}%20(Dossier%20${restaurantSubmittedDossier})%2C%20je%20souhaite%20finaliser%20notre%20partenariat`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Échanger directement avec un chargé de compte (+225 07 20 58 41 71)</span>
                  </a>

                  <button
                    onClick={() => {
                      setRestaurantSubmittedDossier(null);
                      setRestaurantForm({
                        restaurantName: '',
                        managerName: '',
                        phone: '',
                        email: '',
                        zone: 'Cocody (2 Plateaux, Vallons, Riviera)',
                        address: '',
                        cuisineType: 'Burgers & Street Food',
                        dailyOrders: '30 à 80 commandes / jour',
                        currentDeliverySetup: 'Pas encore de livraison (Nouveau canal)',
                        rccmNumber: '',
                        notes: ''
                      });
                    }}
                    className="text-xs text-neutral-500 hover:text-neutral-900 font-semibold underline block sm:inline"
                  >
                    Inscrire un autre établissement
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRestaurantSubmit} className="space-y-8">
                
                {/* Form Introduction Header */}
                <div className="border-b border-neutral-100 pb-5 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 mb-1">
                        <Store className="w-4 h-4 text-[#FF5400]" />
                        <span>Programme Partenaires Restaurants</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-neutral-900 font-display">
                        Inscrire votre Restaurant / Maquis sur Woudy
                      </h3>
                    </div>

                    <a
                      href="http://213.199.59.185:3000/auth/register"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        trackBecomePartnerClick({
                          location: 'restaurant_form_header_btn',
                          action: 'open_portal',
                          details: { url: 'http://213.199.59.185:3000/auth/register' }
                        });
                      }}
                      className="inline-flex items-center justify-center gap-2 bg-[#FF5400] hover:bg-[#E04B00] text-white text-xs sm:text-sm font-extrabold px-4 py-2.5 rounded-xl shadow-xs transition-all active:scale-98 shrink-0"
                    >
                      <Store className="w-4 h-4" />
                      <span>Devenez restaurant partenaire</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600">
                    Bénéficiez immédiatement de notre flotte de coursiers scellés, de notre logiciel de caisse et touchez des milliers de clients fidèles à Abidjan. Remplissez le formulaire ci-dessous ou créez directement votre compte marchand via le bouton ci-dessus.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Nom du Restaurant */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Nom de l'Établissement <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={restaurantForm.restaurantName}
                      onChange={(e) => setRestaurantForm({ ...restaurantForm, restaurantName: e.target.value })}
                      placeholder="Ex: Le Grilladin des Vallons"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 text-xs sm:text-sm text-neutral-900 focus:outline-none"
                    />
                  </div>

                  {/* Nom du Gérant / Responsable */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Nom & Fonction du Responsable <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={restaurantForm.managerName}
                      onChange={(e) => setRestaurantForm({ ...restaurantForm, managerName: e.target.value })}
                      placeholder="Ex: M. Bamba (Propriétaire / Gérant)"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 text-xs sm:text-sm text-neutral-900 focus:outline-none"
                    />
                  </div>

                  {/* Téléphone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Téléphone Professionnel (Appels & WhatsApp) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-500">
                        +225
                      </span>
                      <input
                        type="tel"
                        required
                        value={restaurantForm.phone}
                        onChange={(e) => setRestaurantForm({ ...restaurantForm, phone: e.target.value })}
                        placeholder="27 31 94 45 68"
                        className="w-full pl-16 pr-4 py-3 rounded-xl border border-neutral-300 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 text-xs sm:text-sm text-neutral-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Email Professionnel <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={restaurantForm.email}
                      onChange={(e) => setRestaurantForm({ ...restaurantForm, email: e.target.value })}
                      placeholder="contact@restaurant.ci"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 text-xs sm:text-sm text-neutral-900 focus:outline-none"
                    />
                  </div>

                  {/* Commune d'implantation */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Commune d'implantation <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={restaurantForm.zone}
                      onChange={(e) => setRestaurantForm({ ...restaurantForm, zone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 text-xs sm:text-sm text-neutral-900 bg-white focus:outline-none"
                    >
                      <option value="Cocody (Deux Plateaux, Vallons, Danga)">Cocody (Deux Plateaux, Vallons, Danga)</option>
                      <option value="Cocody (Riviera, Palmeraie, Bonoumin)">Cocody (Riviera, Palmeraie, Bonoumin)</option>
                      <option value="Cocody Angré & Aghien">Cocody Angré & Aghien</option>
                      <option value="Plateau">Plateau</option>
                      <option value="Marcory (Zone 4, Biétry)">Marcory (Zone 4, Biétry)</option>
                      <option value="Treichville & Koumassi">Treichville & Koumassi</option>
                      <option value="Yopougon">Yopougon</option>
                      <option value="Autre commune d'Abidjan">Autre commune d'Abidjan</option>
                    </select>
                  </div>

                  {/* Type de cuisine */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Type de Cuisine / Spécialités <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={restaurantForm.cuisineType}
                      onChange={(e) => setRestaurantForm({ ...restaurantForm, cuisineType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 text-xs sm:text-sm text-neutral-900 bg-white focus:outline-none"
                    >
                      <option value="Burgers & Street Food">Burgers & Street Food</option>
                      <option value="Cuisine Ivoirienne & Maquis Chic">Cuisine Ivoirienne & Maquis Chic</option>
                      <option value="Grillades, Chawarma & Viandes">Grillades, Chawarma & Viandes</option>
                      <option value="Pizzeria & Pâtes Italiennes">Pizzeria & Pâtes Italiennes</option>
                      <option value="Poulet Croustillant & Tenders">Poulet Croustillant & Tenders</option>
                      <option value="Boulangerie, Desserts & Glaces">Boulangerie, Desserts & Glaces</option>
                      <option value="Cuisine Internationale & Fusion">Cuisine Internationale & Fusion</option>
                    </select>
                  </div>

                  {/* Adresse exacte */}
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Adresse Précise du Restaurant <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={restaurantForm.address}
                      onChange={(e) => setRestaurantForm({ ...restaurantForm, address: e.target.value })}
                      placeholder="Ex: Rue des Jardins, en face de la pharmacie, Cocody 2 Plateaux"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 text-xs sm:text-sm text-neutral-900 focus:outline-none"
                    />
                  </div>

                  {/* Volume de commandes estimé */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Volume moyen estimé / jour
                    </label>
                    <select
                      value={restaurantForm.dailyOrders}
                      onChange={(e) => setRestaurantForm({ ...restaurantForm, dailyOrders: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 text-xs sm:text-sm text-neutral-900 bg-white focus:outline-none"
                    >
                      <option value="Moins de 30 commandes / jour">Moins de 30 commandes / jour</option>
                      <option value="30 à 80 commandes / jour">30 à 80 commandes / jour</option>
                      <option value="80 à 150 commandes / jour">80 à 150 commandes / jour</option>
                      <option value="Plus de 150 commandes / jour">Plus de 150 commandes / jour</option>
                    </select>
                  </div>

                  {/* Flotte actuelle */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Situation de livraison actuelle
                    </label>
                    <select
                      value={restaurantForm.currentDeliverySetup}
                      onChange={(e) => setRestaurantForm({ ...restaurantForm, currentDeliverySetup: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 text-xs sm:text-sm text-neutral-900 bg-white focus:outline-none"
                    >
                      <option value="Pas encore de livraison (Nouveau canal)">Pas encore de livraison (Nouveau canal)</option>
                      <option value="Flotte interne propre (Motos existantes)">Flotte interne propre (Motos existantes)</option>
                      <option value="Déjà présent sur d'autres applications">Déjà présent sur d'autres applications</option>
                      <option value="Souhaite remplacer ou compléter sa logistique">Souhaite compléter sa logistique</option>
                    </select>
                  </div>

                  {/* RCCM */}
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Numéro RCCM ou Registre du Commerce (facultatif)
                    </label>
                    <input
                      type="text"
                      value={restaurantForm.rccmNumber}
                      onChange={(e) => setRestaurantForm({ ...restaurantForm, rccmNumber: e.target.value })}
                      placeholder="Ex: CI-ABJ-2024-B-XXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 text-xs sm:text-sm text-neutral-900 focus:outline-none"
                    />
                  </div>

                  {/* Remarques */}
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-extrabold text-neutral-800 uppercase tracking-wide">
                      Menu, besoins particuliers ou demande d'intégration
                    </label>
                    <textarea
                      rows={3}
                      value={restaurantForm.notes}
                      onChange={(e) => setRestaurantForm({ ...restaurantForm, notes: e.target.value })}
                      placeholder="Ex: Nous souhaitons intégrer notre carte de 15 burgers et 4 desserts d'ici la fin de semaine..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 text-xs sm:text-sm text-neutral-900 focus:outline-none"
                    ></textarea>
                  </div>

                </div>

                {/* Assurance Woudy */}
                <div className="bg-neutral-100 p-4 rounded-2xl border border-neutral-200 flex items-start gap-3 text-xs text-neutral-700">
                  <ShieldCheck className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                  <p>
                    <strong>Intégration sans risque :</strong> Vous ne payez aucun frais d'inscription. Notre équipe configure votre menu, vous remet une tablette prête à l'emploi et forme votre personnel en 30 minutes dans vos locaux.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={restaurantSubmitting}
                  className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-extrabold text-sm sm:text-base py-4 px-6 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50"
                >
                  {restaurantSubmitting ? (
                    <span>Enregistrement de votre établissement...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#FF5400]" />
                      <span>Inscrire mon Restaurant sur Woudy Livraison</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        )}

      </div>
    </section>
  );
};
