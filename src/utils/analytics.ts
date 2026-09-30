/**
 * Google Analytics 4 (GA4) Tracking Utility for Woudy Livraison
 * Measurement ID: G-CT1KNPQSZ9
 */

export const GA_MEASUREMENT_ID = 'G-CT1KNPQSZ9';

// Global declaration for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Safely dispatch an event to Google Analytics 4
 */
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, {
        send_to: GA_MEASUREMENT_ID,
        ...params,
      });
      // Also log in development for easy verification
      if (import.meta.env.DEV) {
        console.log(`[GA4 Event: ${eventName}]`, params);
      }
    } catch (err) {
      console.warn('[GA4 Error sending event]', err);
    }
  }
};

/**
 * Track virtual page views (especially useful for Single Page Application navigation)
 */
export const trackPageView = (pageTitle: string, pagePath: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', 'page_view', {
        send_to: GA_MEASUREMENT_ID,
        page_title: pageTitle,
        page_location: window.location.href,
        page_path: pagePath,
      });
      if (import.meta.env.DEV) {
        console.log(`[GA4 PageView] ${pageTitle} -> ${pagePath}`);
      }
    } catch (err) {
      console.warn('[GA4 Error sending pageview]', err);
    }
  }
};

// ============================================================================
// Specialized Event Trackers Requested by User
// ============================================================================

/**
 * 1. Télécharger l'application (App Store, Google Play, SMS link, modal trigger)
 */
export const trackDownloadAppClick = (params: {
  store: 'apple_app_store' | 'google_play' | 'modal' | 'sms' | 'direct';
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

/**
 * 2. Devenir partenaire (Restaurant)
 */
export const trackBecomePartnerClick = (params: {
  location: string;
  action: 'open_portal' | 'open_form' | 'submit_application';
  details?: Record<string, any>;
}) => {
  trackEvent('become_partner', {
    partner_type: 'restaurant',
    partner_action: params.action,
    click_location: params.location,
    event_category: 'Partner Acquisition',
    event_label: `Devenir Restaurant Partenaire - ${params.action}`,
    ...params.details,
  });

  if (params.action === 'submit_application') {
    trackEvent('generate_lead', {
      lead_type: 'restaurant_partner',
      source: params.location,
    });
  }
};

/**
 * 3. Postuler comme livreur (Courier / Coursier)
 */
export const trackApplyCourierClick = (params: {
  location: string;
  action: 'open_tab' | 'submit_application';
  details?: Record<string, any>;
}) => {
  trackEvent('apply_courier', {
    partner_type: 'livreur',
    courier_action: params.action,
    click_location: params.location,
    event_category: 'Courier Recruitment',
    event_label: `Postuler Comme Livreur - ${params.action}`,
    ...params.details,
  });

  if (params.action === 'submit_application') {
    trackEvent('generate_lead', {
      lead_type: 'courier_application',
      source: params.location,
    });
  }
};

/**
 * 4. Contacter Woudy (Phone, Email, Contact Section, Form Submit)
 */
export const trackContactWoudy = (params: {
  method: 'phone' | 'email' | 'form_submit' | 'section_navigate';
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

  if (params.method === 'form_submit') {
    trackEvent('generate_lead', {
      lead_type: 'contact_form_message',
      source: params.location,
    });
  }
};

/**
 * 5. WhatsApp (Commandes directes WhatsApp ou Support)
 */
export const trackWhatsAppClick = (params: {
  purpose: 'order' | 'support' | 'share' | 'partner';
  location: string;
  phone?: string;
}) => {
  trackEvent('whatsapp_click', {
    whatsapp_purpose: params.purpose,
    phone_number: params.phone || '+2250720584171',
    click_location: params.location,
    event_category: 'Direct WhatsApp',
    event_label: `WhatsApp ${params.purpose} - ${params.location}`,
  });
};

/**
 * 6. Instagram
 */
export const trackInstagramClick = (params: {
  location: string;
  url?: string;
}) => {
  trackEvent('instagram_click', {
    social_network: 'Instagram',
    link_url: params.url || 'https://instagram.com/woudylivraison',
    click_location: params.location,
    event_category: 'Social Link',
    event_label: `Instagram Click - ${params.location}`,
  });
};

/**
 * 7. Liens et boutons externes importants
 */
export const trackExternalLinkClick = (params: {
  url: string;
  label: string;
  location: string;
}) => {
  trackEvent('external_link_click', {
    link_url: params.url,
    link_text: params.label,
    click_location: params.location,
    event_category: 'Outbound Navigation',
    event_label: `${params.label} -> ${params.url}`,
  });
};

/**
 * Global delegate to automatically catch and track relevant clicks on the DOM
 * This acts as a safety net so that all links (WhatsApp, Instagram, Store, Phone, Mail)
 * are tracked seamlessly without altering layout or behaviour.
 */
export const initGlobalAnalyticsListeners = () => {
  if (typeof window === 'undefined') return;

  // Avoid duplicate listeners
  if ((window as any).__ga4_listener_initialized) return;
  (window as any).__ga4_listener_initialized = true;

  document.addEventListener('click', (event) => {
    const target = (event.target as HTMLElement)?.closest('a, button');
    if (!target) return;

    const href = target.getAttribute('href') || '';
    const text = (target.textContent || '').trim();

    // 1. WhatsApp link detection
    if (href.includes('wa.me') || href.includes('whatsapp.com')) {
      trackWhatsAppClick({
        purpose: href.includes('commande') ? 'order' : 'support',
        location: 'auto_delegate',
      });
      return;
    }

    // 2. Instagram link detection
    if (href.includes('instagram.com')) {
      trackInstagramClick({
        location: 'auto_delegate',
        url: href,
      });
      return;
    }

    // 3. Google Play Store link detection
    if (href.includes('play.google.com')) {
      trackDownloadAppClick({
        store: 'google_play',
        location: 'auto_delegate',
        url: href,
      });
      return;
    }

    // 4. Apple App Store detection
    if (href.includes('apple.com') || href.includes('#telecharger') && text.toLowerCase().includes('app store')) {
      trackDownloadAppClick({
        store: 'apple_app_store',
        location: 'auto_delegate',
        url: href,
      });
      return;
    }

    // 5. Restaurant Partner External Portal
    if (href.includes('213.199.59.185')) {
      trackBecomePartnerClick({
        location: 'auto_delegate',
        action: 'open_portal',
        details: { url: href },
      });
      return;
    }

    // 6. Phone calls
    if (href.startsWith('tel:')) {
      trackContactWoudy({
        method: 'phone',
        contact_detail: href.replace('tel:', ''),
        location: 'auto_delegate',
      });
      return;
    }

    // 7. Mailto
    if (href.startsWith('mailto:')) {
      trackContactWoudy({
        method: 'email',
        contact_detail: href.replace('mailto:', ''),
        location: 'auto_delegate',
      });
      return;
    }
  }, { capture: true });
};
