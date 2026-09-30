import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Store, 
  Bike, 
  HelpCircle,
  Briefcase,
  Instagram
} from 'lucide-react';
import { ContactFormData } from '../types';
import { 
  trackContactWoudy, 
  trackWhatsAppClick, 
  trackInstagramClick 
} from '../utils/analytics';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    neighborhood: 'Deux Plateaux',
    subject: 'client',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackContactWoudy({
      method: 'form_submit',
      contact_detail: `Subject: ${formData.subject} | Zone: ${formData.neighborhood}`,
      location: 'contact_section_form',
    });
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        neighborhood: 'Deux Plateaux',
        subject: 'client',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#FF5400] bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Échangeons Ensemble
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-display">
            Contactez l'équipe Woudy Livraison
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-3 leading-relaxed">
            Une question sur une commande, envie de rejoindre notre catalogue de restaurants ou de postuler comme livreur ? Nous vous répondons en moins de 2 heures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct WhatsApp Box */}
            <div className="bg-neutral-950 text-white rounded-3xl p-6 shadow-md border border-neutral-800 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF5400] flex items-center justify-center text-white shadow-md shadow-orange-500/30">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">WhatsApp Direct Support</h3>
                  <span className="text-xs text-orange-400 font-medium">Réponse immédiate en direct</span>
                </div>
              </div>

              <p className="text-xs text-neutral-300 mb-4 leading-relaxed">
                Le moyen le plus rapide d'échanger avec nos superviseurs à Abidjan pour le suivi d'une commande en direct ou une urgence.
              </p>

              <a
                href="https://wa.me/2250720584171?text=Bonjour%20Woudy%20Livraison%2C%20j%27ai%20une%20question"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick({
                    purpose: 'support',
                    location: 'contact_section_whatsapp_box',
                    phone: '+2250720584171',
                  });
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FF5400] hover:bg-[#E04B00] text-white font-bold text-xs py-3 rounded-xl shadow-xs shadow-orange-500/20 transition-colors cursor-pointer"
              >
                <span>Démarrer un chat WhatsApp (+225 07 20 58 41 71)</span>
              </a>
            </div>

            {/* General Info Cards */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-200/90 shadow-xs space-y-4">
              
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#FF5400]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-neutral-400">Siège Social</h4>
                  <p className="text-sm font-semibold text-neutral-800 mt-0.5">
                    Rue des Jardins, Cocody Deux Plateaux Vallons, Abidjan, Côte d'Ivoire
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#FF5400]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-neutral-400">Emails Officiels</h4>
                  <p className="text-sm font-semibold text-neutral-800 mt-0.5">
                    <a 
                      href="mailto:info@woudys.com" 
                      onClick={() => trackContactWoudy({ method: 'email', contact_detail: 'info@woudys.com', location: 'contact_info_card' })}
                      className="hover:text-[#FF5400] transition-colors"
                    >
                      info@woudys.com
                    </a>
                  </p>
                  <p className="text-xs text-neutral-500">
                    <a 
                      href="mailto:support@woudys.com" 
                      onClick={() => trackContactWoudy({ method: 'email', contact_detail: 'support@woudys.com', location: 'contact_info_card' })}
                      className="hover:text-[#FF5400] transition-colors"
                    >
                      support@woudys.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#FF5400]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-neutral-400">Standard Téléphonique</h4>
                  <p className="text-sm font-semibold text-neutral-800 mt-0.5">
                    <a 
                      href="tel:+2252731944568"
                      onClick={() => trackContactWoudy({ method: 'phone', contact_detail: '+2252731944568', location: 'contact_info_card' })}
                      className="hover:text-[#FF5400] transition-colors"
                    >
                      +225 27 31 94 45 68
                    </a>
                    {' / '}
                    <a 
                      href="tel:+2250720584171"
                      onClick={() => trackContactWoudy({ method: 'phone', contact_detail: '+2250720584171', location: 'contact_info_card' })}
                      className="hover:text-[#FF5400] transition-colors"
                    >
                      +225 07 20 58 41 71
                    </a>
                  </p>
                  <p className="text-xs text-neutral-500">7j/7 de 10h00 à 23h30</p>
                </div>
              </div>

              {/* Instagram Social Channel */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-[#FF5400]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-neutral-400">Instagram Officiel</h4>
                  <p className="text-sm font-semibold text-neutral-800 mt-0.5">
                    <a 
                      href="https://instagram.com/woudylivraison"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackInstagramClick({ location: 'contact_info_card', url: 'https://instagram.com/woudylivraison' })}
                      className="hover:text-[#FF5400] transition-colors inline-flex items-center gap-1 font-bold text-[#FF5400]"
                    >
                      <span>@woudylivraison sur Instagram</span>
                    </a>
                  </p>
                  <p className="text-xs text-neutral-500">Actualités gourmandes, promotions et coulisses</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-sm">
            
            {submitted ? (
              <div className="py-12 text-center space-y-3 animate-fadeIn">
                <div className="w-16 h-16 rounded-2xl bg-orange-100 text-[#FF5400] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 font-display">
                  Message envoyé avec succès !
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto">
                  Merci pour votre message. Notre équipe commerciale ou support à Cocody vous recontactera sous 2 heures par email ou WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Subject Selector */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 block mb-2">
                    Objet de votre message :
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, subject: 'client' })}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        formData.subject === 'client'
                          ? 'border-[#FF5400] bg-orange-50 text-[#FF5400] font-bold'
                          : 'border-neutral-200 hover:bg-neutral-50 text-neutral-700'
                      }`}
                    >
                      Client / Avis
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, subject: 'restaurant' })}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        formData.subject === 'restaurant'
                          ? 'border-[#FF5400] bg-orange-50 text-[#FF5400] font-bold'
                          : 'border-neutral-200 hover:bg-neutral-50 text-neutral-700'
                      }`}
                    >
                      Devenir Restaurant
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, subject: 'livreur' })}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        formData.subject === 'livreur'
                          ? 'border-[#FF5400] bg-orange-50 text-[#FF5400] font-bold'
                          : 'border-neutral-200 hover:bg-neutral-50 text-neutral-700'
                      }`}
                    >
                      Postuler Livreur
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, subject: 'entreprise' })}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        formData.subject === 'entreprise'
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-200 hover:bg-neutral-50 text-neutral-700'
                      }`}
                    >
                      Entreprise
                    </button>
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ex: Kouassi Emmanuel"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-[#FF5400] text-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1">
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre@email.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-[#FF5400] text-neutral-900"
                    />
                  </div>
                </div>

                {/* Phone & Neighborhood Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1">
                      Numéro de Téléphone (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+225 07..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-[#FF5400] text-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1">
                      Quartier / Commune à Abidjan
                    </label>
                    <select
                      value={formData.neighborhood}
                      onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-[#FF5400] text-neutral-900 bg-white"
                    >
                      <option value="Deux Plateaux">Deux Plateaux (Vallons, Aghien, Ena)</option>
                      <option value="Angré">Angré (8e Tranche, Château, Djibi)</option>
                      <option value="Cocody Centre">Cocody Centre & Danga</option>
                      <option value="Riviera">Riviera (Golf, Palmeraie, Attoban)</option>
                      <option value="Zone 3">Zone 3 & Marcory</option>
                      <option value="Autre">Autre commune</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1">
                    Votre message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Précisez votre demande, vos horaires ou les spécialités de votre restaurant..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-[#FF5400] text-neutral-900"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#FF5400] hover:bg-[#E04B00] text-white font-bold text-sm rounded-xl shadow-md shadow-orange-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Transmission en cours...</span>
                  ) : (
                    <>
                      <span>Envoyer ma demande</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
