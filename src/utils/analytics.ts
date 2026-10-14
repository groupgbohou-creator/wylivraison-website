/**
 * Google Analytics 4 (GA4) Tracking Utility for Woudy
 * Measurement ID: G-CT1KNPQSZ9
 *
 * Le suivi des clics passe par un écouteur global (initGlobalAnalyticsListeners) :
 * - les liens sortants (stores, WhatsApp, Instagram, tel:, mailto:, portail partenaire)
 *   sont détectés automatiquement à partir de leur href ;
 * - l'attribut `data-ga-location` sur l'élément (ou un parent) précise l'emplacement du clic ;
 * - l'attribut `data-ga` (sur l'élément ou un parent) force un événement métier
 *   ('apply_courier', 'become_partner', 'coming_soon').
 */

import { PARTNER_REGISTER_URL } from '../config';

export const GA_MEASUREMENT_ID = 'G-CT1KNPQSZ9';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
    __ga4_listener_initialized?: boolean;
  }
}

/**
 * Safely dispatch an event to Google Analytics 4
 */
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  try {
    window.gtag('event', eventName, { send_to: GA_MEASUREMENT_ID, ...params });
    if (import.meta.env.DEV) {
      console.log(`[GA4 Event: ${eventName}]`, params);
    }
  } catch (err) {
    console.warn('[GA4 Error sending event]', err);
  }
};

export const trackDownloadAppClick = (params: {
  store: 'apple_app_store' | 'google_play' | 'smart' | 'coming_soon';
  location: string;
  url?: string;
}) => {
  trackEvent('download_app', {
    store_platform: params.store,
    click_location: params.location,
    link_url: params.url || '',
    event_category: 'App Download',
    event_label: `Download App (${params.store}) - ${params.location}`,
  });
};

export const trackBecomePartnerClick = (params: { location: string; url?: string }) => {
  trackEvent('become_partner', {
    partner_type: 'restaurant',
    partner_action: 'open_portal',
    click_location: params.location,
    link_url: params.url || '',
    event_category: 'Partner Acquisition',
    event_label: `Devenir Restaurant Partenaire - ${params.location}`,
  });
};

export const trackApplyCourierClick = (params: { location: string; url?: string }) => {
  trackEvent('apply_courier', {
    partner_type: 'livreur',
    courier_action: 'open_app',
    click_location: params.location,
    link_url: params.url || '',
    event_category: 'Courier Recruitment',
    event_label: `Postuler Comme Livreur - ${params.location}`,
  });
};

export const trackContactWoudy = (params: {
  method: 'phone' | 'email';
  contact_detail?: string;
  location: string;
}) => {
  trackEvent('contact_woudy', {
    contact_method: params.method,
    contact_detail: params.contact_detail || '',
    click_location: params.location,
    event_category: 'Customer Contact',
    event_label: `Contact Woudy (${params.method})`,
  });
};

export const trackWhatsAppClick = (params: { location: string; url?: string }) => {
  trackEvent('whatsapp_click', {
    whatsapp_purpose: params.url?.includes('commander') ? 'order' : 'support',
    click_location: params.location,
    event_category: 'Direct WhatsApp',
    event_label: `WhatsApp - ${params.location}`,
  });
};

export const trackInstagramClick = (params: { location: string; url?: string }) => {
  trackEvent('instagram_click', {
    social_network: 'Instagram',
    link_url: params.url || '',
    click_location: params.location,
    event_category: 'Social Link',
    event_label: `Instagram Click - ${params.location}`,
  });
};

/**
 * Global delegate catching every relevant click on the page.
 */
export const initGlobalAnalyticsListeners = () => {
  if (typeof window === 'undefined' || window.__ga4_listener_initialized) return;
  window.__ga4_listener_initialized = true;

  document.addEventListener(
    'click',
    (event) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>('a, button');
      if (!target) return;

      const href = target.getAttribute('href') || '';
      const location =
        target.closest<HTMLElement>('[data-ga-location]')?.dataset.gaLocation || 'unknown';
      const intent = target.closest<HTMLElement>('[data-ga]')?.dataset.ga;

      if (intent === 'apply_courier') return trackApplyCourierClick({ location, url: href });
      if (intent === 'become_partner' || href === PARTNER_REGISTER_URL)
        return trackBecomePartnerClick({ location, url: href });
      if (intent === 'coming_soon')
        return trackDownloadAppClick({ store: 'coming_soon', location });

      if (href.includes('play.google.com'))
        return trackDownloadAppClick({ store: 'google_play', location, url: href });
      if (href.includes('apps.apple.com'))
        return trackDownloadAppClick({ store: 'apple_app_store', location, url: href });
      if (href.includes('wa.me') || href.includes('whatsapp.com'))
        return trackWhatsAppClick({ location, url: href });
      if (href.includes('instagram.com')) return trackInstagramClick({ location, url: href });
      if (href.startsWith('tel:'))
        return trackContactWoudy({ method: 'phone', contact_detail: href.slice(4), location });
      if (href.startsWith('mailto:'))
        return trackContactWoudy({ method: 'email', contact_detail: href.slice(7), location });
    },
    { capture: true },
  );
};
