/// <reference types="vite/client" />

/** Variables définies dans `.env` / `.env.development`. */
interface ImportMetaEnv {
  readonly VITE_DELIVERY_MINUTES?: string;
  readonly VITE_PARTNER_PORTAL_URL?: string;
  readonly VITE_PARTNER_REGISTER_URL?: string;
  readonly VITE_CLIENT_APP_IOS_URL?: string;
  readonly VITE_CLIENT_APP_ANDROID_URL?: string;
  readonly VITE_COURIER_APP_IOS_URL?: string;
  readonly VITE_COURIER_APP_ANDROID_URL?: string;
  readonly VITE_WHATSAPP_NUMBER?: string;
  readonly VITE_WHATSAPP_DISPLAY?: string;
  readonly VITE_PHONE_NUMBER?: string;
  readonly VITE_PHONE_DISPLAY?: string;
  readonly VITE_EMAIL_INFO?: string;
  readonly VITE_EMAIL_SUPPORT?: string;
  readonly VITE_INSTAGRAM_URL?: string;
  readonly VITE_INSTAGRAM_HANDLE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
